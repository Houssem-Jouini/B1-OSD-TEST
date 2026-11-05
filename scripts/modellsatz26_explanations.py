#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 26 - Explanations Data (Modelltest 20 — Hueber Zertifikat B1)
Complete trilingual pedagogical explanations (de/fr/ar) with authentic quotes
for all 60 questions: 1-30 (Lesen) and h1-h30 (Hören).
"""

explanations = {
  # ==================== LESEN TEIL 1 (1-6) ====================
  "1": {
    "quote": "Ich wohne seit 1984 dort und putze regelmäßig alle vierzehn Tage.",
    "whyCorrect": {
      "de": "Richtig. Jutta berichtet von ihrer Pflicht zur Treppenreinigung, der sie regelmäßig alle zwei Wochen nachkommt. Das Treppenhaus wird folglich von den Hausbewohnern selbst geputzt.",
      "fr": "Vrai. Jutta mentionne son obligation de nettoyer l'escalier tous les quinze jours, ce qui confirme que ce sont bien les résidents de l'immeuble qui s'occupent du ménage des parties communes.",
      "ar": "صحيح. تذكر يوتا التزامها بتنظيف الدرج بانتظام كل أسبوعين، مما يؤكد أن سكان البناية هم من يقومون بتنظيف الدرج بأنفسهم."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da die Hausbewohner laut Text eine eigene Reinigungspflicht für das Treppenhaus haben.",
      "fr": "« Faux » ne convient pas, car le texte indique clairement que le nettoyage de l'escalier incombe aux locataires.",
      "ar": "«خطأ» غير صحيح لأن النص يوضح صراحة وجود واجب تنظيف متبادل بين سكان البناية."
    }
  },
  "2": {
    "quote": "Da die Waschmaschine in der allgemeinen Waschküche nur über einen Zähler läuft...",
    "whyCorrect": {
      "de": "Richtig. Die Waschmaschine befindet sich in der „allgemeinen Waschküche“ und läuft über einen gemeinsamen Zähler; sie steht somit allen Hausbewohnern zur Verfügung.",
      "fr": "Vrai. La machine à laver se trouve dans la buanderie commune (« allgemeinen Waschküche ») et fonctionne sur un compteur partagé ; elle est donc à la disposition de tous les résidents.",
      "ar": "صحيح. توجد الغسالة في غرفة الغسيل العامة المشتركة وتعمل بعداد موحد، أي أنها مخصصة لاستخدام جميع سكان المبنى."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da der Ausdruck „allgemeine Waschküche“ die gemeinschaftliche Nutzung durch alle Parteien belegt.",
      "fr": "« Faux » est inexact, car l'expression « allgemeine Waschküche » prouve bien l'usage partagé de l'appareil.",
      "ar": "«خطأ» لا ينطبق لأن استخدام تعبير «غرفة الغسيل العامة» يثبت الاستعمال المشترك."
    }
  },
  "3": {
    "quote": "Einige Tage später stand im gemeinsam genutzten Flur ein Schrank, der so breit war, dass ich kaum vorbeikam, zumal ich gehbehindert bin.",
    "whyCorrect": {
      "de": "Richtig. Jutta schreibt wörtlich: „zumal ich gehbehindert bin“. Sie ist mobilitätseingeschränkt und kann daher nicht gut gehen.",
      "fr": "Vrai. Jutta écrit textuellement : « d'autant plus que je souffre d'un handicap moteur (gehbehindert) ». Elle a donc de réelles difficultés à marcher.",
      "ar": "صحيح. تصرح يوتا بوضوح: «خاصة وأنني أعاني من إعاقة في المشي»، مما يعني أنها لا تستطيع السير بصورة جيدة."
    },
    "whyIncorrect": {
      "de": "„Falsch“ widerspricht der expliziten Angabe von Jutta, dass sie gehbehindert ist.",
      "fr": "« Faux » est en contradiction directe avec le fait qu'elle déclare expressément son handicap de marche.",
      "ar": "«خطأ» يتعارض مع تصريحها الواضح بأنها تعاني من إعاقة حركية."
    }
  },
  "4": {
    "quote": "Zweimal musste der Vermieter schriftlich auffordern, das Möbelstück zu entfernen.",
    "whyCorrect": {
      "de": "Falsch. Der Vermieter stellte den Schrank nicht zurück in die Wohnung, sondern forderte die Nachbarn zweimal schriftlich auf, das Möbelstück aus dem Flur wegzuräumen.",
      "fr": "Faux. Le propriétaire n'a pas déplacé l'armoire lui-même dans le logement ; il a simplement exigé par écrit à deux reprises que les voisins l'enlèvent.",
      "ar": "خطأ. لم يقم صاحب البيت بإعادة الخزانة إلى الشقة بنفسه، بل وجه إنذارين كتابيين إلى المستأجرين لإزالة قطعة الأثاث من الممر."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, weil der Vermieter lediglich schriftliche Aufforderungen verschickte, aber nicht selbst Möbel schleppte.",
      "fr": "« Vrai » est incorrect, le rôle du bailleur s'étant limité à envoyer des sommations écrites.",
      "ar": "«صحيح» غير صحيح لأن المالك اقتصر على توجيه طلبات وإخطارات خطية للمستأجرين."
    }
  },
  "5": {
    "quote": "Tagelang wurde in der Wohnung gegenüber selbst in den Ruhezeiten gehämmert, gebohrt und gegen die Wand ... geklopft.",
    "whyCorrect": {
      "de": "Falsch. Die neuen Mieter machten ausdrücklich auch während der gesetzlichen Ruhezeiten Lärm („selbst in den Ruhezeiten... auch bzw. gerade nach 23.00 Uhr“).",
      "fr": "Faux. Les nouveaux locataires faisaient du vacarme précisément pendant les heures de repos (« selbst in den Ruhezeiten... gerade nach 23.00 Uhr »).",
      "ar": "خطأ. كان المستأجرون الجدد يصدرون الضوضاء حتى في أوقات الراحة المحددة قانونياً («حتى في أوقات الراحة... وخاصة بعد الساعة الحادية عشرة ليلاً»)."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da der Lärm laut Text gerade auch in den Ruhezeiten und spät nachts stattfand.",
      "fr": "« Vrai » est contredit par le texte qui insiste sur le fait que le bruit avait lieu durant les périodes de repos.",
      "ar": "«صحيح» غير دقيق لأن النص يؤكد حدوث الدق وأعمال الشغب في فترات الهدوء أيضاً."
    }
  },
  "6": {
    "quote": "Ich bin – da nicht gesund – inzwischen mit den Nerven fertig, bekomme Herzrasen, schon wenn ich die Nachbarn kommen oder gehen höre.",
    "whyCorrect": {
      "de": "Falsch. Jutta berichtet vom genauen Gegenteil: Sie ist „mit den Nerven fertig“ und leidet unter „Herzrasen“. Sie hat also sehr wohl massive gesundheitliche Probleme mit Nerven und Herz.",
      "fr": "Faux. Jutta explique exactement l'inverse : elle est « à bout de nerfs » et souffre de « tachycardie / palpitations cardiaques » (Herzrasen). Elle a donc de graves troubles nerveux et cardiaques.",
      "ar": "خطأ. توضح يوتا العكس تماماً: فقد «انهارت أعصابها تماماً» وتعاني من «تسارع في ضربات القلب»، وبالتالي فهي تعاني فعلياً من مشاكل في الأعصاب والقلب."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, da ihre Symptome („Nerven fertig“, „Herzrasen“) im Text unmissverständlich geschildert werden.",
      "fr": "« Vrai » ne convient pas au vu de ses symptômes physiques manifestes décrits dans le courrier.",
      "ar": "«صحيح» غير وارد بسبب وصفها الصريح لانهيار أعصابها وتسارع نبضات قلبها."
    }
  },

  # ==================== LESEN TEIL 2 (7-12) ====================
  "7": {
    "quote": "langsam beginnt die Forschung zu verstehen, welche schädlichen Folgen das Leben gegen die innere Uhr hat. ... Sie bestimmt, wann Pflanzen ... oder wie und wann Menschen schlafen. Außerdem stellt sie die menschliche Körpertemperatur ein und steuert Hormone.",
    "whyCorrect": {
      "de": "Option b ist richtig. Der Text schildert umfassend, welche zentrale Bedeutung die innere Uhr für Körperfunktionen, Schlaf, Hormone und Gesundheit des Menschen besitzt.",
      "fr": "L'option b est correcte. L'article détaille le rôle essentiel que joue l'horloge biologique pour les êtres humains (sommeil, température, hormones, santé).",
      "ar": "الخيار b هو الصحيح. يستعرض المقال الدور الحيوي البالغ الذي تلعبه «الساعة البيولوجية» في حياة الإنسان ووظائفه الجسدية وصحته."
    },
    "whyIncorrect": {
      "de": "Option a greift zu kurz (wird nur am Rande erwähnt) und c beschränkt sich unzulässig auf Tiere, während der Mensch im Zentrum des Artikels steht.",
      "fr": "L'option a est trop restrictive et l'option c se focalise à tort sur les animaux alors que le sujet principal est l'impact sur l'homme.",
      "ar": "الخيار a جزئي للغاية والخيار c يحصر الموضوع في الحيوانات بينما يركز النص بالأساس على الإنسان."
    }
  },
  "8": {
    "quote": "Außerdem stellt sie die menschliche Körpertemperatur ein und steuert Hormone.",
    "whyCorrect": {
      "de": "Option a ist richtig. Die innere Uhr reguliert und bestimmt die Körpertemperatur des Menschen („stellt sie die menschliche Körpertemperatur ein“), also wie warm er ist.",
      "fr": "L'option a est correcte. L'horloge interne régule directement la température corporelle humaine (« stellt die menschliche Körpertemperatur ein »), donc le niveau de chaleur du corps.",
      "ar": "الخيار a هو الصحيح. تقوم الساعة البيولوجية بضبط درجة حرارة جسم الإنسان وتنظيمها («stellt die menschliche Körpertemperatur ein»)."
    },
    "whyIncorrect": {
      "de": "Option b ist falsch (sie bestimmt maßgeblich, wie und wann Menschen schlafen) und c ist falsch (sie bestimmt bevorzugte Tageszeiten, nicht die Sportart an sich).",
      "fr": "L'option b est contredite par le texte (elle régule le sommeil) et l'option c confond le moment opportun pour le sport avec le choix de la discipline sportive.",
      "ar": "الخيار b غير صحيح لأنها تؤثر بشدة على النوم، والخيار c غير دقيق لأنها تحدد الأوقات المفضلة لممارسة الرياضة وليس نوع الرياضة نفسه."
    }
  },
  "9": {
    "quote": "„In modernen Gesellschaften leben wir selten im Einklang mit unserer inneren Uhr. Einige von uns durchqueren auf Reisen in kürzester Zeit mehrere Zeitzonen, andere wiederum ... arbeiten nach Schichtplänen.“ Viele Menschen leiden unter einer Art von „sozialem Jetlag“...",
    "whyCorrect": {
      "de": "Option c ist richtig. Schichtarbeit, Reisen und gesellschaftliche Zeitvorgaben führen dazu, dass moderne Menschen selten im Einklang mit ihrer inneren Uhr leben können.",
      "fr": "L'option c est correcte. Le mode de vie contemporain (travail posté, fuseaux horaires, contraintes sociales) empêche souvent les individus de vivre en accord avec leur rythme biologique.",
      "ar": "الخيار c هو الصحيح. نمط الحياة الحديث (العمل بنظام الورديات، السفر، التوقيت الاجتماعي) يحرم الناس غالباً من العيش بانسجام مع ساعتهم الداخلية."
    },
    "whyIncorrect": {
      "de": "Option a ist nicht die Kernaussage und b steht im direkten Widerspruch zu Roennebergs Befund („leben selten im Einklang“).",
      "fr": "L'option b contredit frontalement le texte (« nous vivons rarement en harmonie avec notre horloge ») et l'option a ne résume pas le propos.",
      "ar": "الخيار b يناقض النص تماماً والخيار a لا يمثل الفكرة المحورية للفقرة."
    }
  },
  "10": {
    "quote": "Dabei sind viele dieser Tiere inzwischen sehr selten und sind viel Geld wert. ... Für besonders seltene Stücke sind Liebhaber bereit, viele Tausend Euro zu zahlen.",
    "whyCorrect": {
      "de": "Option b ist richtig. Der Text erklärt, dass antike Teddybären seltene Sammlerobjekte sind und für viele tausend Euro gehandelt werden können.",
      "fr": "L'option b est correcte. L'article démontre que les ours en peluche anciens peuvent valoir de véritables fortunes auprès des collectionneurs passionnés.",
      "ar": "الخيار b هو الصحيح. يوضح المقال أن الدببة القماشية القديمة قد تكون نادرة وتباع بآلاف اليوروهات كقطع أثرية باهظة الثمن."
    },
    "whyIncorrect": {
      "de": "Option a betrifft nur die Kindheit früher und c behauptet eine unzutreffende Wertung über die Qualität der Firma Steiff.",
      "fr": "L'option a ne concerne que l'enfance passée et l'option c porte un jugement absolu sur la qualité non affirmé dans le texte.",
      "ar": "الخيار a يتعلق بطفولة الماضي فقط والخيار c يطلق حكماً لم يرد في المقال حول جودة شركة شتايف."
    }
  },
  "11": {
    "quote": "Das Plüschtier dient als guter Freund oder Einschlafhilfe und tröstet das Kind, wenn es traurig ist.",
    "whyCorrect": {
      "de": "Option a ist richtig. Für Kinder ist der Teddybär ein treuer Begleiter, Seelentröster und eine Einschlafhilfe, also von großer emotionaler Wichtigkeit.",
      "fr": "L'option a est correcte. Pour les jeunes enfants, l'ours en peluche est un ami intime, un réconfort et une aide pour s'endormir, donc extrêmement important.",
      "ar": "الخيار a هو الصحيح. يمثل الدب القماشي أهمية عاطفية بالغة للأطفال حيث يعمل كصديق وفيّ ومواسٍ عند الحزن ومساعد على النوم."
    },
    "whyIncorrect": {
      "de": "Option b ist ungenau (sie landen auf Dachböden/in Kellern, nicht zwingend im Müll) und c ist falsch (mit Beginn der Pubertät ist das Interesse vorbei).",
      "fr": "L'option c est fausse car l'intérêt cesse à la puberté, et l'option b exagère en parlant de poubelle alors qu'ils sont stockés au grenier.",
      "ar": "الخيار c غير صحيح لأن اهتمام المراهقين ينتهي مع البلوغ، والخيار b غير دقيق لأنها تخزن في السندرة أو القبو وليست مهملات في القمامة."
    }
  },
  "12": {
    "quote": "Dann muss das Alter anders bestimmt werden, z.B. durch die Art und den Sitz der Nähte, die Augen oder das Gewicht des Teddys.",
    "whyCorrect": {
      "de": "Option c ist richtig. Fehlt das Markenzeichen, lässt sich das Alter unter anderem an der Beschaffenheit und Art der Augen des Teddybären ablesen.",
      "fr": "L'option c est correcte. À défaut de marque de fabrique, l'âge peut être déterminé en observant les yeux, le poids ou l'emplacement des coutures de la peluche.",
      "ar": "الخيار c هو الصحيح. في حال ضياع علامة الشركة، يمكن تحديد عمر الدب الأثري من خلال فحص عينيه وطبيعة خياطته ووزنه."
    },
    "whyIncorrect": {
      "de": "Option a ist missverständlich (der Knopf im Ohr ist oft verloren) und b schließt fälschlicherweise alternative Bestimmungsmethoden aus.",
      "fr": "L'option b utilise le mot restrictif « uniquement » (« nur ») ce qui est faux, et l'option a omet le fait que le bouton d'oreille disparaît souvent.",
      "ar": "الخيار b خاطئ لاقتصاره بكلمة «فقط» على العلامة التجارية، والخيار a غير دقيق لأن الزر غالباً ما يكون مفقوداً."
    }
  },

  # ==================== LESEN TEIL 3 (13-19) ====================
  "13": {
    "quote": "Anzeige b (London): „nur November bis Februar“ · Suchzeitraum: April oder Mai",
    "whyCorrect": {
      "de": "0 (keine passende Anzeige). Das Angebot für London (Anzeige b) ist ausdrücklich auf den Zeitraum von November bis Februar beschränkt. Da die Klassenfahrt im April oder Mai stattfinden soll, passt keine Anzeige.",
      "fr": "0 (aucune annonce). L'offre pour Londres (annonce b) est réservée à la période de novembre à février. Le voyage devant avoir lieu en avril ou mai, aucune annonce ne convient.",
      "ar": "0 (لا يوجد إعلان مناسب). رحلة لندن (الإعلان b) مقيدة صراحة بالفترة من نوفمبر حتى فبراير، وحيث إن الرحلة المطلوبة في أبريل أو مايو، فلا يوجد أي إعلان مطابق."
    },
    "whyIncorrect": {
      "de": "Anzeige b scheidet wegen der restriktiven Reisezeit (nur November bis Februar) zwingend aus.",
      "fr": "L'annonce b est exclue en raison de la saisonnalité limitée (uniquement de novembre à février).",
      "ar": "الإعلان b مستبعد تماماً بسبب اقتصاره على أشهر الشتاء فقط (نوفمبر إلى فبراير)."
    }
  },
  "14": {
    "quote": "Anzeige g: „Rundreise in Griechenland ... 4-tägige Klassenfahrt in modernem Reisebus ... Thessaloniki – Vergina – Pindosgebirge – Thessaloniki“",
    "whyCorrect": {
      "de": "Anzeige g passt. Die Schüler kennen bereits Athen und suchen eine Reise in einen anderen Landesteil Griechenlands. Anzeige g bietet eine Bus-Rundreise in Nordgriechenland (Thessaloniki, Pindosgebirge).",
      "fr": "L'annonce g convient. Les élèves connaissent déjà Athènes et souhaitent explorer une autre région de Grèce. L'annonce g propose un circuit en autocar en Grèce du Nord (Thessalonique, massif du Pinde).",
      "ar": "الإعلان g هو المناسب. يعرف الطلاب أثينا ويرغبون في استكشاف منطقة أخرى في اليونان؛ ويقدم الإعلان g جولة حافلة في شمال اليونان (سالونيك وجبال بيندوس)."
    },
    "whyIncorrect": {
      "de": "Anzeige a führt direkt wieder nach Athen, was die Schüler ausdrücklich ausschließen.",
      "fr": "L'annonce a retourne directement à Athènes, ce que les élèves ont précisément exclu.",
      "ar": "الإعلان a يتجه إلى أثينا مجدداً، وهو ما استبعده الطلاب صراحة."
    }
  },
  "15": {
    "quote": "Anzeige d: „Möhnesee ... 5 Tage – besonders beliebt bei den Klassen 4–7 · tolles Aktiv-Programm ... täglich Windsurfen, Kanufahren, Ballspiele“",
    "whyCorrect": {
      "de": "Anzeige d passt. Herr Pohl sucht für seine 5. Klasse sportliche Aktivitäten. Am Möhnesee gibt es täglich Windsurfen, Kanufahren und Ballspiele für die Klassen 4 bis 7.",
      "fr": "L'annonce d convient. L'enseignant recherche un séjour actif et sportif pour sa classe de 5e. Le séjour au lac de Möhnesee propose planche à voile, canoë et jeux de ballon quotidiens pour les 4e-7e classes.",
      "ar": "الإعلان d هو المناسب. يبحث الأستاذ بول لصفه الخامس عن أنشطة رياضية متنوعة؛ وتوفر بحيرة مونهيسيه ركوب الأمواج، والتجديف بالكانو، وألعاب الكرة يومياً لتلاميذ الصفوف 4-7."
    },
    "whyIncorrect": {
      "de": "Anzeige i (Skigebiet) ist nur bis März gültig und fällt damit außerhalb des gesuchten Reisezeitraums (April/Mai).",
      "fr": "L'annonce i (ski) n'est valable que jusqu'en mars et ne correspond pas aux dates recherchées (avril/mai).",
      "ar": "الإعلان i (رحلة التزلج) ينتهي في شهر مارس ولا يغطي موعد الرحلة في أبريل أو مايو."
    }
  },
  "16": {
    "quote": "Anzeige j: „Marthalen im Züricher Weinland - Busreise ... Bauernhof als Unterkunft mit tollen Projekten · Themenkreise: Lebensmittelproduktion, Weinberge, Feld und Garten, Tiere“",
    "whyCorrect": {
      "de": "Anzeige j passt. Frau Keller aus Zürich möchte ihren Schülern das Landleben näherbringen. Marthalen liegt im Zürcher Weinland und bietet einen Bauernhof mit Projekten zu Tieren, Landwirtschaft und Garten.",
      "fr": "L'annonce j convient. Cette enseignante de Zurich souhaite faire découvrir la vie rurale à ses élèves. Le séjour à Marthalen dans le vignoble zurichois propose un hébergement à la ferme avec des projets agricoles et animaliers.",
      "ar": "الإعلان j هو المناسب. ترغب المعلمة من زيورخ في تعريف الطلاب بالحياة الريفية والزراعية؛ وتوفر مزرعة مارتهالن في ريف زيورخ مشاريع تفاعلية مع الحيوانات والمحاصيل."
    },
    "whyIncorrect": {
      "de": "Andere Anzeigen bieten reine Städtereisen oder Stausee-Sportprogramme ohne den Schwerpunkt Bauernhof und Landleben.",
      "fr": "Les autres annonces concernent des séjours urbains ou nautiques sans lien avec la vie paysanne.",
      "ar": "بقية الإعلانات تركز على زيارات المدن أو الرياضات المائية دون تسليط الضوء على الحياة الريفية والمزرعة."
    }
  },
  "17": {
    "quote": "Anzeige c: „Berlin - Bahnreise - 5 Tage ... 159,- EUR pro Person · Hin- und Rückfahrt (Reservierungsgebühren inkl.) ... www.klassenreisen.at“",
    "whyCorrect": {
      "de": "Anzeige c passt. Die Linzer Schüler wollen per Bahn nach Berlin fahren, da ein Flug zu teuer ist. Anzeige c ist eine günstige Bahnreise ab Österreich (Anbieter aus Österreich).",
      "fr": "L'annonce c convient. Les lycéens de Linz choisissent le train pour Berlin car l'avion est trop onéreux. L'annonce c propose un forfait ferroviaire économique vers Berlin géré par une agence autrichienne.",
      "ar": "الإعلان c هو المناسب. قرر طلاب لينتس السفر بالقطار إلى برلين لأن تذاكر الطيران باهظة؛ ويقدم الإعلان c رحلة بالقطار بسعر اقتصادي من النمسا."
    },
    "whyIncorrect": {
      "de": "Anzeige h ist eine Flugreise (für die Schüler zu teuer) und f richtet sich nur an Lehrer auf Informationsreise.",
      "fr": "L'annonce h est un voyage en avion (trop cher) et l'annonce f s'adresse exclusivement aux enseignants.",
      "ar": "الإعلان h مخصص لرحلات الطيران وهو مكلف للطلاب، والإعلان f مخصص لرحلات استكشافية للمعلمين فقط."
    }
  },
  "18": {
    "quote": "Anzeige a: „Athen - Flugreise ... 5 Tage ... Hin- und Rückflug ... 4 x Übernachtung in einem Jugendhotel im Zentrum von Athen inkl. Frühstück“",
    "whyCorrect": {
      "de": "Anzeige a passt. Der Geschichtslehrer sucht für seine Klasse eine Reise nach Griechenland inklusive Flug und Hotelunterkunft. Anzeige a bietet Hin- und Rückflug sowie Hotel in Athen.",
      "fr": "L'annonce a convient. Le professeur d'histoire antique recherche un séjour en Grèce combinant vol et hébergement. L'annonce a inclut l'aller-retour en avion et 4 nuits d'hôtel à Athènes.",
      "ar": "الإعلان a هو المناسب. يبحث مدرس التاريخ القديم عن رحلة إلى اليونان تشمل تذاكر الطيران والإقامة؛ ويوفر الإعلان a تذاكر الذهاب والعودة جواً مع الإقامة الفندقية في أثينا."
    },
    "whyIncorrect": {
      "de": "Anzeige g ist eine Busreise und beinhaltet keinen Flug.",
      "fr": "L'annonce g est un circuit en autocar et ne comporte aucun vol aérien.",
      "ar": "الإعلان g عبارة عن رحلة حافلة برية ولا يتضمن أي تذاكر طيران."
    }
  },
  "19": {
    "quote": "Anzeige h: „Berlin · Flugreise – 5 Tage ... Hin- und Rückflug (Steuern & Gebühren inkl.)“",
    "whyCorrect": {
      "de": "Anzeige h passt. Die Zürcher Schüler wollen wegen der weiten Strecke nicht mit der Bahn nach Berlin fahren, sondern fliegen. Anzeige h ist eine 5-tägige Flugreise nach Berlin.",
      "fr": "L'annonce h convient. En raison de la distance importante depuis Zurich, les élèves refusent le train et cherchent un vol pour Berlin. L'annonce h est précisément un séjour de 5 jours avec vol inclus.",
      "ar": "الإعلان h هو المناسب. لا يرغب طلاب زيورخ في السفر بالقطار لبُعد المسافة ويفضلون الطيران؛ ويقدم الإعلان h رحلة طيران مدتها 5 أيام إلى برلين."
    },
    "whyIncorrect": {
      "de": "Anzeige c ist eine Bahnreise und Anzeige f richtet sich ausschließlich an Lehrer.",
      "fr": "L'annonce c est un trajet en train (rejeté par les élèves) et l'annonce f est réservée aux enseignants.",
      "ar": "الإعلان c رحلة بالقطار بينما استبعد الطلاب السفر البري، والإعلان f مخصص للمعلمين فقط."
    }
  },

  # ==================== LESEN TEIL 4 (20-26) ====================
  "20": {
    "quote": "Ich meine, eine Strafe muss einfach und direkt sein, in diesem Fall bringen Geldstrafen gar nichts.",
    "whyCorrect": {
      "de": "Nein. Steffi lehnt eine Geldstrafe ab, weil sie juristisch zu kompliziert ist und ihrer Ansicht nach gar nichts bringt.",
      "fr": "Non. Steffi est opposée à l'amende financière, estimant que la procédure est trop complexe et que les sanctions pécuniaires ne servent absolument à rien.",
      "ar": "لا. ترفض شتيفي العقوبة المالية، وترى أن الإجراءات القانونية معقدة للغاية وأن الغرامات المالية لا تجدي نفعاً على الإطلاق."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da sie wörtlich betont: „in diesem Fall bringen Geldstrafen gar nichts“.",
      "fr": "« Oui » est erroné, car elle affirme textuellement que les amendes financières sont inutiles.",
      "ar": "«نعم» غير صحيح لأنها تؤكد صراحة أن الغرامات لا طائل منها."
    }
  },
  "21": {
    "quote": "aber für diese Schüler gleich eine Strafe zu verlangen, finde ich auch wieder zu extrem. ... Sollte man die Schüler nicht lieber mehr motivieren statt bestrafen?",
    "whyCorrect": {
      "de": "Nein. Robert hält Strafen für zu extrem und plädiert dafür, die Jugendlichen besser zu motivieren, statt sie mit Bußgeldern zu belegen.",
      "fr": "Non. Robert juge les sanctions financières trop radicales et préconise de motiver les élèves plutôt que de les punir avec des amendes.",
      "ar": "لا. يرى روبرت أن فرض الغرامات أمر مبالغ فيه ومتطرف، ويدعو لتحفيز الطلاب وتشجيعهم بدلاً من عقابهم مادياً."
    },
    "whyIncorrect": {
      "de": "„Ja“ trifft nicht zu, weil Robert Strafen ablehnt und stattdessen für Motivation argumentiert.",
      "fr": "« Oui » est faux, Robert rejetant explicitement la sanction au profit de la motivation.",
      "ar": "«نعم» غير وارد لأنه يعارض مبدأ العقاب ويفضل أسلوب التحفيز."
    }
  },
  "22": {
    "quote": "Geldstrafen gegen die Eltern bringen gar nichts. Die Jugendlichen sollten selbst mit „Hilfsdiensten“ bestraft werden...",
    "whyCorrect": {
      "de": "Nein. Martina ist gegen Geldstrafen und befürwortet stattdessen soziale Hilfsdienste (wie Straßenkehren oder Parkpflege) für die schwänzenden Jugendlichen.",
      "fr": "Non. Martina est opposée aux amendes contre les parents et préconise plutôt des travaux d'intérêt général (comme balayer les rues ou nettoyer les parcs).",
      "ar": "لا. تعارض مارتينا الغرامات المالية وترى أنها بلا جدوى، وتقترح بدلاً منها إلزام المتهربين بأعمال خدمة مجتمعية مثل تنظيف الشوارع والحدائق."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist unzutreffend, da sie Geldstrafen ausdrücklich als wirkungslos bezeichnet.",
      "fr": "« Oui » ne convient pas, car elle qualifie expressément les amendes financières d'inefficaces.",
      "ar": "«نعم» غير صحيح لتأكيدها الصريح على عدم فاعلية العقوبات المالية."
    }
  },
  "23": {
    "quote": "Schon allein aus diesem Grund sind solche Strafen absolut gerechtfertigt. Ich wäre da nicht so zimperlich mit den Herrschaften Schulschwänzern und deren Eltern.",
    "whyCorrect": {
      "de": "Ja. Konrad befürwortet harte Geldstrafen ausdrücklich, da Schulschwänzer das Sozialsystem enorme Summen kosten.",
      "fr": "Oui. Konrad est fermement partisan de sanctions financières strictes, soulignant le coût astronomique de l'absentéisme pour le système social.",
      "ar": "نعم. يؤيد كونراد فرض الغرامات المالية بحزم، معللاً ذلك بالتكاليف الضخمة التي يكبدها المتسربون لنظام الرعاية الاجتماعية."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist falsch, da Konrad die Strafen als „absolut gerechtfertigt“ bezeichnet.",
      "fr": "« Non » est erroné, Konrad affirmant que de telles sanctions sont « absolument justifiées ».",
      "ar": "«لا» غير صحيح لأن كونراد يعتبر الغرامات مبررة ومستحقة تماماً."
    }
  },
  "24": {
    "quote": "Das kann doch wohl nicht ernst gemeint sein. ... Ich verstehe nicht, warum sich da die Politiker mit ihren Gesetzen einmischen müssen.",
    "whyCorrect": {
      "de": "Nein. Zwantje hält die Idee für einen schlechten Witz und spricht sich entschieden gegen eine gesetzliche Bestrafung durch die Politik aus.",
      "fr": "Non. Zwantje trouve cette idée absurde et rejette formellement toute ingérence politique ou sanction légale pour l'école buissonnière.",
      "ar": "لا. ترفض تسفانتيه الفكرة تماماً وتعتبرها غير جادة، وتعارض تدخل السياسيين والقوانين لفرض غرامات على الغياب المدرسي."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da Zwantje die Geldstrafe völlig ablehnt („kann doch wohl nicht ernst gemeint sein“).",
      "fr": "« Oui » est contredit par son opposition virulente à toute loi punitive sur ce sujet.",
      "ar": "«نعم» غير صحيح لأنها تستنكر المقترح وترفضه جملة وتفصيلاً."
    }
  },
  "25": {
    "quote": "deshalb ist es richtig, früh etwas dagegen zu unternehmen. ... Das ist eine Maßnahme, die alle aufwecken wird.",
    "whyCorrect": {
      "de": "Ja. Christian unterstützt die Geldstrafe, da Regeln eingehalten werden müssen und die Maßnahme Eltern und Schüler rechtzeitig wachrüttelt.",
      "fr": "Oui. Christian est favorable à cette amende qui, selon lui, réveillera les consciences et incitera les familles à faire respecter les règles.",
      "ar": "نعم. يوافق كريستيان على العقوبة ويرى أنها إجراء فعال لإيقاظ ضمير المجتمع والأسر وإلزام الجميع باحترام القواعد والانضباط."
    },
    "whyIncorrect": {
      "de": "„Nein“ trifft nicht zu, weil Christian die Maßnahme ausdrücklich als „richtig“ und notwendig bewertet.",
      "fr": "« Non » est inexact, car Christian juge l'initiative indispensable et juste.",
      "ar": "«لا» غير صحيح لأنه يرى أن اتخاذ هذا الإجراء في وقت مبكر صائب ومهم."
    }
  },
  "26": {
    "quote": "Ich kann mir aber vorstellen, dass so eine Strafe sie zum Nachdenken zwingen würde. Das wäre doch gut, denn dann würden sie vielleicht den Weg zurück in die Schule finden.",
    "whyCorrect": {
      "de": "Ja. Ole begrüßt eine Geldstrafe, weil sie extreme Schulschwänzer zum Nachdenken bringt und ihnen helfen kann, zur Schule zurückzufinden.",
      "fr": "Oui. Ole soutient cette mesure punitive car elle peut pousser les décrocheurs excessifs à réfléchir et à réintégrer le chemin de l'école.",
      "ar": "نعم. يؤيد أولي فرض الغرامة لأنها ستجبر المبالغين في الهروب على التفكير ومراجعة أنفسهم للعودة إلى مقاعد الدراسة."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist falsch, da Ole eine positive Wirkung der Strafe für Schüler erwartet.",
      "fr": "« Non » est réfuté par sa conviction que l'amende aura un effet salvateur sur les élèves.",
      "ar": "«لا» غير صحيح لاعتقاده بأن الغرامة ستحقق نتيجة إيجابية في تصحيح مسار الطلاب."
    }
  },

  # ==================== LESEN TEIL 5 (27-30) ====================
  "27": {
    "quote": "Punkt 4: „Die Garantie gilt nicht für: ... d) Schäden durch Nichtbeachtung der Bedienungsanleitung...“",
    "whyCorrect": {
      "de": "Option b ist richtig. Gemäß Garantiebedingung 4d ist die Garantie ausgeschlossen, wenn ein Schaden durch Nichtbeachtung der Bedienungsanleitung entsteht.",
      "fr": "L'option b est correcte. Selon la clause 4d, la garantie ne s'applique pas aux dommages consécutifs au non-respect du manuel d'utilisation.",
      "ar": "الخيار b هو الصحيح. تنص الفقرة 4d بوضوح على أن الضمان لا يغطي الأضرار الناتجة عن عدم مراعاة دليل الاستخدام والتعليمات."
    },
    "whyIncorrect": {
      "de": "Option a und c werden in den Ausschlussgründen unter Punkt 4 nicht genannt (die Garantiezeit beträgt 36 oder 60 Monate, nicht 1 Jahr).",
      "fr": "Les options a et c ne correspondent pas aux motifs d'exclusion de la clause (la garantie dure 36 ou 60 mois, et non 1 an).",
      "ar": "الخياران a وc لم يردا ضمن شروط استبعاد الضمان (فترة الضمان 36 أو 60 شهراً وليست سنة واحدة)."
    }
  },
  "28": {
    "quote": "Punkt 3: „Das Gerät wird zum Zwecke der Fehlerbeseitigung durch ein von uns beauftragtes Transportunternehmen kostenfrei abgeholt.“",
    "whyCorrect": {
      "de": "Option a ist richtig. Defekte PC-Systeme werden für den Käufer kostenlos („kostenfrei“) durch ein Speditionsunternehmen zu Hause abgeholt.",
      "fr": "L'option a est correcte. L'appareil défectueux est enlevé gratuitement (« kostenfrei abgeholt ») par un transporteur mandaté par l'entreprise.",
      "ar": "الخيار a هو الصحيح. يتم سحب واستلام الأجهزة المعطلة لإصلاحها مجاناً عبر شركة نقل معتمدة دون تحميل المشتري أي نفقات."
    },
    "whyIncorrect": {
      "de": "Option b und c widersprechen der Abholung durch das Transportunternehmen direkt beim Kunden.",
      "fr": "Les options b et c sont inexactes puisque le client n'a pas à se déplacer au point de vente.",
      "ar": "الخياران b وc غير صحيحين لأن العميل لا يلتزم بنقل الجهاز بنفسه إلى نقطة البيع."
    }
  },
  "29": {
    "quote": "Punkt 5: „Tritt ein Fehler auf, wenden Sie sich bitte ... an uns: 05346 8738024 oder info@pc-service.com.“",
    "whyCorrect": {
      "de": "Option b ist richtig. Bei Auftreten eines Fehlers kann sich der Kunde telefonisch oder per E-Mail an die Firma wenden.",
      "fr": "L'option b est correcte. En cas de panne, le client peut contacter l'assistance soit par téléphone, soit par courrier électronique.",
      "ar": "الخيار b هو الصحيح. عند حدوث عطل بالجهاز، يمكن للمشتري التواصل هاتفياً أو عبر إرسال بريد إلكتروني للشركة."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch (Garantie gilt nur in Deutschland und Österreich) und c erfindet eine nicht existierende 30-Tage-Frist.",
      "fr": "L'option a est fausse (garantie valable uniquement en Allemagne et Autriche) et l'option c invente un délai de 30 jours absent du texte.",
      "ar": "الخيار a خاطئ لأن الضمان سارٍ في ألمانيا والنمسا فقط، والخيار c يخترع مهلة 30 يوماً لا وجود لها في الشروط."
    }
  },
  "30": {
    "quote": "Punkt 1: „in der von Ihnen ausgewählten Garantiezeit (36 oder 60 Monaten) ab Kaufdatum...“",
    "whyCorrect": {
      "de": "Option c ist richtig. Der Käufer wählt beim Kauf selbst aus, ob er eine Garantiezeit von 36 oder 60 Monaten in Anspruch nehmen möchte.",
      "fr": "L'option c est correcte. C'est le client qui choisit la durée de sa garantie au moment de l'achat (36 ou 60 mois).",
      "ar": "الخيار c هو الصحيح. يستطيع المشتري تحديد واختيار فترة الضمان بنفسه بين 36 أو 60 شهراً عند الشراء."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch (die Dauer hängt von der Wahl des Kunden ab, nicht fest vom Preis) und b scheitert an den zahlreichen Ausschlüssen in Punkt 4.",
      "fr": "L'option a est inexacte (la durée dépend du choix de l'acheteur et non du prix) et l'option b ignore les exclusions d'avaries de la clause 4.",
      "ar": "الخيار a خاطئ لارتباط المدة باختيار العميل وليس بسعر الجهاز، والخيار b غير صحيح لوجود استثناءات عديدة للأضرار."
    }
  },

  # ==================== HÖREN TEIL 1 (h1-h10) ====================
  "h1": {
    "quote": "„Zum Abschluss unserer Sendung ‚Rüstig auch im Alter‘ nun noch eine erfreuliche Nachricht...“",
    "whyCorrect": {
      "de": "Richtig. Die Radiodurchsage gehört zur Sendereihe „Rüstig auch im Alter“ und berichtet über Schlafforschung bei älteren Menschen, ist also ein Gesundheitsmagazin.",
      "fr": "Vrai. L'émission radio intitulée « Rüstig auch im Alter » traite de la vitalité et du sommeil des seniors, ce qui correspond bien à un magazine de santé.",
      "ar": "صحيح. تتبع الرسالة الإذاعية برنامج «الحيوية في سن الشيخوخة» وتتناول دراسة طبية حول نوم كبار السن، أي أنها مجلة صحية."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da Thematik und Sendungsname eindeutig gesundheitsbezogen sind.",
      "fr": "« Faux » ne convient pas car la thématique médicale et de bien-être est évidente.",
      "ar": "«خطأ» غير صحيح لأن سياق البرنامج يختص بالصحة ورعاية كبار السن بوضوح."
    }
  },
  "h2": {
    "quote": "„Zehn Nächte lang ... wurde bei 90 Erwachsenen zwischen 20 und 83 Jahren der Schlaf von Forschern überwacht.“",
    "whyCorrect": {
      "de": "Option b ist richtig. Die Versuchspersonen waren zwischen 20 und 83 Jahren alt, also höchstens 83 („nicht älter als 83 Jahre“).",
      "fr": "L'option b est correcte. Les participants avaient entre 20 et 83 ans, ce qui signifie qu'aucun ne dépassait l'âge de 83 ans.",
      "ar": "الخيار b هو الصحيح. تراوحت أعمار المشاركين بين 20 و83 عاماً، أي أن أكبرهم لم يتجاوز 83 عاماً."
    },
    "whyIncorrect": {
      "de": "Option a verwechselt die 90 Testpersonen mit dem Lebensalter und c verwechselt die 10 Nächte der Studiendauer mit Lebensjahren.",
      "fr": "L'option a confond l'effectif de 90 personnes avec leur âge et l'option c confond les 10 nuits de test avec des années d'âge.",
      "ar": "الخيار a يخلط بين عدد الأشخاص (90 شخصاً) وأعمارهم، والخيار c يخلط بين مدة الدراسة (10 ليالٍ) والعمر."
    }
  },
  "h3": {
    "quote": "„Unser Theaterspielplan diese Woche ... Montag: geschlossen.“",
    "whyCorrect": {
      "de": "Falsch. Am Montag bleibt das Theater geschlossen; es gibt somit nicht an jedem Tag eine Vorstellung.",
      "fr": "Faux. Le théâtre est fermé le lundi (« Montag: geschlossen »), il n'y a donc pas de représentation tous les jours sans exception.",
      "ar": "خطأ. المسرح مغلق يوم الاثنين («Montag: geschlossen»)، وبالتالي لا توجد عروض في جميع أيام الأسبوع."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da der Ruhetag am Montag ausdrücklich genannt wird.",
      "fr": "« Vrai » est contredit par le jour de fermeture du lundi.",
      "ar": "«صحيح» غير وارد لذكر يوم الاثنين كعطلة وإغلاق صريح."
    }
  },
  "h4": {
    "quote": "„Sonntag 15.00 Uhr: The Sound of Music.“",
    "whyCorrect": {
      "de": "Option c ist richtig. Um 15.00 Uhr (also am Nachmittag) findet nur am Sonntag eine Vorstellung von „The Sound of Music“ statt; die anderen Tage beginnen abends (19.00/19.30 Uhr).",
      "fr": "L'option c est correcte. La représentation de l'après-midi (à 15h00) a lieu uniquement le dimanche (« The Sound of Music »), les autres soirs débutant à 19h00 ou 19h30.",
      "ar": "الخيار c هو الصحيح. العرض النهاري الوحيد في فترة بعد الظهر يقام يوم الأحد الساعة 15:00، بينما تبدأ عروض بقية الأيام مساءً."
    },
    "whyIncorrect": {
      "de": "Option a (Freitag) und b (Samstag) beginnen jeweils erst abends um 19.30 bzw. 19.00 Uhr.",
      "fr": "Les options a et b correspondent à des spectacles en soirée (19h30 et 19h00).",
      "ar": "الخياران a وb يمثلان عروضاً مسائية تقام في الساعة 19:30 و19:00."
    }
  },
  "h5": {
    "quote": "„Du, wir wollten doch im Sommer eine Woche an die Ostsee fahren.“",
    "whyCorrect": {
      "de": "Richtig. Clara erinnert Elise an ihren gemeinsamen Plan, im Sommer für eine Woche an die Ostsee zu reisen.",
      "fr": "Vrai. Clara rappelle à Elise leur projet commun de passer une semaine de vacances ensemble au bord de la mer Baltique.",
      "ar": "صحيح. تذكر كلارا صديقتها إليزا باتفاقهما المشترك على السفر معاً لقضاء أسبوع على شاطئ بحر البلطيق في الصيف."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da die geplante gemeinsame Urlaubsreise der Anlass des Anrufs ist.",
      "fr": "« Faux » ne convient pas puisque le voyage commun est la raison même de ce message vocal.",
      "ar": "«خطأ» لا ينطبق لأن التخطيط للسفر معاً هو الهدف الأساسي من المكالمة."
    }
  },
  "h6": {
    "quote": "„Wir müssten nur wählen, ob wir ein Appartement, eine Ferienwohnung oder ein Ferienhaus buchen wollen. Persönlich fände ich Letzteres am besten, denn wir wollen doch unsere Hunde mitnehmen.“",
    "whyCorrect": {
      "de": "Option c ist richtig. Clara bevorzugt das Ferienhaus („Letzteres am besten“), weil beide ihre Hunde mitnehmen möchten.",
      "fr": "L'option c est correcte. Clara trouve que la maison de vacances (« Ferienhaus », désignée par « Letzteres ») est la meilleure solution pour loger avec leurs chiens.",
      "ar": "الخيار c هو الصحيح. تفضل كلارا بيت العطلات المستقل («Letzteres am besten») نظراً لرغبتهما في اصطحاب كلابهما معهما."
    },
    "whyIncorrect": {
      "de": "Option a und b werden zwar als Wahlmöglichkeiten genannt, aber Clara entscheidet sich ausdrücklich für die letztgenannte Option (das Ferienhaus).",
      "fr": "Les options a et b sont simplement énumérées, mais Clara donne sa préférence explicite à la dernière formule citée.",
      "ar": "الخياران a وb ذُكرا كبدائل، لكن كلارا صرحت بأنها تفضل الخيار الأخير (بيت العطلات)."
    }
  },
  "h7": {
    "quote": "„Die Aussichten für das Wochenende: Ab Samstagmittag lösen sich Restwolken ... zunehmend auf, sodass ab Sonntag mit Sonnenschein gerechnet werden kann.“",
    "whyCorrect": {
      "de": "Falsch. Das Wetter wird am Wochenende nicht schlechter, sondern besser: Die Wolken lösen sich auf und ab Sonntag scheint die Sonne.",
      "fr": "Faux. La météo ne se dégrade pas ce week-end ; au contraire, elle s'améliore avec la dissipation des nuages et le retour du soleil dès dimanche.",
      "ar": "خطأ. لن يسوء الطقس في عطلة نهاية الأسبوع بل سيتحسن، حيث تتلاشى الغيوم تدريجياً وتشرق الشمس اعتباراً من يوم الأحد."
    },
    "whyIncorrect": {
      "de": "„Richtig“ widerspricht der Vorhersage einer Wetterbesserung mit Sonnenschein am Wochenende.",
      "fr": "« Vrai » est contredit par l'annonce d'un ensoleillement généralisé à partir de dimanche.",
      "ar": "«صحيح» يعاكس النشرة الجوية التي تتوقع طقساً مشمساً ومستقراً مع حلول الأحد."
    }
  },
  "h8": {
    "quote": "„Entlang der nördlichen Alpenseite zunächst überwiegend dichte Bewölkung mit eingeschränkter Sicht und starker Nebelbildung auf den Bergen.“",
    "whyCorrect": {
      "de": "Option a ist richtig. Der Wetterbericht kündigt überwiegend dichte Bewölkung und Nebel an.",
      "fr": "L'option a est correcte. Le bulletin prévoit une couverture nuageuse très dense (« dichte Bewölkung ») et du brouillard.",
      "ar": "الخيار a هو الصحيح. تتوقع النشرة الجوية غيوماً وسحباً كثيفة للغاية («dichte Bewölkung») مع تشكل الضباب."
    },
    "whyIncorrect": {
      "de": "Option b ist falsch (nur „leichter Schneefall“ im Arlberg) und c ist falsch (in 2000m Höhe herrschen minus 5 Grad, nicht über 5 Grad).",
      "fr": "L'option b est erronée (chutes de neige légères et non fortes) et l'option c est fausse (il fera -5°C à 2000 m).",
      "ar": "الخيار b خاطئ لأن تساقط الثلوج خفيف، والخيار c خاطئ لأن درجات الحرارة تصل إلى 5 درجات تحت الصفر."
    }
  },
  "h9": {
    "quote": "„...es folgt unser täglicher Mondkalender. Heute, Freitag 24. Februar, steht der Mond im Schützen und im Steinbock. Die besten Stunden heute: 14.45 Uhr bis 16.45 Uhr...“",
    "whyCorrect": {
      "de": "Falsch. Es handelt sich um ein Horoskop / einen Mondkalender mit astrologischen Empfehlungen. Wie viele Stunden der Mond am Himmel scheint, wird nicht mitgeteilt.",
      "fr": "Faux. Il s'agit d'un calendrier lunaire astrologique donnant des conseils d'humeur et d'activités, et non d'une indication astrophysique sur le nombre d'heures d'exposition lunaire.",
      "ar": "خطأ. الفقرة عبارة عن تقويم فلكي ونصائح عامة للأبراج، ولا تذكر عدد الساعات الفعلي لظهور القمر أو سطوعه."
    },
    "whyIncorrect": {
      "de": "„Richtig“ verwechselt die astrologisch „günstigen Stunden“ mit astronomischen Scheinzeiten des Mondes.",
      "fr": "« Vrai » confond les plages horaires fastes de l'horoscope avec la visibilité physique de la lune.",
      "ar": "«صحيح» يخلط بين الساعات الميمونة فلكياً وفترة ظهور القمر في السماء."
    }
  },
  "h10": {
    "quote": "„Gesundheit: Sie sollten Ihre Gelenke schonen. Übertreiben Sie nicht bei sportlichen Aktivitäten.“",
    "whyCorrect": {
      "de": "Option c ist richtig. Im Bereich Gesundheit rät die Sprecherin ausdrücklich zur Schonung der Gelenke und zur Vorsicht beim Sport („Übertreiben Sie nicht bei sportlichen Aktivitäten“).",
      "fr": "L'option c est correcte. À la rubrique santé, il est formellement recommandé de ménager ses articulations et de ne pas forcer sur le sport.",
      "ar": "الخيار c هو الصحيح. تنصح المذيعة في فقرة الصحة بحماية المفاصل وعدم المبالغة أو الإفراط في ممارسة التمارين الرياضية."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch (gute Laune gilt nur von 14.45 bis 16.45 Uhr) und b ist ungenau (ein Behördengang bereitet keine Mühe, nicht der Beruf im Allgemeinen).",
      "fr": "L'option a est fausse (la bonne humeur ne concerne que le créneau 14h45-16h45) et l'option b extrapole abusivement une démarche administrative à tout le travail.",
      "ar": "الخيار a خاطئ لحصر المزاج الجيد في ساعتين فقط، والخيار b يخلط بين إنجاز معاملة إدارية والمهنة بشكل عام."
    }
  },

  # ==================== HÖREN TEIL 2 (h11-h15) ====================
  "h11": {
    "quote": "„Herzlich willkommen im Service-Center des Heide-Parks, Norddeutschlands größtem Freizeitpark in der Lüneburger Heide.“",
    "whyCorrect": {
      "de": "Option c ist richtig. Der Heide-Park wird ausdrücklich als „Norddeutschlands größter Freizeitpark“ vorgestellt. Er liegt also in Norddeutschland.",
      "fr": "L'option c est correcte. Le Heide-Park est expressément présenté comme le plus grand parc d'attractions du nord de l'Allemagne (« Norddeutschlands größtem Freizeitpark »).",
      "ar": "الخيار c هو الصحيح. يوصف المتنزه صراحة بأنه أكبر مدينة ترفيهية في شمال ألمانيا («Norddeutschland»)."
    },
    "whyIncorrect": {
      "de": "Option a (Heidelberg) liegt in Süddeutschland und b (Lüneburg) verwechselt die Region „Lüneburger Heide“ mit der Stadt selbst.",
      "fr": "L'option a (Heidelberg) est située dans le Sud et l'option b confond la ville de Lunebourg avec la lande naturelle du même nom.",
      "ar": "الخيار a (هايدلبرغ) يقع جنوباً، والخيار b يخلط بين هضبة لونيبورغ والمدينة نفسها."
    }
  },
  "h12": {
    "quote": "„Damit haben Sie zwölf Monate unbegrenzten Freizeitspaß in 15 Attraktionen...“",
    "whyCorrect": {
      "de": "Option c ist richtig. Mit der Jahreskarte erhält man unbegrenzten Zugang zu 15 Attraktionen („in 15 Attraktionen“).",
      "fr": "L'option c est correcte. L'abonnement annuel (« Jahreskarte ») ouvre l'accès illimité à quinze attractions différentes.",
      "ar": "الخيار c هو الصحيح. تتيح البطاقة السنوية الاستمتاع بعدد خمس عشرة لعبة ولحظة ترفيهية («15 Attraktionen»)."
    },
    "whyIncorrect": {
      "de": "Option a verwechselt die 15 Attraktionen mit dem 10%-Rabatt und b verwechselt die 12 Monate Gültigkeit mit der Attraktionsanzahl.",
      "fr": "L'option a confond avec la remise de 10 % et l'option b confond avec la validité de 12 mois de la carte.",
      "ar": "الخيار a يخلط بين خصم 10% وعدد الألعاب، والخيار b يخلط بين فترة الصلاحية (12 شهراً) وعدد الألعاب."
    }
  },
  "h13": {
    "quote": "„Kinder unter acht Jahren müssen allerdings von Erwachsenen begleitet werden. Kinder unter vier Jahren dürfen noch gar nicht mitfahren.“",
    "whyCorrect": {
      "de": "Option b ist richtig. Kinder unter vier Jahren dürfen überhaupt nicht mitfahren; man muss also mindestens vier Jahre alt sein.",
      "fr": "L'option b est correcte. L'accès étant strictement interdit aux enfants de moins de quatre ans, il faut avoir au moins quatre ans révolus pour embarquer.",
      "ar": "الخيار b هو الصحيح. يُمنع ركوب الأطفال دون سن الرابعة تماماً، مما يعني أن الحد الأدنى للسن هو أربع سنوات."
    },
    "whyIncorrect": {
      "de": "Option a verwechselt die Fahrtdauer von 1,5 Minuten mit dem Alter und c betrifft die Pflicht zur Begleitung durch Erwachsene.",
      "fr": "L'option a confond la durée du tour (1 minute et demie) avec l'âge, et l'option c correspond au seuil nécessitant un accompagnateur adulte.",
      "ar": "الخيار a يخلط بين مدة الجولة (دقيقة ونصف) والسن، والخيار c يمثل السن الذي يتطلب مرافقة شخص بالغ."
    }
  },
  "h14": {
    "quote": "„Hunde dürfen nicht in die Fahrkabinen mitgenommen werden, und auch die verschiedenen Shops sind für sie verboten...“",
    "whyCorrect": {
      "de": "Option a ist richtig. Die Sprecherin sagt deutlich, dass Hunde in den Fahrkabinen nicht mitgenommen werden dürfen, dort also verboten sind.",
      "fr": "L'option a est correcte. La guide stipule expressément que les chiens sont interdits à bord des cabines de manège (« nicht in die Fahrkabinen mitgenommen werden »).",
      "ar": "الخيار a هو الصحيح. تؤكد المتحدثة حظر اصطحاب الكلاب في مقصورات الألعاب وعربات الركوب."
    },
    "whyIncorrect": {
      "de": "Option b ist frei erfunden und c ist falsch, da Hunde in den Shops ebenfalls verboten sind (sie dürfen nur an der Leine im Park geführt werden).",
      "fr": "L'option b est sans rapport avec le texte et l'option c est erronée, les chiens étant également prohibés dans les boutiques.",
      "ar": "الخيار b لا أساس له في النص والخيار c غير صحيح لأن الكلاب ممنوعة من دخول المتاجر أيضاً."
    }
  },
  "h15": {
    "quote": "„...die Schweizer Bobbahn, die aus 27 Metern Höhe mit einer Geschwindigkeit von 50 km/h durch den Eiskanal schießt.“",
    "whyCorrect": {
      "de": "Option c ist richtig. Die Bobbahn erreicht eine Geschwindigkeit von 50 km/h (50 Stundenkilometer).",
      "fr": "L'option c est correcte. La piste de bobsleigh suisse propulse les engins à une allure de 50 kilomètres par heure.",
      "ar": "الخيار c هو الصحيح. تنطلق عربات التزلج بسرعة تصل إلى 50 كيلومتراً في الساعة («50 km/h»)."
    },
    "whyIncorrect": {
      "de": "Option a verwechselt die 27 Meter Ausgangshöhe mit der Geschwindigkeit und b verwechselt die 166 Sekunden Fahrtdauer mit der Geschwindigkeit.",
      "fr": "L'option a confond la hauteur du départ (27 m) avec la vitesse et l'option b confond la durée du parcours (166 secondes).",
      "ar": "الخيار a يخلط بين ارتفاع البداية (27 متراً) والسرعة، والخيار b يخلط بين مدة الرحلة (166 ثانية) ومعدل السرعة."
    }
  },

  # ==================== HÖREN TEIL 3 (h16-h22) ====================
  "h16": {
    "quote": "„Ich hab in den letzten Wochen keine Zeit fürs Training gehabt. Ist schade, weil wir ja auch bald gegen die Mannschaft aus Berlin spielen.“",
    "whyCorrect": {
      "de": "Richtig. Beide sprechen über das gemeinsame Training und bevorstehende Spiele ihrer Mannschaft; sie sind im selben Sportverein aktiv.",
      "fr": "Vrai. Ils évoquent leurs entraînements communs et le prochain match de leur équipe contre Berlin ; ils appartiennent bien au même club sportif.",
      "ar": "صحيح. يتحدث الاثنان عن التدريبات المشتركة والمباراة القادمة لفريقهما ضد برلين، مما يؤكد اشتراكهما في نفس النادي الرياضي."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da ihre Unterhaltung über Training und Mannschaft die gemeinsame Vereinszugehörigkeit beweist.",
      "fr": "« Faux » ne convient pas au vu de leurs références explicites à l'entraînement et à leur équipe commune.",
      "ar": "«خطأ» غير صحيح لأن حديثهما عن التدريبات والفريق يثبت وجودهما في نفس النادي."
    }
  },
  "h17": {
    "quote": "„Die Ausbildung ist ganz schön anstrengend, aber toll. Friseurin zu werden ist echt interessant und ich lerne gerne.“",
    "whyCorrect": {
      "de": "Falsch. Emma ist keineswegs enttäuscht; sie findet die Ausbildung zur Friseurin „toll“, „echt interessant“ und lernt mit großer Freude.",
      "fr": "Faux. Emma n'est pas du tout déçue ; elle trouve sa formation de coiffeuse passionnante (« toll », « echt interessant ») et apprend avec enthousiasme.",
      "ar": "خطأ. إيما ليست محبطة على الإطلاق، بل تصف تدريبها المهني كمصففة شعر بأنه «رائع وممتع للغاية» وتتعلم بشغف وسعادة."
    },
    "whyIncorrect": {
      "de": "„Richtig“ widerspricht Emmas begeisterter Schilderung ihrer Friseurausbildung.",
      "fr": "« Vrai » est démenti par les éloges très positifs d'Emma sur son apprentissage.",
      "ar": "«صحيح» يتعارض تماماً مع انطباع إيما الإيجابي وشغفها بمهنتها الجديدة."
    }
  },
  "h18": {
    "quote": "„Schule fand ich immer blöd. ... Nicht wie früher in Mathe oder Geschichte.“",
    "whyCorrect": {
      "de": "Richtig. Emma bestätigt, dass sie damals keine gute Schülerin war („Schule fand ich immer blöd... sonst wär ich nicht auf die Hauptschule gegangen“).",
      "fr": "Vrai. Emma reconnaît qu'elle n'était pas une bonne élève à l'école (« Schule fand ich immer blöd ») et qu'elle n'aimait pas les matières théoriques.",
      "ar": "صحيح. تعترف إيما بأنها لم تكن طالبة متفوقة في المدرسة وكانت تكره المواد النظرية والتعليم المدرسي التقليدي."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da sie ihre Abneigung gegen die damalige Schulzeit offen darlegt.",
      "fr": "« Faux » est contredit par son propre aveu d'échec scolaire passé.",
      "ar": "«خطأ» يناقض اعترافها المباشر بكرهها للدراسة المدرسية وضعف مستواها سابقاً."
    }
  },
  "h19": {
    "quote": "„Beim Abitur war alles O.K. Ich hab einen Notendurchschnitt von 0,7.“",
    "whyCorrect": {
      "de": "Falsch. Julian hat ein exzellentes Abitur mit der Traumnote 0,7 abgelegt (besser als die Bestnote 1,0).",
      "fr": "Faux. Julian a obtenu un résultat exceptionnel au baccalauréat avec une moyenne de 0,7 (bien meilleure que la note maximale théorique de 1,0).",
      "ar": "خطأ. حقق يوليان نتيجة استثنائية وباهرة في الثانوية العامة بمعدل 0.7 (أفضل من الدرجة الكاملة 1.0)."
    },
    "whyIncorrect": {
      "de": "„Richtig“ steht im Widerspruch zu seinem Traumdurchschnitt von 0,7.",
      "fr": "« Vrai » est contredit par sa moyenne brillante de 0,7.",
      "ar": "«صحيح» غير وارد إطلاقاً نظراً لحصوله على معدل امتياز مذهل."
    }
  },
  "h20": {
    "quote": "„Aber das Abitur ist nicht mehr so schwer wie früher. Mit reinem Auswendiglernen kann man sehr viel erreichen und deshalb haben sehr viele sehr gute Noten.“",
    "whyCorrect": {
      "de": "Richtig. Julian stellt klar fest, dass das Abitur heutzutage leichter ist als früher und man durch bloßes Auswendiglernen Bestnoten erzielen kann.",
      "fr": "Vrai. Julian affirme que le baccalauréat est devenu nettement plus facile qu'auparavant (« nicht mehr so schwer wie früher ») grâce au par cœur.",
      "ar": "صحيح. يؤكد يوليان أن امتحانات الثانوية أصبحت أسهل بكثير من السابق وبات بالإمكان نيل أعلى الدرجات بمجرد الحفظ الآلي."
    },
    "whyIncorrect": {
      "de": "„Falsch“ widerspricht Julians ausdrücklicher Aussage über das einfachere Abitur.",
      "fr": "« Faux » ne convient pas face à son analyse critique du niveau actuel des épreuves.",
      "ar": "«خطأ» يعاكس كلامه الصريح حول سهولة الاختبارات وتدني متطلباتها مقارنة بالماضي."
    }
  },
  "h21": {
    "quote": "„Und deshalb werden die Studienplätze verlost. ... Und da hatte ich eben Pech.“",
    "whyCorrect": {
      "de": "Richtig. Weil zu viele Bewerber Topnoten hatten, wurden die Medizinstudienplätze per Losverfahren vergeben, und Julian hatte Pech; er bekam keinen Platz.",
      "fr": "Vrai. Les places en faculté de médecine ayant été tirées au sort en raison du trop grand nombre de dossiers excellents, Julian n'a pas eu de chance et n'a pas été retenu.",
      "ar": "صحيح. نظراً لكثرة الحاصلين على درجات الامتياز، وُزعت مقاعد الطب بنظام القرعة والحظ، ولم يحالف الحظ يوليان للحصول على مقعد هذا العام."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da Julian das Medizinstudium vorerst verwehrt blieb.",
      "fr": "« Faux » est contredit par l'échec de Julian au tirage au sort universitaire cette année.",
      "ar": "«خطأ» يناقض حقيقة عدم حصوله على القبول الجامعي في الطب هذا الموسم."
    }
  },
  "h22": {
    "quote": "„Und jetzt? Was machst du jetzt? – Ich mache ein Praktikum in einem Krankenhaus.“",
    "whyCorrect": {
      "de": "Falsch. Julian wartet nicht bis später, sondern absolviert sein Krankenhauspraktikum bereits gegenwärtig („jetzt“).",
      "fr": "Faux. Julian n'attend pas plus tard : il effectue d'ores et déjà son stage à l'hôpital actuellement (« Was machst du jetzt? Ich mache ein Praktikum »).",
      "ar": "خطأ. لا يؤجل يوليان التدريب للمستقبل بل يؤديه حالياً في الوقت الراهن بمستشفى ليكتسب خبرة عملية."
    },
    "whyIncorrect": {
      "de": "„Richtig“ übersieht, dass er das Praktikum bereits jetzt im laufenden Übergangsjahr macht.",
      "fr": "« Vrai » est contredit par le présent immédiat de son activité hospitalière.",
      "ar": "«صحيح» يغفل أنه باشر التدريب في المستشفى بالفعل في الوقت الحاضر."
    }
  },

  # ==================== HÖREN TEIL 4 (h23-h30) ====================
  "h23": {
    "quote": "Christina: „...aber ich glaube, dass gerade bei kleineren Initiativen oder Projekten, bei denen es oft mehr um praktische Alltagsprobleme geht, mehr Frauen mitmachen.“",
    "whyCorrect": {
      "de": "Christina (c). Sie erklärt, dass sich insbesondere Frauen an kleineren Projekten beteiligen, die sich mit praktischen Problemen des Alltags befassen.",
      "fr": "Christina (c). Elle soutient que ce sont surtout les femmes qui s'engagent dans les initiatives pragmatiques axées sur les défis concrets du quotidien.",
      "ar": "كريستينا (c). ترى أن النساء يشاركن بفاعلية أكبر في المبادرات التي تعالج مشكلات الحياة اليومية التطبيقية والعملية."
    },
    "whyIncorrect": {
      "de": "Der Moderator stellte nur die Eingangsfrage zur Drei-Frauen-Initiative, und Flavia knüpft erst danach an Christinas Gedanken an.",
      "fr": "Le modérateur posait seulement la question liminaire et Flavia développe cette idée dans un second temps.",
      "ar": "طرح المذيع السؤال في البداية، وجاءت هذه الملاحظة المحددة على لسان كريستينا أولاً."
    }
  },
  "h24": {
    "quote": "Flavia: „Ja, und da schafft man es eben oft nicht, zum Biomarkt zu gehen ... Und deshalb ist uns die Idee mit dem Lieferdienst gekommen.“",
    "whyCorrect": {
      "de": "Flavia (b). Sie betont, dass berufstätige Frauen oft keine Zeit für den Biomarkt haben und der Lieferdienst von „Bio-Abo“ ihnen wertvolle Zeit spart.",
      "fr": "Flavia (b). Elle explique que le service de livraison à domicile a été spécialement pensé pour faire gagner du temps aux femmes actives débordées.",
      "ar": "فلافيا (b). توضح أن خدمة التوصيل للمنازل وُجدت لمساعدة المرأة العاملة على توفير الوقت والجهد عند شراء المنتجات العضوية."
    },
    "whyIncorrect": {
      "de": "Christina und der Moderator sprachen über die Aufgabenverteilung, aber die Begründung des zeitsparenden Lieferdienstes liefert Flavia.",
      "fr": "C'est Flavia qui formule spécifiquement le gain de temps permis par leur service de livraison.",
      "ar": "فلافيا هي من ربطت بين خدمة التوصيل وتوفير الوقت للمرأة والأسرة."
    }
  },
  "h25": {
    "quote": "Moderator: „...aber ich habe den Eindruck, dass sich immer noch nur bestimmte, kleinere Bevölkerungsgruppen für Biokost interessieren...“",
    "whyCorrect": {
      "de": "Moderator (a). Er äußert die Vermutung bzw. den Eindruck, dass Biokost nach wie vor nur für kleinere, wohlhabendere Bevölkerungskreise relevant sei.",
      "fr": "Le modérateur (a). Il formule l'hypothèse selon laquelle les aliments biologiques n'intéresseraient encore qu'une frange restreinte et aisée de la population.",
      "ar": "المذيع (a). يطرح المذيع انطباعه بأن الأغذية الحيوية لا تزال تهم فئات محددة وقليلة من ميسوري الحال فقط."
    },
    "whyIncorrect": {
      "de": "Flavia widerspricht dieser These umgehend („Heute nicht mehr... unsere Kunden kommen aus allen Bevölkerungsgruppen“).",
      "fr": "Flavia s'inscrit en faux contre cette remarque en affirmant que leur clientèle s'est désormais démocratisée.",
      "ar": "عبر المذيع عن هذا الرأي، بينما سارعت فلافيا لنفيه وتأكيد تنوع شرائح الزبائن."
    }
  },
  "h26": {
    "quote": "Christina: „Ja, und ein Grund dafür ist auch, dass die Preise für ökologisch produzierte Lebensmittel gesunken sind.“",
    "whyCorrect": {
      "de": "Christina (c). Sie ergänzt, dass die Ausweitung des Kundenkreises auch darauf zurückzuführen ist, dass Bioprodukte erschwinglicher und billiger geworden sind.",
      "fr": "Christina (c). Elle précise que la baisse des tarifs des produits biologiques a contribué à élargir leur public d'acheteurs.",
      "ar": "كريستينا (c). تشير إلى أن أحد أسباب انتشار الأغذية العضوية هو انخفاض أسعارها لتصبح في متناول الجميع."
    },
    "whyIncorrect": {
      "de": "Weder der Moderator noch Flavia nannten das Argument der gesunkenen Preise für Biokost.",
      "fr": "Ni l'animateur ni Flavia n'ont avancé l'argument de la baisse générale des prix des denrées bio.",
      "ar": "لم يطرح المذيع أو فلافيا فكرة تراجع الأسعار، بل كانت تلك إضافة كريستينا."
    }
  },
  "h27": {
    "quote": "Flavia: „Aber viele regionale Gemüsearten, also Gemüse, das hier in der Umgebung von Bern wächst ... werden in den Supermärkten überhaupt nicht verkauft. Daher kennen viele Frauen … und Männer ... diese Sachen einfach nicht.“",
    "whyCorrect": {
      "de": "Flavia (b). Sie stellt fest, dass heimische Gemüsesorten aus dem Berner Umland nicht in Supermärkten geführt werden und vielen Menschen daher völlig unbekannt sind.",
      "fr": "Flavia (b). Elle souligne que les variétés de légumes régionales de la banlieue bernoise ne sont pas vendues en grande distribution et restent donc méconnues du public.",
      "ar": "فلافيا (b). تبين أن العديد من أنواع الخضار الإقليمية المزروعة حول برن لا تُعرض في المتاجر الكبرى، ولذا يجهلها الكثير من الناس."
    },
    "whyIncorrect": {
      "de": "Christina spricht erst anschließend über die Website mit Rezepten, während Flavia die Unkenntnis der Berner Gemüsesorten hervorhebt.",
      "fr": "Christina n'intervient qu'après pour parler des recettes, le constat sur l'ignorance des légumes bernois venant de Flavia.",
      "ar": "تحدثت كريستينا لاحقاً عن وصفات الطهي، أما توضيح جهل الناس بأصناف خضار برن فكان من فلافيا."
    }
  },
  "h28": {
    "quote": "Christina: „Wir müssen alle erst wieder lernen, uns von regionalen Produkten zu ernähren. Denn wenn Bioprodukte zum Beispiel aus Argentinien in die Schweiz transportiert werden, dann kann man das nicht mehr umweltfreundlich nennen...“",
    "whyCorrect": {
      "de": "Christina (c). Sie mahnt an, dass echter Umweltschutz den Verzehr lokaler und regionaler Produkte verlangt, statt Biowaren über weite Strecken zu importieren.",
      "fr": "Christina (c). Elle rappelle qu'un engagement environnemental sincère implique de privilégier les circuits courts et locaux plutôt que d'importer du bio de pays lointains.",
      "ar": "كريستينا (c). تؤكد أن حماية البيئة تقتضي استهلاك المنتجات الإقليمية والمحلية لتفادي أضرار الشحن الدولي لمسافات بعيدة كالأرجنتين."
    },
    "whyIncorrect": {
      "de": "Flavia und der Moderator thematisierten diesen Punkt nicht; das Plädoyer für Regionalität stammt von Christina.",
      "fr": "Ce constat sans appel sur l'aberration écologique des transports transcontinentaux est formulé par Christina.",
      "ar": "هذه الدعوة لاستهلاك المنتج المحلي لحماية البيئة صدرت عن كريستينا بالتحديد."
    }
  },
  "h29": {
    "quote": "Flavia: „Aber wir finden es gut, dass es noch andere Anbieter gibt, das bedeutet nämlich, dass es immer mehr interessierte Kunden gibt, und das ist gut ... für uns, für die Menschen ... und für die Umwelt.“",
    "whyCorrect": {
      "de": "Flavia (b). Sie begrüßt Mitbewerber und Konkurrenz auf dem Markt, weil dies ein wachsendes Umweltbewusstsein und mehr Kundeninteresse belegt.",
      "fr": "Flavia (b). Elle voit la concurrence d'un bon œil, estimant que la présence d'autres acteurs témoigne de l'intérêt croissant des consommateurs pour la planète.",
      "ar": "فلافيا (b). تعتبر وجود شركات منافسة أمراً إيجابياً ومحفزاً لأنه يبرهن على تنامي وعي المستهلكين واتساع شريحة المهتمين بالبيئة."
    },
    "whyIncorrect": {
      "de": "Der Moderator erkundigte sich besorgt nach störender Konkurrenz, doch Flavia wertet sie ausdrücklich als positiv.",
      "fr": "Le modérateur demandait si la concurrence était dérangeante, et c'est Flavia qui réplique positivement.",
      "ar": "تساءل المذيع إن كانت المنافسة تزعج مشروعهن، لكن فلافيا أكدت ترحيبها بها كأمر إيجابي."
    }
  },
  "h30": {
    "quote": "Christina: „Es ist unserer Meinung nach überhaupt besser, wenn es keine sehr großen Anbieter gibt. Große Firmen sind große Organisationen ... und da kann das Geldverdienen sehr schnell wichtiger werden als die Umwelt. Das passiert bei kleinen Firmen nicht so schnell.“",
    "whyCorrect": {
      "de": "Christina (c). Sie begründet, weshalb kleinere Firmen umweltfreundlicher agieren: Bei Großkonzernen überwiegt schnell das reine Profitstreben gegenüber dem ökologischen Nutzen.",
      "fr": "Christina (c). Elle défend la supériorité écologique des petites structures face aux grands groupes industriels où l'appât du gain supplante rapidement l'idéal environnemental.",
      "ar": "كريستينا (c). ترى أن الشركات الصغيرة أفضل للبيئة، لأن المؤسسات الكبرى سرعان ما تطغى عليها أهداف الربح التجاري على حساب حماية البيئة."
    },
    "whyIncorrect": {
      "de": "Weder Flavia noch der Moderator äußerten die differenzierte Kritik an großen Organisationen; dies war Christinas Schlussargument.",
      "fr": "Cette mise en garde contre la dérive mercantile des multinationales est l'argument de conclusion de Christina.",
      "ar": "طرحت كريستينا هذه المقارنة بين الشركات الكبرى والصغيرة لتؤكد أفضلية الكيانات الصغيرة لخدمة البيئة."
    }
  }
}
