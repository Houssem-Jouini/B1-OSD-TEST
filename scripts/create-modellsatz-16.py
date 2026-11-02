#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate data/tests/modellsatz-16.json for Modelltest 10 (Hueber Zertifikat B1 Neu 1).
Follows all invariants in AGENTS.md.
"""

import json
import os

modellsatz_16 = {
  "id": "modellsatz-16",
  "title": "Modelltest 10 — Hueber Zertifikat B1",
  "badge": "Modelltest 10",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 10",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 10 (Hueber)",
  "timeTotal": 65,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "time": 10,
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
      "articles": [
        {
          "heading": "So lebe ich",
          "body": [
            "Mein Name ist Clemens. Ich bin 12 Jahre alt und mein Vater ist Diplomat. Alle drei bis vier Jahre ziehen wir deshalb in ein anderes Land. Ich wurde in Deutschland geboren, aber schon als ich zwei Wochen alt war, bin ich mit meiner Mutter nach Beirut geflogen. Das ist die Hauptstadt des Libanon. Aus den ersten Jahren weiß ich nicht mehr viel.",
            "Das erste Land, an das ich mich erinnere, ist Portugal. Wir hatten ein pinkfarbenes Haus mit einem großen Garten. Am Wochenende waren wir oft an einem wunderschönen Strand nördlich von Lissabon. Das Meer, eigentlich muss ich sagen „der Ozean“, war dort herrlich blau und ich habe sehr gern im Sand gespielt.",
            "Englisch musste ich schon ganz früh lernen. Ich bin in Portugal in einen internationalen Kindergarten gegangen. Alle Kinder kamen dort aus anderen Ländern. Deshalb wurde Englisch gesprochen.",
            "Als ich fünf Jahre alt war, sind wir dann nach Berlin gezogen. Am Anfang hat es mir dort gar nicht gefallen – einfach zu kalt, fand ich. Und kein Meer und keine großen schwarzen Oliven zum Frühstück. Aber dann gewöhnt man sich wieder an das Neue und plötzlich wurde Deutschland zu meiner Heimat. Ich dachte: Jetzt bleiben wir hier für immer. Falsch gedacht. Immerhin sieben Jahre sind wir in Berlin geblieben, dann mussten wir wieder die Koffer packen.",
            "Seit einem halben Jahr lebe ich mit meiner Familie in New York. Jetzt bin ich froh darüber, dass ich Englisch sprechen kann. New York ist eine der aufregendsten Städte der Welt. Es ist in den meisten Dingen ganz anders als Berlin: In manche Stadtviertel gehen die Leute nur, um zu arbeiten, in anderen leben sie, und in manche gehen sie gar nicht – weil sie zu gefährlich sind.",
            "Mittlerweile habe ich gemerkt, dass es einfach Zeit braucht, sich an ein neues Land zu gewöhnen. Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen. Manchmal denke ich, es wäre toll, immer nur an einem Ort zu leben. Doch wenn ich es mir recht überlege, ist es schon ziemlich aufregend, die Welt kennenzulernen."
          ]
        }
      ],
      "example": {
        "text": "Clemens’ Mutter kommt aus dem Libanon.",
        "answer": "falsch"
      },
      "questions": [
        {
          "id": 1,
          "type": "tf",
          "text": "Clemens kann sich kaum noch an die Zeit im Libanon erinnern.",
          "answer": "richtig",
          "num": 1
        },
        {
          "id": 2,
          "type": "tf",
          "text": "Clemens’ Haus in Portugal lag am Meer.",
          "answer": "falsch",
          "num": 2
        },
        {
          "id": 3,
          "type": "tf",
          "text": "Clemens besuchte einen englischsprachigen Kindergarten.",
          "answer": "richtig",
          "num": 3
        },
        {
          "id": 4,
          "type": "tf",
          "text": "In Berlin wohnte Clemens bis zu seinem siebten Lebensjahr.",
          "answer": "falsch",
          "num": 4
        },
        {
          "id": 5,
          "type": "tf",
          "text": "Clemens meint, es gibt große Unterschiede zwischen Berlin und New York.",
          "answer": "richtig",
          "num": 5
        },
        {
          "id": 6,
          "type": "tf",
          "text": "In New York fühlt sich Clemens jetzt wie zu Hause.",
          "answer": "falsch",
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
          "heading": "Ni Hao, Mama!",
          "body": [
            "Wenn Tongchun Jiang von seiner „Mama“ schwärmt, denken die anderen Studenten manchmal, der Student rede von seiner Mutter in Shanghai. Dabei meint er Rita Jakobson aus Offenburg, bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst.",
            "Rita und Gerald Jakobson machen bei dem Projekt „Senioren für ausländische Studenten“ mit und sind so etwas wie Leiheltern – für Tongchun aus China und drei andere Gaststudenten.",
            "Was die Jakobsons mit ihren Schützlingen machen, könnte man einen Crashkurs nennen – in der Kunst des schrecklich normalen deutschen Familienlebens. Sie unternehmen Wanderungen. Sie sitzen im Wohnzimmer und spielen Karten. Und sie fragen Tongchun alles, was Eltern studierende Kinder nun einmal fragen: Wie läuft es an der Uni? Was machen die Noten? „Wenn ich eine gute Note bekomme, rufe ich zuerst Mama an“, sagt Tongchun.",
            "Für die Jakobsons ist der Informatikstudent aus Shanghai ein Sohn auf Zeit. „Als unsere eigenen Kinder aus dem Haus waren, wollten wir uns um andere kümmern. Dazu gehört alles, vom Wäschewaschen bis hin zum gemeinsamen Silvesterfeiern“, sagt Rita Jakobson.",
            "Dass Offenburger Senioren auf Gaststudenten attraktiver wirken als Szenepartys in Berlin, zeigen die Statistiken. Am Anfang des Aufenthalts wollen nur 20 Prozent der Gaststudenten nach ihrem Abschluss in Deutschland bleiben. Am Ende sind es 80 Prozent. Das sagt alles."
          ],
          "source": "aus einer deutschen Zeitung"
        }
      ],
      "example": {
        "text": "Tongchun ...",
        "options": [
          "telefoniert immer mit Rita Jakobson, wenn er eine gute Note hat.",
          "ruft seine Mutter in Shanghai nur selten an.",
          "findet das normale deutsche Familienleben schrecklich."
        ],
        "answer": 0
      },
      "questions": [
        {
          "id": 7,
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "wie gut das Verhältnis zwischen ausländischen Studenten und Deutschen ist.",
            "welche Probleme ein Gaststudent aus China in Deutschland hat.",
            "was das Projekt „Senioren für ausländische Studenten“ ist."
          ],
          "answer": 2,
          "num": 7
        },
        {
          "id": 8,
          "type": "mcq",
          "text": "Das Ehepaar Jakobson ...",
          "options": [
            "wollte nicht, dass die eigenen Kinder das Haus verlassen.",
            "sieht seine Gaststudenten regelmäßig.",
            "machte erst einmal einen Crashkurs in deutscher Kultur."
          ],
          "answer": 1,
          "num": 8
        },
        {
          "id": 9,
          "type": "mcq",
          "text": "Viele Gaststudenten aus Offenburg ...",
          "options": [
            "würden gern in Deutschland bleiben.",
            "feiern gern Partys in Berlin.",
            "haben schlechte Erfahrungen in Deutschland gemacht."
          ],
          "answer": 0,
          "num": 9
        }
      ],
      "instructions2": "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles2": [
        {
          "heading": "WebStamp: persönliche Briefmarken",
          "body": [
            "Die Schweizerische Post hatte mit der WebStamp, der elektronischen Briefmarke, eine neue, kreative Idee. WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken. Besonders interessant ist diese innovative Online-Frankier-Lösung für Firmen, da Briefe und Mailings mit individuellen Marken auffallen und beim Empfänger für Interesse sorgen. So sendet man auf und mit der Briefmarke auch eine Mini-Reklame und bleibt den Kunden auf jeden Fall in Erinnerung.",
            "Die Vorteile von WebStamp lassen sich ganz einfach nutzen. Nach der Anmeldung auf der Webseite der Schweizerischen Post kann’s losgehen mit dem Gestalten einer individuellen Briefmarke. Als Sujet ist alles möglich: Fotos, Firmen- und Produktlogos, Grafiken oder sogar Reklamebotschaften.",
            "WebStamp funktioniert online und ist kostenlos. Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Eine 1-Franken-Briefmarke kostet demnach auch nur einen Franken. Diese neuartigen Briefmarken gelten sowohl im Inland als auch im Ausland.",
            "Da das alles über Computerprogramme läuft, sind auch verschiedene Druckformate möglich, falls man beispielsweise die Empfängeradresse in die eigene WebStamp integrieren möchte. Adressen können direkt aus Excel importiert werden.",
            "Genaue Informationen und Ideen zur Gestaltung erhält man in der Info-Broschüre der Schweizerischen Post unter www.post.ch/webstamp."
          ],
          "source": "aus einer Schweizer Zeitung"
        }
      ],
      "questions2": [
        {
          "id": 10,
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "wie die Schweizerische Post funktioniert.",
            "dass die Schweizerische Post eine interessante Webseite hat.",
            "dass man eine Briefmarke selbst machen kann."
          ],
          "answer": 2,
          "num": 10
        },
        {
          "id": 11,
          "type": "mcq",
          "text": "Die WebStamp ...",
          "options": [
            "hat denselben Preis wie eine normale Briefmarke.",
            "gilt nur in der Schweiz.",
            "wurde von einer Werbefirma erfunden."
          ],
          "answer": 0,
          "num": 11
        },
        {
          "id": 12,
          "type": "mcq",
          "text": "Die Adresse des Empfängers ...",
          "options": [
            "muss auf der WebStamp stehen.",
            "kann man aus dem Excel-Programm übernehmen.",
            "wird mit einem extra Programm gedruckt."
          ],
          "answer": 1,
          "num": 12
        }
      ]
    },
    {
      "id": 3,
      "title": "Teil 3",
      "time": 10,
      "instructions": "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
      "situationsIntro": "Einige Ihrer Bekannten sind Tierliebhaber. Sie haben bestimmte Wünsche und suchen nach passenden Anzeigen.",
      "example": {
        "text": "Ilse lebt auf einem Bauernhof. Sie hat einen Hund, zwei Katzen, Kaninchen und sogar ein Pferd. Trotzdem hätte sie gern auch noch einen Esel.",
        "answer": "b"
      },
      "adsFormatted": [
        {
          "code": "a",
          "tagPos": "left",
          "hasPin": True,
          "cardClass": "anzeige-style-a",
          "title": "Dringend gesucht:",
          "text": "Frauchen u./od. Herrchen, die armem, rotem Cockerspaniel (Rüde, kastriert, 5 ½ J.) nach dem Tod seines Frauchens ein neues Zuhause (mit Garten) geben. Tel. 089/3095486",
          "html": "<div class=\"anzeige-headline\">Dringend gesucht:</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">Frauchen u./od. Herrchen, die armem, rotem Cockerspaniel (Rüde, kastriert, 5 ½ J.) nach dem Tod seines Frauchens ein neues Zuhause (mit Garten) geben.<br><br><strong>Tel. 089/3095486</strong></div>"
        },
        {
          "code": "b",
          "tagPos": "right",
          "hasPin": True,
          "cardClass": "anzeige-style-b",
          "title": "Eselfohlen Diana",
          "text": "Eselfohlen Diana, braun, geboren 21.6. zu verkaufen. Fam. Diethalm, D-79397 Müllheim, Tel. 07631-7192, Fax 7820.",
          "html": "<div class=\"anzeige-headline\">Eselfohlen Diana</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">Eselfohlen Diana, braun, geboren 21.6. zu verkaufen.<br><br><strong>Fam. Diethalm</strong>, D-79397 Müllheim<br>Tel. 07631-7192, Fax 7820.</div>"
        },
        {
          "code": "c",
          "tagPos": "left",
          "hasPin": True,
          "cardClass": "anzeige-style-c",
          "title": "Arme Katze „Blacky“",
          "text": "Arme Katze „Blacky“, 4j., überaus gutmütig, wurde von ihren Leuten bei der Übersiedlung einfach zurückgelassen! Wer nimmt sie liebevoll auf? Tel. 0 38 62/32 681",
          "html": "<div class=\"anzeige-headline\">Arme Katze „Blacky“</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">Arme Katze „Blacky“, 4j., überaus gutmütig, wurde von ihren Leuten bei der Übersiedlung einfach zurückgelassen!<br><br>Wer nimmt sie liebevoll auf?<br><strong>Tel. 0 38 62/32 681</strong></div>"
        },
        {
          "code": "d",
          "tagPos": "right",
          "hasPin": True,
          "cardClass": "anzeige-style-d",
          "title": "Gesucht wird der Graupapagei „Burli“",
          "text": "Gesucht wird der Graupapagei „Burli“, der am 1. Juni aus Wien 21. Bezirk entflogen ist! Er ist sehr zutraulich. Tel. 01/290 60 43. Bel. 2000,-",
          "html": "<div class=\"anzeige-headline\">Gesucht wird Graupapagei „Burli“</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">Gesucht wird der Graupapagei „Burli“, der am 1. Juni aus Wien 21. Bezirk entflogen ist! Er ist sehr zutraulich.<br><br><strong>Tel. 01/290 60 43</strong>. Bel. 2000,-</div>"
        },
        {
          "code": "e",
          "tagPos": "left",
          "hasPin": True,
          "cardClass": "anzeige-style-e",
          "title": "Graupapageienbabys",
          "text": "Graupapageienbabys, liebevoll v. Hd. aufgezogen zu verkaufen, Tel. 02166/930305",
          "html": "<div class=\"anzeige-headline\">Graupapageienbabys</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">Graupapageienbabys, liebevoll v. Hd. aufgezogen zu verkaufen.<br><br><strong>Tel. 02166/930305</strong></div>"
        },
        {
          "code": "f",
          "tagPos": "right",
          "hasPin": True,
          "cardClass": "anzeige-style-f",
          "title": "Hund / Katze in Pflege",
          "text": "Nehme Ihren Hund / Ihre Katze während Ihres Urlaubs in Pflege! Tel. 08084/529763",
          "html": "<div class=\"anzeige-headline\">Hund / Katze in Pflege</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">Nehme Ihren Hund / Ihre Katze während Ihres Urlaubs in Pflege!<br><br><strong>Tel. 08084/529763</strong></div>"
        },
        {
          "code": "g",
          "tagPos": "left",
          "hasPin": True,
          "cardClass": "anzeige-style-g",
          "title": "Unser Wissen für Ihr Tier! ARCHE NOAH",
          "text": "ARCHE NOAH – Die etwas „andere“ TIERKLINIK, 5020 Salzburg, Alpenstraße 141, Tel. 0662/682374. Sie wollen Ihren Urlaub ohne Sorgen um das Haustier genießen? Wir versorgen Kleintiere liebevoll während dieser Zeit! Das Wohlergehen Ihrer Lieblinge ist auch ARCHE NOAH ein Anliegen.",
          "html": "<div class=\"anzeige-headline\">ARCHE NOAH · Tierklinik</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\"><strong>Die etwas „andere“ TIERKLINIK</strong><br>5020 Salzburg, Alpenstraße 141, Tel. 0662/682374<br><br>Sie wollen Ihren Urlaub ohne Sorgen um das Haustier genießen? Wir versorgen <strong>Kleintiere</strong> liebevoll während dieser Zeit!</div>"
        },
        {
          "code": "h",
          "tagPos": "right",
          "hasPin": True,
          "cardClass": "anzeige-style-h",
          "title": "Nehme Ihren Hund in Pflege",
          "text": "Nehme Ihren Hund in Pflege bei Urlaub oder am Tag. Nur Hunde, die für die Wohnung geeignet sind. Tel. 01 73-28 85 11 99 o. 02 31-72 848 98",
          "html": "<div class=\"anzeige-headline\">Nehme Ihren Hund in Pflege</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">bei Urlaub oder am Tag. <strong>Nur Hunde, die für die Wohnung geeignet sind.</strong><br><br>Tel. 01 73-28 85 11 99 o. 02 31-72 848 98</div>"
        },
        {
          "code": "i",
          "tagPos": "left",
          "hasPin": True,
          "cardClass": "anzeige-style-i",
          "title": "Nehme/Suche Aquarium",
          "text": "Nehme/Suche gebrauchtes oder neues Aquarium kostenlos, 30 l – 320 l mit Zubehör ☎ 07631 / 18357",
          "html": "<div class=\"anzeige-headline\">Nehme/Suche Aquarium</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\">Gebrauchtes oder neues Aquarium kostenlos gesucht, 30 l – 320 l mit Zubehör.<br><br>☎ <strong>07631 / 18357</strong></div>"
        },
        {
          "code": "j",
          "tagPos": "right",
          "hasPin": True,
          "cardClass": "anzeige-style-j",
          "title": "05.03. Fisch- & Korallentag",
          "text": "11–16 Uhr Schauaquarium Mundenhof: Verkauf von Fischen, Pflanzen, Garnelen, Korallenablegern, Makroalgen u. Zubehör",
          "html": "<div class=\"anzeige-headline\">05.03. Fisch- & Korallentag</div><div style=\"font-size:13px; line-height:1.45; margin-top:6px;\"><strong>11–16 Uhr Schauaquarium Mundenhof</strong><br>Verkauf von Fischen, Pflanzen, Garnelen, Korallenablegern, Makroalgen u. Zubehör</div>"
        }
      ],
      "questions": [
        {
          "id": 13,
          "type": "match",
          "text": "Susanne möchte im Urlaub verreisen und weiß nicht, wer in dieser Zeit auf ihre kleine, weiße Maus aufpassen kann.",
          "answer": "g",
          "num": 13
        },
        {
          "id": 14,
          "type": "match",
          "text": "Thomas ist Single und hält sich einen Dackel. Die Nachbarn haben sich beschwert, weil der Hund in der Wohnung laut wird, wenn Thomas tagsüber im Büro ist. Er möchte das Problem lösen.",
          "answer": "h",
          "num": 14
        },
        {
          "id": 15,
          "type": "match",
          "text": "Die Familie Schmidt hat einen großen Garten und eine Bernhardiner-Hündin. Damit ihr Haustier nicht allein ist, wären sie bereit, einen zweiten Hund aufzunehmen. Er soll aber nicht so groß sein.",
          "answer": "a",
          "num": 15
        },
        {
          "id": 16,
          "type": "match",
          "text": "Herr Albrecht muss aus beruflichen Gründen umziehen und kann seinen Hund nicht mitnehmen. Er sucht ein neues Zuhause für ihn.",
          "answer": "0",
          "num": 16
        },
        {
          "id": 17,
          "type": "match",
          "text": "Für ihr neues, großes Aquarium möchte Eva noch einige Fische kaufen.",
          "answer": "j",
          "num": 17
        },
        {
          "id": 18,
          "type": "match",
          "text": "Karl will sich eine Katze anschaffen. Er mag diese Tiere, weil sie nicht viel Pflege brauchen und sehr selbstständig sind.",
          "answer": "c",
          "num": 18
        },
        {
          "id": 19,
          "type": "match",
          "text": "Frau Bach mag Vögel, sie sucht zurzeit einen Papagei.",
          "answer": "e",
          "num": 19
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "time": 15,
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Würde die Person bei einer Kettenmail mitmachen?",
      "topic": "In einer Online-Zeitung lesen Sie Kommentare zu einem Artikel über Kettenmails.",
      "example": {
        "who": "Henriette, 24, Magdeburg",
        "text": "Wenn du eine Mail geschickt bekommst, in der du aufgefordert wirst, sie an alle Freunde weiterzuschicken – dann lass es bleiben. Du machst dich nur unbeliebt. Denn bei solchen Kettenmails handelt es sich fast immer um blöde Späße. Oft haben diese Mails sogar Viren und machen etwas am PC kaputt.",
        "answer": "nein"
      },
      "letters": [
        {
          "id": 20,
          "who": "Alexandra, 28, Ludwigshafen",
          "text": "Kettenmails sind für mich einfach ein Teil der Kommunikation mit anderen. Mir ist es noch nie passiert, dass eine Kettenmail etwas kaputt gemacht hat. Ich mache auch nicht immer, was da steht, z.B. an mindestens 10 Personen schicken oder so. Ich sehe das einfach als einen Teil meiner Kommunikation und wenn die Mail lustig oder interessant ist, schicke ich sie auch weiter. Ich sehe keinen Grund, der dagegen spricht.",
          "answer": "ja",
          "num": 20
        },
        {
          "id": 21,
          "who": "Nils, 41, Hamburg",
          "text": "Wenn ich etwas bekomme, das auch nur entfernt an eine Kettenmail erinnert, lösche ich es sofort. Da kann man sich nie sicher sein, ob da nicht irgendeine Werbefirma dahinter steht und auf diese Weise versucht, möglichst viele E-Mail-Adressen zu sammeln. Die Adressen können dann für Werbe-Mails oder Spams benutzt werden. Dann wird man nachher nur mit Werbung bombardiert.",
          "answer": "nein",
          "num": 21
        },
        {
          "id": 22,
          "who": "Wiebke, 18, Gelsenkirchen",
          "text": "Ich freue mich immer über Post, egal ob nur an mich oder an viele, ob zum Weiterschicken oder nicht. Allgemein bin ich der Meinung, dass man Wichtiges und Interessantes grundsätzlich immer an alle weiterleiten muss. Das ist doch das Gute am Internet und das gilt auch für Kettenmails.",
          "answer": "ja",
          "num": 22
        },
        {
          "id": 23,
          "who": "Stefan, 30, Freistadt",
          "text": "Die Frage ist immer, was da eigentlich drin steht. Wenn es ein Aufruf in der Not ist, z.B. um Blut zu spenden, würde ich es auf jeden Fall einmal nachprüfen. Bei diesen Mails müsste dann auch stehen, wo man sich telefonisch erkundigen kann. Da ruft man an und informiert sich. Ich mache also immer erstmal eine Mail auf. Aber ehrlich gesagt würde ich sie nicht weiterschicken, denn vielleicht ärgert man die anderen damit nur.",
          "answer": "nein",
          "num": 23
        },
        {
          "id": 24,
          "who": "Charlotte, 48, Göttingen",
          "text": "Vor ein paar Tagen habe ich mal so eine Mail bekommen. Es ging um Rezepte. Ich sollte ein Rezept an jemanden schicken und dann die Mail an zehn Freunde. Vorher habe ich einen Namen von der Liste der Mitspielenden gestrichen und mich selbst dazu geschrieben. Nun werde ich ganz viele Rezepte von mir Unbekannten erhalten. Zwei Rezepte habe ich schon und ich freue mich auf die nächsten.",
          "answer": "ja",
          "num": 24
        },
        {
          "id": 25,
          "who": "Victor, 26, Zürich",
          "text": "Die E-Mail ist nicht für Spiele erfunden worden, sondern um die Kommunikation zu erleichtern. Deshalb kann ich nicht verstehen, dass es Leute gibt, die bei einer Kettenmail mitmachen. So eine Zeitverschwendung! Da könnte man doch etwas Besseres mit dem Computer anfangen, zum Beispiel häufiger an Freunde schreiben.",
          "answer": "nein",
          "num": 25
        },
        {
          "id": 26,
          "who": "Katta, 34, Wien",
          "text": "Das schrecklichste sind diese Kettenmails, in denen steht, dass man ganz viel Unglück haben wird, wenn man nicht sofort alles an 10 Freunde weiterschickt. Nein, so einen Psychoterror kann ich nicht unterstützen! Mir hat das alle Kettenmails vergrault, ich will bei keiner mehr mitmachen.",
          "answer": "nein",
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
          "heading": "Deutsches Museum",
          "sub": "Sie informieren sich über das Deutsche Museum, weil Sie es besuchen wollen.",
          "body": [
            "<strong>Öffnungszeiten:</strong> Geöffnet täglich 9.00 bis 17.00 Uhr; Einlass bis 16.00 Uhr.",
            "<strong>Eintrittspreise:</strong> Erwachsene 8,50 € · Ermäßigt 7,00 € · Schüler und Studenten 3,00 € · Übersichtsführung 3,00 € · Planetarium zusätzlich 2,00 €. Eintritt für Mitglieder und Kinder unter 6 Jahren frei.",
            "<strong>Werden Sie Mitglied!</strong> Mit einem Jahresbeitrag von 52,- € können Sie mit einer Begleitperson und zwei Kindern (oder allen eigenen Kindern) unter 16 Jahren jederzeit das Deutsche Museum besuchen. Jahresbeitrag für Schüler/-innen und Studierende (bis 30 Jahre, ohne Begleitung): 32,- €.",
            "<strong>Öffentliche Verkehrsmittel:</strong> Alle S-Bahnen (Isartor), U-Bahn Linien 1 und 2 (Fraunhoferstraße), Straßenbahn Linie 18 (Deutsches Museum), Linie 17 (Isartor). Parkplätze sind nicht verfügbar.",
            "<strong>Führungen:</strong> Schulklassenführungen, Übersichtsführungen, Fachführungen in Deutsch und Fremdsprachen. Anmeldung schriftlich bitte sechs Wochen vorher. Führungen und Vorführungen für Einzelpersonen und Familien sind kostenlos (außer Planetarium und Übersichtsführung).",
            "<strong>Behindertengerechter Zugang:</strong> Rollstuhlfahrer können fast alle Ausstellungen über Rampen und Aufzüge erreichen, das Restaurant über Aufzüge aus dem Imbissraum. Das Personal hilft Ihnen gerne. Die Toiletten befinden sich im Erdgeschoss und im 1. Obergeschoss.",
            "<strong>Gastronomie:</strong> Restaurant, 1. Obergeschoss: 9.00 – 17.00 Uhr warme Küche, Mo – Fr 10.30 – 15.00 Uhr, Sa/So 10.30 – 15.30 Uhr. Cafeteria, Erdgeschoss 9.00 – 15.30 Uhr (Verzehr von Mitgebrachtem möglich).",
            "<strong>Deutsches Museum Shop:</strong> Führer, Kataloge und sonstige Veröffentlichungen des Deutschen Museums, großes Sortiment an technik- und wissenschaftsgeschichtlicher Literatur. Verzeichnis der lieferbaren Publikationen im Museum-Shop erhältlich."
          ]
        }
      ],
      "questions": [
        {
          "id": 27,
          "type": "mcq",
          "text": "Führungen ...",
          "options": [
            "sind für Schulklassen gratis.",
            "sollten vorher telefonisch gemeldet werden.",
            "finden nicht nur auf Deutsch statt."
          ],
          "answer": 2,
          "num": 27
        },
        {
          "id": 28,
          "type": "mcq",
          "text": "Wer Mitglied ist, ...",
          "options": [
            "ist auf jeden Fall erwachsen.",
            "braucht keinen Eintritt zu bezahlen.",
            "darf nicht allein das Museum besuchen."
          ],
          "answer": 1,
          "num": 28
        },
        {
          "id": 29,
          "type": "mcq",
          "text": "Im Museum kann man ...",
          "options": [
            "als Behinderter alle Ausstellungen besichtigen.",
            "auch Bücher kaufen.",
            "nur warm essen."
          ],
          "answer": 1,
          "num": 29
        },
        {
          "id": 30,
          "type": "mcq",
          "text": "Das Museum erreicht man ...",
          "options": [
            "am besten mit dem Auto.",
            "mit dem Bus Linie 17.",
            "mit jeder S-Bahn."
          ],
          "answer": 2,
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
      "instructions": "Modul Hören: 4 Teile, 30 Aufgaben. Klicken Sie auf den Play-Button, um die Original-Audiodatei zu starten. Die Aufgaben folgen dem Ablauf der Audioaufnahme.",
      "audioSrc": "audio/modellsatz-16-hoeren.mp3",
      "audioFallbacks": [
        "audio/modellsatz-16-hoeren.mp3"
      ],
      "audioChapters": [
        {
          "time": 0,
          "label": "00:00 Teil 1 (Beispiel · 2x)",
          "part": 1,
          "title": "Teil 1 · Beispiel (2x hören)",
          "start": 0,
          "end": 37
        },
        {
          "time": 37,
          "label": "00:37 Teil 1 (Texte 1–5 · 2x)",
          "part": 1,
          "title": "Teil 1 · Fünf kurze Texte (2x hören)",
          "start": 37,
          "end": 787
        },
        {
          "time": 787,
          "label": "13:07 Teil 2 (Feriencamp Papstdorf · 1x)",
          "part": 2,
          "title": "Teil 2 · Elternabend für Feriencamp Papstdorf (1x hören)",
          "start": 787,
          "end": 1058
        },
        {
          "time": 1058,
          "label": "17:38 Teil 3 (Geburtstagsparty · 1x)",
          "part": 3,
          "title": "Teil 3 · Gespräch an Bushaltestelle über Party (1x hören)",
          "start": 1058,
          "end": 1285
        },
        {
          "time": 1285,
          "label": "21:25 Teil 4 (Workcamps · 1. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Diskussion über Workcamps (1. Durchgang)",
          "start": 1285,
          "end": 1706
        },
        {
          "time": 1706,
          "label": "28:26 Teil 4 (Workcamps · 2. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Diskussion über Workcamps (2. Durchgang — Wiederholung)",
          "start": 1706,
          "end": 2075
        }
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
              "text": "Jens treibt Sport.",
              "type": "tf",
              "answer": "richtig"
            },
            "ex02": {
              "num": "02",
              "text": "Bei welcher Temperatur soll Jens waschen?",
              "options": [
                "Bei 60° C.",
                "Bei 40° C.",
                "Bei 30° C."
              ],
              "type": "mcq",
              "answer": 0
            }
          },
          "texts": [
            {
              "number": 1,
              "title": "Text 1",
              "qIds": [
                "h1",
                "h2"
              ]
            },
            {
              "number": 2,
              "title": "Text 2",
              "qIds": [
                "h3",
                "h4"
              ]
            },
            {
              "number": 3,
              "title": "Text 3",
              "qIds": [
                "h5",
                "h6"
              ]
            },
            {
              "number": 4,
              "title": "Text 4",
              "qIds": [
                "h7",
                "h8"
              ]
            },
            {
              "number": 5,
              "title": "Text 5",
              "qIds": [
                "h9",
                "h10"
              ]
            }
          ]
        },
        {
          "id": 2,
          "partNumber": 2,
          "title": "Teil 2: Eltern-Informationsabend für ein Feriencamp",
          "badge": "Aufgaben 11 – 15",
          "intro": "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie sind auf dem Eltern-Informationsabend für eine Schülerreise in ein Feriencamp.",
          "qIds": [
            "h11",
            "h12",
            "h13",
            "h14",
            "h15"
          ]
        },
        {
          "id": 3,
          "partNumber": 3,
          "title": "Teil 3: Gespräch an der Bushaltestelle über Geburtstagsparty",
          "badge": "Aufgaben 16 – 22",
          "intro": "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie warten an einer Bushaltestelle auf den Bus in die Stadt und hören, wie sich zwei Jugendliche über eine Geburtstagsparty unterhalten.",
          "qIds": [
            "h16",
            "h17",
            "h18",
            "h19",
            "h20",
            "h21",
            "h22"
          ]
        },
        {
          "id": 4,
          "partNumber": 4,
          "title": "Teil 4: Radiodiskussion über „Workcamps“",
          "badge": "Aufgaben 23 – 30",
          "intro": "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Eine Moderatorin diskutiert mit zwei jungen Leuten, Iris Berger und Kai Weser, über „Workcamps“.",
          "speakers": [
            {
              "code": "a",
              "name": "Moderatorin"
            },
            {
              "code": "b",
              "name": "Iris Berger"
            },
            {
              "code": "c",
              "name": "Kai Weser"
            }
          ],
          "example": {
            "num": "0",
            "text": "Workcamps werden immer beliebter.",
            "answerCode": "a",
            "answerSpeaker": "Moderatorin"
          },
          "qIds": [
            "h23",
            "h24",
            "h25",
            "h26",
            "h27",
            "h28",
            "h29",
            "h30"
          ]
        }
      ],
      "questions": [
        {
          "id": "h1",
          "teilPart": 1,
          "type": "tf",
          "text": "Das Möbelhaus hat Sonderangebote.",
          "answer": "richtig",
          "num": 1,
          "textNum": 1,
          "audioStart": 37
        },
        {
          "id": "h2",
          "teilPart": 1,
          "type": "mcq",
          "text": "Im Angebot gibt es Möbel für ...",
          "options": [
            "Wohnzimmer und Schlafzimmer.",
            "Schlafzimmer und Esszimmer.",
            "Wohn-, Schlaf- und Kinderzimmer."
          ],
          "answer": 0,
          "num": 2,
          "textNum": 1,
          "audioStart": 37
        },
        {
          "id": "h3",
          "teilPart": 1,
          "type": "tf",
          "text": "Sie hören eine Musiksendung für kreative Menschen.",
          "answer": "falsch",
          "num": 3,
          "textNum": 2,
          "audioStart": 209
        },
        {
          "id": "h4",
          "teilPart": 1,
          "type": "mcq",
          "text": "Das Programmangebot von „musica viva“ gibt es ...",
          "options": [
            "nur in Österreich.",
            "nur in Deutschland.",
            "in mehreren Ländern."
          ],
          "answer": 2,
          "num": 4,
          "textNum": 2,
          "audioStart": 209
        },
        {
          "id": "h5",
          "teilPart": 1,
          "type": "tf",
          "text": "Zu Abend soll es warmes Essen geben.",
          "answer": "richtig",
          "num": 5,
          "textNum": 3,
          "audioStart": 328
        },
        {
          "id": "h6",
          "teilPart": 1,
          "type": "mcq",
          "text": "Wie viele Schalter müssen am Herd eingestellt werden?",
          "options": [
            "Drei.",
            "Fünf.",
            "Zwei."
          ],
          "answer": 2,
          "num": 6,
          "textNum": 3,
          "audioStart": 328
        },
        {
          "id": "h7",
          "teilPart": 1,
          "type": "tf",
          "text": "Sie hören den Wetterbericht für Österreich.",
          "answer": "richtig",
          "num": 7,
          "textNum": 4,
          "audioStart": 467
        },
        {
          "id": "h8",
          "teilPart": 1,
          "type": "mcq",
          "text": "Wo ist es am wärmsten?",
          "options": [
            "Im Norden.",
            "Im Westen.",
            "Im Osten."
          ],
          "answer": 1,
          "num": 8,
          "textNum": 4,
          "audioStart": 467
        },
        {
          "id": "h9",
          "teilPart": 1,
          "type": "tf",
          "text": "Sie sind mit einer Schokoladenfabrik verbunden.",
          "answer": "falsch",
          "num": 9,
          "textNum": 5,
          "audioStart": 594
        },
        {
          "id": "h10",
          "teilPart": 1,
          "type": "mcq",
          "text": "Wo braucht man nichts zu bezahlen?",
          "options": [
            "In der Ausstellung.",
            "Im Schoko-Laden.",
            "In der Schokowerkstatt."
          ],
          "answer": 1,
          "num": 10,
          "textNum": 5,
          "audioStart": 594
        },
        {
          "id": "h11",
          "teilPart": 2,
          "type": "mcq",
          "text": "Wer fährt mit ins Camp?",
          "options": [
            "Der Direktor der Schule.",
            "Der Techniker der Schule.",
            "Lehrer der Schule."
          ],
          "answer": 2,
          "num": 11,
          "audioStart": 787
        },
        {
          "id": "h12",
          "teilPart": 2,
          "type": "mcq",
          "text": "Was ist den Eltern bereits bekannt?",
          "options": [
            "Wann die Schüler abfliegen und ankommen.",
            "Was jeden Tag auf dem Programm steht.",
            "Wie das Feriencamp aussieht."
          ],
          "answer": 0,
          "num": 12,
          "audioStart": 787
        },
        {
          "id": "h13",
          "teilPart": 2,
          "type": "mcq",
          "text": "Die Kinder und ihre Begleiter fahren mit dem Bus ...",
          "options": [
            "nach Brandenburg.",
            "nach Papstdorf.",
            "nach Dresden."
          ],
          "answer": 1,
          "num": 13,
          "audioStart": 787
        },
        {
          "id": "h14",
          "teilPart": 2,
          "type": "mcq",
          "text": "Wie viele Kinder wohnen in einem Bungalow?",
          "options": [
            "Acht.",
            "Vier.",
            "Zwei."
          ],
          "answer": 0,
          "num": 14,
          "audioStart": 787
        },
        {
          "id": "h15",
          "teilPart": 2,
          "type": "mcq",
          "text": "Die Kinder essen ...",
          "options": [
            "jeden Tag in Gaststätten.",
            "dreimal am Tag.",
            "an einem Kiosk."
          ],
          "answer": 1,
          "num": 15,
          "audioStart": 787
        },
        {
          "id": "h16",
          "teilPart": 3,
          "type": "tf",
          "text": "Selina will wegen ihrer Geburtstagsparty in die Stadt fahren.",
          "answer": "richtig",
          "num": 16,
          "audioStart": 1058
        },
        {
          "id": "h17",
          "teilPart": 3,
          "type": "tf",
          "text": "Selina will bei sich zu Hause keine Party machen.",
          "answer": "richtig",
          "num": 17,
          "audioStart": 1058
        },
        {
          "id": "h18",
          "teilPart": 3,
          "type": "tf",
          "text": "Selinas Eltern sind gegen die Party.",
          "answer": "falsch",
          "num": 18,
          "audioStart": 1058
        },
        {
          "id": "h19",
          "teilPart": 3,
          "type": "tf",
          "text": "Für Selinas Berufswunsch ist die Reise nach England wichtig.",
          "answer": "richtig",
          "num": 19,
          "audioStart": 1058
        },
        {
          "id": "h20",
          "teilPart": 3,
          "type": "tf",
          "text": "Jan hat dieselbe Meinung wie Selinas Eltern.",
          "answer": "richtig",
          "num": 20,
          "audioStart": 1058
        },
        {
          "id": "h21",
          "teilPart": 3,
          "type": "tf",
          "text": "Selina mag Pascal nicht.",
          "answer": "richtig",
          "num": 21,
          "audioStart": 1058
        },
        {
          "id": "h22",
          "teilPart": 3,
          "type": "tf",
          "text": "Pascals Party hat viel Geld gekostet.",
          "answer": "falsch",
          "num": 22,
          "audioStart": 1058
        },
        {
          "id": "h23",
          "teilPart": 4,
          "type": "speaker",
          "text": "Das Angebot an Projekten ist groß.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 0,
          "num": 23,
          "audioStart": 1285
        },
        {
          "id": "h24",
          "teilPart": 4,
          "type": "speaker",
          "text": "In der Freizeit kann man vieles machen.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 1,
          "num": 24,
          "audioStart": 1285
        },
        {
          "id": "h25",
          "teilPart": 4,
          "type": "speaker",
          "text": "Man kann Fortschritte in einer Sprache machen.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 2,
          "num": 25,
          "audioStart": 1285
        },
        {
          "id": "h26",
          "teilPart": 4,
          "type": "speaker",
          "text": "Freiwilligenarbeit ist ein Plus in einer Bewerbung.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 0,
          "num": 26,
          "audioStart": 1285
        },
        {
          "id": "h27",
          "teilPart": 4,
          "type": "speaker",
          "text": "Man versucht, weitere Helfer zu gewinnen.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 1,
          "num": 27,
          "audioStart": 1285
        },
        {
          "id": "h28",
          "teilPart": 4,
          "type": "speaker",
          "text": "Die Einwohner werden über den Umweltschutz informiert.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 2,
          "num": 28,
          "audioStart": 1285
        },
        {
          "id": "h29",
          "teilPart": 4,
          "type": "speaker",
          "text": "Vieles in diesem Land kann Europäer überraschen.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 2,
          "num": 29,
          "audioStart": 1285
        },
        {
          "id": "h30",
          "teilPart": 4,
          "type": "speaker",
          "text": "Man fühlt sich gut, weil man mitgeholfen hat.",
          "options": [
            "Moderatorin",
            "Iris Berger",
            "Kai Weser"
          ],
          "answer": 1,
          "num": 30,
          "audioStart": 1285
        }
      ]
    }
  ],
  "explanations": {
    "1": {
      "quote": "Aus den ersten Jahren weiß ich nicht mehr viel.",
      "whyCorrect": {
        "de": "Richtig: Clemens gibt an, dass er sich an seine ersten Lebensjahre in Beirut kaum noch erinnern kann.",
        "ar": "صحيح: يذكر كليمنس أنه بالكاد يتذكر سنواته الأولى في بيروت.",
        "fr": "Vrai : Clemens indique qu'il ne se souvient presque plus de ses premières années à Beyrouth."
      },
      "whyIncorrect": {
        "de": "Falsch widerspricht seiner direkten Aussage, dass er aus den ersten Jahren nicht mehr viel weiß.",
        "ar": "خطأ يناقض قوله الصريح بأنه لا يتذكر الكثير من تلك المرحلة.",
        "fr": "Faux contredit sa déclaration explicite selon laquelle ses souvenirs sont très vagues."
      }
    },
    "2": {
      "quote": "Am Wochenende waren wir oft an einem wunderschönen Strand nördlich von Lissabon.",
      "whyCorrect": {
        "de": "Falsch: Das Haus lag nicht direkt am Meer, sondern sie fuhren am Wochenende an einen Strand nördlich von Lissabon.",
        "ar": "خطأ: لم يكن منزله في البرتغال يقع على البحر مباشرة، بل كانوا يذهبون في عطلة نهاية الأسبوع إلى شاطئ شمال لشبونة.",
        "fr": "Faux : La maison n'était pas située au bord de la mer ; ils se rendaient à la plage le week-end."
      },
      "whyIncorrect": {
        "de": "Richtig ist unzutreffend, da das Haus lediglich einen Garten hatte und die Familie zum Strand fahren musste.",
        "ar": "صحيح غير دقيق، فالمنزل كان له حديقة وكانوا يذهبون للشاطئ في الإجازات فقط.",
        "fr": "Vrai est inexact car la maison avait un jardin et ils devaient se déplacer pour aller à la mer."
      }
    },
    "3": {
      "quote": "Englisch musste ich schon ganz früh lernen. Ich bin in Portugal in einen internationalen Kindergarten gegangen. Alle Kinder kamen dort aus anderen Ländern. Deshalb wurde Englisch gesprochen.",
      "whyCorrect": {
        "de": "Richtig: Im Kindergarten wurde Englisch gesprochen, weil die Kinder aus verschiedenen Ländern stammten.",
        "ar": "صحيح: التحق كليمنس بروضة أطفال دولية كانت اللغة الإنجليزية هي لغة التواصل فيها.",
        "fr": "Vrai : Il a fréquenté un jardin d'enfants international où l'anglais était la langue parlée."
      },
      "whyIncorrect": {
        "de": "Falsch widerspricht der Feststellung, dass Englisch dort die Umgangssprache war.",
        "ar": "خطأ يناقض حقيقة أن الإنجليزية كانت لغة التخاطب اليومية في الروضة.",
        "fr": "Faux contredit le fait explicite que l'anglais y était couramment parlé."
      }
    },
    "4": {
      "quote": "Als ich fünf Jahre alt war, sind wir dann nach Berlin gezogen... Immerhin sieben Jahre sind wir in Berlin geblieben...",
      "whyCorrect": {
        "de": "Falsch: Clemens zog mit 5 Jahren nach Berlin und blieb 7 Jahre dort, also bis zu seinem 12. Lebensjahr (nicht bis zum siebten).",
        "ar": "خطأ: انتقل إلى برلين وهو في سن الخامسة ومكث هناك 7 سنوات، أي حتى بلغ 12 عاماً وليس حتى عامه السابع.",
        "fr": "Faux : Il a emménagé à Berlin à 5 ans et y est resté 7 ans, soit jusqu'à ses 12 ans (et non jusqu'à 7 ans)."
      },
      "whyIncorrect": {
        "de": "Richtig verwechselt die 7 Jahre Aufenthaltsdauer mit dem 7. Lebensjahr.",
        "ar": "صحيح يخلط بين مدة الإقامة (سبع سنوات) وعمره عند المغادرة (12 سنة).",
        "fr": "Vrai confond la durée de 7 années passées sur place avec l'âge de 7 ans."
      }
    },
    "5": {
      "quote": "New York ist eine der aufregendsten Städte der Welt. Es ist in den meisten Dingen ganz anders als Berlin...",
      "whyCorrect": {
        "de": "Richtig: Clemens hebt hervor, dass New York in fast allen Belangen völlig anders ist als Berlin.",
        "ar": "صحيح: يؤكد كليمنس أن نيويورك تختلف في معظم الأشياء اختلافاً كبيراً عن برلين.",
        "fr": "Vrai : Clemens souligne que New York est, dans la plupart des domaines, tout à fait différente de Berlin."
      },
      "whyIncorrect": {
        "de": "Falsch steht im Widerspruch zur expliziten Gegenüberstellung von Berlin und New York.",
        "ar": "خطأ يناقض المقارنة الصريحة بين المدينتين في النص.",
        "fr": "Faux contredit la comparaison explicite faite par l'auteur entre les deux villes."
      }
    },
    "6": {
      "quote": "Mittlerweile habe ich gemerkt, dass es einfach Zeit braucht... Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen.",
      "whyCorrect": {
        "de": "Falsch: Er fühlt sich jetzt noch nicht wie zu Hause; er hofft nur, dass dies irgendwann mit der Zeit geschieht.",
        "ar": "خطأ: لا يشعر كليمنس حالياً في نيويورك وكأنه في وطنه بعد؛ بل يرى أن الأمر يحتاج وقتاً فقط.",
        "fr": "Faux : Il ne se sent pas encore chez lui à New York pour le moment, cela demandera du temps."
      },
      "whyIncorrect": {
        "de": "Richtig übersieht das Wort „jetzt“; das Gefühl von Heimat erwartet er erst in der Zukunft.",
        "ar": "صحيح يتجاهل كلمة 'الآن'؛ فالشعور بالانتماء الكامل يتوقعه في المستقبل.",
        "fr": "Vrai néglige le présent : le sentiment de chez-soi n'est espéré que pour plus tard."
      }
    },
    "7": {
      "quote": "Rita und Gerald Jakobson machen bei dem Projekt „Senioren für ausländische Studenten“ mit und sind so etwas wie Leiheltern...",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Der Bericht stellt das Projekt vor, bei dem ältere Bürger Patenschaften für Gaststudenten übernehmen.",
        "ar": "الخيار c صحيح: يركز النص على التعريف بمشروع 'كبار السن من أجل الطلاب الأجانب' ودورهم كأسر بديلة.",
        "fr": "L'option c est correcte : Le texte présente le projet par lequel des seniors parrainent des étudiants étrangers."
      },
      "whyIncorrect": {
        "de": "Das Verhältnis allgemein (a) oder spezifische Probleme (b) sind nicht das zentrale Thema des Artikels.",
        "ar": "العلاقة العامة أو المشكلات الفردية ليست هي الفكرة الرئيسية للمقال.",
        "fr": "La relation en général ou des problèmes isolés ne constituent pas le sujet central."
      }
    },
    "8": {
      "quote": "bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst... Sie unternehmen Wanderungen. Sie sitzen im Wohnzimmer und spielen Karten.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Die Jakobsons treffen ihren Schützling regelmäßig jeden Sonntag und unternehmen gemeinsame Aktivitäten.",
        "ar": "الخيار b صحيح: يلتقي الزوجان بالطلاب بانتظام كل يوم أحد ويمارسون معاً أنشطة مختلفة.",
        "fr": "L'option b est correcte : Les époux Jakobson voient leur étudiant régulièrement chaque dimanche."
      },
      "whyIncorrect": {
        "de": "Sie wollten nicht das Bleiben erzwingen (a) und machten selbst keinen Kurs (c), sondern boten ihren Alltag als Erfahrung an.",
        "ar": "لم يمانعوا رحيل أطفالهم ولم يأخذوا دورة تدريبية، بل فتحوا بيتهم للمشاركة الأسرية.",
        "fr": "Ils n'ont pas empêché leurs enfants de partir ni suivi de formation accélérée."
      }
    },
    "9": {
      "quote": "Am Anfang des Aufenthalts wollen nur 20 Prozent der Gaststudenten nach ihrem Abschluss in Deutschland bleiben. Am Ende sind es 80 Prozent.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Durch die positiven Erfahrungen möchten am Ende 80 Prozent der Gaststudenten in Deutschland bleiben.",
        "ar": "الخيار a صحيح: بفضل التجربة الإيجابية يفضل 80 بالمائة من الطلاب الأجانب البقاء في ألمانيا بعد التخرج.",
        "fr": "L'option a est correcte : À la fin de leur séjour, 80 % des étudiants souhaitent rester en Allemagne."
      },
      "whyIncorrect": {
        "de": "Sie ziehen das Familienleben Berliner Partys vor (b) und machten gerade keine schlechten Erfahrungen (c).",
        "ar": "هم يفضلون الأجواء الأسرية على حفلات برلين، وتجربتهم كانت إيجابية ومحفزة وليست سيئة.",
        "fr": "Ils privilégient cette vie familiale aux soirées berlinoises et n'ont pas eu de mauvaises expériences."
      }
    },
    "10": {
      "quote": "WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Der Kern von WebStamp ist, dass Nutzer ihre individuellen Briefmarken eigenhändig online erstellen können.",
        "ar": "الخيار c صحيح: جوهر خدمة WebStamp هو إمكانية تصميم وطباعة الطوابع البريدية الشخصية بنفسك عبر الحاسوب.",
        "fr": "L'option c est correcte : WebStamp permet de concevoir et d'imprimer soi-même ses propres timbres en ligne."
      },
      "whyIncorrect": {
        "de": "Die Funktionsweise der gesamten Post (a) oder nur die Website (b) greifen viel zu kurz.",
        "ar": "عمل البريد السويسري ككل أو جمالية الموقع ليسا هما الهدف الأساسي للمقال.",
        "fr": "Le fonctionnement général de la poste ou l'attrait du site web sont des éléments trop réducteurs."
      }
    },
    "11": {
      "quote": "Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Eine 1-Franken-Briefmarke kostet demnach auch nur einen Franken.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: WebStamp kostet genau so viel wie eine normale Briefmarke, da die Gestaltung kostenlos ist.",
        "ar": "الخيار a صحيح: سعر الخدمة هو نفس سعر الطابع التقليدي تماماً دون أي تكاليف إضافية للتصميم.",
        "fr": "L'option a est correcte : Le prix est identique à un timbre standard, le service de création étant gratuit."
      },
      "whyIncorrect": {
        "de": "Sie gilt auch im Ausland (b) und wurde von der Post selbst erfunden, nicht von einer Werbefirma (c).",
        "ar": "الطوابع صالحة محلياً ودولياً، وابتكرها البريد السويسري وليس شركة دعاية.",
        "fr": "Elle est valable aussi à l'international et a été créée par la poste, non par une agence publicitaire."
      }
    },
    "12": {
      "quote": "Adressen können direkt aus Excel importiert werden.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Empfängeradressen können unkompliziert direkt aus Excel-Tabellen in die WebStamp-Maske übernommen werden.",
        "ar": "الخيار b صحيح: يمكن استيراد عناوين المستلمين مباشرة وبسهولة من برنامج الإكسل.",
        "fr": "L'option b est correcte : Les adresses des destinataires peuvent être importées directement depuis Excel."
      },
      "whyIncorrect": {
        "de": "Die Adresse muss nicht zwingend auf der Marke stehen (a) und es wird kein separates Programm zum Drucken benötigt (c).",
        "ar": "لا يُشترط إدراج العنوان إجبارياً، ولا يلزم برنامج إضافي لعملية الطباعة.",
        "fr": "L'adresse n'est pas obligatoire sur le timbre et aucun logiciel tiers d'impression n'est requis."
      }
    },
    "13": {
      "quote": "ARCHE NOAH... Wir versorgen Kleintiere liebevoll während dieser Zeit!",
      "whyCorrect": {
        "de": "Anzeige g ist passend: Die Tierklinik Arche Noah versorgt während der Urlaubszeit Kleintiere wie Mäuse liebevoll.",
        "ar": "الإعلان g مناسب: عيادة سفينة نوح تقدم رعاية متخصصة للحيوانات الصغيرة كالفئران أثناء العطلات.",
        "fr": "L'annonce g convient : La clinique Arche Noah prend en charge les petits animaux (comme les souris) pendant les vacances."
      },
      "whyIncorrect": {
        "de": "Andere Betreuungsanzeigen wie h oder f betreuen Hunde bzw. Katzen, nicht spezifisch Kleintiere.",
        "ar": "الإعلانات الأخرى مثل h وf تركز على الكلاب والقطط دون الحيوانات الصغيرة الخاصة.",
        "fr": "Les autres pensions visent les chiens ou chats, pas spécifiquement les rongeurs/petits animaux."
      }
    },
    "14": {
      "quote": "Nehme Ihren Hund in Pflege bei Urlaub oder am Tag. Nur Hunde, die für die Wohnung geeignet sind.",
      "whyCorrect": {
        "de": "Anzeige h ist passend: Der Dackel kann tagsüber während der Bürozeiten in Wohnungspflege gegeben werden.",
        "ar": "الإعلان h مناسب: يوفر رعاية نهارية للكلاب المناسبة للمنازل خلال ساعات العمل في المكتب.",
        "fr": "L'annonce h convient : Elle propose une garde de chien en journée, idéale pour son teckel pendant le travail."
      },
      "whyIncorrect": {
        "de": "Anzeige f bietet nur Urlaubsbetreuung an; Anzeige a sucht ein dauerhaftes neues Frauchen/Herrchen.",
        "ar": "الإعلان f مخصص للإجازات فقط، والإعلان a يبحث عن تبنٍ دائم.",
        "fr": "L'annonce f ne concerne que les vacances et l'annonce a cherche une adoption définitive."
      }
    },
    "15": {
      "quote": "Dringend gesucht: Frauchen u./od. Herrchen, die armem, rotem Cockerspaniel (Rüde, kastriert, 5 ½ J.) nach dem Tod seines Frauchens ein neues Zuhause (mit Garten) geben.",
      "whyCorrect": {
        "de": "Anzeige a ist passend: Die Familie mit Garten kann den mittelgroßen Cockerspaniel dauerhaft aufnehmen.",
        "ar": "الإعلان a مناسب: يمكن للعائلة التي تملك حديقة تبني كلب كوكر سبانيل ليس كبير الحجم بعد وفاة صاحبته.",
        "fr": "L'annonce a convient : La famille avec jardin peut adopter ce cocker spaniel de taille moyenne."
      },
      "whyIncorrect": {
        "de": "Keine andere Anzeige sucht ein dauerhaftes Zuhause mit Garten für einen zweiten Hund.",
        "ar": "لا يوجد إعلان آخر يعرض كلباً متوسط الحجم للتبني في منزل بحديقة.",
        "fr": "Aucune autre annonce ne propose l'adoption d'un chien de taille modérée pour un foyer avec jardin."
      }
    },
    "16": {
      "quote": "Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
      "whyCorrect": {
        "de": "0 ist richtig: Herr Albrecht sucht jemanden, der seinen Hund dauerhaft übernimmt – keine Anzeige bietet eine freie Stelle für die Abgabe an.",
        "ar": "0 هو الصحيح: يبحث السيد ألبرشت عن متبنٍ لكلبه، ولا يوجد أي إعلان لأشخاص يرغبون في استقبال كلب جديد.",
        "fr": "0 est correct : M. Albrecht cherche à faire adopter son chien, mais aucune annonce ne propose d'en accueillir un."
      },
      "whyIncorrect": {
        "de": "Anzeige a sucht ein Zuhause für einen Hund, bietet aber keinen Platz für fremde Hunde.",
        "ar": "الإعلان a يعرض كلباً للتبني وليس طلباً لتبني كلاب أخرى.",
        "fr": "L'annonce a cherche des maîtres pour un cocker et ne prend pas en charge d'autres chiens."
      }
    },
    "17": {
      "quote": "05.03. Fisch- & Korallentag... Verkauf von Fischen, Pflanzen, Garnelen, Korallenablegern...",
      "whyCorrect": {
        "de": "Anzeige j ist passend: Auf der Verkaufsbörse im Schauaquarium Mundenhof kann Eva Fische für ihr Aquarium kaufen.",
        "ar": "الإعلان j مناسب: فعالية ومعرض بيع الأسماك يتيحان لإيفا شراء أسماك جديدة لحوضها الكبير.",
        "fr": "L'annonce j convient : La journée aquariophile propose directement la vente de poissons et plantes."
      },
      "whyIncorrect": {
        "de": "Anzeige i sucht nur gebrauchte Aquarien, verkauft aber keine Zierfische.",
        "ar": "الإعلان i يطلب أحواضاً مستعملة ولا يبيع أسماكاً زينة.",
        "fr": "L'annonce i recherche un aquarium d'occasion et ne vend pas de poissons."
      }
    },
    "18": {
      "quote": "Arme Katze „Blacky“, 4j., überaus gutmütig, wurde von ihren Leuten bei der Übersiedlung einfach zurückgelassen! Wer nimmt sie liebevoll auf?",
      "whyCorrect": {
        "de": "Anzeige c ist passend: Karl kann die gutmütige Katze Blacky bei sich aufnehmen.",
        "ar": "الإعلان c مناسب: يمكن لكارل اقتناء القطة الوديعة بلاكي بعد أن تركها أصحابها.",
        "fr": "L'annonce c convient : Karl peut accueillir la chatte Blacky laissée à l'abandon."
      },
      "whyIncorrect": {
        "de": "Anzeige f bietet nur Urlaubsbetreuung und gibt keine Katze dauerhaft ab.",
        "ar": "الإعلان f يقدم خدمة رعاية مؤقتة أثناء السفر فقط وليس تبنياً دائماً.",
        "fr": "L'annonce f n'offre qu'une garde temporaire durant les congés."
      }
    },
    "19": {
      "quote": "Graupapageienbabys, liebevoll v. Hd. aufgezogen zu verkaufen...",
      "whyCorrect": {
        "de": "Anzeige e ist passend: Hier werden junge Graupapageien zum Kauf angeboten.",
        "ar": "الإعلان e مناسب: يعرض الإعلان فراخ ببغاء رمادي للبيع.",
        "fr": "L'annonce e convient : Elle propose à la vente de jeunes perroquets gris élevés à la main."
      },
      "whyIncorrect": {
        "de": "Anzeige d sucht einen entflogenen Papagei und verkauft keine Vögel.",
        "ar": "الإعلان d يبحث عن ببغاء مفقود ولا يبيع طيوراً.",
        "fr": "L'annonce d est un avis de recherche pour un perroquet égaré, pas une vente."
      }
    },
    "20": {
      "quote": "Ich sehe das einfach als einen Teil meiner Kommunikation und wenn die Mail lustig oder interessant ist, schicke ich sie auch weiter. Ich sehe keinen Grund, der dagegen spricht.",
      "whyCorrect": {
        "de": "Ja: Alexandra leitet interessante oder lustige Kettenmails gerne weiter und hat nichts dagegen.",
        "ar": "نعم: ألكسندرا تشارك في إعادة توجيه الرسائل الطريفة أو المفيدة وترى أنها جزء طبيعي من التواصل.",
        "fr": "Oui : Alexandra renvoie volontiers les chaînes de messages amusantes ou intéressantes."
      },
      "whyIncorrect": {
        "de": "Nein widerspricht ihrer Aussage, dass sie keinen Grund sieht, der dagegen spricht.",
        "ar": "لا يناقض قولها الصريح بأنها لا ترى أي مانع من المشاركة فيها.",
        "fr": "Non contredit sa déclaration affirmant qu'elle ne voit aucune raison de s'y opposer."
      }
    },
    "21": {
      "quote": "Wenn ich etwas bekomme, das auch nur entfernt an eine Kettenmail erinnert, lösche ich es sofort.",
      "whyCorrect": {
        "de": "Nein: Nils löscht jede Kettenmail sofort aus Angst vor Spam und Datensammlern.",
        "ar": "لا: نيلز يحذف أي رسالة متسلسلة على الفور لتجنب الرسائل الإعلانية المزعجة وجمع العناوين.",
        "fr": "Non : Nils supprime immédiatement tout message de ce type par crainte des spams publicitaires."
      },
      "whyIncorrect": {
        "de": "Ja widerspricht seiner konsequenten Löschpraxis.",
        "ar": "نعم يناقض قيامه بحذفها فوراً دون التفاعل معها.",
        "fr": "Oui contredit sa pratique de suppression systématique et immédiate."
      }
    },
    "22": {
      "quote": "Allgemein bin ich der Meinung, dass man Wichtiges und Interessantes grundsätzlich immer an alle weiterleiten muss. Das ist doch das Gute am Internet und das gilt auch für Kettenmails.",
      "whyCorrect": {
        "de": "Ja: Wiebke befürwortet das Weiterleiten wichtiger Inhalte ausdrücklich und macht gerne mit.",
        "ar": "نعم: فيبكه ترى في إعادة توجيه المعلومات المفيدة ميزة للإنترنت وتؤيد رسائل السلسلة.",
        "fr": "Oui : Wiebke estime qu'il faut toujours partager ce qui est intéressant et soutient ces e-mails."
      },
      "whyIncorrect": {
        "de": "Nein steht im Widerspruch zu ihrer Begeisterung über das Weiterleiten von Post.",
        "ar": "لا يتعارض مع ترحيبها الكبير بمشاركة الرسائل مع الجميع.",
        "fr": "Non contredit son enthousiasme affiché pour la transmission de tels courriels."
      }
    },
    "23": {
      "quote": "Aber ehrlich gesagt würde ich sie nicht weiterschicken, denn vielleicht ärgert man die anderen damit nur.",
      "whyCorrect": {
        "de": "Nein: Stefan liest Notaufrufe zwar durch, leitet Kettenmails aber nicht an andere weiter.",
        "ar": "لا: شتيفان يتأكد من المعلومات لكنه لا يعيد إرسالها لكي لا يزعج أصدقاءه.",
        "fr": "Non : Stefan se renseigne sur le contenu mais refuse de transférer ces courriels pour ne pas agacer autrui."
      },
      "whyIncorrect": {
        "de": "Ja widerspricht seinem klaren Entschluss, die Mails nicht weiterzuschicken.",
        "ar": "نعم يخالف قراره الواضح بعدم إعادة الإرسال لأي شخص.",
        "fr": "Oui contredit son choix explicite de ne pas relayer les messages."
      }
    },
    "24": {
      "quote": "Nun werde ich ganz viele Rezepte von mir Unbekannten erhalten. Zwei Rezepte habe ich schon und ich freue mich auf die nächsten.",
      "whyCorrect": {
        "de": "Ja: Charlotte hat aktiv mitgemacht, ihren Namen auf die Liste gesetzt und freut sich über die Rezepte.",
        "ar": "نعم: شارلوت شاركت بالفعل في سلسلة تبادل وصفات الطعام وتنتظر المزيد بحماس.",
        "fr": "Oui : Charlotte a participé avec enthousiasme à une chaîne de recettes de cuisine."
      },
      "whyIncorrect": {
        "de": "Nein ignoriert ihre aktive und erfreute Teilnahme an der Rezept-Kettenmail.",
        "ar": "لا يتجاهل مشاركتها الفعلية وتطلعها لاستقبال وصفات جديدة.",
        "fr": "Non ignore sa participation effective et son enthousiasme pour cette initiative."
      }
    },
    "25": {
      "quote": "Deshalb kann ich nicht verstehen, dass es Leute gibt, die bei einer Kettenmail mitmachen. So eine Zeitverschwendung!",
      "whyCorrect": {
        "de": "Nein: Victor betrachtet Kettenmails als reine Zeitverschwendung und lehnt sie strikt ab.",
        "ar": "لا: فيكتور يرى في رسائل السلسلة مضيعة تامة للوقت ويرفض المشاركة فيها نهائياً.",
        "fr": "Non : Victor considère les chaînes d'e-mails comme une perte de temps inutile."
      },
      "whyIncorrect": {
        "de": "Ja steht im Widerspruch zu seinem Unverständnis für Mitmachende.",
        "ar": "نعم يتناقض مع استنكاره لمشاركة الناس في هذه الرسائل.",
        "fr": "Oui contredit son rejet total de cette pratique qu'il juge absurde."
      }
    },
    "26": {
      "quote": "Nein, so einen Psychoterror kann ich nicht unterstützen! Mir hat das alle Kettenmails vergrault, ich will bei keiner mehr mitmachen.",
      "whyCorrect": {
        "de": "Nein: Katta empfindet Kettenmails mit Unglücksdrohungen als Psychoterror und will nie wieder mitmachen.",
        "ar": "لا: كاتا تعتبر رسائل التهديد والابتزاز النفسي أمراً غير مقبول وترفض المشاركة مطلقاً.",
        "fr": "Non : Katta qualifie ces messages de terrorisme psychologique et refuse d'y prendre part."
      },
      "whyIncorrect": {
        "de": "Ja widerspricht ihrer eindeutigen Absage an jede Kettenmail.",
        "ar": "نعم يناقض رفضها القاطع والمطلق لهذه الرسائل.",
        "fr": "Oui contredit son refus catégorique de cautionner ce phénomène."
      }
    },
    "27": {
      "quote": "Schulklassenführungen, Übersichtsführungen, Fachführungen in Deutsch und Fremdsprachen.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Das Deutsche Museum offeriert Führungen auf Deutsch sowie in verschiedenen Fremdsprachen.",
        "ar": "الخيار c صحيح: يوفر المتحف جولات إرشادية باللغة الألمانية بالإضافة إلى لغات أجنبية متعددة.",
        "fr": "L'option c est correcte : Le musée propose des visites guidées en allemand et en langues étrangères."
      },
      "whyIncorrect": {
        "de": "Schulklassen zahlen 3 Euro Eintritt (a) und Anmeldungen müssen schriftlich (nicht telefonisch) 6 Wochen vorher erfolgen (b).",
        "ar": "المدارس تدفع رسوماً مخفضة والتسجيل يتطلب طلباً خطياً قبل 6 أسابيع وليس عبر الهاتف.",
        "fr": "Les classes paient l'entrée et la réservation doit se faire par écrit 6 semaines avant."
      }
    },
    "28": {
      "quote": "Eintritt für Mitglieder und Kinder unter 6 Jahren frei.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Mitglieder des Deutschen Museums genießen kostenfreien Eintritt.",
        "ar": "الخيار b صحيح: يستفيد أعضاء المتحف من دخول مجاني دون دفع تذاكر.",
        "fr": "L'option b est correcte : L'entrée est gratuite pour les membres de l'association du musée."
      },
      "whyIncorrect": {
        "de": "Auch Schüler und Studenten können Mitglieder werden (a) und sie dürfen das Museum jederzeit allein oder mit Gästen besuchen (c).",
        "ar": "يمكن للطلاب والشباب الحصول على العضوية، ولا يُشترط وجود مرافق للزيارة.",
        "fr": "Les élèves peuvent aussi adhérer et la visite individuelle est parfaitement permise."
      }
    },
    "29": {
      "quote": "Deutsches Museum Shop: Führer, Kataloge und sonstige Veröffentlichungen... großes Sortiment an technik- und wissenschaftsgeschichtlicher Literatur.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Im Museumsshop gibt es eine große Auswahl an Büchern, Katalogen und Fachliteratur.",
        "ar": "الخيار b صحيح: يتيح متجر المتحف شراء مجموعة واسعة من الكتب العلمية والكتالوجات.",
        "fr": "L'option b est correcte : La boutique propose un vaste assortiment de livres et publications scientifiques."
      },
      "whyIncorrect": {
        "de": "Rollstuhlfahrer erreichen fast alle (nicht alle) Ausstellungen (a); in der Cafeteria darf man auch Mitgebrachtes verzehren (c).",
        "ar": "المصاعد تتيح الوصول لمعظم المعارض وليس كلها، كما يُسمح بتناول الأطعمة المحضرة منزلياً في الكافيتريا.",
        "fr": "Les personnes à mobilité réduite accèdent à presque toutes les salles et on peut consommer ses propres repas."
      }
    },
    "30": {
      "quote": "Öffentliche Verkehrsmittel: Alle S-Bahnen (Isartor), U-Bahn Linien 1 und 2...",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Jede S-Bahn-Linie hält an der Station Isartor direkt beim Museum.",
        "ar": "الخيار c صحيح: جميع خطوط قطارات الضواحي (S-Bahn) تمر وتتوقف في محطة إيزارتور القريبة من المتحف.",
        "fr": "L'option c est correcte : Toutes les lignes de S-Bahn desservent la station Isartor menant au musée."
      },
      "whyIncorrect": {
        "de": "Parkplätze sind nicht verfügbar (a); Linie 17 ist eine Straßenbahn und kein Bus (b).",
        "ar": "لا تتوفر مواقف سيارات، والخط 17 هو خط ترام (Straßenbahn) وليس حافلة.",
        "fr": "Il n'y a aucun parking auto et la ligne 17 est un tramway, non un bus."
      }
    },
    "h1": {
      "quote": "Wegen Umzugs halten wir für Sie im Sommerschlussverkauf ganz besondere Angebote bereit.",
      "whyCorrect": {
        "de": "Richtig: Das Country-Einrichtungshaus hat wegen des anstehenden Umzugs spezielle Sonderangebote.",
        "ar": "صحيح: يقدم متجر الأثاث عروضاً وتخفيضات خاصة بمناسبة الانتقال وتصفيات الصيف.",
        "fr": "Vrai : Le magasin d'ameublement propose des promotions spéciales en raison de son déménagement."
      },
      "whyIncorrect": {
        "de": "Falsch widerspricht der Durchsage über den Sommerschlussverkauf mit 50 % Rabatt.",
        "ar": "خطأ يناقض الإعلان الصريح عن وجود تخفيضات بنسبة 50%.",
        "fr": "Faux contredit l'annonce des soldes exceptionnels avec 50 % de réduction."
      }
    },
    "h2": {
      "quote": "Alles, was Ihr Wohnzimmer schöner macht, um 50% reduziert... Oder möchten Sie vielleicht Ihr Schlafzimmer aufmöbeln? Sie finden in der 2. Etage Betten...",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Das Möbelhaus bewirbt gezielt Sonderangebote für das Wohnzimmer (1. Stock) und das Schlafzimmer (2. Etage).",
        "ar": "الخيار a صحيح: التخفيضات تشمل أثاث غرف المعيشة في الطابق الأول وغرف النوم في الطابق الثاني.",
        "fr": "L'option a est correcte : Les promotions ciblent le salon au 1er étage et la chambre à coucher au 2e."
      },
      "whyIncorrect": {
        "de": "Esszimmer (b) und Kinderzimmer (c) werden in der Rabattaktion nicht genannt; für Kinder gibt es lediglich einen Spielpark.",
        "ar": "غرف الطعام أو الأطفال لم تُذكر في عروض التخفيض، وإنما خُصص للأطفال ساحة ألعاب خارجية.",
        "fr": "La salle à manger et la chambre d'enfants ne sont pas mentionnées dans les promotions."
      }
    },
    "h3": {
      "quote": "Der Spezialveranstalter „musica viva“ bietet in diesem Jahr interessante Reisen für Kreativurlauber an.",
      "whyCorrect": {
        "de": "Falsch: Es handelt sich um ein Reiseangebot für Kreativurlauber (Reisen und Musizieren), nicht um eine Musiksendung.",
        "ar": "خطأ: الإعلان عن عطلات سياحية موسيقية للمبدعين تنظمها شركة رحلات، وليس برنامجاً إذاعياً موسيقياً.",
        "fr": "Faux : Il s'agit d'une offre touristique de stages musicaux et non d'une émission musicale."
      },
      "whyIncorrect": {
        "de": "Richtig verwechselt das Reiseprogramm von „musica viva“ mit einer reinen Radiosendung.",
        "ar": "صحيح يخلط بين الإعلان الترويجي لرحلات سياحية وبرنامج إذاعي للبث الموسيقي.",
        "fr": "Vrai confond un voyage à thème culturel avec une émission diffusée à la radio."
      }
    },
    "h4": {
      "quote": "Sie können in Deutschland, der Toskana oder Südtirol ihre Ferien der Musik widmen... Zum ersten Mal werden übrigens auch Workshops in Österreich angeboten.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Die Angebote finden in Deutschland, Italien (Toskana/Südtirol) und Österreich, also in mehreren Ländern statt.",
        "ar": "الخيار c صحيح: تقام الرحلات والورش في ألمانيا وإيطاليا والنمسا، أي في عدة دول.",
        "fr": "L'option c est correcte : Les stages ont lieu en Allemagne, en Italie et en Autriche, donc dans plusieurs pays."
      },
      "whyIncorrect": {
        "de": "Nur in Österreich (a) oder nur in Deutschland (b) ignoriert die Vielfalt der genannten europäischen Reiseziele.",
        "ar": "حصر الرحلات بالنمسا أو ألمانيا يتجاهل وجود مواقع سياحية أخرى في إيطاليا.",
        "fr": "Restreindre le choix à l'Autriche ou à l'Allemagne ignore les séjours en Italie."
      }
    },
    "h5": {
      "quote": "Im Kühlschrank steht schon fertig vorbereitet ein Soufflee in einer Auflaufform. Es muss nur noch im Backofen gebacken werden.",
      "whyCorrect": {
        "de": "Richtig: Das Soufflé soll frisch im Backofen zubereitet werden, es gibt also ein warmes Abendessen.",
        "ar": "صحيح: طلبت الزوجة خبز الصينية المجهزة في الفرن ليتناولا وجبة عشاء ساخنة.",
        "fr": "Vrai : Le soufflé doit être cuit au four pour être dégusté chaud au dîner."
      },
      "whyIncorrect": {
        "de": "Falsch widerspricht der Bitte, das Soufflé bei 200 Grad im Backofen fertigzubacken.",
        "ar": "خطأ يناقض الإرشادات المفصلة لخبز العشاء في الفرن لمدة ساعة.",
        "fr": "Faux contredit les instructions précises de cuisson au four à 200 degrés."
      }
    },
    "h6": {
      "quote": "Dreh den Schalter links neben der Zeit-Anzeige auf Ober-/Unterhitze und den Schalter für die Temperatur rechts neben der Zeit-Anzeige auf 200 Grad.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Es müssen genau zwei Schalter eingestellt werden (Heizart links und Temperatur rechts).",
        "ar": "الخيار c صحيح: يجب ضبط مفتاحين فقط (مفتاح نوع التسخين ومفتاح درجة الحرارة).",
        "fr": "L'option c est correcte : Deux boutons doivent être réglés (le mode de chauffe et la température)."
      },
      "whyIncorrect": {
        "de": "Drei (a) oder fünf (b) Schalter sind sachlich falsch; fünf Minuten bezog sich nur auf die Vorheizzeit.",
        "ar": "الرقم 5 يتعلق بمدة التسخين المسبق بالدقائق وليس بعدد المفاتيح.",
        "fr": "Cinq renvoie au temps de préchauffage en minutes, et non au nombre de boutons."
      }
    },
    "h7": {
      "quote": "In ganz Österreich scheint die meiste Zeit die Sonne.",
      "whyCorrect": {
        "de": "Richtig: Die Radiodurchsage bringt die Wettervorhersage für das gesamte Bundesgebiet Österreich.",
        "ar": "صحيح: التقرير الجوي مخصص لمختلف مناطق النمسا وتطورات الطقس فيها.",
        "fr": "Vrai : Le bulletin météorologique concerne l'ensemble du territoire autrichien."
      },
      "whyIncorrect": {
        "de": "Falsch widerspricht der Ansage „Sie hören nun den Wetterbericht für morgen... In ganz Österreich...“.",
        "ar": "خطأ يناقض استهلال النشرة بذكر النمسا صراحة.",
        "fr": "Faux contredit l'introduction mentionnant explicitement l'Autriche."
      }
    },
    "h8": {
      "quote": "Die Temperaturen erreichen 10 bis 19 Grad, am wärmsten im Süden und im Westen.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Laut Vorhersage werden die Höchstwerte im Süden und im Westen gemessen.",
        "ar": "الخيار b صحيح: تسجل درجات الحرارة أعلى معدلاتها في المناطق الغربية والجنوبية.",
        "fr": "L'option b est correcte : Les températures les plus douces sont attendues au sud et à l'ouest."
      },
      "whyIncorrect": {
        "de": "Im Norden weht frischer Wind (a) und der Osten ist kühler (c).",
        "ar": "المناطق الشمالية والشرقية تشهد رياحاً نشطة ودرجات حرارة أقل دفئاً.",
        "fr": "Le nord subit des vents frais et l'est reste plus frais."
      }
    },
    "h9": {
      "quote": "Schokoladenmuseum Waldenbuch, wir danken für Ihren Anruf!",
      "whyCorrect": {
        "de": "Falsch: Die Anrufer erreichen das Schokoladenmuseum Waldenbuch und keine Produktionsfabrik.",
        "ar": "خطأ: الرقم يخص متحف الشوكولاتة في فالدنبوخ وليس مصنعاً للإنتاج.",
        "fr": "Faux : Le répondeur est celui du musée du chocolat et non d'une usine de fabrication."
      },
      "whyIncorrect": {
        "de": "Richtig verwechselt das Museum und dessen Ausstellungsräume mit einer Fabrik.",
        "ar": "صحيح يخلط بين قاعات المعرض في المتحف والمنشأة الصناعية.",
        "fr": "Vrai confond l'espace muséal et ses ateliers avec une usine de confiserie."
      }
    },
    "h10": {
      "quote": "Eintritt in den Schoko-Laden frei.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Der Zugang zum Schoko-Laden ist kostenlos; Museum und Workshop kosten Eintritt.",
        "ar": "الخيار b صحيح: الدخول إلى متجر بيع الشوكولاتة مجاني تماماً دون أي رسوم.",
        "fr": "L'option b est correcte : L'accès à la boutique du musée est libre et gratuit."
      },
      "whyIncorrect": {
        "de": "Die Ausstellung kostet 4 Euro (a) und der Workshop in der Schokowerkstatt kostet 6 Euro (c).",
        "ar": "المعرض يتطلب 4 يورو وورشة العمل في المعمل تكلفتها 6 يورو.",
        "fr": "L'exposition coûte 4 euros et l'atelier découverte 6 euros."
      }
    },
    "h11": {
      "quote": "Frau Gerber und Herr Kroll von unserer Schule sind als Betreuer mit dabei.",
      "whyCorrect": {
        "de": "Lösung c ist richtig: Zwei Lehrkräfte der Schule begleiten die Reisegruppe als Betreuer.",
        "ar": "الخيار c صحيح: يرافق التلاميذ معلمون من المدرسة للإشراف على الرحلة.",
        "fr": "L'option c est correcte : Des enseignants de l'établissement accompagnent le groupe d'élèves."
      },
      "whyIncorrect": {
        "de": "Direktor (a) und Techniker (b) reisen nicht mit ins Ferienlager.",
        "ar": "مدير المدرسة أو الفني لا يشاركان في السفر مع الطلاب.",
        "fr": "Le directeur et le technicien de l'école ne font pas partie du voyage."
      }
    },
    "h12": {
      "quote": "Die Flugdaten haben Sie ja schon per Brief bekommen... nun möchte ich Ihnen einige wichtige Informationen über das jeweilige Tagesprogramm... geben.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: Die Flugzeiten und Reisedaten wurden den Eltern bereits vorab schriftlich mitgeteilt.",
        "ar": "الخيار a صحيح: مواعيد إقلاع ووصول الطائرة معروفة مسبقاً لأولياء الأمور عبر خطاب رسمي.",
        "fr": "L'option a est correcte : Les horaires de vol aller et retour ont déjà été transmis par courrier aux parents."
      },
      "whyIncorrect": {
        "de": "Das Tagesprogramm (b) und das Aussehen des Camps (c) werden erst jetzt am Informationsabend vorgestellt.",
        "ar": "البرنامج اليومي وتفاصيل المخيم يتم استعراضهما خلال هذا اللقاء المسائي.",
        "fr": "Le programme détaillé et les photos du camp sont précisément dévoilés lors de la réunion."
      }
    },
    "h13": {
      "quote": "Dann fahren wir mit einem Reisebus über Dresden und Pirna nach Papstdorf. Dort liegt das Feriendorf...",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Der Bus bringt die Schüler vom Flughafen nach Papstdorf, wo sich das Feriendorf befindet.",
        "ar": "الخيار b صحيح: تنقل الحافلة التلاميذ إلى قرية بابستدورف حيث يقع المخيم.",
        "fr": "L'option b est correcte : L'autocar conduit le groupe jusqu'à Papstdorf, lieu de villégiature."
      },
      "whyIncorrect": {
        "de": "Brandenburg ist der Flughafenort (a) und an Dresden (c) fährt der Bus lediglich vorbei.",
        "ar": "براندنبورغ هي موقع المطار ودريسدن محطة مرور في الطريق فقط.",
        "fr": "Brandebourg est le site de l'aéroport et Dresde une simple étape sur l'itinéraire."
      }
    },
    "h14": {
      "quote": "Jeweils acht Kinder teilen sich ein Häuschen, das aus zwei Schlafräumen mit je vier Betten... besteht.",
      "whyCorrect": {
        "de": "Lösung a ist richtig: In jedem Bungalow übernachten insgesamt acht Kinder (zwei Zimmer zu je vier Betten).",
        "ar": "الخيار a صحيح: يضم كل كوخ ثمانية أطفال مقسمين على غرفتين بكل منهما أربعة أسرّة.",
        "fr": "L'option a est correcte : Chaque bungalow accueille au total huit enfants (deux chambres de quatre lits)."
      },
      "whyIncorrect": {
        "de": "Vier Kinder (b) ist die Belegung pro Schlafraum, nicht für den gesamten Bungalow.",
        "ar": "أربعة أطفال هو عدد الأسرّة في الغرفة الواحدة وليس في كامل الكوخ.",
        "fr": "Quatre correspond au nombre de lits par chambre, non à la capacité totale du bungalow."
      }
    },
    "h15": {
      "quote": "Gefrühstückt wird im Camp. Mittags und abends essen wir in Gaststätten... das sind drei Mahlzeiten am Tag.",
      "whyCorrect": {
        "de": "Lösung b ist richtig: Die Verpflegung umfasst täglich drei feste Mahlzeiten (Frühstück, Mittag- und Abendessen).",
        "ar": "الخيار b صحيح: يحصل الطلاب يومياً على ثلاث وجبات غذائية متكاملة.",
        "fr": "L'option b est correcte : Les enfants bénéficient de trois repas complets par jour."
      },
      "whyIncorrect": {
        "de": "Das Frühstück gibt es im Camp, nicht in Gaststätten (a), und der Kiosk ist nur für private Süßigkeiten da (c).",
        "ar": "الإفطار يُقدم داخل المخيم وليس بالمطاعم، والكشك مخصص للمشتريات الخفيفة الفردية.",
        "fr": "Le petit-déjeuner est servi au camp et le kiosque sert uniquement aux friandises personnelles."
      }
    },
    "h16": {
      "quote": "Ich fahr nämlich jetzt in die Stadt und besorg noch ein paar Kleinigkeiten für meine Party.",
      "whyCorrect": {
        "de": "Richtig: Selina fährt in die Stadt, um Vorbereitungen und Einkäufe für ihre Geburtstagsfeier zu erledigen.",
        "ar": "صحيح: سيتينا متوجهة إلى المدينة لشراء مستلزمات حفل عيد ميلادها.",
        "fr": "Vrai : Selina se rend au centre-ville pour faire des courses en vue de sa fête d'anniversaire."
      },
      "whyIncorrect": {
        "de": "Falsch widerspricht Selinas Aussage an der Haltestelle.",
        "ar": "خطأ يناقض حديثها الصريح عند موقف الحافلة.",
        "fr": "Faux contredit ses propos explicites à l'arrêt de bus."
      }
    },
    "h17": {
      "quote": "Sie wollen nicht, dass wir bei uns zu Hause feiern. Ehrlich gesagt, will ich das auch gar nicht. Da fühlt man sich doch die ganze Zeit kontrolliert.",
      "whyCorrect": {
        "de": "Richtig: Selina möchte die Party nicht zu Hause veranstalten, um ständige elterliche Kontrolle zu vermeiden.",
        "ar": "صحيح: سيلينا لا ترغب مطلقاً في إقامة الحفلة بمنزلها لتفادي شعور الرقابة العائلية.",
        "fr": "Vrai : Selina ne veut absolument pas faire la fête chez elle pour ne pas se sentir surveillée."
      },
      "whyIncorrect": {
        "de": "Falsch ignoriert Selinas Bestätigung „Ehrlich gesagt, will ich das auch gar nicht.“.",
        "ar": "خطأ يتجاهل رغبتها الأكيدة في إقامة الحفلة خارج المنزل.",
        "fr": "Faux ignore son refus catégorique d'organiser l'événement au domicile familial."
      }
    },
    "h18": {
      "quote": "Sie haben mir sogar angeboten, das Party-Zelt im Jugendzentrum zu mieten.",
      "whyCorrect": {
        "de": "Falsch: Ihre Eltern sind keineswegs gegen die Party; sie finanzieren sogar die Miete für das Partyzelt.",
        "ar": "خطأ: والداها لا يعارضان الاحتفال إطلاقاً، بل عرضا عليها استئجار خيمة بمركز الشباب.",
        "fr": "Faux : Ses parents ne sont pas contre la fête ; ils lui ont même proposé de louer la tente du centre de jeunes."
      },
      "whyIncorrect": {
        "de": "Richtig übersieht die tatkräftige Unterstützung der Eltern.",
        "ar": "صحيح يتجاهل المساعدة المادية والموافقة التامة من والديها.",
        "fr": "Vrai néglige le soutien financier et moral apporté par ses parents."
      }
    },
    "h19": {
      "quote": "Du weißt doch, ich möchte nächstes Jahr eine Ausbildung zur Fremdsprachenkorrespondentin machen... und da brauche ich einfach mehr Sprachpraxis.",
      "whyCorrect": {
        "de": "Richtig: Für ihre Ausbildung zur Fremdsprachenkorrespondentin ist der Sprachaufenthalt in England von großer Bedeutung.",
        "ar": "صحيح: رحلة إنجلترا مهمة جداً لطموحها المهني في دراسة المراسلات باللغات الأجنبية.",
        "fr": "Vrai : Son séjour linguistique en Angleterre est capital pour sa future formation de correspondancière en langues."
      },
      "whyIncorrect": {
        "de": "Falsch widerspricht Selinas Erläuterung ihres Ausbildungswunsches.",
        "ar": "خطأ يناقض شرحها المفصل لأهمية إتقان اللغة لعملها المستقبلي.",
        "fr": "Faux contredit ses explications sur son projet d'études professionnelles."
      }
    },
    "h20": {
      "quote": "Jan: Da haben deine Eltern aber ganz recht. Ein Sprachkurs in England ist doch viel sinnvoller als eine Riesenparty.",
      "whyCorrect": {
        "de": "Richtig: Jan teilt die Ansicht von Selinas Eltern, dass die Sprachreise sinnvoller ist als eine teure Feier.",
        "ar": "صحيح: يان يتفق تماماً مع رأي والديها بأن دورة اللغة في إنجلترا أفضل وأجدى من إقامة حفلة باذخة.",
        "fr": "Vrai : Jan approuve l'avis des parents selon lequel un séjour linguistique est bien plus profitable."
      },
      "whyIncorrect": {
        "de": "Falsch übersieht Jans Bestätigung „Da haben deine Eltern aber ganz recht.“.",
        "ar": "خطأ يتجاهل تأييد يان الصريح لموقف الوالدين.",
        "fr": "Faux ignore l'accord total de Jan avec les parents de son amie."
      }
    },
    "h21": {
      "quote": "Selina: Diesen Angeber kann ich sowieso nicht leiden.",
      "whyCorrect": {
        "de": "Richtig: Selina bezeichnet Pascal als Angeber und mag ihn überhaupt nicht.",
        "ar": "صحيح: سيلينا تصف باسكال بالمغرور والمتباهي ولا تطيق وجوده إطلاقاً.",
        "fr": "Vrai : Selina considère Pascal comme un vantard et ne le supporte pas du tout."
      },
      "whyIncorrect": {
        "de": "Falsch ignoriert Selinas deutliche Abneigung gegenüber Pascal.",
        "ar": "خطأ يتجاهل نفورها الواضح وعبارتها الصريحة بعدم حبه.",
        "fr": "Faux ignore son antipathie manifeste et clairement énoncée envers Pascal."
      }
    },
    "h22": {
      "quote": "Jan: Das war ein Superfest... und gekostet hat es fast gar nichts, weil jeder was zu essen und zu trinken mitgebracht hat.",
      "whyCorrect": {
        "de": "Falsch: Pascals Party war sehr günstig und kostete fast nichts, da alle Gäste Speisen und Getränke mitbrachten.",
        "ar": "خطأ: حفلة باسكال لم تكلف مالاً يذكر، لأن كل مدعو أحضر معه طعاماً وشراباً.",
        "fr": "Faux : La soirée de Pascal n'a quasiment rien coûté car chacun a apporté quelque chose à manger et à boire."
      },
      "whyIncorrect": {
        "de": "Richtig steht im klaren Widerspruch zu Jans Aussage „gekostet hat es fast gar nichts“.",
        "ar": "صحيح يناقض تأكيد يان بأن التكاليف كانت شبه معدومة.",
        "fr": "Vrai contredit le constat selon lequel la fête a été très économique."
      }
    },
    "h23": {
      "quote": "Moderatorin: Wenn man sich über Workcamps informiert, stellt man fest, dass es eine riesige Auswahl an Projekten gibt.",
      "whyCorrect": {
        "de": "Lösung a (Moderatorin) ist richtig: Die Moderatorin spricht über das riesige weltweite Angebot an Workcamp-Projekten.",
        "ar": "الخيار a (المذيعة) صحيح: هي التي تطرح فكرة التنوع الهائل والخيارات الواسعة لمشاريع مخيمات العمل التطوعي.",
        "fr": "L'option a (Animatrice) est correcte : La présentatrice évoque l'immense choix de projets de chantiers disponibles."
      },
      "whyIncorrect": {
        "de": "Die beiden Gäste Iris (b) und Kai (c) berichten über ihre konkreten Länder und Stationen.",
        "ar": "الضيفان تحدثا عن تجربتيهما في اليونان والإكوادور وليس عن إحصائيات المشاريع العامة.",
        "fr": "Les invités se concentrent sur leurs expériences personnelles respectives."
      }
    },
    "h24": {
      "quote": "Iris Berger: Herrliches Wetter, großes Freizeitangebot, antike Stätten und viele Sehenswürdigkeiten machen das Land sehr attraktiv.",
      "whyCorrect": {
        "de": "Lösung b (Iris Berger) ist richtig: Iris hebt die vielen Freizeitmöglichkeiten und Ausflugsziele in Griechenland hervor.",
        "ar": "الخيار b (إيريس بيرغر) صحيح: هي التي تؤكد على وفرة الأنشطة الترفيهية والمعالم الأثرية في أوقات الفراغ.",
        "fr": "L'option b (Iris Berger) est correcte : Iris souligne la diversité des activités de loisirs et des visites culturelles."
      },
      "whyIncorrect": {
        "de": "Weder die Moderatorin (a) noch Kai (c) begründen so die Freizeitvorteile.",
        "ar": "المذيعة أو كاي لم يتطرقا لهذه المعالم السياحية والأنشطة الترفيهية في اليونان.",
        "fr": "Ni l'animatrice ni Kai n'abordent les loisirs sous cet angle touristique."
      }
    },
    "h25": {
      "quote": "Kai Weser: Tja, und nicht zuletzt wollte ich meine Spanischkenntnisse verbessern.",
      "whyCorrect": {
        "de": "Lösung c (Kai Weser) ist richtig: Kai erklärt, dass er durch den Einsatz in Ecuador sein Spanisch verbessern wollte.",
        "ar": "الخيار c (كاي فيزر) صحيح: يذكر كاي أن أحد أهدافه الرئيسية كان تعزيز مستواه في اللغة الإسبانية.",
        "fr": "L'option c (Kai Weser) est correcte : Kai explique qu'il souhaitait avant tout perfectionner son espagnol."
      },
      "whyIncorrect": {
        "de": "Iris (b) sprach nicht über den Erwerb von Fremdsprachen bei ihrem Einsatz in Griechenland.",
        "ar": "إيريس لم تتحدث عن تعلم لغات جديدة أثناء عملها في حماية السلاحف.",
        "fr": "Iris n'a pas axé son projet sur l'apprentissage linguistique."
      }
    },
    "h26": {
      "quote": "Moderatorin: Freiwilligenarbeit in einem Lebenslauf macht immer einen guten Eindruck. Spielte das eine Rolle bei eurer Entscheidung?",
      "whyCorrect": {
        "de": "Lösung a (Moderatorin) ist richtig: Die Gesprächsleiterin bringt das Argument des Vorteils im Lebenslauf ein.",
        "ar": "الخيار a (المذيعة) صحيح: هي من طرحت مسألة أن العمل التطوعي يترك انطباعاً إيجابياً في السيرة الذاتية.",
        "fr": "L'option a (Animatrice) est correcte : La journaliste avance l'atout du bénévolat dans un curriculum vitae."
      },
      "whyIncorrect": {
        "de": "Iris (b) widerspricht dem ausdrücklich („sehe ich aber nicht so“) und Kai (c) hatte gar nicht daran gedacht.",
        "ar": "إيريس عارضت هذا الطرح تماماً، بينما كاي أوضح أنه لم يفكر بالسيرة الذاتية إطلاقاً.",
        "fr": "Iris conteste ce point de vue et Kai précise n'y avoir même pas songé."
      }
    },
    "h27": {
      "quote": "Iris Berger: Ich versuchte durch persönliche Kontakte und über Flyer Helfer und Sponsoren zu werben.",
      "whyCorrect": {
        "de": "Lösung b (Iris Berger) ist richtig: Iris schildert ihre Aufgabe, durch Infoblätter neue Helfer und Unterstützer zu gewinnen.",
        "ar": "الخيار b (إيريس بيرغر) صحيح: تتحدث عن دورها في العلاقات العامة واستقطاب متطوعين وداعمين جدد عبر المنشورات.",
        "fr": "L'option b (Iris Berger) est correcte : Iris explique qu'elle distribuait des prospectus pour recruter des volontaires."
      },
      "whyIncorrect": {
        "de": "Kai (c) pflanzte und klärte die Bevölkerung auf, warb aber keine Helfer per Flyer an.",
        "ar": "كاي ركز على إعادة التشجير وتوعية الأهالي وليس على توزيع المنشورات لجلب المتطوعين.",
        "fr": "Kai participait au reboisement et à la sensibilisation, non au démarchage de sponsors."
      }
    },
    "h28": {
      "quote": "Kai Weser: ...und so habe ich bei der Aufklärung geholfen. Wissen Sie: Es ist besonders wichtig, die Bevölkerung über den Umweltschutz aufzuklären.",
      "whyCorrect": {
        "de": "Lösung c (Kai Weser) ist richtig: Kai betont die Bedeutung der Umweltaufklärung der lokalen Bürger.",
        "ar": "الخيار c (كاي فيزر) صحيح: يؤكد كاي على ضرورة توعية السكان المحليين وتثقيفهم بشأن حماية البيئة.",
        "fr": "L'option c (Kai Weser) est correcte : Kai insiste sur l'importance d'informer les habitants sur l'écologie."
      },
      "whyIncorrect": {
        "de": "Iris (b) arbeitete im Schildkrötenschutz und betrieb Sponsorenwerbung.",
        "ar": "إيريس انصب عملها الميداني على حماية السلاحف واستقطاب الرعاة الماليين.",
        "fr": "Iris s'occupait de la sauvegarde des tortues marines et des relations publiques."
      }
    },
    "h29": {
      "quote": "Kai Weser: Für jemanden aus Deutschland ist ein Land wie Ecuador eine andere Welt... Vieles, was für einen Europäer eine Selbstverständlichkeit ist, gibt es da nicht...",
      "whyCorrect": {
        "de": "Lösung c (Kai Weser) ist richtig: Kai schildert den Kulturschock und unerwartete Lebensbedingungen in Ecuador für Europäer.",
        "ar": "الخيار c (كاي فيزر) صحيح: يروي الصدمة الثقافية والاختلافات الكبيرة في أمريكا اللاتينية التي قد تفاجئ الأوروبيين.",
        "fr": "L'option c (Kai Weser) est correcte : Kai relate le choc culturel et les réalités inattendues pour un Européen."
      },
      "whyIncorrect": {
        "de": "Iris (b) war in Griechenland (Europa) und hatte lediglich einen Sonnenbrand erlitten.",
        "ar": "إيريس سافرت إلى اليونان داخل أوروبا ولم تتعرض لمثل هذا الاختلاف المعيشي الكبير.",
        "fr": "Iris a séjourné en Grèce sans éprouver ce bouleversement culturel."
      }
    },
    "h30": {
      "quote": "Iris Berger: Und ganz sicher ein tolles Gefühl, zu einem guten Zweck beigetragen zu haben.",
      "whyCorrect": {
        "de": "Lösung b (Iris Berger) ist richtig: Iris beschreibt das befriedigende Gefühl, sich sinnvoll für eine gute Sache engagiert zu haben.",
        "ar": "الخيار b (إيريس بيرغر) صحيح: تعبر إيريس عن السعادة والارتياح الداخلي للمساهمة في تحقيق هدف إنساني نبيل.",
        "fr": "L'option b (Iris Berger) est correcte : Iris évoque la grande satisfaction d'avoir agi pour une cause juste."
      },
      "whyIncorrect": {
        "de": "Kai (c) erwähnt das Entdecken eigener Grenzen, nicht dieses spezifische Zitat.",
        "ar": "كاي تحدث عن اكتشاف القدرات والحدود الشخصية، وليس عن هذا الشعور المحدد بالمساعدة.",
        "fr": "Kai a mentionné la découverte de ses limites personnelles plutôt que cette impression."
      }
    }
  },
  "translations": {
    "parts": {
      "1": {
        "instructions": {
          "ar": "اقرأ النص والمهام من 1 إلى 6 المتعلقة به. اختر: هل العبارات صحيحة أم خاطئة؟",
          "fr": "Lisez le texte et les exercices 1 à 6 associés. Choisissez : les affirmations sont-elles vraies ou fausses ?"
        },
        "articles": [
          {
            "heading": {
              "ar": "هكذا أعيش",
              "fr": "Ainsi va ma vie"
            },
            "body": {
              "ar": [
                "اسمي كليمنس، عمري 12 سنة ووالدي دبلوماسي. لذلك ننتقل كل ثلاث إلى أربع سنوات للعيش في بلد آخر. ولدت في ألمانيا، ولكن عندما كان عمري أسبوعين فقط، سافرت مع والدتي إلى بيروت، عاصمة لبنان. لا أتذكر الكثير عن سنواتي الأولى هناك.",
                "أول بلد أتذكره جيداً هو البرتغال. كان لدينا منزل وردي اللون بحديقة واسعة. في عطلات نهاية الأسبوع كنا نذهب كثيراً إلى شاطئ رائع يقع شمال لشبونة. كان البحر – في الواقع يجب أن أقول «المحيط» – أزرق بديعاً، وكنت أحب جداً اللعب في الرمال.",
                "كان عليّ تعلم الإنجليزية في سن مبكرة جداً؛ فقد التحقت في البرتغال بروضة أطفال دولية. كان جميع الأطفال قادمين من بلدان أخرى، ولذلك كان الحديث يجري بالإنجليزية.",
                "عندما بلغت الخامسة من عمري، انتقلنا إلى برلين. في البداية لم يعجبني الوضع هناك إطلاقاً – كان الجو بارداً جداً في نظري، ولا بحر ولا زيتون أسود كبير على الإفطار! ولكن مع الوقت يعتاد المرء على الجديد، وفجأة أصبحت ألمانيا وطني. وظننت أننا سنبقى هنا إلى الأبد، لكن ظني خاب! على أي حال بقينا سبع سنوات في برلين، ثم توجب علينا حزم الحقائب مجدداً.",
                "منذ نصف عام أعيش مع عائلتي في نيويورك. وأنا سعيد الآن بقدرتي على التحدث بالإنجليزية. نيويورك من أكثر مدن العالم إثارة؛ وهي تختلف في معظم الأمور تماماً عن برلين: فبعض أحيائها يقصدها الناس فقط للعمل، وفي أحياء أخرى يعيشون، وهناك أحياء لا يذهبون إليها إطلاقاً لأنها شديدة الخطورة.",
                "أدركت مع مرور الوقت أن التأقلم مع بلد جديد يحتاج ببساطة إلى وقت. وبالتأكيد سأشعر يوماً ما بأن نيويورك كوطن لي أيضاً. أحياناً أفكر أنه سيكون رائعاً أن يعيش المرء دائماً في مكان واحد فقط. ولكن عندما أعيد التفكير ملياً، أجد أن التعرف على العالم وتجربة بلدان جديدة أمر مثير وممتع للغاية."
              ],
              "fr": [
                "Je m'appelle Clemens, j'ai 12 ans et mon père est diplomate. C'est pourquoi nous déménageons tous les trois ou quatre ans dans un nouveau pays. Je suis né en Allemagne, mais à peine âgé de deux semaines, je m'envolais déjà avec ma mère pour Beyrouth, la capitale du Liban. De ces premières années, je ne me rappelle presque rien.",
                "Le premier pays dont je me souvienne est le Portugal. Nous avions une maison rose avec un grand jardin. Le week-end, nous allions souvent sur une magnifique plage au nord de Lisbonne. La mer – je devrais plutôt dire « l'océan » – y était d'un bleu splendide et j'adorais jouer dans le sable.",
                "J'ai dû apprendre l'anglais très tôt. Au Portugal, j'allais dans une école maternelle internationale où tous les enfants venaient de différents pays. On y parlait donc anglais.",
                "À mes cinq ans, nous avons déménagé à Berlin. Au début, cela ne me plaisait pas du tout : il faisait trop froid et il n'y avait ni mer ni grosses olives noires au petit-déjeuner. Mais on s'habitue à la nouveauté et soudain l'Allemagne est devenue mon chez-moi. Je pensais que nous y resterions pour toujours. Erreur : nous sommes tout de même restés sept ans à Berlin avant de devoir refaire nos valises.",
                "Depuis six mois, je vis avec ma famille à New York. Je suis ravi de savoir parler anglais. New York est l'une des villes les plus captivantes au monde, radicalement différente de Berlin : dans certains quartiers, les gens ne vont que pour travailler, dans d'autres ils résident, et dans certains ils ne mettent jamais les pieds car c'est trop dangereux.",
                "J'ai compris qu'il faut du temps pour s'acclimater à un nouveau pays. Un jour, New York me semblera sûrement familière comme ma patrie. Parfois, je me dis qu'il serait agréable de vivre toujours au même endroit. Mais à la réflexion, c'est formidable et passionnant de découvrir le monde."
              ]
            }
          }
        ],
        "example": {
          "text": {
            "ar": "والدة كليمنس تنحدر من لبنان.",
            "fr": "La mère de Clemens est originaire du Liban."
          }
        },
        "questions": {
          "1": {
            "text": {
              "ar": "كليمنس بالكاد يتذكر وقته في لبنان.",
              "fr": "Clemens ne se souvient presque plus de son séjour au Liban."
            }
          },
          "2": {
            "text": {
              "ar": "منزل كليمنس في البرتغال كان يقع على شاطئ البحر مباشرة.",
              "fr": "La maison de Clemens au Portugal était située en bord de mer."
            }
          },
          "3": {
            "text": {
              "ar": "التحق كليمنس بروضة أطفال ناطقة باللغة الإنجليزية.",
              "fr": "Clemens a fréquenté un jardin d'enfants anglophone."
            }
          },
          "4": {
            "text": {
              "ar": "عاش كليمنس في برلين حتى سن السابعة من عمره.",
              "fr": "Clemens a habité à Berlin jusqu'à l'âge de sept ans."
            }
          },
          "5": {
            "text": {
              "ar": "يرى كليمنس أن هناك فروقاً كبيرة بين برلين ونيويورك.",
              "fr": "Clemens estime qu'il y a de grandes différences entre Berlin et New York."
            }
          },
          "6": {
            "text": {
              "ar": "يشعر كليمنس الآن في نيويورك وكأنه في وطنه.",
              "fr": "À New York, Clemens se sent déjà tout à fait chez lui."
            }
          }
        }
      },
      "2": {
        "instructions": {
          "ar": "اقرأ النص الصحفي والمهام من 7 إلى 9 المتعلقة به. اختر عند كل مهمة الإجابة الصحيحة a أو b أو c.",
          "fr": "Lisez le texte de presse et les exercices 7 à 9 associés. Choisissez la bonne réponse a, b ou c pour chaque exercice."
        },
        "articles": [
          {
            "heading": {
              "ar": "ني هاو، يا أمي!",
              "fr": "Ni Hao, maman !"
            },
            "body": {
              "ar": [
                "عندما يبدي تونغتشون جيانغ إعجابه الكبير بـ «أمه»، يعتقد زملاؤه الطلاب أحياناً أنه يتحدث عن والدته في شنغهاي. لكنه في الحقيقة يقصد ريتا ياكوبسون من مدينة أوفنبورغ، حيث يجلس كل يوم أحد على أريكتها متناولاً كعك الرمل.",
                "تشارك ريتا وزوجها جيرالد ياكوبسون في مشروع «كبار السن من أجل الطلاب الأجانب»، ويعملان كوالدين بديلين لتونغتشون القادم من الصين وثلاثة طلاب أجانب آخرين.",
                "ما تفعله عائلة ياكوبسون مع هؤلاء الطلاب يشبه دورة تدريبية مكثفة في تفاصيل الحياة الأسرية الألمانية الطبيعية؛ فهم يقومون بجولات مشي في الطبيعة، ويجلسون في غرفة المعيشة للعب الورق، ويسألون تونغتشون ما يسأله الآباء لأبنائهم الطلاب عادة: كيف تسير الأمور في الجامعة؟ وكيف هي علاماتك؟ ويقول تونغتشون: «عندما أحصل على علامة ممتازة، أتصل أولاً بماما ريتا».",
                "بالنسبة لعائلة ياكوبسون، يعتبر طالب علوم الحاسوب القادم من شنغهاي ابناً مؤقتاً. تقول ريتا ياكوبسون: «عندما غادر أبناؤنا المنزل كبروا واستقلوا، أردنا الاهتمام بآخرين؛ ويشمل ذلك كل شيء من غسيل الملابس حتى الاحتفال المشترك برأس السنة».",
                "وتظهر الإحصاءات أن كبار السن في أوفنبورغ يبدون أكثر جاذبية للطلاب الأجانب من صخب حفلات برلين؛ ففي بداية إقامتهم، يرغب 20% فقط من الطلاب بالبقاء في ألمانيا بعد التخرج، ولكن في نهاية دراستهم ترتفع النسبة إلى 80%، وهذا يوضح كل شيء."
              ]
            }
          }
        ],
        "example": {
          "text": {
            "ar": "تونغتشون ...",
            "fr": "Tongchun..."
          },
          "options": {
            "ar": [
              "يتصل بريتا ياكوبسون كلما حصل على علامة جيدة.",
              "نادراً ما يتصل بوالدته في شنغهاي.",
              "يجد الحياة الأسرية الألمانية فظيعة."
            ],
            "fr": [
              "téléphone toujours à Rita Jakobson quand il a une bonne note.",
              "n'appelle que rarement sa mère à Shanghai.",
              "trouve la vie de famille allemande terrible."
            ]
          }
        },
        "questions": {
          "7": {
            "text": {
              "ar": "يدور هذا النص حول ...",
              "fr": "Ce texte traite de..."
            },
            "options": {
              "ar": [
                "مدى جودة العلاقة بين الطلاب الأجانب والألمان.",
                "المشاكل التي يواجهها طالب وافد من الصين في ألمانيا.",
                "التعريف بمشروع «كبار السن من أجل الطلاب الأجانب»."
              ],
              "fr": [
                "la bonne entente entre étudiants étrangers et Allemands.",
                "des difficultés d'un étudiant chinois en Allemagne.",
                "ce qu'est le projet « Des seniors pour les étudiants étrangers »."
              ]
            }
          },
          "8": {
            "text": {
              "ar": "الزوجان ياكوبسون ...",
              "fr": "Le couple Jakobson..."
            },
            "options": {
              "ar": [
                "لم يرغبا في أن يغادر أبناؤهما المنزل.",
                "يلتقيان بالطلاب الأجانب بانتظام.",
                "أخذا دورة تدريبية مكثفة في الثقافة الألمانية."
              ],
              "fr": [
                "ne voulait pas que ses propres enfants quittent le domicile.",
                "voit ses étudiants étrangers régulièrement.",
                "a d'abord suivi un stage accéléré de culture allemande."
              ]
            }
          },
          "9": {
            "text": {
              "ar": "الكثير من الطلاب الأجانب في أوفنبورغ ...",
              "fr": "De nombreux étudiants étrangers à Offenburg..."
            },
            "options": {
              "ar": [
                "يرغبون في البقاء في ألمانيا.",
                "يفضلون الاحتفال في برلين.",
                "مروا بتجارب سيئة في ألمانيا."
              ],
              "fr": [
                "aimeraient rester en Allemagne.",
                "aiment faire la fête à Berlin.",
                "ont vécu de mauvaises expériences en Allemagne."
              ]
            }
          }
        },
        "instructions2": {
          "ar": "اقرأ النص الصحفي والمهام من 10 إلى 12 المتعلقة به. اختر عند كل مهمة الإجابة الصحيحة a أو b أو c.",
          "fr": "Lisez le texte de presse et les exercices 10 à 12 associés. Choisissez la bonne réponse a, b ou c pour chaque exercice."
        },
        "articles2": [
          {
            "heading": {
              "ar": "طابع ويب (WebStamp): طوابع بريدية شخصية",
              "fr": "WebStamp : des timbres personnalisés"
            },
            "body": {
              "ar": [
                "ابتكر البريد السويسري فكرة جديدة وخلاقة من خلال طابع «WebStamp» الإلكتروني. يتيح هذا النظام إمكانية تصميم وطباعة الطوابع البريدية الخاصة مباشرة من جهاز الكمبيوتر. ويعتبر حل التخليص البريدي الرقمي هذا جذاباً بوجه خاص للشركات؛ فالرسائل والطرود ذات الطوابع المخصصة تلفت الانتباه وتثير اهتمام المستلم، كما تمثل إعلاناً مصغراً يرسخ اسم الشركة لدى العملاء.",
                "الاستفادة من مزايا WebStamp سهلة للغاية؛ فبعد التسجيل في موقع البريد السويسري، يمكن البدء فوراً في تصميم طابعك الفردي، مع حرية تامة في اختيار الموضوع: صور شخصية، شعارات شركات ومنتجات، رسومات أو رسائل إعلانية.",
                "يعمل WebStamp عبر الإنترنت وهو مجاني تماماً من حيث الخدمة؛ إذ يدفع المستخدم فقط قيمة التخليص البريدي الفعلي للطابع. فالطابع الذي قيمته فرنك واحد يكلف فرنكاً واحداً فقط. وتعتبر هذه الطوابع الحديثة صالحة للاستخدام في الداخل والخارج على حد سواء.",
                "وبما أن العملية برمتها تدار رقمياً، تتوفر خيارات متعددة لتنسيق الطباعة؛ مثلاً في حال الرغبة في دمج عنوان المستلم مباشرة داخل الطابع، مع إمكانية استيراد العناوين بسهولة من ملفات Excel.",
                "تتوفر معلومات وأفكار تصميمية مفصلة في كتيب إرشادات البريد السويسري عبر موقعه الإلكتروني."
              ]
            }
          }
        ],
        "questions2": {
          "10": {
            "text": {
              "ar": "يدور هذا النص حول ...",
              "fr": "Dans ce texte, il est question..."
            },
            "options": {
              "ar": [
                "كيفية عمل البريد السويسري.",
                "امتلاك البريد السويسري لموقع إلكتروني شيق.",
                "إمكانية قيام الشخص بصنع طابعه البريدي بنفسه."
              ],
              "fr": [
                "du fonctionnement de la Poste suisse.",
                "du fait que la Poste suisse a un site Internet intéressant.",
                "de la possibilité de créer soi-même un timbre postal."
              ]
            }
          },
          "11": {
            "text": {
              "ar": "طابع WebStamp ...",
              "fr": "Le WebStamp..."
            },
            "options": {
              "ar": [
                "له نفس سعر الطابع البريدي العادي.",
                "يسري فقط داخل سويسرا.",
                "ابتكرته شركة إعلانات ودعاية."
              ],
              "fr": [
                "coûte le même prix qu'un timbre classique.",
                "n'est valable qu'en Suisse.",
                "a été inventé par une agence publicitaire."
              ]
            }
          },
          "12": {
            "text": {
              "ar": "عنوان المستلم ...",
              "fr": "L'adresse du destinataire..."
            },
            "options": {
              "ar": [
                "يجب كتابته حتماً على الطابع.",
                "يمكن نقله واستيراده من برنامج إكسل.",
                "تتم طباعته عبر برنامج إضافي منفصل."
              ],
              "fr": [
                "doit obligatoirement figurer sur le WebStamp.",
                "peut être importée depuis le logiciel Excel.",
                "s'imprime au moyen d'un logiciel spécifique."
              ]
            }
          }
        }
      },
      "3": {
        "instructions": {
          "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j من مختلف وسائل الإعلام الناطقة بالألمانية. اختر: أي إعلان يناسب أي موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. لا يمكنك استخدام إعلان المثال مجدداً. إذا لم تجد إعلاناً مناسباً لموقف ما، فاكتب 0.",
          "fr": "Lisez les situations 13 à 19 et les annonces a à j issues de médias germanophones. Choisissez : quelle annonce correspond à quelle situation ? Chaque annonce ne s'utilise qu'une fois. Si aucune annonce ne convient, écrivez 0."
        },
        "ads": {
          "a": {
            "ar": "مطلوب عاجلاً: سيدة أو سيد يوفران منزلاً جديداً (مع حديقة) لكلب كوكر سبانيل أحمر ووديع (ذكر، مخصي، 5 سنوات ونصف) بعد وفاة صاحبته. هاتف: 089/3095486.",
            "fr": "Recherche urgente : maîtresse ou maître pour offrir un nouveau foyer (avec jardin) à un cocker spaniel roux (mâle castré, 5 ans et demi) suite au décès de sa propriétaire. Tél. : 089/3095486."
          },
          "b": {
            "ar": "مهر حمار (ديانا) بني اللون، مولود في 21 يونيو، للبيع. عائلة ديتهالم، مولهايم، هاتف: 07631-7192.",
            "fr": "Ânonne Diana, marron, née le 21 juin, à vendre. Famille Diethalm, Müllheim, tél. : 07631-7192."
          },
          "c": {
            "ar": "القطة المسكينة «بلاكي»، 4 سنوات، شديدة اللطف والهدوء، تركها أصحابها وحيدة عند انتقالهم! من يستقبلها بحب؟ هاتف: 03862/32681.",
            "fr": "Pauvre chatte « Blacky », 4 ans, extrêmement douce, abandonnée lors d'un déménagement ! Qui l'accueillera avec amour ? Tél. : 03862/32681."
          },
          "d": {
            "ar": "مطلوب البحث عن الببغاء الرمادي «بورلي» المفقود منذ 1 يونيو من الحي 21 بفيينا، أليف ومستأنس جداً. هاتف: 01/2906043، مكافأة: 2000.",
            "fr": "Recherche perroquet gris « Burli », envolé le 1er juin du 21e arrondissement de Vienne. Très affectueux. Tél. : 01/2906043. Récompense : 2000."
          },
          "e": {
            "ar": "فراخ ببغاوات رمادية صغيرة، تمت تربيتها يدوياً بعناية للبيع، هاتف: 02166/930305.",
            "fr": "Bébés perroquets gris élevés à la main avec soin à vendre. Tél. : 02166/930305."
          },
          "f": {
            "ar": "أستقبل كلبكم أو قطتكم للرعاية المؤقتة أثناء عطلتكم وسفركم! هاتف: 08084/529763.",
            "fr": "Prends en pension votre chien ou chat pendant vos vacances ! Tél. : 08084/529763."
          },
          "g": {
            "ar": "خبرتنا في خدمة حيوانك! عيادة سفينة نوح (ARCHE NOAH) بسالزبورغ: هل ترغب في الاستمتاع بعطلتك دون قلق على حيوانك الأليف؟ نحن نرعى الحيوانات الصغيرة بعناية وحب طوال هذه الفترة!",
            "fr": "Notre expertise pour votre animal ! Clinique vétérinaire ARCHE NOAH à Salzbourg : profitez de vos vacances sans souci, nous gardons avec tendresse vos petits animaux pendant votre absence !"
          },
          "h": {
            "ar": "أستقبل كلبك للرعاية أثناء العطلة أو خلال ساعات النهار. للكلاب المناسبة للمنازل والشقق فقط. هاتف: 0173-28851199 أو 0231-7284898.",
            "fr": "Garde de votre chien pendant vos vacances ou en journée. Uniquement pour chiens d'appartement. Tél. : 0173-28851199 ou 0231-7284898."
          },
          "i": {
            "ar": "أطلب أو أبحث عن حوض أسماك مجاني (مستعمل أو جديد) من 30 إلى 320 لتراً مع ملحقاته، هاتف: 07631/18357.",
            "fr": "Cherche aquarium gratuit (neuf ou d'occasion), 30 à 320 l avec accessoires. Tél. : 07631/18357."
          },
          "j": {
            "ar": "05.03 يوم الأسماك والشعب المرجانية: من 11 إلى 16 في حوض موندنهوف: بيع أسماك، نباتات، جمبري، طحالب وشعب مرجانية وإكسسوارات.",
            "fr": "05.03 Journée poissons et coraux : 11h-16h à l'aquarium de Mundenhof : vente de poissons, plantes, crevettes, coraux et accessoires."
          }
        },
        "questions": {
          "13": {
            "ar": "ترغب سوزان في السفر لقضاء العطلة ولا تعرف من يمكنه الاعتناء بفأرها الأبيض الصغير خلال تلك الفترة.",
            "fr": "Susanne veut partir en vacances et ne sait pas qui pourrait garder sa petite souris blanche pendant ce temps.",
            "text": {
              "ar": "ترغب سوزان في السفر لقضاء العطلة ولا تعرف من يمكنه الاعتناء بفأرها الأبيض الصغير خلال تلك الفترة.",
              "fr": "Susanne veut partir en vacances et ne sait pas qui pourrait garder sa petite souris blanche pendant ce temps."
            }
          },
          "14": {
            "ar": "توماس أعزب ولديه كلب داتشل. وقد اشتكى الجيران من نباح الكلب في الشقة عندما يكون توماس في المكتب نهاراً، ويريد حل المشكلة.",
            "fr": "Thomas est célibataire et possède un teckel. Les voisins se sont plaints du bruit en journée pendant qu'il est au bureau. Il souhaite régler le problème.",
            "text": {
              "ar": "توماس أعزب ولديه كلب داتشل. وقد اشتكى الجيران من نباح الكلب في الشقة عندما يكون توماس في المكتب نهاراً، ويريد حل المشكلة.",
              "fr": "Thomas est célibataire et possède un teckel. Les voisins se sont plaints du bruit en journée pendant qu'il est au bureau. Il souhaite régler le problème."
            }
          },
          "15": {
            "ar": "عائلة شميت لديها حديقة كبيرة وكلبة برناردين، ومستعدة لاستقبال كلب ثانٍ لكي لا تبقى كلبتهم وحيدة، على ألا يكون كبيراً جداً.",
            "fr": "La famille Schmidt a un grand jardin et une chienne saint-bernard. Pour lui tenir compagnie, elle accueillerait volontiers un second chien pas trop grand.",
            "text": {
              "ar": "عائلة شميت لديها حديقة كبيرة وكلبة برناردين، ومستعدة لاستقبال كلب ثانٍ لكي لا تبقى كلبتهم وحيدة، على ألا يكون كبيراً جداً.",
              "fr": "La famille Schmidt a un grand jardin et une chienne saint-bernard. Pour lui tenir compagnie, elle accueillerait volontiers un second chien pas trop grand."
            }
          },
          "16": {
            "ar": "يضطر السيد ألبرشت إلى الانتقال لظروف العمل ولا يستطيع أخذ كلبه معه، ويبحث عن مأوى دائم له.",
            "fr": "M. Albrecht doit déménager pour raisons professionnelles et ne peut emmener son chien. Il lui cherche un nouveau foyer.",
            "text": {
              "ar": "يضطر السيد ألبرشت إلى الانتقال لظروف العمل ولا يستطيع أخذ كلبه معه، ويبحث عن مأوى دائم له.",
              "fr": "M. Albrecht doit déménager pour raisons professionnelles et ne peut emmener son chien. Il lui cherche un nouveau foyer."
            }
          },
          "17": {
            "ar": "ترغب إيفا في شراء بعض الأسماك لحوضها المائي الجديد والكبير.",
            "fr": "Pour son nouvel aquarium géant, Eva souhaite acheter quelques poissons.",
            "text": {
              "ar": "ترغب إيفا في شراء بعض الأسماك لحوضها المائي الجديد والكبير.",
              "fr": "Pour son nouvel aquarium géant, Eva souhaite acheter quelques poissons."
            }
          },
          "18": {
            "ar": "يريد كارل اقتناء قطة، فهو يفضل هذه الحيوانات لأنها مستقلة ولا تتطلب الكثير من العناية.",
            "fr": "Karl souhaite adopter un chat, appréciant ces animaux très autonomes demandant peu de soins.",
            "text": {
              "ar": "يريد كارل اقتناء قطة، فهو يفضل هذه الحيوانات لأنها مستقلة ولا تتطلب الكثير من العناية.",
              "fr": "Karl souhaite adopter un chat, appréciant ces animaux très autonomes demandant peu de soins."
            }
          },
          "19": {
            "ar": "السيدة باخ تحب الطيور وتبحث حالياً عن ببغاء.",
            "fr": "Mme Bach adore les oiseaux et recherche actuellement un perroquet.",
            "text": {
              "ar": "السيدة باخ تحب الطيور وتبحث حالياً عن ببغاء.",
              "fr": "Mme Bach adore les oiseaux et recherche actuellement un perroquet."
            }
          }
        }
      },
      "4": {
        "instructions": {
          "ar": "اقرأ النصوص من 20 إلى 26. اختر: هل سيشارك هذا الشخص في رسالة متسلسلة (Kettenmail)؟",
          "fr": "Lisez les textes 20 à 26. Choisissez : cette personne participerait-elle à une chaîne d'e-mails ?"
        },
        "topic": {
          "ar": "تعليقات حول المشاركة في الرسائل الإلكترونية المتسلسلة (Kettenmails)",
          "fr": "Commentaires sur la participation aux chaînes d'e-mails"
        },
        "example": {
          "who": "Henriette, 24, Magdeburg",
          "text": {
            "ar": "إذا وصلتك رسالة تطلب منك إرسالها إلى جميع أصدقائك فدعك منها؛ فلن تجلب لنفسك سوى النفور، إذ غالباً ما تكون دعابة سخيفة وتحتوي على فيروسات تضر بالحاسوب.",
            "fr": "Si l'on vous demande de transférer un e-mail à tous vos amis, laissez tomber. Vous allez juste vous rendre impopulaire avec ces bêtises qui apportent souvent des virus."
          }
        },
        "letters": {
          "20": {
            "who": "Alexandra, 28, Ludwigshafen",
            "text": {
              "ar": "رسائل السلسلة جزء طبيعي من تواصلي مع الآخرين. لم يحدث قط أن أفسدت شيئاً بحاسوبي، وإذا كانت مضحكة أو مسلية فأنا أعيد توجيهها ولا أرى مانعاً في ذلك.",
              "fr": "Les chaînes d'e-mails font simplement partie de ma communication. Elles n'ont jamais rien endommagé chez moi. Quand c'est drôle ou intéressant, je transmets sans problème."
            }
          },
          "21": {
            "who": "Nils, 41, Hamburg",
            "text": {
              "ar": "عندما أتلقى شيئاً يشبه رسائل السلسلة أحذفه فوراً. لا يمكن للمرء أن يضمن عدم وقوف شركة إعلانات خلفها لجمع العناوين وإغراقنا بالرسائل المزعجة.",
              "fr": "Dès que je reçois un e-mail ressemblant à une chaîne, je le supprime immédiatement. On ne sait jamais si une agence n'est pas derrière pour récupérer des adresses et nous spammer."
            }
          },
          "22": {
            "who": "Wiebke, 18, Gelsenkirchen",
            "text": {
              "ar": "أفرح دائماً بالرسائل الواردة؛ وأرى أنه يجب مشاركة وتمرير كل ما هو مهم ومثير للاهتمام للجميع، وتلك هي ميزة الإنترنت الرائعة.",
              "fr": "J'adore recevoir du courrier. J'estime qu'il faut systématiquement relayer tout ce qui est important et captivant à tout le monde : c'est tout l'intérêt d'Internet."
            }
          },
          "23": {
            "who": "Stefan, 30, Freistadt",
            "text": {
              "ar": "المسألة تعتمد على المحتوى؛ إذا كان نداءً للتبرع بالدم مثلاً فسأتأكد بالاتصال هاتفياً، لكني لن أعيد إرسالها لكي لا أزعج الآخرين.",
              "fr": "Tout dépend du contenu : s'il s'agit d'un appel urgent au don du sang, je vérifie par téléphone. Mais franchement, je ne la transfère pas pour ne pas importuner les autres."
            }
          },
          "24": {
            "who": "Charlotte, 48, Göttingen",
            "text": {
              "ar": "تلقيت رسالة لتبادل الوصفات الغذائية؛ أرسلت وصفتي وأضفت اسمي للقائمة، وسأتلقى قريباً وصفات كثيرة وممتعة، وأنا متشوّقة لتجربتها.",
              "fr": "J'ai reçu une chaîne d'échange de recettes. J'ai ajouté mon nom à la liste et j'ai déjà obtenu deux recettes formidables d'inconnus, j'attends la suite avec impatience !"
            }
          },
          "25": {
            "who": "Victor, 26, Zürich",
            "text": {
              "ar": "لم يُخترع البريد الإلكتروني للألعاب بل لتسهيل التواصل الجاد. المشاركة في هذه السلاسل مضيعة للوقت، والأولى كتابة رسائل حقيقية للأصدقاء.",
              "fr": "L'e-mail a été inventé pour faciliter les échanges, pas pour jouer. Participer à des chaînes est une pure perte de temps qu'on ferait mieux d'employer à écrire à ses amis."
            }
          },
          "26": {
            "who": "Katta, 34, Wien",
            "text": {
              "ar": "أبشع ما في هذه الرسائل الادعاء بأن سوء الحظ سيصيبك إن لم ترسلها فوراً لعشرة أصدقاء! هذا إرهاب نفسي مقيت جعلني أقاطعها تماماً.",
              "fr": "Le pire, ce sont ces courriels prédisant des malheurs si l'on ne transfère pas à dix amis. Un tel chantage psychologique m'écœure, je n'y participerai plus jamais."
            }
          }
        },
        "questions": {
          "20": {
            "who": "Alexandra, 28, Ludwigshafen",
            "text": {
              "ar": "ألكسندرا، 28 عاماً، لودفيغسهافن",
              "fr": "Alexandra, 28 ans, Ludwigshafen"
            }
          },
          "21": {
            "who": "Nils, 41, Hamburg",
            "text": {
              "ar": "نيلز، 41 عاماً، هامبورغ",
              "fr": "Nils, 41 ans, Hambourg"
            }
          },
          "22": {
            "who": "Wiebke, 18, Gelsenkirchen",
            "text": {
              "ar": "فيبكه، 18 عاماً، غيلسنكيرشن",
              "fr": "Wiebke, 18 ans, Gelsenkirchen"
            }
          },
          "23": {
            "who": "Stefan, 30, Freistadt",
            "text": {
              "ar": "شتيفان، 30 عاماً، فرايشتات",
              "fr": "Stefan, 30 ans, Freistadt"
            }
          },
          "24": {
            "who": "Charlotte, 48, Göttingen",
            "text": {
              "ar": "شارلوت، 48 عاماً، غوتينغن",
              "fr": "Charlotte, 48 ans, Göttingen"
            }
          },
          "25": {
            "who": "Victor, 26, Zürich",
            "text": {
              "ar": "فيكتور، 26 عاماً، زيورخ",
              "fr": "Victor, 26 ans, Zurich"
            }
          },
          "26": {
            "who": "Katta, 34, Wien",
            "text": {
              "ar": "كاتا، 34 عاماً، فيينا",
              "fr": "Katta, 34 ans, Vienne"
            }
          }
        }
      },
      "5": {
        "instructions": {
          "ar": "اقرأ المهام من 27 إلى 30 والنص المرفق حول المتحف الألماني في ميونخ. اختر الإجابة الصحيحة لكل مهمة.",
          "fr": "Lisez les exercices 27 à 30 et le texte associé sur le Deutsches Museum. Choisissez la bonne réponse a, b ou c."
        },
        "articles": [
          {
            "heading": {
              "ar": "المتحف الألماني في ميونخ (Deutsches Museum)",
              "fr": "Deutsches Museum (Musée allemand de Munich)"
            },
            "body": {
              "ar": [
                "معلومات الزوار، أوقات العمل، أسعار التذاكر، الجولات الإرشادية ووسائل النقل العام."
              ],
              "fr": [
                "Informations pratiques, horaires, tarifs, visites guidées et transports en commun."
              ]
            }
          }
        ],
        "questions": {
          "27": {
            "text": {
              "ar": "الجولات الإرشادية في المتحف ...",
              "fr": "Les visites guidées..."
            },
            "options": {
              "ar": [
                "مجانية للفصول المدرسية.",
                "يجب حجزها مسبقاً عبر الهاتف.",
                "لا تقام باللغة الألمانية فقط."
              ],
              "fr": [
                "sont gratuites pour les classes scolaires.",
                "doivent être réservées par téléphone.",
                "ne se déroulent pas uniquement en allemand."
              ]
            }
          },
          "28": {
            "text": {
              "ar": "من يحمل بطاقة العضوية ...",
              "fr": "Une personne membre..."
            },
            "options": {
              "ar": [
                "يجب أن يكون بالغاً حتماً.",
                "لا يحتاج لدفع رسوم الدخول.",
                "لا يُسمح له بزيارة المتحف منفرداً."
              ],
              "fr": [
                "est obligatoirement majeure.",
                "n'a pas à payer de billet d'entrée.",
                "ne peut visiter le musée toute seule."
              ]
            }
          },
          "29": {
            "text": {
              "ar": "يمكن للزائر في المتحف ...",
              "fr": "Au musée, on peut..."
            },
            "options": {
              "ar": [
                "زيارة جميع المعارض حتى بالنسبة لذوي الاحتياجات الخاصة.",
                "شراء كتب ومؤلفات علمية أيضاً.",
                "تناول الوجبات الساخنة فقط."
              ],
              "fr": [
                "accéder à toutes les expositions en fauteuil roulant.",
                "acheter également des livres.",
                "manger uniquement des plats chauds."
              ]
            }
          },
          "30": {
            "text": {
              "ar": "يمكن الوصول إلى المتحف ...",
              "fr": "On accède au musée..."
            },
            "options": {
              "ar": [
                "بأفضل وسيلة عن طريق السيارة.",
                "بواسطة حافلة الخط 17.",
                "بأي خط من خطوط قطار الضواحي (S-Bahn)."
              ],
              "fr": [
                "de préférence en voiture.",
                "avec la ligne de bus 17.",
                "avec n'importe quel train de banlieue (S-Bahn)."
              ]
            }
          }
        }
      },
      "6": {
        "instructions": {
          "ar": "قسم الاستماع: 4 أجزاء، 30 مهمة. انقر على زر التشغيل لبدء المقطع الصوتي ومتابعة الأسئلة بالتزامن مع التسجيل.",
          "fr": "Module Compréhension orale : 4 parties, 30 exercices. Cliquez sur Play pour démarrer l'enregistrement et répondre aux questions."
        },
        "teile": {
          "1": {
            "title": {
              "ar": "خمسة نصوص قصيرة · المهام من 1 إلى 10",
              "fr": "Cinq courts enregistrements · Questions 1 à 10"
            },
            "desc": {
              "ar": "ستستمع الآن إلى خمسة نصوص قصيرة. ستستمع إلى كل نص مرتين. لكل نص ستجيب عن مهمتين.",
              "fr": "Vous écoutez maintenant cinq courts textes, chacun deux fois. Pour chaque texte, résolvez deux questions."
            }
          },
          "2": {
            "title": {
              "ar": "أمسية معلوماتية لأولياء الأمور حول مخيم العطلة · المهام 11 إلى 15",
              "fr": "Soirée d'information pour les parents sur le camp de vacances · Questions 11 à 15"
            },
            "desc": {
              "ar": "ستستمع إلى النص مرة واحدة فقط. أجب عن المهام الخمس باختيار a أو b أو c.",
              "fr": "Vous écoutez l'enregistrement une seule fois. Répondez aux cinq questions a, b ou c."
            },
            "context": {
              "ar": "أنت تحضر اجتماعاً تنويرياً لأولياء الأمور حول رحلة مدرسية إلى مخيم صيفي للأطفال.",
              "fr": "Vous assistez à une réunion d'information destinée aux parents pour un voyage scolaire en camp de vacances."
            }
          },
          "3": {
            "title": {
              "ar": "محادثة عند موقف الحافلات حول حفلة عيد ميلاد · المهام 16 إلى 22",
              "fr": "Discussion à l'arrêt de bus sur une fête d'anniversaire · Questions 16 à 22"
            },
            "desc": {
              "ar": "ستستمع إلى المحادثة مرة واحدة فقط. حدد: هل العبارات صحيحة أم خاطئة؟",
              "fr": "Vous écoutez la conversation une seule fois. Déterminez si les affirmations sont Vraies ou Fausses."
            },
            "context": {
              "ar": "تنتظر عند موقف الحافلة وتسمع مراهقين يتحدثان حول الترتيب لحفلة عيد ميلاد.",
              "fr": "Vous attendez le bus à un arrêt et entendez deux jeunes discuter d'une fête d'anniversaire."
            }
          },
          "4": {
            "title": {
              "ar": "حوار إذاعي: مخيمات العمل التطوعي (Workcamps) · المهام 23 إلى 30",
              "fr": "Débat radiophonique : Les chantiers de bénévoles (Workcamps) · Questions 23 à 30"
            },
            "desc": {
              "ar": "ستستمع إلى النقاش مرتين. طابق كل عبارة مع قائلها: من يقول ماذا؟",
              "fr": "Vous écoutez le débat deux fois. Associez chaque affirmation : qui dit quoi ?"
            },
            "context": {
              "ar": "تدير المذيعة حواراً مع الشابين إيريس بيرغر وكاي فيزر حول تجاربهما في مخيمات العمل التطوعي في اليونان والإكوادور.",
              "fr": "Une animatrice débat avec deux jeunes, Iris Berger et Kai Weser, au sujet de leur expérience en chantiers de bénévolat en Grèce et en Équateur."
            }
          }
        },
        "questions": {
          "h1": {
            "ar": "متجر الأثاث لديه عروض وتخفيضات خاصة.",
            "fr": "Le magasin de meubles propose des offres promotionnelles.",
            "text": {
              "ar": "متجر الأثاث لديه عروض وتخفيضات خاصة.",
              "fr": "Le magasin de meubles propose des offres promotionnelles."
            }
          },
          "h2": {
            "text": {
              "ar": "تشمل التخفيضات أثاثاً مخصصاً لـ ...",
              "fr": "L'offre promotionnelle comprend des meubles pour..."
            },
            "options": {
              "ar": [
                "غرف المعيشة وغرف النوم.",
                "غرف النوم وغرف السفرة (الطعام).",
                "غرف المعيشة والنوم والأطفال."
              ],
              "fr": [
                "le salon et la chambre à coucher.",
                "la chambre à coucher et la salle à manger.",
                "le salon, la chambre à coucher et la chambre d'enfants."
              ]
            }
          },
          "h3": {
            "ar": "تستمع إلى برنامج إذاعي موسيقي للمبدعين.",
            "fr": "Vous écoutez une émission musicale destinée aux créatifs.",
            "text": {
              "ar": "تستمع إلى برنامج إذاعي موسيقي للمبدعين.",
              "fr": "Vous écoutez une émission musicale destinée aux créatifs."
            }
          },
          "h4": {
            "text": {
              "ar": "برنامج «musica viva» متوفر ...",
              "fr": "Le programme proposé par « musica viva » est disponible..."
            },
            "options": {
              "ar": [
                "في النمسا فقط.",
                "في ألمانيا فقط.",
                "في عدة دول."
              ],
              "fr": [
                "uniquement en Autriche.",
                "uniquement en Allemagne.",
                "dans plusieurs pays."
              ]
            }
          },
          "h5": {
            "ar": "من المخطط أن تكون وجبة العشاء ساخنة.",
            "fr": "Le repas du soir doit être chaud.",
            "text": {
              "ar": "من المخطط أن تكون وجبة العشاء ساخنة.",
              "fr": "Le repas du soir doit être chaud."
            }
          },
          "h6": {
            "text": {
              "ar": "كم عدد المفاتيح الواجب ضبطها في الفرن؟",
              "fr": "Combien de boutons doivent être réglés sur le four ?"
            },
            "options": {
              "ar": [
                "ثلاثة مفاتيح.",
                "خمسة مفاتيح.",
                "مفتاحان اثنان."
              ],
              "fr": [
                "Trois.",
                "Cinq.",
                "Deux."
              ]
            }
          },
          "h7": {
            "ar": "تستمع إلى النشرة الجوية الخاصة بالنمسا.",
            "fr": "Vous écoutez la météo pour l'Autriche.",
            "text": {
              "ar": "تستمع إلى النشرة الجوية الخاصة بالنمسا.",
              "fr": "Vous écoutez la météo pour l'Autriche."
            }
          },
          "h8": {
            "text": {
              "ar": "أين يكون الطقس أكثر دفئاً؟",
              "fr": "Où fait-il le plus chaud ?"
            },
            "options": {
              "ar": [
                "في الشمال.",
                "في الغرب.",
                "في الشرق."
              ],
              "fr": [
                "Dans le nord.",
                "Dans l'ouest.",
                "Dans l'est."
              ]
            }
          },
          "h9": {
            "ar": "أنت متصل بمصنع للشوكولاتة.",
            "fr": "Vous êtes en relation avec une fabrique de chocolat.",
            "text": {
              "ar": "أنت متصل بمصنع للشوكولاتة.",
              "fr": "Vous êtes en relation avec une fabrique de chocolat."
            }
          },
          "h10": {
            "text": {
              "ar": "أين لا يحتاج المرء لدفع أي رسوم؟",
              "fr": "Où l'accès est-il totalement gratuit ?"
            },
            "options": {
              "ar": [
                "في قاعات المعرض.",
                "في متجر الشوكولاتة.",
                "في ورشة العمل الخاصة بالأطفال."
              ],
              "fr": [
                "Dans l'exposition.",
                "À la boutique de chocolat.",
                "Dans l'atelier créatif."
              ]
            }
          },
          "h11": {
            "text": {
              "ar": "من يرافق الطلاب إلى المخيم؟",
              "fr": "Qui accompagne les élèves au camp ?"
            },
            "options": {
              "ar": [
                "مدير المدرسة.",
                "فني المدرسة.",
                "معلمون من المدرسة."
              ],
              "fr": [
                "Le directeur de l'école.",
                "Le technicien de l'école.",
                "Des enseignants de l'école."
              ]
            }
          },
          "h12": {
            "text": {
              "ar": "ما الذي يعرفه أولياء الأمور مسبقاً؟",
              "fr": "Que savent déjà les parents ?"
            },
            "options": {
              "ar": [
                "مواعيد إقلاع ووصول الطائرة.",
                "البرنامج اليومي المفصل لكل يوم.",
                "شكل المخيم من الداخل ومرافقه."
              ],
              "fr": [
                "Les dates et heures de vol aller et retour.",
                "Le programme quotidien des activités.",
                "Ce à quoi ressemble le camp de vacances."
              ]
            }
          },
          "h13": {
            "text": {
              "ar": "يتوجه الأطفال والمشرفون بالحافلة إلى ...",
              "fr": "Les enfants et leurs accompagnateurs se rendent en bus..."
            },
            "options": {
              "ar": [
                "براندنبورغ.",
                "بابستدورف.",
                "دريسدن."
              ],
              "fr": [
                "à Brandebourg.",
                "à Papstdorf.",
                "à Dresde."
              ]
            }
          },
          "h14": {
            "text": {
              "ar": "كم عدد الأطفال المقيمين في الكوخ (البنغالو) الواحد؟",
              "fr": "Combien d'enfants logent dans un bungalow ?"
            },
            "options": {
              "ar": [
                "ثمانية أطفال.",
                "أربعة أطفال.",
                "طفلان اثنان."
              ],
              "fr": [
                "Huit.",
                "Quatre.",
                "Deux."
              ]
            }
          },
          "h15": {
            "text": {
              "ar": "يتناول الأطفال الطعام ...",
              "fr": "Les enfants mangent..."
            },
            "options": {
              "ar": [
                "كل يوم في المطاعم.",
                "ثلاث مرات في اليوم.",
                "عند الكشك."
              ],
              "fr": [
                "tous les jours au restaurant.",
                "trois fois par jour.",
                "à un kiosque."
              ]
            }
          },
          "h16": {
            "ar": "تريد سيلينا الذهاب إلى المدينة من أجل ترتيبات حفلة عيد ميلادها.",
            "fr": "Selina veut aller en ville à l'occasion de sa fête d'anniversaire.",
            "text": {
              "ar": "تريد سيلينا الذهاب إلى المدينة من أجل ترتيبات حفلة عيد ميلادها.",
              "fr": "Selina veut aller en ville à l'occasion de sa fête d'anniversaire."
            }
          },
          "h17": {
            "ar": "سيلينا لا تريد إقامة الحفلة في منزلها.",
            "fr": "Selina ne veut pas organiser de fête chez elle.",
            "text": {
              "ar": "سيلينا لا تريد إقامة الحفلة في منزلها.",
              "fr": "Selina ne veut pas organiser de fête chez elle."
            }
          },
          "h18": {
            "ar": "والدا سيلينا يعارضان إقامة الحفلة.",
            "fr": "Les parents de Selina sont opposés à la fête.",
            "text": {
              "ar": "والدا سيلينا يعارضان إقامة الحفلة.",
              "fr": "Les parents de Selina sont opposés à la fête."
            }
          },
          "h19": {
            "ar": "السفر إلى إنجلترا مهم لطموح سيلينا المهني المستقبلي.",
            "fr": "Le voyage en Angleterre est important pour l'avenir professionnel de Selina.",
            "text": {
              "ar": "السفر إلى إنجلترا مهم لطموح سيلينا المهني المستقبلي.",
              "fr": "Le voyage en Angleterre est important pour l'avenir professionnel de Selina."
            }
          },
          "h20": {
            "ar": "يان يشارك والدي سيلينا نفس الرأي.",
            "fr": "Jan partage le même avis que les parents de Selina.",
            "text": {
              "ar": "يان يشارك والدي سيلينا نفس الرأي.",
              "fr": "Jan partage le même avis que les parents de Selina."
            }
          },
          "h21": {
            "ar": "سيلينا لا تحب باسكال.",
            "fr": "Selina n'apprécie pas Pascal.",
            "text": {
              "ar": "سيلينا لا تحب باسكال.",
              "fr": "Selina n'apprécie pas Pascal."
            }
          },
          "h22": {
            "ar": "كلفت حفلة باسكال الكثير من المال.",
            "fr": "La fête de Pascal a coûté beaucoup d'argent.",
            "text": {
              "ar": "كلفت حفلة باسكال الكثير من المال.",
              "fr": "La fête de Pascal a coûté beaucoup d'argent."
            }
          },
          "h23": {
            "text": {
              "ar": "هناك مجموعة وتشكيلة واسعة جداً من المشاريع المتاحة.",
              "fr": "L'offre de projets bénévoles est très vaste."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          },
          "h24": {
            "text": {
              "ar": "يمكن ممارسة العديد من الأنشطة المتنوعة في أوقات الفراغ.",
              "fr": "On peut pratiquer une multitude d'activités pendant les temps libres."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          },
          "h25": {
            "text": {
              "ar": "يستطيع المرء تحقيق تقدم ملحوظ في تعلم لغة أجنبية.",
              "fr": "On peut faire des progrès notables dans une langue étrangère."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          },
          "h26": {
            "text": {
              "ar": "يُعد العمل التطوعي إضافة إيجابية ممتازة في السيرة الذاتية للتقدم لوظيفة.",
              "fr": "Le travail bénévole constitue un atout appréciable dans un CV."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          },
          "h27": {
            "text": {
              "ar": "يسعى المتطوع إلى استقطاب وجذب المزيد من المساعدين والداعمين.",
              "fr": "On tente d'attirer et recruter d'autres volontaires et parrains."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          },
          "h28": {
            "text": {
              "ar": "يتم توعية السكان المحليين وتثقيفهم حول قضايا حماية البيئة.",
              "fr": "Les habitants locaux sont informés et sensibilisés à la protection de l'environnement."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          },
          "h29": {
            "text": {
              "ar": "الكثير من الأمور في هذا البلد قد تفاجئ الأوروبيين.",
              "fr": "Beaucoup de réalités dans ce pays peuvent dérouter un Européen."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          },
          "h30": {
            "text": {
              "ar": "يشعر المرء بالرضا والراحة النفسية لأنه ساهم في مساعدة الآخرين.",
              "fr": "On éprouve une grande satisfaction d'avoir apporté son aide pour une bonne cause."
            },
            "options": {
              "ar": [
                "المذيعة",
                "إيريس بيرغر",
                "كاي فيزر"
              ],
              "fr": [
                "Animatrice",
                "Iris Berger",
                "Kai Weser"
              ]
            }
          }
        }
      }
    }
  }
}

target_file = "/run/media/houssem/HDD Disk/work/B1-OSD-TEST/data/tests/modellsatz-16.json"
with open(target_file, "w", encoding="utf-8") as f:
    json.dump(modellsatz_16, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {target_file}")
