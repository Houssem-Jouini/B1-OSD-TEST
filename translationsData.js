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
},
  "modellsatz-5": {
    "parts": {
        "1": {
            "instructions": {
                "ar": "اقرأ النص والأسئلة من 1 إلى 6 المتعلقة به. اختر: هل العبارات صحيحة أم خاطئة؟",
                "fr": "Lisez le texte et les questions 1 à 6 correspondantes. Choisissez : les affirmations sont-elles Vraies ou Fausses ?"
            },
            "articles": [
                {
                    "heading": {
                        "ar": "تجاربي وذكرياتي",
                        "fr": "Mes expériences"
                    },
                    "sub": {
                        "ar": "زيارة إلى ميشيلشتات في أودنفالد",
                        "fr": "Visite à Michelstadt dans l'Odenwald"
                    },
                    "body": {
                        "ar": [
                            "في أغسطس الماضي كنت في زيارة لعمي في ميشيلشتات. ميشيلشتات بلدة صغيرة ترجع إلى القرون الوسطى في منطقة أودنفالد. إنها بلدة خلابة للغاية و... لا يحدث فيها الكثير في العادة. أضف إلى ذلك أن الصيف الماضي كان ممطرًا تمامًا. فقضيت معظم وقتي حبيسة المنزل، وهو أمر لم يكن ممتعًا أو مثيرًا على الإطلاق!!",
                            "ولكن في أحد أيام السبت، اقترحت عمتي أن نذهب مساءً إلى مهرجان المدينة القديمة في ميشيلشتات. لم أكن أعقد آمالاً كبيرة على قضاء وقت ممتع، ولكن بما أنه لم يكن لدي أي شيء أفضل لأفعله وكان الطقس جيدًا على غير العادة، فقد وافقت.",
                            "أقيم المهرجان في وسط المدينة، الذي كان مغلقًا أمام حركة المرور. لذلك لم نتمكن من قيادة السيارة إلى وسط المدينة واضطررنا إلى السير على الأقدام. وفي الطريق، عشت أول مفاجأة لي: كانت جميع المحلات التجارية مفتوحة، والشوارع والأزقة مضاءة بالشموع. لقد كانت «ليلة تسوق طويلة». تجولنا في الشوارع، وشاهدنا الفعاليات والعروض التي نظمتها جمعية التجارة، ولم نفوت فرصة اقتناص بعض الصفقات والخصومات الرائعة.",
                            "أخيرًا وصلنا إلى فناء معصرة القلعة في ميشيلشتات، وهو المكان الذي كان ينبض فيه قلب مهرجان المدينة القديمة. كانت الطاولات والمقاعد مصفوفة هناك وكان يجلس عليها بالفعل الكثير من الناس. كان الجميع يتبادلون التحيات، ويجلسون معًا، ويمرحون ... أجواء رائعة بحق. أما المأكولات والمشروبات فكانت متوفرة بأفضل شكل: سجق مشوي، سجق بالكاري، بطاطس مقلية، حساء البازلاء مع السجق – وبالتأكيد الجعة من مصبغة الجعة المحلية. وابتداءً من الساعة 21:00 عزفت فرقة روك آند رول مباشرة. كانت ميشيلشتات تنبض بالحياة بالفعل.",
                            "لكن هذا لم يكن كل شيء؛ فقد ألحت عمتي علينا بالتحرك إلى «نافورة الحماة»، حيث كانت فرقة «Art Artistica» تقدم عرضًا هناك. في الحقيقة لم أكن أرغب في المغادرة لأن فرقة الموسيقى كانت تعزف بشكل رائع، لكن عمتي أصرت كثيرًا حتى استسلمنا لرغبتها. وكانت على حق تمامًا.",
                            "قدمت فرقة البهلوانات عرضًا مبهرًا بالألعاب النارية واللهب. كان مشهدًا رائعًا لا يُنسى؛ ففي سكون تلك الليلة الصيفية، كان بالإمكان مشاهدة الفنانين وهم يؤدون حركاتهم البهلوانية، ولم يكن يُسمع سوى طقطقة وهسيس النيران. لقد كان مشهدًا فريدًا بحق.",
                            "عدنا ببطء سيرًا على الأقدام إلى المنزل في تلك الليلة المقمرة. لن أنسى هذا المهرجان أبدًا، ولا يسعني إلا أن أوصي الجميع: حتى بلدة ميشيلشتات في أودنفالد تستحق الزيارة بالتأكيد (خاصة في شهر أغسطس!)"
                        ],
                        "fr": [
                            "En août dernier, je suis allée rendre visite à mon oncle à Michelstadt. Michelstadt est une petite ville médiévale de l'Odenwald. C'est très pittoresque et ... il ne s'y passe généralement pas grand-chose. De plus, l'été dernier a été particulièrement pluvieux. J'ai passé le plus clair de mon temps enfermée à la maison, ce qui n'était guère stimulant !",
                            "Pourtant, un samedi, ma tante nous a proposé d'aller le soir à la fête de la vieille ville de Michelstadt. Je ne m'attendais pas à une grande distraction, mais comme je n'avais rien de mieux à faire et que la météo était exceptionnellement clémente, j'ai accepté.",
                            "La fête se déroulait dans le centre, interdit à la circulation. Nous n'avons donc pas pu entrer en voiture et avons dû y aller à pied. En chemin, j'ai eu ma première surprise : les magasins étaient tous ouverts, les rues et ruelles illuminées de bougies. C'était la « longue nuit du shopping ». Nous avons flâné dans les rues, admiré les animations organisées par l'association des commerçants et profité de quelques bonnes affaires.",
                            "Nous sommes finalement arrivés dans la cour des caves du château de Michelstadt, cœur battant de la fête. Des tables et bancs y étaient installés, déjà occupés par une foule joyeuse. Les gens se saluaient, profitaient ensemble de la soirée... une ambiance formidable. Tout était prévu pour se restaurer : saucisses grillées, currywurst, frites, soupe de pois aux saucisses – et bien sûr la bière de la brasserie locale. Et à partir de 21 h, un groupe de rock 'n' roll a joué en direct. Il y avait vraiment de l'animation à Michelstadt !",
                            "Mais ce n'était pas tout. Ma tante a insisté pour que nous allions à la « fontaine de la belle-mère », où la troupe Art Artistica donnait un spectacle. Je ne voulais pas quitter le concert qui était génial, mais devant son insistance, nous avons cédé. Et elle avait bien raison.",
                            "La troupe a offert un spectacle de cracheurs de feu et de jonglerie enflammée absolument grandiose. Dans la douceur de la nuit estivale, on voyait les artistes exécuter leurs prouesses dans le seul bruissement et crépitement des flammes. C'était un spectacle unique.",
                            "Nous sommes rentrés lentement à pied sous le clair de lune. Je n'oublierai jamais cette fête et ne peux que conseiller à chacun : Michelstadt dans l'Odenwald vaut vraiment le détour (surtout en août !)"
                        ]
                    },
                    "signature": {
                        "ar": "المخلصة لكم، نيكول",
                        "fr": "Votre Nicole"
                    }
                }
            ],
            "questions": {
                "1": {
                    "ar": "استطاع المرء في المهرجان قضاء وقت ممتع على الرغم من سوء الأحوال الجوية.",
                    "fr": "Lors de la fête, on a pu bien se divertir malgré le mauvais temps."
                },
                "2": {
                    "ar": "لم يُسمح للسيارات الخاصة بالسير في مركز المدينة أثناء المهرجان.",
                    "fr": "Pendant la fête, les voitures particulières n'avaient pas le droit de circuler au centre-ville."
                },
                "3": {
                    "ar": "في «ليلة التسوق الطويلة» لم يكن مغلقًا سوى عدد قليل من المتاجر.",
                    "fr": "Pendant la « longue nuit du shopping », seuls de rares magasins étaient fermés."
                },
                "4": {
                    "ar": "قدمت مصبغة الجعة المحلية الأطعمة مجانًا.",
                    "fr": "La brasserie locale proposait les repas gratuitement."
                },
                "5": {
                    "ar": "قدم فنانو السيرك عرض النار على وقع موسيقى صاخبة.",
                    "fr": "Les artistes ont présenté leur spectacle de feu sur une musique forte."
                },
                "6": {
                    "ar": "ترى نيكول أن زيارة ميشيلشتات تستحق العناء بالتأكيد.",
                    "fr": "Nicole estime que visiter Michelstadt en vaut la peine."
                }
            }
        },
        "2": {
            "instructions": {
                "ar": "اقرأ النص الصحفي والأسئلة 7 إلى 9 المتعلقة به. اختر الحل الصحيح a أو b أو c.",
                "fr": "Lisez le texte de presse et les questions 7 à 9 correspondantes. Choisissez la bonne solution a, b ou c."
            },
            "articles": [
                {
                    "heading": {
                        "ar": "كبار السن لا يرغبون في الإنترنت",
                        "fr": "Les seniors ne veulent pas d'Internet"
                    },
                    "body": {
                        "ar": [
                            "على الرغم من الصورة الشائعة لكبار السن الذين يتصفحون الإنترنت بنشاط، فإن أسر المواطنين المسنين هي السبب وراء ركود إحصائيات الأسر المتصلة بالإنترنت في سويسرا: فوفقًا للمكتب الاتحادي للإحصاء، يرفض 20% من هؤلاء رفضًا قاطعًا الاتصال بالشبكة العنكبوتية. وبذلك تأتي سويسرا متأخرة عن الدول الاسكندنافية وهولندا، حيث تمتلك نسبة أكبر من الأسر الخاصة اتصالاً بالإنترنت مقارنة بنا.",
                            "وهناك أسباب متعددة لذلك؛ ففي استطلاع للرأي، أشار كبار السن إلى قلة الاهتمام، وضعف المعرفة الفنية المتخصصة، أو انعدام الثقة بالنفس. ويعتقد الخبراء أيضًا أن كبار السن يفتقرون إلى الاحتكاك الترفيهي العفوي بالإنترنت؛ فهم ببساطة لم ينشأوا مع هذه التكنولوجيا ويترددون في التعرف على وسائل الإعلام الحديثة في هذه المرحلة من حياتهم.",
                            "غير أن الاستطلاع أظهر أيضًا أن مستخدمي الإنترنت من فئة الشباب في سويسرا يشعرون بالقلق حيال مخاطر مختلفة؛ وتأتي في المقدمة الخشية من الفيروسات، تليها المخاوف من وقوع المعلومات الشخصية في أيدٍ غير أمينة، والخوف من استخدام البطاقات الائتمانية عبر الإنترنت من قِبل المحتالين، أو المخاطر المتعلقة بالأطفال. ومع ذلك، يلجأ مستخدمو الإنترنت السويسريون إلى تدابير الحماية؛ إذ يمتلك 80% منهم برامج أمان، بينما تستخدم 30% فقط من الأسر التي لديها أطفال برامج لحماية الطفل على أجهزتهم الحاسوبية."
                        ],
                        "fr": [
                            "Malgré l'image courante du senior surfant allègrement sur le Web, ce sont les ménages de citoyens âgés qui expliquent la stagnation des statistiques de foyers connectés en Suisse : selon l'Office fédéral de la statistique, ces 20 % refusent absolument d'aller en ligne. La Suisse se situe ainsi derrière les pays scandinaves et les Pays-Bas, où davantage de ménages privés disposent d'un accès à Internet.",
                            "Il existe diverses raisons à cela. Lors d'une enquête, les seniors ont évoqué un manque d'intérêt, peu de connaissances techniques ou un manque de confiance en soi. Les spécialistes supposent également qu'il leur manque un contact ludique avec Internet : n'ayant pas grandi avec, ils hésitent à découvrir ces nouveaux médias sur le tard.",
                            "Toutefois, l'enquête a également révélé que les plus jeunes utilisateurs d'Internet en Suisse s'inquiètent de divers dangers. La peur des virus domine, suivie par la crainte de voir des données personnelles tomber entre de mauvaises mains, l'utilisation frauduleuse de cartes bancaires par des cybercriminels ou les risques pour les enfants. Les internautes suisses prennent cependant des mesures : 80 % possèdent un logiciel de sécurité, mais seulement 30 % des foyers avec enfants utilisent un logiciel de contrôle parental."
                        ]
                    }
                }
            ],
            "questions": {
                "7": {
                    "text": {
                        "ar": "يدور هذا النص حول …",
                        "fr": "Dans ce texte, il s'agit de…"
                    },
                    "options": {
                        "ar": [
                            "أن السويسريين يلعبون بشكل أساسي على الإنترنت.",
                            "كيف يتطور عدد الأسر المتصلة بالإنترنت في سويسرا.",
                            "لماذا يجب حماية الأطفال من مخاطر الإنترنت."
                        ],
                        "fr": [
                            "que les Suisses jouent principalement sur Internet.",
                            "l'évolution du nombre de ménages connectés à Internet en Suisse.",
                            "la raison pour laquelle les enfants doivent être protégés d'Internet."
                        ]
                    }
                },
                "8": {
                    "text": {
                        "ar": "كبار السن …",
                        "fr": "Les personnes âgées…"
                    },
                    "options": {
                        "ar": [
                            "نادرًا ما يمتلكون معرفة بالكمبيوتر.",
                            "يستخدمون برامج حماية لأجهزة الكمبيوتر الخاصة بهم.",
                            "يشعرون بالخوف من فيروسات الكمبيوتر."
                        ],
                        "fr": [
                            "ont rarement des compétences en informatique.",
                            "utilisent des logiciels de protection sur leurs ordinateurs.",
                            "ont peur des virus informatiques."
                        ]
                    }
                },
                "9": {
                    "text": {
                        "ar": "في هولندا …",
                        "fr": "Aux Pays-Bas…"
                    },
                    "options": {
                        "ar": [
                            "توجد نفس المشاكل المتعلقة بالإنترنت كما هو الحال في سويسرا.",
                            "تمتلك أسرٌ أكثر إنترنت مقارنة بسويسرا.",
                            "يلعب كبار السن كثيرًا على الإنترنت."
                        ],
                        "fr": [
                            "on rencontre les mêmes problèmes d'Internet qu'en Suisse.",
                            "davantage de foyers ont Internet qu'en Suisse.",
                            "les personnes âgées jouent beaucoup sur Internet."
                        ]
                    }
                },
                "10": {
                    "text": {
                        "ar": "يدور هذا النص حول …",
                        "fr": "Dans ce texte, il s'agit de…"
                    },
                    "options": {
                        "ar": [
                            "ضرورة تناول طعام صحي.",
                            "أن الناس يفضلون تناول الكثير من الطعام على تناول الأدوية.",
                            "أسباب شعبية ورواج الأغذية الوظيفية (Functional Food)."
                        ],
                        "fr": [
                            "l'importance de manger sainement.",
                            "du fait que les gens préfèrent manger copieusement plutôt que prendre des médicaments.",
                            "la raison pour laquelle les aliments fonctionnels sont si populaires."
                        ]
                    }
                },
                "11": {
                    "text": {
                        "ar": "الصحة …",
                        "fr": "La santé…"
                    },
                    "options": {
                        "ar": [
                            "لا تهم سوى عدد قليل جدًا من الناس.",
                            "تعتبر الشيء الأكثر أهمية بالنسبة للمزيد والمزيد من الناس.",
                            "تجبر بعض الأشخاص على تناول الأغذية الوظيفية."
                        ],
                        "fr": [
                            "n'intéresse que très peu de personnes.",
                            "est la priorité absolue pour un nombre croissant de personnes.",
                            "oblige certaines personnes à consommer des aliments fonctionnels."
                        ]
                    }
                },
                "12": {
                    "text": {
                        "ar": "الأغذية الوظيفية (Functional Food) …",
                        "fr": "Le « Functional Food »…"
                    },
                    "options": {
                        "ar": [
                            "رائجة ومواكبة للموضة العصرية (ist in).",
                            "ليست صحية في الواقع.",
                            "تُباع في ألمانيا دون أي دعاية أو إعلانات."
                        ],
                        "fr": [
                            "est très tendance (« in »).",
                            "n'est pas vraiment saine.",
                            "est vendue en Allemagne sans la moindre publicité."
                        ]
                    }
                }
            }
        },
        "3": {
            "instructions": {
                "ar": "اقرأ المواقف 13 إلى 19 والإعلانات a إلى j. اختر: أي إعلان يناسب أي موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. إذا لم يكن هناك إعلان مناسب للموقف، اختر X.",
                "fr": "Lisez les situations 13 à 19 et les annonces a à j. Choisissez l'annonce correspondant à chaque situation. Chaque annonce n'est utilisable qu'une seule fois. Si aucune annonce ne convient, choisissez X."
            },
            "situationsIntro": {
                "ar": "بعض الأشخاص من دائرة معارفك مهتمون بشكل خاص بقضايا ومشكلات عصرنا ويريدون تقديم المساعدة الفعالة، ويبحثون عن فرص مناسبة لذلك.",
                "fr": "Plusieurs personnes de votre entourage s'intéressent aux défis actuels de la société et souhaitent s'engager activement. Elles cherchent des opportunités adaptées."
            },
            "questions": {
                "13": {
                    "text": {
                        "ar": "السيدة فيكيرت تملك قلبًا عطوفًا على الأطفال. وتريد التبرع بمبلغ مالي لمنظمة تعتني بشكل خاص بالأطفال في ألمانيا.",
                        "fr": "Mme Wickert a un grand cœur pour les enfants. Elle souhaite faire un don financier à un organisme s'occupant des enfants en Allemagne."
                    }
                },
                "14": {
                    "text": {
                        "ar": "السيد غايغر معلم لمادة الأحياء. ويريد إثارة اهتمام طلابه بالطبيعة وحمايتها.",
                        "fr": "M. Geiger est professeur de biologie. Il souhaite éveiller l'intérêt de ses élèves pour la nature et sa préservation."
                    }
                },
                "15": {
                    "text": {
                        "ar": "توبياس محب للحيوانات والطبيعة. وبما أن عيد ميلاده بعد أسبوعين، يبحث صديقه لوكاس عن هدية مناسبة له.",
                        "fr": "Tobias est passionné d'animaux et de nature. Comme son anniversaire a lieu dans deux semaines, son ami Lukas cherche un cadeau."
                    }
                },
                "16": {
                    "text": {
                        "ar": "لدى سارة العديد من الأصدقاء الأجانب في الحي، وتريد العمل بنشاط من أجل التعايش السلمي بين الناس من مختلف البلدان.",
                        "fr": "Sara a de nombreux amis étrangers dans son quartier et souhaite s'engager activement pour la cohabitation pacifique entre cultures."
                    }
                },
                "17": {
                    "text": {
                        "ar": "تريد السيدة أندرس فعل شيء لمساعدة العائلات الشابة التي تعاني من الفقر.",
                        "fr": "Mme Anders souhaite venir en aide aux jeunes familles démunies."
                    }
                },
                "18": {
                    "text": {
                        "ar": "فيليب ممرض. ويود استثمار خبرته ومعرفته في مساندة الأشخاص من ذوي الاحتياجات الخاصة.",
                        "fr": "Philipp est infirmier. Il aimerait mettre ses compétences au service de l'aide aux personnes handicapées."
                    }
                },
                "19": {
                    "text": {
                        "ar": "أصبح غابرييل أبًا منذ بضعة أشهر. وهو وزوجته مهتمان بحماية البيئة ويرغبان في تربية طفلهما على هذا المبدأ.",
                        "fr": "Gabriel est devenu père il y a quelques mois. Sa femme et lui s'intéressent à l'écologie et souhaitent y sensibiliser leur enfant."
                    }
                }
            }
        },
        "4": {
            "instructions": {
                "ar": "اقرأ الآراء 20 إلى 26. اختر: هل يؤيد الشخص السماح للتلاميذ تحت سن 18 عامًا بالدراسة في الجامعة مبكرًا؟",
                "fr": "Lisez les avis 20 à 26. Choisissez : La personne est-elle favorable à ce que les élèves de moins de 18 ans puissent déjà étudier à l'université ?"
            },
            "topic": {
                "ar": "تقرأ في إحدى المجلات تعليقات حول مقال عن «الطلاب الجامعيين المبكرين» الذين يدرسون في الجامعة قبل إنهاء المرحلة المدرسية رغم كونهم قاصرين.",
                "fr": "Dans un magazine, vous lisez des commentaires sur les « étudiants précoces », qui entament des études universitaires avant même le baccalauréat bien qu'étant encore mineurs."
            },
            "questions": {
                "20": {
                    "text": {
                        "ar": "بترا، 27 عامًا، كوبلنتس",
                        "fr": "Petra, 27 ans, Coblence"
                    }
                },
                "21": {
                    "text": {
                        "ar": "فيلي، 17 عامًا، شتوتغارت",
                        "fr": "Willi, 17 ans, Stuttgart"
                    }
                },
                "22": {
                    "text": {
                        "ar": "تورستن، 58 عامًا، إنسبروك",
                        "fr": "Torsten, 58 ans, Innsbruck"
                    }
                },
                "23": {
                    "text": {
                        "ar": "كيارا، 30 عامًا، كلوسترز",
                        "fr": "Chiara, 30 ans, Klosters"
                    }
                },
                "24": {
                    "text": {
                        "ar": "راينر، 22 عامًا، كيتزبوهيل",
                        "fr": "Reiner, 22 ans, Kitzbühel"
                    }
                },
                "25": {
                    "text": {
                        "ar": "هيلين، 45 عامًا، براونشفايغ",
                        "fr": "Helen, 45 ans, Brunswick"
                    }
                },
                "26": {
                    "text": {
                        "ar": "فرديناند، 16 عامًا، أندرمات",
                        "fr": "Ferdinand, 16 ans, Andermatt"
                    }
                }
            }
        },
        "5": {
            "instructions": {
                "ar": "أنت تطلع على لائحة استخدام مكتبة بيستالوتزي في زيورخ، لأنك ستعيش قريبًا لبعض الوقت في زيورخ. اختر لكل سؤال من 27 إلى 30 الحل الصحيح a أو b أو c.",
                "fr": "Vous vous renseignez sur le règlement de la bibliothèque Pestalozzi de Zurich, car vous allez bientôt y résider quelque temps. Choisissez la bonne réponse a, b ou c pour chaque question 27 à 30."
            },
            "articles": [
                {
                    "heading": {
                        "ar": "لائحة استخدام مكتبة بيستالوتزي في زيورخ (PBZ)",
                        "fr": "Règlement d'utilisation de la bibliothèque Pestalozzi de Zurich (PBZ)"
                    },
                    "sub": {
                        "ar": "معلومات للمستخدمين والقراء",
                        "fr": "Informations destinées aux utilisatrices et utilisateurs"
                    },
                    "body": {
                        "ar": [
                            "<strong>التسجيل</strong><br>تفتح مكتبات بيستالوتزي في زيورخ (PBZ) أبوابها لجميع المهتمين. وعند إبراز بطاقة هوية رسمية، يتم إصدار بطاقة مكتبة شخصية يجب إحضارها عند كل عملية استعارة. بطاقة المكتبة غير قابلة للتحويل، حتى داخل نطاق الأسرة أو السكن المشترك. بالنسبة للأشخاص الذين ليس لديهم إقامة دائمة في سويسرا، قد تخضع الاستعارة لبعض القيود. يجب الإبلاغ فورًا عن أي تغيير في العنوان أو الاسم وكذلك عند فقدان بطاقة المكتبة. ويمكن الحصول على بطاقة بديلة مقابل رسوم.",
                            "<strong>الاستخدام والاستعارة</strong><br>يمكن استعارة 25 مادة كحد أقصى (كتب، مجلات، أقراص مدمجة CD أو أقراص DVD) في نفس الوقت. وتبلغ مدة الإعارة عادةً 4 أسابيع. بالنسبة لبعض المواد المحددة (مثل أقراص الـ DVD)، يجوز للمكتبة تحديد مدد إعارة مختلفة. ويُسمح بتمديد الإعارة مرتين، باستثناء المواد المحجوزة لمشتركين آخرين. يمكن إجراء التمديد داخل مقر المكتبة، أو عبر الهاتف، أو عبر الإنترنت.<br>يمكن حجز المواد المستعارة مسبقًا. وبمجرد أن تصبح المادة المحجوزة جاهزة للاستلام، يتم إخطار المستفيد هاتفيًا أو عبر رسالة نصية قصيرة SMS. ويجب استلام المواد خلال أسبوع واحد. يتم فرض رسوم على الحجوزات. كما يمكن مقابل رسوم طلب المواد غير المتوفرة في الفرع المحلي من مكتبة أخرى تابعة لـ PBZ، باستثناء أقراص الـ DVD.",
                            "<strong>المسؤولية والتعويض</strong><br>المشتركون مسؤولون عن المواد المستعارة وملتزمون بالتعامل بعناية مع مقتنيات المكتبة. وفي حالة التلف أو الفقدان، يتم تحميل المشترك تكاليف الإصلاح أو الاستبدال بالإضافة إلى رسوم إدارية. لا يجوز للمشترك إصلاح الأضرار بنفسه. وكل من لا يلتزم بتعليمات المكتبة أو يسلك سلوكًا غير لائق، يمكن حرمانه مؤقتًا أو نهائيًا من استخدام المكتبة."
                        ],
                        "fr": [
                            "<strong>Inscription</strong><br>Les bibliothèques Pestalozzi de Zurich (PBZ) sont ouvertes à tous. Sur présentation d'une pièce d'identité officielle, une carte de bibliothèque personnelle est délivrée, qui doit être présentée lors de chaque emprunt. La carte est strictement incessible, y compris au sein de la famille. Pour les personnes sans domicile fixe en Suisse, le prêt peut être restreint. Tout changement d'adresse ou de nom ainsi que la perte de la carte doivent être signalés immédiatement. Une carte de remplacement peut être obtenue contre paiement.",
                            "<strong>Utilisation et prêt</strong><br>Il est possible d'emprunter au maximum 25 articles simultanément (livres, revues, CD ou DVD). La durée du prêt est généralement de 4 semaines, des durées différentes pouvant s'appliquer à certains médias (comme les DVD). Deux prolongations sont permises, sauf pour les articles réservés. La prolongation s'effectue sur place, par téléphone ou en ligne.<br>Les documents déjà prêtés peuvent être réservés. Dès que l'article réservé est disponible, l'usager en est averti par téléphone ou par SMS. Les documents doivent être retirés sous huitaine. Toute réservation donne lieu à des frais. De même, des articles absents du fonds local peuvent être acheminés depuis une autre filiale PBZ moyennant finance, à l'exception des DVD.",
                            "<strong>Responsabilité</strong><br>Les usagers sont responsables des documents empruntés et tenus d'en prendre grand soin. En cas de dégradation ou de perte, des frais administratifs s'ajoutent au coût de réparation ou de rachat. Il est interdit de réparer soi-même les dommages. Toute infraction au règlement ou comportement inapproprié peut motiver une exclusion temporaire ou définitive."
                        ]
                    }
                }
            ],
            "questions": {
                "27": {
                    "text": {
                        "ar": "عندما يقوم المرء بحجز مادة مسبقًا، …",
                        "fr": "Lorsqu'on effectue une réservation, …"
                    },
                    "options": {
                        "ar": [
                            "يجب استلام المادة بعد أسبوع واحد من تاريخ الحجز.",
                            "يجب استلام المادة من مكتبة أخرى تابعة لـ PBZ.",
                            "يجب دفع مبلغ مالي كرسوم مقابل ذلك."
                        ],
                        "fr": [
                            "on doit retirer les articles une semaine après la réservation.",
                            "on doit retirer les articles dans une autre bibliothèque PBZ.",
                            "on doit s'acquitter d'une somme d'argent."
                        ]
                    }
                },
                "28": {
                    "text": {
                        "ar": "في حال عدم الالتزام بتعليمات ولوائح المكتبة …",
                        "fr": "En cas de non-respect du règlement de la bibliothèque, …"
                    },
                    "options": {
                        "ar": [
                            "يجب دفع غرامة مالية عقابية.",
                            "قد يتم حرمان المشترك من استخدام مكتبة PBZ.",
                            "يجب إعادة جميع المواد المستعارة على الفور."
                        ],
                        "fr": [
                            "on doit payer une amende forfaitaire.",
                            "il se peut que l'on ne soit plus autorisé à fréquenter la PBZ.",
                            "on est tenu de restituer immédiatement tous les articles empruntés."
                        ]
                    }
                },
                "29": {
                    "text": {
                        "ar": "يمكن للمرء …",
                        "fr": "On peut…"
                    },
                    "options": {
                        "ar": [
                            "حجز أقراص الـ DVD أيضًا.",
                            "استعارة ما يصل إلى 25 مادة مرة واحدة في الشهر.",
                            "تمديد استعارة المواد المحجوزة أيضًا."
                        ],
                        "fr": [
                            "également faire réserver des DVD.",
                            "emprunter jusqu'à 25 articles une fois par mois.",
                            "faire prolonger aussi les articles réservés."
                        ]
                    }
                },
                "30": {
                    "text": {
                        "ar": "لكي يتمكن المرء من استخدام مكتبة PBZ، …",
                        "fr": "Pour pouvoir utiliser la PBZ, …"
                    },
                    "options": {
                        "ar": [
                            "يجب أن يكون مقيمًا في مدينة زيورخ.",
                            "يجب أن تكون بطاقة المكتبة معه في كل مرة.",
                            "يكفي بطاقة مكتبة واحدة لكل عائلة أو منزل."
                        ],
                        "fr": [
                            "on doit habiter à Zurich.",
                            "on doit avoir sa carte de bibliothèque sur soi à chaque visite.",
                            "il faut une seule carte par famille ou ménage."
                        ]
                    }
                }
            }
        },
        "6": {
            "instructions": {
                "ar": "تتكون وحدة الاستماع من أربعة أجزاء. ستستمع إلى عدة نصوص وتجيب عن أسئلة متعلقة بها. يوجد حل صحيح واحد فقط لكل سؤال.",
                "fr": "Le module Écoute comprend quatre parties. Vous écoutez plusieurs enregistrements et répondez aux questions. Une seule réponse est correcte par question."
            },
            "teile": {
                "1": {
                    "title": {
                        "ar": "خمسة نصوص قصيرة · الأسئلة من 1 إلى 10",
                        "fr": "Cinq courts enregistrements · Questions 1 à 10"
                    },
                    "desc": {
                        "ar": "ستستمع الآن إلى خمسة نصوص قصيرة. ستستمع إلى كل نص مرتين. أجب عن سؤالين لكل نص.",
                        "fr": "Vous écoutez maintenant cinq courts textes, chacun deux fois. Résolvez deux questions par texte."
                    }
                },
                "2": {
                    "title": {
                        "ar": "جولة موتسارت في سالزبورغ · الأسئلة من 11 إلى 15",
                        "fr": "Visite Mozart à Salzbourg · Questions 11 à 15"
                    },
                    "desc": {
                        "ar": "ستستمع إلى النص مرة واحدة فقط. أجب عن خمسة أسئلة باختيار a أو b أو c.",
                        "fr": "Vous écoutez l'enregistrement une seule fois. Répondez aux cinq questions a, b ou c."
                    },
                    "context": {
                        "ar": "أنت تشارك في جولة سياحية تعريفية عن موتسارت في مدينة سالزبورغ (Mozart-City-Tour).",
                        "fr": "Vous participez au circuit touristique « Mozart-City-Tour » à Salzbourg."
                    }
                },
                "3": {
                    "title": {
                        "ar": "حوار في الترام حول العطلة الصيفية · الأسئلة من 16 إلى 22",
                        "fr": "Conversation dans le tramway sur les vacances · Questions 16 à 22"
                    },
                    "desc": {
                        "ar": "ستستمع إلى المحادثة مرة واحدة فقط. حدد: هل العبارات صحيحة أم خاطئة؟",
                        "fr": "Vous écoutez la conversation une seule fois. Déterminez si les affirmations sont Vraies ou Fausses."
                    },
                    "context": {
                        "ar": "أنت راكب في الترام وتسمع مراهقين (إيزابيلا ويوناس) يتحدثان عن العطلة الصيفية.",
                        "fr": "Dans le tramway, vous entendez deux adolescents (Isabella et Jonas) parler de leurs vacances."
                    }
                },
                "4": {
                    "title": {
                        "ar": "حوار إذاعي: هل يحق للمعلم ضرب التلميذ؟ · الأسئلة من 23 إلى 30",
                        "fr": "Débat radiophonique : Un enseignant peut-il frapper un élève ? · Questions 23 à 30"
                    },
                    "desc": {
                        "ar": "ستستمع إلى النقاش مرتين. طابق كل عبارة مع المتحدث: من يقول ماذا؟",
                        "fr": "Vous écoutez le débat deux fois. Associez chaque affirmation : qui dit quoi ?"
                    },
                    "context": {
                        "ar": "تناقش مذيعة برنامج «School for you» الإذاعي مع الطالبين لارا وسيمون موضوع: «هل يحق للمعلم ضرب التلميذ؟».",
                        "fr": "L'animatrice de l'émission « School for you » débat avec les lycéens Lara et Simon autour du thème : « Un professeur a-t-il le droit de frapper un élève ? »."
                    }
                }
            },
            "questions": {
                "h1": {
                    "text": {
                        "ar": "وقع حادث سير على الطريق السريع A1.",
                        "fr": "Un accident s'est produit sur l'autoroute A1."
                    }
                },
                "h2": {
                    "text": {
                        "ar": "لماذا يوجد ازدحام مروري وتوقف لحركة السير؟",
                        "fr": "Pourquoi y a-t-il des embouteillages ?"
                    },
                    "options": {
                        "ar": [
                            "بسبب سوء الأحوال الجوية.",
                            "بسبب أعمال صيانة على الطريق السريع.",
                            "بسبب إغلاق أحد المخارج."
                        ],
                        "fr": [
                            "Parce qu'il fait mauvais temps.",
                            "Parce qu'il y a des travaux sur l'autoroute.",
                            "Parce qu'une sortie est fermée."
                        ]
                    }
                },
                "h3": {
                    "text": {
                        "ar": "أنت تستمع إلى معلومات صادرة عن استوديو تصوير فوتوغرافي.",
                        "fr": "Vous entendez des informations d'un studio photo."
                    }
                },
                "h4": {
                    "text": {
                        "ar": "في أي يوم يغلق المعرض أبوابه؟",
                        "fr": "Quel jour l'établissement est-il fermé ?"
                    },
                    "options": {
                        "ar": [
                            "يوم الاثنين.",
                            "يوم الثلاثاء.",
                            "يوم الأربعاء."
                        ],
                        "fr": [
                            "Le lundi.",
                            "Le mardi.",
                            "Le mercredi."
                        ]
                    }
                },
                "h5": {
                    "text": {
                        "ar": "أنت تستمع إلى نصائح حول أنشطة ترفيهية للشباب.",
                        "fr": "Vous entendez des conseils de loisirs pour les jeunes."
                    }
                },
                "h6": {
                    "text": {
                        "ar": "أي فعالية تتطلب التسجيل والحجز المسبق؟",
                        "fr": "Pour quel événement doit-on s'inscrire à l'avance ?"
                    },
                    "options": {
                        "ar": [
                            "للمعرض الفني.",
                            "لجولة عربات الجليد (Schneemobil).",
                            "لرياضة التزلج."
                        ],
                        "fr": [
                            "Pour l'exposition.",
                            "Pour la sortie en motoneige.",
                            "Pour skier."
                        ]
                    }
                },
                "h7": {
                    "text": {
                        "ar": "يقام في أوغسبورغ سوق لعيد الميلاد.",
                        "fr": "Un marché de Noël a lieu à Augsbourg."
                    }
                },
                "h8": {
                    "text": {
                        "ar": "كم من الوقت يستمر عمل سوق عيد الميلاد؟",
                        "fr": "Combien de temps le marché de Noël reste-t-il ouvert ?"
                    },
                    "options": {
                        "ar": [
                            "أكثر من شهر واحد.",
                            "أقل من شهر واحد.",
                            "135 يومًا."
                        ],
                        "fr": [
                            "Plus d'un mois.",
                            "Moins d'un mois.",
                            "135 jours."
                        ]
                    }
                },
                "h9": {
                    "text": {
                        "ar": "أنت تستمع إلى تقرير رسمي للشرطة.",
                        "fr": "Vous entendez un rapport de police."
                    }
                },
                "h10": {
                    "text": {
                        "ar": "من تمكن من تحرير صاحبة القطة من شقتها؟",
                        "fr": "Qui a réussi à libérer la propriétaire du chat ?"
                    },
                    "options": {
                        "ar": [
                            "فني فتح الأقفال (Schlüsseldienst).",
                            "أحد الجيران.",
                            "الشرطة."
                        ],
                        "fr": [
                            "Le serrurier.",
                            "Un voisin.",
                            "La police."
                        ]
                    }
                },
                "h11": {
                    "text": {
                        "ar": "كم تبلغ مدة الجولة السياحية؟",
                        "fr": "Combien de temps dure le circuit ?"
                    },
                    "options": {
                        "ar": [
                            "عشرون دقيقة.",
                            "خمس عشرة دقيقة.",
                            "تسعون دقيقة."
                        ],
                        "fr": [
                            "Vingt minutes.",
                            "Quinze minutes.",
                            "Quatre-vingt-dix minutes."
                        ]
                    }
                },
                "h12": {
                    "text": {
                        "ar": "خلال جولة موتسارت، يقوم الزوار بزيارة وتفقد …",
                        "fr": "Lors du circuit Mozart, on visite…"
                    },
                    "options": {
                        "ar": [
                            "منزل سكن موتسارت.",
                            "المنزل الذي ولد فيه موتسارت.",
                            "قصر ليوبولدسكرون."
                        ],
                        "fr": [
                            "La maison où habitait Mozart.",
                            "La maison natale de Mozart.",
                            "Le château de Leopoldskron."
                        ]
                    }
                },
                "h13": {
                    "text": {
                        "ar": "من قام بتأسيس معهد موتسارتيوم (Mozarteum)؟",
                        "fr": "Par qui le Mozarteum a-t-il été fondé ?"
                    },
                    "options": {
                        "ar": [
                            "موتسارت نفسه.",
                            "مجموعة من العلماء والباحثين.",
                            "مواطنو وسكان سالزبورغ."
                        ],
                        "fr": [
                            "Par Mozart.",
                            "Par des scientifiques.",
                            "Par des citoyens de Salzbourg."
                        ]
                    }
                },
                "h14": {
                    "text": {
                        "ar": "لمن كان يعود البيت الذي ولد فيه موتسارت؟",
                        "fr": "À qui appartenait la maison natale de Mozart ?"
                    },
                    "options": {
                        "ar": [
                            "لعائلة موتسارت.",
                            "لأحد التجار.",
                            "لجارة موتسارت."
                        ],
                        "fr": [
                            "À la famille Mozart.",
                            "À un commerçant.",
                            "À la voisine de Mozart."
                        ]
                    }
                },
                "h15": {
                    "text": {
                        "ar": "ما الذي يشاهده المرء في المتحف؟",
                        "fr": "Que peut-on voir dans le musée ?"
                    },
                    "options": {
                        "ar": [
                            "كمان الطفولة الخاص بموتسارت.",
                            "بيانو موتسارت.",
                            "أثاث منزل عائلة موتسارت."
                        ],
                        "fr": [
                            "Le violon d'enfant de Mozart.",
                            "Le piano de Mozart.",
                            "Les meubles de la famille Mozart."
                        ]
                    }
                },
                "h16": {
                    "text": {
                        "ar": "حصلت إيزابيلا على هاتف محمول جديد هدية من والديها.",
                        "fr": "Isabella a reçu un nouveau portable de ses parents."
                    }
                },
                "h17": {
                    "text": {
                        "ar": "تعرض إيزابيلا صورًا على هاتفها ليوناس.",
                        "fr": "Isabella montre des photos sur son portable à Jonas."
                    }
                },
                "h18": {
                    "text": {
                        "ar": "تحب إيزابيلا السفر إلى خالكيديكي.",
                        "fr": "Isabella aime aller en Chalcidique."
                    }
                },
                "h19": {
                    "text": {
                        "ar": "إيزابيلا معجبة بأندرياس وتشعر بميل نحوه.",
                        "fr": "Isabella apprécie Andreas."
                    }
                },
                "h20": {
                    "text": {
                        "ar": "سافر يوناس هذا العام بمفرده برفقة أخته.",
                        "fr": "Cette année, Jonas est parti en voyage seul avec sa sœur."
                    }
                },
                "h21": {
                    "text": {
                        "ar": "والدا إيزابيلا ليسا رياضيين مثل والدي يوناس.",
                        "fr": "Les parents d'Isabella ne sont pas aussi sportifs que ceux de Jonas."
                    }
                },
                "h22": {
                    "text": {
                        "ar": "يجد يوناس قضاء الإجازة على الشاطئ أمرًا مملاً.",
                        "fr": "Jonas trouve les vacances à la plage ennuyeuses."
                    }
                },
                "h23": {
                    "text": {
                        "ar": "تقريبًا جميع الطلاب يجدون الأستاذ X شخصًا ودودًا ومحبوبًا.",
                        "fr": "Presque tous les élèves trouvent Monsieur X sympathique."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                },
                "h24": {
                    "text": {
                        "ar": "أقلية من الطلاب فقط غير راضين عن قرار المحكمة.",
                        "fr": "Une minorité d'élèves désapprouve le jugement du tribunal."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                },
                "h25": {
                    "text": {
                        "ar": "لعبت إصابة كتف المعلم دورًا رئيسيًا في حكم المحكمة.",
                        "fr": "L'épaule blessée de l'enseignant a joué un rôle déterminant dans le jugement."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                },
                "h26": {
                    "text": {
                        "ar": "لم تكن لدى المعلم نية مسبقة أو قصد لضرب الطالبة.",
                        "fr": "L'enseignant n'avait aucune intention de frapper l'élève."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                },
                "h27": {
                    "text": {
                        "ar": "أرادت الفتاة أن يفقد المعلم وظيفته ويتم طرده.",
                        "fr": "La jeune fille voulait que le professeur perde son travail."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                },
                "h28": {
                    "text": {
                        "ar": "تلك الفتاة ومجموعتها غير مندمجين ومنعزلون عن زملاء الصف.",
                        "fr": "La jeune fille et ses amis ne sont pas intégrés à la classe."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                },
                "h29": {
                    "text": {
                        "ar": "لا يشارك زملاء الصف اليوم في أي نشاط مشترك خارج المدرسة.",
                        "fr": "Aujourd'hui, la classe ne fait plus rien ensemble en dehors des cours."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                },
                "h30": {
                    "text": {
                        "ar": "كانت الأيام الأولى في الرحلات المدرسية دائمًا معقدة وصعبة بعض الشيء.",
                        "fr": "Les premiers jours des voyages de classe étaient toujours un peu délicats."
                    },
                    "options": {
                        "ar": [
                            "المذيعة (Moderatorin)",
                            "لارا (Lara)",
                            "سيمون (Simon)"
                        ],
                        "fr": [
                            "L'animatrice",
                            "Lara",
                            "Simon"
                        ]
                    }
                }
            }
        }
    }
},
  "modellsatz-6": {
    "parts": {
        "1": {
            "instructions": {
                "ar": "اقرأ النص والأسئلة من 1 إلى 6 المتعلقة به. اختر: هل العبارات صحيحة أم خاطئة؟",
                "fr": "Lisez le texte et les questions 1 à 6 correspondantes. Choisissez : les affirmations sont-elles Vraies ou Fausses ?"
            },
            "articles": [
                {
                    "heading": {
                        "ar": "تجاربي وذكرياتي",
                        "fr": "Mes expériences"
                    },
                    "body": {
                        "ar": [
                            "وقع حادث هاتفي المحمول أثناء عطلتي الصيفية في اليونان. كنت أضع الهاتف في جيب شورت السباحة ونزلت به إلى مياه البحر. وسرعان ما أدركت بالطبع أن هاتفي لا يزال في جيبي، ولكن للأسف كنت أقف بالفعل في الماء حتى مستوى الخصر.",
                            "ركضت عائدًا فورًا إلى الشاطئ وأخرجت الهاتف من جيبي. وكان رد فعلي الأول هو تجفيف الهاتف بالمنشفة. بعد ذلك قمت بتفكيك أجزائه وتجفيف كل قطعة منها على حدة بالمنشفة. ومع ذلك، أدركت منذ تلك اللحظة أن فرصة نجاة هاتفي كانت ضئيلة للغاية. تركته بعد ذلك ملقى في الشمس طوال بقية يوم الشاطئ. وعند وصولي إلى الفندق جففته بمجفف الشعر، ولكن حتى ذلك لم يُجدِ نفعًا؛ صحيح أنه اشتغل، لكن الشاشة لم تعرض سوى بكسلات ونقاط مشوشة. لم أتمكن من الدخول إلى القائمة، ولم أستطع إجراء مكالمات أو إرسال رسائل نصية قصيرة SMS. ومن خلال إحدى المنصات على الإنترنت، علمت أن أفضل إجراء هو ترك الهاتف مطفأً لبضعة أيام. لم تكن نصيحة سهلة الاتباع على الإطلاق وأنا في إجازة، إذ كنت أرغب بشدة في التواصل مع عائلتي وأصدقائي.",
                            "كان ذلك في أول أيام العطلة، ولذا كان الأمر مزعجًا ومحبطًا للغاية. ولكن كان للأمر جانب إيجابي في النهاية: لقد وفرت المال، إذ لم تعد المكالمات الدولية والرسائل النصية الباهظة من الخارج ممكنة.",
                            "وعند عودتي إلى المنزل شعرت بارتياح كبير: كانت شريحة الهاتف (SIM-Karte) لحسن الحظ لا تزال صالحة للاستخدام، وهكذا لم أفقد أية أرقام هواتف أو رسائل محفوظة. لو كنت أمتلك طرازًا أحدث لكانت تلك البيانات قد ضاعت على الأرجح، لأن الطرز الحديثة تخزن كل شيء تقريبًا على ذاكرة الجهاز نفسه وليس على الشريحة. ومن الناحية المالية، كانت الخسارة محدودة لأن الهاتف لم يكن طرازًا حديثًا جدًا. وللأسف لم أتمكن من المطالبة بالضمان؛ فضمان الأجهزة لا يغطي أبدًا أضرار المياه. غير أنني حصلت على هاتف جدتي، وكان من نفس الطراز تمامًا.",
                            "لن يتكرر معي مثل هذا الموقف مرة أخرى؛ فقد أصبحت أرتدي فقط شورتات سباحة بلا جيوب، حتى لا تخطر ببالي فكرة وضع الهاتف في جيب السروال إطلاقًا."
                        ],
                        "fr": [
                            "Mon accident de téléphone portable est arrivé pendant mes vacances d'été en Grèce. J'avais laissé mon téléphone dans la poche de mon maillot de bain et je suis entré dans la mer avec. Là-bas, j'ai évidemment remarqué assez vite qu'il était encore dans ma poche. Malheureusement, j'avais déjà de l'eau jusqu'aux hanches.",
                            "J'ai immédiatement couru vers la plage et sorti le téléphone de ma poche. Ma première réaction a été de l'essuyer avec ma serviette. Ensuite, je l'ai démonté et j'ai également séché chaque pièce séparément avec la serviette. Mais j'ai vite compris que mon téléphone n'avait qu'une faible chance de survie. Je l'ai ensuite laissé au soleil pour le reste de la journée à la plage. Arrivé à l'hôtel, je l'ai séché au sèche-cheveux, mais cela n'a pas aidé non plus. Il s'allumait bien, mais l'écran n'affichait que des pixels désordonnés. Je n'avais aucun accès au menu et ne pouvais ni téléphoner ni envoyer de SMS. Sur un forum en ligne, j'ai appris que le mieux était de laisser le téléphone éteint pendant plusieurs jours. Un conseil difficile à suivre en vacances, alors que je voulais garder le contact avec ma famille et mes amis.",
                            "C'était le tout premier jour des vacances, ce qui rendait la chose doublement rageante. Mais cela a eu un bon côté : j'ai économisé de l'argent, car les appels et SMS très coûteux depuis l'étranger n'étaient plus possibles.",
                            "De retour à la maison, quel soulagement : la carte SIM était heureusement encore utilisable et je n'avais perdu ni mes numéros ni mes messages. Avec un modèle plus récent, tout se serait envolé, car presque tout y est stocké sur l'appareil lui-même et non sur la carte SIM. Financièrement, les dégâts sont restés limités car ce n'était pas un modèle tout neuf. Je n'ai malheureusement pas pu faire jouer la garantie, les dégâts des eaux n'étant jamais couverts. Mais j'ai récupéré le téléphone de ma grand-mère, qui était exactement le même modèle.",
                            "Une telle mésaventure ne m'arrivera plus. Je ne porte désormais plus que des maillots de bain sans poches, pour ne même pas avoir l'idée d'y glisser mon téléphone."
                        ]
                    },
                    "signature": {
                        "ar": "ماري شارلوت ماس",
                        "fr": "Marie-Charlotte Maas"
                    }
                }
            ],
            "questions": {
                "1": {
                    "text": {
                        "ar": "تعطل هاتف سفين عندما حاول تجفيفه بالمنشفة.",
                        "fr": "Le portable de Sven est tombé en panne lorsqu'il a tenté de le sécher avec la serviette."
                    }
                },
                "2": {
                    "text": {
                        "ar": "قضى سفين بقية اليوم على الشاطئ مستلقيًا تحت أشعة الشمس.",
                        "fr": "Sven a passé le reste de la journée à la plage au soleil."
                    }
                },
                "3": {
                    "text": {
                        "ar": "بحث سفين على الإنترنت عما ينبغي عليه فعله في مثل هذه الحالة.",
                        "fr": "Sven s'est renseigné sur Internet pour savoir ce qu'il devait faire."
                    }
                },
                "4": {
                    "text": {
                        "ar": "شعر سفين بانزعاج كبير، غير أنه تمكن من توفير بعض المال.",
                        "fr": "Sven était très contrarié, mais il a pu faire des économies."
                    }
                },
                "5": {
                    "text": {
                        "ar": "لأن شريحة الهاتف كانت سليمة، بقيت الأرقام والرسائل محفوظة دون ضياع.",
                        "fr": "Comme la carte SIM était en bon état, les numéros et les messages sont restés enregistrés."
                    }
                },
                "6": {
                    "text": {
                        "ar": "اشترى سفين لنفسه نفس طراز الهاتف الذي تمتلكه جدته.",
                        "fr": "Sven s'est acheté le même modèle que celui de sa grand-mère."
                    }
                }
            }
        },
        "2": {
            "instructions": {
                "ar": "اقرأ النص الصحفي والأسئلة 7 إلى 9 المتعلقة به. اختر الحل الصحيح a أو b أو c.",
                "fr": "Lisez le texte de presse et les questions 7 à 9 correspondantes. Choisissez la bonne solution a, b ou c."
            },
            "articles": [
                {
                    "heading": {
                        "ar": "يا لها من بهجة وسرور!",
                        "fr": "Oh, quelle joie !"
                    },
                    "body": {
                        "ar": [
                            "خلال أيام العطلات والأعياد، يُقدر الألمان التواجد معًا وسط العائلة؛ فبحسب التقاليد تلتقي الأسرة مساء 24 ديسمبر للاحتفال معًا، وأحيانًا يجتمع الجميع أيضًا في اليومين التاليين لعيد الميلاد. وذكر خمسة بالمائة فقط من جميع الألمان في استطلاع للرأي أنهم يفضلون قضاء عيد الميلاد دون أقاربهم. بينما تتطلع الأغلبية الساحقة، وهي 92 بالمائة، بشوق إلى رؤية العائلة ويستمتعون بصحبة أقاربهم.",
                            "والمثير للدهشة أن الاستطلاع أظهر أيضًا أن وجبة العيد الاحتفالية وشجرة عيد الميلاد تحظيان بأهمية بالغة لدى الألمان؛ فكلاهما عنصر لا غنى عنه في الاحتفال. وفي المقابل، تلعب الهدايا دورًا ثانويًا على نحو مفاجئ: إذ صرح 61 بالمائة من المشاركين في الاستطلاع بأنه يمكن الاستغناء عن تبادل الهدايا. وتختلف الآراء حول ذلك باختلاف الفئات العمرية: فبينما لا يولي 73 بالمائة ممن تزيد أعمارهم عن 60 عامًا أهمية كبيرة للهدايا، فإن 42 بالمائة فقط من الشباب دون سن الثلاثين سيكونون راضين دون هدايا. ونفس الموقف يتبناه الألمان تجاه الخطب التقليدية للرئيس والبابا التي تُبث سنويًا عبر التلفاز: حيث يفضل أكثر من ثلاثة أرباع المشاركين إزالتها أولاً من جدول البث التلفزيوني."
                        ],
                        "fr": [
                            "Pendant les fêtes, les Allemands apprécient particulièrement de se retrouver en famille. Traditionnellement, ils se réunissent le soir du 24 décembre pour célébrer ensemble, et parfois aussi durant les deux jours suivants. Seuls 5 % des Allemands ont déclaré lors d'un sondage qu'ils préféreraient passer Noël sans leurs proches. La grande majorité, soit 92 %, se réjouit de voir la famille et de profiter de leur compagnie.",
                            "De façon surprenante, le sondage révèle également que le repas festif et le sapin de Noël sont primordiaux pour les Allemands, les deux étant considérés comme indispensables à la fête. En revanche, les cadeaux jouent un rôle étonnamment mineur : 61 % des personnes interrogées affirment qu'elles pourraient très bien se passer d'échanger des cadeaux. Les avis divergent toutefois selon les tranches d'âge : si 73 % des plus de 60 ans n'accordent pas une grande importance aux cadeaux, seuls 42 % des moins de 30 ans s'en contenteraient. Les Allemands partagent le même avis tranché sur les traditionnels discours télévisés du Président et du Pape : plus des trois quarts des sondés souhaiteraient les supprimer en priorité des programmes."
                        ]
                    }
                }
            ],
            "questions": {
                "7": {
                    "text": {
                        "ar": "يدور هذا النص حول …",
                        "fr": "Dans ce texte, il s'agit de…"
                    },
                    "options": {
                        "ar": [
                            "كيف يحب الألمان الاحتفال في عيد الميلاد.",
                            "أي هدايا عيد الميلاد تحظى بشعبية في الوقت الحالي.",
                            "من يحتفل بعيد الميلاد في ألمانيا."
                        ],
                        "fr": [
                            "la manière dont les Allemands aiment fêter Noël.",
                            "des cadeaux de Noël actuellement très populaires.",
                            "de qui célèbre Noël en Allemagne."
                        ]
                    }
                },
                "8": {
                    "text": {
                        "ar": "معظم الألمان …",
                        "fr": "La plupart des Allemands…"
                    },
                    "options": {
                        "ar": [
                            "يرغبون في الحصول على هدايا في عيد الميلاد.",
                            "يريدون بكل تأكيد وجود شجرة عيد ميلاد.",
                            "يذهبون في عيد الميلاد لزيارة الأصدقاء."
                        ],
                        "fr": [
                            "veulent absolument des cadeaux à Noël.",
                            "souhaitent impérativement avoir un sapin de Noël.",
                            "vont chez des amis à Noël."
                        ]
                    }
                },
                "9": {
                    "text": {
                        "ar": "العائلة …",
                        "fr": "La famille…"
                    },
                    "options": {
                        "ar": [
                            "تعتبر جزءًا لا يتجزأ من احتفال الألمان بعيد الميلاد.",
                            "تعتبر دائمًا ذات أهمية قصوى للألمان في كل وقت.",
                            "تحتفل في ألمانيا بعيد الميلاد لمدة ثلاثة أيام متواصلة."
                        ],
                        "fr": [
                            "fait partie intégrante de la fête de Noël pour les Allemands.",
                            "est toujours très importante pour les Allemands.",
                            "fête Noël pendant trois jours entiers en Allemagne."
                        ]
                    }
                },
                "10": {
                    "text": {
                        "ar": "يدور هذا النص حول …",
                        "fr": "Dans ce texte, il s'agit de…"
                    },
                    "options": {
                        "ar": [
                            "أي فئات من الطلاب تدرس في الجامعة.",
                            "كيف يتصرف أولياء أمور الطلاب الجامعيين الجدد.",
                            "كيف تبدو فعاليات «يوم أولياء الأمور» في إحدى الجامعات."
                        ],
                        "fr": [
                            "des élèves qui choisissent d'étudier à l'université.",
                            "du comportement des parents des nouveaux étudiants.",
                            "du déroulement d'une « journée des parents » à l'université."
                        ]
                    }
                },
                "11": {
                    "text": {
                        "ar": "في الولايات المتحدة الأمريكية …",
                        "fr": "Aux États-Unis…"
                    },
                    "options": {
                        "ar": [
                            "يُسمح للآباء بالدراسة في نفس الوقت مع أبنائهم.",
                            "يختار أولياء الأمور الجامعات بالنيابة عن أبنائهم.",
                            "يحافظ العديد من الآباء على تواصل والتصاق وثيق بأبنائهم الطلاب."
                        ],
                        "fr": [
                            "les parents ont le droit d'étudier avec leurs enfants.",
                            "les parents choisissent l'université pour leurs enfants.",
                            "de nombreux parents gardent un contact très étroit avec leurs enfants étudiants."
                        ]
                    }
                },
                "12": {
                    "text": {
                        "ar": "الجامعات …",
                        "fr": "Les universités…"
                    },
                    "options": {
                        "ar": [
                            "تستغل «يوم أولياء الأمور» كدعاية وترويج لنفسها أيضًا.",
                            "ترغب فقط في التعرف على أولياء أمور الطلاب المستجدين.",
                            "تحصل على أموال وتبرعات نقدية من أولياء الأمور."
                        ],
                        "fr": [
                            "profitent aussi de la « journée des parents » pour faire leur promotion.",
                            "souhaitent simplement faire connaissance avec les parents des nouveaux étudiants.",
                            "reçoivent de l'argent de la part des parents."
                        ]
                    }
                }
            }
        },
        "3": {
            "instructions": {
                "ar": "اقرأ المواقف 13 إلى 19 والإعلانات a إلى j. اختر: أي إعلان يناسب أي موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. إذا لم يكن هناك إعلان مناسب للموقف، اكتب 0 (أو اختر X).",
                "fr": "Lisez les situations 13 à 19 et les annonces a à j. Choisissez l'annonce correspondant à chaque situation. Chaque annonce n'est utilisable qu'une seule fois. Si aucune annonce ne convient, inscrivez 0 (ou choisissez X)."
            },
            "situationsIntro": {
                "ar": "إن تكوين عائلة أمر رائع، لكنه يجلب أحيانًا بعض الهموم والمشاكل. ويبحث معارفك عن حلول مناسبة.",
                "fr": "Avoir une famille est une belle chose, mais cela apporte parfois des soucis et des difficultés. Vos connaissances cherchent des solutions."
            },
            "questions": {
                "13": {
                    "text": {
                        "ar": "عمة إريك مصابة بمرض نفسي. وهو يبحث عن ندوة أو دورة تدريبية ليتعلم كيف يفهم حالتها ويساعدها بشكل أفضل.",
                        "fr": "La tante d'Erik souffre de troubles psychiques. Il cherche un séminaire pour apprendre à mieux la comprendre et à l'aider."
                    }
                },
                "14": {
                    "text": {
                        "ar": "تزوج والد كلارا مرة أخرى، ولا تطيق كلارا زوجة أبيها الجديدة على الإطلاق. تريد الانتقال للعيش بمفردها، لكنها لا تزال في سن 16 ولا تعرف إن كان يحق لها ذلك قانونيًا.",
                        "fr": "Le père de Klara s'est remarié et Klara ne supporte pas sa belle-mère. Elle veut déménager et vivre seule, mais n'a que 16 ans et ignore si la loi le lui permet."
                    }
                },
                "15": {
                    "text": {
                        "ar": "أراد السيد لينتس الأسبوع الماضي استشارة مركز إرشاد الوالدين مجددًا بشأن حمية ابنه الغذائية، لكنه لم يجد أحدًا هناك.",
                        "fr": "La semaine dernière, M. Lenz a voulu solliciter à nouveau le service d'aide aux parents au sujet du régime de son fils, mais il n'y avait personne."
                    }
                },
                "16": {
                    "text": {
                        "ar": "دانيال على وشك إنهاء مرحلة المدرسة الإعدادية (Realschule)، لكنه لا يزال لا يدري ماذا سيفعل بعد ذلك. ويرغب والداه في الذهاب معه إلى جلسة استشارية.",
                        "fr": "Daniel s'apprête à passer son diplôme de fin d'études secondaires (Realschule), mais ne sait toujours pas quoi faire ensuite. Ses parents souhaitent l'accompagner à un entretien d'orientation."
                    }
                },
                "17": {
                    "text": {
                        "ar": "يخطط أليكسيا وغريغور لشراء مطبخ جديد. ويريدان اليوم الذهاب للمدينة للاستفسار في المتاجر المختلفة، غير أن جليسة الأطفال مرضت فجأة.",
                        "fr": "Alexia et Gregor prévoient d'acheter une nouvelle cuisine. Ils souhaitent faire le tour des magasins en ville aujourd'hui, mais leur baby-sitter tombe subitement malade."
                    }
                },
                "18": {
                    "text": {
                        "ar": "والدة سيمون مريضة وطاعنة في السن، وأحيانًا يصبح العيش المشترك صعبًا ومعقدًا. ويرغب سيمون في الاستفادة والتعلم من تجارب أشخاص آخرين يمرون بنفس الظروف.",
                        "fr": "La mère de Simon est malade et très âgée, rendant parfois la cohabitation difficile. Il souhaiterait apprendre des expériences vécues par d'autres aidants."
                    }
                },
                "19": {
                    "text": {
                        "ar": "أنتونيا تنتظر مولودها الأول ولا تريد الاعتماد فقط على ما قرأته في الكتب الطبية.",
                        "fr": "Antonia attend son premier enfant et ne souhaite pas se fier uniquement à ce qu'elle a pu lire dans les livres."
                    }
                }
            }
        },
        "4": {
            "instructions": {
                "ar": "اقرأ الآراء من 20 إلى 26. اختر: هل يؤيد الشخص أن تكون الأرصفة من حيث المبدأ مخصصة للمشاة فقط؟",
                "fr": "Lisez les avis 20 à 26. Choisissez : La personne est-elle favorable à ce que les trottoirs soient par principe réservés uniquement aux piétons ?"
            },
            "topic": {
                "ar": "تقرأ في إحدى المجلات تعليقات حول مقال عن لائحة مرورية جديدة تقتصر على السماح للمشاة فقط بالسير على أرصفة المشاة.",
                "fr": "Dans un magazine, vous lisez des commentaires sur un nouvel arrêté de circulation n'autorisant plus que les piétons sur les trottoirs."
            },
            "questions": {
                "20": {
                    "text": {
                        "ar": "سفين، 23 عامًا، فيتنبرغ",
                        "fr": "Sven, 23 ans, Wittenberg"
                    }
                },
                "21": {
                    "text": {
                        "ar": "أولاف، 17 عامًا، هيلمشتيت",
                        "fr": "Olav, 17 ans, Helmstedt"
                    }
                },
                "22": {
                    "text": {
                        "ar": "كارين، 47 عامًا، لانديك",
                        "fr": "Karen, 47 ans, Landeck"
                    }
                },
                "23": {
                    "text": {
                        "ar": "باول، 26 عامًا، ثون",
                        "fr": "Paul, 26 ans, Thoune"
                    }
                },
                "24": {
                    "text": {
                        "ar": "ألينا، 30 عامًا، كوفشتاين",
                        "fr": "Alina, 30 ans, Kufstein"
                    }
                },
                "25": {
                    "text": {
                        "ar": "يوناس، 18 عامًا، كارلسروه",
                        "fr": "Jonas, 18 ans, Karlsruhe"
                    }
                },
                "26": {
                    "text": {
                        "ar": "كين، 29 عامًا، تسوغ",
                        "fr": "Ken, 29 ans, Zoug"
                    }
                }
            }
        },
        "5": {
            "instructions": {
                "ar": "أنت تقرأ معلومات التسجيل الخاصة بجامعة الأطفال الصيفية في غراتس، لأنك وجدت في برنامج الجامعة عروضًا ممتعة ومفيدة. اختر لكل سؤال من 27 إلى 30 الإجابة الصحيحة a أو b أو c.",
                "fr": "Vous lisez la brochure d'inscription de l'Université d'été pour enfants de Graz, ayant trouvé des offres intéressantes dans leur programme. Choisissez la bonne réponse a, b ou c pour chaque question 27 à 30."
            },
            "articles": [
                {
                    "heading": {
                        "ar": "جامعة الأطفال الصيفية في غراتس — معلومات التسجيل",
                        "fr": "Université d'été pour enfants de Graz — Informations d'inscription"
                    },
                    "body": {
                        "ar": [
                            "<strong>القبول والتسجيل:</strong><br>يوصى بجامعة الأطفال الصيفية في غراتس للأطفال واليافعين من سن 9 إلى 15 عامًا. تبدأ عمليات التسجيل في 22 يونيو. والتسجيل متاح فقط لأسابيع كاملة عبر الموقع الإلكتروني لجامعة الأطفال بغراتس. ويتم قبول ما يصل إلى 60 طفلاً كحد أقصى في الأسبوع للفعاليات والورش العملية.",
                            "<strong>مواعيد وساعات العمل:</strong><br>تفتح جامعة الأطفال الصيفية أبوابها من 11 يوليو حتى 29 يوليو. وتتوفر الرعاية والإشراف طوال اليوم من الاثنين إلى الجمعة من الساعة 8.00 صباحًا حتى 17.00 مساءً. وتكون نقطة الالتقاء المشتركة الأولى لجميع المشاركين دائمًا صباح يوم الاثنين في تمام الساعة 8.15 في قاعة الندوات SR 15.03 (شارع الجامعة 15، الطابق الأرضي)، جامعة كارل فرانزنس.",
                            "<strong>التكاليف والرسوم:</strong><br>يتم احتساب رسوم إعاشة ووجبات طعام مقطوعة قدرها 45.00 يورو أسبوعيًا. وتُدفع هذه المساهمة نقدًا كل يوم اثنين صباحًا عند نقطة الالتقاء العامة SR 15.03 عن الأسبوع الجاري؛ وهي تشمل وجبة الإفطار، والوجبات الخفيفة، والغداء، والمشروبات.",
                            "<strong>المرض والتغيب:</strong><br>إذا مرض الطفل أو تعذر عليه حضور الفعاليات، فيجب إبلاغ مكتب جامعة الأطفال على الفور. ويُحظر على المشرفين تقديم أي أدوية للأطفال. وفي حال وجود حساسية، نرجو منكم إخطارنا بذلك وتزويد الطفل بالأدوية الطارئة المناسبة لأخذها معه.",
                            "<strong>تسليم واستلام طفلك:</strong><br>يتعين على أولياء الأمور الحرص على تسليم اليافعين من سن 9 إلى 15 عامًا شخصيًا أو عبر ممثليهم المفوضين حسب الأصول إلى عهدة المشرفين، واستلامهم من هناك عند الانتهاء. وأي مغادرة للطفل بمفرده سيرًا إلى المنزل يجب تأكيدها والموافقة عليها مسبقًا بتوقيع خطي من ولي الأمر."
                        ],
                        "fr": [
                            "<strong>Admission et inscription :</strong><br>L'Université d'été des enfants de Graz est recommandée pour les jeunes de 9 à 15 ans. Les inscriptions ouvrent le 22 juin et ne sont possibles qu'à la semaine complète via le site officiel. Les ateliers accueillent un maximum de 60 enfants par semaine.",
                            "<strong>Période et horaires d'ouverture :</strong><br>L'Université d'été est ouverte du 11 au 29 juillet. L'encadrement en journée continue est assuré du lundi au vendredi de 8h00 à 17h00. Le premier point de rassemblement a lieu le lundi matin à 8h15 dans la salle SR 15.03 (Universitätsstraße 15, RDC), Université Karl-Franzens.",
                            "<strong>Frais de participation :</strong><br>Un forfait de restauration hebdomadaire de 45,00 € est appliqué. Ce montant est perçu en espèces chaque lundi matin au point de rencontre pour la semaine en cours. Il comprend le petit-déjeuner, le goûter, le déjeuner et les boissons.",
                            "<strong>Maladie et absence :</strong><br>En cas de maladie ou d'empêchement, il convient d'en avertir sans délai le secrétariat. Les animateurs ne sont pas autorisés à administrer de médicaments. En cas d'allergie connue, merci de le signaler et de fournir les médicaments d'urgence nécessaires.",
                            "<strong>Accueil et sortie des enfants :</strong><br>Les parents ou leurs représentants mandatés doivent confier et récupérer personnellement les jeunes auprès de l'équipe d'encadrement. Tout retour autonome de l'enfant à la maison doit faire l'objet d'une autorisation parentale écrite et signée au préalable."
                        ]
                    }
                }
            ],
            "questions": {
                "27": {
                    "text": {
                        "ar": "يمكن لأولياء الأمور الإقرار كتابيًا بأن …",
                        "fr": "Les parents peuvent certifier par écrit que…"
                    },
                    "options": {
                        "ar": [
                            "طفلهم يجب أن يتم اصطحابه من قِبل أحد المشرفين.",
                            "يقومون بأنفسهم بإحضار طفلهم إلى الجامعة.",
                            "طفلهم مسموح له بالعودة بمفرده إلى المنزل."
                        ],
                        "fr": [
                            "leur enfant doit être récupéré par un encadrant.",
                            "ils amèneront eux-mêmes leur enfant à l'université.",
                            "leur enfant peut rentrer seul chez lui."
                        ]
                    }
                },
                "28": {
                    "text": {
                        "ar": "بالنسبة لوجبات طعام الأطفال، …",
                        "fr": "Pour la nourriture des enfants, …"
                    },
                    "options": {
                        "ar": [
                            "يتعين على أولياء الأمور تدبير وجباتهم بأنفسهم.",
                            "يدفع أولياء الأمور مبلغًا محددًا كل أسبوع.",
                            "يجب على الآباء إعطاء أطفالهم نقودًا بشكل يومي."
                        ],
                        "fr": [
                            "les parents doivent s'en charger eux-mêmes.",
                            "les parents paient une somme déterminée chaque semaine.",
                            "les parents doivent donner de l'argent de poche tous les jours à leurs enfants."
                        ]
                    }
                },
                "29": {
                    "text": {
                        "ar": "الأدوية والعلاجات …",
                        "fr": "Les médicaments…"
                    },
                    "options": {
                        "ar": [
                            "لا يجوز للمشرفين تقديمها أو إعطاؤها للأطفال.",
                            "يمكن الحصول عليها في الحالات الطارئة من مكتب جامعة الأطفال.",
                            "المخصصة للمصابين بالحساسية يجب تسليمها لمكتب جامعة الأطفال."
                        ],
                        "fr": [
                            "ne peuvent pas être administrés aux enfants par les animateurs.",
                            "sont disponibles au secrétariat en cas d'urgence.",
                            "doivent être obligatoirement déposés au secrétariat pour les personnes allergiques."
                        ]
                    }
                },
                "30": {
                    "text": {
                        "ar": "بالنسبة لشروط وقواعد التسجيل:",
                        "fr": "Concernant l'inscription :"
                    },
                    "options": {
                        "ar": [
                            "لا يمكن تسجيل سوى الأطفال واليافعين الذين تتراوح أعمارهم حصرًا بين 9 و15 عامًا.",
                            "يمكن للمشترك التسجيل في ورشة عمل واحدة فقط في كل مرة.",
                            "عدد المقاعد والمشاركين المقبولين محدود."
                        ],
                        "fr": [
                            "Seuls les jeunes entre 9 et 15 ans peuvent être inscrits.",
                            "On ne peut s'inscrire qu'à un seul atelier à la fois.",
                            "Le nombre de participants est limité."
                        ]
                    }
                }
            }
        },
        "6": {
            "instructions": {
                "ar": "تتكون وحدة الاستماع من أربعة أجزاء. ستستمع إلى عدة نصوص وتجيب عن أسئلة متعلقة بها. يوجد حل صحيح واحد فقط لكل سؤال.",
                "fr": "Le module Écoute comprend quatre parties. Vous écoutez plusieurs enregistrements et répondez aux questions. Une seule réponse est correcte par question."
            },
            "teile": {
                "1": {
                    "title": {
                        "ar": "خمسة نصوص قصيرة · الأسئلة من 1 إلى 10",
                        "fr": "Cinq courts enregistrements · Questions 1 à 10"
                    },
                    "desc": {
                        "ar": "ستستمع الآن إلى خمسة نصوص قصيرة، مرتين لكل نص. أجب عن سؤالين لكل نص.",
                        "fr": "Vous écoutez maintenant cinq courts textes, chacun deux fois. Résolvez deux questions par texte."
                    }
                },
                "2": {
                    "title": {
                        "ar": "رحلة بالباخرة البخارية في نهر الراين · الأسئلة من 11 إلى 15",
                        "fr": "Croisière en bateau à vapeur sur le Rhin · Questions 11 à 15"
                    },
                    "desc": {
                        "ar": "ستستمع إلى النص مرة واحدة فقط. أجب عن خمسة أسئلة باختيار a أو b أو c.",
                        "fr": "Vous écoutez l'enregistrement une seule fois. Répondez aux cinq questions a, b ou c."
                    },
                    "context": {
                        "ar": "أنت تشارك في رحلة سياحية على متن باخرة بخارية في نهر الراين.",
                        "fr": "Vous participez à une croisière en bateau à vapeur sur le Rhin."
                    }
                },
                "3": {
                    "title": {
                        "ar": "حوار في مقهى حول المطبخ السويسري · الأسئلة من 16 إلى 22",
                        "fr": "Conversation dans un café sur la cuisine suisse · Questions 16 à 22"
                    },
                    "desc": {
                        "ar": "ستستمع إلى المحادثة مرة واحدة فقط. حدد: هل العبارات صحيحة أم خاطئة؟",
                        "fr": "Vous écoutez la conversation une seule fois. Déterminez si les affirmations sont Vraies ou Fausses."
                    },
                    "context": {
                        "ar": "أنت جالس في مقهى بمدينة زيورخ وتسمع رجلاً مسناً وفتاة يتحدثان عن أطباق المطبخ السويسري.",
                        "fr": "Dans un café de Zurich, vous entendez un monsieur âgé et une jeune fille parler de spécialités suisses."
                    }
                },
                "4": {
                    "title": {
                        "ar": "حوار إذاعي حول راديو المستشفى · الأسئلة من 23 إلى 30",
                        "fr": "Débat radiophonique : La radio hospitalière · Questions 23 à 30"
                    },
                    "desc": {
                        "ar": "ستستمع إلى النقاش مرتين. طابق كل عبارة مع المتحدث: من يقول ماذا؟",
                        "fr": "Vous écoutez le débat deux fois. Associez chaque affirmation : qui dit quoi ?"
                    },
                    "context": {
                        "ar": "يناقش مقدم برنامج «TopIdeen» الإذاعي مع أنيت فينكه ومايكل شونبيرغ مشروعاً فريداً يتمثل في إذاعة المستشفى.",
                        "fr": "L'animateur de l'émission « TopIdeen » débat avec Annette Vinke et Michael Schönberg autour d'une initiative originale : la radio d'hôpital."
                    }
                }
            },
            "questions": {
                "h1": {
                    "text": {
                        "ar": "أنت تستمع إلى معلومات وإرشادات موجهة للمسافرين.",
                        "fr": "Vous entendez des informations destinées aux voyageurs."
                    }
                },
                "h2": {
                    "text": {
                        "ar": "من الذي لا يلزمه دفع رسوم لجواز السفر؟",
                        "fr": "Qui est dispensé de payer pour le passeport ?"
                    },
                    "options": {
                        "ar": [
                            "الأطفال الرضع حتى عمر سنتين.",
                            "الأطفال دون سن 13 عامًا.",
                            "الأطفال فوق سن 12 عامًا."
                        ],
                        "fr": [
                            "Les tout-petits jusqu'à l'âge de 2 ans.",
                            "Les enfants de moins de 13 ans.",
                            "Les enfants de plus de 12 ans."
                        ]
                    }
                },
                "h3": {
                    "text": {
                        "ar": "أنت تستمع إلى عرض لدروس خصوصية في اللغة الإنجليزية.",
                        "fr": "Vous entendez une offre de cours particuliers d'anglais."
                    }
                },
                "h4": {
                    "text": {
                        "ar": "لمن صُممت هذه الدورة اللغوية؟",
                        "fr": "À qui s'adresse ce cours de langue ?"
                    },
                    "options": {
                        "ar": [
                            "للموظفين والمهنيين العاملين.",
                            "لطلاب الجامعات.",
                            "لتلاميذ المدارس."
                        ],
                        "fr": [
                            "Aux professionnels en activité.",
                            "Aux étudiants.",
                            "Aux élèves scolarisés."
                        ]
                    }
                },
                "h5": {
                    "text": {
                        "ar": "سوف ترتفع درجات الحرارة ويصبح الطقس أكثر دفئًا.",
                        "fr": "Les températures vont se réchauffer."
                    }
                },
                "h6": {
                    "text": {
                        "ar": "ستهطل الأمطار يوم …",
                        "fr": "Il pleuvra le…"
                    },
                    "options": {
                        "ar": [
                            "الخميس.",
                            "الجمعة.",
                            "السبت."
                        ],
                        "fr": [
                            "Jeudi.",
                            "Vendredi.",
                            "Samedi."
                        ]
                    }
                },
                "h7": {
                    "text": {
                        "ar": "هناك إعلان عن محاضرة عامة.",
                        "fr": "Il y a une conférence."
                    }
                },
                "h8": {
                    "text": {
                        "ar": "ما هو موضوع المحاضرة؟",
                        "fr": "De quoi s'agit-il ?"
                    },
                    "options": {
                        "ar": [
                            "عن الطب والعلوم الصحية.",
                            "عن علوم الحاسوب والمعلوماتية.",
                            "عن هندسة وتكنولوجيا الروبوتات."
                        ],
                        "fr": [
                            "De médecine.",
                            "D'informatique.",
                            "De robotique."
                        ]
                    }
                },
                "h9": {
                    "text": {
                        "ar": "يرغب دينيس وكلوديا في اللقاء معًا.",
                        "fr": "Dennis et Claudia souhaitent se rencontrer."
                    }
                },
                "h10": {
                    "text": {
                        "ar": "للوصول إلى حديقة الحيوان، …",
                        "fr": "Pour se rendre au zoo, …"
                    },
                    "options": {
                        "ar": [
                            "يركب دينيس المترو أو القطار لسبع محطات.",
                            "يحتاج دينيس إلى ما يقارب 35 دقيقة.",
                            "يتعين على دينيس تبديل الخط مرتين."
                        ],
                        "fr": [
                            "Dennis effectue 7 stations de métro ou RER.",
                            "Dennis met environ 35 minutes.",
                            "Dennis doit changer deux fois de ligne."
                        ]
                    }
                },
                "h11": {
                    "text": {
                        "ar": "متى تم بناء وتدشين السفينة؟",
                        "fr": "Quand le bateau a-t-il été construit ?"
                    },
                    "options": {
                        "ar": [
                            "قبل عام 2010.",
                            "بعد عام 2010.",
                            "منذ 100 عام."
                        ],
                        "fr": [
                            "Avant 2010.",
                            "Après 2010.",
                            "Il y a 100 ans."
                        ]
                    }
                },
                "h12": {
                    "text": {
                        "ar": "ما الذي يمكن للزوار مشاهدته في قلعة ماوس (Burg Maus)؟",
                        "fr": "Que peut-on voir au château Burg Maus ?"
                    },
                    "options": {
                        "ar": [
                            "قطط.",
                            "فئران.",
                            "طيور وجوارح."
                        ],
                        "fr": [
                            "Des chats.",
                            "Des souris.",
                            "Des oiseaux."
                        ]
                    }
                },
                "h13": {
                    "text": {
                        "ar": "أين ينزل الركاب إلى اليابسة؟",
                        "fr": "Où les passagers débarquent-ils ?"
                    },
                    "options": {
                        "ar": [
                            "في باخيغاو.",
                            "في رودسهايم.",
                            "في سانت غوارسهاوزن."
                        ],
                        "fr": [
                            "À Bacherau.",
                            "À Rüdesheim.",
                            "À Sankt Goarshausen."
                        ]
                    }
                },
                "h14": {
                    "text": {
                        "ar": "يتوفر في بار السفينة …",
                        "fr": "Au bar du bord, on trouve…"
                    },
                    "options": {
                        "ar": [
                            "مشروبات من مزارع الراين.",
                            "مشروبات متنوعة ومختلفة.",
                            "وجبات طعام ساخنة."
                        ],
                        "fr": [
                            "Des vins du vignoble rhénan.",
                            "Diverses boissons variées.",
                            "Des repas chauds."
                        ]
                    }
                },
                "h15": {
                    "text": {
                        "ar": "يُسمح بالتدخين على متن السفينة …",
                        "fr": "On a le droit de fumer…"
                    },
                    "options": {
                        "ar": [
                            "في الهواء الطلق على أسطح السفينة.",
                            "في الصالات والقاعات الداخلية.",
                            "في كابينة خاصة محددة."
                        ],
                        "fr": [
                            "En plein air sur le pont.",
                            "Dans les espaces intérieurs.",
                            "Dans une cabine dédiée."
                        ]
                    }
                },
                "h16": {
                    "text": {
                        "ar": "جد لينا لا يحب تناول الكعك والحلويات.",
                        "fr": "Le grand-père de Lena n'aime pas le gâteau."
                    }
                },
                "h17": {
                    "text": {
                        "ar": "لم يسبق لجد لينا أن تذوق كعكة الجزر السويسرية (Rüeblitorte).",
                        "fr": "Le grand-père de Lena n'a jamais mangé de gâteau aux carottes."
                    }
                },
                "h18": {
                    "text": {
                        "ar": "تحتاج لينا إلى المال للمشاركة في دورة لتعلم الطهي.",
                        "fr": "Lena a besoin d'argent pour un cours de cuisine."
                    }
                },
                "h19": {
                    "text": {
                        "ar": "تحب جدة لينا طهي الأطباق السويسرية التقليدية.",
                        "fr": "La grand-mère de Lena aime préparer des plats suisses."
                    }
                },
                "h20": {
                    "text": {
                        "ar": "يعد طهي وإعداد الأطباق التقليدية بمكونات محلية صديقًا للبيئة.",
                        "fr": "Cuisiner des plats traditionnels locaux est écologique."
                    }
                },
                "h21": {
                    "text": {
                        "ar": "المطبخ المكسيكي الحار ليس صحياً أو ملائماً لمعدة الكثير من السويسريين.",
                        "fr": "La cuisine mexicaine n'est pas si digeste pour les Suisses."
                    }
                },
                "h22": {
                    "text": {
                        "ar": "جد لينا عاجز عن إعطائها المال ولا يستطيع مساعدتها.",
                        "fr": "Le grand-père de Lena ne peut pas lui donner l'argent."
                    }
                },
                "h23": {
                    "text": {
                        "ar": "الروح المرحة للمذيعين لها قيمة معنوية كبيرة.",
                        "fr": "La bonne humeur des animateurs est très précieuse."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                },
                "h24": {
                    "text": {
                        "ar": "يتم استبعاد الأخبار المحزنة والمقلقة من البث الإذاعي بالمستشفى.",
                        "fr": "Les informations tristes sont exclues de l'antenne."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                },
                "h25": {
                    "text": {
                        "ar": "تحمل الإعلانات التجارية فوائد للمستمعين أيضًا.",
                        "fr": "La publicité présente aussi des avantages pour les auditeurs."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                },
                "h26": {
                    "text": {
                        "ar": "الإعلانات التجارية هي التي تجعل تمويل نفقات القناة الإذاعية ممكنًا.",
                        "fr": "La publicité permet le financement de la station."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                },
                "h27": {
                    "text": {
                        "ar": "نجح مشروع «Spitalfunk» في العمل دون أي إعلانات تجارية.",
                        "fr": "La radio « Spitalfunk » a réussi à fonctionner sans publicité."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                },
                "h28": {
                    "text": {
                        "ar": "من يرغب، يمكنه المشاركة والتطوع في العمل الإذاعي بالمستشفى.",
                        "fr": "Toute personne intéressée peut participer à la radio."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                },
                "h29": {
                    "text": {
                        "ar": "يتم استقبال الأخطاء وزلات اللسان بالضحك وروح الدعابة.",
                        "fr": "On prend les erreurs à l'antenne en riant."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                },
                "h30": {
                    "text": {
                        "ar": "يجب إنفاق مبالغ مالية طائلة لشراء وتجهيز الأجهزة الإذاعية.",
                        "fr": "Il faut dépenser beaucoup d'argent pour le matériel radio."
                    },
                    "options": {
                        "ar": [
                            "المقدم (Moderator)",
                            "أنيت فينكه (Annette Vinke)",
                            "مايكل شونبيرغ (Michael Schönberg)"
                        ],
                        "fr": [
                            "Le présentateur",
                            "Annette Vinke",
                            "Michael Schönberg"
                        ]
                    }
                }
            }
        }
    }
}
};
