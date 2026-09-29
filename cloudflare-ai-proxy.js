/**
 * Cloudflare Worker: Free AI Proxy for B1-OSD-TEST
 * 
 * Instructions:
 * 1. Go to dash.cloudflare.com -> Workers & Pages -> Create Worker
 * 2. Paste this code
 * 3. Add an Environment Variable under Settings -> Variables:
 *    GEMINI_API_KEY = "your-google-ai-studio-gemini-key"
 * 4. Deploy! Paste your worker URL into the B1 app under AI Settings.
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const { prompt, context, systemPrompt } = await request.json();
      const apiKey = env.GEMINI_API_KEY;

      if (!apiKey) {
        return new Response(JSON.stringify({ error: "GEMINI_API_KEY not configured in worker environment" }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }

      let contextText = "";
      if (context) {
        contextText = `
[AKTUELLE PRÜFUNGSAUFGABE]:
- Prüfung: ${context.testTitle} (${context.partTitle})
- Aufgabe-ID: ${context.qid}
- Aufgabenstellung: "${context.questionText}"
${context.options ? `- Optionen: ${JSON.stringify(context.options)}` : ""}
- Richtige Lösung: "${context.correctAnswer}"
- Schüler-Antwort: "${context.userAnswer}"
${context.quote ? `- Textbeleg / Zitat: „${context.quote}“` : ""}
${context.whyCorrect ? `- Warum richtig: ${context.whyCorrect}` : ""}
${context.whyIncorrect ? `- Warum falsch: ${context.whyIncorrect}` : ""}
`;
      }

      const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

      const payload = {
        system_instruction: {
          parts: [{ text: systemPrompt || "Du bist ein B1 Deutschprüfung-Tutor." }]
        },
        contents: [
          {
            role: "user",
            parts: [{ text: `${contextText}\n\n[FRAGE DES SCHÜLERS AN DEN KI-TUTOR]:\n${prompt}` }]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 900
        }
      };

      const apiRes = await fetch(geminiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await apiRes.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Keine Antwort erhalten.";

      return new Response(JSON.stringify({ reply }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }
};
