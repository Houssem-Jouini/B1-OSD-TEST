#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate modellsatz-18.json for Modelltest 12 (Hueber Zertifikat B1 neu, Test 3)
Following the exact schema of modellsatz-17.json
"""
import json
import os

modellsatz_18 = {
  "id": "modellsatz-18",
  "title": "Modelltest 12 — Hueber Zertifikat B1",
  "badge": "Modelltest 12",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 12",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 12 (Hueber)",
  "durationMinutes": 65,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "time": 10,
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
      "articles": [
        {
          "heading": "Meine Reise: Reiseberichte aus aller Welt — Reisebericht London (für Teenager)",
          "sub": "Reisezeitraum: August 2012 | Geschrieben: August 2013 | Veröffentlicht: August 2013",
          "body": [
            "Ich und meine zwei Freundinnen wollten London erleben, wie es nicht im Reiseführer steht. Unser Abenteuer begann mit einer Busfahrt in einem roten Doppeldecker: Linie 15. Mit einer Tageskarte kriegt man da die Sehenswürdigkeiten fast zum Nulltarif. Trafalgar Square, St. Paul's Cathedral bis hin zum Tower of London. Aber was uns vorerst mehr beeindruckt hat als die Sehenswürdigkeiten, war der riesige Strom aus Bussen, Taxis und Radfahrern um uns herum.",
            "Ausgestiegen sind wir in der Nähe der Markthallen von Covent Garden. Das ist ein Einkaufszentrum. Meine Freundinnen wollten gern shoppen. Es gab auch tatsächlich viele Souvenirs, T-Shirts und Schmuck, aber wir haben uns sehr über die Preise geärgert. Viel witziges Design, aber keine Schnäppchen. Dafür gab es eine Menge Straßenkünstler, besonders junge Musiker. Wir haben ein wenig zugehört, sind dann jedoch weitergegangen. Unser Taschengeld wollten wir lieber nicht auf der Straße lassen.",
            "Am Südufer der Themse in der Nähe der Tower Bridge war viel los: Skater, fliegende Händler und Jogger. London live! Wir sahen sogar eine Schulklasse mit den altmodischen Uniformen, wie sie hier üblich sind. Ich könnte mir gar nicht vorstellen, so rumzulaufen.",
            "Der Besuch der Tower Bridge ist kostenpflichtig. Auf dem Fußgängerweg zwischen den Türmen über der Themse blieben wir hinter Glas. Das fanden wir enttäuschend. Auch die Brückenausstellung war völlig uninteressant. Den Tower oder Madame Tussauds Wachsfigurenkabinett hätten wir gern besichtigt, aber ohne Vorbestellung kann man das vergessen: zu voll, zu teuer.",
            "Notting Hill war allerdings echt cool. Der Stadtteil ist berühmt für seinen Obst- und Gemüsemarkt, die Antiquitäten und Szeneläden. Und fast jedes Reihenhaus hat eine andere Farbe. Hier haben wir auch endlich einige interessante Mitbringsel kaufen können.",
            "Nach einer kurzen Stärkung bei McDonald's sind wir schließlich in den Hyde-Park, haben uns auf die Liegestühle gesetzt und den Reitern, kickenden Jugendlichen und graubraunen Eichhörnchen zugeschaut. Wir waren ziemlich müde.",
            "Eins steht für uns fest: London ist für Teenager eine super Stadt. Wir kommen bestimmt wieder."
          ],
          "signature": "Mia Baumgartner, 16"
        }
      ],
      "example": {
        "text": "Die drei Teenager sind mit dem Bus durch London gefahren.",
        "answer": "richtig"
      },
      "questions": [
        {
          "id": 1,
          "type": "tf",
          "text": "Die Tageskarte hat nichts gekostet.",
          "answer": "falsch",
          "num": 1
        },
        {
          "id": 2,
          "type": "tf",
          "text": "In London war viel Verkehr.",
          "answer": "richtig",
          "num": 2
        },
        {
          "id": 3,
          "type": "tf",
          "text": "In Covent Garden wollten die Jugendlichen einkaufen, aber alles war zu teuer.",
          "answer": "richtig",
          "num": 3
        },
        {
          "id": 4,
          "type": "tf",
          "text": "Der Besuch der Tower Bridge hat den Mädchen nicht gefallen.",
          "answer": "richtig",
          "num": 4
        },
        {
          "id": 5,
          "type": "tf",
          "text": "In Notting Hill haben sie Obst gekauft.",
          "answer": "falsch",
          "num": 5
        },
        {
          "id": 6,
          "type": "tf",
          "text": "Im Hyde-Park haben sie sich ausgeruht.",
          "answer": "richtig",
          "num": 6
        }
      ]
    },
    {
      "id": 2,
      "title": "Teil 2",
      "time": 20,
      "instructions": "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles": [
        {
          "heading": "Lange Nacht der Museen",
          "body": [
            "Wollen Sie in der Nacht in den Räumen des Alten Museums neben antiken Vasen und Schätzen ein klassisches Konzert hören? Wären vielleicht eine Nachtwanderung im Wald und der Besuch des Waldmuseums für Sie interessant? Oder sind Sie lieber im Museum für Film und Fernsehen zu später Stunde auf Spurensuche nach einem unvollendeten Romy-Schneider-Film? Das können Sie alles auch dieses Jahr bei der „Langen Nacht der Museen“ in Berlin.",
            "Eine inzwischen in vielen deutschen Städten angebotene Attraktion, die 1997 in den Museen der Hauptstadt geboren wurde. Zweimal im Jahr, im Januar und im August, öffnen viele Museen in Berlin ihre Tore auch für einen Nachtbesuch, der bis um 2 Uhr dauern kann. Um von einem Museum zum anderen zu gelangen, gibt es für die Nachtschwärmer auch einen Bus-Shuttle-Service, der im Ticket inbegriffen ist. Es dürfen mit diesem Ticket auch alle regulären Verkehrsmittel mitbenutzt werden. Schüler und Studenten können ermäßigte Karten bekommen und Kinder unter 12 Jahren dürfen sogar umsonst die Lange Nacht genießen."
          ],
          "source": "aus einer deutschen Zeitung"
        }
      ],
      "example": {
        "text": "In vielen deutschen Städten ...",
        "options": [
          "haben die Museen auch nachts auf.",
          "gibt es ähnliche Attraktionen wie in Berlin.",
          "gibt es eine „Lange Nacht der Museen“."
        ],
        "answer": 1
      },
      "questions": [
        {
          "id": 7,
          "type": "mcq",
          "text": "In diesem Text geht es darum, dass ...",
          "options": [
            "man nachts umsonst zu den Museen fahren kann.",
            "an zwei Tagen im Jahr die Nächte besonders lang sind.",
            "die Museen Berlins eine besondere Idee hatten."
          ],
          "answer": 2,
          "num": 7
        },
        {
          "id": 8,
          "type": "mcq",
          "text": "Während der „Langen Nacht der Museen“ ...",
          "options": [
            "gibt es einen besonderen Busverkehr für die Museumsbesucher.",
            "gibt es günstige Eintrittspreise.",
            "dürfen keine Kinder ins Museum."
          ],
          "answer": 0,
          "num": 8
        },
        {
          "id": 9,
          "type": "mcq",
          "text": "Ein Berliner Museum ...",
          "options": [
            "bietet in der „Langen Nacht der Museen“ ein Open-Air-Konzert an.",
            "organisiert in der „Langen Nacht der Museen“ eine Nachtwanderung.",
            "zeigt einmal pro Stunde einen Romy-Schneider-Film."
          ],
          "answer": 1,
          "num": 9
        }
      ],
      "instructions2": "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles2": [
        {
          "heading": "Barbie ist nun auch schon über 50 Jahre alt",
          "body": [
            "Barbie ist nun auch schon über 50 Jahre alt. Wer hätte das gedacht? Man sieht es ihr nicht an, aber schließlich ist sie aus Plastik. Auch wenn sie schon viele Jobs hatte, Flugbegleiterin oder Präsidentschaftskandidatin zum Beispiel, ist sie immer noch so jung wie am ersten Tag. Das war 1959 auf der Spielwarenmesse in New York in den USA. Die beiden Gründer der Spielzeugfirma Mattel stellten sie dort vor. Ken, ihr Ex-Freund, war damals übrigens noch nicht dabei. Damals hatte niemand damit gerechnet, dass Barbie einmal die am meisten verkaufte Puppe der Welt werden würde. Und nicht nur dieses Ziel hat sie erreicht, sie gilt auch als Synonym einer Modepuppe schlechthin.",
            "Warum ist sie so beliebt? Bestimmt ist ein Grund dafür, dass sie immer mit zahlreichen modernen Klamotten angezogen werden kann und stets mit der Zeit gegangen ist – sie wurde praktisch nie altmodisch. Außer ihren Kleidern kann man auch Autos und Häuser für sie kaufen und so ein Leben nachspielen, das kaum ein Mädchen je haben wird. Bisweilen wird sie auch zum Star, beispielsweise gibt es eine Barbie, die der Sängerin Madonna nachgebildet wurde. Aber Barbie war nie überall beliebt. Viele Frauen kritisieren ihre Figur, die es in Lebensgröße kaum auf der Welt gibt."
          ],
          "source": "aus einem deutschen Magazin"
        }
      ],
      "questions2": [
        {
          "id": 10,
          "type": "mcq",
          "text": "In diesem Text geht es darum, dass ...",
          "options": [
            "Barbie ein Verkaufshit ist.",
            "Barbie eine tolle Erfindung ist.",
            "Barbie zu alt ist."
          ],
          "answer": 0,
          "num": 10
        },
        {
          "id": 11,
          "type": "mcq",
          "text": "Barbie trägt ...",
          "options": [
            "meistens Kleider von Madonna.",
            "immer aktuelle Mode.",
            "Kleidung, die zu ihrem Auto passt."
          ],
          "answer": 1,
          "num": 11
        },
        {
          "id": 12,
          "type": "mcq",
          "text": "Im Jahr 1959 ...",
          "options": [
            "wurde Barbies Freund Ken auf den Markt gebracht.",
            "hatte die Firma Mattel großen Erfolg auf der Spielzeugmesse.",
            "gab es die erste Barbie-Puppe."
          ],
          "answer": 2,
          "num": 12
        }
      ]
    },
    {
      "id": 3,
      "title": "Teil 3",
      "time": 10,
      "instructions": "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
      "situationsIntro": "Wegen der günstigen Angebote ziehen einige Ihrer Freundinnen und Freunde für ihre Anschaffungen Gebrauchtwaren vor. Deswegen suchen Sie immer nach entsprechenden Anzeigen.",
      "example": {
        "text": "Miriam ist in eine neue Wohnung umgezogen und braucht einen Spiegel für ihr Wohnzimmer.",
        "answer": "b"
      },
      "adsFormatted": [
        {
          "code": "a",
          "title": "Aus Haushaltsauflösung zu verschenken",
          "text": "Aus Haushaltsauflösung noch zu verschenken: Geschirr u. Besteck, Küchentisch mit 4 Stühlen, Bücher, Bettwäsche, am Sa. den 2.5., von 10-13 Uhr. Gartenweg 7, 97228 Bräuheim, Fam. Köllner, Tel. 017112147300",
          "html": "<strong>Aus Haushaltsauflösung zu verschenken:</strong><br>Geschirr u. Besteck, Küchentisch mit 4 Stühlen, <em>Bücher</em>, Bettwäsche.<br>Sa. 2.5., 10–13 Uhr, Gartenweg 7, 97228 Bräuheim, Fam. Köllner.<br>📞 017112147300",
          "color": "#fef9e7",
          "hasPin": True
        },
        {
          "code": "b",
          "title": "Flohmarktartikel",
          "text": "Flohmarktartikel: z.B. alte Uhr, Besteckkasten, Gehwagen, alte Waage, Holzspiegel, 13 versch. Schlitten m. Abfahrtskikufen, Chippendale-Tisch 84x120, ausziehb., 5 Stühle, 1 Sessel, 3 Stehlam. uvm., Tel. 01371-174653 o. 175211",
          "html": "<strong>Flohmarktartikel:</strong><br>z.B. alte Uhr, Besteckkasten, Gehwagen, alte Waage, <em>Holzspiegel</em>, Chippendale-Tisch, 5 Stühle, 1 Sessel, 3 Stehlampen uvm.<br>📞 01371-174653 oder 175211",
          "color": "#fbfcfc",
          "hasPin": True
        },
        {
          "code": "c",
          "title": "58-jähriges Kleinkind kauft altes Spielzeug ...",
          "text": "Blechspielzeug, Blechautos, Flugzeuge, Schiffe, Karussells, Eisenbahnen aller Spurweiten, ganze Anlagen, Figuren, Dampfmaschinen, Militärspielzeug + Soldaten, Teddybären, Steiff-Tiere, Käthe Kruse- + Schildkröt-Puppen, Puppenküchen, Kaufläden + Puppenstuben, alter Christbaumschmuck, alles von 1800 bis 1960. Tel. 06317-16363 oder 0161-2873695",
          "html": "<strong>58-jähriges Kleinkind KAUFT altes Spielzeug:</strong><br>Blechspielzeug, Eisenbahnen, Figuren, Dampfmaschinen, Teddybären, Käthe Kruse- + Schildkröt-Puppen, Puppenstuben (1800–1960).<br><em>Achtung: Ankauf, kein Verkauf!</em><br>📞 06317-16363 / 0161-2873695",
          "color": "#eafaf1",
          "hasPin": True
        },
        {
          "code": "d",
          "title": "Kleiderflohmarkt Schöneberg",
          "text": "Direkt auf dem Platz vor dem Rathaus Schöneberg, wo einst John F. Kennedy den legendären Satz „Ich bin ein Berliner“ sagte, stehen jetzt die Stände des Flohmarkts. Die Holzstände bilden Zeltgassen, die auch bei nicht so schönem Wetter zum Bummeln einladen. Hier kann man in Ruhe zwei, drei Stunden stöbern und alle erdenklichen Bekleidungsartikel für Jung und Alt erstehen. Wer Hunger bekommt, kann gleich am Imbiss-Stand Getränke und Bratwürstchen bestellen. Der Kleiderflohmarkt in Schöneberg öffnet samstags sowie sonntags von 8.00 bis 16.00 Uhr.",
          "html": "<strong>Kleiderflohmarkt Schöneberg:</strong><br>Vor dem Rathaus Schöneberg. Zeltgassen laden zum Bummeln & Stöbern ein. Bekleidung für Jung und Alt.<br>🍴 <em>Imbiss-Stand mit Getränken und Bratwürstchen!</em><br>Öffnungszeiten: Sa. & So. 8:00–16:00 Uhr.",
          "color": "#ebf5fb",
          "hasPin": True
        },
        {
          "code": "e",
          "title": "Hi-Fi-Schallplatten-Flohmarkt",
          "text": "Hi-Fi-Schallplatten-Flohmarkt: riesige Mengen, gut sortiert, Verkauf am Samstag 10-16 Uhr, altes Schulhaus, Möllheim-Oberweiler, Frauenverein Oberweiler",
          "html": "<strong>Hi-Fi-Schallplatten-Flohmarkt:</strong><br>Riesige Mengen an Vinyl, gut sortiert.<br>Verkauf Sa. 10–16 Uhr, altes Schulhaus, Möllheim-Oberweiler (Frauenverein Oberweiler).",
          "color": "#f4ecf7",
          "hasPin": True
        },
        {
          "code": "f",
          "title": "Computer-Flohmarkt",
          "text": "Computer-Flohmarkt: Sa. 19.02. von 15-18 Uhr im „Haus der Begegnung“ in FR-Landwasser. Hardware, Software, Spiele, Konsolen. Standgeb. Euro 9. Anmeldung u. Info: Tel. 0762-14 15 39 oder web@floh-freiburg.pe",
          "html": "<strong>Computer-Flohmarkt:</strong><br>Sa. 19.02., 15–18 Uhr, „Haus der Begegnung“, FR-Landwasser.<br><em>Hardware, Software, PC-/Konsolen-Spiele, Konsolen.</em><br>📞 0762-14 15 39 | ✉️ web@floh-freiburg.pe",
          "color": "#fef5e7",
          "hasPin": True
        },
        {
          "code": "g",
          "title": "Secondhand-Börse mit Fahrradmarkt",
          "text": "Secondhand-Börse: Stände ausgebucht, bei trockenem Wetter zusätzliche Stände außen möglich, mit großem Fahrradmarkt, Kuchenverkauf nur zur Mitnahme: So., 20. März, 10-18 Uhr, Marktplatz Fessenheim, Tel. 0285/7 4 42 43",
          "html": "<strong>Secondhand-Börse Fessenheim:</strong><br>Mit <em>großem Fahrradmarkt</em>! Kuchenverkauf zur Mitnahme.<br>So., 20. März, 10–18 Uhr, Marktplatz Fessenheim.<br>📞 0285/7 4 42 43",
          "color": "#e8f8f5",
          "hasPin": True
        },
        {
          "code": "h",
          "title": "Stereo-Anlage & CDs",
          "text": "Stereo-Anlage, komplett v. privat zu verkaufen, auch viele CDs (vor allem 60er-80er Jahre), guter Zustand / günstige Preise. Tel./SMS 0 1250 1545 155",
          "html": "<strong>Stereo-Anlage, komplett:</strong><br>Von privat zu verkaufen, inkl. <em>viele CDs (vor allem 60er–80er Jahre Disco & Rock)</em>.<br>Guter Zustand, günstige Preise.<br>📞/SMS 0 1250 1545 155",
          "color": "#fdedec",
          "hasPin": True
        },
        {
          "code": "i",
          "title": "Kinderwagen Teutonia Team Alu",
          "text": "Kinderwagen Teutonia Team Alu 54 84 mit Softtragetasche, auch als Sportw. nutzbar, guter Zustand. Beige/kariert. NP im 2010 über 500 Euro, VHB 200 Euro. Tel. 07633/218075.",
          "html": "<strong>Kinderwagen Teutonia Team Alu:</strong><br>Mit Softtragetasche, auch als Sportwagen nutzbar, sehr guter Zustand (beige/kariert).<br>Neupreis über 500 €, VHB 200 €.<br>📞 07633/218075",
          "color": "#eaf2f8",
          "hasPin": True
        },
        {
          "code": "j",
          "title": "BABY-FLOHMARKT AHLERSTEDT",
          "text": "BABY-FLOHMARKT AHLERSTEDT: Saalflohmarkt: 06. November. Anmeldung ab 04. Oktober 9.00 Uhr. Anmelden können Sie sich unter folgenden Telefonnummern: Bitte immer erst ab 9 Uhr anrufen: 04616/ 315 oder 04616/ 5777",
          "html": "<strong>BABY-FLOHMARKT AHLERSTEDT:</strong><br>Saalflohmarkt am 06. November.<br>Anmeldung für Verkäufer ab 04. Oktober ab 9:00 Uhr.<br>📞 04616/ 315 oder 04616/ 5777",
          "color": "#fef9e7",
          "hasPin": True
        }
      ],
      "questions": [
        {
          "id": 13,
          "type": "match",
          "text": "Lea und Jana sammeln seit Jahren alte Spielpuppen.",
          "answer": "0",
          "num": 13
        },
        {
          "id": 14,
          "type": "match",
          "text": "Monika liest sehr gern. Ihrer Meinung nach müssen es aber nicht immer Neuerscheinungen sein.",
          "answer": "a",
          "num": 14
        },
        {
          "id": 15,
          "type": "match",
          "text": "Dennis beschäftigt sich in seiner Freizeit meistens mit seinem Laptop. Seine Freunde suchen nach einem Geschenk für ihn.",
          "answer": "f",
          "num": 15
        },
        {
          "id": 16,
          "type": "match",
          "text": "Andy und Luzie haben einen Sohn bekommen und brauchen dringend einen Kinderwagen.",
          "answer": "i",
          "num": 16
        },
        {
          "id": 17,
          "type": "match",
          "text": "Sascha liebt Disco-Musik aus den 70er Jahren. Er freut sich immer über solche Musik-CDs.",
          "answer": "h",
          "num": 17
        },
        {
          "id": 18,
          "type": "match",
          "text": "Jutta möchte nicht mehr so viel Auto fahren. Sie sucht ein gebrauchtes Fahrrad in gutem Zustand.",
          "answer": "g",
          "num": 18
        },
        {
          "id": 19,
          "type": "match",
          "text": "Stefan verbringt seine Sonntage gern auf Flohmärkten. Dort kann er nämlich nicht nur billig einkaufen, sondern auch spazieren gehen und etwas Kleines essen.",
          "answer": "d",
          "num": 19
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "time": 15,
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für eine zweisprachige Erziehung von Kindern?",
      "topic": "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über zweisprachige Kinder und die mehrsprachige Erziehung.",
      "example": {
        "who": "Jana, 35 Jahre, Rosenheim",
        "text": "Zwei Sprachen zu können, ist zwar ein Vorteil, aber für Kinder ist es sehr verwirrend. Die meisten zweisprachigen Kinder, die ich kenne, sprechen keine Sprache richtig gut. Deshalb halte ich es nicht für einen Vorteil.",
        "answer": "nein"
      },
      "letters": [
        {
          "id": 20,
          "type": "letter",
          "who": "Klaus, 48 Jahre, Basel",
          "text": "Wenn ich richtig informiert bin, sagt die Wissenschaft, dass durch das frühe Sprachenlernen das Gehirn trainiert wird. Das kann ich mir gut vorstellen, denn schliesslich schaltet das Gehirn immer zwischen zwei Sprachen hin und her. Ausserdem bekommt man ja durch eine andere Sprache auch das Wissen über eine andere Kultur. Man blickt also sozusagen auch in eine zweite Welt. Das kann doch nur nützen und den Menschen positiv formen.",
          "answer": "ja",
          "num": 20
        },
        {
          "id": 21,
          "type": "letter",
          "who": "Patrizia, 17 Jahre, Uelzen",
          "text": "Ich kenne ein zweisprachiges Mädchen, sie geht in meine Klasse. Sie spricht Deutsch und Spanisch. Leider kann ich nicht beurteilen, wie gut ihr Spanisch ist, aber mit Deutsch hat sie keine Probleme. Ist doch eine gute Chance, noch eine Sprache zu können!",
          "answer": "ja",
          "num": 21
        },
        {
          "id": 22,
          "type": "letter",
          "who": "Kevin, 23 Jahre, Wien",
          "text": "Hier in Österreich hört man oft viele Sprachen. Mich stört das eigentlich. Auf jeden Fall sollten die Leute, die hier wohnen, alle Deutsch sprechen. Wenn man nicht gerade Übersetzer von Beruf ist, braucht man keine andere Sprache zu beherrschen. Nein, das finde ich eher unpraktisch.",
          "answer": "nein",
          "num": 22
        },
        {
          "id": 23,
          "type": "letter",
          "who": "Annett, 38 Jahre, Zürich",
          "text": "Das ist doch zu begrüssen. So gut wie im Kindesalter lernt man nie wieder eine Sprache, besonders die Aussprache und den Akzent. Deshalb beginnt ja auch in der Schule der Sprachunterricht schon so früh. Ich meine, wenn möglich, sollten alle Kinder mit mindestens zwei Sprachen aufwachsen.",
          "answer": "ja",
          "num": 23
        },
        {
          "id": 24,
          "type": "letter",
          "who": "Lucie, 16 Jahre, Köln",
          "text": "In der Schule sind die Fremdsprachen für mich die schwersten Fächer. Ich habe da schlechte Noten, obwohl ich mich wirklich anstrenge. Wenn zu Hause dann mehrere Sprachen gesprochen werden, ist das doch kompliziert. Ein Satz auf Deutsch und ein Satz in einer anderen Sprache. Da kommt es garantiert zu Missverständnissen.",
          "answer": "nein",
          "num": 24
        },
        {
          "id": 25,
          "type": "letter",
          "who": "Herbert, 62 Jahre, Graz",
          "text": "Diese Frage wird überbewertet. Als junger Mensch kann man zu jeder Zeit Sprachen lernen. Da kann man sich alles besser merken. Ist doch egal, wann man die zweite Sprache lernt. Als Anfang muss man erstmal eine gute Basis in der Muttersprache haben und nur die lernen. Das ist wichtig und so machen es die meisten Menschen. Später kann man dann noch andere Sprachen lernen.",
          "answer": "nein",
          "num": 25
        },
        {
          "id": 26,
          "type": "letter",
          "who": "Maria, 22 Jahre, Potsdam",
          "text": "Ein Kind, dessen Eltern aus zwei Ländern kommen, muss ja auch mit den Verwandten von beiden Seiten sprechen können. Wie soll das denn klappen, wenn es nur die eine Sprache spricht? Nein, nur die eine Sprache zu können wäre für das Kind von Nachteil. Ein Teil seiner Identität ginge ja verloren.",
          "answer": "ja",
          "num": 26
        }
      ]
    },
    {
      "id": 5,
      "title": "Teil 5",
      "time": 10,
      "instructions": "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles": [
        {
          "heading": "Hausordnung für Jugendherbergen in Österreich",
          "sub": "Sie möchten in einer Jugendherberge im Burgenland übernachten und informieren sich über die Hausordnung für Jugendherbergen in Österreich.",
          "body": [
            "<strong>Ankunft:</strong><br>Wenn Sie angemeldet sind, können Sie Ihre Ankunftszeit mit der Herbergsleitung vereinbaren. Zugesagte Plätze werden bis 18 Uhr frei gehalten, danach können sie an andere Gäste vergeben werden.<br>Wenn Sie nicht angemeldet sind, können Sie telefonisch oder direkt in der Jugendherberge erfahren, ob es freie Plätze gibt.<br>Wer in einer Jugendherberge übernachten möchte, muss Mitglied des Österreichischen Jugendherbergsverbandes oder eines anderen nationalen Jugendherbergsverbandes sein. Ausländische Gäste ohne Mitgliedskarte müssen eine „Internationale Gastkarte“ erwerben.",
            "<strong>Aufenthalt:</strong><br>Die Unterbringung erfolgt in Mehrbettzimmern und in der Regel nach Geschlecht getrennt. Familien können nach Anmeldung in einem Zimmer gemeinsam untergebracht werden, wenn eins frei ist.<br>Wir bitten Sie während Ihres Aufenthaltes um Mithilfe. Dazu gehört z.B., dass Sie die von Ihnen genutzten Einrichtungen, Räume und Gegenstände in Ordnung halten und beim Tischdienst helfen.<br>Die Jugendherbergen haben sich dem Umwelt- und Naturschutz verpflichtet. Darum bitten wir Sie, Abfall getrennt zu sammeln oder ganz zu vermeiden und mit Energie und Wasser sparsam umzugehen.<br>In Schlafräumen dürfen Speisen weder zubereitet noch gegessen werden. Die Benutzung von elektrischen Geräten für die Zubereitung von Speisen und heißen Getränken ist nicht gestattet.<br>Rauchen ist in der Jugendherberge nicht gestattet.<br>Der Konsum von mitgebrachten alkoholischen Getränken ist in der Jugendherberge und auf ihrem Gelände nicht erlaubt. Alkoholisierte Gäste können des Hauses verwiesen werden.<br>Tiere dürfen grundsätzlich nicht mitgebracht werden.<br>Jugendherbergen sind in der Regel bis 22 Uhr geöffnet. Die Nachtruhe beginnt um 22 Uhr und endet um 7 Uhr.",
            "<strong>Abreise:</strong><br>Die Schlafräume müssen bis 10 Uhr geräumt sein. Nach Absprache mit der Herbergsleitung sind Ausnahmen möglich."
          ]
        }
      ],
      "questions": [
        {
          "id": 27,
          "type": "mcq",
          "text": "In den Jugendherbergen ...",
          "options": [
            "gibt es keine Einzelzimmer.",
            "schlafen Familien immer in einem Raum.",
            "darf man keinen Abfall lassen."
          ],
          "answer": 0,
          "num": 27
        },
        {
          "id": 28,
          "type": "mcq",
          "text": "Wenn man sich für einen Herbergsplatz angemeldet hat, ...",
          "options": [
            "erhält man eine Mitgliedskarte.",
            "kann man kommen, wann man will.",
            "muss man bis 18 Uhr in der Herberge ankommen."
          ],
          "answer": 2,
          "num": 28
        },
        {
          "id": 29,
          "type": "mcq",
          "text": "Die Gäste sollten ...",
          "options": [
            "ihre Zimmer aufräumen.",
            "am Tag nicht in der Jugendherberge schlafen.",
            "ihr Zimmer am Abreisetag um 7 Uhr verlassen."
          ],
          "answer": 0,
          "num": 29
        },
        {
          "id": 30,
          "type": "mcq",
          "text": "In den Schlafräumen ...",
          "options": [
            "sind alle elektrischen Geräte verboten.",
            "ist Rauchen nicht erlaubt.",
            "darf gegessen werden."
          ],
          "answer": 1,
          "num": 30
        }
      ]
    },
    {
      "id": 6,
      "title": "🎧 Hören",
      "badge": "Modul Hören",
      "isHoren": True,
      "time": 40,
      "instructions": "Modul Hören: 4 Teile, 30 Aufgaben. Klicken Sie auf den Play-Button, um das Audio zu starten. Sie hören die Texte mit den echten Prüfungs-Pausen.",
      "audioSrc": "audio/modellsatz-18-hoeren.mp3",
      "audioFallbacks": ["audio/modellsatz-18-hoeren.mp3"],
      "audioChapters": [
        { "title": "Teil 1: Fünf kurze Texte", "start": 0 },
        { "title": "Teil 1: Text 1 (Flughafendurchsage)", "start": 36 },
        { "title": "Teil 1: Text 2 (Gesundheitsspiegel)", "start": 188 },
        { "title": "Teil 1: Text 3 (Kinotipps)", "start": 300 },
        { "title": "Teil 1: Text 4 (Zahnarztpraxis)", "start": 396 },
        { "title": "Teil 1: Text 5 (Schulprojekt Bahn)", "start": 538 },
        { "title": "Teil 2: Führung Bergisel-Stadion", "start": 846 },
        { "title": "Teil 3: Gespräch an der Bushaltestelle (Nachhilfe)", "start": 1167 },
        { "title": "Teil 4: Diskussion: Generationen-WG (1. Durchgang)", "start": 1426 },
        { "title": "Teil 4: Diskussion: Generationen-WG (2. Durchgang)", "start": 1808 }
      ],
      "horenSections": [
        {
          "id": 1,
          "partNumber": 1,
          "title": "Teil 1: Fünf kurze Texte",
          "badge": "Aufgaben 1 – 10",
          "intro": "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
          "example": {
            "ex01": {
              "num": "01",
              "text": "Sie hören eine Information über Veranstaltungen.",
              "type": "tf",
              "answer": "richtig"
            },
            "ex02": {
              "num": "02",
              "text": "Für welche Veranstaltung muss man sich anmelden?",
              "options": [
                "Für den Spaziergang im Kurpark.",
                "Für die Kreativstunde.",
                "Zum Singen und Tanzen."
              ],
              "type": "mcq",
              "answer": 1
            }
          },
          "texts": [
            { "number": 1, "title": "Text 1", "qIds": ["h1", "h2"] },
            { "number": 2, "title": "Text 2", "qIds": ["h3", "h4"] },
            { "number": 3, "title": "Text 3", "qIds": ["h5", "h6"] },
            { "number": 4, "title": "Text 4", "qIds": ["h7", "h8"] },
            { "number": 5, "title": "Text 5", "qIds": ["h9", "h10"] }
          ]
        },
        {
          "id": 2,
          "partNumber": 2,
          "title": "Teil 2: Führung Bergisel-Stadion",
          "badge": "Aufgaben 11 – 15",
          "intro": "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie nehmen an einer Besichtigung des Stadions Bergisel nahe Innsbruck teil.",
          "qIds": ["h11", "h12", "h13", "h14", "h15"]
        },
        {
          "id": 3,
          "partNumber": 3,
          "title": "Teil 3: Gespräch an der Bushaltestelle",
          "badge": "Aufgaben 16 – 22",
          "intro": "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie sind an einer Bushaltestelle in einem Dorf bei Luzern und hören, wie sich ein Jugendlicher mit einem Mann/Freund über seine Schulprobleme unterhält.",
          "qIds": ["h16", "h17", "h18", "h19", "h20", "h21", "h22"]
        },
        {
          "id": 4,
          "partNumber": 4,
          "title": "Teil 4: Diskussion über das Modell Generationen-WG",
          "badge": "Aufgaben 23 – 30",
          "intro": "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Ein Journalist diskutiert mit Anna Lorenz, der Leiterin des Seniorenheims „Abendruhe“, und der 22-jährigen Studentin Kim Köhler über das Modell Generationen-WG.",
          "speakers": [
            { "code": "a", "name": "Journalist" },
            { "code": "b", "name": "Anna Lorenz" },
            { "code": "c", "name": "Kim Köhler" }
          ],
          "example": {
            "num": "0",
            "text": "Junge und Alte können gut zusammenleben.",
            "answerCode": "a",
            "answerSpeaker": "Journalist"
          },
          "qIds": ["h23", "h24", "h25", "h26", "h27", "h28", "h29", "h30"]
        }
      ],
      "questions": [
        {
          "id": "h1",
          "teilPart": 1,
          "type": "tf",
          "text": "Sie hören Informationen über Abflugzeiten.",
          "answer": "falsch",
          "num": 1,
          "textNum": 1,
          "audioStart": 36
        },
        {
          "id": "h2",
          "teilPart": 1,
          "type": "mcq",
          "text": "Die Maschine aus London ...",
          "options": [
            "fliegt später ab.",
            "kommt früher an.",
            "kommt später an."
          ],
          "answer": 2,
          "num": 2,
          "textNum": 1,
          "audioStart": 36
        },
        {
          "id": "h3",
          "teilPart": 1,
          "type": "tf",
          "text": "Sie hören Ratschläge für Ihre Gesundheit.",
          "answer": "falsch",
          "num": 3,
          "textNum": 2,
          "audioStart": 188
        },
        {
          "id": "h4",
          "teilPart": 1,
          "type": "mcq",
          "text": "Wer besucht häufiger eine Arztpraxis?",
          "options": [
            "Deutsche.",
            "Japaner.",
            "Ungarn."
          ],
          "answer": 1,
          "num": 4,
          "textNum": 2,
          "audioStart": 188
        },
        {
          "id": "h5",
          "teilPart": 1,
          "type": "tf",
          "text": "Sie hören Kinotipps.",
          "answer": "richtig",
          "num": 5,
          "textNum": 3,
          "audioStart": 300
        },
        {
          "id": "h6",
          "teilPart": 1,
          "type": "mcq",
          "text": "Am Freitag läuft der Film ...",
          "options": [
            "einmal.",
            "zweimal.",
            "dreimal."
          ],
          "answer": 1,
          "num": 6,
          "textNum": 3,
          "audioStart": 300
        },
        {
          "id": "h7",
          "teilPart": 1,
          "type": "tf",
          "text": "Die Praxis ist jetzt nicht geöffnet.",
          "answer": "richtig",
          "num": 7,
          "textNum": 4,
          "audioStart": 396
        },
        {
          "id": "h8",
          "teilPart": 1,
          "type": "mcq",
          "text": "Wann ist der Besuch in der Praxis von Dr. Mannheim möglich?",
          "options": [
            "Nach telefonischer Anmeldung.",
            "Am Vormittag.",
            "Am Freitag und am Samstag."
          ],
          "answer": 0,
          "num": 8,
          "textNum": 4,
          "audioStart": 396
        },
        {
          "id": "h9",
          "teilPart": 1,
          "type": "tf",
          "text": "Sie hören eine Werbung für Flugreisen.",
          "answer": "falsch",
          "num": 9,
          "textNum": 5,
          "audioStart": 538
        },
        {
          "id": "h10",
          "teilPart": 1,
          "type": "mcq",
          "text": "Was kostet ein Ticket für fünf Personen?",
          "options": [
            "27 Euro.",
            "12 Euro.",
            "17 Euro."
          ],
          "answer": 0,
          "num": 10,
          "textNum": 5,
          "audioStart": 538
        },
        {
          "id": "h11",
          "teilPart": 2,
          "type": "mcq",
          "text": "Das Stadion liegt ...",
          "options": [
            "auf einem Hügel.",
            "in der Nähe von Innsbruck.",
            "in Hamburg."
          ],
          "answer": 1,
          "num": 11,
          "audioStart": 846
        },
        {
          "id": "h12",
          "teilPart": 2,
          "type": "mcq",
          "text": "Im Stadion Bergisel finden ... statt.",
          "options": [
            "Winterspiele",
            "Videospiele",
            "Fußballspiele"
          ],
          "answer": 0,
          "num": 12,
          "audioStart": 846
        },
        {
          "id": "h13",
          "teilPart": 2,
          "type": "mcq",
          "text": "Wie viele Sportler nahmen an der Jugendolympiade teil?",
          "options": [
            "Über 2000.",
            "Weniger als 1900.",
            "Ungefähr 67."
          ],
          "answer": 1,
          "num": 13,
          "audioStart": 846
        },
        {
          "id": "h14",
          "teilPart": 2,
          "type": "mcq",
          "text": "Die Fahrt hoch auf den Turm dauert ...",
          "options": [
            "zwei Minuten.",
            "vierzehn Minuten.",
            "zweiunddreißig Minuten."
          ],
          "answer": 0,
          "num": 14,
          "audioStart": 846
        },
        {
          "id": "h15",
          "teilPart": 2,
          "type": "mcq",
          "text": "Wo befindet sich das Café?",
          "options": [
            "Auf der Bergterrasse.",
            "Links vom Turm.",
            "Auf Ebene zwei."
          ],
          "answer": 2,
          "num": 15,
          "audioStart": 846
        },
        {
          "id": "h16",
          "teilPart": 3,
          "type": "tf",
          "text": "Am Wochenende ist Timm auf eine Party eingeladen.",
          "answer": "richtig",
          "num": 16,
          "audioStart": 1167
        },
        {
          "id": "h17",
          "teilPart": 3,
          "type": "tf",
          "text": "Timm hatte immer schon Schwierigkeiten in Mathe.",
          "answer": "falsch",
          "num": 17,
          "audioStart": 1167
        },
        {
          "id": "h18",
          "teilPart": 3,
          "type": "tf",
          "text": "Leo will seinem Bruder nicht helfen.",
          "answer": "falsch",
          "num": 18,
          "audioStart": 1167
        },
        {
          "id": "h19",
          "teilPart": 3,
          "type": "tf",
          "text": "In Luzern gibt es nur teure Nachhilfeinstitute.",
          "answer": "falsch",
          "num": 19,
          "audioStart": 1167
        },
        {
          "id": "h20",
          "teilPart": 3,
          "type": "tf",
          "text": "Timm kann nicht mit den öffentlichen Verkehrsmitteln fahren.",
          "answer": "richtig",
          "num": 20,
          "audioStart": 1167
        },
        {
          "id": "h21",
          "teilPart": 3,
          "type": "tf",
          "text": "Philipp will Geld für die Nachhilfe haben.",
          "answer": "falsch",
          "num": 21,
          "audioStart": 1167
        },
        {
          "id": "h22",
          "teilPart": 3,
          "type": "tf",
          "text": "Philipp wird Timm Nachhilfeunterricht geben.",
          "answer": "richtig",
          "num": 22,
          "audioStart": 1167
        },
        {
          "id": "h23",
          "teilPart": 4,
          "type": "speaker",
          "text": "In der Stadt gibt es nicht viele Wohnungen für Studenten.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 2,
          "num": 23,
          "audioStart": 1426
        },
        {
          "id": "h24",
          "teilPart": 4,
          "type": "speaker",
          "text": "Viele Studenten möchten am Projekt „Wohnen für Hilfe“ teilnehmen.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 0,
          "num": 24,
          "audioStart": 1426
        },
        {
          "id": "h25",
          "teilPart": 4,
          "type": "speaker",
          "text": "Die Apartments der Studenten sind alle gleich.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 1,
          "num": 25,
          "audioStart": 1426
        },
        {
          "id": "h26",
          "teilPart": 4,
          "type": "speaker",
          "text": "Die Studenten übernehmen verschiedene Aufgaben im Heim.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 2,
          "num": 26,
          "audioStart": 1426
        },
        {
          "id": "h27",
          "teilPart": 4,
          "type": "speaker",
          "text": "Die Studenten helfen etwa acht Stunden pro Monat im Heim.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 1,
          "num": 27,
          "audioStart": 1426
        },
        {
          "id": "h28",
          "teilPart": 4,
          "type": "speaker",
          "text": "Der Kontakt mit den Heimbewohnern ist für die Studenten eine schöne Erfahrung.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 2,
          "num": 28,
          "audioStart": 1426
        },
        {
          "id": "h29",
          "teilPart": 4,
          "type": "speaker",
          "text": "Informationen allein reichen für die Tätigkeit im Altersheim nicht aus.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 2,
          "num": 29,
          "audioStart": 1426
        },
        {
          "id": "h30",
          "teilPart": 4,
          "type": "speaker",
          "text": "Die älteren Bewohner des Altenheims freuen sich über das Zusammenleben mit den jungen Leuten.",
          "options": [
            "Journalist",
            "Anna Lorenz",
            "Kim Köhler"
          ],
          "answer": 0,
          "num": 30,
          "audioStart": 1426
        }
      ]
    }
  ],
  "explanations": {
    "1": {
      "quote": "Unser Abenteuer begann mit einer Busfahrt in einem roten Doppeldecker: Linie 15. Mit einer Tageskarte kriegt man da die Sehenswürdigkeiten fast zum Nulltarif.",
      "whyCorrect": {
        "de": "Aussage 1 ist FALSCH: Die Tageskarte war nicht kostenlos („fast zum Nulltarif“ bedeutet sehr billig, aber nicht umsonst).",
        "ar": "العبارة 1 خاطئة: تذكرة اليوم لم تكن مجانية («تقريباً بسعر الصفر» تعني رخيصة للغاية ولكنها ليست مجانية تماماً).",
        "fr": "L'énoncé 1 est FAUX : Le pass journée n'était pas gratuit (« presque à tarif zéro » signifie très bon marché, mais pas gratuit)."
      },
      "whyIncorrect": {
        "de": "„Fast zum Nulltarif“ ist eine Redewendung für preiswert, nicht für kostenlos.",
        "ar": "عبارة «fast zum Nulltarif» تعبير مجازي عن السعر الزهيد وليست تعني المجانية المطلقة.",
        "fr": "L'expression signifie peu coûteux et non pas totalement gratuit."
      }
    },
    "2": {
      "quote": "Aber was uns vorerst mehr beeindruckt hat als die Sehenswürdigkeiten, war der riesige Strom aus Bussen, Taxis und Radfahrern um uns herum.",
      "whyCorrect": {
        "de": "Aussage 2 ist RICHTIG: Der „riesige Strom aus Bussen, Taxis und Radfahrern“ beschreibt den dichten Londoner Verkehr.",
        "ar": "العبارة 2 صحيحة: وصفت ميا التدفق الهائل للحافلات وسيارات الأجرة والدراجات، وهو ما يدل على الزحام المروري الكبير في لندن.",
        "fr": "L'énoncé 2 est VRAI : L'immense flot de bus, taxis et cyclistes confirme la forte densité du trafic londonien."
      },
      "whyIncorrect": {
        "de": "Die Mädchen waren stark beeindruckt vom massiven Verkehrsaufkommen.",
        "ar": "أشارت الكاتبة بوضوح إلى حركة المرور الكثيفة للغاية في الشوارع.",
        "fr": "Le texte souligne le flux incessant de véhicules dans les rues de Londres."
      }
    },
    "3": {
      "quote": "Meine Freundinnen wollten gern shoppen. Es gab auch tatsächlich viele Souvenirs, T-Shirts und Schmuck, aber wir haben uns sehr über die Preise geärgert. Viel witziges Design, aber keine Schnäppchen.",
      "whyCorrect": {
        "de": "Aussage 3 ist RICHTIG: Die Mädchen wollten shoppen, ärgerten sich aber über die hohen Preise und fanden keine Schnäppchen.",
        "ar": "العبارة 3 صحيحة: رغبت الفتيات في التسوق في كوفنت غاردن ولكن الأسعار كانت باهظة ولم يجدن أي عروض مناسبة.",
        "fr": "L'énoncé 3 est VRAI : Elles voulaient faire des achats à Covent Garden mais ont renoncé devant les prix excessifs."
      },
      "whyIncorrect": {
        "de": "Sie sparten ihr Taschengeld wegen der überteuerten Angebote.",
        "ar": "امتنعن عن الشراء لغلاء الأسعار وفضلن الاحتفاظ بمصروفهن.",
        "fr": "Elles n'ont rien acheté en raison des prix jugés trop élevés."
      }
    },
    "4": {
      "quote": "Auf dem Fußgängerweg zwischen den Türmen über der Themse blieben wir hinter Glas. Das fanden wir enttäuschend. Auch die Brückenausstellung war völlig uninteressant.",
      "whyCorrect": {
        "de": "Aussage 4 ist RICHTIG: Sie fanden die geschlossene Brückenpassage enttäuschend und die Ausstellung völlig uninteressant.",
        "ar": "العبارة 4 صحيحة: شعرت الفتيات بخيبة أمل بسبب الزجاج العازل في جسر البرج ووجدن المعرض مملاً تماماً.",
        "fr": "L'énoncé 4 est VRAI : L'accès vitré les a déçues et l'exposition du pont ne les a pas du tout intéressées."
      },
      "whyIncorrect": {
        "de": "Der Text belegt ausdrücklich, dass der Besuch enttäuschend und uninteressant war.",
        "ar": "استخدم النص كلمتي «enttäuschend» (مخيّب للآمال) و«völlig uninteressant» (غير مثير للاهتمام بتاتاً).",
        "fr": "Le texte indique clairement qu'elles ont été déçues par la visite de Tower Bridge."
      }
    },
    "5": {
      "quote": "Notting Hill war allerdings echt cool. Der Stadtteil ist berühmt für seinen Obst- und Gemüsemarkt, die Antiquitäten und Szeneläden. ... Hier haben wir auch endlich einige interessante Mitbringsel kaufen können.",
      "whyCorrect": {
        "de": "Aussage 5 ist FALSCH: Der Stadtteil ist zwar berühmt für den Obstmarkt, sie haben dort aber Souvenirs/Mitbringsel gekauft, kein Obst.",
        "ar": "العبارة 5 خاطئة: يشتهر الحي بسوق الفواكه والخضار، إلا أنهن قمن بشراء تذكارات وهدايا (Mitbringsel) وليس الفاكهة.",
        "fr": "L'énoncé 5 est FAUX : Le quartier est connu pour son marché de fruits, mais elles y ont acheté des souvenirs (Mitbringsel) et non des fruits."
      },
      "whyIncorrect": {
        "de": "Gekauft wurden „Mitbringsel“ (Souvenirs), nicht Obst.",
        "ar": "اشترت الفتيات هدايا تذكارية ومقتنيات وليس خضاراً أو فاكهة.",
        "fr": "Leur achat s'est porté sur des petits cadeaux/souvenirs."
      }
    },
    "6": {
      "quote": "Nach einer kurzen Stärkung bei McDonald's sind wir schließlich in den Hyde-Park, haben uns auf die Liegestühle gesetzt und den Reitern, kickenden Jugendlichen und graubraunen Eichhörnchen zugeschaut. Wir waren ziemlich müde.",
      "whyCorrect": {
        "de": "Aussage 6 ist RICHTIG: Im Hyde-Park setzten sie sich auf Liegestühle und ruhten sich aus, weil sie müde waren.",
        "ar": "العبارة 6 صحيحة: جلسن في كراسي الاسترخاء في هايد بارك واسترحن لمشاهدة الناس والسناجب بعد شعورهن بالتعب.",
        "fr": "L'énoncé 6 est VRAI : Fatiguées, elles se sont assises dans des transats à Hyde Park pour se reposer."
      },
      "whyIncorrect": {
        "de": "Auf den Liegestühlen schauten sie entspannt dem Parkleben zu.",
        "ar": "جلسن في الكراسي المريحة للاسترخاء والراحة.",
        "fr": "Elles se sont installées dans les transats pour récupérer de leur fatigue."
      }
    },
    "7": {
      "quote": "Eine inzwischen in vielen deutschen Städten angebotene Attraktion, die 1997 in den Museen der Hauptstadt geboren wurde.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Der Text beschreibt die „Lange Nacht der Museen“ als erfolgreiche Berliner Erfindung/Idee von 1997, die viele Städte übernahmen.",
        "ar": "الخيار c صحيح: يوضح المقال أن متاحف برلين ابتكرت هذه الفكرة الفريدة عام 1997 وانتشرت لاحقاً في العديد من المدن الألمانية.",
        "fr": "L'option c est correcte : Le texte explique que les musées berlinois ont lancé ce concept original en 1997, repris ensuite partout."
      },
      "whyIncorrect": {
        "de": "Die Fahrten sind nicht nachts umsonst (nur mit Ticket), und die Nächte sind nicht astronomisch länger.",
        "ar": "التنقل ليس مجانياً إلا لحاملي التذكرة، والمقصود ليس طول الليل الطبيعي.",
        "fr": "Les transports ne sont gratuits qu'avec le billet d'entrée et la durée de la nuit n'a rien d'astronomique."
      }
    },
    "8": {
      "quote": "Um von einem Museum zum anderen zu gelangen, gibt es für die Nachtschwärmer auch einen Bus-Shuttle-Service, der im Ticket inbegriffen ist.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Ein spezieller Bus-Shuttle-Service bringt die Museumsbesucher von Ort zu Ort.",
        "ar": "الخيار a صحيح: تتوفر خدمة حافلات نقل خاصة (Bus-Shuttle-Service) مجانية ضمن التذكرة للتنقل بين المتاحف.",
        "fr": "L'option a est correcte : Une navette de bus spéciale est mise à disposition pour circuler entre les différents musées."
      },
      "whyIncorrect": {
        "de": "Kinder unter 12 Jahren dürfen umsonst rein (nicht verboten), und Eintrittspreise sind nicht allgemein „günstig“.",
        "ar": "الأطفال تحت 12 عاماً يدخلون مجاناً وليسوا ممنوعين، والتذاكر بأسعار عادية.",
        "fr": "Les enfants de moins de 12 ans ont même un accès gratuit et les tarifs réguliers s'appliquent."
      }
    },
    "9": {
      "quote": "Wären vielleicht eine Nachtwanderung im Wald und der Besuch des Waldmuseums für Sie interessant?",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Das Waldmuseum bietet eine Nachtwanderung im Wald an.",
        "ar": "الخيار b صحيح: يقدم متحف الغابة (Waldmuseum) جولة مشي ليلية استكشافية في الغابة.",
        "fr": "L'option b est correcte : Le musée de la forêt propose une randonnée nocturne dans les bois."
      },
      "whyIncorrect": {
        "de": "Das Konzert ist klassisch in den Museumsräumen (kein Open-Air) und der Film läuft nicht jede Stunde.",
        "ar": "الحفل الكلاسيكي يقام داخل قاعات المتحف القديم وليس في الهواء الطلق، والفيلم لا يعرض كل ساعة.",
        "fr": "Le concert a lieu à l'intérieur de l'Altes Museum et la projection n'est pas programmée toutes les heures."
      }
    },
    "10": {
      "quote": "Damals hatte niemand damit gerechnet, dass Barbie einmal die am meisten verkaufte Puppe der Welt werden würde. Und nicht nur dieses Ziel hat sie erreicht, sie gilt auch als Synonym einer Modepuppe schlechthin.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Barbie wurde zur meistverkauften Puppe der Welt und damit zum absoluten Verkaufshit.",
        "ar": "الخيار a صحيح: أصبحت باربي الدمية الأكثر مبيعاً في العالم وحققت نجاحاً تجارياً كاسحاً (Verkaufshit).",
        "fr": "L'option a est correcte : Devenue la poupée la plus vendue au monde, Barbie représente un succès commercial planétaire."
      },
      "whyIncorrect": {
        "de": "Es geht nicht darum, dass sie „zu alt“ ist oder eine „tolle Erfindung“, sondern um ihren weltweiten Verkaufserfolg.",
        "ar": "التركيز لا ينصب على عمرها أو اعتبارها مجرد اختراع، بل على نجاح مبيعاتها الأسطوري.",
        "fr": "Le texte met en lumière sa réussite commerciale fulgurante et non son grand âge ou l'invention en soi."
      }
    },
    "11": {
      "quote": "Bestimmt ist ein Grund dafür, dass sie immer mit zahlreichen modernen Klamotten angezogen werden kann und stets mit der Zeit gegangen ist – sie wurde praktisch nie altmodisch.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Sie geht stets mit der Zeit und trägt immer aktuelle, moderne Mode.",
        "ar": "الخيار b صحيح: باربي تساير العصر دوماً وترتدي أحدث صيحات الموضة الحديثة («stets mit der Zeit gegangen»).",
        "fr": "L'option b est correcte : Elle s'adapte en permanence à son époque et porte toujours les tenues les plus actuelles."
      },
      "whyIncorrect": {
        "de": "Sie trug nur einmal ein Madonna-Outfit und ihre Kleidung ist modisch, nicht fahrzeugabhängig.",
        "ar": "جسدت شخصية مادونا في إصدار خاص فقط، وملابسها تعكس الموضة العامة وليست مصممة لتناسب سيارتها فحسب.",
        "fr": "Le modèle Madonna n'était qu'une version particulière parmi d'autres collections vestimentaires."
      }
    },
    "12": {
      "quote": "Das war 1959 auf der Spielwarenmesse in New York in den USA. Die beiden Gründer der Spielzeugfirma Mattel stellten sie dort vor.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: 1959 wurde die erste Barbie-Puppe auf der Spielwarenmesse in New York vorgestellt.",
        "ar": "الخيار c صحيح: شهد عام 1959 الظهور الأول لدمية باربي في معرض الألعاب بنيويورك.",
        "fr": "L'option c est correcte : C'est en 1959 lors du salon du jouet de New York que la première poupée Barbie a été dévoilée."
      },
      "whyIncorrect": {
        "de": "Ken kam erst später dazu, und von einem riesigen Soforterfolg auf der Messe 1959 ist nicht die Rede.",
        "ar": "صديقها كين لم يكن موجوداً حينها، ولم يتوقع أحد نجاحها في ذلك المعرض.",
        "fr": "Ken n'existait pas encore à cette date et personne ne prévoyait un tel triomphe au départ."
      }
    },
    "13": {
      "quote": "Anzeige c sucht altes Spielzeug zum KAUF („58-jähriges Kleinkind KAUFT altes Spielzeug... Käthe Kruse- + Schildkröt-Puppen“), verkauft aber keine.",
      "whyCorrect": {
        "de": "Lösung 0 ist richtig: Lea und Jana möchten Puppen für ihre Sammlung kaufen. Anzeige c ist ein Ankauf (sucht Verkäufer), kein Verkauf. Keine Anzeige passt.",
        "ar": "الخيار 0 (لا يوجد إعلان) صحيح: ليا ويانا تبحثان عن شراء دمى قديمة، بينما الإعلان c هو إعلان شراء (شخص يريد الشراء وليس البيع).",
        "fr": "L'option 0 est correcte : Lea et Jana cherchent à acheter des poupées pour leur collection, or l'annonce c est un avis d'achat et non de vente."
      },
      "whyIncorrect": {
        "de": "In Anzeige c kauft jemand altes Spielzeug an, bietet aber keine Puppen zum Verkauf an.",
        "ar": "صاحب الإعلان c يشتري الدمى القديمة ولا يبيعها لمقتنين آخرين.",
        "fr": "L'annonce c émane d'un acheteur qui recherche des jouets anciens, il n'en propose aucun à la vente."
      }
    },
    "14": {
      "quote": "Aus Haushaltsauflösung noch zu verschenken: Geschirr u. Besteck, Küchentisch mit 4 Stühlen, Bücher, Bettwäsche...",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Anzeige a verschenkt gebrauchte Bücher aus einer Haushaltsauflösung – ideal für Lesefreundin Monika.",
        "ar": "الخيار a صحيح: يعرض الإعلان a كتباً مستعملة مجاناً من تصفية منزل، وهو ما يناسب مونيكا المحبة للقراءة.",
        "fr": "L'option a est correcte : L'annonce a propose gratuitement des livres d'occasion issus d'un débarras de maison."
      },
      "whyIncorrect": {
        "de": "Andere Anzeigen bieten Elektronik, Kleidung oder Spielzeug, aber keine Bücher.",
        "ar": "الإعلانات الأخرى متخصصة في الحواسيب أو الملابس أو الدراجات ولا تحوي كتباً.",
        "fr": "Les autres encarts concernent l'informatique, les vêtements ou les vélos."
      }
    },
    "15": {
      "quote": "Computer-Flohmarkt: Sa. 19.02. ... im „Haus der Begegnung“ in FR-Landwasser. Hardware, Software, Spiele, Konsolen.",
      "whyCorrect": {
        "de": "Lösung f ist richtig: Auf dem Computer-Flohmarkt finden Freunde passende Hardware, Software oder Spiele als Geschenk für Laptop-Fan Dennis.",
        "ar": "الخيار f صحيح: يوفر سوق الحواسيب المستعملة أجهزة وبرامج وألعاباً مناسبة تماماً كهدية لدينيس العاشق للحاسوب.",
        "fr": "L'option f est correcte : La brocante informatique propose du matériel, des logiciels et des jeux idéaux pour Dennis."
      },
      "whyIncorrect": {
        "de": "Anzeige h bietet eine Stereoanlage und Musikkassetten/CDs, keine Computerteile.",
        "ar": "الإعلان h يعرض جهاز ستيريو وأقراص أغاني موسيقية ولا يتعلق بالكمبيوتر المحمول.",
        "fr": "L'annonce h vend une chaîne stéréo et des CD de musique, rien pour un ordinateur."
      }
    },
    "16": {
      "quote": "Kinderwagen Teutonia Team Alu 54 84 mit Softtragetasche, auch als Sportw. nutzbar, guter Zustand. Beige/kariert.",
      "whyCorrect": {
        "de": "Lösung i ist richtig: Anzeige i bietet genau den dringend gesuchten gebrauchten Kinderwagen an.",
        "ar": "الخيار i صحيح: يعرض الإعلان i عربة أطفال مستعملة بحالة جيدة جداً، وهو ما يحتاجه الزوجان لطفلهما الجديد.",
        "fr": "L'option i est correcte : L'annonce i propose exactement la poussette pour bébé recherchée par le couple."
      },
      "whyIncorrect": {
        "de": "Anzeige j ist nur ein Anmeldetermin für Verkäufer auf einem Baby-Flohmarkt.",
        "ar": "الإعلان j مجرد دعوة للمشاركين للتسجيل في سوق بيع مستلزمات الأطفال.",
        "fr": "L'annonce j concerne l'inscription des exposants à une bourse de puériculture."
      }
    },
    "17": {
      "quote": "Stereo-Anlage, komplett v. privat zu verkaufen, auch viele CDs (vor allem 60er-80er Jahre), guter Zustand / günstige Preise.",
      "whyCorrect": {
        "de": "Lösung h ist richtig: Hier werden zahlreiche CDs aus den 60er bis 80er Jahren (inkl. Disco-Ära der 70er) angeboten.",
        "ar": "الخيار h صحيح: يعرض الإعلان أقراص CD موسيقية متنوعة تركز على حقبة الستينيات إلى الثمانينيات التي يعشقها ساشا.",
        "fr": "L'option h est correcte : L'annonce h vend de nombreux CD des années 60 à 80, correspondant à la passion de Sascha."
      },
      "whyIncorrect": {
        "de": "Anzeige e verkauft Schallplatten (Vinyl), Sascha sucht jedoch gezielt CDs.",
        "ar": "الإعلان e يبيع أسطوانات فينيل قديمة (Schallplatten) بينما ساشا يبحث حصراً عن أسطوانات مدمجة (CDs).",
        "fr": "L'annonce e vend des disques vinyles alors que Sascha veut expressément des CD."
      }
    },
    "18": {
      "quote": "Secondhand-Börse: ... mit großem Fahrradmarkt ... So., 20. März, 10-18 Uhr, Marktplatz Fessenheim.",
      "whyCorrect": {
        "de": "Lösung g ist richtig: Auf dieser Börse gibt es einen großen Fahrradmarkt für Jutta, die ein gebrauchtes Fahrrad sucht.",
        "ar": "الخيار g صحيح: يضم سوق السلع المستعملة جناحاً كبيراً للدراجات الهوائية (großem Fahrradmarkt) التي تبحث عنها يوتا.",
        "fr": "L'option g est correcte : La bourse d'occasion comprend un grand marché aux vélos adapté à la recherche de Jutta."
      },
      "whyIncorrect": {
        "de": "Keine andere Anzeige führt Fahrräder im Angebot.",
        "ar": "لا يوجد أي إعلان آخر يوفر دراجات هوائية للبيع.",
        "fr": "Aucune autre annonce ne mentionne la vente de vélos."
      }
    },
    "19": {
      "quote": "Kleiderflohmarkt Schöneberg: ... Zeltgassen, die auch bei nicht so schönem Wetter zum Bummeln einladen. ... Wer Hunger bekommt, kann gleich am Imbiss-Stand Getränke und Bratwürstchen bestellen. ... öffnet samstags sowie sonntags.",
      "whyCorrect": {
        "de": "Lösung d ist richtig: Der Flohmarkt öffnet sonntags, lädt zum Bummeln/Spazieren ein und hat einen Imbiss-Stand für Snacks.",
        "ar": "الخيار d صحيح: يفتح السوق أبوابه أيام الأحد، ويتيح التجول في ممرات مظللة وتناول الوجبات السريعة والمشروبات من كشك الأطعمة.",
        "fr": "L'option d est correcte : Ce marché ouvre le dimanche, permet de se promener sous abri et dispose d'un stand de restauration."
      },
      "whyIncorrect": {
        "de": "Anzeige g verkauft Kuchen nur zur Mitnahme und die anderen Flohmärkte finden samstags statt.",
        "ar": "الإعلان g يبيع الكعك للتناول الخارجي فقط ومعظم الأسواق الأخرى تفتح أيام السبت فقط.",
        "fr": "L'annonce g n'autorise que la vente de gâteaux à emporter et les autres brocantes ont lieu le samedi."
      }
    },
    "20": {
      "quote": "Klaus: Ausserdem bekommt man ja durch eine andere Sprache auch das Wissen über eine andere Kultur. Man blickt also sozusagen auch in eine zweite Welt. Das kann doch nur nützen und den Menschen positiv formen.",
      "whyCorrect": {
        "de": "Lösung JA ist richtig: Klaus befürwortet die zweisprachige Erziehung ausdrücklich, da sie das Gehirn trainiert und kulturelles Wissen vermittelt.",
        "ar": "الخيار «نعم» صحيح: يؤيد كلاوس التربية ثنائية اللغة بقوة لأنها تدرب الدماغ وتفتح آفاق التعرف على ثقافات وعوالم أخرى.",
        "fr": "La réponse OUI est correcte : Klaus soutient l'éducation bilingue qui stimule le cerveau et enrichit culturellement l'enfant."
      },
      "whyIncorrect": {
        "de": "Klaus sieht nur Vorteile für die geistige und persönliche Entwicklung.",
        "ar": "يرى كلاوس منافع إيجابية حاسمة في تكوين شخصية الطفل.",
        "fr": "Klaus insiste sur les bénéfices intellectuels et humains évidents."
      }
    },
    "21": {
      "quote": "Patrizia: Ist doch eine gute Chance, noch eine Sprache zu können!",
      "whyCorrect": {
        "de": "Lösung JA ist richtig: Patrizia sieht in der Zweisprachigkeit eine hervorragende Chance für Kinder.",
        "ar": "الخيار «نعم» صحيح: ترى باتريتسيا أن ازدواجية اللغة فرصة ذهبية ورائعة لاكتساب مهارات إضافية.",
        "fr": "La réponse OUI est correcte : Patrizia considère le bilinguisme comme une formidable opportunité."
      },
      "whyIncorrect": {
        "de": "Sie berichtet positiv über ihre zweisprachige Mitschülerin.",
        "ar": "استشهدت بزميلتها في الصف التي تتحدث لغتين دون أي عائق في الألمانية.",
        "fr": "Elle cite l'exemple positif de sa camarade de classe bilingue."
      }
    },
    "22": {
      "quote": "Kevin: Auf jeden Fall sollten die Leute, die hier wohnen, alle Deutsch sprechen. Wenn man nicht gerade Übersetzer von Beruf ist, braucht man keine andere Sprache zu beherrschen. Nein, das finde ich eher unpraktisch.",
      "whyCorrect": {
        "de": "Lösung NEIN ist richtig: Kevin lehnt Mehrsprachigkeit ab und hält sie im Alltag für überflüssig und unpraktisch.",
        "ar": "الخيار «لا» صحيح: كيفن يعارض التربية ثنائية اللغة ويرى أن التحدث بلغات متعددة غير عملي ومزعج.",
        "fr": "La réponse NON est correcte : Kevin est opposé au bilinguisme qu'il juge encombrant et inutile au quotidien."
      },
      "whyIncorrect": {
        "de": "Kevin fordert, dass alle nur Deutsch sprechen.",
        "ar": "يصر كيفن على أن يتحدث الجميع لغة واحدة فقط وهي الألمانية.",
        "fr": "Kevin estime que seule la langue du pays d'accueil est nécessaire."
      }
    },
    "23": {
      "quote": "Annett: Das ist doch zu begrüssen. So gut wie im Kindesalter lernt man nie wieder eine Sprache ... Ich meine, wenn möglich, sollten alle Kinder mit mindestens zwei Sprachen aufwachsen.",
      "whyCorrect": {
        "de": "Lösung JA ist richtig: Annett fordert, dass möglichst jedes Kind zweisprachig aufwachsen sollte.",
        "ar": "الخيار «نعم» صحيح: ترحب آنيت بالفكرة وتطالب بأن ينشأ جميع الأطفال على لغتين على الأقل لإتقان النطق ومخارج الحروف.",
        "fr": "La réponse OUI est correcte : Annett préconise que tous les enfants grandissent si possible avec au moins deux langues."
      },
      "whyIncorrect": {
        "de": "Sie betont den unersetzbaren Vorteil des frühen Erwerbs im Kindesalter.",
        "ar": "توضح أن التعلم في الصغر لا يعوض في سهولة اكتساب اللهجة والنطق السليم.",
        "fr": "Elle vante la plasticité des jeunes enfants pour acquérir accent et vocabulaire."
      }
    },
    "24": {
      "quote": "Lucie: Wenn zu Hause dann mehrere Sprachen gesprochen werden, ist das doch kompliziert. ... Da kommt es garantiert zu Missverständnissen.",
      "whyCorrect": {
        "de": "Lösung NEIN ist richtig: Lucie sieht darin Verwirrung, Überforderung und Konflikte durch Missverständnisse.",
        "ar": "الخيار «لا» صحيح: تعارض لوسي التربية الثنائية وتعتبرها معقدة وتسبب سوء الفهم وصعوبات دراسية.",
        "fr": "La réponse NON est correcte : Lucie estime que mélanger les langues complique la communication et génère des malentendus."
      },
      "whyIncorrect": {
        "de": "Lucie hat selbst Mühe mit Fremdsprachen und rät vom Sprachenmischmasch ab.",
        "ar": "تعاني لوسي مع اللغات وترى في تحدث لغات عدة في المنزل تشويشاً غير مستحب.",
        "fr": "Elle souligne le risque d'incompréhension familiale au quotidien."
      }
    },
    "25": {
      "quote": "Herbert: Ist doch egal, wann man die zweite Sprache lernt. Als Anfang muss man erstmal eine gute Basis in der Muttersprache haben und nur die lernen.",
      "whyCorrect": {
        "de": "Lösung NEIN ist richtig: Herbert ist gegen frühe Zweisprachigkeit; das Kind solle sich zuerst ausschließlich auf die Muttersprache konzentrieren.",
        "ar": "الخيار «لا» صحيح: يرفض هربرت تعليم الأطفال لغتين في وقت مبكر ويؤكد على ضرورة الاكتفاء باللغة الأم أولاً.",
        "fr": "La réponse NON est correcte : Herbert privilégie l'apprentissage strict et exclusif de la langue maternelle dans l'enfance."
      },
      "whyIncorrect": {
        "de": "Herbert meint, Fremdsprachen könne man problemlos auch erst im Erwachsenenalter lernen.",
        "ar": "يرى هربرت أن اللغات الأخرى يمكن تعلمها لاحقاً دون الحاجة لفرضها في الطفولة.",
        "fr": "Il considère que l'apprentissage des langues secondes peut très bien attendre l'âge adulte."
      }
    },
    "26": {
      "quote": "Maria: Ein Kind, dessen Eltern aus zwei Ländern kommen, muss ja auch mit den Verwandten von beiden Seiten sprechen können. ... Nein, nur die eine Sprache zu können wäre für das Kind von Nachteil. Ein Teil seiner Identität ginge ja verloren.",
      "whyCorrect": {
        "de": "Lösung JA ist richtig: Maria ist überzeugt, dass Zweisprachigkeit für die Identität und die Familie unerlässlich ist.",
        "ar": "الخيار «نعم» صحيح: تدعم ماريا بقوة التربية الثنائية للحفاظ على هوية الطفل والتواصل مع عائلات الوالدين من الطرفين.",
        "fr": "La réponse OUI est correcte : Maria affirme que le bilinguisme est vital pour l'identité de l'enfant et le lien avec sa famille."
      },
      "whyIncorrect": {
        "de": "Nur eine Sprache zu lernen wäre für Maria ein schwerer Verlust.",
        "ar": "تعتبر ماريا حرمان الطفل من إحدى لغتيه خسارة فادحة لهويته وتواصله الأسري.",
        "fr": "Elle juge qu'ignorer l'une des deux langues constitue un désavantage majeur."
      }
    },
    "27": {
      "quote": "Die Unterbringung erfolgt in Mehrbettzimmern und in der Regel nach Geschlecht getrennt.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Da die Unterbringung prinzipiell in Mehrbettzimmern erfolgt, gibt es keine regulären Einzelzimmer.",
        "ar": "الخيار a صحيح: تتم الإقامة دائماً في غرف متعددة الأسرة (Mehrbettzimmern)، وبالتالي لا تتوفر غرف فردية.",
        "fr": "L'option a est correcte : L'hébergement s'effectuant en chambres collectives à plusieurs lits, il n'y a pas de chambre individuelle."
      },
      "whyIncorrect": {
        "de": "Familien schlafen nur zusammen „wenn ein Zimmer frei ist“, und Abfall muss getrennt werden (ist nicht verboten).",
        "ar": "العائلات تقيم في غرفة واحدة فقط في حال توفرها، والمطلوب فرز النفايات وليس منع إنتاجها نهائياً.",
        "fr": "Les familles ne sont regroupées que sous réserve de disponibilité et les déchets doivent être triés."
      }
    },
    "28": {
      "quote": "Zugesagte Plätze werden bis 18 Uhr frei gehalten, danach können sie an andere Gäste vergeben werden.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Angemeldete Plätze bleiben nur bis 18 Uhr reserviert; man muss also bis 18 Uhr ankommen.",
        "ar": "الخيار c صحيح: الغرف المحجوزة تُحفظ للضيف حتى الساعة 18:00 فقط، لذا يتعين الوصول قبل هذه الساعة تجنباً لإلغائها.",
        "fr": "L'option c est correcte : Les lits réservés ne sont conservés que jusqu'à 18h ; il faut donc être arrivé avant cette heure."
      },
      "whyIncorrect": {
        "de": "Man kann nicht kommen, wann man will (nach 18 Uhr Weitervergabe) und Mitgliedskarten muss man vorweisen, nicht bekommen.",
        "ar": "لا يمكن الحضور في أي وقت كان، وبطاقة العضوية يجب أن يمتلكها النزيل مسبقاً أو يشتري بطاقة دولية.",
        "fr": "On ne peut pas arriver à n'importe quelle heure sans risquer de perdre sa place."
      }
    },
    "29": {
      "quote": "Dazu gehört z.B., dass Sie die von Ihnen genutzten Einrichtungen, Räume und Gegenstände in Ordnung halten und beim Tischdienst helfen.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Gäste sind verpflichtet, genutzte Räume und Einrichtungen in Ordnung zu halten (aufzuräumen).",
        "ar": "الخيار a صحيح: يطلب ميثاق بيت الشباب من النزلاء الحفاظ على النظافة وترتيب الغرف والمرافق المشتركة.",
        "fr": "L'option a est correcte : Les hôtes sont expressément invités à maintenir en ordre leurs chambres et espaces partagés."
      },
      "whyIncorrect": {
        "de": "Tagsüber schlafen ist nicht untersagt und Abreise ist bis 10 Uhr (nicht 7 Uhr).",
        "ar": "النوم نهاراً ليس ممنوعاً، وموعد إخلاء الغرف عند المغادرة هو الساعة العاشرة وليس السابعة.",
        "fr": "Les chambres doivent être libérées avant 10h (et non 7h) et le repos diurne n'est pas interdit."
      }
    },
    "30": {
      "quote": "Rauchen ist in der Jugendherberge nicht gestattet.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: In der gesamten Jugendherberge und somit auch in den Schlafräumen herrscht striktes Rauchverbot.",
        "ar": "الخيار b صحيح: التدخين ممنوع تماماً في بيت الشباب وبالتالي في غرف النوم أيضاً.",
        "fr": "L'option b est correcte : Il est strictement interdit de fumer dans toute l'auberge, y compris dans les dortoirs."
      },
      "whyIncorrect": {
        "de": "Essen im Schlafraum ist verboten; bei Elektrogeräten sind nur solche zur Speisezubereitung untersagt.",
        "ar": "تناول الطعام في غرف النوم محظور، والأجهزة الكهربائية الممنوعة هي فقط أجهزة الطهي وإعداد المشروبات الساخنة.",
        "fr": "Manger dans les dortoirs est formellement banni, et seuls les appareils de cuisson électrique sont interdits."
      }
    },
    "h1": {
      "quote": "Achtung! Achtung! Passagiere des Lufthansa-Fluges LH 539 nach München werden gebeten, nicht am Schalter 53, sondern am Schalter 45 einzuchecken. ... Ebenfalls geben wir die verspätete Ankunft der easyJet aus London bekannt.",
      "whyCorrect": {
        "de": "Aussage h1 ist FALSCH: Die Durchsagen betreffen den Check-in-Schalterwechsel und eine Ankunftszeit (nicht bloß Abflugzeiten).",
        "ar": "العبارة h1 خاطئة: الإعلان في المطار يتعلق بتغيير كشك تسجيل الدخول وتأخر وصول رحلة، وليس عن مواعيد إقلاع رحلات.",
        "fr": "L'énoncé h1 est FAUX : L'annonce concerne un changement de comptoir d'enregistrement et un retard à l'arrivée."
      },
      "whyIncorrect": {
        "de": "Es geht um Schalteränderungen und Flugankünfte.",
        "ar": "تضمن الإعلان شقاً عن الوصول وشقاً عن كاونتر تسجيل المغادرة.",
        "fr": "L'information portait sur les arrivées et le comptoir d'enregistrement."
      }
    },
    "h2": {
      "quote": "Ebenfalls geben wir die verspätete Ankunft der easyJet aus London, Flug Nr. 215, bekannt. Wegen Nebels wird die Maschine voraussichtlich mit zwei Stunden Verspätung um 19.45 Uhr landen.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Das Flugzeug aus London kommt mit zwei Stunden Verspätung (später) an.",
        "ar": "الخيار c صحيح: طائرة لندن ستهبط متأخرة ساعتين عن موعدها بسبب الضباب (تصل متأخرة).",
        "fr": "L'option c est correcte : L'appareil en provenance de Londres atterrira avec deux heures de retard (plus tard)."
      },
      "whyIncorrect": {
        "de": "Es geht um die Ankunft (nicht den Abflug) und die Maschine hat Verspätung (kommt nicht früher).",
        "ar": "الطائرة تصل متأخرة ولا تقلع متأخرة أو تصل مبكرة.",
        "fr": "L'avion a du retard à l'atterrissage et n'arrive pas en avance."
      }
    },
    "h3": {
      "quote": "Dass Deutsche gern zum Doktor gehen, ist bereits bekannt. Glaubt man aber der Untersuchung der OECD, sitzen Japaner und Ungarn noch lieber im Wartezimmer einer Arztpraxis.",
      "whyCorrect": {
        "de": "Aussage h3 ist FALSCH: Der Sprecher berichtet über eine OECD-Statistik zur Häufigkeit von Arztbesuchen, gibt aber keine medizinischen Ratschläge.",
        "ar": "العبارة h3 خاطئة: التقرير يقدم بيانات إحصائية لمنظمة التعاون الاقتصادي عن زيارة الأطباء ولا يقدم نصائح طبية أو صحية.",
        "fr": "L'énoncé h3 est FAUX : Il s'agit d'une étude statistique sur la fréquence des consultations médicales et non de conseils de santé."
      },
      "whyIncorrect": {
        "de": "Es handelt sich um statistische Vergleichsdaten über Patientenverhalten.",
        "ar": "المحتوى إحصائي مقارن بين الدول ولا يحتوي إرشادات صحية.",
        "fr": "Le sujet traite d'une enquête comparative sur les visites chez le médecin."
      }
    },
    "h4": {
      "quote": "Ein Japaner braucht mindestens einmal im Monat medizinischen Rat, einem Ungarn reicht statistisch gesehen ein Besuch alle sechs Wochen. Deutsche melden sich im Durchschnitt alle zwei Monate zu einem Arzttermin an.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Japaner besuchen am häufigsten die Praxis (mindestens 1-mal im Monat = 12+ mal im Jahr), öfter als Ungarn (alle 6 Wochen) und Deutsche (alle 2 Monate).",
        "ar": "الخيار b صحيح: اليابانيون هم الأكثر زيارة للطبيب (مرة في الشهر على الأقل)، يليهم المجريون ثم الألمان.",
        "fr": "L'option b est correcte : Les Japonais consultent le plus souvent (au moins une fois par mois), devant les Hongrois et les Allemands."
      },
      "whyIncorrect": {
        "de": "Ungarn gehen alle 6 Wochen, Deutsche nur alle 2 Monate.",
        "ar": "يذهب المجريون كل 6 أسابيع والألمان كل شهرين في المتوسط.",
        "fr": "Les Allemands et les Hongrois consultent moins régulièrement que les Japonais."
      }
    },
    "h5": {
      "quote": "Heute in unserer Sendung geben wir wie jede Woche Tipps für unsere Zuhörer, die mal wieder ins Kino gehen möchten.",
      "whyCorrect": {
        "de": "Aussage h5 ist RICHTIG: Der Moderator kündigt ausdrücklich wöchentliche Kinotipps und Vorstellungszeiten an.",
        "ar": "العبارة h5 صحيحة: تقدم الإذاعة نصائح سينمائية أسبوعية لعشاق الأفلام وقائمة العروض.",
        "fr": "L'énoncé h5 est VRAI : L'animateur présente bien la chronique hebdomadaire des conseils cinéma."
      },
      "whyIncorrect": {
        "de": "Es werden Filmstarts und Kinosäle in Berlin vorgestellt.",
        "ar": "تم استعراض الأفلام المعروضة ومواعيدها في قاعات السينما.",
        "fr": "Il s'agit explicitement de suggestions de films à l'affiche."
      }
    },
    "h6": {
      "quote": "Freitag, 28.10., 15.45 Uhr im CinemaxX am Potsdamer Platz läuft „another year“ ... Auch in der Abendvorstellung um 20.30 Uhr.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Der Film läuft am Freitag genau zweimal (um 15.45 Uhr und um 20.30 Uhr).",
        "ar": "الخيار b صحيح: يُعرض الفيلم يوم الجمعة مرتين فقط (الساعة 15:45 والساعة 20:30).",
        "fr": "L'option b est correcte : Le film est projeté deux fois le vendredi (à 15h45 et à 20h30)."
      },
      "whyIncorrect": {
        "de": "Am Samstag gibt es drei Vorstellungen eines anderen Films, am Freitag nur zwei.",
        "ar": "عروض السبت كانت ثلاث مرات لفيلم آخر، بينما فيلم الجمعة يعرض مرتين فقط.",
        "fr": "Le film du vendredi ne passe que deux fois, contrairement au programme du samedi."
      }
    },
    "h7": {
      "quote": "Hier Zahnarztpraxis Dr. Mannheim. Die Praxis ist zurzeit wegen der Sommerpause geschlossen.",
      "whyCorrect": {
        "de": "Aussage h7 ist RICHTIG: Der Anrufbeantworter meldet, dass die Praxis wegen der Sommerpause momentan geschlossen ist.",
        "ar": "العبارة h7 صحيحة: يفيد المجيب الآلي بأن العيادة مغلقة حالياً بسبب العطلة الصيفية.",
        "fr": "L'énoncé h7 est VRAI : Le répondeur indique que le cabinet dentaire est actuellement fermé pour congés d'été."
      },
      "whyIncorrect": {
        "de": "Die Ansage informiert über die Schließung und Notfallnummern.",
        "ar": "تؤكد الرسالة الصوتية إغلاق العيادة خلال الإجازة الصيفية.",
        "fr": "Le cabinet n'accueille aucun patient pendant cette pause estivale."
      }
    },
    "h8": {
      "quote": "Sprechzeiten ab 1.9.: montags bis donnerstags von 17.00 Uhr bis 21.30 Uhr, freitags und samstags geschlossen. Termine nur nach telefonischer Vereinbarung.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Ein Besuch ist ausschließlich nach vorheriger telefonischer Terminvereinbarung möglich.",
        "ar": "الخيار a صحيح: مواعيد الكشف تتم فقط وحصراً بعد الحجز والتسجيل الهاتفي المسبق.",
        "fr": "L'option a est correcte : Les consultations ont lieu uniquement sur rendez-vous pris par téléphone."
      },
      "whyIncorrect": {
        "de": "Freitags und samstags ist geschlossen, und geöffnet ist erst abends (17.00 Uhr), nicht am Vormittag.",
        "ar": "العيادة مغلقة الجمعة والسبت، والمواعيد مسائية وليست صباحية.",
        "fr": "Le cabinet est fermé les vendredi/samedi et n'ouvre qu'en fin d'après-midi."
      }
    },
    "h9": {
      "quote": "„Klasse unterwegs“, so heißt das Schulprojekt der DB Regio AG. ... denn mit dem preisgünstigen Brandenburg-Berlin-Ticket sind zum Beispiel fünf Personen schon für 27 Euro einen Tag im Nahverkehr der Deutschen Bahn unterwegs.",
      "whyCorrect": {
        "de": "Aussage h9 ist FALSCH: Die Durchsage wirbt für Ausflüge mit der Bahn (DB Regio AG), nicht für Flüge.",
        "ar": "العبارة h9 خاطئة: الإعلان يروج لمشروع رحلات قطارات السكك الحديدية الألمانية (Deutsche Bahn)، وليس للسفر بالطائرة.",
        "fr": "L'énoncé h9 est FAUX : La publicité fait la promotion de sorties scolaires en train (Deutsche Bahn) et non en avion."
      },
      "whyIncorrect": {
        "de": "Es geht um günstige Bahn-Tickets für Schulen und Gruppen.",
        "ar": "الحديث يدور حول تذاكر قطارات النقل المحلي الموفرة للرحلات المدرسية.",
        "fr": "Il est question de billets de train régionaux pour des excursions scolaires."
      }
    },
    "h10": {
      "quote": "denn mit dem preisgünstigen Brandenburg-Berlin-Ticket sind zum Beispiel fünf Personen schon für 27 Euro einen Tag im Nahverkehr der Deutschen Bahn unterwegs.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Das Ticket für bis zu fünf Personen kostet genau 27 Euro.",
        "ar": "الخيار a صحيح: تذكرة براندنبورغ-برلين لخمسة أشخاص تكلف 27 يورو لليوم الكامل.",
        "fr": "L'option a est correcte : Le billet de groupe pour cinq personnes s'élève à 27 euros."
      },
      "whyIncorrect": {
        "de": "Die genannten 27 Euro decken fünf Reisende ab.",
        "ar": "ذكر الإعلان بوضوح سعر 27 يورو للمجموعة المكونة من خمسة أفراد.",
        "fr": "Le montant explicitement mentionné pour 5 personnes est de 27 euros."
      }
    },
    "h11": {
      "quote": "Herzlich willkommen zu Ihrem Besuch des Bergisel Stadions, nahe Innsbruck. Seinen Namen hat das Stadion nach dem 746 Meter hohen Hügel Bergisel, der südlich von Innsbruck liegt.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Das Stadion befindet sich nahe der Stadt Innsbruck.",
        "ar": "الخيار b صحيح: يقع الاستاد بالقرب من مدينة إنسبروك النمساوية (nahe Innsbruck).",
        "fr": "L'option b est correcte : Le complexe sportif est situé tout près d'Innsbruck."
      },
      "whyIncorrect": {
        "de": "Der Bergisel ist ein Hügel südlich von Innsbruck, die Stadt ist nicht Hamburg.",
        "ar": "الاستاد يحمل اسم تل برغيزل القريب من إنسبروك وليس في هامبورغ.",
        "fr": "Il porte le nom de la colline mais est situé dans la périphérie d'Innsbruck."
      }
    },
    "h12": {
      "quote": "dass in den Jahren 1964 und 1976 ... hier in Innsbruck die Olympischen Winterspiele stattgefunden haben.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Im Stadion Bergisel fanden 1964 und 1976 die Olympischen Winterspiele statt.",
        "ar": "الخيار a صحيح: استضاف الاستاد دورات الألعاب الأولمبية الشتوية عامي 1964 و1976.",
        "fr": "L'option a est correcte : Le stade a accueilli les Jeux olympiques d'hiver en 1964 et 1976."
      },
      "whyIncorrect": {
        "de": "Bei der Fußball-EM war es nur eine Fan-Zone mit Videoleinwand, es fanden keine Spiele auf dem Rasen statt.",
        "ar": "في بطولة أمم أوروبا لكرة القدم كان الاستاد مجرد ساحة مشجعين لشاشات العرض وليس لإقامة المباريات.",
        "fr": "Le stade n'était qu'une zone de retransmission lors de l'Euro de football."
      }
    },
    "h13": {
      "quote": "Bei der Eröffnungsfeier dieser ersten Jugendspiele marschierten 1059 Athleten und Athletinnen aus 67 Nationen ein.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: 1059 Sportler nahmen teil, das sind weniger als 1900.",
        "ar": "الخيار b صحيح: شارك 1059 رياضياً في أولمبياد الشباب، وهو رقم أقل من 1900 رياضي.",
        "fr": "L'option b est correcte : Avec 1059 sportifs au défilé d'ouverture, cela représente moins de 1900 athlètes."
      },
      "whyIncorrect": {
        "de": "1059 liegt deutlich unter 1900 und 67 war die Anzahl der Nationen.",
        "ar": "العدد 67 هو عدد الدول المشاركة وليس عدد الرياضيين.",
        "fr": "Le chiffre 67 correspondait au nombre de délégations nationales."
      }
    },
    "h14": {
      "quote": "Anschließend fahren wir mit dem Aufzug zum Turm, das dauert etwa zwei Minuten.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Die Aufzugfahrt hinauf zum Turm dauert etwa zwei Minuten.",
        "ar": "الخيار a صحيح: تستغرق رحلة المصعد للصعود إلى البرج دقيقتين تقريباً.",
        "fr": "L'option a est correcte : L'ascension en ascenseur jusqu'à la tour prend environ deux minutes."
      },
      "whyIncorrect": {
        "de": "Die Führung geht an 14 Tafeln vorbei und die Gruppe hat 32 Personen, aber der Lift braucht 2 Minuten.",
        "ar": "العدد 14 هو عدد لوحات المعلومات و32 هو عدد أفراد الفوج السياحي، بينما استغراق المصعد دقيقتان.",
        "fr": "14 est le nombre de panneaux didactiques et 32 l'effectif du groupe de visiteurs."
      }
    },
    "h15": {
      "quote": "Auf Ebene 2 ist das Panorama-Restaurant „Café im Turm“. Auch hier erlauben Ihnen die raumhohen Glasfronten einen einzigartigen Panoramablick.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Das Café / Restaurant befindet sich auf Ebene 2.",
        "ar": "الخيار c صحيح: يقع المقهى والمطعم البانورامي في الطابق الثاني (Ebene 2) من البرج.",
        "fr": "L'option c est correcte : Le restaurant panoramique « Café im Turm » se trouve au deuxième niveau."
      },
      "whyIncorrect": {
        "de": "Die Bergterrasse ist am Einstieg und Ebene 3 ist die Freiluft-Terrasse.",
        "ar": "شرفة الجبل هي نقطة الانطلاق، بينما الطابق الثالث مخصص للمنصة المفتوحة.",
        "fr": "Le troisième niveau accueille la plateforme panoramique découverte."
      }
    },
    "h16": {
      "quote": "Philipp: Heute ist Freitag! Timm! Wochenende: keine Schule, Fußballspielen und die Geburtstagsparty von Laura. Timm: Ja, die Party ist gut und ein Geschenk habe ich auch schon.",
      "whyCorrect": {
        "de": "Aussage h16 ist RICHTIG: Timm bestätigt, dass am Wochenende Lauras Party stattfindet und er schon ein Geschenk hat.",
        "ar": "العبارة h16 صحيحة: تيم مدعو لحفلة عيد ميلاد لورا في عطلة نهاية الأسبوع وقد اشترى هديتها بالفعل.",
        "fr": "L'énoncé h16 est VRAI : Timm confirme qu'il est convié à la fête d'anniversaire de Laura ce week-end."
      },
      "whyIncorrect": {
        "de": "Beide sprechen mit Vorfreude über Lauras Party.",
        "ar": "أكد تيم وفيليب إقامة الحفلة وذهاب تيم إليها.",
        "fr": "Timm a d'ores et déjà acheté le cadeau pour la soirée."
      }
    },
    "h17": {
      "quote": "Timm: Letztes Jahr, als wir Frau Brunner in Mathe ... die habe ich verstanden. Letztes Jahr fand ich Mathe einfach und dieses Jahr verstehe ich nichts, es ist nur schrecklich.",
      "whyCorrect": {
        "de": "Aussage h17 ist FALSCH: Timm fand Mathe letztes Jahr einfach; die Probleme begannen erst dieses Schuljahr.",
        "ar": "العبارة h17 خاطئة: لم تكن لديه مشاكل سابقة في الرياضيات، بل كان يراها سهلة العام الماضي مع معلمته السابقة.",
        "fr": "L'énoncé h17 est FAUX : Les difficultés de Timm en maths sont récentes ; l'an passé, il trouvait la matière facile."
      },
      "whyIncorrect": {
        "de": "Erst beim neuen Lehrer Herrn Graf traten die Verständnisschwierigkeiten auf.",
        "ar": "بدأت مشكلته فقط مع شرح الأستاذ الجديد في السنة الحالية.",
        "fr": "Il comprenait très bien les cours de mathématiques l'année scolaire précédente."
      }
    },
    "h18": {
      "quote": "Philipp: Dein Bruder ist doch sehr gut in Mathe, nicht? Timm: Ja, aber Leo studiert jetzt in London. Der kommt nur in den Semesterferien nach Hause ... Das hilft nicht.",
      "whyCorrect": {
        "de": "Aussage h18 ist FALSCH: Leo weigert sich nicht, sondern studiert in London und ist gar nicht vor Ort.",
        "ar": "العبارة h18 خاطئة: ليو لا يمانع في المساعدة، ولكنه يدرس في لندن ولا يعود للمنزل إلا نادراً في العطلات.",
        "fr": "L'énoncé h18 est FAUX : Léo ne refuse pas d'aider, il étudie simplement à Londres et ne rentre que rarement."
      },
      "whyIncorrect": {
        "de": "Es scheitert an der räumlichen Distanz, nicht am fehlenden Willen.",
        "ar": "العائق هو بعد المسافة وسفره للخارج وليس رفض تقديم العون لأخيه.",
        "fr": "Son absence géographique empêche un tutorat régulier."
      }
    },
    "h19": {
      "quote": "Philipp: Aber ich habe gehört, dass es in Luzern einige gute Nachhilfeinstitute gibt, die gar nicht so viel kosten.",
      "whyCorrect": {
        "de": "Aussage h19 ist FALSCH: Philipp erwähnt ausdrücklich, dass es in Luzern preiswerte Nachhilfeinstitute gibt.",
        "ar": "العبارة h19 خاطئة: أشار فيليب إلى وجود معاهد دروس خصوصية جيدة ورخيصة التكلفة في لوسيرن.",
        "fr": "L'énoncé h19 est FAUX : Philipp souligne au contraire qu'il existe à Lucerne des centres de soutien abordables."
      },
      "whyIncorrect": {
        "de": "Die Institute in Luzern kosten „gar nicht so viel“.",
        "ar": "أوضح فيليب أن معاهد لوسيرن ليست باهظة الثمن إطلاقاً.",
        "fr": "Certains organismes proposent des tarifs tout à fait modérés."
      }
    },
    "h20": {
      "quote": "Timm: Nachmittags, in die Stadt rein, könnte ich mit dem Bus und dem Tram fahren ... Aber abends, wenn der Nachhilfeunterricht aus ist, fährt der Bus nicht mehr. Philipp: Hm, da hast du recht. Das geht nicht.",
      "whyCorrect": {
        "de": "Aussage h20 ist RICHTIG: Timm kann den Unterricht nicht wahrnehmen, weil abends nach der Nachhilfe kein Bus mehr in sein Dorf fährt.",
        "ar": "العبارة h20 صحيحة: لا يستطيع تيم الاعتماد على المواصلات العامة لأن حافلة العودة لقريته تتوقف عن العمل مساءً.",
        "fr": "L'énoncé h20 est VRAI : Timm ne peut pas recourir aux transports publics car le bus du soir ne dessert plus son village après les cours."
      },
      "whyIncorrect": {
        "de": "Die Rückfahrt am Abend mit dem Bus ist unmöglich.",
        "ar": "عدم توفر حافلة في طريق العودة ليلاً يمنعه من الذهاب للمعاهد في المدينة.",
        "fr": "L'absence de bus pour le trajet retour rend cette option impraticable."
      }
    },
    "h21": {
      "quote": "Philipp: Nein, nein. Wenn, dann würde ich das natürlich nicht gegen Bezahlung machen. Wir sind doch Freunde.",
      "whyCorrect": {
        "de": "Aussage h21 ist FALSCH: Philipp betont sofort, dass er als Freund niemals Geld für die Hilfe verlangen würde.",
        "ar": "العبارة h21 خاطئة: رفض فيليب تماماً تقاضي أي مقابل مالي لأنهما صديقان مقربان.",
        "fr": "L'énoncé h21 est FAUX : Philipp refuse catégoriquement toute rémunération au nom de leur amitié."
      },
      "whyIncorrect": {
        "de": "Philipp hilft Timm kostenlos aus Freundschaft.",
        "ar": "أصر فيليب على تقديم الدعم مجاناً بدافع الصداقة الأخوية.",
        "fr": "Il propose spontanément de l'épauler sans contrepartie financière."
      }
    },
    "h22": {
      "quote": "Timm: Wir können es doch probieren. Erst einmal bis zur nächsten Prüfung. Philipp: Einverstanden. – Und wann fangen wir an? Montag? Timm: Echt? Super! ... Danke.",
      "whyCorrect": {
        "de": "Aussage h22 ist RICHTIG: Philipp sagt zu, Timm bis zur nächsten Prüfung in Mathe Nachhilfe zu geben.",
        "ar": "العبارة h22 صحيحة: وافق فيليب على إعطاء تيم دروس تقوية في الرياضيات ابتداءً من يوم الاثنين القادم.",
        "fr": "L'énoncé h22 est VRAI : Philipp donne son accord pour aider Timm à réviser jusqu'au prochain contrôle."
      },
      "whyIncorrect": {
        "de": "Sie verabreden sich fest für den Beginn am kommenden Montag.",
        "ar": "اتفق الاثنان رسمياً على بدء المذاكرة معاً يوم الاثنين.",
        "fr": "Ils fixent un premier rendez-vous dès le lundi suivant."
      }
    },
    "h23": {
      "quote": "Kim Köhler: Aber wenn man bedenkt, dass in unserer Stadt – wie in fast allen Uni-Städten – der Wohnraum knapp und teuer ist, dann ist so eine Entscheidung durchaus verständlich. Wissen Sie, manchmal müssen Studenten sogar in Zelten und Sporthallen übernachten...",
      "whyCorrect": {
        "de": "Lösung c (Kim Köhler) ist richtig: Die Studentin berichtet aus eigener Anschauung über die extreme Wohnungsnot für Studenten in der Stadt.",
        "ar": "الخيار c (كيم كولر) صحيح: وصفت الطالبة كيم شح السكن وغلاء الإيجارات الذي يضطر الطلاب للمبيت في الخيام والقاعات الرياضية.",
        "fr": "L'option c (Kim Köhler) est correcte : L'étudiante témoigne de la pénurie critique de logements universitaires en ville."
      },
      "whyIncorrect": {
        "de": "Weder Journalist noch Heimleiterin schilderten diese Erfahrungen aus Studierendensicht.",
        "ar": "لم يتطرق المذيع أو مديرة الدار لهذه التفاصيل من واقع معاناة الطلبة الشخصية.",
        "fr": "Elle évoque la précarité des étudiants contraints de dormir sous tente faute de chambre."
      }
    },
    "h24": {
      "quote": "Journalist: Und, wie ich gehört habe, ist die Nachfrage sehr groß. Na, das ist ja wohl verständlich.",
      "whyCorrect": {
        "de": "Lösung a (Journalist) ist richtig: Der Journalist bringt ein, dass das Projekt bei den Studenten enorm gefragt ist.",
        "ar": "الخيار a (المذيع) صحيح: يذكر الصحفي أن الإقبال والطلب على هذا المشروع التكافلي كبير للغاية.",
        "fr": "L'option a (Journaliste) est correcte : L'interviewer souligne que la demande de la part des étudiants est très forte."
      },
      "whyIncorrect": {
        "de": "Die beiden Frauen werden danach gefragt, nicht die Urheber dieser Einleitung.",
        "ar": "طرح الصحفي هذه المعلومة كمقدمة لسؤال ضيفتيه عن ظروف السكن.",
        "fr": "C'est le journaliste qui formule ce constat avant d'interroger ses invitées."
      }
    },
    "h25": {
      "quote": "Anna Lorenz: Nein, nein. Alle Apartments in unserem Heim sind gleich groß und bieten auch alle das Gleiche, also ein eigenes Bad, einen Balkon und eine Gemeinschaftsküche.",
      "whyCorrect": {
        "de": "Lösung b (Anna Lorenz) ist richtig: Die Heimleiterin erklärt, dass alle 18 Studentenapartments dieselbe Größe und Ausstattung haben.",
        "ar": "الخيار b (آنا لورنتس) صحيح: توضح مديرة الدار أن جميع شقق الطلاب متطابقة في المساحة (20 متراً مربعاً) والتجهيزات.",
        "fr": "L'option b (Anna Lorenz) est correcte : La directrice précise que les 18 logements étudiants sont rigoureusement identiques."
      },
      "whyIncorrect": {
        "de": "Kim beschrieb nur ihr eigenes Zimmer, Frau Lorenz bestätigte die Einheitlichkeit für alle.",
        "ar": "وصفت كيم شقتها الخاصة بينما أكدت السيدة لورنتس تماثل جميع شقق المشروع.",
        "fr": "Kim ne décrivait que sa propre chambre tandis que Mme Lorenz généralise à l'ensemble du foyer."
      }
    },
    "h26": {
      "quote": "Kim Köhler: Also, ich persönlich gehe mit Herrn Steinert spazieren. ... Andere Studenten bringen den älteren Leuten etwas bei, z.B. wie man einen Computer und das Internet benutzt, oder sie organisieren Kino- und Gesangsabende. Es gibt verschiedene Möglichkeiten.",
      "whyCorrect": {
        "de": "Lösung c (Kim Köhler) ist richtig: Kim zählt die verschiedenen Tätigkeiten auf, von Begleitung über Computerhilfe bis zu Gesangsabenden.",
        "ar": "الخيار c (كيم كولر) صحيح: تستعرض كيم المهام والأنشطة المتنوعة التي يقدمها الزملاء للنزلاء المسنين.",
        "fr": "L'option c (Kim Köhler) est correcte : Kim détaille la diversité des missions assurées par les étudiants (promenades, informatique, animations)."
      },
      "whyIncorrect": {
        "de": "Frau Lorenz sprach über Zeitaufwand und Verträge, Kim über die konkreten Aufgaben.",
        "ar": "تحدثت مديرة الدار عن الشروط والساعات بينما سردت كيم تفاصيل الأنشطة اليومية.",
        "fr": "C'est l'étudiante qui illustre concrètement le quotidien des différentes interventions."
      }
    },
    "h27": {
      "quote": "Anna Lorenz: Es sind nur ein paar Stunden im Monat, im Durchschnitt acht – es hängt natürlich auch von der Art der Beschäftigung ab – aber in der Regel acht Stunden monatlich.",
      "whyCorrect": {
        "de": "Lösung b (Anna Lorenz) ist richtig: Die Heimleiterin gibt die offizielle Vorgabe von durchschnittlich acht Stunden monatlich an.",
        "ar": "الخيار b (آنا لورنتس) صحيح: تحدد مديرة الدار معدل ساعات العمل التطوعي المطلوبة بثماني ساعات شهرياً.",
        "fr": "L'option b (Anna Lorenz) est correcte : La directrice indique le volume horaire exigé, soit environ huit heures par mois."
      },
      "whyIncorrect": {
        "de": "Der Journalist fragte nach der zeitlichen Belastung, Frau Lorenz nannte die Stundenzahl.",
        "ar": "أجابت السيدة لورنتس على سؤال الصحفي حول حجم الوقت المخصص للمساعدة.",
        "fr": "Mme Lorenz répond à l'interrogation du journaliste concernant la charge de travail."
      }
    },
    "h28": {
      "quote": "Kim Köhler: Inzwischen verstehe ich mich so gut mit Herrn Steinert, dass ich ihn viel öfter besuche als vorgesehen. Überhaupt ist das für mich eine sehr positive Erfahrung.",
      "whyCorrect": {
        "de": "Lösung c (Kim Köhler) ist richtig: Kim schildert begeistert, welch bereichernde und schöne Erfahrung die Begegnung für sie ist.",
        "ar": "الخيار c (كيم كولر) صحيح: تعبر كيم عن سعادتها البالغة بالتجربة الإنسانية الإيجابية والصداقة التي ربطتها بنزلاء الدار.",
        "fr": "L'option c (Kim Köhler) est correcte : Kim souligne combien cette relation intergénérationnelle constitue une magnifique expérience personnelle."
      },
      "whyIncorrect": {
        "de": "Die Leiterin lobt das Konzept, aber Kim spricht aus unmittelbarer persönlicher Freude.",
        "ar": "تنقل كيم مشاعرها المباشرة كطالبة تعيش في الدار وتستمتع بوقتها مع كبار السن.",
        "fr": "Le ressenti positif émane directement du témoignage de la jeune pensionnaire."
      }
    },
    "h29": {
      "quote": "Kim Köhler: Diese Workshops sind sehr hilfreich, ich selbst habe da viel gelernt. Aber zu den wichtigsten Voraussetzungen gehören Toleranz und Geduld. Das muss man mitbringen, wenn man an so eine Aufgabe herangeht.",
      "whyCorrect": {
        "de": "Lösung c (Kim Köhler) ist richtig: Kim hebt hervor, dass Fachwissen/Workshops allein nicht genügen, sondern persönliche Eigenschaften wie Geduld und Toleranz unerlässlich sind.",
        "ar": "الخيار c (كيم كولر) صحيح: تؤكد كيم أن المعلومات النظرية والتدريب ليسا كافيين، بل لا بد من امتلاك الصبر والتسامح الإنساني.",
        "fr": "L'option c (Kim Köhler) est correcte : Kim insiste sur le fait que la formation théorique ne suffit pas sans qualités humaines telles que la patience et la tolérance."
      },
      "whyIncorrect": {
        "de": "Frau Lorenz beschrieb die Themen der Schulung, Kim betonte das Erfordernis innerer Haltung.",
        "ar": "شرحت المديرة محتوى الورش التدريبية بينما بينت كيم ضرورة التحلي بالصبر كشرط أساسي.",
        "fr": "La directrice présentait le contenu des ateliers, mais Kim relève l'importance capitale des vertus morales."
      }
    },
    "h30": {
      "quote": "Journalist: Wir können aber mit einem Wort zusammenfassen, was wir erfahren haben: Die älteren Heimbewohner sind begeistert. Alle, aber wirklich alle, sind von diesem Projekt begeistert.",
      "whyCorrect": {
        "de": "Lösung a (Journalist) ist richtig: Der Journalist fasst seine eigene Umfrage unter den Senioren zusammen und berichtet von deren uneingeschränkter Begeisterung.",
        "ar": "الخيار a (المذيع) صحيح: يختم المذيع اللقاء باستعراض نتائج استطلاع الرأي الذي أجراه مؤكداً حماسة كبار السن وسعادتهم بالعيش مع الشباب.",
        "fr": "L'option a (Journaliste) est correcte : Le journaliste conclut l'émission en synthétisant son micro-trottoir qui témoigne de l'enthousiasme unanime des aînés."
      },
      "whyIncorrect": {
        "de": "Dieses Resümee stammt aus der Schlussmoderation des Journalisten nach seiner Umfrage.",
        "ar": "هذه الخلاصة جاءت في كلمة المذيع الختامية بعد الاستطلاع الإذاعي الخاص.",
        "fr": "C'est l'animateur qui livre le bilan de ses entrevues menées auprès des personnes âgées."
      }
    }
  },
  "translations": {
    "parts": {
      "1": {
        "instructions": {
          "ar": "اقرأ النص والمهام من 1 إلى 6 المتعلقة به. اختر: هل العبارات صحيحة أم خاطئة؟",
          "fr": "Lisez le texte et les questions 1 à 6 correspondantes. Choisissez : les affirmations sont-elles vraies ou fausses ?"
        },
        "articles": [
          {
            "heading": {
              "ar": "رحلتي: تقارير رحلات حول العالم — تقرير رحلة إلى لندن (لليافعين)",
              "fr": "Mon voyage : carnets de voyage du monde entier — Carnet de voyage à Londres (pour ados)"
            },
            "sub": {
              "ar": "فترة الرحلة: أغسطس 2012 | كُتب في: أغسطس 2013 | نُشر في: أغسطس 2013",
              "fr": "Période du voyage : août 2012 | Écrit : août 2013 | Publié : août 2013"
            },
            "body": {
              "ar": [
                "أردت أنا وصديقتاي استكشاف لندن بطريقة تختلف عما هو مذكور في كتيبات السياحة. بدأت مغامرتنا برحلة حافلة في حافلة حمراء ذات طابقين: الخط 15. باستخدام تذكرة اليوم، يمكنك مشاهدة المعالم السياحية بتكلفة تقارب الصفر تقريباً: ميدان ترافالغار، وكاتدرائية القديس بولس، وحتى برج لندن. ولكن ما أثار إعجابنا في البداية أكثر من المعالم كان التدفق الهائل للحافلات وسيارات الأجرة وراكبي الدراجات من حولنا.",
                "نزلنا بالقرب من صالات سوق كوفنت غاردن، وهو مركز تسوق. أرادت صديقتاي التسوق بشدة. كانت هناك بالفعل العديد من التذكارات والقمصان والمجوهرات، لكننا شعرنا بانزعاج شديد من الأسعار. الكثير من التصاميم الطريفة، ولكن دون أي عروض رخيصة. في المقابل، كان هناك الكثير من فناني الشوارع، خاصة الموسيقيين الشباب. استمعنا قليلاً، ثم واصلنا طريقنا، مفضلين الاحتفاظ بمصروفنا بدلاً من تركه في الشارع.",
                "على الضفة الجنوبية لنهر التايمز بالقرب من جسر البرج (تاور بريدج) كانت الأجواء مفعمة بالحيوية: متزلجون وباعة متجولون وممارسو رياضة الجري. لندن تنبض بالحياة! حتى أننا رأينا فصلاً مدرسياً يرتدي الزي التقليدي القديم المعتاد هنا. لا أستطيع حتى تخيل نفسي أتجول بمثل هذا الزي.",
                "زيارة جسر البرج مدفوعة الثمن. في الممر المخصص للمشاة بين البرجين فوق نهر التايمز، بقينا محبوسين خلف الزجاج، وشعرنا بخيبة أمل من ذلك. كما كان معرض الجسر غير مثير للاهتمام بتاتاً. كنا نود زيارة البرج أو متحف الشمع مدام توسو، ولكن بدون حجز مسبق لا جدوى من المحاولة: المكان مزدحم للغاية والتذاكر باهظة.",
                "أما حي نوتينغ هيل فقد كان رائعاً حقاً! يشتهر هذا الحي بسوق الخضار والفواكه ومحلات التحف والمتاجر العصرية. كما أن كل منزل متلاصق تقريباً مطلي بلون مختلف. هنا تمكنا أخيراً من شراء بعض الهدايا التذكارية الشيقة.",
                "بعد تناول وجبة سريعة لتجديد طاقتنا في ماكدونالدز، توجهنا أخيراً إلى هايد بارك؛ جلسنا على كراسي الاسترخاء وراقبنا الفرسان والشباب وهم يلعبون كرة القدم والسناجب الرمادية البنية. كنا مرهقين للغاية.",
                "هناك شيء واحد مؤكد بالنسبة لنا: لندن مدينة رائعة للغاية للمراهقين والشباب، وسنعود إليها بكل تأكيد."
              ],
              "fr": [
                "Mes deux amies et moi voulions découvrir Londres autrement que dans les guides touristiques. Notre aventure a commencé par un trajet en bus rouge à impériale : la ligne 15. Avec un ticket journée, on admire les principaux monuments presque gratuitement : Trafalgar Square, la cathédrale Saint-Paul jusqu'à la Tour de Londres. Mais ce qui nous a d'abord le plus impressionnées, c'était le flot ininterrompu de bus, taxis et cyclistes autour de nous.",
                "Nous sommes descendues près des halles de Covent Garden, qui forment un centre commercial. Mes copines voulaient absolument faire du shopping. Il y avait effectivement beaucoup de souvenirs, t-shirts et bijoux, mais les prix nous ont révoltées : de chouettes créations, mais aucune bonne affaire. En revanche, de nombreux artistes de rue s'y produisaient, surtout de jeunes musiciens. Nous avons écouté un instant avant de poursuivre, préférant garder notre argent de poche.",
                "Sur la rive sud de la Tamise, près de Tower Bridge, l'ambiance était très animée : skateurs, vendeurs ambulants et joggeurs. Londres en direct ! Nous avons même croisé une classe en uniformes traditionnels d'époque. Je ne pourrais jamais m'imaginer habillée ainsi.",
                "La traversée de Tower Bridge est payante. Sur la passerelle entre les deux tours, nous sommes restées enfermées derrière des vitres, ce que nous avons trouvé très décevant. L'exposition consacrée au pont était tout aussi inintéressante. Nous aurions aimé visiter la Tour de Londres ou le musée de cire Madame Tussauds, mais sans réservation, c'était mission impossible : trop de monde et trop cher.",
                "Notting Hill, par contre, était formidable. Ce quartier est réputé pour son marché de fruits et légumes, ses antiquaires et ses boutiques branchées. Presque chaque maison mitoyenne arbore une couleur différente. C'est là que nous avons enfin déniché quelques souvenirs originaux.",
                "Après une halte rapide chez McDonald's, nous nous sommes rendues à Hyde Park. Assises dans des chaises longues, nous avons regardé passer les cavaliers, les ados tapant dans un ballon et les écureuils gris-brun. Nous étions épuisées.",
                "Une chose est certaine : Londres est une ville géniale pour les ados. Nous reviendrons sans hésiter."
              ]
            }
          }
        ],
        "example": {
          "text": {
            "ar": "المراهقات الثلاث قمن بجولة عبر لندن بواسطة الحافلة.",
            "fr": "Les trois adolescentes ont traversé Londres en bus."
          }
        },
        "questions": {
          "1": {
            "text": {
              "ar": "لم تكلف تذكرة اليوم أي نقود.",
              "fr": "Le pass journée n'a rien coûté."
            }
          },
          "2": {
            "text": {
              "ar": "كانت حركة المرور كثيفة للغاية في لندن.",
              "fr": "La circulation était très dense à Londres."
            }
          },
          "3": {
            "text": {
              "ar": "أرادت الفتيات التسوق في كوفنت غاردن ولكن كل شيء كان باهظ الثمن.",
              "fr": "Les adolescentes voulaient faire des emplettes à Covent Garden mais tout était trop cher."
            }
          },
          "4": {
            "text": {
              "ar": "لم تنل زيارة جسر البرج إعجاب الفتيات.",
              "fr": "La visite de Tower Bridge n'a pas plu aux jeunes filles."
            }
          },
          "5": {
            "text": {
              "ar": "قمن بشراء الفواكه في نوتينغ هيل.",
              "fr": "Elles ont acheté des fruits à Notting Hill."
            }
          },
          "6": {
            "text": {
              "ar": "نلن قسطاً من الراحة في هايد بارك.",
              "fr": "Elles se sont reposées dans Hyde Park."
            }
          }
        }
      },
      "2": {
        "instructions": {
          "ar": "اقرأ النصوص الصحفية والمهام من 7 إلى 12 المتعلقة بها. اختر الإجابة الصحيحة a أو b أو c لكل مهمة.",
          "fr": "Lisez les articles de presse et les questions 7 à 12 correspondantes. Choisissez la bonne réponse a, b ou c pour chaque tâche."
        },
        "articles": [
          {
            "heading": {
              "ar": "ليلة المتاحف الطويلة في برلين",
              "fr": "La Longue Nuit des musées à Berlin"
            },
            "body": {
              "ar": [
                "هل ترغب في الاستماع إلى حفل موسيقي كلاسيكي ليلاً داخل قاعات المتحف القديم بجوار المزهريات والكنوز الأثرية؟ هل تود المشاركة في جولة مشي ليلية في الغابة وزيارة متحف الغابة؟ أم تفضل البحث في ساعة متأخرة بمتحف السينما والتلفزيون عن آثار فيلم رومي شنايدر الذي لم يكتمل؟ يمكنك الاستمتاع بكل ذلك هذا العام خلال «ليلة المتاحف الطويلة» في برلين.",
                "أصبحت هذه الفعالية جاذبة وتُقام حالياً في العديد من المدن الألمانية، بعد أن انطلقت لأول مرة عام 1997 في متاحف العاصمة. تفتح العديد من متاحف برلين أبوابها مرتين سنوياً (في يناير وأغسطس) لاستقبال الزوار ليلاً حتى الساعة الثانية صباحاً. وللتنقل بسلاسة بين المتاحف المختلفة، تتوفر خدمة حافلات نقل مكوكية خاصة مشمولة في سعر التذكرة، كما يُسمح باستخدام جميع وسائل النقل العام المعتادة بنفس التذكرة. ويستفيد التلاميذ والطلاب من تذاكر مخفضة، بينما يتمتع الأطفال دون سن 12 عاماً بالدخول مجاناً طوال الليلة الطويلة."
              ],
              "fr": [
                "Aimeriez-vous écouter un concert classique au cœur de l'Altes Museum au milieu des vases antiques ? Une randonnée nocturne dans les bois suivie de la découverte du musée de la forêt éveillerait-elle votre curiosité ? Ou préféreriez-vous enquêter tard le soir au musée du cinéma et de la télévision sur un film inachevé de Romy Schneider ? Tout cela vous est proposé cette année encore à Berlin lors de la « Longue Nuit des musées ».",
                "Cette manifestation désormais déclinée dans de nombreuses villes allemandes est née en 1997 dans les musées de la capitale. Deux fois par an, en janvier et en août, de nombreux établissements ouvrent leurs portes pour une nocturne pouvant durer jusqu'à 2 heures du matin. Pour circuler d'un musée à l'autre, les noctambules bénéficient d'un service de navettes inclus dans le billet, lequel donne également accès à l'ensemble des transports en commun réguliers. Écoliers et étudiants profitent de tarifs réduits tandis que les enfants de moins de 12 ans ont un accès totalement gratuit."
              ]
            }
          }
        ],
        "example": {
          "text": {
            "ar": "في العديد من المدن الألمانية ...",
            "fr": "Dans de nombreuses villes allemandes ..."
          },
          "options": {
            "ar": [
              "تفتح المتاحف أبوابها ليلاً أيضاً.",
              "توجد فعاليات جاذبة شبيهة بما في برلين.",
              "توجد تظاهرة باسم «ليلة المتاحف الطويلة»."
            ],
            "fr": [
              "les musées sont également ouverts la nuit.",
              "il existe des manifestations similaires à celle de Berlin.",
              "il existe une « Longue Nuit des musées »."
            ]
          }
        },
        "questions": {
          "7": {
            "text": {
              "ar": "يدور هذا المقال حول ...",
              "fr": "Dans ce texte, il s'agit du fait que ..."
            },
            "options": {
              "ar": [
                "إمكانية ركوب وسائل النقل مجاناً ليلاً للوصول إلى المتاحف.",
                "أن ساعات الليل تكون طويلة بشكل خاص في يومين من السنة.",
                "أن متاحف برلين كانت صاحبة فكرة مميزة ومبتكرة."
              ],
              "fr": [
                "l'on peut se rendre gratuitement aux musées la nuit.",
                "les nuits sont exceptionnellement longues deux jours par an.",
                "les musées de Berlin ont eu une idée particulièrement originale."
              ]
            }
          },
          "8": {
            "text": {
              "ar": "خلال «ليلة المتاحف الطويلة» ...",
              "fr": "Pendant la « Longue Nuit des musées » ..."
            },
            "options": {
              "ar": [
                "تتوفر خدمة حافلات خاصة لنقل زوار المتاحف.",
                "تكون أسعار تذاكر الدخول رخيصة للغاية للجميع.",
                "يُمنع الأطفال من دخول المتاحف."
              ],
              "fr": [
                "un service de bus spécifique est mis en place pour les visiteurs.",
                "les tarifs d'entrée sont particulièrement bon marché.",
                "les enfants ne sont pas autorisés à entrer dans les musées."
              ]
            }
          },
          "9": {
            "text": {
              "ar": "أحد متاحف برلين ...",
              "fr": "Un musée berlinois ..."
            },
            "options": {
              "ar": [
                "يقدم حفلاً موسيقياً في الهواء الطلق أثناء ليلة المتاحف.",
                "ينظم جولة مشي واستكشاف ليلية خلال الفعالية.",
                "يعرض فيلماً لرومي شنايدر مرة كل ساعة."
              ],
              "fr": [
                "propose un concert en plein air pendant la manifestation.",
                "organise une marche nocturne lors de la Longue Nuit des musées.",
                "diffuse un film de Romy Schneider une fois par heure."
              ]
            }
          }
        },
        "instructions2": {
          "ar": "اقرأ النص الصحفي والمهام من 10 إلى 12 المتعلقة به. اختر الحل الصحيح a أو b أو c.",
          "fr": "Lisez l'article de presse et les questions 10 à 12 correspondantes. Choisissez la bonne réponse a, b ou c."
        },
        "articles2": [
          {
            "heading": {
              "ar": "باربي أتمت عامها الخمسين",
              "fr": "Barbie a déjà plus de 50 ans"
            },
            "body": {
              "ar": [
                "من كان يصدق ذلك؟ ملامحها لا تكشف سنها، فهي في النهاية مصنوعة من البلاستيك. ورغم أنها تقلدت وظائف لا حصر لها كالمضيفة الجوية أو المرشحة للرئاسة، فإنها لا تزال تحتفظ بنضارة يومها الأول. كان ذلك في عام 1959 في معرض الألعاب بمدينة نيويورك الأمريكية، حيث قدمها مؤسسا شركة الألعاب ماتيل. في ذلك الحين لم يكن رفيقها كين حاضراً بعد، ولم يكن أحد يتوقع أن تصبح باربي الدمية الأكثر مبيعاً في تاريخ العالم. ولم تكتفِ بتحقيق هذا الإنجاز، بل أصبحت مرادفاً مطلقاً لدمى الأزياء والموضة.",
                "ما سر هذه الشعبية الجارفة؟ يعود السبب بالتأكيد إلى إمكانية إلباسها دوماً أحدث الأزياء العصرية ومواكبتها الدائمة لتطورات العصر دون أن تفقد رونقها. وإلى جانب ملابسها، يمكن شراء سيارات ومنازل مجهزة لها لمحاكاة حياة خيالية قلما تحظى بها فتاة في الواقع. وتتحول أحياناً إلى نجمة مشهورة، كإصدار دمية مصممة على هيئة المغنية مادونا. ومع ذلك، لم تكن باربي محبوبة لدى الجميع؛ فالعديد من النساء ينتقدن مقاييس قوامها التي تكاد تنعدم في الواقع البشري."
              ],
              "fr": [
                "Qui l'eût cru ? Cela ne se voit pas, mais elle est faite de plastique. Bien qu'elle ait exercé une multitude de métiers, d'hôtesse de l'air à candidate à l'élection présidentielle, elle paraît toujours aussi jeune qu'au premier jour. C'était en 1959 au salon du jouet de New York, lorsque les deux fondateurs de l'entreprise Mattel l'ont dévoilée. Ken, son ancien compagnon, n'était d'ailleurs pas encore de la partie. À l'époque, personne n'aurait imaginé que Barbie deviendrait la poupée la plus vendue au monde et l'incarnation même du mannequin miniature.",
                "Comment expliquer un tel succès ? L'une des raisons tient assurément à sa garde-robe toujours renouvelée et moderne : elle n'a pour ainsi dire jamais été démodée. Outre ses tenues, on peut acquérir des voitures et des villas pour rejouer un mode de vie dont peu de petites filles feront l'expérience. Elle s'érige parfois en star, avec par exemple un modèle créé à l'effigie de Madonna. Mais Barbie n'a pas fait que des adeptes : de nombreuses femmes critiquent sa silhouette irréaliste à taille humaine."
              ]
            }
          }
        ],
        "questions2": {
          "10": {
            "text": {
              "ar": "يدور المقال حول أن ...",
              "fr": "Dans ce texte, on explique que ..."
            },
            "options": {
              "ar": [
                "باربي حققت مبيعات قياسية مذهلة في العالم.",
                "باربي اختراع تكنولوجي رائع.",
                "باربي أصبحت متقدمة في العمر وعفا عليها الزمن."
              ],
              "fr": [
                "Barbie est un immense succès commercial.",
                "Barbie est une formidable invention.",
                "Barbie est devenue trop vieille."
              ]
            }
          },
          "11": {
            "text": {
              "ar": "ترتدي باربي ...",
              "fr": "Barbie porte ..."
            },
            "options": {
              "ar": [
                "أزياء مستوحاة في الغالب من مادونا.",
                "أحدث خطوط الموضة والأناقة دائماً.",
                "ملابس تتناسب ألوانها مع سيارتها الخاصة."
              ],
              "fr": [
                "la plupart du temps des robes de Madonna.",
                "toujours des vêtements à la pointe de la mode.",
                "des tenues coordonnées avec sa voiture."
              ]
            }
          },
          "12": {
            "text": {
              "ar": "في عام 1959 ...",
              "fr": "En 1959 ..."
            },
            "options": {
              "ar": [
                "طُرح صديقها كين في الأسواق.",
                "حققت شركة ماتيل نجاحاً ساحقاً فورياً في معرض الألعاب.",
                "ظهرت أول دمية باربي في التاريخ."
              ],
              "fr": [
                "l'ami de Barbie, Ken, est apparu sur le marché.",
                "l'entreprise Mattel a rencontré un triomphe immédiat au salon du jouet.",
                "la toute première poupée Barbie a vu le jour."
              ]
            }
          }
        }
      },
      "3": {
        "instructions": {
          "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j. اختر الإعلان المناسب لكل موقف (استخدم كل إعلان مرة واحدة فقط). إذا لم تجد إعلاناً مناسباً، اختر 0.",
          "fr": "Lisez les situations 13 à 19 et les annonces a à j. Choisissez l'annonce correspondante pour chaque situation (une seule utilisation par annonce). S'il n'y a pas d'annonce, choisissez 0."
        },
        "ads": {
          "a": {
            "ar": "من تصفية منزل: أشياء مجانية (أوانٍ ومائدة وكتب ومفارش سرير)، السبت 2 مايو 10–13، هاتف 017112147300.",
            "fr": "Débarras de maison : dons gratuits (vaisselle, table, livres, linge de lit), samedi 2 mai 10-13h, tél 017112147300."
          },
          "A": {
            "ar": "من تصفية منزل: أشياء مجانية (أوانٍ ومائدة وكتب ومفارش سرير)، السبت 2 مايو 10–13، هاتف 017112147300.",
            "fr": "Débarras de maison : dons gratuits (vaisselle, table, livres, linge de lit), samedi 2 mai 10-13h, tél 017112147300."
          },
          "b": {
            "ar": "أغراض بروكينت: ساعة قديمة، مرآة خشبية، طاولة شيبنديل، مقاعد، مصابيح أرضية، هاتف 01371-174653.",
            "fr": "Articles de brocante : vieille horloge, miroir en bois, table Chippendale, chaises, lampadaires, tél 01371-174653."
          },
          "B": {
            "ar": "أغراض بروكينت: ساعة قديمة، مرآة خشبية، طاولة شيبنديل، مقاعد، مصابيح أرضية، هاتف 01371-174653.",
            "fr": "Articles de brocante : vieille horloge, miroir en bois, table Chippendale, chaises, lampadaires, tél 01371-174653."
          },
          "c": {
            "ar": "شخص يشتري ألعاباً قديمة من عام 1800 إلى 1960 (سيارات صفيح، قطارات، دمى شيلدكروت)، هاتف 06317-16363.",
            "fr": "Acheteur recherche vieux jouets de 1800 à 1960 (petites voitures en tôle, trains, poupées Käthe Kruse/Schildkröt), tél 06317-16363."
          },
          "C": {
            "ar": "شخص يشتري ألعاباً قديمة من عام 1800 إلى 1960 (سيارات صفيح، قطارات، دمى شيلدكروت)، هاتف 06317-16363.",
            "fr": "Acheteur recherche vieux jouets de 1800 à 1960 (petites voitures en tôle, trains, poupées Käthe Kruse/Schildkröt), tél 06317-16363."
          },
          "d": {
            "ar": "سوق ملابس شونيبرغ: خيام تجول مفتوحة السبت والأحد، وأكشاك شواء ومشروبات ساخنة، من 8 إلى 16.",
            "fr": "Marché aux vêtements de Schöneberg : allées couvertes pour se promener, buvette et saucisses chaudes, sam. & dim. 8h-16h."
          },
          "D": {
            "ar": "سوق ملابس شونيبرغ: خيام تجول مفتوحة السبت والأحد، وأكشاك شواء ومشروبات ساخنة، من 8 إلى 16.",
            "fr": "Marché aux vêtements de Schöneberg : allées couvertes pour se promener, buvette et saucisses chaudes, sam. & dim. 8h-16h."
          },
          "e": {
            "ar": "سوق أسطوانات فينيل هاي فاي: كميات هائلة ومصنفة، البيع السبت 10–16 في المدرسة القديمة بمولهايم.",
            "fr": "Brocante de disques vinyles Hi-Fi : vaste choix bien trié, vente samedi 10-16h à la vieille école de Möllheim."
          },
          "E": {
            "ar": "سوق أسطوانات فينيل هاي فاي: كميات هائلة ومصنفة، البيع السبت 10–16 في المدرسة القديمة بمولهايم.",
            "fr": "Brocante de disques vinyles Hi-Fi : vaste choix bien trié, vente samedi 10-16h à la vieille école de Möllheim."
          },
          "f": {
            "ar": "سوق الحواسيب المستعملة: السبت 19 فبراير في فرايبورغ، عتاد وبرمجيات وألعاب ومنصات، هاتف 0762-141539.",
            "fr": "Brocante informatique : samedi 19 février à Fribourg, matériel, logiciels, jeux et consoles, tél 0762-141539."
          },
          "F": {
            "ar": "سوق الحواسيب المستعملة: السبت 19 فبراير في فرايبورغ، عتاد وبرمجيات وألعاب ومنصات، هاتف 0762-141539.",
            "fr": "Brocante informatique : samedi 19 février à Fribourg, matériel, logiciels, jeux et consoles, tél 0762-141539."
          },
          "g": {
            "ar": "سوق السلع المستعملة مع قسم دراجات هوائية ضخم، الأحد 20 مارس في فيسنهايم، هاتف 0285/744243.",
            "fr": "Bourse d'occasion avec grand marché de bicyclettes, dimanche 20 mars à Fessenheim, tél 0285/744243."
          },
          "G": {
            "ar": "سوق السلع المستعملة مع قسم دراجات هوائية ضخم، الأحد 20 مارس في فيسنهايم، هاتف 0285/744243.",
            "fr": "Bourse d'occasion avec grand marché de bicyclettes, dimanche 20 mars à Fessenheim, tél 0285/744243."
          },
          "h": {
            "ar": "جهاز ستيريو مع مجموعة أسطوانات CD موسيقية متنوعة (خاصة من الستينيات إلى الثمانينيات)، هاتف 012501545155.",
            "fr": "Chaîne stéréo complète avec nombreux CD (notamment années 60 à 80), très bon état, tél 012501545155."
          },
          "H": {
            "ar": "جهاز ستيريو مع مجموعة أسطوانات CD موسيقية متنوعة (خاصة من الستينيات إلى الثمانينيات)، هاتف 012501545155.",
            "fr": "Chaîne stéréo complète avec nombreux CD (notamment années 60 à 80), très bon état, tél 012501545155."
          },
          "i": {
            "ar": "عربة أطفال تيوتونيا ألمنيوم مع حقيبة حمل، بحالة ممتازة وبسعر مخفض، هاتف 07633/218075.",
            "fr": "Poussette bébé Teutonia Team Alu avec nacelle, excellent état, beige et à carreaux, tél 07633/218075."
          },
          "I": {
            "ar": "عربة أطفال تيوتونيا ألمنيوم مع حقيبة حمل، بحالة ممتازة وبسعر مخفض، هاتف 07633/218075.",
            "fr": "Poussette bébé Teutonia Team Alu avec nacelle, excellent état, beige et à carreaux, tél 07633/218075."
          },
          "j": {
            "ar": "سوق مستلزمات الأطفال في أليرشتيت: يقام 6 نوفمبر، التسجيل للبائعين متاح ابتداءً من 4 أكتوبر، هاتف 04616/315.",
            "fr": "Bourse de puériculture à Ahlerstedt : 6 novembre, inscriptions exposants dès le 4 octobre, tél 04616/315."
          },
          "J": {
            "ar": "سوق مستلزمات الأطفال في أليرشتيت: يقام 6 نوفمبر، التسجيل للبائعين متاح ابتداءً من 4 أكتوبر، هاتف 04616/315.",
            "fr": "Bourse de puériculture à Ahlerstedt : 6 novembre, inscriptions exposants dès le 4 octobre, tél 04616/315."
          }
        },
        "questions": {
          "13": {
            "ar": "ليا ويانا تجمعان الدمى القديمة منذ سنوات وتبحثان عن دمى لشرائها.",
            "fr": "Lea et Jana collectionnent depuis des années de vieilles poupées et cherchent à en acheter.",
            "text": {
              "ar": "ليا ويانا تجمعان الدمى القديمة منذ سنوات وتبحثان عن دمى لشرائها.",
              "fr": "Lea et Jana collectionnent depuis des années de vieilles poupées et cherchent à en acheter."
            }
          },
          "14": {
            "ar": "مونيكا تحب القراءة ولا تمانع في قراءة الكتب المستعملة بدلاً من الإصدارات الجديدة.",
            "fr": "Monika adore lire et n'exige pas que ce soient des nouveautés.",
            "text": {
              "ar": "مونيكا تحب القراءة ولا تمانع في قراءة الكتب المستعملة بدلاً من الإصدارات الجديدة.",
              "fr": "Monika adore lire et n'exige pas que ce soient des nouveautés."
            }
          },
          "15": {
            "ar": "يقضي دينيس معظم فراغه على اللابتوب، ويبحث أصدقاؤه عن هدية رقمية أو إلكترونية له.",
            "fr": "Dennis passe la majeure partie de son temps libre sur son ordinateur portable. Ses amis cherchent un cadeau pour lui.",
            "text": {
              "ar": "يقضي دينيس معظم فراغه على اللابتوب، ويبحث أصدقاؤه عن هدية رقمية أو إلكترونية له.",
              "fr": "Dennis passe la majeure partie de son temps libre sur son ordinateur portable. Ses amis cherchent un cadeau pour lui."
            }
          },
          "16": {
            "ar": "رزق أندي ولوسي بمولود صبي ويحتاجان بشكل عاجل إلى عربة أطفال.",
            "fr": "Andy et Luzie viennent d'avoir un petit garçon et recherchent d'urgence une poussette.",
            "text": {
              "ar": "رزق أندي ولوسي بمولود صبي ويحتاجان بشكل عاجل إلى عربة أطفال.",
              "fr": "Andy et Luzie viennent d'avoir un petit garçon et recherchent d'urgence une poussette."
            }
          },
          "17": {
            "ar": "يعشق ساشا موسيقى الديسكو من السبعينيات ويسعد دائماً بالحصول على أقراص CD لتلك الأغاني.",
            "fr": "Sascha adore la musique disco des années 70 et apprécie toujours de recevoir des CD de ce genre.",
            "text": {
              "ar": "يعشق ساشا موسيقى الديسكو من السبعينيات ويسعد دائماً بالحصول على أقراص CD لتلك الأغاني.",
              "fr": "Sascha adore la musique disco des années 70 et apprécie toujours de recevoir des CD de ce genre."
            }
          },
          "18": {
            "ar": "تريد يوتا التقليل من قيادة السيارة وتبحث عن دراجة هوائية مستعملة بحالة جيدة.",
            "fr": "Jutta souhaite limiter l'usage de sa voiture et cherche un vélo d'occasion en bon état.",
            "text": {
              "ar": "تريد يوتا التقليل من قيادة السيارة وتبحث عن دراجة هوائية مستعملة بحالة جيدة.",
              "fr": "Jutta souhaite limiter l'usage de sa voiture et cherche un vélo d'occasion en bon état."
            }
          },
          "19": {
            "ar": "يحب شتيفان قضاء أيام الأحد في أسواق البرغوث للتجول والتسوق وتناول وجبة خفيفة.",
            "fr": "Stefan aime passer ses dimanches aux marchés aux puces pour chiner à bas prix, se promener et manger un morceau.",
            "text": {
              "ar": "يحب شتيفان قضاء أيام الأحد في أسواق البرغوث للتجول والتسوق وتناول وجبة خفيفة.",
              "fr": "Stefan aime passer ses dimanches aux marchés aux puces pour chiner à bas prix, se promener et manger un morceau."
            }
          }
        }
      },
      "4": {
        "instructions": {
          "ar": "اقرأ النصوص من 20 إلى 26. اختر: هل يؤيد الشخص التربية ثنائية اللغة للأطفال؟ (نعم / لا)",
          "fr": "Lisez les avis 20 à 26. Choisissez : la personne est-elle favorable à l'éducation bilingue des enfants ? (Oui / Non)"
        },
        "topic": {
          "ar": "في إحدى المجلات تقرأ تعليقات وآراء حول مقال يتناول الأطفال ثنائيي اللغة والتربية متعددة اللغات.",
          "fr": "Dans un magazine, vous lisez des commentaires suscités par un article sur les enfants bilingues et l'éducation multilingue."
        },
        "example": {
          "who": {
            "ar": "يانا، 35 عاماً، روزنهايم",
            "fr": "Jana, 35 ans, Rosenheim"
          },
          "text": {
            "ar": "معرفة لغتين ميزة بكل تأكيد، لكنها تشكل إرباكاً شديداً للأطفال. معظم الأطفال ثنائيي اللغة الذين أعرفهم لا يتحدثون أي لغة منهما بشكل متقن حقاً. لذلك لا أعتبرها ميزة إيجابية.",
            "fr": "Maîtriser deux langues est certes un avantage, mais c'est très déroutant pour les enfants. La plupart de ceux que je connais ne parlent correctement aucune des deux langues. Je ne considère donc pas cela comme un atout."
          }
        },
        "letters": {
          "20": {
            "who": "كلاوس، 48 عاماً، بازل",
            "text": {
              "ar": "إذا كانت معلوماتي دقيقة، فإن العلم يثبت أن تعلم اللغات في سن مبكرة يدرب الدماغ على التنقل المستمر بين لغتين. فضلاً عن ذلك يكتسب المرء ثقافة أخرى وينفتح على عالم ثانٍ. هذا لا يمكن إلا أن ينفع الإنسان ويصقل شخصيته.",
              "fr": "D'après les scientifiques, l'apprentissage précoce des langues entraîne le cerveau à basculer constamment d'un idiome à l'autre. De plus, une langue ouvre sur une culture différente et un autre monde. Cela ne peut être que bénéfique pour l'épanouissement humain."
            }
          },
          "21": {
            "who": "باتريتسيا، 17 عاماً، أولتسن",
            "text": {
              "ar": "أعرف فتاة تتحدث لغتين وتدرس في فصلي، حيث تتحدث الألمانية والإسبانية. لا يمكنني الحكم على مستوى إسبانيتها، لكنها لا تواجه أي صعوبة في الألمانية. إنها حقاً فرصة ممتازة لإتقان لغة أخرى!",
              "fr": "Je connais une fille bilingue dans ma classe : elle parle allemand et espagnol. Si je ne peux juger de son espagnol, elle n'a aucun problème en allemand. C'est une réelle chance de maîtriser une langue supplémentaire !"
            }
          },
          "22": {
            "who": "كيفن، 23 عاماً، فيينا",
            "text": {
              "ar": "نسمع هنا في النمسا لغات عديدة وهذا يزعجني في الواقع. يجب على المقيمين هنا التحدث بالألمانية جميعاً. إن لم تكن مترجماً محترفاً فلن تحتاج للغات أخرى. أجد هذا الأمر غير عملي على الإطلاق.",
              "fr": "En Autriche, on entend souvent parler plein de langues différentes, ce qui m'agace. Tous les résidents devraient s'exprimer en allemand. À moins d'être traducteur, maîtriser une autre langue est inutile et peu pratique."
            }
          },
          "23": {
            "who": "آنيت، 38 عاماً، زيورخ",
            "text": {
              "ar": "هذا أمر يستحق الترحيب بكل تأكيد. لن يتعلم الإنسان لغة بسهولة مثل مرحلة الطفولة، خاصة النطق واللهجة السليمة. لذلك يبدأ تدريس اللغات مبكراً في المدارس. أرى أنه ينبغي لكل طفل أن ينشأ على لغتين على الأقل.",
              "fr": "C'est une excellente initiative. On n'apprend jamais une langue aussi facilement que dans l'enfance, surtout la prononciation et l'accent. C'est pourquoi l'enseignement débute si tôt à l'école. Tous les enfants devraient grandir avec au moins deux langues."
            }
          },
          "24": {
            "who": "لوسي، 16 عاماً، كولونيا",
            "text": {
              "ar": "اللغات الأجنبية هي أصعب المواد الدراسية بالنسبة لي وأحصل فيها على درجات متدنية رغم مجهودي. وإذا تحدث الأهل لغات متعددة في المنزل فإن الأمور تزداد تعقيداً وجملة بالألمانية وأخرى بغيرها ستؤدي حتماً إلى سوء فهم.",
              "fr": "Les langues vivantes sont mes bêtes noires au lycée ; j'ai de mauvaises notes malgré mes efforts. Si l'on parle plusieurs langues à la maison, cela complique tout : une phrase en allemand, une autre dans une autre langue, c'est la porte ouverte aux malentendus."
            }
          },
          "25": {
            "who": "هربرت، 62 عاماً، غراتس",
            "text": {
              "ar": "هذه القضية مبالغ فيها؛ فالشباب يمكنهم تعلم اللغات في أي مرحلة عمرية وحفظها بسهولة. الأهم في البداية هو تأسيس قاعدة متينة في اللغة الأم وإتقانها وحدها، وبعد ذلك يمكن تعلم لغات أخرى.",
              "fr": "Cette question est surévaluée. Quand on est jeune, on a la mémoire fraîche et l'on peut apprendre une langue à tout moment. Il faut d'abord acquérir de solides bases dans sa langue maternelle avant d'envisager d'en apprendre d'autres plus tard."
            }
          },
          "26": {
            "who": "ماريا، 22 عاماً، بوتسدام",
            "text": {
              "ar": "الطفل الذي ينحدر والداه من بلدين مختلفين ينبغي أن يتمكن من التحدث مع أقاربه من كلا الطرفين. كيف سيتواصل إن تحدث لغة واحدة فقط؟ الاكتفاء بلغة واحدة سيشكل ظلماً للطفل ويضيع جزءاً أصيلاً من هويته.",
              "fr": "Un enfant issu de parents de deux pays différents doit pouvoir échanger avec ses grands-parents des deux côtés. Comment ferait-il s'il n'en parle qu'une ? Se limiter à une seule langue serait un désavantage et lui ferait perdre une partie de son identité."
            }
          }
        },
        "questions": {
          "20": {
            "text": {
              "ar": "كلاوس، 48 عاماً، بازل",
              "fr": "Klaus, 48 ans, Bâle"
            }
          },
          "21": {
            "text": {
              "ar": "باتريتسيا، 17 عاماً، أولتسن",
              "fr": "Patrizia, 17 ans, Uelzen"
            }
          },
          "22": {
            "text": {
              "ar": "كيفن، 23 عاماً، فيينا",
              "fr": "Kevin, 23 ans, Vienne"
            }
          },
          "23": {
            "text": {
              "ar": "آنيت، 38 عاماً، زيورخ",
              "fr": "Annett, 38 ans, Zurich"
            }
          },
          "24": {
            "text": {
              "ar": "لوسي، 16 عاماً، كولونيا",
              "fr": "Lucie, 16 ans, Cologne"
            }
          },
          "25": {
            "text": {
              "ar": "هربرت، 62 عاماً، غراتس",
              "fr": "Herbert, 62 ans, Graz"
            }
          },
          "26": {
            "text": {
              "ar": "ماريا، 22 عاماً، بوتسدام",
              "fr": "Maria, 22 ans, Potsdam"
            }
          }
        }
      },
      "5": {
        "instructions": {
          "ar": "اقرأ المهام من 27 إلى 30 والنص المرفق. اختر الحل الصحيح a أو b أو c لكل مهمة.",
          "fr": "Lisez les questions 27 à 30 et le règlement. Choisissez la bonne réponse a, b ou c pour chaque tâche."
        },
        "articles": [
          {
            "heading": {
              "ar": "اللائحة الداخلية لبيوت الشباب في النمسا",
              "fr": "Règlement intérieur des auberges de jeunesse en Autriche"
            },
            "sub": {
              "ar": "ترغب في المبيت ببيت للشباب في بورغنلاند وتطلع على لائحة بيوت الشباب في النمسا.",
              "fr": "Vous souhaitez séjourner dans une auberge de jeunesse au Burgenland et consultez le règlement intérieur."
            },
            "body": {
              "ar": [
                "<strong>الوصول:</strong><br>إذا كنت مسجلاً، يمكنك تنسيق موعد وصولك مع إدارة بيت الشباب. الأماكن المحجوزة تُحفظ حتى الساعة 18:00، وبعد ذلك قد تُمنح لضيوف آخرين.<br>إذا لم تكن مسجلاً، يمكنك الاستفسار هاتفياً أو مباشرة في بيت الشباب لمعرفة ما إذا كانت هناك أسرّة شاغرة.<br>للمبيت، يشترط أن تكون عضواً في جمعية بيوت الشباب النمساوية أو أي جمعية وطنية أخرى. يتعين على الضيوف الأجانب غير الحاملين لبطاقة عضوية شراء «بطاقة ضيف دولية».",
                "<strong>الإقامة:</strong><br>تتم الإقامة في غرف مشتركة مفصولة حسب الجنس عموماً. يمكن للعائلات الإقامة معاً في غرفة واحدة بعد التسجيل في حال توفرها.<br>نرجو منكم المساعدة أثناء إقامتكم، كالحفاظ على ترتيب المرافق والغرف والأدوات والمساعدة في خدمة المائدة.<br>تلتزم بيوت الشباب بحماية البيئة؛ لذا نرجو منكم فرز النفايات أو تجنبها والاقتصاد في الطاقة والماء.<br>يُمنع منعاً باتاً إعداد أو تناول الطعام في غرف النوم، كما يُحظر استخدام الأجهزة الكهربائية لإعداد الأطعمة والمشروبات الساخنة.<br>التدخين محظور تماماً في بيت الشباب. كما يُمنع إدخال واستهلاك المشروبات الكحولية في بيت الشباب ومرافقه. يحق طرد النزلاء الواقعين تحت تأثير الكحول.<br>يُحظر اصطحاب الحيوانات الأليفة بشكل عام.<br>تفتح بيوت الشباب أبوابها حتى الساعة 22:00 عادةً. تبدأ فترة الهدوء الليلي من الساعة 22:00 وتنتهي في الساعة 7:00 صباحاً.",
                "<strong>المغادرة:</strong><br>يجب إخلاء غرف النوم بحلول الساعة 10:00 صباحاً. يمكن استثناء حالات معينة بعد التنسيق مع إدارة بيت الشباب."
              ],
              "fr": [
                "<strong>Arrivée :</strong><br>Si vous êtes inscrit, vous pouvez convenir de votre heure d'arrivée avec la direction. Les places réservées sont conservées jusqu'à 18h, après quoi elles peuvent être réattribuées.<br>Sans réservation préalable, vous pouvez vérifier par téléphone ou sur place s'il reste des places libres.<br>Pour séjourner en auberge de jeunesse, il faut être membre de l'association nationale ou internationale. Les visiteurs étrangers sans carte d'adhérent doivent acquérir une « carte internationale d'hôte ».",
                "<strong>Séjour :</strong><br>L'hébergement a lieu en dortoirs séparés selon le sexe. Les familles peuvent être logées ensemble après inscription, selon les disponibilités.<br>Nous sollicitons votre coopération : maintenir en ordre les chambres et espaces communs et participer au débarrassage des tables.<br>Les auberges s'engagent pour la protection de l'environnement : merci de trier vos déchets et d'économiser l'eau et l'énergie.<br>Il est interdit de préparer ou de consommer des repas dans les dortoirs. L'usage d'appareils de cuisson électrique est prohibé.<br>Il est strictement interdit de fumer. La consommation d'alcool apporté est bannie dans l'enceinte de l'établissement.<br>Les animaux ne sont pas acceptés.<br>Les auberges ferment généralement à 22h. Le repos nocturne s'étend de 22h à 7h.",
                "<strong>Départ :</strong><br>Les dortoirs doivent être libérés au plus tard à 10h. Des dérogations sont envisageables sur accord de la direction."
              ]
            }
          }
        ],
        "questions": {
          "27": {
            "text": {
              "ar": "في بيوت الشباب النمساوية ...",
              "fr": "Dans les auberges de jeunesse ..."
            },
            "options": {
              "ar": [
                "لا توجد غرف فردية (الإقامة في غرف مشتركة).",
                "تبيت العائلات دائماً في غرفة مستقلة دون استثناء.",
                "يُمنع منعاً باتاً ترك أي نفايات داخل المبنى."
              ],
              "fr": [
                "il n'y a pas de chambres individuelles.",
                "les familles logent obligatoirement ensemble.",
                "il est interdit de laisser des détritus."
              ]
            }
          },
          "28": {
            "text": {
              "ar": "إذا حجز النزيل مكاناً في بيت الشباب مسبقاً، فإنه ...",
              "fr": "Si l'on a réservé sa place à l'auberge, ..."
            },
            "options": {
              "ar": [
                "يحصل تلقائياً على بطاقة عضوية مجانية.",
                "يمكنه الحضور في أي وقت يشاء خلال الليل.",
                "يتعين عليه الوصول إلى مقر بيت الشباب قبل الساعة 18:00."
              ],
              "fr": [
                "on reçoit automatiquement une carte de membre.",
                "on peut arriver à l'heure que l'on désire.",
                "on doit être arrivé à l'auberge avant 18 heures."
              ]
            }
          },
          "29": {
            "text": {
              "ar": "يتعين على النزلاء والضيوف ...",
              "fr": "Les résidents sont invités à ..."
            },
            "options": {
              "ar": [
                "ترتيب غرفهم ومرافقهم والحفاظ على نظافتها.",
                "عدم النوم داخل مبنى بيت الشباب خلال ساعات النهار.",
                "مغادرة غرف النوم عند الساعة السابعة صباحاً في يوم السفر."
              ],
              "fr": [
                "ranger leurs chambres et maintenir l'ordre.",
                "ne pas dormir dans l'auberge durant la journée.",
                "quitter leur chambre dès 7 heures le jour du départ."
              ]
            }
          },
          "30": {
            "text": {
              "ar": "في غرف النوم الخاصة ببيت الشباب ...",
              "fr": "Dans les dortoirs et chambres à coucher, ..."
            },
            "options": {
              "ar": [
                "تُحظر جميع أنواع الأجهزة الكهربائية بما فيها الهواتف.",
                "التدخين ممنوع منعاً باتاً.",
                "يُسمح بتناول الوجبات الخفيفة والحلويات."
              ],
              "fr": [
                "tous les appareils électriques sont formellement bannis.",
                "il n'est pas autorisé de fumer.",
                "il est permis de manger."
              ]
            }
          }
        }
      },
      "6": {
        "instructions": {
          "ar": "قسم الاستماع: 4 أجزاء، 30 مهمة. انقر على زر التشغيل لبدء الاستماع.",
          "fr": "Module Compréhension orale : 4 parties, 30 questions. Cliquez sur lecture pour démarrer l'enregistrement."
        },
        "teile": {
          "1": {
            "title": {
              "ar": "الجزء 1: إعلانات وبيانات قصيرة",
              "fr": "Partie 1 : Annonces courtes et messages"
            },
            "desc": {
              "ar": "تستمع إلى خمسة نصوص قصيرة، كل نص مرتين. اختر الحل المناسب لكل مهمة.",
              "fr": "Vous entendez cinq messages courts deux fois. Choisissez la bonne réponse pour chaque tâche."
            },
            "context": {
              "ar": "إعلانات في المطار ومحطات القطار والإذاعة.",
              "fr": "Annonces en gare, à l'aéroport et à la radio."
            }
          },
          "2": {
            "title": {
              "ar": "الجزء 2: جولة إرشادية في استاد برغيزل",
              "fr": "Partie 2 : Visite guidée du stade Bergisel"
            },
            "desc": {
              "ar": "تشارك في جولة سياحية باستاد برغيزل بالقرب من إنسبروك. تستمع إلى النص مرة واحدة. اختر الإجابة a أو b أو c.",
              "fr": "Vous participez à une visite guidée du stade Bergisel près d'Innsbruck. Vous écoutez le texte une seule fois. Choisissez a, b ou c."
            },
            "context": {
              "ar": "جولة إرشادية في مرافق استاد برغيزل الأولمبي.",
              "fr": "Visite commentée du stade olympique du Bergisel."
            }
          },
          "3": {
            "title": {
              "ar": "الجزء 3: حوار في محطة الحافلات حول دروس التقوية",
              "fr": "Partie 3 : Discussion à l'arrêt de bus sur les difficultés scolaires"
            },
            "desc": {
              "ar": "تستمع إلى حوار بين شابين في محطة حافلات قرب لوسيرن. تستمع إلى الحوار مرة واحدة. هل العبارات صحيحة أم خاطئة؟",
              "fr": "Vous entendez deux adolescents discuter à un arrêt de bus près de Lucerne. Vous écoutez une seule fois. Vrai ou Faux ?"
            },
            "context": {
              "ar": "محادثة عفوية في موقف الحافلات بين صديقين.",
              "fr": "Conversation amicale à l'arrêt de bus."
            }
          },
          "4": {
            "title": {
              "ar": "الجزء 4: حلقة نقاش إذاعية حول سكن الأجيال المشترك",
              "fr": "Partie 4 : Débat radiophonique sur la colocation intergénérationnelle"
            },
            "desc": {
              "ar": "حوار بين صحفي ومديرة دار المسنين (آنا لورنتس) وطالبة جامعية (كيم كولر). تستمع إلى النقاش مرتين. حدد من قال ماذا.",
              "fr": "Un journaliste débat avec Anna Lorenz (directrice d'EHPAD) et Kim Köhler (étudiante). Vous écoutez deux fois. Qui dit quoi ?"
            },
            "context": {
              "ar": "برنامج حواري إذاعي حول مشروع السكن المشترك بين الطلاب والمسنين.",
              "fr": "Émission radio consacrée à la cohabitation solidaire entre jeunes et personnes âgées."
            }
          }
        },
        "questions": {
          "h1": {
            "text": {
              "ar": "تستمع إلى معلومات خاصة بمواعيد إقلاع الطائرات.",
              "fr": "Vous entendez des informations concernant les heures de départ des vols."
            }
          },
          "h2": {
            "text": {
              "ar": "طائرة لندن ...",
              "fr": "L'avion en provenance de Londres ..."
            },
            "options": {
              "ar": [
                "تقلع في وقت متأخر.",
                "تصل مبكرة عن موعدها.",
                "تصل متأخرة عن موعدها المحدد."
              ],
              "fr": [
                "décolle avec du retard.",
                "atterrit en avance.",
                "arrive plus tard que prévu."
              ]
            }
          },
          "h3": {
            "text": {
              "ar": "تستمع إلى نصائح وإرشادات طبية لصحتك.",
              "fr": "Vous écoutez des conseils pour votre santé."
            }
          },
          "h4": {
            "text": {
              "ar": "من يزور عيادة الطبيب بشكل أكثر تكراراً؟",
              "fr": "Qui consulte le plus fréquemment un médecin ?"
            },
            "options": {
              "ar": [
                "الألمان.",
                "اليابانيون.",
                "المجريون."
              ],
              "fr": [
                "Les Allemands.",
                "Les Japonais.",
                "Les Hongrois."
              ]
            }
          },
          "h5": {
            "text": {
              "ar": "تستمع إلى توصيات واقتراحات للأفلام السينمائية.",
              "fr": "Vous écoutez des conseils et sorties cinéma."
            }
          },
          "h6": {
            "text": {
              "ar": "يُعرض الفيلم يوم الجمعة ...",
              "fr": "Le vendredi, le film est projeté ..."
            },
            "options": {
              "ar": [
                "مرة واحدة فقط.",
                "مرتين.",
                "ثلاث مرات."
              ],
              "fr": [
                "une fois.",
                "deux fois.",
                "trois fois."
              ]
            }
          },
          "h7": {
            "text": {
              "ar": "عيادة الطبيب مغلقة في الوقت الحالي.",
              "fr": "Le cabinet n'est pas ouvert actuellement."
            }
          },
          "h8": {
            "text": {
              "ar": "متى يمكن زيارة عيادة الدكتور مانهايم؟",
              "fr": "Quand la consultation chez le Dr Mannheim est-elle possible ?"
            },
            "options": {
              "ar": [
                "بعد حجز موعد هاتفياً مسبقاً.",
                "خلال ساعات الصباح الباكر.",
                "في يومي الجمعة والسبت."
              ],
              "fr": [
                "Sur rendez-vous préalable par téléphone.",
                "En matinée.",
                "Le vendredi et le samedi."
              ]
            }
          },
          "h9": {
            "text": {
              "ar": "تستمع إلى إعلان ترويجي لرحلات طيران.",
              "fr": "Vous écoutez une publicité pour des voyages en avion."
            }
          },
          "h10": {
            "text": {
              "ar": "كم تبلغ تكلفة تذكرة القطار لخمسة أشخاص؟",
              "fr": "Combien coûte un billet pour cinq personnes ?"
            },
            "options": {
              "ar": [
                "27 يورو.",
                "12 يورو.",
                "17 يورو."
              ],
              "fr": [
                "27 euros.",
                "12 euros.",
                "17 euros."
              ]
            }
          },
          "h11": {
            "text": {
              "ar": "يقع الاستاد الرياضي ...",
              "fr": "Le stade est situé ..."
            },
            "options": {
              "ar": [
                "فوق تلة مرتفعة.",
                "بالقرب من مدينة إنسبروك.",
                "في مدينة هامبورغ."
              ],
              "fr": [
                "sur une colline.",
                "près d'Innsbruck.",
                "à Hambourg."
              ]
            }
          },
          "h12": {
            "text": {
              "ar": "تُقام في استاد برغيزل ...",
              "fr": "Au stade Bergisel ont lieu ..."
            },
            "options": {
              "ar": [
                "ألعاب رياضية شتوية أولمبية.",
                "مسابقات ألعاب الفيديو.",
                "مباريات دوري كرة القدم."
              ],
              "fr": [
                "des Jeux d'hiver.",
                "des jeux vidéo.",
                "des matches de football."
              ]
            }
          },
          "h13": {
            "text": {
              "ar": "كم عدد الرياضيين الذين شاركوا في أولمبياد الشباب؟",
              "fr": "Combien de sportifs ont pris part aux Jeux olympiques de la jeunesse ?"
            },
            "options": {
              "ar": [
                "أكثر من 2000 رياضي.",
                "أقل من 1900 رياضي.",
                "حوالي 67 رياضياً فقط."
              ],
              "fr": [
                "Plus de 2000.",
                "Moins de 1900.",
                "Environ 67."
              ]
            }
          },
          "h14": {
            "text": {
              "ar": "تستغرق الرحلة بالمصعد إلى أعلى البرج ...",
              "fr": "La montée en ascenseur jusqu'à la tour dure ..."
            },
            "options": {
              "ar": [
                "دقيقتين.",
                "أربع عشرة دقيقة.",
                "اثنتين وثلاثين دقيقة."
              ],
              "fr": [
                "deux minutes.",
                "quatorze minutes.",
                "trente-deux minutes."
              ]
            }
          },
          "h15": {
            "text": {
              "ar": "أين يقع المقهى البانورامي؟",
              "fr": "Où se trouve le café ?"
            },
            "options": {
              "ar": [
                "على شرفة الجبل.",
                "على يسار البرج.",
                "في الطابق الثاني."
              ],
              "fr": [
                "Sur la terrasse de la montagne.",
                "À gauche de la tour.",
                "Au deuxième niveau."
              ]
            }
          },
          "h16": {
            "text": {
              "ar": "تيم مدعو لحفلة في عطلة نهاية الأسبوع.",
              "fr": "Timm est invité à une fête ce week-end."
            }
          },
          "h17": {
            "text": {
              "ar": "كان تيم يواجه دائماً صعوبات في مادة الرياضيات.",
              "fr": "Timm a toujours eu des difficultés en mathématiques."
            }
          },
          "h18": {
            "text": {
              "ar": "ليو لا يرغب في مساعدة شقيقه في الدراسة.",
              "fr": "Léo refuse d'aider son frère."
            }
          },
          "h19": {
            "text": {
              "ar": "لا توجد في لوسيرن سوى معاهد دروس خصوصية باهظة الثمن.",
              "fr": "À Lucerne, il n'y a que des instituts de soutien très chers."
            }
          },
          "h20": {
            "text": {
              "ar": "لا يستطيع تيم استخدام المواصلات العامة للعودة مساءً.",
              "fr": "Timm ne peut pas prendre les transports en commun pour rentrer le soir."
            }
          },
          "h21": {
            "text": {
              "ar": "يطلب فيليب مقابلاً مالياً مقابل إعطاء الدروس.",
              "fr": "Philipp demande de l'argent pour le soutien scolaire."
            }
          },
          "h22": {
            "text": {
              "ar": "سيقوم فيليب بإعطاء دروس تقوية في الرياضيات لتيم.",
              "fr": "Philipp va donner des cours de soutien en maths à Timm."
            }
          },
          "h23": {
            "text": {
              "ar": "لا تتوفر في المدينة شقق سكنية كافية للطلاب.",
              "fr": "En ville, les logements pour étudiants sont rares."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          },
          "h24": {
            "text": {
              "ar": "يرغب الكثير من الطلاب في المشاركة في مشروع «السكن مقابل المساعدة».",
              "fr": "De nombreux étudiants souhaitent intégrer le projet « Habiter contre aide »."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          },
          "h25": {
            "text": {
              "ar": "شقق الطلاب السكنية في الدار متطابقة تماماً.",
              "fr": "Les appartements des étudiants sont tous identiques."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          },
          "h26": {
            "text": {
              "ar": "يتولى الطلاب مهاماً وأنشطة متنوعة في دار المسنين.",
              "fr": "Les étudiants assument des missions variées au sein de l'établissement."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          },
          "h27": {
            "text": {
              "ar": "يقدم الطلاب المساعدة لنحو ثماني ساعات شهرياً في دار الرعاية.",
              "fr": "Les étudiants apportent leur aide environ huit heures par mois au foyer."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          },
          "h28": {
            "text": {
              "ar": "يعد التواصل مع نزلاء الدار تجربة جميلة ومثمرة للطلاب.",
              "fr": "Le contact avec les personnes âgées représente une magnifique expérience pour les étudiants."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          },
          "h29": {
            "text": {
              "ar": "المعلومات النظرية والتدريبية وحدها لا تكفي للعمل مع المسنين.",
              "fr": "Les seules connaissances théoriques ne suffisent pas pour intervenir en maison de retraite."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          },
          "h30": {
            "text": {
              "ar": "نزلاء دار المسنين مسرورون للغاية بالعيش المشترك مع الشباب.",
              "fr": "Les résidents âgés du foyer se réjouissent de vivre aux côtés des jeunes."
            },
            "options": {
              "ar": ["المذيع", "آنا لورنتس", "كيم كولر"],
              "fr": ["Le journaliste", "Anna Lorenz", "Kim Köhler"]
            }
          }
        }
      }
    }
  }
}

out_path = os.path.join(os.path.dirname(__file__), '../data/tests/modellsatz-18.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(modellsatz_18, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {out_path}")
