#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 27 - Translations Data (French & Arabic)
Modelltest 21 — Hueber Zertifikat B1 (source: OSD JUIL/13, EX13-OSD.pdf)
Full compliance with AGENTS.md schema invariants:
- articles[].body: { fr: [...], ar: [...] }
- questions[].options: { fr: [...], ar: [...] }
- ads: { a: { fr, ar }, A: { fr, ar }... }
- letters: { '20': { who, text: { fr, ar } }... }
- horen teile 1-4 & h1-h30 with full FR/AR translations
"""

translations = {
  "examTitle": {
    "fr": "Goethe / ÖSD Simulation d'examen B1 — Test modèle 21",
    "ar": "محاكاة امتحان غوته / أوس دي B1 — النموذج التدريبي 21"
  },
  "examSub": {
    "fr": "Lecture (5 parties) & Écoute (4 parties) · Test modèle 21 (Hueber)",
    "ar": "القراءة (5 أجزاء) والاستماع (4 أجزاء) · النموذج التدريبي 21 (هوبر)"
  },
  "parts": {
    "1": {
      "title": {
        "fr": "Partie 1 (Lecture)",
        "ar": "الجزء 1 (القراءة)"
      },
      "instructions": {
        "fr": "Lisez le texte et répondez aux questions 1 à 6. Choisissez : ces affirmations sont-elles vraies ou fausses ?",
        "ar": "اقرأ النص والمهام من 1 إلى 6. اختر: هل العبارات صحيحة أم خاطئة؟"
      },
      "articles": [
        {
          "heading": {
            "fr": "Forum – Nous sommes là pour vous ! · Astuces publicitaires",
            "ar": "منتدى – نحن هنا لمساعدتك! · حيل الإعلانات التجارية"
          },
          "title": {
            "fr": "Forum – Nous sommes là pour vous ! · Astuces publicitaires",
            "ar": "منتدى – نحن هنا لمساعدتك! · حيل الإعلانات التجارية"
          },
          "body": {
            "fr": [
              "J'aimerais moi aussi vous faire part de mon expérience avec les pièges publicitaires. Mon amie et moi avons toujours attaché une grande importance à une alimentation équilibrée. C'est pourquoi nous consommions souvent et avec plaisir au petit-déjeuner des céréales de la marque « Fit » avec du lait ou du yaourt. De temps en temps, nous en prenions même au dîner. D'après l'emballage publicitaire, ces flocons promettaient non seulement une teneur élevée en céréales complètes, mais aussi « un plaisir léger pour la ligne », grâce à une faible quantité de graisses et de sucres. Trop naïfs et confiants, nous consommions d'autant plus ce produit en pensant faire du bien à notre organisme. Et il faut reconnaître que ces flocons « Fit » étaient diablement bons !",
              "Au bout d'un certain temps, nous avons cependant constaté avec surprise que nous avions tous les deux pris du poids. Au début, nous avons attribué cela à un manque d'exercice physique. Ma compagne et moi travaillons tous les deux à plein temps et passons de longues heures assis au bureau. Nous avons donc décidé de faire plus de sport le week-end. Mais cela n'a pas donné le résultat espéré sur la durée. Certes, notre condition physique s'était améliorée, mais aucun de nous deux n'avait perdu le moindre gramme.",
              "C'est alors que je suis tombé par hasard sur Internet sur un site dénonçant les arnaques publicitaires. Et surprise : nos fameuses céréales « Fit » si « saines » y figuraient comme exemple parfait de la façon dont de fausses informations incitent les consommateurs à l'achat. J'ai découvert que la plupart des flocons de maïs contiennent une quantité astronomique de sucre. Pour notre marque préférée, c'était pas moins de 30 %. Je suis vite allé chercher le paquet de céréales « Fit » dans la cuisine pour vérifier : il y avait effectivement 35 grammes de sucre pour 100 grammes ! Et la portion quotidienne recommandée : seulement 40 grammes !! Qui peut bien être rassasié avec si peu ? Je ne pourrais jamais tenir la matinée sans avoir le ventre qui gargouille. Nous en mangions systématiquement au moins le double.",
              "Et quant aux céréales complètes, c'est également une belle tromperie. Une proportion de 20 % de grains complets est très loin de faire un véritable aliment complet. Dans le pain complet par exemple, il faut au moins 90 % de farine complète. Rien d'étonnant donc à ce que nous ayons grossi en croyant manger sain et léger. Depuis, nous prenons au petit-déjeuner une tranche de vrai pain complet avec de la margarine, du fromage frais et de la confiture. Cela représente nettement moins de sucre aux 100 grammes, malgré la confiture. Et nous avons déjà réussi à perdre du poids !",
              "Bernd Geißner"
            ],
            "ar": [
              "أود أيضاً مشاركة تجربتي مع حيل الإعلانات التجارية. لطالما اهتممت أنا وصديقتي باتباع نظام غذائي صحي ومتوازن، ولذلك كنا نتناول في وجبة الإفطار بكل سرور وبشكل متكرر رقائق حبوب من علامة «فيت» (Fit) مع الحليب أو الزبادي، بل وكنا نتناولها أحياناً كوجبة عشاء خفيفة. لم تكن الوعود الإعلانية تقتصر على نسبة عالية من الحبوب الكاملة، بل وعدت أيضاً بـ «متعة خفيفة لرشاقة القوام»، نظراً لقلة الدهون والسكريات المزعومة فيها. وبدافع سذاجتنا وثقتنا العمياء، استهلكنا كميات أكبر من المنتج ظناً منا أننا نقدم شيئاً مفيداً لأجسامنا. وفوق ذلك، كانت تلك الرقائق لذيذة الطعم جداً!",
              "ولكن بعد مرور بعض الوقت، لاحظنا أن وزنينا قد زادا معاً. في البداية أرجعنا سبب ذلك إلى قلة الحركة والنشاط البدني، فنحن موظفان بدوام كامل ونقضي ساعات طويلة خلف المكاتب. لذا عزمنا على ممارسة المزيد من الرياضة في عطلات نهاية الأسبوع، غير أن ذلك لم يحقق النتيجة المرجوة على المدى الطويل؛ فقد أصبحنا أكثر لياقة بدنية، لكن لم يفقد أي منا غراماً واحداً.",
              "ثم عثرت بالصدفة على موقع إلكتروني يتناول خفايا وحيل الدعاية والإعلانات. ويا للمفاجأة: كانت رقائق حبوبنا «الصحية» مثالاً نموذجياً صارخاً لكيفية إغواء المستهلكين للشراء عبر تزييف المعلومات. وعرفت أن معظم رقائق الذرة تحتوي على كميات هائلة من السكر، ووصلت النسبة في منتجنا المفضل إلى 30%. هرعت إلى المطبخ وتفحصت علبة «فيت»، وقرأت بالفعل: 35 غراماً من السكر لكل 100 غرام! أما الكمية اليومية الموصى بتناولها فكانت 40 غراماً فقط!! من يشبع في الحقيقة بهذه الكمية الضئيلة؟ لم أكن لأتحمل قضاء فترة الصباح دون قرقرة في المعدة، ولذلك كنا نأكل دوماً ضعف هذه الكمية على الأقل.",
              "أما فيما يتعلق بمزاعم «الحبوب الكاملة»، فكلها خداع محض؛ فنسبة 20 بالمائة من الحبوب الكاملة لا تجعل المنتج منتج حبوب كاملة حقيقياً بأي حال، إذ يشترط في خبز الحبوب الكاملة مثلاً ألا تقل نسبتها عن 90 بالمائة. فلا عجب إذاً أننا اكتسبنا وزناً زائداً ونحن نظن أننا نتناول طعاماً صحياً وخفيفاً. منذ ذلك الحين، صرنا نتناول في الإفطار شريحة من خبز الحبوب الكاملة مع المارجرين والجبن الطازج والمربى. وهذا يعطي كمية سكر أقل بكثير لكل 100 غرام، رغم وجود المربى، وقد بدأنا بالفعل نخسر بعض الوزن.",
              "بيرند غايسنر"
            ]
          }
        }
      ],
      "example": {
        "text": {
          "fr": "Bernd et son amie mangeaient de temps en temps des céréales « Fit » au petit-déjeuner.",
          "ar": "كان بيرند وصديقته يتناولان رقائق «فيت» في الإفطار من حين لآخر."
        }
      },
      "questions": {
        "1": {
          "fr": "Bernd pensait que les flocons « Fit » étaient bons pour la santé.",
          "ar": "كان بيرند يعتقد أن رقائق «فيت» صحية ومفيدة للجسم.",
          "text": {
            "fr": "Bernd pensait que les flocons « Fit » étaient bons pour la santé.",
            "ar": "كان بيرند يعتقد أن رقائق «فيت» صحية ومفيدة للجسم."
          }
        },
        "2": {
          "fr": "Bien que Bernd travaille de longues heures, il trouvait chaque jour le temps de faire du sport.",
          "ar": "على الرغم من ساعات عمل بيرند الطويلة، فقد كان يجد وقتاً يومياً لممارسة الرياضة.",
          "text": {
            "fr": "Bien que Bernd travaille de longues heures, il trouvait chaque jour le temps de faire du sport.",
            "ar": "على الرغم من ساعات عمل بيرند الطويلة، فقد كان يجد وقتاً يومياً لممارسة الرياضة."
          }
        },
        "3": {
          "fr": "Les flocons « Fit » sont presque exclusivement composés de sucre.",
          "ar": "تُصنع رقائق «فيت» بشكل شبه حصري من السكر.",
          "text": {
            "fr": "Les flocons « Fit » sont presque exclusivement composés de sucre.",
            "ar": "تُصنع رقائق «فيت» بشكل شبه حصري من السكر."
          }
        },
        "4": {
          "fr": "L'emballage des céréales « Fit » ne contient que des mensonges.",
          "ar": "تحتوي علبة رقائق «فيت» على أكاذيب فقط.",
          "text": {
            "fr": "L'emballage des céréales « Fit » ne contient que des mensonges.",
            "ar": "تحتوي علبة رقائق «فيت» على أكاذيب فقط."
          }
        },
        "5": {
          "fr": "Bernd a pris du poids parce qu'il mangeait une quantité excessive de céréales.",
          "ar": "زاد وزن بيرند لأنه كان يفرط في تناول كميات كبيرة من الرقائق.",
          "text": {
            "fr": "Bernd a pris du poids parce qu'il mangeait une quantité excessive de céréales.",
            "ar": "زاد وزن بيرند لأنه كان يفرط في تناول كميات كبيرة من الرقائق."
          }
        },
        "6": {
          "fr": "Les céréales « Fit » ne sont en réalité pas un véritable produit complet.",
          "ar": "رقائق «فيت» ليست في الحقيقة منتج حبوب كاملة أصلياً.",
          "text": {
            "fr": "Les céréales « Fit » ne sont en réalité pas un véritable produit complet.",
            "ar": "رقائق «فيت» ليست في الحقيقة منتج حبوب كاملة أصلياً."
          }
        }
      }
    },
    "2": {
      "title": {
        "fr": "Partie 2 (Lecture)",
        "ar": "الجزء 2 (القراءة)"
      },
      "instructions": {
        "fr": "Lisez le texte de presse et répondez aux questions 7 à 9. Choisissez la bonne réponse a, b ou c.",
        "ar": "اقرأ النص الصحفي وأجب عن الأسئلة من 7 إلى 9. اختر الإجابة الصحيحة أ، ب أو ج."
      },
      "instructions2": {
        "fr": "Lisez le texte de presse et répondez aux questions 10 à 12. Choisissez la bonne réponse a, b ou c.",
        "ar": "اقرأ النص الصحفي وأجب عن الأسئلة من 10 إلى 12. اختر الإجابة الصحيحة أ، ب أو ج."
      },
      "articles": [
        {
          "heading": {
            "fr": "Aventures à vélo",
            "ar": "مغامرات على الدراجة الهوائية"
          },
          "title": {
            "fr": "Aventures à vélo",
            "ar": "مغامرات على الدراجة الهوائية"
          },
          "sub": {
            "fr": "Velo = mot standard en Suisse pour « bicyclette / vélo »",
            "ar": "Velo = المصطلح السويسري القياسي للدراجة الهوائية"
          },
          "body": {
            "fr": [
              "Au mot-clé « transit alpin », la plupart des gens pensent immédiatement à la politique des transports et aux embouteillages. Pas les adeptes du VTT ! Pour eux, les Alpes représentent une formidable opportunité de repousser leurs propres limites, dans l'un des derniers grands espaces encore sauvages d'une Europe largement urbanisée. De Vienne à Nice, les Alpes ne forment pas seulement une frontière climatique et hydrographique : à l'écart des grandes métropoles et des autoroutes, la vie y suit un cours bien plus paisible. Les Alpes offrent des itinéraires pour tous les goûts, de la piste en gravier large de quatre mètres jusqu'aux sentiers alpins escarpés au-dessus de la limite des arbres.",
              "Les Dolomites méritent particulièrement le détour, tant pour leurs paysages somptueux que pour leur histoire. Quiconque parcourt en cinq jours le trajet à vélo reliant Innsbruck à la station de ski italienne de Cortina d’Ampezzo en prend plein les yeux. Le point d'orgue absolu du parcours est servi tout à la fin, tel un dessert inoubliable ! Mais procédons dans l'ordre : on roule d'abord au-dessus de l'autoroute du Brenner avec une vue panoramique grandiose, longeant des vergers de pommiers. Le premier grand moment fort est un sentier longeant la paroi rocheuse du Kreuzkofel, juste à la limite des arbres avec vue plongeante sur les sommets des Dolomites. À la fin du circuit, on atteint la cuvette du Fanes (Fanes-Kessel), le joyau incontesté de l'itinéraire, entouré de parois abruptes, de lacs d'altitude alimentés par des cascades, et bien sûr de refuges où l'on peut reprendre des forces avec un jus de pomme pétillant et de savoureuses pâtes napolitaines. Tout simplement inoubliable !"
            ],
            "ar": [
              "عند سماع عبارة «عبور جبال الألب»، يتبادر إلى أذهان معظم الناس قضايا النقل والازدحام المروري، لكن الأمر يختلف تماماً لدى راكبي الدراجات الجبلية؛ فبالنسبة لهم تمثل جبال الألب فرصة لا تعوض لاختبار حدود قدراتهم، إذ تعد واحدة من أواخر المناطق الطبيعية الشاسعة في أوروبا المأهولة. وتمتد جبال الألب من فيينا حتى نيس مشكلةً حداً مناخياً ومائياً، وتتميز الحياة فيها بإيقاع أكثر هدوءاً بعيداً عن صخب المدن الكبرى والطرق السريعة. وتوفر جبال الألب مسارات تناسب جميع الأذواق، تتنوع ما بين طرق ترابية ممهدة بعرض أربعة أمتار ومسارات جبلية وعرة فوق خط نمو الأشجار.",
              "وتستحق جبال الدولوميت الزيارة بصفة خاصة لجمال طبيعتها وعراقة تاريخها. فمن يقود دراجته لمدة خمسة أيام انطلاقاً من إنسبروك النمساوية وصولاً إلى منتجع التزلج الإيطالي كورتينا دامبيدزو، سيحظى بتجربة ثرية حافلة بالمتعة؛ حيث يُقدم الجزء الأروع في نهاية الرحلة كحلوى لا تُنسى! وتفصيل ذلك: يبدأ المسار فوق طريق برينر السريع بإطلالة بانورامية ساحرة يمر خلالها بحدائق التفاح، ثم يأتي المشهد الرائع الأول عبر مسار جبلي بمحاذاة جرف كرويتسكوفيل الصخري عند خط الأشجار مع إطلالة على قمم الدولوميت. وفي نهاية الرحلة يصل الدراجون إلى حوض فانيس، وهو قمة الإثارة في الجولة؛ حيث الجبال الشاهقة والبحيرات الجبلية المغذاة بالشلالات، وبالطبع الأكواخ الجبلية التي تتيح للزائر استعادة طاقته بعصير التفاح الفوار وأطباق المعكرونة النابولية الشهية. إنها رحلة لا تُنسى حقاً!"
            ]
          }
        }
      ],
      "example": {
        "text": {
          "fr": "Dans les Alpes ...",
          "ar": "في جبال الألب ..."
        },
        "options": {
          "fr": [
            "il existe de nombreux itinéraires de voyage très différents.",
            "il n'y a aucun chemin au-dessus de la limite des arbres.",
            "on trouve des restaurants pour tous les goûts."
          ],
          "ar": [
            "توجد العديد من مسارات وطرق السفر المتنوعة.",
            "لا توجد أي طرق فوق خط الأشجار.",
            "يوجد طعام يناسب كل الأذواق."
          ]
        }
      },
      "questions": {
        "7": {
          "fr": "Dans ce texte, il s'agit principalement de ...",
          "ar": "يدور هذا النص بالأساس حول ...",
          "text": {
            "fr": "Dans ce texte, il s'agit principalement de ...",
            "ar": "يدور هذا النص بالأساس حول ..."
          },
          "options": {
            "fr": [
              "problèmes écologiques et environnementaux dans les Alpes.",
              "la pratique du cyclisme en Suisse.",
              "circuits et randonnées à vélo à travers les Alpes."
            ],
            "ar": [
              "المشاكل البيئية في جبال الألب.",
              "ركوب الدراجات في سويسرا.",
              "جولات ورحلات الدراجات الهوائية في جبال الألب."
            ]
          }
        },
        "8": {
          "fr": "Lors du circuit d'Innsbruck à Cortina d'Ampezzo ...",
          "ar": "خلال الرحلة من إنسبروك إلى كورتينا دامبيدزو ...",
          "text": {
            "fr": "Lors du circuit d'Innsbruck à Cortina d'Ampezzo ...",
            "ar": "خلال الرحلة من إنسبروك إلى كورتينا دامبيدزو ..."
          },
          "options": {
            "fr": [
              "on sert de délicieux desserts.",
              "on a l'occasion d'admirer de très nombreux paysages.",
              "les adeptes du VTT aiment beaucoup voyager."
            ],
            "ar": [
              "توجد أصناف حلوى جميلة.",
              "يمكن للمرء مشاهدة الكثير من المعالم والمناظر.",
              "يحب راكبو الدراجات الجبلية السفر كثيراً."
            ]
          }
        },
        "9": {
          "fr": "Dans les refuges de montagne de la cuvette du Fanes ...",
          "ar": "في الأكواخ الجبلية بحوض فانيس ...",
          "text": {
            "fr": "Dans les refuges de montagne de la cuvette du Fanes ...",
            "ar": "في الأكواخ الجبلية بحوض فانيس ..."
          },
          "options": {
            "fr": [
              "on ne sert que des boissons.",
              "on peut passer la nuit et dormir.",
              "on peut déguster de bons repas savoureux."
            ],
            "ar": [
              "لا تتوفر سوى المشروبات فقط.",
              "يمكن المبيت والنوم.",
              "يمكن تناول طعام لذيذ وشهي."
            ]
          }
        }
      },
      "articles2": [
        {
          "heading": {
            "fr": "Un voyage virtuel",
            "ar": "رحلة افتراضية"
          },
          "title": {
            "fr": "Un voyage virtuel",
            "ar": "رحلة افتراضية"
          },
          "body": {
            "fr": [
              "De nos jours, faire le tour du monde et visiter de hauts lieux historiques, des édifices remarquables ou des monuments célèbres n'a plus besoin d'être ni épuisant ni onéreux. Êtes-vous déjà monté au sommet de la tour de Pise ? Non ? Trop de touristes faisant la queue ? Trop cher ? Pas le temps ? Ou des difficultés à marcher ? Tout cela ne pose plus aucun problème, grâce à la numérisation !",
              "Si vous ne pouvez pas vous déplacer jusqu'aux monuments, ce sont eux qui viennent à vous ! Un tour du monde peut désormais s'effectuer tout simplement depuis son iPad ou son ordinateur. Livres rares, monuments grandioses ou visites de musées sont accessibles sous forme de visites virtuelles interactives sur Internet. Une promenade dans le musée du Louvre à Paris devient ainsi tout aussi accessible qu'un vol panoramique autour du sommet de la statue de la Liberté ou une exploration des profondeurs du Grand Canyon.",
              "Désormais, voyager virtuellement vers des monuments historiques par-delà les continents et aux quatre coins du globe ne relève plus du parcours du combattant. De multiples applications pour smartphones – les fameuses « applis » – immortalisent et préservent les trésors artistiques de l'humanité pour les générations futures. Au sein de la Bibliothèque nationale autrichienne, les chefs-d'œuvre patrimoniaux sont numérisés, tandis que Google rend accessibles depuis des années au monde numérique des écrits d'une valeur inestimable conservés dans les musées et bibliothèques."
            ],
            "ar": [
              "لم يعد السفر حول العالم وزيارة الأماكن التاريخية الهامة أو الصروح المعمارية والنصب التذكارية أمراً مرهقاً أو مكلفاً في يومنا هذا. هل صعدت يوماً إلى برج بيزا المائل؟ لا؟ هل كان السبب كثرة السياح وطوابير الانتظار الطويلة؟ أم التكاليف الباهظة؟ أم ضيق الوقت؟ أم صعوبة المشي والتنقل؟ كل ذلك لم يعد يشكل عائقاً بفضل الثورة الرقمية.",
              "فعندما يتعذر عليك الذهاب إلى المعالم التاريخية، تأتي هي إليك مباشرة! يمكن القيام برحلة حول العالم ببساطة عبر جهاز الآيباد أو شاشة الحاسوب؛ فالكتب النادرة والآثار والزيارات المتحفية باتت متاحة في صورة جولات افتراضية تفاعلية على الإنترنت. وهكذا أصبحت الجولة داخل متحف اللوفر الباريسي ممكنة تماماً مثل التحليق حول قمة تمثال الحرية أو القيام بنزهة عبر أرجاء الأخدود العظيم (جراند كانيون).",
              "وفي الوقت الراهن، لم يعد السفر الافتراضي إلى المعالم التاريخية عبر القارات وحول العالم يمثل أي صعوبة. كما تعمل العديد من تطبيقات الهواتف الذكية على حفظ الكنوز الفنية العالمية وصيانتها للأجيال القادمة. وتقوم المكتبة الوطنية النمساوية برقمنة الأعمال التاريخية الكبرى، كما تتيح شركة جوجل منذ سنوات نصوصاً ومخطوطات تستحق الحفظ من المتاحف والمكتبات لجميع مستخدمي العالم الرقمي."
            ]
          }
        }
      ],
      "questions2": {
        "10": {
          "fr": "Dans ce texte, il s'agit principalement de ...",
          "ar": "يدور هذا النص بالأساس حول ...",
          "text": {
            "fr": "Dans ce texte, il s'agit principalement de ...",
            "ar": "يدور هذا النص بالأساس حول ..."
          },
          "options": {
            "fr": [
              "de multiples manières différentes de partir en voyage.",
              "une nouvelle façon innovante de découvrir les curiosités touristiques.",
              "monuments et trésors patrimoniaux autrichiens."
            ],
            "ar": [
              "خيارات وسبل عديدة للقيام برحلة سياحية.",
              "أسلوب وطريقة عصرية جديدة للتعرف على المعالم السياحية.",
              "الآثار والمعالم التاريخية النمساوية."
            ]
          }
        },
        "11": {
          "fr": "Google ...",
          "ar": "تقوم شركة جوجل بـ ...",
          "text": {
            "fr": "Google ...",
            "ar": "تقوم شركة جوجل بـ ..."
          },
          "options": {
            "fr": [
              "permet aux internautes de consulter et de lire en ligne des textes issus de musées.",
              "travaille en collaboration étroite avec la Bibliothèque nationale autrichienne.",
              "collectionne des œuvres d'art célèbres provenant de musées."
            ],
            "ar": [
              "تمكين مستخدمي الإنترنت من مشاهدة وقراءة مخطوطات ونصوص المتاحف.",
              "التعاون والشراكة مع المكتبة الوطنية النمساوية.",
              "جمع الأعمال الفنية الشهيرة من المتاحف."
            ]
          }
        },
        "12": {
          "fr": "Les voyages lointains physiques ...",
          "ar": "السفر لمسافات طويلة وبعيدة ...",
          "text": {
            "fr": "Les voyages lointains physiques ...",
            "ar": "السفر لمسافات طويلة وبعيدة ..."
          },
          "options": {
            "fr": [
              "coûtent systématiquement beaucoup d'argent.",
              "sont entrepris par une multitude de touristes.",
              "peuvent s'avérer fatigants et épuisants."
            ],
            "ar": [
              "يكلف دائماً مبالغ مالية باهظة.",
              "يقوم به أعداد غفيرة من السياح.",
              "قد يسبب التعب والإرهاق الجسدي."
            ]
          }
        }
      }
    },
    "3": {
      "title": {
        "fr": "Partie 3 (Lecture)",
        "ar": "الجزء 3 (القراءة)"
      },
      "instructions": {
        "fr": "Lisez les situations 13 à 19 et les annonces a à j. Choisissez : quelle annonce correspond à quelle situation ? Vous ne pouvez utiliser chaque annonce qu'une seule fois. Écrivez 0 si aucune annonce ne convient.",
        "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j. اختر الإعلان المناسب لكل موقف. يمكن استخدام كل إعلان مرة واحدة فقط. اكتب 0 إذا لم تجد إعلاناً مناسباً."
      },
      "intro": {
        "fr": "La plupart de vos connaissances possèdent une voiture. Mais une voiture n'est pas seulement pratique : elle demande beaucoup d'entretien et coûte cher. Vous recherchez la solution adaptée dans les annonces.",
        "ar": "معظم معارفك يمتلكون سيارات، لكن امتلاك سيارة ليس عملياً فحسب بل يتطلب جهداً ويكلف مالاً. تبحث في الإعلانات عن حل مناسب للمواقف التالية."
      },
      "ads": {
        "a": {
          "fr": "Auto-Profi Hoffmann · Cours d'auto-dépannage pour femmes en partenariat avec l'Université Populaire d'Ulm. Inscription gratuite via la VHS. Entretien, contrôle technique, assistance dépannage.",
          "ar": "ورشة هوفمان · دورات تدريبية مخصصة للنساء لتعلم التعامل مع أعطال السيارات وتغيير الإطارات بالتعاون مع معهد أولم لتعليم الكبار. التسجيل مجاني. صيانة وإصلاح وفحص سنوي."
        },
        "A": {
          "fr": "Auto-Profi Hoffmann · Cours d'auto-dépannage pour femmes en partenariat avec l'Université Populaire d'Ulm. Inscription gratuite via la VHS. Entretien, contrôle technique, assistance dépannage.",
          "ar": "ورشة هوفمان · دورات تدريبية مخصصة للنساء لتعلم التعامل مع أعطال السيارات وتغيير الإطارات بالتعاون مع معهد أولم لتعليم الكبار. التسجيل مجاني. صيانة وإصلاح وفحص سنوي."
        },
        "b": {
          "fr": "Park & Ride Vienne · Garages relais aux stations de métro pour se rendre au travail sans stress ni embouteillages. Forfaits combinés économiques.",
          "ar": "مواقف بارك آند رايد فيينا · مواقف سيارات عند محطات المترو للوصول إلى العمل براحة وتجنب الازدحام المروري والبحث عن مواقف. اشتراكات اقتصادية مدمجة."
        },
        "B": {
          "fr": "Park & Ride Vienne · Garages relais aux stations de métro pour se rendre au travail sans stress ni embouteillages. Forfaits combinés économiques.",
          "ar": "مواقف بارك آند رايد فيينا · مواقف سيارات عند محطات المترو للوصول إلى العمل براحة وتجنب الازدحام المروري والبحث عن مواقف. اشتراكات اقتصادية مدمجة."
        },
        "c": {
          "fr": "autoscout24 · Le plus grand marché automobile d'Autriche s'installe à Klosterneuburg. Grand choix de véhicules électriques d'occasion avec 10 % de remise de lancement.",
          "ar": "أوتوسكاوت 24 · أكبر سوق للسيارات في النمسا يفتتح فرعاً في كلاسترنوويبورغ. تشكيلة واسعة من السيارات الكهربائية المستعملة مع خصم 10% بمناسبة الافتتاح."
        },
        "C": {
          "fr": "autoscout24 · Le plus grand marché automobile d'Autriche s'installe à Klosterneuburg. Grand choix de véhicules électriques d'occasion avec 10 % de remise de lancement.",
          "ar": "أوتوسكاوت 24 · أكبر سوق للسيارات في النمسا يفتتح فرعاً في كلاسترنوويبورغ. تشكيلة واسعة من السيارات الكهربائية المستعملة مع خصم 10% بمناسبة الافتتاح."
        },
        "d": {
          "fr": "Autohaus Hellmer · Garantie Mobilité 365 jours par an, 24h/24 : remorquage, dépannage, véhicule de prêt jusqu'à 3 jours ou hôtel en cas d'accident.",
          "ar": "وكالة هيلمر للسيارات · ضمان التنقل على مدار 24 ساعة طوال 365 يوماً: سحب ونقل عند الحوادث، وسيارة بديلة لمدة تصل إلى 3 أيام أو إقامة فندقية."
        },
        "D": {
          "fr": "Autohaus Hellmer · Garantie Mobilité 365 jours par an, 24h/24 : remorquage, dépannage, véhicule de prêt jusqu'à 3 jours ou hôtel en cas d'accident.",
          "ar": "وكالة هيلمر للسيارات · ضمان التنقل على مدار 24 ساعة طوال 365 يوماً: سحب ونقل عند الحوادث، وسيارة بديلة لمدة تصل إلى 3 أيام أو إقامة فندقية."
        },
        "e": {
          "fr": "Car Wash Royal · Lavage de voiture solidaire : en avril, pour chaque lavage du samedi, 4 € sont reversés aux jeunes sapeurs-pompiers de Schwerte.",
          "ar": "مغسلة كار ووش رويال · غسيل السيارات لغرض خيري: في كل سبت من شهر أبريل، يُخصص 4 يورو من كل غسيل كدعم وتبرع لفرقة إطفاء الشباب في شفيرته."
        },
        "E": {
          "fr": "Car Wash Royal · Lavage de voiture solidaire : en avril, pour chaque lavage du samedi, 4 € sont reversés aux jeunes sapeurs-pompiers de Schwerte.",
          "ar": "مغسلة كار ووش رويال · غسيل السيارات لغرض خيري: في كل سبت من شهر أبريل، يُخصص 4 يورو من كل غسيل كدعم وتبرع لفرقة إطفاء الشباب في شفيرته."
        },
        "f": {
          "fr": "eckert mobil · Réparation complète après accident, prise en charge sur les lieux du sinistre et règlement de toutes les formalités administratives avec l'assurance.",
          "ar": "إيكرت موبيل · صيانة وإصلاح شامل بعد الحوادث، سحب السيارة من موقع الحادث، وإنهاء كافة المعاملات والأوراق الإدارية مع شركات التأمين."
        },
        "F": {
          "fr": "eckert mobil · Réparation complète بعد accident, prise en charge sur les lieux du sinistre et règlement de toutes les formalités administratives avec l'assurance.",
          "ar": "إيكرت موبيل · صيانة وإصلاح شامل بعد الحوادث، سحب السيارة من موقع الحادث، وإنهاء كافة المعاملات والأوراق الإدارية مع شركات التأمين."
        },
        "g": {
          "fr": "Recherche covoiturage quotidien : trajet Klosterneuburg – centre de Vienne aux heures de bureau. Partage des frais d'essence. Contact : Maximilian.",
          "ar": "بحث عن مشاركة سيارة (كاربُولينغ) يومياً من كلاسترنوويبورغ إلى وسط فيينا في أوقات الدوام الرسمي، مع تحمل جزء من تكاليف الوقود. الاتصال: ماكسيميليان."
        },
        "G": {
          "fr": "Recherche covoiturage quotidien : trajet Klosterneuburg – centre de Vienne aux heures de bureau. Partage des frais d'essence. Contact : Maximilian.",
          "ar": "بحث عن مشاركة سيارة (كاربُولينغ) يومياً من كلاسترنوويبورغ إلى وسط فيينا في أوقات الدوام الرسمي، مع تحمل جزء من تكاليف الوقود. الاتصال: ماكسيميليان."
        },
        "h": {
          "fr": "CleanestCar · Après 10 lavages réguliers, profitez d'un lavage de luxe avec cire, rénovation des couleurs et nettoyage des jantes à MOITIÉ PRIX.",
          "ar": "كلينست كار · بعد 10 غسلات للسيارة، احصل على غسيل فاخر يشمل الشمع وتجديد اللون وتنظيف الإطارات بنصف السعر."
        },
        "H": {
          "fr": "CleanestCar · Après 10 lavages réguliers, profitez d'un lavage de luxe avec cire, rénovation des couleurs et nettoyage des jantes à MOITIÉ PRIX.",
          "ar": "كلينست كار · بعد 10 غسلات للسيارة، احصل على غسيل فاخر يشمل الشمع وتجديد اللون وتنظيف الإطارات بنصف السعر."
        },
        "i": {
          "fr": "Auto-école Peter Rüegg à Zurich · Conduite sûre et écologique pour réduire sa consommation d'énergie. Attention : réservé aux conducteurs confirmés (exclut les jeunes permis).",
          "ar": "مدرسة بيتر رويغ لتعليم القيادة في زيورخ · دورات متقدمة للقيادة الآمنة والاقتصادية الصديقة للبيئة. تنبيه: الدورة ليست مخصصة للسائقين المبتدئين أو حديثي العهد بالرخصة."
        },
        "I": {
          "fr": "Auto-école Peter Rüegg à Zurich · Conduite sûre et écologique pour réduire sa consommation d'énergie. Attention : réservé aux conducteurs confirmés (exclut les jeunes permis).",
          "ar": "مدرسة بيتر رويغ لتعليم القيادة في زيورخ · دورات متقدمة للقيادة الآمنة والاقتصادية الصديقة للبيئة. تنبيه: الدورة ليست مخصصة للسائقين المبتدئين أو حديثي العهد بالرخصة."
        },
        "j": {
          "fr": "Salon de l'Auto de Genève · Focus sur les nouveaux modèles et technologies de voitures électriques de toutes marques. Forfait week-end avec hôtel et billets.",
          "ar": "معرض جنيف للسيارات · تسليط الضوء على أحدث موديلات وتكنولوجيا السيارات الكهربائية لكافة الشركات. عرض عطلة نهاية الأسبوع يشمل تذاكر الدخول والإقامة الفندقية."
        },
        "J": {
          "fr": "Salon de l'Auto de Genève · Focus sur les nouveaux modèles et technologies de voitures électriques de toutes marques. Forfait week-end avec hôtel et billets.",
          "ar": "معرض جنيف للسيارات · تسليط الضوء على أحدث موديلات وتكنولوجيا السيارات الكهربائية لكافة الشركات. عرض عطلة نهاية الأسبوع يشمل تذاكر الدخول والإقامة الفندقية."
        }
      },
      "questions": {
        "13": {
          "fr": "Les époux Jansen lavent régulièrement leur voiture en station, mais souhaitent en profiter pour faire une bonne action solidaire.",
          "ar": "يقوم الزوجان يانسن بغسيل سيارتهما بانتظام في محطة الغسيل، لكنهما يبحثان عن فرصة لتقديم عمل خيري أثناء ذلك.",
          "text": {
            "fr": "Les époux Jansen lavent régulièrement leur voiture en station, mais souhaitent en profiter pour faire une bonne action solidaire.",
            "ar": "يقوم الزوجان يانسن بغسيل سيارتهما بانتظام في محطة الغسيل، لكنهما يبحثان عن فرصة لتقديم عمل خيري أثناء ذلك."
          }
        },
        "14": {
          "fr": "Benno a obtenu son permis de conduire récemment et souhaite apprendre à conduire de manière sûre et économe en énergie.",
          "ar": "حصل بينو على رخصة القيادة حديثاً، ويرغب في تعلم المزيد حول أساليب القيادة الآمنة والموفرة للطاقة.",
          "text": {
            "fr": "Benno a obtenu son permis de conduire récemment et souhaite apprendre à conduire de manière sûre et économe en énergie.",
            "ar": "حصل بينو على رخصة القيادة حديثاً، ويرغب في تعلم المزيد حول أساليب القيادة الآمنة والموفرة للطاقة."
          }
        },
        "15": {
          "fr": "Mme Wyss n'est plus satisfaite de son ancienne voiture électrique et souhaite découvrir les nouveaux modèles électriques de différentes marques.",
          "ar": "لم تعد السيدة فيس راضية عن سيارتها الكهربائية القديمة، وترغب في الاطلاع على أحدث الموديلات الكهربائية لمختلف الماركات.",
          "text": {
            "fr": "Mme Wyss n'est plus satisfaite de son ancienne voiture électrique et souhaite découvrir les nouveaux modèles électriques de différentes marques.",
            "ar": "لم تعد السيدة فيس راضية عن سيارتها الكهربائية القديمة، وترغب في الاطلاع على أحدث الموديلات الكهربائية لمختلف الماركات."
          }
        },
        "16": {
          "fr": "M. Wieser a des difficultés à marcher et se rend donc toujours en voiture à son bureau. Mais le trajet de Klosterneuburg au centre de Vienne est long et l'essence devient de plus en plus chère.",
          "ar": "يعاني السيد فيزر من صعوبة في المشي، ولذلك يتنقل دوماً بسيارته إلى المكتب، لكن المسافة من كلاسترنوويبورغ إلى وسط فيينا طويلة وتكاليف البنزين تزداد باستمرار.",
          "text": {
            "fr": "M. Wieser a des difficultés à marcher et se rend donc toujours en voiture à son bureau. Mais le trajet de Klosterneuburg au centre de Vienne est long et l'essence devient de plus en plus chère.",
            "ar": "يعاني السيد فيزر من صعوبة في المشي، ولذلك يتنقل دوماً بسيارته إلى المكتب، لكن المسافة من كلاسترنوويبورغ إلى وسط فيينا طويلة وتكاليف البنزين تزداد باستمرار."
          }
        },
        "17": {
          "fr": "Melissa a son permis depuis trois mois et n'apprécie pas le fait de ne pas savoir changer une roue en cas de crevaison.",
          "ar": "حصلت ميليسا على رخصة القيادة منذ ثلاثة أشهر، وتشعر بالانزعاج لأنها لا تعرف حتى كيفية تغيير إطار السيارة.",
          "text": {
            "fr": "Melissa a son permis depuis trois mois et n'apprécie pas le fait de ne pas savoir changer une roue en cas de crevaison.",
            "ar": "حصلت ميليسا على رخصة القيادة منذ ثلاثة أشهر، وتشعر بالانزعاج لأنها لا تعرف حتى كيفية تغيير إطار السيارة."
          }
        },
        "18": {
          "fr": "Lors de son dernier accident, Mme Schulte est restée deux jours sans voiture, ce qui lui a causé de gros soucis dans son travail d'agente d'assurance.",
          "ar": "في الحادث الأخير الذي تعرضت له السيدة شولته، ظلت ليومين بدون سيارة، مما تسبب لها في مشاكل عديدة في عملها كمندوبة تأمين.",
          "text": {
            "fr": "Lors de son dernier accident, Mme Schulte est restée deux jours sans voiture, ce qui lui a causé de gros soucis dans son travail d'agente d'assurance.",
            "ar": "في الحادث الأخير الذي تعرضت له السيدة شولته، ظلت ليومين بدون سيارة، مما تسبب لها في مشاكل عديدة في عملها كمندوبة تأمين."
          }
        },
        "19": {
          "fr": "M. Nowak a malheureusement eu un nouvel accident. La dernière fois, il s'était beaucoup énervé contre le garage et les experts d'assurance.",
          "ar": "تعرض السيد نوفاك لحادث سير جديد للأسف. وفي المرة السابقة شعر بغضب واستياء شديدين من ورشة التصليح ومندوبي التأمين.",
          "text": {
            "fr": "M. Nowak a malheureusement eu un nouvel accident. La dernière fois, il s'était beaucoup énervé contre le garage et les experts d'assurance.",
            "ar": "تعرض السيد نوفاك لحادث سير جديد للأسف. وفي المرة السابقة شعر بغضب واستياء شديدين من ورشة التصليح ومندوبي التأمين."
          }
        }
      }
    },
    "4": {
      "title": {
        "fr": "Partie 4 (Lecture)",
        "ar": "الجزء 4 (القراءة)"
      },
      "instructions": {
        "fr": "Lisez les textes 20 à 26. Choisissez : la personne est-elle favorable à une interdiction des graffitis ?",
        "ar": "اقرأ النصوص من 20 إلى 26. اختر: هل يؤيد هذا الشخص حظر ومنع رسومات الجرافيتي في المدينة؟"
      },
      "intro": {
        "fr": "Dans un magazine, vous lisez des courriers de lecteurs réagissant à un article sur les graffitis sur les murs de la ville et l'éventualité de les interdire.",
        "ar": "تقرأ في إحدى المجلات تعليقات وآراء القراء حول مقال يتناول انتشار رسومات الجرافيتي على جدران المباني وإمكانية حظرها ومعاقبة مرتكبيها."
      },
      "letters": {
        "20": {
          "who": "Anton, 14 ans, Wolfratshausen",
          "text": {
            "fr": "Ma sœur aînée a déjà fait des graffitis avec ses amis. Un dimanche matin, ils sont allés dans une zone industrielle. J'y suis allé le lendemain, mais son œuvre ne m'a pas trop plu car elle n'était pas très réussie. Quand nos parents l'ont appris, ils sont entrés dans une colère noire et ont puni ma sœur. Mais malgré tout, moi je trouve cela généralement super cool !",
            "ar": "سبق لأختي الكبرى أن قامت بالرسم بالبخاخ مع أصدقائها في منطقة صناعية صباح أحد أيام الأحد. ذهبت في اليوم التالي لرؤية ما فعلت، لكن رسمتها لم تعجبني لأنها لم تكن متقنة تماماً. وعندما علم والدانا بذلك غضبا بشدة وعاقبا أختي، ولكن رغم ذلك، أرى أنا شخصياً أن هذا الشيء رائع جداً بشكل عام."
          }
        },
        "21": {
          "who": "Ernst, 48 ans, Heidelberg",
          "text": {
            "fr": "J'aime quand tout est propre, soigné et bien entretenu. Quand il y a des graffitis partout, la ville prend un aspect sale, négligé et chaotique, c'est atroce ! Cela me dérange profondément. Comment peut-on supporter un tel spectacle jour après jour ? Venez donc voir dans ma rue, vous comprendrez immédiatement ce que je veux dire !",
            "ar": "يعجبني أن يكون كل شيء نظيفاً وجميلاً ومرتباً. عندما ينتشر الجرافيتي في كل مكان، تبدو المدينة فوضوية ومزرية – إنه لأمر مريع ومزعج للغاية! كيف يمكن للمرء أن يتحمل هذا المنظر الكئيب يوماً بعد يوم؟ تعالوا إلى شارعي وانظروا بأنفسكم، وستفهمون فوراً ما أعنيه!"
          }
        },
        "22": {
          "who": "Conni, 37 ans, Ratisbonne",
          "text": {
            "fr": "Ce que je pense des graffitis ? Difficile à dire. Autrefois, il existait déjà des fresques peintes sur les façades des grands immeubles, mais c'était moins agressif et exécuté contre rémunération. Le graffiti conserve toujours un côté illégal et je pense qu'il vaudrait mieux ne pas tolérer de tels actes. Tout le monde ne peut pas faire ce qu'il veut, sinon ce serait l'anarchie.",
            "ar": "ما رأيي في الجرافيتي؟ من الصعب الجزم بذلك. قديماً كانت هناك جداريات ملونة على واجهات المباني الكبرى في المدينة، لكنها لم تكن بتلك العشوائية وكان من ينفذها يتقاضى أجراً عليها. أما الجرافيتي فيحمل دوماً طابعاً غير قانوني، وأعتقد أنه من الأفضل عدم التسامح معه؛ فلا يصح أن يفعل كل شخص ما يحلو له وإلا عمت الفوضى."
          }
        },
        "23": {
          "who": "Torben, 18 ans, Lucerne",
          "text": {
            "fr": "La question ne se pose même pas ! Imaginez un peu à quel point nos villes seraient monotones et tristes sans cela. Ce culte de l'ordre parfait et de la propreté aseptisée m'insupporte. Il faut bien voir un peu de couleur et de vie ! Quand je regarde des photos d'autrefois avant l'apparition des graffitis, je trouve la ville d'un ennui mortel et sans âme. Notre monde ne peut pas ressembler à ça !",
            "ar": "هذا السؤال لا داعي له أصلاً! تخيلوا معي كم ستكون مدننا رتيبة وكئيبة بدون هذه الألوان. إن هذا الهوس بالنظام والنظافة المفرطة يثير أعصابي؛ يجب أن يكون بوسع المرء رؤية شيء مختلف ومبتكر. عندما أشاهد صوراً قديمة للمدن قبل ظهور الجرافيتي، أجدها مملة وفارغة بشكل لا يُصدق. لا يمكن لعالمنا أن يكون هكذا!"
          }
        },
        "24": {
          "who": "Inge, 52 ans, Bonn",
          "text": {
            "fr": "Tout ce que je sais, c'est que ces bombes de peinture sont très nocives pour la santé. J'ai lu un jour qu'il faudrait porter un masque de protection respiratoire pour ne pas inhaler les vapeurs toxiques. On ne peut absolument pas autoriser cela. Même les jeunes devraient être capables de le comprendre. Va-t-on rester les bras croisés à les regarder détruire leur santé ?",
            "ar": "كل ما أعرفه هو أن هذه الأصباغ والبخاخات ضارة جداً بالصحة. قرأت ذات مرة أنه ينبغي ارتداء قناع واقٍ للوجه أثناء الرش لتجنب استنشاق الأبخرة السامة. لا يمكن السماح بمثل هذه الأمور على الإطلاق؛ حتى الشباب أنفسهم يجب أن يدركوا ذلك. هل نقف متفرجين بينما يدمرون صحتهم بأيديهم؟"
          }
        },
        "25": {
          "who": "Gabriele, 40 ans, Hanovre",
          "text": {
            "fr": "Il y a des graffitis partout. On n'a jamais demandé notre avis à nous, les adultes. Ce n'est pas ainsi qu'une démocratie doit fonctionner. Les parents et les enseignants ont totalement failli à leur mission. Cela prouve simplement que les éducateurs laissent tout passer sans aucune limite. Il faudrait leur donner une bonne leçon. La seule mesure efficace est de sévir fermement.",
            "ar": "الجرافيتي منتشر في كل زاوية. لم يسألنا أحد، نحن الكبار، عما إذا كنا نريد ذلك أم لا. ليست هذه هي الطريقة التي تعمل بها الديمقراطية. لقد فشل المعلمون والآباء في أداء واجبهم، وهذا يثبت أن أولياء الأمور يتركون الحبل على الغارب لأولادهم. ينبغي إعطاؤهم جميعاً درساً لا ينسى، والإجراء الصحيح الوحيد هو التعامل بحزم وقسوة."
          }
        },
        "26": {
          "who": "Mara, 22 ans, Flensbourg",
          "text": {
            "fr": "Dès que quelqu'un imagine quelque chose d'audacieux et de stimulant, il faut immédiatement que tout le monde pousse des cris d'orfraie ! C'est toujours la même histoire, comme avec les piercings, les tatouages et tout ce qui plaît à la jeunesse. Les jeunes n'ont-ils donc jamais le droit d'avoir voix au chapitre ni de s'exprimer librement dans notre société ? Je refuse catégoriquement ce paternalisme étouffant.",
            "ar": "ما إن يبتكر شخص ما شيئاً مثيراً وجديداً، حتى يبدأ الجميع فوراً بالتذمر والشكوى! هذا ديدنهم دائماً، تماماً كما حدث مع الوشم والبيرسينغ وكل ما يحبه الشباب. أليس من حق الشباب في مجتمعنا أن يقولوا كلمتهم وأن يعبروا عن أنفسهم بحرية؟ إنني أرفض هذه الوصاية والتدخل الفوقي رفضاً قاطعاً."
          }
        }
      },
      "questions": {
        "20": {
          "fr": "Anton est-il favorable à une interdiction des graffitis ?",
          "ar": "هل يؤيد أنتون حظر رسومات الجرافيتي؟",
          "text": {
            "fr": "Anton est-il favorable à une interdiction des graffitis ?",
            "ar": "هل يؤيد أنتون حظر رسومات الجرافيتي؟"
          }
        },
        "21": {
          "fr": "Ernst est-il favorable à une interdiction des graffitis ?",
          "ar": "هل يؤيد إرنست حظر رسومات الجرافيتي؟",
          "text": {
            "fr": "Ernst est-il favorable à une interdiction des graffitis ?",
            "ar": "هل يؤيد إرنست حظر رسومات الجرافيتي؟"
          }
        },
        "22": {
          "fr": "Conni est-elle favorable à une interdiction des graffitis ?",
          "ar": "هل تؤيد كوني حظر رسومات الجرافيتي؟",
          "text": {
            "fr": "Conni est-elle favorable à une interdiction des graffitis ?",
            "ar": "هل تؤيد كوني حظر رسومات الجرافيتي؟"
          }
        },
        "23": {
          "fr": "Torben est-il favorable à une interdiction des graffitis ?",
          "ar": "هل يؤيد توربن حظر رسومات الجرافيتي؟",
          "text": {
            "fr": "Torben est-il favorable à une interdiction des graffitis ?",
            "ar": "هل يؤيد توربن حظر رسومات الجرافيتي؟"
          }
        },
        "24": {
          "fr": "Inge est-elle favorable à une interdiction des graffitis ?",
          "ar": "هل تؤيد إنجي حظر رسومات الجرافيتي؟",
          "text": {
            "fr": "Inge est-elle favorable à une interdiction des graffitis ?",
            "ar": "هل تؤيد إنجي حظر رسومات الجرافيتي؟"
          }
        },
        "25": {
          "fr": "Gabriele est-elle favorable à une interdiction des graffitis ?",
          "ar": "هل تؤيد غابرييلي حظر رسومات الجرافيتي؟",
          "text": {
            "fr": "Gabriele est-elle favorable à une interdiction des graffitis ?",
            "ar": "هل تؤيد غابرييلي حظر رسومات الجرافيتي؟"
          }
        },
        "26": {
          "fr": "Mara est-elle favorable à une interdiction des graffitis ?",
          "ar": "هل تؤيد مارا حظر رسومات الجرافيتي؟",
          "text": {
            "fr": "Mara est-elle favorable à une interdiction des graffitis ?",
            "ar": "هل تؤيد مارا حظر رسومات الجرافيتي؟"
          }
        }
      }
    },
    "5": {
      "title": {
        "fr": "Partie 5 (Lecture)",
        "ar": "الجزء 5 (القراءة)"
      },
      "instructions": {
        "fr": "Lisez les questions 27 à 30 et le texte ci-dessous. Choisissez la bonne réponse a, b ou c.",
        "ar": "اقرأ المهام من 27 إلى 30 والنص المرفق. اختر لكل مهمة الإجابة الصحيحة أ، ب أو ج."
      },
      "intro": {
        "fr": "Vous consultez la notice d'un sirop au miel et au fenouil car votre petit cousin est malade.",
        "ar": "تطلع على النشرة الدوائية لشراب عسل الشمر لأن ابن عمك الصغير مريض."
      },
      "article": {
        "heading": {
          "fr": "Miel de fenouil contre la toux et l'enrouement",
          "ar": "عسل الشمر ضد السعال وبحة الصوت"
        },
        "title": {
          "fr": "Notice d'utilisation – Information pour l'utilisateur\nMiel de fenouil contre la toux et l'enrouement\nPour enfants à partir de 1 an",
          "ar": "النشرة الداخلية – معلومات وإرشادات للمستخدم\nعسل الشمر لعلاج السعال وبحة الصوت\nللأطفال من سن سنة واحدة فما فوق"
        },
        "body": {
          "fr": [
            "QU'EST-CE QUE LE MIEL DE FENOUIL CONTRE LA TOUX ET L'ENROUEMENT ?",
            "Le miel de fenouil contre la toux et l'enrouement est un sirop d'origine végétale au goût agréable, destiné au traitement des affections catarrhales des voies respiratoires supérieures accompagnées de sécrétions visqueuses chez l'enfant.",
            "COMMENT PRENDRE LE MIEL DE FENOUIL ?",
            "Sauf prescription contraire du médecin, la dose usuelle est la suivante : les enfants à partir de l'âge d'un an reçoivent 2 à 3 fois par jour une cuillère-mesure (5 ml / 6,5 g) [correspondant à 3,25 mg d'huile de fenouil] diluée dans de l'eau, du thé ou pure.",
            "QUELS SONT LES EFFETS SECONDAIRES ÉVENTUELS ?",
            "Comme tous les médicaments, le miel de fenouil peut provoquer des effets secondaires, bien qu'ils ne surviennent pas chez tout le monde. Très rarement, des réactions allergiques cutanées ou respiratoires peuvent se manifester. L'usage fréquent et prolongé du miel de fenouil peut être nocif pour l'émail dentaire et favoriser l'apparition de caries.",
            "CONSIGNES DE CONSERVATION DU PRODUIT :",
            "• Ne pas conserver à une température supérieure à 30 °C ; par temps de forte chaleur, placer le flacon au réfrigérateur.",
            "• Ne plus utiliser le sirop après la date de péremption figurant sur l'étiquette. La date d'expiration fait référence au dernier jour du mois indiqué.",
            "• Après ouverture du flacon, le médicament se conserve pendant 6 mois sous réserve du respect des conditions de stockage.",
            "Comme tout médicament, le miel de fenouil doit être tenu hors de portée des enfants."
          ],
          "ar": [
            "ما هو عسل الشمر المخصص لعلاج السعال وبحة الصوت؟",
            "عسل الشمر هو شراب عشبي نباتي ذو مذاق مستحب ومحبب للأطفال، مخصص لعلاج نزلات البرد والتهابات الجهاز التنفسي العلوي المصحوبة بمخاط لزج لدى الأطفال.",
            "كيفية استخدام وتناول عسل الشمر؟",
            "ما لم يصف الطبيب غير ذلك، فإن الجرعة المعتادة هي: يتناول الأطفال من سن سنة واحدة فما فوق ملعقة قياس واحدة (5 مل / 6.5 غرام) [ما يعادل 3.25 ملغ من زيت الشمر] من مرتين إلى ثلاث مرات يومياً، مذابة في الماء أو الشاي أو بمفردها مباشرة.",
            "ما هي الآثار الجانبية المحتملة؟",
            "مثل سائر الأدوية، قد يتسبب عسل الشمر في ظهور آثار جانبية، على الرغم من أنها لا تصيب جميع المرضى. ومن النادر جداً حدوث تفاعلات حساسية في الجلد أو المسالك التنفسية. كما أن الاستخدام المتكرر والمستمر لفترات طويلة قد يضر بصحة الأسنان ويسبب التسوس (الكارييس).",
            "إرشادات وتعليمات حفظ وتخزين عسل الشمر :",
            "• يُحفظ في درجة حرارة لا تتجاوز 30 درجة مئوية، وعند ارتفاع درجات الحرارة يُحفظ داخل الثلاجة.",
            "• يُحظر استعمال الشراب بعد انتهاء تاريخ الصلاحية المدون على الملصق، ويشير تاريخ الانتهاء إلى اليوم الأخير من الشهر المحدد.",
            "• بعد فتح الزجاجة، يظل الدواء صالحاً للاستخدام لمدة 6 أشهر شريطة الالتزام بتعليمات وظروف الحفظ المقررة.",
            "وكجميع العقاقير والأدوية الطبية، يجب حفظ هذا الدواء بعيداً عن متناول ونظر الأطفال."
          ]
        }
      },
      "questions": {
        "27": {
          "fr": "Effets secondaires possibles :",
          "ar": "الآثار الجانبية المحتملة للدواء:",
          "text": {
            "fr": "Effets secondaires possibles :",
            "ar": "الآثار الجانبية المحتملة للدواء:"
          },
          "options": {
            "fr": [
              "Le miel de fenouil ne présente aucun effet secondaire.",
              "Il peut entraîner des lésions et caries dentaires.",
              "Chez les personnes allergiques, des réactions cutanées temporaires surviennent fréquemment."
            ],
            "ar": [
              "لا يسبب عسل الشمر أي آثار جانبية إطلاقاً.",
              "قد يؤدي إلى الإضرار بصحة الأسنان وتسوسها.",
              "كثيراً ما تظهر تفاعلات حساسية جلدية مؤقتة لدى المصابين بالحساسية."
            ]
          }
        },
        "28": {
          "fr": "Les enfants peuvent prendre le miel de fenouil ...",
          "ar": "يمكن للأطفال تناول عسل الشمر ...",
          "text": {
            "fr": "Les enfants peuvent prendre le miel de fenouil ...",
            "ar": "يمكن للأطفال تناول عسل الشمر ..."
          },
          "options": {
            "fr": [
              "bien qu'il ait un goût très amer désagréable.",
              "bien que le médicament ne contienne que des molécules artificielles.",
              "à condition d'être âgés d'au moins douze mois."
            ],
            "ar": [
              "على الرغم من طعمه المر الشديد.",
              "على الرغم من احتوائه على مواد كيميائية مصنعة فقط.",
              "إذا كان عمر الطفل اثني عشر شهراً على الأقل."
            ]
          }
        },
        "29": {
          "fr": "Il faut savoir que ...",
          "ar": "ينبغي للمستخدم أن يعلم أن ...",
          "text": {
            "fr": "Il faut savoir que ...",
            "ar": "ينبغي للمستخدم أن يعلم أن ..."
          },
          "options": {
            "fr": [
              "le sirop peut encore être consommé pendant six mois après ouverture.",
              "le sirop doit impérativement être tiédi avant utilisation.",
              "le sirop doit obligatoirement être conservé au réfrigérateur en permanence."
            ],
            "ar": [
              "الشراب يظل صالحاً للاستعمال لمدة نصف سنة بعد فتح الزجاجة.",
              "يجب تدفئة الشراب وتسخينه قبل تناوله.",
              "الشراب يجب أن يوضع دائماً وبشكل مستمر داخل الثلاجة."
            ]
          }
        },
        "30": {
          "fr": "La posologie usuelle standard ...",
          "ar": "الجرعة النموذجية المعتادة ...",
          "text": {
            "fr": "La posologie usuelle standard ...",
            "ar": "الجرعة النموذجية المعتادة ..."
          },
          "options": {
            "fr": [
              "est obligatoirement fixée par le médecin traitant.",
              "peut être diluée et mélangée avec n'importe quelle boisson.",
              "s'applique uniformément aux enfants d'un an et plus."
            ],
            "ar": [
              "يحددها الطبيب المعالج وحده بالضرورة.",
              "يمكن تناولها مع أي مشروب مهما كان نوعه.",
              "تسري وتطبق على جميع الأطفال من عمر سنة فما فوق."
            ]
          }
        }
      }
    },
    "6": {
      "title": {
        "fr": "Module Écoute (Hören)",
        "ar": "وحدة الاستماع (Hören)"
      },
      "instructions": {
        "fr": "Le module Écoute se compose de quatre parties. Vous allez écouter différents enregistrements et répondre aux questions correspondantes.",
        "ar": "تتكون وحدة الاستماع من أربعة أجزاء. ستستمع إلى نصوص وتسجيلات متنوعة وتجيب عن الأسئلة المخصصة لكل جزء."
      },
      "teile": {
        "1": {
          "title": {
            "fr": "Partie 1 : Cinq enregistrements courts (Deux écoutes)",
            "ar": "الجزء 1: خمسة نصوص قصيرة (الاستماع مرتين)"
          },
          "desc": {
            "fr": "Vous écoutez cinq courts enregistrements deux fois chacun. Pour chaque texte, répondez à deux questions.",
            "ar": "ستستمع إلى خمسة نصوص قصيرة، كل نص مرتين. أجب عن سؤالين لكل نص."
          },
          "context": {
            "fr": "Situations quotidiennes : service volontaire des jeunes, appel à témoins policier, annonce d'aéroport, billetterie spectacles, promotions bagages en magasin.",
            "ar": "مواقف يومية: العمل التطوعي للشباب، نداء أمني لشهود حادث، إعلان في المطار، حجز التذاكر هاتفياً، وتخفيضات حقائب السفر في المتجر."
          }
        },
        "2": {
          "title": {
            "fr": "Partie 2 : Séance d'information sur les vols en montgolfière (Une seule écoute)",
            "ar": "الجزء 2: لقاء تعريفي حول رحلات المنطاد (الاستماع مرة واحدة)"
          },
          "desc": {
            "fr": "Vous écoutez un exposé une seule fois. Répondez aux cinq questions en choisissant a, b ou c.",
            "ar": "ستستمع إلى معلومات لمرة واحدة فقط. أجب عن الأسئلة الخمسة باختيار أ، ب أو ج."
          },
          "context": {
            "fr": "Séance d'information et consignes pratiques données aux lauréats d'un jeu-concours avant leur baptême de l'air en montgolfière.",
            "ar": "لقاء توجيهي وإرشادات عملية للفائزين برحلة منطاد بالهواء الساخن بعد فوزهم في مسابقة المجلة الرياضية."
          }
        },
        "3": {
          "title": {
            "fr": "Partie 3 : Organisation d'un voyage scolaire (Une seule écoute)",
            "ar": "الجزء 3: التخطيط لرحلة مدرسية (الاستماع مرة واحدة)"
          },
          "desc": {
            "fr": "Vous écoutez une conversation une seule fois. Décidez pour chaque affirmation si elle est vraie ou fausse.",
            "ar": "ستستمع إلى محادثة لمرة واحدة فقط. حدد لكل عبارة إن كانت صحيحة أم خاطئة."
          },
          "context": {
            "fr": "Discussion à un arrêt de bus viennois entre un enseignant et une mère d'élève au sujet du choix de la destination du voyage de terminale.",
            "ar": "حوار عفوي عند محطة الحافلات في فيينا بين معلم ووالدة طالبة حول الوجهة المناسبة لرحلة التخرج المدرسية."
          }
        },
        "4": {
          "title": {
            "fr": "Partie 4 : Débat radio MitTalk : Que faisons-nous de notre nourriture ? (Deux écoutes)",
            "ar": "الجزء 4: ندوة إذاعية عبر برنامج ميت توك: كيف نتعامل مع الطعام؟ (الاستماع مرتين)"
          },
          "desc": {
            "fr": "Vous écoutez un débat deux fois. Attribuez chaque opinion au bon intervenant : qui dit quoi ?",
            "ar": "ستستمع إلى نقاش وحوار إذاعي مرتين. حدد قائل كل عبارة: من يقول ماذا؟"
          },
          "context": {
            "fr": "Débat entre l'animateur, Juliane Schulz (bénévole de l'association d'aide alimentaire Tafel) et Lukas Tilmann (artiste créateur d'œuvres à base de restes alimentaires).",
            "ar": "حوار شيق يجمع مقدم البرنامج مع يوليانه شولتس (متطوعة في بنك الطعام تافل) والفنان لوكاس تيلمان (المبتكر لمجسمات فنية من بقايا الأطعمة)."
          }
        }
      },
      "questions": {
        "h1": {
          "fr": "Le conseil s'adresse aux jeunes qui souhaitent poursuivre des études universitaires.",
          "ar": "النصيحة موجهة للشباب الذين ينوون الالتحاق بالدراسة الجامعية.",
          "text": {
            "fr": "Le conseil s'adresse aux jeunes qui souhaitent poursuivre des études universitaires.",
            "ar": "النصيحة موجهة للشباب الذين ينوون الالتحاق بالدراسة الجامعية."
          }
        },
        "h2": {
          "fr": "Dans quel domaine peut-on s'engager activement ?",
          "ar": "أين يمكن للشخص أن يشارك ويتطوع بشكل فعال؟",
          "text": {
            "fr": "Dans quel domaine peut-on s'engager activement ?",
            "ar": "أين يمكن للشخص أن يشارك ويتطوع بشكل فعال؟"
          },
          "options": {
            "fr": [
              "Dans un hôpital.",
              "Dans une maison de retraite pour personnes âgées.",
              "Dans un cabinet médical."
            ],
            "ar": [
              "في المستشفى.",
              "في دار لرعاية المسنين.",
              "في عيادة طبية خاصة."
            ]
          }
        },
        "h3": {
          "fr": "La police a identifié l'auteur de l'agression.",
          "ar": "تعرفت الشرطة على هوية الجاني.",
          "text": {
            "fr": "La police a identifié l'auteur de l'agression.",
            "ar": "تعرفت الشرطة على هوية الجاني."
          }
        },
        "h4": {
          "fr": "Quel est l'état de santé de la serveuse ?",
          "ar": "كيف هي الحالة الصحية للنادلة؟",
          "text": {
            "fr": "Quel est l'état de santé de la serveuse ?",
            "ar": "كيف هي الحالة الصحية للنادلة؟"
          },
          "options": {
            "fr": [
              "Elle est blessée.",
              "Elle est décédée.",
              "Elle est en état d'ébriété."
            ],
            "ar": [
              "إنها مصابة بجروح.",
              "لقد فارقت الحياة.",
              "إنها في حالة سكر."
            ]
          }
        },
        "h5": {
          "fr": "Ces informations sont destinées aux passagers qui débarquent à l'aéroport.",
          "ar": "هذه الإرشادات موجهة للمسافرين القادمين والواصلين إلى المطار.",
          "text": {
            "fr": "Ces informations sont destinées aux passagers qui débarquent à l'aéroport.",
            "ar": "هذه الإرشادات موجهة للمسافرين القادمين والواصلين إلى المطار."
          }
        },
        "h6": {
          "fr": "Qui doit se dépêcher pour embarquer ?",
          "ar": "من الذي يتوجب عليه الإسراع؟",
          "text": {
            "fr": "Qui doit se dépêcher pour embarquer ?",
            "ar": "من الذي يتوجب عليه الإسراع؟"
          },
          "options": {
            "fr": [
              "Les passagers du vol à destination de Francfort.",
              "Les passagers du vol à destination de Cologne.",
              "Les passagers Siebert et Johannsen."
            ],
            "ar": [
              "المسافرون على الرحلة المتجهة إلى فرانكفورت.",
              "المسافرون على الرحلة المتجهة إلى كولونيا.",
              "المسافران زيبرت ويوهانسن."
            ]
          }
        },
        "h7": {
          "fr": "Vous écoutez un message d'information sur la commande et la réservation de billets de spectacle.",
          "ar": "تستمع إلى رسالة إرشادية حول طلب وحجز تذاكر الحفلات والمسارح.",
          "text": {
            "fr": "Vous écoutez un message d'information sur la commande et la réservation de billets de spectacle.",
            "ar": "تستمع إلى رسالة إرشادية حول طلب وحجز تذاكر الحفلات والمسارح."
          }
        },
        "h8": {
          "fr": "Quand peut-on passer commande par téléphone ?",
          "ar": "متى يمكن إجراء الحجز وطلب التذاكر هاتفياً؟",
          "text": {
            "fr": "Quand peut-on passer commande par téléphone ?",
            "ar": "متى يمكن إجراء الحجز وطلب التذاكر هاتفياً؟"
          },
          "options": {
            "fr": [
              "Le samedi et le dimanche de 7 h 30 à 18 h 00.",
              "Du lundi au dimanche de 7 h 30 à 20 h 00.",
              "Du lundi au vendredi jusqu'à 20 h 00."
            ],
            "ar": [
              "السبت والأحد من الساعة 7:30 صباحاً حتى 6:00 مساءً.",
              "من الإثنين إلى الأحد من الساعة 7:30 صباحاً حتى 8:00 مساءً.",
              "من الإثنين إلى الجمعة حتى الساعة 8:00 مساءً."
            ]
          }
        },
        "h9": {
          "fr": "Vous écoutez un message publicitaire vantant des offres de séjours touristiques.",
          "ar": "تستمع إلى إعلان ترويجي لعروض السفر والرحلات السياحية.",
          "text": {
            "fr": "Vous écoutez un message publicitaire vantant des offres de séjours touristiques.",
            "ar": "تستمع إلى إعلان ترويجي لعروض السفر والرحلات السياحية."
          }
        },
        "h10": {
          "fr": "Tous les articles présentés dans l'offre coûtent ...",
          "ar": "جميع البضائع المعروضة في التخفيضات تكلف ...",
          "text": {
            "fr": "Tous les articles présentés dans l'offre coûtent ...",
            "ar": "جميع البضائع المعروضة في التخفيضات تكلف ..."
          },
          "options": {
            "fr": [
              "plus de 100 euros.",
              "moins de 100 euros.",
              "98 euros."
            ],
            "ar": [
              "أكثر من 100 يورو.",
              "أقل من 100 يورو.",
              "98 يورو."
            ]
          }
        },
        "h11": {
          "fr": "Qui assiste à cette réunion d'information ?",
          "ar": "من الذي يحضر هذا اللقاء التعريفي؟",
          "text": {
            "fr": "Qui assiste à cette réunion d'information ?",
            "ar": "من الذي يحضر هذا اللقاء التعريفي؟"
          },
          "options": {
            "fr": [
              "Les personnes ayant gagné un vol en montgolfière.",
              "Les lecteurs abonnés au magazine de sport.",
              "Les personnes désireuses de s'inscrire au quiz."
            ],
            "ar": [
              "من فازوا برحلة المنطاد في المسابقة.",
              "قراء المجلة الرياضية.",
              "الراغبون في المشاركة بالمسابقة."
            ]
          }
        },
        "h12": {
          "fr": "Les pilotes de ces montgolfières ...",
          "ar": "قادة وطيارو المناطيد ...",
          "text": {
            "fr": "Les pilotes de ces montgolfières ...",
            "ar": "قادة وطيارو المناطيد ..."
          },
          "options": {
            "fr": [
              "sont tous originaires de Suisse.",
              "viennent chercher les passagers à leur domicile.",
              "ont plus de vingt ans d'expérience de vol."
            ],
            "ar": [
              "قادمون من سويسرا.",
              "يصطحبون الضيوف والركاب من منازلهم.",
              "يمارسون الطيران منذ أكثر من عشرين عاماً."
            ]
          }
        },
        "h13": {
          "fr": "Jusqu'à quelle altitude maximale une montgolfière peut-elle s'élever ?",
          "ar": "إلى أي ارتفاع يمكن للمنطاد أن يصعد كحد أقصى؟",
          "text": {
            "fr": "Jusqu'à quelle altitude maximale une montgolfière peut-elle s'élever ?",
            "ar": "إلى أي ارتفاع يمكن للمنطاد أن يصعد كحد أقصى؟"
          },
          "options": {
            "fr": [
              "Jusqu'à 30 mètres.",
              "Jusqu'à 300 mètres.",
              "Jusqu'à 3 000 mètres."
            ],
            "ar": [
              "حتى 30 متراً.",
              "حتى 300 متر.",
              "حتى 3000 متر."
            ]
          }
        },
        "h14": {
          "fr": "Que doivent prévoir les passagers ?",
          "ar": "ما الذي ينبغي على الركاب والمسافرين فعله؟",
          "text": {
            "fr": "Que doivent prévoir les passagers ?",
            "ar": "ما الذي ينبغي على الركاب والمسافرين فعله؟"
          },
          "options": {
            "fr": [
              "Ne pas avoir la moindre peur du vide.",
              "Emporter impérativement un appareil photo.",
              "Éviter de regarder vers le sol pendant le vol."
            ],
            "ar": [
              "ألا يكون لديهم خوف من المرتفعات.",
              "اصطحاب كاميرا تصوير معهم.",
              "تجنب النظر إلى الأسفل من المنطاد."
            ]
          }
        },
        "h15": {
          "fr": "À bord du tout premier ballon ayant volé dans les airs, il y avait ...",
          "ar": "في أول منطاد طار وارتفع في الهواء في التاريخ، كان هناك ...",
          "text": {
            "fr": "À bord du tout premier ballon ayant volé dans les airs, il y avait ...",
            "ar": "في أول منطاد طار وارتفع في الهواء في التاريخ، كان هناك ..."
          },
          "options": {
            "fr": [
              "un roi de France.",
              "les frères Joseph et Étienne de Montgolfier.",
              "des animaux vivants."
            ],
            "ar": [
              "ملك فرنسا.",
              "الأخوان جوزيف وإيتيان مونغولفييه.",
              "حيوانات حية."
            ]
          }
        },
        "h16": {
          "fr": "M. Brunner et ses élèves organisent ensemble le voyage de fin d'année.",
          "ar": "يقوم الأستاذ برونر والطلاب بالتخطيط لرحلة الفصل الدراسي معاً.",
          "text": {
            "fr": "M. Brunner et ses élèves organisent ensemble le voyage de fin d'année.",
            "ar": "يقوم الأستاذ برونر والطلاب بالتخطيط لرحلة الفصل الدراسي معاً."
          }
        },
        "h17": {
          "fr": "La classe a d'ores et déjà décidé de faire une randonnée à vélo.",
          "ar": "قرر طلاب الفصل القيام بجولة بالدراجات الهوائية.",
          "text": {
            "fr": "La classe a d'ores et déjà décidé de faire une randonnée à vélo.",
            "ar": "قرر طلاب الفصل القيام بجولة بالدراجات الهوائية."
          }
        },
        "h18": {
          "fr": "La plupart des élèves n'apprennent que l'anglais comme langue vivante.",
          "ar": "معظم الطلاب يتعلمون اللغة الإنجليزية فقط.",
          "text": {
            "fr": "La plupart des élèves n'apprennent que l'anglais comme langue vivante.",
            "ar": "معظم الطلاب يتعلمون اللغة الإنجليزية فقط."
          }
        },
        "h19": {
          "fr": "Victoria n'a pas du tout apprécié son précédent séjour à Londres.",
          "ar": "لم تعجب فيكتوريا برحلتها إلى لندن.",
          "text": {
            "fr": "Victoria n'a pas du tout apprécié son précédent séjour à Londres.",
            "ar": "لم تعجب فيكتوريا برحلتها إلى لندن."
          }
        },
        "h20": {
          "fr": "M. Brunner était catégoriquement opposé à un voyage scolaire à Paris.",
          "ar": "كان الأستاذ برونر رافضاً لفكرة السفر في رحلة مدرسية إلى باريس.",
          "text": {
            "fr": "M. Brunner était catégoriquement opposé à un voyage scolaire à Paris.",
            "ar": "كان الأستاذ برونر رافضاً لفكرة السفر في رحلة مدرسية إلى باريس."
          }
        },
        "h21": {
          "fr": "Certains parents d'élèves n'ont pas les moyens de financer un voyage à l'étranger.",
          "ar": "يوجد بعض أولياء الأمور الذين يرون أن السفر للخارج مكلف جداً لظروفهم المادية.",
          "text": {
            "fr": "Certains parents d'élèves n'ont pas les moyens de financer un voyage à l'étranger.",
            "ar": "يوجد بعض أولياء الأمور الذين يرون أن السفر للخارج مكلف جداً لظروفهم المادية."
          }
        },
        "h22": {
          "fr": "Les élèves tiennent absolument à ce que toute la classe puisse participer au voyage.",
          "ar": "يحرص الطلاب على أن يتمكن جميع زملائهم من المشاركة في الرحلة.",
          "text": {
            "fr": "Les élèves tiennent absolument à ce que toute la classe puisse participer au voyage.",
            "ar": "يحرص الطلاب على أن يتمكن جميع زملائهم من المشاركة في الرحلة."
          }
        },
        "h23": {
          "fr": "La réaction enthousiaste des autres face à sa première œuvre a constitué un vrai défi créatif.",
          "ar": "كان رد فعل الآخرين وإعجابهم بالعمل الأول بمثابة تحدٍ وحافز للإبداع.",
          "text": {
            "fr": "La réaction enthousiaste des autres face à sa première œuvre a constitué un vrai défi créatif.",
            "ar": "كان رد فعل الآخرين وإعجابهم بالعمل الأول بمثابة تحدٍ وحافز للإبداع."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        },
        "h24": {
          "fr": "Ces créations artistiques sont confectionnées à partir de restes alimentaires.",
          "ar": "تُصنع هذه المجسمات والتحف الفنية مما يتبقى من الطعام.",
          "text": {
            "fr": "Ces créations artistiques sont confectionnées à partir de restes alimentaires.",
            "ar": "تُصنع هذه المجسمات والتحف الفنية مما يتبقى من الطعام."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        },
        "h25": {
          "fr": "La faim et la précarité ne sévissent pas uniquement dans les pays en développement.",
          "ar": "مشكلة الجوع لا تقتصر على البلدان النامية والفقيرة وحدها.",
          "text": {
            "fr": "La faim et la précarité ne sévissent pas uniquement dans les pays en développement.",
            "ar": "مشكلة الجوع لا تقتصر على البلدان النامية والفقيرة وحدها."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        },
        "h26": {
          "fr": "La nourriture jetée aux poubelles en Europe suffirait à éliminer trois fois la faim dans le monde.",
          "ar": "الطعام الملقى في قمامة أوروبا كفيل بإطعام جميع الجياع في العالم ثلاث مرات.",
          "text": {
            "fr": "La nourriture jetée aux poubelles en Europe suffirait à éliminer trois fois la faim dans le monde.",
            "ar": "الطعام الملقى في قمامة أوروبا كفيل بإطعام جميع الجياع في العالم ثلاث مرات."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        },
        "h27": {
          "fr": "Certains produits alimentaires ne peuvent légalement être ni commercialisés ni même donnés gratuitement.",
          "ar": "هناك منتجات غذائية لا يسمح القانون ببيعها ولا حتى بالتبرع بها مجاناً.",
          "text": {
            "fr": "Certains produits alimentaires ne peuvent légalement être ni commercialisés ni même donnés gratuitement.",
            "ar": "هناك منتجات غذائية لا يسمح القانون ببيعها ولا حتى بالتبرع بها مجاناً."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        },
        "h28": {
          "fr": "Le gaspillage alimentaire dans les ordures représente également une lourde menace écologique pour l'environnement.",
          "ar": "إلقاء الأطعمة في القمامة يمثل أيضاً مشكلة بيئية خطيرة ويهدر الموارد الطبيعية.",
          "text": {
            "fr": "Le gaspillage alimentaire dans les ordures représente également une lourde menace écologique pour l'environnement.",
            "ar": "إلقاء الأطعمة في القمامة يمثل أيضاً مشكلة بيئية خطيرة ويهدر الموارد الطبيعية."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        },
        "h29": {
          "fr": "Se nourrir dans les poubelles par geste de protestation politique est une action dénuée de sens.",
          "ar": "الأكل من القمامة كأسلوب للاحتجاج أمر غير مجدٍ وعديم الفائدة.",
          "text": {
            "fr": "Se nourrir dans les poubelles par geste de protestation politique est une action dénuée de sens.",
            "ar": "الأكل من القمامة كأسلوب للاحتجاج أمر غير مجدٍ وعديم الفائدة."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        },
        "h30": {
          "fr": "Cette exposition photographique artistique est organisée au profit de la banque alimentaire « Tafel ».",
          "ar": "يهدف المعرض الفني لصور المجسمات إلى جمع تبرعات لمساعدة بنك الطعام (تافل).",
          "text": {
            "fr": "Cette exposition photographique artistique est organisée au profit de la banque alimentaire « Tafel ».",
            "ar": "يهدف المعرض الفني لصور المجسمات إلى جمع تبرعات لمساعدة بنك الطعام (تافل)."
          },
          "options": {
            "fr": ["L'animateur (Modérateur)", "Juliane Schulz", "Lukas Tilmann"],
            "ar": ["المذيع (المنسق)", "يوليانه شولتس", "لوكاس تيلمان"]
          }
        }
      }
    }
  }
}
