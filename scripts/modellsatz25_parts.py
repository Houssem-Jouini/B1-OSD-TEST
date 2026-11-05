#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 25 - Parts Data
Exam: Modelltest 19 — Hueber Zertifikat B1 (source: OSD JUIL/10, EX10-OSD.pdf)
"""

true = True
false = False
null = None

test_data = {
  "id": "modellsatz-25",
  "title": "Modelltest 19 — Hueber Zertifikat B1",
  "badge": "Modelltest 19",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 19",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 19 (Hueber)",
  "durationMinutes": 65,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "time": 10,
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
      "articles": [
        {
          "id": 1,
          "title": "E-Mail von Lutz an Florian · Gruß aus Frankfurt",
          "body": [
            "Hallo, Florian,",
            "wie geht es euch allen daheim? Tut mir leid, dass ich mich jetzt erst melde, aber ich hatte letztens richtig viel um die Ohren. Mit der Einschreibung an der Uni hat alles geklappt, mein erstes Wintersemester hat vor drei Wochen begonnen und ich bin nun täglich ca. 5 Stunden an der Uni.",
            "Der eigentliche Grund aber, weswegen ich 'ne Weile nichts von mir habe hören lassen, ist ein anderer: die Wohnungssuche. Ich hatte keine Ahnung, wie stressig das sein kann. Ich dachte, dass ich in einer Großstadt wie Frankfurt ziemlich schnell was finden würde. In ein Studentenheim wollte ich von vornherein nicht. Mein Fehler!?! Auf jeden Fall hab ich mich erst mal nach einer möblierten 1-Zimmer-Wohnung umgeschaut.",
            "Aber die Mietpreise sind horrend!!! Wie ich festgestellt habe, suchen nämlich nicht nur Studenten nach solchen Wohnungen, sondern auch Bankkaufleute und so. Frankfurt ist ja die Bankmetropole von Europa – Mainhattan, wie es so schön heißt. Nach unheimlich langem Suchen hab ich schließlich ein Zimmer in einer Wohngemeinschaft gefunden – natürlich nicht möbliert, aber wenigstens ist die Miete bezahlbar. Ich habe mir die allernotwendigsten Möbel angeschafft, gebraucht, versteht sich, doch in gutem Zustand. Jetzt fehlt mir nur noch ein Schrank.",
            "Außer mir wohnen noch drei Studenten in der WG. Jeder hat sein Zimmer und wir teilen uns Küche, Bad und einen kleinen Abstellraum. Ich wohne erst zehn Tage hier, aber wir vier verstehen uns schon sehr gut. Und mit Küchen- und Putzdienst scheint es auch zu klappen, obwohl ich anfangs ein wenig skeptisch war.",
            "Die Wohnung liegt in einem Altbau: hohe Wände, große Fenster, Holzfußboden … echt super. Mein Zimmer blickt auf den Hinterhof, ist also ruhig und hell. Ich fühle mich fürs Erste sehr wohl hier und kann mich endlich voll und ganz meinem Studium widmen. Du kannst mich auch jederzeit besuchen, aber bring unbedingt deinen Schlafsack mit.",
            "Lass mich wissen, wann du kommst. Grüß den Rest der Clique von mir!",
            "Lutz"
          ]
        }
      ],
      "example": {
        "id": 0,
        "text": "Lutz hatte in letzter Zeit viel zu tun.",
        "answer": "richtig"
      },
      "questions": [
        {
          "id": 1,
          "num": 1,
          "type": "tf",
          "text": "Lutz ist Studienanfänger.",
          "answer": "richtig"
        },
        {
          "id": 2,
          "num": 2,
          "type": "tf",
          "text": "In Frankfurt ist die Wohnungssuche in der Regel eine einfache Sache.",
          "answer": "falsch"
        },
        {
          "id": 3,
          "num": 3,
          "type": "tf",
          "text": "Lutz' Zimmer ist noch nicht ganz eingerichtet.",
          "answer": "richtig"
        },
        {
          "id": 4,
          "num": 4,
          "type": "tf",
          "text": "Bisher hatte Lutz keine Probleme mit seinen Mitbewohnern.",
          "answer": "richtig"
        },
        {
          "id": 5,
          "num": 5,
          "type": "tf",
          "text": "Der einzige Nachteil der Wohnung ist, dass sie alt ist.",
          "answer": "falsch"
        },
        {
          "id": 6,
          "num": 6,
          "type": "tf",
          "text": "Florian kann bei Lutz in der WG übernachten, wann immer er will.",
          "answer": "richtig"
        }
      ]
    },
    {
      "id": 2,
      "title": "Teil 2",
      "time": 20,
      "instructions": "Lesen Sie die Texte aus der Presse und die Aufgaben 7 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles": [
        {
          "id": 1,
          "title": "Mit dem Handyticket durch Berlin",
          "source": "aus einer deutschen Zeitung",
          "body": [
            "Kunden der Berliner Verkehrsbetriebe (BVG) können ihre Bus- und Bahnfahrten ab sofort bargeldlos mit dem Handy bezahlen. Das System unter dem Namen „Touch & Travel“ lief erst als Pilotprojekt und gilt nun für das ganze Gebiet der BVG. Es funktioniert ganz einfach: Man braucht nur ein Handy mit der Möglichkeit, von dort Geld zu bezahlen, und schon kann man bei „Touch & Travel“ mitmachen. Vor der Abfahrt mit dem Bus oder einem anderen Verkehrsmittel der BVG meldet man sich an der Haltestelle durch ein Funksignal als Fahrgast an, man steigt ein und fährt an sein Ziel. Dort meldet man sich wieder ab. Später kommt eine Rechnung über den Betrag der Fahrkarte.",
            "Experten für Verkehrsprobleme gehen davon aus, dass durch dieses neue System Bus- und Bahnfahrten besonders für jüngere Menschen attraktiver werden. Sie hoffen, dass die Menschen ihr Auto auch mal stehen lassen, denn die lästige Sucherei nach einem Fahrkartenautomaten und Kleingeld für die Fahrkarte fällt nun weg. Wer sich mit dem Streckensystem und den verschiedenen Tarifen nicht auskennt, braucht sich auch nicht mehr den Kopf zu zerbrechen, denn „Touch & Travel“ rechnet automatisch aus, wie teuer die Fahrt ist."
          ]
        }
      ],
      "example": {
        "id": 0,
        "text": "Verkehrsexperten ...",
        "options": [
          "suchen nach Fahrkartenautomaten.",
          "vereinfachen das Streckensystem der BVG.",
          "hoffen auf mehr Menschen, die die Busse und Bahnen benutzen."
        ],
        "answer": 2
      },
      "questions": [
        {
          "id": 7,
          "num": 7,
          "type": "mcq",
          "text": "In diesem Text geht es um ...",
          "options": [
            "die Fahrkosten bei der BVG.",
            "die Möglichkeit, Fahrkarten mit dem Handy zu bezahlen.",
            "die Verkehrsprobleme durch Busse und Bahnen."
          ],
          "answer": 1
        },
        {
          "id": 8,
          "num": 8,
          "type": "mcq",
          "text": "„Touch & Travel“ ...",
          "options": [
            "gilt auf allen Strecken der BVG.",
            "muss man vor der ersten Fahrt über den Computer anmelden.",
            "heißt eine neue Strecke bei der BVG."
          ],
          "answer": 0
        },
        {
          "id": 9,
          "num": 9,
          "type": "mcq",
          "text": "Junge Menschen ...",
          "options": [
            "finden das System „Touch & Travel“ sehr praktisch.",
            "kennen das Streckensystem der BVG nicht gut.",
            "sollen mit dem System „Touch & Travel“ zu Kunden werden."
          ],
          "answer": 2
        }
      ],
      "articles2": [
        {
          "id": 2,
          "title": "Arbeiten im Urlaub?",
          "source": "aus einer deutschen Zeitung",
          "body": [
            "Die Deutschen wollen Urlaub nehmen, um ungestört arbeiten zu können. Diesen Eindruck bekommt man bei den Ergebnissen einer aktuellen Umfrage unter Beschäftigten. Demnach arbeiten ungefähr sechs von zehn Berufstätigen auch im Urlaub, viele sogar jeden Tag. Und das obwohl 71 Prozent dieser Menschen ihre Arbeit als anstrengend empfinden. Erstaunlicherweise zeigen auch die meisten Lebenspartner Verständnis für dieses Verhalten. Nur 22 Prozent der Berufstätigen in einer Partnerschaft bekommen deshalb Streit.",
            "Teilweise kommt der Druck zur „freiwilligen“ Arbeit von der Firmenleitung. Von fast jedem vierten Angestellten erwartet der Arbeitgeber, dass er auch im Urlaub erreichbar ist. Außerdem geben über die Hälfte der Berufstätigen hierzulande an, dass sie in ihrer Freizeit von Kollegen oder von ihrem Chef kontaktiert werden.",
            "Zwischen Männern und Frauen gibt es kaum Unterschiede bezüglich der Anzahl der Urlaubsarbeiter. Beim Alter hingegen gilt: je jünger, desto mehr. Der Anteil derer, die in der freien Zeit arbeiten, nimmt mit höherem Alter also ab.",
            "Warum arbeiten so viele Menschen im Urlaub, in dem man sich eigentlich erholen sollte? Die meisten geben als Grund das Verantwortungsgefühl an oder „weil sonst die Arbeit nicht fertig wird“. Nur 28 % begründen ihr Verhalten damit, dass ihnen ihre Arbeit Spaß mache."
          ]
        }
      ],
      "questions2": [
        {
          "id": 10,
          "num": 10,
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "dass viele Deutsche in den Ferien arbeiten.",
            "dass Angestellte zu wenig Urlaub haben.",
            "dass die Arbeitsbedingungen in Deutschland sehr hart sind."
          ],
          "answer": 0
        },
        {
          "id": 11,
          "num": 11,
          "type": "mcq",
          "text": "Junge Berufstätige ...",
          "options": [
            "müssen sich nicht so sehr von ihrer Arbeit erholen wie ältere.",
            "arbeiten öfter im Urlaub als ältere.",
            "haben mehr Verantwortungsgefühl als ältere."
          ],
          "answer": 1
        },
        {
          "id": 12,
          "num": 12,
          "type": "mcq",
          "text": "Viele Deutsche arbeiten im Urlaub, ...",
          "options": [
            "weil ihre Lebenspartner es gut finden.",
            "damit sie mehr verdienen.",
            "weil sie etwas fertig machen wollen."
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": 3,
      "title": "Teil 3",
      "time": 10,
      "instructions": "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
      "situationContext": "Viele Ihrer Bekannten haben einen Garten und suchen immer nach Möglichkeiten, ihn besser zu pflegen oder noch mehr Freude an ihm zu haben.",
      "example": {
        "text": "Familie Schwarz ist glücklich über ihr neues Haus mit Garten. Aber die Bäume sind noch sehr klein und die Kinder haben nichts zum Klettern.",
        "answer": "e"
      },
      "adsFormatted": [
        {
          "code": "a",
          "title": "Tolle Preise zu gewinnen! · Das Zitty Magazin Blumenparadies",
          "text": "Der Sommer ist die bunteste Jahreszeit, im Sommer blüht der ganze Garten, der ganze Balkon, der ganze Innenhof. Schnappen Sie sich eine Kamera und machen Sie Fotos von Ihrem Blumenparadies. Schicken Sie die beiden besten Fotos zusammen mit Ihren Kontaktdaten bis zum 30. August an info@daszittymagazin.at oder per Post an: „Das Zitty Magazin“, Alte Gasse 10, 2700 Wien Neustadt. Als Preise für die schönsten Blumenparadiese winken Gutscheine von 20,- EUR bis 150,- EUR für Ihre Einkäufe bei der Gärtnerei Zimmermann, dem Sponsoren des Wettbewerbs.",
          "html": "<strong>Tolle Preise zu gewinnen! · Blumenparadies</strong><br>Fotos von blühendem Garten/Balkon einsenden bis 30. August.<br><em>Das Zitty Magazin · info@daszittymagazin.at</em>",
          "color": "#fef9e7",
          "hasPin": true
        },
        {
          "code": "b",
          "title": "Baumkultur · Beratung von Pfefferer, den Baumspezialisten",
          "text": "Vor Fehlplanung schützt Sie unsere Sorten- und Standortberatung. Denn nicht jeder Baum wächst gut an jedem Ort. Und vielleicht können wir Ihnen ja auch etwas ganz Außergewöhnliches empfehlen? Mit Bäumen leben macht das Leben einfach schöner! Pflanzzeit für Bäume jetzt! Beratung von Pfefferer, den Baumspezialisten. Infos: www.baumkultur.de oder unter 07631-130 57.",
          "html": "<strong>Pfefferer · Die Baumspezialisten</strong><br>Sorten- & Standortberatung für Bäume · Pflanzzeit jetzt!<br><em>www.baumkultur.de · Tel.: 07631-130 57</em>",
          "color": "#ebf5fb",
          "hasPin": true
        },
        {
          "code": "c",
          "title": "Obstbau Früchtehof · Sepp Fassbind",
          "text": "OBSTBAU FRÜCHTEHOF – knackfrisch geniessen. Birnen, Äpfel. Verkauf ab Hof: Mo–Fr 15–19 Uhr, Sa 9–13 Uhr. Sepp Fassbind, Am Stutz 27, 8254 Siebnen, Tel. 055 660 1776, www.fruechtehof.ch.",
          "html": "<strong>Obstbau Früchtehof · Sepp Fassbind</strong><br>Birnen & Äpfel knackfrisch ab Hof · Mo–Fr 15–19h, Sa 9–13h.<br><em>8254 Siebnen · www.fruechtehof.ch</em>",
          "color": "#fdedec",
          "hasPin": true
        },
        {
          "code": "d",
          "title": "Ruhige Dame sucht 2-Zi-Wohnung mit Gartenpflege",
          "text": "Seriöse, ruh. Dame (Mitte 50) mit kl. Hund (15 Jahre alt) sucht zum 1.8. o. früher ruhige 2-Zi-Wohnung, ca. 50 m², mit Balk., Terrasse o. kl. Garten, bis ca. 400 € warm, bevorzugt ländlich. Gerne Übernahme v. Gartenpflege. Tel. 0352/79097766.",
          "html": "<strong>Ruhige Dame sucht 2-Zi-Wohnung</strong><br>Gerne Übernahme von Gartenpflege · ca. 50 m² gesucht.<br><em>Tel.: 0352/79097766</em>",
          "color": "#f5eef8",
          "hasPin": true
        },
        {
          "code": "e",
          "title": "Super Frühlingsangebot · Gartenabenteuer Spielgerüst",
          "text": "Super Frühlingsangebot: Spielgerüst mit Kletternetz, Reckstange, Kletterseil und Strickleiter. 20% reduziert nur EUR 299,00, für Kinder bis zum Alter von 14 Jahren geeignet. GARTENABENTEUER – Ihr Spezialist für: Kinderspielanlagen, Schaukeln und Türme, Aufblasartikel. www.gartenabenteuer.de. Unser Geschäft: Altfeldstr. 3, 85723 Günding.",
          "html": "<strong>Super Frühlingsangebot · Spielgerüst</strong><br>Kletternetz, Reckstange, Kletterseil & Strickleiter nur 299 €.<br><em>www.gartenabenteuer.de · 85723 Günding</em>",
          "color": "#e8f8f5",
          "hasPin": true
        },
        {
          "code": "f",
          "title": "Neuerbau.de · Alles fürs Heimwerken, Reparieren, Basteln",
          "text": "www.Neuerbau.de – Alles fürs Heimwerken, Reparieren, Basteln! Besuchen Sie uns in unserem neuen Baumarkt-Center Am Neuen Ring 30 – auch samstags 9.00–20.00 Uhr. Neue Spezialabteilung: Gartenmöbel (Kunststoff, Holz, Eisen, Rattan) selbst reparieren. Alles, was Sie brauchen – alles, was Sie wissen müssen. www.neuerbau.de.",
          "html": "<strong>Neuerbau.de · Baumarkt-Center</strong><br>Spezialabteilung: Gartenmöbel selbst reparieren.<br><em>Am Neuen Ring 30 · www.neuerbau.de</em>",
          "color": "#fef9e7",
          "hasPin": true
        },
        {
          "code": "g",
          "title": "Gartenmöbel Reparatur & Pflege im Raum Linz",
          "text": "Repariere und pflege Gartenmöbel im Raum Linz, auch Antiquitäten, günstige Preise, Anfahrt inkl., auch Wochenende. Tel. 0732 783245, E-Mail garmo@gmx.at.",
          "html": "<strong>Gartenmöbel reparieren & pflegen · Linz</strong><br>Reparatur auch von Antiquitäten · günstige Preise, Anfahrt inkl.<br><em>Tel.: 0732 783245 · garmo@gmx.at</em>",
          "color": "#f2f4f4",
          "hasPin": true
        },
        {
          "code": "h",
          "title": "Ab ins Grüne! · Gartenwettbewerb mit tollen Preisen",
          "text": "Ab ins Grüne! Basteln Sie schöne Dekoration für den Garten, bauen Sie individuelle Gartenmöbel oder konstruieren Sie praktisches Gartenzubehör? Das alles können Sie dokumentieren und als Anleitung bei unserem neuen Gartenwettbewerb mitmachen lassen. Schreiben Sie eine Anleitung (am besten mit Fotos) und zeigen Sie den anderen, wie es geht. Tolle Preise zu gewinnen! Teilnahme kostenlos. Einsendeschluss: 25.5. – an: expli-mitmachen@expli.de.",
          "html": "<strong>Ab ins Grüne! · Gartenwettbewerb</strong><br>Bauanleitungen für Möbel/Deko einreichen · Tolle Preise!<br><em>Einsendeschluss: 25.5. · expli-mitmachen@expli.de</em>",
          "color": "#ebf5fb",
          "hasPin": true
        },
        {
          "code": "i",
          "title": "gartenarbeiter.de · Baumschnitt & Pflege",
          "text": "gartenarbeiter.de – Wir ... schneiden Obstbäume, fällen Bäume, säubern Gartenteiche und Swimmingpools, übernehmen sämtliche Gartenarbeiten. Günstig – schnell – professionell. In ganz Deutschland. www.gartenarbeiter.de, E-Mail: info@gartenarbeiter.de, Tel.: 0251-172885 (zum Ortstarif).",
          "html": "<strong>gartenarbeiter.de · Professionelle Baumpflege</strong><br>Obstbaumschnitt, Baumfällung, Teich- & Poolreinigung.<br><em>www.gartenarbeiter.de · Tel.: 0251-172885</em>",
          "color": "#eaf2f8",
          "hasPin": true
        },
        {
          "code": "j",
          "title": "Giardina · Leben im Garten · Messe Zürich",
          "text": "Giardina – Leben im Garten. 12. bis 16. März 2014, Messe Zürich, www.giardina.ch. Showgarten – Pflanzen – Floristik – Gartenmöbel – Kulinarisches – Dekoration – Kunst – Accessoires – Düfte – Gartentechnik – Bade- und Wasserwelt. Über 100 Aussteller. Gartenseminare und Vorträge.",
          "html": "<strong>Giardina · Leben im Garten · Messe Zürich</strong><br>Showgärten, Floristik, Dekoration, Kunst, Seminare.<br><em>12.–16. März · www.giardina.ch</em>",
          "color": "#fdedec",
          "hasPin": true
        }
      ],
      "questions": [
        {
          "id": 13,
          "num": 13,
          "type": "match",
          "text": "Charlotte und Jan Kaiser suchen einen Schüler oder Studenten, der ihren Garten pflegt, wenn sie in Urlaub sind.",
          "answer": "0"
        },
        {
          "id": 14,
          "num": 14,
          "type": "match",
          "text": "Hanna Gruber hat alte Gartenmöbel aus Eisen; sie möchte sie reparieren lassen.",
          "answer": "g"
        },
        {
          "id": 15,
          "num": 15,
          "type": "match",
          "text": "Benjamin Koch findet es nicht lustig, wenn seine Freunde Witze über seine selbst gebauten Gartenmöbel machen. Jetzt will er ihnen zeigen, dass er damit auch einen Preis gewinnen kann.",
          "answer": "h"
        },
        {
          "id": 16,
          "num": 16,
          "type": "match",
          "text": "Fabian Kunz sucht jemanden, der seine Apfelbäume schneidet, damit seine Apfelernte nächstes Jahr besser wird.",
          "answer": "i"
        },
        {
          "id": 17,
          "num": 17,
          "type": "match",
          "text": "Der junge Mann, der im 1. Stock gewohnt und sich auch um den Garten gekümmert hat, ist ausgezogen. Frau Jansen, der das Haus gehört, sucht wieder nach einer ähnlichen Lösung.",
          "answer": "d"
        },
        {
          "id": 18,
          "num": 18,
          "type": "match",
          "text": "In Rafaels und Janas Garten sind viele Bäume kaputt. Doch bevor sie neue Bäume kaufen, möchten sie einen Experten fragen.",
          "answer": "b"
        },
        {
          "id": 19,
          "num": 19,
          "type": "match",
          "text": "Für das Hochzeitsfest ihrer Tochter möchten Anna und Hans Moser ihren Garten besonders schön dekorieren und suchen nach Ideen.",
          "answer": "j"
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "time": 15,
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für den Hundeführerschein?",
      "situationContext": "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über die Einführung eines Hundeführerscheins und die Vor- und Nachteile davon.",
      "example": {
        "id": 0,
        "who": "Achim",
        "text": "Der richtige Schritt wäre schon, das Können der Hundebesitzer zu überprüfen. Wie soll das aber stattfinden? Das würde doch ausreichendes Personal und Geld kosten und das will der Staat doch nicht ausgeben. Ich nehme an, es wird nicht funktionieren, obwohl ich die Idee als solche nur unterstützen kann.",
        "answer": "ja"
      },
      "letters": [
        {
          "id": 20,
          "who": "Maren, 21, Husum",
          "text": "Jeder Hund muss in jeder Situation vom Besitzer kontrollierbar sein. Nicht dass die 80-jährige Oma vom 3-jährigen Schäferhund durch die Gegend gezogen wird. Aber so weit sind wir noch nicht. Deshalb finde ich den Hundeführerschein unrealistisch. Das kommt mir doch etwas zu extrem vor.",
          "answer": "nein"
        },
        {
          "id": 21,
          "who": "Janina, 40, Zug",
          "text": "Wie wäre es, wenn wir unseren Kindern beibringen, dass nicht jeder Hund gefährlich ist? Heute wechseln Leute schon panisch die Strassenseite, wenn ich ihnen mit meinem (Nichtkampf-)Hund an lockerer Leine entgegenkomme. Dabei interessiert sich meiner weder für andere Hunde noch für andere Menschen. Aber die Zeitungsberichte haben alle Leute hysterisch gemacht. Leider haben gerade die Kleinhundebesitzer ihre Vierbeiner meistens nicht im Griff und daran wird auch ein Hundeführerschein nichts ändern und wir Normalhundebesitzer müssen dann darunter leiden.",
          "answer": "nein"
        },
        {
          "id": 22,
          "who": "Nadja, 30, Brandenburg",
          "text": "Ich habe selbst einen Hund und erlebe es immer wieder, wie auch die kleinen und mittelgroßen Hunde sich Menschen und anderen Hunden gegenüber unmöglich verhalten oder sogar beißen. Dafür sollte man die Besitzer knallhart bestrafen und auch hohe Bußgelder kassieren. Es muss richtig wehtun im Portemonnaie, erst dann lernen es die Leute. Leider wird viel zu wenig kontrolliert. Der Hundeführerschein ist da genau richtig, aber er muss dann auch für alle gelten, ohne Ausnahme.",
          "answer": "ja"
        },
        {
          "id": 23,
          "who": "Regula, 43, Appenzell",
          "text": "Das ist doch nicht zu fassen, was sich die Bürokraten für die Hundebesitzer überlegen! So einen dummen Vorschlag habe ich schon lange nicht mehr gehört. Stellen Sie sich mal vor, wie auf einer Promenade ein Polizist jemanden anhält und kontrollieren will, ob er diesen Führerschein hat. Unglaublich!!",
          "answer": "nein"
        },
        {
          "id": 24,
          "who": "Hans, 16, Ratingen",
          "text": "Mit noch einer Regelung, die niemand ernst nimmt, macht der Staat sich nur noch lächerlicher. Wer wird dann diesen Hundeführerschein kontrollieren? So viele Polizisten gibt es doch nirgendwo, dass so etwas möglich wäre. Ich glaube, hier wollte sich nur wieder ein Politiker wichtigmachen, der keine Ahnung hat.",
          "answer": "nein"
        },
        {
          "id": 25,
          "who": "Konstantin, 19, Bregenz",
          "text": "Für die Hunde lohnt sich das sicher, da die Qualität ihrer Besitzer zunehmen würde. Natürlich wären es dann sicherlich einige Hundebesitzer weniger, denn ich kann mir gut vorstellen, dass nicht alle die Prüfung schaffen, so wie beim Autofahren. Ja, ich sehe das als Hundeschutz.",
          "answer": "ja"
        },
        {
          "id": 26,
          "who": "Andreas, 22, Berlin",
          "text": "Dieser Hundeführerschein sollte schon seit Jahren da sein, denn es gibt einfach zu viele Menschen, die persönliche Probleme mithilfe eines Hundes lösen möchten: Hund als Kindersatz, als Waffe, als Ersatz für menschliche Kontakte. Besonders den Hunden wäre damit geholfen, wenn ihre Besitzer sich ernsthaft mit ihnen beschäftigen und sie nicht artfremd leben müssten. Allein, dass den Besitzern klar werden würde, dass ein Hund grundsätzlich draußen leben sollte, könnte dazu führen, dass einige sich lieber ein Meerschweinchen anschaffen.",
          "answer": "ja"
        }
      ]
    },
    {
      "id": 5,
      "title": "Teil 5",
      "time": 10,
      "instructions": "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "situationContext": "Sie interessieren sich für den Freiwilligendienst und informieren sich über die Aktivitäten des SCI.",
      "articles": [
        {
          "id": 1,
          "title": "Anpacken ... Erst-Info für Neugierige · Service Civil International (SCI)",
          "body": [
            "Service Civil International (SCI) organisiert internationale Freiwilligeneinsätze im Rahmen von Workcamps.",
            "Wann? Von Juni bis Oktober, einige im Frühling oder Winter.",
            "Wie lange? Zwei, drei oder vier Wochen.",
            "Wo? In fast allen Ländern Europas, in Nordamerika, Japan, Mongolei, Südkorea und Australien. Außerdem in vielen Ländern der „Dritten Welt“.",
            "Für wen? Jede/r kann mitmachen: ab 16 Jahren im Inland (Deutschland), ab 18 Jahren im Ausland (Afrika, Asien und Lateinamerika ab 21). Eine Altersbegrenzung nach oben gibt es nur in Einzelfällen.",
            "Mit wem? Zusammen mit zehn bis zwanzig anderen Freiwilligen aus den unterschiedlichsten Ländern. Auch in Camps in Deutschland sind die Gruppen international. Campsprache ist in der Regel Englisch. Grundkenntnisse reichen aus.",
            "Was soll ich im Camp tun? Für ein gemeinnütziges Projekt arbeitest du unentgeltlich fünf bis sechs Stunden am Tag. Als Freiwillige/r solltest du engagiert sein – aber niemand erwartet Profis.",
            "Was darf ich erwarten? Im Studienteil des Camps bietet dir das Projekt, dich mit seiner Arbeit, seinem politischen und sozialen Umfeld thematisch auseinanderzusetzen. Im Arbeitsteil wirst du angeleitet. Deine Campgruppe erhält eine meist einfache Unterkunft mit Selbstversorgerküche. In vielen Camps stehen dir und den anderen Freiwilligen SCI-Campleiter/innen zur Seite.",
            "Wie viel (kostet das alles)? Die Vermittlung in ein Inlandcamp kostet 82 €, in ein Auslandscamp 110 €. Deine An- und Rückreise organisierst und finanzierst du selbst. Für manche Länder musst du ein gebührenpflichtiges Visum beantragen. Unterkunft und Verpflegung vor Ort sind frei.",
            "Spezielle Bedingungen gibt es für Afrika, Asien und Lateinamerika. Bitte das entsprechende Info anfordern!"
          ]
        }
      ],
      "questions": [
        {
          "id": 27,
          "num": 27,
          "type": "mcq",
          "text": "In den Camps ...",
          "options": [
            "dürfen Freiwillige, die älter als 21 sind, nicht mitmachen.",
            "arbeiten meistens Freiwillige aus demselben Land zusammen.",
            "findet die Kommunikation unter den Freiwilligen normalerweise auf Englisch statt."
          ],
          "answer": 2
        },
        {
          "id": 28,
          "num": 28,
          "type": "mcq",
          "text": "Der Freiwilligendienst ...",
          "options": [
            "ist zu allen Jahreszeiten möglich.",
            "dauert mindestens einen Monat.",
            "ist eine Sache für Profis."
          ],
          "answer": 0
        },
        {
          "id": 29,
          "num": 29,
          "type": "mcq",
          "text": "Die Freiwilligen sollten ...",
          "options": [
            "sich um eine Unterkunft kümmern.",
            "sich auch theoretisch mit dem Thema des Projekts beschäftigen.",
            "unbedingt den Campleitern helfen."
          ],
          "answer": 1
        },
        {
          "id": 30,
          "num": 30,
          "type": "mcq",
          "text": "Selbst bezahlen muss man ...",
          "options": [
            "vielleicht für ein Visum.",
            "auf jeden Fall für die Organisation der Reise.",
            "seine Hinreise nur, wenn man ins Ausland fährt."
          ],
          "answer": 0
        }
      ]
    },
    {
      "id": 6,
      "title": "Hören",
      "badge": "Hören (4 Teile)",
      "isHoren": True,
      "time": 40,
      "instructions": "Das Modul Hören besteht aus vier Teilen. Sie hören jeden Text ein- oder zweimal. Lösen Sie die Aufgaben zu jedem Teil.",
      "audioSrc": "audio/modellsatz-25-hoeren.mp3",
      "audioFallbacks": [
        "audio/modellsatz-25-hoeren.mp3"
      ],
      "audioChapters": [
        {
          "time": 0,
          "start": 0,
          "end": 36,
          "label": "00:00 Teil 1 (Beispiel · 2x)",
          "part": 1,
          "title": "Teil 1 · Beispiel (2x hören)"
        },
        {
          "time": 36,
          "start": 36,
          "end": 756,
          "label": "00:36 Teil 1 (Texte 1–5 · 2x)",
          "part": 1,
          "title": "Teil 1 · Fünf kurze Texte (2x hören)"
        },
        {
          "time": 756,
          "start": 756,
          "end": 1027,
          "label": "12:36 Teil 2 (Schüler-Vortrag Umwelttag · 1x)",
          "part": 2,
          "title": "Teil 2 · Schüler-Vortrag zum Tag der Umwelt (1x hören)"
        },
        {
          "time": 1027,
          "start": 1027,
          "end": 1306,
          "label": "17:07 Teil 3 (Gespräch: Rentnerin & Simon · 1x)",
          "part": 3,
          "title": "Teil 3 · Gespräch an der Haltestelle: Leben als Rentnerin (1x hören)"
        },
        {
          "time": 1306,
          "start": 1306,
          "end": 1742,
          "label": "21:46 Teil 4 (Diskussion: Kinderarbeit · 1. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiodiskussion: Kinderarbeit (1. Durchgang)"
        },
        {
          "time": 1742,
          "start": 1742,
          "end": 2086,
          "label": "29:02 Teil 4 (Diskussion: Kinderarbeit · 2. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiodiskussion: Kinderarbeit (2. Durchgang)"
        }
      ],
      "horenSections": [
        {
          "id": 1,
          "partNumber": 1,
          "title": "Teil 1: Fünf kurze Texte",
          "badge": "Aufgaben 1 bis 10",
          "desc": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben.",
          "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
          "context": "Alltagssituationen: Radio-Nachrichten, Telefonansagen, Durchsagen am Bahnhof und im Radio.",
          "example": {
            "ex01": {
              "num": "01",
              "text": "Ein Schüler hatte einen Unfall.",
              "type": "tf",
              "answer": "richtig"
            },
            "ex02": {
              "num": "02",
              "text": "Wo ist der Schüler jetzt?",
              "type": "mcq",
              "options": [
                "Im Krankenhaus.",
                "Bei Nachbarn.",
                "Auf dem Sportplatz."
              ],
              "answer": 0
            }
          },
          "questions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          "id": 2,
          "partNumber": 2,
          "title": "Teil 2: Schüler-Vortrag zum Tag der Umwelt",
          "badge": "Aufgaben 11 bis 15",
          "desc": "Sie hören einen Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie die richtige Lösung a, b oder c.",
          "intro": "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
          "context": "Sie nehmen an einem Schüler-Vortrag zum Tag der Umwelt teil.",
          "questions": [11, 12, 13, 14, 15]
        },
        {
          "id": 3,
          "partNumber": 3,
          "title": "Teil 3: Gespräch an der Straßenbahnhaltestelle",
          "badge": "Aufgaben 16 bis 22",
          "desc": "Sie hören ein Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
          "intro": "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
          "context": "Sie sind an einer Straßenbahnhaltestelle und hören, wie sich eine ältere Frau mit einem jungen Mann über ihr Leben als Rentnerin unterhält.",
          "questions": [16, 17, 18, 19, 20, 21, 22]
        },
        {
          "id": 4,
          "partNumber": 4,
          "title": "Teil 4: Radiodiskussion über Kinderarbeit",
          "badge": "Aufgaben 23 bis 30",
          "desc": "Sie hören eine Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen den Sprechern zu.",
          "intro": "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was?",
          "context": "Eine Journalistin diskutiert mit der Volksschullehrerin Eva Fink und mit Paul Egger vom Verein „Kindernothilfe“ über das Thema „Kinderarbeit“.",
          "speakers": [
            { "code": "a", "name": "Journalistin" },
            { "code": "b", "name": "Eva Fink (Lehrerin)" },
            { "code": "c", "name": "Paul Egger (Kindernothilfe)" }
          ],
          "example": {
            "num": "0",
            "text": "In der Sendung geht es um ein trauriges Thema.",
            "answer": 0,
            "answerCode": "a",
            "answerSpeaker": "Journalistin"
          },
          "questions": [23, 24, 25, 26, 27, 28, 29, 30]
        }
      ],
      "questions": [
        {
          "id": "h1",
          "num": 1,
          "type": "tf",
          "text": "Sie hören eine Information einer Berufsschule.",
          "answer": "falsch",
          "audioStart": 36,
          "teilPart": 1,
          "textNum": 1
        },
        {
          "id": "h2",
          "num": 2,
          "type": "mcq",
          "text": "Für die Anmeldung braucht man …",
          "options": [
            "einen Pass.",
            "das Zeugnis der Grundschule.",
            "ein Foto."
          ],
          "answer": 2,
          "audioStart": 36,
          "teilPart": 1,
          "textNum": 1
        },
        {
          "id": "h3",
          "num": 3,
          "type": "tf",
          "text": "Sie hören eine Unfallmeldung.",
          "answer": "richtig",
          "audioStart": 165,
          "teilPart": 1,
          "textNum": 2
        },
        {
          "id": "h4",
          "num": 4,
          "type": "mcq",
          "text": "Wer soll sich bei der Polizei melden?",
          "options": [
            "Die Frau, die das Auto fuhr.",
            "Der Junge, der die Straße überquerte.",
            "Personen, die den Unfall gesehen haben."
          ],
          "answer": 2,
          "audioStart": 165,
          "teilPart": 1,
          "textNum": 2
        },
        {
          "id": "h5",
          "num": 5,
          "type": "tf",
          "text": "Der Zug kommt jetzt an.",
          "answer": "richtig",
          "audioStart": 293,
          "teilPart": 1,
          "textNum": 3
        },
        {
          "id": "h6",
          "num": 6,
          "type": "mcq",
          "text": "Der Zug …",
          "options": [
            "kommt aus Heilbronn.",
            "fährt nach Heilbronn.",
            "kommt aus Eberberg."
          ],
          "answer": 1,
          "audioStart": 293,
          "teilPart": 1,
          "textNum": 3
        },
        {
          "id": "h7",
          "num": 7,
          "type": "tf",
          "text": "Die Sendung ist von und für Kinder.",
          "answer": "falsch",
          "audioStart": 398,
          "teilPart": 1,
          "textNum": 4
        },
        {
          "id": "h8",
          "num": 8,
          "type": "mcq",
          "text": "Eine Viertel Million Tafeln Schokolade …",
          "options": [
            "wurde von Kindern gegessen.",
            "haben die Händler bestellt.",
            "sind in vier Wochen verkauft worden."
          ],
          "answer": 1,
          "audioStart": 398,
          "teilPart": 1,
          "textNum": 4
        },
        {
          "id": "h9",
          "num": 9,
          "type": "tf",
          "text": "Sie hören ein Quiz für Kinder.",
          "answer": "falsch",
          "audioStart": 516,
          "teilPart": 1,
          "textNum": 5
        },
        {
          "id": "h10",
          "num": 10,
          "type": "mcq",
          "text": "In die Kunsthalle Bremen wird eingeladen, wer …",
          "options": [
            "seine Meinung über die Testversion des Spiels schreibt.",
            "die besten Tipps zur Verbesserung des Spiels gibt.",
            "den Fragebogen zum Spiel ausfüllt."
          ],
          "answer": 1,
          "audioStart": 516,
          "teilPart": 1,
          "textNum": 5
        },
        {
          "id": "h11",
          "num": 11,
          "type": "mcq",
          "text": "Wer hat den Umwelttag vorbereitet?",
          "options": [
            "Die Lehrer und Lehrerinnen.",
            "Schüler aus den Klassen 8 und 9.",
            "Schüler und Lehrer."
          ],
          "answer": 2,
          "audioStart": 756,
          "teilPart": 2
        },
        {
          "id": "h12",
          "num": 12,
          "type": "mcq",
          "text": "Zu den Themen des Umwelttages gehören auch …",
          "options": [
            "Heizung und Ernährung.",
            "Recycling und Müll.",
            "Strom und Elektroautos."
          ],
          "answer": 0,
          "audioStart": 756,
          "teilPart": 2
        },
        {
          "id": "h13",
          "num": 13,
          "type": "mcq",
          "text": "Wie viele Menschen in Deutschland haben ein Auto?",
          "options": [
            "Ein großer Teil.",
            "Jeder Dritte.",
            "Die Hälfte."
          ],
          "answer": 2,
          "audioStart": 756,
          "teilPart": 2
        },
        {
          "id": "h14",
          "num": 14,
          "type": "mcq",
          "text": "Wie soll das Pausenbrot eingepackt sein?",
          "options": [
            "In Butterbrotpapier.",
            "In einer Butterbrotdose.",
            "In Plastikfolie."
          ],
          "answer": 1,
          "audioStart": 756,
          "teilPart": 2
        },
        {
          "id": "h15",
          "num": 15,
          "type": "mcq",
          "text": "Wer den PC nicht mehr benutzt, soll …",
          "options": [
            "die Fernbedienung ausmachen.",
            "auf Wartebetrieb stellen.",
            "den Stecker ziehen."
          ],
          "answer": 2,
          "audioStart": 756,
          "teilPart": 2
        },
        {
          "id": "h16",
          "num": 16,
          "type": "tf",
          "text": "Frau Pichler hat in einem Buchladen gearbeitet.",
          "answer": "richtig",
          "audioStart": 1027,
          "teilPart": 3
        },
        {
          "id": "h17",
          "num": 17,
          "type": "tf",
          "text": "Simon und Frau Pichler waren Kollegen.",
          "answer": "richtig",
          "audioStart": 1027,
          "teilPart": 3
        },
        {
          "id": "h18",
          "num": 18,
          "type": "tf",
          "text": "Frau Pichler war froh, als sie in Rente gehen konnte.",
          "answer": "falsch",
          "audioStart": 1027,
          "teilPart": 3
        },
        {
          "id": "h19",
          "num": 19,
          "type": "tf",
          "text": "Zu den Vereinstreffen können nur Mitglieder kommen.",
          "answer": "falsch",
          "audioStart": 1027,
          "teilPart": 3
        },
        {
          "id": "h20",
          "num": 20,
          "type": "tf",
          "text": "Simon hat Frau Pichler vor einigen Tagen angerufen, aber nicht erreicht.",
          "answer": "falsch",
          "audioStart": 1027,
          "teilPart": 3
        },
        {
          "id": "h21",
          "num": 21,
          "type": "tf",
          "text": "Der Buchladen will regelmäßig Büchernachmittage für Kinder organisieren.",
          "answer": "richtig",
          "audioStart": 1027,
          "teilPart": 3
        },
        {
          "id": "h22",
          "num": 22,
          "type": "tf",
          "text": "Frau Pichler will auf keinen Fall bei den Kindernachmittagen mitmachen.",
          "answer": "falsch",
          "audioStart": 1027,
          "teilPart": 3
        },
        {
          "id": "h23",
          "num": 23,
          "type": "speaker",
          "text": "Die „Kindernothilfe“ hilft Kindern auf der ganzen Welt.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 2,
          "audioStart": 1306,
          "teilPart": 4
        },
        {
          "id": "h24",
          "num": 24,
          "type": "speaker",
          "text": "Millionen Kinder sind gezwungen zu arbeiten.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 0,
          "audioStart": 1306,
          "teilPart": 4
        },
        {
          "id": "h25",
          "num": 25,
          "type": "speaker",
          "text": "In Indien werden Bälle produziert.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 1,
          "audioStart": 1306,
          "teilPart": 4
        },
        {
          "id": "h26",
          "num": 26,
          "type": "speaker",
          "text": "In der Klasse sollten die Kinder einen Ball nähen.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 1,
          "audioStart": 1306,
          "teilPart": 4
        },
        {
          "id": "h27",
          "num": 27,
          "type": "speaker",
          "text": "An einem Tag müssen zwei Bälle fertig werden.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 1,
          "audioStart": 1306,
          "teilPart": 4
        },
        {
          "id": "h28",
          "num": 28,
          "type": "speaker",
          "text": "Der Basar war ein voller Erfolg.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 2,
          "audioStart": 1306,
          "teilPart": 4
        },
        {
          "id": "h29",
          "num": 29,
          "type": "speaker",
          "text": "Wer etwas gegen Kinderarbeit tun will, sollte Produkte mit dem Zeichen „Fairtrade“ kaufen.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 2,
          "audioStart": 1306,
          "teilPart": 4
        },
        {
          "id": "h30",
          "num": 30,
          "type": "speaker",
          "text": "Manche Kinder können trotz Arbeit eine Schule besuchen.",
          "options": [
            "Journalistin",
            "Eva Fink (Lehrerin)",
            "Paul Egger (Kindernothilfe)"
          ],
          "answer": 2,
          "audioStart": 1306,
          "teilPart": 4
        }
      ]
    }
  ]
}
