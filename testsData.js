/* ==========================================================================
   B1 LESEN PRÜFUNGSSIMULATION — MODELLSÄTZE & TESTDATEN
   Enthält alle Testdatensätze für Goethe / ÖSD B1 Prüfungssimulationen.
   Neue Tests können einfach als neues Objekt in das `modelTests`-Array
   eingefügt werden!
   ========================================================================== */

const modelTests = [
  /* ------------------------------------------------------------------------
     MODELLSATZ 1: GOETHE / ÖSD B1 ORIGINAL PRÜFUNGSSIMULATION
     ------------------------------------------------------------------------ */
  {
    id: "modellsatz-1",
    title: "Modellsatz 1 — Goethe / ÖSD Original",
    badge: "Modellsatz 1",
    examTitle: "Goethe / ÖSD B1 Prüfungssimulation",
    examSub: "Lesen (5 Teile) & Hören (4 Teile) · Modellsatz 1",
    timeTotal: 65,
    parts: [
      {
        id: 1,
        title: "Teil 1",
        time: 10,
        instructions: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
        articles: [{
          heading: "StefansAlltagsblog.at",
          sub: "Was so jeden Tag passiert …",
          meta: "Dienstag, 5. Juni",
          body: [
            "Dieser Tag fing wirklich sehr merkwürdig an: Beim Frühstück habe ich einen Unfall beobachtet! Wenn das Wetter schön ist, sitze ich morgens gern mit meinem Müsliteller auf meinem Balkon. Natürlich ist es auf meinem Balkon nicht besonders romantisch, schließlich wohne ich direkt am Sachsendamm, d. h. drei Stockwerke unter mir brausen morgens um halb neun die Autos vorbei, obwohl es eine Einbahnstraße ist. Ich kann die Autos nicht nur sehen, ich kann sie auch sehr gut hören. Heute Morgen war ich gerade fertig mit meinem Müsli, als plötzlich Bremsen kreischten, Leute schrien – und dann krachte es. Ich sah sofort hinunter auf die Straße: Ein kleiner Lieferwagen stand schräg auf der Straße, ein alter, schwarzer Mercedes war ihm hinten hineingefahren.",
            "Der Mercedesfahrer stieg aus, ein Herr in mittleren Jahren, und ging nach vorn zur Tür des Lieferwagens. Er machte die Tür auf, aber da war niemand. Inzwischen kamen immer mehr Leute dazu, die herumstanden und redeten. Ein paar Autos fuhren über den Gehweg an den beiden Autos vorbei, aber trotzdem bildete sich schnell eine lange Autoschlange. Der Mercedesfahrer telefonierte. Dann kam aus dem Haus gegenüber ein junger Mann angerannt, in einer Art Uniform, ohne Zweifel ein Paketfahrer. Er zog auch sofort sein Handy aus der Tasche und nicht lange hörte man das Polizeiauto, das in Gegenrichtung durch die Einbahnstraße kam.",
            "Ich bin dann zur Universität gegangen und habe nicht mehr an die ganze Sache gedacht. Erst heute Abend fiel es mir wieder ein, als ich beim Gemüsehändler an der Ecke war. Er wohnt in der Nähe und hatte alles gesehen. Ich habe ihn gefragt, ob er den Paketfahrer kennt. Ich kannte ihn nicht, aber er wusste, dass Frau Wendler im zweiten Stock ständig im Internet Sachen bestellt, und die kommen natürlich mit dem Paketlieferservice.",
            "Der Gemüsehändler erzählte, dass die Polizei einige Leute gefragt hatte, und dass zwei junge Frauen gesagt hatten, der Mercedesfahrer habe vor dem Unfall im Auto telefoniert. Dann sagte er noch, dass das Paketauto schließlich weggefahren war, aber der alte Mercedes musste der Reparaturdienst abholen. Die ganze Geschichte hatte fast eine Stunde gedauert. Wir haben noch ein bisschen diskutiert, ob der Mercedesfahrer Schuld hatte oder nicht, wir glaubten das eigentlich beide. Der Paketfahrer hatte allerdings in zweiter Reihe geparkt, das war natürlich auch nicht richtig. Aber trotzdem: „Wer drauffährt, zahlt“, sagte der Gemüsehändler.",
            "Danach bin ich nach Hause gegangen und morgen ist wieder ein anderer Tag."
          ],
          signature: "Bis bald, Stefan"
        }],
        example: { text: "Am Morgen hat Stefan auf seinem Balkon Kaffee getrunken.", answer: "falsch" },
        questions: [
          { id: 1, type: "tf", text: "Die Straße unter Stefans Balkon ist morgens ziemlich laut.", answer: "richtig" },
          { id: 2, type: "tf", text: "Der Paketfahrer lieferte gerade etwas ab.", answer: "richtig" },
          { id: 3, type: "tf", text: "Stefan blieb zu Hause, um das Geschehen zu beobachten.", answer: "falsch" },
          { id: 4, type: "tf", text: "Am Abend musste Stefan noch etwas einkaufen.", answer: "richtig" },
          { id: 5, type: "tf", text: "Stefan erfährt, dass der Mercedes stark beschädigt war.", answer: "richtig" },
          { id: 6, type: "tf", text: "Stefan und sein Gesprächspartner denken, dass nur der Mercedesfahrer Fehler gemacht hat.", answer: "falsch" }
        ]
      },
      {
        id: 2,
        title: "Teil 2",
        time: 20,
        instructions: "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        articles: [{
          heading: "Mit Granny Aupair in die Welt",
          body: [
            "Die Hamburger Agentur Granny Aupair schickt Frauen weltweit in Familien oder in soziale Projekte. Eine Aufenthaltsdauer ist nicht vorgeschrieben. Karin Dörner ist Witwe, 65 Jahre alt, bis vor einem Jahr war sie als Lehrerin tätig. Jetzt sitzt sie in ihrem Schlafzimmer in Neumünster auf dem Bett und überlegt, was sie alles noch nach Kambodscha fliegen soll. Der Koffer ist noch ziemlich leer, dabei muss sie doch morgen schon losfahren. Frau Dörner hat sich für sechs Monate als Au-pair-Großmutter bei einer Familie in Phnom Penh beworben. Sie soll sich um einen kleinen Jungen kümmern, der aus einer amerikanisch-deutschen Familie stammt. Der Kleine ist vier Jahre alt, die Mutter arbeitet in Kambodscha für UNICEF und befürchtet, dass er seine deutschen Sprachkenntnisse vergessen könnte, wenn er von seinem deutschen Vater so lange getrennt ist. Der Vater arbeitet nämlich im Moment in Frankfurt.",
            "Gerade hat Frau Dörner entschieden, dass sie den Wollmantel zu Hause lassen wird, den wird sie in den nächsten Monaten nicht brauchen, das weiß sie. Sie hat sich über das Leben in Kambodscha gut informiert, über das ungewöhnlich feucht-heiße Klima, über die Geschichte und die wunderbaren Tempel, über die großen sozialen Unterschiede. Ihre Gastfamilie wohnt in einer großen 6-Zimmer-Wohnung mit Klimaanlage und Hausmädchen, was für eine kambodschanische Durchschnittsfamilie unerreichbar ist.",
            "Frau Dörner ist sich darüber im Klaren, dass sie in sechs Monaten keine echte Verbindung zum Land finden kann, auch in der Landessprache Khmer wird sie wohl nur wenige Wörter lernen. Sie hat aber in den letzten Monaten englische und französische Sprachkurse besucht und hofft, dass sie gut vorbereitet ist für die große Reise."
          ],
          source: "(aus einer deutschen Zeitung)"
        }],
        example: { text: "Granny Aupair …", options: ["ist eine Reiseagentur.", "ist ein Angebot für alte Menschen.", "ist ein Angebot für Frauen über 60."], answer: 2 },
        questions: [
          { id: 7, type: "mcq", text: "Frau Dörner …", options: ["will eine Rundreise durch Kambodscha machen.", "will in einer Familie arbeiten.", "will die Sprache des Landes lernen."], answer: 1 },
          { id: 8, type: "mcq", text: "Frau Dörner weiß, dass …", options: ["sie in Phnom Penh in einer Durchschnittsfamilie leben wird.", "das Wetter in Kambodscha für Europäer schwierig ist.", "in der Gastfamilie niemand Deutsch spricht."], answer: 1 },
          { id: 9, type: "mcq", text: "Um sich vorzubereiten, hat Frau Dörner …", options: ["ein Klimatraining gemacht.", "einen Kurs über die Kultur im alten Kambodscha besucht.", "ihre Fremdsprachenkenntnisse verbessert."], answer: 2 }
        ],
        articles2: [{
          heading: "Haben schöne Frauen mehr Erfolg im Beruf?",
          sub: "Hübsche Schülerinnen und Schüler haben es leichter, aber bei der Bewerbung sind schöne Frauen im Nachteil. Woran liegt das?",
          body: [
            "Psychologen haben herausgefunden, dass wir symmetrische Gesichter mit glatter Haut und hohen Wangenknochen unbewusst mit positiven Eigenschaften verbinden. Wir glauben, dass schöne Menschen freundlich, zuverlässig und kompetent sind. Dann müsste man doch vermuten, dass solche Menschen es auf jeder Station ihres Lebens leichter haben als andere. Jetzt zeigen zwei Studien: Für die Schule ist das richtig, nicht aber im Beruf.",
            "Die Wiener School of Education hat mit drei Klassen eines Gymnasiums untersucht, um den Einfluss der Schönheit auf die Noten nachzuweisen. Sie fanden heraus, dass attraktive Jugendliche tatsächlich um 0,5 bis 0,75 Notenpunkte besser beurteilt werden als andere Schüler mit gleichen Leistungen.",
            "Wie ist es aber im Berufsleben: Bekommen attraktive Menschen auch die besten Arbeitsplätze?",
            "Zwei Wissenschaftler an der Universität in Tel Aviv verschickten für ihre Studie 2500 Bewerbungen mit Fotos. Die Hälfte der Fotos zeigten schöne Männer und Frauen, die anderen gehörten zu durchschnittlichen Gesichtern. Das Resultat war erstaunlich: Gutaussehende Männer wurden doppelt so oft angefragt wie die anderen Bewerber.",
            "Bei den Frauen war das Gegenteil der Fall. Von den schönen Frauen bekamen nur 10 % eine positive Antwort, während von den alltäglichen Damen etwa ein Drittel zur Vorstellung eingeladen wurde.",
            "Bei der Suche nach den Gründen fanden die Wissenschaftler heraus, dass in den Personalbüros der Firmen fast ausschließlich Frauen sitzen – und die glauben offenbar, dass schöne Frauen das Betriebsklima stören."
          ],
          source: "(aus einer österreichischen Zeitung)"
        }],
        instructions2: "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        questions2: [
          { id: 10, type: "mcq", text: "Wissenschaftler haben bewiesen,", options: ["dass attraktive Menschen überall leicht Erfolg haben.", "dass Schönheit und gute Leistung zusammen gehören.", "dass Lehrer sich vom Aussehen beeinflussen lassen."], answer: 2 },
          { id: 11, type: "mcq", text: "Wie wurde die Studie in Tel Aviv organisiert?", options: ["Auf 50 % der Fotos waren gutaussehende Männer zu sehen.", "10 % der Fotos zeigten unattraktive Personen.", "50 % der Fotos zeigten ganz normale Leute mit alltäglichem Aussehen."], answer: 2 },
          { id: 12, type: "mcq", text: "Was fanden die Wissenschaftler heraus?", options: ["Für die Firma ist es wichtig, dass neue Mitarbeiter keinen Streit verursachen.", "Gutes Aussehen ist für Männer genauso wichtig wie für Frauen.", "Bewerber mit durchschnittlichem Aussehen haben bessere Chancen."], answer: 0 }
        ]
      },
      {
        id: 3,
        title: "Teil 3",
        time: 10,
        instructions: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen A bis J aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige, in diesem Fall wählen Sie X.",
        adsFormatted: [
          {
            code: "A",
            tagPos: "left",
            hasPin: true,
            cardClass: "anzeige-style-a",
            html: `
              <div class="anzeige-headline">Wir suchen Hilfe bei der Kinderbetreuung.</div>
              <p style="margin-bottom:8px; font-size:13.5px;">Wer kann unsere beiden Jungs (4 und 6 Jahre) mittags von der Schule abholen und nach Hause bringen, mit ihnen essen und spielen?</p>
              <p style="margin-bottom:8px; font-size:13.5px; font-weight:700;">Arbeitszeit: Mo – Fr, jeweils 4 Std.</p>
              <p style="margin-bottom:8px; font-size:13.5px;">Wir wünschen uns eine liebevolle junge Frau mit einigen Deutschkenntnissen.</p>
              <div style="font-weight:700; font-size:14px; margin-top:8px;">Tel: 0160 7659125</div>
            `
          },
          {
            code: "B",
            tagPos: "right",
            hasPin: true,
            cardClass: "anzeige-style-b",
            html: `
              <div class="anzeige-headline">Hilfskräfte gesucht</div>
              <p style="margin-bottom:8px; font-size:13.5px;">Studentenjob für Nachteulen und Stubenhocker: Im Postdienst werden junge Leute zum Einpacken und Sortieren von Briefsendungen gesucht.</p>
              <p style="margin-bottom:6px; font-size:13.5px; font-weight:700;">Arbeitszeit: samstags, sonntags, nachts.</p>
              <p style="margin-bottom:6px; font-size:13px;"><strong>Voraussetzung:</strong> sehr gute Deutschkenntnisse</p>
              <div style="font-weight:700; font-size:13.5px; margin-top:6px;">Gute Bezahlung! Tel: 040 87995543</div>
            `
          },
          {
            code: "C",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-c",
            html: `
              <div class="anzeige-headline-hand">RUSSISCHE LITERATUR</div>
              <p style="font-size:13.5px; margin-bottom:8px;">für deutsche Leser aufbereiten, das ist das Ziel des Workshops „Russland schreibt“.</p>
              <div style="font-size:13px; line-height:1.45; margin-bottom:6px;">
                <div><strong>Ort:</strong> Russisches Kultur-Institut</div>
                <div><strong>Zeit:</strong> Samstag und Sonntag, 3./4. Juli</div>
                <div><strong>Beginn:</strong> Samstag, 9.00 Uhr</div>
              </div>
              <p style="font-size:13px; margin-bottom:6px;">Eingeladen sind vor allem Menschen mit sehr guten Russischkenntnissen.</p>
              <div style="font-weight:700; font-size:13px; margin-top:6px;">Anmeldung und Information: 030 7798544</div>
            `
          },
          {
            code: "D",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-d",
            html: `
              <div class="anzeige-headline">Paketfahrer gesucht</div>
              <div style="font-weight:700; font-size:13.5px; margin-bottom:4px;">Sie:</div>
              <div style="font-size:13.5px; line-height:1.4; margin-bottom:8px;">
                <div>– haben einen Führerschein</div>
                <div>– kennen die Stadt</div>
                <div>– haben Deutschkenntnisse</div>
              </div>
              <div style="font-weight:700; font-size:13.5px; margin-bottom:4px;">Wir bieten:</div>
              <div style="font-size:13.5px; line-height:1.4; margin-bottom:8px;">
                <div>– guten Verdienst</div>
                <div>– Arbeitszeit nach Vereinbarung</div>
                <div>– angemessene Sozialleistungen</div>
              </div>
              <div style="font-weight:700; font-size:13.5px;">Tel: 0171 44876033</div>
            `
          },
          {
            code: "E",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-e",
            html: `
              <div class="anzeige-headline">Ponyhof sucht Aushilfskräfte</div>
              <p style="font-size:13.5px; margin-bottom:8px; line-height:1.45;">Im Juli und August sind noch Plätze bei der Gruppenbetreuung frei. Unsere Gäste sind 8 bis 14 Jahre alt und kommen jeweils für 14 Tage zu uns.</p>
              <div style="font-size:13px; font-weight:700; margin-top:6px;">Bewerbungen an:</div>
              <div style="font-size:13.5px; font-weight:700; text-decoration:underline;">info@ponyhof.moelln.de</div>
            `
          },
          {
            code: "F",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-f",
            html: `
              <div class="anzeige-headline">Praktikums-Börse für den Bereich Hotel und Restaurant</div>
              <p style="font-size:13.5px; margin-bottom:8px; line-height:1.45;">Erstklassige Hotelbetriebe in Deutschland, Österreich und der Schweiz. Praktikumsplätze für drei bis sechs Monate; auch für Anfänger mit geringen Sprachkenntnissen.</p>
              <div style="font-size:13px; font-weight:700; margin-top:6px;">Bewerbungsformulare unter:</div>
              <div style="font-size:13.5px; font-weight:700;">www.jobboerse.ch/hotel</div>
            `
          },
          {
            code: "G",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-g",
            html: `
              <div class="anzeige-headline">Übersetzungsbüro <span style="font-weight:500; font-size:14px;">sucht freie Mitarbeiter.</span></div>
              <p style="font-size:13.5px; margin-bottom:8px; line-height:1.45;">Alle europäischen Sprachen, faire Projektverträge. Wenn Sie von zu Hause arbeiten wollen und bereit sind, eine Probe-Übersetzung abzuliefern, sollten Sie sich bei uns melden:</p>
              <div style="font-size:13.5px; font-weight:700; color:#0f172a;">paslomski-projekt@gmx.net</div>
            `
          },
          {
            code: "H",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-h",
            html: `
              <div class="anzeige-headline-tea">KLEINEN TEELADEN</div>
              <div class="italic-body" style="margin-bottom:8px;">Wenn Sie ein freundlicher, aufgeschlossener Mensch sind und gern im Team arbeiten, sind Sie bei uns genau richtig. Alles, was Sie wissen müssen, erklären wir Ihnen.</div>
              <div style="font-size:12.5px; font-weight:700; margin-bottom:2px;">ARBEITSZEIT:</div>
              <div style="font-size:13px; font-weight:700; font-style:italic; margin-bottom:6px;">DI–SA VON 10.00 BIS 14.00 UHR</div>
              <div style="font-size:13.5px; font-weight:700;">Rufen Sie uns an: 030 86044675</div>
            `
          },
          {
            code: "I",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-i",
            html: `
              <p style="font-size:13.5px; line-height:1.45; margin-bottom:8px;">Der <strong style="color:#0284c7;">Computer-Notdienst</strong> stellt gerade eine Gruppe von Fachleuten zusammen, die in festgelegten Zeiträumen auf Abruf bereitstehen.</p>
              <div style="font-size:13px; line-height:1.4; margin-bottom:8px;">
                <div>– Sie bestimmen, wann wir Sie einsetzen können</div>
                <div>– Sie lösen die Probleme unserer Kunden vor Ort</div>
                <div>– Abrechnung und Bezahlung wöchentlich</div>
              </div>
              <div style="font-size:13.5px; font-weight:700; color:#0369a1;">compu-service@freeline.de</div>
            `
          },
          {
            code: "J",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-j",
            html: `
              <p style="font-size:13.5px; line-height:1.45; margin-bottom:8px;">Das <strong style="color:#000;">Clara-Zetkin-Institut</strong> sucht Mitarbeiter für zeitlich begrenzte Aufgaben (drei Monate): Katalogisierung und Archivierung von deutschen und fremdsprachigen Texten, Internet-Recherche, Mitarbeit in der Presseabteilung.</p>
              <div style="font-size:13px; font-style:italic; margin-bottom:4px;">Unkostenvergütung nach Absprache</div>
              <div style="font-size:13px; font-weight:700;">Bewerbungen an: <span style="font-weight:700;">czi@becat-uni-bb.de</span></div>
            `
          }
        ],
        example: { text: "Giulia G. möchte in den Sommerferien in Deutschland in einer Ferienanlage mit Kindern arbeiten.", answer: "E" },
        questions: [
          { id: 13, type: "match", text: "Erdal M. lebt seit einem Jahr in Deutschland. Im Moment fährt er täglich drei Stunden den Lieferwagen einer Wäscherei. Er braucht mehr Geld.", answer: "D" },
          { id: 14, type: "match", text: "Susan S. ist Amerikanerin und studiert in Köln Journalistik. Sie sucht einen Platz als Praktikantin, der zu ihrem Studium passt.", answer: "J" },
          { id: 15, type: "match", text: "Marian B. ist seit vier Monaten in Berlin. An drei Tagen pro Woche besucht sie vormittags einen Deutschkurs. Sie möchte einen Job, der ihr Gelegenheit gibt, Deutsch zu sprechen.", answer: "A" },
          { id: 16, type: "match", text: "Ewa R. kommt aus Bulgarien. Sie spricht fließend Deutsch, Russisch und Italienisch. Sie würde gern arbeiten, aber sie lebt auf dem Land und hat ein Baby.", answer: "G" },
          { id: 17, type: "match", text: "Luella M. sucht eine Anstellung in einem Hotel in Österreich oder in der Schweiz. Sie arbeitet im Moment in einem Hamburger Hotel.", answer: "X" },
          { id: 18, type: "match", text: "Jaime L. hat Informatik studiert. Seine große Liebe ist jetzt die Rockmusik. Er spielt jeden Abend in einer Band, er möchte aber auch in seinem Beruf arbeiten.", answer: "I" },
          { id: 19, type: "match", text: "Georg N. schreibt gerade seine Examensarbeit. Er braucht unbedingt etwas Geld, aber er kann nur am Wochenende arbeiten.", answer: "B" }
        ]
      },
      {
        id: 4,
        title: "Teil 4",
        time: 15,
        instructions: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über die Erhöhung des Rentenalters auf 70 Jahre. Wählen Sie: Ist die Person für eine Erhöhung des Rentenalters auf 70 Jahre?",
        example: { who: "Bernhard, 49, Gelsenkirchen", text: "Wir sollen jetzt schon bis 67 arbeiten. Für manche Menschen ist das zu lange, denn wer beim Bau oder in der Fabrik schuftet, der ist oft auch krank.", answer: "nein" },
        letters: [
          { id: 20, who: "Wolfram, 39, Berlin", text: "Warum denkt eigentlich niemand daran, dass die Arbeitsplätze für die jungen Leute frei werden, wenn die alten Menschen keine Rente beanspruchen, sondern weiterhin ihr Gehalt von der Firma bekommen, am liebsten bis sie achtzig sind? Aber so geht es nicht: Wir brauchen in den Betrieben junge und frischen Enthusiasmus, wenn wir neue Technologien entwickeln wollen.", answer: "nein" },
          { id: 21, who: "Martin, 24, Erfurt (Deutschland)", text: "Jeder weiß, dass heute alle Menschen älter werden und länger fit bleiben. Warum sollen sie dann nicht länger arbeiten? Wer länger gearbeitet hat, hat auch größere Erfahrung, die sollten wir uns zunutze machen. Es ist unsinnig, wenn unsere gut ausgebildeten Arbeitskräfte in ihren besten Lebensjahren in Rente gehen, um sich auf Kreuzfahrtschiffen zu langweilen!", answer: "ja" },
          { id: 22, who: "Michaela, 32, Wien", text: "Ist es nicht das, was wir uns wünschen? Mit siebzig oder achtzig Jahren noch topfit im Arbeitsleben stehen, Entscheidungen treffen, verantwortlich sein – das ist wunderbar, aber es ist eine Illusion. In Wirklichkeit fangen die meisten Menschen schon mit sechzig an, ihre Leistungsfähigkeit zu verlieren: Vergesslichkeit, Unsicherheit, Entscheidungsmüdigkeit, die oft von der Unfähigkeit begleitet sind, sich neue Technologien anzueignen.", answer: "nein" },
          { id: 23, who: "Corinna, 32, Linz (Österreich)", text: "Früher waren alte Menschen für die Familie wichtig. Für manche Menschen ist jetzt schon mit 67 zu lange, denn wer beim Bau oder in der Fabrik schuftet, der ist mit vierzig Arbeitsjahren verbraucht und oft auch krank. Vielleicht möchten manche Politiker ja gern bis ins hohe Alter arbeiten, das gilt aber nicht für alle!", answer: "nein" },
          { id: 24, who: "Sybille, 19, Zug (Schweiz)", text: "Ich habe gerade erst mein Abitur gemacht; die Vorstellung zu gehen, liegt mir also noch fern. Trotzdem habe ich mit meinen Eltern darüber gesprochen: Ich glaube, man könnte das Rentenalter ruhig anheben, für alle, die Lust haben zu arbeiten. Und für diejenigen, die das nicht wollen, müsste man Möglichkeiten schaffen, vorher auszusteigen.", answer: "ja" },
          { id: 25, who: "Gloria, 54, Wolfenbüttel (Deutschland)", text: "Wenn man sich die demografische Entwicklung in Europa anschaut, dann wissen wir: Wir müssen länger arbeiten als unsere Eltern! Allerdings scheint es mir übertrieben, das Rentenalter gleich auf siebzig Jahre zu erhöhen. Das Rentenalter liegt jetzt schon bei 67; wenn wir diese Grenze um ein Jahr erhöhen, wäre das für den Staatshaushalt schon eine große Hilfe. Wenn man mehr fordert, könnte man die Arbeitnehmer in Schwierigkeiten bringen.", answer: "nein" },
          { id: 26, who: "Gilbert, 61, Heidelberg", text: "Ich denke, dass wir ein System finden müssten, das für alle Beteiligten attraktiv wäre. Die dramatische Erhöhung des Rentenalters ist sicherlich unausweichlich, sonst können unsere Kinder die Renten in Zukunft nicht mehr bezahlen. Allerdings muss man eine Grenze setzen: Siebzig Jahre finde ich ganz vernünftig. Aber es muss Möglichkeiten geben, diese Grenze zu überschreiten, nach oben ebenso wie nach unten.", answer: "ja" }
        ]
      },
      {
        id: 5,
        title: "Teil 5",
        time: 10,
        instructions: "Lesen Sie die Aufgaben 27 bis 30 und die Hausordnung dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        articles: [{
          heading: "Wohnpark „Am See“",
          sub: "Hausordnung für Mieter und Gäste",
          body: [
            "Liebe Gäste, in unserer Wohnanlage leben Menschen, die sich hier erholen wollen. Wir bitten Sie deshalb, die folgenden Regeln strikt zu beachten:",
            "Laute Musik, Lärm und Kinderspiele im Hausflur sind grundsätzlich zu unterlassen. In der Zeit von 13.00 bis 15.00 und von 22.00 bis 8.00 Uhr soll absolute Ruhe herrschen.",
            "Das Eingangstor ist grundsätzlich geschlossen zu halten, auf jeden Fall ab 21.00 Uhr. Der Wohnungsschlüssel darf nicht kopiert werden, da dies zur Beschädigung der Schlösser führen kann. Wenn Sie einen zweiten Wohnungsschlüssel brauchen, wenden Sie sich bitte an den Hausmeister. Der Schlüssel öffnet auch die Garage, den Fahrradkeller und den Waschraum. Mit dem Wohnungsschlüssel lässt sich auch das Eingangstor öffnen und schließen.",
            "Das Abstellen von Kinderwagen und Fahrrädern in den Hausfluren ist verboten. In den Kellerräumen ist dafür ausreichend Platz vorhanden. Außerdem gibt es Stellplätze hinter den Garagen.",
            "Das Halten von Hunden und anderen Haustieren in den Wohnungen ist grundsätzlich nicht gestattet. Wenn Sie Ihr Haustier mitbringen wollen, müssen Sie beim Verwalter einen schriftlichen Antrag stellen.",
            "Grillen ist auf den Balkonen und Terrassen nicht erlaubt. Auf der Liegewiese hinter dem Haus steht ein Grillplatz zur Verfügung.",
            "Für Fragen oder Notfälle steht Ihnen der Hausmeister montags bis freitags von 8.00 bis 12.00 Uhr unter Tel. 089 452290 zur Verfügung."
          ]
        }],
        example: { text: "Die Hausordnung gilt …", options: ["nur für neue Mieter.", "für alle Bewohner und Besucher.", "nur an Sonn- und Feiertagen."], answer: 1 },
        questions: [
          { id: 27, type: "mcq", text: "Wann muss es im Haus ruhig sein?", options: ["Nur nachts zwischen 22.00 und 8.00 Uhr.", "Über die Mittagszeit und während der Nachtstunden.", "Jederzeit, wenn andere Mieter im Haus sind."], answer: 1 },
          { id: 28, type: "mcq", text: "Was gilt für die Wohnungsschlüssel?", options: ["Mieter können sich bei Bedarf selbst einen Schlüssel nachmachen lassen.", "Zusätzliche Schlüssel erhält man nur über den Hausmeister.", "Der Schlüssel darf nur für die Wohnungstür verwendet werden."], answer: 1 },
          { id: 29, type: "mcq", text: "Wo dürfen Fahrräder abgestellt werden?", options: ["Im Hausflur, wenn genug Platz ist.", "Nur in den Kellerräumen oder hinter den Garagen.", "Auf dem Balkon."], answer: 1 },
          { id: 30, type: "mcq", text: "Wer ein Haustier halten möchte, …", options: ["muss dies vorher schriftlich beantragen.", "darf nur kleine Hunde ohne Erlaubnis halten.", "muss monatlich eine Gebühr an den Hausmeister zahlen."], answer: 0 }
        ]
      },
      {
        id: 6,
        title: "🎧 Hören",
        badge: "Hören",
        isHoren: true,
        time: 40,
        instructions: "Das Modul Hören besteht aus vier Teilen. Sie hören mehrere Texte und lösen Aufgaben dazu. Für jede Aufgabe gibt es nur eine richtige Lösung.",
        audioSrc: "audio/hoeren.mp3",
        audioFallbacks: [
          "audio/modellsatz-1-hoeren.mp3",
          "audio/hoeren.m4a",
          "audio/hoeren.wav",
          "audio/audio.mp3"
        ],
        audioChapters: [
          { time: 0, label: "00:00 Einleitung" },
          { time: 40, label: "00:40 Beispiel" },
          { time: 122, label: "02:02 Teil 1" },
          { time: 652, label: "10:52 Teil 2" },
          { time: 917, label: "15:17 Teil 3" },
          { time: 1230, label: "20:30 Teil 4" }
        ],
        questions: [
          // Teil 1: 1 - 10
          { id: "h1", num: 1, type: "tf", text: "Der Termin von Frau Stein wird verschoben.", answer: "richtig", teilPart: 1, textNum: 1 },
          { id: "h2", num: 2, type: "mcq", text: "Frau Stein soll …", options: ["die Chipkarte mitbringen.", "zehn Euro bezahlen.", "zurückrufen."], answer: 2, teilPart: 1, textNum: 1 },
          { id: "h3", num: 3, type: "tf", text: "Herr Thomas informiert Frau Brahms über neue Versicherungstarife.", answer: "falsch", teilPart: 1, textNum: 2 },
          { id: "h4", num: 4, type: "mcq", text: "Herr Thomas ...", options: ["möchte, dass Frau Brahms einen neuen Vertrag abschließt.", "braucht Zeugnisse von Frau Brahms.", "ruft später noch einmal an."], answer: 1, teilPart: 1, textNum: 2 },
          { id: "h5", num: 5, type: "tf", text: "Sie hören Veranstaltungstipps für München.", answer: "falsch", teilPart: 1, textNum: 3 },
          { id: "h6", num: 6, type: "mcq", text: "Auf der Autobahn gibt es Stau wegen ...", options: ["einer Baustelle.", "des Berufsverkehrs.", "eines Unfalls."], answer: 2, teilPart: 1, textNum: 3 },
          { id: "h7", num: 7, type: "tf", text: "Sie hören eine Information für eine Reisegruppe.", answer: "falsch", teilPart: 1, textNum: 4 },
          { id: "h8", num: 8, type: "mcq", text: "Welcher Zug fällt aus? Der Zug nach …", options: ["Bern.", "Genf.", "Lausanne."], answer: 1, teilPart: 1, textNum: 4 },
          { id: "h9", num: 9, type: "tf", text: "Das Wetter wird im Osten Deutschlands besser.", answer: "falsch", teilPart: 1, textNum: 5 },
          { id: "h10", num: 10, type: "mcq", text: "Vorausgesagt werden ...", options: ["Gewitter an der Elbe.", "Temperaturen unter 10 Grad.", "starke Regenfälle im Westen."], answer: 0, teilPart: 1, textNum: 5 },

          // Teil 2: 11 - 15
          { id: "h11", num: 11, type: "mcq", text: "Das Museum ist ...", options: ["sehr voll.", "teilweise geschlossen.", "ziemlich leer."], answer: 2, teilPart: 2 },
          { id: "h12", num: 12, type: "mcq", text: "Was zeigt der Museumsführer den Touristen?", options: ["alle Ausstellungen", "die Hauptausstellung", "die Sonderausstellungen"], answer: 1, teilPart: 2 },
          { id: "h13", num: 13, type: "mcq", text: "Wo ist der Treffpunkt am Nachmittag?", options: ["am Eingang", "an der Garderobe", "im Café"], answer: 0, teilPart: 2 },
          { id: "h14", num: 14, type: "mcq", text: "Die Ausstellung beschäftigt sich mit ...", options: ["dem Oktoberfest.", "der bayerischen Küche.", "der Geschichte Münchens."], answer: 2, teilPart: 2 },
          { id: "h15", num: 15, type: "mcq", text: "Der Museumsführer empfiehlt den Teilnehmern einen ...", options: ["Restaurantbesuch.", "Cafébesuch.", "Biergartenbesuch."], answer: 2, teilPart: 2 },

          // Teil 3: 16 - 22
          { id: "h16", num: 16, type: "tf", text: "Bei dem Fest wurde der Geburtstag von Annas Mann gefeiert.", answer: "falsch", teilPart: 3 },
          { id: "h17", num: 17, type: "tf", text: "Nadia ist vom Haus der Gastgeber begeistert.", answer: "richtig", teilPart: 3 },
          { id: "h18", num: 18, type: "tf", text: "Nadia arbeitet beim Fernsehen.", answer: "falsch", teilPart: 3 },
          { id: "h19", num: 19, type: "tf", text: "Das Essen war ausgezeichnet.", answer: "richtig", teilPart: 3 },
          { id: "h20", num: 20, type: "tf", text: "Nadia hat zusammen mit dem Musiker gespielt.", answer: "falsch", teilPart: 3 },
          { id: "h21", num: 21, type: "tf", text: "Nadia hat auch Jazz gespielt.", answer: "falsch", teilPart: 3 },
          { id: "h22", num: 22, type: "tf", text: "Das Fest dauerte bis nach 12 Uhr nachts.", answer: "richtig", teilPart: 3 },

          // Teil 4: 23 - 30
          { id: "h23", num: 23, type: "speaker", text: "Kinder lernen soziales Verhalten erst ab einem bestimmten Alter.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 1, teilPart: 4 },
          { id: "h24", num: 24, type: "speaker", text: "Für den Erfolg im Beruf ist es wichtig, immer zu arbeiten.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 2, teilPart: 4 },
          { id: "h25", num: 25, type: "speaker", text: "Es ist möglich, Kinder zu haben und auch zu arbeiten.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 2, teilPart: 4 },
          { id: "h26", num: 26, type: "speaker", text: "In der Krippe lernen Kinder andere Dinge als zu Hause.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 0, teilPart: 4 },
          { id: "h27", num: 27, type: "speaker", text: "In Krippen müssen Erzieherinnen viele Kinder gleichzeitig betreuen.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 1, teilPart: 4 },
          { id: "h28", num: 28, type: "speaker", text: "Kinder sollen lernen, sich auch mal alleine zu beschäftigen.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 2, teilPart: 4 },
          { id: "h29", num: 29, type: "speaker", text: "Manche Kindertagesstätten haben zu wenig Geld.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 2, teilPart: 4 },
          { id: "h30", num: 30, type: "speaker", text: "Auch Familien mit wenig Geld sollen Kinder haben können.", options: ["Moderator", "Dana Schneider", "Florian Bader"], answer: 1, teilPart: 4 }
        ],
        horenSections: [
          {
            partNumber: 1,
            title: "Teil 1",
            badge: "Aufgaben 1 – 10",
            intro: "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
            example: {
              ex01: { num: "01", text: "Frank schlägt Jan vor, nach Sizilien zu fliegen.", type: "tf", answer: "falsch" },
              ex02: { num: "02", text: "Wo möchte Frank am liebsten übernachten?", type: "mcq", options: ["bei Verwandten", "im Hotel", "im Zelt"], answer: 2 }
            },
            texts: [
              {
                number: 1,
                title: "Text 1",
                qIds: ["h1", "h2"]
              },
              {
                number: 2,
                title: "Text 2",
                qIds: ["h3", "h4"]
              },
              {
                number: 3,
                title: "Text 3",
                qIds: ["h5", "h6"]
              },
              {
                number: 4,
                title: "Text 4",
                qIds: ["h7", "h8"]
              },
              {
                number: 5,
                title: "Text 5",
                qIds: ["h9", "h10"]
              }
            ]
          },
          {
            partNumber: 2,
            title: "Teil 2",
            badge: "Aufgaben 11 – 15",
            intro: "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
            context: "Sie nehmen an einer Führung durch das Münchner Stadtmuseum teil.",
            qIds: ["h11", "h12", "h13", "h14", "h15"]
          },
          {
            partNumber: 3,
            title: "Teil 3",
            badge: "Aufgaben 16 – 22",
            intro: "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
            context: "Sie sind an einer Bushaltestelle und hören, wie sich ein Mann und eine Frau über ein Fest unterhalten.",
            qIds: ["h16", "h17", "h18", "h19", "h20", "h21", "h22"]
          },
          {
            partNumber: 4,
            title: "Teil 4",
            badge: "Aufgaben 23 – 30",
            intro: "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
            context: "Der Moderator der Radiosendung „Diskussion am Abend“ diskutiert mit den Eltern Dana Schneider und Florian Bader zum Thema „Sollen kleine Kinder in die Kinderkrippe gehen?“.",
            speakers: [
              { code: "a", name: "Moderator" },
              { code: "b", name: "Dana Schneider" },
              { code: "c", name: "Florian Bader" }
            ],
            example: {
              num: "0",
              text: "Für kleine Kinder sind die ersten drei Jahre sehr wichtig.",
              answerCode: "b",
              answerSpeaker: "Dana Schneider"
            },
            qIds: ["h23", "h24", "h25", "h26", "h27", "h28", "h29", "h30"]
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MODELLSATZ 2: B1 PRÜFUNGSTRAINING (SET A — AUS PDF)
     Nina / Flughafen-Stresstest & Punkte sammeln / Kultur-Events / Bio-Energie / Herbergsordnung
     ------------------------------------------------------------------------ */
  {
    id: "modellsatz-2",
    title: "Modellsatz 2 — B1 Prüfungstraining (Set A)",
    badge: "Modellsatz 2",
    examTitle: "B1 Prüfungstraining — Set A (Training zur Prüfung Lesen)",
    examSub: "Modul Lesen · 5 Teile · 65 Minuten · Modellsatz 2 (PDF)",
    timeTotal: 65,
    parts: [
      {
        id: 1,
        title: "Teil 1",
        time: 10,
        instructions: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
        articles: [{
          heading: "Ninas.Praktikums-Blog.int",
          sub: "Einblicke & Erlebnisse aus der Hamburger Medien- & Kulturszene",
          meta: "Samstag, 16. Mai",
          body: [
            "Seit zwei Tagen arbeite ich in der Presseabteilung. Wir müssen gerade für ein neues Buch ein paar Werbeauftritte vorbereiten. Da bin ich also ziemlich viel als „location-scout“ in der Stadt unterwegs. Klingt toll, oder? Aber es bedeutet nur, dass ich in der Stadt herumlaufe und Bibliotheken und Geschäfte ansehe und überlege, ob sie für uns geeignet sind.",
            "Gestern war ich in einer Fotoausstellung im Stadtzentrum, wo wir vielleicht eine Lesung machen wollen. Dabei habe ich einen richtig coolen Typ kennengelernt, der neben seinem Studium ab und zu da arbeitet. Wir haben ein bisschen geredet, über die Fotos, über die Stadt und wie man hier lebt. Er kennt sich in der Hamburger Kunstszene sehr gut aus, hat schon alle Museen besichtigt und interessiert sich vor allem für Popart.",
            "Dann hat er mir zwei Einladungskarten gegeben, für eine Ausstellungseröffnung in einem anderen Stadtteil. Da sollte am Abend eine Party sein. Natürlich habe ich gleich meine Freundin Karo angerufen, um sie einzuladen; und um halb acht kam sie mich abholen. Wir hatten uns beide ganz toll zurechtgemacht: schwarzes Minikleid, Stilettos, großes Make-up. Die Leute in der U-Bahn dachten wahrscheinlich, wir wollten zu einer Hochzeit oder in die Oper. Karo hatte im Internet herausgefunden, dass wir an der U-Bahnstation „Horner Landstraße“ aussteigen mussten. Das haben wir auch getan. Und danach müssten wir nur noch ein paar Meter laufen, hatte Karo gesagt.",
            "Diese „paar Meter“ werde ich nicht so schnell vergessen! Es waren kaum Leute auf der Straße, dafür rasten die Autos ganz nah an uns vorbei. Wir haben überall gefragt, aber niemand wusste etwas von der Ausstellung. Nach einer halben Stunde Herumlaufen haben wir wenigstens die Straße gefunden und nach weiteren 20 Minuten standen wir in einem Hinterhof vor einer Garage, in der offensichtlich gefeiert wurde.",
            "Alle Wände waren schwarz, so dass die hell beleuchteten Bilder gut zu sehen waren. Der Raum war voller Menschen, die lachten und redeten, meistens mit einem Glas oder einem Teller in der Hand. Eine junge Frau gab uns einen Prospekt von der Ausstellung und fragte, ob wir zum ersten Mal hier wären. Dann machte sie uns mit ein paar Leuten bekannt und es wurde noch ein fabelhafter Abend. Wir haben uns prima unterhalten, viel gelacht und vielleicht eine oder zwei neue Bekanntschaften gemacht – nur der coole Typ, der mir am Morgen die Einladung gegeben hatte, der war gar nicht da!",
            "Das war mir aber völlig egal."
          ],
          signature: "Bis bald, Eure Nina"
        }],
        example: { text: "Nina arbeitet in der Presseabteilung für ein neues Buchprojekt.", answer: "richtig" },
        questions: [
          { id: 1, type: "tf", text: "Nina ist noch nicht lange auf dieser Arbeitsstelle.", answer: "richtig" },
          { id: 2, type: "tf", text: "Sie muss in der Stadt Räume finden, in denen man eine kulturelle Veranstaltung organisieren kann.", answer: "richtig" },
          { id: 3, type: "tf", text: "Am Abend will sie mit ihrer Freundin zu einer Hochzeitsfeier gehen.", answer: "falsch" },
          { id: 4, type: "tf", text: "Die beiden Mädchen steigen an der falschen Haltestelle aus.", answer: "falsch" },
          { id: 5, type: "tf", text: "Sie haben sich bei vielen Leuten erkundigt, aber keiner konnte ihnen helfen.", answer: "richtig" },
          { id: 6, type: "tf", text: "Am Ende ist Nina traurig, weil sie ihren neuen Freund nicht getroffen hat.", answer: "falsch" }
        ]
      },
      {
        id: 2,
        title: "Teil 2",
        time: 20,
        instructions: "Lesen Sie den Zeitungsartikel und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        articles: [{
          heading: "Stresstest im neuen Flughafen",
          body: [
            "27 Millionen Fluggäste soll der neue Großflughafen Berlin-Brandenburg pro Jahr abfertigen. Bisher sind aber noch alle Schalter in Plastik eingepackt und der ohrenbetäubende Lärm kommt nicht von einer Boeing 900, sondern von den Baumaschinen der sechstausend Arbeiter, die hier beschäftigt sind.",
            "Das neue Terminal soll in ein paar Monaten eröffnet werden und bis dahin wird geprobt. 10000 Berliner haben sich freiwillig gemeldet, um als Testpersonen im Flughafen gerade das zu tun, was man sonst auf Reisen am meisten hasst: Schlange stehen, Koffer tragen und durch lange Gänge laufen.",
            "Pro Tag kommen ca. 300 Testpassagiere und simulieren verschiedene Szenarien, die beim Flugverkehr stattfinden können: Routineflug, Umsteigen, Behindertentransport, Bombendrohung – und alle machen begeistert mit, obwohl der Job nicht bezahlt wird. Der Flughafen hat 15000 Koffer besorgt, mit denen immer wieder geübt wird. Die Testpersonen bekommen Koffer und Tickets für verschiedene Flugrouten, außerdem werden Ereigniskarten verteilt: Sie kommen von Madrid und wollen weiterfliegen nach Moskau!, Sie wollen Ihre Katze mitnehmen! Oder Sie haben einen Schwächeanfall! Natürlich werden die Fluggäste nach dem „Einsteigen“ nicht wirklich ins Flugzeug geleitet, sondern in einen Pausenraum, wo es Kaffee und Brötchen gibt, bevor man sich aufmacht zu einer neuen fiktiven Flugreise.",
            "Nach sechs Stunden mit Gepäckwagen, Warteschlangen und Sicherheitskontrollen müssen noch die Fragebögen ausgefüllt werden. Obwohl die Testpersonen jetzt stundenlang herumgelaufen sind und Flugsteige gesucht haben, ist die Stimmung richtig gut. Es wird viel gelacht und einige äußern sich geradezu begeistert über den neuen Flughafen: „Haben Sie gesehen, die S-Bahn fährt direkt bis unter das Terminal!“",
            "„Ja“, antwortet jemand, „aber hinter den Sicherheitskontrollen ist viel zu wenig Platz. Das darf nicht so bleiben“.",
            "Morgen geht der Stresstest weiter und in ein paar Monaten wird der Eröffnungsflug starten, von Berlin nach Frankfurt. Die Flughafenfenfans kämpfen bereits um die letzten Plätze."
          ],
          source: "(aus einer deutschen Zeitung)"
        }],
        example: { text: "Am neuen Flughafen Berlin-Brandenburg …", options: ["arbeiten bereits alle Flugschalter normal.", "wird der Ablauf mit Freiwilligen geprobt.", "dürfen nur Passagiere nach Moskau fliegen."], answer: 1 },
        questions: [
          { id: 7, type: "mcq", text: "Der Stresstest wird gemacht,", options: ["weil die Sicherheit auf allen europäischen Flughäfen getestet werden soll.", "damit die Berliner den neuen Flughafen kennenlernen können.", "um die Einrichtungen des neuen Flughafens zu testen."], answer: 2 },
          { id: 8, type: "mcq", text: "Die Testpersonen …", options: ["nehmen ohne Lohn am Stresstest teil.", "machen ein Interview mit dem Flughafenpersonal.", "kommen mit zwei Koffern zum Flughafen und spielen Fluggäste."], answer: 0 },
          { id: 9, type: "mcq", text: "Nach dem Stresstest …", options: ["sind die Teilnehmer immer sehr müde.", "sind alle Teilnehmer mit dem Flughafen zufrieden.", "gibt es positive und negative Reaktionen."], answer: 2 }
        ],
        articles2: [{
          heading: "Sammeln Sie Punkte?",
          body: [
            "Mit der Kundenkarte können Sie Punkte sammeln und bestimmte Produkte zu besseren Preisen kaufen. Ihr Name steht auf der Karte und die Firma schickt Ihnen regelmäßig Werbung ins Haus.",
            "Es gibt durchaus Menschen, die damit nicht einverstanden sind. Wenn sie im Kaufhaus gefragt werden, ob sie eine Kundenkarte beantragen möchten, lehnen sie höflich ab, weil sie ihre persönlichen Daten nicht veröffentlichen wollen. „Dabei könnten sie mit der Kundenkarte doch Geld sparen“, argumentiert die freundliche Frau an der Kasse. Es soll ein fairer Vertrag zwischen Kunde und Verkäufer sein: Sie kaufen immer bei uns ein und wir geben Ihnen bestimmte Waren etwas billiger.",
            "Man muss aber gut abwägen, wie viel Rabatt man wirklich bekommt. Manchmal könnte man mit einem genauen Preisvergleich viel mehr Geld sparen. Die Stiftung „Warentest“ sieht die Vorteile der Kundenkarte zwischen 1,5 % und 3 %.",
            "Das bedeutet: Wenn mir die Apotheke in meiner Straße 10 % Rabatt für die Kundenkarte anbietet, dann könnte das ganz sinnvoll sein, denn die besorgt mir alle gewünschten Artikel. Wenn mir aber eine Mode-Boutique 3 % Rabatt für die Preisgabe meiner persönlichen Daten offeriert, lohnt sich das viel weniger, weil sie nur die eigene Produktpalette verkaufen.",
            "Es gibt auch noch die Karten der Fluglinien und der Bahn, da werden ebenfalls Punkte gesammelt, allerdings nach einem anderen System: Wenn ich viel mit Flugzeug oder Bahn unterwegs bin, habe ich schließlich auf meiner Kundenkarte genügend Bonuspunkte, um ein freies Flugticket oder eine Bahnfahrkarte oder bestimmte Produkte dafür einzutauschen. Das gleiche System benutzen auch der Supermarkt und das Kino an der Ecke: Ich bekomme Treuepunkte und kann mir irgendwann eine Sachprämie oder einen freien Film aussuchen.",
            "In den letzten Jahren hat sich die Payback-Karte auf dem europäischen Markt durchgesetzt, ein Bonusprogramm, das ganz verschiedene Warenhäuser und Geschäfte zusammenfasst. In Deutschland besitzen bereits 20 Millionen Kunden eine Payback-Karte.",
            "Gerd Kortenreuther, Werbefachmann aus Graz, sagt dazu: „Selbstverständlich sind alle Bonusprogramme in erster Linie ein Mittel, um möglichst viele Kunden möglichst fest an den Verkäufer zu binden.“"
          ],
          source: "(aus einer österreichischen Zeitung)"
        }],
        instructions2: "Lesen Sie den Zeitungsartikel und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        questions2: [
          { id: 10, type: "mcq", text: "Viele Menschen wollen nicht an Bonusprogrammen teilnehmen,", options: ["weil der Verkäufer private Informationen bekommt.", "weil alle Waren dadurch teurer werden.", "weil die Prämien nicht attraktiv sind."], answer: 0 },
          { id: 11, type: "mcq", text: "Wenn man die Kundenkarte der Bahn besitzt,", options: ["kann man in der Heimatregion frei fahren.", "bekommt man beim Kauf einer Fahrkarte eine kleine Überraschung.", "kann man Punkte sammeln."], answer: 2 },
          { id: 12, type: "mcq", text: "Mit Kundenkarten und Bonusprogrammen will man erreichen,", options: ["dass einige Produkte billiger werden.", "dass die Menschen besser informiert werden.", "dass die Leute immer im gleichen Geschäft einkaufen."], answer: 2 }
        ]
      },
      {
        id: 3,
        title: "Teil 3",
        time: 10,
        instructions: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen A bis J aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige, in diesem Fall wählen Sie X.",
        adsFormatted: [
          {
            code: "A",
            tagPos: "left",
            hasPin: true,
            cardClass: "anzeige-style-m2-a",
            html: `
              <div class="anzeige-kicker" style="font-size:11px; font-weight:700; color:#dc2626; letter-spacing:0.5px; text-transform:uppercase;">Im Colosseum</div>
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; line-height:1.25; margin-bottom:6px;">GROSSE BILLY WILDER RETROSPEKTIVE</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Ab Freitag zeigen wir alle Filme des Regisseurs Billy Wilder.</p>
              <div style="font-size:12.5px; line-height:1.4; margin-bottom:6px;">
                <div><strong>Freitag um 18.00:</strong> Eröffnungsgala und der Film „Extrablatt“ (1974).</div>
                <div><strong>Eintrittspreise:</strong> jeder Film 6 Euro · Eröffnung mit Büffet: 18 Euro</div>
              </div>
              <div style="font-size:12.5px; font-weight:700; color:#dc2626;">www.colosseum.de/billy-wilder</div>
            `
          },
          {
            code: "B",
            tagPos: "right",
            hasPin: true,
            cardClass: "anzeige-style-m2-b",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#15803d; margin-bottom:4px;">Fröhliches Wochenende – Stadtfest in Bruchsal</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">In der Altstadt gibt es Unterhaltung für junge und alte Besucher. Tanzbuden, Handwerkermarkt, Zauberer und Clowns tragen dazu bei, dass jeder sich wohlfühlt.</p>
              <p style="font-size:13px; font-weight:700; color:#166534; margin-bottom:4px;">Für die Kleinen ist ein besonderer Spielpark aufgebaut.</p>
              <div style="font-size:12.5px; font-weight:700; margin-top:4px;">Beginn: 12.00 Uhr · <strong>Eintritt frei.</strong></div>
              <div style="font-size:12px; color:#64748b;">www.stadtverwaltung.bruchsal.de/stadtfest</div>
            `
          },
          {
            code: "C",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m2-c",
            html: `
              <div class="anzeige-headline" style="font-size:15.5px; font-weight:800; color:#7c3aed; margin-bottom:2px;">Club Nirvana: Neueröffnung!</div>
              <div style="font-size:12.5px; font-weight:700; color:#a855f7; margin-bottom:6px;">Große Eröffnungsparty, auch für neue Mitglieder</div>
              <div style="font-size:13px; line-height:1.4; margin-bottom:6px;">
                <div>– elegantes Büffet & erlesene Weine</div>
                <div>– Tanz mit den „Beachriders“ bis in den frühen Morgen</div>
                <div>– alte und neue Clubmitglieder treffen sich</div>
              </div>
              <div style="font-size:12.5px; font-weight:700;">Moderator: Tabor Mirandos · <span style="text-decoration:underline;">www.club-nirvana.de</span></div>
            `
          },
          {
            code: "D",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m2-d",
            html: `
              <div class="anzeige-headline" style="font-size:14.5px; font-weight:800; color:#854d0e; margin-bottom:2px;">Der Buchladen am Steintor</div>
              <div style="font-size:13px; font-style:italic; font-weight:700; color:#a16207; margin-bottom:6px;">Eine ganz besondere Veranstaltung: Kaffee und Literatur</div>
              <p style="font-size:13px; margin-bottom:6px;">Der Autor Stefan Michalsky liest aus seinem neuen Werk: <strong>Das verfehlte Leben</strong></p>
              <div style="font-size:12.5px; font-weight:700;">Sonntag, 10.00 Uhr · Eintrittspreis: 8 Euro</div>
              <div style="font-size:12px; margin-top:2px;">Bitte vorher anmelden, Tel: 071 44398</div>
            `
          },
          {
            code: "E",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m2-e",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#c2410c; margin-bottom:4px;">In der Bar „Sol latino“ ist am Samstag Party</div>
              <p style="font-size:13px; margin-bottom:4px;">Live-Musik mit <strong>„Los Varaderos“</strong>. Die heißesten kubanischen Rhythmen der Stadt!</p>
              <div style="font-size:13px; line-height:1.4; margin-bottom:6px;">
                <div><strong>Einlass ab 22.00 Uhr.</strong></div>
                <div style="color:#b45309; font-weight:700;">Für Damen, die gern tanzen, ist der Eintritt frei!</div>
                <div>Ab 23.00 Uhr werden Tapas serviert.</div>
              </div>
              <div style="font-size:12px; font-weight:700; color:#c2410c;">www.sol.latino.com.ch</div>
            `
          },
          {
            code: "F",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m2-f",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#0284c7; margin-bottom:4px;">Und am Wochenende zum Bowling!</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Verbringen Sie einen anregenden Tag mit einer Gruppe von Freunden. Jede Bowling-Bahn enthält eine eigene Service-Einheit.</p>
              <p style="font-size:13px; margin-bottom:6px;">Genug Ruhe, um sich zu unterhalten – genug Platz für den Sport. Und unser Catering-Service versorgt Sie mit köstlichen Speisen.</p>
              <div style="font-size:12.5px; font-weight:700;">Tel: 089 74489012 · info@süd-bowling.com.de</div>
            `
          },
          {
            code: "G",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m2-g",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#4338ca; margin-bottom:4px;">Der musikalische Höhepunkt des Sommers!</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Am Sa. 17.08. treten <strong>Giulia Bardini und Serge Popov</strong> im Open-Air-Konzert auf dem Domplatz auf. Vor der großartigen Kulisse des nächtlichen Doms erklingen die großen Arien der italienischen Meister.</p>
              <div style="font-size:12.5px; font-style:italic; margin-bottom:4px;">Ein Feuerwerk beschließt das diesjährige Open-Air-Festival.</div>
              <div style="font-size:12px; font-weight:700; color:#4338ca;">www.open-air-festival.am.dom.de</div>
            `
          },
          {
            code: "H",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m2-h",
            html: `
              <div class="anzeige-headline" style="font-size:14.5px; font-weight:800; color:#0f172a; margin-bottom:2px;">Sonntags-Matinee im Cinema Continental</div>
              <p style="font-size:13px; margin-bottom:4px;">Das große Historiendrama aus Frankreich: <strong>Als ich Königin war – La Reine Margaux</strong></p>
              <div style="font-size:12.5px; line-height:1.4; margin-bottom:4px;">
                <div>Beginn: 11.00 Uhr, Kartenverkauf 30 Min. vorher (Doppelte Filmdauer)</div>
                <div><strong>OmU (Originalsprache mit Untertiteln)</strong> · Freigegeben ab 16 J.</div>
              </div>
              <div style="font-size:12px; color:#475569;">www.cinema-continental.com.at</div>
            `
          },
          {
            code: "I",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m2-i",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#047857; margin-bottom:2px;">Meditation und Yoga im Südpark</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:4px;">Zwei Tage lang treffen sich Yoga-Anhänger auf der großen Wiese im Südpark. Der berühmte Yogalehrer Madhavi Chopra lädt ein:</p>
              <div style="font-size:12.5px; line-height:1.4; margin-bottom:4px;">
                <div>– Hatha Yoga · Meditation · Vorträge · Diskussion</div>
              </div>
              <div style="font-size:12px; font-weight:700; color:#047857;">Bitte rechtzeitig eintragen: www.madhavi-chopra.de</div>
            `
          },
          {
            code: "J",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m2-j",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#991b1b; margin-bottom:2px;">Weinfest auf dem Geisenheimer Platz</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:4px;">Zwanzig deutsche Winzer aus den besten Weinbaugebieten laden ein. Rund um den Weinbrunnen haben sie ihre Zelte aufgeschlagen:</p>
              <div style="font-size:12.5px; line-height:1.4; margin-bottom:4px;">
                <div>– Informationen · Weinprobe · Attraktive Kaufangebote</div>
                <div><strong>Eröffnung: Samstag, 12.00 Uhr</strong></div>
              </div>
              <div style="font-size:12px; color:#991b1b;">www.geisenheimerplatz.de/weinfest</div>
            `
          }
        ],
        example: { text: "Stefan ist Kino-Fan. Er hat eine große Sammlung alter Filme auf DVD. Aber im Kino ist es natürlich viel schöner.", answer: "A" },
        questions: [
          { id: 13, type: "match", text: "Frau Gabriell liebt klassische Musik. Sie würde gern ein Konzert besuchen oder in die Oper gehen. Am Samstagabend hat sie schon etwas vor.", answer: "X" },
          { id: 14, type: "match", text: "Miriam bekommt am Wochenende Besuch von ihrer japanischen Freundin Ai, die nur wenig Deutsch spricht. Ai kann sehr gut Französisch. Für klassische Musik interessieren sich die beiden nicht.", answer: "H" },
          { id: 15, type: "match", text: "Philipp war sechs Monate lang in Thailand. Jetzt möchte er seine Freunde an einem Ort treffen, wo sie miteinander sprechen, etwas essen und etwas Lustiges machen können.", answer: "F" },
          { id: 16, type: "match", text: "Familie Steiner, Vater, Mutter und drei Kinder, möchte für den Sonntag etwas planen, das auch den Kindern Spaß macht. Sie können nicht viel Geld ausgeben.", answer: "B" },
          { id: 17, type: "match", text: "Stefan und Marie wollen groß ausgehen: gut essen, tanzen, neue Leute kennenlernen.", answer: "C" },
          { id: 18, type: "match", text: "Tanja und Claire hören gern gute Musik, sie tanzen auch gern und gut, am liebsten lateinamerikanische Tänze. Viel Geld haben sie allerdings nicht.", answer: "E" },
          { id: 19, type: "match", text: "Herr Mirolek möchte am Wochenende eine kulturelle Veranstaltung besuchen. Abends will er bei seiner Familie sein.", answer: "D" }
        ]
      },
      {
        id: 4,
        title: "Teil 4",
        time: 15,
        instructions: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über die Gewinnung von Energie aus Getreide (sogenannte „Bio-Energie“). Wählen Sie: Ist die Person für die Produktion von Bio-Energie?",
        example: { who: "Nina, 45, St. Wendel", text: "Ich verstehe nicht, wie es möglich ist, dass nicht die ganze Menschheit aufsteht gegen diesen Irrsinn! Wir produzieren Lebensmittel und darin verbrennen wir sie, damit unsere Autos fahren können. In Südamerika und in Afrika steigt der Preis für Mais so hoch, dass die Menschen ihn nicht mehr bezahlen können und hungern müssen. Wie lange soll das noch so weitergehen?", answer: "nein" },
        letters: [
          { id: 20, who: "Stefanie, 28, Koblenz", text: "In Deutschland will offenbar niemand mehr Atomkraftwerke. Wir wollen auch nicht von den Öl-Staaten abhängig sein, die uns den Benzinpreis diktieren. Aber Bio-Gas, das aus Getreide produziert wird, wollen wir auch nicht. Nur geht es nicht mehr anders: Wenn wir weiterhin unseren Lebensstandard behalten wollen, müssen wir auch die erneuerbare Energie aus Getreide akzeptieren.", answer: "ja" },
          { id: 21, who: "Carlos, 30, Berlin", text: "Ich bin viel in Südamerika gereist und ich habe gesehen, was es bedeutet, wenn die Preise für Lebensmittel steigen. Mais ist dort die Grundlage der Ernährung für die Bevölkerung auf dem Lande. Es kann uns nicht egal sein, dass die Menschen in Honduras hungern, nur damit wir in Europa oder in Amerika genügend Energie zur Verfügung haben!", answer: "nein" },
          { id: 22, who: "Robin, 17, Gelsenkirchen", text: "Ich hoffe, dass es in Zukunft möglich sein wird, neue Formen von erneuerbarer Energie zu finden. Es wird Elektroautos geben, die mehr als 200 km Autonomie haben. Oder die Forscher finden andere Lösungen. Jedenfalls meine ich, dass die Industrie-Länder ganz schnell damit aufhören müssen, Energie aus Lebensmitteln herzustellen!", answer: "nein" },
          { id: 23, who: "Michaela, 22, Linz", text: "In dem Artikel wird berichtet, dass die reichen Länder große Gebiete in der dritten Welt aufkaufen, um dort Getreide anzubauen. Die Ernte wird dann aber nicht für die Ernährung von Menschen oder Tieren verbraucht, sondern für die Erzeugung von Energie. Ich finde das furchtbar! Denn schon heute ist es unmöglich, alle Menschen ausreichend mit Nahrung und Trinkwasser zu versorgen – was erwartet uns in der Zukunft?", answer: "nein" },
          { id: 24, who: "Julia, 35, Bern", text: "Es stimmt natürlich, dass die großen Industrie-Nationen den größten Teil der vorhandenen Energiereserven verbrauchen, ohne sich viel darum zu kümmern, wie die Länder der dritten Welt sich entwickeln. Dazu gehört auch die Gewinnung von Energie aus Getreide. Ob wir das schön finden oder nicht, wir haben im Moment keine andere Wahl.", answer: "ja" },
          { id: 25, who: "Antonia, 61, Hannover", text: "Nicht nur die großen Konzerne machen mit, die Energie aus Getreide produzieren und daran gut verdienen. Wir alle, die wir in den „reichen Ländern“ leben und unseren täglichen Komfort nicht verlieren wollen, wir alle sind daran beteiligt, dass die Preise für Lebensmittel in Afrika steigen und unbezahlbar werden. Es gibt im Moment keine andere Lösung, deshalb müssen wir auf diesem Wege weitergehen.", answer: "ja" },
          { id: 26, who: "Andreas, 55, Pinneberg", text: "Ich finde es schrecklich, wenn Leute über den Hunger in Afrika jammern und gleichzeitig die Bio-Energie benutzen. Wir sollten ehrlich zugeben, dass wir Energie aus Getreide machen, weil wir die Energie brauchen. Vielleicht gibt es bald andere Möglichkeiten, aber das liegt noch weit in der Zukunft. Wir müssen mit dem leben, was heute möglich ist.", answer: "ja" }
        ]
      },
      {
        id: 5,
        title: "Teil 5",
        time: 10,
        instructions: "Sie informieren sich über die Hausordnung der Jugendherberge in Hamburg, in der Sie drei Tage übernachten wollen. Wählen Sie bei jeder Aufgabe 27 bis 30 die richtige Lösung a, b oder c.",
        articles: [{
          heading: "Herbergsordnung",
          sub: "Jugendherberge Hamburg · Hausordnung für Gäste und Gruppen",
          body: [
            "<strong>Ankunft</strong><br>– Es wird empfohlen, sich 24 Stunden vor der Ankunft anzumelden.<br>– Reservierte Plätze werden bis 18.00 Uhr freigehalten, danach können sie an andere Gäste vergeben werden.<br>– Wenn Sie nicht angemeldet sind, können Sie telefonisch oder direkt in der Jugendherberge erfahren, ob es freie Plätze gibt.",
            "<strong>Mitgliedskarte der DJH*</strong><br>– Wer in einer Jugendherberge übernachten möchte, muss Mitglied des „Deutschen Jugendherbergswerkes“ oder eines anderen Jugendherbergsverbandes sein.<br>– Reisende mit deutscher Anschrift können auch in der Jugendherberge die Mitgliedskarte erwerben.<br>– Ausländische Gäste ohne Mitgliedskarte können in der Jugendherberge eine „Internationale Gastkarte“ erwerben.",
            "<strong>Aufenthalt</strong><br>– Unsere Gäste übernachten in Mehrbettzimmern, in der Regel nach Geschlecht getrennt.<br>– Familien können in einem Zimmer gemeinsam untergebracht werden.<br>– Wir bitten Sie während Ihres Aufenthaltes um Mithilfe. Dazu gehört z. B., dass Sie die Räume und Gegenstände in Ordnung halten, beim Tischdienst helfen, Abfall getrennt sammeln und mit Energie und Wasser sparsam umgehen.<br>– In den Schlafräumen dürfen Sie nicht kochen oder essen.",
            "<strong>Wertgegenstände und Gepäck</strong><br>– Die Herbergsverwaltung ist nicht verantwortlich für Gepäck und andere Gegenstände, die in den Schlafräumen verbleiben.<br>– Geld und andere Wertgegenstände können an der Rezeption abgegeben werden.<br>– Verschließbare Schrankfächer stehen gegen eine Gebühr zur Verfügung.",
            "<strong>Alkohol und Tabak</strong><br>– Rauchen ist in der Jugendherberge nicht gestattet.<br>– Zum Essen können erwachsene Gäste Bier und Wein bestellen (kostenpflichtig).<br>– Der Konsum von mitgebrachten alkoholischen Getränken ist in der Jugendherberge nicht erlaubt.<br>– Alkoholisierten Gästen kann der Aufenthalt in der Jugendherberge verboten werden.",
            "<strong>Öffnungszeiten</strong><br>– Die Jugendherberge ist in der Regel von 7.00 bis 22.00 Uhr geöffnet. Ausnahmen müssen mit der Herbergsleitung abgesprochen werden.<br>– Die Nachtruhe beginnt um 22.00 Uhr und endet um 7.00 Uhr.<br>– Bitte nehmen Sie bei Ihrem Aufenthalt Rücksicht auf andere Gäste.",
            "<strong>Abreise</strong><br>– Die Schlafräume müssen bis 10.00 Uhr geräumt sein.<br>– Nach Absprache mit der Herbergsleitung sind Ausnahmen möglich.<br><br><small><em>*Deutsches Jugendherbergswerk</em></small>"
          ]
        }],
        example: { text: "Rauchen in der Jugendherberge …", options: ["ist nur im Freien gestattet.", "ist generell nicht gestattet.", "ist nach 22 Uhr erlaubt."], answer: 1 },
        questions: [
          { id: 27, type: "mcq", text: "Die Gäste der Jugendherberge …", options: ["müssen auf jeden Fall vor der Ankunft ein Zimmer reservieren.", "schlafen in Einzel- oder Doppelzimmern.", "können bei der Ankunft in den Jugendherbergsverein eintreten."], answer: 2 },
          { id: 28, type: "mcq", text: "Alkoholische Getränke …", options: ["sind in der Jugendherberge verboten.", "kann man in der Jugendherberge kaufen.", "dürfen nicht beim Essen konsumiert werden."], answer: 1 },
          { id: 29, type: "mcq", text: "Das Gepäck …", options: ["kann man im Sekretariat abgeben.", "kann man einschließen, wenn man dafür bezahlt.", "darf man nicht in der Jugendherberge lassen."], answer: 1 },
          { id: 30, type: "mcq", text: "In der Jugendherberge wird erwartet, …", options: ["dass die Gäste das Essgeschirr selbst holen und aufräumen.", "dass die Gäste den Müll hinaustragen.", "dass die Gäste um 7.00 Uhr aufstehen."], answer: 0 }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MODELLSATZ 3: B1 PRÜFUNGSTRAINING (SET B — AUS PDF)
     Marianne / Privatschulen & Schönheitsstudie / Ferienwohnungen / Games-Steuer / Seminarhaus
     ------------------------------------------------------------------------ */
  {
    id: "modellsatz-3",
    title: "Modellsatz 3 — B1 Prüfungstraining (Set B)",
    badge: "Modellsatz 3",
    examTitle: "B1 Prüfungstraining — Set B (Training zur Prüfung Lesen)",
    examSub: "Modul Lesen · 5 Teile · 65 Minuten · Modellsatz 3 (PDF)",
    timeTotal: 65,
    parts: [
      {
        id: 1,
        title: "Teil 1",
        time: 10,
        instructions: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
        articles: [{
          heading: "Mariannes.Reiseblog.int",
          sub: "Erste Eindrücke und Erlebnisse aus Berlin",
          meta: "Mittwoch, 16. Juni",
          body: [
            "Es ist mein erster Besuch in Berlin, deshalb ist es wohl verständlich, dass ich ziemlich aufgeregt und neugierig bin. Ich bin gestern Abend angekommen und es war gar nicht so einfach, das Jugendhotel zu finden, von dem ich im Reiseführer gelesen hatte. Es liegt zwischen dem Hackeschen Markt und dem Alexanderplatz – ziemlich versteckt – in der Rosenstraße.",
            "Das Jugendhotel ist übrigens sehr zu empfehlen: saubere Doppel- oder Einzelzimmer, vernünftige Preise, gutes Frühstück und vor allem sehr nette und interessante Gäste! Bevor ich gestern schlafen gegangen bin, habe ich mich noch mit zwei amerikanischen Studentinnen verabredet, die für heute eine Fahrradtour geplant hatten und mich gern mitnehmen wollten. Sie heißen Phoebe und Anne und sind schon seit einer Woche hier.",
            "Beim Frühstück haben wir heute Morgen überlegt, wohin wir fahren wollten und was wir uns ansehen müssten. Ich wäre ja gern die Straße „Unter den Linden“ entlanggefahren, zum Brandenburger Tor, und dann am liebsten gleich in den Reichstag, in die gläserne Kuppel.",
            "„Oh nein“, hat Phoebe protestiert, „bei diesem wunderbaren Wetter willst du in den Reichstag? Da musst du auch noch stundenlang Schlange stehen, das kannst du irgendwann machen, wenn es regnet.“ Sie wollten an der Spree entlang fahren, bis zum Charlottenburger Schloss. Da könnte man ja vielleicht eine Tasse Kaffee trinken und dann sollte es weitergehen, in den Grunewald und bis an den Wannsee. „Kennt ihr denn den Weg?“ habe ich gefragt, „wart ihr da schon mal?“ Nein, das waren sie nicht, aber sie hätten eine Karte, sagten sie.",
            "Und dann sind wir losgefahren, auf wunderschönen Fahrradwegen am Fluss entlang, vorbei an Straßencafés, kleinen Geschäften, grünen Parkbänken, auf denen alte Leute saßen. Es ging wunderbar schnell und leicht, manchmal wäre ich gern stehen geblieben, um die Touristenschiffe anzusehen. Nach einer Stunde waren wir schon am Schloss Charlottenburg. Es wäre noch schneller gegangen, wenn wir bei einer der großen Straßen nicht einen Fehler gemacht hätten. Wir sind da wohl in die falsche Richtung gefahren.",
            "In einem kleinen Café beim Schloss haben wir in der Sonne gesessen und Eistee getrunken. Danach wollten Phoebe und Anne sofort weiterfahren, aber ich hatte keine Lust mehr: Der Park beim Schloss ist so schön, mit Blumen und großen Bäumen und künstlichen Seen. Außerdem ist der Ku’damm mit den eleganten Geschäften gar nicht weit weg. Ich wollte meinen ersten Tag in Berlin genießen, nicht nur Sport treiben. Ich war also im Schloss und im Park, ich habe einen Einkaufsbummel gemacht und später sogar noch eine Stadtrundfahrt mit dem Schiff. Es war ein wunderbarer Tag und ich muss sagen: In Berlin mit dem Fahrrad unterwegs sein, das geht prima. Ich werde morgen wieder mit dem Fahrrad fahren, auf der Straße „Unter den Linden“!",
            "Für heute Gute Nacht!"
          ],
          signature: "Eure Marianne"
        }],
        example: { text: "Marianne ist zum ersten Mal zu Besuch in Berlin.", answer: "richtig" },
        questions: [
          { id: 1, type: "tf", text: "Ein Freund hat Marianne ein paar Tipps gegeben, wo man in Berlin gut übernachten kann.", answer: "falsch" },
          { id: 2, type: "tf", text: "Die Amerikanerinnen kennen die Stadt gut, weil sie in Berlin studieren.", answer: "falsch" },
          { id: 3, type: "tf", text: "Wenn Touristen in den Reichstag gehen wollen, müssen sie oft längere Zeit warten.", answer: "richtig" },
          { id: 4, type: "tf", text: "Als Marianne und ihre Freundinnen am Schloss ankommen, sind sie sehr müde, weil die Fahrt so schwierig war.", answer: "falsch" },
          { id: 5, type: "tf", text: "Marianne will nicht zum Wannsee fahren, weil das Wetter nicht mehr so gut ist.", answer: "falsch" },
          { id: 6, type: "tf", text: "Marianne findet, dass ein Fahrrad in der Stadt sehr nützlich ist.", answer: "richtig" }
        ]
      },
      {
        id: 2,
        title: "Teil 2",
        time: 20,
        instructions: "Lesen Sie den Zeitungsartikel und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        articles: [{
          heading: "PRIVAT GEGEN STAAT: ZERSTÖREN PRIVATSCHULEN DIE GESELLSCHAFT ODER SIND SIE FÜR DIE BILDUNG UNBEDINGT NÖTIG?",
          body: [
            "Wie ist es zu erklären, dass so viele deutsche Eltern ihre Kinder lieber in eine private Waldorf- oder Montessori-Schule schicken als in eine staatliche Schule? Wollen sie, dass ihre Kinder in einer geschützten Atmosphäre aufwachsen, dass sie nicht auf schwierige Schüler oder Migranten treffen? Michael Körner von der Universität Düsseldorf erklärt, dass diese Fragen sicherlich auch mitspielen, wenn Eltern eine Schule suchen, aber sie sind nicht die wichtigsten Punkte.",
            "Privatschulen werden finanziell zu 70 % vom Staat gefördert, die anderen 30 % müssen aus den Elternbeiträgen kommen, das sind in der Regel 70 bis 150 Euro pro Monat. Natürlich gibt es auch die teuren Eliteschulen, die über tausend Euro pro Monat kosten, weil sie nicht vom Staat gefördert werden. Die sind aber nur für wenige Familien interessant.",
            "Tatsächlich wurde die erste Waldorf-Schule als Bildungsinstitut für Arbeiterkinder gegründet und noch heute versucht die Waldorf-Bewegung, an dieser Idee festzuhalten, indem sie z. B. Schulen in sozial schwierigen Vierteln aufbauen.",
            "Michael Körner glaubt, dass die meisten Eltern die Schule für ihre Kinder nach ziemlich praktischen Überlegungen wählen: Bietet die Schule Ganztagsunterricht an? Wie weit ist der Schulweg? Wie wichtig ist die musische Erziehung? Kann mein Kind dort Spanisch lernen? Bekommt mein Kind Gitarrenunterricht? usw.",
            "Das sind die Sorgen der Eltern und die Privatschulen kommen ihnen entgegen. Vielleicht sollten die staatlichen Schulen darüber auch einmal nachdenken. Übrigens sind die Leistungen der Privatschüler keineswegs besser als die Leistungen der Schüler an staatlichen Schulen. In diesem Punkt sind die Auskünfte der PISA-Studie völlig eindeutig."
          ],
          source: "(aus einer deutschen Zeitung)"
        }],
        example: { text: "Eltern in Deutschland …", options: ["schicken ihre Kinder nie auf Privatschulen.", "interessieren sich zunehmend für alternative Schulmodelle.", "lehnen Ganztagsunterricht grundsätzlich ab."], answer: 1 },
        questions: [
          { id: 7, type: "mcq", text: "Was ist für die Eltern wichtig?", options: ["Sie wollen vor allem eine strenge Erziehung für ihre Kinder.", "Sie haben Angst, dass ihre Kinder fremde Ideen kennenlernen.", "Sie suchen Lösungen für ganz individuelle Probleme."], answer: 2 },
          { id: 8, type: "mcq", text: "Private Schulen …", options: ["sind nur für sehr reiche Familien wichtig.", "werden teilweise aus öffentlichen Mitteln bezahlt.", "waren immer Institute für die bürgerliche Gesellschaft."], answer: 1 },
          { id: 9, type: "mcq", text: "Michael Körner glaubt, dass die Privatschulen wichtig sind, weil sie …", options: ["vielleicht auch Einfluss auf die anderen Schulen haben könnten.", "Deutsch als Zweitsprache unterrichten können.", "Hilfe bei den Hausaufgaben anbieten können."], answer: 0 }
        ],
        articles2: [{
          heading: "Haben schöne Frauen mehr Erfolg im Beruf?",
          sub: "Hübsche Schülerinnen und Schüler haben es leichter, aber bei der Bewerbung sind schöne Frauen im Nachteil. Woran liegt das?",
          body: [
            "Psychologen haben herausgefunden, dass wir symmetrische Gesichter mit glatter Haut und hohen Wangenknochen unbewusst mit positiven Eigenschaften verbinden. Wir glauben, dass schöne Menschen freundlich, zuverlässig und kompetent sind. Dann müsste man doch vermuten, dass solche Menschen es auf jeder Station ihres Lebens leichter haben als andere. Jetzt zeigen zwei Studien: Für die Schule ist das richtig, nicht aber im Beruf.",
            "Die Wiener School of Education hat mit drei Klassen eines Gymnasiums untersucht, um den Einfluss der Schönheit auf die Noten nachzuweisen. Sie fanden heraus, dass attraktive Jugendliche tatsächlich um 0,5 bis 0,75 Notenpunkte besser beurteilt werden als andere Schüler mit gleichen Leistungen.",
            "Wie ist es aber im Berufsleben: Bekommen attraktive Menschen auch die besten Arbeitsplätze? Zwei Wissenschaftler an der Universität in Tel Aviv verschickten für ihre Studie 2500 Bewerbungen mit Fotos. Die Hälfte der Fotos zeigten schöne Männer und Frauen, die anderen gehörten zu durchschnittlichen Gesichtern. Das Resultat war erstaunlich: Gutaussehende Männer wurden doppelt so oft angefragt wie die anderen Bewerber.",
            "Bei den Frauen war das Gegenteil der Fall. Von den schönen Frauen bekamen nur 10 % eine positive Antwort, während von den alltäglichen Damen etwa ein Drittel zur Vorstellung eingeladen wurde. Bei der Suche nach den Gründen fanden die Wissenschaftler heraus, dass in den Personalbüros der Firmen fast ausschließlich Frauen sitzen – und die glauben offenbar, dass schöne Frauen das Betriebsklima stören."
          ],
          source: "(aus einer österreichischen Zeitung)"
        }],
        instructions2: "Lesen Sie den Zeitungsartikel und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        questions2: [
          { id: 10, type: "mcq", text: "Wissenschaftler haben bewiesen,", options: ["dass attraktive Menschen überall leicht Erfolg haben.", "dass Schönheit und gute Leistung zusammen gehören.", "dass Lehrer sich vom Aussehen beeinflussen lassen."], answer: 2 },
          { id: 11, type: "mcq", text: "Wie wurde die Studie in Tel Aviv organisiert?", options: ["Auf 50 % der Fotos waren gutaussehende Männer zu sehen.", "10 % der Fotos zeigten unattraktive Personen.", "50 % der Fotos zeigten ganz normale Leute mit alltäglichem Aussehen."], answer: 2 },
          { id: 12, type: "mcq", text: "Was fanden die Wissenschaftler heraus?", options: ["Für die Firma ist es wichtig, dass neue Mitarbeiter keinen Streit verursachen.", "Gutes Aussehen ist für Männer genauso wichtig wie für Frauen.", "Bewerber mit durchschnittlichem Aussehen haben bessere Chancen."], answer: 0 }
        ]
      },
      {
        id: 3,
        title: "Teil 3",
        time: 10,
        instructions: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen A bis J aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige, in diesem Fall wählen Sie X.",
        adsFormatted: [
          {
            code: "A",
            tagPos: "left",
            hasPin: true,
            cardClass: "anzeige-style-m3-a",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#b45309; margin-bottom:4px;">Ganzjährige Vermietung in der Toskana</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Wer träumt nicht von einem Haus in der Toskana? Hier wird Ihr Traum Wirklichkeit, in den Hügeln hinter Florenz, mit Blick auf die Weinberge.</p>
              <div style="font-size:12.5px; font-weight:700; color:#92400e;">Vertragsabschluss: mindestens sechs Monate. Tel: 040 55984023</div>
            `
          },
          {
            code: "B",
            tagPos: "right",
            hasPin: true,
            cardClass: "anzeige-style-m3-b",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; font-style:italic; color:#be185d; margin-bottom:4px;">Lieben Sie Mozart?</div>
              <p style="font-size:13px; margin-bottom:6px;">Ferienwohnung in Salzburg, 2 Zimmer, 3 Schlafplätze, Kochnische, Bad.</p>
              <div style="font-size:12.5px; font-weight:700; color:#9d174d;">Zu vermieten während des Salzburger Musikfestivals. jwedinger@gmx.com</div>
            `
          },
          {
            code: "C",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m3-c",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#0284c7; margin-bottom:4px;">Ferienwohnung am Strand</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Blick auf die Adria, 2 Zimmer, 4 Schlafplätze, preisgünstig zu vermieten vom 22.5.–15.6., zentrale Lage an der Promenade von San Benedetto.</p>
              <div style="font-size:12.5px; font-weight:700;">Vermietung direkt vom Besitzer: smueller@libero.it</div>
            `
          },
          {
            code: "D",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m3-d",
            html: `
              <div class="anzeige-headline" style="font-size:14.5px; font-weight:800; color:#15803d; margin-bottom:4px;">Ferienanlage in Zug (CH) bietet ein komplexes Angebot:</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Geführte Touren im Gebirge, kulturelle Events, Kochkurse, Kindergarten, Malkurse, Museumsbesuche, Busfahrten durch die französische Schweiz und an den Bodensee.</p>
              <div style="font-size:12.5px; font-weight:700; color:#166534;">www.ferien-zug-meyer.ch</div>
            `
          },
          {
            code: "E",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m3-e",
            html: `
              <div class="anzeige-headline" style="font-size:14.5px; font-weight:800; color:#ea580c; margin-bottom:4px;">SEHR GÜNSTIGES ANGEBOT:</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Ferienwohnung auf Mallorca, frei vom 13.–25.9. und vom 28.9.–10.10., Strandnähe, 2,5 Zimmer, 6 Schlafplätze.</p>
              <div style="font-size:12.5px; font-weight:700;">Tel: 089 15921675</div>
            `
          },
          {
            code: "F",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m3-f",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#0369a1; margin-bottom:4px;">Ostsee-Urlaub für Familien</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Ferienwohnungen auf Usedom: 4–6 Schlafplätze, Küche und Bad, Autostellplatz, Kursangebote für Kunsthandwerk (Keramik, Malen, Filzen, Tischlern), Fahrzeit zum Strand 15 Min.</p>
              <div style="font-size:12.5px; font-weight:700; color:#0284c7;">www.kulturgut-auf-usedom.de</div>
            `
          },
          {
            code: "G",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m3-g",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#0f766e; margin-bottom:4px;">Ferienwohnung mit Blick auf den See</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">2 Zimmer, sehr elegant eingerichtet, große Küche, Bad, 2 Fahrräder, gute Lage an der Seepromenade, 10 Min. vom Zentrum Überlingen.</p>
              <div style="font-size:12.5px; font-weight:700;">Tel: 0160 658872</div>
            `
          },
          {
            code: "H",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m3-h",
            html: `
              <div class="anzeige-headline" style="font-size:15px; font-weight:800; color:#1e40af; margin-bottom:4px;">FERIEN AUF SYLT</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Das Schönste, was Ihnen die nördlichste deutsche Insel bieten kann: Ferienwohnung mit Segelboot, Vermietung nur bei Vorlage des Bootsführerscheins.</p>
              <div style="font-size:12.5px; font-weight:700;">Tel: 04859 5537</div>
            `
          },
          {
            code: "I",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-m3-i",
            html: `
              <div class="anzeige-headline" style="font-size:14.5px; font-weight:800; color:#334155; margin-bottom:4px;">Sie haben Besseres verdient als ein Hotelzimmer!</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Sie wollen Berlin kennenlernen und sich trotzdem wie zu Hause fühlen? Dann gehen Sie nicht ins Hotel, sondern mieten Sie eine Wohnung in der Hauptstadt-Residenz.</p>
              <div style="font-size:12.5px; font-weight:700; color:#0f172a;">www.hauptstadt-residenz.de</div>
            `
          },
          {
            code: "J",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-m3-j",
            html: `
              <div class="anzeige-headline" style="font-size:14.5px; font-weight:800; color:#047857; margin-bottom:4px;">Ferienanlage auf Skopolos – die griechische Inselwelt erleben!</div>
              <p style="font-size:13px; line-height:1.4; margin-bottom:6px;">Wunderschöne Ferienhäuschen direkt am Strand, jedes mit 2–4 Schlafplätzen. Restaurant und Strandbar, Fahrradverleih, Segel- und Tauchunterricht. Anfragen auf Englisch an:</p>
              <div style="font-size:12.5px; font-weight:700; color:#065f46;">skopolos-aris@gmx.com</div>
            `
          }
        ],
        example: { text: "Susanne will mit zwei Freundinnen in Südeuropa Ferien am Meer machen: schwimmen, faulenzen, in der Sonne liegen. Sie können nur im Juli fahren.", answer: "X" },
        questions: [
          { id: 13, type: "match", text: "Stefan will mit drei Freunden im August oder September Urlaub machen. Sie träumen von Sonne und Musik und Partys am Meer, aber sie haben wenig Geld.", answer: "E" },
          { id: 14, type: "match", text: "Familie Meyerberg möchte in der Schweiz Urlaub machen. Die Eltern sind begeisterte Bergwanderer, die Kinder sind noch klein und brauchen tagsüber Betreuung.", answer: "D" },
          { id: 15, type: "match", text: "Christian und Sabine wollen ein Haus in Südeuropa mieten, in dem sie vielleicht auch Gäste haben können. Es soll im Frühling sein, vielleicht zwei Wochen im Mai.", answer: "C" },
          { id: 16, type: "match", text: "Michael und sein Freund sind Wassersportler. Sie würden am liebsten auf einem Schiff Urlaub machen, aber ihre Frauen wollen unbedingt eine Wohnung haben.", answer: "H" },
          { id: 17, type: "match", text: "Herr Krauser möchte seiner Frau etwas Besonderes schenken: einen Urlaub mit kulturellen Höhepunkten.", answer: "B" },
          { id: 18, type: "match", text: "Herr und Frau Schäfer leben in Dinkelsbühl. Sie wollen im Urlaub gern einmal probieren, wie das Leben in einer Großstadt ist.", answer: "I" },
          { id: 19, type: "match", text: "Familie Brandt will Urlaub am Meer machen, aber die Kinder (14 und 15 J.) wollen nicht immer nur am Strand sein.", answer: "J" }
        ]
      },
      {
        id: 4,
        title: "Teil 4",
        time: 15,
        instructions: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über die Einführung einer Steuer auf Computerspiele. Wählen Sie: Ist die Person für die Einführung einer Steuer auf Computerspiele?",
        example: { who: "Erika, 44, Hamburg", text: "Auf Computerspiele zahlt der Verbraucher, genau wie auf jede andere Ware, die Mehrwertsteuer, die ja wirklich schon hoch genug ist! Ich kann nicht einsehen, warum jetzt noch eine Extrasteuer erhoben werden soll. Das ist doch wieder nur ein Trick, um uns das Geld aus der Tasche zu ziehen.", answer: "nein" },
        letters: [
          { id: 20, who: "Christian, 19, Frankfurt", text: "Ja, glauben die Leute denn, dass sie damit die Spielsucht stoppen können? Das ist doch totaler Unsinn! Die wirklichen Spielefans laden sich die heißesten Spiele sowieso im Internet herunter. Die gehen nicht in den Laden und sagen: „Ich hätte gern ein paar Killerspiele!“. Da gibt es ganze Gruppen, die seit Jahren zusammen spielen. Die lachen doch nur über so etwas wie eine Steuer auf Computerspiele!", answer: "nein" },
          { id: 21, who: "Carola, 17, Zürich", text: "Computerspiele sind genauso gut oder genauso schlecht, wie alle anderen Spiele. Oder wie Bücher und CDs und Filme. Soll jetzt vielleicht alles kontrolliert und besteuert werden, womit wir unsere Freizeit verbringen? Ich glaube, es geht nur darum, uns Geld abzunehmen, alles andere sind Lügen! Computerspiele machen Spaß, weiter nichts – wieso soll man dafür Steuern zahlen?", answer: "nein" },
          { id: 22, who: "Marion, 36, Berlin", text: "Mein Sohn ist einer von den Jugendlichen, die ihre Nächte vor dem Computer verbringen, um mit einem Team von Leuten, die er persönlich nicht kennt, komplizierte Spiele zu spielen. Er hat mir erklärt, dass es nichts gibt, was auch nur annähernd so spannend und interessant sei wie diese Spiele. Es ist einfach dumm, zu glauben, dass eine Steuer sein Verhalten ändern könnte. Außerdem wäre so eine Steuer ungerecht, sie würde nichts besser machen und viele Leute verärgern.", answer: "nein" },
          { id: 23, who: "Wolfgang, 63, Wien", text: "Wenn man eine Steuer auf Computerspiele erhebt, werden die Spiele natürlich viel teurer. Ich finde, darüber muss man nachdenken, denn das wäre vielleicht eine Möglichkeit, dafür zu sorgen, dass weniger von diesen Spielen verkauft werden. Viele junge Leute sitzen nächtelang vor dem Computer und spielen. Sie verlieren ihre Freunde und ihre sozialen Kontakte. Sie treiben keinen Sport mehr, sie spielen nur diese schrecklichen Spiele.", answer: "ja" },
          { id: 24, who: "Sonja, 31, Bern", text: "Das würde doch nur bedeuten, dass die Regierung auch noch an diesen furchtbaren Spielen verdient. Die Vorstellung, dass etwas nicht mehr gekauft wird, wenn es teurer wird, hat beim Alkohol nicht funktioniert und bei den Zigaretten auch nicht. Wenn jemand Computerspiele spielen will, tut er das, egal, wie teuer sie sind.", answer: "nein" },
          { id: 25, who: "Hartmut, 58, Münster", text: "Wie oft haben wir in den letzten Jahren gehört und gelesen, dass die jugendlichen Amoktäter jahrelang ihre ganze Freizeit am Computer verbracht haben, bevor sie dann die Pistole des Vaters nahmen, um ihre Klassenkameraden zu erschießen! Jedes Mittel soll uns recht sein, um unsere Kinder vor solchen Verbrechern zu schützen. Ich glaube, auch eine Steuer auf die Computerspiele könnte dabei nützlich sein.", answer: "ja" },
          { id: 26, who: "Gudrun, 52, Graz", text: "Meiner Ansicht nach ist das Problem viel zu komplex für eine einfache Steuererhöhung. Verbote und Steuern führen bei Jugendlichen meist nur dazu, dass die Dinge noch reizvoller werden. Stattdessen sollten Eltern und Schulen mehr Medienkompetenz vermitteln, anstatt dem Staat neue Einnahmequellen zu verschaffen.", answer: "nein" }
        ]
      },
      {
        id: 5,
        title: "Teil 5",
        time: 10,
        instructions: "Sie lesen die Informationen über ein Wochenendseminar zum Thema „Gesunde Ernährung“, an dem Sie teilnehmen wollen. Wählen Sie bei jeder Aufgabe 27 bis 30 die richtige Lösung a, b oder c.",
        articles: [{
          heading: "Informationen für Seminarteilnehmer",
          sub: "Kulturheim Fohrde (Brandenburg) · Seminar „Gesunde Ernährung“",
          body: [
            "Als Teilnehmer am Seminar „Gesunde Ernährung“ sind wir Gäste im Kulturheim in Fohrde (Brandenburg). Lesen Sie bitte die folgenden Informationen:",
            "<strong>Anreise</strong><br>Die Gäste organisieren ihre Anreise bitte so, dass alle am Freitag zwischen 16.00 und 18.00 Uhr im Kulturheim eintreffen.",
            "<strong>Unterbringung</strong><br>Für die Gäste stehen Ein- und Zweibettzimmer zur Verfügung. Bei der Ankunft hängt im Eingangsbereich des Kulturheims eine Liste aus, auf der die Namen und die Zimmernummern der Gäste zu finden sind. Auf allen Stockwerken stehen für jeweils vier Zimmer zwei große Toiletten- und Duschräume zur Verfügung.",
            "<strong>Verpflegung</strong><br>An den beiden Seminartagen werden fünf Mahlzeiten angeboten. Zusätzlich stehen im Seminarraum immer Getränke und Obst bereit. Am Tag der Anreise gibt es abends ein kaltes Buffet. Selbstverständlich entsprechen alle Speisen den Regeln der „Gesunden Ernährung“.",
            "<strong>Sauberkeit</strong><br>Während der zwei Seminartage wird in den Gästezimmern nicht sauber gemacht. Wir bitten unsere Gäste, bei der Abreise die Betten abzuziehen und alle persönlichen Gegenstände aus den Zimmern zu entfernen, auch Flaschen, Zeitungen, Prospekte usw. Die verschiedenen Mülltonnen befinden sich hinter dem Haus.",
            "<strong>Alkohol und Rauchen</strong><br>In allen Räumen des Kulturheims Fohrde ist Rauchen verboten. Zu den Mahlzeiten werden Obstsäfte und Mineralwasser angeboten. Wein und Bier stehen gegen Bezahlung zur Verfügung.",
            "<strong>Wertsachen</strong><br>Für Bargeld und Wertgegenstände tragen die Gäste selbst die Verantwortung. Alle Gästezimmer können verschlossen werden. Außerdem können die Gäste ihre Wertgegenstände im Sekretariat abgeben.",
            "<strong>Freizeitangebote</strong><br>Im Park und am Havelufer können unsere Gäste ihre freie Zeit angenehm verbringen. Zwei Ruderboote und zehn Fahrräder stehen kostenlos zur Verfügung. Die Schlüssel für die Fahrräder bekommt man im Sekretariat.",
            "<strong>Abreise</strong><br>Die Gästezimmer müssen am Sonntag bis 18.00 Uhr geräumt sein. Das Abendessen wird am Sonntag um 18.00 Uhr serviert. Wenn Gäste schon vor dem Abendessen abreisen wollen, muss die Abreise rechtzeitig im Sekretariat mitgeteilt werden."
          ]
        }],
        example: { text: "Das Seminar findet statt …", options: ["in Berlin.", "im Kulturheim Fohrde in Brandenburg.", "auf einem Schiff."], answer: 1 },
        questions: [
          { id: 27, type: "mcq", text: "Die Seminarteilnehmer …", options: ["können in den Seminarpausen Sport treiben oder spazieren gehen.", "wollen in Fohrde Urlaub machen.", "kommen am Samstag in Fohrde an."], answer: 0 },
          { id: 28, type: "mcq", text: "Die Gästezimmer …", options: ["haben alle ein eigenes Bad.", "werden jeden Tag aufgeräumt.", "kann man abschließen."], answer: 2 },
          { id: 29, type: "mcq", text: "Die Verwaltung bittet darum, …", options: ["dass die Gäste in ihren Zimmern keinen Alkohol trinken.", "dass die Gäste den Abfall selbst wegbringen.", "dass die Gäste Bescheid sagen, wann sie essen wollen."], answer: 1 },
          { id: 30, type: "mcq", text: "Bei der Ankunft …", options: ["wird jeder Gast auf sein Zimmer geführt.", "muss man sich selbst sein Zimmer suchen.", "soll man sich in eine Liste eintragen."], answer: 1 }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MODELLSATZ 4: HUEBER MODELLTEST 13 (ZERTIFIKAT B1 NEU)
     Getreideflocken & Werbetricks / Velo-Abenteuer & Eine virtuelle Reise / Auto-Anzeigen / Graffiti-Verbot / Fenchelhonig-Packungsbeilage + Hören (Ballonfahrten, Klassenreise, Essen)
     ------------------------------------------------------------------------ */
  {
    id: "modellsatz-4",
    title: "Modelltest 13 — Hueber Zertifikat B1",
    badge: "Modelltest 13",
    examTitle: "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 13",
    examSub: "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 13 (Hueber)",
    timeTotal: 65,
    parts: [
      {
        id: 1,
        title: "Teil 1",
        time: 10,
        instructions: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
        articles: [{
          heading: "Forum – Wir sind für dich da!",
          sub: "Werbetricks",
          body: [
            "Ich möchte auch von meiner Erfahrung mit Werbetricks berichten. Meine Freundin und ich haben uns schon immer für eine ausgewogene Ernährungsweise interessiert. Deswegen aßen wir zum Frühstück gern und oft Getreideflocken der Marke „Fit“ mit Milch oder Joghurt. Ab und zu gab es sie bei uns sogar zu Abend. Nicht nur versprachen sie dem Werbetext zufolge einen hohen Anteil an Vollkorn, sondern auch „einen leichten Genuss für die Linie“, da wenig Fett und Zucker darin enthalten seien. Gutgläubig, wie wir nun mal waren, konsumierten wir umso mehr von dem Produkt und meinten, etwas Gutes für unseren Körper zu tun. Und außerdem schmecken die „Fit“-Flocken verdammt gut!",
            "Nach einiger Zeit stellten wir allerdings fest, dass wir beide zugenommen hatten. Wir führten dies anfangs auf einen Mangel an Bewegung zurück. Meine Partnerin und ich sind nämlich beide voll berufstätig und verbringen viele Stunden im Büro. Wir nahmen uns also vor, an Wochenenden mehr Sport zu treiben. Doch das führte auf die Dauer nicht zum erwünschten Ergebnis. Wir waren zwar körperlich fitter, aber abgenommen hatte keiner von uns.",
            "Da stieß ich zufällig im Internet auf eine Website zum Thema Werbetricks. Und siehe da: Unsere so „gesunden“ „Fit“-Cerealien waren dort ein Paradebeispiel dafür, wie durch falsche Informationen die Konsumenten zum Kauf eines Produkts verlockt werden. Ich erfuhr, dass die meisten Cornflakes viel zu viel Zucker enthalten. Bei der Marke unserer Wahl waren es ganze 30 %. Ich holte schnell die „Fit“-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm. Und die tägliche Verzehrsempfehlung: 40 Gramm!! Wer wird davon eigentlich satt? Ich könnte den Vormittag danach ohne Magenknurren nicht überstehen. Wir haben immer mindestens die doppelte Menge gegessen.",
            "Und was das Vollkorn betrifft, ist auch alles Schwindel. 20 Prozent Vollkornanteil sind noch lange kein echtes Vollkornprodukt. In Vollkornbrot beispielsweise müssen mindestens 90 Prozent Vollkorn stecken. Kein Wunder also, dass wir zugenommen haben, obwohl wir dachten, uns leicht und gesund zu ernähren. Seitdem essen wir zum Frühstück eine Scheibe Vollkornbrot mit Margarine, Frischkäse und Marmelade. Das kommt auf deutlich weniger Zucker pro 100 Gramm. Trotz Marmelade. Und wir haben auch schon etwas abgenommen."
          ],
          signature: "Bernd Geißner"
        }],
        example: { text: "Bernd und seine Freundin aßen ab und zu zum Frühstück „Fit“-Flocken.", answer: "falsch" },
        questions: [
          { id: 1, type: "tf", text: "„Fit“-Flocken hielt Bernd für gesund.", answer: "richtig" },
          { id: 2, type: "tf", text: "Obwohl Bernd viele Stunden arbeitete, fand er täglich Zeit für Fitness-Übungen.", answer: "falsch" },
          { id: 3, type: "tf", text: "Die „Fit“-Flocken werden fast ausschließlich aus Zucker hergestellt.", answer: "falsch" },
          { id: 4, type: "tf", text: "Auf der „Fit“-Packung stehen nur Lügen.", answer: "falsch" },
          { id: 5, type: "tf", text: "Bernd nahm zu, da er zu viel von den Flocken aß.", answer: "richtig" },
          { id: 6, type: "tf", text: "Die „Fit“-Flocken sind eigentlich kein Vollkornprodukt.", answer: "richtig" }
        ]
      },
      {
        id: 2,
        title: "Teil 2",
        time: 20,
        instructions: "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        articles: [{
          heading: "Velo¹-Abenteuer",
          body: [
            "Beim Stichwort „Alpentransit“ denken die meisten an Verkehrspolitik und Staus. Nicht so die Mountainbiker. Für sie sind die Alpen eine willkommene Gelegenheit, die eigenen Grenzen auszuprobieren; eins der letzten grossen Gebiete im sonst weitgehend erschlossenen Europa. Von Wien bis Nizza sind die Alpen nicht nur eine Klima- und Wasserscheide. Abseits grosser Ballungsräume und Autobahnen geht hier alles einen etwas ruhigeren Gang. Die Alpen bieten für jeden Geschmack passende Routen, das reicht von der vier Meter breiten Schotterstrasse bis zu Feld- und Alpwegen oberhalb der Baumgrenze.",
            "Landschaftlich wie historisch lohnen sich besonders die Dolomiten. Wer innert fünf Tagen von Innsbruck zum italienischen Skiort Cortina d’Ampezzo radelt, bekommt unterwegs eine Menge geboten. Dabei wird das unbestrittene Highlight zum Schluss serviert, quasi als Dessert mit hohem Erinnerungswert. Doch schön der Reihe nach: Zuerst fährt man oberhalb der Brenner-Autobahn und hat einen herrlichen Panoramablick, vorbei an Apfelplantagen. Das erste Highlight ist ein Bergweg an der Steilwand des Kreuzkofels entlang, direkt an der Baumgrenze mit Ausblick auf weitere Dolomitenberge. Am Ende der Tour erreicht man den Fanes-Kessel, das absolute Highlight. Dort gibt es rundum steile Bergflanken, unten einige Bergseen, gespeist von Wasserfällen, und natürlich auch Berghütten, in denen man sich bei Apfelschorle und leckerer Pasta Napoli stärken kann. Einfach unvergesslich!"
          ],
          source: "¹ Velo = Schweizer Standard für „Fahrrad“ (aus einer Schweizer Zeitung)"
        }],
        example: { text: "In den Alpen …", options: ["gibt es viele unterschiedliche Reisewege.", "sind oberhalb der Baumgrenze keine Wege.", "gibt es Essen für jeden Geschmack."], answer: 0 },
        questions: [
          { id: 7, type: "mcq", text: "In diesem Text geht es um …", options: ["Umweltprobleme in den Alpen.", "Velofahren in der Schweiz.", "Velo-Touren in den Alpen."], answer: 2 },
          { id: 8, type: "mcq", text: "Auf der Tour von Innsbruck nach Cortina d’Ampezzo …", options: ["gibt es schöne Desserts.", "kann man viel sehen.", "reisen die Mountainbiker sehr gern."], answer: 1 },
          { id: 9, type: "mcq", text: "In den Berghütten des Fanes-Kessels …", options: ["gibt es nur Getränke.", "kann man schlafen.", "kann man lecker essen."], answer: 2 }
        ],
        instructions2: "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        articles2: [{
          heading: "Eine virtuelle Reise",
          body: [
            "Eine Reise um die Welt, zu bedeutenden Orten, Bauwerken oder Denkmälern muss heute nicht anstrengend oder teuer sein. Waren Sie schon auf dem Schiefen Turm von Pisa? Nein. Zu viele Touristen in der Warteschlange? Zu teuer? Keine Zeit? Oder nicht mehr gut zu Fuß? Alles kein Problem. Der Digitalisierung sei Dank.",
            "Wenn man nicht zu den Denkmälern kommt, dann kommen diese eben zu Ihnen. Eine Weltreise kann einfach am iPad oder am Computer erfolgen. Bücher, Denkmäler oder Museumsbesuche sind als virtuelle Touren im Internet verfügbar. Ein Rundgang durch den Pariser Louvre ist somit ebenso möglich wie ein Flug um die Spitze der Freiheitsstatue oder ein Rundgang durch den Grand Canyon.",
            "Mittlerweile sind virtuelle Reisen zu Denkmälern quer durch Kontinente und rund um die Welt kein Problem mehr. Auch zahlreiche Anwendungen für Smartphone – sogenannte Apps – konservieren die Kunstschätze der Welt für die nächsten Generationen. In der Österreichischen Nationalbibliothek werden die bedeutenden Werke digitalisiert und auch Google macht seit Jahren mehr oder weniger bekannte, aber auf jeden Fall erhaltenswerte Schriften aus Museen, Bibliotheken und Büchereien der digitalen Welt zugänglich."
          ],
          source: "von Gregor Kucera aus der Wiener Zeitung vom 30.09.2012"
        }],
        questions2: [
          { id: 10, type: "mcq", text: "In diesem Text geht es um …", options: ["viele Möglichkeiten, eine Reise zu machen.", "eine neue Art, Sehenswürdigkeiten kennenzulernen.", "österreichische Denkmäler."], answer: 1 },
          { id: 11, type: "mcq", text: "Google …", options: ["sorgt dafür, dass Internetnutzer Schriften aus Museen sehen und lesen können.", "arbeitet mit der Österreichischen Nationalbibliothek zusammen.", "sammelt bekannte Werke aus Museen."], answer: 0 },
          { id: 12, type: "mcq", text: "Weite Reisen …", options: ["kosten immer viel Geld.", "werden von vielen Touristen unternommen.", "können müde machen."], answer: 2 }
        ]
      },
      {
        id: 3,
        title: "Teil 3",
        time: 10,
        instructions: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige, in diesem Fall wählen Sie X.",
        situationsIntro: "Die meisten Ihrer Bekannten haben ein Auto. Aber ein Auto ist nicht nur praktisch, sondern es macht auch Arbeit und manchmal hat man auch Probleme. Ihre Bekannten suchen nach Lösungen.",
        example: { text: "Gerlinde muss nach Wien. Auf ihrem Programm stehen zahlreiche Geschäftstermine. Mit dem eigenen Auto und dauernder Parkplatzsuche schafft sie das nie.", answer: "H" },
        adsFormatted: [
          {
            code: "A",
            tagPos: "left",
            hasPin: true,
            cardClass: "anzeige-style-a",
            html: `
              <div class="anzeige-headline">Ihr Auto-Profi Hoffmann</div>
              <div style="background:#eef6ff; border:1px solid #c2dbfe; border-radius:6px; padding:7px; margin-bottom:8px; font-size:13px; line-height:1.4;">
                <strong>Pannenskurse für Frauen:</strong> Zusammen mit der Volkshochschule Ulm bieten wir exklusiv Pannenskurse für Frauen an. Die Anmeldung für diese Fortbildung ist kostenlos und nur über die VH Ulm möglich!<br><strong>Nächster Termin: 15. Oktober</strong>
              </div>
              <div style="background:#f9f9f9; border:1px solid #e0e0e0; border-radius:6px; padding:7px; font-size:12.5px; line-height:1.35; margin-bottom:6px;">
                <strong>Wir schreiben SERVICE groß:</strong> Reparaturen, jährliche Hauptuntersuchung, Pannen- und Unfallhilfe – alles zu fairen Preisen.
              </div>
              <div style="font-size:12px; color:var(--text-muted); font-weight:600;">Auto-Profi Hoffmann · Lindenburgstr. 89 · 12980 Breitenau<br>Tel.: 01278 3217 · www.auto_profi_hoffmann.de</div>
            `
          },
          {
            code: "B",
            tagPos: "right",
            hasPin: true,
            cardClass: "anzeige-style-b",
            html: `
              <div class="anzeige-headline" style="color:#b83216;">Luxus-Autowäsche nur 9,50 € <span style="font-size:13px; text-decoration:line-through; color:#777;">statt 19 €</span></div>
              <p style="margin-bottom:8px; font-size:13.5px; font-weight:700;">Verwöhnen Sie Ihr Auto – damit Sie länger Freude daran haben!</p>
              <p style="margin-bottom:8px; font-size:13px; line-height:1.4;">Nach 10 Autowäschen in einem <strong>CleanestCar-Autopflege-Center</strong> bekommen Sie bei uns eine Luxus-Autowäsche inkl. Wachs, Farbauffrischung und Felgenreinigung zum <strong>HALBEN PREIS</strong>.</p>
              <div style="font-size:12px; color:var(--text-muted); margin-top:6px;">Bei allen CleanestCar-Autopflege-Center, bis zum 30.12.<br><strong>www.cleanestcar.de</strong></div>
            `
          },
          {
            code: "C",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-c",
            html: `
              <div class="anzeige-headline" style="color:#206b3a;">Umweltbewusst fahren – zu fairen Preisen</div>
              <p style="margin-bottom:6px; font-size:13px;"><strong>autoscout24 – Österreichs größter Automarkt</strong><br>jetzt auch in Klosterneuburg</p>
              <p style="margin-bottom:6px; font-size:13px; line-height:1.4;">Große Auswahl an gebrauchten Elektroautos.<br><strong>Super-Sonderangebot zur Eröffnung:</strong> 10% auf alle E-Autos!</p>
              <div style="font-size:12px; color:var(--text-muted); font-weight:600;">autoscout24 · Alpenstraße 24 · Klosterneuburg<br>www.autoscout.at · Tel.: +43(0)2243/87725</div>
            `
          },
          {
            code: "D",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-d",
            html: `
              <div class="anzeige-headline">Autohaus Hellmer — Mobilitätsgarantie</div>
              <p style="font-size:13px; font-weight:700; color:#185a9d; margin-bottom:6px;">bis zum 1.5. nur 89,– Euro (pro Jahr inkl. jährliche Hauptuntersuchung)</p>
              <div style="font-size:12.5px; line-height:1.4; margin-bottom:8px;">
                <strong>Mobilitätsgarantie – 365 Tage im Jahr, 24 Std. am Tag:</strong><br>
                • Pannenhilfe daheim und unterwegs<br>
                • Bergen und Abschleppen bei Unfällen<br>
                • <strong>Ersatzwagen bis zu 3 Tagen</strong> oder Hotelübernachtung für Sie und Ihre Mitfahrer
              </div>
              <div style="font-size:12px; color:var(--text-muted);">Bergerstr. 17 · 78934 Saalfeld · Tel: (06510) 17 78-0<br>www.autohaus-hellmer.de · info@autohaus-hellmer.de</div>
            `
          },
          {
            code: "E",
            tagPos: "left",
            hasPin: true,
            cardClass: "anzeige-style-e",
            html: `
              <div class="anzeige-headline" style="color:#d9534f;">Autowaschen für einen guten Zweck</div>
              <p style="font-size:13px; margin-bottom:6px;"><strong>Na, was machen Sie so regelmäßig am Samstag?</strong><br>Ab mit dem Auto in die Waschanlage?</p>
              <p style="font-size:13px; line-height:1.4; margin-bottom:8px;">Im April können Sie das jeden Samstag bei <strong>Car Wash Royal</strong> am Klusenweg 10 in Schwerte tun und dazu einen guten Zweck unterstützen:</p>
              <div style="background:#fff3cd; border:1px solid #ffeeba; border-radius:5px; padding:6px; font-size:12.5px; font-weight:700; color:#856404; margin-bottom:6px;">
                Von jeder Fahrzeugwäsche gehen 4,– € in die Spendenkasse für die Jugendfeuerwehr Schwerte!
              </div>
            `
          },
          {
            code: "F",
            tagPos: "right",
            hasPin: true,
            cardClass: "anzeige-style-f",
            html: `
              <div class="anzeige-headline">Jetzt neu! eckert mobil</div>
              <p style="font-size:13px; font-weight:700; margin-bottom:4px;">Auto- und Motorrad-Service – alle gängigen Marken</p>
              <div style="font-size:12.5px; line-height:1.4; margin-bottom:8px;">
                <strong>Unfallinstandsetzung im eigenen Haus – Der absolute Allround-Service:</strong><br>
                • alle Reparaturen mit Original-Ersatzteilen<br>
                • <strong>gesamte Unfallabwicklung</strong> inkl. Fahrzeugabholung am Unfallort und <strong>Regelung aller Formalien mit der Versicherung</strong>!
              </div>
              <div style="font-size:12px; color:var(--text-muted); font-weight:600;">Eindhovener Str. 77 · 4175 Aachen · Tel: 02162/1020951<br>info@eckertmobil.de · www.eckertmobil.de</div>
            `
          },
          {
            code: "G",
            tagPos: "left",
            hasPin: false,
            cardClass: "anzeige-style-g",
            html: `
              <div class="anzeige-headline" style="color:#2c3e50;">Allein ist langweilig und teuer!</div>
              <p style="font-size:13px; line-height:1.45; margin-bottom:8px;">
                <strong>Suche tägl. Mitfahrgelegenheit</strong> Klosterneuburg – Wien-Zentrum, Büroarbeitszeiten.<br>
                Selbstverständlich nicht umsonst: übernehme verlässlich meinen Teil der Benzinkosten!
              </p>
              <div style="font-weight:700; font-size:13px; color:#185a9d;">Kontakt: Maximilian 0650-8977234</div>
            `
          },
          {
            code: "H",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-h",
            html: `
              <div class="anzeige-headline" style="color:#0f3460;">austriamobil — Chauffeurservice</div>
              <div style="font-size:12px; color:#555; margin-bottom:6px; font-weight:700;">verlässlich · sicher · pünktlich · komfortabel</div>
              <p style="font-size:12.5px; line-height:1.4; margin-bottom:6px;">
                Ob Sie privat oder geschäftlich unterwegs sind – mit uns wird Wien zum stressfreien Erlebnis, fern von öffentlichen Verkehrsmitteln und dauernder Parkplatz- oder Taxisuche.
              </p>
              <div style="font-size:12px; font-weight:700;">Infos & Buchung: www.austriamobil.at · Tel: +43(0)2255 77777</div>
            `
          },
          {
            code: "I",
            tagPos: "left",
            hasPin: true,
            cardClass: "anzeige-style-i",
            html: `
              <div class="anzeige-headline" style="color:#1b5e20;">Sicher & energiesparend fahren lernen</div>
              <p style="font-size:13px; font-weight:700; margin-bottom:4px;">FAHRSCHULE Peter Rüegg</p>
              <p style="font-size:12.5px; line-height:1.4; margin-bottom:6px;">
                Umweltschonend und energiesparend fahren lernen. Intensivkurse und Ferienlehrgang vom 15.07.–21.07. in Zürich.<br>
                <span style="color:#c0392b; font-weight:800; background:#fce4e4; padding:2px 5px; border-radius:3px;">Nicht für Jungfahrer.</span>
              </p>
              <div style="font-size:12px; color:var(--text-muted);">Dammstrasse 45, Zürich · Tel: 079-6135691 · www.fahrschule-rueegg.ch</div>
            `
          },
          {
            code: "J",
            tagPos: "right",
            hasPin: false,
            cardClass: "anzeige-style-j",
            html: `
              <div class="anzeige-headline" style="color:#6c3483;">Besuchen Sie den Auto Salon Genf</div>
              <p style="font-size:13px; font-weight:700; margin-bottom:4px;">Dieses Jahr im Blickpunkt: Das E-Auto</p>
              <div style="font-size:12.5px; line-height:1.4; margin-bottom:8px;">
                Neue Modelle aller Automarken – neue Technologien – bessere Leistungen!<br>
                <strong>Inklusive:</strong> 2 Wochenend-Eintrittskarten & 1 Hotelübernachtung inkl. Frühstück direkt am Messegelände ab CHF 320.
              </div>
              <div style="font-size:12px; color:var(--text-muted); font-weight:600;">Reiseagentur Genève · Tel: 058 451 49 32 · E-Mail: info@ch-travel.ch</div>
            `
          }
        ],
        questions: [
          { id: 13, type: "match", text: "Ehepaar Jansen bringt sein Auto zum Waschen regelmäßig in eine Autowaschanlage. Es sucht aber immer nach Möglichkeiten, dabei auch etwas Gutes für andere zu tun.", answer: "E" },
          { id: 14, type: "match", text: "Benno hat seit Kurzem den Führerschein, möchte aber noch mehr über sicheres und energiesparendes Fahren lernen.", answer: "X" },
          { id: 15, type: "match", text: "Frau Wyss ist mit ihrem alten Elektro-Auto nicht mehr zufrieden und möchte sich über die neuesten E-Modelle der verschiedenen Automarken informieren.", answer: "J" },
          { id: 16, type: "match", text: "Herr Wieser ist gehbehindert und fährt deshalb immer mit dem Auto ins Büro. Aber die Strecke von Klosterneuburg bis ins Zentrum von Wien ist lang und Benzin wird immer teurer.", answer: "G" },
          { id: 17, type: "match", text: "Melissa hat seit drei Monaten einen Führerschein und findet es nicht gut, dass sie noch nicht einmal einen Reifen wechseln kann.", answer: "A" },
          { id: 18, type: "match", text: "Bei ihrem letzten Unfall war Frau Schulte zwei Tage ohne Auto, was ihr bei ihrer Arbeit als Versicherungsvertreterin viele Probleme verursacht hat.", answer: "D" },
          { id: 19, type: "match", text: "Herr Nowak hatte leider schon wieder einen Unfall. Das letzte Mal hat er sich sehr über die Werkstatt und die Versicherungsvertreter geärgert.", answer: "F" }
        ]
      },
      {
        id: 4,
        title: "Teil 4",
        time: 15,
        instructions: "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot?",
        topic: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über Graffiti an den Wänden der Stadt und die Möglichkeit, dies zu verbieten.",
        example: {
          who: "Jakob, 16, Neuruppin",
          text: "Ich frage mich oft, ob Graffiti Kunst ist oder nicht. Manchmal machen die Sprayer richtig schöne Bilder oder Comics, das gefällt bestimmt jedem. Jedoch einfach nur Farbe hinzuschmieren, finde ich doof. Aber wenn ich das entscheiden müsste, würde ich es doch nicht verbieten.",
          answer: "nein"
        },
        letters: [
          { id: 20, who: "Anton, 14, Wolfratshausen", text: "Meine ältere Schwester hat schon mal mit Freunden gesprayt. Die sind da am Sonntagmorgen zu einem Industriegelände gegangen. Ich war am nächsten Tag auch da, aber mir hat ihr Kunstwerk nicht gefallen, weil es nicht so gut war. Als unsere Eltern das hörten, sind sie ausgerastet. Sie waren richtig böse und haben meine Schwester auch bestraft. Aber trotzdem, ich finde so etwas allgemein sehr cool.", answer: "nein" },
          { id: 21, who: "Ernst, 48, Heidelberg", text: "Ich mag es gern, wenn alles gepflegt und schön ist. Wenn überall Graffiti sind, sieht es unordentlich und chaotisch aus – schrecklich! Mich stört das. Wie soll man diesen Anblick nur tagein, tagaus ertragen? Kommen Sie mal zu mir, in meine Straße, und sehen Sie es sich an, dann verstehen Sie sofort, was ich meine.", answer: "ja" },
          { id: 22, who: "Conni, 37, Regensburg", text: "Was ich zu Graffiti meine? Schwer zu sagen. Es gab ja früher schon Fassadenmalereien an großen Mietshäusern in der Stadt, aber das war nicht ganz so unruhig und natürlich hatte es jemand gegen Geld gemacht. Graffiti hat immer etwas Illegales und ich denke auch, es wäre besser, so etwas nicht zu dulden. Schließlich soll nicht jeder machen können, was er will, dann hätten wir hier ein Chaos.", answer: "ja" },
          { id: 23, who: "Torben, 18, Luzern", text: "Die Frage erübrigt sich. Stellt euch doch mal vor, wie monoton unsere Städte wären. Mich nervt das Geordnete und übermässig Saubere. Man muss doch mal etwas anderes sehen können. Wenn ich mir Fotos von früher anschaue, bevor es Graffiti gab, finde ich die Stadt unvorstellbar langweilig und nichtssagend. So kann unsere Welt nicht sein!", answer: "nein" },
          { id: 24, who: "Inge, 52, Bonn", text: "Ich weiß nur, dass diese Farben ungesund sind. Einmal habe ich sogar gelesen, dass man beim Sprayen eine Gesichtsmaske tragen soll, um die giftigen Dämpfe nicht einzuatmen. Das kann nicht zugelassen werden. Sogar junge Leute müssen das verstehen. Oder kann man dabei zusehen, wie sie sich ihre Gesundheit zerstören?", answer: "ja" },
          { id: 25, who: "Gabriele, 40, Hannover", text: "Graffiti ist überall. Wir Älteren wurden nie gefragt, ob wir das wollen oder nicht. So kann doch eine Demokratie nicht funktionieren. Da haben die Lehrer und Eltern versagt. Es zeigt geradezu, dass die Erziehungsberechtigten einfach alles durchgehen lassen. Ihnen allen sollte ein Denkzettel verpasst werden. Die richtige Maßnahme wäre, streng durchzugreifen.", answer: "ja" },
          { id: 26, who: "Mara, 22, Flensburg", text: "Kaum hat sich mal jemand etwas Aufregendes ausgedacht, schon müssen alle darüber schimpfen. Das ist immer so. Es war genauso mit Piercing, Tattoo und allen Dingen, die Jugendlichen gefallen. Haben junge Leute in unserer Gesellschaft nie etwas zu sagen, können sie sich nicht frei ausdrücken? Ich lehne eine solche Bevormundung schlichtweg ab.", answer: "nein" }
        ]
      },
      {
        id: 5,
        title: "Teil 5",
        time: 10,
        instructions: "Sie informieren sich mithilfe der Packungsbeilage über den Fenchelhonig, weil Ihr kleiner Cousin krank ist. Wählen Sie bei jeder Aufgabe 27 bis 30 die richtige Lösung a, b oder c.",
        articles: [{
          heading: "Packungsbeilage – Gebrauchsinformation: Information für den Anwender",
          sub: "Fenchelhonig gegen Husten und Heiserkeit · Für Kinder ab 1 Jahr",
          meta: "Wirkstoff: 100 g Sirup enthalten 50 mg bitteres Fenchelöl",
          body: [
            "<strong>WAS IST FENCHELHONIG GEGEN HUSTEN UND HEISERKEIT?</strong><br>Fenchelhonig gegen Husten und Heiserkeit ist ein pflanzlicher Sirup mit angenehmem Geschmack gegen Erkältungskrankheiten der oberen Atemwege mit zähflüssigem Schleim bei Kindern.",
            "<strong>WIE IST FENCHELHONIG GEGEN HUSTEN UND HEISERKEIT EINZUNEHMEN?</strong><br>Falls vom Arzt nicht anders verordnet, ist die übliche Dosis: Kinder ab einem Jahr bekommen 2- bis 3-mal täglich je einen Messlöffel (5 ml / 6,5 g) [entsprechend 3,25 mg Fenchelöl] Fenchelhonig gegen Husten und Heiserkeit in Wasser, Tee oder pur.",
            "<strong>WELCHE NEBENWIRKUNGEN SIND MÖGLICH?</strong><br>Wie alle Arzneimittel kann Fenchelhonig gegen Husten und Heiserkeit Nebenwirkungen haben, die aber nicht bei jedem auftreten müssen.<br>Sehr selten können allergische Reaktionen der Haut und der Atemwege auftreten.<br>Der häufige und dauernde Gebrauch von Fenchelhonig gegen Husten und Heiserkeit kann schädlich für die Zähne sein (Karies).",
            "<strong>HINWEISE ZUR AUFBEWAHRUNG VON FENCHELHONIG GEGEN HUSTEN UND HEISERKEIT</strong><br>• Nicht über 30°C lagern; bei höheren Temperaturen im Kühlschrank aufbewahren.<br>• Sie dürfen den Sirup nach dem auf dem Etikett angegebenen Verfallsdatum nicht mehr verwenden. Das Verfallsdatum bezieht sich auf den letzten Tag des Monats.<br>• Nach Öffnen der Flasche ist das Medikament bei Beachtung der Aufbewahrungsbedingungen 6 Monate haltbar.",
            "<em>Wie alle Medikamente ist Fenchelhonig gegen Husten und Heiserkeit kindersicher aufzubewahren!</em>"
          ]
        }],
        example: { text: "Fenchelhonig ist ein Medikament …", options: ["für Erwachsene und Jugendliche.", "gegen Erkältungskrankheiten bei Kindern ab 1 Jahr.", "nur gegen Fieber."], answer: 1 },
        questions: [
          { id: 27, type: "mcq", text: "Mögliche Nebenwirkungen:", options: ["Fenchelhonig zeigt keine Nebenwirkungen.", "Es kann zu Zahnschäden kommen.", "Bei Allergikern kommt es häufig für kurze Zeit zu Hautreaktionen."], answer: 1 },
          { id: 28, type: "mcq", text: "Kinder können Fenchelhonig nehmen, …", options: ["obwohl er sehr bitter schmeckt.", "obwohl das Medikament nur künstliche Wirkstoffe enthält.", "wenn sie mindestens zwölf Monate alt sind."], answer: 2 },
          { id: 29, type: "mcq", text: "Man muss wissen, dass …", options: ["der Sirup nach dem Öffnen noch ein halbes Jahr verwendet werden kann.", "der Sirup vor der Verwendung warm gemacht werden muss.", "dass der Sirup immer im Kühlschrank stehen muss."], answer: 0 },
          { id: 30, type: "mcq", text: "Die übliche Dosis …", options: ["bestimmt der Arzt.", "kann man mit jedem Getränk einnehmen.", "gilt für jüngere und ältere Kinder."], answer: 2 }
        ]
      },
      {
        id: 6,
        title: "🎧 Hören",
        badge: "Hören",
        isHoren: true,
        time: 40,
        instructions: "Das Modul Hören besteht aus vier Teilen. Sie hören mehrere Texte und lösen Aufgaben dazu. Für jede Aufgabe gibt es nur eine richtige Lösung.",
        audioSrc: "audio/modellsatz-4-hoeren.mp3",
        audioFallbacks: [
          "audio/13.mp3",
          "audio/modellsatz-13-hoeren.mp3",
          "audio/hoeren.mp3"
        ],
        audioChapters: [
          { time: 0, label: "00:00 Einleitung" },
          { time: 25, label: "00:25 Beispiel" },
          { time: 130, label: "02:10 Teil 1 (Texte 1–5)" },
          { time: 729, label: "12:09 Teil 2 (Ballonfahrten)" },
          { time: 1022, label: "17:02 Teil 3 (Klassenreise)" },
          { time: 1288, label: "21:28 Teil 4 (Radiotalk Essen)" }
        ],
        questions: [
          // Teil 1: 1 - 10
          { id: "h1", num: 1, type: "tf", text: "Der Tipp ist für junge Leute, die studieren wollen.", answer: "falsch", teilPart: 1, textNum: 1 },
          { id: "h2", num: 2, type: "mcq", text: "Wo kann man aktiv sein?", options: ["In einem Krankenhaus.", "In einem Altenheim.", "In einer Arztpraxis."], answer: 1, teilPart: 1, textNum: 1 },
          { id: "h3", num: 3, type: "tf", text: "Die Polizei kennt den Täter.", answer: "falsch", teilPart: 1, textNum: 2 },
          { id: "h4", num: 4, type: "mcq", text: "Wie geht es der Kellnerin?", options: ["Sie ist verletzt.", "Sie ist tot.", "Sie ist betrunken."], answer: 0, teilPart: 1, textNum: 2 },
          { id: "h5", num: 5, type: "tf", text: "Die Informationen sind für Reisende, die auf dem Flughafen ankommen.", answer: "falsch", teilPart: 1, textNum: 3 },
          { id: "h6", num: 6, type: "mcq", text: "Wer muss sich beeilen?", options: ["Die Passagiere nach Frankfurt.", "Die Passagiere nach Köln.", "Die Passagiere Siebert und Johannsen."], answer: 0, teilPart: 1, textNum: 3 },
          { id: "h7", num: 7, type: "tf", text: "Sie hören eine Auskunft über die Bestellung von Eintrittskarten.", answer: "richtig", teilPart: 1, textNum: 4 },
          { id: "h8", num: 8, type: "mcq", text: "Wann kann man bestellen?", options: ["Samstag und Sonntag von 7.30 Uhr bis 18.00 Uhr.", "Montag bis Sonntag von 7.30 Uhr bis 20.00 Uhr.", "Montag bis Freitag bis 20.00 Uhr."], answer: 2, teilPart: 1, textNum: 4 },
          { id: "h9", num: 9, type: "tf", text: "Sie hören eine Werbung für Reisen.", answer: "falsch", teilPart: 1, textNum: 5 },
          { id: "h10", num: 10, type: "mcq", text: "Alle Angebote kosten …", options: ["über 100 Euro.", "unter 100 Euro.", "98 Euro."], answer: 1, teilPart: 1, textNum: 5 },

          // Teil 2: 11 - 15
          { id: "h11", num: 11, type: "mcq", text: "Wer besucht die Informationsveranstaltung?", options: ["Wer eine Ballonfahrt gewonnen hat.", "Wer das Sportmagazin liest.", "Wer an dem Quiz teilnehmen möchte."], answer: 0, teilPart: 2 },
          { id: "h12", num: 12, type: "mcq", text: "Die Piloten der Ballons …", options: ["kommen aus der Schweiz.", "holen die Gäste ab.", "fliegen seit über 20 Jahren."], answer: 2, teilPart: 2 },
          { id: "h13", num: 13, type: "mcq", text: "Wie hoch kann ein Ballon steigen?", options: ["Bis zu 30 Metern.", "Bis zu 300 Metern.", "Bis zu 3000 Metern."], answer: 2, teilPart: 2 },
          { id: "h14", num: 14, type: "mcq", text: "Die Fahrgäste sollten …", options: ["keine Höhenangst haben.", "einen Fotoapparat dabeihaben.", "vom Ballon nicht hinunterschauen."], answer: 1, teilPart: 2 },
          { id: "h15", num: 15, type: "mcq", text: "In dem ersten Ballon, der in die Luft stieg, …", options: ["war ein König.", "waren Josef und Etienne Montgolfier.", "waren Tiere."], answer: 2, teilPart: 2 },

          // Teil 3: 16 - 22
          { id: "h16", num: 16, type: "tf", text: "Herr Brunner und die Schüler organisieren die Klassenreise gemeinsam.", answer: "richtig", teilPart: 3 },
          { id: "h17", num: 17, type: "tf", text: "Die Klasse hat beschlossen, eine Radtour zu machen.", answer: "falsch", teilPart: 3 },
          { id: "h18", num: 18, type: "tf", text: "Die meisten Schüler lernen nur Englisch.", answer: "falsch", teilPart: 3 },
          { id: "h19", num: 19, type: "tf", text: "Viktoria hat es in London nicht gefallen.", answer: "falsch", teilPart: 3 },
          { id: "h20", num: 20, type: "tf", text: "Herr Brunner war gegen eine Klassenreise nach Paris.", answer: "falsch", teilPart: 3 },
          { id: "h21", num: 21, type: "tf", text: "Es gibt Eltern, für die eine Auslandsreise zu teuer ist.", answer: "richtig", teilPart: 3 },
          { id: "h22", num: 22, type: "tf", text: "Die Schüler wollen, dass alle mitfahren können.", answer: "richtig", teilPart: 3 },

          // Teil 4: 23 - 30
          { id: "h23", num: 23, type: "speaker", text: "Die Reaktion anderer auf das erste Werk war eine Herausforderung.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 2, teilPart: 4 },
          { id: "h24", num: 24, type: "speaker", text: "Die Objekte entstehen aus dem, was übrig bleibt.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 2, teilPart: 4 },
          { id: "h25", num: 25, type: "speaker", text: "Hunger gibt es nicht nur in armen Ländern.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 1, teilPart: 4 },
          { id: "h26", num: 26, type: "speaker", text: "Mit dem Essen aus Europas Müll könnte man alle hungrigen Menschen ernähren.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 0, teilPart: 4 },
          { id: "h27", num: 27, type: "speaker", text: "Manche Produkte dürfen weder verkauft noch verschenkt werden.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 1, teilPart: 4 },
          { id: "h28", num: 28, type: "speaker", text: "Essen auf dem Müll ist auch ein Problem für die Umwelt.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 0, teilPart: 4 },
          { id: "h29", num: 29, type: "speaker", text: "Aus Protest aus dem Müll zu essen ist sinnlos.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 1, teilPart: 4 },
          { id: "h30", num: 30, type: "speaker", text: "Die Kunstausstellung soll der „Tafel“ helfen.", options: ["Moderator", "Juliane Schulz", "Lukas Tilmann"], answer: 2, teilPart: 4 }
        ],
        horenSections: [
          {
            partNumber: 1,
            title: "Teil 1",
            badge: "Aufgaben 1 – 10",
            intro: "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
            example: {
              ex01: { num: "01", text: "Sie hören eine Auskunft eines Elektrogeschäfts.", type: "tf", answer: "falsch" },
              ex02: { num: "02", text: "Wo werden die meisten Geräte repariert?", type: "mcq", options: ["In der Werkstatt.", "Beim TÜV-Kundendienst.", "Zu Hause beim Kunden."], answer: 2 }
            },
            texts: [
              { number: 1, title: "Text 1", qIds: ["h1", "h2"] },
              { number: 2, title: "Text 2", qIds: ["h3", "h4"] },
              { number: 3, title: "Text 3", qIds: ["h5", "h6"] },
              { number: 4, title: "Text 4", qIds: ["h7", "h8"] },
              { number: 5, title: "Text 5", qIds: ["h9", "h10"] }
            ]
          },
          {
            partNumber: 2,
            title: "Teil 2",
            badge: "Aufgaben 11 – 15",
            intro: "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
            context: "Sie nehmen an einer Informationsveranstaltung über Ballonfahrten teil.",
            qIds: ["h11", "h12", "h13", "h14", "h15"]
          },
          {
            partNumber: 3,
            title: "Teil 3",
            badge: "Aufgaben 16 – 22",
            intro: "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
            context: "Sie stehen an einer Bushaltestelle in Wien und hören, wie sich ein Mann und eine Frau über eine Klassenreise unterhalten.",
            qIds: ["h16", "h17", "h18", "h19", "h20", "h21", "h22"]
          },
          {
            partNumber: 4,
            title: "Teil 4",
            badge: "Aufgaben 23 – 30",
            intro: "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
            context: "Der Moderator der Radiosendung „MitTalk“ diskutiert mit den Studenten Juliane Schulz, aktivem Mitglied der Stiftung „Tafel“ und Lukas Tilmann, einem Künstler der besonderen Art, zum Thema „Wie gehen wir mit dem Essen um?“.",
            speakers: [
              { code: "a", name: "Moderator" },
              { code: "b", name: "Juliane Schulz" },
              { code: "c", name: "Lukas Tilmann" }
            ],
            example: {
              num: "0",
              text: "Die Namen der Kunstwerke sind fantasievoll.",
              answerCode: "a",
              answerSpeaker: "Moderator"
            },
            qIds: ["h23", "h24", "h25", "h26", "h27", "h28", "h29", "h30"]
          }
        ]
      }
    ]
  }
];
