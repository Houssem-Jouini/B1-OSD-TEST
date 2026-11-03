# -*- coding: utf-8 -*-
"""
Parts 1 to 6 definition for Modellsatz 19 (Modelltest 13 — Hueber Zertifikat B1, Test 4)
"""

PARTS = [
  {
    "id": 1,
    "title": "Teil 1",
    "time": 10,
    "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
    "articles": [
      {
        "heading": "Mein Tokio-Hotel-Konzert in Erfurt",
        "sub": "Kiara Wenzel · 10. März",
        "body": [
          "Hallo TH-Fans, ich und meine Freundin waren im Tokio-Hotel-Konzert in Erfurt dabei. Wir hatten uns rechtzeitig Karten geholt. Schon viele Wochen vor dem Konzert war ich tierisch happy. Am 6. März stand ich um 5 Uhr morgens auf, ging zu meiner Freundin und gemeinsam fuhren wir nach Erfurt. Als wir so ca. gegen 8 Uhr vor der Thüringenhalle ankamen, waren wir erstaunt, dass zum Glück gerade mal 20 Leute oder so da waren. Das hieß für uns, wir waren mit im ersten Block und damit war uns die erste Reihe sicher.",
          "Nach endlosen Stunden Warten, es war ungefähr um 12, kamen einige Fernsehteams und fragten uns, wen wir am besten finden, wie lange wir schon stehen usw. Die letzte Stunde vor dem Einlass kam uns unendlich lang vor. In dieser Zeit wurde uns erzählt, wie das dann alles abläuft. Nun war es endlich so weit. Eine Dreiviertelstunde vor dem offiziellen Einlass (es war 16.45 Uhr) durften wir in die Halle. Meine Freundin und ich rannten sofort zur Bühne und standen schließlich direkt davor. Jetzt hieß es wieder warten, aber in der Halle war es ganz lustig. Wir sprachen mit der Security und machten Witze.",
          "Dann ging es los. In der Halle wurde es dunkel. Alle schrien. Jetzt kamen die Jungs. Als Tom anfing zu spielen, gab es kein Halten mehr. Die Stimmung war einfach nur Wahnsinn!! Dann, als Bill auf die Bühne kam, wurde noch lauter geschrien. Der sah aber auch wieder mal voll cool aus. Zahlreiche Lieder später wurden immer mehr Mädchen rausgetragen. Zum Glück bin ich nicht umgekippt. Dann kamen Georg und Tom nach vorne. Ich dachte mir: In echt sind die noch hübscher und vor allem … die waren so nah!!!",
          "Als das Konzert zu Ende war, kamen sie alle nach vorne und fassten uns an. Ja, geschafft! Ich hab die Hände von allen Vieren berührt. Ich war so ober-glücklich. Dieses Konzert werde ich nie vergessen. Danke, Jungs. Viele Grüße an alle Fans!!!!!!"
        ]
      }
    ],
    "example": {
      "text": "Kiara ist nicht allein ins Konzert gegangen.",
      "answer": "richtig"
    },
    "questions": [
      {
        "id": 1,
        "type": "tf",
        "text": "Kiara musste lange vor der Konzerthalle warten.",
        "answer": "richtig",
        "num": 1
      },
      {
        "id": 2,
        "type": "tf",
        "text": "Die Band wurde von Fernsehreportern interviewt.",
        "answer": "falsch",
        "num": 2
      },
      {
        "id": 3,
        "type": "tf",
        "text": "Kiara schaffte es schließlich, ganz vorn zu stehen.",
        "answer": "richtig",
        "num": 3
      },
      {
        "id": 4,
        "type": "tf",
        "text": "Als es in der Halle dunkel wurde, schrien alle vor Angst.",
        "answer": "falsch",
        "num": 4
      },
      {
        "id": 5,
        "type": "tf",
        "text": "Bill kam und schrie am lautesten.",
        "answer": "falsch",
        "num": 5
      },
      {
        "id": 6,
        "type": "tf",
        "text": "Die Bandmitglieder haben Kiara die Hand gegeben.",
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
        "heading": "Können Tiere träumen?",
        "source": "aus einer deutschen Zeitung",
        "body": [
          "Wer Mensch, Hund und Katze beim Schlafen beobachtet, stellt gewisse Ähnlichkeiten fest. Denn auch Tiere bewegen sich dabei und geben Laute von sich. Träumen Tiere also?",
          "Weckt man Menschen in der Schlafphase, in der sich die Muskeln kaum bewegen und nur die Augen aktiv sind, während des sogenannten „Rapid Eye Movement“-Schlafes oder der REM-Phase, berichten sie, dass sie gerade einen Traum hatten. Gilt das auch für Tiere, wenn sich ihre Augen im Schlaf ganz schnell bewegen? Als sicher gilt: Hunde, Katzen oder Gorillas verbringen zwischen 10 und 25 Prozent ihrer Ruhezeit im REM-Schlaf – genauso viel wie der Mensch. „Schon aus einer evolutionären Perspektive ist es wahrscheinlich, dass die Fähigkeit zu träumen in der Evolution schon vor dem Menschen entwickelt wurde“, sagt ein Schlafwissenschaftler. Die Schwierigkeit besteht darin, diese Theorie heute zu beweisen.",
          "Bei einem Experiment hatte man den REM-Schlaf einer Katze beobachtet, nachdem man ihr ein Medikament gegeben hatte, damit sie ihren übrigen Körper frei bewegen konnte. Während des REM-Schlafes lief diese Katze dann im Käfig umher, fauchte und sträubte auch ihr Fell. Es sah aus, als würde sie mit einem Feind kämpfen. Auch der Geruch von Futter konnte sie nicht wecken, sie schlief fest. Trotz dieser Beobachtung bleibt das Problem, dass Tiere uns nicht von ihren Träumen erzählen können. Deshalb zweifelt man immer noch daran, ob Tiere wirklich wie die Menschen träumen."
        ]
      }
    ],
    "example": {
      "text": "Katzen ...",
      "options": [
        "können im Traum kämpfen.",
        "schlafen so lange wie Menschen.",
        "bewegen im Schlaf ihre Augen."
      ],
      "answer": 2
    },
    "questions": [
      {
        "id": 7,
        "type": "mcq",
        "text": "In diesem Text geht es um die Frage, ...",
        "options": [
          "ob Tiere wie Menschen träumen.",
          "ob Tiere besser schlafen als Menschen.",
          "warum Tiere auch eine REM-Phase im Schlaf haben."
        ],
        "answer": 0,
        "num": 7
      },
      {
        "id": 8,
        "type": "mcq",
        "text": "In der REM-Phase ...",
        "options": [
          "bewegen sich immer alle Körperteile.",
          "bewegen sich die Augen.",
          "schläft man nicht so gut."
        ],
        "answer": 1,
        "num": 8
      },
      {
        "id": 9,
        "type": "mcq",
        "text": "Gorillas ...",
        "options": [
          "schlafen unruhiger als die Menschen.",
          "haben prozentual eine genauso lange REM-Phase wie die Menschen.",
          "lassen sich nicht untersuchen."
        ],
        "answer": 1,
        "num": 9
      }
    ],
    "instructions2": "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
    "articles2": [
      {
        "heading": "In der Schule schwitzen!",
        "source": "aus einer österreichischen Zeitung",
        "body": [
          "In einer Gesamtschule in Oulu nördlich von Helsinki haben Wissenschaftler und Lehrer kürzlich einen heißen Test mit ihren Schülern gemacht: Auf dem Schulhof stellten sie mobile Sauna-Wagen auf. Darin ließen sie ihre Schüler in der Früh vor dem Unterricht ordentlich schwitzen, je nach Verfassung der Kinder zehn bis 15 Minuten lang. Erst dann begannen sie mit Mathe, Finnisch, Englisch, Physik und ihren anderen Unterrichtsfächern. Das Ergebnis überraschte alle, denn 314 der 340 Schüler, die an dem sechsmonatigen Versuch teilgenommen hatten, konnten ihre Noten deutlich verbessern! Manche Schüler wurden sogar um eine ganze Note besser.",
          "„Das Sitzen in der Sauna regt den Kreislauf und die Durchblutung an, dadurch steigt dann die Konzentrationsfähigkeit. Man kann auch sagen, dass die Schüler so einfach wacher und viel bereiter sind, Wissen aufzunehmen“, erläutert Arttu Häkkinen von der Universität Helsinki. Dass die Ergebnisse so gut waren, überraschte aber auch die Pädagogen. Das Experiment mit den Sauna-Wagen soll nun landesweit wiederholt werden. Wenn es auch an anderen Schulen erfolgreich ist, soll morgendliches Schwitzen in den finnischen Stundenplan aufgenommen werden."
        ]
      }
    ],
    "questions2": [
      {
        "id": 10,
        "type": "mcq",
        "text": "In diesem Text geht es darum, ...",
        "options": [
          "warum finnische Schüler so gute Noten haben.",
          "wie die Wirkung der Sauna auf Schüler ist.",
          "warum Schüler gern in die Sauna gehen."
        ],
        "answer": 1,
        "num": 10
      },
      {
        "id": 11,
        "type": "mcq",
        "text": "Die Schüler in Oulu ...",
        "options": [
          "konnten sich nach der Sauna besser konzentrieren.",
          "hatten wegen der Sauna weniger Probleme.",
          "mussten mindestens 15 Minuten in die Sauna."
        ],
        "answer": 0,
        "num": 11
      },
      {
        "id": 12,
        "type": "mcq",
        "text": "Der Versuch ...",
        "options": [
          "hat eine Theorie bewiesen.",
          "beeinflusste die Noten der Schüler nur wenig.",
          "dauerte ein halbes Jahr lang."
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
    "situationsIntro": "Schule, gute Noten, Nachhilfeunterricht: Das alles sind Themen, die Ihre Bekannten zurzeit aus verschiedenen Gründen sehr beschäftigen – und sie suchen nach Lösungen.",
    "example": {
      "text": "Laura Ramazzotti studiert in Graz. Sie will Nachhilfeunterricht in Italienisch geben, denn sie braucht Geld, weil sie öfter zu ihren Eltern nach Süditalien fahren möchte.",
      "answer": "i"
    },
    "adsFormatted": [
      {
        "code": "a",
        "title": "Leiter/innen für Arbeitsgemeinschaften gesucht",
        "text": "Leiter/innen für Arbeitsgemeinschaften (AGs) auf Honorarbasis gesucht für offene Ganztagsschulen (Mo.-Fr. 14-16 Uhr) sowie für Gymnasien (Mi. 14-16 Uhr): Sport/Bewegung, Tanz, Kunst/Kreativ, Kochen, Musik, Theater, Hausaufgabenbetreuung etc. Kurzbewerbung per Mail bitte an den: Verein zur Bildungsförderung e.V, Aachener Str. 23 - Berlin-Lichtenberg, verein@vzbildungsfoerderung.de",
        "html": "<strong>Leiter/innen für Arbeitsgemeinschaften (AGs)</strong> auf Honorarbasis gesucht für offene Ganztagsschulen (Mo.–Fr. 14–16 Uhr) sowie für Gymnasien (Mi. 14–16 Uhr):<br>Sport, Tanz, Kunst, Kochen, Musik, Theater, Hausaufgabenbetreuung.<br><em>Verein zur Bildungsförderung e.V.</em>, Aachener Str. 23, Berlin-Lichtenberg.<br>✉ verein@vzbildungsfoerderung.de",
        "color": "#eaf2f8",
        "hasPin": True
      },
      {
        "code": "b",
        "title": "Mathematik Intelligentes Lernen Klasse 9-12",
        "text": "Mathematik, Intelligentes Lernen, Klasse 9-12. 1 CD-ROM, von: S.A.E. Mit dieser Software schaffst du Mathe problemlos: Der ganze Lernstoff von Klasse 9-12, Übungsaufgaben und Erklärungen der Lösungen. Info und Bestellungen unter: www.sae-mathematik.at",
        "html": "<strong>Mathematik – Intelligentes Lernen (Kl. 9–12)</strong><br>1 CD-ROM von S.A.E.<br>Mit dieser Software schaffst du Mathe problemlos: Kompletter Lernstoff, Übungsaufgaben & Erklärungen der Lösungen.<br>🌐 www.sae-mathematik.at",
        "color": "#fef9e7",
        "hasPin": True
      },
      {
        "code": "c",
        "title": "Nachhilfe gesucht für Latein/Mathe",
        "text": "Nachhilfe gesucht für Latein / Mathe, 10. Kl., Schülerin o. Studentin, Tel. 030/09115025",
        "html": "<strong>Nachhilfe gesucht für Latein/Mathe</strong><br>10. Klasse, Schülerin oder Studentin gesucht.<br>📞 030/09115025",
        "color": "#fbfcfc",
        "hasPin": True
      },
      {
        "code": "d",
        "title": "Einzelnachhilfe zu Hause für Gymnasium",
        "text": "Wir bieten Einzelnachhilfe zu Hause für Gymnasium / spezielle Abivorbereitung in Deutsch, alten und modernen Fremdsprachen. Tel. 034 / 85 97 558, www.schoolgood.de",
        "html": "<strong>Wir bieten Einzelnachhilfe zu Hause</strong><br>Für Gymnasium / spezielle Abivorbereitung in <em>Deutsch, alten und modernen Fremdsprachen</em>.<br>📞 034 / 85 97 558 · 🌐 www.schoolgood.de",
        "color": "#eef9f1",
        "hasPin": True
      },
      {
        "code": "e",
        "title": "Schülerhilfe Bern sucht Nachhilfelehrer/in",
        "text": "Schülerhilfe Bern sucht Nachhilfelehrer/in (mit abgeschl. Studium) für Mathematik und Latein. Tel. +41(0)3192344 44, bern@schuelerhilfe.ch",
        "html": "<strong>Schülerhilfe Bern sucht Nachhilfelehrer/in</strong><br>(mit abgeschlossenem Studium) für <em>Mathematik und Latein</em>.<br>📞 +41(0)3192344 44 · ✉ bern@schuelerhilfe.ch",
        "color": "#fef5e7",
        "hasPin": True
      },
      {
        "code": "f",
        "title": "Hausaufgabenbetreuung im Hause des DKSB",
        "text": "Hausaufgabenbetreuung im Hause des DKSB, Mo-Do 12.30-16.30, Berlin-Mitte, Geraldstraße 57, Tel. 021 62 72 17 98. Deutscher Kinderschutzbund - Ortsverband Berlin. Alle unsere Angebote sind kostenlos – um unsere Arbeit fortsetzen zu können, brauchen wir Ihre Hilfe: Spendenkonto: Sparkasse Berlin, Konto Nr.: 75108644",
        "html": "<strong>Hausaufgabenbetreuung im Hause des DKSB</strong><br>Mo.–Do. 12.30–16.30 Uhr, Berlin-Mitte, Geraldstraße 57.<br><em>Deutscher Kinderschutzbund Berlin</em><br><strong>Alle Angebote sind kostenlos!</strong> Spendenkonto: Sparkasse Berlin 75108644.<br>📞 021 62 72 17 98",
        "color": "#fdedec",
        "hasPin": True
      },
      {
        "code": "g",
        "title": "Einfach gute Noten! Profi-Nachhilfe",
        "text": "Einfach gute Noten! Profi-Nachhilfe für alle Klassen und Schultypen. TÜV-geprüfte Qualität. Werderstr. 45, Berlin-Kreuzberg. Inh. Nils Lehmann – Tel. 030/14008945",
        "html": "<strong>Einfach gute Noten! Profi-Nachhilfe</strong><br>Für alle Klassen und Schultypen. <em>TÜV-geprüfte Qualität</em>.<br>Werderstr. 45, Berlin-Kreuzberg, Inh. Nils Lehmann.<br>📞 030/14008945",
        "color": "#f4f6f7",
        "hasPin": True
      },
      {
        "code": "h",
        "title": "Der PLÖTZ-Schulführer Berlin",
        "text": "Der PLÖTZ-Schulführer stellt alle Schulen der Stadt mit kurzen Porträts dar, gibt Tipps zu Schultypen und Schulreform, hilft Eltern, die richtige Entscheidung zu treffen. Plötz, Schulführer Berlin, 408 Seiten, EUR 14,80, auch als CD oder E-Book erhältlich.",
        "html": "<strong>Der PLÖTZ-Schulführer</strong><br>Stellt alle Schulen der Stadt vor, gibt Tipps zu Schultypen & Schulreform, hilft Eltern bei der richtigen Schulwahl.<br>408 Seiten, EUR 14,80 (Buch, CD oder E-Book).",
        "color": "#ebf5fb",
        "hasPin": True
      },
      {
        "code": "i",
        "title": "Graz-Zentrum: Nachhilfelehrer/in für Ital. gesucht",
        "text": "Graz-Zentrum: Nachhilfelehrer/in für Ital. gesucht, Gute Bezahlung, Tel. 316/28 85 217",
        "html": "<strong>Graz-Zentrum:</strong><br>Nachhilfelehrer/in für Italienisch gesucht.<br>Gute Bezahlung.<br>📞 316/28 85 217",
        "color": "#f9ebea",
        "hasPin": True
      },
      {
        "code": "j",
        "title": "Nachhilfe und mehr! – Mini-Lernkreis",
        "text": "Nachhilfe und mehr! – alle Fächer, Schultypen und Klassen. Mini-Lernkreis – Kompetenz seit 1974. Info und Anmeldung: 036-92214115 Christiane Hidding, ch.hidding@minilernkreis.de. Mini-Gruppen, Einzelunterricht, spezifisches Training für Kinder mit Rechtschreibschwierigkeiten, Rechen- und Konzentrationsschwäche, spezielle Lernmaterialien.",
        "html": "<strong>Nachhilfe und mehr! – Mini-Lernkreis</strong><br>Alle Fächer, Schultypen und Klassen.<br>• Mini-Gruppen & Einzelunterricht<br>• Spezifisches Training bei Rechen- und <em>Konzentrationsschwäche</em><br>📞 036-92214115 Christiane Hidding · ✉ ch.hidding@minilernkreis.de",
        "color": "#f5eef8",
        "hasPin": True
      }
    ],
    "questions": [
      {
        "id": 13,
        "type": "match",
        "text": "Emmas Sohn Ferdinand hat keine schlechten Noten, aber sie macht sich Sorgen, weil er sich nicht gut konzentrieren kann.",
        "answer": "j",
        "num": 13
      },
      {
        "id": 14,
        "type": "match",
        "text": "Wegen ihrer Arbeit kann Frau Beisle ihrem Sohn nicht bei den Hausaufgaben helfen. Doch ein Nachhilfeinstitut oder einen Privatlehrer kann sie sich nicht leisten.",
        "answer": "f",
        "num": 14
      },
      {
        "id": 15,
        "type": "match",
        "text": "Herr und Frau Horn überlegen, ob ihre Tochter aufs Gymnasium oder lieber auf die Realschule gehen sollte.",
        "answer": "h",
        "num": 15
      },
      {
        "id": 16,
        "type": "match",
        "text": "Alexander macht nächstes Jahr Abitur und braucht unbedingt Nachhilfe in Chemie und Physik. Er sucht einen Lehrer, der zu ihm nach Hause kommt.",
        "answer": "0",
        "num": 16
      },
      {
        "id": 17,
        "type": "match",
        "text": "Corinna hat gerade ihr Mathematikstudium abgeschlossen und sucht Arbeit in einem Nachhilfeinstitut.",
        "answer": "e",
        "num": 17
      },
      {
        "id": 18,
        "type": "match",
        "text": "Markus braucht unbedingt bessere Noten, wenn er das Abitur schaffen will. Aber bevor er sich für ein Nachhilfeinstitut entscheidet, möchte er gucken, ob die Lehrer dort gut erklären können.",
        "answer": "g",
        "num": 18
      },
      {
        "id": 19,
        "type": "match",
        "text": "Lena geht in Klasse 9 und hat schlechte Noten in Mathe. Sie sucht ein Computerprogramm, das ihr helfen kann.",
        "answer": "b",
        "num": 19
      }
    ]
  },
  {
    "id": 4,
    "title": "Teil 4",
    "time": 15,
    "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Findet die Person, dass es Einzelkinder besser haben?",
    "topic": "Findet die Person, dass es Einzelkinder besser haben?",
    "example": {
      "who": "Tim, 37, Wolfsburg",
      "text": "Das ist einfach zu beantworten. Mit Geschwistern übt man – ob man es will oder nicht – soziales Verhalten. Man muss ständig alles teilen. Das fängt beim Spielzeug an und endet bei der Aufmerksamkeit der Eltern. Außerdem lernt man von Geburt an, sich in eine Gruppe einzugliedern. Ich meine, dies alles zu können, ist von Vorteil für das Leben in einer Gesellschaft. Wenn möglich, sollte jeder mit Geschwistern aufwachsen. Einzelkind zu sein, ist deshalb in meinen Augen ein Nachteil.",
      "answer": "nein"
    },
    "letters": [
      {
        "id": 20,
        "type": "letter",
        "who": "Angela, 35, Bad Gastein",
        "text": "Natürlich habe ich eine Meinung dazu, denn ich bin ein Einzelkind. Ich kann mir keine schönere Form der Kindheit und des Familienlebens vorstellen. Alles ist harmonisch und als Kind muss man sich viel mehr auf die Eltern einlassen, denn man hat ja keine anderen Familienmitglieder. Man bildet eine Einheit mit den Eltern und das hilft dem Kind, reif und vernünftig zu werden.",
        "answer": "ja",
        "num": 20
      },
      {
        "id": 21,
        "type": "letter",
        "who": "Frank, 16, Schaffhausen",
        "text": "Ich war jahrelang allein. Dann hat meine Mutter wieder geheiratet und schon hatte ich zwei Halbgeschwister. Ich vermisse es immer noch, dass meine Mutter mal länger nur für mich Zeit hat oder dass ich nicht ständig alle meine CDs ausleihen oder den anderen bei irgendetwas helfen muss. Die Freude darüber, nicht allein zu sein, ist bei mir nicht so gross.",
        "answer": "ja",
        "num": 21
      },
      {
        "id": 22,
        "type": "letter",
        "who": "Zoe, 17, Westerland",
        "text": "Man muss nur an diese Einsamkeit bei Familienurlauben oder -festen denken, dann beantwortet sich die Frage von allein. Egal, wie viel man mit einem Bruder oder einer Schwester teilen muss, man ist nicht allein. Allein zu sein ist immer negativ.",
        "answer": "nein",
        "num": 22
      },
      {
        "id": 23,
        "type": "letter",
        "who": "Nikolaus, 43, Davos",
        "text": "Wenn man erstmal erwachsen und bei den Eltern ausgezogen ist, bekommen Geschwister eine andere Wichtigkeit. Geschwister sind im späteren Leben immer bereit, einander zu helfen. Sollten die gemeinsamen Eltern Pflege brauchen, kann man sich diese Aufgabe teilen. Und man hat immer Personen aus der eigenen Generation, die Zeuge unserer Kindheit und Jugend waren. All das hat ein Einzelkind nicht.",
        "answer": "nein",
        "num": 23
      },
      {
        "id": 24,
        "type": "letter",
        "who": "Andi, 29, Wels",
        "text": "Mit meinen Geschwistern habe ich mich nie gut verstanden. Weder als Kind, noch als Erwachsener. All die Streite und Auseinandersetzungen haben mich sehr viel Kraft gekostet. Diese Kraft hätte ich gut für andere Dinge brauchen können. Als Einzelkind muss man seine Zeit und Kraft nicht bei solchen Kämpfen verlieren.",
        "answer": "ja",
        "num": 24
      },
      {
        "id": 25,
        "type": "letter",
        "who": "Doris, 21, Schleswig",
        "text": "Kinder erleben es als Druck und Stress, dass ihre Eltern viel von ihnen erwarten. Wenn es in der Familie nur ein Kind gibt, dann muss dieses all die Erwartungen allein erfüllen oder zumindest ist das ein unerklärtes Ziel. Bei Geschwistern verteilt sich dieser Druck, deshalb ist das Leben für Kinder, die Geschwister haben, einfacher.",
        "answer": "nein",
        "num": 25
      },
      {
        "id": 26,
        "type": "letter",
        "who": "Lukas, 26, Nürnberg",
        "text": "Die pädagogische Forschung gibt uns da eine eindeutige Antwort. Ein Einzelkind kann sich von der Intelligenz her viel besser entwickeln, weil es gewissermaßen von zwei Erwachsenen „trainiert“ wird. Ihm wird ununterbrochen geholfen und das schlägt sich im Wissen, Schulwissen und Allgemeinwissen positiv nieder. Kinder ohne Geschwister haben also eine günstigere Ausgangssituation.",
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
        "heading": "Nutzungsordnung Campingplatz am Freibad Altenau",
        "sub": "Sie informieren sich über die Nutzungsordnung des Campingplatzes Altenau, wo Sie campen wollen.",
        "body": [
          "<strong>§ 1</strong><br>Das Campingplatzgelände am Freibad Altenau darf zum Ent- und Beladen befahren werden. Danach sind die Fahrzeuge auf dem Parkplatz vor dem Freibad abzustellen. Jedes auf dem Campingplatz abgestellte Auto kostet pro Nacht 10 €. Andere Regelungen sind mit den Verantwortlichen abzusprechen.",
          "<strong>§ 2</strong><br>Das Betreten der Uferzone ist aus Naturschutzgründen untersagt. Diese sollte auch nicht verunreinigt werden: weder als Toilette noch als Müllkippe. Angeln im Fluss ist verboten! (Anzeige des Fischerei-Vereins)",
          "<strong>§ 3</strong><br>Lagerfeuer und Grillen sind nur an den dafür vorgesehenen Feuerstellen erlaubt. Neue Feuerstellen dürfen nicht errichtet werden. Bei Missachtung droht eine Strafe von 50 €.",
          "<strong>§ 4</strong><br>Zur Müllbeseitigung ist ein Container neben dem Wohnhaus aufgestellt. Grob- und Sperrmüll-Entsorgungen, also auch Campingstühle und Luftmatratzen, sind nicht gestattet. Zuwiderhandlungen ziehen eine Geldbuße nach sich.",
          "<strong>§ 5</strong><br>Die Toiletten sind über die Treppe zu erreichen. Sie befinden sich links von den Duschräumen, direkt neben dem Kiosk. Es sollte selbstverständlich sein, dass sie sauber verlassen werden. Verstopfungen durch Essensreste, zu viel Papier u. Ä. sind zu vermeiden. Die Gruppenleiter sollten diesbezüglich ihre Gruppe informieren.<br>In den Duschräumen können die Warmduschen mit Duschmarken / Wert 1 € (an Kasse/Kiosk) für ca. 10 Minuten genutzt werden.",
          "<strong>§ 6</strong><br>Ab 24 Uhr ist Platzruhe einzuhalten. Um Rücksicht auf Mitcamper wird gebeten. Keine Lärmbelästigung!",
          "<strong>§ 7</strong><br>Hunde sind im Freibadgelände nicht erlaubt. Auf dem Campingplatz müssen sie angeleint bleiben und dürfen keinen Camper gefährden. Ihr Mitaufenthalt kostet 5 €/Tag.",
          "<strong>§ 8</strong><br>Im gesamten Bereich des Freibadgeländes haften Eltern oder Betreuer für ihre Kinder."
        ]
      }
    ],
    "questions": [
      {
        "id": 27,
        "type": "mcq",
        "text": "Für Hunde ...",
        "options": [
          "ist der Aufenthalt im Bereich des Freibads nicht zugelassen.",
          "ist der Campingplatz nicht vorgesehen.",
          "muss man einmalig 5 € bezahlen."
        ],
        "answer": 0,
        "num": 27
      },
      {
        "id": 28,
        "type": "mcq",
        "text": "Um zu grillen, muss man ...",
        "options": [
          "eine neue Feuerstelle bewilligt bekommen.",
          "an bestimmten Stellen Feuer machen.",
          "um Erlaubnis bitten."
        ],
        "answer": 1,
        "num": 28
      },
      {
        "id": 29,
        "type": "mcq",
        "text": "Die Toiletten ...",
        "options": [
          "liegen neben dem Kiosk.",
          "sollten von den Gruppenleitern sauber gemacht werden.",
          "haben auch Duschen."
        ],
        "answer": 0,
        "num": 29
      },
      {
        "id": 30,
        "type": "mcq",
        "text": "Für die Uferzone gilt:",
        "options": [
          "Es gibt dort auch Toiletten.",
          "Nur dort ist man verpflichtet, die Natur zu schützen.",
          "Der Aufenthalt dort ist verboten."
        ],
        "answer": 2,
        "num": 30
      }
    ]
  },
  {
    "id": 6,
    "title": "Teil 6",
    "badge": "Hören",
    "isHoren": True,
    "time": 40,
    "instructions": "Modul Hören: 4 Teile, 30 Aufgaben. Klicken Sie auf den Play-Button, um das Audio zu starten. Sie hören die Texte mit den echten Prüfungs-Pausen.",
    "audioSrc": "audio/modellsatz-19-hoeren.mp3",
    "audioFallbacks": [
      "audio/modellsatz-19-hoeren.mp3"
    ],
    "audioChapters": [
      {
        "time": 0,
        "start": 0,
        "end": 35,
        "label": "00:00 Teil 1 (Beispiel · 2x)",
        "part": 1,
        "title": "Teil 1 · Beispiel (2x hören)"
      },
      {
        "time": 35,
        "start": 35,
        "end": 845,
        "label": "00:35 Teil 1 (Texte 1–5 · 2x)",
        "part": 1,
        "title": "Teil 1 · Fünf kurze Texte (2x hören)"
      },
      {
        "time": 845,
        "start": 845,
        "end": 1170,
        "label": "14:05 Teil 2 (Swarovskis Kristallwelten · 1x)",
        "part": 2,
        "title": "Teil 2 · Führung Kristallwelten Wattens (1x hören)"
      },
      {
        "time": 1170,
        "start": 1170,
        "end": 1430,
        "label": "19:30 Teil 3 (Gespräch: Internetsucht · 1x)",
        "part": 3,
        "title": "Teil 3 · Gespräch im Fast-Food-Restaurant (1x hören)"
      },
      {
        "time": 1430,
        "start": 1430,
        "end": 1823,
        "label": "23:50 Teil 4 (Diskussion: Mode · 1. Durchgang)",
        "part": 4,
        "title": "Teil 4 · Diskussion über Mode (1. Durchgang)"
      },
      {
        "time": 1823,
        "start": 1823,
        "end": 2196,
        "label": "30:23 Teil 4 (Diskussion: Mode · 2. Durchgang)",
        "part": 4,
        "title": "Teil 4 · Diskussion über Mode (2. Durchgang)"
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
            "text": "Sie hören ein Reisemagazin über Berlin.",
            "answer": "falsch",
            "type": "tf"
          },
          "ex02": {
            "num": "02",
            "text": "Wann können Sie an einen See fahren?",
            "options": [
              "Im Januar.",
              "Im Oktober.",
              "Im Dezember."
            ],
            "answer": 1,
            "type": "mcq"
          }
        },
        "questions": [
          {
            "id": "h1",
            "teilPart": 1,
            "type": "tf",
            "text": "Sie sind mit dem Kundenservice einer Buchhandlung verbunden.",
            "answer": "falsch",
            "num": 1,
            "textNum": 1,
            "audioStart": 35
          },
          {
            "id": "h2",
            "teilPart": 1,
            "type": "mcq",
            "text": "Wer Fragen hat, ...",
            "options": [
              "soll eine Postkarte schreiben.",
              "kann auch am Wochenende anrufen.",
              "kann eine E-Mail schreiben."
            ],
            "answer": 2,
            "num": 2,
            "textNum": 1,
            "audioStart": 35
          },
          {
            "id": "h3",
            "teilPart": 1,
            "type": "tf",
            "text": "Der Zug kommt früher.",
            "answer": "falsch",
            "num": 3,
            "textNum": 2,
            "audioStart": 224
          },
          {
            "id": "h4",
            "teilPart": 1,
            "type": "mcq",
            "text": "Wann kommen die Reisenden in München an?",
            "options": [
              "Um 20.00 Uhr.",
              "Gegen 17.00 Uhr.",
              "Nach 23.00 Uhr."
            ],
            "answer": 2,
            "num": 4,
            "textNum": 2,
            "audioStart": 224
          },
          {
            "id": "h5",
            "teilPart": 1,
            "type": "tf",
            "text": "Es gibt eine Theatervorstellung für Kinder.",
            "answer": "falsch",
            "num": 5,
            "textNum": 3,
            "audioStart": 377
          },
          {
            "id": "h6",
            "teilPart": 1,
            "type": "mcq",
            "text": "Der Besuch der Veranstaltung ...",
            "options": [
              "ist kostenlos.",
              "kostet für Kinder und Erwachsene gleich viel.",
              "ist für Erwachsene teurer als für Kinder."
            ],
            "answer": 1,
            "num": 6,
            "textNum": 3,
            "audioStart": 377
          },
          {
            "id": "h7",
            "teilPart": 1,
            "type": "tf",
            "text": "Paula ist am Nachmittag nicht zu Hause.",
            "answer": "richtig",
            "num": 7,
            "textNum": 4,
            "audioStart": 464
          },
          {
            "id": "h8",
            "teilPart": 1,
            "type": "mcq",
            "text": "Wann kann Viola Paula zurückrufen?",
            "options": [
              "In den nächsten ein bis zwei Stunden.",
              "Heute Abend um 20 Uhr.",
              "Heute Abend zu Hause oder morgen in der Firma."
            ],
            "answer": 2,
            "num": 8,
            "textNum": 4,
            "audioStart": 464
          },
          {
            "id": "h9",
            "teilPart": 1,
            "type": "tf",
            "text": "Sie hören Tipps für Einkäufe im Supermarkt.",
            "answer": "falsch",
            "num": 9,
            "textNum": 5,
            "audioStart": 603
          },
          {
            "id": "h10",
            "teilPart": 1,
            "type": "mcq",
            "text": "An wie vielen Tagen kann man Bioprodukte kaufen?",
            "options": [
              "An drei Tagen.",
              "An zwei Tagen.",
              "An einem Tag."
            ],
            "answer": 1,
            "num": 10,
            "textNum": 5,
            "audioStart": 603
          }
        ]
      },
      {
        "id": 2,
        "partNumber": 2,
        "title": "Teil 2: Führung Swarovskis Kristallwelten",
        "badge": "Aufgaben 11 – 15",
        "intro": "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
        "context": "Sie nehmen an einer Führung in Swarovskis Kristallwelten teil.",
        "questions": [
          {
            "id": "h11",
            "teilPart": 2,
            "type": "mcq",
            "text": "Swarovskis Kristallwelten liegen in ...",
            "options": [
              "Innsbruck.",
              "Wattens.",
              "Wattenbach."
            ],
            "answer": 1,
            "num": 11,
            "audioStart": 845
          },
          {
            "id": "h12",
            "teilPart": 2,
            "type": "mcq",
            "text": "Wie viele Mitarbeiter hat Swarovski?",
            "options": [
              "5000.",
              "2000.",
              "25000."
            ],
            "answer": 2,
            "num": 12,
            "audioStart": 845
          },
          {
            "id": "h13",
            "teilPart": 2,
            "type": "mcq",
            "text": "Von wem wurden die Räume in Swarovskis Kristallwelten geplant?",
            "options": [
              "Von Daniel Swarovski.",
              "Von Kindern und Enkeln der Familie Swarovski.",
              "Von einem österreichischen Künstler."
            ],
            "answer": 2,
            "num": 13,
            "audioStart": 845
          },
          {
            "id": "h14",
            "teilPart": 2,
            "type": "mcq",
            "text": "Wer im Einkaufszentrum Produkte kauft, ...",
            "options": [
              "kann sich seine Einkäufe per Post schicken lassen.",
              "muss in Euro bezahlen.",
              "muss mit dem Personal sprechen."
            ],
            "answer": 0,
            "num": 14,
            "audioStart": 845
          },
          {
            "id": "h15",
            "teilPart": 2,
            "type": "mcq",
            "text": "Wer einen Hund hat, ...",
            "options": [
              "kann mit ihm im Park spazieren gehen.",
              "muss sich im Empfangszelt melden.",
              "kann ihn kostenlos in die Räume mitnehmen."
            ],
            "answer": 0,
            "num": 15,
            "audioStart": 845
          }
        ]
      },
      {
        "id": 3,
        "partNumber": 3,
        "title": "Teil 3: Gespräch über Internetsucht",
        "badge": "Aufgaben 16 – 22",
        "intro": "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
        "context": "Sie sitzen in einem Fast-Food-Restaurant und hören, wie sich drei Jugendliche über jemanden unterhalten, der vom Internet abhängig ist.",
        "questions": [
          {
            "id": "h16",
            "teilPart": 3,
            "type": "tf",
            "text": "Julia ist die Freundin von Erik.",
            "answer": "falsch",
            "num": 16,
            "audioStart": 1170
          },
          {
            "id": "h17",
            "teilPart": 3,
            "type": "tf",
            "text": "Julia ist allein ins Fast-Food-Restaurant gekommen.",
            "answer": "falsch",
            "num": 17,
            "audioStart": 1170
          },
          {
            "id": "h18",
            "teilPart": 3,
            "type": "tf",
            "text": "Erik hat auch nachts am Computer gespielt.",
            "answer": "richtig",
            "num": 18,
            "audioStart": 1170
          },
          {
            "id": "h19",
            "teilPart": 3,
            "type": "tf",
            "text": "Nele ist jetzt die Freundin von Erik.",
            "answer": "falsch",
            "num": 19,
            "audioStart": 1170
          },
          {
            "id": "h20",
            "teilPart": 3,
            "type": "tf",
            "text": "Die Familie wusste nichts von Eriks Problemen mit Nele.",
            "answer": "richtig",
            "num": 20,
            "audioStart": 1170
          },
          {
            "id": "h21",
            "teilPart": 3,
            "type": "tf",
            "text": "Er wollte nicht mit dem Arzt über sein Problem sprechen.",
            "answer": "falsch",
            "num": 21,
            "audioStart": 1170
          },
          {
            "id": "h22",
            "teilPart": 3,
            "type": "tf",
            "text": "Sebastian und Tom wollen Erik helfen.",
            "answer": "richtig",
            "num": 22,
            "audioStart": 1170
          }
        ]
      },
      {
        "id": 4,
        "partNumber": 4,
        "title": "Teil 4: Diskussion über Mode",
        "badge": "Aufgaben 23 – 30",
        "intro": "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
        "context": "Der Moderator der Radiosendung „Aktuelle Themen“ diskutiert mit der Modeberaterin Doris Siebert und der 14-jährigen Schülerin Eva Martins über Mode in unserem Leben.",
        "example": {
          "text": "Der Beruf der Modeberaterin ist toll.",
          "options": [
            "Moderator",
            "Doris Siebert",
            "Eva Martins"
          ],
          "answer": 0
        },
        "questions": [
          {
            "id": "h23",
            "teilPart": 4,
            "type": "speaker",
            "text": "Modeberater informieren die Kunden, wie man Stoffe pflegt.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 1,
            "num": 23,
            "audioStart": 1430
          },
          {
            "id": "h24",
            "teilPart": 4,
            "type": "speaker",
            "text": "Nicht alle Jugendlichen achten auf die Mode.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 2,
            "num": 24,
            "audioStart": 1430
          },
          {
            "id": "h25",
            "teilPart": 4,
            "type": "speaker",
            "text": "In zu sein, kostet viel.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 0,
            "num": 25,
            "audioStart": 1430
          },
          {
            "id": "h26",
            "teilPart": 4,
            "type": "speaker",
            "text": "Für ein modisches Aussehen braucht man nicht unbedingt viel Geld.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 1,
            "num": 26,
            "audioStart": 1430
          },
          {
            "id": "h27",
            "teilPart": 4,
            "type": "speaker",
            "text": "Man kann wegen schlechter Qualität Hautprobleme bekommen.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 1,
            "num": 27,
            "audioStart": 1430
          },
          {
            "id": "h28",
            "teilPart": 4,
            "type": "speaker",
            "text": "Wer Bio auf der Haut will, muss mehr zahlen.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 1,
            "num": 28,
            "audioStart": 1430
          },
          {
            "id": "h29",
            "teilPart": 4,
            "type": "speaker",
            "text": "Kritik an dem Aussehen von Jugendlichen ist nicht selten.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 0,
            "num": 29,
            "audioStart": 1430
          },
          {
            "id": "h30",
            "teilPart": 4,
            "type": "speaker",
            "text": "So ein Verhalten ist zu erwarten.",
            "options": [
              "Moderator",
              "Doris Siebert",
              "Eva Martins"
            ],
            "answer": 1,
            "num": 30,
            "audioStart": 1430
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "h1",
        "teilPart": 1,
        "type": "tf",
        "text": "Sie sind mit dem Kundenservice einer Buchhandlung verbunden.",
        "answer": "falsch",
        "num": 1,
        "textNum": 1,
        "audioStart": 35
      },
      {
        "id": "h2",
        "teilPart": 1,
        "type": "mcq",
        "text": "Wer Fragen hat, ...",
        "options": [
          "soll eine Postkarte schreiben.",
          "kann auch am Wochenende anrufen.",
          "kann eine E-Mail schreiben."
        ],
        "answer": 2,
        "num": 2,
        "textNum": 1,
        "audioStart": 35
      },
      {
        "id": "h3",
        "teilPart": 1,
        "type": "tf",
        "text": "Der Zug kommt früher.",
        "answer": "falsch",
        "num": 3,
        "textNum": 2,
        "audioStart": 224
      },
      {
        "id": "h4",
        "teilPart": 1,
        "type": "mcq",
        "text": "Wann kommen die Reisenden in München an?",
        "options": [
          "Um 20.00 Uhr.",
          "Gegen 17.00 Uhr.",
          "Nach 23.00 Uhr."
        ],
        "answer": 2,
        "num": 4,
        "textNum": 2,
        "audioStart": 224
      },
      {
        "id": "h5",
        "teilPart": 1,
        "type": "tf",
        "text": "Es gibt eine Theatervorstellung für Kinder.",
        "answer": "falsch",
        "num": 5,
        "textNum": 3,
        "audioStart": 377
      },
      {
        "id": "h6",
        "teilPart": 1,
        "type": "mcq",
        "text": "Der Besuch der Veranstaltung ...",
        "options": [
          "ist kostenlos.",
          "kostet für Kinder und Erwachsene gleich viel.",
          "ist für Erwachsene teurer als für Kinder."
        ],
        "answer": 1,
        "num": 6,
        "textNum": 3,
        "audioStart": 377
      },
      {
        "id": "h7",
        "teilPart": 1,
        "type": "tf",
        "text": "Paula ist am Nachmittag nicht zu Hause.",
        "answer": "richtig",
        "num": 7,
        "textNum": 4,
        "audioStart": 464
      },
      {
        "id": "h8",
        "teilPart": 1,
        "type": "mcq",
        "text": "Wann kann Viola Paula zurückrufen?",
        "options": [
          "In den nächsten ein bis zwei Stunden.",
          "Heute Abend um 20 Uhr.",
          "Heute Abend zu Hause oder morgen in der Firma."
        ],
        "answer": 2,
        "num": 8,
        "textNum": 4,
        "audioStart": 464
      },
      {
        "id": "h9",
        "teilPart": 1,
        "type": "tf",
        "text": "Sie hören Tipps für Einkäufe im Supermarkt.",
        "answer": "falsch",
        "num": 9,
        "textNum": 5,
        "audioStart": 603
      },
      {
        "id": "h10",
        "teilPart": 1,
        "type": "mcq",
        "text": "An wie vielen Tagen kann man Bioprodukte kaufen?",
        "options": [
          "An drei Tagen.",
          "An zwei Tagen.",
          "An einem Tag."
        ],
        "answer": 1,
        "num": 10,
        "textNum": 5,
        "audioStart": 603
      },
      {
        "id": "h11",
        "teilPart": 2,
        "type": "mcq",
        "text": "Swarovskis Kristallwelten liegen in ...",
        "options": [
          "Innsbruck.",
          "Wattens.",
          "Wattenbach."
        ],
        "answer": 1,
        "num": 11,
        "audioStart": 845
      },
      {
        "id": "h12",
        "teilPart": 2,
        "type": "mcq",
        "text": "Wie viele Mitarbeiter hat Swarovski?",
        "options": [
          "5000.",
          "2000.",
          "25000."
        ],
        "answer": 2,
        "num": 12,
        "audioStart": 845
      },
      {
        "id": "h13",
        "teilPart": 2,
        "type": "mcq",
        "text": "Von wem wurden die Räume in Swarovskis Kristallwelten geplant?",
        "options": [
          "Von Daniel Swarovski.",
          "Von Kindern und Enkeln der Familie Swarovski.",
          "Von einem österreichischen Künstler."
        ],
        "answer": 2,
        "num": 13,
        "audioStart": 845
      },
      {
        "id": "h14",
        "teilPart": 2,
        "type": "mcq",
        "text": "Wer im Einkaufszentrum Produkte kauft, ...",
        "options": [
          "kann sich seine Einkäufe per Post schicken lassen.",
          "muss in Euro bezahlen.",
          "muss mit dem Personal sprechen."
        ],
        "answer": 0,
        "num": 14,
        "audioStart": 845
      },
      {
        "id": "h15",
        "teilPart": 2,
        "type": "mcq",
        "text": "Wer einen Hund hat, ...",
        "options": [
          "kann mit ihm im Park spazieren gehen.",
          "muss sich im Empfangszelt melden.",
          "kann ihn kostenlos in die Räume mitnehmen."
        ],
        "answer": 0,
        "num": 15,
        "audioStart": 845
      },
      {
        "id": "h16",
        "teilPart": 3,
        "type": "tf",
        "text": "Julia ist die Freundin von Erik.",
        "answer": "falsch",
        "num": 16,
        "audioStart": 1170
      },
      {
        "id": "h17",
        "teilPart": 3,
        "type": "tf",
        "text": "Julia ist allein ins Fast-Food-Restaurant gekommen.",
        "answer": "falsch",
        "num": 17,
        "audioStart": 1170
          },
      {
        "id": "h18",
        "teilPart": 3,
        "type": "tf",
        "text": "Erik hat auch nachts am Computer gespielt.",
        "answer": "richtig",
        "num": 18,
        "audioStart": 1170
      },
      {
        "id": "h19",
        "teilPart": 3,
        "type": "tf",
        "text": "Nele ist jetzt die Freundin von Erik.",
        "answer": "falsch",
        "num": 19,
        "audioStart": 1170
      },
      {
        "id": "h20",
        "teilPart": 3,
        "type": "tf",
        "text": "Die Familie wusste nichts von Eriks Problemen mit Nele.",
        "answer": "richtig",
        "num": 20,
        "audioStart": 1170
      },
      {
        "id": "h21",
        "teilPart": 3,
        "type": "tf",
        "text": "Er wollte nicht mit dem Arzt über sein Problem sprechen.",
        "answer": "falsch",
        "num": 21,
        "audioStart": 1170
      },
      {
        "id": "h22",
        "teilPart": 3,
        "type": "tf",
        "text": "Sebastian und Tom wollen Erik helfen.",
        "answer": "richtig",
        "num": 22,
        "audioStart": 1170
      },
      {
        "id": "h23",
        "teilPart": 4,
        "type": "speaker",
        "text": "Modeberater informieren die Kunden, wie man Stoffe pflegt.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 1,
        "num": 23,
        "audioStart": 1430
      },
      {
        "id": "h24",
        "teilPart": 4,
        "type": "speaker",
        "text": "Nicht alle Jugendlichen achten auf die Mode.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 2,
        "num": 24,
        "audioStart": 1430
      },
      {
        "id": "h25",
        "teilPart": 4,
        "type": "speaker",
        "text": "In zu sein, kostet viel.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 0,
        "num": 25,
        "audioStart": 1430
      },
      {
        "id": "h26",
        "teilPart": 4,
        "type": "speaker",
        "text": "Für ein modisches Aussehen braucht man nicht unbedingt viel Geld.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 1,
        "num": 26,
        "audioStart": 1430
      },
      {
        "id": "h27",
        "teilPart": 4,
        "type": "speaker",
        "text": "Man kann wegen schlechter Qualität Hautprobleme bekommen.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 1,
        "num": 27,
        "audioStart": 1430
      },
      {
        "id": "h28",
        "teilPart": 4,
        "type": "speaker",
        "text": "Wer Bio auf der Haut will, muss mehr zahlen.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 1,
        "num": 28,
        "audioStart": 1430
      },
      {
        "id": "h29",
        "teilPart": 4,
        "type": "speaker",
        "text": "Kritik an dem Aussehen von Jugendlichen ist nicht selten.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 0,
        "num": 29,
        "audioStart": 1430
      },
      {
        "id": "h30",
        "teilPart": 4,
        "type": "speaker",
        "text": "So ein Verhalten ist zu erwarten.",
        "options": [
          "Moderator",
          "Doris Siebert",
          "Eva Martins"
        ],
        "answer": 1,
        "num": 30,
        "audioStart": 1430
      }
    ]
  }
]
