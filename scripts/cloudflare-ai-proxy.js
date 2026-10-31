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
      const { prompt, context, systemPrompt, mode } = await request.json();
      const apiKey = env.GEMINI_API_KEY;

      if (!apiKey) {
        return new Response(JSON.stringify({ error: "GEMINI_API_KEY not configured in worker environment" }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }

      let payload;

      if (mode === 'translate') {
        const translateSystem = systemPrompt || "Du bist ein präziser deutsch-arabisch-französischer Sprachexperte für B1-Zertifikatsprüfungen (Goethe / ÖSD). Antworte AUSSCHLIESSLICH mit reinem JSON.";
        const translatePrompt = `Übersetze und analysiere das folgende deutsche Wort für einen B1-Prüfungskandidaten: "${prompt}"

Antworte AUSSCHLIESSLICH als gültiges JSON-Objekt mit genau dieser Struktur:
{
  "term": "Grundform / Lemma (z. B. aufgeben)",
  "display": "Wort mit Artikel falls Nomen (z. B. der Tisch (Nomen) oder aufgeben (Verb))",
  "pos": "Nomen | Verb | Adjektiv | Adverb | Redewendung",
  "article": "der | die | das | null",
  "forms": ["Grundform", "weitere wichtige Formen"],
  "defDe": "Kurze, einfache Definition auf Deutsch (B1-Niveau)",
  "defAr": "ترجمة عربية دقيقة وواضحة جدا",
  "defFr": "Traduction française précise et naturelle",
  "example": "Authentischer deutscher Beispielsatz auf B1-Niveau",
  "tip": "Prüfungsrelevanter B1-Tipp oder Synonym",
  "isValidGerman": true
}`;

        payload = {
          system_instruction: {
            parts: [{ text: translateSystem }]
          },
          contents: [
            {
              role: "user",
              parts: [{ text: translatePrompt }]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1200,
            responseMimeType: "application/json",
            thinkingConfig: { thinkingBudget: 0 }
          }
        };
      } else {
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

        payload = {
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
            maxOutputTokens: 3000,
            thinkingConfig: { thinkingBudget: 0 }
          }
        };
      }

      const models = ['gemini-3.5-flash', 'gemini-3.7-flash', 'gemini-3.8-flash'];
      let lastError = null;
      let reply = null;

      for (const model of models) {
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const apiRes = await fetch(geminiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const data = await apiRes.json().catch(() => ({}));
        if (apiRes.ok && data?.candidates?.[0]?.content?.parts?.[0]?.text) {
          reply = data.candidates[0].content.parts[0].text;
          break;
        } else {
          lastError = data?.error?.message || `Status ${apiRes.status}`;
          if (apiRes.status !== 503 && apiRes.status !== 429 && apiRes.status !== 404) {
            break;
          }
        }
      }

      if (!reply) {
        return new Response(JSON.stringify({ error: lastError || "Keine Antwort erhalten." }), {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
      }

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
