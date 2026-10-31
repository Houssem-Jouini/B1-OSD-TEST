/**
 * B1 EXAM VOCABULARY & RETENTION DATA (Wortschatz-Helfer & Vokabel-Trainer)
 * Goethe / ÖSD Zertifikat B1
 * Supports German, Arabic, and French with definitions, collocations, audio, and exam tips.
 */

const b1VocabData = [
  /* ---------------- TEIL 1: ALLTAG & VERKEHR ---------------- */
  {
    id: "v-t1-1",
    term: "merkwürdig",
    display: "merkwürdig (Adj.)",
    pos: "Adjektiv",
    teil: 1,
    level: "B1",
    forms: ["merkwürdig", "merkwürdige", "merkwürdigen"],
    defDe: "Ungewöhnlich, seltsam, überraschend; so, dass man sich darüber wundert.",
    defAr: "غريب، عجيب، غير مألوف يثير الدهشة.",
    defFr: "Étrange, curieux, bizarre, inhabituel.",
    example: "Dieser Tag fing wirklich sehr merkwürdig an: Beim Frühstück habe ich einen Unfall beobachtet!",
    tip: "Häufiges B1-Synonym für 'seltsam' oder 'komisch'."
  },
  {
    id: "v-t1-2",
    term: "brausen",
    display: "brausen (v.)",
    pos: "Verb",
    teil: 1,
    level: "B1",
    forms: ["brausen", "braust", "brauste"],
    defDe: "Mit hoher Geschwindigkeit und lautem Geräusch fahren oder fließen.",
    defAr: "يندفع بسرعة كبيرة مع صوت هدير صاخب (مثل السيارات السريعة).",
    defFr: "Rouler à toute allure avec fracas, foncer.",
    example: "Drei Stockwerke unter mir brausen morgens um halb neun die Autos vorbei.",
    tip: "Beschreibt im Lesetext den Verkehrslärm."
  },
  {
    id: "v-t1-3",
    term: "die Einbahnstraße",
    display: "die Einbahnstraße, -n",
    pos: "Nomen, f.",
    teil: 1,
    level: "B1",
    forms: ["Einbahnstraße", "Einbahnstraßen"],
    defDe: "Eine Straße, auf der Fahrzeuge nur in eine vorgegebene Richtung fahren dürfen.",
    defAr: "شارع ذو اتجاه واحد (ممنوع السير فيه بالاتجاه المعاكس).",
    defFr: "Une rue à sens unique.",
    example: "Obwohl es eine Einbahnstraße ist, fahren hier viele Autos.",
    tip: "Wichtiges Alltagswort für Verkehr und Wegbeschreibungen."
  },
  {
    id: "v-t1-4",
    term: "kreischen",
    display: "kreischen (v.)",
    pos: "Verb",
    teil: 1,
    level: "B1",
    forms: ["kreischen", "kreischten", "gekreischt"],
    defDe: "Einen lauten, hohen, schrillen Laut von sich geben (z. B. Menschen vor Schreck oder Autobremsen).",
    defAr: "يصرخ بصوت حاد ومفزع، أو يصدر صريراً عالياً (مثل مكابح السيارات).",
    defFr: "Pousser des cris perçants, crisser (pour des freins).",
    example: "Als plötzlich Bremsen kreischten, Leute schrien – und dann krachte es.",
    tip: "Kombination 'Bremsen kreischen' ist ein typischer B1-Ausdruck für Vollbremsung."
  },
  {
    id: "v-t1-5",
    term: "krachen",
    display: "krachen (v.)",
    pos: "Verb",
    teil: 1,
    level: "B1",
    forms: ["krachen", "krachte", "gekracht"],
    defDe: "Ein lautes, plötzliches Geräusch machen, wenn Gegenstände heftig zusammenstoßen.",
    defAr: "يصطدم بقوة وعنف مع صوت دوي وارتطام قوي.",
    defFr: "Faire un bruit fracassant, s'écraser, s'entrechoquer violemment.",
    example: "Dann krachte es: ein schwarzer Mercedes war ihm hinten hineingefahren.",
    tip: "Umgangssprachlich auch für: 'Es hat gekracht' = Es gab einen Unfall."
  },
  {
    id: "v-t1-6",
    term: "der Lieferwagen",
    display: "der Lieferwagen, -",
    pos: "Nomen, m.",
    teil: 1,
    level: "B1",
    forms: ["Lieferwagen", "Lieferwagens"],
    defDe: "Ein kleineres Nutzfahrzeug zum Transportieren und Ausliefern von Waren oder Paketen.",
    defAr: "شاحنة توصيل صغيرة مخصصة لتوزيع البضائع والطرود.",
    defFr: "Une camionnette de livraison, un fourgon.",
    example: "Ein kleiner Lieferwagen stand schräg auf der Straße.",
    tip: "Kompositum aus 'liefern' (ausliefern) + 'Wagen'."
  },
  {
    id: "v-t1-7",
    term: "schräg",
    display: "schräg (Adj.)",
    pos: "Adjektiv",
    teil: 1,
    level: "B1",
    forms: ["schräg", "schräge", "schrägem"],
    defDe: "Nicht gerade oder rechtwinklig, sondern diagonal oder zur Seite geneigt.",
    defAr: "مائل، غير مستقيم، بشكل مائل أو منحرف.",
    defFr: "En biais, oblique, incliné, de travers.",
    example: "Der Lieferwagen stand nach dem Stoß ganz schräg auf der Fahrbahn.",
    tip: "Gegenteil von 'gerade'."
  },
  {
    id: "v-t1-8",
    term: "der Gehweg",
    display: "der Gehweg, -e",
    pos: "Nomen, m.",
    teil: 1,
    level: "B1",
    forms: ["Gehweg", "Gehwege", "Gehwegen"],
    defDe: "Der erhöhte Weg für Fußgänger neben einer Straße; der Bürgersteig.",
    defAr: "رصيف المشاة المخصص للمارة بمحاذاة الشارع.",
    defFr: "Le trottoir (réservé aux piétons).",
    example: "Ein paar Autos fuhren über den Gehweg an den beiden Unfallautos vorbei.",
    tip: "Synonym zu 'der Bürgersteig' oder 'das Trottoir' (in der Schweiz)."
  },
  {
    id: "v-t1-9",
    term: "die Autoschlange",
    display: "die Autoschlange, -n",
    pos: "Nomen, f.",
    teil: 1,
    level: "B1",
    forms: ["Autoschlange", "Autoschlangen"],
    defDe: "Eine lange Reihe von stehenden oder nur langsam fahrenden Kraftfahrzeugen; Stau.",
    defAr: "طابور طويل من السيارات العالقة في ازدحام مروري.",
    defFr: "Une file ininterrompue de voitures, un embouteillage.",
    example: "Trotzdem bildete sich schnell eine lange Autoschlange.",
    tip: "Bildhafter B1-Ausdruck für Stau."
  },
  {
    id: "v-t1-10",
    term: "ohne Zweifel",
    display: "ohne Zweifel (Redewendung)",
    pos: "Redewendung",
    teil: 1,
    level: "B1",
    forms: ["ohne Zweifel"],
    defDe: "Ganz sicher, vollkommen gewiss; unbestreitbar.",
    defAr: "بلا شك، دون أدنى ريب، بكل تأكيد.",
    defFr: "Sans aucun doute, assurément, incontestablement.",
    example: "Er trug eine Uniform, ohne Zweifel ein Paketfahrer.",
    tip: "Prüfungsredemittel für Argumentation und Sicherheit."
  },
  {
    id: "v-t1-11",
    term: "Schuld haben",
    display: "Schuld haben (an + Dativ)",
    pos: "Nomen-Verb-Verbindung",
    teil: 1,
    level: "B1",
    forms: ["Schuld haben", "Schuld hatte", "Schuld hat"],
    defDe: "Für ein negatives Ereignis oder einen Schaden verantwortlich sein.",
    defAr: "يتحمل الذنب أو المسؤولية عن خطأ أو حادث معين.",
    defFr: "Être responsable, être coupable, avoir tort.",
    example: "Wir haben diskutiert, ob der Mercedesfahrer Schuld hatte oder nicht.",
    tip: "Sehr wichtiges B1-Muster: 'Schuld sein an' = 'Schuld haben an'."
  },
  {
    id: "v-t1-12",
    term: "in zweiter Reihe parken",
    display: "in zweiter Reihe parken",
    pos: "Redewendung",
    teil: 1,
    level: "B1",
    forms: ["zweiter Reihe geparkt", "in zweiter Reihe"],
    defDe: "Das Fahrzeug neben bereits am Rand geparkten Autos auf der Fahrbahn abstellen (oft verboten).",
    defAr: "الوقوف في صف ثانٍ (ركن السيارة بجانب سيارة أخرى مركونة أصلاً).",
    defFr: "Se garer en double file.",
    example: "Der Paketfahrer hatte allerdings in zweiter Reihe geparkt, das war nicht richtig.",
    tip: "Immer wieder Thema im Führerschein und B1-Alltag."
  },

  /* ---------------- TEIL 2: BERUF, REISE & WISSENSCHAFT ---------------- */
  {
    id: "v-t2-1",
    term: "die Aufenthaltsdauer",
    display: "die Aufenthaltsdauer (Sg.)",
    pos: "Nomen, f.",
    teil: 2,
    level: "B1",
    forms: ["Aufenthaltsdauer"],
    defDe: "Die Zeitspanne, während der jemand an einem bestimmten Ort bleibt.",
    defAr: "مدة الإقامة (الفترة الزمنية للبقاء في مكان أو بلد ما).",
    defFr: "La durée du séjour.",
    example: "Eine feste Aufenthaltsdauer ist für das Projekt nicht vorgeschrieben.",
    tip: "Kompositum aus Aufenthalt + Dauer. Häufig in Formularen und Verträgen."
  },
  {
    id: "v-t2-2",
    term: "die Witwe",
    display: "die Witwe, -n",
    pos: "Nomen, f.",
    teil: 2,
    level: "B1",
    forms: ["Witwe", "Witwen"],
    defDe: "Eine Frau, deren Ehemann gestorben ist und die nicht wieder geheiratet hat.",
    defAr: "الأرملة (المرأة التي توفي عنها زوجها ولم تتزوج ثانية).",
    defFr: "La veuve.",
    example: "Karin Dörner ist Witwe, 65 Jahre alt, und möchte als Aupair reisen.",
    tip: "Männliche Form: 'der Witwer'."
  },
  {
    id: "v-t2-3",
    term: "tätig sein",
    display: "tätig sein (als / in)",
    pos: "Nomen-Verb-Verbindung",
    teil: 2,
    level: "B1",
    forms: ["tätig war", "tätig sein", "tätig ist"],
    defDe: "Einen bestimmten Beruf ausüben; in einem Bereich arbeiten.",
    defAr: "يعمل أو ينشط في مجال مهني معين (يمارس مهنة).",
    defFr: "Exercer une profession, être actif en tant que.",
    example: "Bis vor einem Jahr war sie als Lehrerin an einem Gymnasium tätig.",
    tip: "Gehobeneres B1-Synonym für 'arbeiten als'."
  },
  {
    id: "v-t2-4",
    term: "befürchten",
    display: "befürchten (v.)",
    pos: "Verb",
    teil: 2,
    level: "B1",
    forms: ["befürchten", "befürchtet", "befürchtete"],
    defDe: "Mit Sorge erwarten; Angst haben, dass etwas Unangenehmes geschieht.",
    defAr: "يخشى أو يتخوف من وقوع أمر سيئ.",
    defFr: "Craindre, redouter.",
    example: "Die Mutter befürchtet, dass das Kind seine deutschen Sprachkenntnisse vergessen könnte.",
    tip: "Stärker und förmlicher als 'Angst haben'."
  },
  {
    id: "v-t2-5",
    term: "unerreichbar",
    display: "unerreichbar (Adj.)",
    pos: "Adjektiv",
    teil: 2,
    level: "B1",
    forms: ["unerreichbar", "unerreichbare", "unerreichbaren"],
    defDe: "Nicht zu erreichen, unmöglich zu bekommen oder zu bezahlen.",
    defAr: "بعيد المنال، مستحيل الوصول إليه أو تحقيقه.",
    defFr: "Inaccessible, hors de portée, inatteignable.",
    example: "Eine solche Luxuswohnung ist für eine kambodschanische Durchschnittsfamilie unerreichbar.",
    tip: "Gegenteil von 'erreichbar'."
  },
  {
    id: "v-t2-6",
    term: "sich im Klaren sein",
    display: "sich im Klaren sein (über + Akk.)",
    pos: "Redewendung",
    teil: 2,
    level: "B1",
    forms: ["im Klaren ist", "im Klaren sein"],
    defDe: "Etwas genau verstanden haben und die Konsequenzen kennen.",
    defAr: "يكون على بيّنة ووعي تام وإدراك كامل بالأمر ونتائجه.",
    defFr: "Être parfaitement conscient de, ne pas se faire d'illusions sur.",
    example: "Frau Dörner ist sich darüber im Klaren, dass sie nur wenige Wörter lernen kann.",
    tip: "Typische B1-Redewendung zur Selbsteinschätzung."
  },
  {
    id: "v-t2-7",
    term: "unbewusst",
    display: "unbewusst (Adj./Adv.)",
    pos: "Adjektiv / Adverb",
    teil: 2,
    level: "B1",
    forms: ["unbewusst", "unbewusste"],
    defDe: "Ohne dass man mit dem Verstand daran denkt; automatisch im Kopf ablaufend.",
    defAr: "لاواعٍ، لاإرادي، تلقائي دون تفكير مسبق.",
    defFr: "Inconscient, inconsciemment, involontaire.",
    example: "Wir verbinden symmetrische Gesichter unbewusst mit positiven Eigenschaften.",
    tip: "Gegenteil von 'bewusst'."
  },
  {
    id: "v-t2-8",
    term: "die Eigenschaft",
    display: "die Eigenschaft, -en",
    pos: "Nomen, f.",
    teil: 2,
    level: "B1",
    forms: ["Eigenschaft", "Eigenschaften"],
    defDe: "Ein Merkmal, eine Charakterqualität oder Besonderheit einer Person oder Sache.",
    defAr: "صفة، سمة، خاصية تميز الشخص أو الشيء.",
    defFr: "La qualité, la caractéristique, le trait de caractère.",
    example: "Freundlich und zuverlässig sind positive menschliche Eigenschaften.",
    tip: "Schlüsselwort für Personenbeschreibungen im B1-Examen."
  },
  {
    id: "v-t2-9",
    term: "nachweisen",
    display: "nachweisen (weist nach, wies nach, hat nachgewiesen)",
    pos: "Verb",
    teil: 2,
    level: "B1",
    forms: ["nachweisen", "nachzuweisen", "weist nach", "wiesen nach"],
    defDe: "Mit Fakten, Daten oder Beweisen zeigen, dass etwas tatsächlich wahr ist.",
    defAr: "يُثبت، يُبرهن بالأدلة والحجج القاطعة.",
    defFr: "Prouver, démontrer, apporter la preuve de.",
    example: "Die Forscher wollten den Einfluss von Attraktivität auf Schulnoten nachweisen.",
    tip: "Nomen dazu: 'der Nachweis' (Beweis)."
  },
  {
    id: "v-t2-10",
    term: "beurteilen",
    display: "beurteilen (v.)",
    pos: "Verb",
    teil: 2,
    level: "B1",
    forms: ["beurteilen", "beurteilt", "beurteilt werden"],
    defDe: "Über jemanden oder etwas ein fundiertes Urteil oder eine Note abgeben.",
    defAr: "يُقيّم، يُصدر حكماً أو علامة على أداء شخص ما.",
    defFr: "Juger, évaluer, porter une appréciation.",
    example: "Schüler mit gutem Aussehen werden oft besser beurteilt als andere.",
    tip: "Wichtig bei Noten und Mitarbeitergesprächen."
  },
  {
    id: "v-t2-11",
    term: "das Betriebsklima",
    display: "das Betriebsklima (Sg.)",
    pos: "Nomen, n.",
    teil: 2,
    level: "B1",
    forms: ["Betriebsklima", "Betriebsklimas"],
    defDe: "Die soziale Atmosphäre, die Stimmung und die Zusammenarbeit zwischen Kollegen im Unternehmen.",
    defAr: "مناخ العمل، الجو العام والعلاقات السائدة بين الموظفين في الشركة.",
    defFr: "L'ambiance de travail, le climat social au sein de l'entreprise.",
    example: "Manche befürchten, dass Eifersucht das Betriebsklima stören könnte.",
    tip: "Sehr häufiges B1-Wort zum Thema Berufswelt."
  },

  /* ---------------- TEIL 3: STELLENANZEIGEN & DIENSTLEISTUNGEN ---------------- */
  {
    id: "v-t3-1",
    term: "die Kinderbetreuung",
    display: "die Kinderbetreuung (Sg.)",
    pos: "Nomen, f.",
    teil: 3,
    level: "B1",
    forms: ["Kinderbetreuung"],
    defDe: "Das Versorgen, Beaufsichtigen und Begleiten von Kindern (z. B. durch Babysitter oder Kita).",
    defAr: "رعاية الأطفال والعناية بهم ومرافقتهم.",
    defFr: "La garde d'enfants, la prise en charge des enfants.",
    example: "Wir suchen eine freundliche Hilfe bei der täglichen Kinderbetreuung.",
    tip: "Zusammengesetzt aus Kind + Betreuung."
  },
  {
    id: "v-t3-2",
    term: "die Hilfskraft",
    display: "die Hilfskraft, -kräfte",
    pos: "Nomen, f.",
    teil: 3,
    level: "B1",
    forms: ["Hilfskraft", "Hilfskräfte"],
    defDe: "Eine Person, die einfache Zuarbeiten erledigt und Fachkräfte unterstützt.",
    defAr: "عامل مساعد، موظف معاون يقوم بمهام مساعدة دون اشتراط تخصص دقيق.",
    defFr: "L'auxiliaire, l'aide, l'ouvrier d'appoint.",
    example: "Im Logistikzentrum werden junge Hilfskräfte für den Postdienst gesucht.",
    tip: "Häufiger Begriff in Kleinanzeigen und Nebenjobs."
  },
  {
    id: "v-t3-3",
    term: "die Nachteule",
    display: "die Nachteule, -n",
    pos: "Nomen, f. (ugs.)",
    teil: 3,
    level: "B1",
    forms: ["Nachteule", "Nachteulen"],
    defDe: "Umgangssprachlich für einen Menschen, der abends lange aufbleibt und nachts besonders aktiv ist.",
    defAr: "شخص ليلي، سَهّار (يحب السهر والنشاط خلال الليل).",
    defFr: "Un couche-tard, un oiseau de nuit.",
    example: "Ein idealer Nebenjob für Nachteulen: Pakete sortieren von 22 bis 4 Uhr.",
    tip: "Gegenteil: 'die Lerche' / der Frühaufsteher."
  },
  {
    id: "v-t3-4",
    term: "auf Abruf bereitstehen",
    display: "auf Abruf bereitstehen",
    pos: "Redewendung",
    teil: 3,
    level: "B1",
    forms: ["auf Abruf", "auf Abruf bereitstehen"],
    defDe: "Bereit sein, zur Arbeit zu kommen, sobald die Firma kurzfristig anruft.",
    defAr: "يكون على أهبة الاستعداد للعمل بمجرد الاتصال به (نظام تحت الطلب).",
    defFr: "Être disponible sur appel, être d'astreinte.",
    example: "Der Notdienst stellt Mitarbeiter zusammen, die in festgelegten Zeiten auf Abruf bereitstehen.",
    tip: "Wichtiges Arbeitszeitmodell im deutschen Arbeitsrecht."
  },
  {
    id: "v-t3-5",
    term: "die Unkostenvergütung",
    display: "die Unkostenvergütung, -en",
    pos: "Nomen, f.",
    teil: 3,
    level: "B1",
    forms: ["Unkostenvergütung"],
    defDe: "Ein finanzieller Ersatz für Auslagen (Fahrtkosten, Verpflegung), oft bei Praktika oder Ehrenamt.",
    defAr: "تعويض النفقات أو المصاريف (مبلغ رمزي لتغطية تكاليف التنقل والطعام).",
    defFr: "Le défraiement, l'indemnité pour frais engagés.",
    example: "Für das dreimonatige Praktikum gibt es eine kleine Unkostenvergütung.",
    tip: "Kein volles Gehalt, sondern eine Auslagenerstattung."
  },
  {
    id: "v-t3-6",
    term: "fließend sprechen",
    display: "fließend sprechen",
    pos: "Redewendung",
    teil: 3,
    level: "B1",
    forms: ["fließend", "fließend sprechen", "spricht fließend"],
    defDe: "Eine Fremdsprache mühelos, schnell und ohne langes Nachdenken beherrschen.",
    defAr: "يتحدث اللغة بطلاقة وانسيابية تامة دون تردد.",
    defFr: "Parler couramment une langue.",
    example: "Sie spricht fließend Deutsch, Russisch und Italienisch.",
    tip: "Standardfloskel in B1-Lebensläufen und Bewerbungen."
  },

  /* ---------------- TEIL 4: RENTENALTER & GENERATIONEN ---------------- */
  {
    id: "v-t4-1",
    term: "die Rente beanspruchen",
    display: "die Rente beanspruchen",
    pos: "Nomen-Verb-Verbindung",
    teil: 4,
    level: "B1",
    forms: ["Rente beanspruchen", "beansprucht"],
    defDe: "Offiziell sein Recht auf Altersrente einfordern und in den Ruhestand gehen.",
    defAr: "يطالب بمعاش التقاعد القانوني ويتقاعد عن العمل.",
    defFr: "Faire valoir ses droits à la retraite.",
    example: "Wenn alte Menschen keine Rente beanspruchen, bleiben Arbeitsplätze besetzt.",
    tip: "Nomen-Verb-Verbindung für 'in Rente gehen'."
  },
  {
    id: "v-t4-2",
    term: "der Enthusiasmus",
    display: "der Enthusiasmus (Sg.)",
    pos: "Nomen, m.",
    teil: 4,
    level: "B1",
    forms: ["Enthusiasmus"],
    defDe: "Große Begeisterung, Leidenschaft und Freude an einer Aufgabe.",
    defAr: "الحماس الشديد، الشغف، الاندفاع الإيجابي نحو العمل.",
    defFr: "L'enthousiasme, la ferveur.",
    example: "Wir brauchen in den Betrieben junge Leute und frischen Enthusiasmus.",
    tip: "Synonym zu 'die Begeisterung'."
  },
  {
    id: "v-t4-3",
    term: "sich zunutze machen",
    display: "sich (Dat.) etwas zunutze machen",
    pos: "Redewendung",
    teil: 4,
    level: "B1",
    forms: ["zunutze machen", "zunutze"],
    defDe: "Einen Vorteil oder die Erfahrung aus einer Sache für die eigenen Ziele gebrauchen.",
    defAr: "يستفيد من الشيء ويوظفه لصالحه ويستغل مزاياه.",
    defFr: "Tirer profit de, mettre à profit, exploiter avantageusement.",
    example: "Ältere Menschen haben große Erfahrung, die sollten wir uns zunutze machen.",
    tip: "Klassisches B1-Redemittel für Diskussionen."
  },
  {
    id: "v-t4-4",
    term: "die Leistungsfähigkeit",
    display: "die Leistungsfähigkeit (Sg.)",
    pos: "Nomen, f.",
    teil: 4,
    level: "B1",
    forms: ["Leistungsfähigkeit"],
    defDe: "Die Fähigkeit, körperlich oder geistig viel Arbeit in guter Qualität zu leisten.",
    defAr: "القدرة على الأداء والإنتاجية والكفاءة في العمل.",
    defFr: "La capacité de travail, la performance, l'efficacité.",
    example: "Viele befürchten, dass mit sechzig die geistige Leistungsfähigkeit nachlässt.",
    tip: "Zusammengesetzt aus Leistung + Fähigkeit."
  },
  {
    id: "v-t4-5",
    term: "die Vergesslichkeit",
    display: "die Vergesslichkeit (Sg.)",
    pos: "Nomen, f.",
    teil: 4,
    level: "B1",
    forms: ["Vergesslichkeit"],
    defDe: "Die Eigenschaft, sich Dinge schwer merken zu können oder schnell zu vergessen.",
    defAr: "النسيان، كثرة النسيان وضعف الذاكرة.",
    defFr: "La tendance à l'oubli, l'étourderie.",
    example: "Mit zunehmendem Alter klagen manche über leichte Vergesslichkeit.",
    tip: "Vom Adjektiv 'vergesslich'."
  },
  {
    id: "v-t4-6",
    term: "sich aneignen",
    display: "sich (Dat.) Wissen aneignen",
    pos: "Verb",
    teil: 4,
    level: "B1",
    forms: ["anzueignen", "eignen sich an", "angeeignet"],
    defDe: "Etwas durch Lernen oder Üben selbst erlernen und verinnerlichen.",
    defAr: "يكتسب مهارة أو علماً جديداً ويستوعبه عن طريق التعلم والممارسة.",
    defFr: "Acquérir des connaissances, s'approprier une compétence.",
    example: "Manche ältere Personen haben Mühe, sich neue Technologien anzueignen.",
    tip: "Reflexives Verb im Dativ: 'Ich eigne mir Kenntnisse an'."
  },
  {
    id: "v-t4-7",
    term: "schuften",
    display: "schuften (v. ugs.)",
    pos: "Verb",
    teil: 4,
    level: "B1",
    forms: ["schuften", "schuftet", "geschuftet"],
    defDe: "Körperlich sehr schwer und anstrengend arbeiten; hart arbeiten.",
    defAr: "يشقى، يكدح، يعمل بجهد شاق ومضنٍ (خاصة في الأعمال اليدوية).",
    defFr: "Trimer, cravacher, travailler d'arrache-pied.",
    example: "Wer vierzig Jahre auf dem Bau schuftet, ist im Alter oft körperlich krank.",
    tip: "Umgangssprachlich, aber in Lesetexten und Leserbriefen sehr geläufig."
  },
  {
    id: "v-t4-8",
    term: "anheben",
    display: "anheben (hebt an, hob an, hat angehoben)",
    pos: "Verb",
    teil: 4,
    level: "B1",
    forms: ["anheben", "anzuheben", "hebt an"],
    defDe: "Einen Betrag, ein Alter oder eine Grenze nach oben setzen; erhöhen.",
    defAr: "يرفع، يزيد من مقدار أو حد معين (مثل رفع سن التقاعد أو الأسعار).",
    defFr: "Relever, augmenter, hausser (l'âge de départ à la retraite).",
    example: "Man könnte das Rentenalter ruhig anheben für alle, die noch fit sind.",
    tip: "Synonym zu 'erhöhen'."
  },
  {
    id: "v-t4-9",
    term: "der Staatshaushalt",
    display: "der Staatshaushalt, -e",
    pos: "Nomen, m.",
    teil: 4,
    level: "B1",
    forms: ["Staatshaushalt", "Staatshaushalts"],
    defDe: "Der jährliche Gesamtfinanzplan eines Landes (Einnahmen und Ausgaben des Staates).",
    defAr: "ميزانية الدولة العامة (خطة الإيرادات والمصروفات الحكومية).",
    defFr: "Le budget de l'État.",
    example: "Das spätere Rentenalter wäre für den Staatshaushalt eine große Entlastung.",
    tip: "Zusammengesetzt aus Staat + Haushalt (Budget)."
  },
  {
    id: "v-t4-10",
    term: "unausweichlich",
    display: "unausweichlich (Adj.)",
    pos: "Adjektiv",
    teil: 4,
    level: "B1",
    forms: ["unausweichlich", "unausweichliche"],
    defDe: "So, dass man es nicht verhindern oder ihm nicht aus dem Weg gehen kann; unvermeidbar.",
    defAr: "حتمي، لا مناص ولا مفر منه، لا يمكن تجنبه.",
    defFr: "Inévitable, inéluctable.",
    example: "Die Reform des Rentensystems ist in Zukunft unausweichlich.",
    tip: "Prüfungswort für 'unvermeidlich'."
  },

  /* ---------------- TEIL 5: HAUSORDNUNG & VORSCHRIFTEN ---------------- */
  {
    id: "v-t5-1",
    term: "sich erholen",
    display: "sich erholen (v.)",
    pos: "Verb",
    teil: 5,
    level: "B1",
    forms: ["erholen", "erholt", "erholte"],
    defDe: "Nach Anstrengung oder Krankheit neue Energie sammeln und sich entspannen.",
    defAr: "يستريح، يستجم، يستعيد طاقته وعافيته.",
    defFr: "Se reposer, récupérer, se détendre.",
    example: "In unserer Wohnanlage leben Menschen, die sich hier erholen wollen.",
    tip: "Nomen: 'die Erholung'."
  },
  {
    id: "v-t5-2",
    term: "strikt beachten",
    display: "strikt beachten",
    pos: "Kollokation",
    teil: 5,
    level: "B1",
    forms: ["strikt beachten", "beachten"],
    defDe: "Regeln oder Gesetze ganz genau, streng und ausnahmslos befolgen.",
    defAr: "يلتزم بالقواعد بدقة متناهية وبشكل صارم دون تهاون.",
    defFr: "Respecter strictement, observer à la lettre.",
    example: "Wir bitten Sie deshalb, die Hausordnung strikt zu beachten.",
    tip: "Typische juristische Wendung in Hausordnungen und Verträgen."
  },
  {
    id: "v-t5-3",
    term: "unterlassen",
    display: "unterlassen (unterlässt, unterließ, hat unterlassen)",
    pos: "Verb",
    teil: 5,
    level: "B1",
    forms: ["unterlassen", "zu unterlassen"],
    defDe: "Etwas absichtlich nicht tun; mit einer störenden Handlung aufhören.",
    defAr: "يمتنع عن، يكف عن فعل شيء، يتجنب القيام به.",
    defFr: "S'abstenir de faire, renoncer à, cesser de.",
    example: "Laute Musik und Lärm im Hausflur sind grundsätzlich zu unterlassen.",
    tip: "Passivkonstruktion 'ist zu unterlassen' = 'darf man nicht tun'."
  },
  {
    id: "v-t5-4",
    term: "beschädigen",
    display: "beschädigen (v.)",
    pos: "Verb",
    teil: 5,
    level: "B1",
    forms: ["beschädigen", "beschädigt", "Beschädigung"],
    defDe: "Einen Gegenstand kaputt machen oder ihm einen Schaden zufügen.",
    defAr: "يُتلف، يُلحق ضرراً أو عطلاً بالشيء.",
    defFr: "Endommager, abîmer, détériorer.",
    example: "Billige Nachschlüssel können die Schlösser der Haustür beschädigen.",
    tip: "Nomen: 'die Beschädigung'."
  },
  {
    id: "v-t5-5",
    term: "der Hausmeister",
    display: "der Hausmeister, -",
    pos: "Nomen, m.",
    teil: 5,
    level: "B1",
    forms: ["Hausmeister", "Hausmeisters"],
    defDe: "Eine angestellte Person, die sich um die Wartung, Sauberkeit und Reparaturen in einem Gebäude kümmert.",
    defAr: "مسؤول صيانة المبنى، حارس العقار والمشرف الفني عليه.",
    defFr: "Le concierge, le gardien d'immeuble.",
    example: "Wenn Sie einen zweiten Schlüssel brauchen, wenden Sie sich bitte an den Hausmeister.",
    tip: "Wichtigste Kontaktperson bei Mietwohnungen in Deutschland/Österreich."
  },
  {
    id: "v-t5-6",
    term: "ausreichend",
    display: "ausreichend (Adj./Adv.)",
    pos: "Adjektiv",
    teil: 5,
    level: "B1",
    forms: ["ausreichend", "ausreichende"],
    defDe: "In genügender Menge vorhanden; genug.",
    defAr: "كافٍ، وافٍ، متوفر بكمية تلبي الحاجة.",
    defFr: "Suffisant, en quantité suffisante.",
    example: "In den Kellerräumen ist für Fahrräder ausreichend Platz vorhanden.",
    tip: "Synonym zu 'genug'."
  },
  {
    id: "v-t5-7",
    term: "gestatten",
    display: "gestatten (v.)",
    pos: "Verb",
    teil: 5,
    level: "B1",
    forms: ["gestatten", "gestattet", "nicht gestattet"],
    defDe: "Etwas offiziell erlauben; die Erlaubnis geben.",
    defAr: "يسمح بـ، يأذن، يُجيز رسمياً.",
    defFr: "Autoriser, permettre.",
    example: "Das Halten von Haustieren ist in den Wohnungen grundsätzlich nicht gestattet.",
    tip: "Formelle Formulierung für 'erlauben'. 'Nicht gestattet' = verboten."
  },
  {
    id: "v-t5-8",
    term: "zur Verfügung stehen",
    display: "zur Verfügung stehen",
    pos: "Nomen-Verb-Verbindung",
    teil: 5,
    level: "B1",
    forms: ["zur Verfügung stehen", "steht zur Verfügung", "stehen zur Verfügung"],
    defDe: "Bereit sein, um von jemandem genutzt zu werden; vorhanden sein.",
    defAr: "يكون متاحاً وموضوعاً تحت تصرف شخص ما للاستخدام.",
    defFr: "Être à disposition, être disponible.",
    example: "Auf der Liegewiese hinter dem Haus steht ein Grillplatz zur Verfügung.",
    tip: "Extrem wichtige B1-Nomen-Verb-Verbindung."
  },

  /* ---------------- ALLGEMEINE B1-PRÜFUNGSREDEMITTEL & DISKUSSION ---------------- */
  {
    id: "v-gen-1",
    term: "der Zusammenhang",
    display: "der Zusammenhang, -hänge",
    pos: "Nomen, m.",
    teil: 0,
    level: "B1",
    forms: ["Zusammenhang", "Zusammenhänge"],
    defDe: "Die Verbindung oder Beziehung zwischen zwei oder mehr Tatsachen.",
    defAr: "العلاقة، الارتباط الوثيق، السياق الذي يربط بين أمرين.",
    defFr: "Le rapport, le lien, le contexte.",
    example: "Gibt es einen direkten Zusammenhang zwischen Aussehen und Noten?",
    tip: "In Prüfungsfragen: 'in diesem Zusammenhang'."
  },
  {
    id: "v-gen-2",
    term: "die Auswirkung",
    display: "die Auswirkung, -en",
    pos: "Nomen, f.",
    teil: 0,
    level: "B1",
    forms: ["Auswirkung", "Auswirkungen"],
    defDe: "Die Folge oder das Ergebnis, das ein Geschehen auf etwas anderes hat.",
    defAr: "الأثر، النتيجة، التداعيات والانعكاسات المترتبة على أمر ما.",
    defFr: "L'impact, la répercussion, la conséquence.",
    example: "Welche Auswirkungen hat die Erhöhung des Rentenalters auf junge Berufstätige?",
    tip: "Häufig bei Themen wie Umwelt, Gesundheit und Wirtschaft."
  },
  {
    id: "v-gen-3",
    term: "überzeugt sein",
    display: "überzeugt sein (von + Dat.)",
    pos: "Kollokation",
    teil: 0,
    level: "B1",
    forms: ["überzeugt sein", "überzeugt bin"],
    defDe: "Sich ganz sicher sein und keinen Zweifel an einer Meinung haben.",
    defAr: "يكون مقتنعاً تمام الاقتناع، واثقاً لا يساوره شك.",
    defFr: "Être convaincu de, être persuadé que.",
    example: "Ich bin fest davon überzeugt, dass diese Maßnahme notwendig ist.",
    tip: "Muster-Redemittel für Schreiben Aufgabe 2 und Sprechen Teil 3."
  },
  {
    id: "v-gen-4",
    term: "zustimmen",
    display: "zustimmen (stimmt zu, stimmte zu, hat zugestimmt)",
    pos: "Verb",
    teil: 0,
    level: "B1",
    forms: ["zustimmen", "stimme zu", "zugestimmt"],
    defDe: "Die gleiche Meinung wie ein anderer haben; einverstanden sein.",
    defAr: "يوافق على الرأي، يؤيد وجهة نظر شخص آخر.",
    defFr: "Être d'accord, approuver, acquiescer.",
    example: "Diesem Vorschlag kann ich aus eigener Erfahrung nur zustimmen.",
    tip: "Wichtig bei Meinungsäußerungen im B1-Examen."
  },
  {
    id: "v-gen-5",
    term: "widersprechen",
    display: "widersprechen (widerspricht, widersprach, hat widersprochen)",
    pos: "Verb",
    teil: 0,
    level: "B1",
    forms: ["widersprechen", "widerspricht", "widersprochen"],
    defDe: "Eine gegenteilige Meinung äußern; einer Aussage nicht zustimmen.",
    defAr: "يُعارض، يخالف في الرأي، يناقض القول.",
    defFr: "Contredire, s'opposer à, contester.",
    example: "Ich muss dieser Behauptung ganz entschieden widersprechen.",
    tip: "Höflich die Gegenposition vertreten."
  }
,

  /* ---------------- SO GEHTS NOCH BESSER B1 (MODELLTESTS 1, 2, 3) ---------------- */
  {
    "id": "v-m1-t1-1",
    "testId": "modellsatz-7",
    "term": "das duale System",
    "display": "das duale System",
    "pos": "Nomen, n.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "duale System",
      "dualen System",
      "dualen Systems"
    ],
    "defDe": "Berufsausbildungssystem mit paralleler Theorie in der Berufsschule und Praxis im Betrieb.",
    "defAr": "النظام التعليمي المزدوج (دراسة نظرية في معهد مهني وتدريب عملي في مكان العمل).",
    "defFr": "Système de formation en alternance (cours théoriques et pratique en entreprise).",
    "example": "Die Ausbildung zur Bürokauffrau basiert auf dem dualen System.",
    "tip": "Zentraler B1-Begriff für Ausbildung und Arbeitsmarkt in Deutschland."
  },
  {
    "id": "v-m1-t1-2",
    "testId": "modellsatz-7",
    "term": "der Glückspilz",
    "display": "der Glückspilz, -e",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Glückspilz",
      "Glückspilze"
    ],
    "defDe": "Umgangssprachlich für eine Person, die immer wieder großes Glück hat.",
    "defAr": "شخص محظوظ جدًا تبتسم له الظروف دائمًا.",
    "defFr": "Un petit veinard, une personne particulièrement chanceuse.",
    "example": "Du bist echt ein Glückspilz, dass du sofort eine Ausbildungsstelle gefunden hast!",
    "tip": "Gegenteil von 'Pechvogel'."
  },
  {
    "id": "v-m1-t1-3",
    "testId": "modellsatz-7",
    "term": "der Fußmarsch",
    "display": "der Fußmarsch, -¨e",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Fußmarsch",
      "Fußmärsche",
      "Fußmarsches"
    ],
    "defDe": "Ein langer, anstrengender Weg, den man zu Fuß zurücklegt.",
    "defAr": "مسيرة طويلة أو مشي شاق على الأقدام.",
    "defFr": "Une longue marche à pied.",
    "example": "Nach einem halbstündigen Fußmarsch durch die Stadt erreichte ich das Büro.",
    "tip": "Wird oft für Wege ohne Verkehrsmittel verwendet."
  },
  {
    "id": "v-m1-t1-4",
    "testId": "modellsatz-7",
    "term": "der Kompass",
    "display": "der Kompass, -e",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Kompass",
      "Kompasse"
    ],
    "defDe": "Gerät zur Orientierung, dessen Magnetnadel nach Norden zeigt.",
    "defAr": "بوصلة لتحديد الاتجاهات الجغرافية.",
    "defFr": "Une boussole.",
    "example": "Um sich im riesigen Betriebsgelände zurechtzufinden, braucht man fast einen Kompass.",
    "tip": "Metaphorisch: Orientierungshilfe im Beruf."
  },
  {
    "id": "v-m1-t1-5",
    "testId": "modellsatz-7",
    "term": "die Buchhaltung",
    "display": "die Buchhaltung, -en",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Buchhaltung",
      "Buchhaltungen"
    ],
    "defDe": "Abteilung eines Betriebs, die alle Einnahmen, Ausgaben und Rechnungen dokumentiert.",
    "defAr": "قسم المحاسبة وضبط الفواتير والمعاملات المالية في الشركة.",
    "defFr": "La comptabilité d'une entreprise.",
    "example": "In den ersten Monaten der Ausbildung lernt man die Arbeit in der Buchhaltung kennen.",
    "tip": "Wichtiges Berufsfeld im kaufmännischen Bereich."
  },
  {
    "id": "v-m1-t1-6",
    "testId": "modellsatz-7",
    "term": "die Butterbrezel",
    "display": "die Butterbrezel, -n",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Butterbrezel",
      "Butterbrezeln"
    ],
    "defDe": "Typisches deutsches Laugengebäck, das mit Butter bestrichen ist.",
    "defAr": "خبز البريتزل الألماني التقليدي المدهون بالزبدة (وجبة خفيفة شائعة في الاستراحة).",
    "defFr": "Bretzel au beurre, en-cas typique en Allemagne.",
    "example": "In der Frühstückspause essen viele Kollegen eine frische Butterbrezel.",
    "tip": "Typischer Snack im Büroalltag."
  },
  {
    "id": "v-m1-t1-7",
    "testId": "modellsatz-7",
    "term": "Löcher in den Bauch fragen",
    "display": "Löcher in den Bauch fragen",
    "pos": "Redewendung",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Löcher in den Bauch fragen",
      "fragte Löcher in den Bauch"
    ],
    "defDe": "Jemanden ununterbrochen mit vielen neugierigen Fragen löchern.",
    "defAr": "يمطر شخصًا بوابل من الأسئلة الملحة والفضولية.",
    "defFr": "Poser mille questions à quelqu'un, harceler de questions.",
    "example": "Die neue Auszubildende war so wissbegierig, dass sie dem Chef Löcher in den Bauch fragte.",
    "tip": "Sehr beliebte deutsche Redewendung in B1-Prüfungstexten."
  },
  {
    "id": "v-m1-t2-1",
    "testId": "modellsatz-7",
    "term": "die Anschaffung",
    "display": "die Anschaffung, -en",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Anschaffung",
      "Anschaffungen"
    ],
    "defDe": "Der Kauf oder Erwerb von etwas Wertvollem oder Nützlichem.",
    "defAr": "شراء أو اقتناء شيء جديد (مثل حيوان أليف أو جهاز).",
    "defFr": "L'acquisition, l'achat d'un bien.",
    "example": "Vor der Anschaffung eines Haustiers muss die ganze Familie zustimmen.",
    "tip": "Verb: 'anschaffen' (kaufen/besorgen)."
  },
  {
    "id": "v-m1-t2-2",
    "testId": "modellsatz-7",
    "term": "die Lebenserwartung",
    "display": "die Lebenserwartung, -en",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Lebenserwartung",
      "Lebenserwartungen"
    ],
    "defDe": "Die Zeitspanne, die ein Mensch oder Tier voraussichtlich leben wird.",
    "defAr": "متوسط العمر المتوقع للكائن الحي.",
    "defFr": "L'espérance de vie.",
    "example": "Manche Haustiere haben eine hohe Lebenserwartung von über 15 Jahren.",
    "tip": "Kompositum aus Leben + Erwartung."
  },
  {
    "id": "v-m1-t2-3",
    "testId": "modellsatz-7",
    "term": "sanft",
    "display": "sanft (Adj.)",
    "pos": "Adjektiv",
    "teil": 2,
    "level": "B1",
    "forms": [
      "sanft",
      "sanfte",
      "sanften",
      "sanfter"
    ],
    "defDe": "Mild, behutsam, ohne Härte oder Nebenwirkungen.",
    "defAr": "لطيف، خفيف، غير ضار ولا يسبب ألمًا (مثل العلاج اللطيف).",
    "defFr": "Doux, sans violence, sans agressivité.",
    "example": "Viele Patienten bevorzugen sanfte Heilmethoden gegenüber chemischen Medikamenten.",
    "tip": "Wird oft in 'sanfte Medizin' (Naturheilkunde) genutzt."
  },
  {
    "id": "v-m1-t2-4",
    "testId": "modellsatz-7",
    "term": "fragwürdig",
    "display": "fragwürdig (Adj.)",
    "pos": "Adjektiv",
    "teil": 2,
    "level": "B1",
    "forms": [
      "fragwürdig",
      "fragwürdige",
      "fragwürdigen"
    ],
    "defDe": "Zweifelhaft, bedenklich, wissenschaftlich nicht sicher bewiesen.",
    "defAr": "مشكوك في صحته، مثير للتساؤل والشبهات.",
    "defFr": "Douteux, discutable, contestable.",
    "example": "Einige dieser Methoden sind wissenschaftlich höchst fragwürdig.",
    "tip": "Synonym für 'zweifelhaft' oder 'umstritten'."
  },
  {
    "id": "v-m1-t2-5",
    "testId": "modellsatz-7",
    "term": "der Placebo-Effekt",
    "display": "der Placebo-Effekt, -e",
    "pos": "Nomen, m.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Placebo-Effekt",
      "Placebo-Effekts",
      "Placeboeffekt"
    ],
    "defDe": "Positive gesundheitliche Wirkung allein durch den Glauben an ein wirkungsloses Scheinmedikament.",
    "defAr": "تأثير الدواء الوهمي (التحسن النفسي والجسدي الناتج عن الإيمان بفاعلية العلاج).",
    "defFr": "L'effet placebo.",
    "example": "Kritiker führen den Heilerfolg auf den Placebo-Effekt zurück.",
    "tip": "Wichtiger Begriff in Gesundheitstexten."
  },
  {
    "id": "v-m1-t2-6",
    "testId": "modellsatz-7",
    "term": "der Heilpraktiker",
    "display": "der Heilpraktiker, -",
    "pos": "Nomen, m.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Heilpraktiker",
      "Heilpraktikern",
      "Heilpraktikerin"
    ],
    "defDe": "Person mit staatlicher Erlaubnis, Krankheiten ohne Medizinstudium mit Naturheilkunde zu behandeln.",
    "defAr": "المعالج بالطب البديل أو الطبيعي المرخص له رسميًا.",
    "defFr": "Praticien de médecines alternatives ou naturelles non-médecin agréé.",
    "example": "Immer mehr Kranke suchen Rat bei einem Heilpraktiker.",
    "tip": "Spezifisch deutsches Berufsbild."
  },
  {
    "id": "v-m1-t2-7",
    "testId": "modellsatz-7",
    "term": "auf den Punkt bringen",
    "display": "etwas auf den Punkt bringen",
    "pos": "Redewendung",
    "teil": 2,
    "level": "B1",
    "forms": [
      "auf den Punkt bringen",
      "auf den Punkt gebracht"
    ],
    "defDe": "Eine komplizierte Tatsache kurz, treffend und präzise formulieren.",
    "defAr": "يلخص جوهر المسألة بإيجاز ودقة بالغة.",
    "defFr": "Aller droit au but, résumer précisément l'essentiel.",
    "example": "Der Arzt brachte das Problem mit wenigen Worten auf den Punkt.",
    "tip": "Häufige Wendung für klare Zusammenfassungen."
  },
  {
    "id": "v-m1-t2-8",
    "testId": "modellsatz-7",
    "term": "befördern",
    "display": "befördern (v.)",
    "pos": "Verb",
    "teil": 2,
    "level": "B1",
    "forms": [
      "befördern",
      "befördert",
      "beförderte"
    ],
    "defDe": "Personen oder Güter mit einem Fahrzeug von A nach B transportieren.",
    "defAr": "ينقل الركاب أو البضائع من مكان لآخر.",
    "defFr": "Transporter, acheminer des passagers ou des marchandises.",
    "example": "Die neuen Fernbusse befördern täglich tausende Reisende.",
    "tip": "Zweites Bedeutungsfeld: im Beruf aufsteigen (befördert werden)."
  },
  {
    "id": "v-m1-t2-9",
    "testId": "modellsatz-7",
    "term": "rentabel",
    "display": "rentabel (Adj.)",
    "pos": "Adjektiv",
    "teil": 2,
    "level": "B1",
    "forms": [
      "rentabel",
      "rentable",
      "rentablen"
    ],
    "defDe": "Finanziell gewinnbringend, lohnend; so, dass sich die Kosten auszahlen.",
    "defAr": "مربح، مجدٍ اقتصاديًا ويدر عائداً مالياً جيداً.",
    "defFr": "Rentable, financièrement avantageux.",
    "example": "Linienverbindungen zwischen Kleinstädten sind oft nicht rentabel.",
    "tip": "Gegenteil: unrentabel / verlustreich."
  },
  {
    "id": "v-m1-t2-10",
    "testId": "modellsatz-7",
    "term": "das Monopol",
    "display": "das Monopol, -e",
    "pos": "Nomen, n.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Monopol",
      "Monopole",
      "Monopols"
    ],
    "defDe": "Marktbeherrschende Stellung ohne Wettbewerber.",
    "defAr": "احتكار السوق من طرف جهة واحدة دون منافسين.",
    "defFr": "Le monopole commercial.",
    "example": "Früher hatte die Bahn ein staatliches Monopol im Fernverkehr.",
    "tip": "Wichtig in Wirtschaftstexten."
  },
  {
    "id": "v-m1-t4-1",
    "testId": "modellsatz-7",
    "term": "der Wissensschatz",
    "display": "der Wissensschatz, -¨e",
    "pos": "Nomen, m.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Wissensschatz",
      "Wissensschatzes"
    ],
    "defDe": "Große Menge wertvoller Kenntnisse und gesammelter Erfahrungen.",
    "defAr": "كنز وخزينة المعرفة والخبرات القيمة المتراكمة.",
    "defFr": "Le trésor de connaissances, bagage intellectuel précieux.",
    "example": "Ältere Menschen verfügen über einen enormen Wissensschatz.",
    "tip": "Metapher für lebenslange Bildung."
  },
  {
    "id": "v-m1-t5-1",
    "testId": "modellsatz-7",
    "term": "der Schienenverkehr",
    "display": "der Schienenverkehr (nur Sg.)",
    "pos": "Nomen, m.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Schienenverkehr",
      "Schienenverkehrs"
    ],
    "defDe": "Gesamtheit aller Verkehrsmittel, die auf Gleisen fahren (Züge, Trams).",
    "defAr": "حركة النقل عبر السكك الحديدية والقطارات.",
    "defFr": "Le transport ferroviaire.",
    "example": "Auf dem Museumsgelände hat der Schienenverkehr stets Vorrang.",
    "tip": "Gegenstück zum Straßenverkehr."
  },
  {
    "id": "v-m1-t5-2",
    "testId": "modellsatz-7",
    "term": "der Vorrang",
    "display": "der Vorrang (nur Sg.)",
    "pos": "Nomen, m.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Vorrang",
      "Vorrangs"
    ],
    "defDe": "Die Priorität oder das Recht, zuerst zu fahren oder bedient zu werden.",
    "defAr": "الأولوية وأسبقية المرور أو الإجراء.",
    "defFr": "La priorité absolue, préséance.",
    "example": "Fußgänger und Lokomotiven haben in bestimmten Zonen Vorrang.",
    "tip": "Nomen zu 'vorrangig' (prioritär)."
  },
  {
    "id": "v-m1-t5-3",
    "testId": "modellsatz-7",
    "term": "die Haftung",
    "display": "die Haftung (nur Sg.)",
    "pos": "Nomen, f.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Haftung"
    ],
    "defDe": "Rechtliche Verpflichtung, für entstandene Schäden aufzukommen.",
    "defAr": "المسؤولية القانونية والمالية عن التعويض والأضرار.",
    "defFr": "La responsabilité civile/légale.",
    "example": "Der Betreiber übernimmt keine Haftung für beschmutzte Kleidung.",
    "tip": "Typische Klausel in Park- und Hausordnungen."
  },
  {
    "id": "v-m2-t1-1",
    "testId": "modellsatz-8",
    "term": "die Entschleunigung",
    "display": "die Entschleunigung, -en",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Entschleunigung",
      "Entschleunigungen"
    ],
    "defDe": "Bewusste Verlangsamung des Lebensrhythmus zur Vermeidung von Hektik und Stress.",
    "defAr": "التمهل وإبطاء وتيرة الحياة السريعة للتخلص من التوتر واللهاث اليومي.",
    "defFr": "La décélération, ralentissement volontaire du rythme de vie.",
    "example": "Der Urlaub auf dem Land sorgt für eine echte Entschleunigung.",
    "tip": "Antonym zu 'Beschleunigung'."
  },
  {
    "id": "v-m2-t1-2",
    "testId": "modellsatz-8",
    "term": "die Metropole",
    "display": "die Metropole, -n",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Metropole",
      "Metropolen"
    ],
    "defDe": "Große, bedeutende Weltstadt mit regem wirtschaftlichem und kulturellem Leben.",
    "defAr": "مدينة كبرى أو عاصمة اقتصادية وثقافية عالمية.",
    "defFr": "Une métropole, grande agglomération.",
    "example": "Nach Jahren in der Metropole Berlin sehnte er sich nach der Ruhe des Schwarzwalds.",
    "tip": "Synonym zu 'Großstadt' oder 'Weltstadt'."
  },
  {
    "id": "v-m2-t1-3",
    "testId": "modellsatz-8",
    "term": "idyllisch",
    "display": "idyllisch (Adj.)",
    "pos": "Adjektiv",
    "teil": 1,
    "level": "B1",
    "forms": [
      "idyllisch",
      "idyllische",
      "idyllischen",
      "idyllischer"
    ],
    "defDe": "Malerisch, friedlich, ländlich und harmonisch ruhig.",
    "defAr": "شاعري، هادئ ومبهج يبعث على الراحة والسكينة.",
    "defFr": "Idyllique, pittoresque et paisible.",
    "example": "Der Zug fuhr an idyllischen Dörfern und saftigen Wiesen vorbei.",
    "tip": "Wird oft zur Beschreibung von Natur und Landschaften genutzt."
  },
  {
    "id": "v-m2-t1-4",
    "testId": "modellsatz-8",
    "term": "das Vesper",
    "display": "das Vesper, -",
    "pos": "Nomen, n.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Vesper"
    ],
    "defDe": "Traditionelle Zwischenmahlzeit im süddeutschen Raum mit Brot, Wurst und Käse.",
    "defAr": "وجبة خفيفة تقليدية شهية (خبز ريفي وجبن ولحم بارد).",
    "defFr": "Collation traditionnelle du soir ou de l'après-midi en Allemagne du Sud.",
    "example": "Zur Begrüßung gab es ein herzhaftes Vesper mit Bauernbrot und Schinken.",
    "tip": "Regionaler Begriff aus Baden-Württemberg und Bayern."
  },
  {
    "id": "v-m2-t1-5",
    "testId": "modellsatz-8",
    "term": "zergehen",
    "display": "auf der Zunge zergehen",
    "pos": "Verb",
    "teil": 1,
    "level": "B1",
    "forms": [
      "zergehen",
      "zergeht",
      "zerging",
      "zergangen"
    ],
    "defDe": "Im Mund langsam und köstlich schmelzen.",
    "defAr": "يذوب في الفم برقة ولذة لا تقاوم.",
    "defFr": "Fondre sur la langue, être exquis.",
    "example": "Der hauchdünne Schinken zergeht förmlich auf der Zunge.",
    "tip": "Wird für besonders feine Speisen verwendet."
  },
  {
    "id": "v-m2-t1-6",
    "testId": "modellsatz-8",
    "term": "die Mundart",
    "display": "die Mundart, -en",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Mundart",
      "Mundarten"
    ],
    "defDe": "In einer bestimmten Region gesprochener lokaler Dialekt.",
    "defAr": "اللهجة المحلية المنطوقة في إقليم معين.",
    "defFr": "Le dialecte régional, le parler local.",
    "example": "Die Einheimischen sprechen ihre alemannische Mundart mit Stolz.",
    "tip": "Synonym für 'Dialekt'."
  },
  {
    "id": "v-m2-t2-1",
    "testId": "modellsatz-8",
    "term": "die Nachhaltigkeit",
    "display": "die Nachhaltigkeit (nur Sg.)",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Nachhaltigkeit"
    ],
    "defDe": "Prinzip, nach dem nicht mehr verbraucht werden darf, als nachwachsen kann.",
    "defAr": "الاستدامة البيئية وحماية الموارد للأجيال القادمة.",
    "defFr": "La durabilité, développement durable.",
    "example": "Nachhaltigkeit spielt beim biologischen Anbau von Lebensmitteln eine Schlüsselrolle.",
    "tip": "Top-Thema in Prüfungsaufsätzen und Lesetexten."
  },
  {
    "id": "v-m2-t2-2",
    "testId": "modellsatz-8",
    "term": "die Karies",
    "display": "die Karies (nur Sg.)",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Karies"
    ],
    "defDe": "Zahnfäule, Erkrankung der Zähne durch Säuren und Bakterien.",
    "defAr": "تسوس الأسنان وتآكل طبقة المينا.",
    "defFr": "Les caries dentaires.",
    "example": "Zu viel Zucker in Süßigkeiten verursacht Karies bei Kindern.",
    "tip": "Medizinischer Begriff im Alltag."
  },
  {
    "id": "v-m2-t2-3",
    "testId": "modellsatz-8",
    "term": "pestizidfrei",
    "display": "pestizidfrei (Adj.)",
    "pos": "Adjektiv",
    "teil": 2,
    "level": "B1",
    "forms": [
      "pestizidfrei",
      "pestizidfreie",
      "pestizidfreien"
    ],
    "defDe": "Ohne chemische Pflanzenschutz- oder Schädlingsbekämpfungsmittel angebaut.",
    "defAr": "خالٍ تمامًا من المبيدات الكيماوية والسموم الزراعية.",
    "defFr": "Sans pesticides, exempt de produits phytosanitaires.",
    "example": "Verbraucher zahlen gern mehr für pestizidfreies Obst und Gemüse.",
    "tip": "Zusammensetzung aus Pestizid + frei."
  },
  {
    "id": "v-m2-t2-4",
    "testId": "modellsatz-8",
    "term": "der Andrang",
    "display": "der Andrang (nur Sg.)",
    "pos": "Nomen, m.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Andrang",
      "Andrangs"
    ],
    "defDe": "Großes Zuströmen vieler interessierter Menschen zu einem Ort oder Event.",
    "defAr": "تدفق وإقبال جماهيري حاشد على فعالية أو مكان.",
    "defFr": "La forte affluence, ruée de personnes.",
    "example": "Beim Tag der offenen Tür der Schule herrschte ein riesiger Andrang.",
    "tip": "Oft mit dem Verb 'herrschen': 'großer Andrang herrscht'."
  },
  {
    "id": "v-m2-t2-5",
    "testId": "modellsatz-8",
    "term": "die Gelegenheit wahrnehmen",
    "display": "eine Gelegenheit wahrnehmen",
    "pos": "Redewendung",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Gelegenheit wahrnehmen",
      "nahm die Gelegenheit wahr"
    ],
    "defDe": "Eine günstige Chance aktiv nutzen.",
    "defAr": "يغتنم الفرصة السانحة ويستفيد منها.",
    "defFr": "Saisir une opportunité.",
    "example": "Viele Eltern nahmen die Gelegenheit wahr, den Unterricht persönlich zu besuchen.",
    "tip": "Gehobenes B1-Verbgefüge für 'eine Chance nutzen'."
  },
  {
    "id": "v-m2-t2-6",
    "testId": "modellsatz-8",
    "term": "der Lesepate",
    "display": "der Lesepate, -n",
    "pos": "Nomen, m.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Lesepate",
      "Lesepaten"
    ],
    "defDe": "Freiwilliger Helfer, der Kindern in Schulen oder Kitas regelmäßig vorliest.",
    "defAr": "مرشد قراءة متطوع يقرأ القصص للأطفال لتحفيز حب المطالعة.",
    "defFr": "Parrain de lecture bénévole pour les élèves.",
    "example": "Der bekannte Jugendbuchautor wurde zum offiziellen Lesepaten ernannt.",
    "tip": "Aus Pate (Schutzherr) und lesen."
  },
  {
    "id": "v-m2-t3-1",
    "testId": "modellsatz-8",
    "term": "etwas satt haben",
    "display": "etwas satt haben",
    "pos": "Redewendung",
    "teil": 3,
    "level": "B1",
    "forms": [
      "satt haben",
      "hatte satt"
    ],
    "defDe": "Von einer Sache genug haben; etwas nicht mehr ertragen wollen.",
    "defAr": "يضيق ذرعًا بشيء ويسأم منه تمامًا.",
    "defFr": "En avoir marre de quelque chose, être rassasié de.",
    "example": "Herr Berger hat das ungesunde Kantinenessen endgültig satt.",
    "tip": "Umgangssprachlich, aber sehr häufig in Situationen."
  },
  {
    "id": "v-m2-t4-1",
    "testId": "modellsatz-8",
    "term": "die Fehleinschätzung",
    "display": "die Fehleinschätzung, -en",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Fehleinschätzung",
      "Fehleinschätzungen"
    ],
    "defDe": "Falsche oder unzureichende Beurteilung einer Lage oder Gefahr.",
    "defAr": "سوء تقدير أو تقييم خاطئ لموقف أو خطر حقيقي.",
    "defFr": "Une erreur de jugement, mauvaise appréciation.",
    "example": "Im Extremsport kann eine kleine Fehleinschätzung tödlich enden.",
    "tip": "Präfix 'Fehl-' bedeutet falsch / fehlerhaft."
  },
  {
    "id": "v-m2-t4-2",
    "testId": "modellsatz-8",
    "term": "unter Beweis stellen",
    "display": "etwas unter Beweis stellen",
    "pos": "Phrase",
    "teil": 4,
    "level": "B1",
    "forms": [
      "unter Beweis stellen",
      "stellte unter Beweis"
    ],
    "defDe": "Das eigene Können oder eine Behauptung durch Taten überzeugend belegen.",
    "defAr": "يبرهن على كفاءته ويثبت قدراته بالفعل.",
    "defFr": "Faire ses preuves, prouver ses capacités.",
    "example": "Die Bergläufer wollen bei dem Wettkampf ihre enorme Ausdauer unter Beweis stellen.",
    "tip": "Typisches Funktionsverbgefüge für 'beweisen'."
  },
  {
    "id": "v-m2-t5-1",
    "testId": "modellsatz-8",
    "term": "altersgerecht",
    "display": "altersgerecht (Adj.)",
    "pos": "Adjektiv",
    "teil": 5,
    "level": "B1",
    "forms": [
      "altersgerecht",
      "altersgerechte",
      "altersgerechten"
    ],
    "defDe": "Für das jeweilige Alter der Zielgruppe passend gestaltet.",
    "defAr": "ملائم ومناسب للمرحلة العمرية للمشاركين.",
    "defFr": "Adapté à l'âge du public.",
    "example": "Die Geburtstagsführungen im Zoo sind altersgerecht für Kinder ab fünf Jahren konzipiert.",
    "tip": "Aus Alter + gerecht (angemessen)."
  },
  {
    "id": "v-m3-t1-1",
    "testId": "modellsatz-9",
    "term": "reinstecken",
    "display": "Geld/Arbeit reinstecken",
    "pos": "Verb",
    "teil": 1,
    "level": "B1",
    "forms": [
      "reinstecken",
      "reingesteckt"
    ],
    "defDe": "Umgangssprachlich: Viel Geld, Zeit oder Mühe in ein Projekt oder eine Wohnung investieren.",
    "defAr": "يضخ أو يستثمر الكثير من المال والجهد في مشروع أو مسكن.",
    "defFr": "Investir, injecter de l'argent ou des efforts dans un projet.",
    "example": "In die Renovierung der neuen Wohnung muss ich noch jede Menge Geld reinstecken.",
    "tip": "Synonym zu 'hineinstecken' oder 'investieren'."
  },
  {
    "id": "v-m3-t1-2",
    "testId": "modellsatz-9",
    "term": "der gesunde Menschenverstand",
    "display": "der gesunde Menschenverstand",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "gesunde Menschenverstand",
      "gesunden Menschenverstandes"
    ],
    "defDe": "Die natürliche Fähigkeit, vernünftig und logisch zu urteilen.",
    "defAr": "الفطرة السليمة وحسن التفكير المنطقي والبديهة الطبيعية.",
    "defFr": "Le bon sens commun.",
    "example": "Mit ein bisschen gesundem Menschenverstand lässt sich die kleine Wohnung optimal einrichten.",
    "tip": "Wichtiger Ausdruck im Deutschen."
  },
  {
    "id": "v-m3-t1-3",
    "testId": "modellsatz-9",
    "term": "etwas hinkriegen",
    "display": "etwas hinkriegen (ugs.)",
    "pos": "Verb",
    "teil": 1,
    "level": "B1",
    "forms": [
      "hinkriegen",
      "kriegen hin",
      "hingekriegt"
    ],
    "defDe": "Eine schwierige Herausforderung erfolgreich bewältigen.",
    "defAr": "ينجح في إتمام أمر صعب أو حل معضلة بتوفيق.",
    "defFr": "Réussir à faire, s'en sortir avec succès.",
    "example": "Keine Sorge, das Renovieren der Küche kriegen wir schon hin!",
    "tip": "Umgangssprachliches Synonym zu 'schaffen' oder 'meistern'."
  },
  {
    "id": "v-m3-t1-4",
    "testId": "modellsatz-9",
    "term": "der Grundriss",
    "display": "der Grundriss, -e",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Grundriss",
      "Grundrisse",
      "Grundrisses"
    ],
    "defDe": "Die zeichnerische Darstellung einer Wohnung oder eines Gebäudes von oben.",
    "defAr": "المخطط المعماري الأفقي للمنزل أو الشقة.",
    "defFr": "Le plan au sol, tracé architectural d'un logement.",
    "example": "Ich habe den Grundriss der Wohnung genau analysiert, um die Möbel passend zu platzieren.",
    "tip": "Wichtig bei Wohnungssuche und Architektur."
  },
  {
    "id": "v-m3-t2-1",
    "testId": "modellsatz-9",
    "term": "die Kriminalprävention",
    "display": "die Kriminalprävention (nur Sg.)",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Kriminalprävention"
    ],
    "defDe": "Vorbeugende polizeiliche Maßnahmen zur Verhütung von Straftaten.",
    "defAr": "إدارة الوقاية من الجريمة والتدابير الاستباقية للحد من السرقات.",
    "defFr": "La prévention de la criminalité.",
    "example": "Die Polizei setzt verstärkt auf Kriminalprävention zum Schutz vor Einbrüchen.",
    "tip": "Prävention = Vorbeugung."
  },
  {
    "id": "v-m3-t2-2",
    "testId": "modellsatz-9",
    "term": "sensibilisieren",
    "display": "sensibilisieren (v.)",
    "pos": "Verb",
    "teil": 2,
    "level": "B1",
    "forms": [
      "sensibilisieren",
      "sensibilisiert"
    ],
    "defDe": "Die Aufmerksamkeit und Wachsamkeit von Menschen für ein ernstes Problem schärfen.",
    "defAr": "يوعي الأفراد ويرفع درجة يقظتهم تجاه خطر معين.",
    "defFr": "Sensibiliser le public à un problème.",
    "example": "Mit der Kampagne will die Polizei die Bürger für Einbruchsgefahren sensibilisieren.",
    "tip": "Bedeutet 'empfindsam / aufmerksam machen'."
  },
  {
    "id": "v-m3-t2-3",
    "testId": "modellsatz-9",
    "term": "nachhaltig beeinträchtigen",
    "display": "nachhaltig beeinträchtigen",
    "pos": "Phrase",
    "teil": 2,
    "level": "B1",
    "forms": [
      "nachhaltig beeinträchtigen",
      "nachhaltig beeinträchtigt"
    ],
    "defDe": "Über lange Zeit hinweg negativ stören oder seelisch schädigen.",
    "defAr": "يلحق أثرًا نفسيًا أو ماديًا ضارًا وممتدًا لفترة طويلة.",
    "defFr": "Perturber ou affecter négativement et durablement.",
    "example": "Ein Wohnungseinbruch beeinträchtigt das Sicherheitsgefühl der Opfer oft nachhaltig.",
    "tip": "Kollokation für langfristige Negativfolgen."
  },
  {
    "id": "v-m3-t2-4",
    "testId": "modellsatz-9",
    "term": "der Feinschmecker",
    "display": "der Feinschmecker, -",
    "pos": "Nomen, m.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Feinschmecker",
      "Feinschmeckern"
    ],
    "defDe": "Person, die besonders gerne exquisites, hochwertiges Essen genießt (Gourmet).",
    "defAr": "متذوق الأطعمة الفاخرة وخبير فنون الطهي الراقية.",
    "defFr": "Un fin gourmet, gastronome averti.",
    "example": "Die Kochschule bietet exquisite Kurse für neugierige Feinschmecker an.",
    "tip": "Zusammengesetzt aus fein + schmecken."
  },
  {
    "id": "v-m3-t2-5",
    "testId": "modellsatz-9",
    "term": "die Molekularküche",
    "display": "die Molekularküche (nur Sg.)",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Molekularküche"
    ],
    "defDe": "Moderne Kochkunst, die biochemische und physikalische Prozesse bei der Zubereitung nutzt.",
    "defAr": "المطبخ الجزيئي (إعداد الأطعمة بأساليب كيميائية وفيزيائية مبتكرة).",
    "defFr": "La cuisine moléculaire.",
    "example": "In dem Kochkurs lernen die Teilnehmer spannende Tricks der modernen Molekularküche.",
    "tip": "Neuer Trendbegriff der Gastronomie."
  },
  {
    "id": "v-m3-t2-6",
    "testId": "modellsatz-9",
    "term": "sich etwas zutrauen",
    "display": "sich etwas zutrauen",
    "pos": "Verb",
    "teil": 2,
    "level": "B1",
    "forms": [
      "zutrauen",
      "traut sich zu",
      "zugetraut"
    ],
    "defDe": "Den Mut haben und an die eigenen Fähigkeiten glauben, eine Aufgabe zu schaffen.",
    "defAr": "يجرؤ ويثق في مقدرته على القيام بأمر ما.",
    "defFr": "Se sentir capable de, oser entreprendre.",
    "example": "Wer sich noch kein 4-Gänge-Menü zutraut, fängt am besten mit dem Einsteigerkurs an.",
    "tip": "Reflexiv mit Dativ ('Ich traue mir das zu')."
  },
  {
    "id": "v-m3-t4-1",
    "testId": "modellsatz-9",
    "term": "das Multitasking",
    "display": "das Multitasking (nur Sg.)",
    "pos": "Nomen, n.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Multitasking"
    ],
    "defDe": "Die gleichzeitige Ausführung mehrerer verschiedener Aufgaben zur selben Zeit.",
    "defAr": "القيام بعدة مهام في وقت واحد.",
    "defFr": "Le multitâche, réalisation simultanée de tâches multiples.",
    "example": "Wissenschaftler bezweifeln, dass menschliches Multitasking wirklich effizient ist.",
    "tip": "Anglizismus in der modernen Arbeitswelt."
  },
  {
    "id": "v-m3-t4-2",
    "testId": "modellsatz-9",
    "term": "überfordern",
    "display": "überfordern (v.)",
    "pos": "Verb",
    "teil": 4,
    "level": "B1",
    "forms": [
      "überfordern",
      "überfordert",
      "überforderte"
    ],
    "defDe": "Mehr Leistung oder Aufmerksamkeit von jemandem verlangen, als er schaffen kann.",
    "defAr": "يكلف أو يرهق المرء بما يفوق طاقته وقدرته على الاحتمال.",
    "defFr": "Surmener, exiger trop de quelqu'un.",
    "example": "Ständige Telefonate und E-Mails gleichzeitig überfordern das Gehirn.",
    "tip": "Gegenteil: 'unterfordern'."
  },
  {
    "id": "v-m3-t4-3",
    "testId": "modellsatz-9",
    "term": "einer Sache auf den Grund gehen",
    "display": "einer Sache auf den Grund gehen",
    "pos": "Redewendung",
    "teil": 4,
    "level": "B1",
    "forms": [
      "auf den Grund gehen",
      "ging auf den Grund"
    ],
    "defDe": "Die wahre und tiefste Ursache eines Phänomens gründlich erforschen.",
    "defAr": "يتقصى جذور المشكلة ويبحث في أسبابها العميقة.",
    "defFr": "Aller au fond des choses, élucider la cause profonde.",
    "example": "Die Hirnforschung will der Frage nach der Konzentrationsschwäche auf den Grund gehen.",
    "tip": "Sehr beliebte Redewendung in Lese- und Vortragstexten."
  },
  {
    "id": "v-m3-t5-1",
    "testId": "modellsatz-9",
    "term": "die Faustregel",
    "display": "die Faustregel, -n",
    "pos": "Nomen, f.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Faustregel",
      "Faustregeln"
    ],
    "defDe": "Einfache, praktische Grundregel, die man sich leicht merken kann.",
    "defAr": "قاعدة عامة تقريبية أو قاعدة ذهبية سهلة التطبيق.",
    "defFr": "Une règle générale empirique, règle de base.",
    "example": "Als Faustregel gilt: Im Internet sollte ein Forenbeitrag nie länger als ein Bildschirm sein.",
    "tip": "Faust + Regel."
  },
  {
    "id": "v-m3-t5-2",
    "testId": "modellsatz-9",
    "term": "sich kurz fassen",
    "display": "sich kurz fassen",
    "pos": "Redewendung",
    "teil": 5,
    "level": "B1",
    "forms": [
      "kurz fassen",
      "fasst sich kurz"
    ],
    "defDe": "Nur das Wichtigste sagen oder schreiben, ohne unnötige Weitschweifigkeit.",
    "defAr": "يوجز ويختصر الكلام مراعاة للوقت وقراء المنشور.",
    "defFr": "Être bref, faire court.",
    "example": "Bitte fassen Sie sich in Ihren Online-Kommentaren kurz.",
    "tip": "Wichtige Verhaltensregel in Diskussionsforen."
  },
  {
    "id": "v-m3-t5-3",
    "testId": "modellsatz-9",
    "term": "urheberrechtlich geschützt",
    "display": "urheberrechtlich geschützt",
    "pos": "Phrase",
    "teil": 5,
    "level": "B1",
    "forms": [
      "urheberrechtlich geschützt",
      "urheberrechtlich geschützte"
    ],
    "defDe": "Rechtlich durch das Gesetz über das geistige Eigentum vor unerlaubtem Kopieren geschützt.",
    "defAr": "محمي بموجب قوانين حقوق النشر والملكية الفكرية.",
    "defFr": "Protégé par le droit d'auteur.",
    "example": "Es ist verboten, urheberrechtlich geschützte Artikel im Forum ohne Genehmigung zu posten.",
    "tip": "Juristischer Standardbegriff im Medienrecht."
  },
  {
    "id": "v-m4-t1-1",
    "testId": "modellsatz-10",
    "term": "der Spielraum",
    "display": "der Spielraum, -räume",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": ["Spielraum", "Spielraums", "Spielräume"],
    "defDe": "Die Freiheit oder Möglichkeit, selbst zu entscheiden und sich frei zu entwickeln.",
    "defAr": "مساحة الحرية، هامش التصرف أو التطور الذاتي.",
    "defFr": "La marge de manœuvre, la liberté d'action.",
    "example": "Wie weit sind wir durch das Erbgut festgelegt und welchen Spielraum haben wir zur eigenen Entwicklung?",
    "tip": "Wichtiger Ausdruck in Lesen Teil 1 (Aufgabe 2)."
  },
  {
    "id": "v-m4-t1-2",
    "testId": "modellsatz-10",
    "term": "das Erbgut",
    "display": "das Erbgut (Sg.)",
    "pos": "Nomen, n.",
    "teil": 1,
    "level": "B1",
    "forms": ["Erbgut", "Erbguts"],
    "defDe": "Die Gesamtheit der genetischen Eigenschaften, die man von den Eltern erbt (Gene).",
    "defAr": "الموروث الجيني، العوامل الوراثية.",
    "defFr": "Le patrimoine génétique, l'hérédité.",
    "example": "Die Zwillingsforschung untersucht, wie stark wir durch das Erbgut festgelegt sind.",
    "tip": "Synonym zu 'die Gene' oder 'die Vererbung'."
  },
  {
    "id": "v-m4-t1-3",
    "testId": "modellsatz-10",
    "term": "zumuten",
    "display": "jdm. etwas zumuten (v.)",
    "pos": "Verb",
    "teil": 1,
    "level": "B1",
    "forms": ["zumuten", "mutet zu", "zugemutet"],
    "defDe": "Von jemandem oder etwas eine hohe Belastung oder Anstrengung verlangen (aushalten).",
    "defAr": "يُحمّل (شخصاً أو علاقة) فوق طاقته، يختبر قدرة تحمله.",
    "defFr": "Exiger de quelqu'un (ou mettre à l'épreuve ce qu'il peut supporter).",
    "example": "Psychologen testen unsere Freundeskreise: Wie trägt uns dieses soziale Netz und was kann man ihm zumuten?",
    "tip": "Schlüsselwort für Aufgabe 5 ('was eine Freundschaft aushält')."
  },
  {
    "id": "v-m4-t2-1",
    "testId": "modellsatz-10",
    "term": "der Häftling",
    "display": "der Häftling, -e",
    "pos": "Nomen, m.",
    "teil": 2,
    "level": "B1",
    "forms": ["Häftling", "Häftlinge", "Häftlingen"],
    "defDe": "Eine Person, die wegen einer Straftat im Gefängnis sitzt; ein Gefangener.",
    "defAr": "السجين، النزيل في السجن.",
    "defFr": "Le détenu, le prisonnier.",
    "example": "Die Häftlinge produzieren schon seit 1898 ihre eigene Kleidung im Gefängnis.",
    "tip": "Synonym zu 'der Gefangene'."
  },
  {
    "id": "v-m4-t2-2",
    "testId": "modellsatz-10",
    "term": "vorläufig",
    "display": "vorläufig (Adv./Adj.)",
    "pos": "Adverb",
    "teil": 2,
    "level": "B1",
    "forms": ["vorläufig", "vorläufige"],
    "defDe": "Fürs Erste, im Moment, vorübergehend bis sich die Situation ändert.",
    "defAr": "مؤقتاً، في الوقت الراهن، حتى إشعار آخر.",
    "defFr": "Provisoirement, pour le moment, temporairement.",
    "example": "Der Erfolg ist so groß, dass man vorläufig gar keine neuen Bestellungen mehr annehmen kann.",
    "tip": "Entspricht 'im Moment' in Aufgabe 8."
  },
  {
    "id": "v-m4-t2-3",
    "testId": "modellsatz-10",
    "term": "fördern",
    "display": "fördern (v.)",
    "pos": "Verb",
    "teil": 2,
    "level": "B1",
    "forms": ["fördern", "fördert", "gefördert"],
    "defDe": "Finanziell oder ideell unterstützen, damit sich etwas gut entwickelt.",
    "defAr": "يدعم، يمول، يعزز ويشجع.",
    "defFr": "Soutenir financièrement, promouvoir, encourager.",
    "example": "Seit vier Jahren fördert die Europäische Union die Arbeit von Ingenieuren und Informatikern.",
    "tip": "Schlüsselwort für Aufgabe 11 ('wird von der EU unterstützt')."
  },
  {
    "id": "v-m4-t3-1",
    "testId": "modellsatz-10",
    "term": "zutraulich",
    "display": "zutraulich (Adj.)",
    "pos": "Adjektiv",
    "teil": 3,
    "level": "B1",
    "forms": ["zutraulich", "zutrauliche"],
    "defDe": "Ohne Scheu gegenüber Menschen, zahm und freundlich (besonders bei Tieren).",
    "defAr": "أليف، ودود يألف الناس ولا يخاف منهم.",
    "defFr": "Affectueux, familier, apprivoisé (pour un animal).",
    "example": "Der Graupapagei Lora ist 12 Jahre alt, sehr zutraulich und spricht viele Wörter.",
    "tip": "Wichtiges Adjektiv bei Haustier-Anzeigen."
  },
  {
    "id": "v-m4-t4-1",
    "testId": "modellsatz-10",
    "term": "die Fortbildung",
    "display": "die Fortbildung, -en",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": ["Fortbildung", "Fortbildungen", "Fortbildungsangeboten"],
    "defDe": "Berufliche Weiterbildung durch Kurse oder Seminare, um neue Kenntnisse im Beruf zu erwerben.",
    "defAr": "التدريب المهني المستمر، دورات التأهيل والتطوير الوظيفي.",
    "defFr": "La formation continue, le perfectionnement professionnel.",
    "example": "Wenn mir mein Chef eine Fortbildung vorschlägt, habe ich Angst vor solchen Programmen.",
    "tip": "Zentrales Thema von Lesen Teil 4."
  },
  {
    "id": "v-m4-t4-2",
    "testId": "modellsatz-10",
    "term": "für etwas aufkommen",
    "display": "für etwas aufkommen (v.)",
    "pos": "Verb",
    "teil": 4,
    "level": "B1",
    "forms": ["aufkommen", "kommt auf", "aufzukommen"],
    "defDe": "Die Kosten für etwas selbst bezahlen oder übernehmen.",
    "defAr": "يتحمل التكاليف المالية، يدفع نفقات شيء بنفسه.",
    "defFr": "Prendre en charge les frais, payer soi-même.",
    "example": "Wer eine Fortbildung braucht, der sollte wenigstens selbst dafür aufkommen.",
    "tip": "B1-Redewendung für 'selbst bezahlen'."
  },
  {
    "id": "v-m4-t5-1",
    "testId": "modellsatz-10",
    "term": "die Montageanleitung",
    "display": "die Montageanleitung, -en",
    "pos": "Nomen, f.",
    "teil": 5,
    "level": "B1",
    "forms": ["Montageanleitung", "Montage"],
    "defDe": "Eine schriftliche Beschreibung, die Schritt für Schritt erklärt, wie man ein Möbelstück oder Gerät zusammenbaut.",
    "defAr": "دليل التركيب والتجميع.",
    "defFr": "La notice de montage / d'assemblage.",
    "example": "Die beigefügte Montageanleitung macht Ihnen den Aufbau des Qualitätsmöbels einfach.",
    "tip": "Schlüsselwort für Aufgabe 27."
  },
  {
    "id": "v-m5-t1-1",
    "testId": "modellsatz-11",
    "term": "der Schulstress",
    "display": "der Schulstress (Sg.)",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Schulstress",
      "Schulstresses"
    ],
    "defDe": "Körperlicher und psychischer Druck, der durch schulische Anforderungen, Prüfungen oder Konflikte entsteht.",
    "defAr": "التوتر المدرسي والضغط النفسي الناتج عن متطلبات المدرسة.",
    "defFr": "Le stress scolaire lié aux exigences et examens.",
    "example": "Schulstress ist ein Thema, das Eltern und Pädagogen gleichermaßen beschäftigt.",
    "tip": "Zentrales Thema von Lesen Teil 1."
  },
  {
    "id": "v-m5-t1-2",
    "testId": "modellsatz-11",
    "term": "überfordern",
    "display": "überfordern (überforderte, hat überfordert)",
    "pos": "Verb",
    "teil": 1,
    "level": "B1",
    "forms": [
      "überfordern",
      "überfordert",
      "überforderte",
      "überfordert"
    ],
    "defDe": "Mehr Leistung, Kraft oder Wissen von jemandem verlangen, als er erbringen kann.",
    "defAr": "يرهق، يحمّل فوق الطاقة.",
    "defFr": "Dépasser les capacités de quelqu'un, surmener.",
    "example": "Negativer Stress entsteht, wenn Kinder mit Situationen konfrontiert werden, die sie überfordern.",
    "tip": "Wichtiges B1-Verb für Schule und Beruf."
  },
  {
    "id": "v-m5-t1-3",
    "testId": "modellsatz-11",
    "term": "das Mobbing",
    "display": "das Mobbing (Sg.)",
    "pos": "Nomen, n.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Mobbing",
      "Mobbings"
    ],
    "defDe": "Wiederholtes, gezieltes Schikanieren, Ausgrenzen oder Belästigen einer Person in Schule oder Arbeit.",
    "defAr": "التنمر أو المضايقة النفسية المتكررة.",
    "defFr": "Le harcèlement moral ou scolaire (mobbing).",
    "example": "Großen Stress bedeutet es für ein Kind, wenn es sich gegen Mitschüler nicht durchsetzen kann (Mobbing).",
    "tip": "Schlüsselwort für Aufgabe 3."
  },
  {
    "id": "v-m5-t1-4",
    "testId": "modellsatz-11",
    "term": "der Außenseiter",
    "display": "der Außenseiter, -",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Außenseiter",
      "Außenseiters",
      "Außenseiter"
    ],
    "defDe": "Eine Person, die nicht in eine soziale Gemeinschaft oder Gruppe integriert ist und am Rande steht.",
    "defAr": "المنعزل، المهمش في جماعة أو صف.",
    "defFr": "L'exclu, le marginal dans un groupe.",
    "example": "Es bedeutet großen Stress, wenn ein Kind von Mitschülern zum Außenseiter gemacht wird.",
    "tip": "Wichtiger Begriff für soziale Beziehungen."
  },
  {
    "id": "v-m5-t1-5",
    "testId": "modellsatz-11",
    "term": "der Förderunterricht",
    "display": "der Förderunterricht, -e",
    "pos": "Nomen, m.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Förderunterricht",
      "Förderunterrichts",
      "Förderunterrichte"
    ],
    "defDe": "Zusätzlicher Schulunterricht zur Unterstützung von Schülern mit Lernschwierigkeiten.",
    "defAr": "دروس الدعم والتقوية المدرسية.",
    "defFr": "Les cours de soutien scolaire / de rattrapage.",
    "example": "Eltern suchen nach Hilfsmöglichkeiten wie Förderunterricht oder Nachhilfe.",
    "tip": "Häufiges B1-Wort im Bildungsbereich."
  },
  {
    "id": "v-m5-t2-1",
    "testId": "modellsatz-11",
    "term": "die Kinderjury",
    "display": "die Kinderjury, -s",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Kinderjury",
      "Kinderjurys"
    ],
    "defDe": "Eine Gruppe von Kindern, die als offizielle Preisrichter Filme oder Bücher bewerten.",
    "defAr": "لجنة تحكيم مشكّلة من الأطفال.",
    "defFr": "Le jury d'enfants (dans un festival).",
    "example": "Genau das zeichnet die Kinderjury Kino-TV beim großen Festival für Kinder aus.",
    "tip": "Schlüsselbegriff für Teil 2a (Aufgabe 7-9)."
  },
  {
    "id": "v-m5-t2-2",
    "testId": "modellsatz-11",
    "term": "begehrt",
    "display": "begehrt (begehrter, am begehrtesten)",
    "pos": "Adjektiv",
    "teil": 2,
    "level": "B1",
    "forms": [
      "begehrt",
      "begehrter",
      "begehrteste"
    ],
    "defDe": "Von sehr vielen Menschen gewünscht, geschätzt oder angestrebt.",
    "defAr": "مرغوب ومطلوب بشدة، محط الأنظار.",
    "defFr": "Très convoité, très recherché.",
    "example": "Sie alle hoffen auf den begehrten GOLDENEN SPATZEN.",
    "tip": "Häufiges B1-Prüfungsadjektiv."
  },
  {
    "id": "v-m5-t2-3",
    "testId": "modellsatz-11",
    "term": "der Umzug",
    "display": "der Umzug, -züge",
    "pos": "Nomen, m.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Umzug",
      "Umzugs",
      "Umzüge"
    ],
    "defDe": "1. Festlicher Zug / Parade von Menschen durch Straßen. 2. Wohnungswechsel.",
    "defAr": "1. الموكب أو الاستعراض الاحتفالي في الشوارع. 2. الانتقال إلى مسكن جديد.",
    "defFr": "1. Le défilé, la parade festive. 2. Le déménagement.",
    "example": "Der traditionelle Umzug des Multikulti-Festes zog mit Tänzern durch Berlin.",
    "tip": "Wichtig: Hier im Sinne von 'Parade / Festzug' (Teil 2b)."
  },
  {
    "id": "v-m5-t2-4",
    "testId": "modellsatz-11",
    "term": "das Spektakel",
    "display": "das Spektakel, -",
    "pos": "Nomen, n.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Spektakel",
      "Spektakels"
    ],
    "defDe": "Ein außergewöhnliches, farbenfrohes und beeindruckendes Schauspiel oder Ereignis.",
    "defAr": "استعراض مبهر أو مشهد احتفالي رائع.",
    "defFr": "Le spectacle grandiose, l'événement impressionnant.",
    "example": "Rund 700 000 Besucher ließen sich das Spektakel nicht entgehen.",
    "tip": "Oft im Zusammenhang mit Kulturfesten."
  },
  {
    "id": "v-m5-t3-1",
    "testId": "modellsatz-11",
    "term": "der Nebenverdienst",
    "display": "der Nebenverdienst, -e",
    "pos": "Nomen, m.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Nebenverdienst",
      "Nebenverdiensts",
      "Nebenverdienste"
    ],
    "defDe": "Geld, das man durch eine zusätzliche Nebentätigkeit neben Beruf, Schule oder Studium verdient.",
    "defAr": "الدخل الإضافي أو الكسب الثانوي.",
    "defFr": "Le revenu d'appoint, le gain accessoire.",
    "example": "Prima Nebenverdienst für Studenten, Rentner und Schüler ab 13 Jahre.",
    "tip": "Schlüsselwort für Jobanzeigen (Aufgabe 19)."
  },
  {
    "id": "v-m5-t3-2",
    "testId": "modellsatz-11",
    "term": "der Umsteiger",
    "display": "der Umsteiger, -",
    "pos": "Nomen, m.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Umsteiger",
      "Umsteigers",
      "Umsteiger"
    ],
    "defDe": "Eine Person, die ihren bisherigen Beruf aufgibt und in ein völlig neues Berufsfeld wechselt.",
    "defAr": "الراغب في تغيير مهنته أو مساره الوظيفي.",
    "defFr": "La personne en reconversion professionnelle.",
    "example": "Mit Tipps und Hinweisen zur Berufswahl und für „Umsteiger“.",
    "tip": "Schlüsselwort für Aufgabe 18 (Klio sucht Orientierung)."
  },
  {
    "id": "v-m5-t3-3",
    "testId": "modellsatz-11",
    "term": "der Vorleser",
    "display": "der Vorleser, -",
    "pos": "Nomen, m.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Vorleser",
      "Vorlesers",
      "Vorleser"
    ],
    "defDe": "Jemand, der anderen Personen (z. B. sehbehinderten Senioren oder Kindern) laut aus Büchern vorliest.",
    "defAr": "القارئ بصوت مسموع لغيره (مثل المسنين ضعاف البصر).",
    "defFr": "Le lecteur à haute voix (pour personnes malvoyantes).",
    "example": "Vorleser gesucht von Seniorenheimen und privat für ältere Leute.",
    "tip": "Schlüsselwort für Aufgabe 13 (David)."
  },
  {
    "id": "v-m5-t4-1",
    "testId": "modellsatz-11",
    "term": "die Molekularküche",
    "display": "die Molekularküche (Sg.)",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Molekularküche",
      "Molekularküchen"
    ],
    "defDe": "Eine moderne Kochkunst, die chemische und physikalische Prozesse bei der Zubereitung nutzt.",
    "defAr": "المطبخ الجزيئي (فن الطهي بالاعتماد على التفاعلات الكيميائية والفيزيائية).",
    "defFr": "La cuisine moléculaire.",
    "example": "Ich verstehe nicht, warum es so lange gedauert hat, bis wir auf die molekulare Küche gekommen sind.",
    "tip": "Hauptthema von Lesen Teil 4."
  },
  {
    "id": "v-m5-t4-2",
    "testId": "modellsatz-11",
    "term": "veranschaulichen",
    "display": "veranschaulichen (veranschaulichte, hat veranschaulicht)",
    "pos": "Verb",
    "teil": 4,
    "level": "B1",
    "forms": [
      "veranschaulichen",
      "veranschaulicht",
      "veranschaulichte",
      "veranschaulicht"
    ],
    "defDe": "Einen abstrakten Sachverhalt durch Beispiele, Bilder oder Vergleiche anschaulich und verständlich machen.",
    "defAr": "يوضح، يجسد بالأمثلة والشواهد.",
    "defFr": "Illustrer, rendre concret et compréhensible.",
    "example": "Das veranschaulicht die von Molekularköchen entwickelte Vakuum-Methode.",
    "tip": "Wichtiges akademisches Verb auf B1/B2-Niveau."
  },
  {
    "id": "v-m5-t4-3",
    "testId": "modellsatz-11",
    "term": "die Delikatesse",
    "display": "die Delikatesse, -n",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Delikatesse",
      "Delikatessen"
    ],
    "defDe": "Eine exquisite, besonders feine und wohlschmeckende Speise.",
    "defAr": "طعام شهي فاخر ونادر.",
    "defFr": "Le mets délicat, la friandise raffinée.",
    "example": "Als Köchin fasziniert mich die Idee, um wie viele Delikatessen ich meine Speisekarte erweitern kann.",
    "tip": "Wortschatz für Gastronomie und Genuss."
  },
  {
    "id": "v-m5-t5-1",
    "testId": "modellsatz-11",
    "term": "die Pflanzenpflege",
    "display": "die Pflanzenpflege (Sg.)",
    "pos": "Nomen, f.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Pflanzenpflege"
    ],
    "defDe": "Die Gesamtheit aller Maßnahmen wie Gießen, Düngen und Schneiden, um Pflanzen gesund zu halten.",
    "defAr": "رعاية النباتات المنزلية والاهتمام بها.",
    "defFr": "L'entretien des plantes.",
    "example": "Pflanzenpflege: Tipps vom Euroflorist Blumenversand.",
    "tip": "Titel und Thema von Lesen Teil 5."
  },
  {
    "id": "v-m5-t5-2",
    "testId": "modellsatz-11",
    "term": "düngen",
    "display": "düngen (düngte, hat gedüngt)",
    "pos": "Verb",
    "teil": 5,
    "level": "B1",
    "forms": [
      "düngen",
      "düngt",
      "düngte",
      "gedüngt"
    ],
    "defDe": "Den Boden oder die Pflanzerde mit Nährstoffen anreichern, um das Pflanzenwachstum zu fördern.",
    "defAr": "يسمّد الأرض أو النبات.",
    "defFr": "Fertiliser, apporter de l'engrais.",
    "example": "Blütenpflanzen sollten während des Sommers bei jedem Gießen gedüngt werden.",
    "tip": "Schlüsselwort für Aufgabe 30."
  },
  {
    "id": "v-m5-t5-3",
    "testId": "modellsatz-11",
    "term": "die Topferde",
    "display": "die Topferde (Sg.)",
    "pos": "Nomen, f.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Topferde"
    ],
    "defDe": "Mit Nährstoffen angereicherte Erde für Pflanzen in Blumentöpfen.",
    "defAr": "تربة الأصص أو التربة الزراعية المخصصة للزهور المنزلية.",
    "defFr": "Le terreau pour plantes en pot.",
    "example": "Prüfen Sie die Topferde, um festzustellen, ob die Pflanzen trocken sind.",
    "tip": "Wichtig für Aufgabe 29."
  },
  {
    "id": "v-m5-t6-1",
    "testId": "modellsatz-11",
    "term": "die Heilpflanze",
    "display": "die Heilpflanze, -n",
    "pos": "Nomen, f.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Heilpflanze",
      "Heilpflanzen"
    ],
    "defDe": "Eine Pflanze, die wegen ihrer heilenden oder lindernden Inhaltsstoffe in der Medizin verwendet wird.",
    "defAr": "النبتة أو العشبة الطبية العلاجية.",
    "defFr": "La plante médicinale.",
    "example": "Natürliche Heilpflanzen sind oft milder bei Hautrötungen.",
    "tip": "Thema in Hören Teil 1 (Aufgabe 1)."
  },
  {
    "id": "v-m5-t6-2",
    "testId": "modellsatz-11",
    "term": "das Klischee",
    "display": "das Klischee, -s",
    "pos": "Nomen, n.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Klischee",
      "Klischees"
    ],
    "defDe": "Eine überkommene, stereotype Vorstellung oder vorgefasste Meinung über Personen oder Gruppen.",
    "defAr": "الصورة النمطية، الكليشيه المسبق.",
    "defFr": "Le cliché, l'idée reçue stéréotypée.",
    "example": "Gibt es typische Männer- oder Frauenberufe – Klischee oder Wahrheit?",
    "tip": "Zentraler Diskussionsbegriff in Hören Teil 4."
  },
  {
    "id": "v-m5-t6-3",
    "testId": "modellsatz-11",
    "term": "die Geschwindigkeitswahrnehmung",
    "display": "die Geschwindigkeitswahrnehmung, -en",
    "pos": "Nomen, f.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Geschwindigkeitswahrnehmung"
    ],
    "defDe": "Die sensorische Fähigkeit, Geschwindigkeiten von sich bewegenden Objekten richtig einzuschätzen.",
    "defAr": "إدراك السرعة وتقديرها حركياً وبصرياً.",
    "defFr": "La perception et l'évaluation de la vitesse.",
    "example": "Frauen haben angeblich keine gute Geschwindigkeitswahrnehmung.",
    "tip": "Schlüsselbegriff in Hören Teil 4 (Aufgabe 26)."
  }
