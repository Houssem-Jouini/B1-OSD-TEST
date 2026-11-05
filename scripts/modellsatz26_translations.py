#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 26 - Translations Data (French & Arabic)
Modelltest 20 — Hueber Zertifikat B1
Full compliance with AGENTS.md schema invariants:
- articles[].body: { fr: [...], ar: [...] }
- questions[].options: { fr: [...], ar: [...] }
- ads: { a: { fr, ar }, A: { fr, ar }... }
- letters: { '20': { who, text: { fr, ar } }... }
- horen teile 1-4 & h1-h30 with full FR/AR translations
"""

translations = {
  "examTitle": {
    "fr": "Goethe / ÖSD Simulation d'examen B1 — Test modèle 20",
    "ar": "محاكاة امتحان غوته / أوس دي B1 — النموذج التدريبي 20"
  },
  "examSub": {
    "fr": "Lecture (5 parties) & Écoute (4 parties) · Test modèle 20 (Hueber)",
    "ar": "القراءة (5 أجزاء) والاستماع (4 أجزاء) · النموذج التدريبي 20 (هوبر)"
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
            "fr": "Message de Jutta sur un forum · Conflit de voisinage",
            "ar": "مشاركة يوتا في منتدى إلكتروني · خلاف مع الجيران"
          },
          "body": {
            "fr": [
              "Bonsoir,",
              "Jusqu'à il y a quelques mois, j'ignorais totalement ce qu'était une querelle de voisinage. Dans l'appartement d'en face habitaient des locataires calmes et charmants.",
              "Les nouveaux locataires, un couple, ont voulu m'imposer dès notre première rencontre dans le couloir à quel moment je devais faire mon tour de nettoyage de l'escalier ! J'habite ici depuis 1984 et je nettoie régulièrement l'escalier tous les quinze jours.",
              "Comme la machine à laver de la buanderie commune fonctionne sur un seul compteur, ils ont prétendu que je lavais peut-être mon linge à leurs frais si j'utilisais trop souvent la machine. Par ailleurs, ils affirmaient avoir toujours entretenu d'excellents rapports avec leurs voisins dans leur précédent logement.",
              "Après leur emménagement, la femme est venue frapper et sonner sans arrêt à ma porte, affirmant qu'elle faisait le ménage le samedi et que je devais impérativement faire de même.",
              "Quelques jours plus tard, une armoire a été installée dans le couloir commun, si large que j'avais du mal à passer, d'autant plus que je souffre d'un handicap moteur. J'ai attendu plus d'une semaine en pensant qu'ils finiraient par la rentrer chez eux. Comme rien ne se passait, j'ai sonné chez eux pour leur expliquer que j'aurais aimé être consultée au préalable avant qu'ils n'installent ce meuble. L'homme s'est mis à me hurler dessus : « Mais pour qui vous vous prenez ? L'armoire reste là ! » Le propriétaire a dû intervenir à deux reprises par lettre recommandée pour exiger le retrait du meuble.",
              "Pendant des jours entiers, dans l'appartement d'en face, on a martelé, percé et frappé contre les murs – visiblement à coups de poing – même pendant les heures légales de repos. Souvent, ils se postaient devant ma porte d'entrée pour proférer des insultes à voix haute. Chaque jour, leur porte d'entrée claque violemment à de multiples reprises, y compris et surtout après 23 heures.",
              "Étant déjà de santé fragile, je suis désormais à bout de nerfs et j'ai des palpitations cardiaques dès que j'entends les voisins entrer ou sortir.",
              "Que puis-je faire ? Je ne peux tout de même pas me laisser terroriser et tomber encore plus malade que je ne le suis déjà. Quelqu'un aurait-il un bon conseil à me donner ?",
              "Bien cordialement,",
              "Jutta"
            ],
            "ar": [
              "مساء الخير،",
              "لم أكن أعرف الخلافات بين الجيران حتى بضعة أشهر مضت. كان يسكن في الشقة المقابلة لي مستأجرون لطفاء وهادئون.",
              "أما المستأجران الجديدان، وهما زوجان، فقد حاولا منذ لقائنا الأول في الممر المشترك أن يفرضا عليّ متى يجب أن أقوم بواجبي في تنظيف الدرج! أنا أعيش هنا منذ عام 1984 وأنظف الدرج بانتظام كل أسبوعين.",
              "وبما أن الغسالة الموجودة في غرفة الغسيل العامة المشتركة تعمل بعداد كهرباء واحد فقط، فقد ادّعيا أنني ربما أغسل ملابسي على نفقتهما إذا استخدمت الغسالة كثيراً. وفوق ذلك، ادّعيا أنهما كانا على علاقة ممتازة دائماً مع الجيران في مسكنهما السابق.",
              "وبعد انتقالهما للسكن، صارت الزوجة تطرق بابي وترن الجرس مراراً وتكراراً، زاعمة أنها تنظف أيام السبت وأنه يتوجب عليّ فعل الشيء ذاته.",
              "وبعد بضعة أيام، وُضعت خزانة في الممر المشترك، وكانت عريضة لدرجة أنني بالكاد استطعت المرور بجانبها، لا سيما أنني أعاني من إعاقة في المشي والحركة. انتظرت أكثر من أسبوع ظناً مني أنهما سيدخلان قطعة الأثاث إلى شقتهما. وعندما لم يحدث ذلك، رننت جرس بابهما وشرحت لهما بلطف أنني كنت أفضل لو تم سؤالي مسبقاً قبل وضع الأثاث. فما كان من الرجل إلا أن صرخ في وجهي: «من تظنين نفسكِ أصلاً؟ الخزانة ستبقى مكانها!» واضطر مالك البناية لتوجيه إنذار كتابي مرتين لمطالبتهما بإزالة الأثاث.",
              "ولأيام متواصلة، كان هناك دق وحفر في الشقة المقابلة وطرق على الجدران – بالقبضات على ما يبدو – حتى في أوقات الراحة والهدوء المقررة. وكثيراً ما كانا يقفان أمام باب شقتي ويتحدثان بصوت عالٍ بكلمات فظة ومسيئة. وتُغلق باب شقتهما بعنف وقوة عدة مرات يومياً، لا سيما بعد الساعة الحادية عشرة ليلاً.",
              "وبما أنني لست بصحة جيدة، فقد انهارت أعصابي تماماً، وأصاب بتسارع شديد في ضربات القلب بمجرد سماع خطوات الجيران قادمين أو مغادرين.",
              "ماذا يمكنني أن أفعل؟ لا يمكنني أن أترك نفسي عرضة للإرهاب وأزداد مرضاً فوق مرضي. هل يمكن لأحد أن يسدي لي نصيحة طيبة؟",
              "مع أطيب التحيات،",
              "يوتا"
            ]
          }
        }
      ],
      "example": {
        "text": {
          "fr": "Jutta a rencontré les nouveaux locataires il y a quinze jours.",
          "ar": "التقت يوتا بالمستأجرين الجدد قبل أربعة عشر يوماً."
        }
      },
      "questions": {
        "1": {
          "fr": "L'escalier est nettoyé par les résidents de l'immeuble.",
          "ar": "يقوم سكان البناية بتنظيف الدرج بأنفسهم.",
          "text": {
            "fr": "L'escalier est nettoyé par les résidents de l'immeuble.",
            "ar": "يقوم سكان البناية بتنظيف الدرج بأنفسهم."
          }
        },
        "2": {
          "fr": "Dans l'immeuble, il y a une machine à laver commune pour tout le monde.",
          "ar": "توجد في البناية غسالة ملابس مشتركة لجميع السكان.",
          "text": {
            "fr": "Dans l'immeuble, il y a une machine à laver commune pour tout le monde.",
            "ar": "توجد في البناية غسالة ملابس مشتركة لجميع السكان."
          }
        },
        "3": {
          "fr": "Jutta a des difficultés pour marcher.",
          "ar": "لا تستطيع يوتا المشي بصورة جيدة.",
          "text": {
            "fr": "Jutta a des difficultés pour marcher.",
            "ar": "لا تستطيع يوتا المشي بصورة جيدة."
          }
        },
        "4": {
          "fr": "Au bout d'une semaine, le propriétaire a remis lui-même l'armoire dans l'appartement.",
          "ar": "بعد مرور أسبوع، قام صاحب البناية بإعادة الخزانة إلى داخل الشقة.",
          "text": {
            "fr": "Au bout d'une semaine, le propriétaire a remis lui-même l'armoire dans l'appartement.",
            "ar": "بعد مرور أسبوع، قام صاحب البناية بإعادة الخزانة إلى داخل الشقة."
          }
        },
        "5": {
          "fr": "Les nouveaux locataires font souvent du bruit, mais jamais pendant les heures de repos.",
          "ar": "يحدث المستأجران الجديدان ضجيجاً متكرراً، ولكن ليس خلال أوقات الراحة.",
          "text": {
            "fr": "Les nouveaux locataires font souvent du bruit, mais jamais pendant les heures de repos.",
            "ar": "يحدث المستأجران الجديدان ضجيجاً متكرراً، ولكن ليس خلال أوقات الراحة."
          }
        },
        "6": {
          "fr": "Jutta n'a aucun problème d'ordre nerveux ni cardiaque.",
          "ar": "لا تعاني يوتا من أي مشاكل عصبية أو قلبية.",
          "text": {
            "fr": "Jutta n'a aucun problème d'ordre nerveux ni cardiaque.",
            "ar": "لا تعاني يوتا من أي مشاكل عصبية أو قلبية."
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
            "fr": "Vivre contre son horloge biologique",
            "ar": "العيش في مواجهة الساعة البيولوجية"
          },
          "title": {
            "fr": "Vivre contre son horloge biologique",
            "ar": "العيش في مواجهة الساعة البيولوجية"
          },
          "body": {
            "fr": [
              "La recherche commence peu à peu à comprendre les conséquences néfastes qu'engendre une vie menée à contre-courant de son horloge biologique. Le travail posté en horaires décalés s'avère particulièrement dangereux. De nombreux êtres vivants possèdent une « horloge interne », comme l'expliquent les chronobiologistes tels que Till Roenneberg, chercheur pionnier depuis plusieurs décennies. Elle détermine le moment où les plantes ouvrent et ferment leurs feuilles, si les algues marines unicellulaires montent vers la surface ou s'enfoncent vers les fonds marins, ou encore comment et quand dorment les humains.",
              "En outre, elle régule la température corporelle humaine et pilote la sécrétion des hormones. Elle fixe également les moments de la journée que chacun préfère pour le sport, l'amour ou les repas. Ce rythme intérieur est principalement synchronisé par la lumière du soleil, c'est-à-dire l'alternance naturelle entre le jour et la nuit.",
              "Cependant, le temps biologique interne de l'individu entre fréquemment en conflit avec le temps « social » imposé par la société moderne. Roenneberg se montre d'ailleurs très critique envers le changement d'heure régulier entre l'hiver et l'été, car il vient dérégler artificiellement notre horloge interne.",
              "« Dans les sociétés modernes, nous vivons rarement en harmonie avec notre horloge biologique. Certains franchissent plusieurs fuseaux horaires en avion en un éclair, tandis que d'autres – environ 20 % de la population active dans les pays industrialisés – travaillent en équipes selon des plannings tournants. » Beaucoup d'individus souffrent ainsi d'une forme de « décalage horaire social » (social jetlag), analyse Roenneberg."
            ],
            "ar": [
              "بدأت الأبحاث العلمية تفهم تدريجياً العواقب الضارة للعيش بما يخالف الساعة البيولوجية الداخلية للإنسان، ويعد العمل بنظام الورديات خطيراً بشكل خاص. يمتلك العديد من الكائنات الحية «ساعة بيولوجية»، كما يوضح علماء البيولوجيا الزمنية مثل تيل رونيبيرغ، الذي يدرس هذا الموضوع منذ عقود. فهذه الساعة هي التي تحدد متى تفتح النباتات أوراقها وتغلقها، وما إذا كانت الطحالب البحرية وحيدة الخلية تتحرك نحو قاع البحر أو تطفو إلى السطح، أو متى وكيف ينام البشر.",
              "بالإضافة إلى ذلك، تضبط الساعة البيولوجية درجة حرارة جسم الإنسان وتتحكم في إفراز الهرمونات، كما تحدد الأوقات المفضلة لممارسة الرياضة والعلاقات وتناول وجبات الطعام. ويتأثر هذا الإيقاع الداخلي بأشعة الشمس والتعاقب الطبيعي بين النور والظلام.",
              "ومع ذلك، غالباً ما يحدث توتر وصراع بين التوقيت البيولوجي الداخلي للإنسان والتوقيت «الاجتماعي» الذي تفرضه متطلبات المجتمع. ولذلك لا يؤيد رونيبيرغ فكرة التغيير الدوري بين التوقيتين الشتوي والصيفي، لأن ذلك يربك عقارب الساعة الداخلية للجسم.",
              "ويوضح رونيبيرغ: «في المجتمعات المعاصرة، نادراً ما نعيش بانسجام مع ساعتنا الداخلية. فالبعض يسافر عابراً مناطق زمنية متعددة في وقت وجيز، بينما يعمل آخرون – نحو 20 بالمائة من القوى العاملة في الدول الصناعية – بنظام الورديات والمناوبات». ويعاني الكثيرون نتيجة لذلك من نوع من «اضطراب التوقيت الاجتماعي»."
            ]
          }
        }
      ],
      "example": {
        "text": {
          "fr": "Till Roenneberg ...",
          "ar": "تيل رونيبيرغ ..."
        },
        "options": {
          "fr": [
            "mène des recherches depuis longtemps sur « l'horloge biologique ».",
            "est un biologiste marin.",
            "trouve le changement d'heure d'hiver et d'été très bénéfique."
          ],
          "ar": [
            "يبحث منذ زمن طويل في موضوع «الساعة البيولوجية».",
            "عالم في الأحياء البحرية.",
            "يرى أن تغيير التوقيت بين الشتاء والصيف أمر جيد ومفيد."
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
              "la manière dont l'horloge biologique est réglée à l'origine.",
              "le rôle que joue l'horloge biologique pour les êtres humains.",
              "ce que représente l'horloge interne pour les animaux."
            ],
            "ar": [
              "كيفية ضبط وبرمجة «الساعة البيولوجية».",
              "الدور الذي تلعبه «الساعة البيولوجية» في حياة البشر.",
              "ما تعنيه «الساعة البيولوجية» بالنسبة للحيوانات."
            ]
          }
        },
        "8": {
          "fr": "L'« horloge biologique » ...",
          "ar": "«الساعة البيولوجية» ...",
          "text": {
            "fr": "L'« horloge biologique » ...",
            "ar": "«الساعة البيولوجية» ..."
          },
          "options": {
            "fr": [
              "influence le niveau de température du corps humain.",
              "n'exerce aucune influence sur le sommeil.",
              "détermine quel type de sport l'individu pratique."
            ],
            "ar": [
              "تؤثر في درجة حرارة جسم الإنسان.",
              "ليس لها أي تأثير على نوم الإنسان.",
              "تحدد نوع الرياضة التي يمارسها الشخص."
            ]
          }
        },
        "9": {
          "fr": "Le mode de vie moderne ...",
          "ar": "نمط الحياة العصري والحديث ...",
          "text": {
            "fr": "Le mode de vie moderne ...",
            "ar": "نمط الحياة العصري والحديث ..."
          },
          "options": {
            "fr": [
              "modifie les habitudes alimentaires et de sommeil.",
              "s'adapte parfaitement à l'horloge interne de l'homme.",
              "empêche souvent les individus de vivre selon leur rythme biologique naturel."
            ],
            "ar": [
              "يغير العادات الغذائية وأنماط النوم.",
              "يتناسب ويتناغم مع «الساعة البيولوجية» للإنسان.",
              "يحول غالباً دون تمكن الناس من العيش وفقاً لـ «ساعتهم البيولوجية»."
            ]
          }
        }
      },
      "articles2": [
        {
          "heading": {
            "fr": "Les ours en peluche anciens valent une véritable fortune",
            "ar": "دببة التيدي الأثرية القديمة تجلب ثروات طائلة"
          },
          "title": {
            "fr": "Les ours en peluche anciens valent une véritable fortune",
            "ar": "دببة التيدي الأثرية القديمة تجلب ثروات طائلة"
          },
          "body": {
            "fr": [
              "Un ours en peluche : il n'y a sans doute presque personne qui n'en ait pas possédé un dans son enfance. Il accompagne l'enfant au lit, en voyage, partout. L'animal en peluche sert de confident, d'aide pour s'endormir et console l'enfant dans ses chagrins. Cet attachement s'estompe au plus tard à l'adolescence, vers 13 ou 14 ans. Souvent, les vieux doudous sont alors relégués au grenier ou à la cave, où ils tombent dans l'oubli. Pourtant, bon nombre de ces peluches sont aujourd'hui rarissimes et valent une véritable fortune.",
              "Sont considérés comme historiquement précieux les ours datant d'avant 1970. Leur valeur dépend de leur ancienneté, de leur état de conservation et du nombre d'exemplaires encore existants. Les ours de marque, en particulier de la célèbre maison Steiff, sont les plus recherchés des collectionneurs. Pour des modèles particulièrement rares, les amateurs sont prêts à débourser plusieurs milliers d'euros.",
              "Pour reconnaître l'âge d'un ours Steiff, on peut examiner attentivement la marque de fabrique : le bouton métallique dans l'oreille. Toutefois, ce type de signe distinctif a souvent été égaré. Il faut alors déterminer l'âge autrement, par exemple par le style et l'emplacement des coutures, la nature des yeux ou le poids de la peluche. Il convient alors de consulter un expert pour savoir si l'on possède un modeste souvenir ou un véritable trésor."
            ],
            "ar": [
              "دب التيدي القماشي – قلّما نجد شخصاً لم يمتلك واحداً منه في طفولته. يرافق الدب الطفل إلى السرير، وفي الرحلات، وإلى كل مكان. يمثل الحيوان المحشو دور الصديق الوفي والمساعد على النوم ويواسي الطفل عند حزنه. وينتهي هذا التعلق مع بداية سن المراهقة، أي في عمر 13 أو 14 عاماً على أبعد تقدير. وغالباً ما تختفي الدمى القديمة في السندرة أو الأقبية لتطالها يد النسيان، على الرغم من أن العديد من هذه الدمى باتت نادرة للغاية وتساوي أموالاً طائلة.",
              "تُعد الدببة المصنوعة قبل عام 1970 ذات قيمة تاريخية ثمينة. وتتوقف قيمتها على عمرها وحالتها الجيدة وعدد النسخ المتبقية منها في العالم. وتعتبر الدببة ذات العلامات التجارية العريقة، خاصة شركة «شتايف» (Steiff)، الأكثر شعبية لدى هواة الجمع. ويصل الأمر بهواة الاقتناء إلى دفع آلاف اليوروهات للحصول على القطع النادرة جداً.",
              "ولمعرفة عمر دب شتايف بدقة، يمكن فحص علامة الشركة المميزة: الزر المعدني في الأذن. ولكن كثيراً ما فُقدت هذه العلامة مع مرور الزمن، وعندها يجب تحديد العمر بطرق أخرى، مثل نوع الخياطة وموضعها، أو طبيعة العيون، أو وزن الدب. وفي هذه الحالة يُنصح باستشارة خبير مختص لتحديد ما إذا كان الدب يمثل كنزاً صغيراً أو ثروة حقيقية."
            ]
          }
        }
      ],
      "questions2": {
        "10": {
          "fr": "Dans ce texte, il s'agit principalement du fait ...",
          "ar": "يدور هذا النص بالأساس حول ...",
          "text": {
            "fr": "Dans ce texte, il s'agit principalement du fait ...",
            "ar": "يدور هذا النص بالأساس حول ..."
          },
          "options": {
            "fr": [
              "que les vieux ours en peluche restent populaires auprès des enfants.",
              "que les anciens ours en peluche peuvent coûter très cher.",
              "que la fabrique Steiff produit les meilleurs ours en peluche du monde."
            ],
            "ar": [
              "أن الدببة القديمة لا تزال محبوبة جداً لدى الأطفال.",
              "أن الدببة القماشية القديمة يمكن أن تكون باهظة الثمن وقيّمة للغاية.",
              "أن شركة شتايف تنتج أفضل الدببة القماشية على الإطلاق."
            ]
          }
        },
        "11": {
          "fr": "Les ours en peluche ...",
          "ar": "دببة التيدي القماشية ...",
          "text": {
            "fr": "Les ours en peluche ...",
            "ar": "دببة التيدي القماشية ..."
          },
          "options": {
            "fr": [
              "sont très importants dans la vie des enfants.",
              "sont jetés à la poubelle par les adolescents.",
              "continuent d'intéresser activement les adolescents."
            ],
            "ar": [
              "تمثل أهمية بالغة وكبيرة للأطفال الصغار.",
              "يلقي بها المراهقون في صناديق القمامة.",
              "تثير اهتمام المراهقين والشباب أيضاً."
            ]
          }
        },
        "12": {
          "fr": "L'âge d'un ours en peluche ...",
          "ar": "عمر وتاريخ صنع دب التيدي ...",
          "text": {
            "fr": "L'âge d'un ours en peluche ...",
            "ar": "عمر وتاريخ صنع دب التيدي ..."
          },
          "options": {
            "fr": [
              "peut être découvert grâce à la forme de son oreille.",
              "ne peut être constaté qu'à l'aide de la marque de fabrique officielle.",
              "peut également être identifié à l'aide de ses yeux."
            ],
            "ar": [
              "يمكن معرفته من خلال فحص أذنه.",
              "لا يمكن التحقق منه إلا عبر العلامة التجارية الرسمية للشركة فقط.",
              "يمكن الاستدلال عليه ومعرفته أيضاً من خلال فحص عينيه."
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
        "fr": "Lisez les situations 13 à 19 et les annonces a à j. Associez chaque annonce à la situation qui convient. Chaque annonce ne peut être utilisée qu'une seule fois. Si aucune annonce ne correspond, écrivez 0.",
        "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j. اختر: أي إعلان يناسب أي موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. إذا لم تجد إعلاناً مناسباً، اكتب 0."
      },
      "situationContext": {
        "fr": "Des élèves et des enseignants de vos connaissances recherchent des offres intéressantes de voyages scolaires pour le mois d'avril ou mai.",
        "ar": "يبحث طلاب ومعلمون من دائرة معارفك عن عروض مميزة لرحلات مدرسية جماعية خلال شهر أبريل أو مايو."
      },
      "example": {
        "text": {
          "fr": "Mme Klein recherche pour sa classe de 6e une formule avec un thème environnemental stimulant qui aide à renforcer la cohésion entre élèves.",
          "ar": "تبحث السيدة كلاين لصفها السادس عن عرض يركز على موضوع بيئي ممتع ويساعد في تحسين العلاقات وتوطيد الألفة بين الطلاب."
        }
      },
      "situations": {
        "13": {
          "fr": "Tim et Melina aident leur enseignante à organiser leur voyage scolaire. Ils recherchent une offre pour Londres.",
          "ar": "يساعد تيم وميلينا معلمتهما في تنظيم رحلة مدرسية، ويبحثان عن عرض لزيارة لندن.",
          "text": {
            "fr": "Tim et Melina aident leur enseignante à organiser leur voyage scolaire. Ils recherchent une offre pour Londres.",
            "ar": "يساعد تيم وميلينا معلمتهما في تنظيم رحلة مدرسية، ويبحثان عن عرض لزيارة لندن."
          }
        },
        "14": {
          "fr": "Les élèves du cours de grec moderne du lycée Einstein étaient à Athènes l'an dernier et souhaitent découvrir une autre région de Grèce cette fois-ci.",
          "ar": "كان طلاب فصل اللغة اليونانية الحديثة في مدرسة أينشتاين في أثينا العام الماضي، ويرغبون هذه المرة في استكشاف جزء آخر ومختلف من اليونان.",
          "text": {
            "fr": "Les élèves du cours de grec moderne du lycée Einstein étaient à Athènes l'an dernier et souhaitent découvrir une autre région de Grèce cette fois-ci.",
            "ar": "كان طلاب فصل اللغة اليونانية الحديثة في مدرسة أينشتاين في أثينا العام الماضي، ويرغبون هذه المرة في استكشاف جزء آخر ومختلف من اليونان."
          }
        },
        "15": {
          "fr": "Benno Pohl souhaite organiser un voyage pour sa classe de 5e offrant aux enfants l'occasion de pratiquer des activités sportives.",
          "ar": "يرغب بينو بول في تنظيم رحلة مدرسية لصفه الخامس تتيح للأطفال فرصة ممارسة الأنشطة الرياضية والحركية.",
          "text": {
            "fr": "Benno Pohl souhaite organiser un voyage pour sa classe de 5e offrant aux enfants l'occasion de pratiquer des activités sportives.",
            "ar": "يرغب بينو بول في تنظيم رحلة مدرسية لصفه الخامس تتيح للأطفال فرصة ممارسة الأنشطة الرياضية والحركية."
          }
        },
        "16": {
          "fr": "Mme Keller est enseignante à Zurich. Elle estime qu'un voyage scolaire est une opportunité idéale pour familiariser les enfants avec la vie à la campagne.",
          "ar": "السيدة كيلر معلمة في زيورخ، وترى أن الرحلة المدرسية فرصة مثالية ليتعرف الأطفال على طبيعة الحياة الريفية في المزرعة.",
          "text": {
            "fr": "Mme Keller est enseignante à Zurich. Elle estime qu'un voyage scolaire est une opportunité idéale pour familiariser les enfants avec la vie à la campagne.",
            "ar": "السيدة كيلر معلمة في زيورخ، وترى أن الرحلة المدرسية فرصة مثالية ليتعرف الأطفال على طبيعة الحياة الريفية في المزرعة."
          }
        },
        "17": {
          "fr": "Les élèves de terminale du lycée Keppler de Linz ont décidé d'aller à Berlin. Toutefois, un trajet en avion est trop cher pour leur budget.",
          "ar": "قرر طلاب الصف النهائي في مدرسة كيبلر الثانوية في لينتس السفر إلى برلين، لكن تذاكر الطيران باهظة الثمن بالنسبة لجميع الطلاب.",
          "text": {
            "fr": "Les élèves de terminale du lycée Keppler de Linz ont décidé d'aller à Berlin. Toutefois, un trajet en avion est trop cher pour leur budget.",
            "ar": "قرر طلاب الصف النهائي في مدرسة كيبلر الثانوية في لينتس السفر إلى برلين، لكن تذاكر الطيران باهظة الثمن بالنسبة لجميع الطلاب."
          }
        },
        "18": {
          "fr": "M. Moser enseigne l'histoire ancienne et souhaite emmener ses élèves en Grèce cette année. Il cherche une formule tout compris avec vol et hébergement.",
          "ar": "يدرّس الأستاذ موزر مادة التاريخ القديم ويرغب في السفر مع طلابه إلى اليونان هذا العام، ويبحث عن عرض يشمل الطيران والإقامة معاً.",
          "text": {
            "fr": "M. Moser enseigne l'histoire ancienne et souhaite emmener ses élèves en Grèce cette année. Il cherche une formule tout compris avec vol et hébergement.",
            "ar": "يدرّس الأستاذ موزر مادة التاريخ القديم ويرغب في السفر مع طلابه إلى اليونان هذا العام، ويبحث عن عرض يشمل الطيران والإقامة معاً."
          }
        },
        "19": {
          "fr": "Les élèves de l'école Glattal de Zurich veulent se rendre à Berlin. En raison de l'éloignement, un voyage en train est exclu.",
          "ar": "يرغب طلاب مدرسة غلاتال في زيورخ في السفر إلى برلين، ولكن بسبب طول المسافة فإن السفر بالقطار مستبعد تماماً بالنسبة لهم.",
          "text": {
            "fr": "Les élèves de l'école Glattal de Zurich veulent se rendre à Berlin. En raison de l'éloignement, un voyage en train est exclu.",
            "ar": "يرغب طلاب مدرسة غلاتال في زيورخ في السفر إلى برلين، ولكن بسبب طول المسافة فإن السفر بالقطار مستبعد تماماً بالنسبة لهم."
          }
        }
      },
      "ads": {
        "a": {
          "fr": "Athènes - Vol aérien · 234 CHF/pers. · 5 jours de voyage scolaire en Grèce avec vol A/R, transferts et 4 nuits en hôtel de jeunesse au centre avec petit-déjeuner. (www.schulreisen-service.ch)",
          "ar": "أثينا - رحلة طيران · 234 فرنك سويسري للشخص · 5 أيام رحلة مدرسية لليونان تشمل الطيران ذهاباً وإياباً، والتنقلات من المطار، و4 ليالٍ في فندق شبابي بوسط أثينا مع الإفطار."
        },
        "A": {
          "fr": "Athènes - Vol aérien · 234 CHF/pers. · 5 jours de voyage scolaire en Grèce avec vol A/R, transferts et 4 nuits en hôtel de jeunesse au centre avec petit-déjeuner. (www.schulreisen-service.ch)",
          "ar": "أثينا - رحلة طيران · 234 فرنك سويسري للشخص · 5 أيام رحلة مدرسية لليونان تشمل الطيران ذهاباً وإياباً، والتنقلات من المطار، و4 ليالٍ في فندق شبابي بوسط أثينا مع الإفطار."
        },
        "b": {
          "fr": "Londres en autocar · Super promo : 162 EUR/pers. · 5 jours, chambres partagées avec buffet petit-déjeuner, visite guidée de 3h, autocar sur place avec 200 km d'excursions gratuits. UNIQUEMENT DE NOVEMBRE À FÉVRIER. (www.klassenfahrtensuper.de)",
          "ar": "لندن بالحافلة · عرض ترويجي خاص: 162 يورو للشخص · 5 أيام، غرف مشتركة مع بوفيه إفطار، جولة للمدينة لمدة 3 ساعات، حافلة مع 200 كم مجانية للرحلات. متاح فقط من نوفمبر حتى فبراير."
        },
        "B": {
          "fr": "Londres en autocar · Super promo : 162 EUR/pers. · 5 jours, chambres partagées avec buffet petit-déjeuner, visite guidée de 3h, autocar sur place avec 200 km d'excursions gratuits. UNIQUEMENT DE NOVEMBRE À FÉVRIER. (www.klassenfahrtensuper.de)",
          "ar": "لندن بالحافلة · عرض ترويجي خاص: 162 يورو للشخص · 5 أيام، غرف مشتركة مع بوفيه إفطار، جولة للمدينة لمدة 3 ساعات، حافلة مع 200 كم مجانية للرحلات. متاح فقط من نوفمبر حتى فبراير."
        },
        "c": {
          "fr": "Berlin en train · 159 EUR/pers. · 5 jours, trajet train A/R avec réservations, 4 nuits avec petit-déjeuner, visite de Berlin 2h, musée de Pergame et pass transports 5 jours. Agence autrichienne. (www.klassenreisen.at)",
          "ar": "برلين بالقطار · 159 يورو للشخص · 5 أيام، قطار ذهاباً وإياباً مع حجز المقاعد، 4 ليالٍ مع الإفطار، جولة ساعتين في برلين، دخول متحف بيرغامون، وتذاكر مواصلات 5 أيام."
        },
        "C": {
          "fr": "Berlin en train · 159 EUR/pers. · 5 jours, trajet train A/R avec réservations, 4 nuits avec petit-déjeuner, visite de Berlin 2h, musée de Pergame et pass transports 5 jours. Agence autrichienne. (www.klassenreisen.at)",
          "ar": "برلين بالقطار · 159 يورو للشخص · 5 أيام، قطار ذهاباً وإياباً مع حجز المقاعد، 4 ليالٍ مع الإفطار، جولة ساعتين في برلين، دخول متحف بيرغامون، وتذاكر مواصلات 5 أيام."
        },
        "d": {
          "fr": "Lac de Möhnesee en autocar · 178 EUR/pers. · 5 jours très prisés des classes 4 à 7, programme multi-activités : 4 nuits en chalet 4 pers. en pension complète, planche à voile, canoë, rando forêt et barbecue. (www.klassenfahrtensuper.de)",
          "ar": "بحيرة مونهيسيه بالحافلة · 178 يورو للشخص · 5 أيام محبوبة لصفوف 4-7، برنامج حركي نشط: 4 ليالٍ في أكواخ رباعية بإقامة كاملة، ركوب أمواج، تجديف، ألعاب كرة، وجولة غابات."
        },
        "D": {
          "fr": "Lac de Möhnesee en autocar · 178 EUR/pers. · 5 jours très prisés des classes 4 à 7, programme multi-activités : 4 nuits en chalet 4 pers. en pension complète, planche à voile, canoë, rando forêt et barbecue. (www.klassenfahrtensuper.de)",
          "ar": "بحيرة مونهيسيه بالحافلة · 178 يورو للشخص · 5 أيام محبوبة لصفوف 4-7، برنامج حركي نشط: 4 ليالٍ في أكواخ رباعية بإقامة كاملة، ركوب أمواج، تجديف، ألعاب كرة، وجولة غابات."
        },
        "e": {
          "fr": "Séjour Climat idéal · 149 EUR/élève · 5 jours pour classes 5 à 10 : écologie et climat social scolaire, expériences, 4 nuits pension complète en car grand confort. Dès 22 participants. (www.klassenfahrtensuper.de)",
          "ar": "رحلة المناخ المثالي · 149 يورو للطالب · 5 أيام لصفوف 5-10: تجارب بيئية وألعاب لتعزيز التوافق الاجتماعي بين الطلاب، 4 ليالٍ بإقامة كاملة وحافلة حديثة (حد أدنى 22 طالباً)."
        },
        "E": {
          "fr": "Séjour Climat idéal · 149 EUR/élève · 5 jours pour classes 5 à 10 : écologie et climat social scolaire, expériences, 4 nuits pension complète en car grand confort. Dès 22 participants. (www.klassenfahrtensuper.de)",
          "ar": "رحلة المناخ المثالي · 149 يورو للطالب · 5 أيام لصفوف 5-10: تجارب بيئية وألعاب لتعزيز التوافق الاجتماعي بين الطلاب، 4 ليالٍ بإقامة كاملة وحافلة حديثة (حد أدنى 22 طالباً)."
        },
        "f": {
          "fr": "Berlin - Voyage d'information pour enseignants · 99 EUR/pers. · Du 21 au 23 octobre : repérage des sites, auberges de jeunesse, sorties et restaurants pas chers pour préparer un voyage de classe. (www.primaklassenreisen.at)",
          "ar": "برلين - رحلة استكشافية للمعلمين · 99 يورو فقط · من 21 إلى 23 أكتوبر: جولة تعريفية للمعلمين لمعاينة المعالم، وفنادق الشباب، والمطاعم الاقتصادية لترتيب رحلات فصولهم."
        },
        "F": {
          "fr": "Berlin - Voyage d'information pour enseignants · 99 EUR/pers. · Du 21 au 23 octobre : repérage des sites, auberges de jeunesse, sorties et restaurants pas chers pour préparer un voyage de classe. (www.primaklassenreisen.at)",
          "ar": "برلين - رحلة استكشافية للمعلمين · 99 يورو فقط · من 21 إلى 23 أكتوبر: جولة تعريفية للمعلمين لمعاينة المعالم، وفنادق الشباب، والمطاعم الاقتصادية لترتيب رحلات فصولهم."
        },
        "g": {
          "fr": "Circuit en Grèce du Nord · 159 EUR/pers. · 4 jours en car moderne : Thessalonique – Vergina – massif du Pinde – Thessalonique, 3 nuits en chambres partagées avec petit-déjeuner. (www.klassenfahrtensuper.de)",
          "ar": "جولة في شمال اليونان · 159 يورو للشخص · رحلة حافلة حديثة لمدة 4 أيام: سالونيك – فيرجينا – جبال بيندوس – سالونيك، 3 ليالٍ في غرف مشتركة مع الإفطار."
        },
        "G": {
          "fr": "Circuit en Grèce du Nord · 159 EUR/pers. · 4 jours en car moderne : Thessalonique – Vergina – massif du Pinde – Thessalonique, 3 nuits en chambres partagées avec petit-déjeuner. (www.klassenfahrtensuper.de)",
          "ar": "جولة في شمال اليونان · 159 يورو للشخص · رحلة حافلة حديثة لمدة 4 أيام: سالونيك – فيرجينا – جبال بيندوس – سالونيك، 3 ليالٍ في غرف مشتركة مع الإفطار."
        },
        "h": {
          "fr": "Berlin en avion · 199 EUR/pers. · 5 jours, vol A/R avec taxes incluses, 4 nuits avec buffet petit-déjeuner, pass transports en commun 5 jours, visite guidée de 3h et musée de Pergame. (www.klassenfahrtensuper.de)",
          "ar": "برلين بالطائرة · 199 يورو للشخص · رحلة طيران 5 أيام تشمل تذاكر الطيران والضرائب، 4 ليالٍ مع بوفيه إفطار، تذاكر مواصلات 5 أيام، وجولة للمدينة ومتحف بيرغامون."
        },
        "H": {
          "fr": "Berlin en avion · 199 EUR/pers. · 5 jours, vol A/R avec taxes incluses, 4 nuits avec buffet petit-déjeuner, pass transports en commun 5 jours, visite guidée de 3h et musée de Pergame. (www.klassenfahrtensuper.de)",
          "ar": "برلين بالطائرة · 199 يورو للشخص · رحلة طيران 5 أيام تشمل تذاكر الطيران والضرائب، 4 ليالٍ مع بوفيه إفطار، تذاكر مواصلات 5 أيام، وجولة للمدينة ومتحف بيرغامون."
        },
        "i": {
          "fr": "Séjour ski à Steibis Oberstaufen · 196 EUR/pers. · 5 jours au paradis du ski pour enfants : 4 nuits pension complète, forfait de ski 4 jours et cours de ski. Valable d'octobre à mars uniquement. (www.klassenfahrtensuper.de)",
          "ar": "رحلة تزلج إلى شتايبيس أوبرشتاوفن · 196 يورو للشخص · 5 أيام في جنة التزلج للأطفال: 4 ليالٍ بإقامة كاملة، بطاقة تزلج ودورات تدريبية. سارٍ من أكتوبر حتى مارس فقط."
        },
        "I": {
          "fr": "Séjour ski à Steibis Oberstaufen · 196 EUR/pers. · 5 jours au paradis du ski pour enfants : 4 nuits pension complète, forfait de ski 4 jours et cours de ski. Valable d'octobre à mars uniquement. (www.klassenfahrtensuper.de)",
          "ar": "رحلة تزلج إلى شتايبيس أوبرشتاوفن · 196 يورو للشخص · 5 أيام في جنة التزلج للأطفال: 4 ليالٍ بإقامة كاملة، بطاقة تزلج ودورات تدريبية. سارٍ من أكتوبر حتى مارس فقط."
        },
        "j": {
          "fr": "Marthalen dans le vignoble zurichois · 177 CHF/pers. · En autocar pour classes 4 à 7 : séjour à la ferme avec ateliers pratiques (alimentation, vignes, champs, animaux), 4 nuits pension complète et encadrement. (www.schulreisen-service.ch)",
          "ar": "مارتهالن في ريف زيورخ · 177 فرنك للشخص · رحلة حافلة لصفوف 4-7: إقامة في مزرعة ريفية مع مشاريع زراعية (إنتاج الغذاء، الكروم، الحقول، رعاية الحيوانات)، 4 ليالٍ بإقامة كاملة."
        },
        "J": {
          "fr": "Marthalen dans le vignoble zurichois · 177 CHF/pers. · En autocar pour classes 4 à 7 : séjour à la ferme avec ateliers pratiques (alimentation, vignes, champs, animaux), 4 nuits pension complète et encadrement. (www.schulreisen-service.ch)",
          "ar": "مارتهالن في ريف زيورخ · 177 فرنك للشخص · رحلة حافلة لصفوف 4-7: إقامة في مزرعة ريفية مع مشاريع زراعية (إنتاج الغذاء، الكروم، الحقول، رعاية الحيوانات)، 4 ليالٍ بإقامة كاملة."
        }
      }
    },
    "4": {
      "title": {
        "fr": "Partie 4 (Lecture)",
        "ar": "الجزء 4 (القراءة)"
      },
      "instructions": {
        "fr": "Lisez les opinions 20 à 26. Choisissez : la personne est-elle favorable à une amende financière en cas d'école buissonnière ?",
        "ar": "اقرأ الآراء من 20 إلى 26. اختر: هل يؤيد الشخص فرض غرامة مالية على التهرب والغياب عن المدرسة دون إذن؟"
      },
      "situationContext": {
        "fr": "Dans un journal, vous lisez des commentaires de lecteurs réagissant à l'idée d'infliger une amende de 440 euros aux élèves qui manquent les cours sans autorisation.",
        "ar": "تقرأ في إحدى الصحف تعليقات القراء حول اقتراح يقضي بفرض غرامة مالية قدرها 440 يورو على الطلاب الذين يتغيبون عن المدرسة دون إذن قانوني."
      },
      "guidingQuestion": {
        "fr": "La personne est-elle POUR une amende de 440 € contre l'école buissonnière ?",
        "ar": "هل يؤيد هذا الشخص فرض غرامة مالية قدرها 440 يورو على التهرب المدرسي؟"
      },
      "example": {
        "who": "Hartmuth, 41 ans, Cham",
        "text": {
          "fr": "Pourquoi seulement 440 € d'amende ? Ne parle-t-on pas d'obligation scolaire ? Une obligation est par définition contraignante, c'est quelque chose que l'on doit respecter ! Quiconque manque à ce devoir doit être sanctionné, sans aucune hésitation !",
          "ar": "لماذا 440 يورو فقط كغرامة؟ ألا يسمى ذلك بالتعليم الإلزامي؟ والإلزام بطبيعته يعني واجباً حتمياً يجب القيام به! ومن لا يلتزم بواجبه يجب أن يعاقب دون قيد أو شرط!"
        }
      },
      "letters": {
        "20": {
          "who": "Steffi, 52 ans, Schwyz",
          "text": {
            "fr": "C'est irréalisable, car les enfants de moins de 14 ans ne peuvent en principe pas faire l'objet de sanctions pénales de la part de l'État. Il faudrait prouver que les parents n'ont pas obligé les enfants à aller en classe, ce qui est extrêmement complexe. Une sanction doit être simple et directe ; dans ce cas précis, les amendes ne servent strictement à rien.",
            "ar": "لا يمكن تطبيق هذا الأمر، لأن الأطفال دون سن 14 عاماً لا يمكن للدولة معاقبتهم جنائياً بصفة عامة. وسيتعين إثبات أن أولياء الأمور لم يجبروا أبناءهم على الذهاب، وهذا معقد جداً. يجب أن تكون العقوبة بسيطة ومباشرة، وفي هذه الحالة لن تجدي الغرامات المالية نفعاً على الإطلاق."
          }
        },
        "21": {
          "who": "Robert, 20 ans, Gmunden",
          "text": {
            "fr": "Il s'agit au fond des neuf premières années d'école, qui relèvent de la scolarité obligatoire instituée sous Marie-Thérèse. Qu'un jeune gâche ses chances d'avoir le bac par l'école buissonnière est son affaire, mais réclamer d'emblée une amende pour ces élèves me paraît excessif. Ne pourrait-on pas trouver une meilleure méthode ? Ne vaudrait-il pas mieux motiver les élèves plutôt que de les punir ?",
            "ar": "يتعلق الأمر أساساً بالسنوات الدراسية التسع الأولى المشمولة بالتعليم الإلزامي منذ عهد ماريا تيريزا. وإذا أضاع طالب فرصته في الثانوية بسبب التهرب فذلك شأنه الخاص، لكن المطالبة بغرامة فورية تبدو لي مبالغاً فيها ومتطرفة. ألا توجد وسيلة أفضل؟ أليس من الأجدى تحفيز الطلاب بدلاً من معاقبتهم؟"
          }
        },
        "22": {
          "who": "Martina, 35 ans, Villach",
          "text": {
            "fr": "Pourquoi punir les parents quand les ados sèchent les cours dans leur dos ? J'ai moi-même souvent séché en classe de première et de terminale, et j'ai quand même décroché mon bac. Frapper les parents au portefeuille ne résout rien. Ce sont les jeunes eux-mêmes qui devraient être astreints à des travaux d'utilité publique : balayer les rues ou nettoyer les parcs. Cela aurait mille fois plus d'impact !",
            "ar": "لماذا يُعاقب الآباء إذا كان المراهقون يتهربون من المدرسة من وراء ظهورهم؟ لقد تهربت بنفسي كثيراً في الصفين السابع والثامن من المرحلة الثانوية ورغم ذلك اجتزت امتحان الثانوية بنجاح. الغرامات ضد الآباء لا طائل منها، بل يجب معاقبة المراهقين أنفسهم بأعمال خدمة عامة ككنس الشوارع وتنظيف الحدائق، فهذا أبلغ أثراً من كل شيء!"
          }
        },
        "23": {
          "who": "Konrad, 33 ans, Interlaken",
          "text": {
            "fr": "A-t-on la moindre idée de ce que coûtent 75 000 jeunes désœuvrés à notre système social ? Rien que pour cette raison, de telles amendes sont absolument justifiées. Il ne faudrait pas prendre de gants avec ces messieurs les resquilleurs scolaires et leurs parents.",
            "ar": "هل يدرك أحد كم يكلف 75 ألف شاب عاطل عن العمل نظام الضمان الاجتماعي لدينا؟ لهذا السبب وحده تعد مثل هذه العقوبات مبررة ومستحقة تماماً. لا ينبغي لنا أن نكون متساهلين مع هؤلاء الطلاب المتهربين وأولياء أمورهم."
          }
        },
        "24": {
          "who": "Zwantje, 16 ans, Leipzig",
          "text": {
            "fr": "Ce n'est pas sérieux ! Un élève doit bien sécher de temps en temps, sinon tout le monde le trouve barbant. Je ne comprends pas pourquoi les politiciens s'en mêlent avec leurs lois. Cela ne les regarde absolument pas. C'est un sujet qui concerne les professeurs, les élèves et les parents, certainement pas le législateur.",
            "ar": "لا يمكن أن يكون هذا الاقتراح جاداً! يجب على التلميذ أن يتهرب بين الحين والآخر، وإلا اعتبره الجميع شخصاً مملاً. لا أفهم لماذا يتدخل السياسيون بقوانينهم في هذا الأمر، فهذا لا يعنيهم البتة، بل هو شأن خاص بالمعلمين والتلاميذ والآباء وليس بالمشرعين."
          }
        },
        "25": {
          "who": "Christian, 29 ans, Rotenburg",
          "text": {
            "fr": "C'est une mesure salutaire qui va réveiller tout le monde. En tant que société, nous ne pouvons pas tolérer que des règles fondamentales soient bafouées. Je suis convaincu que les élèves subiront alors la pression nécessaire à la maison pour aller en cours. Quand les jeunes commencent dès l'école à s'affranchir des règles, ils deviennent plus tard un problème pour la société ; il est donc juste d'agir tôt.",
            "ar": "هذا إجراء ممتاز من شأنه إيقاظ الجميع. لا يمكننا كمجتمع أن نقف مكتوفي الأيدي أمام انتهاك القواعد الأساسية. وأنا واثق من أن الطلاب سيتعرضون حينها لضغط من أسرهم للالتزام بالدوام المدرسي. فإذا بدأ الشباب في مخالفة القواعد منذ المدرسة فسيتحولون مستقبلاً إلى عبء ومشكلة على المجتمع، ولذلك من الصواب التصدي للأمر مبكراً."
          }
        },
        "26": {
          "who": "Ole, 17 ans, Dortmund",
          "text": {
            "fr": "Dans mon lycée, il y en a qui exagèrent vraiment avec les absences. Ils partent complètement à la dérive. Plus personne ne parvient à les contrôler, ni les parents, ni les profs, personne. Mais je suis persuadé qu'une telle amende les forcerait à réfléchir sérieusement. Ce serait une bonne chose, car ils pourraient ainsi retrouver le chemin de l'école.",
            "ar": "في مدرستي يوجد أشخاص يبالغون للغاية في الغياب والهروب، لدرجة أنهم ينجرفون كلياً. لم يعد أحد قادراً على ضبطهم، لا الآباء ولا المعلمون ولا أحد. لكني أعتقد أن فرض مثل هذه الغرامة سيجبرهم على التفكير ومراجعة أنفسهم، وهذا أمر رائع لأنه قد يساعدهم في العودة إلى مقاعد الدراسة."
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
        "fr": "Lisez les questions 27 à 30 et le document contractuel ci-dessous. Choisissez la bonne réponse a, b ou c.",
        "ar": "اقرأ المهام من 27 إلى 30 والوثيقة المرفقة. اختر الإجابة الصحيحة أ، ب أو ج."
      },
      "situationContext": {
        "fr": "Vous vous informez sur les prestations et conditions de garantie d'un ordinateur PC que vous venez d'acheter.",
        "ar": "تطلع على شروط وبنود الضمان وخدمات ما بعد البيع الخاصة بجهاز حاسوب قمت بشرائه مؤخراً."
      },
      "articles": [
        {
          "title": {
            "fr": "Prestations et conditions de garantie constructeur",
            "ar": "شروط وبنود الضمان وخدمات الصيانة"
          },
          "body": {
            "fr": [
              "Les dispositions suivantes s'appliquent aux systèmes informatiques PC livrés par nos soins :",
              "1) Si l'appareil présente une défectuosité due à un vice de fabrication ou de matériau pendant la période de garantie choisie par vos soins (36 ou 60 mois) à compter de la date d'achat, nous remédierons gratuitement à ce défaut conformément aux conditions énoncées ci-après.",
              "2) La suppression du défaut s'effectue au choix de l'acheteur par réparation ou par échange standard. Les pièces et appareils remplacés deviennent notre propriété.",
              "3) Afin d'éliminer le dysfonctionnement, l'appareil est enlevé gratuitement au domicile du client par une société de transport mandatée par nous. Le système informatique doit être emballé et prêt à l'expédition. En cas de manque de matériel d'emballage, nous vous en fournirons. L'enlèvement a lieu les jours ouvrables (du lundi au vendredi) entre 8h00 et 18h00.",
              "4) La garantie est expressément exclue pour :\na) Les dommages et pertes causés par l'appareil ou son utilisation, ainsi que les avaries imputables aux conditions locales telles qu'erreurs d'installation, incendie, foudre, force majeure, pénétration de liquides, fumée de tabac, gaz corrosifs (brouillard artificiel, spray insecticide), etc.,\nb) Les dégradations causées par l'intervention de tiers non agréés par notre société,\nc) Les dommages résultant du fonctionnement du processeur ou d'autres composants matériels à une fréquence d'horloge supérieure aux spécifications du fabricant (overclocking / surcadençage),\nd) Les dommages causés par le non-respect du mode d'emploi (par ex. raccordement à une tension secteur inadéquate), ainsi que la négligence ou l'usage abusif,\ne) Les appareils affectés à un usage professionnel ou commercial.",
              "5) En cas de panne, veuillez nous contacter pendant la période de 36/60 mois à compter de la date d'achat au 05346 8738024 ou par e-mail à info@pc-service.com. Garantie valable en Allemagne et en Autriche."
            ],
            "ar": [
              "تسري الأحكام والشروط التالية على أجهزة الحاسوب الشخصي الموردة من طرفنا:",
              "1) إذا تعرض الجهاز لعطل ناتج عن عيوب في التصنيع أو المواد خلال فترة الضمان المحددة من قبلكم (36 أو 60 شهراً) من تاريخ الشراء، فإننا نتكفل بإصلاح هذا العيب دون أي مقابل مادي وفقاً للشروط الآتية.",
              "2) يتم إصلاح العطل وفقاً لاختيار المشتري إما عن طريق الصيانة والإصلاح أو الاستبدال بقطعة جديدة، وتؤول ملكية القطع والأجهزة المستبدلة القديمة إلى شركتنا.",
              "3) يتم استلام ونقل الجهاز مجاناً لأغراض الإصلاح عبر شركة شحن ونقل معتمدة من قبلنا، ويجب أن يكون الجهاز مغلفاً وجاهزاً للشحن. وفي حال عدم توفر مواد التغليف سنقوم بتوفيرها لكم. ويتم الاستلام في أيام العمل الرسمية (من الإثنين إلى الجمعة) بين الساعة 8:00 صباحاً و18:00 مساءً.",
              "4) لا يسري الضمان في الحالات الآتية:\nأ) الأضرار والخسائر الناتجة عن الجهاز نفسه أو استخدامه، وكذلك الأضرار العائدة للظروف البيئية المحيطة كأخطاء التركيب، والحرائق، والصواعق، والقوة القاهرة الخارجية، وتسرب السوائل، ودخان التبغ، والغازات المترسبة (كالضباب الاصطناعي ومبيدات الحشرات)،\nب) الأضرار الناتجة عن تدخل أو صيانة أشخاص غير معتمدين من قبلنا،\nج) الأضرار الناتجة عن تشغيل المعالج أو مكونات العتاد الصلب الأخرى بتردد وسرعة أعلى من المحددة من الشركة المصنعة (كسر السرعة Overclocking)،\nد) الأضرار الناتجة عن عدم الالتزام بدليل التشغيل والتعليمات، مثل التوصيل بجهد كهربائي غير متوافق، أو الإهمال وسوء الاستخدام،\nهـ) الأجهزة المستخدمة لأغراض تجارية ومهنية.",
              "5) عند حدوث أي عطل، يرجى التواصل معنا خلال مدة 36 أو 60 شهراً من تاريخ الشراء عبر الهاتف: 05346 8738024 أو البريد الإلكتروني: info@pc-service.com. الضمان سارٍ في: ألمانيا والنمسا."
            ]
          }
        }
      ],
      "questions": {
        "27": {
          "fr": "La garantie constructeur ne s'applique pas lorsque ...",
          "ar": "لا يسري الضمان إذا ...",
          "text": {
            "fr": "La garantie constructeur ne s'applique pas lorsque ...",
            "ar": "لا يسري الضمان إذا ..."
          },
          "options": {
            "fr": [
              "l'on signale trop tardivement la perte de l'ordinateur à la société.",
              "le dommage résulte du non-respect des consignes du mode d'emploi.",
              "le PC a plus d'une année d'ancienneté."
            ],
            "ar": [
              "تأخر العميل في إبلاغ الشركة عن فقدان الحاسوب.",
              "حدث العطل بسبب عدم الالتزام بتعليمات وإرشادات دليل الاستخدام.",
              "تجاوز عمر الحاسوب أكثر من سنة واحدة."
            ]
          }
        },
        "28": {
          "fr": "Les appareils présentant un défaut ...",
          "ar": "الأجهزة التي بها أعطال ...",
          "text": {
            "fr": "Les appareils présentant un défaut ...",
            "ar": "الأجهزة التي بها أعطال ..."
          },
          "options": {
            "fr": [
              "sont enlevés gratuitement à domicile pour réparation.",
              "doivent être obligatoirement rapportés au point de vente par l'acheteur.",
              "peuvent être déposés au magasin uniquement à des horaires stricts."
            ],
            "ar": [
              "يتم سحبها واستلامها مجاناً من منزل العميل لإصلاحها.",
              "يجب على المشتري نقلها وتسليمها بنفسه إلى مكان البيع.",
              "يمكن تسليمها في أوقات محددة لدى نقطة البيع."
            ]
          }
        },
        "29": {
          "fr": "Lorsqu'une panne survient, ...",
          "ar": "عند ظهور عطل في الجهاز، ...",
          "text": {
            "fr": "Lorsqu'une panne survient, ...",
            "ar": "عند ظهور عطل في الجهاز، ..."
          },
          "options": {
            "fr": [
              "les clients du monde entier bénéficient des mêmes droits de garantie.",
              "on peut contacter la société par téléphone ou lui écrire un e-mail.",
              "il est obligatoire de prévenir l'entreprise dans un délai strict de 30 jours."
            ],
            "ar": [
              "يحق للعملاء في جميع أنحاء العالم الاستفادة من خدمات الضمان.",
              "يمكن الاتصال بالشركة هاتفياً أو مراسلتها عبر البريد الإلكتروني.",
              "يتوجب على العميل إبلاغ الشركة في غضون 30 يوماً كحد أقصى."
            ]
          }
        },
        "30": {
          "fr": "La durée de garantie ...",
          "ar": "فترة الضمان ...",
          "text": {
            "fr": "La durée de garantie ...",
            "ar": "فترة الضمان ..."
          },
          "options": {
            "fr": [
              "s'élève à 36 ou 60 mois selon le prix d'achat payé pour le PC.",
              "couvre l'intégralité des dommages subis par l'appareil acheté.",
              "peut être librement choisie par l'acheteur lors de sa commande."
            ],
            "ar": [
              "تبلغ 36 أو 60 شهراً اعتماداً على سعر شراء الحاسوب.",
              "تسري على جميع أنواع الأضرار والتلفيات للجهاز المشترى دون استثناء.",
              "يمكن للمشتري اختيارها وتحديدها بنفسه."
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
        "fr": "Le module Écoute comprend 4 parties. Vous écoutez des enregistrements et répondez aux questions.",
        "ar": "تتكون وحدة الاستماع من أربعة أجزاء. ستستمع إلى تسجيلات صوتية مختلفة وتجيب عن الأسئلة المرافقة."
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
            "fr": "Situations du quotidien : émission de santé, répondeur de théâtre, message vocal de Clara, météo de montagne, calendrier lunaire.",
            "ar": "مواقف من الحياة اليومية: برنامج صحي، استعلامات المسرح، رسالة صوتية من كلارا، النشرة الجوية، وتقويم حركة القمر."
          }
        },
        "2": {
          "title": {
            "fr": "Partie 2 : Parc d'attractions Heide-Park (Une seule écoute)",
            "ar": "الجزء 2: حديقة ملاهي هايده بارك (الاستماع مرة واحدة)"
          },
          "desc": {
            "fr": "Vous écoutez un exposé une seule fois. Répondez aux cinq questions en choisissant a, b ou c.",
            "ar": "ستستمع إلى معلومات لمرة واحدة فقط. أجب عن الأسئلة الخمسة باختيار أ، ب أو ج."
          },
          "context": {
            "fr": "Informations pratiques et consignes données aux visiteurs à l'entrée du plus grand parc de loisirs du nord de l'Allemagne.",
            "ar": "معلومات وإرشادات ترحيبية للزوار في مركز خدمات أكبر مدينة ملاهٍ وترفيه في شمال ألمانيا."
          }
        },
        "3": {
          "title": {
            "fr": "Partie 3 : Discussion à l'arrêt de bus (Une seule écoute)",
            "ar": "الجزء 3: محادثة في محطة الحافلات (الاستماع مرة واحدة)"
          },
          "desc": {
            "fr": "Vous écoutez une conversation une seule fois. Déterminez si les affirmations sont vraies ou fausses.",
            "ar": "ستستمع إلى محادثة لمرة واحدة فقط. حدد ما إذا كانت العبارات صحيحة أم خاطئة."
          },
          "context": {
            "fr": "À un arrêt de bus, Julian et Emma se croisent et discutent de leurs examens, de leur apprentissage et des études de médecine.",
            "ar": "في محطة الحافلات، يلتقي يوليان وإيما ويتجاذبان أطراف الحديث حول التدريب المهني وامتحانات الثانوية والقبول الجامعي في الطب."
          }
        },
        "4": {
          "title": {
            "fr": "Partie 4 : Débat radio « Produits bio en direct du producteur » (Deux écoutes)",
            "ar": "الجزء 4: نقاش إذاعي «أغذية عضوية من المزارع مباشرة» (الاستماع مرتين)"
          },
          "desc": {
            "fr": "Vous écoutez un débat radiophonique deux fois. Attribuez chaque opinion à son auteur : qui dit quoi ?",
            "ar": "ستستمع إلى حوار ونقاش إذاعي مرتين. حدد قائل كل عبارة: من قال ماذا؟"
          },
          "context": {
            "fr": "Le présentateur d'« Umwelt live » s'entretient avec Flavia et Christina, créatrices d'un service de livraison de paniers bio à domicile.",
            "ar": "يناقش مذيع برنامج «البيئة على الهواء» ضيفتيه فلافيا وكريستينا، مؤسستي خدمة توصيل السلال الغذائية العضوية للمنازل."
          }
        }
      },
      "questions": {
        "h1": {
          "fr": "Texte 1 : Vous écoutez un magazine consacré à la santé.",
          "ar": "النص 1: تستمع إلى برنامج ومجلة إذاعية مخصصة للصحة.",
          "text": {
            "fr": "Texte 1 : Vous écoutez un magazine consacré à la santé.",
            "ar": "النص 1: تستمع إلى برنامج ومجلة إذاعية مخصصة للصحة."
          }
        },
        "h2": {
          "fr": "Les participants à cette étude scientifique avaient ...",
          "ar": "كان المشاركون في هذه التجربة العلمية ...",
          "text": {
            "fr": "Les participants à cette étude scientifique avaient ...",
            "ar": "كان المشاركون في هذه التجربة العلمية ..."
          },
          "options": {
            "fr": [
              "plus de 90 ans.",
              "au maximum 83 ans (pas plus de 83 ans).",
              "10 ans."
            ],
            "ar": [
              "تتجاوز أعمارهم 90 عاماً.",
              "لا تزيد أعمارهم عن 83 عاماً.",
              "في العاشرة من عمرهم."
            ]
          }
        },
        "h3": {
          "fr": "Texte 2 : Au théâtre, il y a une représentation chaque jour sans exception.",
          "ar": "النص 2: يقام في المسرح عرض مسرحي في كل يوم من أيام الأسبوع دون انقطاع.",
          "text": {
            "fr": "Texte 2 : Au théâtre, il y a une représentation chaque jour sans exception.",
            "ar": "النص 2: يقام في المسرح عرض مسرحي في كل يوم من أيام الأسبوع دون انقطاع."
          }
        },
        "h4": {
          "fr": "Quel jour y a-t-il une représentation programmée l'après-midi ?",
          "ar": "في أي يوم من الأيام يقام عرض مسرحي في فترة بعد الظهر؟",
          "text": {
            "fr": "Quel jour y a-t-il une représentation programmée l'après-midi ?",
            "ar": "في أي يوم من الأيام يقام عرض مسرحي في فترة بعد الظهر؟"
          },
          "options": {
            "fr": [
              "Le vendredi.",
              "Le samedi.",
              "Le dimanche."
            ],
            "ar": [
              "يوم الجمعة.",
              "يوم السبت.",
              "يوم الأحد."
            ]
          }
        },
        "h5": {
          "fr": "Texte 3 : Elise et Clara ont l'intention de partir en vacances ensemble.",
          "ar": "النص 3: تخطط إليزا وكلارا للسفر وقضاء الإجازة معاً.",
          "text": {
            "fr": "Texte 3 : Elise et Clara ont l'intention de partir en vacances ensemble.",
            "ar": "النص 3: تخطط إليزا وكلارا للسفر وقضاء الإجازة معاً."
          }
        },
        "h6": {
          "fr": "Quel type d'hébergement Clara trouve-t-elle le plus avantageux et préférable ?",
          "ar": "أي خيار إقامة وسكن تجده كلارا الأفضل والأنسب لهما؟",
          "text": {
            "fr": "Quel type d'hébergement Clara trouve-t-elle le plus avantageux et préférable ?",
            "ar": "أي خيار إقامة وسكن تجده كلارا الأفضل والأنسب لهما؟"
          },
          "options": {
            "fr": [
              "Un studio / appartement.",
              "Une location d'appartement de vacances.",
              "Une maison de vacances individuelle."
            ],
            "ar": [
              "استوديو / شقة صغيرة.",
              "شقة عطلات مفروشة.",
              "بيت عطلات مستقل."
            ]
          }
        },
        "h7": {
          "fr": "Texte 4 : La météo va se dégrader pendant le week-end.",
          "ar": "النص 4: سوف يسوء الطقس وتتدهور الأحوال الجوية خلال عطلة نهاية الأسبوع.",
          "text": {
            "fr": "Texte 4 : La météo va se dégrader pendant le week-end.",
            "ar": "النص 4: سوف يسوء الطقس وتتدهور الأحوال الجوية خلال عطلة نهاية الأسبوع."
          }
        },
        "h8": {
          "fr": "Sont principalement annoncés pour vendredi ...",
          "ar": "تتوقع النشرة الجوية ليوم الجمعة أساساً ...",
          "text": {
            "fr": "Sont principalement annoncés pour vendredi ...",
            "ar": "تتوقع النشرة الجوية ليوم الجمعة أساساً ..."
          },
          "options": {
            "fr": [
              "d'épaisses couvertures nuageuses.",
              "de très fortes chutes de neige.",
              "des températures supérieures à 5 degrés."
            ],
            "ar": [
              "غيوم وسحب كثيفة للغاية.",
              "تساقط ثلوج غزيرة.",
              "درجات حرارة تفوق 5 درجات مئوية."
            ]
          }
        },
        "h9": {
          "fr": "Texte 5 : L'auditeur apprend pendant combien d'heures la lune brille dans le ciel.",
          "ar": "النص 5: يوضح المذيع للمستمعين عدد الساعات التي يسطع فيها القمر في السماء.",
          "text": {
            "fr": "Texte 5 : L'auditeur apprend pendant combien d'heures la lune brille dans le ciel.",
            "ar": "النص 5: يوضح المذيع للمستمعين عدد الساعات التي يسطع فيها القمر في السماء."
          }
        },
        "h10": {
          "fr": "Aujourd'hui, ...",
          "ar": "اليوم، ...",
          "text": {
            "fr": "Aujourd'hui, ...",
            "ar": "اليوم، ..."
          },
          "options": {
            "fr": [
              "on est de bonne humeur tout au long de la journée.",
              "le travail professionnel ne demande aucun effort.",
              "il est recommandé de faire du sport avec prudence et modération."
            ],
            "ar": [
              "يكون المزاج رائعاً وطيباً طوال اليوم.",
              "لا يتطلب العمل الوظيفي أي مشقة أو جهد.",
              "ينبغي ممارسة الرياضة بحذر وحماية المفاصل دون مبالغة."
            ]
          }
        },
        "h11": {
          "fr": "Le parc d'attractions Heide-Park est situé en ...",
          "ar": "تقع مدينة الملاهي هايده بارك في ...",
          "text": {
            "fr": "Le parc d'attractions Heide-Park est situé en ...",
            "ar": "تقع مدينة الملاهي هايده بارك في ..."
          },
          "options": {
            "fr": [
              "Heidelberg.",
              "Lunebourg ville.",
              "Allemagne du Nord."
            ],
            "ar": [
              "هايدلبرغ.",
              "مدينة لونيبورغ.",
              "شمال ألمانيا."
            ]
          }
        },
        "h12": {
          "fr": "Pour combien d'attractions peut-on utiliser le pass annuel ?",
          "ar": "كم عدد الألعاب والأنشطة الترفيهية التي تشملها بطاقة الاشتراك السنوي؟",
          "text": {
            "fr": "Pour combien d'attractions peut-on utiliser le pass annuel ?",
            "ar": "كم عدد الألعاب والأنشطة الترفيهية التي تشملها بطاقة الاشتراك السنوي؟"
          },
          "options": {
            "fr": [
              "Pour dix attractions.",
              "Pour douze attractions.",
              "Pour quinze attractions."
            ],
            "ar": [
              "لعشر ألعاب ترفيهية.",
              "لاثنتي عشرة لعبة ترفيهية.",
              "لخمس عشرة لعبة ترفيهية."
            ]
          }
        },
        "h13": {
          "fr": "Quel âge minimum les enfants doivent-ils avoir pour monter à bord des petits bateaux ?",
          "ar": "ما هو الحد الأدنى لعمر الأطفال المسموح لهم بركوب القوارب الصغيرة؟",
          "text": {
            "fr": "Quel âge minimum les enfants doivent-ils avoir pour monter à bord des petits bateaux ?",
            "ar": "ما هو الحد الأدنى لعمر الأطفال المسموح لهم بركوب القوارب الصغيرة؟"
          },
          "options": {
            "fr": [
              "Un an et demi.",
              "Quatre ans.",
              "Huit ans."
            ],
            "ar": [
              "سنة ونصف.",
              "أربع سنوات.",
              "ثماني سنوات."
            ]
          }
        },
        "h14": {
          "fr": "Les chiens ...",
          "ar": "الكلاب ...",
          "text": {
            "fr": "Les chiens ...",
            "ar": "الكلاب ..."
          },
          "options": {
            "fr": [
              "sont formellement interdits dans les cabines des manèges.",
              "bénéficient d'un guide d'accompagnement spécialisé.",
              "doivent patienter dans des boutiques réservées."
            ],
            "ar": [
              "غير مسموح بها إطلاقاً داخل مقصورات وعربات الألعاب.",
              "يوفر لها مرشد ومرافق خاص بها.",
              "يجب أن تنتظر في متاجر مخصصة لها."
            ]
          }
        },
        "h15": {
          "fr": "À quelle vitesse roule le bobsleigh suisse ?",
          "ar": "ما هي السرعة التي تنطلق بها عربة التزلج السويسرية؟",
          "text": {
            "fr": "À quelle vitesse roule le bobsleigh suisse ?",
            "ar": "ما هي السرعة التي تنطلق بها عربة التزلج السويسرية؟"
          },
          "options": {
            "fr": [
              "27 kilomètres par heure.",
              "166 kilomètres par heure.",
              "50 kilomètres par heure."
            ],
            "ar": [
              "27 كيلومتراً في الساعة.",
              "166 كيلومتراً في الساعة.",
              "50 كيلومتراً في الساعة."
            ]
          }
        },
        "h16": {
          "fr": "Emma et Julian sont membres du même club de sport.",
          "ar": "إيما ويوليان عضوان في نفس النادي الرياضي.",
          "text": {
            "fr": "Emma et Julian sont membres du même club de sport.",
            "ar": "إيما ويوليان عضوان في نفس النادي الرياضي."
          }
        },
        "h17": {
          "fr": "Emma est déçue de sa formation d'apprentissage.",
          "ar": "تشعر إيما بخيبة أمل وإحباط من تدريبها المهني.",
          "text": {
            "fr": "Emma est déçue de sa formation d'apprentissage.",
            "ar": "تشعر إيما بخيبة أمل وإحباط من تدريبها المهني."
          }
        },
        "h18": {
          "fr": "À l'école, Emma n'était pas une bonne élève.",
          "ar": "لم تكن إيما طالبة مجتهدة ومتفوقة في المدرسة.",
          "text": {
            "fr": "À l'école, Emma n'était pas une bonne élève.",
            "ar": "لم تكن إيما طالبة مجتهدة ومتفوقة في المدرسة."
          }
        },
        "h19": {
          "fr": "Julian n'a pas obtenu de bonnes notes à son baccalauréat.",
          "ar": "لم يحصل يوليان على درجات جيدة في امتحانات الثانوية العامة.",
          "text": {
            "fr": "Julian n'a pas obtenu de bonnes notes à son baccalauréat.",
            "ar": "لم يحصل يوليان على درجات جيدة في امتحانات الثانوية العامة."
          }
        },
        "h20": {
          "fr": "L'examen du baccalauréat est devenu plus facile qu'auparavant.",
          "ar": "أصبحت امتحانات الثانوية العامة أسهل وأبسط مما كانت عليه في الماضي.",
          "text": {
            "fr": "L'examen du baccalauréat est devenu plus facile qu'auparavant.",
            "ar": "أصبحت امتحانات الثانوية العامة أسهل وأبسط مما كانت عليه في الماضي."
          }
        },
        "h21": {
          "fr": "Julian n'a pas obtenu de place d'études en médecine cette année.",
          "ar": "لم يحصل يوليان على مقعد دراسي في كلية الطب هذا العام.",
          "text": {
            "fr": "Julian n'a pas obtenu de place d'études en médecine cette année.",
            "ar": "لم يحصل يوليان على مقعد دراسي في كلية الطب هذا العام."
          }
        },
        "h22": {
          "fr": "Julian a l'intention de faire un stage à l'hôpital seulement plus tard.",
          "ar": "ينوي يوليان أداء تدريب عملي في المستشفى في وقت لاحق في المستقبل فقط.",
          "text": {
            "fr": "Julian a l'intention de faire un stage à l'hôpital seulement plus tard.",
            "ar": "ينوي يوليان أداء تدريب عملي في المستشفى في وقت لاحق في المستقبل فقط."
          }
        },
        "h23": {
          "fr": "Les femmes s'intéressent davantage à la résolution des problèmes pratiques que les hommes.",
          "ar": "تهتم النساء بحل المشكلات العملية التطبيقية أكثر من الرجال.",
          "text": {
            "fr": "Les femmes s'intéressent davantage à la résolution des problèmes pratiques que les hommes.",
            "ar": "تهتم النساء بحل المشكلات العملية التطبيقية أكثر من الرجال."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        },
        "h24": {
          "fr": "L'initiative « Bio-Abo » aide concrètement les femmes à gagner du temps.",
          "ar": "تساعد مبادرة «الاشتراك العضوي» النساء على توفير الوقت عملياً.",
          "text": {
            "fr": "L'initiative « Bio-Abo » aide concrètement les femmes à gagner du temps.",
            "ar": "تساعد مبادرة «الاشتراك العضوي» النساء على توفير الوقت عملياً."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        },
        "h25": {
          "fr": "Pour la majorité des gens, les produits bio ne représentent pas encore un enjeu majeur.",
          "ar": "بالنسبة لمعظم الناس، لا تزال الأغذية العضوية موضوعاً غير ذي بال.",
          "text": {
            "fr": "Pour la majorité des gens, les produits bio ne représentent pas encore un enjeu majeur.",
            "ar": "بالنسبة لمعظم الناس، لا تزال الأغذية العضوية موضوعاً غير ذي بال."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        },
        "h26": {
          "fr": "Les produits biologiques sont devenus plus abordables et moins chers.",
          "ar": "أصبحت المنتجات العضوية أرخص ثمناً وفي متناول اليد.",
          "text": {
            "fr": "Les produits biologiques sont devenus plus abordables et moins chers.",
            "ar": "أصبحت المنتجات العضوية أرخص ثمناً وفي متناول اليد."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        },
        "h27": {
          "fr": "Certaines variétés de légumes originaires de la région de Berne demeurent inconnues du grand public.",
          "ar": "بعض أصناف الخضار المزروعة في منطقة برن لا تزال مجهولة للكثيرين.",
          "text": {
            "fr": "Certaines variétés de légumes originaires de la région de Berne demeurent inconnues du grand public.",
            "ar": "بعض أصناف الخضار المزروعة في منطقة برن لا تزال مجهولة للكثيرين."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        },
        "h28": {
          "fr": "Pour agir en faveur de l'environnement, il faut privilégier la consommation de produits régionaux.",
          "ar": "من يرغب في خدمة البيئة وحمايتها، عليه استهلاك المنتجات الإقليمية والمحلية.",
          "text": {
            "fr": "Pour agir en faveur de l'environnement, il faut privilégier la consommation de produits régionaux.",
            "ar": "من يرغب في خدمة البيئة وحمايتها، عليه استهلاك المنتجات الإقليمية والمحلية."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        },
        "h29": {
          "fr": "La présence d'une concurrence sur le marché est perçue de façon très positive.",
          "ar": "وجود منافسين وشركات أخرى في السوق يعد أمراً إيجابياً ومحفزاً.",
          "text": {
            "fr": "La présence d'une concurrence sur le marché est perçue de façon très positive.",
            "ar": "وجود منافسين وشركات أخرى في السوق يعد أمراً إيجابياً ومحفزاً."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        },
        "h30": {
          "fr": "Les petites entreprises respectent mieux les impératifs écologiques que les grands groupes.",
          "ar": "الشركات والمبادرات الصغيرة أكثر فائدة ومحافظة على البيئة.",
          "text": {
            "fr": "Les petites entreprises respectent mieux les impératifs écologiques que les grands groupes.",
            "ar": "الشركات والمبادرات الصغيرة أكثر فائدة ومحافظة على البيئة."
          },
          "options": {
            "fr": [
              "Le modérateur",
              "Flavia",
              "Christina"
            ],
            "ar": [
              "المذيع (المنسق)",
              "فلافيا",
              "كريستينا"
            ]
          }
        }
      }
    }
  }
}
