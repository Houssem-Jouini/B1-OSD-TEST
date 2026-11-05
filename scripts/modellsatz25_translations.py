#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 25 - Translations Data (French & Arabic)
Modelltest 19 — Hueber Zertifikat B1
Full compliance with AGENTS.md schema invariants:
- articles[].body: { fr: [...], ar: [...] }
- questions[].options: { fr: [...], ar: [...] }
- ads: { a: { fr, ar }, A: { fr, ar }... }
- letters: { '20': { who, text: { fr, ar } }... }
- horen teile 1-4 & h1-h30 with full FR/AR translations
"""

translations = {
  "examTitle": {
    "fr": "Goethe / ÖSD Simulation d'examen B1 — Test modèle 19",
    "ar": "محاكاة امتحان غوته / أوس دي B1 — النموذج التدريبي 19"
  },
  "examSub": {
    "fr": "Lecture (5 parties) & Écoute (4 parties) · Test modèle 19 (Hueber)",
    "ar": "القراءة (5 أجزاء) والاستماع (4 أجزاء) · النموذج التدريبي 19 (هوبر)"
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
          "title": {
            "fr": "E-mail de Lutz à Florian · Salutations de Francfort",
            "ar": "رسالة إلكترونية من لوتس إلى فلوريان · تحية من فرانكفورت"
          },
          "body": {
            "fr": [
              "Salut Florian,",
              "Comment allez-vous tous à la maison ? Désolé de ne donner des nouvelles que maintenant, mais j'ai eu tellement de choses à gérer ces derniers temps. Mon inscription à l'université s'est bien passée, mon premier semestre d'hiver a commencé il y a trois semaines et je passe environ 5 heures par jour à la fac.",
              "Mais la vraie raison pour laquelle je n'ai pas donné signe de vie depuis un moment, c'est la recherche de logement. Je ne me doutais pas à quel point cela pouvait être stressant. Je pensais qu'on trouvait facilement quelque chose dans une grande métropole comme Francfort. Dès le départ, je ne voulais pas aller en résidence universitaire. Sans doute une erreur de ma part ! En tout cas, j'ai d'abord cherché un studio meublé d'une pièce.",
              "Mais les loyers sont tout simplement exorbitants ! En fait, ce ne sont pas seulement les étudiants qui cherchent ces petits appartements, mais aussi les employés de banque et cadres d'affaires. Francfort est la capitale bancaire de l'Europe – « Mainhattan », comme on l'appelle joliment. Après de très longues recherches, j'ai fini par trouver une chambre en colocation (WG) – non meublée bien sûr, mais le loyer reste abordable. J'ai acheté les meubles les plus indispensables, d'occasion naturellement, mais en bon état. Il ne me manque plus qu'une armoire.",
              "En plus de moi, trois autres étudiants vivent dans la colocation. Chacun a sa propre chambre et nous partageons la cuisine, la salle de bains et un petit débarras. Cela ne fait que dix jours que j'habite ici, mais nous nous entendons déjà super bien. Et pour le ménage et la cuisine, tout semble rouler, bien que j'aie été un peu sceptique au tout début.",
              "L'appartement se trouve dans un immeuble ancien de caractère : de hauts plafonds, de grandes fenêtres, du parquet au sol… vraiment superbe. Ma chambre donne sur la cour arrière, elle est donc calme et lumineuse. Pour le moment, je m'y sens très à l'aise et je peux enfin me consacrer pleinement à mes études. Tu peux venir me rendre visite quand tu veux, mais pense absolument à apporter ton sac de couchage.",
              "Fais-moi savoir quand tu prévois de passer. Salue toute la bande de ma part !",
              "Lutz"
            ],
            "ar": [
              "مرحباً فلوريان،",
              "كيف حالكم جميعاً في الوطن؟ أعتذر عن التأخر في التواصل، لكنني كنت مشغولاً للغاية في الفترة الأخيرة. لقد سارت إجراءات التسجيل في الجامعة على ما يرام، وبدأ فصلي الدراسي الشتوي الأول منذ ثلاثة أسابيع وأقضي الآن حوالي 5 ساعات يومياً في الجامعة.",
              "لكن السبب الحقيقي لانقطاع أخباري لفترة هو أمر آخر: البحث عن سكن. لم تكن لدي أدنى فكرة عن مدى الإرهاق والتوتر في هذا الأمر. كنت أظن أن العثور على سكن في مدينة كبرى مثل فرانكفورت سيكون سريعاً. لم أرغب في البداية بالسكن الجامعي للطلاب، ولعله كان خطأي! على أية حال، بحثت أولاً عن شقة مفروشة من غرفة واحدة.",
              "إلا أن أسعار الإيجارات خيالية وباهظة للغاية! فقد اكتشفت أن الطلاب ليسوا وحدهم من يبحث عن تلك الشقق، بل أيضاً موظفو البنوك والقطاع المالي. فرانكفورت هي عاصمة البنوك في أوروبا – «ماينهاتن» كما يطلق عليها. بعد بحث طويل وشاق، وجدت أخيراً غرفة في سكن طلابي مشترك (WG) – بالطبع غير مفروشة، لكن إيجارها معقول. اشتريت قطع الأثاث الأكثر ضرورة، مستعملة بالتأكيد ولكن بحالة جيدة. وينقصني الآن خزانة ملابس فقط.",
              "يسكن معي في الشقة ثلاثة طلاب آخرين. لكل منا غرفته الخاصة ونتشارك في المطبخ والحمام ومخزن صغير. أعيش هنا منذ عشرة أيام فقط، إلا أننا نحن الأربعة نتفاهم بشكل رائع جداً. ويبدو أن جدول المطبخ والنظافة يسير بنجاح، رغم أنني كنت متشككاً قليلاً في البداية.",
              "الشقة في مبنى قديم كلاسيكي: جدران مرتفعة، نوافذ ضخمة، وأرضيات خشبية... شيء رائع بالفعل. وتطل غرفتي على الفناء الخلفي، لذا فهي هادئة ومضيئة. أشعر براحة كبيرة هنا حالياً ويمكنني أخيراً التفرغ التام لدراستي. يمكنك زيارتي في أي وقت، لكن لا تنسَ إحضار كيس نومك معك.",
              "أخبرني بموعد قدومك، وبلّغ سلامي لبقية أفراد الشلة!",
              "لوتس"
            ]
          }
        }
      ],
      "example": {
        "text": {
          "fr": "Lutz a eu beaucoup à faire ces derniers temps.",
          "ar": "كان لدى لوتس الكثير من الأعمال والمشاغل في الآونة الأخيرة."
        },
        "fr": "Lutz a eu beaucoup à faire ces derniers temps.",
        "ar": "كان لدى لوتس الكثير من الأعمال والمشاغل في الآونة الأخيرة."
      },
      "questions": {
        "1": {
          "fr": "Lutz est un étudiant débutant (en première année).",
          "ar": "لوتس طالب مستجد في بداية مسيرته الجامعية."
        },
        "2": {
          "fr": "À Francfort, la recherche d'un logement est généralement une chose facile.",
          "ar": "البحث عن سكن في فرانكفورت أمر سهل وبسيط في العادة."
        },
        "3": {
          "fr": "La chambre de Lutz n'est pas encore complètement meublée.",
          "ar": "غرفة لوتس لم يكتمل تأثيثها بالكامل بعد."
        },
        "4": {
          "fr": "Jusqu'à présent, Lutz n'a eu aucun problème avec ses colocataires.",
          "ar": "حتى الآن لم يواجه لوتس أية مشكلات مع زملائه في السكن المشترك."
        },
        "5": {
          "fr": "Le seul inconvénient de l'appartement est qu'il est ancien.",
          "ar": "العيب الوحيد في الشقة هو أنها قديمة الطراز."
        },
        "6": {
          "fr": "Florian peut dormir dans la colocation de Lutz dès qu'il le souhaite.",
          "ar": "يمكن لفلوريان المبيت في سكن لوتس المشترك في أي وقت يشاء."
        }
      }
    },
    "2": {
      "title": {
        "fr": "Partie 2 (Lecture)",
        "ar": "الجزء 2 (القراءة)"
      },
      "instructions": {
        "fr": "Lisez les textes de presse et répondez aux questions 7 à 12. Choisissez la bonne réponse a, b ou c.",
        "ar": "اقرأ النصوص الصحفية والمهام من 7 إلى 12. اختر الإجابة الصحيحة a أو b أو c لكل سؤال."
      },
      "articles": [
        {
          "title": {
            "fr": "À travers Berlin avec le ticket sur smartphone",
            "ar": "عبر برلين بتذكرة الهاتف المحمول"
          },
          "body": {
            "fr": [
              "Les usagers de la régie des transports berlinois (BVG) peuvent dès à présent régler leurs trajets en bus et en train sans argent liquide, directement avec leur téléphone portable. Ce système baptisé « Touch & Travel » a d'abord fonctionné sous forme de projet pilote avant d'être étendu à l'ensemble du réseau de la BVG. Le fonctionnement est très simple : il suffit de disposer d'un smartphone permettant le paiement mobile pour pouvoir utiliser « Touch & Travel ». Avant de monter dans le bus ou tout autre transport de la BVG, on s'enregistre à l'arrêt par un signal radio en tant que passager, on monte à bord et on effectue son trajet. Arrivé à destination, on se désinscrit. La facture du montant de la course est envoyée ultérieurement.",
              "Les experts en mobilité prévoient que ce dispositif innovant rendra les trajets en bus et en métro bien plus séduisants, notamment pour les jeunes générations. Ils espèrent inciter les automobilistes à délaisser leur voiture, car la corvée de chercher un distributeur de billets et d'avoir de la monnaie exacte disparaît enfin. De plus, ceux qui ne maîtrisent pas le réseau complexe et la grille tarifaire n'ont plus à se casser la tête : « Touch & Travel » calcule automatiquement et avec précision le prix exact du voyage."
            ],
            "ar": [
              "أصبح بإمكان عملاء هيئة النقل العام ببرلين (BVG) ابتداءً من الآن دفع ثمن رحلاتهم في الحافلات والقطارات بدون نقود ورقية مباشرة عبر الهاتف المحمول. النظام المعروف باسم «Touch & Travel» انطلق أولاً كمشروع تجريبي وأصبح الآن سارياً على كامل شبكة خطوط BVG. ويعمل بطريقة في غاية البساطة: كل ما يحتاجه الراكب هو هاتف محمول يدعم إمكانية الدفع الإلكتروني، ليمكنه فوراً المشاركة في «Touch & Travel». فقبل الصعود إلى الحافلة أو أي وسيلة نقل تابعة للهيئة، يسجل الراكب نفسه في المحطة عبر إشارة لاسلكية كمسافر، ثم يركب وينطلق لوجهته. وعند الوصول، يقوم بتسجيل الخروج، وتصله فاتورة بمبلغ الرحلة في وقت لاحق.",
              "ويتوقع خبراء مشكلات المرور والنقل أن هذا النظام الحديث سيجعل التنقل بالحافلات والقطارات أكثر جاذبية للشباب بصفة خاصة. ويأملون أن يدفع الناس للاستغناء عن سياراتهم الخاصة أحياناً، حيث تسقط عن كاهلهم المعاناة المزعجة في البحث عن أجهزة بيع التذاكر وتوفير الفكة والعملات المعدنية. كما أن من لا يعرف تفاصيل خطوط السير والتعريفات المتنوعة لم يعد مضطراً لإرهاق ذهنه، لأن نظام «Touch & Travel» يحسب تكلفة الرحلة تلقائياً وبدقة."
            ]
          }
        }
      ],
      "example": {
        "text": {
          "fr": "Les experts de la circulation ...",
          "ar": "خبراء النقل والمرور ..."
        },
        "options": {
          "fr": [
            "cherchent des distributeurs automatiques de billets.",
            "simplifient le réseau des lignes de la BVG.",
            "espèrent voir davantage d'usagers emprunter les bus et les trains."
          ],
          "ar": [
            "يبحثون عن أجهزة بيع التذاكر الآلية.",
            "يعملون على تبسيط شبكة مسارات خطوط هيئة BVG.",
            "يأملون في زيادة أعداد الركاب المستخدمين للحافلات والقطارات."
          ]
        }
      },
      "questions": {
        "7": {
          "fr": "Cet article traite de ...",
          "ar": "يدور هذا النص حول ...",
          "text": {
            "fr": "Cet article traite de ...",
            "ar": "يدور هذا النص حول ..."
          },
          "options": {
            "fr": [
              "les coûts des transports auprès de la BVG.",
              "la possibilité de payer ses billets avec son téléphone portable.",
              "les problèmes de circulation engendrés par les bus et les trains."
            ],
            "ar": [
              "تكاليف وأسعار الرحلات لدى هيئة BVG.",
              "إمكانية دفع ثمن التذاكر باستخدام الهاتف المحمول.",
              "مشكلات المرور الناتجة عن الحافلات والقطارات."
            ]
          }
        },
        "8": {
          "fr": "« Touch & Travel » ...",
          "ar": "نظام «Touch & Travel» ...",
          "text": {
            "fr": "« Touch & Travel » ...",
            "ar": "نظام «Touch & Travel» ..."
          },
          "options": {
            "fr": [
              "s'applique sur toutes les lignes du réseau de la BVG.",
              "doit faire l'objet d'une inscription sur ordinateur avant le premier trajet.",
              "est le nom d'une nouvelle ligne ouverte par la BVG."
            ],
            "ar": [
              "يسري على جميع خطوط ومناطق هيئة BVG.",
              "يجب التسجيل فيه مسبقاً عبر الكمبيوتر قبل أول رحلة.",
              "هو اسم لخط سير جديد لدى هيئة BVG."
            ]
          }
        },
        "9": {
          "fr": "Les jeunes ...",
          "ar": "فئة الشباب ...",
          "text": {
            "fr": "Les jeunes ...",
            "ar": "فئة الشباب ..."
          },
          "options": {
            "fr": [
              "trouvent déjà le système « Touch & Travel » très pratique.",
              "ne connaissent pas bien le réseau de lignes de la BVG.",
              "doivent être conquis pour devenir clients grâce à « Touch & Travel »."
            ],
            "ar": [
              "يجدون نظام «Touch & Travel» عملياً ومريحاً للغاية.",
              "لا يعرفون شبكة خطوط هيئة BVG جيداً.",
              "المستهدف هو كسبهم كعملاء جدد بفضل نظام «Touch & Travel»."
            ]
          }
        }
      },
      "articles2": [
        {
          "title": {
            "fr": "Travailler pendant ses vacances ?",
            "ar": "العمل أثناء الإجازة والعطلة؟"
          },
          "body": {
            "fr": [
              "Les Allemands souhaitent poser des jours de vacances afin de pouvoir travailler sans être dérangés. Telle est l'impression qui se dégage des résultats d'un récent sondage mené auprès des salariés. Selon cette enquête, environ six actifs sur dix travaillent également pendant leurs congés, et beaucoup le font même quotidiennement. Et ce, alors même que 71 % de ces personnes jugent leur profession fatigante et astreignante. De manière surprenante, la plupart des conjoints se montrent compréhensifs face à cette habitude : seuls 22 % des salariés en couple connaissent des disputes à ce propos.",
              "Dans certains cas, la pression incitant au travail « volontaire » provient directement de la direction de l'entreprise. Pour près d'un employé sur quatre, l'employeur exige d'être joignable même durant les vacances. De surcroît, plus de la moitié des salariés dans le pays déclarent être contactés durant leur temps libre par des collègues ou par leur chef hiérarchique.",
              "Il n'existe pour ainsi dire aucune disparité entre hommes et femmes quant au nombre de travailleurs en vacances. Concernant l'âge, en revanche, la règle est nette : plus on est jeune, plus on travaille en vacances. La proportion de ceux qui s'activent professionnellement durant leurs congés diminue à mesure que l'âge augmente.",
              "Pourquoi tant de personnes travaillent-elles pendant les vacances, période traditionnellement vouée au repos ? La plupart invoquent le sens des responsabilités ou « parce que sinon le travail en retard ne sera pas terminé ». Seuls 28 % justifient cette conduite en affirmant que leur travail leur procure du plaisir."
            ],
            "ar": [
              "يرغب الألمان في أخذ إجازة ليتمكنوا من العمل بهدوء ودون إزعاج. هذا هو الانطباع الذي يخرج به المرء من نتائج استطلاع رأي حديث أُجري بين الموظفين والعاملين. ووفقاً للاستطلاع، فإن ما يقارب ستة من كل عشرة مهنيين يعملون أثناء عطلاتهم أيضاً، وكثير منهم يفعل ذلك يومياً. وذلك على الرغم من أن 71 في المائة من هؤلاء يعتبرون عملهم شاقاً ومجهداً. والمثير للدهشة أن معظم شركاء الحياة يبدون تفهماً لهذا السلوك، حيث لا يتعرض للخلافات الزوجية بسبب ذلك سوى 22 في المائة فقط ممن هم في علاقة زوجية.",
              "وجزء من هذا الضغط نحو العمل «الطوعي» يأتي من إدارة الشركات؛ إذ يتوقع أرباب العمل من واحد تقريباً من كل أربعة موظفين أن يكون متاحاً للتواصل حتى خلال إجازته. كما يفيد أكثر من نصف العاملين في البلاد بأنهم يتلقون اتصالات في أوقات فراغهم من زملائهم أو من رؤسائهم في العمل.",
              "ولا تكاد توجد فروق تُذكر بين الرجال والنساء فيما يتعلق بأعداد من يعملون أثناء العطلة. أما بالنسبة للعمر، فالقاعدة واضحة: كلما كان الموظف أصغر سناً، زادت ساعات عمله في الإجازة. وبالتالي تنخفض نسبة من يعملون في أوقات فراغهم مع التقدم في السن.",
              "فلماذا يعمل هذا العدد الكبير من الناس أثناء العطلة التي يُفترض أن تكون مخصصة للاسترخاء واستعادة النشاط؟ يذكر معظمهم الإحساس بالمسؤولية كسبب رئيسي أو «لأن العمل لن ينجز بغير ذلك». بينما يعلل 28% فقط هذا السلوك بأن عملهم يمنحهم المتعة والسعادة."
            ]
          }
        }
      ],
      "questions2": {
        "10": {
          "fr": "Dans ce texte, il s'agit principalement du fait que ...",
          "ar": "يدور هذا النص أساساً حول ...",
          "text": {
            "fr": "Dans ce texte, il s'agit principalement du fait que ...",
            "ar": "يدور هذا النص أساساً حول ..."
          },
          "options": {
            "fr": [
              "de nombreux Allemands travaillent durant leurs vacances.",
              "les salariés disposent de trop peu de jours de congés.",
              "les conditions de travail en Allemagne sont particulièrement rudes."
            ],
            "ar": [
              "أن العديد من الألمان يعملون أثناء عطلاتهم وإجازاتهم.",
              "أن الموظفين يحصلون على إجازات قليلة جداً.",
              "أن ظروف وبيئة العمل في ألمانيا شاقة وصعبة للغاية."
            ]
          }
        },
        "11": {
          "fr": "Les jeunes actifs ...",
          "ar": "الموظفون والمهنيون الشباب ...",
          "text": {
            "fr": "Les jeunes actifs ...",
            "ar": "الموظفون والمهنيون الشباب ..."
          },
          "options": {
            "fr": [
              "n'ont pas autant besoin de repos professionnel que leurs aînés.",
              "travaillent plus fréquemment en vacances que les salariés plus âgés.",
              "ont un sens des responsabilités plus prononcé que les employés âgés."
            ],
            "ar": [
              "لا يحتاجون إلى الاستجمام والراحة من العمل مثل زملائهم الأكبر سناً.",
              "يعملون في الإجازات بمعدل أكثر تكراراً من العاملين الأكبر سناً.",
              "يتمتعون بإحساس بالمسؤولية يفوق ما لدى كبار السن."
            ]
          }
        },
        "12": {
          "fr": "Beaucoup d'Allemands travaillent pendant leurs vacances ...",
          "ar": "يعمل الكثير من الألمان أثناء عطلاتهم ...",
          "text": {
            "fr": "Beaucoup d'Allemands travaillent pendant leurs vacances ...",
            "ar": "يعمل الكثير من الألمان أثناء عطلاتهم ..."
          },
          "options": {
            "fr": [
              "parce que leur conjoint apprécie cette démarche.",
              "afin d'augmenter leurs revenus financiers.",
              "parce qu'ils souhaitent achever un travail en cours."
            ],
            "ar": [
              "لأن شركاء حياتهم يرحبون بذلك ويرونه أمراً حسناً.",
              "من أجل كسب المزيد من المال وزيادة دخلهم.",
              "لرغبتهم في إكمال وإنجاز أعمال متراكمة."
            ]
          }
        }
      }
    },
    "3": {
      "title": {
        "fr": "Partie 3 (Petites annonces)",
        "ar": "الجزء 3 (الإعلانات)"
      },
      "instructions": {
        "fr": "Lisez les situations 13 à 19 et les annonces a à j. Associez chaque annonce à la situation qui convient. Si aucune annonce ne convient, choisissez 0.",
        "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j. اختر الإعلان المناسب لكل موقف. وإذا لم تجد إعلاناً مناسباً، فاختر 0."
      },
      "situationContext": {
        "fr": "Plusieurs de vos connaissances possèdent un jardin et cherchent des moyens de mieux l'entretenir ou d'en profiter davantage.",
        "ar": "كثير من معارفكم يمتلكون حديقة ويبحثون باستمرار عن سبل للعناية بها بصورة أفضل أو الاستمتاع بها أكثر."
      },
      "example": {
        "text": {
          "fr": "La famille Schwarz est ravie de sa nouvelle maison avec jardin. Mais les arbres sont encore minuscules et les enfants n'ont rien pour grimper.",
          "ar": "عائلة شفارتس سعيدة بمنزلها الجديد المزود بحديقة، لكن الأشجار ما زالت صغيرة جداً وليس لدى الأطفال ما يتسلقونه."
        },
        "fr": {
          "text": "La famille Schwarz est ravie de sa nouvelle maison avec jardin. Mais les arbres sont encore minuscules et les enfants n'ont rien pour grimper.",
          "answer": "e"
        },
        "ar": {
          "text": "عائلة شفارتس سعيدة بمنزلها الجديد المزود بحديقة، لكن الأشجار ما زالت صغيرة جداً وليس لدى الأطفال ما يتسلقونه.",
          "answer": "e"
        }
      },
      "situations": {
        "13": {
          "fr": "Charlotte et Jan Kaiser recherchent un lycéen ou un étudiant pour s'occuper de leur jardin lorsqu'ils sont en vacances.",
          "ar": "شارلوت ويان كايزر يبحثان عن طالب مدرسي أو جامعي يعتني بحديقتهما أثناء سفرهما في الإجازة.",
          "text": {
            "fr": "Charlotte et Jan Kaiser recherchent un lycéen ou un étudiant pour s'occuper de leur jardin lorsqu'ils sont en vacances.",
            "ar": "شارلوت ويان كايزر يبحثان عن طالب مدرسي أو جامعي يعتني بحديقتهما أثناء سفرهما في الإجازة."
          }
        },
        "14": {
          "fr": "Hanna Gruber possède de vieux meubles de jardin en fer forgé ; elle souhaite les faire réparer.",
          "ar": "لدى هانا غروبر أثاث حدائق قديم من الحديد وترغب في إصلاحه وترميمه.",
          "text": {
            "fr": "Hanna Gruber possède de vieux meubles de jardin en fer forgé ; elle souhaite les faire réparer.",
            "ar": "لدى هانا غروبر أثاث حدائق قديم من الحديد وترغب في إصلاحه وترميمه."
          }
        },
        "15": {
          "fr": "Benjamin Koch n'apprécie pas que ses amis se moquent des meubles de jardin qu'il a fabriqués lui-même. Il veut maintenant leur prouver qu'il peut gagner un prix avec.",
          "ar": "لا يجد بنيامين كوخ الأمر مسلياً حين يسخر أصدقاؤه من أثاث الحديقة الذي صنعه بنفسه، ويريد أن يثبت لهم الآن قدرته على الفوز بجائزة بفضلها.",
          "text": {
            "fr": "Benjamin Koch n'apprécie pas que ses amis se moquent des meubles de jardin qu'il a fabriqués lui-même. Il veut maintenant leur prouver qu'il peut gagner un prix avec.",
            "ar": "لا يجد بنيامين كوخ الأمر مسلياً حين يسخر أصدقاؤه من أثاث الحديقة الذي صنعه بنفسه، ويريد أن يثبت لهم الآن قدرته على الفوز بجائزة بفضلها."
          }
        },
        "16": {
          "fr": "Fabian Kunz cherche quelqu'un pour tailler ses pommiers afin d'obtenir une meilleure récolte de pommes l'an prochain.",
          "ar": "فابيان كونتس يبحث عن شخص لتقليم أشجار التفاح لديه حتى يكون محصول العام القادم أفضل.",
          "text": {
            "fr": "Fabian Kunz cherche quelqu'un pour tailler ses pommiers afin d'obtenir une meilleure récolte de pommes l'an prochain.",
            "ar": "فابيان كونتس يبحث عن شخص لتقليم أشجار التفاح لديه حتى يكون محصول العام القادم أفضل."
          }
        },
        "17": {
          "fr": "Le jeune homme qui logeait au 1er étage et s'occupait également du jardin a déménagé. Mme Jansen, propriétaire des lieux, recherche une formule similaire.",
          "ar": "الشاب الذي كان يسكن في الطابق الأول ويعتني بالحديقة قد انتقل، وتبحث السيدة يانسن مالكة المنزل عن حل وترتيب مشابه مجدداً.",
          "text": {
            "fr": "Le jeune homme qui logeait au 1er étage et s'occupait également du jardin a déménagé. Mme Jansen, propriétaire des lieux, recherche une formule similaire.",
            "ar": "الشاب الذي كان يسكن في الطابق الأول ويعتني بالحديقة قد انتقل، وتبحث السيدة يانسن مالكة المنزل عن حل وترتيب مشابه مجدداً."
          }
        },
        "18": {
          "fr": "Dans le jardin de Rafael et Jana, plusieurs arbres sont abîmés. Mais avant d'en acheter de nouveaux, ils souhaitent consulter un spécialiste.",
          "ar": "في حديقة رافاييل ويانا توجد أشجار كثيرة متضررة وتالفة، وقبل شراء أشجار جديدة يرغبان في استشارة خبير متخصص.",
          "text": {
            "fr": "Dans le jardin de Rafael et Jana, plusieurs arbres sont abîmés. Mais avant d'en acheter de nouveaux, ils souhaitent consulter un spécialiste.",
            "ar": "في حديقة رافاييل ويانا توجد أشجار كثيرة متضررة وتالفة، وقبل شراء أشجار جديدة يرغبان في استشارة خبير متخصص."
          }
        },
        "19": {
          "fr": "Pour la fête de mariage de leur fille, Anna et Hans Moser souhaitent décorer leur jardin magnifiquement et sont à la recherche d'idées.",
          "ar": "بمناسبة حفل زفاف ابنتهما، يرغب آنا وهانز موزر في تزيين حديقتهما بشكل مميز ويبحثان عن أفكار إبداعية.",
          "text": {
            "fr": "Pour la fête de mariage de leur fille, Anna et Hans Moser souhaitent décorer leur jardin magnifiquement et sont à la recherche d'idées.",
            "ar": "بمناسبة حفل زفاف ابنتهما، يرغب آنا وهانز موزر في تزيين حديقتهما بشكل مميز ويبحثان عن أفكار إبداعية."
          }
        }
      },
      "ads": {
        "a": {
          "fr": "De superbes prix à gagner ! Concours photo du magazine Das Zitty : photographiez votre paradis floral de jardin ou balcon, bons d'achat de 20 à 150 €.",
          "ar": "جوائز رائعة بانتظاركم! مسابقة تصوير لمجلة داس تسيتي: التقط صوراً لحديقتك أو شرفتك المزهرة للفوز بقسائم مشتريات من 20 إلى 150 يورو."
        },
        "A": {
          "fr": "De superbes prix à gagner ! Concours photo du magazine Das Zitty : photographiez votre paradis floral de jardin ou balcon, bons d'achat de 20 à 150 €.",
          "ar": "جوائز رائعة بانتظاركم! مسابقة تصوير لمجلة داس تسيتي: التقط صوراً لحديقتك أو شرفتك المزهرة للفوز بقسائم مشتريات من 20 إلى 150 يورو."
        },
        "b": {
          "fr": "Baumkultur Pfefferer, spécialistes des arbres : conseil d'orientation en variétés et choix de l'emplacement adapté, période de plantation idéale.",
          "ar": "شركة زراعة الأشجار بفيفيرر: استشارات متخصصة لاختيار أصناف الأشجار والمواقع الملائمة، موسم الزراعة والغرس الآن."
        },
        "B": {
          "fr": "Baumkultur Pfefferer, spécialistes des arbres : conseil d'orientation en variétés et choix de l'emplacement adapté, période de plantation idéale.",
          "ar": "شركة زراعة الأشجار بفيفيرر: استشارات متخصصة لاختيار أصناف الأشجار والمواقع الملائمة، موسم الزراعة والغرس الآن."
        },
        "c": {
          "fr": "Obstbau Früchtehof Sepp Fassbind : vente directe à la ferme de poires et pommes extra-fraîches, à Siebnen en Suisse.",
          "ar": "مزرعة الفاكهة سيب فاسبيند: بيع مباشر من المزرعة للتفاح والكمثرى الطازجة في زيبنن بسويسرا."
        },
        "C": {
          "fr": "Obstbau Früchtehof Sepp Fassbind : vente directe à la ferme de poires et pommes extra-fraîches, à Siebnen en Suisse.",
          "ar": "مزرعة الفاكهة سيب فاسبيند: بيع مباشر من المزرعة للتفاح والكمثرى الطازجة في زيبنن بسويسرا."
        },
        "d": {
          "fr": "Dame calme et sérieuse (cinquantaine) avec petit chien cherche appartement 2 pièces avec terrasse ou jardin, propose entretien du jardin en contrepartie.",
          "ar": "سيدة رصينة وهادئة في الخمسينيات مع كلب صغير تبحث عن شقة غرفتين مع حديقة أو شرفة ومستعدة للعناية بالحديقة."
        },
        "D": {
          "fr": "Dame calme et sérieuse (cinquantaine) avec petit chien cherche appartement 2 pièces avec terrasse ou jardin, propose entretien du jardin en contrepartie.",
          "ar": "سيدة رصينة وهادئة في الخمسينيات مع كلب صغير تبحث عن شقة غرفتين مع حديقة أو شرفة ومستعدة للعناية بالحديقة."
        },
        "e": {
          "fr": "Super offre de printemps Gartenabenteuer : aire de jeux avec filet à grimper, barre fixe, corde et échelle de corde à 299 € pour enfants jusqu'à 14 ans.",
          "ar": "عرض ربيعي مميز من غارتن-أبنتوير: هيكل ألعاب تسلق مع شبكة وعقلة وحبال بسعر 299 يورو مخصص للأطفال حتى سن 14 عاماً."
        },
        "E": {
          "fr": "Super offre de printemps Gartenabenteuer : aire de jeux avec filet à grimper, barre fixe, corde et échelle de corde à 299 € pour enfants jusqu'à 14 ans.",
          "ar": "عرض ربيعي مميز من غارتن-أبنتوير: هيكل ألعاب تسلق مع شبكة وعقلة وحبال بسعر 299 يورو مخصص للأطفال حتى سن 14 عاماً."
        },
        "f": {
          "fr": "Neuerbau.de : magasin de bricolage, nouveau rayon spécialisé pour réparer soi-même ses meubles de jardin en plastique, bois, fer forgé ou rotin.",
          "ar": "مركز نويرباو لمستلزمات الصيانة: قسم متخصص جديد لإصلاح أثاث الحدائق بنفسك (البلاستيك، الخشب، الحديد، الخيزران)."
        },
        "F": {
          "fr": "Neuerbau.de : magasin de bricolage, nouveau rayon spécialisé pour réparer soi-même ses meubles de jardin en plastique, bois, fer forgé ou rotin.",
          "ar": "مركز نويرباو لمستلزمات الصيانة: قسم متخصص جديد لإصلاح أثاث الحدائق بنفسك (البلاستيك، الخشب، الحديد، الخيزران)."
        },
        "g": {
          "fr": "Réparation et entretien de meubles de jardin dans la région de Linz, y compris antiquités, tarifs avantageux et déplacement inclus.",
          "ar": "تصليح وصيانة أثاث الحدائق في منطقة لينتس، بما في ذلك القطع الأثرية والعتيقة بأسعار مناسبة مع الانتقال."
        },
        "G": {
          "fr": "Réparation et entretien de meubles de jardin dans la région de Linz, y compris antiquités, tarifs avantageux et déplacement inclus.",
          "ar": "تصليح وصيانة أثاث الحدائق في منطقة لينتس، بما في ذلك القطع الأثرية والعتيقة بأسعار مناسبة مع الانتقال."
        },
        "h": {
          "fr": "Ab ins Grüne ! Concours de jardinage : proposez votre tutoriel de fabrication de meubles de jardin ou de décoration et gagnez de superbes prix.",
          "ar": "مسابقة انطلق إلى الخضرة: قدم دليلك الإرشادي لصناعة أثاث الحدائق أو الديكور وشارك في المسابقة للفوز بجوائز قيمة مجاناً."
        },
        "H": {
          "fr": "Ab ins Grüne ! Concours de jardinage : proposez votre tutoriel de fabrication de meubles de jardin ou de décoration et gagnez de superbes prix.",
          "ar": "مسابقة انطلق إلى الخضرة: قدم دليلك الإرشادي لصناعة أثاث الحدائق أو الديكور وشارك في المسابقة للفوز بجوائز قيمة مجاناً."
        },
        "i": {
          "fr": "gartenarbeiter.de : taille d'arbres fruitiers, abattage d'arbres, nettoyage de bassins de jardin et piscines, dans toute l'Allemagne.",
          "ar": "عمال الحدائق: تقليم أشجار الفاكهة، قطع الأشجار، تنظيف برك الحدائق وحمامات السباحة في جميع أنحاء ألمانيا."
        },
        "I": {
          "fr": "gartenarbeiter.de : taille d'arbres fruitiers, abattage d'arbres, nettoyage de bassins de jardin et piscines, dans toute l'Allemagne.",
          "ar": "عمال الحدائق: تقليم أشجار الفاكهة، قطع الأشجار، تنظيف برك الحدائق وحمامات السباحة في جميع أنحاء ألمانيا."
        },
        "j": {
          "fr": "Giardina Zurich : salon de l'art de vivre au jardin, jardins témoins, art floral, mobilier, décoration, accessoires et séminaires.",
          "ar": "معرض غياردينيا زيورخ: الحياة في الحديقة، حدائق استعراضية، زهور، أثاث حدائق، ديكور، إكسسوارات وندوات متخصصة."
        },
        "J": {
          "fr": "Giardina Zurich : salon de l'art de vivre au jardin, jardins témoins, art floral, mobilier, décoration, accessoires et séminaires.",
          "ar": "معرض غياردينيا زيورخ: الحياة في الحديقة، حدائق استعراضية، زهور، أثاث حدائق، ديكور، إكسسوارات وندوات متخصصة."
        }
      }
    },
    "4": {
      "title": {
        "fr": "Partie 4 (Courrier des lecteurs)",
        "ar": "الجزء 4 (بريد القراء)"
      },
      "instructions": {
        "fr": "Lisez les textes 20 à 26. Choisissez : La personne est-elle pour ou contre le permis pour chiens ?",
        "ar": "اقرأ النصوص من 20 إلى 26. اختر: هل يؤيد هذا الشخص رخصة قيادة الكلاب أم يعارضها؟"
      },
      "situationContext": {
        "fr": "Dans un magazine, vous découvrez des commentaires de lecteurs sur l'instauration d'un permis obligatoire pour propriétaires de chiens.",
        "ar": "تقرأ في إحدى المجلات تعليقات وآراء القراء حول فرض رخصة قيادة وإلزامية لأصحاب الكلاب وإيجابياتها وسلبياتها."
      },
      "guidingQuestion": {
        "fr": "Cette personne est-elle favorable au permis pour chiens ?",
        "ar": "هل يؤيد هذا الشخص رخصة قيادة الكلاب؟"
      },
      "example": {
        "who": "Achim, 55 ans, Interlaken",
        "text": {
          "fr": "La bonne démarche serait bien de vérifier les aptitudes des propriétaires de chiens. Mais comment organiser cela ? Cela coûterait un personnel et des fonds considérables que l'État ne veut pas débourser. Je suppose que cela ne fonctionnera pas, même si en soi je ne peux que soutenir l'idée.",
          "ar": "الخطوة الصحيحة ستكون بالفعل التحقق من كفاءة ومهارة أصحاب الكلاب. ولكن كيف سيتم ذلك؟ سيتطلب الأمر موظفين وأموالاً طائلة لا تريد الدولة إنفاقها. أظن أن الأمر لن ينجح، مع أنني أؤيد الفكرة كمبدأ بكل تأكيد."
        }
      },
      "letters": {
        "20": {
          "who": "Maren, 21 ans, Husum",
          "text": {
            "fr": "Tout chien doit pouvoir être maîtrisé par son maître en toute circonstance. Pas question qu'une grand-mère de 80 ans soit traînée par un berger allemand de 3 ans. Mais nous n'en sommes pas là. C'est pourquoi je trouve ce permis irréaliste et un peu trop extrême.",
            "ar": "يجب أن يكون كل كلب خاضعاً لسيطرة صاحبه في كل موقف، فلا يصح أن تسحب جدة في الثمانين من عمرها بواسطة كلب حراسة بعمر ثلاث سنوات. لكننا لم نصل لهذا المستوى بعد، لذلك أجد رخصة الكلاب أمراً غير واقعي ومبالغاً فيه."
          }
        },
        "21": {
          "who": "Janina, 40 ans, Zug",
          "text": {
            "fr": "Et si nous apprenions plutôt à nos enfants que tous les chiens ne sont pas dangereux ? Aujourd'hui, les gens changent de trottoir pris de panique quand je promène mon chien tenu en laisse lâche. Les médias ont rendu tout le monde hystérique. Malheureusement, ce sont les maîtres de petits chiens qui ne maîtrisent rien, et un permis n'y changera rien.",
            "ar": "ما رأيكم لو علمنا أطفالنا أن ليس كل كلب خطيراً؟ اليوم يغير الناس رصيف الشارع بهلع حين أمر بكلبي الوديع في مقود رخو. تقارير الصحف أصابت الناس بالهستيريا. وللأسف أصحاب الكلاب الصغيرة لا يسيطرون على كلابهم غالباً، ولن تغير الرخصة من ذلك شيئاً."
          }
        },
        "22": {
          "who": "Nadja, 30 ans, Brandebourg",
          "text": {
            "fr": "J'ai moi-même un chien et je constate sans cesse comment des chiens petits ou moyens agressent les gens ou même mordent. Il faudrait sanctionner sévèrement les propriétaires et infliger de lourdes amendes. Le permis pour chiens est une excellente mesure, mais il doit s'appliquer à tous sans exception.",
            "ar": "أمتلك كلباً بنفسي وأرى مراراً كيف تتصرف الكلاب الصغيرة والمتوسطة بعدوانية تجاه الناس أو تعضهم. ينبغي معاقبة الملاك بصرامة وفرض غرامات باهظة عليهم. رخصة الكلاب هي الحل الصائب تماماً، لكن يجب تطبيقها على الجميع دون استثناء."
          }
        },
        "23": {
          "who": "Regula, 43 ans, Appenzell",
          "text": {
            "fr": "C'est inconcevable ce que les bureaucrates imaginent pour les propriétaires de chiens ! Je n'ai pas entendu une proposition aussi stupide depuis longtemps. Imaginez un policier interpellant quelqu'un sur une promenade pour contrôler son permis canin. Du grand n'importe quoi !",
            "ar": "من غير المعقول ما يتفتق عنه ذهن البيروقراطيين ضد أصحاب الكلاب! لم أسمع مقترحاً بهذا الغباء منذ زمن. تخيلوا شرطياً يستوقف شخصاً في ممشى عام ليفتش عن رخصته لكلبه. أمر لا يُصدق!!"
          }
        },
        "24": {
          "who": "Hans, 16 ans, Ratingen",
          "text": {
            "fr": "Avec une énième réglementation que personne ne prendra au sérieux, l'État se ridiculise une fois de plus. Qui contrôlera ce permis ? Il n'y a nulle part assez de policiers pour faire appliquer cela. Je crois qu'un politicien incompétent cherchait juste à se faire remarquer.",
            "ar": "بقانون جديد لن يأخذه أحد على محمل الجد، تجعل الدولة نفسها أضحوكة. من سيراقب رخصة الكلاب هذه؟ لا توجد أعداد كافية من الشرطة في أي مكان للقيام بذلك. أظن أن سياسياً جاهلاً أراد فقط إبراز نفسه."
          }
        },
        "25": {
          "who": "Konstantin, 19 ans, Bregenz",
          "text": {
            "fr": "Pour les chiens, cela en vaut assurément la peine, car les compétences des propriétaires vont s'améliorer. Il y aura sans doute moins de maîtres, car tout le monde ne réussira pas l'examen, comme pour le permis de conduire. Oui, je vois cela comme une vraie protection animale.",
            "ar": "بالنسبة للكلاب فالأمر مجدٍ ومفيد بكل تأكيد، لأن كفاءة أصحابها سترتفع. بالطبع سيقل عدد الملاك لأن ليس الجميع سينجح في الاختبار تماماً كرخصة القيادة. نعم، أرى في ذلك حماية للكلاب."
          }
        },
        "26": {
          "who": "Andreas, 22 ans, Berlin",
          "text": {
            "fr": "Ce permis aurait dû être mis en place depuis des années, car trop de personnes cherchent à régler des problèmes personnels avec un chien : substitut d'enfant, arme ou palliatif social. Cela aiderait les chiens si leurs maîtres s'en occupaient sérieusement et respectaient leur nature.",
            "ar": "كان يجب أن تُفرض هذه الرخصة منذ سنوات، فهناك الكثير ممن يتخذون الكلب لحل أزماتهم النفسية كبديل للأطفال أو سلاح أو بديل للعلاقات الإنسانية. المستفيد الأكبر هو الكلاب نفسها حين يدرك الملاك احتياجاتها الطبيعية."
          }
        }
      }
    },
    "5": {
      "title": {
        "fr": "Partie 5 (Règlements & Instructions)",
        "ar": "الجزء 5 (التعليمات والإرشادات)"
      },
      "instructions": {
        "fr": "Lisez les questions 27 à 30 et le texte ci-dessous. Choisissez la bonne réponse a, b ou c.",
        "ar": "اقرأ المهام من 27 إلى 30 والنص المرافق لها. اختر الإجابة الصحيحة a أو b أو c لكل سؤال."
      },
      "situationContext": {
        "fr": "Vous vous intéressez au volontariat international et vous informez sur les actions et chantiers du SCI.",
        "ar": "تهتم بالعمل التطوعي وتستطلع معلومات حول أنشطة ومخيمات منظمة الخدمة المدنية الدولية (SCI)."
      },
      "articles": [
        {
          "title": {
            "fr": "Mettre la main à la pâte ... Premières infos pour les curieux · SCI",
            "ar": "شمر عن ساعديك ... معلومات أولية للراغبين · منظمة الخدمة المدنية الدولية (SCI)"
          },
          "body": {
            "fr": [
              "Le Service Civil International (SCI) organise des missions de bénévolat international dans le cadre de chantiers de travail (workcamps).",
              "Quand ? De juin à octobre, ainsi que quelques sessions au printemps ou en hiver.",
              "Combien de temps ? Deux, trois ou quatre semaines.",
              "Où ? Dans presque tous les pays d'Europe, en Amérique du Nord, au Japon, en Mongolie, en Corée du Sud et en Australie, ainsi que dans de nombreux pays en développement.",
              "Pour qui ? Tout le monde peut participer : à partir de 16 ans sur le territoire national (Allemagne), à partir de 18 ans à l'étranger (Afrique, Asie et Amérique latine à partir de 21 ans). Les limites d'âge supérieures ne s'appliquent qu'exceptionnellement.",
              "Avec qui ? Avec dix à vingt autres volontaires venus des pays les plus divers. Même dans les chantiers en Allemagne, les groupes sont internationaux. La langue commune est généralement l'anglais, des notions de base suffisent.",
              "Que fait-on sur le camp ? On travaille bénévolement cinq à six heures par jour pour un projet d'utilité publique. L'engagement compte, mais aucun profil professionnel n'est requis.",
              "À quoi s'attendre ? Le volet pédagogique permet d'étudier le contexte politique et social du projet. Pour la partie pratique, vous êtes encadré. Le groupe bénéficie d'un hébergement simple avec cuisine en autogestion. Des responsables du SCI vous accompagnent.",
              "Combien ça coûte ? Les frais de placement s'élèvent à 82 € en Allemagne et 110 € à l'étranger. Vous organisez et financez vous-même votre voyage aller-retour. Un visa payant peut être requis selon la destination. L'hébergement et les repas sur place sont entièrement pris en charge.",
              "Des conditions particulières s'appliquent pour l'Afrique, l'Asie et l'Amérique latine. Veuillez demander le dossier spécifique !"
            ],
            "ar": [
              "تنظم منظمة الخدمة المدنية الدولية (SCI) مشاركات تطوعية دولية ضمن مخيمات عمل شبابية.",
              "الموعد؟ من يونيو إلى أكتوبر، بالإضافة إلى بعض المخيمات في فصلي الربيع والشتاء.",
              "المدة؟ أسبوعان، أو ثلاثة، أو أربعة أسابيع.",
              "أين؟ في جميع دول أوروبا تقريباً، وأمريكا الشمالية، واليابان، ومنغوليا، وكوريا الجنوبية، وأستراليا، بالإضافة إلى العديد من بلدان العالم النامي.",
              "الفئات المستهدفة؟ المشاركة متاحة للجميع: ابتداءً من 16 عاماً داخل ألمانيا، ومن 18 عاماً في الخارج (وفي إفريقيا وآسيا وأمريكا اللاتينية بدءاً من 21 عاماً). ولا توجد حدود قصوى للعمر إلا في حالات فردية نادرة.",
              "مع من؟ برفقة 10 إلى 20 متطوعاً آخرين من شتى أنحاء العالم. حتى في المخيمات المقامة في ألمانيا تكون المجموعات دولية ومتنوعة. ولغة التواصل في المخيم هي الإنجليزية في العادة، وتكفي المعرفة الأساسية بها.",
              "طبيعة العمل في المخيم؟ تعمل تطوعياً وبدون مقابل لمدة خمس إلى ست ساعات يومياً في مشروع ذي نفع عام ومجتمعي. المطلوب منك هو الحماس والالتزام، ولا يُشترط أن تكون محترفاً.",
              "ماذا يقدم لك المخيم؟ يتيح لك الشق الدراسي من المخيم التعمق فكرياً في القضايا الاجتماعية والسياسية المرتبطة بالمشروع. وفي شق العمل ستتلقى التوجيه والتدريب. وتحصل مجموعتك على سكن بسيط مع مطبخ للخدمة الذاتية، ويرافقك قادة مخيمات المنظمة للمساعدة.",
              "التكاليف والرسوم؟ تبلغ رسوم الوساطة لمخيم داخل ألمانيا 82 يورو، وللمخيمات الخارجية 110 يورو. تتولى ترتيب وتمويل رحلة الذهاب والعودة بنفسك. وقد تحتاج بعض الدول إلى استخراج تأشيرة مدفوعة الرسوم. أما الإقامة والإعاشة في موقع المخيم فمجانية بالكامل.",
              "توجد شروط خاصة لمخيمات إفريقيا وآسيا وأمريكا اللاتينية، يُرجى طلب النشرة الخاصة بها!"
            ]
          }
        }
      ],
      "questions": {
        "27": {
          "fr": "Dans les chantiers de travail ...",
          "ar": "في مخيمات العمل ...",
          "text": {
            "fr": "Dans les chantiers de travail ...",
            "ar": "في مخيمات العمل ..."
          },
          "options": {
            "fr": [
              "les volontaires de plus de 21 ans ne peuvent pas participer.",
              "les participants sont majoritairement originaires du même pays.",
              "la communication entre les bénévoles s'effectue habituellement en anglais."
            ],
            "ar": [
              "يُمنع المتطوعون الذين تزيد أعمارهم عن 21 عاماً من المشاركة.",
              "يعمل في الغالب متطوعون ينتمون إلى نفس البلد معاً.",
              "يجري التواصل بين المتطوعين في العادة باللغة الإنجليزية."
            ]
          }
        },
        "28": {
          "fr": "Le service volontaire ...",
          "ar": "العمل والخدمة التطوعية ...",
          "text": {
            "fr": "Le service volontaire ...",
            "ar": "العمل والخدمة التطوعية ..."
          },
          "options": {
            "fr": [
              "est possible en toute saison de l'année.",
              "dure au minimum un mois complet.",
              "est réservé à des profils professionnels et experts."
            ],
            "ar": [
              "متاح وممكن في جميع فصول وأوقات السنة.",
              "يستمر لمدة شهر كامل كحد أدنى.",
              "مخصص وموجه للمحترفين وأصحاب الخبرات فقط."
            ]
          }
        },
        "29": {
          "fr": "Les volontaires doivent ...",
          "ar": "يتعين على المتطوعين ...",
          "text": {
            "fr": "Les volontaires doivent ...",
            "ar": "يتعين على المتطوعين ..."
          },
          "options": {
            "fr": [
              "se charger eux-mêmes de trouver un logement.",
              "étudier également les aspects théoriques liés au thème du projet.",
              "aider impérativement les chefs de camp dans leurs tâches."
            ],
            "ar": [
              "البحث عن سكن وتدبير مكان للإقامة بأنفسهم.",
              "دراسة الجوانب النظرية وموضوع المشروع ومحيطه.",
              "مساعدة قادة المخيم في مهامهم وإدارتهم بشكل إلزامي."
            ]
          }
        },
        "30": {
          "fr": "Il faut payer de sa poche ...",
          "ar": "يتعين على المتطوع أن يدفع من ماله الخاص ...",
          "text": {
            "fr": "Il faut payer de sa poche ...",
            "ar": "يتعين على المتطوع أن يدفع من ماله الخاص ..."
          },
          "options": {
            "fr": [
              "peut-être des frais d'obtention de visa.",
              "obligatoirement une somme pour l'organisation du voyage.",
              "le billet aller uniquement dans le cas d'un voyage à l'étranger."
            ],
            "ar": [
              "رسوم التأشيرة في بعض الحالات والبلدان ربما.",
              "رسوماً حتمية وإلزامية لتنظيم وتنسيق السفر.",
              "تكلفة رحلة الذهاب فقط إذا كان المخيم خارج البلاد."
            ]
          }
        }
      }
    },
    "6": {
      "title": {
        "fr": "Écoute",
        "ar": "الاستماع"
      },
      "instructions": {
        "fr": "Le module Écoute se compose de quatre parties. Vous entendez chaque enregistrement une ou deux fois. Répondez aux questions correspondantes.",
        "ar": "يتكون موديول الاستماع من أربعة أجزاء. ستستمع إلى كل نص مرة أو مرتين. أجب عن الأسئلة المرافقة لكل جزء."
      },
      "teile": {
        "1": {
          "title": {
            "fr": "Partie 1 : Cinq textes courts (Deux écoutes)",
            "ar": "الجزء 1: خمسة نصوص قصيرة (الاستماع مرتين)"
          },
          "desc": {
            "fr": "Vous entendez cinq enregistrements courts. Vous entendez chaque texte deux fois. Pour chaque texte, répondez à deux questions.",
            "ar": "ستستمع إلى خمسة نصوص قصيرة، كل نص مرتين. أجب عن سؤالين لكل نص."
          },
          "context": {
            "fr": "Messages téléphoniques, annonces de gare, flashs d'information radio.",
            "ar": "رسائل هاتفية مسجلة، وإعلانات محطة القطار، وأخبار إذاعية."
          }
        },
        "2": {
          "title": {
            "fr": "Partie 2 : Exposé d'élèves pour la Journée de l'Environnement (Une écoute)",
            "ar": "الجزء 2: عرض طلابي بمناسبة يوم البيئة (الاستماع مرة واحدة)"
          },
          "desc": {
            "fr": "Vous entendez un exposé une seule fois. Répondez aux cinq questions en choisissant la bonne option a, b ou c.",
            "ar": "ستستمع إلى عرض لمرة واحدة فقط. أجب عن خمس مهام باختيار الحل الصحيح a أو b أو c."
          },
          "context": {
            "fr": "Vous assistez à un exposé présenté par des élèves sur le thème de la protection de l'environnement.",
            "ar": "أنت تشارك في عرض تقديمي يقدمه طلاب بمناسبة يوم البيئة المدرسي."
          }
        },
        "3": {
          "title": {
            "fr": "Partie 3 : Conversation à l'arrêt de tramway (Une écoute)",
            "ar": "الجزء 3: حوار في محطة الترام (الاستماع مرة واحدة)"
          },
          "desc": {
            "fr": "Vous entendez une conversation une seule fois. Déterminez si les sept affirmations sont vraies ou fausses.",
            "ar": "ستستمع إلى محادثة لمرة واحدة فقط. اختر: هل العبارات السبع صحيحة أم خاطئة؟"
          },
          "context": {
            "fr": "À un arrêt de tramway, une femme retraitée discute avec un jeune ancien collègue de librairie.",
            "ar": "في محطة الترام، تستمع إلى سيدة متقاعدة تتحدث مع شاب كان زميلاً لها في متجر بيع الكتب."
          }
        },
        "4": {
          "title": {
            "fr": "Partie 4 : Débat radiophonique sur le travail des enfants (Deux écoutes)",
            "ar": "الجزء 4: مناقشة إذاعية حول عمالة الأطفال (الاستماع مرتين)"
          },
          "desc": {
            "fr": "Vous entendez un débat radiophonique deux fois. Associez chaque affirmation à l'intervenant qui l'a formulée.",
            "ar": "ستستمع إلى مناقشة إذاعية مرتين. انسب العبارات الثماني إلى المتحدثين."
          },
          "context": {
            "fr": "Une journaliste débat avec l'institutrice Eva Fink et Paul Egger de l'ONG « Kindernothilfe » au sujet du travail des enfants.",
            "ar": "صحفية تناقش المعلمة إيفا فينك وباول إيغر من جمعية إغاثة الأطفال حول قضية عمالة الأطفال."
          }
        }
      },
      "questions": {
        "h1": {
          "fr": "Texte 1 : Vous entendez une annonce d'une école professionnelle.",
          "ar": "النص 1: تستمع إلى معلومات صادرة عن مدرسة مهنية."
        },
        "h2": {
          "fr": "Texte 1 : Pour l'inscription, on a besoin de ...",
          "ar": "النص 1: يلزم للتسجيل إحضار ...",
          "options": {
            "fr": [
              "un passeport.",
              "le bulletin de l'école primaire.",
              "une photo d'identité."
            ],
            "ar": [
              "جواز سفر.",
              "شهادة إتمام المدرسة الابتدائية.",
              "صورة شخصية."
            ]
          }
        },
        "h3": {
          "fr": "Texte 2 : Vous entendez un avis de recherche d'accident de la police.",
          "ar": "النص 2: تستمع إلى بلاغ عن حادث مروري."
        },
        "h4": {
          "fr": "Texte 2 : Qui doit contacter la police ?",
          "ar": "النص 2: من الذي يجب أن يتواصل مع قسم الشرطة؟",
          "options": {
            "fr": [
              "La femme qui conduisait la voiture.",
              "Le jeune garçon qui traversait la chaussée.",
              "Les personnes ayant été témoins de l'accident."
            ],
            "ar": [
              "السيدة التي كانت تقود السيارة.",
              "الفتى الذي كان يعبر الشارع.",
              "الأشخاص والشهود الذين عاينوا وشاهدوا الحادث."
            ]
          }
        },
        "h5": {
          "fr": "Texte 3 : Le train arrive en gare à l'instant.",
          "ar": "النص 3: القطار يدخل ويصل إلى المحطة الآن."
        },
        "h6": {
          "fr": "Texte 3 : Le train ...",
          "ar": "النص 3: هذا القطار ...",
          "options": {
            "fr": [
              "arrive en provenance d'Heilbronn.",
              "poursuit sa route à destination d'Heilbronn.",
              "provient de la ville d'Eberberg."
            ],
            "ar": [
              "قادم من مدينة هايلبرون.",
              "يتجه ويواصل رحلته نحو هايلبرون.",
              "قادم من إيبربيرغ."
            ]
          }
        },
        "h7": {
          "fr": "Texte 4 : Cette émission est conçue par et pour les enfants.",
          "ar": "النص 4: هذا البرنامج من إعداد وتقديم الأطفال وللأطفال."
        },
        "h8": {
          "fr": "Texte 4 : Un quart de million de tablettes de chocolat ...",
          "ar": "النص 4: ربع مليون لوح شوكولاتة ...",
          "options": {
            "fr": [
              "a été consommé par les enfants.",
              "a été commandé par les commerçants.",
              "a été vendu en l'espace de quatre semaines."
            ],
            "ar": [
              "تم أكلها من قِبل الأطفال.",
              "تم طلبها من قِبل التجار والمتاجر.",
              "تم بيعها للمستهلكين خلال أربعة أسابيع."
            ]
          }
        },
        "h9": {
          "fr": "Texte 5 : Vous entendez un quiz destiné aux enfants.",
          "ar": "النص 5: تستمع إلى مسابقة أسئلة وأجوبة للأطفال."
        },
        "h10": {
          "fr": "Texte 5 : Sera invité à la Kunsthalle de Brême celui qui ...",
          "ar": "النص 5: يُدعى لحضور الافتتاح في كونستهاله بريمن من ...",
          "options": {
            "fr": [
              "rédige son avis sur la version d'essai du jeu.",
              "fournit les meilleures suggestions pour perfectionner le jeu.",
              "remplit le formulaire d'évaluation du jeu."
            ],
            "ar": [
              "يكتب رأيه وملاحظاته حول النسخة التجريبية من اللعبة.",
              "يقدم أفضل النصائح والمقترحات لتطوير اللعبة وتحسينها.",
              "يقوم بملء استبيان التقييم الخاص باللعبة."
            ]
          }
        },
        "h11": {
          "fr": "Qui a préparé la journée de l'environnement ?",
          "ar": "من الذي أعد ونظم يوم البيئة المدرسي؟",
          "options": {
            "fr": [
              "Les professeurs uniquement.",
              "Les élèves des classes de 8e et 9e seuls.",
              "Les élèves et les enseignants ensemble."
            ],
            "ar": [
              "المعلمات والمعلمون بمفردهم.",
              "تلاميذ وتلميذات الصفين الثامن والتاسع وحدهم.",
              "التلاميذ والمعلمون بالتعاون معاً."
            ]
          }
        },
        "h12": {
          "fr": "Parmi les thèmes abordés lors de la journée figurent aussi ...",
          "ar": "من بين الموضوعات المدرجة في يوم البيئة أيضاً ...",
          "options": {
            "fr": [
              "le chauffage et l'alimentation.",
              "le recyclage et les ordures ménagères.",
              "l'électricité et les véhicules électriques."
            ],
            "ar": [
              "التدفئة ونظام التغذية.",
              "إعادة التدوير والنفايات المنزلية.",
              "الكهرباء والسيارات الكهربائية."
            ]
          }
        },
        "h13": {
          "fr": "Combien de personnes possèdent une voiture en Allemagne ?",
          "ar": "كم عدد الأشخاص الذين يمتلكون سيارة في ألمانيا؟",
          "options": {
            "fr": [
              "Une grande partie.",
              "Un habitant sur trois.",
              "La moitié de la population."
            ],
            "ar": [
              "جزء كبير من السكان.",
              "شخص من كل ثلاثة أشخاص.",
              "نصف عدد السكان تقريباً."
            ]
          }
        },
        "h14": {
          "fr": "Comment le goûter de la récréation doit-il être emballé ?",
          "ar": "كيف ينبغي حفظ وتغليف شطيرة الاستراحة المدرسية؟",
          "options": {
            "fr": [
              "Dans du papier sulfurisé.",
              "Dans une boîte à goûter rigide et réutilisable.",
              "Dans du film plastique étirable."
            ],
            "ar": [
              "في ورق الزبدة والشطائر.",
              "في علبة طعام صلبة قابلة للاستخدام المتكرر.",
              "في رقائق وأكياس البلاستيك."
            ]
          }
        },
        "h15": {
          "fr": "Quand on n'utilise plus son ordinateur, il faut ...",
          "ar": "عند التوقف عن استخدام جهاز الكمبيوتر ينبغي ...",
          "options": {
            "fr": [
              "éteindre avec la télécommande.",
              "le mettre en mode veille.",
              "débrancher la prise de courant."
            ],
            "ar": [
              "إغلاق الشاشة بجهاز التحكم.",
              "وضعه في حالة السكون والاستعداد.",
              "نزع وفصل القابس من مقبس الكهرباء."
            ]
          }
        },
        "h16": {
          "fr": "Mme Pichler a travaillé dans une librairie.",
          "ar": "كانت السيدة بيخلر تعمل في متجر لبيع الكتب."
        },
        "h17": {
          "fr": "Simon et Mme Pichler étaient collègues.",
          "ar": "كان سيمون والسيدة بيخلر زميلي عمل."
        },
        "h18": {
          "fr": "Mme Pichler était heureuse au moment de partir à la retraite.",
          "ar": "كانت السيدة بيخلر سعيدة ومسرورة حين تقاعدت عن العمل."
        },
        "h19": {
          "fr": "Seuls les membres adhérents peuvent assister aux réunions du club.",
          "ar": "حضور لقاءات النادي مقتصر على الأعضاء المنتسبين فقط."
        },
        "h20": {
          "fr": "Simon a téléphoné à Mme Pichler il y a quelques jours sans parvenir à la joindre.",
          "ar": "اتصل سيمون بالسيدة بيخلر قبل أيام لكنه لم يتمكن من الوصول إليها."
        },
        "h21": {
          "fr": "La librairie souhaite organiser régulièrement des après-midis contes pour enfants.",
          "ar": "يرغب متجر الكتب في تنظيم جلسات قراءة منتظمة للأطفال بعد الظهر."
        },
        "h22": {
          "fr": "Mme Pichler refuse catégoriquement de participer aux animations pour enfants.",
          "ar": "ترفض السيدة بيخلر تماماً المشاركة في فعاليات الأطفال المسائية."
        },
        "h23": {
          "fr": "L'association « Kindernothilfe » vient en aide aux enfants dans le monde entier.",
          "ar": "تقدم منظمة «إغاثة الأطفال» العون للأطفال في شتى بقاع العالم.",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        },
        "h24": {
          "fr": "Des millions d'enfants sont contraints de travailler.",
          "ar": "ملايين الأطفال مجبرون على العمل لتأمين قوتهم.",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        },
        "h25": {
          "fr": "Des ballons de sport sont fabriqués en Inde.",
          "ar": "تُصنع كرات القدم الرياضية في الهند.",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        },
        "h26": {
          "fr": "En classe, les élèves devaient essayer de coudre un ballon.",
          "ar": "طُلب من التلاميذ في الصف محاولة خياطة كرة.",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        },
        "h27": {
          "fr": "Il faut réussir à terminer deux ballons en une seule journée.",
          "ar": "يتعين إنهاء وخياطة كرتين كاملتين في يوم واحد.",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        },
        "h28": {
          "fr": "Le bazar scolaire a été un succès éclatant.",
          "ar": "حقق البازار الخيري المدرسي نجاحاً باهراً وكبيراً.",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        },
        "h29": {
          "fr": "Pour lutter contre le travail des enfants, il convient d'acheter des produits labellisés « Fairtrade ».",
          "ar": "من يرغب في مكافحة عمالة الأطفال عليه شراء منتجات تحمل علامة «التجارة العادلة».",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        },
        "h30": {
          "fr": "Certains enfants peuvent aller à l'école malgré leur travail.",
          "ar": "يستطيع بعض الأطفال الذهاب إلى المدرسة رغم اضطرارهم للعمل.",
          "options": {
            "fr": [
              "La journaliste",
              "Eva Fink (Institutrice)",
              "Paul Egger (Kindernothilfe)"
            ],
            "ar": [
              "الصحفية / المذيعة",
              "إيفا فينك (المعلمة)",
              "باول إيغر (إغاثة الأطفال)"
            ]
          }
        }
      }
    }
  }
}
