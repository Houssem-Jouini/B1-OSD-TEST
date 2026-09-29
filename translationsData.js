/* ==========================================================================
   B1 LESEN PRÜFUNGSSIMULATION — ÜBERSETZUNGSDATEN (ARABISCH & FRANZÖSISCH)
   ========================================================================== */

const translationsData = {
  "common": {
    "ar": {
      "text": "النص",
      "questions": "الأسئلة",
      "time": "الوقت",
      "minutes": "دقيقة",
      "example": "مثال",
      "answered": "تمت الإجابة",
      "of": "من",
      "true": "صحيح",
      "false": "خطأ",
      "yes": "نعم",
      "no": "لا",
      "select_ad": "– اختر الإعلان –",
      "ad": "إعلان",
      "no_ad_fits": "X (لا يوجد إعلان مناسب)",
      "already_used": "مستخدم بالفعل في رقم",
      "guiding_question": "السؤال الإرشادي للجزء 4",
      "agree_prompt": "هل يؤيد هذا الشخص السؤال المطروح؟",
      "comment_by": "تعليق من",
      "assigned_in_q": "تم اختياره في السؤال"
    },
    "fr": {
      "text": "Texte",
      "questions": "Questions",
      "time": "Temps",
      "minutes": "min.",
      "example": "Exemple",
      "answered": "répondu(es)",
      "of": "sur",
      "true": "Vrai",
      "false": "Faux",
      "yes": "Oui",
      "no": "Non",
      "select_ad": "– Choisir une annonce –",
      "ad": "Annonce",
      "no_ad_fits": "X (Aucune annonce ne convient)",
      "already_used": "déjà utilisé dans le n°",
      "guiding_question": "Question directrice pour la Partie 4",
      "agree_prompt": "Cette personne est-elle d'accord avec la question posée ?",
      "comment_by": "Commentaire de",
      "assigned_in_q": "Choisi dans la question"
    }
  },
  "modellsatz-1": {
    "parts": {
      "1": {
        "instructions": {
          "ar": "اقرأ النص والأسئلة من 1 إلى 6 المتعلقة به. اختر: هل العبارات صحيحة أم خاطئة؟",
          "fr": "Lisez le texte et les questions 1 à 6 correspondantes. Choisissez : les affirmations sont-elles Vraies ou Fausses ?"
        },
        "articles": [
          {
            "heading": {
              "ar": "مدونة شتيفان اليومية (StefansAlltagsblog.at)",
              "fr": "Le blog quotidien de Stefan (StefansAlltagsblog.at)"
            },
            "sub": {
              "ar": "ما يحدث كل يوم …",
              "fr": "Ce qui se passe chaque jour…"
            },
            "meta": {
              "ar": "الثلاثاء، 5 يونيو",
              "fr": "Mardi 5 juin"
            },
            "body": {
              "ar": [
                "بدأ هذا اليوم بداية غريبة حقًا: أثناء تناولي وجبة الإفطار، شاهدتُ حادثًا! عندما يكون الطقس جميلاً، أحب الجلوس في الصباح على شرفتي مع طبق الموسلي الخاص بي. بالطبع، شرفتي ليست رومانسية بشكل خاص، فأنا أعيش مباشرة على طريق 'زاكسندام'، أي أن السيارات تمر مسرعة على بعد ثلاثة طوابق تحتي في الثامنة والنصف صباحًا، على الرغم من أنه شارع باتجاه واحد. لا يمكنني رؤية السيارات فحسب، بل يمكنني أيضًا سماع صوتها بوضوح شديد. هذا الصباح، كنت قد انتهيت للتو من طعامي عندما أطلقت المكابح صريرًا فجأة، وصرخ الناس – ثم وقع الاصطدام. نظرت فورًا إلى الأسفل نحو الشارع: كانت شاحنة تسليم صغيرة تقف بزاوية مائلة على الطريق، وقد صدمتها سيارة مرسيدس سوداء قديمة من الخلف.",
                "نزل سائق المرسيدس، وهو رجل في منتصف العمر، وتوجه إلى الأمام نحو باب الشاحنة. فتح الباب، لكن لم يكن هناك أحد بالداخل. في هذه الأثناء، تجمع المزيد من الناس واقفين يتحدثون. مرت بضع سيارات على الرصيف متجاوزة السيارتين، ولكن سرعان ما تشكل طابور طويل من السيارات المزدحمة. كان سائق المرسيدس يجري مكالمة هاتفية. ثم ركض شاب يرتدي نوعًا من الزي الموحد من المبنى المقابل، وكان بلا شك سائق توصيل طرود. أخرج هاتفه المحمول فورًا من جيبه، ولم يمر وقت طويل حتى سُمع صوت سيارة الشرطة القادمة في الاتجاه المعاكس عبر الشارع ذي الاتجاه الواحد.",
                "ذهبت بعد ذلك إلى الجامعة ولم أعد أفكر في الأمر برمجته. فقط هذا المساء تذكرت الأمر مجددًا عندما كنت عند بائع الخضار في زاوية الشارع. إنه يسكن بالقرب ورأى كل شيء. سألته عما إذا كان يعرف سائق الطرود. أنا لم أكن أعرفه، لكنه كان يعلم أن السيدة 'فيندلر' في الطابق الثاني تطلب دائمًا أشياء عبر الإنترنت، وتأتي تلك الأشياء بالطبع مع خدمة توصيل الطرود.",
                "روى بائع الخضار أن الشرطة استجوبت بعض الأشخاص، وأن امرأتين شابتين قالتا إن سائق المرسيدس كان يتحدث بالهاتف في السيارة قبل الحادث. ثم أضاف أن شاحنة الطرود غادرت في النهاية، لكن المرسيدس القديمة كان لابد أن تنقلها خدمة السحب والإصلاح. استغرقت القصة بأكملها نحو ساعة. تناقشنا قليلاً حول ما إذا كان سائق المرسيدس هو المخطئ أم لا، وكنا في الواقع نرى ذلك كلينا. ومع ذلك، كان سائق الطرود قد ركن في الصف الثاني المزدوج، وهذا بالطبع لم يكن صحيحًا أيضًا. ولكن رغم ذلك: قال بائع الخضار: 'من يصطدم بالآخر من الخلف، هو من يدفع الثمن'.",
                "بعد ذلك عدت إلى المنزل، وغدًا يوم آخر جديد."
              ],
              "fr": [
                "Cette journée a vraiment commencé de façon très étrange : en prenant mon petit-déjeuner, j'ai assisté à un accident ! Quand il fait beau, j'aime m'asseoir le matin sur mon balcon avec mon bol de muesli. Bien sûr, ce n'est pas particulièrement romantique sur mon balcon, après tout j'habite directement sur le Sachsendamm, c'est-à-dire que trois étages sous moi, les voitures passent à toute allure à huit heures et demie du matin, même si c'est une rue à sens unique. Je peux non seulement voir les voitures, mais aussi très bien les entendre. Ce matin, je venais de terminer mon muesli quand soudain des freins ont crissé, des gens ont crié – et puis ça a percuté. J'ai immédiatement regardé en bas dans la rue : une petite camionnette de livraison était arrêtée en biais sur la chaussée, une vieille Mercedes noire l'avait percutée par l'arrière.",
                "Le conducteur de la Mercedes est descendu, un homme d'âge mûr, et s'est dirigé vers la porte de la camionnette. Il a ouvert la porte, mais il n'y avait personne. Entre-temps, de plus en plus de curieux se sont rassemblés et discutaient. Quelques voitures ont roulé sur le trottoir pour contourner les deux véhicules, mais un long bouchon s'est rapidement formé. Le conducteur de la Mercedes téléphonait. Puis un jeune homme en uniforme est arrivé en courant de l'immeuble d'en face, sans aucun doute un livreur de colis. Il a immédiatement sorti son portable de sa poche et peu après, on a entendu la voiture de police arriver en sens inverse dans la rue à sens unique.",
                "Je suis ensuite parti à l'université et je n'y ai plus pensé. Ce n'est que ce soir que cela m'est revenu à l'esprit, alors que j'étais chez le primeur du coin. Il habite dans le quartier et avait tout vu. Je lui ai demandé s'il connaissait le livreur. Je ne le connaissais pas, mais lui savait que Mme Wendler, au deuxième étage, commande constamment sur Internet, et cela arrive naturellement par service de livraison.",
                "Le marchand de légumes m'a raconté que la police avait interrogé des témoins et que deux jeunes femmes avaient affirmé que le conducteur de la Mercedes téléphonait au volant avant l'accident. Il a ajouté que la camionnette était finalement repartie, mais que la vieille Mercedes avait dû être remorquée par le service de dépannage. Toute l'histoire avait duré près d'une heure. Nous avons encore débattu pour savoir si le conducteur de la Mercedes était fautif ou non ; au fond, nous le pensions tous les deux. Le livreur s'était toutefois garé en double file, ce qui n'était évidemment pas correct non plus. Mais quand même : « Celui qui rentre dedans paye les dégâts », a conclu le marchand.",
                "Après cela, je suis rentré chez moi, et demain sera un autre jour."
              ]
            },
            "signature": {
              "ar": "إلى اللقاء قريبًا، شتيفان",
              "fr": "À bientôt, Stefan"
            }
          }
        ],
        "example": {
          "ar": {
            "text": "في الصباح، شرب شتيفان القهوة على شرفته."
          },
          "fr": {
            "text": "Le matin, Stefan a bu du café sur son balcon."
          }
        },
        "questions": {
          "1": {
            "ar": "الشارع الواقع أسفل شرفة شتيفان صاخب للغاية في الصباح.",
            "fr": "La rue sous le balcon de Stefan est assez bruyante le matin."
          },
          "2": {
            "ar": "كان سائق الطرود يقوم بتسليم شيء ما في ذلك الوقت.",
            "fr": "Le livreur de colis était en train de livrer quelque chose."
          },
          "3": {
            "ar": "بقي شتيفان في المنزل لمراقبة مجريات الحادث.",
            "fr": "Stefan est resté chez lui pour observer les événements."
          },
          "4": {
            "ar": "في المساء، كان على شتيفان شراء بعض الحاجيات.",
            "fr": "Le soir, Stefan devait encore faire des achats."
          },
          "5": {
            "ar": "يعلم شتيفان أن سيارة المرسيدس تعرضت لأضرار بالغة.",
            "fr": "Stefan apprend que la Mercedes était gravement endommagée."
          },
          "6": {
            "ar": "يعتقد شتيفان وبائع الخضار أن سائق المرسيدس هو الوحيد الذي ارتكب أخطاء.",
            "fr": "Stefan et son interlocuteur pensent que seul le conducteur de la Mercedes a commis des erreurs."
          }
        }
      },
      "2": {
        "instructions": {
          "ar": "اقرأ النص الصحفي والأسئلة من 7 إلى 9. اختر الإجابة الصحيحة a أو b أو c لكل سؤال.",
          "fr": "Lisez l'article de presse et les questions 7 à 9. Choisissez pour chaque question la bonne solution a, b ou c."
        },
        "instructions2": {
          "ar": "اقرأ النص الصحفي الثاني والأسئلة من 10 إلى 12. اختر الإجابة الصحيحة a أو b أو c لكل سؤال.",
          "fr": "Lisez le texte de presse et les questions 10 à 12. Choisissez pour chaque question la bonne réponse a, b ou c."
        },
        "articles": [
          {
            "heading": {
              "ar": "مع 'جراني أوبير' (Granny Aupair) إلى العالم",
              "fr": "Parcourir le monde avec Granny Aupair"
            },
            "body": {
              "ar": [
                "ترسل وكالة 'جراني أوبير' في هامبورغ نساءً إلى جميع أنحاء العالم للعيش مع عائلات أو المشاركة في مشاريع اجتماعية. ولا توجد مدة إقامة محددة إلزاميًا. كارين دورنر أرملة تبلغ من العمر 65 عامًا، وكانت تعمل معلمة حتى قبل عام. تجلس الآن على سريرها في غرفة نومها بمدينة نيومونستر وتفكر فيما يجب أن تأخذه معها على متن الطائرة إلى كمبوديا. الحقيبة ما زالت شبه فارغة، مع أنها مضطرة للمغادرة غدًا. تقدمت السيدة دورنر كجدة مربية (أوبير) لدى عائلة في بنوم بنه لمدة ستة أشهر. مهمتها رعاية طفل صغير ينحدر من عائلة ألمانية-أمريكية. يبلغ الطفل أربع سنوات، وتعمل والدته في كمبوديا لدى منظمة اليونيسف، وتخشى أن ينسى طفلها لغته الألمانية وهو بعيد عن والده الألماني لفترة طويلة، فالأب يعمل حاليًا في فرانكفورت.",
                "قررت السيدة دورنر للتو ترك المعطف الصوفي في المنزل، لأنها تعلم جيدًا أنها لن تحتاجه في الأشهر القادمة. لقد اطلعت بدقة على طبيعة الحياة في كمبوديا، وعلى المناخ الحار والرطب غير المعتاد، وتاريخ البلاد ومعابدها الرائعة، والفوارق الاجتماعية الكبيرة. تسكن عائلتها المضيفة في شقة فسيحة من 6 غرف مجهزة بمكيف هواء وخادمة، وهو أمر يستحيل على الأسرة الكمبودية المتوسطة تحقيقه.",
                "تدرك السيدة دورنر أنها خلال ستة أشهر لن تتمكن من بناء صلة عميقة بالبلاد، كما أنها لن تتعلم سوى كلمات قليلة بلغة الخمير المحلية. لكنها حضرت في الأشهر الأخيرة دورات تدريبية في اللغتين الإنجليزية والفرنسية، وتأمل أن تكون مستعدة جيدًا لهذه الرحلة الكبيرة."
              ],
              "fr": [
                "L'agence hambourgeoise Granny Aupair envoie des femmes dans le monde entier au sein de familles ou de projets sociaux. Aucune durée de séjour n'est imposée. Karin Dörner est veuve, âgée de 65 ans, et exerçait encore comme enseignante il y a un an. Aujourd'hui, elle est assise sur son lit dans sa chambre à Neumünster et réfléchit à ce qu'elle va encore emporter par avion au Cambodge. La valise est encore bien vide, alors qu'elle doit partir dès demain. Mme Dörner a postulé pour six mois comme « grand-mère au pair » auprès d'une famille à Phnom Penh. Elle doit s'occuper d'un petit garçon issu d'une famille américano-allemande. Le petit a quatre ans ; sa mère travaille au Cambodge pour l'UNICEF et craint qu'il n'oublie ses compétences en allemand s'il reste si longtemps séparé de son père allemand. Ce dernier travaille en effet actuellement à Francfort.",
                "Mme Dörner vient de décider de laisser son manteau de laine à la maison : elle sait pertinemment qu'elle n'en aura pas besoin dans les prochains mois. Elle s'est bien renseignée sur la vie au Cambodge, sur le climat inhabituellement chaud et humide, sur l'histoire et les magnifiques temples, mais aussi sur les grands écarts sociaux. Sa famille d'accueil vit dans un grand appartement de 6 pièces avec climatisation et femme de ménage, ce qui est inaccessible pour une famille cambodgienne moyenne.",
                "Mme Dörner est consciente qu'en six mois, elle ne pourra pas tisser un lien véritable avec le pays ; dans la langue locale, le khmer, elle n'apprendra sans doute que quelques mots. Mais ces derniers mois, elle a suivi des cours d'anglais et de français et espère être bien préparée pour ce grand voyage."
              ]
            },
            "source": {
              "ar": "(من صحيفة ألمانية)",
              "fr": "(d'après un journal allemand)"
            }
          }
        ],
        "example": {
          "ar": {
            "text": "وكالة جراني أوبير (Granny Aupair) …",
            "options": [
              "هي وكالة سفر وسياحة.",
              "هي عرض مخصص لكبار السن عمومًا.",
              "هي عرض مخصص للنساء فوق 60 عامًا."
            ]
          },
          "fr": {
            "text": "Granny Aupair …",
            "options": [
              "est une agence de voyage.",
              "est une offre destinée aux personnes âgées.",
              "est une offre pour les femmes de plus de 60 ans."
            ]
          }
        },
        "questions": {
          "7": {
            "text": {
              "ar": "السيدة دورنر …",
              "fr": "Mme Dörner …"
            },
            "options": {
              "ar": [
                "تريد القيام بجولة سياحية في أنحاء كمبوديا.",
                "تريد العمل لدى عائلة ورعاية طفل.",
                "تريد تعلم لغة البلد المحلية."
              ],
              "fr": [
                "veut faire un circuit touristique au Cambodge.",
                "veut travailler au sein d'une famille.",
                "veut apprendre la langue du pays."
              ]
            }
          },
          "8": {
            "text": {
              "ar": "تعلم السيدة دورنر أن …",
              "fr": "Mme Dörner sait que …"
            },
            "options": {
              "ar": [
                "ستعيش في بنوم بنه مع أسرة كمبودية متوسطة الحال.",
                "الطقس في كمبوديا يمثل صعوبة بالنسبة للأوروبيين.",
                "لا أحد يتحدث الألمانية في العائلة المضيفة."
              ],
              "fr": [
                "elle vivra à Phnom Penh dans une famille moyenne.",
                "le climat au Cambodge est difficile pour les Européens.",
                "personne ne parle allemand dans la famille d'accueil."
              ]
            }
          },
          "9": {
            "text": {
              "ar": "لكي تستعد للرحلة، قامت السيدة دورنر بـ …",
              "fr": "Pour se préparer, Mme Dörner a …"
            },
            "options": {
              "ar": [
                "إجراء تدريب خاص على التأقلم المناخي.",
                "حضور دورة تدريبية عن ثقافة كمبوديا القديمة.",
                "تحسين مهاراتها في اللغات الأجنبية."
              ],
              "fr": [
                "suivi un entraînement au climat.",
                "suivi un cours sur la culture de l'ancien Cambodge.",
                "amélioré ses compétences en langues étrangères."
              ]
            }
          }
        },
        "articles2": [
          {
            "heading": {
              "ar": "هل النساء الجميلات أكثر نجاحًا في الحياة المهنية؟",
              "fr": "Les belles femmes ont-elles plus de succès professionnel ?"
            },
            "sub": {
              "ar": "الطلاب والطالبات الجذابون يجدون الأمر أسهل في المدرسة، لكن عند التقدم للوظائف تكون الجميلات في وضع غير مواتٍ. ما سبب ذلك؟",
              "fr": "Les beaux élèves réussissent plus facilement, mais à l'embauche, les femmes séduisantes sont désavantagées. Pourquoi ?"
            },
            "body": {
              "ar": [
                "اكتشف علماء النفس أننا نربط لا شعوريًا بين الوجوه المتناسقة ذات البشرة الناعمة وعظام الوجنتين المرتفعة وبين الصفات الإيجابية. نعتقد أن الأشخاص الجذابين ودودون، وجديرون بالثقة، وذوو كفاءة. قد يفترض المرء إذن أن هؤلاء الأشخاص يمرون بمراحل حياتهم بسهولة أكبر من غيرهم. والآن تُظهر دراستان: هذا صحيح بالنسبة للمدرسة، لكنه ليس كذلك في الحياة المهنية.",
                "أجرت كلية التربية في فيينا دراسة على ثلاثة فصول في مدرسة ثانوية لإثبات تأثير الجمال على الدرجات. ووجدوا أن المراهقين الجذابين يحصلون بالفعل على درجات أفضل بمقدار 0.5 إلى 0.75 نقطة مقارنة بزملائهم الذين يمتلكون نفس الأداء.",
                "ولكن كيف يبدو الأمر في الحياة المهنية: هل يحصل الجذابون على أفضل الوظائف أيضًا؟",
                "أرسل باحثان في جامعة تل أبيب 2500 طلب توظيف مصحوبة بصور شخصية من أجل دراستهما. نصف الصور كانت لرجال ونساء جذابين، بينما انتمت البقية إلى وجوه عادية المظهر. وكانت النتيجة مدهشة: طُلب الرجال ذوو المظهر الجيد لإجراء المقابلات بضعف معدل المتقدمين العاديين.",
                "أما بالنسبة للنساء، فكان العكس تمامًا هو الصحيح. فبينما دُعيت نحو ثلث النساء ذوات المظهر العادي للمقابلة، تلقت 10% فقط من النساء الجميلات ردًا إيجابيًا.",
                "وعند البحث عن الأسباب، اكتشف الباحثون أن مكاتب شؤون الموظفين في الشركات تضم نساءً بالكامل تقريبًا – ويبدو أنهن يعتقدن أن النساء الجميلات يعكرن صفو بيئة العمل."
              ],
              "fr": [
                "Les psychologues ont découvert que nous associons inconsciemment les visages symétriques à la peau lisse et aux pommettes hautes à des qualités positives. Nous croyons que les personnes séduisantes sont aimables, fiables et compétentes. On pourrait dès lors supposer qu'elles ont la vie plus facile à chaque étape. Or, deux études récentes montrent que si c'est vrai pour l'école, cela ne s'applique pas au monde professionnel.",
                "L'École d'éducation de Vienne a mené une enquête auprès de trois classes de lycée pour mesurer l'impact de la beauté sur les notes. Ils ont constaté que les adolescents attirants étaient effectivement notés 0,5 à 0,75 point de mieux que leurs camarades à performances égales.",
                "Qu'en est-il dans la vie professionnelle : les personnes séduisantes décrochent-elles aussi les meilleurs postes ?",
                "Deux chercheurs de l'Université de Tel-Aviv ont envoyé 2 500 candidatures avec photos. La moitié montraient des hommes et femmes très attrayants, l'autre moitié des visages ordinaires. Le résultat fut frappant : les hommes séduisants ont été convoqués deux fois plus souvent que les autres.",
                "Chez les femmes, ce fut l'exact opposé. Seulement 10 % des belles femmes ont reçu une réponse positive, alors qu'environ un tiers des candidates au physique ordinaire ont été invitées à un entretien.",
                "En cherchant les raisons, les chercheurs ont découvert que les services du personnel sont presque exclusivement composés de femmes – et celles-ci estiment apparemment que les belles femmes perturbent l'ambiance de travail."
              ]
            },
            "source": {
              "ar": "(من صحيفة نمساوية)",
              "fr": "(d'après un journal autrichien)"
            }
          }
        ],
        "questions2": {
          "10": {
            "text": {
              "ar": "أثبت العلماء …",
              "fr": "Les scientifiques ont prouvé …"
            },
            "options": {
              "ar": [
                "أن الأشخاص الجذابين يحققون النجاح بسهولة في كل مكان.",
                "أن الجمال والأداء المتميز متلازمان دائمًا.",
                "أن المعلمين يتأثرون بالمظهر الخارجي للطلاب."
              ],
              "fr": [
                "que les personnes séduisantes réussissent facilement partout.",
                "que la beauté et les bons résultats vont toujours de pair.",
                "que les enseignants se laissent influencer par l'apparence physique."
              ]
            }
          },
          "11": {
            "text": {
              "ar": "كيف تم تنظيم الدراسة في تل أبيب؟",
              "fr": "Comment l'étude de Tel-Aviv a-t-elle été organisée ?"
            },
            "options": {
              "ar": [
                "تضمنت 50% من الصور رجالاً جذابين.",
                "أظهرت 10% من الصور أشخاصًا غير جذابين.",
                "أظهرت 50% من الصور أشخاصًا عاديين بمظهر يومي مألوف."
              ],
              "fr": [
                "Sur 50 % des photos figuraient des hommes séduisants.",
                "10 % des photos montraient des personnes non attirantes.",
                "50 % des photos montraient des personnes ordinaires d'apparence courante."
              ]
            }
          },
          "12": {
            "text": {
              "ar": "ما الذي توصل إليه الباحثون في النهاية؟",
              "fr": "Qu'ont découvert les chercheurs ?"
            },
            "options": {
              "ar": [
                "من المهم للشركة ألا يتسبب الموظفون الجدد في خلافات أو اضطراب.",
                "المظهر الجيد مهم للرجال تمامًا بنفس القدر بالنسبة للنساء.",
                "المتقدمون ذوو المظهر العادي يملكون حظوظًا أفضل دائمًا."
              ],
              "fr": [
                "Pour l'entreprise, il importe que les nouvelles recrues ne créent pas de conflits.",
                "Avoir une belle apparence est aussi important pour les hommes que pour les femmes.",
                "Les candidats d'apparence moyenne ont de meilleures chances dans l'absolu."
              ]
            }
          }
        }
      },
      "3": {
        "instructions": {
          "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من A إلى J من وسائل إعلام ناطقة بالألمانية. اختر: أي إعلان يناسب كل موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. إذا لم يكن هناك إعلان مناسب، فاختر X.",
          "fr": "Lisez les situations 13 à 19 et les annonces A à J issues de divers médias germanophones. Choisissez quelle annonce correspond à quelle situation. Vous ne pouvez utiliser chaque annonce qu'une seule fois. Si aucune annonce ne convient, choisissez X."
        },
        "ads": {
          "A": {
            "ar": "نبحث عن مساعدة في رعاية الأطفال (برلين). عائلة لطيفة تبحث عن شخص مرح لرعاية طفلين والمساعدة في الواجبات المدرسية والتحدث بالألمانية. هاتف: 030/452918",
            "fr": "Recherche aide pour garde d'enfants (Berlin). Famille sympathique cherche personne enjouée pour garder 2 enfants, aider aux devoirs et parler allemand. Tél : 030/452918"
          },
          "B": {
            "ar": "تعلم الألمانية المكثف: دورات صباحية ومسائية، شهادات B1 و B2، تحضير للامتحانات في معهد جوته. هامبورغ. هاتف: 040/38190",
            "fr": "Cours intensif d'allemand : cours du matin et du soir, diplômes B1 et B2, préparation aux examens de l'Institut Goethe. Hambourg. Tél : 040/38190"
          },
          "C": {
            "ar": "الأدب الروسي بالأصل: مكتبة متخصصة تقدم كتبًا روسية، وندوات قراءة شهرية ومحاضرات. كولونيا.",
            "fr": "Littérature russe en version originale : librairie spécialisée proposant des livres en russe, cercles de lecture mensuels et conférences. Cologne."
          },
          "D": {
            "ar": "مطلوب سائقو طرود: لشركة نقل سريعة في برلين وما حولها. رخصة قيادة سيارات، أوقات عمل مرنة، ساعات إضافية مدفوعة الأجر. هاتف: 030/88219",
            "fr": "Livreurs de colis recherchés : pour entreprise de transport rapide à Berlin et environs. Permis B requis, horaires flexibles, heures sup rémunérées. Tél : 030/88219"
          },
          "E": {
            "ar": "مزرعة مهور تبحث عن عمال مساعدين في عطلة نهاية الأسبوع لرعاية الخيول ومرافقة الأطفال. سويسرا/النمسا.",
            "fr": "Poney-club recherche assistants le week-end pour soigner les chevaux et encadrer les enfants. Suisse/Autriche."
          },
          "F": {
            "ar": "تدريب صحفي: مجلة إقليمية تبحث عن متدربين في قسم التحرير والصحافة الرقمية. فرانكفورت.",
            "fr": "Stage en journalisme : magazine régional recherche stagiaires pour la rédaction et le journalisme numérique. Francfort."
          },
          "G": {
            "ar": "مكتب ترجمة 'لينجوا': نبحث عن مترجمين مستقلين للغات الألمانية والبلغارية والإيطالية والروسية. العمل من المنزل عبر الإنترنت ممكن تمامًا.",
            "fr": "Bureau de traduction « Lingua » : nous recherchons des traducteurs indépendants pour l'allemand, le bulgare, l'italien et le russe. Télétravail à domicile possible."
          },
          "H": {
            "ar": "محل شاي صغير يبحث عن بائع/بائعة: بيع الشاي المتخصص والأعشاب، دوام جزئي. ميونخ.",
            "fr": "Petite boutique de thé cherche vendeur/vendeuse : vente de thés raffinés et infusions, temps partiel. Munich."
          },
          "I": {
            "ar": "خدمة طوارئ وصيانة الكمبيوتر: إصلاح الحواسيب والشبكات المنزلية في برلين. أسعار مناسبة للطلاب.",
            "fr": "Dépannage informatique d'urgence : réparation d'ordinateurs et réseaux à domicile à Berlin. Tarifs étudiants."
          },
          "J": {
            "ar": "معهد كلارا زيتكين للإعلام: أماكن تدريب لطلاب الإعلام والصحافة والاتصال الجماهيري. كولونيا. هاتف: 0221/94821",
            "fr": "Institut Clara-Zetkin des médias : places de stage pour étudiants en journalisme, médias et communication. Cologne. Tél : 0221/94821"
          }
        },
        "questions": {
          "13": {
            "ar": "يعيش إردال م. في ألمانيا منذ عام. يقود حاليًا شاحنة مغسلة لثلاث ساعات يوميًا، ولكنه بحاجة لكسب المزيد من المال.",
            "fr": "Erdal M. vit en Allemagne depuis un an. Actuellement, il conduit 3h par jour la camionnette d'un pressing. Il a besoin de plus d'argent."
          },
          "14": {
            "ar": "سوزان س. أمريكية تدرس الصحافة في كولونيا. تبحث عن فرصة تدريب عملي تناسب مجال دراستها الجامعية.",
            "fr": "Susan S. est américaine et étudie le journalisme à Cologne. Elle recherche un stage qui corresponde à ses études."
          },
          "15": {
            "ar": "ماريان ب. في برلين منذ أربعة أشهر. تحضر دورة للغة الألمانية صباحًا ثلاثة أيام أسبوعيًا، وتبحث عن عمل يتيح لها فرصة التحدث بالألمانية.",
            "fr": "Marian B. est à Berlin depuis 4 mois. Trois matinées par semaine, elle suit un cours d'allemand. Elle cherche un job pour pratiquer l'allemand."
          },
          "16": {
            "ar": "إيفا ر. من بلغاريا وتتحدث الألمانية والروسية والإيطالية بطلاقة. ترغب في العمل، لكنها تسكن في الريف ولديها طفل رضيع.",
            "fr": "Ewa R. vient de Bulgarie. Elle parle couramment allemand, russe et italien. Elle aimerait travailler, mais vit à la campagne avec un bébé."
          },
          "17": {
            "ar": "لويلا م. تبحث عن وظيفة في فندق بالنمسا أو سويسرا. وهي تعمل حاليًا في فندق بمدينة هامبورغ.",
            "fr": "Luella M. recherche un emploi dans un hôtel en Autriche ou en Suisse. Actuellement, elle travaille dans un hôtel à Hambourg."
          },
          "18": {
            "ar": "كريستوف ك. متقاعد ويحب ركوب الخيل كثيرًا. يرغب في المساعدة في إسطبل خيول دون مقابل مادي أحيانًا.",
            "fr": "Christoph K. est retraité et adore monter à cheval. Il aimerait donner un coup de main dans un centre équestre."
          },
          "19": {
            "ar": "أولريك ت. طالبة في برلين تعطل حاسوبها المحمول قبل موعد تسليم بحثها الجامعي بيومين.",
            "fr": "Ulrike T. est étudiante à Berlin. Son ordinateur portable est tombé en panne deux jours avant de rendre son mémoire."
          }
        }
      },
      "4": {
        "instructions": {
          "ar": "تقرأ في إحدى المجلات تعليقات حول مقال عن رفع سن التقاعد إلى 70 عامًا. اختر: هل يؤيد هذا الشخص رفع سن التقاعد إلى 70 عامًا؟",
          "fr": "Dans un magazine, vous lisez des commentaires sur un article concernant le report de l'âge de la retraite à 70 ans. Choisissez : la personne est-elle favorable au report de l'âge de la retraite à 70 ans ?"
        },
        "example": {
          "who": "برنهارد، 49 عامًا، غيلسنكيرشن",
          "text": {
            "ar": "أنا أعمل في البناء منذ 30 عامًا. جسمي منهك بالفعل الآن، والعمل حتى سن السبعين مستحيل تمامًا بالنسبة لي ولزملائي.",
            "fr": "Je travaille dans le bâtiment depuis 30 ans. Mon corps est déjà brisé, travailler jusqu'à 70 ans est impensable pour moi et mes collègues."
          }
        },
        "letters": {
          "20": {
            "who": "ريناته، 52 عامًا، لايبزيغ",
            "text": {
              "ar": "الناس اليوم يعيشون لفترات أطول ويتمتعون بصحة أفضل بكثير من الماضي. إذا كنا نريد الحفاظ على استقرار نظام المعاشات، فلا مفر من العمل لسنوات أطول.",
              "fr": "Les gens vivent plus longtemps et en bien meilleure santé aujourd'hui. Pour maintenir le système des retraites, il est indispensable de travailler plus longtemps."
            }
          },
          "21": {
            "who": "ماركوس، 34 عامًا، بون",
            "text": {
              "ar": "إذا ظل كبار السن يعملون حتى سن 70، فكيف سيجد الشباب خريجو الجامعات والمدارس وظائف جديدة؟ هذا القرار سيزيد بطالة الشباب.",
              "fr": "Si les seniors restent en poste jusqu'à 70 ans, comment les jeunes diplômés vont-ils trouver du travail ? Cela aggravera le chômage des jeunes."
            }
          },
          "22": {
            "who": "سابينه، 61 عامًا، ميونخ",
            "text": {
              "ar": "أنا أحب وظيفتي كطبيبة أطفال ولا أتخيل الجلوس في المنزل دون فعل شيء. طالما يمتلك الإنسان طاقة ورغبة، يجب أن يُسمح له بالاستمرار في العطاء.",
              "fr": "J'adore mon métier de pédiatre et je ne me vois pas rester inactive chez moi. Tant qu'on a l'énergie et l'envie, on devrait pouvoir continuer."
            }
          },
          "23": {
            "who": "حسن، 43 عامًا، بريمن",
            "text": {
              "ar": "الحياة ليست مجرد عمل وكد حتى الرمق الأخير! بعد عقود من دفع الضرائب والتأمينات، يستحق المرء سنوات راحة هادئة مع عائلته وأحفاده.",
              "fr": "La vie ne se résume pas au travail ! Après des décennies de cotisations, on a droit à des années paisibles avec sa famille et ses petits-enfants."
            }
          },
          "24": {
            "who": "أندريا، 28 عامًا، دريسدن",
            "text": {
              "ar": "من غير المنطقي إلزام الجميع بنفس السن. موظف المكتب قد يستطيع العمل بسهولة، لكن ممرضة الرعاية أو عامل المصنع يستحيل عليهما ذلك.",
              "fr": "Il est absurde d'imposer le même âge à tous. Un employé de bureau le peut sans doute, mais un soignant ou un ouvrier d'usine en est incapable."
            }
          },
          "25": {
            "who": "غيرد، 58 عامًا، شتوتغارت",
            "text": {
              "ar": "تفتقر شركاتنا بالفعل إلى العمالة الخبيرة والمتخصصة. استمرار كبار السن ذوي الخبرة يمثل مكسبًا اقتصاديًا حقيقيًا للبلد بأكمله.",
              "fr": "Nos entreprises manquent cruellement de main-d'œuvre qualifiée. Garder les seniors expérimentés est un atout économique majeur pour le pays."
            }
          },
          "26": {
            "who": "إنجي، 64 عامًا، فيينا",
            "text": {
              "ar": "هذا مجرد اقتطاع غير مباشر من المعاشات التقاعدية! من يضطر للتوقف قبل سن 70 لظروفه الصحية سيحصل على معاش ضئيل لا يكفيه.",
              "fr": "C'est une baisse déguisée des retraites ! Ceux qui devront s'arrêter plus tôt pour raisons de santé subiront de lourdes décotes injustes."
            }
          }
        }
      },
      "5": {
        "instructions": {
          "ar": "اقرأ المهام من 27 إلى 30 والنظام الداخلي المرفق. اختر الحل الصحيح a أو b أو c لكل مهمة.",
          "fr": "Lisez les tâches 27 à 30 et le règlement intérieur correspondant. Choisissez pour chaque tâche la bonne solution a, b ou c."
        },
        "articles": [
          {
            "heading": {
              "ar": "مجمع 'أم زي' السكني (Wohnpark „Am See“)",
              "fr": "Résidence « Am See » (Wohnpark „Am See“)"
            },
            "sub": {
              "ar": "النظام الداخلي للمستأجرين والضيوف",
              "fr": "Règlement intérieur pour locataires et invités"
            },
            "sections": [
              {
                "title": {
                  "ar": "أوقات الهدوء والسكينة العامة",
                  "fr": "Périodes de repos et tranquillité"
                },
                "items": {
                  "ar": [
                    "فترة راحة الظهيرة: من الساعة 13:00 حتى 15:00. فترة الهدوء الليلي: من الساعة 22:00 حتى 07:00 صباحًا.",
                    "أيام الأحد والعطلات الرسمية يسري الهدوء طوال اليوم. يُرجى تجنب تشغيل الأجهزة المسببة للضوضاء والموسيقى الصاخبة."
                  ],
                  "fr": [
                    "Repos de midi : de 13h00 à 15h00. Repos nocturne : de 22h00 à 07h00.",
                    "Les dimanches et jours fériés, le calme doit régner toute la journée. Éviter la musique forte et les appareils bruyants."
                  ]
                }
              },
              {
                "title": {
                  "ar": "فرز النفايات والتخلص منها",
                  "fr": "Tri et élimination des déchets"
                },
                "items": {
                  "ar": [
                    "يجب فصل النفايات بدقة في الحاويات المخصصة (الورق، الزجاج، المواد البلاستيكية/النقطة الخضراء، النفايات المتبقية).",
                    "لا يجوز إلقاء النفايات الضخمة أو الأجهزة القديمة في الحاويات العادية؛ بل يجب حجز موعد خاص مع إدارة الحي."
                  ],
                  "fr": [
                    "Les déchets doivent être strictement triés dans les bacs prévus (papier, verre, emballages, ordures ménagères).",
                    "Les encombrants et appareils électriques sont interdits dans les bacs ordinaires ; une collecte spéciale doit être réservée."
                  ]
                }
              },
              {
                "title": {
                  "ar": "ركن السيارات واستخدام المرافق المشتركة",
                  "fr": "Stationnement et espaces communs"
                },
                "items": {
                  "ar": [
                    "لا يُسمح بركن السيارات إلا في المواقف المرقمة المخصصة لكل شقة. مواقف الضيوف مخصصة للزيارات القصيرة فقط.",
                    "يجب إغلاق أبواب المداخل الرئيسية دائمًا لأسباب أمنية ابتداءً من الساعة 21:00."
                  ],
                  "fr": [
                    "Le stationnement n'est autorisé que sur les places numérotées attribuées. Les places visiteurs sont réservées aux séjours courts.",
                    "Pour des raisons de sécurité, les portes d'entrée de l'immeuble doivent être fermées à clé à partir de 21h00."
                  ]
                }
              }
            ]
          }
        ],
        "questions": {
          "27": {
            "text": {
              "ar": "متى يُسمح بالعزف على الآلات الموسيقية الصاخبة؟",
              "fr": "Quand est-il permis de jouer d'un instrument de musique bruyant ?"
            },
            "options": {
              "ar": [
                "فقط خارج أوقات الهدوء المحددة في النظام الداخلي.",
                "في أي وقت خلال أيام الأحد والعطلات.",
                "بين الساعة 13:00 و 15:00 بعد الظهر."
              ],
              "fr": [
                "Uniquement en dehors des périodes de repos réglementaires.",
                "À tout moment les dimanches et jours fériés.",
                "Entre 13h00 et 15h00 l'après-midi."
              ]
            }
          },
          "28": {
            "text": {
              "ar": "كيف يتم التعامل مع النفايات الكبيرة الحجم (النفايات الضخمة)؟",
              "fr": "Que doit-on faire avec les objets encombrants ?"
            },
            "options": {
              "ar": [
                "يمكن وضعها بجانب الحاويات العادية في أي وقت.",
                "يجب الاتفاق على موعد مخصص لجمعها بشكل منفصل.",
                "يجب التخلص منها في حاوية النفايات المتبقية الصغيرة."
              ],
              "fr": [
                "On peut les déposer à côté des bacs ordinaires à tout moment.",
                "Il faut convenir d'un rendez-vous spécial pour leur enlèvement.",
                "Il faut les jeter dans le petit bac à ordures résiduelles."
              ]
            }
          },
          "29": {
            "text": {
              "ar": "أين يُسمح لضيوف السكان بركن سياراتهم؟",
              "fr": "Où les visiteurs des résidents peuvent-ils garer leur voiture ?"
            },
            "options": {
              "ar": [
                "في أي مكان داخل المجمع دون تقيد.",
                "في المواقف المخصصة للزوار لفترة زمنية محدودة.",
                "على الرصيف أمام المدخل الرئيسي فقط."
              ],
              "fr": [
                "N'importe où dans la résidence sans restriction.",
                "Sur les places visiteurs prévues, pour une courte durée.",
                "Sur le trottoir devant l'entrée principale uniquement."
              ]
            }
          },
          "30": {
            "text": {
              "ar": "ما هي التعليمات المتعلقة بباب المبنى الرئيسي في المساء؟",
              "fr": "Quelle est la règle concernant la porte d'entrée le soir ?"
            },
            "options": {
              "ar": [
                "يجب إبقاء الباب مفتوحًا لتسهيل دخول الزوار.",
                "يجب إغلاق الباب بالمفتاح بدءًا من الساعة التاسعة مساءً.",
                "يتم فتح الباب تلقائيًا طوال الليل."
              ],
              "fr": [
                "La porte doit rester ouverte pour faciliter l'accès.",
                "Elle doit être fermée à clé à partir de 21 heures.",
                "Elle s'ouvre automatiquement toute la nuit."
              ]
            }
          }
        }
      },
      "6": {
        "instructions": {
          "ar": "يتكون قسم الاستماع من أربعة أجزاء. ستستمع إلى عدة نصوص وتقوم بحل المهام المرتبطة بها. لكل مهمة إجابة صحيحة واحدة فقط.",
          "fr": "Le module Compréhension orale se compose de quatre parties. Vous écouterez plusieurs enregistrements et répondrez aux questions associées. Pour chaque tâche, il n'y a qu'une seule bonne réponse."
        },
        "teile": {
          "1": {
            "title": {
              "ar": "خمسة نصوص قصيرة · المهام من 1 إلى 10",
              "fr": "Cinq courts enregistrements · Tâches 1 à 10"
            },
            "desc": {
              "ar": "ستستمع الآن إلى خمسة نصوص قصيرة. ستستمع إلى كل نص مرتين. لكل نص ستقوم بحل مهمتين. اختر الحل الصحيح لكل مهمة. اقرأ المثال أولاً. لديك 10 ثوانٍ لذلك.",
              "fr": "Vous allez entendre cinq courts textes. Vous écouterez chaque texte deux fois. Pour chaque texte, vous devez résoudre deux tâches. Choisissez la bonne réponse pour chaque tâche. Lisez d'abord l'exemple. Vous disposez de 10 secondes."
            }
          },
          "2": {
            "title": {
              "ar": "متحف مدينة ميونخ · المهام من 11 إلى 15",
              "fr": "Musée de la ville de Munich · Tâches 11 à 15"
            },
            "desc": {
              "ar": "ستستمع الآن إلى نص واحد. ستستمع إلى هذا النص مرة واحدة فقط. اختر الحل الصحيح a أو b أو c للمهام من 11 إلى 15. اقرأ المهام أولاً. لديك 60 ثانية لذلك.",
              "fr": "Vous allez entendre un enregistrement. Vous ne l'écouterez qu'une seule fois. Choisissez la bonne solution a, b ou c pour les tâches 11 à 15. Lisez d'abord les tâches. Vous avez 60 secondes pour cela."
            }
          },
          "3": {
            "title": {
              "ar": "محادثة في موقف الحافلات · المهام من 16 إلى 22",
              "fr": "Conversation à un arrêt de bus · Tâches 16 à 22"
            },
            "desc": {
              "ar": "ستستمع الآن إلى محادثة. ستستمع إلى هذه المحادثة مرة واحدة فقط. حدد ما إذا كانت العبارات الواردة في المهام من 16 إلى 22 صحيحة أم خاطئة. اقرأ المهام أولاً. لديك 60 ثانية لذلك.",
              "fr": "Vous allez entendre une conversation. Vous ne l'écouterez qu'une seule fois. Indiquez si les affirmations des tâches 16 à 22 sont Vraies ou Fausses. Lisez d'abord les tâches. Vous avez 60 secondes pour cela."
            }
          },
          "4": {
            "title": {
              "ar": "برنامج حواري إذاعي · المهام من 23 إلى 30",
              "fr": "Débat radiophonique · Tâches 23 à 30"
            },
            "desc": {
              "ar": "ستستمع الآن إلى نقاش إذاعي. ستستمع إلى هذا النقاش مرتين. حدد من الذي عبر عن الرأي الوارد في المهام من 23 إلى 30: منسق الحوار (a)، دانا شنايدر (b)، أو فلوريان بادر (c). اقرأ المهام أولاً. لديك 60 ثانية لذلك.",
              "fr": "Vous allez entendre un débat radiophonique. Vous l'écouterez deux fois. Attribuez chaque opinion (tâches 23 à 30) à la bonne personne : le modérateur (a), Dana Schneider (b) ou Florian Bader (c). Lisez d'abord les tâches. Vous avez 60 secondes pour cela."
            },
            "prompt": {
              "ar": "السؤال المحوري للنقاش: هل ينبغي للأطفال دون سن الثالثة الذهاب إلى دار الحضانة (الكريش)؟",
              "fr": "Question directrice : Les enfants de moins de trois ans devraient-ils aller en crèche ?"
            }
          }
        },
        "questions": {
          "h1": {
            "text": {
              "ar": "سيتم تأجيل موعد السيدة شتاين.",
              "fr": "Le rendez-vous de Mme Stein est reporté."
            }
          },
          "h2": {
            "text": {
              "ar": "يجب على السيدة شتاين …",
              "fr": "Mme Stein doit …"
            },
            "options": {
              "ar": ["إحضار البطاقة الذكية (Chipkarte).", "دفع عشرة يوروهات.", "إعادة الاتصال هاتفياً."],
              "fr": ["apporter sa carte à puce.", "payer dix euros.", "rappeler par téléphone."]
            }
          },
          "h3": {
            "text": {
              "ar": "يُعلم السيد توماس السيدة برامز بأسعار التأمين الجديدة.",
              "fr": "M. Thomas informe Mme Brahms de nouveaux tarifs d'assurance."
            }
          },
          "h4": {
            "text": {
              "ar": "السيد توماس ...",
              "fr": "M. Thomas ..."
            },
            "options": {
              "ar": ["يريد من السيدة برامز إبرام عقد جديد.", "يحتاج إلى شهادات من السيدة برامز.", "سيعاود الاتصال لاحقاً."],
              "fr": ["souhaite que Mme Brahms signe un nouveau contrat.", "a besoin des diplômes de Mme Brahms.", "rappellera plus tard."]
            }
          },
          "h5": {
            "text": {
              "ar": "أنت تستمع إلى نصائح حول الفعاليات في ميونخ.",
              "fr": "Vous écoutez des conseils de sorties pour Munich."
            }
          },
          "h6": {
            "text": {
              "ar": "هناك ازدحام مروري على الطريق السريع بسبب ...",
              "fr": "Il y a des embouteillages sur l'autoroute à cause ..."
            },
            "options": {
              "ar": ["ورشة عمل وأشغال طريق.", "حركة المرور في ساعة الذروة.", "حادث مروري."],
              "fr": ["d'un chantier.", "du trafic pendulaire.", "d'un accident."]
            }
          },
          "h7": {
            "text": {
              "ar": "أنت تستمع إلى معلومات مخصصة لمجموعة سياحية.",
              "fr": "Vous écoutez une information pour un groupe de voyageurs."
            }
          },
          "h8": {
            "text": {
              "ar": "أي قطار تم إلغاؤه؟ القطار المتجه إلى …",
              "fr": "Quel train est annulé ? Le train pour …"
            },
            "options": {
              "ar": ["برن.", "جنيف.", "لوزان."],
              "fr": ["Berne.", "Genève.", "Lausanne."]
            }
          },
          "h9": {
            "text": {
              "ar": "الطقس سيتحسن في شرق ألمانيا.",
              "fr": "La météo va s'améliorer dans l'est de l'Allemagne."
            }
          },
          "h10": {
            "text": {
              "ar": "تتوقع النشرة الجوية ...",
              "fr": "Les prévisions annoncent ..."
            },
            "options": {
              "ar": ["عواصف رعدية عند نهر إلبه.", "درجات حرارة تحت 10 درجات.", "أمطاراً غزيرة في الغرب."],
              "fr": ["des orages près de l'Elbe.", "des températures sous 10 degrés.", "de fortes pluies dans l'ouest."]
            }
          },
          "h11": {
            "text": {
              "ar": "المتحف ...",
              "fr": "Le musée est ..."
            },
            "options": {
              "ar": ["مزدحم جداً.", "مغلق جزئياً.", "شبه فارغ وهادئ."],
              "fr": ["très fréquenté.", "partiellement fermé.", "plutôt vide."]
            }
          },
          "h12": {
            "text": {
              "ar": "ماذا سيعرض المرشد السياحي للسياح؟",
              "fr": "Que présente le guide du musée aux touristes ?"
            },
            "options": {
              "ar": ["جميع المعارض", "المعرض الرئيسي", "المعارض الخاصة"],
              "fr": ["toutes les expositions", "l'exposition principale", "les expositions temporaires"]
            }
          },
          "h13": {
            "text": {
              "ar": "أين نقطة الالتقاء في فترة ما بعد الظهر؟",
              "fr": "Où se trouve le point de rendez-vous l'après-midi ?"
            },
            "options": {
              "ar": ["عند المدخل", "عند خزانة الملابس (Garderobe)", "في المقهى"],
              "fr": ["à l'entrée", "au vestiaire", "au café"]
            }
          },
          "h14": {
            "text": {
              "ar": "يتناول المعرض موضوع ...",
              "fr": "L'exposition traite de ..."
            },
            "options": {
              "ar": ["مهرجان أكتوبر (Oktoberfest).", "المطبخ البافاري التقليدي.", "تاريخ مدينة ميونخ."],
              "fr": ["la fête de la bière (Oktoberfest).", "la gastronomie bavaroise.", "l'histoire de Munich."]
            }
          },
          "h15": {
            "text": {
              "ar": "يوصي المرشد السياحي المشاركين بزيارة ...",
              "fr": "Le guide du musée recommande aux participants ..."
            },
            "options": {
              "ar": ["مطعم.", "مقهى.", "حديقة بيرة بافارية تقليدية (Biergarten)."],
              "fr": ["une visite de restaurant.", "une visite de café.", "une visite de Biergarten."]
            }
          },
          "h16": {
            "text": {
              "ar": "تم خلال الحفل الاحتفال بعيد ميلاد زوج آنا.",
              "fr": "Lors de la fête, on a célébré l'anniversaire du mari d'Anna."
            }
          },
          "h17": {
            "text": {
              "ar": "نادية معجبة ومتحمسة جداً لمنزل المضيفين.",
              "fr": "Nadia est enthousiasmée par la maison des hôtes."
            }
          },
          "h18": {
            "text": {
              "ar": "نادية تعمل في التلفزيون.",
              "fr": "Nadia travaille pour la télévision."
            }
          },
          "h19": {
            "text": {
              "ar": "كان الطعام ممتازاً ولذيذاً للغاية.",
              "fr": "La nourriture était excellente."
            }
          },
          "h20": {
            "text": {
              "ar": "عزفت نادية الموسيقى مع العازف.",
              "fr": "Nadia a joué de la musique avec le musicien."
            }
          },
          "h21": {
            "text": {
              "ar": "عزفت نادية موسيقى الجاز أيضاً.",
              "fr": "Nadia a également joué du jazz."
            }
          },
          "h22": {
            "text": {
              "ar": "استمر الحفل إلى ما بعد الساعة 12 منتصف الليل.",
              "fr": "La fête a duré jusqu'après minuit."
            }
          },
          "h23": {
            "text": {
              "ar": "يحتاج الأطفال الصغار قبل كل شيء إلى التواصل مع أطفال آخرين.",
              "fr": "Les jeunes enfants ont avant tout besoin de contact avec d'autres enfants."
            }
          },
          "h24": {
            "text": {
              "ar": "السنوات الأولى من العمر هي الأكثر أهمية للارتباط بالوالدين.",
              "fr": "Les premières années de vie sont les plus importantes pour le lien avec les parents."
            }
          },
          "h25": {
            "text": {
              "ar": "المربيات في الحضانة لا يمكن أن يعوضن دور الأم.",
              "fr": "Les éducatrices ne peuvent pas remplacer la mère."
            }
          },
          "h26": {
            "text": {
              "ar": "يتعلم الأطفال في السنوات الأولى من حياتهم بسرعة فائقة.",
              "fr": "Dans les premières années, les enfants apprennent particulièrement vite."
            }
          },
          "h27": {
            "text": {
              "ar": "الذهاب إلى الحضانة يساعد الأطفال لاحقاً في مسيرتهم المدرسية.",
              "fr": "Fréquenter une crèche aide les enfants plus tard à l'école."
            }
          },
          "h28": {
            "text": {
              "ar": "ينبغي دعم الآباء مالياً إذا اختاروا رعاية أطفالهم في المنزل.",
              "fr": "On devrait soutenir financièrement les parents qui gardent leurs enfants à la maison."
            }
          },
          "h29": {
            "text": {
              "ar": "يجب على الدولة إنفاق المزيد من الأموال لصالح العائلات.",
              "fr": "L'État devrait dépenser plus d'argent pour les familles."
            }
          },
          "h30": {
            "text": {
              "ar": "يجب أن يتمكن الآباء من تقرير كيفية رعاية طفلهم بأنفسهم بحرية.",
              "fr": "Les parents doivent pouvoir décider eux-mêmes du mode de garde de leur enfant."
            }
          }
        }
      }
    }
  },
  "modellsatz-4": {
    "parts": {
        "1": {
            "instructions": {
                "ar": "اقرأ النص والأسئلة من 1 إلى 6 المتعلقة به. اختر: هل العبارات صحيحة أم خاطئة؟",
                "fr": "Lisez le texte et les questions 1 à 6 correspondantes. Choisissez : les affirmations sont-elles Vraies ou Fausses ?"
            },
            "articles": [
                {
                    "heading": {
                        "ar": "منتدى – نحن هنا من أجلك! – حيل الإعلانات",
                        "fr": "Forum – Nous sommes là pour toi ! – Astuces publicitaires"
                    },
                    "sub": {
                        "ar": "حيل الإعلانات التجارية",
                        "fr": "Astuces publicitaires"
                    },
                    "body": {
                        "ar": [
                            "أود أيضًا أن أشارك تجربتي مع الحيل الإعلانية. لقد كنا أنا وصديقتي مهتمين دائمًا بالتغذية المتوازنة والصحية. لهذا السبب كنا نتناول كثيرًا وعلى الإفطار رقائق الحبوب من علامة «Fit» مع الحليب أو الزبادي. وأحيانًا كنا نتناولها في العشاء أيضًا. لم تكن الإعلانات تعد فقط بنسبة عالية من الحبوب الكاملة، بل وعدت أيضًا بـ «متعة خفيفة للمحافظة على الرشاقة»، لأنها قليلة الدهون والسكر. وبكل سذاجة واطمئنان، استهلكنا المزيد من المنتج معتقدين أننا نفعل شيئًا رائعًا لصحة أجسامنا. وفوق ذلك، مذاق رقائق «Fit» لذيذ للغاية!",
                            "لكن بعد فترة من الوقت، لاحظنا أن وزنينا قد زادا معًا! أرجعنا ذلك في البداية إلى قلة الحركة. فنحن موظفان بدوام كامل ونقضي ساعات طويلة في المكاتب. لذلك قررنا ممارسة المزيد من الرياضة في عطلات نهاية الأسبوع. ولكن ذلك لم يحقق النتيجة المرجوة على المدى الطويل؛ فقد أصبحنا أكثر لياقة بدنية، لكن لم يفقد أي منا غرامًا واحدًا.",
                            "ثم عثرت بالصدفة على الإنترنت على موقع يتناول موضوع حيل الإعلانات. ويا للمفاجأة: كانت رقائق حبوب «Fit» التي اعتبرناها 'صحية' مثالاً بارزًا على كيفية استدراج المستهلكين للشراء عبر معلومات مضللة! علمتُ أن معظم رقائق الذرة تحتوي على كميات هائلة من السكر. وفي العلامة التجارية التي اخترناها، كانت النسبة تصل إلى 30%! أسرعتُ بإحضار عبوة «Fit» من المطبخ وقرأت بالفعل: 35 غرامًا من السكر لكل 100 غرام! وتوصية الاستهلاك اليومي: 40 غرامًا فقط!! من يشبع من هذه الكمية الضئيلة؟ لا يمكنني تمضية الصباح دون قرقرة في المعدة، لذا كنا نتناول دائمًا ضعف هذه الكمية على الأقل.",
                            "أما بالنسبة للحبوب الكاملة، فالأمر كله خدعة. فنسبة 20% من الحبوب الكاملة بعيدة كل البعد عن أن تكون منتج حبوب كاملة حقيقيًا. ففي خبز الحبوب الكاملة على سبيل المثال، يجب أن تبلغ النسبة 90% على الأقل. فلا عجب إذن أننا اكتسبنا وزنًا إضافيًا رغم اعتقادنا أننا نأكل طعامًا خفيفًا وصحيًا. ومنذ ذلك الحين، أصبحنا نتناول شريحة من خبز الحبوب الكاملة مع السمن والجبن الطازج والمربى. وهذا يعطي سكرًا أقل بكثير لكل 100 غرام، رغم المربى! وقد بدأنا بالفعل في خسارة بعض الوزن."
                        ],
                        "fr": [
                            "J'aimerais moi aussi partager mon expérience avec les pièges publicitaires. Mon amie et moi avons toujours été attentifs à une alimentation équilibrée. C'est pourquoi nous mangions souvent au petit-déjeuner des céréales de la marque « Fit » avec du lait ou du yaourt, et parfois même le soir. Non seulement le texte publicitaire promettait une forte proportion de céréales complètes, mais aussi « un plaisir léger pour la ligne », affirmant qu'elles contenaient peu de matières grasses et de sucre. Naïfs comme nous l'étions, nous en consommions d'autant plus en pensant faire du bien à notre corps. Et en plus, les céréales « Fit » sont délicieuses !",
                            "Au bout d'un certain temps, nous avons constaté que nous avions tous les deux pris du poids. Au début, nous avons attribué cela au manque d'activité physique. Travaillant tous deux à plein temps dans un bureau, nous avons décidé de faire plus de sport le week-end. Mais cela n'a pas donné le résultat escompté : nous étions plus en forme, mais aucun de nous n'avait maigri.",
                            "Puis je suis tombé par hasard sur Internet sur un site traitant des ruses publicitaires. Et surprise : nos fameuses céréales « saines » « Fit » y figuraient comme exemple typique de la façon dont de fausses informations incitent les consommateurs à l'achat ! J'ai découvert que la plupart des céréales contiennent beaucoup trop de sucre : 30 % pour notre marque. J'ai couru chercher le paquet dans la cuisine et j'ai lu avec stupeur : 35 g de sucre pour 100 g ! Et la portion quotidienne recommandée : 40 g !! Qui peut être rassasié avec cela ? Je ne tiendrais pas la matinée sans avoir faim. Nous en mangions toujours au moins le double.",
                            "Et quant aux céréales complètes, c'est aussi une tromperie. 20 % de céréales complètes ne suffisent absolument pas pour un vrai produit complet (le pain complet en exige au moins 90 %). Pas étonnant que nous ayons grossi en croyant manger sainement ! Depuis, nous mangeons une tranche de pain complet avec de la margarine, du fromage frais et de la confiture : cela représente bien moins de sucre pour 100 g, malgré la confiture. Et nous avons déjà un peu maigri."
                        ]
                    },
                    "signature": {
                        "ar": "بيرند غايسنر",
                        "fr": "Bernd Geißner"
                    }
                }
            ],
            "questions": {
                "1": {
                    "text": {
                        "ar": "اعتبر بيرند رقائق «Fit» طعامًا صحيًا.",
                        "fr": "Bernd considérait les céréales « Fit » comme saines."
                    }
                },
                "2": {
                    "text": {
                        "ar": "على الرغم من ساعات عمل بيرند الطويلة، وجد وقتًا يوميًا لممارسة التمارين الرياضية.",
                        "fr": "Bien que Bernd travaillât beaucoup d'heures, il trouvait quotidiennement le temps de faire des exercices de fitness."
                    }
                },
                "3": {
                    "text": {
                        "ar": "تُصنع رقائق «Fit» حصريًا تقريبًا من السكر.",
                        "fr": "Les céréales « Fit » sont fabriquées presque exclusivement à partir de sucre."
                    }
                },
                "4": {
                    "text": {
                        "ar": "كل ما كُتب على عبوة «Fit» لا يحتوي سوى الأكاذيب.",
                        "fr": "Sur le paquet « Fit », il n'y a que des mensonges."
                    }
                },
                "5": {
                    "text": {
                        "ar": "زاد وزن بيرند لأنه كان يفرط في تناول الرقائق.",
                        "fr": "Bernd a pris du poids parce qu'il mangeait trop de céréales."
                    }
                },
                "6": {
                    "text": {
                        "ar": "رقائق «Fit» في الحقيقة ليست منتج حبوب كاملة فعلي.",
                        "fr": "Les céréales « Fit » ne sont en réalité pas un vrai produit complet."
                    }
                }
            }
        },
        "2": {
            "instructions": {
                "ar": "اقرأ النص الصحفي والأسئلة 7 إلى 9 المتعلقة به. اختر لكل سؤال الحل الصحيح a أو b أو c.",
                "fr": "Lisez le texte de presse et les questions 7 à 9. Choisissez pour chaque question la bonne solution a, b ou c."
            },
            "questions": {
                "7": {
                    "text": {
                        "ar": "يدور هذا النص حول …",
                        "fr": "Dans ce texte, il s'agit de…"
                    },
                    "options": {
                        "ar": [
                            "المشاكل البيئية في جبال الألب.",
                            "ركوب الدراجات في سويسرا.",
                            "جولات ركوب الدراجات في جبال الألب."
                        ],
                        "fr": [
                            "Des problèmes environnementaux dans les Alpes.",
                            "De la pratique du vélo en Suisse.",
                            "Des circuits à vélo dans les Alpes."
                        ]
                    }
                },
                "8": {
                    "text": {
                        "ar": "في الجولة الممتدة من إنسبروك إلى كورتينا دامبيتزو …",
                        "fr": "Sur le circuit d'Innsbruck à Cortina d’Ampezzo…"
                    },
                    "options": {
                        "ar": [
                            "توجد حلويات شهية.",
                            "يمكن للمرء مشاهدة الكثير من المعالم.",
                            "يسافر راكبو الدراجات الجبلية بكل سرور."
                        ],
                        "fr": [
                            "Il y a de bons desserts.",
                            "On peut voir beaucoup de choses.",
                            "Les vététistes voyagent très volontiers."
                        ]
                    }
                },
                "9": {
                    "text": {
                        "ar": "في الأكواخ الجبلية بحوض فانيس …",
                        "fr": "Dans les refuges de montagne du cirque de Fanes…"
                    },
                    "options": {
                        "ar": [
                            "توجد مشروبات فقط.",
                            "يمكن للمرء المبيت والنوم.",
                            "يمكن للمرء تناول وجبات لذيذة."
                        ],
                        "fr": [
                            "Il n'y a que des boissons.",
                            "On peut dormir.",
                            "On peut manger de délicieux plats."
                        ]
                    }
                },
                "10": {
                    "text": {
                        "ar": "يتناول هذا النص …",
                        "fr": "Dans ce texte, il s'agit de…"
                    },
                    "options": {
                        "ar": [
                            "إمكانات عديدة للقيام برحلة.",
                            "طريقة جديدة لاستكشاف المعالم السياحية.",
                            "معالم أثرية نمساوية."
                        ],
                        "fr": [
                            "De nombreuses façons de voyager.",
                            "Une nouvelle façon de découvrir des sites touristiques.",
                            "Monuments autrichiens."
                        ]
                    }
                },
                "11": {
                    "text": {
                        "ar": "تقوم غوغل بـ …",
                        "fr": "Google…"
                    },
                    "options": {
                        "ar": [
                            "تمكين مستخدمي الإنترنت من الاطلاع وقراءة مخطوطات المتاحف.",
                            "التعاون مع المكتبة الوطنية النمساوية.",
                            "جمع الأعمال الفنية الشهيرة من المتاحف."
                        ],
                        "fr": [
                            "Permet aux internautes de voir et lire des écrits issus des musées.",
                            "Collabore avec la Bibliothèque nationale d'Autriche.",
                            "Collectionne des œuvres célèbres de musées."
                        ]
                    }
                },
                "12": {
                    "text": {
                        "ar": "الرحلات البعيدة …",
                        "fr": "Les voyages lointains…"
                    },
                    "options": {
                        "ar": [
                            "تكلف دائمًا الكثير من المال.",
                            "يقوم بها عدد كبير من السياح.",
                            "قد تسبب التعب والإرهاق."
                        ],
                        "fr": [
                            "Coûtent toujours beaucoup d'argent.",
                            "Sont entrepris par de nombreux touristes.",
                            "Peuvent fatiguer."
                        ]
                    }
                }
            }
        },
        "3": {
            "instructions": {
                "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j. اختر: أي إعلان يناسب أي موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. إذا لم يكن هناك إعلان مناسب لموقف ما، فاختر X.",
                "fr": "Lisez les situations 13 à 19 et les annonces a à j. Choisissez quelle annonce correspond à quelle situation. Si aucune annonce ne convient, choisissez X."
            },
            "questions": {
                "13": {
                    "text": {
                        "ar": "يقوم الزوجان يانسن بغسيل سيارتهما بانتظام في محطة غسيل، ويبحثان دائمًا عن فرصة لفعل الخير للآخرين في الوقت نفسه.",
                        "fr": "Le couple Jansen emmène régulièrement sa voiture au lavage et cherche à faire une bonne action pour les autres en même temps."
                    }
                },
                "14": {
                    "text": {
                        "ar": "حصل بينو مؤخرًا على رخصة القيادة، ويرغب في تعلم المزيد عن القيادة الآمنة والموفرة للطاقة.",
                        "fr": "Benno a obtenu son permis récemment et souhaite en apprendre davantage sur la conduite sûre et économique."
                    }
                },
                "15": {
                    "text": {
                        "ar": "السيدة فايس لم تعد راضية عن سيارتها الكهربائية القديمة، وتريد الاطلاع على أحدث موديلات السيارات الكهربائية لمختلف الماركات.",
                        "fr": "Mme Wyss n'est plus satisfaite de son ancienne voiture électrique et veut s'informer sur les nouveaux modèles de diverses marques."
                    }
                },
                "16": {
                    "text": {
                        "ar": "السيد فيزر لديه صعوبة في الحركة ولذلك يذهب دائمًا بالسيارة إلى المكتب. لكن المسافة من كلوسترنوبرغ إلى مركز فيينا طويلة والوقود يزداد غلاءً.",
                        "fr": "M. Wieser a des difficultés à marcher et se rend toujours au bureau en voiture. Mais le trajet est long et l'essence de plus en plus chère."
                    }
                },
                "17": {
                    "text": {
                        "ar": "ميليسا حاصلة على رخصة القيادة منذ ثلاثة أشهر وتنزعج لأنها لا تستطيع حتى تغيير إطار سيارتها بنفسها.",
                        "fr": "Melissa a son permis depuis trois mois et n'apprécie pas de ne même pas savoir changer une roue."
                    }
                },
                "18": {
                    "text": {
                        "ar": "في آخر حادث لها، بقيت السيدة شولته يومين بدون سيارة، مما سبب لها مشاكل كثيرة في عملها كمندوبة تأمين.",
                        "fr": "Lors de son dernier accident, Mme Schulte est restée deux jours sans voiture, ce qui a perturbé son travail d'agente d'assurance."
                    }
                },
                "19": {
                    "text": {
                        "ar": "تعرض السيد نوفاك للأسف لحادث جديد. وفي المرة السابقة شعر بغضب شديد من ورشة التصليح ومندوبي التأمين.",
                        "fr": "M. Nowak a hélas eu un nouvel accident. La dernière fois, il a été très contrarié par le garage et les assureurs."
                    }
                }
            }
        },
        "4": {
            "instructions": {
                "ar": "اقرأ النصوص من 20 إلى 26. اختر: هل الشخص مؤيد لفرض حظر؟",
                "fr": "Lisez les textes 20 à 26. Choisissez : la personne est-elle favorable à une interdiction ?"
            }
        },
        "5": {
            "instructions": {
                "ar": "اقرأ النشرة الطبية المرفقة لعسل الشمر لاطلاعك عليها بسبب مرض ابن عمك الصغير. اختر الحل الصحيح a أو b أو c للأسئلة 27 إلى 30.",
                "fr": "Informez-vous sur le sirop de miel au fenouil à l'aide de la notice pour votre petit cousin malade. Choisissez la bonne réponse a, b ou c pour les questions 27 à 30."
            },
            "questions": {
                "27": {
                    "text": {
                        "ar": "الآثار الجانبية المحتملة:",
                        "fr": "Effets secondaires possibles :"
                    },
                    "options": {
                        "ar": [
                            "لا يظهر عسل الشمر أي آثار جانبية.",
                            "قد يحدث ضرر بالأسنان (تسوس).",
                            "لدى المصابين بالحساسية تحدث تفاعلات جلدية متكررة لفترة قصيرة."
                        ],
                        "fr": [
                            "Le miel au fenouil n'a aucun effet secondaire.",
                            "Des caries dentaires peuvent survenir.",
                            "Chez les personnes allergiques, des réactions cutanées fréquentes et brèves apparaissent."
                        ]
                    }
                },
                "28": {
                    "text": {
                        "ar": "يمكن للأطفال تناول عسل الشمر …",
                        "fr": "Les enfants peuvent prendre ce sirop…"
                    },
                    "options": {
                        "ar": [
                            "على الرغم من مرارة طعمه الشديدة.",
                            "على الرغم من احتوائه على مواد فعالة صناعية فقط.",
                            "إذا كان عمرهم 12 شهرًا على الأقل."
                        ],
                        "fr": [
                            "Même s'il a un goût très amer.",
                            "Bien qu'il ne contienne que des substances artificielles.",
                            "S'ils ont au moins douze mois."
                        ]
                    }
                },
                "29": {
                    "text": {
                        "ar": "يجب على المرء معرفة أن …",
                        "fr": "Il faut savoir que…"
                    },
                    "options": {
                        "ar": [
                            "الشراب يظل صالحًا للاستخدام لمدة نصف عام بعد فتحه.",
                            "الشراب يجب تدفئته قبل تناوله.",
                            "الشراب يجب أن يبقى دائمًا في الثلاجة."
                        ],
                        "fr": [
                            "Le sirop peut être utilisé pendant encore six mois après ouverture.",
                            "Le sirop doit être réchauffé avant utilisation.",
                            "Le sirop doit toujours rester au réfrigérateur."
                        ]
                    }
                },
                "30": {
                    "text": {
                        "ar": "الجرعة المعتادة …",
                        "fr": "La posologie usuelle…"
                    },
                    "options": {
                        "ar": [
                            "يحددها الطبيب فقط.",
                            "يمكن تناولها مع أي مشروب كان.",
                            "تسري على الأطفال الصغار والأكبر سنًا بالتساوي."
                        ],
                        "fr": [
                            "Est fixée par le médecin.",
                            "Peut être prise avec n'importe quelle boisson.",
                            "S'applique aux enfants plus jeunes comme plus âgés."
                        ]
                    }
                }
            }
        },
        "6": {
            "instructions": {
                "ar": "يتكون قسم الاستماع من أربعة أجزاء. ستستمع إلى عدة نصوص وتجيب عن الأسئلة المتعلقة بها.",
                "fr": "Le module Compréhension orale se compose de quatre parties. Vous écoutez plusieurs textes et répondez aux questions."
            },
            "teile": {
                "1": {
                    "title": {
                        "ar": "خمسة نصوص قصيرة · الأسئلة من 1 إلى 10",
                        "fr": "Cinq courts enregistrements · Questions 1 à 10"
                    },
                    "desc": {
                        "ar": "ستستمع الآن إلى خمسة نصوص قصيرة. ستستمع إلى كل نص مرتين. لكل نص ستجيب عن سؤالين.",
                        "fr": "Vous écoutez maintenant cinq courts textes, chacun deux fois. Pour chaque texte, résolvez deux questions."
                    }
                },
                "2": {
                    "title": {
                        "ar": "فعالية تعريفية برحلات المنطاد · الأسئلة 11 إلى 15",
                        "fr": "Présentation des vols en montgolfière · Questions 11 à 15"
                    },
                    "desc": {
                        "ar": "ستستمع إلى النص مرة واحدة فقط. أجب عن الأسئلة الخمسة باختيار a أو b أو c.",
                        "fr": "Vous écoutez l'enregistrement une seule fois. Répondez aux cinq questions a, b ou c."
                    },
                    "context": {
                        "ar": "أنت تحضر فعالية تعريفية ومعلوماتية حول رحلات المناطيد الهوائية.",
                        "fr": "Vous assistez à une réunion d'information sur les vols en montgolfière."
                    }
                },
                "3": {
                    "title": {
                        "ar": "حوار حول رحلة مدرسية · الأسئلة 16 إلى 22",
                        "fr": "Discussion sur un voyage scolaire · Questions 16 à 22"
                    },
                    "desc": {
                        "ar": "ستستمع إلى المحادثة مرة واحدة فقط. حدد: هل العبارات صحيحة أم خاطئة؟",
                        "fr": "Vous écoutez la conversation une seule fois. Déterminez si les affirmations sont Vraies ou Fausses."
                    },
                    "context": {
                        "ar": "أنت تقف في موقف للحافلات في فيينا وتسمع رجلاً وامرأة يتحدثان عن رحلة مدرسية.",
                        "fr": "À un arrêt de bus viennois, vous entendez un homme et une femme parler d'une sortie de classe."
                    }
                },
                "4": {
                    "title": {
                        "ar": "حوار إذاعي: كيف نتعامل مع الطعام؟ · الأسئلة 23 إلى 30",
                        "fr": "Débat radiophonique : Comment gérons-nous l'alimentation ? · Questions 23 à 30"
                    },
                    "desc": {
                        "ar": "ستستمع إلى النقاش مرتين. طابق كل عبارة مع قائلها: من يقول ماذا؟",
                        "fr": "Vous écoutez le débat deux fois. Associez chaque affirmation : qui dit quoi ?"
                    },
                    "context": {
                        "ar": "يناقش مقدم برنامج «MitTalk» الإذاعي مع الطالبة يوليانه شولتز (عضو بنك الطعام) والفنان لوكاس تيلمان موضوع التعامل مع الطعام وهدر الأغذية.",
                        "fr": "Le modérateur de l'émission « MitTalk » débat avec l'étudiante Juliane Schulz (association Tafel) et l'artiste Lukas Tilmann sur le gaspillage alimentaire."
                    }
                }
            }
        }
    }
}
};
