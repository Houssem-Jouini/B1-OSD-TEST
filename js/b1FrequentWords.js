/**
 * B1-OSD-TEST — FICHE DE RÉVISION B1 ÖSD & INTERACTIVE MEMORY TRAINER
 * Complete frequency vocabulary list from "Fiche de révision — Allemand B1 ÖSD" (205 words)
 * Supports both Full-Page XL Study Environment (fiche-b1.html) and Modal View:
 * 1. Grande Fiche Interactive (Tableau XL & Cartes XL + Mode Cache-Cache + Audio)
 * 2. Grandes Cartes Mémoire 3D (Flashcards XL avec raccourcis clavier)
 * 3. Défi Prépositions + Cas (Akkusativ vs. Dativ Interactive Drill)
 * 4. Chrono-Match (Speed Memory Pair Matching Game)
 * 5. Sprint Quiz (4-Option Streak & XP Challenge)
 */

(function () {
  'use strict';

  const MASTERY_STORAGE_KEY = 'b1_frequent_mastered_v1';
  const BEST_MATCH_TIME_KEY = 'b1_frequent_best_match_ms_v1';
  const BEST_STREAK_KEY = 'b1_frequent_best_streak_v1';
  const THEME_STORAGE_KEY = 'b1_exam_theme_pref';
  const FICHE_FONT_SCALE_KEY = 'b1_fiche_font_scale_v1';
  const FICHE_LAYOUT_VIEW_KEY = 'b1_fiche_layout_view_v1';

  const CATEGORIES = [
    { id: 'all', labelFr: 'Toute la Fiche B1', subFr: 'Les 205 mots essentiels', labelDe: 'Alle B1-Wörter', icon: '🌟' },
    { id: 'saved', labelFr: 'Mes Mots Favoris (★)', subFr: 'Mots marqués à réviser', labelDe: 'Gemerkt (★)', icon: '⭐' },
    { id: 'verbes-frequents', labelFr: '1A. Verbes fréquents', subFr: 'Actions & constructions clés', labelDe: '1A. Häufige Verben', icon: '⚡' },
    { id: 'opinion-argumentation', labelFr: '1B. Opinion & Argumentation', subFr: 'Exprimer et justifier son avis', labelDe: '1B. Meinung & Argumentation', icon: '💬' },
    { id: 'comprehension', labelFr: '1C. Compréhension (Lesen & Hören)', subFr: 'Rendez-vous, infos & quotidien', labelDe: '1C. Lesen & Hören Verben', icon: '🎧' },
    { id: 'verbes-prepositions', labelFr: '2. Verbes + Prépositions', subFr: '28 constructions + Akk. / + Dat.', labelDe: '2. Verben mit Präpositionen', icon: '🎯' },
    { id: 'theme-travail', labelFr: '3A. Travail & Profession', subFr: 'Arbeit und Beruf', labelDe: '3A. Arbeit & Beruf', icon: '💼' },
    { id: 'theme-famille', labelFr: '3B. Famille & Relations', subFr: 'Familie und Beziehungen', labelDe: '3B. Familie & Beziehungen', icon: '🤝' },
    { id: 'theme-sante', labelFr: '3C. Santé & Alimentation', subFr: 'Gesundheit und Ernährung', labelDe: '3C. Gesundheit & Ernährung', icon: '🍎' },
    { id: 'theme-environnement', labelFr: '3D. Environnement & Nature', subFr: 'Umwelt und Natur', labelDe: '3D. Umwelt & Natur', icon: '🌱' },
    { id: 'theme-voyages', labelFr: '3E. Voyages & Transports', subFr: 'Reisen und Verkehr', labelDe: '3E. Reisen & Verkehr', icon: '🚆' },
    { id: 'theme-education', labelFr: '3F. Éducation & Apprentissage', subFr: 'Bildung und Lernen', labelDe: '3F. Bildung & Lernen', icon: '🎓' },
    { id: 'konnektoren', labelFr: '4. Mots de liaison (Konnektoren)', subFr: 'Connecteurs logiques B1', labelDe: '4. Konnektoren', icon: '🔗' },
    { id: 'adjectifs-frequents', labelFr: '5. Adjectifs & Adverbes fréquents', subFr: 'Nuances, qualités & fréquence', labelDe: '5. Adjektive & Adverbien', icon: '✨' }
  ];

  // Raw compact entries: [id, category, term, defFr, defAr, defDe, example, prep, kasus]
  const RAW_WORDS = [
    // ================= 1A. VERBES FRÉQUENTS =================
    ['fw-1a-1', 'verbes-frequents', 'sich entscheiden für + Akk.', 'choisir, se décider pour', 'يقرّر لصالح / يختار', 'Nach Überlegung eine Wahl treffen.', 'Ich habe mich für diesen Sprachkurs entschieden.', 'für', 'Akk.'],
    ['fw-1a-2', 'verbes-frequents', 'sich interessieren für + Akk.', "s'intéresser à", 'يهتمّ بـ', 'Neugier oder Interesse an einer Sache haben.', 'Interessierst du dich für moderne Kunst?', 'für', 'Akk.'],
    ['fw-1a-3', 'verbes-frequents', 'teilnehmen an + Dat.', 'participer à', 'يشارك في', 'Bei einer Veranstaltung oder einem Kurs mitmachen.', 'Viele Studenten nehmen an der B1-Prüfung teil.', 'an', 'Dat.'],
    ['fw-1a-4', 'verbes-frequents', 'sich kümmern um + Akk.', "s'occuper de", 'يهتمّ بـ / يعتني بـ', 'Für jemanden oder etwas sorgen.', 'Am Wochenende kümmere ich mich um meine Großeltern.', 'um', 'Akk.'],
    ['fw-1a-5', 'verbes-frequents', 'sich bewerben um + Akk.', 'postuler à', 'يتقدّم بطلب (لوظيفة أو منحة)', 'Eine Bewerbung für eine Stelle schicken.', 'Sie bewirbt sich um eine neue Stelle als Krankenschwester.', 'um', 'Akk.'],
    ['fw-1a-6', 'verbes-frequents', 'sich erinnern an + Akk.', 'se souvenir de', 'يتذكّر', 'Etwas im Gedächtnis behalten haben.', 'Ich erinnere mich gern an unseren Urlaub in Wien.', 'an', 'Akk.'],
    ['fw-1a-7', 'verbes-frequents', 'sich beschweren über + Akk.', 'se plaindre de', 'يشتكي من / يتذمّر من', 'Unzufriedenheit über etwas äußern.', 'Die Gäste beschweren sich über den Lärm im Hotel.', 'über', 'Akk.'],
    ['fw-1a-8', 'verbes-frequents', 'sich vorbereiten auf + Akk.', 'se préparer à', 'يستعدّ لـ / يحضّر لـ', 'Für eine Prüfung oder ein Ereignis üben und planen.', 'Wir bereiten uns intensiv auf die ÖSD-Prüfung vor.', 'auf', 'Akk.'],
    ['fw-1a-9', 'verbes-frequents', 'sich freuen auf + Akk.', "se réjouir à l'avance de", 'يتطلّع بشوق إلى (في المستقبل)', 'Frohe Erwartung auf etwas Zukünftiges haben.', 'Ich freue mich schon sehr auf das nächste Wochenende!', 'auf', 'Akk.'],
    ['fw-1a-10', 'verbes-frequents', 'sich freuen über + Akk.', 'être content de', 'يفرح بـ (شيء حدث أو حاضر)', 'Über etwas Gegenwärtiges oder Vergangenes froh sein.', 'Sie hat sich sehr über das schöne Geschenk gefreut.', 'über', 'Akk.'],
    ['fw-1a-11', 'verbes-frequents', 'vermeiden', 'éviter', 'يتجنّب / يتفادى', 'Dafür sorgen, dass etwas Unangenehmes nicht passiert.', 'Man sollte beim Lernen unnötigen Stress vermeiden.', null, null],
    ['fw-1a-12', 'verbes-frequents', 'ermöglichen', 'permettre, rendre possible', 'يمكّن / يتيح', 'Etwas möglich machen; die Gelegenheit bieten.', 'Das Stipendium ermöglicht ihm das Studium in Deutschland.', null, null],
    ['fw-1a-13', 'verbes-frequents', 'verhindern', 'empêcher', 'يمنع / يحول دون', 'Dafür sorgen, dass etwas nicht geschieht.', 'Schnelles Handeln konnte den Unfall verhindern.', null, null],
    ['fw-1a-14', 'verbes-frequents', 'unterstützen', 'soutenir, aider', 'يدعم / يساند', 'Jemandem helfen oder beistehen.', 'Meine Familie unterstützt mich bei meinen Plänen.', null, null],
    ['fw-1a-15', 'verbes-frequents', 'vorschlagen', 'proposer', 'يقترح', 'Eine Idee oder einen Plan zur Diskussion stellen.', 'Ich schlage vor, dass wir uns morgen früher treffen.', null, null],
    ['fw-1a-16', 'verbes-frequents', 'empfehlen', 'recommander', 'يوصي بـ / ينصح بـ', 'Etwas als gut oder nützlich anraten.', 'Können Sie mir ein gutes deutsches Buch empfehlen?', null, null],
    ['fw-1a-17', 'verbes-frequents', 'erlauben', 'autoriser', 'يسمح بـ / يأذن', 'Die Genehmigung für etwas geben.', 'Die Eltern erlauben den Kindern, länger draußen zu spielen.', null, null],
    ['fw-1a-18', 'verbes-frequents', 'verbieten', 'interdire', 'يمنع / يحظر', 'Nicht erlauben; untersagen.', 'Im gesamten Bahnhofsgebäude ist das Rauchen verboten.', null, null],
    ['fw-1a-19', 'verbes-frequents', 'behaupten', 'affirmer, prétendre', 'يدّعي / يزعم', 'Etwas sicher sagen, oft ohne es zu beweisen.', 'Er behauptet, dass er den Brief nie bekommen hat.', null, null],
    ['fw-1a-20', 'verbes-frequents', 'überzeugen', 'convaincre', 'يقنع', 'Jemanden durch Argumente dazu bringen, etwas zu glauben.', 'Deine guten Argumente haben mich sofort überzeugt.', null, null],
    ['fw-1a-21', 'verbes-frequents', 'sich verhalten', 'se comporter', 'يتصرّف / يسلك', 'In einer bestimmten Weise handeln oder reagieren.', 'In einer Prüfung sollte man sich ruhig verhalten.', null, null],
    ['fw-1a-22', 'verbes-frequents', 'sich bemühen um + Akk.', 'faire des efforts pour', 'يبذل جهداً من أجل / يسعى لـ', 'Sich anstrengen, um ein Ziel zu erreichen.', 'Er bemüht sich sehr um eine gute Aussprache.', 'um', 'Akk.'],
    ['fw-1a-23', 'verbes-frequents', 'feststellen', 'constater', 'يلاحظ / يكتشف / يتحقّق من', 'Bemerkend erkennen oder herausfinden.', 'An der Kasse stellte ich fest, dass mein Geldbeutel fehlte.', null, null],
    ['fw-1a-24', 'verbes-frequents', 'erkennen', 'reconnaître', 'يتعرّف على / يدرك', 'Wahrnehmen oder wiedererkennen.', 'Mit der neuen Brille habe ich ihn kaum erkannt.', null, null],
    ['fw-1a-25', 'verbes-frequents', 'erreichen', 'atteindre', 'يصل إلى / يحقّق (هدفاً)', 'An ein Ziel gelangen oder jemanden kontaktieren.', 'Mit Fleiß kannst du das B1-Zertifikat leicht erreichen.', null, null],
    ['fw-1a-26', 'verbes-frequents', 'erwarten', "attendre, s'attendre à", 'يتوقّع / ينتظر', 'Mit etwas rechnen oder auf jemanden warten.', 'Wir erwarten heute Nachmittag wichtigen Besuch.', null, null],
    ['fw-1a-27', 'verbes-frequents', 'bedeuten', 'signifier', 'يعني', 'Einen bestimmten Sinn oder Wert haben.', 'Was bedeutet dieses deutsche Wort auf Französisch?', null, null],
    ['fw-1a-28', 'verbes-frequents', 'verursachen', 'provoquer, causer', 'يسبّب / يحدث', 'Der Grund für einen Schaden oder ein Problem sein.', 'Der starke Sturm hat große Schäden verursacht.', null, null],
    ['fw-1a-29', 'verbes-frequents', 'abhängen von + Dat.', 'dépendre de', 'يعتمد على / يتوقّف على', 'Durch etwas anderes bedingt oder bestimmt sein.', 'Unser Ausflug hängt vom Wetter ab.', 'von', 'Dat.'],
    ['fw-1a-30', 'verbes-frequents', 'bestehen aus + Dat.', 'être composé de', 'يتكوّن من / يتألّف من', 'Sich aus mehreren Teilen zusammensetzen.', 'Die B1-Prüfung besteht aus vier Modulen.', 'aus', 'Dat.'],

    // ================= 1B. OPINION ET ARGUMENTATION =================
    ['fw-1b-1', 'opinion-argumentation', 'denken an + Akk.', 'penser à', 'يفكّر في', 'Seine Gedanken auf jemanden oder etwas richten.', 'Ich denke oft an meine Freunde in der Heimat.', 'an', 'Akk.'],
    ['fw-1b-2', 'opinion-argumentation', 'glauben an + Akk.', 'croire en', 'يؤمن بـ', 'Von der Existenz oder dem Erfolg überzeugt sein.', 'Du musst fest an deinen eigenen Erfolg glauben!', 'an', 'Akk.'],
    ['fw-1b-3', 'opinion-argumentation', 'meinen', 'penser, estimer', 'يرى / يقصد / يعتقد', 'Eine persönliche Ansicht äußern.', 'Was meinst du zu diesem Vorschlag?', null, null],
    ['fw-1b-4', 'opinion-argumentation', 'finden', 'trouver, considérer', 'يجد / يعتبر (رأي)', 'Einer bestimmten Meinung über etwas sein.', 'Ich finde es wichtig, jeden Tag Deutsch zu üben.', null, null],
    ['fw-1b-5', 'opinion-argumentation', 'zustimmen', "être d'accord", 'يوافق على / يؤيّد', 'Die gleiche Meinung wie jemand haben (+ Dativ).', 'Ich stimme deiner Meinung vollkommen zu.', null, null],
    ['fw-1b-6', 'opinion-argumentation', 'widersprechen', 'contredire', 'يعارض / يخالف الرأي', 'Dagegen reden; eine andere Meinung äußern (+ Dativ).', 'In diesem Punkt muss ich Ihnen leider widersprechen.', null, null],
    ['fw-1b-7', 'opinion-argumentation', 'kritisieren', 'critiquer', 'ينتقد', 'Fehler oder Mängel an etwas aufzeigen.', 'Viele Bürger kritisieren die hohen Mietpreise.', null, null],
    ['fw-1b-8', 'opinion-argumentation', 'diskutieren über + Akk.', 'discuter de', 'يناقش حول', 'Ein Gespräch mit verschiedenen Meinungen führen.', 'In der Pause diskutieren wir über aktuelle Themen.', 'über', 'Akk.'],
    ['fw-1b-9', 'opinion-argumentation', 'begründen', 'justifier', 'يبرّر / يعلّل', 'Gründe und Argumente für eine Meinung nennen.', 'Bitte begründen Sie Ihre Meinung mit einem Beispiel.', null, null],
    ['fw-1b-10', 'opinion-argumentation', 'erklären', 'expliquer', 'يشرح / يفسّر', 'Etwas deutlich und verständlich machen.', 'Der Lehrer erklärt die Grammatikregel sehr geduldig.', null, null],
    ['fw-1b-11', 'opinion-argumentation', 'vergleichen', 'comparer', 'يقارن', 'Unterschiede und Gemeinsamkeiten prüfen.', 'Vor dem Kauf sollte man die Preise genau vergleichen.', null, null],
    ['fw-1b-12', 'opinion-argumentation', 'beurteilen', 'évaluer, juger', 'يقيّم / يحكم على', 'Ein Urteil oder eine Bewertung über etwas abgeben.', 'Man sollte Menschen nicht nach ihrem Aussehen beurteilen.', null, null],
    ['fw-1b-13', 'opinion-argumentation', 'sich entscheiden', 'se décider', 'يقرّر / يتّخذ قراراً', 'Zu einem festen Entschluss kommen.', 'Hast du dich schon entschieden, welchen Kurs du buchst?', null, null],
    ['fw-1b-14', 'opinion-argumentation', 'vorziehen', 'préférer', 'يفضّل', 'Etwas lieber mögen als etwas anderes.', 'Ich ziehe einen ruhigen Abend im Park dem Kino vor.', null, null],
    ['fw-1b-15', 'opinion-argumentation', 'akzeptieren', 'accepter', 'يتقبّل / يقبل', 'Mit etwas einverstanden sein; annehmen.', 'Wir müssen seine Entscheidung respektieren und akzeptieren.', null, null],
    ['fw-1b-16', 'opinion-argumentation', 'ablehnen', 'refuser, rejeter', 'يرفض', 'Nein zu einem Angebot oder Antrag sagen.', 'Leider hat er unsere Einladung zum Abendessen abgelehnt.', null, null],
    ['fw-1b-17', 'opinion-argumentation', 'überlegen', 'réfléchir', 'يفكّر مليّاً / يتأمّل', 'Genau über eine Sache nachdenken.', 'Ich muss mir das Angebot noch einmal in Ruhe überlegen.', null, null],
    ['fw-1b-18', 'opinion-argumentation', 'hoffen auf + Akk.', 'espérer', 'يأمل في', 'Sich wünschen, dass etwas Gutes passiert.', 'Alle Teilnehmer hoffen auf ein gutes Prüfungsergebnis.', 'auf', 'Akk.'],
    ['fw-1b-19', 'opinion-argumentation', 'zweifeln an + Dat.', 'douter de', 'يشكّ في', 'Unsicher sein, ob etwas wahr oder richtig ist.', 'Niemand zweifelt an seiner Ehrlichkeit.', 'an', 'Dat.'],
    ['fw-1b-20', 'opinion-argumentation', 'warnen vor + Dat.', 'avertir, mettre en garde contre', 'يحذّر من', 'Auf eine Gefahr aufmerksam machen.', 'Der Wetterdienst warnt vor starkem Regen und Glatteis.', 'vor', 'Dat.'],

    // ================= 1C. COMPRÉHENSION ÉCRITE ET ORALE =================
    ['fw-1c-1', 'comprehension', 'stattfinden', 'avoir lieu', 'يُقام / يَحدث / يجري', 'Abgehalten werden oder geschehen (Termine, Feste).', 'Das Konzert findet morgen Abend im Stadtpark statt.', null, null],
    ['fw-1c-2', 'comprehension', 'absagen', 'annuler', 'يلغي (موعداً أو فعالية)', 'Einen geplanten Termin rückgängig machen.', 'Wegen Krankheit musste ich den Arzttermin absagen.', null, null],
    ['fw-1c-3', 'comprehension', 'verschieben', 'reporter', 'يؤجّل (موعداً)', 'Einen Termin auf einen späteren Zeitpunkt verlegen.', 'Können wir unser Treffen auf nächsten Freitag verschieben?', null, null],
    ['fw-1c-4', 'comprehension', 'vereinbaren', 'convenir de, fixer', 'يتّفق على / يحدّد (موعداً)', 'Gemeinsam einen Termin oder eine Regelung abmachen.', 'Ich möchte gern einen Termin beim Zahnarzt vereinbaren.', null, null],
    ['fw-1c-5', 'comprehension', 'sich anmelden', "s'inscrire", 'يسجّل نفسه', 'Seinen Namen offiziell für einen Kurs oder eine Prüfung eintragen.', 'Man muss sich rechtzeitig für den Deutschkurs anmelden.', null, null],
    ['fw-1c-6', 'comprehension', 'sich abmelden', 'se désinscrire', 'يلغي تسجيله', 'Eine Anmeldung rückgängig machen.', 'Wenn Sie nicht kommen können, melden Sie sich bitte ab.', null, null],
    ['fw-1c-7', 'comprehension', 'bestätigen', 'confirmer', 'يؤكّد', 'Offiziell erklären, dass etwas stimmt oder gültig ist.', 'Bitte bestätigen Sie Ihre Reservierung per E-Mail.', null, null],
    ['fw-1c-8', 'comprehension', 'mitteilen', 'communiquer, informer', 'يُبلِغ / يُعلِم', 'Jemandem eine wichtige Information weitergeben.', 'Bitte teilen Sie uns Ihre neue Adresse schriftlich mit.', null, null],
    ['fw-1c-9', 'comprehension', 'benachrichtigen', 'avertir, notifier', 'يُخطِر / يُشعِر بخبر', 'Jemandem Bescheid geben oder informieren.', 'Wir benachrichtigen Sie, sobald Ihre Karte fertig ist.', null, null],
    ['fw-1c-10', 'comprehension', 'erfahren', 'apprendre, être informé de', 'يعلم بـ / يكتشف خبراً', 'Eine Neuigkeit oder Information zu hören bekommen.', 'Ich habe erst gestern von deiner bestandenen Prüfung erfahren.', null, null],
    ['fw-1c-11', 'comprehension', 'erwähnen', 'mentionner', 'يذكر (في الحديث أو النص)', 'Kurz über etwas sprechen oder schreiben.', 'Im Text wird erwähnt, dass der Eintritt für Kinder frei ist.', null, null],
    ['fw-1c-12', 'comprehension', 'berichten über + Akk.', 'rendre compte de, raconter', 'يقدّم تقريراً عن / يروي عن', 'Ausführlich über ein Ereignis informieren.', 'Die Zeitung berichtet heute über das neue Kulturzentrum.', 'über', 'Akk.'],
    ['fw-1c-13', 'comprehension', 'beschreiben', 'décrire', 'يصف', 'Einzelheiten von etwas anschaulich darstellen.', 'Können Sie mir bitte den Weg zum Bahnhof beschreiben?', null, null],
    ['fw-1c-14', 'comprehension', 'beschließen', 'décider', 'يقرّر رسمياً / يعقد العزم', 'Einen festen Beschluss fassen.', 'Die Familie hat beschlossen, aufs Land zu ziehen.', null, null],
    ['fw-1c-15', 'comprehension', 'sich ergeben', 'résulter de, se produire', 'ينتج عن / يتبيّن / ينشأ', 'Als Folge entstehen oder sich zeigen.', 'Aus dem Gespräch ergab sich eine tolle Zusammenarbeit.', null, null],
    ['fw-1c-16', 'comprehension', 'gelingen', 'réussir', 'ينجح (الأمر) / يتوفّق في', 'Erfolgreich verlaufen (Es gelingt mir + Infinitiv).', 'Es ist mir endlich gelungen, den Kuchen perfekt zu backen.', null, null],
    ['fw-1c-17', 'comprehension', 'scheitern', 'échouer', 'يفشل / يخفق', 'Keinen Erfolg haben; misslingen.', 'Das Projekt ist leider an den hohen Kosten gescheitert.', null, null],
    ['fw-1c-18', 'comprehension', 'gelten', "être valable, s'appliquer", 'يسري مفعوله / يكون صالحاً', 'Gültig sein (z. B. ein Ticket oder eine Regel).', 'Dieses Ticket gilt das ganze Wochenende im Stadtgebiet.', null, null],
    ['fw-1c-19', 'comprehension', 'benötigen', 'avoir besoin de', 'يحتاج إلى (صيغة رسمية لـ brauchen)', 'Formelles Wort für brauchen.', 'Für die Anmeldung benötigen Sie einen gültigen Reisepass.', null, null],
    ['fw-1c-20', 'comprehension', 'verpassen', 'manquer (un train, un rendez-vous)', 'يفوّت (قطاراً أو موعداً)', 'Zu spät kommen und etwas nicht mehr erreichen.', 'Wegen des Staus habe ich leider meinen Zug verpasst.', null, null],
    ['fw-1c-21', 'comprehension', 'erledigen', 'effectuer, régler une tâche', 'ينجز / يقضي مهمة', 'Eine Aufgabe zu Ende bringen.', 'Ich muss heute noch einige Einkäufe in der Stadt erledigen.', null, null],
    ['fw-1c-22', 'comprehension', 'sich verspäten', 'être en retard', 'يتأخّر', 'Später als geplant ankommen.', 'Der Intercity aus München verspätet sich um zwanzig Minuten.', null, null],
    ['fw-1c-23', 'comprehension', 'ausfallen', 'être annulé, ne pas avoir lieu', 'يُلغى / لا يُقام (درس أو قطار)', 'Nicht stattfinden (Unterricht, Zug, Veranstaltung).', 'Der Unterricht fällt heute wegen Krankheit des Lehrers aus.', null, null],
    ['fw-1c-24', 'comprehension', 'nachholen', 'rattraper, faire plus tard', 'يعوّض ما فات لاحقاً', 'Etwas Versäumtes später tun.', 'Die ausgefallene Stunde holen wir nächste Woche nach.', null, null],
    ['fw-1c-25', 'comprehension', 'abholen', 'aller chercher', 'يحضر شخصاً أو طرداً من مكان', 'Jemanden oder etwas von einem Ort mitnehmen.', 'Ich hole dich um acht Uhr direkt am Bahnhof ab.', null, null],
    ['fw-1c-26', 'comprehension', 'mitbringen', 'apporter avec soi', 'يجلب معه', 'Etwas zu jemandem mitnehmen.', 'Soll ich zur Party einen Salat oder Getränke mitbringen?', null, null],
    ['fw-1c-27', 'comprehension', 'zurückgeben', 'rendre, restituer', 'يُعيد / يُرجع', 'Etwas Geliehenes wieder dem Besitzer geben.', 'Ich muss die Bücher morgen in der Bibliothek zurückgeben.', null, null],
    ['fw-1c-28', 'comprehension', 'ausleihen', 'emprunter ou prêter selon le contexte', 'يستعير أو يُعير (حسب السياق)', 'Etwas für begrenzte Zeit nehmen oder geben.', 'In der Stadtbibliothek kann man kostenlos Filme ausleihen.', null, null],

    // ================= 2. VERBES AVEC PRÉPOSITIONS (CONSTRUCTIONS IMPORTANTES) =================
    ['fw-2-1', 'verbes-prepositions', 'warten auf + Akk.', 'attendre', 'ينتظر', 'Bleiben, bis jemand kommt oder etwas passiert.', 'Wir warten schon seit zehn Minuten auf den Bus.', 'auf', 'Akk.'],
    ['fw-2-2', 'verbes-prepositions', 'sprechen über + Akk.', 'parler de', 'يتحدّث عن (موضوع)', 'Über ein Thema reden.', 'Wir haben lange über unsere Zukunftspläne gesprochen.', 'über', 'Akk.'],
    ['fw-2-3', 'verbes-prepositions', 'sprechen mit + Dat.', 'parler avec', 'يتحدّث مع (شخص)', 'Ein Gespräch mit einer Person führen.', 'Ich muss dringend mit dem Vermieter sprechen.', 'mit', 'Dat.'],
    ['fw-2-4', 'verbes-prepositions', 'leiden an + Dat.', "souffrir d'une maladie", 'يعاني من (مرض محدّد)', 'Eine bestimmte Krankheit haben.', 'Viele Menschen leiden im Frühling an einer Allergie.', 'an', 'Dat.'],
    ['fw-2-5', 'verbes-prepositions', 'leiden unter + Dat.', 'souffrir de, subir', 'يعاني من (ظروف، ضوضاء، توتر)', 'Durch äußere Umstände (Lärm, Stress, Hitze) belastet sein.', 'Die Anwohner leiden sehr unter dem starken Verkehrslärm.', 'unter', 'Dat.'],
    ['fw-2-6', 'verbes-prepositions', 'gehören zu + Dat.', 'faire partie de', 'ينتمي إلى / يُعدّ جزءاً من', 'Ein Teil einer Gruppe oder Sache sein.', 'Sport gehört für mich zu einem gesunden Leben.', 'zu', 'Dat.'],
    ['fw-2-7', 'verbes-prepositions', 'sich beschäftigen mit + Dat.', "s'occuper de, étudier", 'ينشغل بـ / يدرس موضوعاً', 'Zeit und Aufmerksamkeit einer Sache widmen.', 'Im Kurs beschäftigen wir uns intensiv mit Umweltthemen.', 'mit', 'Dat.'],
    ['fw-2-8', 'verbes-prepositions', 'sich entscheiden gegen + Akk.', "décider de ne pas, s'opposer à", 'يقرّر ضدّ / يرفض خياراً', 'Eine Möglichkeit bewusst nicht wählen.', 'Sie hat sich gegen das teure Auto entschieden.', 'gegen', 'Akk.'],

    // ================= 3A. TRAVAIL ET PROFESSION =================
    ['fw-3a-1', 'theme-travail', 'die Bewerbung', 'la candidature', 'طلب التوظيف / الترشّح', 'Schriftliche Anfrage um eine Arbeitsstelle.', 'Ich habe gestern fünf Bewerbungen per E-Mail verschickt.', null, null],
    ['fw-3a-2', 'theme-travail', 'der Lebenslauf', 'le CV', 'السيرة الذاتية (CV)', 'Übersicht über Ausbildung und berufliche Erfahrung.', 'Dein Lebenslauf sollte übersichtlich und aktuell sein.', null, null],
    ['fw-3a-3', 'theme-travail', 'das Vorstellungsgespräch', "l'entretien d'embauche", 'مقابلة العمل', 'Persönliches Gespräch bei einer Bewerbung.', 'Am Montag habe ich ein wichtiges Vorstellungsgespräch.', null, null],
    ['fw-3a-4', 'theme-travail', 'die Erfahrung', "l'expérience", 'الخبرة / التجربة', 'Praktisches Wissen, das man im Beruf gesammelt hat.', 'Für diese Stelle braucht man mindestens zwei Jahre Erfahrung.', null, null],
    ['fw-3a-5', 'theme-travail', 'die Weiterbildung', 'la formation continue', 'التدريب المستمر / تطوير المهارات', 'Zusätzlicher Kurs für den Beruf.', 'Die Firma bezahlt ihren Mitarbeitern eine Weiterbildung.', null, null],
    ['fw-3a-6', 'theme-travail', 'die Ausbildung', 'la formation professionnelle', 'التكوين المهني / التدريب المهني', 'Erlernen eines Berufs in Schule und Betrieb.', 'Nach der Schule macht er eine Ausbildung zum Elektriker.', null, null],
    ['fw-3a-7', 'theme-travail', 'der Arbeitgeber', "l'employeur", 'صاحب العمل / ربّ العمل', 'Person oder Firma, die Mitarbeiter beschäftigt.', 'Ein guter Arbeitgeber sorgt für faire Arbeitszeiten.', null, null],
    ['fw-3a-8', 'theme-travail', 'der Arbeitnehmer', 'le salarié', 'الموظّف / العامل', 'Person, die bei einer Firma angestellt ist.', 'Arbeitnehmer haben Anspruch auf bezahlten Urlaub.', null, null],
    ['fw-3a-9', 'theme-travail', 'die Arbeitsbedingungen', 'les conditions de travail', 'ظروف العمل', 'Umstände am Arbeitsplatz (Arbeitszeit, Klima, Sicherheit).', 'In diesem Unternehmen sind die Arbeitsbedingungen sehr modern.', null, null],
    ['fw-3a-10', 'theme-travail', 'das Gehalt', 'le salaire', 'الراتب الشهري', 'Monatliche Bezahlung für Angestellte.', 'Das Gehalt wird immer am Monatsende überwiesen.', null, null],
    ['fw-3a-11', 'theme-travail', 'die Kündigung', 'la démission / le licenciement selon le contexte', 'الاستقالة أو الفصل من العمل', 'Beendigung eines Arbeits- oder Mietvertrags.', 'Man muss bei der Kündigung eine Frist von vier Wochen beachten.', null, null],
    ['fw-3a-12', 'theme-travail', 'arbeitslos', 'au chômage', 'عاطل عن العمل', 'Ohne feste Arbeitsstelle.', 'Nach der Firmenschließung war er drei Monate lang arbeitslos.', null, null],

    // ================= 3B. FAMILLE ET RELATIONS =================
    ['fw-3b-1', 'theme-famille', 'die Beziehung', 'la relation', 'العلاقة', 'Verbindung zwischen Menschen oder Partnern.', 'Sie führen seit vielen Jahren eine glückliche Beziehung.', null, null],
    ['fw-3b-2', 'theme-famille', 'die Freundschaft', "l'amitié", 'الصداقة', 'Enge, vertrauensvolle Verbindung zwischen Freunden.', 'Eine echte Freundschaft hält auch in schwierigen Zeiten.', null, null],
    ['fw-3b-3', 'theme-famille', 'das Vertrauen', 'la confiance', 'الثقة', 'Das sichere Gefühl, dass man sich auf jemanden verlassen kann.', 'Vertrauen ist die wichtigste Basis in jeder Familie.', null, null],
    ['fw-3b-4', 'theme-famille', 'die Unterstützung', 'le soutien', 'الدعم / المساندة', 'Hilfe und Beistand durch andere Menschen.', 'Vielen Dank für deine großartige Unterstützung beim Umzug!', null, null],
    ['fw-3b-5', 'theme-famille', 'die Verantwortung', 'la responsabilité', 'المسؤولية', 'Pflicht, für etwas zu sorgen und die Folgen zu tragen.', 'Eltern tragen viel Verantwortung für ihre Kinder.', null, null],
    ['fw-3b-6', 'theme-famille', 'sich streiten', 'se disputer', 'يتشاجر / يتخاصم', 'Eine heftige Auseinandersetzung mit Worten haben.', 'Geschwister streiten sich manchmal um Kleinigkeiten.', null, null],
    ['fw-3b-7', 'theme-famille', 'sich versöhnen', 'se réconcilier', 'يتصالح', 'Einen Streit beenden und wieder Frieden schließen.', 'Nach dem kurzen Streit haben sie sich schnell wieder versöhnt.', null, null],
    ['fw-3b-8', 'theme-famille', 'sich verstehen', 'se comprendre', 'يتفاهم مع / ينسجم مع', 'Gut miteinander auskommen.', 'Ich verstehe mich hervorragend mit meinen neuen Nachbarn.', null, null],
    ['fw-3b-9', 'theme-famille', 'enttäuscht', 'déçu', 'محبَط / خائب الأمل', 'Traurig, weil eine Erwartung nicht erfüllt wurde.', 'Er war sehr enttäuscht, weil das Konzert abgesagt wurde.', null, null],
    ['fw-3b-10', 'theme-famille', 'einsam', 'seul, isolé', 'وحيد / يشعر بالوحدة', 'Traurig, weil man allein ist und niemanden um sich hat.', 'In einer neuen Großstadt fühlt man sich am Anfang oft einsam.', null, null],
    ['fw-3b-11', 'theme-famille', 'zuverlässig', 'fiable', 'موثوق / يُعتمد عليه', 'So, dass man sich immer auf jemanden verlassen kann.', 'Meine Kollegin ist immer pünktlich und absolut zuverlässig.', null, null],

    // ================= 3C. SANTÉ ET ALIMENTATION =================
    ['fw-3c-1', 'theme-sante', 'die Gesundheit', 'la santé', 'الصحة', 'Zustand des körperlichen und geistigen Wohlbefindens.', 'Gesundheit ist viel wichtiger als viel Geld.', null, null],
    ['fw-3c-2', 'theme-sante', 'die Ernährung', "l'alimentation", 'التغذية', 'Die Art und Weise, was und wie man isst.', 'Eine gesunde Ernährung mit viel Gemüse gibt Energie.', null, null],
    ['fw-3c-3', 'theme-sante', 'die Bewegung', "l'activité physique, le mouvement", 'الحركة / النشاط البدني', 'Körperliche Aktivität wie Spazierengehen oder Sport.', 'Tägliche Bewegung an der frischen Luft tut dem Körper gut.', null, null],
    ['fw-3c-4', 'theme-sante', 'die Gewohnheit', "l'habitude", 'العادة', 'Etwas, das man regelmäßig und fast automatisch tut.', 'Früh aufzustehen ist für mich eine gute Gewohnheit geworden.', null, null],
    ['fw-3c-5', 'theme-sante', 'die Behandlung', 'le traitement', 'العلاج الطبي', 'Medizinische Versorgung durch einen Arzt.', 'Durch die richtige Behandlung wurde der Patient schnell gesund.', null, null],
    ['fw-3c-6', 'theme-sante', 'die Untersuchung', "l'examen médical", 'الفحص الطبي', 'Prüfung des Gesundheitszustands beim Arzt.', 'Der Arzt hat nach der Untersuchung Entwarnung gegeben.', null, null],
    ['fw-3c-7', 'theme-sante', 'die Beschwerden', 'les symptômes, les troubles', 'الأعراض المرضية / الآلام', 'Körperliche Probleme oder Schmerzen (meist Plural).', 'Bei starken Beschwerden sollten Sie sofort zum Arzt gehen.', null, null],
    ['fw-3c-8', 'theme-sante', 'sich erholen', 'se reposer, récupérer', 'يرتاح / يستجمّ / يتعافى', 'Neue Kraft sammeln nach Arbeit oder Krankheit.', 'Im Urlaub am Meer konnte ich mich wunderbar erholen.', null, null],
    ['fw-3c-9', 'theme-sante', 'sich ernähren', "s'alimenter", 'يتغذّى', 'Bestimmte Nahrung regelmäßig zu sich nehmen.', 'Immer mehr junge Leute ernähren sich vegetarisch.', null, null],
    ['fw-3c-10', 'theme-sante', 'ausgewogen', 'équilibré', 'متوازن (نظام غذائي متوازن)', 'In einem guten, gesunden Verhältnis gemischt.', 'Ärzte empfehlen eine ausgewogene Ernährung mit wenig Zucker.', null, null],
    ['fw-3c-11', 'theme-sante', 'die Nebenwirkung', "l'effet secondaire", 'الأثر الجانبي (للدواء)', 'Unerwünschte Wirkung eines Medikaments.', 'Dieses Medikament hat zum Glück fast keine Nebenwirkungen.', null, null],

    // ================= 3D. ENVIRONNEMENT ET NATURE =================
    ['fw-3d-1', 'theme-environnement', 'die Umwelt', "l'environnement", 'البيئة', 'Die gesamte natürliche Umgebung der Menschen und Tiere.', 'Wir alle müssen mehr tun, um unsere Umwelt zu schützen.', null, null],
    ['fw-3d-2', 'theme-environnement', 'die Umweltverschmutzung', 'la pollution', 'تلوّث البيئة', 'Belastung von Luft, Wasser und Boden durch Schadstoffe.', 'Weniger Plastik im Alltag reduziert die Umweltverschmutzung.', null, null],
    ['fw-3d-3', 'theme-environnement', 'der Klimawandel', 'le changement climatique', 'التغيّر المناخي', 'Veränderung des weltweiten Klimas durch Erwärmung.', 'Der Klimawandel führt zu heißeren Sommern in Europa.', null, null],
    ['fw-3d-4', 'theme-environnement', 'der Abfall', 'le déchet', 'النفايات / القمامة', 'Müll; Dinge, die man nicht mehr braucht und wegwirft.', 'Bitte werfen Sie keinen Abfall in die Natur.', null, null],
    ['fw-3d-5', 'theme-environnement', 'die Mülltrennung', 'le tri des déchets', 'فرز النفايات', 'Sortieren von Papier, Glas, Plastik und Biomüll.', 'In Deutschland und Österreich ist die Mülltrennung Pflicht.', null, null],
    ['fw-3d-6', 'theme-environnement', 'die Energie', "l'énergie", 'الطاقة', 'Kraft aus Strom, Wärme, Sonne oder Wind.', 'Mit modernen Lampen kann man zu Hause viel Energie sparen.', null, null],
    ['fw-3d-7', 'theme-environnement', 'der Verbrauch', 'la consommation', 'الاستهلاك', 'Die Menge, die von Wasser, Strom oder Benzin genutzt wird.', 'Der Verbrauch von Plastikflaschen sollte gesenkt werden.', null, null],
    ['fw-3d-8', 'theme-environnement', 'sparen', 'économiser', 'يوفّر / يدّخر', 'Weniger Geld oder Ressourcen verbrauchen.', 'Wenn wir das Licht ausschalten, sparen wir Strom und Geld.', null, null],
    ['fw-3d-9', 'theme-environnement', 'schützen', 'protéger', 'يحمي', 'Vor Schaden oder Gefahr bewahren.', 'Wir müssen seltene Tiere und Wälder aktiv schützen.', null, null],
    ['fw-3d-10', 'theme-environnement', 'verschwenden', 'gaspiller', 'يهدر / يبذّر', 'Sinnlos und unnötig viel verbrauchen.', 'Man sollte weder Lebensmittel noch Trinkwasser verschwenden.', null, null],
    ['fw-3d-11', 'theme-environnement', 'umweltfreundlich', 'écologique', 'صديق للبيئة', 'Gut und schonend für die Natur.', 'Mit dem Fahrrad zur Arbeit zu fahren ist sehr umweltfreundlich.', null, null],
    ['fw-3d-12', 'theme-environnement', 'nachhaltig', 'durable', 'مستدام', 'Auf lange Sicht umweltschonend und verantwortungsvoll.', 'Nachhaltige Produkte halten länger und schonen die Natur.', null, null],

    // ================= 3E. VOYAGES ET TRANSPORTS =================
    ['fw-3e-1', 'theme-voyages', 'die Unterkunft', "l'hébergement", 'مكان الإقامة / السكن السياحي', 'Ort zum Übernachten auf Reisen (Hotel, Pension, Jugendherberge).', 'Wir haben im Internet eine günstige Unterkunft gebucht.', null, null],
    ['fw-3e-2', 'theme-voyages', 'die Übernachtung', 'la nuitée', 'المبيت لليلة واحدة', 'Das Schlafen in einem Hotel für eine Nacht.', 'Der Preis beträgt sechzig Euro pro Übernachtung mit Frühstück.', null, null],
    ['fw-3e-3', 'theme-voyages', 'die Verspätung', 'le retard', 'التأخير', 'Zeit, um die ein Zug oder Bus zu spät kommt.', 'Wegen des Schnees hatte die Bahn dreißig Minuten Verspätung.', null, null],
    ['fw-3e-4', 'theme-voyages', 'die Verbindung', 'la liaison, la correspondance', 'خط المواصلات / رحلة الربط', 'Zug- oder Busanschluss von einem Ort zum anderen.', 'Es gibt jede Stunde eine direkte Verbindung nach Salzburg.', null, null],
    ['fw-3e-5', 'theme-voyages', 'die Fahrkarte', 'le billet de transport', 'تذكرة السفر', 'Ticket für Bus, Straßenbahn oder Zug.', 'Vergiss nicht, vor dem Einsteigen eine Fahrkarte zu kaufen!', null, null],
    ['fw-3e-6', 'theme-voyages', 'die Abfahrt', 'le départ', 'الانطلاق / المغادرة', 'Zeitpunkt, an dem ein Zug oder Bus losfährt.', 'Vor der Abfahrt des Zuges kaufe ich mir noch einen Kaffee.', null, null],
    ['fw-3e-7', 'theme-voyages', 'die Ankunft', "l'arrivée", 'الوصول', 'Zeitpunkt des Ankommens am Ziel.', 'Nach unserer Ankunft im Hotel gehen wir sofort an den Strand.', null, null],
    ['fw-3e-8', 'theme-voyages', 'die Reiseversicherung', "l'assurance voyage", 'تأمين السفر', 'Versicherung für Krankheit oder Gepäckverlust im Urlaub.', 'Für längere Auslandsreisen lohnt sich eine Reiseversicherung.', null, null],
    ['fw-3e-9', 'theme-voyages', 'die Sehenswürdigkeit', 'le site touristique', 'المَعْلَم السياحي', 'Bekanntes Bauwerk oder Ort, den Touristen besichtigen.', 'Der Stephansdom ist eine berühmte Sehenswürdigkeit in Wien.', null, null],
    ['fw-3e-10', 'theme-voyages', 'die Buchung', 'la réservation', 'الحجز', 'Feste Reservierung von Flug, Zug oder Hotel.', 'Ihre Buchung wurde erfolgreich im System gespeichert.', null, null],
    ['fw-3e-11', 'theme-voyages', 'die Reise absagen', 'annuler le voyage', 'يلغي الرحلة', 'Einen geplanten Urlaub stornieren.', 'Wegen einer Grippe mussten wir die Reise leider absagen.', null, null],

    // ================= 3F. ÉDUCATION ET APPRENTISSAGE =================
    ['fw-3f-1', 'theme-education', 'die Prüfung', "l'examen", 'الامتحان / الاختبار', 'Test, bei dem Wissen und Können geprüft werden.', 'Mit guter Vorbereitung wirst du die Prüfung sicher schaffen.', null, null],
    ['fw-3f-2', 'theme-education', 'die Kenntnisse', 'les connaissances', 'المعارف / المهارات اللغوية (غالباً بالجمع)', 'Wissen auf einem Gebiet (z. B. gute Deutschkenntnisse).', 'Für diesen Beruf werden gute Englischkenntnisse verlangt.', null, null],
    ['fw-3f-3', 'theme-education', 'die Fähigkeit', 'la capacité', 'القدرة / الكفاءة', 'Begabung oder Können, etwas Bestimmtes zu tun.', 'Teamarbeit ist heute eine sehr wichtige Fähigkeit.', null, null],
    ['fw-3f-4', 'theme-education', 'die Voraussetzung', 'la condition préalable', 'الشرط الأساسي / المتطلّب المسبق', 'Bedingung, die erfüllt sein muss.', 'Das B1-Zertifikat ist eine Voraussetzung für die Einbürgerung.', null, null],
    ['fw-3f-5', 'theme-education', 'die Note', 'la note', 'الدرجة / العلامة المدرسية', 'Bewertung einer schulischen Leistung mit Zahlen.', 'Sie hat in der Mathematikarbeit eine sehr gute Note bekommen.', null, null],
    ['fw-3f-6', 'theme-education', 'die Leistung', 'la performance', 'الأداء / الإنجاز', 'Das Ergebnis von Arbeit oder Lernen.', 'Der Lehrer lobte die tolle Leistung der gesamten Klasse.', null, null],
    ['fw-3f-7', 'theme-education', 'die Konzentration', 'la concentration', 'التركيز', 'Aufmerksamkeit auf eine Aufgabe ohne Ablenkung.', 'In einer lauten Umgebung verliert man leicht die Konzentration.', null, null],
    ['fw-3f-8', 'theme-education', 'sich verbessern', "s'améliorer", 'يتحسّن / يطوّر مستواه', 'Besser werden in einem Fach oder einer Sprache.', 'Durch tägliches Lesen hat sich mein Wortschatz stark verbessert.', null, null],
    ['fw-3f-9', 'theme-education', 'sich bemühen', 'faire des efforts', 'يبذل جهداً / يجتهد', 'Fleißig versuchen, etwas gut zu machen.', 'Wenn man sich bemüht, macht man schnell Fortschritte.', null, null],
    ['fw-3f-10', 'theme-education', 'bestehen', 'réussir un examen', 'ينجح في امتحان', 'Eine Prüfung erfolgreich abschließen.', 'Herzlichen Glückwunsch! Du hast die B1-Prüfung bestanden!', null, null],
    ['fw-3f-11', 'theme-education', 'durchfallen', 'échouer à un examen', 'يرسب في امتحان', 'Eine Prüfung nicht bestehen.', 'Wer gar nicht lernt, kann bei der Prüfung leicht durchfallen.', null, null],
    ['fw-3f-12', 'theme-education', 'sich weiterbilden', 'suivre une formation continue', 'يثقّف نفسه / يتابع تدريباً مستمراً', 'Beruflich oder privat Neues dazulernen.', 'Auch nach dem Studium sollte man sich regelmäßig weiterbilden.', null, null],

    // ================= 4. MOTS DE LIAISON — KONNEKTOREN =================
    ['fw-4-1', 'konnektoren', 'obwohl', 'bien que', 'على الرغم من أن (فعل في آخر الجملة)', 'Nebensatz-Konnektor für einen Gegengrund (Verb am Ende).', 'Er geht joggen, obwohl es draußen stark regnet.', null, null],
    ['fw-4-2', 'konnektoren', 'trotzdem', 'malgré cela, quand même', 'رغم ذلك / مع ذلك', 'Hauptsatz-Adverb für einen Gegensatz.', 'Es regnet stark, trotzdem geht er im Park joggen.', null, null],
    ['fw-4-3', 'konnektoren', 'deshalb / deswegen', "c'est pourquoi", 'لذلك / لهذا السبب', 'Gibt eine logische Folge an (Verb auf Position 2).', 'Ich habe morgen eine Prüfung, deshalb lerne ich heute früh.', null, null],
    ['fw-4-4', 'konnektoren', 'daher', 'donc, par conséquent', 'لذا / وبالتالي', 'Formeller Konnektor für Grund und Folge.', 'Der Zug fiel aus, daher kam ich leider zu spät.', null, null],
    ['fw-4-5', 'konnektoren', 'außerdem', 'en outre, de plus', 'بالإضافة إلى ذلك / علاوة على ذلك', 'Fügt ein weiteres Argument hinzu.', 'Die Wohnung ist hell, außerdem liegt sie nah am Bahnhof.', null, null],
    ['fw-4-6', 'konnektoren', 'allerdings', 'toutefois', 'إلا أن / غير أن / لكن', 'Drückt eine höfliche Einschränkung aus.', 'Das Hotel ist sehr schön, allerdings ist es ziemlich teuer.', null, null],
    ['fw-4-7', 'konnektoren', 'während', 'pendant que, tandis que', 'بينما / في حين أن', 'Gleichzeitigkeit oder starker Gegensatz (Verb am Ende).', 'Während ich koche, deckt mein Bruder schon den Tisch.', null, null],
    ['fw-4-8', 'konnektoren', 'hingegen', 'en revanche', 'في المقابل / على العكس من ذلك', 'Hebt einen Kontrast zwischen zwei Dingen hervor.', 'Ich trinke gern Tee, meine Schwester hingegen liebt Kaffee.', null, null],
    ['fw-4-9', 'konnektoren', 'dennoch', 'néanmoins', 'ومع ذلك / بالرغم من ذلك', 'Gehobenes Synonym für trotzdem.', 'Die Aufgabe war schwer, dennoch hat sie nicht aufgegeben.', null, null],
    ['fw-4-10', 'konnektoren', 'sobald', 'dès que', 'بمجرّد أن / حالما', 'Drückt aus, dass etwas sofort nach etwas anderem passiert.', 'Ich rufe dich an, sobald ich am Flughafen angekommen bin.', null, null],
    ['fw-4-11', 'konnektoren', 'solange', 'aussi longtemps que', 'طالما أن', 'Zeitliche Dauer mit Bedingung (Verb am Ende).', 'Du kannst mein Fahrrad nutzen, solange du vorsichtig fährst.', null, null],
    ['fw-4-12', 'konnektoren', 'bevor', 'avant que', 'قبل أن', 'Zeitlicher Nebensatz: Was passiert vorher?', 'Wasch dir bitte die Hände, bevor wir zusammen essen.', null, null],
    ['fw-4-13', 'konnektoren', 'nachdem', 'après que', 'بعد أن', 'Zeitlicher Nebensatz: Was ist zuerst abgeschlossen?', 'Nachdem er gefrühstückt hatte, fuhr er mit dem Rad zur Arbeit.', null, null],
    ['fw-4-14', 'konnektoren', 'falls', 'au cas où, si', 'في حال / إذا ما', 'Drückt eine mögliche Bedingung aus (wie wenn).', 'Nimm einen Schirm mit, falls es heute Abend regnet.', null, null],
    ['fw-4-15', 'konnektoren', 'sowohl … als auch', 'aussi bien… que', 'كلٌّ من ... و ... (كلاهما)', 'Verbindet zwei positive Elemente.', 'Sie spricht sowohl Französisch als auch sehr gut Deutsch.', null, null],
    ['fw-4-16', 'konnektoren', 'weder … noch', 'ni… ni', 'لا ... ولا ...', 'Doppelkonnektor für doppelte Verneinung.', 'Am Sonntag habe ich weder Lust auf Arbeit noch auf Stress.', null, null],
    ['fw-4-17', 'konnektoren', 'entweder … oder', 'soit… soit', 'إمّا ... أو ...', 'Zeigt eine Entscheidung zwischen zwei Alternativen.', 'Wir fahren im Sommer entweder nach Spanien oder nach Italien.', null, null],
    ['fw-4-18', 'konnektoren', 'nicht nur … sondern auch', 'non seulement… mais aussi', 'ليس فقط ... بل أيضاً', 'Hebt zwei wichtige Aspekte hervor.', 'Sport ist nicht nur gesund, sondern macht auch großen Spaß.', null, null],
    ['fw-4-19', 'konnektoren', 'einerseits … andererseits', "d'un côté… de l'autre", 'من جهة ... ومن جهة أخرى', 'Perfekt für Vor- und Nachteile im B1-Schreiben.', 'Einerseits verdient man gut, andererseits hat man wenig Freizeit.', null, null],
    ['fw-4-20', 'konnektoren', 'im Gegensatz zu', 'contrairement à', 'على عكس (+ Dativ)', 'Vergleicht zwei gegensätzliche Dinge (+ Dativ).', 'Im Gegensatz zu meinem Bruder stehe ich morgens gern früh auf.', null, null],
    ['fw-4-21', 'konnektoren', 'zum Beispiel', 'par exemple', 'على سبيل المثال (z. B.)', 'Leitet ein konkretes Beispiel ein.', 'Viele Sportarten, zum Beispiel Schwimmen, schonen die Gelenke.', null, null],
    ['fw-4-22', 'konnektoren', 'aus diesem Grund', 'pour cette raison', 'لهذا السبب', 'Schöner Ausdruck für Briefe und Aufsätze statt deshalb.', 'Die Miete war zu hoch. Aus diesem Grund sind wir umgezogen.', null, null],

    // ================= 5. ADJECTIFS ET ADVERBES FRÉQUENTS =================
    ['fw-5-1', 'adjectifs-frequents', 'notwendig', 'nécessaire', 'ضروري / لازم', 'Unbedingt gebraucht; nötig.', 'Für die Reise ist ein gültiger Ausweis absolut notwendig.', null, null],
    ['fw-5-2', 'adjectifs-frequents', 'geeignet', 'adapté, approprié', 'مناسب / ملائم', 'Passend für einen bestimmten Zweck (für + Akk.).', 'Dieser Film ist für Kinder unter zwölf Jahren nicht geeignet.', null, null],
    ['fw-5-3', 'adjectifs-frequents', 'verantwortlich', 'responsable', 'مسؤول (عن = für + Akk.)', 'Die Pflicht und Schuld oder Sorge für etwas tragend.', 'Wer ist in Ihrer Abteilung für die Kundenbetreuung verantwortlich?', null, null],
    ['fw-5-4', 'adjectifs-frequents', 'unterschiedlich', 'différent, varié', 'مختلف / متفاوت', 'Nicht gleich; verschieden.', 'Die Kursteilnehmer kommen aus ganz unterschiedlichen Ländern.', null, null],
    ['fw-5-5', 'adjectifs-frequents', 'ähnlich', 'similaire', 'مشابه / شبيه', 'Fast gleich in bestimmten Merkmalen.', 'Die beiden Brüder sehen sich wirklich sehr ähnlich.', null, null],
    ['fw-5-6', 'adjectifs-frequents', 'gefährlich', 'dangereux', 'خطير', 'Mit einem Risiko oder einer Gefahr verbunden.', 'Bei Glatteis ist schnelles Autofahren extrem gefährlich.', null, null],
    ['fw-5-7', 'adjectifs-frequents', 'nützlich', 'utile', 'مفيد / نافع', 'Einen praktischen Vorteil bringend.', 'Diese Vokabelliste ist sehr nützlich für die B1-Prüfung.', null, null],
    ['fw-5-8', 'adjectifs-frequents', 'sinnvoll', 'judicieux, qui a du sens', 'ذو مغزى / منطقي ومفيد', 'Vernünftig und zweckmäßig.', 'Es ist sinnvoll, jeden Tag zwanzig Minuten Vokabeln zu lernen.', null, null],
    ['fw-5-9', 'adjectifs-frequents', 'ausreichend', 'suffisant', 'كافٍ', 'Genug für einen Zweck.', 'Vor der Prüfung sollte man unbedingt ausreichend schlafen.', null, null],
    ['fw-5-10', 'adjectifs-frequents', 'zufrieden', 'satisfait', 'راضٍ / مقتنع', 'Glücklich mit dem, was man hat oder erreicht hat.', 'Bist du mit deiner neuen Wohnung in der Stadt zufrieden?', null, null],
    ['fw-5-11', 'adjectifs-frequents', 'überrascht', 'surpris', 'مندهش / متفاجئ', 'Erstaunt über etwas Unerwartetes.', 'Ich war positiv überrascht, wie einfach die Aufgabe war.', null, null],
    ['fw-5-12', 'adjectifs-frequents', 'begeistert', 'enthousiaste', 'متحمّس جدّاً / معجَب بشدّة', 'Voller Freude und Faszination (von + Dat.).', 'Alle Zuschauer waren von dem tollen Konzert begeistert.', null, null],
    ['fw-5-13', 'adjectifs-frequents', 'besorgt', 'inquiet', 'قلِق / مهموم', 'Voller Sorge oder Unruhe.', 'Die Eltern sind besorgt, weil ihr Sohn noch nicht zu Hause ist.', null, null],
    ['fw-5-14', 'adjectifs-frequents', 'anstrengend', 'fatigant', 'مُرهِق / مُتعِب', 'Viel Kraft und Mühe kostend.', 'Der Umzug in den vierten Stock war wirklich sehr anstrengend.', null, null],
    ['fw-5-15', 'adjectifs-frequents', 'erfolgreich', 'réussi, couronné de succès', 'ناجح / مثمر', 'Mit gutem Ergebnis und Erfolg.', 'Nach drei Monaten Training hat er den Marathon erfolgreich beendet.', null, null],
    ['fw-5-16', 'adjectifs-frequents', 'unabhängig', 'indépendant', 'مستقلّ', 'Frei und nicht auf andere angewiesen.', 'Mit einem eigenen Einkommen ist man finanziell unabhängig.', null, null],
    ['fw-5-17', 'adjectifs-frequents', 'abhängig', 'dépendant', 'معتمد على غيره / تابع لـ', 'Auf jemanden oder etwas angewiesen (von + Dat.).', 'Viele Pendler sind täglich vom öffentlichen Verkehr abhängig.', null, null],
    ['fw-5-18', 'adjectifs-frequents', 'freundlich', 'aimable', 'لطيف / ودود', 'Nett und hilfsbereit im Umgang mit anderen.', 'Das Personal im Hotel war jederzeit sehr freundlich zu uns.', null, null],
    ['fw-5-19', 'adjectifs-frequents', 'höflich', 'poli', 'مهذّب / لبق', 'Mit guten Manieren und Respekt.', 'In einer formellen E-Mail sollte man immer höflich schreiben.', null, null],
    ['fw-5-20', 'adjectifs-frequents', 'unangenehm', 'désagréable', 'غير مريح / مزعج', 'Störend oder peinlich.', 'Das lange Warten in der Kälte war ziemlich unangenehm.', null, null],
    ['fw-5-21', 'adjectifs-frequents', 'selbstverständlich', 'bien sûr, évident', 'بديهي / بالطبع', 'Ganz natürlich und ohne jeden Zweifel.', 'Selbstverständlich helfe ich dir gern bei der Vorbereitung!', null, null],
    ['fw-5-22', 'adjectifs-frequents', 'wahrscheinlich', 'probable', 'محتمل / على الأرجح', 'Mit hoher Sicherheit; vermutlich.', 'Morgen wird das Wetter wahrscheinlich wieder viel sonniger.', null, null],
    ['fw-5-23', 'adjectifs-frequents', 'tatsächlich', 'effectivement, en réalité', 'فعلاً / في الواقع', 'Wirklich; in der Tat.', 'Ich dachte, es wäre schwer, aber es war tatsächlich ganz leicht!', null, null],
    ['fw-5-24', 'adjectifs-frequents', 'plötzlich', 'soudain', 'فجأةً', 'Auf einmal und völlig unerwartet.', 'Mitten im Sommer fing es plötzlich an zu hageln.', null, null],
    ['fw-5-25', 'adjectifs-frequents', 'inzwischen', 'entre-temps, désormais', 'في غضون ذلك / الآن', 'In der Zwischenzeit; mittlerweile.', 'Früher fiel mir Deutsch schwer, inzwischen spreche ich es gern.', null, null],
    ['fw-5-26', 'adjectifs-frequents', 'regelmäßig', 'régulièrement', 'بانتظام', 'In festen zeitlichen Abständen immer wieder.', 'Wer regelmäßig liest, versteht B1-Texte viel schneller.', null, null],
    ['fw-5-27', 'adjectifs-frequents', 'häufig', 'fréquemment', 'غالباً / بكثرة', 'Oft; viele Male.', 'Diese Verben kommen in der B1-Prüfung besonders häufig vor.', null, null],
    ['fw-5-28', 'adjectifs-frequents', 'selten', 'rarement', 'نادراً', 'Fast nie; nur wenige Male.', 'Mein Nachbar fährt sehr selten mit dem Auto in die Stadt.', null, null]
  ];

  const b1FrequentWordsData = RAW_WORDS.map(([id, category, term, defFr, defAr, defDe, example, prep, kasus]) => {
    const baseCleanTerm = term
      .replace(/\s*\+\s*(Akk\.|Dat\.)/gi, '')
      .replace(/…/g, '')
      .trim();

    let pos = 'Wort';
    if (category.startsWith('verbes') || category === 'opinion-argumentation' || category === 'comprehension') {
      pos = prep ? `Verb + ${prep} (${kasus})` : 'Verb';
    } else if (category === 'konnektoren') {
      pos = 'Konnektor';
    } else if (category === 'adjectifs-frequents') {
      pos = 'Adjektiv / Adverb';
    } else if (/^(der|die|das)\s/i.test(term)) {
      pos = 'Nomen';
    } else {
      pos = 'Ausdruck';
    }

    return {
      id,
      category,
      term,
      baseTerm: baseCleanTerm,
      display: term,
      pos,
      teil: 0,
      level: 'B1',
      forms: [term, baseCleanTerm],
      defDe,
      defFr,
      defAr,
      example,
      prep,
      kasus,
      tip: 'Fiche de révision — Allemand B1 ÖSD',
      isFrequentB1: true
    };
  });

  // Merge into global b1VocabData so search, flashcards, and quick-lookup also benefit
  if (typeof window !== 'undefined' && Array.isArray(window.b1VocabData)) {
    const existingTerms = new Set(window.b1VocabData.map(v => (v.term || '').toLowerCase().trim()));
    b1FrequentWordsData.forEach(item => {
      if (!existingTerms.has(item.term.toLowerCase().trim())) {
        window.b1VocabData.push(item);
        existingTerms.add(item.term.toLowerCase().trim());
      }
    });
  }

  /* ---------------- MASTERY & STATS PERSISTENCE ---------------- */

  function getMasteredIds() {
    try {
      const raw = localStorage.getItem(MASTERY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function isWordMastered(id) {
    return getMasteredIds().includes(id);
  }

  function toggleWordMastered(id) {
    const list = getMasteredIds();
    const idx = list.indexOf(id);
    let nowMastered = false;
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      list.push(id);
      nowMastered = true;
    }
    try {
      localStorage.setItem(MASTERY_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {}
    return nowMastered;
  }

  function getBestMatchTime() {
    try {
      return parseInt(localStorage.getItem(BEST_MATCH_TIME_KEY) || '0', 10);
    } catch (e) {
      return 0;
    }
  }

  function setBestMatchTime(ms) {
    try {
      const prev = getBestMatchTime();
      if (!prev || ms < prev) {
        localStorage.setItem(BEST_MATCH_TIME_KEY, String(ms));
        return true;
      }
    } catch (e) {}
    return false;
  }

  function getBestStreak() {
    try {
      return parseInt(localStorage.getItem(BEST_STREAK_KEY) || '0', 10);
    } catch (e) {
      return 0;
    }
  }

  function updateBestStreak(s) {
    try {
      if (s > getBestStreak()) {
        localStorage.setItem(BEST_STREAK_KEY, String(s));
      }
    } catch (e) {}
  }

  /* ---------------- TRAINER STATE ---------------- */

  let activeMode = 'sheet'; // 'sheet' | 'flashcards3d' | 'prep' | 'match' | 'quiz'
  let activeCategory = 'all';
  let hideMode = 'none'; // 'none' | 'hide-fr' | 'hide-de'
  let sheetViewStyle = localStorage.getItem(FICHE_LAYOUT_VIEW_KEY) || 'table'; // 'table' | 'cards'
  let onlyUnmastered = false;

  // 3D Flashcards XL State
  let fc3dList = [];
  let fc3dIndex = 0;

  // Match Game State
  let matchCards = [];
  let matchSelected = [];
  let matchMatchedIds = new Set();
  let matchCombo = 0;
  let matchMistakes = 0;
  let matchStartTime = 0;
  let matchTimerInterval = null;

  // Preposition Drill State
  let prepPool = [];
  let prepCurrentIdx = 0;
  let prepSelectedPrep = null;
  let prepSelectedKasus = null;
  let prepAnswered = false;
  let prepScore = 0;
  let prepStreak = 0;

  // Sprint Quiz State
  let quizPool = [];
  let quizCurrent = null;
  let quizOptions = [];
  let quizAnswered = false;
  let quizStreak = 0;
  let quizXP = 0;
  let quizDirection = 'de-to-fr'; // 'de-to-fr' | 'fr-to-de'

  function getWordsForCategory(catId) {
    if (catId === 'all') return b1FrequentWordsData;
    if (catId === 'saved') {
      const savedIds = typeof window.getSavedVocabIds === 'function' ? window.getSavedVocabIds() : [];
      return b1FrequentWordsData.filter(w => savedIds.includes(w.id));
    }
    if (catId === 'verbes-prepositions') {
      return b1FrequentWordsData.filter(w => !!w.prep);
    }
    return b1FrequentWordsData.filter(w => w.category === catId);
  }

  function getFilteredWords(searchQuery = '') {
    const q = (searchQuery || '').trim().toLowerCase();
    const mastered = getMasteredIds();
    const baseList = getWordsForCategory(activeCategory);
    return baseList.filter(w => {
      if (onlyUnmastered && mastered.includes(w.id)) return false;
      if (!q) return true;
      return (
        w.term.toLowerCase().includes(q) ||
        w.defFr.toLowerCase().includes(q) ||
        w.defAr.toLowerCase().includes(q) ||
        w.defDe.toLowerCase().includes(q) ||
        w.example.toLowerCase().includes(q)
      );
    });
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function speakClean(term) {
    if (typeof window.speakGermanWord === 'function') {
      const cleaned = term
        .replace(/\+\s*(Akk\.|Dat\.)/gi, '')
        .replace(/…/g, ' ')
        .replace(/\//g, ' ')
        .trim();
      window.speakGermanWord(cleaned);
    }
  }

  function getActiveSearchQuery() {
    const pageSearch = document.getElementById('fichePageSearchInput');
    if (pageSearch) return pageSearch.value;
    const modalSearch = document.getElementById('vocabSearchInput');
    return modalSearch ? modalSearch.value : '';
  }

  /* ---------------- RENDERER (WORKS FOR BOTH FULL PAGE & MODAL) ---------------- */

  function renderFrequentWordsTrainer(searchQuery) {
    const query = searchQuery !== undefined ? searchQuery : getActiveSearchQuery();
    const fullPageTarget = document.getElementById('ficheFullPageApp');
    const modalTarget = document.getElementById('vocabTrainerContainer');
    const container = fullPageTarget || modalTarget;
    if (!container) return;

    const isFullPage = !!fullPageTarget;

    if (activeMode !== 'match' && matchTimerInterval) {
      clearInterval(matchTimerInterval);
      matchTimerInterval = null;
    }

    const totalCount = b1FrequentWordsData.length;
    const masteredIds = getMasteredIds();
    const masteredCount = masteredIds.length;
    const pct = Math.round((masteredCount / totalCount) * 100);
    const filtered = getFilteredWords(query);
    const currentCatObj = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

    const statsText = document.getElementById('vocabStatsText');
    if (statsText) {
      statsText.textContent = `${filtered.length} sur ${totalCount} mots essentiels B1 · ${masteredCount} maîtrisés (${pct}%)`;
    }

    if (isFullPage) {
      container.innerHTML = `
        <div class="fiche-full-grid">
          <!-- Left Sticky Sidebar: Progress & 12 Categories -->
          <aside class="fiche-sidebar">
            <div class="fiche-mastery-box">
              <div class="fiche-mastery-top">
                <span class="fiche-mastery-label">🎯 Progression B1</span>
                <span class="fiche-mastery-pct">${pct}%</span>
              </div>
              <div class="b1-fw-progress-track" style="height:10px; margin:8px 0;">
                <div class="b1-fw-progress-fill" style="width:${pct}%;"></div>
              </div>
              <div class="fiche-mastery-sub">
                <span><strong>${masteredCount}</strong> / ${totalCount} maîtrisés</span>
                <span>🏆 Série max : <strong>${getBestStreak()}</strong></span>
              </div>
            </div>

            <div class="fiche-sidebar-heading">Catégories de la Fiche B1</div>
            <nav class="fiche-cat-nav" aria-label="Catégories du vocabulaire B1">
              ${CATEGORIES.map(cat => {
                const catWords = getWordsForCategory(cat.id);
                const catTotal = catWords.length;
                const catMastered = catWords.filter(w => masteredIds.includes(w.id)).length;
                const isDone = catTotal > 0 && catMastered === catTotal;
                return `
                  <button type="button" class="fiche-cat-item ${activeCategory === cat.id ? 'active' : ''}" onclick="window.b1FwSelectCategory('${cat.id}')">
                    <span class="fiche-cat-icon">${cat.icon}</span>
                    <div class="fiche-cat-text">
                      <div class="fiche-cat-name">${cat.labelFr}</div>
                      <div class="fiche-cat-desc">${cat.subFr}</div>
                    </div>
                    <span class="fiche-cat-badge ${isDone ? 'done' : ''}">${catMastered}/${catTotal}</span>
                  </button>
                `;
              }).join('')}
            </nav>
          </aside>

          <!-- Right Main Content Area -->
          <section class="fiche-content-area">
            <!-- Mode Switcher Bar (5 Big Modes) -->
            <div class="fiche-modes-bar" role="tablist">
              <button type="button" class="fiche-mode-card ${activeMode === 'sheet' ? 'active' : ''}" onclick="window.b1FwSwitchMode('sheet')">
                <span class="fmc-icon">📖</span>
                <div>
                  <div class="fmc-title">1. Grande Fiche B1</div>
                  <div class="fmc-sub">Tableau XL &amp; Cache-Cache</div>
                </div>
              </button>
              <button type="button" class="fiche-mode-card ${activeMode === 'flashcards3d' ? 'active' : ''}" onclick="window.b1FwSwitchMode('flashcards3d')">
                <span class="fmc-icon">🗂️</span>
                <div>
                  <div class="fmc-title">2. Cartes 3D Géantes</div>
                  <div class="fmc-sub">Retourner &amp; Mémoriser</div>
                </div>
              </button>
              <button type="button" class="fiche-mode-card ${activeMode === 'prep' ? 'active' : ''}" onclick="window.b1FwSwitchMode('prep')">
                <span class="fmc-icon">🎯</span>
                <div>
                  <div class="fmc-title">3. Prépositions + Cas</div>
                  <div class="fmc-sub">Akkusativ vs. Dativ</div>
                </div>
              </button>
              <button type="button" class="fiche-mode-card ${activeMode === 'match' ? 'active' : ''}" onclick="window.b1FwSwitchMode('match')">
                <span class="fmc-icon">⚡</span>
                <div>
                  <div class="fmc-title">4. Chrono-Match</div>
                  <div class="fmc-sub">Jeu des 6 Paires</div>
                </div>
              </button>
              <button type="button" class="fiche-mode-card ${activeMode === 'quiz' ? 'active' : ''}" onclick="window.b1FwSwitchMode('quiz')">
                <span class="fmc-icon">🚀</span>
                <div>
                  <div class="fmc-title">5. Sprint Quiz</div>
                  <div class="fmc-sub">QCM Grand Format</div>
                </div>
              </button>
            </div>

            <!-- Active Category Banner -->
            <div class="fiche-section-banner">
              <div>
                <h1 class="fiche-section-title">${currentCatObj.icon} ${currentCatObj.labelFr}</h1>
                <p class="fiche-section-sub">${currentCatObj.subFr} — <strong>${filtered.length}</strong> mot(s) affiché(s)</p>
              </div>
              <div class="fiche-section-actions">
                <label class="b1-fw-unmastered-toggle fiche-unmastered-pill">
                  <input type="checkbox" ${onlyUnmastered ? 'checked' : ''} onchange="window.b1FwToggleOnlyUnmastered(this.checked)">
                  <span>🎯 Afficher uniquement les mots non maîtrisés</span>
                </label>
              </div>
            </div>

            <!-- Dynamic Stage -->
            <div class="b1-fw-stage fiche-xl-stage" id="b1FwStage"></div>
          </section>
        </div>
      `;
    } else {
      // Modal View inside index.html with prominent button to open Full Page
      container.innerHTML = `
        <div class="b1-fw-shell">
          <div class="fiche-open-fullpage-banner">
            <div>
              <strong>✨ Nouveau : Grande Page de Révision Plein Écran !</strong>
              <p>Ouvre la Fiche B1 sur une page dédiée avec un texte beaucoup plus grand, un mode Papier Sepia et les 5 jeux en grand format.</p>
            </div>
            <a href="fiche-b1.html" class="btn btn-primary">↗ Ouvrir en Pleine Page (Grand Texte)</a>
          </div>
          <div class="b1-fw-stage" id="b1FwStage"></div>
        </div>
      `;
    }

    const stage = document.getElementById('b1FwStage');
    if (!stage) return;

    if (activeMode === 'sheet') {
      renderSheetMode(stage, filtered);
    } else if (activeMode === 'flashcards3d') {
      renderFlashcards3dMode(stage, filtered);
    } else if (activeMode === 'match') {
      renderMatchMode(stage, filtered);
    } else if (activeMode === 'prep') {
      renderPrepMode(stage);
    } else if (activeMode === 'quiz') {
      renderQuizMode(stage, filtered);
    }
  }

  /* ---------------- MODE 1: INTERACTIVE REVISION SHEET (TABLE XL & CARDS XL) ---------------- */

  function renderSheetMode(stage, words) {
    stage.innerHTML = `
      <div class="b1-fw-sheet-toolbar fiche-xl-toolbar">
        <div class="b1-fw-hide-group">
          <span class="b1-fw-ctrl-label">🧠 Auto-Test (Cache-Cache) :</span>
          <button type="button" class="b1-fw-pill-btn ${hideMode === 'none' ? 'active' : ''}" onclick="window.b1FwSetHideMode('none')">👁️ Tout afficher</button>
          <button type="button" class="b1-fw-pill-btn ${hideMode === 'hide-fr' ? 'active' : ''}" onclick="window.b1FwSetHideMode('hide-fr')">🙈 Cacher Français &amp; Arabe</button>
          <button type="button" class="b1-fw-pill-btn ${hideMode === 'hide-de' ? 'active' : ''}" onclick="window.b1FwSetHideMode('hide-de')">🇩🇪 Cacher Allemand</button>
        </div>

        <div class="b1-fw-hide-group">
          <span class="b1-fw-ctrl-label">Affichage :</span>
          <button type="button" class="b1-fw-pill-btn ${sheetViewStyle === 'table' ? 'active' : ''}" onclick="window.b1FwSetSheetView('table')">📋 Tableau Large</button>
          <button type="button" class="b1-fw-pill-btn ${sheetViewStyle === 'cards' ? 'active' : ''}" onclick="window.b1FwSetSheetView('cards')">🪪 Grandes Cartes</button>
        </div>
      </div>

      ${hideMode !== 'none' ? `
        <div class="fiche-cache-hint">
          💡 <strong>Astuce Mode Cache-Cache :</strong> Devine la traduction dans ta tête, puis <strong>clique sur une case floutée</strong> pour la révéler !
        </div>
      ` : ''}

      ${words.length === 0 ? `
        <div class="b1-fw-empty">
          <div style="font-size:44px; margin-bottom:10px;">🎉</div>
          <strong style="font-size:18px;">Aucun mot dans ce filtre !</strong>
          <p style="font-size:15px; margin-top:6px;">Tu as maîtrisé tous les mots de cette catégorie ou ta recherche ne correspond à aucun terme.</p>
        </div>
      ` : sheetViewStyle === 'cards' ? renderSheetCardsView(words) : renderSheetTableView(words)}
    `;
  }

  function renderSheetTableView(words) {
    return `
      <div class="b1-fw-table-wrap fiche-xl-table-wrap">
        <table class="b1-fw-table fiche-xl-table">
          <thead>
            <tr>
              <th style="width:36%;">🇩🇪 Allemand &amp; Définition</th>
              <th style="width:30%;">🇫🇷 Français &amp; 🇸🇦 العربية</th>
              <th style="width:24%;">💬 Exemple B1</th>
              <th style="width:10%; text-align:center;">Statut</th>
            </tr>
          </thead>
          <tbody>
            ${words.map(w => {
              const mastered = isWordMastered(w.id);
              const saved = typeof window.isVocabSaved === 'function' ? window.isVocabSaved(w.id) : false;
              const kasusBadge = w.kasus
                ? `<span class="b1-fw-kasus-badge ${w.kasus.includes('Akk') ? 'akk' : 'dat'}">+ ${w.kasus}</span>`
                : '';

              return `
                <tr class="b1-fw-row ${mastered ? 'is-mastered' : ''}" id="fw-row-${w.id}">
                  <td>
                    <div class="b1-fw-de-cell ${hideMode === 'hide-de' ? 'b1-fw-blur-target' : ''}" onclick="if(this.classList.contains('b1-fw-blur-target')) this.classList.toggle('revealed')">
                      <div class="b1-fw-de-main">
                        <button type="button" class="b1-fw-audio-btn-lg" onclick="event.stopPropagation(); window.b1FwSpeak('${w.term.replace(/'/g, "\\'")}')" title="Écouter la prononciation allemande">🔊</button>
                        <span class="b1-fw-term-txt">${w.term}</span>
                        ${kasusBadge}
                      </div>
                      <div class="b1-fw-de-sub">${w.defDe}</div>
                    </div>
                  </td>
                  <td>
                    <div class="b1-fw-fr-cell ${hideMode === 'hide-fr' ? 'b1-fw-blur-target' : ''}" onclick="if(this.classList.contains('b1-fw-blur-target')) this.classList.toggle('revealed')">
                      <div class="b1-fw-fr-txt">${w.defFr}</div>
                      <div class="b1-fw-ar-txt" dir="rtl">${w.defAr}</div>
                    </div>
                  </td>
                  <td>
                    <div class="b1-fw-ex-txt">
                      <span>„${w.example}“</span>
                      <button type="button" class="b1-fw-audio-sentence" onclick="window.b1FwSpeak('${w.example.replace(/'/g, "\\'")}')" title="Écouter la phrase d'exemple">🔈</button>
                    </div>
                  </td>
                  <td style="text-align:center; white-space:nowrap;">
                    <button type="button" class="b1-fw-master-btn-lg ${mastered ? 'active' : ''}" onclick="window.b1FwToggleMaster('${w.id}')" title="${mastered ? 'Maîtrisé (Cliquer pour retirer)' : 'Marquer comme maîtrisé'}">
                      ${mastered ? '✓ Maîtrisé' : '○ À apprendre'}
                    </button>
                    <button type="button" class="b1-fw-star-mini-lg ${saved ? 'active' : ''}" onclick="window.b1FwToggleStar('${w.id}')" title="Ajouter aux favoris ★">
                      ${saved ? '★' : '☆'}
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderSheetCardsView(words) {
    return `
      <div class="fiche-xl-cards-grid">
        ${words.map(w => {
          const mastered = isWordMastered(w.id);
          const saved = typeof window.isVocabSaved === 'function' ? window.isVocabSaved(w.id) : false;
          const kasusBadge = w.kasus
            ? `<span class="b1-fw-kasus-badge ${w.kasus.includes('Akk') ? 'akk' : 'dat'}">+ ${w.kasus}</span>`
            : '';

          return `
            <article class="fiche-xl-word-card ${mastered ? 'is-mastered' : ''}">
              <div class="fxc-header">
                <div class="b1-fw-de-cell ${hideMode === 'hide-de' ? 'b1-fw-blur-target' : ''}" onclick="if(this.classList.contains('b1-fw-blur-target')) this.classList.toggle('revealed')">
                  <div class="fxc-term-row">
                    <button type="button" class="b1-fw-audio-btn-lg" onclick="event.stopPropagation(); window.b1FwSpeak('${w.term.replace(/'/g, "\\'")}')" title="Écouter">🔊</button>
                    <span class="b1-fw-term-txt">${w.term}</span>
                    ${kasusBadge}
                  </div>
                  <div class="b1-fw-de-sub">${w.defDe}</div>
                </div>
                <button type="button" class="b1-fw-star-mini-lg ${saved ? 'active' : ''}" onclick="window.b1FwToggleStar('${w.id}')" title="Favori ★">${saved ? '★' : '☆'}</button>
              </div>

              <div class="fxc-trans-box ${hideMode === 'hide-fr' ? 'b1-fw-blur-target' : ''}" onclick="if(this.classList.contains('b1-fw-blur-target')) this.classList.toggle('revealed')">
                <div class="b1-fw-fr-txt">🇫🇷 ${w.defFr}</div>
                <div class="b1-fw-ar-txt" dir="rtl">🇸🇦 ${w.defAr}</div>
              </div>

              <div class="fxc-example">
                <span>„${w.example}“</span>
                <button type="button" class="b1-fw-audio-sentence" onclick="window.b1FwSpeak('${w.example.replace(/'/g, "\\'")}')" title="Écouter l'exemple">🔈</button>
              </div>

              <div class="fxc-footer">
                <span class="fxc-pos-tag">${w.pos}</span>
                <button type="button" class="b1-fw-master-btn-lg ${mastered ? 'active' : ''}" onclick="window.b1FwToggleMaster('${w.id}')">
                  ${mastered ? '✓ Maîtrisé' : '○ Marquer maîtrisé'}
                </button>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    `;
  }

  /* ---------------- MODE 2: GRANDES CARTES MÉMOIRE 3D (FLASHCARDS XL) ---------------- */

  function renderFlashcards3dMode(stage, words) {
    fc3dList = words;
    if (fc3dList.length === 0) {
      stage.innerHTML = `
        <div class="b1-fw-empty">
          <div style="font-size:42px; margin-bottom:10px;">🗂️</div>
          <strong>Aucune carte dans cette sélection</strong>
          <p>Choisis une autre catégorie à gauche ou décoche le filtre « non maîtrisés ».</p>
        </div>
      `;
      return;
    }

    if (fc3dIndex >= fc3dList.length) fc3dIndex = 0;
    const v = fc3dList[fc3dIndex];
    const mastered = isWordMastered(v.id);
    const saved = typeof window.isVocabSaved === 'function' ? window.isVocabSaved(v.id) : false;
    const kasusBadge = v.kasus
      ? `<span class="b1-fw-kasus-badge ${v.kasus.includes('Akk') ? 'akk' : 'dat'}" style="font-size:14px; padding:4px 12px;">+ ${v.kasus}</span>`
      : '';

    stage.innerHTML = `
      <div class="fiche-fc3d-wrapper">
        <div class="fiche-fc3d-topbar">
          <span class="b1-fw-stat-chip">🗂️ Carte <strong>${fc3dIndex + 1}</strong> sur <strong>${fc3dList.length}</strong></span>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn btn-outline btn-sm" onclick="window.b1FwShuffleFc3d()">🔀 Mélanger les cartes</button>
          </div>
        </div>

        <div class="fiche-fc3d-scene" onclick="this.querySelector('.fiche-fc3d-card').classList.toggle('flipped')">
          <div class="fiche-fc3d-card" id="ficheActive3dCard">
            <!-- Front Face (German) -->
            <div class="fiche-fc3d-face fiche-fc3d-front">
              <div class="fc3d-face-top">
                <span class="fc3d-cat-tag">${v.pos}</span>
                ${kasusBadge}
              </div>

              <div class="fc3d-center-content">
                <div class="fc3d-big-term">${v.term}</div>
                <button type="button" class="btn btn-outline fc3d-speak-btn" onclick="event.stopPropagation(); window.b1FwSpeak('${v.term.replace(/'/g, "\\'")}')">
                  🔊 Écouter la prononciation
                </button>
              </div>

              <div class="fc3d-flip-prompt">↻ Cliquer sur la carte (ou barre d'espace) pour voir la traduction</div>
            </div>

            <!-- Back Face (French + Arabic + Example) -->
            <div class="fiche-fc3d-face fiche-fc3d-back">
              <div class="fc3d-face-top">
                <span class="fc3d-cat-tag">🇩🇪 ${v.term}</span>
                <button type="button" class="b1-fw-audio-btn-lg" onclick="event.stopPropagation(); window.b1FwSpeak('${v.term.replace(/'/g, "\\'")}')">🔊</button>
              </div>

              <div class="fc3d-back-translations">
                <div class="fc3d-fr-big">🇫🇷 ${v.defFr}</div>
                <div class="fc3d-ar-big" dir="rtl">🇸🇦 ${v.defAr}</div>
                <div class="fc3d-de-def">${v.defDe}</div>
              </div>

              <div class="fc3d-example-box" onclick="event.stopPropagation(); window.b1FwSpeak('${v.example.replace(/'/g, "\\'")}')">
                <span>„${v.example}“</span> 🔊
              </div>

              <div class="fc3d-flip-prompt">↻ Cliquer pour retourner côté allemand</div>
            </div>
          </div>
        </div>

        <div class="fiche-fc3d-controls">
          <button type="button" class="btn btn-outline fiche-fc-nav-btn" onclick="window.b1FwPrevFc3d()">← Précédent</button>

          <button type="button" class="btn ${mastered ? 'btn-success' : 'btn-outline'} fiche-fc-nav-btn" onclick="window.b1FwToggleMaster('${v.id}')">
            ${mastered ? '✓ Maîtrisé' : '○ Marquer maîtrisé'}
          </button>

          <button type="button" class="btn btn-outline fiche-fc-nav-btn" onclick="window.b1FwToggleStar('${v.id}')">
            ${saved ? '★ Favori' : '☆ Favori'}
          </button>

          <button type="button" class="btn btn-primary fiche-fc-nav-btn" onclick="window.b1FwNextFc3d()">Suivant →</button>
        </div>
      </div>
    `;
  }

  /* ---------------- MODE 3: DÉFI PRÉPOSITIONS + CAS (AKKUSATIV VS DATIV) ---------------- */

  const ALL_PREPS = ['auf', 'über', 'für', 'um', 'an', 'mit', 'von', 'zu', 'vor', 'gegen', 'aus', 'unter'];

  function initPrepPool() {
    prepPool = shuffleArray(b1FrequentWordsData.filter(w => !!w.prep && !!w.kasus));
    prepCurrentIdx = 0;
    prepSelectedPrep = null;
    prepSelectedKasus = null;
    prepAnswered = false;
  }

  function renderPrepMode(stage) {
    if (prepPool.length === 0) initPrepPool();
    const item = prepPool[prepCurrentIdx % prepPool.length];
    const verbRoot = item.term.split(/\s+(auf|über|für|um|an|mit|von|zu|vor|gegen|aus|unter)\s+/i)[0];

    let prepChoices = [item.prep];
    const others = shuffleArray(ALL_PREPS.filter(p => p !== item.prep)).slice(0, 5);
    prepChoices = shuffleArray([...prepChoices, ...others]);

    const isCorrect = prepAnswered && prepSelectedPrep === item.prep && prepSelectedKasus === item.kasus;

    stage.innerHTML = `
      <div class="b1-fw-prep-card fiche-xl-game-card">
        <div class="b1-fw-game-header" style="margin-bottom:18px;">
          <div class="b1-fw-game-stats">
            <span class="b1-fw-stat-chip">🎯 Verbe : <strong>${(prepCurrentIdx % prepPool.length) + 1} / ${prepPool.length}</strong></span>
            <span class="b1-fw-stat-chip">🔥 Série : <strong>${prepStreak}</strong></span>
            <span class="b1-fw-stat-chip">⭐ Score : <strong>${prepScore}</strong></span>
          </div>
          <div style="font-size:13.5px; color:var(--text-muted); font-weight:700;">
            Code couleur mémoire : <span class="b1-fw-kasus-badge akk">+ Akkusativ = Bleu</span> <span class="b1-fw-kasus-badge dat">+ Dativ = Ambre</span>
          </div>
        </div>

        <div class="b1-fw-prep-prompt">
          <div class="b1-fw-prep-meaning">
            <span>🇫🇷 ${item.defFr}</span>
            <span dir="rtl">🇸🇦 ${item.defAr}</span>
          </div>
          <div class="b1-fw-prep-equation">
            <span class="verb-part">${verbRoot}</span>
            <span class="slot-part ${prepSelectedPrep ? 'filled' : ''} ${prepAnswered ? (prepSelectedPrep === item.prep ? 'ok' : 'err') : ''}">
              ${prepSelectedPrep || '___'}
            </span>
            <span class="slot-part kasus-slot ${prepSelectedKasus ? 'filled' : ''} ${prepAnswered ? (prepSelectedKasus === item.kasus ? 'ok' : 'err') : ''}">
              ${prepSelectedKasus ? '+ ' + prepSelectedKasus : '+ Kasus ?'}
            </span>
            <button type="button" class="b1-fw-audio-btn-lg" onclick="window.b1FwSpeak('${item.term.replace(/'/g, "\\'")}')" title="Écouter">🔊</button>
          </div>
        </div>

        <div class="b1-fw-prep-step">
          <div class="step-label">1️⃣ Choisis la bonne <strong>Préposition</strong> :</div>
          <div class="b1-fw-prep-pills">
            ${prepChoices.map(p => {
              let cls = '';
              if (prepSelectedPrep === p) cls += ' selected';
              if (prepAnswered) {
                if (p === item.prep) cls += ' correct';
                else if (prepSelectedPrep === p) cls += ' wrong';
              }
              return `
                <button type="button" class="b1-fw-choice-pill ${cls}" ${prepAnswered ? 'disabled' : ''} onclick="window.b1FwPickPrep('${p}')">
                  ${p}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="b1-fw-prep-step">
          <div class="step-label">2️⃣ Choisis le <strong>Cas grammatical (Kasus)</strong> :</div>
          <div class="b1-fw-kasus-row">
            ${['Akk.', 'Dat.'].map(k => {
              let cls = k === 'Akk.' ? 'akk-btn' : 'dat-btn';
              if (prepSelectedKasus === k) cls += ' selected';
              if (prepAnswered) {
                if (k === item.kasus) cls += ' correct';
                else if (prepSelectedKasus === k) cls += ' wrong';
              }
              return `
                <button type="button" class="b1-fw-kasus-choice ${cls}" ${prepAnswered ? 'disabled' : ''} onclick="window.b1FwPickKasus('${k}')">
                  + ${k === 'Akk.' ? 'Akkusativ (wen / was ?)' : 'Dativ (wem / wo ?)'}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        ${prepAnswered ? `
          <div class="b1-fw-feedback-box ${isCorrect ? 'success' : 'error'}">
            <div>
              <strong style="font-size:17px;">${isCorrect ? '✅ Parfait !' : `💡 La bonne construction est : ${item.term}`}</strong>
              <div style="font-size:15px; margin-top:6px;">Exemple B1 : <em>„${item.example}“</em></div>
            </div>
            <button type="button" class="btn btn-primary" onclick="window.b1FwNextPrep()">Verbe suivant →</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  /* ---------------- MODE 4: CHRONO-MATCH (SPEED PAIR GAME) ---------------- */

  function startNewMatchRound(words) {
    const source = words.length >= 6 ? words : b1FrequentWordsData;
    const picked = shuffleArray(source).slice(0, 6);
    const cards = [];
    picked.forEach(w => {
      cards.push({
        uid: w.id + '-de',
        pairId: w.id,
        lang: 'de',
        text: w.term,
        sub: w.kasus ? `+ ${w.kasus}` : w.pos,
        audioTerm: w.term
      });
      cards.push({
        uid: w.id + '-fr',
        pairId: w.id,
        lang: 'fr',
        text: w.defFr,
        sub: w.defAr,
        audioTerm: w.term
      });
    });

    matchCards = shuffleArray(cards);
    matchSelected = [];
    matchMatchedIds = new Set();
    matchCombo = 0;
    matchMistakes = 0;
    matchStartTime = Date.now();

    if (matchTimerInterval) clearInterval(matchTimerInterval);
    matchTimerInterval = setInterval(() => {
      const timerEl = document.getElementById('b1FwMatchTimer');
      if (!timerEl) {
        clearInterval(matchTimerInterval);
        matchTimerInterval = null;
        return;
      }
      if (matchMatchedIds.size < 6) {
        const elapsed = ((Date.now() - matchStartTime) / 1000).toFixed(1);
        timerEl.textContent = `${elapsed}s`;
      }
    }, 100);
  }

  function renderMatchMode(stage, words, keepRound = false) {
    if (!keepRound || matchCards.length === 0) {
      startNewMatchRound(words);
    }

    const bestMs = getBestMatchTime();
    const bestFormatted = bestMs ? `${(bestMs / 1000).toFixed(1)}s` : '—';
    const isFinished = matchMatchedIds.size === 6;
    const elapsedSec = ((Date.now() - matchStartTime) / 1000).toFixed(1);

    stage.innerHTML = `
      <div class="b1-fw-prep-card fiche-xl-game-card">
        <div class="b1-fw-game-header">
          <div class="b1-fw-game-stats">
            <span class="b1-fw-stat-chip">⏱️ Temps : <strong id="b1FwMatchTimer">${elapsedSec}s</strong></span>
            <span class="b1-fw-stat-chip">🔥 Combo : <strong>${matchCombo}x</strong></span>
            <span class="b1-fw-stat-chip">🏆 Record : <strong>${bestFormatted}</strong></span>
          </div>
          <button type="button" class="btn btn-primary" onclick="window.b1FwRestartMatch()">🔄 Nouvelle Manche (6 paires)</button>
        </div>

        ${isFinished ? `
          <div class="b1-fw-victory-banner">
            <div style="font-size:48px; margin-bottom:8px;">🎉⚡</div>
            <h3 style="font-size:22px;">Bravo ! 6 paires reliées en ${elapsedSec} secondes !</h3>
            <p style="font-size:15px; margin-top:6px;">Erreurs : ${matchMistakes} · Les mots ont été prononcés pour renforcer ta mémoire auditive.</p>
            <button type="button" class="btn btn-primary" style="margin-top:14px;" onclick="window.b1FwRestartMatch()">⚡ Rejouer avec 6 nouveaux mots</button>
          </div>
        ` : `
          <p class="b1-fw-game-hint" style="font-size:15px; margin-bottom:14px;">Clique sur un mot allemand (<strong>🇩🇪</strong>) puis sur sa traduction française (<strong>🇫🇷</strong>) correspondante !</p>
          <div class="b1-fw-match-grid fiche-xl-match-grid">
            ${matchCards.map(c => {
              const isMatched = matchMatchedIds.has(c.pairId);
              const isSel = matchSelected.some(s => s.uid === c.uid);
              const isWrong = isSel && matchSelected.length === 2 && matchSelected[0].pairId !== matchSelected[1].pairId;
              return `
                <button type="button"
                  class="b1-fw-match-card ${c.lang} ${isMatched ? 'matched' : ''} ${isSel ? 'selected' : ''} ${isWrong ? 'wrong' : ''}"
                  ${isMatched ? 'disabled' : ''}
                  onclick="window.b1FwClickMatchCard('${c.uid}')">
                  <span class="mc-badge">${c.lang === 'de' ? '🇩🇪 ALLEMAND' : '🇫🇷 FRANÇAIS'}</span>
                  <span class="mc-main">${c.text}</span>
                  <span class="mc-sub">${c.sub || ''}</span>
                </button>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;
  }

  /* ---------------- MODE 5: SPRINT QUIZ (4-CHOIX & STREAK) ---------------- */

  function nextQuizQuestion(words) {
    const source = words.length >= 4 ? words : b1FrequentWordsData;
    quizPool = source;
    const unmastered = source.filter(w => !isWordMastered(w.id));
    const candidatePool = unmastered.length >= 2 ? unmastered : source;
    quizCurrent = candidatePool[Math.floor(Math.random() * candidatePool.length)];

    const distractors = shuffleArray(b1FrequentWordsData.filter(w => w.id !== quizCurrent.id)).slice(0, 3);
    quizOptions = shuffleArray([quizCurrent, ...distractors]);
    quizAnswered = false;
  }

  function renderQuizMode(stage, words, keepCurrent = false) {
    if (!keepCurrent || !quizCurrent) {
      nextQuizQuestion(words);
    }

    const promptText = quizDirection === 'de-to-fr' ? quizCurrent.term : quizCurrent.defFr;
    const promptSub = quizDirection === 'de-to-fr' ? quizCurrent.defDe : `🇸🇦 ${quizCurrent.defAr}`;

    stage.innerHTML = `
      <div class="b1-fw-prep-card fiche-xl-game-card">
        <div class="b1-fw-game-header" style="margin-bottom:16px;">
          <div class="b1-fw-game-stats">
            <span class="b1-fw-stat-chip">🔥 Série : <strong>${quizStreak}</strong></span>
            <span class="b1-fw-stat-chip">✨ XP : <strong>${quizXP}</strong></span>
          </div>
          <div class="b1-fw-dir-switch">
            <button type="button" class="b1-fw-pill-btn ${quizDirection === 'de-to-fr' ? 'active' : ''}" onclick="window.b1FwSetQuizDir('de-to-fr')">🇩🇪 Allemand → 🇫🇷 Français</button>
            <button type="button" class="b1-fw-pill-btn ${quizDirection === 'fr-to-de' ? 'active' : ''}" onclick="window.b1FwSetQuizDir('fr-to-de')">🇫🇷 Français → 🇩🇪 Allemand</button>
          </div>
        </div>

        <div class="b1-fw-quiz-question">
          <div class="q-badge">${CATEGORIES.find(c => c.id === quizCurrent.category)?.labelFr || 'B1'}</div>
          <div class="q-main">
            <span>${promptText}</span>
            ${quizDirection === 'de-to-fr' ? `<button type="button" class="b1-fw-audio-btn-lg" onclick="window.b1FwSpeak('${quizCurrent.term.replace(/'/g, "\\'")}')">🔊</button>` : ''}
          </div>
          <div class="q-sub">${promptSub}</div>
        </div>

        <div class="b1-fw-quiz-options">
          ${quizOptions.map(opt => {
            const label = quizDirection === 'de-to-fr'
              ? `<span>🇫🇷 ${opt.defFr}</span> <span class="opt-ar" dir="rtl">${opt.defAr}</span>`
              : `<span>🇩🇪 ${opt.term}</span>`;
            let cls = '';
            if (quizAnswered) {
              if (opt.id === quizCurrent.id) cls = 'correct';
              else if (opt.id === quizAnswered) cls = 'wrong';
            }
            return `
              <button type="button" class="b1-fw-quiz-opt ${cls}" ${quizAnswered ? 'disabled' : ''} onclick="window.b1FwAnswerQuiz('${opt.id}')">
                ${label}
              </button>
            `;
          }).join('')}
        </div>

        ${quizAnswered ? `
          <div class="b1-fw-feedback-box ${quizAnswered === quizCurrent.id ? 'success' : 'error'}">
            <div>
              <strong style="font-size:17px;">${quizAnswered === quizCurrent.id ? '🎉 Excellente réponse ! (+15 XP)' : `💡 Rappel : ${quizCurrent.term} = ${quizCurrent.defFr}`}</strong>
              <div style="font-size:15px; margin-top:6px;">Exemple B1 : <em>„${quizCurrent.example}“</em></div>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
              <button type="button" class="btn btn-outline" onclick="window.b1FwToggleMasterAndRefresh('${quizCurrent.id}')">
                ${isWordMastered(quizCurrent.id) ? '✓ Maîtrisé' : '☆ Marquer maîtrisé'}
              </button>
              <button type="button" class="btn btn-primary" onclick="window.b1FwNextQuiz()">Question suivante →</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  /* ---------------- GLOBAL EVENT HANDLERS ---------------- */

  function refreshCurrentTrainer() {
    renderFrequentWordsTrainer(getActiveSearchQuery());
  }

  window.b1FwSwitchMode = function (mode) {
    activeMode = mode;
    if (mode === 'match') matchCards = [];
    refreshCurrentTrainer();
  };

  window.b1FwSelectCategory = function (catId) {
    activeCategory = catId;
    fc3dIndex = 0;
    if (activeMode === 'match') matchCards = [];
    if (activeMode === 'quiz') quizCurrent = null;
    refreshCurrentTrainer();
  };

  window.b1FwSetHideMode = function (mode) {
    hideMode = mode;
    refreshCurrentTrainer();
  };

  window.b1FwSetSheetView = function (view) {
    sheetViewStyle = view;
    try {
      localStorage.setItem(FICHE_LAYOUT_VIEW_KEY, view);
    } catch (e) {}
    refreshCurrentTrainer();
  };

  window.b1FwToggleOnlyUnmastered = function (checked) {
    onlyUnmastered = !!checked;
    fc3dIndex = 0;
    refreshCurrentTrainer();
  };

  window.b1FwSpeak = function (term) {
    speakClean(term);
  };

  window.b1FwToggleMaster = function (id) {
    toggleWordMastered(id);
    refreshCurrentTrainer();
  };

  window.b1FwToggleMasterAndRefresh = function (id) {
    toggleWordMastered(id);
    const stage = document.getElementById('b1FwStage');
    const words = getFilteredWords(getActiveSearchQuery());
    if (stage) renderQuizMode(stage, words, true);
  };

  window.b1FwToggleStar = function (id) {
    if (typeof window.toggleSaveVocab === 'function') {
      window.toggleSaveVocab(id);
      if (typeof window.updateSavedVocabCountBadge === 'function') {
        window.updateSavedVocabCountBadge();
      }
      refreshCurrentTrainer();
    }
  };

  window.b1FwNextFc3d = function () {
    if (!fc3dList.length) return;
    fc3dIndex = (fc3dIndex + 1) % fc3dList.length;
    refreshCurrentTrainer();
  };

  window.b1FwPrevFc3d = function () {
    if (!fc3dList.length) return;
    fc3dIndex = (fc3dIndex - 1 + fc3dList.length) % fc3dList.length;
    refreshCurrentTrainer();
  };

  window.b1FwShuffleFc3d = function () {
    fc3dIndex = Math.floor(Math.random() * Math.max(1, fc3dList.length));
    refreshCurrentTrainer();
  };

  window.b1FwRestartMatch = function () {
    matchCards = [];
    refreshCurrentTrainer();
  };

  window.b1FwClickMatchCard = function (uid) {
    if (matchSelected.length >= 2) return;
    const card = matchCards.find(c => c.uid === uid);
    if (!card || matchMatchedIds.has(card.pairId)) return;
    if (matchSelected.some(s => s.uid === uid)) return;

    if (card.lang === 'de') {
      speakClean(card.audioTerm);
    }

    matchSelected.push(card);
    const stage = document.getElementById('b1FwStage');
    const words = getFilteredWords(getActiveSearchQuery());

    if (matchSelected.length === 2) {
      const [first, second] = matchSelected;
      if (first.pairId === second.pairId && first.lang !== second.lang) {
        matchMatchedIds.add(first.pairId);
        matchCombo++;
        updateBestStreak(matchCombo);
        speakClean(first.audioTerm);
        matchSelected = [];
        if (matchMatchedIds.size === 6) {
          const elapsed = Date.now() - matchStartTime;
          setBestMatchTime(elapsed);
          if (matchTimerInterval) {
            clearInterval(matchTimerInterval);
            matchTimerInterval = null;
          }
        }
        if (stage) renderMatchMode(stage, words, true);
      } else {
        matchCombo = 0;
        matchMistakes++;
        if (stage) renderMatchMode(stage, words, true);
        setTimeout(() => {
          matchSelected = [];
          const st = document.getElementById('b1FwStage');
          if (st && activeMode === 'match') renderMatchMode(st, words, true);
        }, 650);
      }
    } else {
      if (stage) renderMatchMode(stage, words, true);
    }
  };

  window.b1FwPickPrep = function (prep) {
    if (prepAnswered) return;
    prepSelectedPrep = prep;
    checkPrepCompletion();
  };

  window.b1FwPickKasus = function (kasus) {
    if (prepAnswered) return;
    prepSelectedKasus = kasus;
    checkPrepCompletion();
  };

  function checkPrepCompletion() {
    const item = prepPool[prepCurrentIdx % prepPool.length];
    if (prepSelectedPrep && prepSelectedKasus) {
      prepAnswered = true;
      speakClean(item.term);
      if (prepSelectedPrep === item.prep && prepSelectedKasus === item.kasus) {
        prepScore += 20;
        prepStreak++;
        updateBestStreak(prepStreak);
      } else {
        prepStreak = 0;
      }
    }
    const stage = document.getElementById('b1FwStage');
    if (stage) renderPrepMode(stage);
  }

  window.b1FwNextPrep = function () {
    prepCurrentIdx++;
    prepSelectedPrep = null;
    prepSelectedKasus = null;
    prepAnswered = false;
    const stage = document.getElementById('b1FwStage');
    if (stage) renderPrepMode(stage);
  };

  window.b1FwSetQuizDir = function (dir) {
    quizDirection = dir;
    quizCurrent = null;
    refreshCurrentTrainer();
  };

  window.b1FwAnswerQuiz = function (pickedId) {
    if (quizAnswered) return;
    quizAnswered = pickedId;
    speakClean(quizCurrent.term);
    if (pickedId === quizCurrent.id) {
      quizStreak++;
      quizXP += 15;
      updateBestStreak(quizStreak);
    } else {
      quizStreak = 0;
    }
    const stage = document.getElementById('b1FwStage');
    const words = getFilteredWords(getActiveSearchQuery());
    if (stage) renderQuizMode(stage, words, true);
  };

  window.b1FwNextQuiz = function () {
    quizCurrent = null;
    refreshCurrentTrainer();
  };

  /* ---------------- FULL-PAGE INITIALIZER (fiche-b1.html) ---------------- */

  function initFicheFullPage() {
    const appEl = document.getElementById('ficheFullPageApp');
    if (!appEl) return;

    // 1. Initialize Theme (shared with index.html)
    const applyPageTheme = (theme) => {
      if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
      document.querySelectorAll('.fiche-theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.ftheme === theme);
      });
    };

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    applyPageTheme(savedTheme);

    document.querySelectorAll('.fiche-theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.ftheme || 'light';
        localStorage.setItem(THEME_STORAGE_KEY, t);
        applyPageTheme(t);
      });
    });

    // 2. Initialize Font Scale (md / lg / xl)
    const mainEl = document.getElementById('fichePageMain');
    const applyFontScale = (scale) => {
      if (!mainEl) return;
      mainEl.classList.remove('font-scale-md', 'font-scale-lg', 'font-scale-xl');
      mainEl.classList.add(`font-scale-${scale}`);
      document.querySelectorAll('.fiche-size-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.fsize === scale);
      });
    };

    const savedScale = localStorage.getItem(FICHE_FONT_SCALE_KEY) || 'lg';
    applyFontScale(savedScale);

    document.querySelectorAll('.fiche-size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const s = btn.dataset.fsize || 'lg';
        localStorage.setItem(FICHE_FONT_SCALE_KEY, s);
        applyFontScale(s);
      });
    });

    // 3. Search Bar wiring
    const searchInput = document.getElementById('fichePageSearchInput');
    const clearBtn = document.getElementById('fichePageSearchClear');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        if (clearBtn) clearBtn.style.display = searchInput.value ? 'block' : 'none';
        renderFrequentWordsTrainer(searchInput.value);
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        clearBtn.style.display = 'none';
        renderFrequentWordsTrainer('');
      });
    }

    // 4. Keyboard shortcuts for 3D Flashcards
    document.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (activeMode === 'flashcards3d') {
        if (e.code === 'Space') {
          e.preventDefault();
          const card = document.getElementById('ficheActive3dCard');
          if (card) card.classList.toggle('flipped');
        } else if (e.code === 'ArrowRight') {
          e.preventDefault();
          window.b1FwNextFc3d();
        } else if (e.code === 'ArrowLeft') {
          e.preventDefault();
          window.b1FwPrevFc3d();
        }
      }
    });

    renderFrequentWordsTrainer('');
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFicheFullPage);
    } else {
      initFicheFullPage();
    }
  }

  window.b1FrequentWordsData = b1FrequentWordsData;
  window.renderFrequentWordsTrainer = renderFrequentWordsTrainer;
})();
