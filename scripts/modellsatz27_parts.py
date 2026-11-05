#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 27 - Parts Data
Exam: Modelltest 21 — Hueber Zertifikat B1 (source: OSD JUIL/13, EX13-OSD.pdf)
"""

true = True
false = False
null = None

test_data = {
  "id": "modellsatz-27",
  "title": "Modelltest 21 — Hueber Zertifikat B1",
  "badge": "Modelltest 21",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 21",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 21 (Hueber)",
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
          "title": "Forum – Wir sind für dich da! · Werbetricks",
          "heading": "Forum – Wir sind für dich da! · Werbetricks",
          "body": [
            "Ich möchte auch von meiner Erfahrung mit Werbetricks berichten. Meine Freundin und ich haben uns schon immer für eine ausgewogene Ernährungsweise interessiert. Deswegen aßen wir zum Frühstück gern und oft Getreideflocken der Marke „Fit“ mit Milch oder Joghurt. Ab und zu gab es sie bei uns sogar zu Abend. Nicht nur versprachen sie dem Werbetext zufolge einen hohen Anteil an Vollkorn, sondern auch „einen leichten Genuss für die Linie“, da wenig Fett und Zucker darin enthalten seien. Gutgläubig, wie wir nun mal waren, konsumierten wir umso mehr von dem Produkt und meinten, etwas Gutes für unseren Körper zu tun. Und außerdem schmecken die „Fit“-Flocken verdammt gut!",
            "Nach einiger Zeit stellten wir allerdings fest, dass wir beide zugenommen hatten. Wir führten dies anfangs auf einen Mangel an Bewegung zurück. Meine Partnerin und ich sind nämlich beide voll berufstätig und verbringen viele Stunden im Büro. Wir nahmen uns also vor, an Wochenenden mehr Sport zu treiben. Doch das führte auf die Dauer nicht zum erwünschten Ergebnis. Wir waren zwar körperlich fitter, aber abgenommen hatte keiner von uns.",
            "Da stieß ich zufällig im Internet auf eine Website zum Thema Werbetricks. Und siehe da: Unsere so „gesunden“ „Fit“-Cerealien waren dort ein Paradebeispiel dafür, wie durch falsche Informationen die Konsumenten zum Kauf eines Produkts verlockt werden. Ich erfuhr, dass die meisten Cornflakes viel zu viel Zucker enthalten. Bei der Marke unserer Wahl waren es ganze 30 %. Ich holte schnell die „Fit“-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm. Und die tägliche Verzehrsempfehlung: 40 Gramm!! Wer wird davon eigentlich satt? Ich könnte den Vormittag danach ohne Magenknurren nicht überstehen. Wir haben immer mindestens die doppelte Menge gegessen.",
            "Und was das Vollkorn betrifft, ist auch alles Schwindel. 20 Prozent Vollkornanteil sind noch lange kein echtes Vollkornprodukt. In Vollkornbrot beispielsweise müssen mindestens 90 Prozent Vollkorn stecken. Kein Wunder also, dass wir zugenommen haben, obwohl wir dachten, uns leicht und gesund zu ernähren. Seitdem essen wir zum Frühstück eine Scheibe Vollkornbrot mit Margarine, Frischkäse und Marmelade. Das kommt auf deutlich weniger Zucker pro 100 Gramm. Trotz Marmelade. Und wir haben auch schon etwas abgenommen.",
            "Bernd Geißner"
          ]
        }
      ],
      "example": {
        "id": 0,
        "num": 0,
        "text": "Bernd und seine Freundin aßen ab und zu zum Frühstück „Fit“-Flocken.",
        "answer": "falsch"
      },
      "questions": [
        {
          "id": 1,
          "num": 1,
          "type": "tf",
          "text": "„Fit“-Flocken hielt Bernd für gesund.",
          "answer": "richtig"
        },
        {
          "id": 2,
          "num": 2,
          "type": "tf",
          "text": "Obwohl Bernd viele Stunden arbeitete, fand er täglich Zeit für Fitness-Übungen.",
          "answer": "falsch"
        },
        {
          "id": 3,
          "num": 3,
          "type": "tf",
          "text": "Die „Fit“-Flocken werden fast ausschließlich aus Zucker hergestellt.",
          "answer": "falsch"
        },
        {
          "id": 4,
          "num": 4,
          "type": "tf",
          "text": "Auf der „Fit“-Packung stehen nur Lügen.",
          "answer": "falsch"
        },
        {
          "id": 5,
          "num": 5,
          "type": "tf",
          "text": "Bernd nahm zu, da er zu viel von den Flocken aß.",
          "answer": "richtig"
        },
        {
          "id": 6,
          "num": 6,
          "type": "tf",
          "text": "Die „Fit“-Flocken sind eigentlich kein Vollkornprodukt.",
          "answer": "richtig"
        }
      ]
    },
    {
      "id": 2,
      "title": "Teil 2",
      "time": 20,
      "instructions": "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "instructions2": "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles": [
        {
          "id": 1,
          "heading": "Velo-Abenteuer",
          "title": "Velo-Abenteuer",
          "sub": "Velo = Schweizer Standard für „Fahrrad“",
          "source": "aus einer Schweizer Zeitung",
          "body": [
            "Beim Stichwort „Alpentransit“ denken die meisten an Verkehrspolitik und Staus. Nicht so die Mountainbiker. Für sie sind die Alpen eine willkommene Gelegenheit, die eigenen Grenzen auszuprobieren; eins der letzten grossen Gebiete im sonst weitgehend erschlossenen Europa. Von Wien bis Nizza sind die Alpen nicht nur eine Klima- und Wasserscheide. Abseits grosser Ballungsräume und Autobahnen geht hier alles einen etwas ruhigeren Gang. Die Alpen bieten für jeden Geschmack passende Routen, das reicht von der vier Meter breiten Schotterstrasse bis zu Feld- und Alpwegen oberhalb der Baumgrenze.",
            "Landschaftlich wie historisch lohnen sich besonders die Dolomiten. Wer innert fünf Tagen von Innsbruck zum italienischen Skiort Cortina d’Ampezzo radelt, bekommt unterwegs eine Menge geboten. Dabei wird das unbestrittene Highlight zum Schluss serviert, quasi als Dessert mit hohem Erinnerungswert. Doch schön der Reihe nach: Zuerst fährt man oberhalb der Brenner-Autobahn und hat einen herrlichen Panoramablick, vorbei an Apfelplantagen. Das erste Highlight ist ein Bergweg an der Steilwand des Kreuzkofels entlang, direkt an der Baumgrenze mit Ausblick auf weitere Dolomitenberge. Am Ende der Tour erreicht man den Fanes-Kessel, das absolute Highlight. Dort gibt es rundum steile Bergflanken, unten einige Bergseen, gespeist von Wasserfällen, und natürlich auch Berghütten, in denen man sich bei Apfelschorle und leckerer Pasta Napoli stärken kann. Einfach unvergesslich!"
          ]
        }
      ],
      "example": {
        "id": 0,
        "num": 0,
        "text": "In den Alpen ...",
        "options": [
          "gibt es viele unterschiedliche Reisewege.",
          "sind oberhalb der Baumgrenze keine Wege.",
          "gibt es Essen für jeden Geschmack."
        ],
        "answer": 0
      },
      "questions": [
        {
          "id": 7,
          "num": 7,
          "type": "mcq",
          "text": "In diesem Text geht es um ...",
          "options": [
            "Umweltprobleme in den Alpen.",
            "Velofahren in der Schweiz.",
            "Velo-Touren in den Alpen."
          ],
          "answer": 2
        },
        {
          "id": 8,
          "num": 8,
          "type": "mcq",
          "text": "Auf der Tour von Innsbruck nach Cortina d’Ampezzo ...",
          "options": [
            "gibt es schöne Desserts.",
            "kann man viel sehen.",
            "reisen die Mountainbiker sehr gern."
          ],
          "answer": 1
        },
        {
          "id": 9,
          "num": 9,
          "type": "mcq",
          "text": "In den Berghütten des Fanes-Kessels ...",
          "options": [
            "gibt es nur Getränke.",
            "kann man schlafen.",
            "kann man lecker essen."
          ],
          "answer": 2
        }
      ],
      "articles2": [
        {
          "id": 2,
          "heading": "Eine virtuelle Reise",
          "title": "Eine virtuelle Reise",
          "source": "von Gregor Kucera aus der Wiener Zeitung vom 30.09.2012",
          "body": [
            "Eine Reise um die Welt, zu bedeutenden Orten, Bauwerken oder Denkmälern muss heute nicht anstrengend oder teuer sein. Waren Sie schon auf dem Schiefen Turm von Pisa? Nein. Zu viele Touristen in der Warteschlange? Zu teuer? Keine Zeit? Oder nicht mehr gut zu Fuß? Alles kein Problem. Der Digitalisierung sei Dank.",
            "Wenn man nicht zu den Denkmälern kommt, dann kommen diese eben zu Ihnen. Eine Weltreise kann einfach am iPad oder am Computer erfolgen. Bücher, Denkmäler oder Museumsbesuche sind als virtuelle Touren im Internet verfügbar. Ein Rundgang durch den Pariser Louvre ist somit ebenso möglich wie ein Flug um die Spitze der Freiheitsstatue oder ein Rundgang durch den Grand Canyon.",
            "Mittlerweile sind virtuelle Reisen zu Denkmälern quer durch Kontinente und rund um die Welt kein Problem mehr. Auch zahlreiche Anwendungen für Smartphone – sogenannte Apps – konservieren die Kunstschätze der Welt für die nächsten Generationen. In der Österreichischen Nationalbibliothek werden die bedeutenden Werke digitalisiert und auch Google macht seit Jahren mehr oder weniger bekannte, aber auf jeden Fall erhaltenswerte Schriften aus Museen, Bibliotheken und Büchereien der digitalen Welt zugänglich."
          ]
        }
      ],
      "questions2": [
        {
          "id": 10,
          "num": 10,
          "type": "mcq",
          "text": "In diesem Text geht es um ...",
          "options": [
            "viele Möglichkeiten, eine Reise zu machen.",
            "eine neue Art, Sehenswürdigkeiten kennenzulernen.",
            "österreichische Denkmäler."
          ],
          "answer": 1
        },
        {
          "id": 11,
          "num": 11,
          "type": "mcq",
          "text": "Google ...",
          "options": [
            "sorgt dafür, dass Internetnutzer Schriften aus Museen sehen und lesen können.",
            "arbeitet mit der Österreichischen Nationalbibliothek zusammen.",
            "sammelt bekannte Werke aus Museen."
          ],
          "answer": 0
        },
        {
          "id": 12,
          "num": 12,
          "type": "mcq",
          "text": "Weite Reisen ...",
          "options": [
            "kosten immer viel Geld.",
            "werden von vielen Touristen unternommen.",
            "können müde machen."
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
      "intro": "Die meisten Ihrer Bekannten haben ein Auto. Aber ein Auto ist nicht nur praktisch, sondern es macht auch viel Arbeit und kostet Geld. Sie suchen in den Anzeigen a bis j nach einer passenden Lösung für die folgenden Situationen.",
      "example": {
        "id": 0,
        "num": 0,
        "text": "Julia möchte gerne mit öffentlichen Verkehrsmitteln zur Arbeit fahren, denn mit dem eigenen Auto und dauernder Parkplatzsuche schafft sie das nie.",
        "answer": "b"
      },
      "questions": [
        {
          "id": 13,
          "num": 13,
          "type": "match",
          "text": "Ehepaar Jansen bringt sein Auto zum Waschen regelmäßig in eine Autowaschanlage. Es sucht aber immer nach Möglichkeiten, dabei auch etwas Gutes für andere zu tun.",
          "answer": "e"
        },
        {
          "id": 14,
          "num": 14,
          "type": "match",
          "text": "Benno hat seit Kurzem den Führerschein, möchte aber noch mehr über sicheres und energiesparendes Fahren lernen.",
          "answer": "0"
        },
        {
          "id": 15,
          "num": 15,
          "type": "match",
          "text": "Frau Wyss ist mit ihrem alten Elektro-Auto nicht mehr zufrieden und möchte sich über die neuesten E-Modelle der verschiedenen Automarken informieren.",
          "answer": "j"
        },
        {
          "id": 16,
          "num": 16,
          "type": "match",
          "text": "Herr Wieser ist gehbehindert und fährt deshalb immer mit dem Auto ins Büro. Aber die Strecke von Klosterneuburg bis ins Zentrum von Wien ist lang und Benzin wird immer teurer.",
          "answer": "g"
        },
        {
          "id": 17,
          "num": 17,
          "type": "match",
          "text": "Melissa hat seit drei Monaten einen Führerschein und findet es nicht gut, dass sie noch nicht einmal einen Reifen wechseln kann.",
          "answer": "a"
        },
        {
          "id": 18,
          "num": 18,
          "type": "match",
          "text": "Bei ihrem letzten Unfall war Frau Schulte zwei Tage ohne Auto, was ihr bei ihrer Arbeit als Versicherungsvertreterin viele Probleme verursacht hat.",
          "answer": "d"
        },
        {
          "id": 19,
          "num": 19,
          "type": "match",
          "text": "Herr Nowak hatte leider schon wieder einen Unfall. Das letzte Mal hat er sich sehr über die Werkstatt und die Versicherungsvertreter geärgert.",
          "answer": "f"
        }
      ],
      "ads": [
        {
          "id": "a",
          "title": "Pannenkurse für Frauen · Auto-Profi Hoffmann",
          "text": "Zusammen mit der Volkshochschule Ulm bieten wir exklusiv Pannenkurse für Frauen an. Die Anmeldung für diese Fortbildung ist kostenlos und nur über die VH Ulm möglich! Nächster Termin: 15. Oktober. Wir schreiben SERVICE groß: Reparaturen, jährliche Hauptuntersuchung, Pannen- und Unfallhilfe – alles zu fairen Preisen. Auto-Profi Hoffmann · Lindenburgstr. 89 · 12980 Breitenau · Tel.: 01278 32 17 · www.auto_profi_hoffmann.de"
        },
        {
          "id": "b",
          "title": "Park & Ride Wien",
          "text": "Bequem und stressfrei zur Arbeit: Parken Sie Ihr Auto in einem unserer Park & Ride Garagen direkt an der U-Bahn und steigen Sie um auf die Wiener Linien. Günstige Wochen- und Monatstickets inklusive Garagenstellplatz. Kein Stau, keine Parkplatzsuche!"
        },
        {
          "id": "c",
          "title": "autoscout24 – Österreichs größter Automarkt",
          "text": "Umweltbewusst fahren – zu fairen Preisen! autoscout24 jetzt auch in Klosterneuburg. Große Auswahl an gebrauchten Elektroautos. Super-Sonderangebot zur Eröffnung: 10% auf alle E-Autos! www.autoscout.at"
        },
        {
          "id": "d",
          "title": "Autohaus Hellmer · Mobilitätsgarantie",
          "text": "Bergerstr. 17, 78934 Saalfeld · Tel. (06510) 17 78-0 · www.autohaus-hellmer.de. Mobilitätsgarantie bis zum 1.5. nur 89,- Euro (pro Jahr inkl. jährliche Hauptuntersuchung). Mobilitätsgarantie – 365 Tage im Jahr, 24 Stunden am Tag: Pannenhilfe daheim und unterwegs, Bergen und Abschleppen bei Unfällen, Ersatzwagen bis zu 3 Tagen oder Hotelübernachtung für Sie und Ihre Mitfahrer."
        },
        {
          "id": "e",
          "title": "Autowaschen für einen guten Zweck · Car Wash Royal",
          "text": "Na, was machen Sie so regelmäßig am Samstag? Ab mit dem Auto in die Waschanlage? Im April können Sie das jeden Samstag bei Car Wash Royal am Klusenweg 10 in Schwerte auch tun und dazu noch einen guten Zweck unterstützen. Von jeder Fahrzeugwäsche gehen 4,- € in die Spendenkasse, sodass mit einer schönen Summe gerechnet werden darf, die anschließend an die Jugendfeuerwehr Schwerte übergeben werden kann."
        },
        {
          "id": "f",
          "title": "eckert mobil · Unfallinstandsetzung im eigenen Haus",
          "text": "Auto- und Motorrad-Service – alle gängigen Marken. eckert mobil · Eindhovener Straße 77 · 4175 Aachen · Tel.: 02162/1020951. Der absolute Allround-Service: alle Reparaturen, nur Original-Ersatzteile, gesamte Unfallabwicklung inkl. Fahrzeugabholung am Unfallort und Regelung aller Formalien mit der Versicherung."
        },
        {
          "id": "g",
          "title": "Mitfahrgelegenheit Klosterneuburg – Wien-Zentrum",
          "text": "Allein ist langweilig und teuer! Suche tägl. Mitfahrgelegenheit Klosterneuburg – Wien-Zentrum, Büroarbeitszeiten. Selbstverständlich nicht umsonst, übernehme meinen Teil der Benzinkosten. Kontakt: Maximilian 0650-8977234."
        },
        {
          "id": "h",
          "title": "CleanestCar-Autopflege-Center",
          "text": "Nach 10 Autowäschen in einem CleanestCar-Autopflege-Center bekommen Sie bei uns eine Luxus-Autowäsche inkl. Wachs, Farbauffrischung und Felgenreinigung zum HALBEN PREIS. Bei allen CleanestCar-Autopflege-Centern, bis zum 30.12. www.cleanestcar.de"
        },
        {
          "id": "i",
          "title": "Fahrschule Peter Rüegg · Zürich",
          "text": "Sicherfahren lernen. Umweltschonend und energiesparend fahren lernen. Fahrschule Peter Rüegg – Ausbildung in allen Klassen. Nächster Ferienlehrgang in den Sommerferien vom 15.07.–21.07. Jederzeit sind Intensivkurse möglich. Nicht für Jungfahrer. Dammstrasse 45, Zürich · Tel: 079-6135691 · www.fahrschule-rueegg.ch"
        },
        {
          "id": "j",
          "title": "Auto Salon Genf · Reiseagentur Geneve",
          "text": "Besuchen Sie den Auto Salon Genf – Dieses Jahr im Blickpunkt: Das E-Auto: neue Modelle – neue Technologien – bessere Leistungen. Buchen Sie jetzt: 2 Wochenend-Eintrittskarten, 1 Übernachtung (Doppelzimmer, 4-Sterne-Hotel am Messegelände, inkl. Frühstücksbuffet) nur CHF 320 (bei Buchung bis zum 15.3.). Reiseagentur Geneve · Quai du Valais 15 · 1305 Genf · Tel: 058 451 49 32 · info@ch-travel.ch"
        }
      ],
      "adsFormatted": [
        {
          "code": "A",
          "title": "Pannenkurse für Frauen · Auto-Profi Hoffmann",
          "text": "Zusammen mit der Volkshochschule Ulm bieten wir exklusiv Pannenkurse für Frauen an. Die Anmeldung für diese Fortbildung ist kostenlos und nur über die VH Ulm möglich! Nächster Termin: 15. Oktober.\n\nWir schreiben SERVICE groß: Reparaturen, jährliche Hauptuntersuchung, Pannen- und Unfallhilfe – alles zu fairen Preisen.\nAuto-Profi Hoffmann · Lindenburgstr. 89 · 12980 Breitenau · Tel.: 01278 32 17",
          "html": "<div class=\"anzeige-headline\">Pannenkurse für Frauen</div><div class=\"anzeige-sub\">Exklusiv mit der VHS Ulm · Kostenlose Fortbildung</div><p>Lernen Sie kleine Pannen und Reifenwechsel selbstständig zu beheben. Anmeldung nur über VH Ulm.</p><p><strong>Auto-Profi Hoffmann</strong><br>Lindenburgstr. 89, 12980 Breitenau<br>Tel.: 01278 32 17 · www.auto_profi_hoffmann.de</p>"
        },
        {
          "code": "B",
          "title": "Park & Ride Wien",
          "text": "Bequem und stressfrei zur Arbeit: Parken Sie Ihr Auto in einem unserer Park & Ride Garagen direkt an der U-Bahn und steigen Sie um auf die Wiener Linien. Günstige Wochen- und Monatstickets inklusive Garagenstellplatz. Kein Stau, keine Parkplatzsuche!",
          "html": "<div class=\"anzeige-headline\">Park & Ride Wien</div><div class=\"anzeige-sub\">Stressfrei und staufrei zur Arbeit</div><p>Parken an der U-Bahn und entspannt öffentlich weiterfahren. Günstige Kombi-Tickets.</p><p><strong>Wiener Linien P+R Garagen</strong><br>www.parkandride-wien.at</p>"
        },
        {
          "code": "C",
          "title": "autoscout24 – Österreichs größter Automarkt",
          "text": "Umweltbewusst fahren – zu fairen Preisen! autoscout24 jetzt auch in Klosterneuburg. Große Auswahl an gebrauchten Elektroautos. Super-Sonderangebot zur Eröffnung: 10% auf alle E-Autos! www.autoscout.at",
          "html": "<div class=\"anzeige-headline\">autoscout24 in Klosterneuburg</div><div class=\"anzeige-sub\">Umweltbewusst fahren – zu fairen Preisen</div><p>Große Auswahl an geprüften gebrauchten Elektroautos.<br><strong>10% Eröffnungsrabatt auf alle E-Autos!</strong></p><p>www.autoscout.at</p>"
        },
        {
          "code": "D",
          "title": "Autohaus Hellmer · Mobilitätsgarantie",
          "text": "Bergerstr. 17, 78934 Saalfeld · Tel. (06510) 17 78-0. Mobilitätsgarantie bis zum 1.5. nur 89,- Euro (pro Jahr inkl. jährliche Hauptuntersuchung). Mobilitätsgarantie – 365 Tage im Jahr, 24 Stunden am Tag: Pannenhilfe daheim und unterwegs, Bergen und Abschleppen bei Unfällen, Ersatzwagen bis zu 3 Tagen oder Hotelübernachtung für Sie und Ihre Mitfahrer.",
          "html": "<div class=\"anzeige-headline\">Autohaus Hellmer · Mobilitätsgarantie</div><div class=\"anzeige-sub\">Ihr Markgräfler Autopartner · 365 Tage rund um die Uhr</div><p>Pannenhilfe vor Ort, Abschleppdienst und <strong>Ersatzwagen bis zu 3 Tagen</strong> oder Hotelübernachtung bei Unfällen.</p><p>Bergerstr. 17, 78934 Saalfeld<br>Tel.: (06510) 17 78-0 · www.autohaus-hellmer.de</p>"
        },
        {
          "code": "E",
          "title": "Autowaschen für einen guten Zweck · Car Wash Royal",
          "text": "Na, was machen Sie so regelmäßig am Samstag? Ab mit dem Auto in die Waschanlage? Im April können Sie das jeden Samstag bei Car Wash Royal am Klusenweg 10 in Schwerte auch tun und dazu noch einen guten Zweck unterstützen. Von jeder Fahrzeugwäsche gehen 4,- € in die Spendenkasse für die Jugendfeuerwehr Schwerte.",
          "html": "<div class=\"anzeige-headline\">Autowaschen für einen guten Zweck</div><div class=\"anzeige-sub\">Car Wash Royal Schwerte · Samstags im April</div><p>Von jeder Autowäsche gehen <strong>4,- € direkt als Spende an die Jugendfeuerwehr Schwerte</strong>.</p><p><strong>Car Wash Royal</strong><br>Klusenweg 10, 58239 Schwerte</p>"
        },
        {
          "code": "F",
          "title": "eckert mobil · Unfallinstandsetzung im eigenen Haus",
          "text": "Auto- und Motorrad-Service – alle gängigen Marken. eckert mobil · Eindhovener Straße 77 · 4175 Aachen · Tel.: 02162/1020951. Der absolute Allround-Service: alle Reparaturen, nur Original-Ersatzteile, gesamte Unfallabwicklung inkl. Fahrzeugabholung am Unfallort und Regelung aller Formalien mit der Versicherung.",
          "html": "<div class=\"anzeige-headline\">eckert mobil · Unfall-Komplettservice</div><div class=\"anzeige-sub\">Instandsetzung & Versicherungsabwicklung aus einer Hand</div><p>Fahrzeugabholung direkt am Unfallort, Meisterreparatur mit Originalteilen und <strong>komplette Formalitätenregelung mit der Versicherung</strong>.</p><p>Eindhovener Str. 77, 4175 Aachen<br>Tel.: 02162 / 1020951 · info@eckertmobil.de</p>"
        },
        {
          "code": "G",
          "title": "Mitfahrgelegenheit Klosterneuburg – Wien-Zentrum",
          "text": "Allein ist langweilig und teuer! Suche tägl. Mitfahrgelegenheit Klosterneuburg – Wien-Zentrum, Büroarbeitszeiten. Selbstverständlich nicht umsonst, übernehme meinen Teil der Benzinkosten. Kontakt: Maximilian 0650-8977234.",
          "html": "<div class=\"anzeige-headline\">Mitfahrgelegenheit gesucht</div><div class=\"anzeige-sub\">Klosterneuburg ➔ Wien-Zentrum</div><p>Suche tägliche Mitfahrt zu regulären Büroarbeitszeiten. Beteilige mich zuverlässig an den Benzinkosten!</p><p><strong>Kontakt: Maximilian</strong><br>Mobil: 0650-8977234</p>"
        },
        {
          "code": "H",
          "title": "CleanestCar-Autopflege-Center",
          "text": "Nach 10 Autowäschen in einem CleanestCar-Autopflege-Center bekommen Sie bei uns eine Luxus-Autowäsche inkl. Wachs, Farbauffrischung und Felgenreinigung zum HALBEN PREIS. Bei allen CleanestCar-Autopflege-Centern, bis zum 30.12. www.cleanestcar.de",
          "html": "<div class=\"anzeige-headline\">CleanestCar Autopflege-Treueaktion</div><div class=\"anzeige-sub\">Treue zahlt sich aus</div><p>Nach 10 Wäschen erhalten Sie eine Luxus-Autowäsche inkl. Wachs und Felgenreinigung zum <strong>halben Preis</strong>.</p><p>Gültig in allen Centern bis 30.12.<br>www.cleanestcar.de</p>"
        },
        {
          "code": "I",
          "title": "Fahrschule Peter Rüegg · Zürich",
          "text": "Sicherfahren lernen. Umweltschonend und energiesparend fahren lernen. Fahrschule Peter Rüegg – Ausbildung in allen Klassen. Nächster Ferienlehrgang in den Sommerferien vom 15.07.–21.07. Jederzeit sind Intensivkurse möglich. Nicht für Jungfahrer. Dammstrasse 45, Zürich · Tel: 079-6135691 · www.fahrschule-rueegg.ch",
          "html": "<div class=\"anzeige-headline\">Fahrschule Peter Rüegg · Zürich</div><div class=\"anzeige-sub\">Sicher & energiesparend fahren lernen</div><p>Spezialkurse für umweltschonendes Fahren und moderne Fahrtechnik.<br><span style=\"color:#c00; font-weight:bold;\">Achtung: Nicht für Jungfahrer!</span></p><p>Dammstrasse 45, Zürich<br>Tel.: 079-6135691 · www.fahrschule-rueegg.ch</p>"
        },
        {
          "code": "J",
          "title": "Auto Salon Genf · Reiseagentur Geneve",
          "text": "Besuchen Sie den Auto Salon Genf – Dieses Jahr im Blickpunkt: Das E-Auto: neue Modelle – neue Technologien – bessere Leistungen. Buchen Sie jetzt: 2 Wochenend-Eintrittskarten, 1 Übernachtung (Doppelzimmer, 4-Sterne-Hotel am Messegelände, inkl. Frühstücksbuffet) nur CHF 320 (bei Buchung bis zum 15.3.). Reiseagentur Geneve · Quai du Valais 15 · 1305 Genf · Tel: 058 451 49 32 · info@ch-travel.ch",
          "html": "<div class=\"anzeige-headline\">Besuchen Sie den Auto Salon Genf</div><div class=\"anzeige-sub\">Fokus E-Mobilität: Neue Modelle & Technologien aller Marken</div><p>Kombi-Reisepaket: 2 Eintrittskarten + 1 Übernachtung im 4-Sterne-Hotel am Messegelände für nur CHF 320.</p><p><strong>Reiseagentur Genève</strong><br>Quai du Valais 15, 1305 Genf<br>Tel.: 058 451 49 32 · info@ch-travel.ch</p>"
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "time": 15,
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot?",
      "intro": "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über Graffiti an den Wänden der Stadt und die Möglichkeit, dies zu verbieten.",
      "example": {
        "id": 0,
        "who": "Jakob, 16, Neuruppin",
        "num": 0,
        "answer": "Nein"
      },
      "letters": [
        {
          "id": 20,
          "num": 20,
          "who": "Anton, 14, Wolfratshausen",
          "text": "Meine ältere Schwester hat schon mal mit Freunden gesprayt. Die sind da am Sonntagmorgen zu einem Industriegelände gegangen. Ich war am nächsten Tag auch da, aber mir hat ihr Kunstwerk nicht gefallen, weil es nicht so gut war. Als unsere Eltern das hörten, sind sie ausgerastet. Sie waren richtig böse und haben meine Schwester auch bestraft. Aber trotzdem, ich finde so etwas allgemein sehr cool.",
          "answer": "Nein"
        },
        {
          "id": 21,
          "num": 21,
          "who": "Ernst, 48, Heidelberg",
          "text": "Ich mag es gern, wenn alles gepflegt und schön ist. Wenn überall Graffiti sind, sieht es unordentlich und chaotisch aus – schrecklich! Mich stört das. Wie soll man diesen Anblick nur tagein, tagaus ertragen? Kommen Sie mal zu mir, in meine Straße, und sehen Sie es sich an, dann verstehen Sie sofort, was ich meine.",
          "answer": "Ja"
        },
        {
          "id": 22,
          "num": 22,
          "who": "Conni, 37, Regensburg",
          "text": "Was ich zu Graffiti meine? Schwer zu sagen. Es gab ja früher schon Fassadenmalereien an großen Mietshäusern in der Stadt, aber das war nicht ganz so unruhig und natürlich hatte es jemand gegen Geld gemacht. Graffiti hat immer etwas Illegales und ich denke auch, es wäre besser, so etwas nicht zu dulden. Schließlich soll nicht jeder machen können, was er will, dann hätten wir hier ein Chaos.",
          "answer": "Ja"
        },
        {
          "id": 23,
          "num": 23,
          "who": "Torben, 18, Luzern",
          "text": "Die Frage erübrigt sich. Stellt euch doch mal vor, wie monoton unsere Städte wären. Mich nervt das Geordnete und übermässig Saubere. Man muss doch mal etwas anderes sehen können. Wenn ich mir Fotos von früher anschaue, bevor es Graffiti gab, finde ich die Stadt unvorstellbar langweilig und nichtssagend. So kann unsere Welt nicht sein!",
          "answer": "Nein"
        },
        {
          "id": 24,
          "num": 24,
          "who": "Inge, 52, Bonn",
          "text": "Ich weiß nur, dass diese Farben ungesund sind. Einmal habe ich sogar gelesen, dass man beim Sprayen eine Gesichtsmaske tragen soll, um die giftigen Dämpfe nicht einzuatmen. Das kann nicht zugelassen werden. Sogar junge Leute müssen das verstehen. Oder kann man dabei zusehen, wie sie sich ihre Gesundheit zerstören?",
          "answer": "Ja"
        },
        {
          "id": 25,
          "num": 25,
          "who": "Gabriele, 40, Hannover",
          "text": "Graffiti ist überall. Wir Älteren wurden nie gefragt, ob wir das wollen oder nicht. So kann doch eine Demokratie nicht funktionieren. Da haben die Lehrer und Eltern versagt. Es zeigt geradezu, dass die Erziehungsberechtigten einfach alles durchgehen lassen. Ihnen allen sollte ein Denkzettel verpasst werden. Die richtige Maßnahme wäre, streng durchzugreifen.",
          "answer": "Ja"
        },
        {
          "id": 26,
          "num": 26,
          "who": "Mara, 22, Flensburg",
          "text": "Kaum hat sich mal jemand etwas Aufregendes ausgedacht, schon müssen alle darüber schimpfen. Das ist immer so. Es war genauso mit Piercing, Tattoo und allen Dingen, die Jugendlichen gefallen. Haben junge Leute in unserer Gesellschaft nie etwas zu sagen, können sie sich nicht frei ausdrücken? Ich lehne eine solche Bevormundung schlichtweg ab.",
          "answer": "Nein"
        }
      ],
      "questions": [
        {
          "id": 20,
          "num": 20,
          "type": "yn",
          "who": "Anton",
          "text": "Ist Anton für ein Verbot von Graffiti?",
          "answer": "Nein"
        },
        {
          "id": 21,
          "num": 21,
          "type": "yn",
          "who": "Ernst",
          "text": "Ist Ernst für ein Verbot von Graffiti?",
          "answer": "Ja"
        },
        {
          "id": 22,
          "num": 22,
          "type": "yn",
          "who": "Conni",
          "text": "Ist Conni für ein Verbot von Graffiti?",
          "answer": "Ja"
        },
        {
          "id": 23,
          "num": 23,
          "type": "yn",
          "who": "Torben",
          "text": "Ist Torben für ein Verbot von Graffiti?",
          "answer": "Nein"
        },
        {
          "id": 24,
          "num": 24,
          "type": "yn",
          "who": "Inge",
          "text": "Ist Inge für ein Verbot von Graffiti?",
          "answer": "Ja"
        },
        {
          "id": 25,
          "num": 25,
          "type": "yn",
          "who": "Gabriele",
          "text": "Ist Gabriele für ein Verbot von Graffiti?",
          "answer": "Ja"
        },
        {
          "id": 26,
          "num": 26,
          "type": "yn",
          "who": "Mara",
          "text": "Ist Mara für ein Verbot von Graffiti?",
          "answer": "Nein"
        }
      ]
    },
    {
      "id": 5,
      "title": "Teil 5",
      "time": 10,
      "instructions": "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "intro": "Sie informieren sich mithilfe der Packungsbeilage über den Fenchelhonig, weil Ihr kleiner Cousin krank ist.",
      "article": {
        "title": "Packungsbeilage – Gebrauchsinformation: Information für den Anwender\nFenchelhonig gegen Husten und Heiserkeit\nFür Kinder ab 1 Jahr\nWirkstoff: 100 g Sirup enthalten 50 mg bitteres Fenchelöl",
        "heading": "Fenchelhonig gegen Husten und Heiserkeit",
        "body": [
          "WAS IST FENCHELHONIG GEGEN HUSTEN UND HEISERKEIT?",
          "Fenchelhonig gegen Husten und Heiserkeit ist ein pflanzlicher Sirup mit angenehmem Geschmack gegen Erkältungskrankheiten der oberen Atemwege mit zähflüssigem Schleim bei Kindern.",
          "WIE IST FENCHELHONIG GEGEN HUSTEN UND HEISERKEIT EINZUNEHMEN?",
          "Falls vom Arzt nicht anders verordnet, ist die übliche Dosis: Kinder ab einem Jahr bekommen 2- bis 3-mal täglich je einen Messlöffel (5 ml / 6,5 g) [entsprechend 3,25 mg Fenchelöl] Fenchelhonig gegen Husten und Heiserkeit in Wasser, Tee oder pur.",
          "WELCHE NEBENWIRKUNGEN SIND MÖGLICH?",
          "Wie alle Arzneimittel kann Fenchelhonig gegen Husten und Heiserkeit Nebenwirkungen haben, die aber nicht bei jedem auftreten müssen. Sehr selten können allergische Reaktionen der Haut und der Atemwege auftreten. Der häufige und dauernde Gebrauch von Fenchelhonig gegen Husten und Heiserkeit kann schädlich für die Zähne sein (Karies).",
          "HINWEISE ZUR AUFBEWAHRUNG VON FENCHELHONIG GEGEN HUSTEN UND HEISERKEIT",
          "• Nicht über 30°C lagern; bei höheren Temperaturen im Kühlschrank aufbewahren.",
          "• Sie dürfen den Sirup nach dem auf dem Etikett angegebenen Verfallsdatum nicht mehr verwenden. Das Verfallsdatum bezieht sich auf den letzten Tag des Monats.",
          "• Nach Öffnen der Flasche ist das Medikament bei Beachtung der Aufbewahrungsbedingungen 6 Monate haltbar.",
          "Wie alle Medikamente ist Fenchelhonig gegen Husten und Heiserkeit kindersicher aufzubewahren."
        ]
      },
      "questions": [
        {
          "id": 27,
          "num": 27,
          "type": "mcq",
          "text": "Mögliche Nebenwirkungen:",
          "options": [
            "Fenchelhonig zeigt keine Nebenwirkungen.",
            "Es kann zu Zahnschäden kommen.",
            "Bei Allergikern kommt es häufig für kurze Zeit zu Hautreaktionen."
          ],
          "answer": 1
        },
        {
          "id": 28,
          "num": 28,
          "type": "mcq",
          "text": "Kinder können Fenchelhonig nehmen, ...",
          "options": [
            "obwohl er sehr bitter schmeckt.",
            "obwohl das Medikament nur künstliche Wirkstoffe enthält.",
            "wenn sie mindestens zwölf Monate alt sind."
          ],
          "answer": 2
        },
        {
          "id": 29,
          "num": 29,
          "type": "mcq",
          "text": "Man muss wissen, dass ...",
          "options": [
            "der Sirup nach dem Öffnen noch ein halbes Jahr verwendet werden kann.",
            "der Sirup vor der Verwendung warm gemacht werden muss.",
            "dass der Sirup immer im Kühlschrank stehen muss."
          ],
          "answer": 0
        },
        {
          "id": 30,
          "num": 30,
          "type": "mcq",
          "text": "Die übliche Dosis ...",
          "options": [
            "bestimmt der Arzt.",
            "kann man mit jedem Getränk einnehmen.",
            "gilt für jüngere und ältere Kinder."
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": 6,
      "title": "Hören",
      "badge": "Modul Hören",
      "isHoren": true,
      "time": 40,
      "instructions": "Das Modul Hören besteht aus vier Teilen. Sie hören verschiedene Texte und lösen dazu Aufgaben.",
      "audioSrc": "audio/modellsatz-27-hoeren.mp3",
      "audioFallbacks": [
        "audio/modellsatz-27-hoeren.mp3"
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
          "end": 730,
          "label": "00:35 Teil 1 (Texte 1–5 · 2x)",
          "part": 1,
          "title": "Teil 1 · Fünf kurze Texte (2x hören)"
        },
        {
          "time": 730,
          "start": 730,
          "end": 1023,
          "label": "12:10 Teil 2 (Informationsveranstaltung Ballonfahrten · 1x)",
          "part": 2,
          "title": "Teil 2 · Informationsveranstaltung Ballonfahrten (1x hören)"
        },
        {
          "time": 1023,
          "start": 1023,
          "end": 1290,
          "label": "17:03 Teil 3 (Gespräch: Klassenreise planen · 1x)",
          "part": 3,
          "title": "Teil 3 · Gespräch an Bushaltestelle Wien: Klassenreise (1x hören)"
        },
        {
          "time": 1290,
          "start": 1290,
          "end": 1802,
          "label": "21:30 Teil 4 (Radiosendung MitTalk: Essen im Müll · 1. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiosendung MitTalk (1. Durchgang)"
        },
        {
          "time": 1802,
          "start": 1802,
          "end": 2265,
          "label": "30:02 Teil 4 (Wiederholung · 2. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiosendung MitTalk (Wiederholung 2. Durchgang)"
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
          "context": "Alltagssituationen: Freiwilliges soziales Jahr, Zeugenaufruf Raubüberfall, Durchsage Flughafen, Tagesspiegel-Ticket-Hotline, Sonderangebote Kaufhaus.",
          "example": {
            "ex01": {
              "num": "01",
              "text": "Sie hören eine Auskunft eines Elektrogeschäfts.",
              "type": "tf",
              "answer": "falsch"
            },
            "ex02": {
              "num": "02",
              "text": "Wo werden die meisten Geräte repariert?",
              "type": "mcq",
              "options": [
                "In der Werkstatt.",
                "Beim TÜV-Kundendienst.",
                "Zu Hause beim Kunden."
              ],
              "answer": 2
            }
          },
          "questions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          "id": 2,
          "partNumber": 2,
          "title": "Teil 2: Informationsveranstaltung über Ballonfahrten",
          "badge": "Aufgaben 11 bis 15",
          "desc": "Sie hören einen Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
          "intro": "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie nehmen an einer Informationsveranstaltung über Ballonfahrten teil.",
          "questions": [11, 12, 13, 14, 15]
        },
        {
          "id": 3,
          "partNumber": 3,
          "title": "Teil 3: Klassenreise planen",
          "badge": "Aufgaben 16 bis 22",
          "desc": "Sie hören ein Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
          "intro": "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie stehen an einer Bushaltestelle in Wien und hören, wie sich ein Mann und eine Frau über eine Klassenreise unterhalten.",
          "questions": [16, 17, 18, 19, 20, 21, 22]
        },
        {
          "id": 4,
          "partNumber": 4,
          "title": "Teil 4: Radiosendung „MitTalk“: Wie gehen wir mit dem Essen um?",
          "badge": "Aufgaben 23 bis 30",
          "desc": "Sie hören eine Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was?",
          "intro": "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Der Moderator der Radiosendung „MitTalk“ diskutiert mit Juliane Schulz (Stiftung „Tafel“) und Lukas Tilmann (Künstler) zum Thema „Wie gehen wir mit dem Essen um?“.",
          "speakers": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "example": {
            "num": "0",
            "text": "Die Namen der Kunstwerke sind fantasievoll.",
            "options": [
              "Moderator",
              "Juliane Schulz",
              "Lukas Tilmann"
            ],
            "answer": 0
          },
          "questions": [23, 24, 25, 26, 27, 28, 29, 30]
        }
      ],
      "questions": [
        {
          "id": "h1",
          "num": 1,
          "teil": 1,
          "type": "tf",
          "text": "Der Tipp ist für junge Leute, die studieren wollen.",
          "answer": "falsch",
          "audioStart": 127
        },
        {
          "id": "h2",
          "num": 2,
          "teil": 1,
          "type": "mcq",
          "text": "Wo kann man aktiv sein?",
          "options": [
            "In einem Krankenhaus.",
            "In einem Altenheim.",
            "In einer Arztpraxis."
          ],
          "answer": 1,
          "audioStart": 127
        },
        {
          "id": "h3",
          "num": 3,
          "teil": 1,
          "type": "tf",
          "text": "Die Polizei kennt den Täter.",
          "answer": "falsch",
          "audioStart": 245
        },
        {
          "id": "h4",
          "num": 4,
          "teil": 1,
          "type": "mcq",
          "text": "Wie geht es der Kellnerin?",
          "options": [
            "Sie ist verletzt.",
            "Sie ist tot.",
            "Sie ist betrunken."
          ],
          "answer": 0,
          "audioStart": 245
        },
        {
          "id": "h5",
          "num": 5,
          "teil": 1,
          "type": "tf",
          "text": "Die Informationen sind für Reisende, die auf dem Flughafen ankommen.",
          "answer": "falsch",
          "audioStart": 344
        },
        {
          "id": "h6",
          "num": 6,
          "teil": 1,
          "type": "mcq",
          "text": "Wer muss sich beeilen?",
          "options": [
            "Die Passagiere nach Frankfurt.",
            "Die Passagiere nach Köln.",
            "Die Passagiere Siebert und Johannsen."
          ],
          "answer": 0,
          "audioStart": 344
        },
        {
          "id": "h7",
          "num": 7,
          "teil": 1,
          "type": "tf",
          "text": "Sie hören eine Auskunft über die Bestellung von Eintrittskarten.",
          "answer": "richtig",
          "audioStart": 457
        },
        {
          "id": "h8",
          "num": 8,
          "teil": 1,
          "type": "mcq",
          "text": "Wann kann man bestellen?",
          "options": [
            "Samstag und Sonntag von 7.30 Uhr bis 18.00 Uhr.",
            "Montag bis Sonntag von 7.30 Uhr bis 20.00 Uhr.",
            "Montag bis Freitag bis 20.00 Uhr."
          ],
          "answer": 2,
          "audioStart": 457
        },
        {
          "id": "h9",
          "num": 9,
          "teil": 1,
          "type": "tf",
          "text": "Sie hören eine Werbung für Reisen.",
          "answer": "falsch",
          "audioStart": 560
        },
        {
          "id": "h10",
          "num": 10,
          "teil": 1,
          "type": "mcq",
          "text": "Alle Angebote kosten ...",
          "options": [
            "über 100 Euro.",
            "unter 100 Euro.",
            "98 Euro."
          ],
          "answer": 1,
          "audioStart": 560
        },
        {
          "id": "h11",
          "num": 11,
          "teil": 2,
          "type": "mcq",
          "text": "Wer besucht die Informationsveranstaltung?",
          "options": [
            "Wer eine Ballonfahrt gewonnen hat.",
            "Wer das Sportmagazin liest.",
            "Wer an dem Quiz teilnehmen möchte."
          ],
          "answer": 0,
          "audioStart": 730
        },
        {
          "id": "h12",
          "num": 12,
          "teil": 2,
          "type": "mcq",
          "text": "Die Piloten der Ballons ...",
          "options": [
            "kommen aus der Schweiz.",
            "holen die Gäste ab.",
            "fliegen seit über 20 Jahren."
          ],
          "answer": 2,
          "audioStart": 730
        },
        {
          "id": "h13",
          "num": 13,
          "teil": 2,
          "type": "mcq",
          "text": "Wie hoch kann ein Ballon steigen?",
          "options": [
            "Bis zu 30 Metern.",
            "Bis zu 300 Metern.",
            "Bis zu 3000 Metern."
          ],
          "answer": 2,
          "audioStart": 730
        },
        {
          "id": "h14",
          "num": 14,
          "teil": 2,
          "type": "mcq",
          "text": "Die Fahrgäste sollten ...",
          "options": [
            "keine Höhenangst haben.",
            "einen Fotoapparat dabeihaben.",
            "vom Ballon nicht hinunterschauen."
          ],
          "answer": 1,
          "audioStart": 730
        },
        {
          "id": "h15",
          "num": 15,
          "teil": 2,
          "type": "mcq",
          "text": "In dem ersten Ballon, der in die Luft stieg, ...",
          "options": [
            "war ein König.",
            "waren Josef und Etienne Montgolfier.",
            "waren Tiere."
          ],
          "answer": 2,
          "audioStart": 730
        },
        {
          "id": "h16",
          "num": 16,
          "teil": 3,
          "type": "tf",
          "text": "Herr Brunner und die Schüler organisieren die Klassenreise gemeinsam.",
          "answer": "richtig",
          "audioStart": 1023
        },
        {
          "id": "h17",
          "num": 17,
          "teil": 3,
          "type": "tf",
          "text": "Die Klasse hat beschlossen, eine Radtour zu machen.",
          "answer": "falsch",
          "audioStart": 1023
        },
        {
          "id": "h18",
          "num": 18,
          "teil": 3,
          "type": "tf",
          "text": "Die meisten Schüler lernen nur Englisch.",
          "answer": "falsch",
          "audioStart": 1023
        },
        {
          "id": "h19",
          "num": 19,
          "teil": 3,
          "type": "tf",
          "text": "Viktoria hat es in London nicht gefallen.",
          "answer": "falsch",
          "audioStart": 1023
        },
        {
          "id": "h20",
          "num": 20,
          "teil": 3,
          "type": "tf",
          "text": "Herr Brunner war gegen eine Klassenreise nach Paris.",
          "answer": "falsch",
          "audioStart": 1023
        },
        {
          "id": "h21",
          "num": 21,
          "teil": 3,
          "type": "tf",
          "text": "Es gibt Eltern, für die eine Auslandsreise zu teuer ist.",
          "answer": "richtig",
          "audioStart": 1023
        },
        {
          "id": "h22",
          "num": 22,
          "teil": 3,
          "type": "tf",
          "text": "Die Schüler wollen, dass alle mitfahren können.",
          "answer": "richtig",
          "audioStart": 1023
        },
        {
          "id": "h23",
          "num": 23,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Die Reaktion anderer auf das erste Werk war eine Herausforderung.",
          "speaker": "Lukas Tilmann",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 2,
          "audioStart": 1290
        },
        {
          "id": "h24",
          "num": 24,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Die Objekte entstehen aus dem, was übrig bleibt.",
          "speaker": "Lukas Tilmann",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 2,
          "audioStart": 1290
        },
        {
          "id": "h25",
          "num": 25,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Hunger gibt es nicht nur in armen Ländern.",
          "speaker": "Juliane Schulz",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 1,
          "audioStart": 1290
        },
        {
          "id": "h26",
          "num": 26,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Mit dem Essen aus Europas Müll könnte man alle hungrigen Menschen ernähren.",
          "speaker": "Moderator",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 0,
          "audioStart": 1290
        },
        {
          "id": "h27",
          "num": 27,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Manche Produkte dürfen weder verkauft noch verschenkt werden.",
          "speaker": "Juliane Schulz",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 1,
          "audioStart": 1290
        },
        {
          "id": "h28",
          "num": 28,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Essen auf dem Müll ist auch ein Problem für die Umwelt.",
          "speaker": "Moderator",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 0,
          "audioStart": 1290
        },
        {
          "id": "h29",
          "num": 29,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Aus Protest aus dem Müll zu essen ist sinnlos.",
          "speaker": "Juliane Schulz",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 1,
          "audioStart": 1290
        },
        {
          "id": "h30",
          "num": 30,
          "teil": 4,
          "teilPart": 4,
          "type": "speaker",
          "text": "Die Kunstausstellung soll der „Tafel“ helfen.",
          "speaker": "Lukas Tilmann",
          "options": [
            "Moderator",
            "Juliane Schulz",
            "Lukas Tilmann"
          ],
          "answer": 2,
          "audioStart": 1290
        }
      ]
    }
  ]
}
