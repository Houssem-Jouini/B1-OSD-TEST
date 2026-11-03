# -*- coding: utf-8 -*-
"""
Translations (Arabic and French) for Modellsatz 19.
Strictly adheres to all invariants:
- articles body is a dict with array of paragraph strings
- mcq options is a dict with array of 3 option strings
- ads contains both lowercase and uppercase keys
- part 3 questions have both top-level ar/fr and text: { ar, fr }
- part 4 letters maps question IDs to { who, text: { ar, fr } }
- part 5 translates rules
- part 6 provides teile and questions h1-h30 with options
"""

TRANSLATIONS = {
  "parts": {
    "1": {
      "instructions": {
        "ar": "اقرأ النص والمهام من 1 إلى 6 المتعلقة به. اختر: هل العبارات صحيحة أم خاطئة؟",
        "fr": "Lisez le texte et les questions 1 à 6 correspondantes. Choisissez : les affirmations sont-elles vraies ou fausses ?"
      },
      "articles": [
        {
          "heading": {
            "ar": "حفلي الموسيقي لفرقة طوكيو هوتيل في إرفورت",
            "fr": "Mon concert de Tokio Hotel à Erfurt"
          },
          "sub": {
            "ar": "كيارا فينتسل · 10 مارس",
            "fr": "Kiara Wenzel · 10 mars"
          },
          "body": {
            "ar": [
              "مرحباً بجميع عشاق فرقة طوكيو هوتيل، لقد حضرت أنا وصديقتي حفل فرقة طوكيو هوتيل في مدينة إرفورت. كنا قد اشترينا التذاكر في وقت مبكر جداً. قبل موعد الحفل بأسابيع طويلة، كنت في غاية السعادة والحماس. في السادس من مارس، استيقظت في تمام الساعة الخامسة صباحاً، وتوجهت إلى منزل صديقتي ثم سافرنا معاً إلى إرفورت. عندما وصلنا أمام قاعة تورينغن في حوالي الساعة الثامنة صباحاً، تفاجأنا ولحسن الحظ بأنه لم يكن هناك سوى نحو 20 شخصاً فقط. وكان ذلك يعني بالنسبة لنا أننا سنكون ضمن المجموعة الأولى في الدخول، وبالتالي ضمنا الوقوف في الصف الأول.",
              "بعد ساعات طويلة لا تنتهي من الانتظار، في حوالي الساعة الثانية عشرة ظهراً، وصلت بعض فرق التلفزيون وسألونا عمن نعتبره المفضل لدينا، وكم من الوقت نقف هنا، وغير ذلك. مرت الساعة الأخيرة قبل فتح الأبواب وكأنها دهر. وخلال ذلك الوقت تم إبلاغنا بكيفية سير الأمور وتنظيم الدخول. وأخيراً حانت اللحظة المنتظرة؛ قبل ثلاثة أرباع الساعة من موعد الدخول الرسمي (كانت الساعة 16:45) سمحوا لنا بالدخول إلى القاعة. ركضت أنا وصديقتي على الفور نحو المسرح ووقفنا أمامه مباشرة. والآن بدأ الانتظار مجدداً، ولكن الأجواء داخل الصالة كانت ممتعة للغاية ومسلية؛ تبادلنا الحديث مع رجال الأمن ومزحنا معهم.",
              "ثم انطلق الحفل! خيّم الظلام على القاعة، وصرخ الجميع. والآن صعد الفتيان إلى المسرح. عندما بدأ توم في العزف، لم يعد هناك ما يوقف الحماس. كانت الأجواء جنونية بكل ما تحمله الكلمة من معنى!! ثم عندما صعد بيل إلى المسرح، تعالت الصيحات بصوت أعلى وأقوى. وبدا كعادته في غاية الروعة والجاذبية. وبعد عدة أغانٍ متتالية، بدأ إخراج المزيد والمزيد من الفتيات بسبب الإغماء. ولحسن الحظ لم أفقد وعيي. ثم تقدم جورج وتوم إلى مقدمة المسرح. وفكرت في نفسي: في الواقع هم أكثر وسامة وبهاءً من الشاشة، وقبل كل شيء... كانوا قريبين منا إلى هذا الحد!!!",
              "عندما انتهى الحفل، تقدموا جميعاً إلى حافة المسرح ولمسوا أيدينا. نعم، لقد نجحت! لمست أيدي الأعضاء الأربعة جميعاً. كنت في قمة السعادة والنشوة. لن أنسى هذا الحفل أبداً طوال حياتي. شكراً لكم يا شباب. وأطيب التحيات لكل المعجبين والمعجبات!!!!!!"
            ],
            "fr": [
              "Salut aux fans de TH ! Mon amie et moi avons assisté au concert de Tokio Hotel à Erfurt. Nous avions acheté nos billets bien à l'avance. Des semaines avant le concert, j'étais déjà folle de joie. Le 6 mars, je me suis levée à 5 heures du matin, je suis passée prendre mon amie et nous sommes parties ensemble pour Erfurt. Arrivées vers 8 heures devant la Thüringenhalle, nous avons été très étonnées de voir qu'il n'y avait qu'une vingtaine de personnes. Cela signifiait que nous ferions partie du premier groupe et que le premier rang nous était assuré.",
              "Après d'interminables heures d'attente, vers midi, des équipes de télévision sont arrivées et nous ont demandé qui était notre membre préféré, depuis combien de temps nous attendions, etc. La dernière heure avant l'ouverture nous a paru infinie. Pendant ce temps, on nous a expliqué le déroulement des opérations. Le moment tant attendu est enfin arrivé : trois quarts d'heure avant l'ouverture officielle (il était 16 h 45), nous avons pu entrer dans la salle. Mon amie et moi avons couru droit vers la scène et nous nous sommes postées juste devant. Il a fallu attendre à nouveau, mais l'ambiance était très sympa : on discutait avec les agents de sécurité en faisant des blagues.",
              "Puis le spectacle a commencé. L'obscurité s'est faite dans la salle. Tout le monde a hurlé. Les garçons sont entrés en scène. Dès que Tom a commencé à jouer de la guitare, c'était l'explosion totale ! L'ambiance était tout simplement incroyable ! Puis, quand Bill est monté sur scène, les cris ont redoublé d'intensité. Il avait une fois de plus un look d'enfer. De nombreux morceaux plus tard, on a commencé à évacuer de plus en plus de filles évanouies. Heureusement, je n'ai pas tourné de l'œil. Ensuite Georg et Tom se sont avancés vers nous. Je me suis dit : en vrai, ils sont encore plus beaux qu'en photo et surtout… ils étaient si proches de nous !!!",
              "À la fin du concert, ils sont tous venus au bord de la scène pour nous toucher les mains. Oui, pari réussi ! J'ai touché les mains de tous les quatre. J'étais sur un nuage de bonheur. Je n'oublierai jamais ce concert. Merci les gars ! Grosses bises à tous les fans !!!!!!"
            ]
          }
        }
      ],
      "example": {
        "text": {
          "ar": "لم تذهب كيارا وحدها إلى الحفل الموسيقي.",
          "fr": "Kiara n'est pas allée seule au concert."
        }
      },
      "questions": {
        "1": {
          "text": {
            "ar": "اضطرت كيارا للانتظار وقتاً طويلاً أمام قاعة الحفلات.",
            "fr": "Kiara a dû attendre longtemps devant la salle de concert."
          }
        },
        "2": {
          "text": {
            "ar": "أجرى مراسلو التلفزيون مقابلة مع أعضاء الفرقة الموسيقية.",
            "fr": "Le groupe a été interviewé par des journalistes de télévision."
          }
        },
        "3": {
          "text": {
            "ar": "نجحت كيارا أخيراً في الوقوف في الصفوف الأمامية تماماً.",
            "fr": "Kiara a finalement réussi à se placer tout devant."
          }
        },
        "4": {
          "text": {
            "ar": "عندما خيّم الظلام على القاعة، صرخ الجميع من الخوف والرعب.",
            "fr": "Quand la salle est devenue sombre, tout le monde a crié de peur."
          }
        },
        "5": {
          "text": {
            "ar": "صعد بيل إلى المسرح وكان هو من يصرخ بصوت أعلى من الجميع.",
            "fr": "Bill est entré sur scène et c'est lui qui a crié le plus fort."
          }
        },
        "6": {
          "text": {
            "ar": "قام أعضاء الفرقة الموسيقية بمصافحة كيارا ولمس يدها.",
            "fr": "Les membres du groupe ont serré la main de Kiara."
          }
        }
      }
    },
    "2": {
      "instructions": {
        "ar": "اقرأ النص الصحفي والمهام من 7 إلى 9 المتعلقة به. اختر لكل مهمة الحل الصحيح a أو b أو c.",
        "fr": "Lisez le texte de presse et les questions 7 à 9 correspondantes. Choisissez pour chaque question la bonne solution a, b ou c."
      },
      "articles": [
        {
          "heading": {
            "ar": "هل تستطيع الحيوانات أن تحلم؟",
            "fr": "Les animaux peuvent-ils rêver ?"
          },
          "body": {
            "ar": [
              "كل من يراقب الإنسان والكلاب والقطط أثناء نومها يلاحظ تشابهات واضحة؛ فالحيوانات تتحرك أيضاً وتصدر أصواتاً خلال النوم. فهل تحلم الحيوانات إذاً؟",
              "عند إيقاظ البشر خلال مرحلة النوم التي تكاد لا تتحرك فيها العضلات وتكون فيها الأعين فقط في حالة نشاط مستمر، وهي ما يُعرف بنوم حركة العين السريعة (REM)، يُفيدون بأنهم كانوا للتو يرون حلماً. فهل ينطبق هذا الأمر أيضاً على الحيوانات عندما تتحرك أعينها بسرعة فائقة أثناء النوم؟ المؤكد علمياً هو أن الكلاب أو القطط أو حيوانات الغوريلا تقضي ما بين 10 إلى 25 بالمائة من وقت راحتها في مرحلة نوم حركة العين السريعة، وهي النسبة المئوية ذاتها المسجلة لدى بني البشر. ويقول أحد علماء أبحاث النوم: «من منظور تطوري، يبدو من المرجح جداً أن القدرة على الحلم قد نشأت وتطورت بيولوجياً قبل ظهور الإنسان بوقت طويل». وتكمن الصعوبة الراهنة في إثبات هذه النظرية بشكل قاطع.",
              "وفي إحدى التجارب المعملية، تمت مراقبة نوم قطة في مرحلة حركة العين السريعة بعد إعطائها عقاراً يسمح لبقية جسدها بالحركة بحرية. وأثناء تلك المرحلة، قامت القطة بالدوران في القفص والزمجرة ونفش فرائها، وكان يبدو كأنها تخوض معركة ضد عدو مفترس. وحتى رائحة الطعام لم تفلح في إيقاظها، فقد كانت غارقة في نوم عميق. وعلى الرغم من هذه الملاحظات العلمية، تبقى المعضلة قائمة في أن الحيوانات تعجز عن إخبارنا بما يدور في أحلامها، ولذلك لا يزال الشك يساور العلماء حول ما إذا كانت الحيوانات تحلم بالفعل كما يحلم الإنسان."
            ],
            "fr": [
              "Quiconque observe un être humain, un chien ou un chat en train de dormir constate des ressemblances frappantes : les animaux bougent aussi et émettent des sons pendant leur sommeil. Les animaux rêvent-ils donc ?",
              "Lorsqu'on réveille des personnes dans la phase où les muscles sont immobiles et seuls les yeux s'activent – le sommeil dit à mouvements oculaires rapides ou phase REM –, elles rapportent qu'elles faisaient un rêve. En va-t-il de même pour les animaux lorsque leurs yeux s'agitent vivement sous leurs paupières ? Une certitude : les chiens, les chats ou les gorilles passent entre 10 et 25 % de leur temps de repos en sommeil paradoxal (REM), soit exactement la même proportion que l'être humain. « D'un point de vue évolutif, il est probable que la faculté de rêver s'est développée bien avant l'apparition de l'homme », souligne un chercheur spécialiste du sommeil. La difficulté consiste aujourd'hui à prouver scientifiquement cette théorie.",
              "Lors d'une expérience, on a observé le sommeil paradoxal d'une chatte après lui avoir administré une molécule lui permettant de mouvoir le reste de son corps. Pendant cette phase REM, la chatte tournait en rond dans sa cage, crachait et hérissait ses poils, donnant l'impression de lutter contre un ennemi imaginaire. Même l'odeur de nourriture ne put la réveiller, tant son sommeil était profond. Malgré ces observations, le problème persiste : les animaux ne peuvent nous raconter leurs songes. On continue donc d'ignorer s'ils rêvent réellement à la façon des humains."
            ]
          }
        }
      ],
      "example": {
        "text": {
          "ar": "القطط ...",
          "fr": "Les chats..."
        },
        "options": {
          "ar": [
            "تستطيع القتال أثناء الحلم.",
            "تنام لنفس عدد ساعات نوم البشر.",
            "تحرك أعينها أثناء النوم."
          ],
          "fr": [
            "peuvent se battre en rêve.",
            "dorment aussi longtemps que les humains.",
            "bougent leurs yeux pendant leur sommeil."
          ]
        }
      },
      "questions": {
        "7": {
          "text": {
            "ar": "يدور هذا النص حول مسألة ...",
            "fr": "Dans ce texte, il s'agit de savoir..."
          },
          "options": {
            "ar": [
              "ما إذا كانت الحيوانات تحلم مثل البشر.",
              "ما إذا كانت الحيوانات تنام بشكل أفضل من البشر.",
              "لماذا تمر الحيوانات أيضاً بمرحلة نوم حركة العين السريعة."
            ],
            "fr": [
              "si les animaux rêvent comme les humains.",
              "si les animaux dorment mieux que les humains.",
              "pourquoi les animaux ont aussi une phase REM pendant leur sommeil."
            ]
          }
        },
        "8": {
          "text": {
            "ar": "في مرحلة نوم حركة العين السريعة (REM) ...",
            "fr": "Pendant la phase de sommeil paradoxal (REM)..."
          },
          "options": {
            "ar": [
              "تتحرك دائماً جميع أجزاء الجسم.",
              "تتحرك العينان بنشاط وسرعة.",
              "لا ينام المرء نوماً عميقاً وجيداً."
            ],
            "fr": [
              "toutes les parties du corps bougent constamment.",
              "les yeux bougent.",
              "on ne dort pas très bien."
            ]
          }
        },
        "9": {
          "text": {
            "ar": "حيوانات الغوريلا ...",
            "fr": "Les gorilles..."
          },
          "options": {
            "ar": [
              "تنام نوماً أكثر اضطراباً من البشر.",
              "تمتلك من حيث النسبة المئوية مرحلة نوم حركة عين سريعة مساوية للإنسان.",
              "لا يمكن فحصها وإجراء الدراسات عليها."
            ],
            "fr": [
              "dorment de manière plus agitée que les humains.",
              "ont proportionnellement une phase REM aussi longue que les humains.",
              "ne peuvent pas être examinés."
            ]
          }
        }
      },
      "instructions2": {
        "ar": "اقرأ النص الصحفي والمهام من 10 إلى 12 المتعلقة به. اختر لكل مهمة الحل الصحيح a أو b أو c.",
        "fr": "Lisez le texte de presse et les questions 10 à 12 correspondantes. Choisissez pour chaque question la bonne solution a, b ou c."
      },
      "articles2": [
        {
          "heading": {
            "ar": "التعرق في المدرسة!",
            "fr": "Transpirer à l'école !"
          },
          "body": {
            "ar": [
              "في إحدى المدارس الشاملة في مدينة أولو الواقعة شمال العاصمة الفنلندية هلسنكي، أجرى العلماء والمعلمون مؤخراً اختباراً مثيراً مع طلابهم: حيث قاموا بوضع عربات ساونا متنقلة في باحة المدرسة. وهناك جعلوا التلاميذ يتعرقون جيداً في الصباح الباكر قبل انطلاق الحصص الدراسية، لمدة تتراوح بين 10 إلى 15 دقيقة وفقاً للياقة واستعداد كل طفل. وبعد ذلك فقط يبدأ التلاميذ في دراسة مواد الرياضيات والفنلندية والإنجليزية والفيزياء وغيرها من المواد. وجاءت النتيجة مفاجئة للجميع؛ حيث تمكن 314 طالباً من أصل 340 تلميذاً شاركوا في هذه التجربة التي امتدت ستة أشهر من تحسين درجاتهم المدرسية بشكل ملحوظ! بل إن بعض الطلاب رفعوا تحصيلهم بمقدار درجة كاملة.",
              "ويوضح أرتو هاكينن، الباحث في جامعة هلسنكي: «إن الجلوس في الساونا يحفز الدورة الدموية وتدفق الدم، مما يؤدي بدوره إلى رفع قدرة الاستيعاب والتركيز. ويمكن القول ببساطة إن الطلاب يصبحون أكثر يقظة ونشاطاً واستعداداً لتلقي المعرفة والمعلومات». كما أن هذه النتائج المبهرة فاجأت حتى خبراء التربية والتعليم. ومن المقرر الآن تعميم تجربة عربات الساونا في مدارس أخرى بشتى أنحاء البلاد. وإذا ما أثبتت نجاحها على نطاق واسع، فسيتم إدراج التعرق الصباحي رسمياً ضمن الجدول المدرسي الأسبوعي في فنلندا."
            ],
            "fr": [
              "Dans une école polyvalente d'Oulu, au nord d'Helsinki, des chercheurs et des enseignants ont récemment mené une expérience inédite auprès de leurs élèves : ils ont installé des roulottes-saunas mobiles dans la cour de récréation. Les élèves devaient y transpirer de bon matin avant les cours, pendant 10 à 15 minutes selon leur forme physique, avant d'aborder les cours de mathématiques, de finnois, d'anglais ou de physique. Le résultat a stupéfié tout le monde : 314 des 340 élèves ayant participé à cet essai de six mois ont nettement amélioré leurs notes, certains progressant même d'une note entière !",
              "« Rester dans le sauna stimule la circulation sanguine, ce qui accroît la capacité de concentration. Les élèves sont tout simplement plus éveillés et bien plus disposés à enregistrer les connaissances », explique Arttu Häkkinen de l'université d'Helsinki. De tels résultats ont surpris les pédagogues eux-mêmes. L'expérience des roulottes-saunas doit désormais être étendue à d'autres établissements du pays. En cas de succès confirmé, la séance de transpiration matinale pourrait être intégrée officiellement aux emplois du temps des écoles finlandaises."
            ]
          }
        }
      ],
      "questions2": {
        "10": {
          "text": {
            "ar": "يتناول هذا النص مسألة ...",
            "fr": "Ce texte explique principalement..."
          },
          "options": {
            "ar": [
              "لماذا يحصل الطلاب الفنلنديون على درجات دراسية ممتازة.",
              "ما هو تأثير حمام الساونا على التلاميذ واستيعابهم.",
              "لماذا يحب الطلاب الذهاب إلى الساونا والاستمتاع بها."
            ],
            "fr": [
              "pourquoi les élèves finlandais ont de si bonnes notes.",
              "quel est l'effet du sauna sur les élèves.",
              "pourquoi les élèves aiment aller au sauna."
            ]
          }
        },
        "11": {
          "text": {
            "ar": "الطلاب في مدينة أولو ...",
            "fr": "Les élèves d'Oulu..."
          },
          "options": {
            "ar": [
              "تمكنوا من التركيز بشكل أفضل بعد قضاء وقت في الساونا.",
              "واجهوا مشاكل أقل بسبب الساونا.",
              "كان عليهم البقاء في الساونا لمدة 15 دقيقة على الأقل."
            ],
            "fr": [
              "ont pu mieux se concentrer après la séance de sauna.",
              "ont eu moins de problèmes grâce au sauna.",
              "devaient rester au moins 15 minutes dans le sauna."
            ]
          }
        },
        "12": {
          "text": {
            "ar": "التجربة المدرسية ...",
            "fr": "L'expérience scolaire..."
          },
          "options": {
            "ar": [
              "أثبتت صحة نظرية علمية سابقة.",
              "أثرت على درجات الطلاب بشكل طفيف وغير ملحوظ.",
              "استمرت لمدة نصف عام كامل."
            ],
            "fr": [
              "a validé une théorie.",
              "n'a que très peu influencé les notes des élèves.",
              "a duré six mois (une demi-année)."
            ]
          }
        }
      }
    },
    "3": {
      "instructions": {
        "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j من وسائل إعلام مختلفة باللغة الألمانية. اختر: أي إعلان يناسب كل موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. الإعلان المستخدم في المثال لم يعد متاحاً. هناك موقف ليس له أي إعلان مناسب؛ في هذه الحالة اختر الرقم 0.",
        "fr": "Lisez les situations 13 à 19 et les annonces a à j issues de médias germanophones. Choisissez : quelle annonce correspond à quelle situation ? Chaque annonce ne peut être utilisée qu'une seule fois. L'annonce de l'exemple ne peut plus servir. Pour une situation, il n'existe aucune annonce adéquate ; inscrivez alors 0."
      },
      "situationsIntro": {
        "ar": "المدرسة، الدرجات الجيدة، دروس التقوية: كل هذه موضوعات تشغل بال معارفك في الوقت الحالي لأسباب متباينة، وهم يبحثون عن حلول مناسبة.",
        "fr": "École, bonnes notes, cours particuliers : autant de sujets qui préoccupent beaucoup vos connaissances actuellement pour diverses raisons, et ils recherchent des solutions."
      },
      "ads": {
        "a": {
          "ar": "مطلوب مشرفون ومشرفات لأنشطة المدارس النهارية المفتوحة والمدارس الثانوية بنظام المكافأة: رياضة، رقص، فن وإبداع، طبخ، موسيقى، مسرح، ومساعدة في الواجبات المدرسية. إرسال الطلبات بالبريد الإلكتروني إلى جمعية دعم التعليم ببرلين.",
          "fr": "Recherche d'animateurs et animatrices d'ateliers périscolaires sous statut d'honoraires pour écoles ouvertes toute la journée et lycées : sport, danse, arts, cuisine, musique, théâtre, aide aux devoirs. Candidatures à adresser par courriel à l'Association de soutien éducatif de Berlin."
        },
        "A": {
          "ar": "مطلوب مشرفون ومشرفات لأنشطة المدارس النهارية المفتوحة والمدارس الثانوية بنظام المكافأة: رياضة، رقص، فن وإبداع، طبخ، موسيقى، مسرح، ومساعدة في الواجبات المدرسية. إرسال الطلبات بالبريد الإلكتروني إلى جمعية دعم التعليم ببرلين.",
          "fr": "Recherche d'animateurs et animatrices d'ateliers périscolaires sous statut d'honoraires pour écoles ouvertes toute la journée et lycées : sport, danse, arts, cuisine, musique, théâtre, aide aux devoirs. Candidatures à adresser par courriel à l'Association de soutien éducatif de Berlin."
        },
        "b": {
          "ar": "رياضيات، تعلم ذكي للصفوف 9-12. قرص مدمج (CD-ROM) من شركة S.A.E. مع هذا البرنامج تتقن الرياضيات بسهولة: كامل المنهج التعليمي، تمارين وتدريبات، وشروحات تفصيلية للحلول.",
          "fr": "Mathématiques, apprentissage intelligent de la 9e à la 12e classe. 1 CD-ROM édité par S.A.E. Maîtrisez le programme de maths sans difficulté : cours complet, exercices d'entraînement et solutions expliquées pas à pas."
        },
        "B": {
          "ar": "رياضيات، تعلم ذكي للصفوف 9-12. قرص مدمج (CD-ROM) من شركة S.A.E. مع هذا البرنامج تتقن الرياضيات بسهولة: كامل المنهج التعليمي، تمارين وتدريبات، وشروحات تفصيلية للحلول.",
          "fr": "Mathématiques, apprentissage intelligent de la 9e à la 12e classe. 1 CD-ROM édité par S.A.E. Maîtrisez le programme de maths sans difficulté : cours complet, exercices d'entraînement et solutions expliquées pas à pas."
        },
        "c": {
          "ar": "مطلوب دروس تقوية في اللاتينية والرياضيات، للصف العاشر، طالبة مدرسية أو طالبة جامعية. هاتف: 030/09115025.",
          "fr": "Recherche cours de soutien en latin et mathématiques pour élève de 10e classe, par lycéenne ou étudiante. Tél. 030/09115025."
        },
        "C": {
          "ar": "مطلوب دروس تقوية في اللاتينية والرياضيات، للصف العاشر، طالبة مدرسية أو طالبة جامعية. هاتف: 030/09115025.",
          "fr": "Recherche cours de soutien en latin et mathématiques pour élève de 10e classe, par lycéenne ou étudiante. Tél. 030/09115025."
        },
        "d": {
          "ar": "نقدم دروس تقوية فردية في المنزل لطلاب المرحلة الثانوية / إعداد خاص لامتحانات البكالوريا (Abitur) في مادة اللغة الألمانية، واللغات القديمة والحديثة. هاتف: 034/8597558.",
          "fr": "Cours particuliers à domicile pour lycéens / préparation spécifique au baccalauréat en allemand, langues anciennes et vivantes. Tél. 034 / 85 97 558."
        },
        "D": {
          "ar": "نقدم دروس تقوية فردية في المنزل لطلاب المرحلة الثانوية / إعداد خاص لامتحانات البكالوريا (Abitur) في مادة اللغة الألمانية، واللغات القديمة والحديثة. هاتف: 034/8597558.",
          "fr": "Cours particuliers à domicile pour lycéens / préparation spécifique au baccalauréat en allemand, langues anciennes et vivantes. Tél. 034 / 85 97 558."
        },
        "e": {
          "ar": "معهد شولرهيلفه برن يبحث عن معلمين ومعلمات لدروس التقوية (مع شهادة جامعية مكتملة) لمادتي الرياضيات واللاتينية. هاتف: +41(0)319234444.",
          "fr": "L'institut Schülerhilfe de Berne recherche des enseignants de soutien (diplômés universitaires) pour les mathématiques et le latin. Tél. +41(0)3192344 44."
        },
        "E": {
          "ar": "معهد شولرهيلفه برن يبحث عن معلمين ومعلمات لدروس التقوية (مع شهادة جامعية مكتملة) لمادتي الرياضيات واللاتينية. هاتف: +41(0)319234444.",
          "fr": "L'institut Schülerhilfe de Berne recherche des enseignants de soutien (diplômés universitaires) pour les mathématiques et le latin. Tél. +41(0)3192344 44."
        },
        "f": {
          "ar": "رعاية ومتابعة الواجبات المدرسية بمقر اتحاد حماية الأطفال في برلين، من الإثنين إلى الخميس. جميع خدماتنا مجانية تماماً للمحتاجين إليها. هاتف: 02162721798.",
          "fr": "Aide aux devoirs dans les locaux de l'Association allemande de protection de l'enfance (DKSB) à Berlin-Mitte. Toutes nos offres sont entièrement gratuites. Tél. 021 62 72 17 98."
        },
        "F": {
          "ar": "رعاية ومتابعة الواجبات المدرسية بمقر اتحاد حماية الأطفال في برلين، من الإثنين إلى الخميس. جميع خدماتنا مجانية تماماً للمحتاجين إليها. هاتف: 02162721798.",
          "fr": "Aide aux devoirs dans les locaux de l'Association allemande de protection de l'enfance (DKSB) à Berlin-Mitte. Toutes nos offres sont entièrement gratuites. Tél. 021 62 72 17 98."
        },
        "g": {
          "ar": "درجات جيدة ببساطة! دروس تقوية احترافية لجميع المراحل والصفوف وأنواع المدارس. جودة معتمدة ومفحوصة من هيئة TÜV. برلين-كرويتسبرغ. هاتف: 030/14008945.",
          "fr": "De bonnes notes en toute simplicité ! Soutien scolaire professionnel pour tous niveaux et filières. Qualité certifiée conforme par le TÜV. Berlin-Kreuzberg. Tél. 030/14008945."
        },
        "G": {
          "ar": "درجات جيدة ببساطة! دروس تقوية احترافية لجميع المراحل والصفوف وأنواع المدارس. جودة معتمدة ومفحوصة من هيئة TÜV. برلين-كرويتسبرغ. هاتف: 030/14008945.",
          "fr": "De bonnes notes en toute simplicité ! Soutien scolaire professionnel pour tous niveaux et filières. Qualité certifiée conforme par le TÜV. Berlin-Kreuzberg. Tél. 030/14008945."
        },
        "h": {
          "ar": "دليل بلوتس للمدارس يعرض جميع مدارس المدينة مع نبذات تعريفية وافية، ويقدم نصائح حول أنواع المدارس وإصلاح التعليم، لمساعدة أولياء الأمور في اتخاذ القرار الصائب. 408 صفحة، 14.80 يورو.",
          "fr": "Le Guide des écoles PLÖTZ présente tous les établissements scolaires de la ville avec des fiches détaillées, donne des conseils sur les filières et les réformes pour guider les parents dans leur choix. 408 pages, 14,80 €."
        },
        "H": {
          "ar": "دليل بلوتس للمدارس يعرض جميع مدارس المدينة مع نبذات تعريفية وافية، ويقدم نصائح حول أنواع المدارس وإصلاح التعليم، لمساعدة أولياء الأمور في اتخاذ القرار الصائب. 408 صفحة، 14.80 يورو.",
          "fr": "Le Guide des écoles PLÖTZ présente tous les établissements scolaires de la ville avec des fiches détaillées, donne des conseils sur les filières et les réformes pour guider les parents dans leur choix. 408 pages, 14,80 €."
        },
        "i": {
          "ar": "غراتس-المركز: مطلوب معلم أو معلمة لدروس تقوية في اللغة الإيطالية، بأجر جيد ومجزٍ. هاتف: 316/2885217.",
          "fr": "Graz-Centre : Recherche professeur de soutien en italien, très bonne rémunération. Tél. 316/28 85 217."
        },
        "I": {
          "ar": "غراتس-المركز: مطلوب معلم أو معلمة لدروس تقوية في اللغة الإيطالية، بأجر جيد ومجزٍ. هاتف: 316/2885217.",
          "fr": "Graz-Centre : Recherche professeur de soutien en italien, très bonne rémunération. Tél. 316/28 85 217."
        },
        "j": {
          "ar": "دروس تقوية وأكثر! لجميع المواد والمراحل الدراسية. ميني-ليرنكرايس (خبرة منذ 1974): مجموعات صغيرة، دروس فردية، وتدريب متخصص للأطفال الذين يعانون من صعوبات الإملاء والحساب وضعف التركيز.",
          "fr": "Soutien scolaire et bien plus ! Toutes matières et niveaux. Mini-Lernkreis (expertise depuis 1974) : mini-groupes, cours particuliers et entraînement ciblé pour enfants ayant des troubles de l'orthographe, du calcul ou un déficit de concentration."
        },
        "J": {
          "ar": "دروس تقوية وأكثر! لجميع المواد والمراحل الدراسية. ميني-ليرنكرايس (خبرة منذ 1974): مجموعات صغيرة، دروس فردية، وتدريب متخصص للأطفال الذين يعانون من صعوبات الإملاء والحساب وضعف التركيز.",
          "fr": "Soutien scolaire et bien plus ! Toutes matières et niveaux. Mini-Lernkreis (expertise depuis 1974) : mini-groupes, cours particuliers et entraînement ciblé pour enfants ayant des troubles de l'orthographe, du calcul ou un déficit de concentration."
        }
      },
      "questions": {
        "13": {
          "ar": "ابن إيما، فرديناند، ليس لديه درجات سيئة، لكنها قلقة عليه لأنه لا يستطيع التركيز بشكل جيد.",
          "fr": "Ferdinand, le fils d'Emma, n'a pas de mauvaises notes, mais elle s'inquiète car il a du mal à se concentrer.",
          "text": {
            "ar": "ابن إيما، فرديناند، ليس لديه درجات سيئة، لكنها قلقة عليه لأنه لا يستطيع التركيز بشكل جيد.",
            "fr": "Ferdinand, le fils d'Emma, n'a pas de mauvaises notes, mais elle s'inquiète car il a du mal à se concentrer."
          }
        },
        "14": {
          "ar": "بسبب ظروف عملها، لا تستطيع السيدة بايزله مساعدة ابنها في أداء واجباته المدرسية، لكنها لا تملك القدرة المالية لتحمل تكاليف معهد تقوية أو مدرس خصوصي.",
          "fr": "En raison de son travail, Mme Beisle ne peut pas aider son fils à faire ses devoirs, mais elle n'a pas les moyens de payer un institut de soutien ou un précepteur privé.",
          "text": {
            "ar": "بسبب ظروف عملها، لا تستطيع السيدة بايزله مساعدة ابنها في أداء واجباته المدرسية، لكنها لا تملك القدرة المالية لتحمل تكاليف معهد تقوية أو مدرس خصوصي.",
            "fr": "En raison de son travail, Mme Beisle ne peut pas aider son fils à faire ses devoirs, mais elle n'a pas les moyens de payer un institut de soutien ou un précepteur privé."
          }
        },
        "15": {
          "ar": "يفكر السيد والسيدة هورن فيما إذا كان من الأفضل لابنتهما الالتحاق بالمدرسة الثانوية العامة (Gymnasium) أو المدرسة الإعدادية (Realschule).",
          "fr": "M. et Mme Horn se demandent si leur fille devrait entrer au lycée général (Gymnasium) ou plutôt au collège d'enseignement général (Realschule).",
          "text": {
            "ar": "يفكر السيد والسيدة هورن فيما إذا كان من الأفضل لابنتهما الالتحاق بالمدرسة الثانوية العامة (Gymnasium) أو المدرسة الإعدادية (Realschule).",
            "fr": "M. et Mme Horn se demandent si leur fille devrait entrer au lycée général (Gymnasium) ou plutôt au collège d'enseignement général (Realschule)."
          }
        },
        "16": {
          "ar": "ألكسندر سيؤدي امتحانات الشهادة الثانوية (Abitur) العام المقبل، ويحتاج ماسة لدروس خصوصية في الكيمياء والفيزياء، ويبحث عن مدرس يأتي إليه في منزله.",
          "fr": "Alexandre passe son baccalauréat l'année prochaine et a absolument besoin de cours de soutien en chimie et en physique. Il cherche un professeur qui se déplace chez lui.",
          "text": {
            "ar": "ألكسندر سيؤدي امتحانات الشهادة الثانوية (Abitur) العام المقبل، ويحتاج ماسة لدروس خصوصية في الكيمياء والفيزياء، ويبحث عن مدرس يأتي إليه في منزله.",
            "fr": "Alexandre passe son baccalauréat l'année prochaine et a absolument besoin de cours de soutien en chimie et en physique. Il cherche un professeur qui se déplace chez lui."
          }
        },
        "17": {
          "ar": "أنهت كورينا للتو دراستها الجامعية في الرياضيات وتبحث عن عمل في أحد معاهد دروس التقوية.",
          "fr": "Corinna vient de terminer ses études universitaires de mathématiques et cherche un emploi dans un institut de soutien scolaire.",
          "text": {
            "ar": "أنهت كورينا للتو دراستها الجامعية في الرياضيات وتبحث عن عمل في أحد معاهد دروس التقوية.",
            "fr": "Corinna vient de terminer ses études universitaires de mathématiques et cherche un emploi dans un institut de soutien scolaire."
          }
        },
        "18": {
          "ar": "يحتاج ماركوس بشدة إلى تحسين درجاته لاجتياز الشهادة الثانوية بنجاح، لكنه يريد التأكد أولاً من جودة شرح المعلمين وأسلوبهم قبل التسجيل في معهد معين.",
          "fr": "Markus a absolument besoin d'obtenir de meilleures notes pour réussir son baccalauréat, mais avant de choisir un institut, il souhaite s'assurer que les enseignants expliquent bien la matière.",
          "text": {
            "ar": "يحتاج ماركوس بشدة إلى تحسين درجاته لاجتياز الشهادة الثانوية بنجاح، لكنه يريد التأكد أولاً من جودة شرح المعلمين وأسلوبهم قبل التسجيل في معهد معين.",
            "fr": "Markus a absolument besoin d'obtenir de meilleures notes pour réussir son baccalauréat, mais avant de choisir un institut, il souhaite s'assurer que les enseignants expliquent bien la matière."
          }
        },
        "19": {
          "ar": "لينا في الصف التاسع ولديها درجات متدنية في الرياضيات، وتبحث عن برنامج حاسوبي يمكنه مساعدتها في التعلم.",
          "fr": "Léna est en 9e classe et a de mauvaises notes en mathématiques. Elle cherche un logiciel informatique capable de l'aider.",
          "text": {
            "ar": "لينا في الصف التاسع ولديها درجات متدنية في الرياضيات، وتبحث عن برنامج حاسوبي يمكنه مساعدتها في التعلم.",
            "fr": "Léna est en 9e classe et a de mauvaises notes en mathématiques. Elle cherche un logiciel informatique capable de l'aider."
          }
        }
      }
    },
    "4": {
      "instructions": {
        "ar": "اقرأ التعليقات من 20 إلى 26. اختر: هل يرى الشخص المعني أن الأطفال الذين ينشؤون بلا إخوة (الطفل الوحيد) أفضل حالاً؟",
        "fr": "Lisez les avis 20 à 26. Choisissez : la personne estime-t-elle que les enfants uniques ont une meilleure situation ?"
      },
      "topic": {
        "ar": "هل يتمتع الطفل الوحيد بوضع وظروف أفضل في الحياة؟",
        "fr": "Les enfants uniques ont-ils une situation plus enviable ?"
      },
      "example": {
        "who": "تيم، 37 عاماً، فولفسبورغ",
        "text": {
          "ar": "الإجابة على هذا السؤال بسيطة للغاية. فمع وجود إخوة، يتدرب المرء شتاءً وصيفاً ورضي أم أبى على السلوك الاجتماعي. وعليه أن يتقاسم كل شيء باستمرار، بدءاً من الألعاب وصولاً إلى اهتمام الوالدين ورعايتهما. علاوة على ذلك، يتعلم المرء منذ نعومة أظفاره كيفية الاندماج في جماعة. وأرى أن امتلاك هذه المهارات ميزة كبرى للحياة في المجتمع. ولذلك ينبغي للجميع إن أمكن أن ينشؤوا مع إخوة. وكون المرء طفلاً وحيداً يمثل في نظري نقطة سلبية وعيباً حقيقياً.",
          "fr": "La réponse est très simple. Avec des frères et sœurs, on s'exerce bon gré mal gré au comportement social. On doit continuellement tout partager, depuis les jouets jusqu'à l'attention des parents. De plus, on apprend dès le berceau à s'intégrer dans un groupe, ce qui constitue un atout précieux pour la vie en société. Dans la mesure du possible, tout le monde devrait grandir entouré d'une fratrie. Être enfant unique est à mes yeux un désavantage."
        }
      },
      "letters": {
        "20": {
          "who": "أنجيلا، 35 عاماً، باد غاشتاين",
          "text": {
            "ar": "بالتأكيد لدي رأي واضح في هذا الموضوع، لأنني نشأت طفلة وحيدة. لا يمكنني تصور شكل أجمل لطفولة مفعمة بالدفء والحياة الأسرية؛ فكل شيء متناغم ويسوده الهدوء، وكطفل يكرس المرء كل وقته للتعلق بوالديه والتفاعل معهما لعدم وجود أفراد أسرة آخرين. فيتشكل كيان أسري متماسك يعين الطفل على النضج والتعقل مبكراً.",
            "fr": "J'ai évidemment un avis tranché sur la question, étant moi-même fille unique. Je ne peux imaginer de plus belle forme d'enfance et de vie de famille. Tout est harmonieux, et l'enfant s'investit bien plus auprès de ses parents, n'ayant pas d'autres membres dans le foyer. On forme une véritable unité avec eux, ce qui aide grandement l'enfant à devenir mature et raisonnable."
          }
        },
        "21": {
          "who": "فرانك، 16 عاماً، شافهاوزن",
          "text": {
            "ar": "عشت لسنوات طويلة طفلاً وحيداً بمفردي. ثم تزوجت والدتي مجدداً وأصبح لدي فجأة شقيقان من زواجها الثاني. وما زلت حتى اليوم أفتقد الأوقات التي كانت والدتي تخصصها لي وحدي لساعات طويلة دون مقاطعة، أو عدم اضطراري الدائم لإعارة كل أسطواناتي أو مساعدة الآخرين في كل شاردة وواردة. فرحتي بوجود رفقاء معي في المنزل ليست كبيرة على الإطلاق.",
            "fr": "J'ai été enfant unique pendant des années. Puis ma mère s'est remariée et je me suis retrouvé avec deux demi-frères. Je regrette toujours l'époque où ma mère avait de longs moments consacrés uniquement à moi, sans que je sois obligé de prêter mes CD en permanence ou d'aider les autres à tout bout de champ. Le bonheur de ne plus être seul ne me saute pas aux yeux."
          }
        },
        "22": {
          "who": "زوي، 17 عاماً، فيسترلاند",
          "text": {
            "ar": "يكفي للمرء أن يستحضر تلك المشاعر القاسية من الوحدة والعزلة في العطلات الصيفية والاحتفالات العائلية لكي يجد إجابة فورية عن هذا السؤال. ومهما كان حجم ما يتوجب على المرء تقاسمه مع أخيه أو أخته، فإن الأهم أنه لا يشعر بالوحدة أبداً. والوحدة في نظري أمر سلبي ومؤلم دوماً.",
            "fr": "Il suffit de songer à la solitude pesante ressentie lors des vacances en famille ou des fêtes de fin d'année pour que la réponse s'impose d'elle-même. Peu importe ce que l'on doit partager avec un frère ou une sœur, l'essentiel est de ne pas être seul. Rester seul est invariablement une épreuve négative."
          }
        },
        "23": {
          "who": "نيكولاوس، 43 عاماً، دافوس",
          "text": {
            "ar": "عندما يبلغ الإنسان مرحلة الرشد وينفصل عن والديه ليعيش بمفرده، يكتسب الإخوة أهمية ومكانة مختلفة كلياً؛ إذ يكون الإخوة في المراحل المتقدمة من العمر على أتم الاستعداد لمد يد العون لبعضهم البعض. وإذا ما احتاج الوالدان الطاعنان في السن إلى رعاية وتمريض، أمكن تقاسم هذه المهمة النبيلة بين الإخوة. كما يمتلك المرء دائماً أشخاصاً من نفس جيله عاصروا طفولته وشبابه، وكل هذا يحرم منه الطفل الوحيد.",
            "fr": "Une fois adulte et parti du domicile parental, les frères et sœurs prennent une toute autre importance. Plus tard dans la vie, ils sont toujours là pour s'entraider. Si nos parents communs viennent à avoir besoin d'aide ou de soins, on peut se répartir ce devoir. De plus, on conserve des personnes de sa propre génération, témoins fidèles de notre enfance et de notre jeunesse. L'enfant unique n'a pas cette chance."
          }
        },
        "24": {
          "who": "آندي، 29 عاماً، فيلز",
          "text": {
            "ar": "لم أتفق قط مع إخوتي على الإطلاق، لا وأنا طفل صغير ولا بعدما أصبحت رجلاً راشداً. كل تلك الخلافات والمشاحنات الدائمة استنزفت جزءاً هائلاً من طاقتي ووقتي وجهدي، وهي طاقة كان بإمكاني استثمارها في أمور أكثر نفعاً وإيجابية. وباعتبار المرء طفلاً وحيداً، فإنه لا يضيع طاقته ووقته في مثل هذه الصراعات العقيمة.",
            "fr": "Je ne me suis jamais bien entendu avec mes frères et sœurs, ni enfant, ni adulte. Tous ces conflits et disputes continuelles m'ont coûté une énergie considérable, que j'aurais bien mieux employée ailleurs. En grandissant comme enfant unique, on ne gaspille ni son temps ni ses forces dans de telles querelles."
          }
        },
        "25": {
          "who": "دوريس، 21 عاماً، شليسفيغ",
          "text": {
            "ar": "يعاني الأطفال من الضغط النفسي والتوتر الناجم عن التوقعات الكبيرة التي يضعها الآباء على كاهلهم. وإذا لم يكن في العائلة سوى طفل واحد، فإنه يضطر لتحمل عبء تحقيق كل تلك الطموحات بمفرده، أو على الأقل يكون هذا هو الهدف غير المعلن. بينما في حال وجود إخوة يتوزع هذا العبء والضغط النفسي، ولذلك تكون حياة الأطفال الذين لديهم إخوة أكثر بساطة وراحة.",
            "fr": "Les enfants subissent comme une pression et un stress intenses le fait que leurs parents attendent énormément d'eux. Lorsqu'il n'y a qu'un enfant dans le foyer, c'est à lui seul qu'il revient de combler toutes ces exigences. Au sein d'une fratrie, cette charge se répartit, de sorte que la vie s'avère bien plus facile pour les enfants qui ont des frères et sœurs."
          }
        },
        "26": {
          "who": "لوكاس، 26 عاماً، نورنبرغ",
          "text": {
            "ar": "تقدم لنا الأبحاث والدراسات التربوية إجابة قاطعة في هذا الصدد؛ فالطفل الوحيد يستطيع أن ينمي ذكاءه وقدراته العقلية بصورة أفضل بكثير، لأنه يتلقى تدريباً ورعاية مباشرة من شخصين بالغين هما والداه، ويتوفر له الدعم والإرشاد دون انقطاع، مما ينعكس بشكل إيجابي ملموس على معارفه وتحصيله المدرسي وثقافته العامة. ولذلك يتمتع الأطفال الذين ينشؤون بلا إخوة بفرصة انطلاق ووضع أولي أكثر ملاءمة ونجاحاً.",
            "fr": "La recherche pédagogique apporte une réponse sans équivoque. Un enfant unique est en mesure de développer son intelligence bien plus harmonieusement car il est pour ainsi dire « entraîné » par deux adultes. Il bénéficie d'une aide ininterrompue, ce qui se traduit très positivement sur sa culture générale et ses résultats scolaires. Les enfants sans frères et sœurs disposent donc d'une situation de départ bien plus avantageuse."
          }
        }
      }
    },
    "5": {
      "instructions": {
        "ar": "اقرأ المهام من 27 إلى 30 والنص المرفق بها. اختر لكل مهمة الحل الصحيح a أو b أو c.",
        "fr": "Lisez les questions 27 à 30 et le texte correspondant. Choisissez pour chaque question la bonne solution a, b ou c."
      },
      "articles": [
        {
          "heading": {
            "ar": "لائحة استخدام المخيم التابع للمسبح المكشوف ألتناو",
            "fr": "Règlement intérieur du terrain de camping près de la piscine d'Altenau"
          },
          "sub": {
            "ar": "أنت تطلع على لائحة استخدام مخيم ألتناو حيث ترغب في التخييم وقضاء الإجازة.",
            "fr": "Vous vous informez sur le règlement d'utilisation du terrain de camping d'Altenau où vous souhaitez séjourner."
          },
          "body": {
            "ar": [
              "<strong>البند 1 (§ 1)</strong><br>يُسمح بالدخول بالسيارات إلى أرض المخيم بالقرب من المسبح المكشوف بغرض تحميل وتفريغ الأمتعة فقط. وبعد ذلك يجب ركن المركبات في ساحة انتظار السيارات الواقعة أمام المسبح. وتكلفة كل سيارة متوقفة داخل أرض المخيم 10 يورو لكل ليلة. وأي ترتيبات أخرى يجب التنسيق بشأنها مسبقاً مع المسؤولين.",
              "<strong>البند 2 (§ 2)</strong><br>يُحظر الدخول إلى منطقة ضفاف النهر لأسباب تتعلق بحماية البيئة والطبيعة، ويجب عدم تلويثها مطلقاً سواء باستخدامها كدورات مياه أو إلقاء القمامة فيها. كما يُمنع صيد الأسماك في النهر منعاً باتاً (بإشعار من جمعية الصيد).",
              "<strong>البند 3 (§ 3)</strong><br>يُسمح بإشعال نيران التخييم والشواء فقط في المواقد والأماكن المخصصة لذلك حصراً. ويُحظر تماماً إنشاء مواقد نيران جديدة. وفي حال مخالفة ذلك تفرض غرامة مالية قدرها 50 يورو.",
              "<strong>البند 4 (§ 4)</strong><br>للتخلص من النفايات، توجد حاوية كبيرة موضوعة بجوار المبنى السكني. ولا يُسمح بالتخلص من النفايات الكبيرة الحجم أو الأثاث التالف، مثل كراسي التخييم والمراتب الهوائية. والمخالفات تستوجب فرض غرامة مالية.",
              "<strong>البند 5 (§ 5)</strong><br>يمكن الوصول إلى دورات المياه عبر الدرج؛ وتقع على يسار غرف الاستحمام، وبجوار الكشك مباشرة. ومن البديهي تركها نظيفة بعد الاستخدام، مع تجنب انسداد المجاري ببقايا الطعام أو الإفراط في المناديل. ويُرجى من مشرفي المجموعات توجيه أفرادهم بهذا الشأن.<br>كما يمكن في غرف الاستحمام استخدام المياه الدافئة بواسطة فيشات استحمام بقيمة 1 يورو (تباع في شباك التذاكر/الكشك) لمدة 10 دقائق تقريباً.",
              "<strong>البند 6 (§ 6)</strong><br>يجب الالتزام بالهدوء التام في المخيم بدءاً من منتصف الليل (الساعة 24). ويُرجى مراعاة راحة باقي رواد المخيم والامتناع عن إحداث أي ضوضاء أو إزعاج.",
              "<strong>البند 7 (§ 7)</strong><br>يُمنع اصطحاب الكلاب داخل منطقة المسبح المكشوف. وفي أرض المخيم يجب أن تظل الكلاب مقيدة بحبل ولا تشكل أي خطر على رواد المخيم. وتبلغ تكلفة إقامتها 5 يورو في اليوم.",
              "<strong>البند 8 (§ 8)</strong><br>في كامل منطقة المسبح المكشوف والمخيم، يتحمل الآباء أو المشرفون المسؤولية القانونية الكاملة عن أطفالهم وسلامتهم."
            ],
            "fr": [
              "<strong>Article 1 (§ 1)</strong><br>Il est autorisé de pénétrer en véhicule sur le terrain du camping afin de charger ou décharger les bagages. Les véhicules doivent ensuite être stationnés sur le parking situé devant la piscine. Toute voiture garée sur le camping coûte 10 € par nuit. Toute autre disposition doit être convenue avec les responsables.",
              "<strong>Article 2 (§ 2)</strong><br>L'accès à la zone des berges est formellement interdit pour des raisons de protection de la nature. Il convient de ne pas la souiller, que ce soit en guise de toilettes ou de décharge. La pêche en rivière est interdite (avis de la société de pêche) !",
              "<strong>Article 3 (§ 3)</strong><br>Les feux de camp et barbecues ne sont autorisés qu'aux seuls emplacements prévus à cet effet. La création de nouveaux foyers est proscrite sous peine d'une amende de 50 €.",
              "<strong>Article 4 (§ 4)</strong><br>Pour l'évacuation des déchets, un conteneur est disposé à côté du bâtiment d'habitation. Le dépôt d'encombrants, tels que chaises de camping et matelas pneumatiques, n'est pas autorisé et sera sanctionné d'une amende.",
              "<strong>Article 5 (§ 5)</strong><br>Les toilettes sont accessibles par l'escalier ; elles se situent à gauche des douches, directement à côté du kiosque. Il va de soi de les laisser propres. Les engorgements dus à des restes alimentaires ou au papier sont à éviter. Les responsables de groupe doivent en informer leurs membres.<br>Les douches chaudes fonctionnent avec des jetons d'une valeur de 1 € (en vente à la caisse/au kiosque) pour environ 10 minutes.",
              "<strong>Article 6 (§ 6)</strong><br>Le calme absolu doit être respecté sur le camp à partir de minuit (24 h). Nous vous prions d'avoir des égards pour vos voisins campeurs. Pas de nuisances sonores !",
              "<strong>Article 7 (§ 7)</strong><br>Les chiens ne sont pas admis dans l'enceinte de la piscine. Sur le terrain de camping, ils doivent obligatoirement être tenus en laisse et ne présenter aucun danger. Leur séjour est facturé 5 € par jour.",
              "<strong>Article 8 (§ 8)</strong><br>Sur l'ensemble du site de la piscine et du camping, les parents ou accompagnateurs sont pleinement responsables de leurs enfants."
            ]
          }
        }
      ],
      "questions": {
        "27": {
          "text": {
            "ar": "بالنسبة للكلاب ...",
            "fr": "Concernant les chiens..."
          },
          "options": {
            "ar": [
              "لا يُسمح بتواجدها في منطقة المسبح المكشوف.",
              "المخيم غير مخصص لاستقبالها.",
              "يجب دفع رسوم قدرها 5 يورو تدفع لمرة واحدة فقط."
            ],
            "fr": [
              "leur présence est interdite dans le secteur de la piscine.",
              "le camping ne les accepte pas.",
              "il faut s'acquitter d'un forfait unique de 5 €."
            ]
          }
        },
        "28": {
          "text": {
            "ar": "من أجل الشواء وإشعال النار، يجب ...",
            "fr": "Pour faire un barbecue, il faut..."
          },
          "options": {
            "ar": [
              "الحصول على موافقة لإنشاء موقد نار جديد.",
              "إشعال النار فقط في الأماكن المحددة والمخصصة لذلك.",
              "طلب إذن خاص في كل مرة."
            ],
            "fr": [
              "obtenir l'autorisation pour un nouvel emplacement de feu.",
              "faire du feu uniquement aux endroits prévus.",
              "demander une permission préalable."
            ]
          }
        },
        "29": {
          "text": {
            "ar": "دورات المياه ...",
            "fr": "Les toilettes..."
          },
          "options": {
            "ar": [
              "تقع بجوار الكشك مباشرة.",
              "ينبغي تنظيفها بواسطة مسؤولي المجموعات.",
              "تحتوي أيضاً على مرافق الاستحمام في نفس الحجرة."
            ],
            "fr": [
              "se trouvent à côté du kiosque.",
              "doivent être nettoyées par les chefs de groupe.",
              "comprennent également les douches."
            ]
          }
        },
        "30": {
          "text": {
            "ar": "بالنسبة لمنطقة ضفاف النهر يسري ما يلي:",
            "fr": "Pour la zone riveraine des berges :"
          },
          "options": {
            "ar": [
              "توجد هناك أيضاً دورات مياه.",
              "هناك فقط يلتزم المرء بحماية الطبيعة.",
              "يُحظر التواجد أو الدخول إلى تلك المنطقة."
            ],
            "fr": [
              "des toilettes y sont également installées.",
              "c'est le seul endroit où l'on est tenu de protéger la nature.",
              "l'accès et le séjour y sont formellement interdits."
            ]
          }
        }
      }
    },
    "6": {
      "instructions": {
        "ar": "وحدة الاستماع (Hören): تتكون من 4 أجزاء و30 مهمة. انقر فوق زر التشغيل للاستماع إلى الملف الصوتي الأصلي المسجل بفترات التوقف المعتمدة في الامتحان.",
        "fr": "Module Compréhension orale (Hören) : 4 parties, 30 questions. Cliquez sur lecture pour démarrer la bande audio originale aux pauses officielles d'examen."
      },
      "teile": {
        "1": {
          "title": {
            "ar": "الجزء 1: خمسة نصوص قصيرة",
            "fr": "Partie 1 : Cinq textes courts"
          },
          "desc": {
            "ar": "ستستمع الآن إلى خمسة نصوص قصيرة، وستسمع كل نص مرتين. لكل نص ستقوم بحل مهمتين.",
            "fr": "Vous allez entendre cinq textes courts, chacun diffusé deux fois. Pour chaque texte, répondez à deux questions."
          },
          "context": {
            "ar": "إعلانات ورسائل هاتفية وتوجيهات إذاعية متنوعة.",
            "fr": "Annonces radio, répondeurs et messages d'information publique."
          }
        },
        "2": {
          "title": {
            "ar": "الجزء 2: جولة في عوالم سواروفسكي الكريستالية",
            "fr": "Partie 2 : Visite guidée des Mondes du Cristal Swarovski"
          },
          "desc": {
            "ar": "ستستمع الآن إلى نص لمرة واحدة فقط، وستحل خمس مهام باختيار الإجابة الصحيحة a أو b أو c.",
            "fr": "Vous allez entendre un texte diffusé une seule fois, puis répondre à cinq questions à choix multiple."
          },
          "context": {
            "ar": "أنت تشارك في جولة إرشادية داخل عوالم سواروفسكي الكريستالية في فاتنز بالنمسا.",
            "fr": "Vous participez à une visite guidée des Mondes du Cristal Swarovski à Wattens en Autriche."
          }
        },
        "3": {
          "title": {
            "ar": "الجزء 3: محادثة حول إدمان الإنترنت",
            "fr": "Partie 3 : Discussion sur l'addiction à Internet"
          },
          "desc": {
            "ar": "ستستمع الآن إلى محادثة لمرة واحدة فقط، وتحدد ما إذا كانت العبارات السبع صحيحة أم خاطئة.",
            "fr": "Vous allez écouter une conversation diffusée une seule fois et déterminer si les sept affirmations sont vraies ou fausses."
          },
          "context": {
            "ar": "أنت جالس في مطعم للوجبات السريعة وتسمع ثلاثة شباب يتحدثون عن شخص يعاني من إدمان الإنترنت وألعابه.",
            "fr": "Vous êtes assis dans un fast-food et entendez trois jeunes discuter d'un ami souffrant d'addiction aux jeux vidéo en ligne."
          }
        },
        "4": {
          "title": {
            "ar": "الجزء 4: حلقة نقاشية إذاعية حول الموضة وتأثيرها",
            "fr": "Partie 4 : Débat radiophonique sur la mode et les tendances"
          },
          "desc": {
            "ar": "ستستمع الآن إلى مناقشة حوارية مرتين، وتنسب كل رأي إلى المتحدث صاحب العبارة.",
            "fr": "Vous allez écouter un débat diffusé deux fois et attribuer chaque déclaration à son auteur."
          },
          "context": {
            "ar": "يناقش مذيع برنامج «قضايا راهنة» مع مستشارة المظهر دوريس زيبرت والتلميذة إيفا مارتينز موضوع الموضة والأزياء في حياتنا اليومية.",
            "fr": "L'animateur de l'émission « Thèmes d'actualité » débat de l'importance de la mode avec la styliste Doris Siebert et la collégienne Eva Martins."
          }
        }
      },
      "questions": {
        "h1": {
          "text": {
            "ar": "أنت متصل بخدمة عملاء إحدى المكتبات لبيع الكتب.",
            "fr": "Vous êtes en ligne avec le service clientèle d'une librairie."
          }
        },
        "h2": {
          "text": {
            "ar": "من لديه أسئلة واستفسارات، ...",
            "fr": "Pour toute question, on peut..."
          },
          "options": {
            "ar": [
              "عليه كتابة بطاقة بريدية.",
              "يمكنه الاتصال هاتفياً أيضاً خلال عطلة نهاية الأسبوع.",
              "يمكنه إرسال بريد إلكتروني."
            ],
            "fr": [
              "envoyer une carte postale.",
              "téléphoner également pendant le week-end.",
              "envoyer un courriel."
            ]
          }
        },
        "h3": {
          "text": {
            "ar": "القطار سيصل في موعد مبكر عن المعتاد.",
            "fr": "Le train arrivera plus tôt que prévu."
          }
        },
        "h4": {
          "text": {
            "ar": "متى سيصل المسافرون إلى مدينة ميونيخ؟",
            "fr": "À quelle heure les voyageurs arriveront-ils à Munich ?"
          },
          "options": {
            "ar": [
              "في تمام الساعة 20:00.",
              "حوالي الساعة 17:00.",
              "بعد الساعة 23:00 ليلاً."
            ],
            "fr": [
              "À 20 h 00.",
              "Vers 17 h 00.",
              "Après 23 h 00."
            ]
          }
        },
        "h5": {
          "text": {
            "ar": "هناك عرض مسرحي مخصص للأطفال.",
            "fr": "Il y a une représentation théâtrale pour les enfants."
          }
        },
        "h6": {
          "text": {
            "ar": "حضور هذه الفعالية ...",
            "fr": "L'entrée à cet événement..."
          },
          "options": {
            "ar": [
              "مجاني بدون أي رسوم.",
              "يكلف نفس المبلغ للأطفال والبالغين على حد سواء.",
              "أكثر كلفة للبالغين مقارنة بالأطفال."
            ],
            "fr": [
              "est gratuite.",
              "coûte le même tarif pour enfants et adultes.",
              "est plus chère pour les adultes que pour les enfants."
            ]
          }
        },
        "h7": {
          "text": {
            "ar": "باولا ليست موجودة في منزلها فترة بعد الظهر.",
            "fr": "Paula n'est pas chez elle cet après-midi."
          }
        },
        "h8": {
          "text": {
            "ar": "متى يمكن لفيولا معاودة الاتصال بباولا؟",
            "fr": "Quand Viola peut-elle rappeler Paula ?"
          },
          "options": {
            "ar": [
              "خلال الساعة إلى الساعتين القادمتين.",
              "هذا المساء في تمام الساعة الثامنة بالضبط.",
              "هذا المساء في المنزل أو غداً بمقر العمل."
            ],
            "fr": [
              "Dans les une à deux prochaines heures.",
              "Ce soir à 20 h tapantes.",
              "Ce soir chez elle ou demain à l'entreprise."
            ]
          }
        },
        "h9": {
          "text": {
            "ar": "تستمع إلى نصائح وتوجيهات للتسوق في السوبرماركت.",
            "fr": "Vous écoutez des conseils pour faire ses courses au supermarché."
          }
        },
        "h10": {
          "text": {
            "ar": "كم يوماً في الأسبوع يمكن للمرء شراء المنتجات العضوية؟",
            "fr": "Combien de jours par semaine peut-on acheter des produits bio ?"
          },
          "options": {
            "ar": [
              "خلال ثلاثة أيام.",
              "خلال يومين.",
              "خلال يوم واحد فقط."
            ],
            "fr": [
              "Trois jours par semaine.",
              "Deux jours par semaine.",
              "Un seul jour par semaine."
            ]
          }
        },
        "h11": {
          "text": {
            "ar": "تقع عوالم سواروفسكي الكريستالية في ...",
            "fr": "Les Mondes du Cristal Swarovski se trouvent à..."
          },
          "options": {
            "ar": [
              "إنسبروك.",
              "فاتنز.",
              "فاتنباخ."
            ],
            "fr": [
              "Innsbruck.",
              "Wattens.",
              "Wattenbach."
            ]
          }
        },
        "h12": {
          "text": {
            "ar": "كم عدد موظفي شركة سواروفسكي؟",
            "fr": "Combien de collaborateurs emploie Swarovski ?"
          },
          "options": {
            "ar": [
              "5000 موظف.",
              "2000 موظف.",
              "25000 موظف."
            ],
            "fr": [
              "5 000 salariés.",
              "2 000 salariés.",
              "25 000 salariés."
            ]
          }
        },
        "h13": {
          "text": {
            "ar": "من الذي صمم قاعات العرض في عوالم سواروفسكي الكريستالية؟",
            "fr": "Par qui les salles des Mondes du Cristal ont-elles été conçues ?"
          },
          "options": {
            "ar": [
              "دانييل سواروفسكي.",
              "أبناء وأحفاد عائلة سواروفسكي.",
              "فنان تشكيلي نمساوي."
            ],
            "fr": [
              "Par Daniel Swarovski.",
              "Par les enfants et petits-enfants de la famille Swarovski.",
              "Par un artiste contemporain autrichien."
            ]
          }
        },
        "h14": {
          "text": {
            "ar": "من يشتري منتجات من المركز التجاري الملحق، ...",
            "fr": "Toute personne qui achète des articles dans le centre commercial..."
          },
          "options": {
            "ar": [
              "يمكنه طلب إرسال مشترياته عبر البريد.",
              "يجب عليه الدفع بعملة اليورو حصراً.",
              "يجب عليه التحدث مباشرة إلى موظفي المبيعات."
            ],
            "fr": [
              "peut se faire expédier ses achats par la poste.",
              "doit obligatoirement régler en euros.",
              "doit s'adresser au personnel."
            ]
          }
        },
        "h15": {
          "text": {
            "ar": "من يصطحب معه كلباً، ...",
            "fr": "Quiconque a un chien..."
          },
          "options": {
            "ar": [
              "يمكنه التنزه برفقته في الحديقة الخارجية.",
              "يجب عليه تسجيل نفسه في خيمة الاستقبال.",
              "يمكنه إدخاله مجاناً إلى قاعات المعرض."
            ],
            "fr": [
              "peut aller se promener avec lui dans le parc.",
              "doit obligatoirement se présenter sous la tente d'accueil.",
              "peut l'emmener gratuitement dans les salles d'exposition."
            ]
          }
        },
        "h16": {
          "text": {
            "ar": "جوليا هي صديقة إريك وحبيبته.",
            "fr": "Julia est la petite amie d'Erik."
          }
        },
        "h17": {
          "text": {
            "ar": "جاءت جوليا بمفردها إلى مطعم الوجبات السريعة.",
            "fr": "Julia est venue seule dans le restaurant rapide."
          }
        },
        "h18": {
          "text": {
            "ar": "كان إريك يقضي أوقات الليل أيضاً في اللعب على الكمبيوتر.",
            "fr": "Erik jouait aussi sur son ordinateur pendant la nuit."
          }
        },
        "h19": {
          "text": {
            "ar": "نيله هي صديقة إريك الحالية.",
            "fr": "Nele est actuellement la petite amie d'Erik."
          }
        },
        "h20": {
          "text": {
            "ar": "لم تكن العائلة تعلم شيئاً عن مشاكل إريك العاطفية مع نيله.",
            "fr": "La famille ignorait tout des déboires d'Erik avec Nele."
          }
        },
        "h21": {
          "text": {
            "ar": "رفض إريك التحدث إلى الطبيب بشأن مشكلته.",
            "fr": "Erik a refusé d'aborder son problème avec le médecin."
          }
        },
        "h22": {
          "text": {
            "ar": "سيباستيان وتوم يرغبان في مساعدة صديقهما إريك.",
            "fr": "Sebastian et Tom souhaitent apporter leur aide à Erik."
          }
        },
        "h23": {
          "text": {
            "ar": "مستشارو المظهر يزودون الزبائن بمعلومات عن كيفية العناية بالأقمشة.",
            "fr": "Les conseillers en style informent les clients sur l'entretien des textiles."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        },
        "h24": {
          "text": {
            "ar": "ليس كل المراهقين والشباب يكترثون بصرعات الموضة.",
            "fr": "Tous les adolescents ne prêtent pas attention à la mode."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        },
        "h25": {
          "text": {
            "ar": "مواكبة الموضة والظهور بمظهر عصري يكلف أموالاً طائلة.",
            "fr": "Être à la mode et branché coûte très cher."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        },
        "h26": {
          "text": {
            "ar": "لا يحتاج المرء بالضرورة إلى أموال طائلة ليبدو بمظهر أنيق وعصري.",
            "fr": "Un look soigné et tendance ne nécessite pas forcément beaucoup d'argent."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        },
        "h27": {
          "text": {
            "ar": "قد يصاب المرء بمشاكل وحساسية جلدية بسبب رداءة جودة الملابس.",
            "fr": "Des matières de mauvaise qualité peuvent provoquer des réactions cutanées."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        },
        "h28": {
          "text": {
            "ar": "من يرغب في ارتداء ملابس عضوية طبيعية على بشرته، فعليه دفع مبالغ إضافية.",
            "fr": "Quiconque recherche du textile 100 % bio doit payer plus cher."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        },
        "h29": {
          "text": {
            "ar": "انتقاد مظهر الشباب وملابسهم من قِبل الكبار أمر شائع ومتكرر.",
            "fr": "Les critiques des adultes envers le look des jeunes sont fréquentes."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        },
        "h30": {
          "text": {
            "ar": "مثل هذا السلوك المتمرد في اللباس أمر متوقع وطبيعي في هذه السن.",
            "fr": "Une telle attitude vestimentaire est tout à fait prévisible et normale à cet âge."
          },
          "options": {
            "ar": [
              "المذيع",
              "دوريس زيبرت",
              "إيفا مارتينز"
            ],
            "fr": [
              "Le journaliste animateur",
              "Doris Siebert",
              "Eva Martins"
            ]
          }
        }
      }
    }
  }
}
