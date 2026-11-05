#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for data/tests/modellsatz-24.json (Modelltest 18 — Hueber Zertifikat B1, source OSD JUIL/9)
Complete exam: 6 parts, authentic texts, verified answers, 3-language explanations,
full translations dictionary, and auto-registration in data/tests-manifest.json.
"""

import json
import os

true = True
false = False
null = None

test_data = {
  "id": "modellsatz-24",
  "title": "Modelltest 18 — Hueber Zertifikat B1",
  "badge": "Modelltest 18",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 18",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 18 (Hueber)",
  "durationMinutes": 65,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "time": 10,
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
      "articles": [
        {
          "title": "E-Mail an Gerd · Unser Urlaub auf dem Bauernhof",
          "author": "Dieter",
          "date": "14. August",
          "body": [
            "Hallo Gerd, wir sind seit gestern gesund und erholt aus dem Urlaub in Kärnten zurück. Und da du mich gebeten hattest, dir von unserem „Urlaub auf dem Bauernhof“ zu berichten, will ich dies auch gleich tun. Es war einmalig!!",
            "Der Bauernhof, den wir ausgewählt hatten, liegt auf einer Höhe von 1050 m. Fahrzeugverkehr gibt es da so gut wie gar keinen, dadurch hatten die Kinder eine sehr große Bewegungsfreiheit. Ich beschreibe dir am besten mal, wie ein typischer Urlaubstag ablief.",
            "In der Früh gab es ein Buffet mit Biolebensmitteln. Der Hof wird nämlich als Biobauernhof geführt. Fast alles stammt aus eigener Herstellung, z.B. Schinken, Zwetschkenmarmelade, frische Semmeln usw. Vormittags konnte man dann vieles unternehmen. Der Hof verfügt über ein beheiztes Schwimmbad mit Liegewiese. Ich und Lena haben uns richtig auf die faule Haut gelegt, aber die Kinder sind viel lieber zum hauseigenen Forellenteich und haben geangelt. Wenn sie Anglerglück hatten, wurden die Forellen dann zu Mittag für uns zubereitet.",
            "Die Kinder waren auch oft im Stall bei den Tieren. Sie durften sogar einmal bei der Geburt eines Kalbes dabei sein. Und sie haben gelernt, wie man eine Kuh melkt.",
            "Wenn wir Eltern genug „gefaulenzt“ hatten, haben wir zu viert die Wanderwege genutzt. Dabei haben wir manchmal Schwammerln gesammelt und sie dann selbst in der Küche gekocht.",
            "Ab und zu haben wir auch Ausflüge unternommen. Einmal sind wir zum Wörthersee baden gefahren. Die Seen in dieser Gegend gehören zu den wärmsten Europas. Ein anderes Mal waren wir auf der Burg Hochosterwitz mit ihren 14 (!) Burgtoren.",
            "Mittags haben wir meistens nur etwas Kleines gegessen, aber abends gab es dann ein 3-Gänge-Menü. Bei gutem Wetter war einmal die Woche draußen Grillabend.",
            "Wenn wir dann auf unser Zimmer sind, war schnell Ruhe. Wer konnte, hat höchstens noch ein bisschen gelesen. Die Zimmer haben keinen Fernseher und kein Radio. Doch wir brauchten beides nicht.",
            "Die zwei Wochen waren sehr erholsam, aber zu schnell vorbei. Ich sag dir, Gerd, einen besseren Familienurlaub kann ich mir wirklich nicht vorstellen. Im nächsten Jahr wollen wir deshalb wieder hin. Ich hoffe, ihr seid dann auch dabei. Wär das nicht was? Überlegt es euch!!\nDieter"
          ]
        }
      ],
      "questions": [
        {
          "id": 1,
          "type": "tf",
          "num": 1,
          "text": "Es gab kaum Verkehr in der Nähe des Bauernhofs.",
          "answer": "richtig"
        },
        {
          "id": 2,
          "type": "tf",
          "num": 2,
          "text": "Die Speisen für das Frühstück wurden von den Gästen hergestellt.",
          "answer": "falsch"
        },
        {
          "id": 3,
          "type": "tf",
          "num": 3,
          "text": "Das Schwimmbad durfte nur von Erwachsenen benutzt werden.",
          "answer": "falsch"
        },
        {
          "id": 4,
          "type": "tf",
          "num": 4,
          "text": "Die Kinder beschäftigten sich häufig mit den Tieren.",
          "answer": "richtig"
        },
        {
          "id": 5,
          "type": "tf",
          "num": 5,
          "text": "Die Familie hat manchmal Ausflüge gemacht.",
          "answer": "richtig"
        },
        {
          "id": 6,
          "type": "tf",
          "num": 6,
          "text": "Nach dem Abendessen haben die Kinder lieber gelesen, statt fernzusehen.",
          "answer": "falsch"
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
          "title": "Im Labyrinth der Buchstaben",
          "source": "aus einer deutschen Zeitung",
          "body": [
            "Vier Millionen Menschen in Deutschland können diesen Text nicht richtig lesen, weil sie Analphabeten sind. Sie sind arm, isoliert und von anderen abhängig. Wirtschaftliche Schäden in Milliardenhöhe sind die Folgen. Denn wer nicht lesen und schreiben kann, ist eher arbeitslos. Er zahlt also keine Steuern und bezieht Sozialleistungen.",
            "Wenn Analphabeten einen Job finden, dann meist einen schlecht bezahlten. Doch das Angebot in diesem Bereich wird immer kleiner. Einfache Arbeitsplätze werden wegrationalisiert und mit Robotern besetzt. Schreiben und Lesen ist mittlerweile auch bei einfachen Jobs nötig. Formulare müssen ausgefüllt, Rechnungen geschrieben, Arbeitsabläufe dokumentiert und Sicherheits- oder Arbeitsanweisungen gelesen werden.",
            "Wer es schafft, trotz der Lese- und Schreibschwäche das Internet zu benutzen, kann dort spezielle Lern-Seiten besuchen. Etwa 250000 Menschen nutzen ein Online-Lernportal des Deutschen Volkshochschul-Verbandes, wo sie sich per Bild und Ton die Buchstaben erschließen können. Für Fortgeschrittene gibt es ein soziales Netzwerk namens „Alpha VZ“. Hier können Analphabeten ähnlich wie auf Facebook Kontakt knüpfen.",
            "Mehr als 3 000 Lese- und Schreibkurse pro Jahr bieten zudem die Volkshochschulen an. Doch zu wenige Analphabeten nehmen daran teil. Auch wegen des Geldes: Zwei Unterrichtsstunden kosten bis zu fünf Euro – das ist für viele der oft arbeitslosen Analphabeten zu teuer."
          ]
        }
      ],
      "questions": [
        {
          "id": 7,
          "type": "mcq",
          "num": 7,
          "text": "In diesem Text geht es um …",
          "options": [
            "die Situation von Analphabeten.",
            "die Kurse der Volkshochschule.",
            "die Gründe für Analphabetismus."
          ],
          "answer": 0
        },
        {
          "id": 8,
          "type": "mcq",
          "num": 8,
          "text": "Analphabeten …",
          "options": [
            "werden immer schlecht bezahlt.",
            "müssen die Arbeit von Robotern machen.",
            "finden nicht so leicht einen Arbeitsplatz."
          ],
          "answer": 2
        },
        {
          "id": 9,
          "type": "mcq",
          "num": 9,
          "text": "Im Internet …",
          "options": [
            "kann man auch als Analphabet bequem surfen.",
            "gibt es 250.000 Menschen, die nicht lesen können.",
            "gibt es die Möglichkeit, lesen und schreiben zu lernen."
          ],
          "answer": 2
        }
      ],
      "articles2": [
        {
          "title": "Kino-Ninjas",
          "source": "aus einer deutschen Zeitung",
          "body": [
            "Viele Cineasten haben unter rücksichtslosen Kinogängern zu leiden, die sich während Filmvorführungen ständig lauthals unterhalten, ungefragt Szenen kommentieren – oder gar Pointen vorsagen – und ständig SMS checken und beantworten.",
            "Das Prince Charles Cinema am Leicester Square in London hat jetzt eine eigenwillige Maßnahme gegen diese Kino-Ruhestörer eingeführt, die nicht nur filmreif klingt, sondern ein wahrer Segen für leidgeplagte Filmfans sein dürfte: Freiwillige verkleiden sich als „Kino-Ninjas“ in hautengen, pechschwarzen Ganzkörperanzügen und beobachten die Zuschauer während der Vorführungen.",
            "Im Dunkel des Kinosaals sind sie praktisch unsichtbar – doch fallen ihnen Störenfriede auf, schleichen sich die Ninjas blitzschnell durch die Sitzreihen und weisen die Missetäter zurecht – allerdings sprechen sie nur. Von Wurfsternen oder Handkantenschlägen echter Ninjas machen die Kinowächter nicht Gebrauch.",
            "Die Idee für diese ungewöhnliche Taskforce – bei der ehrenamtliche Kinobesucher im Austausch für freien Eintritt aktiv werden – hatte Gregor Lawson, Mitbegründer von „Morphsuits“, dem Hersteller der hautengen Ninja-„Arbeitskleidung“. Er ärgerte sich immer wieder über telefonierende Gäste und SMS-Junkies im Kino. Als er selbst aber einmal einen Anruf im Kino annahm, warnten ihn zwei Kinogäste aus der Schweiz leise, doch endlich ruhig zu sein. Er bekam erst Angst, gab den Leuten dann aber recht. Und so erfand er die Kino-Ninjas."
          ]
        }
      ],
      "questions2": [
        {
          "id": 10,
          "type": "mcq",
          "num": 10,
          "text": "In diesem Text geht es um …",
          "options": [
            "einen neuen japanischen Film.",
            "eine Aktion in einem englischen Kino.",
            "einen Sicherheitsservice in Kinos."
          ],
          "answer": 1
        },
        {
          "id": 11,
          "type": "mcq",
          "num": 11,
          "text": "Die Kino-Ninjas …",
          "options": [
            "bekommen für ihre Arbeit Freikarten für das Kino.",
            "wollen Kinobesucher erschrecken.",
            "schicken störenden Besuchern eine SMS."
          ],
          "answer": 0
        },
        {
          "id": 12,
          "type": "mcq",
          "num": 12,
          "text": "Gregor Lawson …",
          "options": [
            "spricht oft am Handy, wenn er im Kino ist.",
            "ist auch ein Kino-Ninja.",
            "bekam seine Idee durch einen eigenen Kinobesuch."
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
      "situationContext": "Weihnachten ist nahe. Deshalb möchten einige Ihrer Freundinnen und Freunde ihren Verwandten eine Freude machen und suchen nach passenden Möglichkeiten.",
      "example": {
        "text": "Torstens Onkel geht gern in Konzerte, doch hat er leider nur an Wochenenden Zeit, weil er in der Woche bis spät arbeitet.",
        "answer": "c"
      },
      "adsFormatted": [
        {
          "code": "a",
          "title": "Adventsball am 15. Dezember · Tanzsportclub Allstetten e.V.",
          "text": "Wir laden herzlich ein zu unserem Adventsball am 15. Dezember in die Stadthalle Allstetten. Beginn: 19.30 Uhr / Einlass: 18.45 Uhr. Programm, Show der Landesmeister Markus und Monika Lenz in Senioren II A Standard u.v.m. Tanzkapelle Zell, Bewirtung, Tombola. Kartenvorverkauf m. Platzreservierung: ab 20. November 9-12 Uhr, Kasse, Haupteingang Stadthalle Allstetten. Weitere Informationen unter Tel. 07443 - 8957. Tanzsportclub Allstetten e.V.",
          "html": "<strong>Adventsball am 15. Dezember · Stadthalle Allstetten</strong><br>Show der Landesmeister Markus & Monika Lenz, Tanzkapelle Zell, Bewirtung.<br><em>Tanzsportclub Allstetten e.V. · Tel.: 07443 - 8957</em>",
          "color": "#fef9e7",
          "hasPin": true
        },
        {
          "code": "b",
          "title": "Weihnachtliche Panflöte · Herkulessaal",
          "text": "Dienstag, 17. Dezember, Herkulessaal, 20 Uhr: Weihnachtliche Panflöte – Panflötenromantik zur Adventszeit. Horea Cristen (Panflöte) und Karl-Bernhard Kopf (Orgel) spielen beliebte deutsche Weihnachtslieder. Kartenservice Tel. 39 39 60, Fax: 9 94 30 64 und an den bekannten Vorverkaufsstellen in München.",
          "html": "<strong>Weihnachtliche Panflöte · Herkulessaal München</strong><br>Dienstag, 17. Dezember, 20 Uhr: Panflötenromantik mit Horea Cristen & Karl-Bernhard Kopf.<br><em>Kartenservice Tel.: 39 39 60</em>",
          "color": "#f2f4f4",
          "hasPin": true
        },
        {
          "code": "c",
          "title": "Bach Chor · Weihnachts-Oratorium I–III · Philharmonie",
          "text": "Sonntag, 15. Dezember, 11.00 Uhr, Philharmonie: Weihnachts-Oratorium I–III von Johann Sebastian Bach. Silke Rupert, Sopran / Maria Grothe, Alt / Kurt Enzensberger, Tenor / Michael Wohl, Bass / Bach-Chor / Bach-Orchester. Karten bei MUSICA Konzertagentur Tel. 819556 oder an der Abendkasse.",
          "html": "<strong>Bach Chor · Weihnachts-Oratorium I–III</strong><br>Sonntag, 15. Dezember, 11.00 Uhr, Philharmonie · J. S. Bach.<br><em>Karten bei MUSICA Konzertagentur Tel.: 819556</em>",
          "color": "#fdedec",
          "hasPin": true
        },
        {
          "code": "d",
          "title": "Rundflug mit dem Heißluftballon · Schweizer Erlebnisgeschenke",
          "text": "Gutschein ab 219,- €. Rundflug mit dem Heißluftballon: Nach dem interessanten Aufbau der Ballon-Technik wird in landschaftlich reizvoller Umgebung gestartet und man erlebt das wunderbare Schweben über Wälder und Felder, Flüsse und Seen. Nur hin und wieder unterbricht das Fauchen des Brenners die Stille – das ist nötig, um die Höhe zu halten oder sich noch ein klein wenig mehr der Sonne zu nähern. Schweizer Erlebnisgeschenke.",
          "html": "<strong>Rundflug mit dem Heißluftballon · Gutschein ab 219 €</strong><br>Schweben über Wälder, Flüsse und Seen · Faszination Flug- und Ballontechnik.<br><em>Schweizer Erlebnisgeschenke</em>",
          "color": "#ebf5fb",
          "hasPin": true
        },
        {
          "code": "e",
          "title": "Hamburg ganz(s) weihnachtlich · Festliche Weihnachtsmenüs",
          "text": "Das Schönste an der Vorweihnachtszeit sind die Weihnachtsfeiern mit Freunden, Kollegen oder der ganzen Familie. Gehen Sie doch in der Weihnachtszeit einfach mal ganz(s) genüsslich essen – und ganz ohne Stress in der eigenen Küche: Mit Martini am 11. November und dann bis zum 23. Dezember servieren Ihnen 57 Restaurants weihnachtliche Menüs rund um und mit der Gans. Schon ab 22,50 € pro Person können Sie aus abwechslungsreichen Advent-Menüs wählen und stimmungsvoll feiern. Die Broschüre liegt in den teilnehmenden Restaurants sowie in den Hamburg Tourist Informationen am Hauptbahnhof aus. Wir wünschen Ihnen guten Appetit!",
          "html": "<strong>Hamburg ganz(s) weihnachtlich · 57 Restaurants</strong><br>Weihnachtliche Menüs rund um die Gans ab 22,50 € pro Person bis 23. Dezember.<br><em>Broschüre bei Hamburg Tourist Info am Hauptbahnhof</em>",
          "color": "#fef5e7",
          "hasPin": true
        },
        {
          "code": "f",
          "title": "Das goldene Kreativbuch zu Weihnachten · bücher.de",
          "text": "Zum Weihnachtsfest selbst etwas basteln! Ob allein oder mit der ganzen Familie – genießen Sie Ihr handwerkliches Geschick. Mit diesem Buch bekommen Sie schöne Inspirationen für Geschenke und auch Weihnachtsschmuck. Jetzt auf bücher.de bestellen.",
          "html": "<strong>Das goldene Kreativbuch zu Weihnachten</strong><br>Selbst Geschenke und Weihnachtsschmuck basteln in liebevoller Handarbeit.<br><em>Jetzt bestellen auf bücher.de</em>",
          "color": "#eafaf1",
          "hasPin": true
        },
        {
          "code": "g",
          "title": "Traditioneller Kinderweihnachtsmarkt · CVJM München",
          "text": "So um 15.30 Nikolaus. 2. und 3. Dezember, jeweils von 10.00 bis 18.00 Uhr im CVJM-Haus, Landwehrstraße 30: Adventskränze, Kinderbücher und -CDs, Textilien, Spielzeug, Glühwein, Weihnachtsbäckerei ... Die Restauration ist ab 11 Uhr geöffnet. Der Kindergarten ist Sa von 10–18 und So von 12–18 Uhr geöffnet. Der Erlös des Weihnachtsmarkts kommt der gemeinnützigen Arbeit des CVJM München e.V. zugute.",
          "html": "<strong>Traditioneller Kinderweihnachtsmarkt · CVJM München</strong><br>2. & 3. Dezember, 10–18 Uhr: Adventskränze, Kinderbücher, Spielzeug, Nikolausbesuch.<br><em>CVJM-Haus, Landwehrstraße 30</em>",
          "color": "#f4ecf7",
          "hasPin": false
        },
        {
          "code": "h",
          "title": "„Kinder tanzen für Kinder“ · Der Nussknacker · Deutsche Oper Berlin",
          "text": "Das Weihnachtsballett mit Musik von Pjotr I. Tschaikowskij. Wann: 25., 26., 27. November, sowie 06., 09., 18., 22. Dezember. Wo: Foyer der Deutschen Oper Berlin. Eintritt: Erwachsene 15 Euro, Kinder 8,60 Euro. Jetzt Tickets bestellen bei berlin-tickets.de oder telefonisch unter 0180-300 5894.",
          "html": "<strong>„Kinder tanzen für Kinder“ · Der Nussknacker</strong><br>Weihnachtsballett im Foyer der Deutschen Oper Berlin · Tschaikowskij.<br><em>berlin-tickets.de · Tel.: 0180-300 5894</em>",
          "color": "#fdedec",
          "hasPin": true
        },
        {
          "code": "i",
          "title": "Reclams Weihnachtsbuch · Reclam Verlag Stuttgart",
          "text": "Reclams Weihnachtsbuch. Hrsg.: Stephan Koranyi. Ill.: Jochen Koch. Der Klassiker unter den Weihnachtsbüchern. Schöne Erzählungen zum Lesen und Vorlesen, Gedichte aus allen Zeiten und vielen Ländern, die bekanntesten Lieder zum Mitsingen, eine kleine Geschichte unseres Weihnachtsfestes, alle einschlägigen Bibelstellen. Verlag: Philipp Reclam jun. Stuttgart, erhältlich im Buchhandel und unter www.reclam.de.",
          "html": "<strong>Reclams Weihnachtsbuch · Der Klassiker</strong><br>Schöne Erzählungen zum Lesen und Vorlesen, Gedichte, Weihnachtslieder und Bibelstellen.<br><em>Philipp Reclam jun. · www.reclam.de</em>",
          "color": "#e8f8f5",
          "hasPin": true
        },
        {
          "code": "j",
          "title": "Harlem Gospel Chor · Apostel-Paulus-Kirche",
          "text": "Di, 17.12. und Mi, 18.12. in der Apostel-Paulus-Kirche: Der Harlem Gospel Chor präsentiert die schönsten Spirituals und Gospels. In einer mitreißenden Bühnenshow und in andachtsvoller Atmosphäre erleben Sie ein musikalisches Fest. Reservieren Sie Ihre Platzkarte bei ticketline.de.",
          "html": "<strong>Harlem Gospel Chor · Apostel-Paulus-Kirche</strong><br>Di 17.12. & Mi 18.12.: Mitreißende Spirituals & Gospels zur Weihnachtszeit.<br><em>Reservierung bei ticketline.de</em>",
          "color": "#fbfcfc",
          "hasPin": true
        }
      ],
      "questions": [
        {
          "id": 13,
          "type": "match",
          "num": 13,
          "text": "Max' Schwester hat zwei Kinder. Sie ist sehr kreativ und macht die Weihnachtsgeschenke für ihre Kleinen und ihre Freunde am liebsten selbst in Handarbeit.",
          "answer": "f"
        },
        {
          "id": 14,
          "type": "match",
          "num": 14,
          "text": "Janas Eltern besuchen eine Tanzschule und lieben dieses neue Hobby sehr.",
          "answer": "a"
        },
        {
          "id": 15,
          "type": "match",
          "num": 15,
          "text": "Christina und Paul wollen ihrem Sohn etwas Besonderes schenken. Der Traumberuf des Zwölfjährigen ist Pilot.",
          "answer": "d"
        },
        {
          "id": 16,
          "type": "match",
          "num": 16,
          "text": "Sabine und Marei gehen gern zusammen einkaufen. Dieses Jahr möchten sie für ihre Familie neuen Weihnachtsschmuck für den Tannenbaum kaufen.",
          "answer": "0"
        },
        {
          "id": 17,
          "type": "match",
          "num": 17,
          "text": "Oskar geht jedes Jahr mit seiner Nichte in ein Weihnachtskonzert. Dieses Mal soll es aber keine klassische Weihnachtsmusik sein.",
          "answer": "j"
        },
        {
          "id": 18,
          "type": "match",
          "num": 18,
          "text": "Bernd möchte seine Frau zu einem Festessen zu zweit einladen, denn sie haben sich in der Adventszeit kennengelernt.",
          "answer": "e"
        },
        {
          "id": 19,
          "type": "match",
          "num": 19,
          "text": "Luzies Großvater geht nicht gern aus. Er sitzt am liebsten in seinem Schaukelstuhl, trinkt sein Bier und liest.",
          "answer": "i"
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "time": 15,
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für Facebook? Wählen Sie Ja oder Nein.",
      "topic": "Sollten wir Facebook nutzen? (Einfluss sozialer Medien auf das Leben)",
      "letters": [
        {
          "id": 20,
          "num": 20,
          "who": "Sebastian (42, Bern)",
          "text": "Ich beobachte, dass immer mehr meiner Bekannten momentane Unternehmungen zeitnah bei Facebook bekannt machen, z.B. durch ein Foto von dem Koffer, den man gerade für den Urlaub gepackt hat. Sie glauben, dass der Wert der Reise durch diese Bekanntmachungen steigt. Doch das führt dazu, dass sie den Urlaub selbst kaum wirklich erleben, sondern als Event für ihr Profil sehen. Facebook schafft eine falsche Realität und Wahrnehmung!",
          "answer": "Nein"
        },
        {
          "id": 21,
          "num": 21,
          "who": "Rahel (21, Klagenfurt)",
          "text": "Facebook hat von allem etwas: Kommunikation, Information, Klatsch. Es ist einfach und überschaubar. Man kann dadurch ständig gut informiert sein und das ist ja heute von großer Wichtigkeit. Menschen, die da nicht mitmachen, sind im Nachteil, weil sie alles mit Verspätung erfahren und nicht wissen, was los ist.",
          "answer": "Ja"
        },
        {
          "id": 22,
          "num": 22,
          "who": "Patrick (48, Lausanne)",
          "text": "Als Vater kann ich mir die Attraktivität von Facebook nur dadurch erklären, dass auf die Jugendlichen ein Gruppendruck ausgeübt wird. Jeder will dazugehören und macht deshalb mit. Dabei erzieht Facebook eine Generation von Menschen, die weder richtig kommunizieren noch zwischen wichtigen und unwichtigen Informationen unterscheiden können.",
          "answer": "Nein"
        },
        {
          "id": 23,
          "num": 23,
          "who": "Antonia (27, Rostock)",
          "text": "Für mich ist absolut unverständlich, dass die Menschen in sozialen Medien wie Facebook über alles Private schreiben, ohne sich Gedanken zu machen. Dabei ist doch bekannt, dass es keine richtige Absicherung der Daten gibt! Wer möchte schon, dass der neue Arbeitgeber die Fotos von der Abifeier sehen kann, auf der man zu viel getrunken hatte??",
          "answer": "Nein"
        },
        {
          "id": 24,
          "num": 24,
          "who": "Nicki (35, Krems)",
          "text": "Früher hatte man Freundebücher, heute gibt es Facebook. Es ist doch klar, dass sich die Technologie weiterentwickelt und man da mitmachen will. Das heißt noch lange nicht, dass ich jeden Tag viele Stunden am PC sitze und ständig über Facebook kommuniziere und nie in der Realität Freunde treffe. Jedenfalls möchte ich nicht altmodisch und langweilig sein, ich gehe mit der Zeit!",
          "answer": "Ja"
        },
        {
          "id": 25,
          "num": 25,
          "who": "Olivia (16, Wuppertal)",
          "text": "Wenn ich zu Hause bin, habe ich meinen i-Pad an und kann jederzeit über Facebook sehen, was meine Freundinnen machen. Für mich ist das wichtig. Meine Eltern würden mir nie erlauben, die gleiche Zeit am Telefon zu verbringen, und ich könnte auch immer nur mit einer Person sprechen. Über Facebook habe ich die ideale Lösung gefunden und kann auch von zu Hause bei und mit meinen Freundinnen sein.",
          "answer": "Ja"
        },
        {
          "id": 26,
          "num": 26,
          "who": "Giesela (44, Halle)",
          "text": "Vor längerer Zeit, als ich das erste Mal von Facebook hörte, fand ich es idiotisch, dabei mitzumachen. Dann sagten mir Freunde, dass man über Facebook auch alte Freundschaften wiederbeleben und Mitschüler von früher finden kann. Ich habe mir dann auch ein Profil eingerichtet und seitdem schon fünf Freundinnen aus der Schulzeit wieder gefunden!",
          "answer": "Ja"
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
          "heading": "Benutzungsordnung für das CORPUS FITNESS STUDIO",
          "sub": "Regeln und Sicherheitsbestimmungen",
          "body": [
            "Vor Trainingsbeginn sind Einzel- sowie Monatskarten den Trainern vorzuzeigen. Sie gelten nur am Tag der Einlösung oder Entwertung beziehungsweise innerhalb des angegebenen Gültigkeitszeitraumes. Nutzungsentgelte werden grundsätzlich nicht zurückerstattet. Auch wird für verlorene Eintrittsausweise kein Ersatz geleistet.",
            "Sämtliche Geräte und Einrichtungen sind pfleglich zu behandeln. Bei missbräuchlicher Benutzung, schuldhafter Verunreinigung oder allgemeinen Beschädigungen jeglicher Art, haftet der Verursacher für die entstandenen Schäden. Um einen reibungslosen Trainingsbetrieb zu gewährleisten, sind die Trainingsgeräte nach Beendigung der Benutzung sofort wieder frei zu machen und die Griffflächen mit Desinfektionsmittel gründlich zu reinigen.",
            "Der Trainingsbereich ist nur mit festen sauberen Sportschuhen zu benutzen. Das Training ohne jegliches Schuhwerk ist aus Sicherheits- und Hygienegründen nicht gestattet.",
            "Das Training ist in Sportkleidung durchzuführen. Die Trainingskleidung soll den Hautkontakt mit den Polstern verhindern. Es wird aus hygienischen Gründen vorausgesetzt, dass stark verschwitzte T-Shirts o.Ä. gewechselt werden.",
            "Das Training darf nur mit einem ausreichend großen Handtuch durchgeführt werden. Handtücher können am InfoCenter gemietet werden.",
            "Bitte beachten Sie, dass die Benutzung des CORPUS FITNESS STUDIO auf eigene Gefahr erfolgt. Auch haftet der Verein nicht für Wertsachen, Bargeld und Vermögensschäden. Gleiches gilt für die Zerstörung, Beschädigung und das Abhandenkommen von mitgebrachten Gegenständen.",
            "Sollten Sie mit dem Auto zu uns kommen, erfolgt die Benutzung der Stellplätze vor dem Studio auf eigene Gefahr. Der Verein haftet nicht für Sach- oder Vermögensschäden an den auf den Stellplätzen abgestellten Fahrzeugen."
          ]
        }
      ],
      "questions": [
        {
          "id": 27,
          "type": "mcq",
          "num": 27,
          "text": "Im Trainingsbereich …",
          "options": [
            "darf man auch ohne Schuhe trainieren.",
            "muss man die Griffe der Geräte nach der Benutzung sauber machen.",
            "gibt es an jedem Gerät ein großes Handtuch."
          ],
          "answer": 1
        },
        {
          "id": 28,
          "type": "mcq",
          "num": 28,
          "text": "Die Benutzer müssen …",
          "options": [
            "selbst auf ihre Sachen aufpassen.",
            "ihr Auto auf den Stellplätzen parken.",
            "nicht alle gefährlichen Trainingsgeräte benutzen."
          ],
          "answer": 0
        },
        {
          "id": 29,
          "type": "mcq",
          "num": 29,
          "text": "Vor dem Training …",
          "options": [
            "werden die Karten kontrolliert.",
            "kann der Verlust von Eintrittsausweisen gemeldet werden.",
            "geben die Trainer den Benutzern eine Monatskarte."
          ],
          "answer": 0
        },
        {
          "id": 30,
          "type": "mcq",
          "num": 30,
          "text": "Für die Sportkleidung gilt:",
          "options": [
            "Man darf nicht ohne Sportkleidung trainieren.",
            "T-Shirts muss man immer nach dem Training wechseln.",
            "Man soll keine Haut sehen können."
          ],
          "answer": 0
        }
      ]
    },
    {
      "id": 6,
      "title": "Teil 6 (Hören)",
      "badge": "Hören",
      "isHoren": true,
      "time": 35,
      "instructions": "Sie hören nun die vier Teile des Moduls Hören. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      "audioSrc": "audio/modellsatz-24-hoeren.mp3",
      "audioFallbacks": [
        "audio/modellsatz-24-hoeren.mp3"
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
          "end": 701,
          "label": "00:36 Teil 1 (Texte 1–5 · 2x)",
          "part": 1,
          "title": "Teil 1 · Fünf kurze Texte (2x hören)"
        },
        {
          "time": 701,
          "start": 701,
          "end": 972,
          "label": "11:41 Teil 2 (Mercedes-Benz-Museum · 1x)",
          "part": 2,
          "title": "Teil 2 · Mercedes-Benz-Museum Führung (1x hören)"
        },
        {
          "time": 972,
          "start": 972,
          "end": 1215,
          "label": "16:12 Teil 3 (Gespräch: Geschwister · 1x)",
          "part": 3,
          "title": "Teil 3 · Gespräch an der Haltestelle: Geschwister (1x hören)"
        },
        {
          "time": 1215,
          "start": 1215,
          "end": 1686,
          "label": "20:15 Teil 4 (Diskussion: Jugendgewalt · 1. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiodiskussion: Jugendgewalt (1. Durchgang)"
        },
        {
          "time": 1686,
          "start": 1686,
          "end": 2068,
          "label": "28:06 Teil 4 (Diskussion: Jugendgewalt · 2. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiodiskussion: Jugendgewalt (2. Durchgang)"
        }
      ],
      "horenSections": [
        {
          "id": 1,
          "title": "Teil 1: Fünf kurze Texte",
          "desc": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben.",
          "questions": [
            {
              "id": "h1",
              "type": "tf",
              "num": 1,
              "text": "In der Lebensmittelabteilung kann man etwas essen.",
              "answer": "falsch",
              "audioStart": 36,
              "teilPart": 1,
              "textNum": 1
            },
            {
              "id": "h2",
              "type": "mcq",
              "num": 2,
              "text": "Was ist heute im Angebot?",
              "options": [
                "Wurst.",
                "Gemüse.",
                "Obst."
              ],
              "answer": 2,
              "audioStart": 36,
              "teilPart": 1,
              "textNum": 1
            },
            {
              "id": "h3",
              "type": "tf",
              "num": 3,
              "text": "Es gibt Nokia-Handys im Angebot.",
              "answer": "falsch",
              "audioStart": 140,
              "teilPart": 1,
              "textNum": 2
            },
            {
              "id": "h4",
              "type": "mcq",
              "num": 4,
              "text": "Wo hat man das Mobiltelefon gefunden?",
              "options": [
                "Im Aufzug.",
                "An der Sammelkasse.",
                "Im 3. Stock."
              ],
              "answer": 2,
              "audioStart": 140,
              "teilPart": 1,
              "textNum": 2
            },
            {
              "id": "h5",
              "type": "tf",
              "num": 5,
              "text": "Sie erfahren, wie das Wetter in Deutschland wird.",
              "answer": "richtig",
              "audioStart": 296,
              "teilPart": 1,
              "textNum": 3
            },
            {
              "id": "h6",
              "type": "mcq",
              "num": 6,
              "text": "Die Temperatur in Deutschland wird höchstens …",
              "options": [
                "12° C.",
                "15° C.",
                "17° C."
              ],
              "answer": 2,
              "audioStart": 296,
              "teilPart": 1,
              "textNum": 3
            },
            {
              "id": "h7",
              "type": "tf",
              "num": 7,
              "text": "Jonas kann nicht zum Eislaufen kommen.",
              "answer": "falsch",
              "audioStart": 381,
              "teilPart": 1,
              "textNum": 4
            },
            {
              "id": "h8",
              "type": "mcq",
              "num": 8,
              "text": "Wie soll Kathrin gehen?",
              "options": [
                "Links und rechts.",
                "Geradeaus und links.",
                "Geradeaus und rechts."
              ],
              "answer": 2,
              "audioStart": 381,
              "teilPart": 1,
              "textNum": 4
            },
            {
              "id": "h9",
              "type": "tf",
              "num": 9,
              "text": "Es gibt eine Veranstaltung in Griechenland.",
              "answer": "falsch",
              "audioStart": 500,
              "teilPart": 1,
              "textNum": 5
            },
            {
              "id": "h10",
              "type": "mcq",
              "num": 10,
              "text": "Wenn es regnet, …",
              "options": [
                "findet das Konzert nicht statt.",
                "findet das Konzert an einem anderen Ort statt.",
                "findet das Konzert an einem anderen Tag statt."
              ],
              "answer": 1,
              "audioStart": 500,
              "teilPart": 1,
              "textNum": 5
            }
          ]
        },
        {
          "id": 2,
          "title": "Teil 2: Mercedes-Benz-Museum Führung",
          "desc": "Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben (11 bis 15).",
          "context": "Sie besuchen das Mercedes-Benz-Museum und bekommen einige Informationen zu Beginn der Führung.",
          "questions": [
            {
              "id": "h11",
              "type": "mcq",
              "num": 11,
              "text": "Wo werden die Autos produziert?",
              "options": [
                "In Stuttgart.",
                "In Untertürkheim.",
                "In Bremen."
              ],
              "answer": 1,
              "audioStart": 701,
              "teilPart": 2
            },
            {
              "id": "h12",
              "type": "mcq",
              "num": 12,
              "text": "Auf der Automobilführung erfährt man etwas über …",
              "options": [
                "die Geschichte der Firma.",
                "die spezielle Architektur des Museums.",
                "die Endmontage der Autos."
              ],
              "answer": 0,
              "audioStart": 701,
              "teilPart": 2
            },
            {
              "id": "h13",
              "type": "mcq",
              "num": 13,
              "text": "Wie viele Autos sind im Museum ausgestellt?",
              "options": [
                "116.",
                "120.",
                "160."
              ],
              "answer": 2,
              "audioStart": 701,
              "teilPart": 2
            },
            {
              "id": "h14",
              "type": "mcq",
              "num": 14,
              "text": "Wie viele Möglichkeiten gibt es für den Rundgang?",
              "options": [
                "Neun.",
                "Zwei.",
                "Fünf."
              ],
              "answer": 1,
              "audioStart": 701,
              "teilPart": 2
            },
            {
              "id": "h15",
              "type": "mcq",
              "num": 15,
              "text": "Bis um wie viel Uhr kann man etwas Warmes essen?",
              "options": [
                "Bis um 18.30 Uhr.",
                "Bis um 19.00 Uhr.",
                "Bis um 18.00 Uhr."
              ],
              "answer": 0,
              "audioStart": 701,
              "teilPart": 2
            }
          ]
        },
        {
          "id": 3,
          "title": "Teil 3: Gespräch an der Straßenbahnhaltestelle",
          "desc": "Sie hören ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben (16 bis 22).",
          "context": "Sie sind an einer Straßenbahnhaltestelle und hören, wie sich zwei Jugendliche über ihre Geschwister unterhalten.",
          "questions": [
            {
              "id": "h16",
              "type": "tf",
              "num": 16,
              "text": "Ben fährt zum Basketballtraining.",
              "answer": "falsch",
              "audioStart": 972,
              "teilPart": 3
            },
            {
              "id": "h17",
              "type": "tf",
              "num": 17,
              "text": "Das T-Shirt ist aus Wien.",
              "answer": "richtig",
              "audioStart": 972,
              "teilPart": 3
            },
            {
              "id": "h18",
              "type": "tf",
              "num": 18,
              "text": "Eva würde ihre Schwester gern öfter sehen.",
              "answer": "richtig",
              "audioStart": 972,
              "teilPart": 3
            },
            {
              "id": "h19",
              "type": "tf",
              "num": 19,
              "text": "Ben und sein Bruder verstehen sich gut.",
              "answer": "falsch",
              "audioStart": 972,
              "teilPart": 3
            },
            {
              "id": "h20",
              "type": "tf",
              "num": 20,
              "text": "Ben muss morgens um halb sechs aufstehen.",
              "answer": "falsch",
              "audioStart": 972,
              "teilPart": 3
            },
            {
              "id": "h21",
              "type": "tf",
              "num": 21,
              "text": "Bens Bruder findet eigentlich Autos interessanter als Motorräder.",
              "answer": "falsch",
              "audioStart": 972,
              "teilPart": 3
            },
            {
              "id": "h22",
              "type": "tf",
              "num": 22,
              "text": "Als Lehrling verdient Bens Bruder nicht viel Geld.",
              "answer": "richtig",
              "audioStart": 972,
              "teilPart": 3
            }
          ]
        },
        {
          "id": 4,
          "title": "Teil 4: Radiodiskussion über Jugendgewalt",
          "desc": "Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben (23 bis 30). Ordnen Sie die Aussagen zu: Wer sagt was?",
          "context": "Der Moderator der Radiosendung „All dä Guuggär“ diskutiert mit Frau Gerber, Mutter von zwei pubertierenden Kindern, und Frau Steiner, Direktorin einer internationalen Sekundarschule, über das Thema „Jugendgewalt“.",
          "questions": [
            {
              "id": "h23",
              "type": "speaker",
              "num": 23,
              "text": "In der Schule hat Gewalt zugenommen.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 1,
              "audioStart": 1215,
              "teilPart": 4
            },
            {
              "id": "h24",
              "type": "speaker",
              "num": 24,
              "text": "Fehlende Kontrolle von der Familie kann zu Gewalt führen.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 1,
              "audioStart": 1215,
              "teilPart": 4
            },
            {
              "id": "h25",
              "type": "speaker",
              "num": 25,
              "text": "Ausländerkinder machen Probleme.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 2,
              "audioStart": 1215,
              "teilPart": 4
            },
            {
              "id": "h26",
              "type": "speaker",
              "num": 26,
              "text": "Durch die richtige Erziehung kann man mehr erreichen als durch Gesetze.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 1,
              "audioStart": 1215,
              "teilPart": 4
            },
            {
              "id": "h27",
              "type": "speaker",
              "num": 27,
              "text": "Sport kann sicher gegen Gewalt helfen.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 2,
              "audioStart": 1215,
              "teilPart": 4
            },
            {
              "id": "h28",
              "type": "speaker",
              "num": 28,
              "text": "Das Gesetz unterscheidet zwischen verschiedenen alkoholischen Getränken.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 0,
              "audioStart": 1215,
              "teilPart": 4
            },
            {
              "id": "h29",
              "type": "speaker",
              "num": 29,
              "text": "Durch ein Verbot kann etwas noch attraktiver werden.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 1,
              "audioStart": 1215,
              "teilPart": 4
            },
            {
              "id": "h30",
              "type": "speaker",
              "num": 30,
              "text": "In der Schule sollten Kinder lernen, mit Konflikten umzugehen.",
              "options": [
                "Moderator",
                "Frau Steiner",
                "Frau Gerber"
              ],
              "answer": 2,
              "audioStart": 1215,
              "teilPart": 4
            }
          ]
        }
      ],
      "questions": [
        { "id": "h1", "type": "tf", "num": 1, "text": "In der Lebensmittelabteilung kann man etwas essen.", "answer": "falsch", "audioStart": 36, "teilPart": 1, "textNum": 1 },
        { "id": "h2", "type": "mcq", "num": 2, "text": "Was ist heute im Angebot?", "options": ["Wurst.", "Gemüse.", "Obst."], "answer": 2, "audioStart": 36, "teilPart": 1, "textNum": 1 },
        { "id": "h3", "type": "tf", "num": 3, "text": "Es gibt Nokia-Handys im Angebot.", "answer": "falsch", "audioStart": 140, "teilPart": 1, "textNum": 2 },
        { "id": "h4", "type": "mcq", "num": 4, "text": "Wo hat man das Mobiltelefon gefunden?", "options": ["Im Aufzug.", "An der Sammelkasse.", "Im 3. Stock."], "answer": 2, "audioStart": 140, "teilPart": 1, "textNum": 2 },
        { "id": "h5", "type": "tf", "num": 5, "text": "Sie erfahren, wie das Wetter in Deutschland wird.", "answer": "richtig", "audioStart": 296, "teilPart": 1, "textNum": 3 },
        { "id": "h6", "type": "mcq", "num": 6, "text": "Die Temperatur in Deutschland wird höchstens …", "options": ["12° C.", "15° C.", "17° C."], "answer": 2, "audioStart": 296, "teilPart": 1, "textNum": 3 },
        { "id": "h7", "type": "tf", "num": 7, "text": "Jonas kann nicht zum Eislaufen kommen.", "answer": "falsch", "audioStart": 381, "teilPart": 1, "textNum": 4 },
        { "id": "h8", "type": "mcq", "num": 8, "text": "Wie soll Kathrin gehen?", "options": ["Links und rechts.", "Geradeaus und links.", "Geradeaus und rechts."], "answer": 2, "audioStart": 381, "teilPart": 1, "textNum": 4 },
        { "id": "h9", "type": "tf", "num": 9, "text": "Es gibt eine Veranstaltung in Griechenland.", "answer": "falsch", "audioStart": 500, "teilPart": 1, "textNum": 5 },
        { "id": "h10", "type": "mcq", "num": 10, "text": "Wenn es regnet, …", "options": ["findet das Konzert nicht statt.", "findet das Konzert an einem anderen Ort statt.", "findet das Konzert an einem anderen Tag statt."], "answer": 1, "audioStart": 500, "teilPart": 1, "textNum": 5 },
        { "id": "h11", "type": "mcq", "num": 11, "text": "Wo werden die Autos produziert?", "options": ["In Stuttgart.", "In Untertürkheim.", "In Bremen."], "answer": 1, "audioStart": 701, "teilPart": 2 },
        { "id": "h12", "type": "mcq", "num": 12, "text": "Auf der Automobilführung erfährt man etwas über …", "options": ["die Geschichte der Firma.", "die spezielle Architektur des Museums.", "die Endmontage der Autos."], "answer": 0, "audioStart": 701, "teilPart": 2 },
        { "id": "h13", "type": "mcq", "num": 13, "text": "Wie viele Autos sind im Museum ausgestellt?", "options": ["116.", "120.", "160."], "answer": 2, "audioStart": 701, "teilPart": 2 },
        { "id": "h14", "type": "mcq", "num": 14, "text": "Wie viele Möglichkeiten gibt es für den Rundgang?", "options": ["Neun.", "Zwei.", "Fünf."], "answer": 1, "audioStart": 701, "teilPart": 2 },
        { "id": "h15", "type": "mcq", "num": 15, "text": "Bis um wie viel Uhr kann man etwas Warmes essen?", "options": ["Bis um 18.30 Uhr.", "Bis um 19.00 Uhr.", "Bis um 18.00 Uhr."], "answer": 0, "audioStart": 701, "teilPart": 2 },
        { "id": "h16", "type": "tf", "num": 16, "text": "Ben fährt zum Basketballtraining.", "answer": "falsch", "audioStart": 972, "teilPart": 3 },
        { "id": "h17", "type": "tf", "num": 17, "text": "Das T-Shirt ist aus Wien.", "answer": "richtig", "audioStart": 972, "teilPart": 3 },
        { "id": "h18", "type": "tf", "num": 18, "text": "Eva würde ihre Schwester gern öfter sehen.", "answer": "richtig", "audioStart": 972, "teilPart": 3 },
        { "id": "h19", "type": "tf", "num": 19, "text": "Ben und sein Bruder verstehen sich gut.", "answer": "falsch", "audioStart": 972, "teilPart": 3 },
        { "id": "h20", "type": "tf", "num": 20, "text": "Ben muss morgens um halb sechs aufstehen.", "answer": "falsch", "audioStart": 972, "teilPart": 3 },
        { "id": "h21", "type": "tf", "num": 21, "text": "Bens Bruder findet eigentlich Autos interessanter als Motorräder.", "answer": "falsch", "audioStart": 972, "teilPart": 3 },
        { "id": "h22", "type": "tf", "num": 22, "text": "Als Lehrling verdient Bens Bruder nicht viel Geld.", "answer": "richtig", "audioStart": 972, "teilPart": 3 },
        { "id": "h23", "type": "speaker", "num": 23, "text": "In der Schule hat Gewalt zugenommen.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 1, "audioStart": 1215, "teilPart": 4 },
        { "id": "h24", "type": "speaker", "num": 24, "text": "Fehlende Kontrolle von der Familie kann zu Gewalt führen.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 1, "audioStart": 1215, "teilPart": 4 },
        { "id": "h25", "type": "speaker", "num": 25, "text": "Ausländerkinder machen Probleme.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 2, "audioStart": 1215, "teilPart": 4 },
        { "id": "h26", "type": "speaker", "num": 26, "text": "Durch die richtige Erziehung kann man mehr erreichen als durch Gesetze.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 1, "audioStart": 1215, "teilPart": 4 },
        { "id": "h27", "type": "speaker", "num": 27, "text": "Sport kann sicher gegen Gewalt helfen.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 2, "audioStart": 1215, "teilPart": 4 },
        { "id": "h28", "type": "speaker", "num": 28, "text": "Das Gesetz unterscheidet zwischen verschiedenen alkoholischen Getränken.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 0, "audioStart": 1215, "teilPart": 4 },
        { "id": "h29", "type": "speaker", "num": 29, "text": "Durch ein Verbot kann etwas noch attraktiver werden.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 1, "audioStart": 1215, "teilPart": 4 },
        { "id": "h30", "type": "speaker", "num": 30, "text": "In der Schule sollten Kinder lernen, mit Konflikten umzugehen.", "options": ["Moderator", "Frau Steiner", "Frau Gerber"], "answer": 2, "audioStart": 1215, "teilPart": 4 }
      ]
    }
  ]
}
