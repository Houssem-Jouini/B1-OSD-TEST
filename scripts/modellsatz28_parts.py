#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Parts structure for data/tests/modellsatz-28.json
Modelltest 22 — Hueber Zertifikat B1 (Source: OSD JUIL/14)
"""

test_data = {
  "id": "modellsatz-28",
  "title": "Modelltest 22 — Hueber Zertifikat B1",
  "badge": "Modelltest 22",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 22",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 22 (Hueber)",
  "timeTotal": 65,
  "partsCount": 6,
  "questionsCount": 50,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "badge": "Teil 1",
      "time": "10 Minuten",
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
      "article": {
        "title": "Meine Erlebnisse",
        "date": "25. September",
        "author": "Nicole",
        "body": [
          "Letzten August war ich zu Besuch bei meinem Onkel in Michelstadt. Michelstadt ist ein kleines, mittelalterliches Städtchen im Odenwald. Es ist sehr malerisch und … da ist meistens nicht viel los. Hinzu kam, dass der letzte Sommer ziemlich verregnet war. Die meiste Zeit verbrachte ich mit Stubenhocken. Nicht gerade anregend!!",
          "Doch an einem Samstag schlug meine Tante vor, dass wir abends zum Michelstädter Altstadtfest gehen. Ich machte mir zwar keine große Hoffnung auf gute Unterhaltung, aber da ich nichts Besseres zu tun hatte und das Wetter ausnahmsweise gut war, stimmte ich zu.",
          "Das Fest fand im Zentrum statt, das für den Verkehr gesperrt war. Wir konnten also nicht mit dem Auto in die Innenstadt fahren und mussten zu Fuß gehen. Unterwegs erlebte ich schon die erste Überraschung. Die Geschäfte waren alle auf, Straßen und Gassen waren mit Kerzen erleuchtet. Es war „lange Einkaufsnacht“. Wir bummelten durch die Straßen, sahen uns die Attraktionen an, die der Gewerbeverein organisiert hatte, und ließen uns ein-zwei Schnäppchen nicht entgehen.",
          "Schließlich kamen wir auf den Hof der Michelstädter Burg-Kellerei, den Ort, wo das Herz des Altstadtfests schlug. Hier waren Tische und Bänke aufgestellt, an denen schon viele Leute saßen. Man grüßte sich, saß beisammen, amüsierte sich … eine tolle Stimmung. Für das leibliche Wohl war bestens gesorgt: Bratwurst, Currywurst, Pommes, Erbsensuppe mit Bockwurst – und natürlich Bier von der heimischen Brauerei. Und ab 21.00 Uhr spielte eine Rock-’n’-Roll-Band live. In Michelstadt war wirklich was los.",
          "Doch das war nicht alles. Meine Tante drängte uns. Wir sollten weiter zum „Schwiegermutterbrunnen“, denn da gab eine Gruppe, die Art Artistica, eine Show. Eigentlich wollte ich nicht weg, weil die Musikband super spielte. Aber sie bestand so sehr darauf, dass wir nachgaben. Und sie hatte recht.",
          "Die Artistengruppe bot eine Show mit Feuer-Acts. Es war sehr eindrucksvoll. In der sommerlichen Nacht sah man die Artisten ihre Kunststücke vorführen und man hörte nur das Knistern und Zischen des Feuers. Es war ein einmaliges Schauspiel.",
          "Zu Fuß kehrten wir in der mondhellen Nacht langsam nach Hause zurück. Ich werde dieses Fest nie vergessen und kann nur jedem empfehlen: Auch Michelstadt im Odenwald ist eine Reise wert (besonders im August!!)\n\nEure Nicole"
        ]
      },
      "example": {
        "text": "In Michelstadt kann man oft etwas erleben.",
        "answer": "Falsch"
      },
      "questions": [
        {
          "id": "1",
          "type": "tf",
          "text": "Auf dem Fest konnte man sich trotz des schlechten Wetters gut unterhalten.",
          "answer": "Falsch"
        },
        {
          "id": "2",
          "type": "tf",
          "text": "Im Stadtzentrum durften während des Fests keine Privatwagen fahren.",
          "answer": "Richtig"
        },
        {
          "id": "3",
          "type": "tf",
          "text": "In der „langen Einkaufsnacht“ waren nur wenige Läden geschlossen.",
          "answer": "Falsch"
        },
        {
          "id": "4",
          "type": "tf",
          "text": "Die Speisen bot die heimische Brauerei umsonst an.",
          "answer": "Falsch"
        },
        {
          "id": "5",
          "type": "tf",
          "text": "Die Artisten zeigten ihre Feuer-Show zu lauter Musik.",
          "answer": "Falsch"
        },
        {
          "id": "6",
          "type": "tf",
          "text": "Nicole meint, es lohnt sich, Michelstadt zu besuchen.",
          "answer": "Richtig"
        }
      ]
    },
    {
      "id": 2,
      "title": "Teil 2",
      "badge": "Teil 2",
      "time": "20 Minuten",
      "instructions": "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "instructions2": "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles": [
        {
          "heading": "Die Alten wollen kein Internet",
          "title": "Die Alten wollen kein Internet",
          "source": "aus einer Schweizer Zeitung",
          "body": [
            "Trotz des gern verbreiteten Bildes vom munter surfenden Senior sind es die Haushalte älterer Bürger, die zu einer stillstehenden Statistik der Online-Haushalte in der Schweiz führen: Laut Bundesamt für Statistik wollen diese 20 Prozent partout nicht online gehen. Damit liegt die Schweiz hinter den skandinavischen Ländern und den Niederlanden, wo insgesamt mehr private Haushalte Internet haben als bei uns.",
            "Dafür gibt es verschiedene Gründe. Bei einer Befragung wurden mangelndes Interesse, wenig Fachkenntnis oder kein Selbstvertrauen von den älteren Menschen angegeben. Fachleute nehmen auch an, dass den Senioren der spielerische Kontakt zum Internet fehlt. Sie sind einfach nicht damit aufgewachsen und zögern, die neuen Medien jetzt noch kennenzulernen.",
            "Aber in der Befragung zeigte sich auch, dass jüngere Internetbenutzer in der Schweiz sich über verschiedene Gefahren Sorgen machen. Im Vordergrund steht hier die Angst vor Viren, gefolgt von der Furcht davor, dass persönliche Informationen in falsche Hände kommen, die Angst, dass über das Internet ihre Kreditkarten von Kriminellen benutzt werden, oder vor Risiken im Zusammenhang mit Kindern. Allerdings greifen die Schweizer Online-Nutzer auch zu Schutzmassnahmen. 80 Prozent von ihnen haben eine Sicherheitssoftware, aber nur 30 Prozent der Haushalte mit Kindern nutzen ein Kinderschutzprogramm für ihren Computer."
          ]
        }
      ],
      "example": {
        "text": "In der Schweiz ...",
        "options": [
          "haben 80 Prozent der Haushalte Internet.",
          "haben nur wenige Internetnutzer Schutzprogramme gegen Viren.",
          "surfen ältere Menschen gern im Internet."
        ],
        "answer": 0
      },
      "questions": [
        {
          "id": "7",
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "dass die Schweizer im Internet vor allem spielen.",
            "wie sich die Zahl der Online-Haushalte in der Schweiz entwickelt.",
            "warum Kinder vor dem Internet geschützt werden müssen."
          ],
          "answer": 1
        },
        {
          "id": "8",
          "type": "mcq",
          "text": "Senioren ...",
          "options": [
            "haben selten Computerkenntnisse.",
            "benutzen Schutzprogramme für ihre Computer.",
            "haben Angst vor Computerviren."
          ],
          "answer": 0
        },
        {
          "id": "9",
          "type": "mcq",
          "text": "In den Niederlanden ...",
          "options": [
            "gibt es die gleichen Probleme mit dem Internet wie in der Schweiz.",
            "haben mehr Haushalte Internet als in der Schweiz.",
            "spielen ältere Leute viel im Internet."
          ],
          "answer": 1
        }
      ],
      "articles2": [
        {
          "heading": "Essen als Medizin",
          "title": "Essen als Medizin",
          "source": "aus einer deutschen Zeitschrift",
          "body": [
            "Stark im Trend liegt zurzeit Functional-Food. Das ist Essen, das nicht nur satt macht, sondern auch für die Gesundheit sorgt. Dazu gehören beispielsweise cholesterinsenkende Drinks, mit Omega-3-Fettsäuren versetzte Margarine oder auch Fertiggerichte mit Vitaminzusätzen. Bei Functional-Food geht es um Wohlbefinden, Leistungsfähigkeit und um den Schutz vor Zivilisationskrankheiten.",
            "Vor allem Menschen ab vierzig greifen gern zu Functional-Food. Es soll das Leben verlängern und jung halten. Und es entspricht einem allgemeinen Trend in der Bevölkerung: Gesundheit ist für viele Menschen zum höchsten Gut geworden. Ein Drittel der Deutschen nimmt täglich Nahrungsergänzungsmittel wie Vitamin- und Mineralstofftabletten ein.",
            "Viele möchten mit Functional-Food Krankheiten vorbeugen oder reparieren, ohne auf Genuss zu verzichten. Auf diesen Wunsch setzt die Werbung, um den Verkauf solcher Produkte zu erhöhen. Sie betont in ihren Anzeigen und Werbespots, dass Functional-Food sowohl gut schmeckt, als auch der Gesundheit nützt. Ob Functional-Food aber wirklich hält, was es verspricht, ist wissenschaftlich umstritten. Viele Ernährungswissenschaftler meinen, dass eine ausgewogene Ernährung mit viel Obst und Gemüse völlig ausreicht und Functional-Food überflüssig ist."
          ]
        }
      ],
      "questions2": [
        {
          "id": "10",
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "welche Krankheiten Functional-Food heilen kann.",
            "warum immer mehr Menschen an Zivilisationskrankheiten leiden.",
            "warum Functional-Food beliebt ist."
          ],
          "answer": 2
        },
        {
          "id": "11",
          "type": "mcq",
          "text": "Die Gesundheit ...",
          "options": [
            "interessiert nur sehr wenige Menschen.",
            "ist für immer mehr Menschen das Wichtigste.",
            "zwingt manche Personen, Functional-Food zu essen."
          ],
          "answer": 1
        },
        {
          "id": "12",
          "type": "mcq",
          "text": "Functional-Food ...",
          "options": [
            "ist in.",
            "ist nicht wirklich gesund.",
            "wird in Deutschland ohne jede Werbung verkauft."
          ],
          "answer": 0
        }
      ]
    },
    {
      "id": 3,
      "title": "Teil 3",
      "badge": "Teil 3",
      "time": "10 Minuten",
      "instructions": "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
      "intro": "Einige Personen aus Ihrem Bekanntenkreis interessieren sich besonders für die Probleme unserer Zeit und möchten aktiv Hilfe leisten. Sie suchen nach passenden Möglichkeiten.",
      "adsFormatted": [
        {
          "code": "A",
          "title": "Helfende Hände herzlich willkommen",
          "text": "Sie können gut vorlesen oder spielen gerne mit Kindern? Sie wollen Ihre Erfahrung aus dem Beruf an einen Schüler weitergeben? Dann sind Sie unser Typ: Bringen Sie Ihre Talente ein in das Angebot der Caritas. Viele alte und junge, kranke und behinderte Menschen freuen sich auf die Zeit, die Sie ihnen schenken. Informieren Sie sich unter www.caritas.de"
        },
        {
          "code": "B",
          "title": "Ärzte ohne Grenzen e.V.",
          "text": "Am Köllnischen Park 1, 10179 Berlin · www.aerzte-ohne-grenzen.de · Spendenkonto 97 0 97, Bank für Sozialwirtschaft, BLZ 370 205 00. Helfen Sie medizinischen Nothilfeteams weltweit bei Krisen und Katastrophen."
        },
        {
          "code": "C",
          "title": "Du bist gerne in der Natur und möchtest dich für ihren Schutz einsetzen?",
          "text": "Dann bist du bei der NAJU genau richtig! Werde zusammen mit 75.000 anderen Kindern und Jugendlichen aktiv für die Natur! www.NAJU.de. Die Naturschutzjugend (NAJU) ist die Jugendorganisation des NABU und deutschlandweit der größte Kinder- und Jugendverband im Natur- und Umweltschutz. NAJU im NABU, Charitéstraße 3, 10117 Berlin."
        },
        {
          "code": "D",
          "title": "Deutsches Rotes Kreuz",
          "text": "Bitte daran denken: Altkleidersammlung im Auftrag des DRK – alle vier Wochen zusammen mit der blauen Tonne. Geben Sie gut erhaltene Kleidung für Bedürftige ab."
        },
        {
          "code": "E",
          "title": "Kommen Sie doch einfach mal vorbei!",
          "text": "Bürgerinitiative Ausländische Mitbürgerinnen e.V. Wir engagieren uns für Dialog, Integration und das friedliche Zusammenleben von Einheimischen und Migranten in unserem Stadtteil. Treffen jeden Dienstag um 18.00 Uhr."
        },
        {
          "code": "F",
          "title": "Verschenken Sie eine Mitgliedschaft im NABU!",
          "text": "... und gleichzeitig damit etwas Gutes für den Erhalt und Schutz unserer Natur und Umwelt tun? Ihr Geschenk soll sinnstiftend und etwas „anders“ als andere Geschenke sein? Dann verschenken Sie doch eine Mitgliedschaft im NABU! Der Beschenkte wird sich freuen. Für weitere Informationen klicken Sie hier: www.nabu.de"
        },
        {
          "code": "G",
          "title": "Häusliche Pflege",
          "text": "Brauchen Sie Hilfe bei Ihrer Körperpflege und ärztlich verordnete Behandlungen? An 7 Tagen in der Woche bieten unsere Pfleger und Sozialarbeiter unseren Kunden Hilfe in jeglicher Hinsicht. Petersstraße 50, 41717 Viersen, Telefon 0 2162/1 76 78."
        },
        {
          "code": "H",
          "title": "Ihr Baby ist uns nicht schnuppe!",
          "text": "Deshalb gibt's für junge Familien unsere Schnuppermitgliedschaft. Ein Jahr kostenlos. Wenn Sie uns diese Anzeige schicken, erfahren Sie mehr und bekommen gratis Umwelttipps für Eltern. Bund für Umwelt und Naturschutz Deutschland (BUND), 53333 Bonn, Fax 02 28 / 300 79 40."
        },
        {
          "code": "I",
          "title": "KEKS e.V. — www.keks.org",
          "text": "Sommerrainstr. 61, 70347 Stuttgart, Tel. 07 11 / 9 65 78 68. Wenn jeder Bissen im Hals stecken bleibt … Wir helfen und unterstützen bundesweit Kinder, die wegen einer kranken Speiseröhre nicht essen können. Spendenkonto: Baden-Württembergische Bank, BLZ 600 507 00, Kto.-Nr. 1230450."
        },
        {
          "code": "J",
          "title": "Nachbarschaftshilfe",
          "text": "Schreiben Sie uns unter Kennwort: „Nachbarschaftshilfe“, Postfach 712007, 81475 München. Postkarte genügt. Absender nicht vergessen. Ehrenamtliche Hilfe im Alltag für Senioren und Familien."
        }
      ],
      "example": {
        "text": "Annita hat zwei Mäntel, die ihr nicht mehr passen. Sie sind in gutem Zustand, deshalb möchte sie sie nicht wegwerfen.",
        "answer": "d"
      },
      "questions": [
        {
          "id": "13",
          "type": "match",
          "text": "Frau Wickert hat ein Herz für Kinder. Sie möchte eine Geldsumme für eine Organisation geben, die sich besonders um Kinder in Deutschland kümmert.",
          "answer": "i"
        },
        {
          "id": "14",
          "type": "match",
          "text": "Herr Geiger ist Biologielehrer. Er will das Interesse seiner Schüler für die Natur und ihren Schutz wecken.",
          "answer": "c"
        },
        {
          "id": "15",
          "type": "match",
          "text": "Tobias ist ein Tier- und Naturfreund. Weil er in zwei Wochen Geburtstag hat, sucht sein Freund Lukas nach einem Geschenk.",
          "answer": "f"
        },
        {
          "id": "16",
          "type": "match",
          "text": "Sara hat viele ausländische Freunde in der Nachbarschaft und möchte aktiv für das friedliche Zusammenleben von Menschen aus verschiedenen Ländern arbeiten.",
          "answer": "e"
        },
        {
          "id": "17",
          "type": "match",
          "text": "Frau Anders will etwas für junge Familien tun, die arm sind.",
          "answer": "0"
        },
        {
          "id": "18",
          "type": "match",
          "text": "Philipp ist Krankenpfleger. Er würde sein Wissen gern für die Hilfe behinderter Menschen einsetzen.",
          "answer": "a"
        },
        {
          "id": "19",
          "type": "match",
          "text": "Gabriel ist vor ein paar Monaten Vater geworden. Er und seine Frau interessieren sich für den Umweltschutz und möchten auch ihr Kind dazu erziehen.",
          "answer": "h"
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "badge": "Teil 4",
      "time": "15 Minuten",
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
      "intro": "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über Frühstudenten, die schon vor dem Schulabschluss studieren, obwohl sie noch nicht erwachsen sind.",
      "topic": "Sollen Schüler unter 18 Jahren schon an der Universität studieren dürfen?",
      "example": {
        "author": "Andrea, 22, Germersheim",
        "text": "Die einen müssen Wartesemester in Kauf nehmen, um einen Studienplatz zu bekommen und werden älter und älter. Die anderen hingegen werden besser behandelt: Sie dürfen schon als Schüler studieren. Wie unfair. Das erscheint mir eine verkehrte Welt zu sein.",
        "answer": "Nein"
      },
      "letters": [
        {
          "id": "20",
          "author": "Petra, 27, Koblenz",
          "text": "Da gibt es grundsätzlich ein Problem: Die Universitäten sind auf einmal verantwortlich für Minderjährige! Stellt die Uni dann „Aufpasser“ ein, die immer bei diesen Jugendlichen sind und auf sie aufpassen? Das ist doch verrückt! Ein Glück, dass ich eben jene Universität vor Kurzem verlassen habe. Und wie würde das denn vom Recht her geregelt werden? Kommt mir alles sehr utopisch vor."
        },
        {
          "id": "21",
          "author": "Willi, 17, Stuttgart",
          "text": "Selbst den Bibliotheksausweis kann ich als Student unter 18 nicht einfach so beantragen. Ich brauche die Unterschrift meiner Mutter oder meines Vaters. Besonders umständlich ist auch, dass ich mich nicht über das Online-System der Uni für Prüfungen anmelden kann. Stattdessen muss ich persönlich bei der Professorin vorbeigehen. Trotzdem lohnt es sich."
        },
        {
          "id": "22",
          "author": "Torsten, 58, Innsbruck",
          "text": "Die wichtigsten Erfahrungen macht man doch in der Praxis. Viel richtiger wäre, dass alle jungen Leute in ihrem Leben etwas Konkretes lernen, auch bevor sie studieren. Die Praxis wird sie im Leben weiterbringen, nicht die Theorie. Egal wie alt sie sind. Es bringt nichts, dass sie nur studieren. Dieses Programm ist diesem Gedanken ganz entgegengesetzt."
        },
        {
          "id": "23",
          "author": "Chiara, 30, Klosters",
          "text": "Bei uns gibt es das noch nicht. Ich kann mir aber vorstellen, dass es besonders für begabte Schüler ein gutes Angebot ist. Diese jungen Leute werden in der Schule sowieso unterfordert und müssen sich kaum anstrengen. Dabei brauchen sie eine Herausforderung, um viel zu leisten. Unsere Gesellschaft braucht diese Menschen. Warum dann bis zur Matura mit dem Studium warten?"
        },
        {
          "id": "24",
          "author": "Reiner, 22, Kitzbühel",
          "text": "Mit 16 oder 17 sind die Jugendlichen ja noch in der Pubertät. Die interessieren sich doch nur dafür, wie sie aussehen und ob sie cool sind. In dem Alter ist man doch noch gar nicht reif für ein Studium. Ich kann nicht glauben, dass so junge Menschen schon ernsthaft dabei sind. Nicht umsonst sollte man dafür erwachsen sein."
        },
        {
          "id": "25",
          "author": "Helen, 45, Braunschweig",
          "text": "Bei mir ist das Studium schon länger her. Ich kann nur sagen, es war eine schöne Zeit, auch weil man intensiv mit anderen zusammenarbeitete, die ähnliche Interessen hatten. Das motiviert und erweitert den eigenen Horizont. Wenn diese Erfahrung nun schon zeitlich früher im Leben gemacht wird, umso besser."
        },
        {
          "id": "26",
          "author": "Ferdinand, 16, Andermatt",
          "text": "Hier in der Nähe gibt es das nicht. Scheint mir aber wert zu sein, es mal zu testen. Ich weiss nur nicht, wie man dann nebenbei noch die Verpflichtungen des Gymnasiums zeitlich schafft. Oder bekommen diese Schüler schulfrei? Bei uns ist jedenfalls neben den Schulstunden nicht mehr viel Zeit für anderes."
        }
      ],
      "questions": [
        {
          "id": "20",
          "type": "opinion",
          "author": "Petra",
          "text": "Ist Petra dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
          "answer": "Nein"
        },
        {
          "id": "21",
          "type": "opinion",
          "author": "Willi",
          "text": "Ist Willi dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
          "answer": "Ja"
        },
        {
          "id": "22",
          "type": "opinion",
          "author": "Torsten",
          "text": "Ist Torsten dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
          "answer": "Nein"
        },
        {
          "id": "23",
          "type": "opinion",
          "author": "Chiara",
          "text": "Ist Chiara dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
          "answer": "Ja"
        },
        {
          "id": "24",
          "type": "opinion",
          "author": "Reiner",
          "text": "Ist Reiner dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
          "answer": "Nein"
        },
        {
          "id": "25",
          "type": "opinion",
          "author": "Helen",
          "text": "Ist Helen dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
          "answer": "Ja"
        },
        {
          "id": "26",
          "type": "opinion",
          "author": "Ferdinand",
          "text": "Ist Ferdinand dafür, dass Schüler unter 18 Jahren schon studieren dürfen?",
          "answer": "Ja"
        }
      ]
    },
    {
      "id": 5,
      "title": "Teil 5",
      "badge": "Teil 5",
      "time": "10 Minuten",
      "instructions": "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "intro": "Sie informieren sich über die Benutzungsordnung der Pestalozzi-Bibliothek Zürich, da Sie bald für einige Zeit in Zürich leben werden.",
      "article": {
        "title": "Pestalozzi-Bibliothek Zürich (PBZ) — Benutzungsordnung",
        "sections": [
          {
            "heading": "Einschreibung",
            "text": "Die Bibliotheken der Pestalozzi-Bibliothek Zürich (PBZ) stehen allen Interessierten zur Benutzung offen. Gegen Vorlage eines amtlichen Ausweises wird eine persönliche Bibliothekskarte ausgestellt, die bei jeder Ausleihe mitzubringen ist. Die Bibliothekskarte ist nicht übertragbar, auch nicht innerhalb der Familie oder des Haushalts. Bei Personen ohne dauerhaften Wohnsitz in der Schweiz kann die Ausleihe eingeschränkt werden. Adress- und Namensänderungen sowie der Verlust der Bibliothekskarte sind umgehend zu melden. Ein Ersatzausweis kann gegen eine Gebühr bezogen werden."
          },
          {
            "heading": "Benutzung",
            "text": "Es können maximal 25 Artikel (Bücher, Zeitschriften, CDs oder DVDs) gleichzeitig ausgeliehen werden. Die Ausleihdauer beträgt in der Regel 4 Wochen. Für bestimmte Artikel (wie beispielsweise DVDs) kann die Bibliothek abweichende Leihfristen festlegen. Eine zweimalige Verlängerung ist möglich. Ausgenommen sind reservierte Artikel. Die Verlängerung kann in der Bibliothek, telefonisch oder online via Internet erfolgen. Ausgeliehene Artikel können reserviert werden. Sobald die reservierten Artikel bereitstehen, wird dies telefonisch oder per SMS mitgeteilt. Die Artikel sind dann innerhalb einer Woche abzuholen. Für Reservationen wird eine Gebühr erhoben. Ebenso können gegen Gebühr Artikel, die nicht im lokalen Bestand vorhanden sind, bei einer anderen Bibliothek der PBZ zur Ausleihe besorgt werden, mit Ausnahme von DVDs."
          },
          {
            "heading": "Haftung",
            "text": "Kundinnen und Kunden sind für die ausgeliehenen Artikel verantwortlich und zu schonendem Umgang mit dem Bibliothekseigentum verpflichtet. Bei Beschädigung oder Verlust werden neben den Kosten für Reparatur oder Ersatz auch Bearbeitungsgebühren verrechnet. Schäden dürfen nicht selbst repariert werden. Wer die Bestimmungen der Bibliothek nicht beachtet oder sich ungebührlich verhält, kann vorübergehend oder gänzlich von der Benutzung ausgeschlossen werden."
          }
        ]
      },
      "questions": [
        {
          "id": "27",
          "type": "mcq",
          "text": "Wenn man etwas reservieren lässt, ...",
          "options": [
            "muss man die Artikel eine Woche nach Reservierung abholen.",
            "muss man die Artikel bei einer anderen Bibliothek der PBZ abholen.",
            "muss man dafür einen Geldbetrag zahlen."
          ],
          "answer": 2
        },
        {
          "id": "28",
          "type": "mcq",
          "text": "Bei Nichtbeachtung der Bibliotheksbestimmungen ...",
          "options": [
            "muss man eine Strafgebühr zahlen.",
            "kann es sein, dass man die PBZ nicht mehr benutzen darf.",
            "muss man sofort alle ausgeliehenen Artikel zurückgeben."
          ],
          "answer": 1
        },
        {
          "id": "29",
          "type": "mcq",
          "text": "Man kann ...",
          "options": [
            "auch DVDs reservieren lassen.",
            "einmal im Monat bis zu 25 Artikeln ausleihen.",
            "auch reservierte Artikel verlängern lassen."
          ],
          "answer": 0
        },
        {
          "id": "30",
          "type": "mcq",
          "text": "Um die PBZ benutzen zu können, ...",
          "options": [
            "muss man in Zürich wohnen.",
            "muss man jedes Mal die Bibliothekskarte bei sich haben.",
            "braucht man eine Bibliothekskarte pro Familie oder Haushalt."
          ],
          "answer": 1
        }
      ]
    },
    {
      "id": 6,
      "title": "Hören",
      "badge": "Hören",
      "isHoren": True,
      "time": "40 Minuten",
      "instructions": "Das Modul Hören besteht aus vier Teilen. Sie hören jeden Text ein- oder zweimal. Lösen Sie die Aufgaben und markieren Sie Ihre Lösungen auf dem Antwortbogen.",
      "audioSrc": "audio/modellsatz-28-hoeren.mp3",
      "audioFallbacks": [
        "audio/modellsatz-28-hoeren.mp3"
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
          "end": 804,
          "label": "00:36 Teil 1 (Texte 1–5 · 2x)",
          "part": 1,
          "title": "Teil 1 · Fünf kurze Texte (2x hören)"
        },
        {
          "time": 804,
          "start": 804,
          "end": 1120,
          "label": "13:24 Teil 2 (Mozart-City-Tour Salzburg · 1x)",
          "part": 2,
          "title": "Teil 2 · Mozart-City-Tour Salzburg (1x hören)"
        },
        {
          "time": 1120,
          "start": 1120,
          "end": 1387,
          "label": "18:40 Teil 3 (Gespräch in Straßenbahn: Ferien · 1x)",
          "part": 3,
          "title": "Teil 3 · Gespräch in der Straßenbahn über Ferien (1x hören)"
        },
        {
          "time": 1387,
          "start": 1387,
          "end": 1865,
          "label": "23:07 Teil 4 (Radiosendung: Lehrer geschlagen · 1. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiosendung School for you (1. Durchgang)"
        },
        {
          "time": 1865,
          "start": 1865,
          "end": 2296,
          "label": "31:05 Teil 4 (Wiederholung · 2. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiosendung School for you (Wiederholung 2. Durchgang)"
        }
      ],
      "horenSections": [
        {
          "id": 1,
          "partNumber": 1,
          "title": "Teil 1: Fünf kurze Texte",
          "badge": "Teil 1",
          "desc": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
          "intro": "Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
          "context": "Sie hören Meldungen, Ansagen und Durchsagen im Radio und am Telefon.",
          "example": {
            "text": "Sie rufen beim Autohersteller VW an.",
            "answer": "Falsch",
            "options": [
              "Im Internet.",
              "Am Telefon.",
              "An der Kasse."
            ],
            "text2": "Wo bekommt man Informationen über die Workshops?",
            "answer2": 0
          },
          "questions": [
            {
              "id": "h1",
              "type": "tf",
              "text": "Auf der A 1 ist ein Unfall passiert.",
              "answer": "Falsch",
              "audioStart": 36
            },
            {
              "id": "h2",
              "type": "mcq",
              "text": "Warum gibt es Stau?",
              "options": [
                "Weil das Wetter schlecht ist.",
                "Weil auf der Autobahn gebaut wird.",
                "Weil eine Ausfahrt geschlossen ist."
              ],
              "answer": 0,
              "audioStart": 36
            },
            {
              "id": "h3",
              "type": "tf",
              "text": "Sie hören eine Information eines Fotostudios.",
              "answer": "Falsch",
              "audioStart": 210
            },
            {
              "id": "h4",
              "type": "mcq",
              "text": "An welchem Tag ist das Haus geschlossen?",
              "options": [
                "Am Montag.",
                "Am Dienstag.",
                "Am Mittwoch."
              ],
              "answer": 1,
              "audioStart": 210
            },
            {
              "id": "h5",
              "type": "tf",
              "text": "Sie hören Tipps zu Freizeitaktivitäten für Jugendliche.",
              "answer": "Richtig",
              "audioStart": 408
            },
            {
              "id": "h6",
              "type": "mcq",
              "text": "Für welche Veranstaltung muss man sich vorher anmelden?",
              "options": [
                "Für die Ausstellung.",
                "Für die Fahrt mit dem Schneemobil.",
                "Zum Skifahren."
              ],
              "answer": 1,
              "audioStart": 408
            },
            {
              "id": "h7",
              "type": "tf",
              "text": "In Augsburg findet ein Weihnachtsmarkt statt.",
              "answer": "Richtig",
              "audioStart": 587
            },
            {
              "id": "h8",
              "type": "mcq",
              "text": "Wie lange ist der Christkindlesmarkt in Betrieb?",
              "options": [
                "Länger als einen Monat.",
                "Weniger als einen Monat.",
                "135 Tage."
              ],
              "answer": 0,
              "audioStart": 587
            },
            {
              "id": "h9",
              "type": "tf",
              "text": "Sie hören einen Polizeibericht.",
              "answer": "Falsch",
              "audioStart": 727
            },
            {
              "id": "h10",
              "type": "mcq",
              "text": "Wer konnte die Besitzerin der Katze befreien?",
              "options": [
                "Der Schlüsseldienst.",
                "Ein Nachbar.",
                "Die Polizei."
              ],
              "answer": 0,
              "audioStart": 727
            }
          ]
        },
        {
          "id": 2,
          "partNumber": 2,
          "title": "Teil 2: Mozart-City-Tour Salzburg",
          "badge": "Teil 2",
          "desc": "Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
          "intro": "Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie nehmen an der Mozart-City-Tour teil.",
          "questions": [
            {
              "id": "h11",
              "type": "mcq",
              "text": "Wie lange dauert die Rundfahrt?",
              "options": [
                "Zwanzig Minuten.",
                "Fünfzehn Minuten.",
                "Neunzig Minuten."
              ],
              "answer": 2,
              "audioStart": 804
            },
            {
              "id": "h12",
              "type": "mcq",
              "text": "Auf der Mozart-City-Tour besichtigt man …",
              "options": [
                "das Wohnhaus Mozarts.",
                "das Geburtshaus Mozarts.",
                "das Schloss Leopoldskron."
              ],
              "answer": 1,
              "audioStart": 804
            },
            {
              "id": "h13",
              "type": "mcq",
              "text": "Von wem wurde das Mozarteum gegründet?",
              "options": [
                "Von Mozart.",
                "Von Wissenschaftlern.",
                "Von Salzburgern."
              ],
              "answer": 2,
              "audioStart": 804
            },
            {
              "id": "h14",
              "type": "mcq",
              "text": "Wem gehörte das Geburtshaus Mozarts?",
              "options": [
                "Der Familie Mozart.",
                "Einem Händler.",
                "Mozarts Nachbarin."
              ],
              "answer": 1,
              "audioStart": 804
            },
            {
              "id": "h15",
              "type": "mcq",
              "text": "Was sieht man in dem Museum?",
              "options": [
                "Mozarts Kinder-Violine.",
                "Mozarts Klavier.",
                "Möbel der Familie Mozart."
              ],
              "answer": 0,
              "audioStart": 804
            }
          ]
        },
        {
          "id": 3,
          "partNumber": 3,
          "title": "Teil 3: Gespräch über die Ferien",
          "badge": "Teil 3",
          "desc": "Sie hören ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
          "intro": "Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie fahren mit der Straßenbahn und hören, wie sich zwei Jugendliche über die Ferien unterhalten.",
          "questions": [
            {
              "id": "h16",
              "type": "tf",
              "text": "Isabella hat von ihren Eltern ein neues Handy bekommen.",
              "answer": "Falsch",
              "audioStart": 1120
            },
            {
              "id": "h17",
              "type": "tf",
              "text": "Isabella zeigt Jonas Fotos auf ihrem Handy.",
              "answer": "Richtig",
              "audioStart": 1120
            },
            {
              "id": "h18",
              "type": "tf",
              "text": "Isabella fährt gern auf die Chalkidiki.",
              "answer": "Falsch",
              "audioStart": 1120
            },
            {
              "id": "h19",
              "type": "tf",
              "text": "Isabella mag Andreas.",
              "answer": "Richtig",
              "audioStart": 1120
            },
            {
              "id": "h20",
              "type": "tf",
              "text": "Jonas ist dieses Jahr allein mit seiner Schwester verreist.",
              "answer": "Falsch",
              "audioStart": 1120
            },
            {
              "id": "h21",
              "type": "tf",
              "text": "Isabellas Eltern sind nicht so sportlich wie die Eltern von Jonas.",
              "answer": "Richtig",
              "audioStart": 1120
            },
            {
              "id": "h22",
              "type": "tf",
              "text": "Jonas findet Ferien am Strand langweilig.",
              "answer": "Falsch",
              "audioStart": 1120
            }
          ]
        },
        {
          "id": 4,
          "partNumber": 4,
          "title": "Teil 4: Radiosendung „School for you“: Darf ein Lehrer einen Schüler schlagen?",
          "badge": "Teil 4",
          "desc": "Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was?",
          "intro": "Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Die Moderatorin der Radiosendung „School for you“ diskutiert mit den Schülern Lara und Simon zum Thema: „Darf ein Lehrer einen Schüler schlagen?“",
          "speakers": [
            "Moderatorin",
            "Lara",
            "Simon"
          ],
          "example": {
            "text": "Das Gericht hat gegen die Entlassung des Lehrers entschieden.",
            "answer": 0
          },
          "questions": [
            {
              "id": "h23",
              "type": "speaker",
              "text": "Fast alle Schüler finden Herrn X sympathisch.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 1,
              "audioStart": 1387
            },
            {
              "id": "h24",
              "type": "speaker",
              "text": "Eine Minderheit der Schüler ist mit dem Gerichtsurteil nicht einverstanden.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 2,
              "audioStart": 1387
            },
            {
              "id": "h25",
              "type": "speaker",
              "text": "Die verletzte Schulter des Lehrers spielte eine wichtige Rolle für das Gerichtsurteil.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 0,
              "audioStart": 1387
            },
            {
              "id": "h26",
              "type": "speaker",
              "text": "Der Lehrer hatte nicht die Absicht, die Schülerin zu schlagen.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 0,
              "audioStart": 1387
            },
            {
              "id": "h27",
              "type": "speaker",
              "text": "Das Mädchen wollte, dass der Lehrer seine Arbeit verliert.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 2,
              "audioStart": 1387
            },
            {
              "id": "h28",
              "type": "speaker",
              "text": "Das Mädchen und seine Freunde sind nicht in die Klasse integriert.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 2,
              "audioStart": 1387
            },
            {
              "id": "h29",
              "type": "speaker",
              "text": "Die Klasse macht heute außerhalb des Unterrichts nichts gemeinsam.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 1,
              "audioStart": 1387
            },
            {
              "id": "h30",
              "type": "speaker",
              "text": "Die ersten Tage der Klassenfahrten waren immer ein bisschen schwierig.",
              "options": [
                "Moderatorin",
                "Lara",
                "Simon"
              ],
              "answer": 1,
              "audioStart": 1387
            }
          ]
        }
      ],
      "questions": []
    }
  ]
}

# Flatten Hören questions into p6.questions
p6 = test_data["parts"][5]
all_h_questions = []
for sec in p6["horenSections"]:
  all_h_questions.extend(sec["questions"])
p6["questions"] = all_h_questions