,
  {
    "id": "v-m6-t1-1",
    "testId": "modellsatz-12",
    "term": "das Herz-Kreislauf-System",
    "display": "das Herz-Kreislauf-System (Sg.)",
    "pos": "Nomen, n.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Herz-Kreislauf-System",
      "Herz-Kreislauf-Systems"
    ],
    "defDe": "Das Organsystem aus Herz und Blutgefäßen, das den Körper mit Sauerstoff und Nährstoffen versorgt.",
    "defAr": "الجهاز القلبي الوعائي والدورة الدموية التي تغذي الجسم بالأكسجين.",
    "defFr": "Le système cardio-vasculaire qui irrigue l'organisme.",
    "example": "Tanzen stärkt das Herz-Kreislauf-System und den Rücken.",
    "tip": "Zentraler Gesundheitsbegriff in Lesen Teil 1."
  },
  {
    "id": "v-m6-t1-2",
    "testId": "modellsatz-12",
    "term": "die Durchblutung",
    "display": "die Durchblutung, -en",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Durchblutung",
      "Durchblutungen"
    ],
    "defDe": "Die Zirkulation und das Fließen des Blutes durch die Gewebe und Organe des Körpers.",
    "defAr": "تدفق الدم وجريانه عبر الأنسجة والأعضاء (الدورة الدموية).",
    "defFr": "La circulation sanguine et l'irrigation des tissus.",
    "example": "Durch die verstärkte Durchblutung beider Gehirnhälften wird die Kreativität gefördert.",
    "tip": "Wichtig für Gesundheitsthemen."
  },
  {
    "id": "v-m6-t1-3",
    "testId": "modellsatz-12",
    "term": "die Körperwahrnehmung",
    "display": "die Körperwahrnehmung (Sg.)",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Körperwahrnehmung"
    ],
    "defDe": "Die bewusste Wahrnehmung des eigenen Körpers, der eigenen Haltung und Bewegungen.",
    "defAr": "إدراك الجسد والوعي الذاتي بوضعية الجسم وحركاته.",
    "defFr": "La perception corporelle et la conscience de ses mouvements.",
    "example": "Ein sehr wichtiger Aspekt des Tanzes ist die Körperwahrnehmung und Körpererfahrung.",
    "tip": "Schlüsselwort für Wohlbefinden und Sport."
  },
  {
    "id": "v-m6-t1-4",
    "testId": "modellsatz-12",
    "term": "die Völkerverständigung",
    "display": "die Völkerverständigung (Sg.)",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Völkerverständigung"
    ],
    "defDe": "Die friedliche Annäherung, Verständigung und Freundschaft zwischen verschiedenen Nationen und Kulturen.",
    "defAr": "التفاهم الدولي والتآخي والتقارب السلمي بين الشعوب والثقافات.",
    "defFr": "L'entente et la compréhension mutuelle entre les peuples.",
    "example": "Damit trägt der Tanz wie auch die Musik zur internationalen Völkerverständigung bei.",
    "tip": "Wichtiges gesellschaftliches B1-Wort."
  },
  {
    "id": "v-m6-t2-1",
    "testId": "modellsatz-12",
    "term": "die Kinderrechtskonvention",
    "display": "die Kinderrechtskonvention, -en",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Kinderrechtskonvention"
    ],
    "defDe": "Ein internationales Übereinkommen der Vereinten Nationen über die universellen Rechte von Kindern.",
    "defAr": "اتفاقية حقوق الطفل الدولية الصادرة عن الأمم المتحدة.",
    "defFr": "La Convention relative aux droits de l'enfant de l'ONU.",
    "example": "1989 hat die Vollversammlung der Vereinten Nationen die UN-Kinderrechtskonvention verabschiedet.",
    "tip": "Thema von Lesen Teil 2a."
  },
  {
    "id": "v-m6-t2-2",
    "testId": "modellsatz-12",
    "term": "das Grundgesetz",
    "display": "das Grundgesetz (Sg.)",
    "pos": "Nomen, n.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Grundgesetz",
      "Grundgesetzes"
    ],
    "defDe": "Die Verfassung der Bundesrepublik Deutschland, welche die grundlegenden Rechte und Gesetze enthält.",
    "defAr": "القانون الأساسي (الدستور) لجمهورية ألمانيا الاتحادية.",
    "defFr": "La Loi fondamentale, la constitution de la République fédérale d'Allemagne.",
    "example": "Kinderrechtsorganisationen fordern, Kinderrechte ins Deutsche Grundgesetz aufzunehmen.",
    "tip": "Zentraler Rechts- und Politikbegriff (Aufgabe 9)."
  },
  {
    "id": "v-m6-t2-3",
    "testId": "modellsatz-12",
    "term": "die Hausaufgabenhilfe",
    "display": "die Hausaufgabenhilfe, -n",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Hausaufgabenhilfe",
      "Hausaufgabenhilfen"
    ],
    "defDe": "Betreuung und Unterstützung für Schüler bei der Erledigung ihrer schulischen Aufgaben.",
    "defAr": "المساعدة المدرسية والإشراف على أداء الواجبات المنزلية للتلاميذ.",
    "defFr": "L'aide aux devoirs et le soutien scolaire pour élèves.",
    "example": "In der Hausaufgabenhilfe kannst du gemeinsam deine Hausaufgaben erledigen.",
    "tip": "Thema von Lesen Teil 2b."
  },
  {
    "id": "v-m6-t2-4",
    "testId": "modellsatz-12",
    "term": "die Freizeitstätte",
    "display": "die Freizeitstätte, -n",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Freizeitstätte",
      "Freizeitstätten"
    ],
    "defDe": "Eine öffentliche Einrichtung oder ein Zentrum mit Freizeitangeboten für Kinder und Jugendliche.",
    "defAr": "مركز أنشطة ترفيهية ومجتمعية مخصص للأطفال والشباب.",
    "defFr": "Le centre d'animation et de loisirs pour les jeunes.",
    "example": "Die Mitarbeiter der Freizeitstätte helfen dir gerne auch außerhalb der regulären Zeiten.",
    "tip": "Schlüsselwort für kommunale Einrichtungen."
  },
  {
    "id": "v-m6-t3-1",
    "testId": "modellsatz-12",
    "term": "die Raucherentwöhnung",
    "display": "die Raucherentwöhnung (Sg.)",
    "pos": "Nomen, f.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Raucherentwöhnung"
    ],
    "defDe": "Der Prozess und Methoden, um sich das Rauchen von Zigaretten dauerhaft abzugewöhnen.",
    "defAr": "الإقلاع عن التدخين والتخلص التدريجي من إدمان التبغ.",
    "defFr": "Le sevrage tabagique et l'arrêt de la cigarette.",
    "example": "Nutzen Sie unsere Aktionswochen zur Raucherentwöhnung in der Apotheke!",
    "tip": "Passende Anzeige I für Situation 15."
  },
  {
    "id": "v-m6-t3-2",
    "testId": "modellsatz-12",
    "term": "die Klimatherapie",
    "display": "die Klimatherapie, -n",
    "pos": "Nomen, f.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Klimatherapie",
      "Klimatherapien"
    ],
    "defDe": "Die gezielte medizinische Nutzung von spezifischen Klimareizen zur Behandlung von Atemwegs- und Hauterkrankungen.",
    "defAr": "العلاج المناخي والاستشفاء بمناخ الجبال والمنتجعات الصحية الطبيعية.",
    "defFr": "La climatothérapie utilisant les vertus curatives d'un climat spécifique.",
    "example": "Zur Klimatherapie gehören Kuren bei Erkrankungen von Atemwegen und Haut.",
    "tip": "Passende Anzeige F für Situation 16 (Asthma)."
  },
  {
    "id": "v-m6-t3-3",
    "testId": "modellsatz-12",
    "term": "der Heilpraktiker",
    "display": "der Heilpraktiker, - / die Heilpraktikerin, -nen",
    "pos": "Nomen, m./f.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Heilpraktiker",
      "Heilpraktikers",
      "Heilpraktikerin"
    ],
    "defDe": "Eine Person, die beruflich die Naturheilkunde und alternative medizinische Heilverfahren ausübt.",
    "defAr": "ممارس الطب البديل والعلاج بالأعشاب والوسائل الطبيعية.",
    "defFr": "Le praticien de médecine douce et naturopathie.",
    "example": "Er möchte eine alternative Therapie ausprobieren und sucht hierzu einen Heilpraktiker.",
    "tip": "Berufsbezeichnung in Situation 16."
  },
  {
    "id": "v-m6-t4-1",
    "testId": "modellsatz-12",
    "term": "der sanfte Tourismus",
    "display": "der sanfte Tourismus (Sg.)",
    "pos": "Nomen, m.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "sanfte Tourismus",
      "sanften Tourismus"
    ],
    "defDe": "Eine Form des Reisens, die Natur, Umwelt und einheimische Kulturen schont und nachhaltig handelt.",
    "defAr": "السياحة البيئية الهادئة والمستدامة التي تحافظ على الطبيعة والمجتمع المحلي.",
    "defFr": "Le tourisme durable, doux et respectueux de l'écosystème.",
    "example": "Beurteilen Sie folgende Kommentare zu einem Artikel mit dem Titel „Der sanfte Tourismus“.",
    "tip": "Zentrales Thema von Lesen Teil 4."
  },
  {
    "id": "v-m6-t4-2",
    "testId": "modellsatz-12",
    "term": "die Mogelpackung",
    "display": "die Mogelpackung, -en",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Mogelpackung",
      "Mogelpackungen"
    ],
    "defDe": "Eine Verpackung oder ein Angebot, das mehr oder Besseres vortäuscht, als tatsächlich darin enthalten ist.",
    "defAr": "عبوة مخادعة، حيلة تسويقية مضللة توهم بغير حقيقتها.",
    "defFr": "Un emballage trompeur, une arnaque ou une fausse promesse.",
    "example": "Solche Reisen sind doch nur Mogelpackungen für Umweltsünder.",
    "tip": "Schlüsselbegriff in Kommentar 24 (Kern)."
  },
  {
    "id": "v-m6-t4-3",
    "testId": "modellsatz-12",
    "term": "die Wegwerfgesellschaft",
    "display": "die Wegwerfgesellschaft, -en",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Wegwerfgesellschaft"
    ],
    "defDe": "Eine moderne Gesellschaft, in der Konsumgüter nach kurzem Gebrauch weggeworfen statt repariert oder geschätzt werden.",
    "defAr": "مجتمع الاستهلاك السريع والرمي والتبذير.",
    "defFr": "La société du tout-jeter et du gaspillage.",
    "example": "Schön, dass unsere Konsum- und Wegwerfgesellschaft langsam nach neuen Werten sucht.",
    "tip": "Wichtiges B1-Wort für Umwelt und Gesellschaft (Kommentar 25)."
  },
  {
    "id": "v-m6-t5-1",
    "testId": "modellsatz-12",
    "term": "der Bibliotheksbestand",
    "display": "der Bibliotheksbestand, -¨e",
    "pos": "Nomen, m.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Bibliotheksbestand",
      "Bibliotheksbestands",
      "Bibliotheksbestände"
    ],
    "defDe": "Die Gesamtheit aller Bücher, Zeitschriften und Medien, die einer Bibliothek gehören.",
    "defAr": "رصيد المكتبة ومجموع مقتنياتها من كتب ودوريات ومراجع علمية.",
    "defFr": "Le fonds documentaire et la collection d'ouvrages d'une bibliothèque.",
    "example": "Die Computerarbeitsplätze dienen ausschließlich der Arbeit mit dem Bibliotheksbestand.",
    "tip": "Schlüsselbegriff in Regel 4 (Aufgabe 30)."
  },
  {
    "id": "v-m6-t6-1",
    "testId": "modellsatz-12",
    "term": "die Turbulenz",
    "display": "die Turbulenz, -en",
    "pos": "Nomen, f.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Turbulenz",
      "Turbulenzen"
    ],
    "defDe": "Heftige und unruhige Luftströmungen, die ein Flugzeug während des Fluges durchrütteln.",
    "defAr": "المطبات الهوائية والاضطرابات الجوية العنيفة أثناء الطيران.",
    "defFr": "Les turbulences et secousses d'air lors d'un vol.",
    "example": "Das Flugzeug fliegt gerade durch heftige Turbulenzen.",
    "tip": "Schlüsselbegriff in Hören Teil 1 (Aufgabe 1)."
  },
  {
    "id": "v-m6-t6-2",
    "testId": "modellsatz-12",
    "term": "der Makler",
    "display": "der Makler, - / die Maklerin, -nen",
    "pos": "Nomen, m./f.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Makler",
      "Maklers",
      "Maklerin"
    ],
    "defDe": "Eine Person, die gewerbsmäßig Immobilien oder Mietwohnungen vermittelt.",
    "defAr": "الوسيط أو السمسار العقاري لتأجير وبيع الشقق والمباني.",
    "defFr": "L'agent immobilier chargé des ventes et locations.",
    "example": "Sie schauen sich eine Wohnung an und hören die Informationen des Maklers.",
    "tip": "Kontext für Hören Teil 2."
  },
  {
    "id": "v-m6-t6-3",
    "testId": "modellsatz-12",
    "term": "die Nebenkosten",
    "display": "die Nebenkosten (Pl.)",
    "pos": "Nomen, Pl.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Nebenkosten"
    ],
    "defDe": "Die zusätzlichen Kosten neben der Kaltmiete für Heizung, Wasser, Müllabfuhr und Hausverwaltung.",
    "defAr": "المصاريف الإضافية وتكاليف الخدمات الملحقة بإيجار السكن (تدفئة، ماء، صيانة).",
    "defFr": "Les charges locatives annexes au loyer (chauffage, eau, entretien).",
    "example": "Die monatliche Vorauszahlung für Nebenkosten liegt bei 100 bis 150 Euro.",
    "tip": "Alltagsbegriff beim Wohnen (Aufgabe 15)."
  },
  {
    "id": "v-m6-t6-4",
    "testId": "modellsatz-12",
    "term": "das Hotel Mama",
    "display": "das Hotel Mama (ugs., Sg.)",
    "pos": "Nomen, n.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Hotel Mama"
    ],
    "defDe": "Umgangssprachliche Bezeichnung für das Wohnen erwachsener Kinder bei den Eltern, wo sie versorgt werden.",
    "defAr": "ظاهرة بقاء الأبناء البالغين في بيت العائلة («فندق ماما») حيث توفر لهم الأم كل سبل الراحة.",
    "defFr": "Le phénomène Tanguy, où les jeunes adultes continuent de loger chez leurs parents.",
    "example": "Die Diskussionsrunde spricht über die Vor- und Nachteile von Hotel Mama.",
    "tip": "Hauptthema in Hören Teil 4."
  },
  {
    "id": "v-m6-t6-5",
    "testId": "modellsatz-12",
    "term": "die Selbstständigkeit",
    "display": "die Selbstständigkeit (Sg.)",
    "pos": "Nomen, f.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Selbstständigkeit"
    ],
    "defDe": "Die Fähigkeit, das eigene Leben und den Alltag unabhängig und eigenverantwortlich zu gestalten.",
    "defAr": "الاستقلالية والاعتماد على النفس وتحمل المسؤولية الذاتية.",
    "defFr": "L'autonomie et l'indépendance dans la vie quotidienne.",
    "example": "Die Kinder müssen ausziehen und lernen, selbstständig zu sein.",
    "tip": "Schlussargument in Hören Teil 4 (Aufgabe 30)."
  },
  {
    "id": "v-m7-t1-1",
    "testId": "modellsatz-13",
    "term": "das Informationszeitalter",
    "display": "das Informationszeitalter (Sg.)",
    "pos": "Nomen, n.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Informationszeitalter",
      "Informationszeitalters"
    ],
    "defDe": "Die gegenwärtige Epoche, die durch die Allgegenwart von digitalen Daten, Computern und weltweiter Vernetzung geprägt ist.",
    "defAr": "عصر المعلومات والتكنولوجيا الرقمية والاتصالات العالمية.",
    "defFr": "L'ère de l'information caractérisée par la prédominance du numérique et des réseaux.",
    "example": "Wir befinden uns im Informationszeitalter und hinterlassen überall Spuren im Netz.",
    "tip": "Schlüsselbegriff in Lesen Teil 1."
  },
  {
    "id": "v-m7-t1-2",
    "testId": "modellsatz-13",
    "term": "der Vormarsch",
    "display": "auf dem Vormarsch sein",
    "pos": "Redewendung",
    "teil": 1,
    "level": "B1",
    "forms": [
      "auf dem Vormarsch"
    ],
    "defDe": "Sich rasch ausbreiten, an Bedeutung und Einfluss gewinnen.",
    "defAr": "في تقدم وانتشار مستمر، يكتسب نفوذاً ورواجاً متزايداً.",
    "defFr": "Être en plein essor, gagner rapidement du terrain.",
    "example": "Der gläserne Mensch ist auf dem Vormarsch.",
    "tip": "Häufige Redewendung in B1-Lesetexten."
  },
  {
    "id": "v-m7-t1-3",
    "testId": "modellsatz-13",
    "term": "die Meinungsfreiheit",
    "display": "die Meinungsfreiheit (Sg.)",
    "pos": "Nomen, f.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Meinungsfreiheit"
    ],
    "defDe": "Das verfassungsmäßige Grundrecht, die eigene Meinung in Wort, Schrift und Bild frei zu äußern.",
    "defAr": "حرية الرأي والتعبير المكفولة دستورياً.",
    "defFr": "La liberté d'expression et d'opinion garantie par la loi.",
    "example": "Dem Gericht war die Meinungsfreiheit der Schüler wichtiger als die Einwände der Lehrerin.",
    "tip": "Zentraler gesellschaftspolitischer Begriff."
  },
  {
    "id": "v-m7-t1-4",
    "testId": "modellsatz-13",
    "term": "das Konsumverhalten",
    "display": "das Konsumverhalten (Sg.)",
    "pos": "Nomen, n.",
    "teil": 1,
    "level": "B1",
    "forms": [
      "Konsumverhalten",
      "Konsumverhaltens"
    ],
    "defDe": "Die Gewohnheiten und Verhaltensweisen der Verbraucher beim Kauf und der Nutzung von Gütern und Dienstleistungen.",
    "defAr": "السلوك الاستهلاكي والأنماط الشرائية لدى المستهلكين.",
    "defFr": "Le comportement de consommation et les habitudes d'achat des clients.",
    "example": "Kundenkarten erfassen detailliert das Konsumverhalten der Kunden.",
    "tip": "Wichtig in Lesen Teil 1 (Aufgabe 5)."
  },
  {
    "id": "v-m7-t2-1",
    "testId": "modellsatz-13",
    "term": "das Lebenskonzept",
    "display": "das Lebenskonzept, -e",
    "pos": "Nomen, n.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Lebenskonzept",
      "Lebenskonzepte",
      "Lebenskonzepts"
    ],
    "defDe": "Der persönliche Plan und die Wertvorstellungen, nach denen jemand sein Leben gestaltet.",
    "defAr": "الخطة الحياتية أو نمط الحياة والخيارات الشخصية التي يحددها الفرد لنفسه.",
    "defFr": "Le projet de vie et les valeurs personnelles qui guident l'existence.",
    "example": "Bewerber überlegen genau, ob eine neue Stelle in ihr Lebenskonzept passt.",
    "tip": "Hauptmotiv in Lesen Teil 2a (Aufgabe 7)."
  },
  {
    "id": "v-m7-t2-2",
    "testId": "modellsatz-13",
    "term": "die Work-Life-Balance",
    "display": "die Work-Life-Balance (Sg.)",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Work-Life-Balance"
    ],
    "defDe": "Ein ausgewogenes und gesundes Verhältnis zwischen beruflicher Arbeitsbelastung und privater Freizeit.",
    "defAr": "التوازن الصحي بين متطلبات العمل ومشاغل الحياة الشخصية والراحة.",
    "defFr": "L'équilibre sain entre vie professionnelle et vie privée.",
    "example": "Eine ausgeglichene Work-Life-Balance ist vielen jungen Menschen wichtiger als ein hohes Gehalt.",
    "tip": "Moderne Arbeitswelt in B1."
  },
  {
    "id": "v-m7-t2-3",
    "testId": "modellsatz-13",
    "term": "die Mitbestimmung",
    "display": "die Mitbestimmung, -en",
    "pos": "Nomen, f.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Mitbestimmung",
      "Mitbestimmungen"
    ],
    "defDe": "Das Recht und die Möglichkeit, bei betrieblichen oder gesellschaftlichen Entscheidungen mitzusprechen und mitzuentscheiden.",
    "defAr": "حق المشاركة في اتخاذ القرار وإبداء الرأي المؤسسي.",
    "defFr": "La participation aux décisions et la cogestion.",
    "example": "Auf Mitsprache und Mitbestimmung legen die Beschäftigten heute großen Wert.",
    "tip": "Schlüsselwort für moderne Arbeitsverhältnisse."
  },
  {
    "id": "v-m7-t2-4",
    "testId": "modellsatz-13",
    "term": "das Jubiläumsjahr",
    "display": "das Jubiläumsjahr, -e",
    "pos": "Nomen, n.",
    "teil": 2,
    "level": "B1",
    "forms": [
      "Jubiläumsjahr",
      "Jubiläumsjahre",
      "Jubiläumsjahres"
    ],
    "defDe": "Das Jahr, in dem an ein besonderes historisches Ereignis oder die Wiederkehr eines Geburtstages feierlich erinnert wird.",
    "defAr": "عام اليوبيل أو السنة التذكارية للاحتفال بمرور ذكرى هامة.",
    "defFr": "L'année jubilaire commémorant un anniversaire marquant.",
    "example": "Bayreuth feiert 2013 das Wagner-Jubiläumsjahr mit Festspielen.",
    "tip": "Kulturwort in Lesen Teil 2b."
  },
  {
    "id": "v-m7-t3-1",
    "testId": "modellsatz-13",
    "term": "der Nachhilfeunterricht",
    "display": "der Nachhilfeunterricht (Sg.)",
    "pos": "Nomen, m.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Nachhilfeunterricht",
      "Nachhilfe"
    ],
    "defDe": "Zusätzlicher privater Unterricht zur Unterstützung von Schülern bei Verständnisschwierigkeiten in einzelnen Schulfächern.",
    "defAr": "دروس الدعم والتقوية الإضافية للطلاب ذوي الصعوبات الدراسية.",
    "defFr": "Les cours de soutien scolaire et de rattrapage.",
    "example": "Nachhilfeunterricht hilft Schülern mit Rechtschreib- und Grammatikproblemen.",
    "tip": "Passende Anzeige H in Lesen Teil 3."
  },
  {
    "id": "v-m7-t3-2",
    "testId": "modellsatz-13",
    "term": "der Fernunterricht",
    "display": "der Fernunterricht (Sg.)",
    "pos": "Nomen, m.",
    "teil": 3,
    "level": "B1",
    "forms": [
      "Fernunterricht",
      "Fernunterrichts"
    ],
    "defDe": "Unterricht, bei dem Lehrende und Lernende räumlich getrennt sind und der über Lehrmaterialien und digitale Medien stattfindet.",
    "defAr": "التعليم عن بعد والدراسة المنزلية المنظمة بالمراسلة أو عبر الإنترنت.",
    "defFr": "L'enseignement à distance par correspondance ou numérique.",
    "example": "Weiterbildung durch Fernunterricht ermöglicht den Schulabschluss von zu Hause.",
    "tip": "Anzeige D in Lesen Teil 3."
  },
  {
    "id": "v-m7-t4-1",
    "testId": "modellsatz-13",
    "term": "die Kernfusion",
    "display": "die Kernfusion, -en",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Kernfusion",
      "Kernfusionen"
    ],
    "defDe": "Die Verschmelzung leichter Atomkerne zu schwereren Kernen unter Freisetzung enormer Energiemengen.",
    "defAr": "الاندماج النووي لإنتاج طاقة هائلة من اتحاد الذرات.",
    "defFr": "La fusion thermonucléaire dégageant une énergie colossale.",
    "example": "Die Erforschung der Kernfusion als Zukunftsenergie macht weltweit Fortschritte.",
    "tip": "Lesen Teil 4 (Aufgabe 20)."
  },
  {
    "id": "v-m7-t4-2",
    "testId": "modellsatz-13",
    "term": "die Energiewende",
    "display": "die Energiewende (Sg.)",
    "pos": "Nomen, f.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Energiewende"
    ],
    "defDe": "Der grundlegende Übergang von fossilen und nuklearen Brennstoffen hin zu erneuerbaren Energien wie Sonne und Wind.",
    "defAr": "التحول الطاقي والانتقال الشامل إلى الطاقات المتجددة والنظيفة.",
    "defFr": "La transition énergétique vers des sources d'énergie renouvelables.",
    "example": "Die Energiewende fordert Politik, Wirtschaft und Verbraucher heraus.",
    "tip": "Zentraler Begriff in der deutschen Umwelt- und Energiepolitik."
  },
  {
    "id": "v-m7-t4-3",
    "testId": "modellsatz-13",
    "term": "der Atomausstieg",
    "display": "der Atomausstieg (Sg.)",
    "pos": "Nomen, m.",
    "teil": 4,
    "level": "B1",
    "forms": [
      "Atomausstieg",
      "Kernenergieausstieg"
    ],
    "defDe": "Die geplante und gesetzliche Stilllegung aller Kernkraftwerke zur Stromerzeugung.",
    "defAr": "التخلي التدريجي والنهائي عن الطاقة النووية وإغلاق المفاعلات.",
    "defFr": "La sortie programmée du nucléaire civil.",
    "example": "Wir sollten so schnell wie möglich den Ausstieg aus der Kernenergie schaffen.",
    "tip": "Forderung von Umweltschützern in Lesen Teil 4."
  },
  {
    "id": "v-m7-t5-1",
    "testId": "modellsatz-13",
    "term": "der Knigge",
    "display": "der Badeknigge / Knigge, -s",
    "pos": "Nomen, m.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Knigge",
      "Badeknigge"
    ],
    "defDe": "Ein Verhaltenskodex oder Leitfaden für höfliches und sicheres Verhalten in einer bestimmten Situation.",
    "defAr": "دليل قواعد السلوك وآداب التصرف السليم (الإتيكيت).",
    "defFr": "Le code de savoir-vivre et les règles de bonne conduite.",
    "example": "Der Badeknigge fasst die wichtigsten Sicherheitsregeln am Strand zusammen.",
    "tip": "Kultureller Begriff nach Adolph Freiherr Knigge."
  },
  {
    "id": "v-m7-t5-2",
    "testId": "modellsatz-13",
    "term": "die Verdauung",
    "display": "die Verdauung (Sg.)",
    "pos": "Nomen, f.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Verdauung"
    ],
    "defDe": "Die biologische Zersetzung und Verwertung von Nahrungsmitteln im Magen-Darm-Trakt.",
    "defAr": "عملية الهضم وتحليل الأغذية في الجهاز الهضمي.",
    "defFr": "La digestion et l'assimilation des aliments dans l'organisme.",
    "example": "Nach dem Essen hat für den Körper die Verdauung Vorrang vor sportlicher Anstrengung.",
    "tip": "Medizinischer Grundsatz in Lesen Teil 5."
  },
  {
    "id": "v-m7-t5-3",
    "testId": "modellsatz-13",
    "term": "die Strömung",
    "display": "die Strömung, -en",
    "pos": "Nomen, f.",
    "teil": 5,
    "level": "B1",
    "forms": [
      "Strömung",
      "Strömungen"
    ],
    "defDe": "Die gerichtete Bewegung von Wasser oder Luft, die erhebliche Kräfte entwickeln kann.",
    "defAr": "التيار المائي أو الهوائي وسرعة تدفق المياه.",
    "defFr": "Le courant marin ou fluvial pouvant présenter un danger.",
    "example": "Die Kraft der Wellen und Strömungen in der Ostsee wird oft unterschätzt.",
    "tip": "Wichtig für Baderegeln und Wassersicherheit."
  },
  {
    "id": "v-m7-t6-1",
    "testId": "modellsatz-13",
    "term": "der Speisewagen",
    "display": "der Speisewagen, -",
    "pos": "Nomen, m.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Speisewagen",
      "Bordbistro"
    ],
    "defDe": "Ein Reisezugwagen, der als rollendes Restaurant Mahlzeiten und Erfrischungen anbietet.",
    "defAr": "عربة المطعم في القطار لتقديم المأكولات والمشروبات للركاب.",
    "defFr": "La voiture-restaurant aménagée à bord d'un train.",
    "example": "Für das Mittagessen im Speisewagen des Intercitys muss man reservieren.",
    "tip": "Hören Teil 1 (Aufgabe 1 & 2)."
  },
  {
    "id": "v-m7-t6-2",
    "testId": "modellsatz-13",
    "term": "das Löschfahrzeug",
    "display": "das Löschfahrzeug, -e",
    "pos": "Nomen, n.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Löschfahrzeug",
      "Löschfahrzeuge"
    ],
    "defDe": "Ein speziell ausgerüstetes Feuerwehrfahrzeug zur Bekämpfung von Bränden.",
    "defAr": "سيارة إطفاء الحرائق المجهزة بالمعدات وخراطيم المياه.",
    "defFr": "Le camion de pompiers et véhicule d'extinction des incendies.",
    "example": "Löschfahrzeuge der Flughafenfeuerwehr begleiten scheidende Piloten oft mit einer Wassertaufe.",
    "tip": "Hören Teil 2 (Aufgabe 13)."
  },
  {
    "id": "v-m7-t6-3",
    "testId": "modellsatz-13",
    "term": "die Linienfluggesellschaft",
    "display": "die Linienfluggesellschaft, -en",
    "pos": "Nomen, f.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Linienfluggesellschaft",
      "Linienfluggesellschaften",
      "Linienflug"
    ],
    "defDe": "Ein Luftfahrtunternehmen, das regelmäßige Flüge nach einem festen, veröffentlichten Flugplan durchführt.",
    "defAr": "شركة طيران منتظم تسير رحلات مجدولة وفق جدول زمني محدد ومعلن.",
    "defFr": "Une compagnie aérienne régulière opérant selon un plan de vol fixe.",
    "example": "Linienfluggesellschaften bieten oft umfassenderen Bordservice als Billigflieger.",
    "tip": "Thema in Hören Teil 4."
  },
  {
    "id": "v-m7-t6-4",
    "testId": "modellsatz-13",
    "term": "die Billigfluglinie",
    "display": "die Billigfluglinie, -n",
    "pos": "Nomen, f.",
    "teil": 6,
    "level": "B1",
    "forms": [
      "Billigfluglinie",
      "Billigfluglinien",
      "Billigflieger"
    ],
    "defDe": "Eine Fluggesellschaft, die Flugreisen zu sehr niedrigen Basispreisen anbietet, dafür jedoch Zusatzleistungen berechnet.",
    "defAr": "شركة طيران اقتصادي منخفض التكلفة تقدم تذاكر رخيصة مع فرض رسوم على الخدمات الإضافية.",
    "defFr": "Une compagnie aérienne à bas coût (low-cost) proposant des tarifs de base très attractifs.",
    "example": "Billigfluglinien fliegen meist kleinere, abgelegene Regionalflughäfen an.",
    "tip": "Schwerpunkt in Hören Teil 4 (Aufgaben 23-30)."
  }
];

/* ---------------- STORAGE & RETENTION HELPERS ---------------- */

const VOCAB_STORAGE_KEY = 'b1_saved_vocab_ids';
const CUSTOM_VOCAB_STORAGE_KEY = 'b1_custom_vocab_v1';

function getSavedVocabIds() {
  try {
    const raw = localStorage.getItem(VOCAB_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveVocabId(vocabId) {
  const ids = getSavedVocabIds();
  if (!ids.includes(vocabId)) {
    ids.push(vocabId);
    try {
      localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {}
  }
}

function removeSavedVocabId(vocabId) {
  let ids = getSavedVocabIds();
  ids = ids.filter(id => id !== vocabId);
  try {
    localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(ids));
  } catch (e) {}
}

function isVocabSaved(vocabId) {
  return getSavedVocabIds().includes(vocabId);
}

function toggleSaveVocab(vocabId) {
  if (isVocabSaved(vocabId)) {
    removeSavedVocabId(vocabId);
    return false;
  } else {
    saveVocabId(vocabId);
    return true;
  }
}

/* ---------------- CUSTOM VOCABULARY CRUD ---------------- */

function getCustomVocab() {
  try {
    const raw = localStorage.getItem(CUSTOM_VOCAB_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCustomVocabList(list) {
  try {
    localStorage.setItem(CUSTOM_VOCAB_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {}
}

function getAllVocab() {
  const custom = getCustomVocab();
  if (!custom || custom.length === 0) return b1VocabData;
  const map = new Map();
  b1VocabData.forEach(item => map.set(item.id, item));
  custom.forEach(item => map.set(item.id, item));
  return Array.from(map.values());
}

function findVocabByTerm(term) {
  if (!term || typeof term !== 'string') return null;
  const clean = term.trim().toLowerCase();
  if (!clean) return null;
  const all = getAllVocab();
  return all.find(item => {
    if (item.term && item.term.toLowerCase() === clean) return true;
    if (Array.isArray(item.forms) && item.forms.some(f => f && f.toLowerCase() === clean)) return true;
    return false;
  }) || null;
}

function addCustomVocab(word) {
  if (!word || !word.term) throw new Error('Wort muss einen Begriff enthalten.');
  const cleanTerm = word.term.trim();
  const wordId = word.id || ('cv-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4));

  const entry = {
    id: wordId,
    term: cleanTerm,
    display: word.display || cleanTerm,
    pos: word.pos || 'Nomen',
    teil: word.teil !== undefined ? word.teil : 0,
    level: word.level || 'B1',
    forms: Array.isArray(word.forms) && word.forms.length > 0 ? word.forms : [cleanTerm],
    defDe: word.defDe || cleanTerm,
    defAr: word.defAr || '',
    defFr: word.defFr || '',
    example: word.example || '',
    tip: word.tip || 'Eigenes B1-Wort',
    isCustom: true,
    addedAt: word.addedAt || Date.now()
  };

  const list = getCustomVocab().filter(w => w.id !== entry.id && w.term.toLowerCase() !== cleanTerm.toLowerCase());
  list.unshift(entry);
  saveCustomVocabList(list);

  // Sync in-memory b1VocabData
  const existingIdx = b1VocabData.findIndex(w => w.id === entry.id || w.term.toLowerCase() === cleanTerm.toLowerCase());
  if (existingIdx !== -1) {
    b1VocabData[existingIdx] = entry;
  } else {
    b1VocabData.unshift(entry);
  }

  // Automatically save/star it so it appears in saved vocab & flashcards
  saveVocabId(entry.id);

  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent('b1-vocab-updated', { detail: { action: 'add', item: entry } }));
  }

  return entry;
}

function removeCustomVocab(wordId) {
  const list = getCustomVocab().filter(w => w.id !== wordId);
  saveCustomVocabList(list);

  const idx = b1VocabData.findIndex(w => w.id === wordId);
  if (idx !== -1) {
    b1VocabData.splice(idx, 1);
  }

  removeSavedVocabId(wordId);

  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent('b1-vocab-updated', { detail: { action: 'remove', id: wordId } }));
  }

  return true;
}

// Merge persisted custom vocab at evaluation
try {
  const customInit = getCustomVocab();
  if (Array.isArray(customInit)) {
    customInit.forEach(cw => {
      if (!b1VocabData.some(w => w.id === cw.id)) {
        b1VocabData.unshift(cw);
      }
    });
  }
} catch (e) {}

function getVocabById(vocabId) {
  return getAllVocab().find(v => v.id === vocabId) || null;
}

function getVocabForTeil(teilId, optTestId) {
  const activeTestId = optTestId || (typeof currentTest !== 'undefined' ? currentTest?.id : null);
  return getAllVocab().filter(v => {
    if (v.testId && activeTestId && v.testId !== activeTestId) return false;
    if (!teilId) return true;
    return v.teil === teilId || v.teil === 0;
  });
}

function searchVocabList(query, filter = 'all', currentTeil = 1, optTestId) {
  const activeTestId = optTestId || (typeof currentTest !== 'undefined' ? currentTest?.id : null);
  const q = (query || '').trim().toLowerCase();
  const savedIds = getSavedVocabIds();

  return getAllVocab().filter(item => {
    if (item.testId && activeTestId && item.testId !== activeTestId) return false;
    if (filter === 'saved' && !savedIds.includes(item.id)) return false;
    if (filter === 'teil' && item.teil !== currentTeil && item.teil !== 0) return false;

    if (!q) return true;
    return (
      (item.term && item.term.toLowerCase().includes(q)) ||
      (item.defDe && item.defDe.toLowerCase().includes(q)) ||
      (item.defAr && item.defAr.toLowerCase().includes(q)) ||
      (item.defFr && item.defFr.toLowerCase().includes(q)) ||
      (item.example && item.example.toLowerCase().includes(q))
    );
  });
}

/**
 * Pronounce word using browser native SpeechSynthesis
 */
function speakGermanWord(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/\(.*?\)/g, '').replace(/,/g, '').trim();
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = 'de-DE';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

if (typeof window !== 'undefined') {
  window.b1VocabData = b1VocabData;
  window.getAllVocab = getAllVocab;
  window.getVocabById = getVocabById;
  window.getVocabForTeil = getVocabForTeil;
  window.searchVocabList = searchVocabList;
  window.speakGermanWord = speakGermanWord;
  window.isVocabSaved = isVocabSaved;
  window.toggleSaveVocab = toggleSaveVocab;
  window.getSavedVocabIds = getSavedVocabIds;
  window.getCustomVocab = getCustomVocab;
  window.addCustomVocab = addCustomVocab;
  window.removeCustomVocab = removeCustomVocab;
  window.findVocabByTerm = findVocabByTerm;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    b1VocabData,
    getAllVocab,
    getVocabById,
    getVocabForTeil,
    searchVocabList,
    speakGermanWord,
    isVocabSaved,
    toggleSaveVocab,
    getSavedVocabIds,
    getCustomVocab,
    addCustomVocab,
    removeCustomVocab,
    findVocabByTerm
  };
}
