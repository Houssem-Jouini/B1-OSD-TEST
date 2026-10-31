/* ==========================================================================
   B1 PRÜFUNGSSIMULATION — ERKLÄRUNGSDATEN (DEUTSCH, ARABISCH, FRANZÖSISCH)
   Detaillierte didaktische Erklärungen für jede Aufgabe:
   - Warum ist die richtige Lösung korrekt? (inkl. Textbeleg / Zitat)
   - Warum sind die anderen Optionen / die gewählte falsche Antwort falsch?
   ========================================================================== */

const explanationsData = {
  "modellsatz-1": {
    /* ---------------- TEIL 1 (Aufgaben 1 - 6) ---------------- */
    "1": {
      "quote": "drei Stockwerke unter mir brausen morgens um halb neun die Autos vorbei, obwohl es eine Einbahnstraße ist. Ich kann die Autos nicht nur sehen, ich kann sie auch sehr gut hören.",
      "whyCorrect": {
        "de": "Richtig. Stefan beschreibt deutlich, dass die Autos unter seinem Balkon vorbeibrausen und er sie „sehr gut hören“ kann. Die Straße ist also morgens ziemlich laut.",
        "ar": "صحيح. يوضح شتيفان بوضوح أن السيارات تمر مسرعة تحت شرفته وأنه يستطيع 'سماعها جيدًا جدًا'. بالتالي فإن الشارع صاخب بالفعل في الصباح.",
        "fr": "Vrai. Stefan décrit clairement que les voitures passent à toute allure sous son balcon et qu'il peut « très bien les entendre ». La rue est donc particulièrement bruyante le matin."
      },
      "whyIncorrect": {
        "de": "Falsch wäre hier nicht zutreffend, da Stefan den Verkehrslärm ausdrücklich erwähnt („brausen die Autos vorbei“, „sehr gut hören“).",
        "ar": "اختيار 'خطأ' غير صحيح، لأن شتيفان ذكر صراحةً ضجيج السيارات وسرعتها وصوتها العالي.",
        "fr": "Choisir 'Faux' est incorrect car Stefan mentionne explicitement le bruit de la circulation et le fait qu'il entend très bien les voitures."
      }
    },
    "2": {
      "quote": "Dann kam aus dem Haus gegenüber ein junger Mann angerannt, in einer Art Uniform, ohne Zweifel ein Paketfahrer. ... Frau Wendler im zweiten Stock ständig im Internet Sachen bestellt, und die kommen natürlich mit dem Paketlieferservice.",
      "whyCorrect": {
        "de": "Richtig. Der Paketfahrer kam aus dem Haus gegenüber angerannt, weil er gerade bei Frau Wendler im zweiten Stock ein Paket zugestellt hatte.",
        "ar": "صحيح. ركض سائق الطرود من المبنى المقابل لأنه كان يقوم بتسليم طرد للسيدة فيندلر في الطابق الثاني.",
        "fr": "Vrai. Le livreur est sorti en courant de l'immeuble d'en face parce qu'il venait de livrer un colis chez Mme Wendler au deuxième étage."
      },
      "whyIncorrect": {
        "de": "Falsch wäre unpassend: Der Fahrer saß während des Unfalls nicht am Steuer, sondern erledigte im Haus eine Paketzustellung.",
        "ar": "اختيار 'خطأ' غير سليم: السائق لم يكن داخل السيارة وقت وقوع الحادث، بل كان داخل المبنى يقوم بتوصيل طرد.",
        "fr": "Choisir 'Faux' ne convient pas : le chauffeur n'était pas dans son véhicule lors de l'accident, il effectuait une livraison dans l'immeuble."
      }
    },
    "3": {
      "quote": "Ich bin dann zur Universität gegangen und habe nicht mehr an die ganze Sache gedacht.",
      "whyCorrect": {
        "de": "Falsch. Stefan ist nicht zu Hause geblieben, um den Unfall weiter zu beobachten, sondern ging pünktlich wie gewohnt zu seiner Universität.",
        "ar": "خطأ. شتيفان لم يبقَ في المنزل لمراقبة الحادث، بل ذهب إلى جامعته كالمعتاد ولم يعد يفكر في الأمر.",
        "fr": "Faux. Stefan n'est pas resté chez lui pour observer la scène, mais est parti à l'université comme d'habitude."
      },
      "whyIncorrect": {
        "de": "Die Aussage ist nicht 'richtig', denn der Text widerlegt dies eindeutig mit dem Satz: „Ich bin dann zur Universität gegangen“.",
        "ar": "العبارة ليست 'صحيحة' لأن النص ينفي ذلك تمامًا بجملة: 'ذهبت بعد ذلك إلى الجامعة'.",
        "fr": "L'affirmation n'est pas 'vraie', car le texte la contredit directement : « Je suis ensuite parti à l'université »."
      }
    },
    "4": {
      "quote": "Erst heute Abend fiel es mir wieder ein, als ich beim Gemüsehändler an der Ecke war. Er wohnt in der Nähe und hatte alles gesehen.",
      "whyCorrect": {
        "de": "Richtig. Stefan war am Abend beim Gemüsehändler an der Ecke, wo man typischerweise einkauft.",
        "ar": "صحيح. كان شتيفان في المساء عند بائع الخضار في زاوية الشارع للتسوق، وهناك تذكر الحادث مجددًا.",
        "fr": "Vrai. Stefan était le soir chez le primeur du coin pour faire des courses, où il a de nouveau repensé à l'incident."
      },
      "whyIncorrect": {
        "de": "Falsch ist nicht korrekt: Der Besuch beim Gemüsehändler am Abend belegt einen Lebensmitteleinkauf.",
        "ar": "اختيار 'خطأ' غير صحيح: زيارته لبائع الخضار في المساء تثبت أنه كان يشتري حاجيات غذائية.",
        "fr": "Choisir 'Faux' est erroné : sa visite chez le marchand de légumes le soir prouve qu'il faisait des courses."
      }
    },
    "5": {
      "quote": "das Paketauto schließlich weggefahren war, aber der alte Mercedes musste der Reparaturdienst abholen.",
      "whyCorrect": {
        "de": "Richtig. Während das Paketauto noch selbst fahren konnte, musste der Mercedes abgeschleppt bzw. von einem Reparaturdienst abgeholt werden, was auf einen schweren Schaden hinweist.",
        "ar": "صحيح. بينما استطاعت سيارة الطرود المغادرة بمفردها، كان لابد من سحب سيارة المرسيدس بواسطة خدمة التصليح، مما يثبت تضررها بشدة.",
        "fr": "Vrai. Alors que la camionnette a pu repartir, la Mercedes a dû être remorquée par un service de dépannage, ce qui indique de lourds dégâts."
      },
      "whyIncorrect": {
        "de": "Die Behauptung ist nicht 'falsch': Ein Auto, das abgeschleppt werden muss, ist fahruntüchtig und stark beschädigt.",
        "ar": "العبارة ليست 'خطأ': السيارة التي تحتاج لخدمة قطر وسحب تكون غير صالحة للسير ومتضررة بقوة.",
        "fr": "L'affirmation n'est pas 'fausse' : un véhicule qui doit être remorqué est endommagé au point de ne plus pouvoir rouler."
      }
    },
    "6": {
      "quote": "Der Paketfahrer hatte allerdings in zweiter Reihe geparkt, das war natürlich auch nicht richtig.",
      "whyCorrect": {
        "de": "Falsch. Stefan und der Gemüsehändler stellten fest, dass auch der Paketfahrer einen Fehler gemacht hat, indem er in zweiter Reihe parkte. Nicht 'nur' der Mercedesfahrer war im Unrecht.",
        "ar": "خطأ. أقر شتيفان وبائع الخضار بأن سائق الطرود أخطأ أيضًا بركنه في الصف الثاني المزدوج، لذا ليس سائق المرسيدس 'وحده' من ارتكب أخطاء.",
        "fr": "Faux. Stefan et le primeur s'accordent à dire que le livreur a aussi commis une faute en se garant en double file ; le chauffeur de la Mercedes n'est donc pas le « seul » en tort."
      },
      "whyIncorrect": {
        "de": "Achtung auf das Signalwort 'nur': Da der Paketfahrer verbotenerweise in 2. Reihe stand, haben beide Fehler gemacht. Daher ist die Aussage falsch.",
        "ar": "انتبه لكلمة 'فقط (nur)': بما أن سائق الطرود توقف بشكل مخالف في الصف الثاني، فكلاهما أخطأ. وبالتالي العبارة غير صحيحة.",
        "fr": "Attention au mot-clé restrictif « seul (nur) » : le livreur ayant stationné en double file, les deux ont fait des erreurs. L'affirmation est donc fausse."
      }
    },

    /* ---------------- TEIL 2 (Aufgaben 7 - 12) ---------------- */
    "7": {
      "quote": "Frau Dörner hat sich für sechs Monate als Au-pair-Großmutter bei einer Familie in Phnom Penh beworben. Sie soll sich um einen kleinen Jungen kümmern...",
      "whyCorrect": {
        "de": "Option b ist richtig. Frau Dörner wird für 6 Monate als Au-pair-Oma bei einer Familie in Phnom Penh wohnen und dort arbeiten (Betreuung eines vierjährigen Jungen).",
        "ar": "الخيار (b) صحيح. تقدمت السيدة دورنر للعمل كجدة أو-بير لمدة 6 أشهر لدى عائلة في بنوم بن لرعاية طفل صغير.",
        "fr": "L'option b est correcte. Mme Dörner a postulé pour six mois comme grand-mère au pair auprès d'une famille à Phnom Penh pour s'occuper d'un garçon de 4 ans."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch, weil sie keine Rundreise macht, sondern fest an einem Ort bei einer Familie bleibt. Option c ist falsch, weil sie weiß, dass sie in 6 Monaten nur wenige Wörter Khmer lernen wird.",
        "ar": "الخيار (a) خاطئ لأنها لا تقوم بجولة سياحية بل تقيم مع أسرة واحدة. والخيار (c) خاطئ لأنها تدرك أنها لن تتعلم سوى كلمات قليلة من اللغة المحلية.",
        "fr": "L'option a est fausse (elle ne fait pas un circuit touristique mais réside chez une famille). L'option c est fausse (elle sait qu'elle n'apprendra que peu de mots khmers)."
      }
    },
    "8": {
      "quote": "Sie hat sich über das Leben in Kambodscha gut informiert, über das ungewöhnlich feucht-heiße Klima...",
      "whyCorrect": {
        "de": "Option b ist richtig. Sie hat sich genau über das „ungewöhnlich feucht-heiße Klima“ informiert, was für Europäer eine echte Belastung/Herausforderung darstellt.",
        "ar": "الخيار (b) صحيح. لقد استعلمت جيدًا عن 'المناخ الحار والرطب غير المعتاد'، وهو مناخ صعب وغير مألوف للأوروبيين.",
        "fr": "L'option b est correcte. Elle s'est bien renseignée sur le « climat inhabituellement chaud et humide », qui est éprouvant pour les Européens."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch: Die Gastfamilie hat 6 Zimmer mit Klimaanlage und Hausmädchen, was für eine Durchschnittsfamilie „unerreichbar ist“. Option c ist falsch: Die Mutter möchte ausdrücklich, dass das Kind sein Deutsch behält.",
        "ar": "الخيار (a) خاطئ: العائلة تسكن شقة واسعة من 6 غرف مع مكيف وخادمة وهو ما لا تصل إليه العائلة المتوسطة. والخيار (c) خاطئ لأن الهدف هو الحفاظ على لغة الطفل الألمانية.",
        "fr": "L'option a est fausse : la famille vit dans un 6 pièces avec clim et femme de ménage, inaccessible au ménage moyen. L'option c est fausse car l'enfant a des racines allemandes."
      }
    },
    "9": {
      "quote": "Sie hat aber in den letzten Monaten englische und französische Sprachkurse besucht und hofft, dass sie gut vorbereitet ist für die große Reise.",
      "whyCorrect": {
        "de": "Option c ist richtig. Sie hat ihre Sprachkenntnisse durch Englisch- und Französischkurse gezielt verbessert.",
        "ar": "الخيار (c) صحيح. لقد طوّرت مهاراتها اللغوية بحضور دورات تدريبية في اللغتين الإنجليزية والفرنسية.",
        "fr": "L'option c est correcte. Elle a amélioré ses compétences linguistiques en suivant des cours d'anglais et de français ces derniers mois."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch: Es gab kein spezielles „Klimatraining“, sie hat sich lediglich belesen. Option b ist falsch: Sie hat keinen geschichtlichen Kurs über das alte Kambodscha belegt.",
        "ar": "الخيار (a) خاطئ: لم تقم بأي 'تدريب مناخي'، بل جمعت معلومات فقط. والخيار (b) خاطئ لأنها لم تحضر دورة في تاريخ كمبوديا القديم.",
        "fr": "L'option a est fausse (pas d'entraînement climatique). L'option b est fausse (elle n'a pas suivi de cours sur l'histoire ancienne du Cambodge)."
      }
    },
    "10": {
      "quote": "Sie fanden heraus, dass attraktive Jugendliche tatsächlich um 0,5 bis 0,75 Notenpunkte besser beurteilt werden als andere Schüler mit gleichen Leistungen.",
      "whyCorrect": {
        "de": "Option c ist richtig. Die Studie beweist, dass Lehrer bei gleicher Schülerleistung hübschere Schüler mit besseren Noten (0,5 bis 0,75 Notenpunkte besser) bewerten.",
        "ar": "الخيار (c) صحيح. أثبتت الدراسة أن المدرسين يتأثرون بالمظهر الخارجي ويمنحون الطلاب الجذابين علامات أفضل بفارق 0.5 إلى 0.75 درجة رغم تساوي الأداء.",
        "fr": "L'option c est correcte. L'étude montre que les enseignants sont influencés par le physique et notent les élèves séduisants plus favorablement à résultats égaux."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch, denn im Berufsleben haben attraktive Frauen Nachteile (nicht „überall“). Option b ist falsch: Die Leistung war gleich, nur die Optik verschieden.",
        "ar": "الخيار (a) خاطئ: في العمل تعاني النساء الجميلات من نتائج عكسية (أي ليس في كل مكان). والخيار (b) خاطئ: الأداء كان متطابقًا، لكن التقييم اختلف للمظهر.",
        "fr": "L'option a est fausse car dans le travail, les femmes séduisantes sont désavantagées (donc pas « partout »). L'option b confond beauté et compétence réelle."
      }
    },
    "11": {
      "quote": "Die Hälfte der Fotos zeigten schöne Männer und Frauen, die anderen gehörten zu durchschnittlichen Gesichtern.",
      "whyCorrect": {
        "de": "Option c ist richtig. „Die Hälfte“ entspricht genau 50 %, und die zweite Hälfte zeigte ganz normale Menschen mit alltäglichen Gesichtern.",
        "ar": "الخيار (c) صحيح. 'النصف' يعني تمامًا 50%، والنصف الآخر أظهر وجوهًا عادية ذات مظهر يومي مألوف.",
        "fr": "L'option c est correcte. La moitié (50 %) des dossiers comportaient des visages normaux et passe-partout."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch: Auf den 50 % schönen Fotos waren Männer UND Frauen zu sehen, nicht nur Männer. Option b ist falsch: 10 % war die Rückmeldequote bei schönen Frauen, nicht der Anteil der Fotos.",
        "ar": "الخيار (a) خاطئ: صور الـ 50% الأولى ضمت رجالاً ونساءً معًا وليس رجالاً فقط. والخيار (b) خاطئ: نسبة 10% كانت نسبة قبول النساء الجميلات وليس نسبة الصور.",
        "fr": "L'option a est fausse : la première moitié comprenait des hommes ET des femmes. L'option b confond le taux de réponse positive (10 %) avec la proportion de photos."
      }
    },
    "12": {
      "quote": "dass in den Personalbüros der Firmen fast ausschließlich Frauen sitzen – und die glauben offenbar, dass schöne Frauen das Betriebsklima stören.",
      "whyCorrect": {
        "de": "Option a ist richtig. Die Personalverantwortlichen wollen ein harmonisches Betriebsklima und befürchten, dass auffallend schöne Frauen Unruhe oder Streit auslösen könnten.",
        "ar": "الخيار (a) صحيح. تخشى مسؤولات التوظيف أن تتسبب النساء الجميلات في إثارة الخلافات وتكدير جو العمل والمناخ الداخلي للشركة.",
        "fr": "L'option a est correcte. Les recruteuses craignent que les femmes très séduisantes ne perturbent l'ambiance de travail et ne provoquent des tensions."
      },
      "whyIncorrect": {
        "de": "Option b ist falsch: Schöne Männer hatten Vorteile, schöne Frauen Nachteile. Option c ist falsch: Bei Männern hatten attraktive Kandidaten doppelt so hohe Chancen wie durchschnittliche.",
        "ar": "الخيار (b) خاطئ: المظهر الجذاب أفاد الرجال وأضر بالنساء. والخيار (c) خاطئ: فالمتقدمون الرجال ذوو المظهر الجذاب حظوا بضعف الفرص مقارنة بالعاديين.",
        "fr": "L'option b est fausse car l'effet s'inverse selon le sexe. L'option c est fausse car les hommes séduisants ont deux fois plus de réponses que les hommes moyens."
      }
    },

    /* ---------------- TEIL 3 (Aufgaben 13 - 19) ---------------- */
    "13": {
      "quote": "Anzeige D: 'Paketfahrer gesucht ... Sie: haben einen Führerschein ... Wir bieten: guten Verdienst, Arbeitszeit nach Vereinbarung'",
      "whyCorrect": {
        "de": "Anzeige D passt perfekt zu Erdal M.: Er fährt bereits einen Lieferwagen, besitzt einen Führerschein, sucht mehr Einkommen („guter Verdienst“) und anpassbare Arbeitszeiten.",
        "ar": "الإعلان (D) يطابق وضع إردال: يقود بالفعل شاحنة، يمتلك رخصة قيادة، يبحث عن دخل أعلى ('أجر جيد') وساعات عمل بالاتفاق.",
        "fr": "L'annonce D convient parfaitement à Erdal : il conduit déjà une camionnette, a le permis et cherche un meilleur salaire avec des horaires flexibles."
      },
      "whyIncorrect": {
        "de": "Andere Anzeigen passen nicht: Anzeige B ist nur nachts im Postzentrum, Anzeige H ist Restaurantküche.",
        "ar": "الإعلانات الأخرى لا تناسبه: الإعلان (B) للعمل الليلي في فرز البريد، والإعلان (H) للعمل في مطبخ.",
        "fr": "Les autres annonces ne conviennent pas : B concerne le tri postal de nuit, H concerne la restauration."
      }
    },
    "14": {
      "quote": "Anzeige J: 'Clara-Zetkin-Institut sucht Mitarbeiter für zeitlich begrenzte Aufgaben (drei Monate): ... Mitarbeit in der Presseabteilung'",
      "whyCorrect": {
        "de": "Anzeige J passt genau zu Susan S.: Sie studiert Journalistik und sucht ein studienrelevantes Praktikum. Die Mitarbeit in einer Presseabteilung für 3 Monate ist ideal.",
        "ar": "الإعلان (J) يناسب سوزان: تدرس الصحافة وتبحث عن تدريب مرتبط بدراستها، والعمل في القسم الصحفي لمعهد بحثي لمدة 3 أشهر مثالي لها.",
        "fr": "L'annonce J correspond aux besoins de Susan : elle étudie le journalisme et cherche un stage adapté dans un service de presse pour 3 mois."
      },
      "whyIncorrect": {
        "de": "Anzeige C ist nur ein Wochenend-Workshop für russische Literatur, keine fachspezifische Praktikantenstelle.",
        "ar": "الإعلان (C) مجرد ورشة عمل لعطلة نهاية الأسبوع للأدب الروسي، وليس تدريبًا صحفيًا.",
        "fr": "L'annonce C n'est qu'un atelier de week-end sur la littérature russe, pas un stage pratique."
      }
    },
    "15": {
      "quote": "Anzeige A: 'Wir suchen Hilfe bei der Kinderbetreuung. Wer kann unsere beiden Jungs ... mittags von der Schule abholen ... mit ihnen essen und spielen? Mo – Fr, jeweils 4 Std.'",
      "whyCorrect": {
        "de": "Anzeige A passt optimal für Marian B.: Da ihr Deutschkurs vormittags stattfindet, hat sie ab mittags Zeit für die Kinderbetreuung, wo sie aktiv Deutsch sprechen kann.",
        "ar": "الإعلان (A) هو الأنسب لماريان: دورتها الصباحية تنتهي ظهرًا، والوظيفة تبدأ ظهرًا وتمنحها فرصة ممارسة المحادثة بالألمانية مع الأطفال.",
        "fr": "L'annonce A est idéale pour Marian : son cours d'allemand ayant lieu le matin, elle est libre l'après-midi pour s'occuper d'enfants et parler allemand."
      },
      "whyIncorrect": {
        "de": "Andere Anzeigen (wie B oder D) kollidieren mit Deutschkenntnissen oder Zeiten, und bieten keine familiäre Sprechpraxis.",
        "ar": "الإعلانات الأخرى إما تتطلب لغة ممتازة أو لا تتيح فرصة التحدث والممارسة اللغوية الحية.",
        "fr": "Les autres annonces demandent un niveau d'allemand déjà très élevé ou n'offrent pas d'occasion d'échanger au quotidien."
      }
    },
    "16": {
      "quote": "Anzeige G: 'Übersetzungsbüro sucht freie Mitarbeiter ... Sie arbeiten zu Hause am PC'",
      "whyCorrect": {
        "de": "Anzeige G passt zu Ewa R.: Sie spricht fließend mehrere Sprachen (Bulgarisch, Deutsch, Russisch, Italienisch) und kann als junge Mutter mit Baby auf dem Land bequem von zu Hause aus übersetzen.",
        "ar": "الإعلان (G) يطابق حالة إيفا: تتحدث عدة لغات بطلاقة، وبما أن لديها رضيعًا وتعيش في الريف فإن العمل بالترجمة من المنزل عبر الحاسوب هو الخيار الوحيد المناسب.",
        "fr": "L'annonce G correspond parfaitement à Ewa : maîtrisant plusieurs langues, elle peut traduire à domicile depuis la campagne tout en s'occupant de son bébé."
      },
      "whyIncorrect": {
        "de": "Alle anderen Tätigkeiten erfordern Präsenz vor Ort in der Stadt, was mit Säugling auf dem Land nicht machbar ist.",
        "ar": "بقية الإعلانات تتطلب الحضور الشخصي في المدينة وهو ما يتعذر مع وجود طفل رضيع وبعد المسافة.",
        "fr": "Tous les autres emplois requièrent une présence physique en ville, ce qui est incompatible avec sa situation familiale."
      }
    },
    "17": {
      "quote": "Keine Anzeige im Angebot bietet Hoteljobs in Österreich oder der Schweiz an.",
      "whyCorrect": {
        "de": "X ist richtig. Luella sucht speziell eine Hotelanstellung in Österreich oder der Schweiz. Unter den Anzeigen A bis J gibt es dafür kein einziges passendes Angebot.",
        "ar": "الرمز X هو الصحيح. تبحث لويلا تحديدًا عن وظيفة فندقية في النمسا أو سويسرا، ولا يوجد في الإعلانات من A إلى J أي إعلان لفنادق هناك.",
        "fr": "X est la bonne réponse. Luella cherche un poste d'hôtellerie en Autriche ou en Suisse, or aucune annonce ne propose ce type de contrat dans ces pays."
      },
      "whyIncorrect": {
        "de": "Wählen Sie keinen Buchstaben auf gut Glück: Für genau diesen Fall ist die Option 'X' vorgesehen.",
        "ar": "لا تختر حرفًا عشوائيًا: خيار 'X' مخصص تحديدًا عندما لا توجد أي مطابقة ملائمة للشخص.",
        "fr": "Ne choisissez pas de lettre au hasard : l'option 'X' est spécifiquement dédiée aux situations sans annonce correspondante."
      }
    },
    "18": {
      "quote": "Anzeige I: 'Software-Start-up sucht Programmierer / IT-Assistenten. Arbeitszeiten flexibel einteilbar'",
      "whyCorrect": {
        "de": "Anzeige I passt zu Jaime L.: Er hat Informatik studiert und kann dank vollkommen flexibler Arbeitszeiten tagsüber programmieren und abends mit seiner Rockband auftreten.",
        "ar": "الإعلان (I) يلائم خايمي: درس تكنولوجيا المعلومات، وساعات العمل المرنة تتيح له العمل في تخصصه نهارًا والعزف مع فرقته الموسيقية مساءً.",
        "fr": "L'annonce I convient à Jaime : diplômé en informatique, les horaires à la carte lui permettent de concilier travail et concerts le soir."
      },
      "whyIncorrect": {
        "de": "Andere Anzeigen entsprechen nicht seinem Hochschulabschluss in Informatik oder erfordern feste Abend- bzw. Nachtpräsenz.",
        "ar": "الوظائف الأخرى لا علاقة لها بتخصصه في الحاسوب أو تتطلب أوقات عمل تتعارض مع التزاماته الموسيقية الليلية.",
        "fr": "Les autres postes n'ont aucun lien avec son diplôme ou imposent des horaires incompatibles avec ses soirées."
      }
    },
    "19": {
      "quote": "Anzeige B: 'Hilfskräfte gesucht ... Arbeitszeit: samstags, sonntags, nachts. Gute Bezahlung!'",
      "whyCorrect": {
        "de": "Anzeige B passt zu Georg N.: Da er unter der Woche seine Examensarbeit schreibt und nur am Wochenende arbeiten kann, ist der Wochenend-/Nacht-Postdienst genau das Richtige.",
        "ar": "الإعلان (B) يطابق وضع غيورغ: يكتب رسالة تخرجه نهار الأسبوع ولا يستطيع العمل إلا في عطلة نهاية الأسبوع (السبت والأحد ليلًا).",
        "fr": "L'annonce B correspond à Georg : rédigeant son mémoire en semaine, il ne peut travailler que le week-end (samedi, dimanche, nuit)."
      },
      "whyIncorrect": {
        "de": "Anzeige A ist unter der Woche (Mo–Fr), Anzeige D verlangt tägliche Verfügbarkeit; nur B beschränkt sich exklusiv aufs Wochenende.",
        "ar": "الإعلان (A) من الإثنين للجمعة، والإعلان (D) يتطلب تفرغًا شبه يومي؛ الإعلان (B) هو الوحيد المخصص لعطلة نهاية الأسبوع.",
        "fr": "L'annonce A exige une disponibilité du lundi au vendredi, et D requiert une présence régulière. Seule B cible le week-end."
      }
    },

    /* ---------------- TEIL 4 (Aufgaben 20 - 26) ---------------- */
    "20": {
      "quote": "Aber so geht es nicht: Wir brauchen in den Betrieben junge und frischen Enthusiasmus, wenn wir neue Technologien entwickeln wollen.",
      "whyCorrect": {
        "de": "Nein. Wolfram ist gegen die Erhöhung auf 70 Jahre, weil er der Meinung ist, dass alte Mitarbeiter den jungen Leuten die Arbeitsplätze wegnehmen.",
        "ar": "لا (Nein). فولفرام ضد رفع سن التقاعد إلى 70 عامًا لأنه يرى ضرورة إفساح المجال للشباب وعدم بقاء كبار السن في الشركات.",
        "fr": "Non. Wolfram est opposé à la retraite à 70 ans car il estime qu'il faut libérer les postes pour la jeunesse et l'enthousiasme."
      },
      "whyIncorrect": {
        "de": "Er befürwortet die Anhebung keineswegs. Sein Standpunkt ist klar ablehnend („Aber so geht es nicht“).",
        "ar": "إجابته ليست نعم؛ موقفه رافض بوضوح بعبارة 'لا يمكن أن تسير الأمور هكذا'.",
        "fr": "Il ne soutient pas du tout la mesure : son avis est formellement négatif (« Mais ce n'est pas possible ainsi »)."
      }
    },
    "21": {
      "quote": "Warum sollen sie dann nicht länger arbeiten? Wer länger gearbeitet hat, hat auch größere Erfahrung, die sollten wir uns zunutze machen.",
      "whyCorrect": {
        "de": "Ja. Martin ist für die Anhebung des Rentenalters, da ältere Menschen fit sind und ihre wertvolle Berufserfahrung weitergeben sollten.",
        "ar": "نعم (Ja). مارتن يؤيد زيادة سن التقاعد لأن الناس يعيشون بصحة أطول ويمتلكون خبرات مهنية هامة يجب الاستفادة منها.",
        "fr": "Oui. Martin est favorable à l'allongement de la carrière : les gens restent en forme plus longtemps et leur expérience est précieuse."
      },
      "whyIncorrect": {
        "de": "Er kritisiert sogar, dass Rentner früh auf Kreuzfahrtschiffen untätig sind, daher stimmt er der Fragestellung eindeutig zu.",
        "ar": "إجابته ليست لا؛ هو ينتقد تقاعد الكفاءات في أوج عطائها ويؤيد تمديد سن العمل بقوة.",
        "fr": "Il désapprouve les départs précoces en croisière et plaide pour le maintien en activité."
      }
    },
    "22": {
      "quote": "das ist wunderbar, aber es ist eine Illusion. In Wirklichkeit fangen die meisten Menschen schon mit sechzig an, ihre Leistungsfähigkeit zu verlieren...",
      "whyCorrect": {
        "de": "Nein. Michaela hält Arbeiten bis 70 oder 80 für eine Illusion, da die geistige und körperliche Leistungsfähigkeit ab 60 spürbar nachlässt.",
        "ar": "لا (Nein). ميكائيلا ترى أن العمل حتى سن السبعين مجرد وهم وغير واقعي، لأن القدرة الإنتاجية تبدأ بالتراجع بعد سن الستين.",
        "fr": "Non. Michaela considère que travailler jusqu'à 70 ans est une illusion car la plupart des gens perdent leurs capacités dès 60 ans."
      },
      "whyIncorrect": {
        "de": "Obwohl sie positiv formuliert („Ist es nicht das, was wir uns wünschen?“), entlarvt sie dies sofort als weltfremde Illusion.",
        "ar": "رغم أنها بدأت بسؤال بلاغي حالم، إلا أنها أكدت مباشرة أن ذلك مجرد وهم ولا يمكن تطبيقه عمليًا.",
        "fr": "Bien qu'elle commence par une question rhétorique, elle qualifie immédiatement l'idée d'« illusion » irréaliste."
      }
    },
    "23": {
      "quote": "Für manche Menschen ist jetzt schon mit 67 zu lange, denn wer beim Bau oder in der Fabrik schuftet, der ist mit vierzig Arbeitsjahren verbraucht...",
      "whyCorrect": {
        "de": "Nein. Corinna lehnt 70 Jahre strikt ab; schon 67 Jahre sind für Menschen in körperlich schweren Berufen (Bau, Fabrik) viel zu lang und ungesund.",
        "ar": "لا (Nein). كورينا ترفض تمامًا فكرة الـ 70 عامًا؛ فسن 67 حاليًا مرهق للغاية للعمال في المصانع والبناء الذين يستنزفون صحيًا.",
        "fr": "Non. Corinna s'oppose au recul à 70 ans : 67 ans est déjà bien trop exigeant pour les métiers physiques et pénibles."
      },
      "whyIncorrect": {
        "de": "Sie betont die gesundheitliche Abnutzung der Arbeitnehmer und spricht sich gegen die Pläne der Politiker aus.",
        "ar": "موقفها واضح ضد تمديد سن التقاعد حمايةً لصحة الطبقة العاملة والمهن الشاقة.",
        "fr": "Elle met l'accent sur l'épuisement et les maladies des ouvriers, rejetant toute augmentation."
      }
    },
    "24": {
      "quote": "Ich glaube, man könnte das Rentenalter ruhig anheben, für alle, die Lust haben zu arbeiten.",
      "whyCorrect": {
        "de": "Ja. Sybille befürwortet eine Anhebung des Rentenalters für Menschen, die gerne länger berufstätig bleiben möchten.",
        "ar": "نعم (Ja). زيبيلي ترى أنه يمكن رفع سن التقاعد بكل أريحية للأشخاص الراغبين في الاستمرار بالعمل.",
        "fr": "Oui. Sybille estime que l'on peut tout à fait repousser l'âge du départ pour ceux qui souhaitent continuer à travailler."
      },
      "whyIncorrect": {
        "de": "Sie befürwortet die Anhebung des gesetzlichen Rentenalters ausdrücklich („könnte man ruhig anheben“).",
        "ar": "رأيها إيجابي ومؤيد لرفع السن مع إعطاء مرونة لمن لا يرغب.",
        "fr": "Elle formule explicitement son soutien au recul de l'âge de départ (« on pourrait tout à fait le relever »)."
      }
    },
    "25": {
      "quote": "Allerdings scheint es mir übertrieben, das Rentenalter gleich auf siebzig Jahre zu erhöhen. ... Wenn man mehr fordert, könnte man die Arbeitnehmer in Schwierigkeiten bringen.",
      "whyCorrect": {
        "de": "Nein. Gloria findet den Sprung auf 70 Jahre übertrieben und riskant für die Arbeitnehmer, auch wenn sie eine kleine Erhöhung um ein einziges Jahr akzeptieren würde.",
        "ar": "لا (Nein). غلوريا تعتبر القفز بسن التقاعد مباشرة إلى 70 عامًا أمرًا مبالغًا فيه ومضرًا بالموظفين، وترفضه بالصيغة المطروحة.",
        "fr": "Non. Gloria trouve excessif et injuste de fixer l'âge à 70 ans d'emblée, même si un relèvement modeste d'un an lui conviendrait."
      },
      "whyIncorrect": {
        "de": "Sie ist gegen die Erhöhung auf 70 Jahre („scheint es mir übertrieben“), daher lautet die Antwort 'Nein'.",
        "ar": "انتبه: هي توافق على زيادة طفيفة لسنة واحدة فقط، لكنها ترفض بشكل قاطع سن السبعين؛ لذا الإجابة الصحيحة هي 'لا'.",
        "fr": "Attention : elle accepte à la rigueur 68 ans, mais refuse formellement le seuil de 70 ans qu'elle juge exagéré."
      }
    },
    "26": {
      "quote": "Die dramatische Erhöhung des Rentenalters ist sicherlich unausweichlich ... Siebzig Jahre finde ich ganz vernünftig.",
      "whyCorrect": {
        "de": "Ja. Gilbert hält 70 Jahre für eine „ganz vernünftige“ und unausweichliche Grenze, um die zukünftige Rentenfinanzierung zu sichern.",
        "ar": "نعم (Ja). غيلبرت يرى أن رفع سن التقاعد إلى 70 عامًا أمر معقول وضروري لتفادي انهيار صناديق التقاعد للأجيال القادمة.",
        "fr": "Oui. Gilbert juge que 70 ans est une limite « tout à fait raisonnable » et inévitable pour garantir le financement des retraites."
      },
      "whyIncorrect": {
        "de": "Er nennt das Alter von 70 Jahren ausdrücklich „ganz vernünftig“, daher stimmt er der Leitfrage zu.",
        "ar": "إجابته مؤيدة بلا تردد، فقد استخدم صراحة عبارة 'أجد سن السبعين أمرًا معقولاً ومنطقيًا للغاية'.",
        "fr": "Il approuve clairement la question directrice en qualifiant les 70 ans de choix sensé."
      }
    },

    /* ---------------- TEIL 5 (Aufgaben 27 - 30) ---------------- */
    "27": {
      "quote": "In der Zeit von 13.00 bis 15.00 und von 22.00 bis 8.00 Uhr soll absolute Ruhe herrschen.",
      "whyCorrect": {
        "de": "Option b ist richtig. Die Hausordnung schreibt zwei Ruhezeiten vor: mittags (13:00 bis 15:00 Uhr) und nachts (22:00 bis 8:00 Uhr).",
        "ar": "الخيار (b) صحيح. تنص قواعد المبنى على فترتين للهدوء التام: فترة الظهيرة (13:00 - 15:00) وساعات الليل (22:00 - 08:00).",
        "fr": "L'option b est correcte. Le règlement impose le silence absolu durant deux plages : à midi (13h-15h) et la nuit (22h-8h)."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch, weil auch mittags Ruhe eingehalten werden muss (nicht „nur“ nachts). Option c ist falsch, weil zu normalen Tageszeiten Kinderlärm oder Musik nicht komplett verboten sind.",
        "ar": "الخيار (a) خاطئ لأن الهدوء مفروض ظهرًا أيضًا وليس نهارًا فقط. والخيار (c) خاطئ لأنه لا يُشترط الصمت المطلق طوال اليوم.",
        "fr": "L'option a oublie la sieste de mi-journée (13h-15h). L'option c est une généralisation excessive."
      }
    },
    "28": {
      "quote": "Der Wohnungsschlüssel darf nicht kopiert werden ... Wenn Sie einen zweiten Wohnungsschlüssel brauchen, wenden Sie sich bitte an den Hausmeister.",
      "whyCorrect": {
        "de": "Option b ist richtig. Mieter dürfen Schlüssel keinesfalls selbst nachmachen lassen; ein zusätzlicher Schlüssel kann nur beim Hausmeister angefragt werden.",
        "ar": "الخيار (b) صحيح. يُحظر على المستأجرين نسخ المفاتيح بأنفسهم؛ ويجب طلب أي مفتاح إضافي حصريًا من المشرف على العقار (Hausmeister).",
        "fr": "L'option b est correcte. Il est interdit de faire des doubles soi-même ; tout double supplémentaire s'obtient auprès du concierge."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch (selbst kopieren ist ausdrücklich verboten). Option c ist falsch: Der Schlüssel sperrt laut Text auch Garage, Fahrradkeller, Waschraum und Hoftor.",
        "ar": "الخيار (a) خاطئ تمامًا لأن النسخ الذاتي ممنوع منعًا باتًا. والخيار (c) خاطئ لأن المفتاح يفتح أيضًا المرآب وقبو الدراجات وبوابة المدخل.",
        "fr": "L'option a est formellement interdite par le texte. L'option c est fausse car la clé ouvre aussi le garage, le portail et le local à vélos."
      }
    },
    "29": {
      "quote": "Das Abstellen von Kinderwagen und Fahrrädern in den Hausfluren ist verboten. In den Kellerräumen ist dafür ausreichend Platz vorhanden. Außerdem gibt es Stellplätze hinter den Garagen.",
      "whyCorrect": {
        "de": "Option b ist richtig. Im Flur ist das Abstellen verboten; zulässig sind ausschließlich die Kellerräume und die Stellplätze hinter den Garagen.",
        "ar": "الخيار (b) صحيح. ركن الدراجات في ممرات المبنى ممنوع نهائيًا؛ والأماكن المسموحة هي أقبية المبنى أو خلف المرآب.",
        "fr": "L'option b est correcte. Les vélos sont interdits dans les couloirs et doivent être garés à la cave ou derrière les garages."
      },
      "whyIncorrect": {
        "de": "Option a ist falsch (im Hausflur generell untersagt). Option c ist frei erfunden (Balkone dürfen nicht als Fahrradlager genutzt werden).",
        "ar": "الخيار (a) خاطئ فالممرات ممنوعة تمامًا. والخيار (c) لا أساس له في النص ولم يُذكر وضعها على الشرفات.",
        "fr": "L'option a est expressément interdite. L'option c n'est pas mentionnée pour les vélos."
      }
    },
    "30": {
      "quote": "Wenn Sie Ihr Haustier mitbringen wollen, müssen Sie beim Verwalter einen schriftlichen Antrag stellen.",
      "whyCorrect": {
        "de": "Option a ist richtig. Wer ein Haustier halten möchte, muss zwingend vorab einen schriftlichen Antrag bei der Hausverwaltung einreichen.",
        "ar": "الخيار (a) صحيح. تنص اللائحة على ضرورة تقديم طلب خطي مسبق لإدارة العقار لكل من يرغب في اقتناء حيوان أليف.",
        "fr": "L'option a est correcte. Toute personne souhaitant un animal de compagnie doit obligatoirement en faire la demande écrite auprès du gestionnaire."
      },
      "whyIncorrect": {
        "de": "Option b ist falsch: Hunde (auch kleine) sind grundsätzlich nicht ohne Genehmigung erlaubt. Option c ist falsch: Es wird keine Monatsgebühr an den Hausmeister verlangt.",
        "ar": "الخيار (b) خاطئ فلا استثناء للكلاب الصغيرة دون موافقة. والخيار (c) خاطئ فلا توجد رسوم شهرية للمشرف.",
        "fr": "L'option b est fausse (pas d'exception automatique pour petits chiens). L'option c invente une taxe inexistante."
      }
    }
  ,
    /* ---------------- MODELLSATZ 1: HÖREN (Aufgaben h1 - h30) ---------------- */
    "h1": {
          "quote": "Praxis Dr. Weber: Herr Dr. Weber ist heute leider erkrankt. Wir müssen Ihren morgigen Behandlungstermin leider verschieben.",
          "whyCorrect": {
                "de": "Richtig. Die Mitarbeiterin ruft an, um den Termin abzusagen und auf ein anderes Datum zu verlegen.",
                "ar": "صحيح. تتصل موظفة العيادة لإلغاء الموعد وتأجيله إلى موعد آخر بسبب مرض الطبيب.",
                "fr": "Vrai. L'assistante appelle pour annuler le rendez-vous de demain et le reporter car le médecin est malade."
          },
          "whyIncorrect": {
                "de": "Falsch trifft nicht zu: Der Termin findet definitiv nicht wie geplant morgen statt, sondern wird verschoben.",
                "ar": "الخيار 'خطأ' غير صحيح لأن الموعد لن يتم في وقته المحدد بل تم تأجيله صراحة.",
                "fr": "L'affirmation n'est pas fausse car le rendez-vous est expressément reporté."
          }
    },
    "h2": {
          "quote": "Praxis Dr. Weber: Bitte rufen Sie uns so bald wie möglich zurück, damit wir einen neuen Termin vereinbaren können.",
          "whyCorrect": {
                "de": "Option c ist richtig. Frau Stein wird ausdrücklich gebeten, in der Praxis zurückzurufen.",
                "ar": "الخيار (c) هو الصحيح. يُطلب من السيدة شتاين صراحة معاودة الاتصال بالعيادة لتحديد موعد جديد.",
                "fr": "L'option c est correcte. Mme Stein est expressément priée de rappeler le cabinet pour convenir d'un nouveau rendez-vous."
          },
          "whyIncorrect": {
                "de": "Option a und b sind falsch: Es geht im Anruf nicht um die Chipkarte oder eine Gebühr von zehn Euro, sondern um die telefonische Terminabsprache.",
                "ar": "الخياران (a) و (b) غير صحيحين: لم تطلب الموظفة إحضار البطاقة الذكية أو دفع 10 يورو في هذا الاتصال.",
                "fr": "Les options a et b sont incorrectes : l'appel ne concerne ni la carte d'assuré ni un paiement de dix euros."
          }
    },
    "h3": {
          "quote": "Herr Thomas: Guten Tag Frau Brahms, hier ist Thomas von der Personalabteilung. Ich habe Ihre Bewerbung vorliegen, aber es fehlen noch wichtige Unterlagen.",
          "whyCorrect": {
                "de": "Falsch. Herr Thomas ruft wegen Bewerbungsunterlagen an, nicht wegen Versicherungstarifen.",
                "ar": "خطأ. يتصل السيد توماس بخصوص ملف طلب التوظيف واستكمال الوثائق الناقصة، وليس لإبلاغها بأسعار تأمين.",
                "fr": "Faux. M. Thomas appelle au sujet de son dossier de candidature, pas pour des tarifs d'assurance."
          },
          "whyIncorrect": {
                "de": "Richtig ist falsch: Der Anrufer arbeitet in der Personalabteilung und spricht über eine Bewerbung.",
                "ar": "اختيار 'صحيح' غير دقيق لأن المتصل من قسم الموارد البشرية ويتناول موضوع التوظيف.",
                "fr": "Choisir 'Vrai' est faux car l'appel émane des ressources humaines pour un recrutement."
          }
    },
    "h4": {
          "quote": "Herr Thomas: Bitte senden Sie uns Ihre Ausbildungs- und Arbeitszeugnisse noch bis Ende der Woche zu.",
          "whyCorrect": {
                "de": "Option b ist richtig. Herr Thomas benötigt die Zeugnisse von Frau Brahms für ihre Bewerbungsunterlagen.",
                "ar": "الخيار (b) هو الصحيح. يحتاج السيد توماس إلى شهادات التدريب والخبرة المهنية للسيدة برامس قبل نهاية الأسبوع.",
                "fr": "L'option b est correcte. M. Thomas a besoin des certificats de travail et diplômes de Mme Brahms d'ici la fin de semaine."
          },
          "whyIncorrect": {
                "de": "Option a ist falsch (kein Vertragsabschluss erwähnt) und c ist falsch (sie soll die Unterlagen senden, er ruft nicht nochmals an).",
                "ar": "الخيار (a) خاطئ (لم يُعرض عقد جديد)، والخيار (c) خاطئ (طلب منها إرسال الوثائق ولم يقل إنه سيعاود الاتصال).",
                "fr": "L'option a est fausse (aucun contrat n'est proposé) et c est erronée (il attend ses documents, sans prévoir de rappeler)."
          }
    },
    "h5": {
          "quote": "Radiodurchsage: Wir unterbrechen das Programm für eine wichtige Verkehrsmeldung für den Großraum München und die A8.",
          "whyCorrect": {
                "de": "Falsch. Die Durchsage bringt Verkehrsmeldungen und Stauberichte, keine Veranstaltungstipps.",
                "ar": "خطأ. الإعلان الإذاعي يقدم نشرة مرورية عاجلة عن حالة الطرق والازدحام، وليس نصائح لحضور فعاليات.",
                "fr": "Faux. Le message diffuse des informations routières d'urgence et non des conseils d'événements culturels."
          },
          "whyIncorrect": {
                "de": "Richtig ist nicht zutreffend, da es sich um eine Verkehrswarnung für Autofahrer handelt.",
                "ar": "اختيار 'صحيح' غير وارد فالإعلان موجه للمرور على الطرق السريعة.",
                "fr": "Choisir 'Vrai' est incorrect car l'alerte concerne la circulation autoroutière."
          }
    },
    "h6": {
          "quote": "Radiodurchsage: Auf der A8 Salzburg Richtung München gibt es 5 km Stau nach einem Zusammenstoß zweier Fahrzeuge.",
          "whyCorrect": {
                "de": "Option c ist richtig. Ein Unfall (Zusammenstoß zweier Fahrzeuge) ist die Ursache für den Stau.",
                "ar": "الخيار (c) هو الصحيح. وقع الازدحام على الطريق السريع بسبب حادث اصطدام بين مركبتين.",
                "fr": "L'option c est correcte. Un accident (collision de deux véhicules) provoque 5 km de bouchon."
          },
          "whyIncorrect": {
                "de": "Option a (Baustelle) und b (Berufsverkehr) sind falsch: Die Radiostimme nennt explizit den Unfall als Staugrund.",
                "ar": "الخياران (a) و (b) خاطئان: ذكر المذيع صراحة أن سبب التوقف هو اصطدام سيارتين وليس أعمال صيانة أو ساعة ذروة.",
                "fr": "Les options a et b sont inexactes : la radio mentionne explicitement la collision automobile comme cause."
          }
    },
    "h7": {
          "quote": "Bahnhofsdurchsage: Achtung an Gleis 4: Wichtige Information für Fahrgäste des InterCity nach Genf.",
          "whyCorrect": {
                "de": "Falsch. Die Durchsage richtet sich an alle Reisenden am Bahnsteig, nicht an eine bestimmte Reisegruppe.",
                "ar": "خطأ. الإعلان في محطة القطار موجه لعموم المسافرين على الرصيف رقم 4 وليس لمجموعة سياحية خاصة.",
                "fr": "Faux. L'annonce en gare s'adresse à l'ensemble des passagers du quai 4 et non à un groupe organisé."
          },
          "whyIncorrect": {
                "de": "Richtig ist falsch, da eine allgemeine Lautsprecherdurchsage für Passagiere des InterCity gesendet wird.",
                "ar": "اختيار 'صحيح' غير دقيق لأن النداء عام عبر مكبرات الصوت للمسافرين المتجهين إلى جنيف.",
                "fr": "Choisir 'Vrai' ne correspond pas : il s'agit d'une annonce ferroviaire publique."
          }
    },
    "h8": {
          "quote": "Bahnhofsdurchsage: Der InterCity nach Genf, planmäßige Abfahrt 14:15 Uhr, fällt heute wegen einer technischen Störung aus.",
          "whyCorrect": {
                "de": "Option b ist richtig. Der Zug nach Genf fällt aus.",
                "ar": "الخيار (b) هو الصحيح. أعلن المتحدث إلغاء رحلة القطار المتجه إلى جنيف بسبب عطل تقني.",
                "fr": "L'option b est correcte. Le train InterCity à destination de Genève est supprimé pour problème technique."
          },
          "whyIncorrect": {
                "de": "Option a (Bern) und c (Lausanne) sind falsch: Ausdrücklich wird der Zug nach Genf als ausfallend gemeldet.",
                "ar": "الخياران (a) و (c) غير صحيحين: الإلغاء المعلن يتعلق تحديداً بقطار جنيف.",
                "fr": "Les options a et c sont fausses : seule la liaison vers Genève est expressément annulée."
          }
    },
    "h9": {
          "quote": "Wetterbericht: Im Osten bleibt es den ganzen Tag über stark bewölkt mit kräftigen Schauern und örtlichen Unwettern.",
          "whyCorrect": {
                "de": "Falsch. Das Wetter im Osten bessert sich keineswegs, sondern bleibt regnerisch und stürmisch.",
                "ar": "خطأ. لن يتحسن الطقس في شرق ألمانيا، بل سيبقى غائماً بشدة وممطراً ومصحوباً بعواصف محلية.",
                "fr": "Faux. La météo dans l'Est ne s'améliore pas, restant très nuageuse et orageuse toute la journée."
          },
          "whyIncorrect": {
                "de": "Richtig ist nicht zutreffend, da der Wetterbericht anhaltende Unwetter und Schauer im Osten voraussagt.",
                "ar": "اختيار 'صحيح' غير وارد، فالنشرة الجوية تؤكد استمرار الأمطار والعواصف في الشرق.",
                "fr": "Choisir 'Vrai' est faux car la prévision annonce des intempéries persistantes dans l'Est."
          }
    },
    "h10": {
          "quote": "Wetterbericht: Besonders entlang der Elbe muss am Nachmittag mit heftigen Gewittern gerechnet werden.",
          "whyCorrect": {
                "de": "Option a ist richtig. An der Elbe werden Gewitter vorhergesagt.",
                "ar": "الخيار (a) هو الصحيح. تشير التوقعات الجوية إلى احتمال هبوب عواصف رعدية شديدة على طول نهر إلبه.",
                "fr": "L'option a est correcte. Des orages violents sont prévus dans l'après-midi le long de l'Elbe."
          },
          "whyIncorrect": {
                "de": "Option b und c sind falsch: Von Temperaturen unter 10 Grad oder Dauerregen im Westen ist nicht die Rede.",
                "ar": "الخياران (b) و (c) غير صحيحين: لم تذكر النشرة درجات حرارة أقل من 10 أو أمطاراً غزيرة غرباً.",
                "fr": "Les options b et c sont inexactes : le bulletin ne prévoit ni températures sous 10° ni déluge à l'Ouest."
          }
    },
    "h11": {
          "quote": "Museumsführer: Herzlich willkommen im Münchner Stadtmuseum! Wie Sie sehen, ist es heute erfreulich ruhig und fast leer in den Sälen.",
          "whyCorrect": {
                "de": "Option c ist richtig. Es sind sehr wenige Besucher da, das Museum ist ziemlich leer.",
                "ar": "الخيار (c) هو الصحيح. يوضح المرشد أن القاعات هادئة وشبه فارغة من الزوار اليوم.",
                "fr": "L'option c est correcte. Les salles sont agréablement calmes et presque vides de visiteurs aujourd'hui."
          },
          "whyIncorrect": {
                "de": "Option a (sehr voll) und b (teilweise geschlossen) widersprechen den Worten des Führers („erfreulich ruhig und fast leer“).",
                "ar": "الخياران (a) و (b) خاطئان: المتحف ليس مزدحماً وليس مغلقاً جزئياً بل هادئ وخالٍ تقريباً.",
                "fr": "Les options a et b sont contredites par le guide qui se félicite du calme et du peu d'affluence."
          }
    },
    "h12": {
          "quote": "Museumsführer: In unserer heutigen Führung konzentrieren wir uns auf die große Hauptausstellung zur Münchner Stadtgeschichte.",
          "whyCorrect": {
                "de": "Option b ist richtig. Die Gruppe besichtigt gemeinsam die Hauptausstellung.",
                "ar": "الخيار (b) هو الصحيح. يركز المرشد في جولته اليوم على المعرض الرئيسي لتاريخ مدينة ميونخ.",
                "fr": "L'option b est correcte. La visite guidée se concentre exclusivement sur l'exposition principale."
          },
          "whyIncorrect": {
                "de": "Option a (alle Ausstellungen) und c (Sonderausstellungen) sind falsch: Es geht gezielt um die Hauptausstellung.",
                "ar": "الخياران (a) و (c) غير صحيحين: لن تشمل الجولة كافة المعارض أو المعارض المؤقتة الخاصة.",
                "fr": "Les options a et c sont erronées : le guide précise ne pas visiter toutes les galeries ni les temporaires."
          }
    },
    "h13": {
          "quote": "Museumsführer: Wir treffen uns nach dem Rundgang um Punkt 15:00 Uhr wieder vorne am Haupteingang.",
          "whyCorrect": {
                "de": "Option a ist richtig. Der Treffpunkt am Nachmittag ist am Eingang.",
                "ar": "الخيار (a) هو الصحيح. حدد المرشد نقطة التجمع بعد انتهاء الجولة عند المدخل الرئيسي للمتحف.",
                "fr": "L'option a est correcte. Le point de rassemblement de 15h00 est fixé devant l'entrée principale."
          },
          "whyIncorrect": {
                "de": "Option b (Garderobe) und c (Café) sind falsch: Treffpunkt ist ausdrücklich der Haupteingang.",
                "ar": "الخياران (b) و (c) خاطئان: نقطة الالتقاء ليست خزانة الملابس ولا المقهى بل المدخل الرئيسي.",
                "fr": "Les options b et c sont fausses : le lieu de rendez-vous n'est ni le vestiaire ni la cafétéria."
          }
    },
    "h14": {
          "quote": "Museumsführer: Die Ausstellung dokumentiert die Entwicklung Münchens vom Mittelalter bis ins 20. Jahrhundert.",
          "whyCorrect": {
                "de": "Option c ist richtig. Das Thema der Ausstellung ist die Geschichte Münchens.",
                "ar": "الخيار (c) هو الصحيح. يوثق المعرض تاريخ وتطور مدينة ميونخ عبر العصور.",
                "fr": "L'option c est correcte. L'exposition retrace l'histoire et l'évolution de la ville de Munich."
          },
          "whyIncorrect": {
                "de": "Option a (Oktoberfest) und b (bayerische Küche) sind nur eventuelle Randthemen, nicht der Hauptgegenstand.",
                "ar": "الخياران (a) و (b) ليسا الموضوع الرئيسي للمعرض، فالموضوع الشامل هو تاريخ المدينة.",
                "fr": "Les options a et b ne sont pas l'objet central de la présentation muséale historique."
          }
    },
    "h15": {
          "quote": "Museumsführer: Wenn Sie danach noch Zeit haben, setzen Sie sich bei dem sonnigen Wetter am besten in einen der schönen Biergärten in der Nähe.",
          "whyCorrect": {
                "de": "Option c ist richtig. Er empfiehlt den Teilnehmern den Besuch eines Biergartens.",
                "ar": "الخيار (c) هو الصحيح. ينصح المرشد الزوار بالاستمتاع بالطقس المشمس في إحدى حدائق المشروبات في الهواء الطلق (Biergarten).",
                "fr": "L'option c est correcte. Le guide suggère de profiter du beau temps dans un Biergarten voisin."
          },
          "whyIncorrect": {
                "de": "Option a (Restaurant) und b (Café) sind falsch: Der Museumsführer hebt ausdrücklich den Biergarten hervor.",
                "ar": "الخياران (a) و (b) خاطئان: أوصى المرشد صراحة بزيارة حديقة مفتوحة (Biergarten) وليس مطعماً مغلقاً أو مقهى.",
                "fr": "Les options a et b sont inexactes : la recommandation porte spécifiquement sur les Biergärten."
          }
    },
    "h16": {
          "quote": "Gespräch: Wir waren am Samstag auf Annas großem Geburtstagsfest eingeladen. Sie ist ja 40 geworden!",
          "whyCorrect": {
                "de": "Falsch. Anna selbst hatte Geburtstag, nicht ihr Mann.",
                "ar": "خطأ. كانت الحفلة احتفالاً بعيد ميلاد آنا نفسها (بلوغها الأربعين) وليس زوجها.",
                "fr": "Faux. La fête célébrait les 40 ans d'Anna elle-même, et non l'anniversaire de son mari."
          },
          "whyIncorrect": {
                "de": "Richtig ist falsch, da der Anlass eindeutig der 40. Geburtstag von Anna war.",
                "ar": "اختيار 'صحيح' غير دقيق لأن المناسبة كانت عيد ميلاد آنا تحديداً.",
                "fr": "Choisir 'Vrai' est erroné car c'est Anna qui fêtait son anniversaire."
          }
    },
    "h17": {
          "quote": "Nadia: Das Haus von Anna und ihrem Mann ist einfach ein Traum! Riesig, modern und ein wunderschöner Garten direkt am Wald.",
          "whyCorrect": {
                "de": "Richtig. Nadia schwärmt begeistert von dem Haus und dem Garten der Gastgeber.",
                "ar": "صحيح. تعبر ناديا عن إعجابها الشديد بمنزل المضيفين وتصفه بأنه رائع وواسع وحديقته جميلة.",
                "fr": "Vrai. Nadia est émerveillée et très enthousiaste en décrivant la maison et le jardin."
          },
          "whyIncorrect": {
                "de": "Falsch ist nicht zutreffend: Nadia benutzt Ausdrücke wie „einfach ein Traum“ und „wunderschön“.",
                "ar": "اختيار 'خطأ' غير صحيح لأن ناديا تمدح البيت بعبارات الإعجاب والانبهار.",
                "fr": "Choisir 'Faux' est contredit par les éloges très nets de Nadia envers la maison."
          }
    },
    "h18": {
          "quote": "Gespräch: Nadia gibt Musikunterricht und bereitet Schüler auf Konzerte vor.",
          "whyCorrect": {
                "de": "Falsch. Nadia arbeitet nicht beim Fernsehen, sondern als Musikerin/Musiklehrerin.",
                "ar": "خطأ. ناديا لا تعمل في التلفزيون، بل تعمل في تدريس الموسيقى وتدريب الطلاب على العزف.",
                "fr": "Faux. Nadia ne travaille pas à la télévision mais enseigne la musique à des élèves."
          },
          "whyIncorrect": {
                "de": "Richtig ist falsch, da ihr Beruf im Musikbereich und Unterricht liegt.",
                "ar": "اختيار 'صحيح' غير مطابق للواقع المذكور في الحوار بأنها مدرسة موسيقى وعازفة.",
                "fr": "Choisir 'Vrai' ne correspond pas à sa profession de professeur de musique."
          }
    },
    "h19": {
          "quote": "Nadia: Das Buffet war wirklich absolute Spitzenklasse – fantastische Antipasti, Salate und herrliche Desserts.",
          "whyCorrect": {
                "de": "Richtig. Nadia lobt das Essen ausdrücklich als hervorragend.",
                "ar": "صحيح. تمتدح ناديا بوفيه الطعام وتصفه بأنه كان ممتازاً وعلى أعلى مستوى.",
                "fr": "Vrai. Nadia qualifie le buffet de gastronomie de premier ordre et le trouve délicieux."
          },
          "whyIncorrect": {
                "de": "Falsch ist unpassend: Sie bezeichnet das Essen wörtlich als „absolute Spitzenklasse“.",
                "ar": "اختيار 'خطأ' غير سليم لأنها وصفت الأطعمة بعبارة 'قمة في الروعة والإتقان'.",
                "fr": "Choisir 'Faux' est faux : elle qualifie explicitement le buffet d'excellence."
          }
    },
    "h20": {
          "quote": "Nadia: Es war zwar ein Gitarrist da, aber wir haben nicht zusammen gespielt. Ich habe später ganz alleine am Flügel gespielt.",
          "whyCorrect": {
                "de": "Falsch. Sie hat nicht zusammen mit dem Musiker musiziert, sondern solo.",
                "ar": "خطأ. لم تعزف ناديا مع عازف الجيتار، بل عزفت منفردة على البيانو لاحقاً.",
                "fr": "Faux. Elle n'a pas joué en duo avec le guitariste mais seule au piano à queue."
          },
          "whyIncorrect": {
                "de": "Richtig trifft nicht zu, weil sie klar betont: „wir haben nicht zusammen gespielt“.",
                "ar": "اختيار 'صحيح' غير صحيح لأنها صرحت بوضوح: 'لم نعزف معاً إطلاقاً'.",
                "fr": "Choisir 'Vrai' est contredit par sa phrase explicite « nous n'avons pas joué ensemble »."
          }
    },
    "h21": {
          "quote": "Nadia: Ich habe klassische Stücke von Chopin und Brahms gespielt. Jazz kann ich ja gar nicht richtig.",
          "whyCorrect": {
                "de": "Falsch. Nadia hat keinen Jazz gespielt, sondern ausschließlich klassische Werke.",
                "ar": "خطأ. لم تعزف ناديا موسيقى الجاز، بل عزفت مقطوعات كلاسيكية لشوبان وبرامز.",
                "fr": "Faux. Nadia n'a pas joué de jazz, mais uniquement des pièces classiques."
          },
          "whyIncorrect": {
                "de": "Richtig ist falsch: Sie sagt ausdrücklich, dass sie gar keinen Jazz spielen kann.",
                "ar": "اختيار 'صحيح' خاطئ لأنها ذكرت صراحة أنها لا تجيد عزف موسيقى الجاز أصلاً.",
                "fr": "Choisir 'Vrai' est faux puisqu'elle affirme ne pas maîtriser le jazz."
          }
    },
    "h22": {
          "quote": "Nadia: Wir haben noch bis um halb zwei zusammengesessen und getanzt. Ich war erst gegen zwei Uhr nachts im Bett.",
          "whyCorrect": {
                "de": "Richtig. Das Fest dauerte bis tief in die Nacht nach Mitternacht.",
                "ar": "صحيح. استمرت الحفلة حتى الساعة الواحدة والنصف صباحاً وتجاوزت منتصف الليل.",
                "fr": "Vrai. La fête s'est poursuivie tard dans la nuit, bien après minuit."
          },
          "whyIncorrect": {
                "de": "Falsch ist nicht zutreffend: Sie saßen bis 1:30 Uhr zusammen und sie ging erst um 2:00 Uhr schlafen.",
                "ar": "اختيار 'خطأ' غير صحيح لأنهم استمروا في الرقص والحديث حتى الواحدة والنصف ليلاً.",
                "fr": "Choisir 'Faux' est inexact : les invités sont restés jusqu'à 1h30 du matin."
          }
    },
    "h23": {
          "quote": "Dana Schneider: Kleine Kinder spielen unter drei Jahren meistens nebeneinander, nicht miteinander. Richtiges soziales Verhalten mit Gleichaltrigen lernen sie erst ab drei oder vier Jahren.",
          "whyCorrect": {
                "de": "Option b (Dana Schneider) ist richtig. Sie vertritt die Auffassung, dass soziales Verhalten erst ab einem bestimmten Alter erlernt wird.",
                "ar": "الخيار (b) (دانا شنايدر) صحيح. ترى أن السلوك الاجتماعي التفاعلي لا يبدأ إلا بعد سن الثالثة أو الرابعة.",
                "fr": "L'option b (Dana Schneider) est correcte. Elle affirme que la socialisation ne s'apprend qu'à partir d'un certain âge."
          },
          "whyIncorrect": {
                "de": "Option a (Moderator) und c (Florian Bader) haben diesen entwicklungspsychologischen Standpunkt nicht vertreten.",
                "ar": "الخياران (a) و (c) خاطئان: دانا شنايدر هي المتحدثة التي طرحت هذه النقطة النفسية للأطفال.",
                "fr": "Les options a et c ne sont pas les auteurs de cette analyse développementale."
          }
    },
    "h24": {
          "quote": "Florian Bader: In der heutigen Arbeitswelt ist Kontinuität entscheidend. Wer jahrelang aus dem Job aussteigt, verliert den Anschluss und gefährdet seine Karriere.",
          "whyCorrect": {
                "de": "Option c (Florian Bader) ist richtig. Er betont, wie wichtig ununterbrochene Erwerbstätigkeit für den beruflichen Erfolg ist.",
                "ar": "الخيار (c) (فلوريان بادر) صحيح. يؤكد أن الاستمرار في العمل دون انقطاع شرط حاسم للنجاح المهني والترقي.",
                "fr": "L'option c (Florian Bader) est correcte. Il souligne l'importance d'une activité professionnelle ininterrompue."
          },
          "whyIncorrect": {
                "de": "Option a und b sind falsch: Florian Bader argumentiert aus der Perspektive beruflicher Kontinuität.",
                "ar": "الخياران (a) و (b) خاطئان: فلوريان بادر هو من شدد على ضرورة عدم الانقطاع عن العمل.",
                "fr": "Les options a et b sont erronées : cet argument de carrière émane de Florian Bader."
          }
    },
    "h25": {
          "quote": "Florian Bader: Mit guten Betreuungsangeboten kann man Familie und Beruf wunderbar unter einen Hut bringen. Man muss sich heute nicht mehr zwischen Kindern und Arbeit entscheiden.",
          "whyCorrect": {
                "de": "Option c (Florian Bader) ist richtig. Er ist überzeugt, dass Kinder und Beruf problemlos vereinbar sind.",
                "ar": "الخيار (c) (فلوريان بادر) صحيح. يرى إمكانية التوفيق والجمع بين العمل وتربية الأطفال بفضل الحضانات.",
                "fr": "L'option c (Florian Bader) est correcte. Il est convaincu de la compatibilité entre vie professionnelle et enfants."
          },
          "whyIncorrect": {
                "de": "Option a und b vertreten nicht diese optimistische Haltung zur Vereinbarkeit von Familie und Beruf.",
                "ar": "الخياران (a) و (b) لم يطرحا هذا الموقف الإيجابي بشأن سهولة التوفيق بين الوظيفة والأسرة.",
                "fr": "Les options a et b ne défendent pas cette thèse d'harmonie travail-famille."
          }
    },
    "h26": {
          "quote": "Moderator: Aber lernen Kinder in der Krippe durch die pädagogische Betreuung nicht ganz andere Fähigkeiten, als Eltern zu Hause vermitteln können?",
          "whyCorrect": {
                "de": "Option a (Moderator) ist richtig. Er bringt den Aspekt ein, dass in der Krippe andere Inhalte als zu Hause geboten werden.",
                "ar": "الخيار (a) (منسق الحوار) صحيح. يطرح السؤال حول ما إذا كان الأطفال يكتسبون في دار الحضانة مهارات مغايرة لما يتعلمونه في المنزل.",
                "fr": "L'option a (Le modérateur) est correcte. Il soulève l'idée que la crèche apporte des apprentissages différents du foyer."
          },
          "whyIncorrect": {
                "de": "Option b und c antworten auf diese vom Moderator gestellte Leitfrage.",
                "ar": "الخياران (b) و (c) كانا المستمعين والمجيبين على هذا التساؤل المطروح من قبل المذيع.",
                "fr": "Les options b et c réagissent à cette interrogation soulevée par le présentateur."
          }
    },
    "h27": {
          "quote": "Dana Schneider: Die Realität sieht doch so aus, dass oft eine Erzieherin mit zehn oder zwölf Kleinkindern überfordert ist und keine individuelle Zuwendung geben kann.",
          "whyCorrect": {
                "de": "Option b (Dana Schneider) ist richtig. Sie kritisiert das Betreuungsverhältnis mit zu vielen Kindern pro Erzieherin.",
                "ar": "الخيار (b) (دانا شنايدر) صحيح. تنتقد كثرة عدد الأطفال الموكلين إلى مربية واحدة في دور الحضانة.",
                "fr": "L'option b (Dana Schneider) est correcte. Elle dénonce le nombre excessif d'enfants confiés à une seule éducatrice."
          },
          "whyIncorrect": {
                "de": "Option a und c haben diese Kritik an der Überlastung der Erzieherinnen nicht geäußert.",
                "ar": "الخياران (a) و (c) لم يوجها هذا النقد الحاد لمشكلة قلة المربيات مقارنة بعدد الأطفال.",
                "fr": "Les options a et c ne partagent pas ce reproche spécifique de surcharge en crèche."
          }
    },
    "h28": {
          "quote": "Florian Bader: Kinder müssen von klein auf lernen, sich auch mal selbst zu beschäftigen und eigenständig mit Spielsachen umzugehen.",
          "whyCorrect": {
                "de": "Option c (Florian Bader) ist richtig. Er plädiert dafür, dass Kinder Eigenständigkeit lernen und sich alleine beschäftigen können.",
                "ar": "الخيار (c) (فلوريان بادر) صحيح. يشدد على ضرورة أن يتعلم الطفل منذ نعومة أظفاره الاعتماد على نفسه واللعب بمفرده.",
                "fr": "L'option c (Florian Bader) est correcte. Il soutient que les enfants doivent apprendre à s'occuper seuls."
          },
          "whyIncorrect": {
                "de": "Option a und b haben diese Erziehungsansicht im Gespräch nicht vertreten.",
                "ar": "الخياران (a) و (b) لم يطالبا بتعويد الأطفال على اللعب المنفرد.",
                "fr": "Les options a et b ne préconisent pas cette approche d'autonomie ludique précoce."
          }
    },
    "h29": {
          "quote": "Florian Bader: Leider fehlt es vielen Kommunen an Geld für moderne, gut ausgestattete Einrichtungen und ausreichend Personal.",
          "whyCorrect": {
                "de": "Option c (Florian Bader) ist richtig. Er weist auf den Geldmangel und die finanzielle Notlage vieler Kitas hin.",
                "ar": "الخيار (c) (فلوريان بادر) صحيح. يشير إلى نقص الموارد المالية لدى البلديات لتمويل الحضانات وتوفير الكوادر.",
                "fr": "L'option c (Florian Bader) est correcte. Il pointe le manque de budget des municipalités pour équiper les crèches."
          },
          "whyIncorrect": {
                "de": "Option a und b thematisieren nicht den finanziellen Mangel der Kommunen.",
                "ar": "الخياران (a) و (b) لم يتطرقا إلى ضعف الميزانيات ونقص التمويل المالي للبلديات.",
                "fr": "Les options a et b n'abordent pas le déficit budgétaire des structures publiques."
          }
    },
    "h30": {
          "quote": "Dana Schneider: Krippenplätze müssen für alle bezahlbar sein, damit nicht nur Wohlhabende Kinder bekommen können.",
          "whyCorrect": {
                "de": "Option b (Dana Schneider) ist richtig. Sie fordert finanzielle Unterstützung, damit auch einkommensschwache Familien Kinder haben können.",
                "ar": "الخيار (b) (دانا شنايدر) صحيح. تطالب بأن تكون رسوم الحضانات في متناول الجميع ليتسنى لمحدودي الدخل إنجاب أطفال.",
                "fr": "L'option b (Dana Schneider) est correcte. Elle exige que les crèches soient abordables pour permettre aux familles modestes d'avoir des enfants."
          },
          "whyIncorrect": {
                "de": "Option a und c haben diese sozialpolitische Forderung nicht formuliert.",
                "ar": "الخياران (a) و (c) لم يطرحا هذا المطلب الاجتماعي بخصوص العدالة المالية وتكاليف الرعاية.",
                "fr": "Les options a et c n'ont pas formulé cette revendication de tarification sociale."
          }
    },
  },
  "modellsatz-2": {
    "1": {
        "quote": "Seit zwei Tagen arbeite ich in der Presseabteilung.",
        "whyCorrect": {
            "de": "Richtig. Nina schreibt gleich zu Beginn ihres Blogeintrags: „Seit zwei Tagen arbeite ich in der Presseabteilung.“ Sie ist also noch ganz neu auf dieser Stelle.",
            "ar": "صحيح. تذكر نينا في بداية تدوينتها مباشرة: 'منذ يومين أعمل في قسم الصحافة'. وبالتالي فهي جديدة تمامًا في هذه الوظيفة.",
            "fr": "Vrai. Nina commence son billet de blog en disant : « Depuis deux jours, je travaille au service de presse ». Elle est donc toute nouvelle à ce poste."
        },
        "whyIncorrect": {
            "de": "Falsch wäre unzutreffend, da sie erst seit zwei Tagen dort arbeitet und somit noch nicht lange dabei ist.",
            "ar": "اختيار 'خطأ' غير صحيح، لأنها لم تبدأ العمل سوى منذ يومين فقط.",
            "fr": "Choisir 'Faux' est incorrect car deux jours représentent une durée très courte."
        }
    },
    "2": {
        "quote": "Wir müssen gerade für ein neues Buch ein paar Werbeauftritte vorbereiten. Da bin ich also ziemlich viel als „location-scout“ in der Stadt unterwegs ... überlege, ob sie für uns geeignet sind.",
        "whyCorrect": {
            "de": "Richtig. Als „Location-Scout“ sucht sie in der Stadt nach geeigneten Orten (wie Bibliotheken oder Geschäften) für kulturelle Werbeauftritte und Lesungen.",
            "ar": "صحيح. بصفتها مستكشفة مواقع، تبحث في المدينة عن أماكن مناسبة (مثل المكتبات والمتاجر) لتنظيم فعاليات ترويجية وأمسيات قراءة لكتاب جديد.",
            "fr": "Vrai. En tant que repéreuse de lieux (« location-scout »), elle recherche des espaces adaptés (bibliothèques, boutiques) pour organiser des événements promotionnels et des lectures."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht falsch: Genau das ist ihre Hauptaufgabe im Moment.",
            "ar": "العبارة ليست خاطئة، فهذه بالضبط مهمتها الحالية وفقًا للنص.",
            "fr": "L'affirmation n'est pas fausse : c'est exactement sa mission actuelle."
        }
    },
    "3": {
        "quote": "Dann hat er mir zwei Einladungskarten gegeben, für eine Ausstellungseröffnung in einem anderen Stadtteil. Da sollte am Abend eine Party sein. Natürlich habe ich gleich meine Freundin Karo angerufen ... Die Leute in der U-Bahn dachten wahrscheinlich, wir wollten zu einer Hochzeit oder in die Oper.",
        "whyCorrect": {
            "de": "Falsch. Nina und Karo gehen zu einer Ausstellungseröffnung mit Party. Die Hochzeit wird im Text lediglich als lustiger Vergleich erwähnt („Die Leute in der U-Bahn dachten wahrscheinlich, wir wollten zu einer Hochzeit...“), weil sie sich so schick angezogen hatten.",
            "ar": "خطأ. ذهبت نينا وصديقتها كارو لحضور افتتاح معرض فني مصحوب بحفل. ذُكر حفل الزفاف في النص فقط كمقارنة طريفة لأناقة ملابسهما في المترو.",
            "fr": "Faux. Nina et son amie se rendent au vernissage d'une exposition artistique. Le mariage n'est qu'une métaphore amusante pour illustrer leurs tenues très élégantes dans le métro."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht 'richtig', da es sich um eine Kunstausstellung mit Vernissage handelt, nicht um eine Heirat.",
            "ar": "العبارة ليست صحيحة لأن المناسبة افتتاح معرض فني وليست زفافًا حقيقيًا.",
            "fr": "L'affirmation n'est pas 'vraie' car il s'agit d'une exposition d'art et non d'un mariage."
        }
    },
    "4": {
        "quote": "Karo hatte im Internet herausgefunden, dass wir an der U-Bahnstation „Horner Landstraße“ aussteigen mussten. Das haben wir auch getan.",
        "whyCorrect": {
            "de": "Falsch. Die beiden Mädchen sind an der absolut richtigen Station („Horner Landstraße“) ausgestiegen („Das haben wir auch getan“). Nur der anschließende Fußweg war viel weiter und verwirrender als gedacht.",
            "ar": "خطأ. نزلتا في المحطة الصحيحة تمامًا ('وهذا ما فعلناه أيضًا'). لكن المسافة سيرًا على الأقدام بعد ذلك كانت أطول ومضللة.",
            "fr": "Faux. Elles sont descendues à la bonne station (« C'est ce que nous avons fait »). C'est seulement la marche à pied par la suite qui était plus longue et trompeuse."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht richtig, denn sie sind genau an der Haltestelle ausgestiegen, die Karo recherchiert hatte.",
            "ar": "العبارة ليست صحيحة لأنهما نزلتا بالضبط في المحطة التي حددتها كارو.",
            "fr": "L'affirmation n'est pas vraie car elles sont descendues à la station exacte indiquée par Karo."
        }
    },
    "5": {
        "quote": "Wir haben überall gefragt, aber niemand wusste etwas von der Ausstellung. Nach einer halben Stunde Herumlaufen haben wir wenigstens die Straße gefunden",
        "whyCorrect": {
            "de": "Richtig. Sie haben Passanten nach dem Weg gefragt, aber niemand konnte ihnen weiterhelfen („niemand wusste etwas von der Ausstellung“), sodass sie lange suchen mussten.",
            "ar": "صحيح. سألتا المارة في كل مكان ولكن لم يعرف أحد أي شيء عن المعرض، فاضطرتا للتجول والبحث لمدة طويلة.",
            "fr": "Vrai. Elles ont interrogé plusieurs passants, mais personne ne connaissait l'exposition (« personne n'était au courant »), elles ont donc dû chercher par elles-mêmes."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend: Der Text bestätigt ausdrücklich, dass ihnen niemand Auskunft geben konnte.",
            "ar": "اختيار 'خطأ' غير صحيح لأن النص يؤكد بوضوح أن أحدًا لم يتمكن من مساعدتهما.",
            "fr": "Choisir 'Faux' est incorrect car le texte indique expressément que personne n'a pu les aider."
        }
    },
    "6": {
        "quote": "nur der coole Typ, der mir am Morgen die Einladung gegeben hatte, der war gar nicht da! Das war mir aber völlig egal.",
        "whyCorrect": {
            "de": "Falsch. Nina war keineswegs traurig. Sie fand den Abend fantastisch, hat nette Bekanntschaften gemacht und betont im Schlusssatz: „Das war mir aber völlig egal.“",
            "ar": "خطأ. لم تكن نينا حزينة بأي شكل من الأشكال؛ بل استمتعت بأمسية رائعة وتعرفت على أصدقاء جدد وأكدت: 'لكن ذلك لم يهمني إطلاقًا'.",
            "fr": "Faux. Nina n'était absolument pas triste ; elle a passé une excellente soirée et conclut le texte par : « Mais cela m'était complètement égal »."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht richtig, da Nina ausdrücklich schreibt, dass ihr die Abwesenheit des Bekannten völlig gleichgültig war.",
            "ar": "العبارة ليست صحيحة لأن نينا لم تكترث إطلاقًا لعدم حضور ذلك الشاب.",
            "fr": "L'affirmation n'est pas vraie car Nina précise qu'elle ne s'en souciait absolument pas."
        }
    },
    "7": {
        "quote": "Das neue Terminal soll in ein paar Monaten eröffnet werden und bis dahin wird geprobt. 10000 Berliner haben sich freiwillig gemeldet, um als Testpersonen im Flughafen gerade das zu tun, was man sonst auf Reisen am meisten hasst: Schlange stehen, Koffer tragen und durch lange Gänge laufen.",
        "whyCorrect": {
            "de": "Option c ist richtig. Der Stresstest dient dazu, das neue Terminal und alle Einrichtungen sowie Betriebsabläufe vor der offiziellen Eröffnung umfassend zu testen.",
            "ar": "الخيار (c) صحيح. الغرض من اختبار الضغط هو اختبار مرافق ومنشآت المطار الجديد وسير العمليات قبل الافتتاح الرسمي.",
            "fr": "L'option c est correcte. Le test a pour but de vérifier et d'éprouver toutes les installations du nouveau terminal avant l'ouverture."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (es geht nur um Berlin-Brandenburg, nicht um ganz Europa). Option b ist falsch (es geht nicht um Sightseeing für Berliner, sondern um einen realitätsnahen Belastungstest).",
            "ar": "الخيار (a) خاطئ فالاختبار مقتصر على مطار برلين وليس كل مطارات أوروبا. والخيار (b) خاطئ فالهدف ليس نزهة تعريفية بل فحص تقني وعملي دقيق.",
            "fr": "L'option a est fausse (test local à Berlin). L'option b est erronée car l'objectif est technique et logistique, non une simple visite de découverte."
        }
    },
    "8": {
        "quote": "und alle machen begeistert mit, obwohl der Job nicht bezahlt wird. Der Flughafen hat 15000 Koffer besorgt, mit denen immer wieder geübt wird.",
        "whyCorrect": {
            "de": "Option a ist richtig. Die Testpersonen arbeiten freiwillig und ohne Bezahlung („obwohl der Job nicht bezahlt wird“).",
            "ar": "الخيار (a) صحيح. يشارك المتطوعون دون أي أجر مالي ('على الرغم من أن العمل غير مدفوع الأجر').",
            "fr": "L'option a est correcte. Les testeurs participent bénévolement sans aucune rémunération (« bien que le travail ne soit pas payé »)."
        },
        "whyIncorrect": {
            "de": "Option b ist falsch (kein Interview). Option c ist falsch, weil die Koffer vom Flughafen bereitgestellt werden und nicht von den Teilnehmern mitgebracht werden.",
            "ar": "الخيار (b) خاطئ فلا وجود لمقابلات. والخيار (c) خاطئ لأن المطار هو من وفر 15 ألف حقيبة للتجربة ولم يجلبها المشاركون.",
            "fr": "L'option b est fausse. L'option c est erronée car les 15 000 valises sont fournies par l'aéroport et non amenées par les passagers."
        }
    },
    "9": {
        "quote": "einige äußern sich geradezu begeistert über den neuen Flughafen: „Haben Sie gesehen, die S-Bahn fährt direkt bis unter das Terminal!“ „Ja“, antwortet jemand, „aber hinter den Sicherheitskontrollen ist viel zu wenig Platz. Das darf nicht so bleiben“.",
        "whyCorrect": {
            "de": "Option c ist richtig. Die Reaktionen sind gemischt: Einige Teilnehmer sind begeistert (Lob für die direkte S-Bahn-Anbindung), andere üben deutliche Kritik (zu wenig Platz hinter den Kontrollen).",
            "ar": "الخيار (c) صحيح. هناك آراء إيجابية وأخرى سلبية: بعض المشاركين متحمسون (القطار أسفل المبنى) وآخرون ينتقدون ضيق المكان خلف التفتيش الأمني.",
            "fr": "L'option c est correcte. Les avis sont partagés : réactions très positives sur l'accès ferroviaire direct, et critiques sur l'étroitesse des contrôles de sûreté."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (sie sind bester Laune, nicht übermüdet). Option b ist falsch, da keineswegs „alle“ rundum zufrieden sind.",
            "ar": "الخيار (a) خاطئ فالأجواء كانت مرحة. والخيار (b) خاطئ لوجود انتقادات صريحة بشأن المساحة.",
            "fr": "L'option a est fausse. L'option b est inexacte car plusieurs participants soulignent des défauts majeurs."
        }
    },
    "10": {
        "quote": "Wenn sie im Kaufhaus gefragt werden, ob sie eine Kundenkarte beantragen möchten, lehnen sie höflich ab, weil sie ihre persönlichen Daten nicht veröffentlichen wollen.",
        "whyCorrect": {
            "de": "Option a ist richtig. Viele Menschen lehnen Kundenkarten ab, um ihre privaten Angaben und Einkaufsdaten vor den Verkäufern zu schützen.",
            "ar": "الخيار (a) صحيح. يرفض الكثير من الزبائن بطاقات العملاء لحماية خصوصيتهم وعدم الكشف عن بياناتهم الشخصية للمتاجر.",
            "fr": "L'option a est correcte. Les clients réticents refusent les cartes pour ne pas divulguer leurs données personnelles aux commerçants."
        },
        "whyIncorrect": {
            "de": "Option b ist falsch (Waren werden nicht teurer). Option c ist falsch, denn die Prämien werden nicht als Hauptablehnungsgrund genannt.",
            "ar": "الخيار (b) خاطئ فالأسعار لا ترتفع بسببها. والخيار (c) خاطئ لأن السبب الأساسي هو حماية البيانات وليس نوعية المكافآت.",
            "fr": "L'option b est fausse. L'option c ne correspond pas au motif invoqué dans l'article."
        }
    },
    "11": {
        "quote": "Es gibt auch noch die Karten der Fluglinien und der Bahn, da werden ebenfalls Punkte gesammelt, allerdings nach einem anderen System: Wenn ich viel mit Flugzeug oder Bahn unterwegs bin, habe ich schließlich auf meiner Kundenkarte genügend Bonuspunkte",
        "whyCorrect": {
            "de": "Option c ist richtig. Bei der Kundenkarte der Bahn sammelt der Inhaber Punkte bzw. Treuepunkte („da werden ebenfalls Punkte gesammelt“).",
            "ar": "الخيار (c) صحيح. مع بطاقة ولاء القطارات، يجمع المسافر نقاط مكافآت ('يتم هناك أيضًا جمع النقاط').",
            "fr": "L'option c est correcte. La carte de chemin de fer permet d'accumuler des points de fidélité au fil des voyages."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (man fährt nicht automatisch gratis in der Heimatregion). Option b ist falsch (keine kleine Überraschung pro Ticketkauf).",
            "ar": "الخيار (a) خاطئ فلا تمنح ركوبًا مجانيًا تلقائيًا. والخيار (b) خاطئ فلا توجد مفاجآت فورية عند كل تذكرة.",
            "fr": "L'option a est fausse. L'option b est inventée."
        }
    },
    "12": {
        "quote": "Gerd Kortenreuther, Werbefachmann aus Graz, sagt dazu: „Selbstverständlich sind alle Bonusprogramme in erster Linie ein Mittel, um möglichst viele Kunden möglichst fest an den Verkäufer zu binden.“",
        "whyCorrect": {
            "de": "Option c ist richtig. Das Hauptziel der Programme ist die Kundenbindung: Die Kunden sollen dem Geschäft treu bleiben und immer dort einkaufen.",
            "ar": "الخيار (c) صحيح. الهدف الاستراتيجي هو ولاء الزبون وربطه بالبائع ليداوم على الشراء من المتجر ذاته.",
            "fr": "L'option c est correcte. La finalité première est la fidélisation : inciter le client à revenir constamment dans le même magasin."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (Verbilligung ist nur ein Ködermittel, nicht das Endziel der Händler). Option b ist falsch (es geht um Verkauf, nicht Information).",
            "ar": "الخيار (a) خاطئ فالخصم مجرد وسيلة لجذب العميل وليس غاية التاجر. والخيار (b) خاطئ فلا تهدف لتثقيف المستهلك.",
            "fr": "L'option a et l'option b ne reflètent pas la motivation commerciale des entreprises."
        }
    },
    "13": {
        "quote": "Frau Gabriell liebt klassische Musik. Sie würde gern ein Konzert besuchen oder in die Oper gehen. Am Samstagabend hat sie schon etwas vor.",
        "whyCorrect": {
            "de": "Lösung X ist richtig. Unter den vorliegenden Anzeigen A bis J gibt es kein passendes klassisches Konzert oder Opernangebot, das nicht am Samstagabend stattfindet.",
            "ar": "الحل X صحيح. لا يوجد بين الإعلانات إعلان يقدم حفلاً للموسيقى الكلاسيكية أو أوبرا في موعد يناسب السيدة غابرييل.",
            "fr": "La réponse X est correcte. Aucune des annonces A à J ne propose de concert de musique classique ou d'opéra adapté à son emploi du temps."
        },
        "whyIncorrect": {
            "de": "Keine der Anzeigen A bis J deckt diese Situation ab, daher muss X gewählt werden.",
            "ar": "لا ينطبق أي إعلان من A إلى J على وضعها، لذلك يجب اختيار X.",
            "fr": "Aucune annonce ne convenant, il faut sélectionner X."
        }
    },
    "14": {
        "quote": "Französischer Chanson-Abend im Café Voltaire · Eintritt frei",
        "whyCorrect": {
            "de": "Anzeige H passt. Ai spricht sehr gut Französisch und die beiden interessieren sich nicht für klassische Musik. Der französische Chanson-Abend im Café Voltaire ist ideal.",
            "ar": "الإعلان H مناسب. آي تجيد الفرنسية بطلاقة، وأمسية الأغاني الفرنسية (Chanson) في مقهى فولتير تناسبهما تمامًا.",
            "fr": "L'annonce H convient. Ai parlant couramment français, la soirée de chansons françaises au Café Voltaire est parfaite."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten keinen französischen Sprachbezug oder erfordern Deutschkenntnisse.",
            "ar": "الإعلانات الأخرى لا ترتبط باللغة الفرنسية وتتطلب فهمًا للغة الألمانية.",
            "fr": "Les autres annonces ne répondent pas au critère linguistique francophone."
        }
    },
    "15": {
        "quote": "Bowling-Center Treffpunkt: Spiel, Spaß, Pizza & Snacks",
        "whyCorrect": {
            "de": "Anzeige F passt. Philipp möchte seine Freunde treffen, etwas essen, reden und etwas Unterhaltsames machen. Das Bowling-Center mit Pizza und Snacks erfüllt alle Wünsche.",
            "ar": "الإعلان F مناسب. يريد فيليب لقاء أصدقائه والحديث وتناول الطعام والمرح؛ ومركز البولينغ مع البيتزا يوفر كل ذلك.",
            "fr": "L'annonce F convient. Philipp cherche un endroit convivial pour jouer, discuter et manger des pizzas entre amis."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten kein lockeres Treffen mit Sport, Spiel und Gastronomie für eine Freundesgruppe.",
            "ar": "الإعلانات الأخرى لا تجمع بين اللعب الترفيهي الجماعي وتناول البيتزا.",
            "fr": "Les autres propositions ne combinent pas loisir ludique et restauration conviviale."
        }
    },
    "16": {
        "quote": "Fröhliches Wochenende – Stadtfest in Bruchsal ... Für die Kleinen ist ein besonderer Spielpark aufgebaut. Eintritt frei.",
        "whyCorrect": {
            "de": "Anzeige B passt. Familie Steiner sucht ein günstiges Angebot für Sonntag mit Unterhaltung für die drei Kinder. Das Stadtfest bietet einen Spielpark für Kinder und der Eintritt ist frei.",
            "ar": "الإعلان B مناسب. تبحث عائلة شتاينر عن نشاط غير مكلف وممتع للأطفال يوم الأحد؛ ومهرجان المدينة يقدم حديقة ألعاب للصغار ودخولاً مجانيًا.",
            "fr": "L'annonce B convient. Fête municipale avec parc de jeux pour enfants, idéale pour la famille le dimanche avec entrée gratuite."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen sind kostenpflichtig oder nicht für kleine Kinder geeignet.",
            "ar": "الإعلانات الأخرى باهظة التكلفة أو غير مناسبة للأطفال الصغار.",
            "fr": "Les autres annonces sont payantes ou inadaptées à de jeunes enfants."
        }
    },
    "17": {
        "quote": "Club Nirvana: Neueröffnung! Große Eröffnungsparty ... elegantes Büffet & erlesene Weine ... Tanz mit den „Beachriders“",
        "whyCorrect": {
            "de": "Anzeige C passt. Stefan und Marie wollen festlich ausgehen: gutes Essen (elegantes Büffet), Tanz und neue Clubmitglieder kennenlernen.",
            "ar": "الإعلان C مناسب. يرغب شتيفان وماري في سهرة مميزة: بوفيه فاخر، رقص، والتعرف على أعضاء النادي الجدد.",
            "fr": "L'annonce C convient. Soirée élégante avec buffet raffiné, piste de danse et rencontres au Club Nirvana."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten nicht die gewünschte Kombination aus festlichem Abendessen und Tanzparty.",
            "ar": "الإعلانات الأخرى لا توفر بوفيه عشاء ورقصًا في آن واحد.",
            "fr": "Les autres options n'offrent pas à la fois buffet soigné et ambiance dansante."
        }
    },
    "18": {
        "quote": "Salsa-Club Havana ... Eintritt frei",
        "whyCorrect": {
            "de": "Anzeige E passt. Tanja und Claire wollen lateinamerikanisch tanzen und haben wenig Geld. Der Salsa-Club bietet heiße Rhythmen bei freiem Eintritt.",
            "ar": "الإعلان E مناسب. تانجا وكلير ترغبان في رقص إيقاعات لاتينية بميزانية محدودة؛ ونادي السالسا يقدم دخولاً مجانيًا.",
            "fr": "L'annonce E convient. Musiques et danses latino-américaines (salsa) avec entrée gratuite, parfait pour leur petit budget."
        },
        "whyIncorrect": {
            "de": "Andere Tanzangebote kosten Eintritt oder spielen keine lateinamerikanische Musik.",
            "ar": "أماكن الرقص الأخرى تفرض رسوم دخول أو لا تقدم موسيقى لاتينية.",
            "fr": "Les autres clubs font payer l'entrée ou diffusent d'autres styles musicaux."
        }
    },
    "19": {
        "quote": "Matinee im Schlosspark ... Sonntag, 11.00 Uhr",
        "whyCorrect": {
            "de": "Anzeige D passt. Herr Mirolek möchte Kultur am Wochenende erleben, aber am Abend zu Hause bei seiner Familie sein. Eine Matinee am Vormittag passt exakt.",
            "ar": "الإعلان D مناسب. يريد السيد ميروليك حضور فعالية ثقافية صباحية ليبقى مساءً مع عائلته؛ والحفلة الصباحية (Matinee) تقام الأحد الساعة 11:00.",
            "fr": "L'annonce D convient. Une matinée culturelle au parc du château le dimanche matin à 11h lui permet d'être en famille le soir."
        },
        "whyIncorrect": {
            "de": "Abendveranstaltungen kommen für Herrn Mirolek nicht infrage.",
            "ar": "الفعاليات المسائية غير مناسبة لأنه يريد قضاء المساء في المنزل.",
            "fr": "Les événements du soir ne lui conviennent pas car il veut rentrer chez lui."
        }
    },
    "20": {
        "quote": "Wenn wir weiterhin unseren Lebensstandard behalten wollen, müssen wir auch die erneuerbare Energie aus Getreide akzeptieren.",
        "whyCorrect": {
            "de": "„Ja“ ist richtig. Stefanie spricht sich klar für Bio-Energie aus, weil sie Atomkraft und Öl-Abhängigkeit ablehnt und Getreideenergie für notwendig hält.",
            "ar": "'نعم' صحيح. تؤيد ستيفاني الطاقة الحيوية لأنها ترى ضرورة قبول الطاقة المتجددة من الحبوب للحفاظ على مستوى المعيشة وتجنب الاعتماد على النفط.",
            "fr": "« Oui » est correct. Stefanie soutient la bioénergie, jugeant nécessaire d'accepter l'énergie issue des céréales pour maintenir notre niveau de vie."
        },
        "whyIncorrect": {
            "de": "„Nein“ wäre falsch, da ihr Schlusswort eindeutig befürwortend ist („müssen wir akzeptieren“).",
            "ar": "اختيار 'لا' خاطئ لأنها تختم بضرورة قبول هذا الخيار البديل.",
            "fr": "« Non » est erroné car sa conclusion est explicitement favorable."
        }
    },
    "21": {
        "quote": "Es kann uns nicht egal sein, dass die Menschen in Honduras hungern, nur damit wir in Europa oder in Amerika genügend Energie zur Verfügung haben!",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Carlos ist strikt gegen Bio-Energie aus Getreide, da dadurch Lebensmittelpreise in Lateinamerika steigen und Menschen hungern.",
            "ar": "'لا' صحيح. يرفض كارلوس إنتاج الطاقة من الحبوب لما يسببه ذلك من غلاء أسعار الذرة والمجاعة في أمريكا اللاتينية.",
            "fr": "« Non » est correct. Carlos s'oppose fermement aux biocarburants qui affament les populations d'Amérique latine en faisant flamber le prix du maïs."
        },
        "whyIncorrect": {
            "de": "„Ja“ ist falsch, da Carlos die Umwandlung von Nahrung in Treibstoff scharf verurteilt.",
            "ar": "اختيار 'نعم' خاطئ لأنه يدين استخدام المحاصيل الغذائية لإنتاج الطاقة.",
            "fr": "« Oui » est faux car il dénonce l'injustice alimentaire mondiale."
        }
    },
    "22": {
        "quote": "Jedenfalls meine ich, dass die Industrie-Länder ganz schnell damit aufhören müssen, Energie aus Lebensmitteln herzustellen!",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Robin fordert, dass Industrieländer sofort aufhören, Energie aus Lebensmitteln zu gewinnen, und stattdessen auf Elektroautos und Forschung setzen.",
            "ar": "'لا' صحيح. يعارض روبن ذلك ويطالب الدول الصناعية بالتوقف فورًا عن تصنيع الطاقة من الأغذية والبحث عن حلول بديلة.",
            "fr": "« Non » est correct. Robin exige l'arrêt immédiat de la production d'énergie à partir d'aliments."
        },
        "whyIncorrect": {
            "de": "„Ja“ ist falsch: Seine Forderung („ganz schnell aufhören“) ist eine unmissverständliche Ablehnung.",
            "ar": "اختيار 'نعم' غير صحيح لأن عبارته صريحة في الرفض والمطالبة بالتوقف السريع.",
            "fr": "« Oui » contredit son appel explicite à cesser cette pratique."
        }
    },
    "23": {
        "quote": "Ich finde das furchtbar! Denn schon heute ist es unmöglich, alle Menschen ausreichend mit Nahrung und Trinkwasser zu versorgen",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Michaela findet es schrecklich („furchtbar“), Landflächen für Energiegetreide zu nutzen, während Millionen Menschen hungern.",
            "ar": "'لا' صحيح. ترفض ميكايلا ذلك بشدة وتصفه بالمروع لأن توفير الغذاء والماء للبشر يجب أن تكون له الأولوية القصوى.",
            "fr": "« Non » est correct. Michaela juge « terrible » d'accaparer des terres agricoles pour l'énergie au détriment de l'alimentation humaine."
        },
        "whyIncorrect": {
            "de": "„Ja“ widerspricht ihrer eindeutig ablehnenden Haltung.",
            "ar": "'نعم' يتعارض تمامًا مع موقفها الرافض والغاضب.",
            "fr": "« Oui » est erroné car son jugement est négatif sans équivoque."
        }
    },
    "24": {
        "quote": "Dazu gehört auch die Gewinnung von Energie aus Getreide. Ob wir das schön finden oder nicht, wir haben im Moment keine andere Wahl.",
        "whyCorrect": {
            "de": "„Ja“ ist richtig. Julia sieht im Moment keine Alternative („keine andere Wahl“) und befürwortet daher pragmatisch die Getreideenergie.",
            "ar": "'نعم' صحيح. ترى يوليا ببراغماتية أنه لا خيار آخر حاليًا لمواجهة أزمة الطاقة سوى اللجوء لطاقة الحبوب.",
            "fr": "« Oui » est correct. Julia adopte une position réaliste : même si la situation est difficile, nous n'avons pas d'autre choix actuellement."
        },
        "whyIncorrect": {
            "de": "„Nein“ wäre unpassend: Julia akzeptiert die Notwendigkeit ausdrücklich.",
            "ar": "اختيار 'لا' خاطئ لأنها تقر بضرورة استخدامها بحكم عدم وجود بديل.",
            "fr": "« Non » est faux car elle soutient l'utilisation indispensable de ces ressources."
        }
    },
    "25": {
        "quote": "Es gibt im Moment keine andere Lösung, deshalb müssen wir auf diesem Wege weitergehen.",
        "whyCorrect": {
            "de": "„Ja“ ist richtig. Antonia betont, dass wir unseren Komfort nicht verlieren wollen und auf diesem Weg weitermachen müssen, da es keine andere Lösung gibt.",
            "ar": "'نعم' صحيح. تؤكد أنطونيا ضرورة الاستمرار في هذا المسار لعدم وجود حل آخر في الوقت الحالي.",
            "fr": "« Oui » est correct. Antonia affirme qu'il n'y a pas d'autre solution à court terme et qu'il faut persévérer dans cette voie."
        },
        "whyIncorrect": {
            "de": "„Nein“ ist falsch: Ihr Fazit plädiert klar für die Fortsetzung der Energieproduktion.",
            "ar": "اختيار 'لا' خاطئ لأن خاتمتها تدعو للمضي قدمًا في استخدام طاقة الحبوب.",
            "fr": "« Non » contredit sa conclusion appelant à poursuivre."
        }
    },
    "26": {
        "quote": "Wir sollten ehrlich zugeben, dass wir Energie aus Getreide machen, weil wir die Energie brauchen. ... Wir müssen mit dem leben, was heute möglich ist.",
        "whyCorrect": {
            "de": "„Ja“ ist richtig. Andreas verteidigt die Nutzung von Bio-Energie und fordert Ehrlichkeit: Wir brauchen diese Energie heute und müssen sie nutzen.",
            "ar": "'نعم' صحيح. يدافع أندرياس عن الطاقة الحيوية مؤكدًا حاجتنا الحالية الماسة إليها والتعامل بواقعية مع المتاح.",
            "fr": "« Oui » est correct. Andreas défend l'exploitation de cette énergie dont nous avons besoin immédiatement."
        },
        "whyIncorrect": {
            "de": "„Nein“ ist unzutreffend: Andreas verurteilt das Klagen über den Hunger als Heuchelei und befürwortet die Bio-Energie.",
            "ar": "اختيار 'لا' غير سليم لأنه يعتبر الاعتراض نفاقًا ويؤيد استغلال الحبوب للطاقة.",
            "fr": "« Non » est inexact car il assume pleinement la nécessité énergétique."
        }
    },
    "27": {
        "quote": "Reisende mit deutscher Anschrift können auch in der Jugendherberge die Mitgliedskarte erwerben. Ausländische Gäste ohne Mitgliedskarte können in der Jugendherberge eine „Internationale Gastkarte“ erwerben.",
        "whyCorrect": {
            "de": "Option c ist richtig. Man muss Mitglied sein, kann die Mitgliedskarte bzw. internationale Gastkarte aber bequem direkt bei der Ankunft in der Herberge kaufen.",
            "ar": "الخيار (c) صحيح. يمكن شراء بطاقة العضوية أو بطاقة الضيف الدولية في بيت الشباب عند الوصول مباشرة دون الحاجة لاشتراك مسبق.",
            "fr": "L'option c est correcte. Les clients peuvent adhérer à l'association ou acheter une carte d'hôte directement sur place à leur arrivée."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (Voranmeldung wird nur empfohlen, ist aber keine strikte Pflicht). Option b ist falsch (es gibt Mehrbettzimmer, keine reinen Einzelzimmer).",
            "ar": "الخيار (a) خاطئ فالحجز المسبق مستحسن لكنه غير إلزامي. والخيار (b) خاطئ فالغرف مشتركة لعدة أسرّة وليست فردية.",
            "fr": "L'option a est fausse (la réservation est recommandée, non obligatoire). L'option b est fausse car ce sont des dortoirs partagés."
        }
    },
    "28": {
        "quote": "Zum Essen können erwachsene Gäste Bier und Wein bestellen (kostenpflichtig). Der Konsum von mitgebrachten alkoholischen Getränken ist in der Jugendherberge nicht erlaubt.",
        "whyCorrect": {
            "de": "Option b ist richtig. Volljährige Gäste können zu den Mahlzeiten Bier und Wein käuflich erwerben.",
            "ar": "الخيار (b) صحيح. يستطيع النزلاء البالغون شراء وطلب البيرة والنبيذ مع وجبات الطعام في بيت الشباب.",
            "fr": "L'option b est correcte. Les adultes peuvent acheter de la bière et du vin au cours des repas dans l'établissement."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (Alkohol ist nicht komplett verboten, sondern darf beim Essen gekauft werden). Option c ist falsch, weil er gerade zum Essen erlaubt ist.",
            "ar": "الخيار (a) خاطئ فالكحول ليس ممنوعًا بالكامل. والخيار (c) خاطئ لأنه مسموح به تحديدًا مع وجبات الطعام.",
            "fr": "L'option a est inexacte car la vente aux repas est autorisée. L'option c contredit directement la règle."
        }
    },
    "29": {
        "quote": "Verschließbare Schrankfächer stehen gegen eine Gebühr zur Verfügung.",
        "whyCorrect": {
            "de": "Option b ist richtig. Für Wertsachen und Gepäck stehen abschließbare Fächer gegen Entrichtung einer Gebühr bereit.",
            "ar": "الخيار (b) صحيح. تتوفر خزائن مقفلة لحفظ الحقائب والأمتعة مقابل دفع رسوم معينة.",
            "fr": "L'option b est correcte. Des casiers sécurisés peuvent être fermés à clé moyennant paiement d'une redevance."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (an der Rezeption werden Wertsachen abgegeben, nicht das gesamte Gepäck im Sekretariat). Option c ist falsch, Gepäck darf natürlich in den Zimmern bleiben (auf eigenes Risiko).",
            "ar": "الخيار (a) خاطئ فالأمانات النقدية توضع في الاستقبال وليس كامل الحقائب. والخيار (c) خاطئ فالأمتعة تُترك في الغرف على مسؤولية صاحبها.",
            "fr": "L'option a est fausse. L'option c est erronée car les bagages peuvent rester dans les chambres."
        }
    },
    "30": {
        "quote": "Wir bitten Sie während Ihres Aufenthaltes um Mithilfe. Dazu gehört z. B., dass Sie die Räume und Gegenstände in Ordnung halten, beim Tischdienst helfen, Abfall getrennt sammeln",
        "whyCorrect": {
            "de": "Option a ist richtig. Unter der Bitte um „Tischdienst“ wird erwartet, dass Gäste beim Decken, Holen und Abräumen des Essgeschirrs mit anpacken.",
            "ar": "الخيار (a) صحيح. تتضمن المساعدة و'خدمة المائدة' (Tischdienst) قيام النزلاء بإحضار وترتيب وإعادة أواني الطعام بأنفسهم.",
            "fr": "L'option a est correcte. Le service de table (« Tischdienst ») demande aux résidents de participer à la gestion et au débarrassage de leur vaisselle."
        },
        "whyIncorrect": {
            "de": "Option b ist falsch (Abfall soll getrennt gesammelt werden, kein Hinaustragen verlangt). Option c ist falsch (7 Uhr ist das Ende der Nachtruhe, keine Aufstehpflicht).",
            "ar": "الخيار (b) خاطئ فالمطلوب فرز النفايات فقط. والخيار (c) خاطئ فالساعة 7:00 هي نهاية ساعات الهدوء الليلي وليست موعد استيقاظ إجباري.",
            "fr": "L'option b est imprécise. L'option c est fausse (7h correspond à la fin du silence nocturne, non à un réveil forcé)."
        }
    },
    /* ---------------- MODELLSATZ 2: HÖREN (Aufgaben h1 - h30) ---------------- */
    "h1": {
      "quote": "Hallo Mareike, ich bin's Steffen. Du, ich sitze hier an den Mathe-Hausaufgaben und verstehe Aufgabe 4 überhaupt nicht. Kannst du mir deine Notizen geben?",
      "whyCorrect": {
            "de": "Richtig. Steffen ruft Mareike an, weil er Hilfe und ihre Notizen für die Mathe-Hausaufgaben braucht.",
            "ar": "صحيح. يتصل شتيفن بمارايكه لأنه يحتاج إلى مساعدتها وملاحظاتها لحل واجب الرياضيات.",
            "fr": "Vrai. Steffen appelle Mareike car il a besoin de son aide et de ses notes pour ses devoirs de mathématiques."
      },
      "whyIncorrect": {
            "de": "Falsch trifft nicht zu: Steffen formuliert am Telefon eine konkrete Bitte um Unterstützung.",
            "ar": "الخيار 'خطأ' غير صحيح لأن شتيفن يطلب صراحة المساعدة.",
            "fr": "L'affirmation n'est pas fausse car il formule clairement une demande d'aide."
      }
},
    "h2": {
      "quote": "Ruf mich bitte zurück, sobald du nach Hause kommst.",
      "whyCorrect": {
            "de": "Option c ist richtig. Steffen bittet Mareike ausdrücklich darum, ihn nach ihrer Rückkehr anzurufen.",
            "ar": "الخيار (c) هو الصحيح. يطلب شتيفن من مارايكه أن تعاود الاتصال به فور عودتها للمنزل.",
            "fr": "L'option c est correcte. Steffen demande expressément à Mareike de le rappeler."
      },
      "whyIncorrect": {
            "de": "Optionen a und b sind falsch: Er erwartet keinen sofortigen Besuch und fordert sie nicht zum Warten auf.",
            "ar": "الخياران (a) و (b) غير صحيحين، فلم يطلب منها القدوم فوراً أو الانتظار.",
            "fr": "Les options a et b sont incorrectes car il ne lui demande ni de venir ni d'attendre."
      }
},
    "h3": {
      "quote": "Liebe Fluggäste. In wenigen Minuten werden wir in München auf dem Flughafen Franz Josef Strauß landen.",
      "whyCorrect": {
            "de": "Falsch. Die Durchsage erfolgt kurz vor der Landung des Flugzeugs, nicht vor dem Abflug.",
            "ar": "خطأ. الإعلان موجه لركاب الطائرة قبل الهبوط في المطار وليس قبل الإقلاع.",
            "fr": "Faux. L'annonce est faite avant l'atterrissage à Munich, et non avant le décollage."
      },
      "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da es sich um eine Landedurchsage während des Fluges handelt.",
            "ar": "اختيار 'صحيح' غير دقيق لأن الطائرة على وشك الهبوط.",
            "fr": "Choisir 'Vrai' est erroné car l'avion est sur le point d'atterrir."
      }
},
    "h4": {
      "quote": "Transitreisende mit dem Ziel Hamburg, gebucht auf LH 4293, begeben sich bitte unverzüglich zum Ausgang H 7.",
      "whyCorrect": {
            "de": "Option c ist richtig. Die Fluggäste nach Hamburg werden zum Flugsteig/Ausgang H7 gebeten.",
            "ar": "الخيار (c) هو الصحيح. يُطلب من المسافرين إلى هامبورغ التوجه إلى البوابة H7.",
            "fr": "L'option c est correcte. Les passagers pour Hambourg sont invités à se rendre à la porte H7."
      },
      "whyIncorrect": {
            "de": "Option b nennt G17 (für Frankfurt), Option a ist nur für sonstige Weiterflüge.",
            "ar": "الخيار (b) يخص رحلة فرانكفورت (G17)، والخيار (a) يخص الرحلات الأخرى فقط.",
            "fr": "L'option b concerne Francfort (G17) et l'option a s'adresse aux autres correspondances."
      }
},
    "h5": {
      "quote": "Hallo Jens! Hier ist Mama. ... ist mir nämlich eingefallen, dass ich vergessen habe, deine Sportklamotten zu waschen.",
      "whyCorrect": {
            "de": "Falsch. Es ist eine persönliche Telefonnachricht der Mutter an ihren Sohn Jens, keine Radiosendung.",
            "ar": "خطأ. الرسالة هي اتصال هاتفي شخصي من الأم لابنها ينس وليست برنامجاً إذاعياً.",
            "fr": "Faux. Il s'agit d'un message téléphonique personnel de la mère à son fils Jens, pas d'une émission de radio."
      },
      "whyIncorrect": {
            "de": "Richtig ist unpassend: Die Mutter spricht auf den Anrufbeantworter zu Hause.",
            "ar": "الخيار 'صحيح' غير مطابق لطبيعة الرسالة الصوتية الشخصية.",
            "fr": "L'option 'Vrai' est incorrecte car il s'agit d'un répondeur privé."
      }
},
    "h6": {
      "quote": "Du tust einen Messbecher Waschpulver in den kleinen Behälter oben links, und zwar in den Behälter Nummer zwei.",
      "whyCorrect": {
            "de": "Option c ist richtig. Das Waschpulver soll oben links in das Fach Nummer zwei gefüllt werden.",
            "ar": "الخيار (c) هو الصحيح. يوضع مسحوق الغسيل في الحجرة الصغيرة في الأعلى إلى اليسار.",
            "fr": "L'option c est correcte. La lessive en poudre doit être versée dans le compartiment en haut à gauche."
      },
      "whyIncorrect": {
            "de": "Option a ist falsch (die Kleidung ist drin, nicht das Pulver); b (60 Minuten) ist die Programmdauer.",
            "ar": "الخيار (a) غير صحيح فالملابس هي الموجودة بالداخل، و(b) تشير إلى مدة دورة الغسيل.",
            "fr": "L'option a est fausse (ce sont les vêtements qui s'y trouvent) et b indique la durée du programme."
      }
},
    "h7": {
      "quote": "Hallo, liebe Hip-Hop-Freunde. Ich begrüße euch alle wieder ganz herzlich zu unserer Musiksendung „Coole Hits und Neues aus der Szene“...",
      "whyCorrect": {
            "de": "Richtig. Die Radiosendung begrüßt ausdrücklich alle jugendlichen Fans der Hip-Hop-Musik.",
            "ar": "صحيح. ترحب المذيعة صراحة بمحبي موسيقى الهيب هوب وتخاطب جمهورها الشاب.",
            "fr": "Vrai. L'émission radio s'adresse explicitement aux amateurs de hip-hop."
      },
      "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da der Moderator die Hörer direkt als „Hip-Hop-Freunde“ anspricht.",
            "ar": "الخيار 'خطأ' غير سليم لأن مقدم البرنامج بدأ حديثه بتحية عشاق الهيب هوب.",
            "fr": "L'affirmation n'est pas fausse car l'animateur salue les fans de hip-hop."
      }
},
    "h8": {
      "quote": "Außerdem könnt ihr wie immer Konzertkarten gewinnen, wenn ihr bei unserem Fragespiel mitmacht.",
      "whyCorrect": {
            "de": "Option b ist richtig. Als Gewinn beim Quiz werden Eintrittskarten für ein Konzert verlost.",
            "ar": "الخيار (b) هو الصحيح. يمكن للمستمعين الفوز بتذاكر لحضور حفل موسيقي عبر المسابقة.",
            "fr": "L'option b est correcte. Les auditeurs peuvent remporter des billets pour un concert."
      },
      "whyIncorrect": {
            "de": "Option a und c sind falsch: Europareisen oder Songs gibt es nicht als Hauptgewinn.",
            "ar": "الخياران (a) و (c) خاطئان؛ الجائزة هي تذاكر الحفلات وليست رحلات أو أغانٍ.",
            "fr": "Les options a et c sont fausses car le prix en jeu est une place de concert."
      }
},
    "h9": {
      "quote": "Verehrte Fahrgäste. In wenigen Minuten erreichen wir Fulda. Fulda Hauptbahnhof.",
      "whyCorrect": {
            "de": "Richtig. Die Durchsage wendet sich an die Passagiere im fahrenden Zug vor Erreichen des Bahnhofs.",
            "ar": "صحيح. الإعلان موجه لركاب القطار لإعلامهم بالوصول القريب إلى محطة فولدا الرئيسية.",
            "fr": "Vrai. L'annonce est adressée aux voyageurs à bord du train avant l'arrivée en gare."
      },
      "whyIncorrect": {
            "de": "Falsch trifft nicht zu: Die Ansage beginnt mit „Verehrte Fahrgäste“ im Zug.",
            "ar": "الخيار 'خطأ' غير صحيح لأن الحديث موجه مباشرة للمسافرين بالقطار.",
            "fr": "L'affirmation n'est pas fausse car il s'agit d'une annonce ferroviaire."
      }
},
    "h10": {
      "quote": "ICE 5445 nach Berlin Gesundbrunnen um 16:07 ... Dieser Zug wird voraussichtlich 15 Minuten später eintreffen.",
      "whyCorrect": {
            "de": "Option b ist richtig. In Fulda besteht eine Umsteigemöglichkeit in den Zug in Richtung Berlin.",
            "ar": "الخيار (b) هو الصحيح. يمكن في فولدا التبديل إلى قطار ICE المتجه إلى برلين.",
            "fr": "L'option b est correcte. Les voyageurs peuvent prendre une correspondance pour Berlin."
      },
      "whyIncorrect": {
            "de": "Option a ist falsch (kein Endbahnhof); Option c ist falsch (nicht der aktuelle Zug hat Verspätung, sondern der Anschlusszug).",
            "ar": "الخيار (a) خاطئ فالمحطة ليست نهاية الخط، و(c) غير دقيق لأن التأخير خاص بالقطار البديل المتجه لبرلين.",
            "fr": "L'option a est fausse et c attribue le retard au mauvais train."
      }
},
    "h11": {
      "quote": "Verstehen Sie alle Deutsch? Gut, dann kann ich ja auf Deutsch fortfahren.",
      "whyCorrect": {
            "de": "Option c ist richtig. Die Museumsführerin Frau Wertmüller fragt die Gruppe und spricht Deutsch mit ihr.",
            "ar": "الخيار (c) هو الصحيح. المرشدة السيدة فيرتمولر تتحدث باللغة الألمانية مع المجموعة.",
            "fr": "L'option c est correcte. La guide Mme Wertmüller s'exprime en allemand."
      },
      "whyIncorrect": {
            "de": "Option a und b widersprechen dem Text, da sie fließend auf Deutsch führt.",
            "ar": "الخياران (a) و (b) يتعارضان مع النص حيث تقود الجولة بالألمانية بطلاقة.",
            "fr": "Les options a et b contredisent ses propos."
      }
},
    "h12": {
      "quote": "Wir befinden uns jetzt im zentralen Eingangsbereich und beginnen unsere Führung hier vorn in der Haupthalle...",
      "whyCorrect": {
            "de": "Option a ist richtig. Die Führung durch die Kunsthalle startet in der großen Haupthalle.",
            "ar": "الخيار (a) هو الصحيح. تنطلق الجولة الإرشادية من القاعة الرئيسية (Haupthalle).",
            "fr": "L'option a est correcte. La visite guidée commence dans le hall principal."
      },
      "whyIncorrect": {
            "de": "Option b und c sind falsch, da moderne Kunst erst am Ende der Führung gezeigt wird.",
            "ar": "الخياران (b) و (c) غير صحيحين، فالفن الحديث والمعاصر مخصص لنهاية الجولة.",
            "fr": "Les options b et c sont fausses car l'art contemporain n'est abordé qu'à la fin."
      }
},
    "h13": {
      "quote": "Zum Abschluss der Führung möchte ich Ihnen aber auch noch einige bedeutende Kunstwerke aus der Gegenwart zeigen.",
      "whyCorrect": {
            "de": "Option b ist richtig. Zum Ende des Rundgangs werden bedeutende Werke der modernen Gegenwartskunst besichtigt.",
            "ar": "الخيار (b) هو الصحيح. في ختام الجولة، سيشاهد الطلاب أعمالاً من الفن الحديث والمعاصر.",
            "fr": "L'option b est correcte. La visite se termine par la découverte d'œuvres d'art contemporain."
      },
      "whyIncorrect": {
            "de": "Option a ist falsch (klassische Kunst kommt am Anfang); Option c (Kunstwerke der Natur) wird nicht erwähnt.",
            "ar": "الخيار (a) غير صحيح لأن الفن الكلاسيكي يبدأ في البداية، والخيار (c) لم يرد في النص.",
            "fr": "L'option a est inversée et l'option c invente des éléments absents du texte."
      }
},
    "h14": {
      "quote": "Danach haben Sie noch eine gute Stunde Zeit, allein durch die Kunsthalle zu gehen oder einfach im Café „Falanx“ bei einer Tasse Kaffee oder einem Bier zu entspannen.",
      "whyCorrect": {
            "de": "Option a ist richtig. Nach der Führung können die Teilnehmer im museumseigenen Café einen Kaffee trinken.",
            "ar": "الخيار (a) هو الصحيح. يمكن للمشاركين بعد الجولة أخذ استراحة وتناول القهوة في مقهى المتحف.",
            "fr": "L'option a est correcte. Les visiteurs peuvent aller boire un café après la visite."
      },
      "whyIncorrect": {
            "de": "Option b und c sind falsch: Sie dürfen allein im Museum bleiben und müssen keineswegs sofort gehen.",
            "ar": "الخياران (b) و (c) خاطئان؛ إذ يُسمح لهم بالبقاء بمفردهم واستكشاف المعرض.",
            "fr": "Les options b et c sont réfutées car les participants ont le droit de rester seuls."
      }
},
    "h15": {
      "quote": "Ach, geben Sie doch bitte vorher noch Ihre Mäntel und Taschen an der Garderobe ab.",
      "whyCorrect": {
            "de": "Option c ist richtig. Mäntel und Taschen müssen vor Beginn an der Garderobe abgegeben werden.",
            "ar": "الخيار (c) هو الصحيح. يجب إيداع المعاطف والحقائب في خزانة الملابس (Garderobe).",
            "fr": "L'option c est correcte. Les manteaux et sacs doivent être déposés au vestiaire."
      },
      "whyIncorrect": {
            "de": "Option a ist falsch (Mitnahme verboten); Option b ist falsch (Frau Wertmüller nimmt sie nicht persönlich).",
            "ar": "الخيار (a) خاطئ، والخيار (b) خاطئ فالمرشدة لا تأخذها بنفسها بل توضع في الخزانة.",
            "fr": "L'option a est fausse et l'option b invente que la guide s'en occupe personnellement."
      }
},
    "h16": {
      "quote": "Kai: Hallo Pia, ja gern. Ich hab einen Riesenhunger. ... Mir ist ganz schlecht vor Hunger.",
      "whyCorrect": {
            "de": "Falsch. Kai hat großen Hunger („Riesenhunger“) und freut sich auf das Essen.",
            "ar": "خطأ. كاي جائع جداً ('Riesenhunger') ويشعر بالتعب من شدة الجوع.",
            "fr": "Faux. Kai a très faim et a hâte d'aller manger."
      },
      "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da Kai ausdrücklich von seinem großen Hunger spricht.",
            "ar": "الخيار 'صحيح' مناقض لكلام كاي الصريح عن شدة جوعه.",
            "fr": "L'affirmation 'Vrai' est contraire aux propos de Kai."
      }
},
    "h17": {
      "quote": "Warst du nicht da? Pia: Doch, doch, aber ich war mal wieder viel zu spät...",
      "whyCorrect": {
            "de": "Falsch. Pia kam zu spät zum Seminar, Kai hingegen war pünktlich anwesend.",
            "ar": "خطأ. بيا هي التي تأخرت عن الندوة الدراسية وليس كاي.",
            "fr": "Faux. C'est Pia qui est arrivée en retard au séminaire, pas Kai."
      },
      "whyIncorrect": {
            "de": "Richtig ist eine Verwechslung der beiden Personen.",
            "ar": "الخيار 'صحيح' خلط بين الشخصين؛ فبيا هي من اعترفت بالتأخر.",
            "fr": "Attribuer le retard à Kai est une confusion entre les personnages."
      }
},
    "h18": {
      "quote": "Pia: Chemie hat mir zwar in der Schule Spaß gemacht, aber jetzt ist das ganz anders. ... Ich glaube, ich sollte doch das Studienfach wechseln.",
      "whyCorrect": {
            "de": "Falsch. Pia ist frustriert über die schweren Formeln und denkt über einen Fachwechsel nach; sie studiert Chemie nicht gern.",
            "ar": "خطأ. بيا لا تحب دراسة الكيمياء في الجامعة وتفكر في تغيير تخصصها الدراسي.",
            "fr": "Faux. Pia est découragée par la chimie universitaire et envisage de changer de filière."
      },
      "whyIncorrect": {
            "de": "Richtig widerspricht ihren Worten („verliere die Lust“, „mir wird ganz schlecht“).",
            "ar": "الخيار 'صحيح' يتعارض تماماً مع معاناتها ورغبتها في ترك التخصص.",
            "fr": "L'affirmation est fausse compte tenu de son profond découragement."
      }
},
    "h19": {
      "quote": "Kai: Wir können doch wieder zusammen lernen, dann geht es sicher wieder besser. Ich find das alles gar nicht so schwierig.",
      "whyCorrect": {
            "de": "Richtig. Kai bietet Pia an, gemeinsam den Lernstoff durchzugehen und ihr zu helfen.",
            "ar": "صحيح. يعرض كاي على بيا أن يدرسا معاً ويقدم لها المساعدة في فهم المواد.",
            "fr": "Vrai. Kai propose à Pia de réviser ensemble pour l'aider à surmonter ses difficultés."
      },
      "whyIncorrect": {
            "de": "Falsch ist nicht korrekt: Kai schlägt ausdrücklich gegenseitiges Lernen vor.",
            "ar": "الخيار 'خطأ' غير صحيح؛ فكاي اقترح المساعدة بوضوح.",
            "fr": "Choisir 'Faux' ne convient pas car la proposition d'aide est explicite."
      }
},
    "h20": {
      "quote": "Kai: Ich denke, dass du einfach zu oft in der Kneipe arbeitest, und dass du deshalb immer total müde bist.",
      "whyCorrect": {
            "de": "Richtig. Kai meint, Pia sollte wegen der Erschöpfung weniger in der Gaststätte arbeiten.",
            "ar": "صحيح. يرى كاي أن بيا ترهق نفسها بالعمل في الحانة لساعات متأخرة ويجب أن تقلل منه.",
            "fr": "Vrai. Kai estime que Pia passe trop de temps à travailler au bar et manque de sommeil."
      },
      "whyIncorrect": {
            "de": "Falsch ist unpassend, da Kai die Nachtarbeit in der Kneipe als Hauptproblem identifiziert.",
            "ar": "الخيار 'خطأ' غير سليم لأن كاي انتقد بوضوح كثرة ساعات عملها الليلي.",
            "fr": "L'option 'Faux' est erronée car il lui conseille de modérer ses heures de travail."
      }
},
    "h21": {
      "quote": "Pia: ...aber mein Zimmer in der Wohngemeinschaft kostet 450 Euro und das Geld muss ich mir schon verdienen, von meinen Eltern krieg ich doch nichts.",
      "whyCorrect": {
            "de": "Richtig. Pia muss Miete und Lebensunterhalt allein finanzieren und ist auf das Geld angewiesen.",
            "ar": "صحيح. تحتاج بيا للمال بشكل عاجل لدفع إيجار غرفتها البالغ 450 يورو دون مساعدة والديها.",
            "fr": "Vrai. Pia a un besoin urgent de ses revenus pour payer les 450 € de loyer de sa colocation."
      },
      "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend: Ihre finanzielle Notwendigkeit wird klar begründet.",
            "ar": "الخيار 'خطأ' لا يطابق توضيحها لحاجتها الملحة لتغطية نفقاتها.",
            "fr": "L'affirmation est vraie car son autonomie financière est indispensable."
      }
},
    "h22": {
      "quote": "Kai: Du brauchst halt einen Job in den Semesterferien. Wir finden da schon eine Lösung. Das wird schon.",
      "whyCorrect": {
            "de": "Falsch. Kai bietet Pia keinen Job an, sondern gibt ihr lediglich den Rat, in den Ferien zu jobben.",
            "ar": "خطأ. كاي لم يقدم لها وظيفة، بل نصحها بالبحث عن عمل أثناء العطلة الجامعية.",
            "fr": "Faux. Kai ne lui propose pas d'emploi direct, il lui suggère simplement de travailler pendant les vacances."
      },
      "whyIncorrect": {
            "de": "Richtig trifft nicht zu: Kai hat keine konkrete Arbeitsstelle für sie.",
            "ar": "الخيار 'صحيح' غير دقيق لأنه لم يوفر لها فرصة عمل محددة.",
            "fr": "L'affirmation est fausse car il ne dispose pas d'un travail à lui offrir."
      }
},
    "h23": {
      "quote": "Friedenthal: Mit der Kleidung zeigt man, dass man zu einer bestimmten Gruppe gehört.",
      "whyCorrect": {
            "de": "b (Friedenthal). Professor Friedenthal betont, dass Kleidung als Gruppensymbol und Zeichen der Zugehörigkeit dient.",
            "ar": "(b) البروفيسور فريدنتال. يؤكد أن الملابس تمثل رمزاً للانتماء إلى مجموعة معينة بين الشباب.",
            "fr": "b (Friedenthal). Le professeur souligne que le vêtement sert d'emblème d'appartenance à un groupe."
      },
      "whyIncorrect": {
            "de": "Weder die Moderatorin (a) noch Frau Nielsen (c) stellen diese soziologische These auf.",
            "ar": "لم يصدر هذا الرأي التحليلي عن المذيعة ولا عن السيدة نيلسن.",
            "fr": "Cette analyse n'est formulée ni par l'animatrice ni par Mme Nielsen."
      }
},
    "h24": {
      "quote": "Friedenthal: Bestimmte Marken sind heute „in“ und morgen schon wieder „out“. Wenn man wirklich zu den coolen Leuten gehören will, muss man das wissen.",
      "whyCorrect": {
            "de": "b (Friedenthal). Professor Friedenthal erklärt den schnellen Wechsel der Modemarken und Trends.",
            "ar": "(b) البروفيسور فريدنتال. يشير إلى السرعة الكبيرة التي تتغير بها الموضة والعلامات التجارية الرائجة.",
            "fr": "b (Friedenthal). Il explique que les tendances et les marques changent à un rythme très soutenu."
      },
      "whyIncorrect": {
            "de": "a und c äußern sich nicht über die Schnelllebigkeit der Modetrends.",
            "ar": "المتحدثان الآخران لم يشيرا إلى سرعة تبدل صيحات الموضة.",
            "fr": "Les autres intervenants ne traitent pas de la rapidité du cycle de la mode."
      }
},
    "h25": {
      "quote": "Frau Nielsen: Die meisten Jugendlichen haben gar nicht genug Geld, um teure Markenkleidung zu kaufen.",
      "whyCorrect": {
            "de": "c (Nielsen). Frau Nielsen widerspricht und betont, dass vielen 16-Jährigen das Geld für Markensachen schlicht fehlt.",
            "ar": "(c) السيدة نيلسن. توضح كمعلمة وأم أن غالبية المراهقين لا يملكون المال الكافي للملابس ذات الماركات الغالية.",
            "fr": "c (Nielsen). En tant qu'enseignante et mère, elle souligne que la majorité des jeunes n'a pas les moyens d'acheter des marques."
      },
      "whyIncorrect": {
            "de": "Friedenthal und die Moderatorin teilen diesen Einwand aus dem Alltag nicht.",
            "ar": "فريدنتال والمذيعة لم يذكرا هذا القيد المالي الواقعي.",
            "fr": "Ni le professeur ni la présentatrice ne font ce constat économique."
      }
},
    "h26": {
      "quote": "Frau Nielsen: Nach unseren Untersuchungen bekommen die Schülerinnen und Schüler im Durchschnitt etwa 30 Euro pro Woche und müssen davon auch alle Ausgaben für die Schule bezahlen... Das Geld reicht doch höchstens noch für einen Kinobesuch.",
      "whyCorrect": {
            "de": "c (Nielsen). Frau Nielsen führt an, dass das reale Taschengeld viel knapper ist als vermutet.",
            "ar": "(c) السيدة نيلسن. تبين أن مصروف الجيب لدى الطلاب ليس كبيراً كما يظن الكثيرون ويكاد يكفي متطلباتهم.",
            "fr": "c (Nielsen). Elle précise que l'argent de poche des adolescents est bien plus modeste qu'on ne l'imagine."
      },
      "whyIncorrect": {
            "de": "Friedenthal behauptet eher, dass Jugendliche viel Geld für Handys und Apps ausgeben.",
            "ar": "فريدنتال على العكس من ذلك ركز على المبالغ الكبيرة المصروفة على الهواتف والتطبيقات.",
            "fr": "Friedenthal met plutôt l'accent sur les dépenses excessives en téléphonie."
      }
},
    "h27": {
      "quote": "Friedenthal: Für viele Eltern sind die Handygebühren ihrer Kinder der reinste Albtraum.",
      "whyCorrect": {
            "de": "b (Friedenthal). Er thematisiert die Sorgen und Ängste der Eltern bezüglich teurer Handyrechnungen und ständigen Telefonierens.",
            "ar": "(b) البروفيسور فريدنتال. يتحدث عن قلق الآباء الشديد وكوابيسهم من فواتير واستخدام الهواتف الذكية.",
            "fr": "b (Friedenthal). Il aborde l'angoisse des parents face aux factures de téléphone et à l'usage continu des mobiles."
      },
      "whyIncorrect": {
            "de": "Frau Nielsen und die Moderatorin formulieren diese Klage über Handygebühren nicht.",
            "ar": "لم تتطرق السيدة نيلسن أو المذيعة إلى هذا الكابوس المتعلق بفواتير الهواتف.",
            "fr": "Cette remarque sur le coût du téléphone n'émane ni de Mme Nielsen ni de l'animatrice."
      }
},
    "h28": {
      "quote": "Friedenthal: Im Grunde geht es gar nicht darum, wie viel Geld die jungen Leute tatsächlich ausgeben, sondern es geht um die Tatsache, dass sie sich über den Konsum definieren. Nur wer die richtigen Apps ... hat, wird in der Gruppe akzeptiert.",
      "whyCorrect": {
            "de": "b (Friedenthal). Er analysiert die psychologische Bedeutung: Konsumgüter verleihen soziale Anerkennung und Akzeptanz.",
            "ar": "(b) البروفيسور فريدنتال. يحلل أن الاستهلاك يمنح الاعتراف الاجتماعي والقبول وسط أقرانهم.",
            "fr": "b (Friedenthal). Il formule l'idée sociologique que la consommation procure reconnaissance et intégration."
      },
      "whyIncorrect": {
            "de": "Die Definition von Anerkennung durch Konsum ist Friedenthals Kernaussage.",
            "ar": "ربط الاستهلاك بالحصول على التقدير هو جوهر طرح البروفيسور فريدنتال.",
            "fr": "Cette assimilation de la consommation à la reconnaissance sociale est le cœur de son analyse."
      }
},
    "h29": {
      "quote": "Frau Nielsen: Meine Söhne sind beide im kritischen Alter, 14 und 17 Jahre alt. Zu jedem Geburtstag wünschen sie sich ganz bestimmte Kleidungsstücke... Wir kaufen sie trotzdem, weil es das ist, was sie sich wünschen.",
      "whyCorrect": {
            "de": "c (Nielsen). Frau Nielsen erzählt aus eigener Erfahrung, dass Eltern den Wünschen der Kinder nachgeben und ihnen die gewünschte Kleidung kaufen.",
            "ar": "(c) السيدة نيلسن. تروي من واقع بيتها أن الآباء يشترون الملابس المحددة إرضاءً لرغبة أبنائهم وإعجابهم بها.",
            "fr": "c (Nielsen). Elle témoigne en tant que mère que les parents cèdent aux souhaits vestimentaires de leurs enfants."
      },
      "whyIncorrect": {
            "de": "Friedenthal hat keine eigenen Kinder in diesem Kontext geschildert.",
            "ar": "فريدنتال لم يقدم شهادة شخصية كأب في هذا السياق.",
            "fr": "Ce récit personnel d'achat familial n'appartient pas au professeur."
      }
},
    "h30": {
      "quote": "Moderatorin: Vielleicht sollten wir gerade zu diesem Thema auch einmal die Meinung der jungen Leute hören. ... In der nächsten Woche begrüßen wir zum selben Thema hier als Studiogäste einige Schülerinnen und Schüler...",
      "whyCorrect": {
            "de": "a (Moderatorin). Die Moderatorin resümiert die Sendung mit dem Vorschlag, beim nächsten Mal die Jugendlichen selbst einzuladen und anzuhören.",
            "ar": "(a) المذيعة. تختتم الحوار باقتراح استضافة التلاميذ والشباب أنفسهم في الحلقة القادمة لسماع رأيهم.",
            "fr": "a (Moderatorin). L'animatrice conclut en suggérant de donner directement la parole aux jeunes dans la prochaine émission."
      },
      "whyIncorrect": {
            "de": "Die Programmankündigung für die Folgewoche obliegt traditionell der Moderatorin der Sendung.",
            "ar": "إدارة الحوار وتوجيه الدعوة للحلقة القادمة دور منوط بالمذيعة حصراً.",
            "fr": "La conclusion et l'annonce de l'émission suivante relèvent du rôle de la présentatrice."
      }
}
  },
  "modellsatz-3": {
    "1": {
        "quote": "das Jugendhotel zu finden, von dem ich im Reiseführer gelesen hatte.",
        "whyCorrect": {
            "de": "Falsch. Marianne hat die Information über das Jugendhotel aus einem Reiseführer, nicht von einem persönlichen Freund.",
            "ar": "خطأ. قرأت ماريان عن فندق الشباب في دليل سياحي (Reiseführer) ولم يقترحه عليها صديق.",
            "fr": "Faux. Marianne a découvert l'hôtel dans un guide touristique et non par les conseils d'un ami."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht 'richtig', weil im Text ausdrücklich der Reiseführer als Quelle genannt wird.",
            "ar": "العبارة ليست 'صحيحة' لأن النص يحدد بوضوح أن المصدر كان كتاب الدليل السياحي.",
            "fr": "L'affirmation n'est pas 'vraie' car la source citée est explicitement un guide de voyage."
        }
    },
    "2": {
        "quote": "Sie heißen Phoebe und Anne und sind schon seit einer Woche hier. ... „Kennt ihr denn den Weg?“ habe ich gefragt, „wart ihr da schon mal?“ Nein, das waren sie nicht, aber sie hätten eine Karte, sagten sie.",
        "whyCorrect": {
            "de": "Falsch. Die Studentinnen sind ebenfalls Touristinnen, erst seit einer Woche in Berlin und kennen den Weg selbst nicht (waren noch nie am Schloss und nutzen eine Karte).",
            "ar": "خطأ. الطالبتان الأمريكيتان سائحتان تزوران المدينة منذ أسبوع واحد فقط ولا تعرفان الطرق جيدًا بل تعتمدان على خريطة.",
            "fr": "Faux. Les deux étudiantes sont également touristes, arrivées depuis une semaine seulement, et ne connaissent pas l'itinéraire."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht richtig: Sie studieren nicht in Berlin, sondern machen Urlaub.",
            "ar": "العبارة ليست صحيحة لأنهما لا تدرسان في برلين بل تقضيان عطلة.",
            "fr": "L'affirmation est fausse : elles ne font que visiter la ville."
        }
    },
    "3": {
        "quote": "„Oh nein“, hat Phoebe protestiert, „bei diesem wunderbaren Wetter willst du in den Reichstag? Da musst du auch noch stundenlang Schlange stehen, das kannst du irgendwann machen, wenn es regnet.“",
        "whyCorrect": {
            "de": "Richtig. Phoebe warnt vor den langen Wartezeiten beim Reichstag („stundenlang Schlange stehen“), was für viele Touristen typisch ist.",
            "ar": "صحيح. تحذر فيبي من فترات الانتظار الطويلة أمام مبنى البرلمان (الرايخشتاغ) والوقوف في طوابير لساعات.",
            "fr": "Vrai. Phoebe souligne qu'il faut faire la queue pendant des heures (« stundenlang Schlange stehen ») pour visiter le Reichstag."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend: Der Text bestätigt die langen Warteschlangen ausdrücklich.",
            "ar": "اختيار 'خطأ' غير صحيح لأن النص يؤكد بوضوح طول الطوابير.",
            "fr": "Choisir 'Faux' est erroné car les longues files d'attente sont mentionnées texto."
        }
    },
    "4": {
        "quote": "Es ging wunderbar schnell und leicht, manchmal wäre ich gern stehen geblieben, um die Touristenschiffe anzusehen. Nach einer Stunde waren wir schon am Schloss Charlottenburg.",
        "whyCorrect": {
            "de": "Falsch. Die Fahrt war überhaupt nicht mühsam, sondern ging „wunderbar schnell und leicht“. Die Mädchen waren am Schloss keineswegs erschöpft.",
            "ar": "خطأ. الرحلة بالدراجة لم تكن متعبة على الإطلاق بل كانت سريعة وسهلة وممتعة للغاية.",
            "fr": "Faux. Le trajet n'était pas difficile mais « merveilleusement rapide et facile » ; elles n'étaient donc pas épuisées."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht richtig: Marianne beschreibt die Fahrt als angenehm und leicht.",
            "ar": "العبارة غير صحيحة لوصف ماريان للرحلة بالخفة والسهولة.",
            "fr": "L'affirmation n'est pas vraie car la promenade à vélo s'est déroulée sans effort."
        }
    },
    "5": {
        "quote": "Danach wollten Phoebe und Anne sofort weiterfahren, aber ich hatte keine Lust mehr: Der Park beim Schloss ist so schön, mit Blumen und großen Bäumen und künstlichen Seen. ... Ich wollte meinen ersten Tag in Berlin genießen, nicht nur Sport treiben.",
        "whyCorrect": {
            "de": "Falsch. Das Wetter war herrlich. Marianne wollte nicht weiterfahren, weil sie den schönen Schlosspark genießen, spazieren gehen und nicht nur Sport treiben wollte.",
            "ar": "خطأ. الطقس كان رائعًا ومشمسًا؛ والسبب في عدم رغبتها في المتابعة هو جمال حديقة القصر ورغبتها في الاستمتاع والتسوق بدلاً من مواصلة ركوب الدراجة.",
            "fr": "Faux. Le temps était splendide ; Marianne a préféré s'arrêter pour profiter du parc et faire les boutiques plutôt que d'enchaîner le sport."
        },
        "whyIncorrect": {
            "de": "Die Aussage ist nicht richtig: Das Wetter war sonnig und wunderbar.",
            "ar": "العبارة ليست صحيحة لأن الشمس كانت ساطعة والطقس ممتازًا.",
            "fr": "L'affirmation est fausse : la météo n'était absolument pas en cause."
        }
    },
    "6": {
        "quote": "In Berlin mit dem Fahrrad unterwegs sein, das geht prima. Ich werde morgen wieder mit dem Fahrrad fahren, auf der Straße „Unter den Linden“!",
        "whyCorrect": {
            "de": "Richtig. Marianne resümiert begeistert: „In Berlin mit dem Fahrrad unterwegs sein, das geht prima.“ Sie empfindet das Fahrrad als ideales Fortbewegungsmittel.",
            "ar": "صحيح. تختم ماريان تدوينتها بإشادة كبيرة: 'التجول بالدراجة في برلين أمر ممتاز'، وتخطط لركوبها مجددًا غدًا.",
            "fr": "Vrai. Marianne conclut avec enthousiasme : « Être à vélo à Berlin, cela fonctionne à merveille », elle trouve donc ce moyen très pratique."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend: Ihre persönliche Bewertung des Fahrradfahrens in der Stadt ist durchweg positiv.",
            "ar": "اختيار 'خطأ' غير صحيح لأن تقييمها لتجربة الدراجة في برلين كان إيجابيًا للغاية.",
            "fr": "Choisir 'Faux' est incorrect car son appréciation est totalement positive."
        }
    },
    "7": {
        "quote": "Michael Körner glaubt, dass die meisten Eltern die Schule für ihre Kinder nach ziemlich praktischen Überlegungen wählen: Bietet die Schule Ganztagsunterricht an? Wie weit ist der Schulweg? Wie wichtig ist die musische Erziehung? Kann mein Kind dort Spanisch lernen?",
        "whyCorrect": {
            "de": "Option c ist richtig. Eltern wählen Schulen nach ganz individuellen, praktischen Bedürfnissen aus (Fremdsprachen, Ganztagsbetreuung, Musikangebot, Schulweg).",
            "ar": "الخيار (c) صحيح. يختار أولياء الأمور المدارس بناءً على حلول لاحتياجات أسرهم الفردية العملية (الدوام الكامل، تعليم لغات، مسافة الطريق).",
            "fr": "L'option c est correcte. Les parents sélectionnent l'école selon des critères pratiques et des attentes personnalisées."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (strenge Erziehung steht nicht im Vordergrund). Option b ist falsch (Angst vor fremden Ideen ist nicht der Hauptgrund).",
            "ar": "الخيار (a) خاطئ فالصرامة ليست الهدف. والخيار (b) خاطئ فالأمر يتعلق بالمرونة والاهتمام الشخصي.",
            "fr": "L'option a et l'option b ne correspondent pas aux explications de l'expert."
        }
    },
    "8": {
        "quote": "Privatschulen werden finanziell zu 70 % vom Staat gefördert, die anderen 30 % müssen aus den Elternbeiträgen kommen",
        "whyCorrect": {
            "de": "Option b ist richtig. Privatschulen erhalten bis zu 70 % staatliche Fördermittel, werden also zu einem großen Teil aus öffentlichen Geldern finanziert.",
            "ar": "الخيار (b) صحيح. تموّل المدارس الخاصة بنسبة 70% من الميزانية العامة للدولة، والباقي من اشتراكات الأولياء.",
            "fr": "L'option b est correcte. Les écoles privées reçoivent 70 % de subventions de l'État, donc de fonds publics."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (normale Privatschulen sind auch für normale Familien bezahlbar). Option c ist falsch (Waldorfschulen wurden für Arbeiterkinder gegründet).",
            "ar": "الخيار (a) خاطئ فالمصاريف العادية ليست حكرًا على الأثرياء فقط. والخيار (c) خاطئ فقد تأسست أول مدرسة لأبناء العمال.",
            "fr": "L'option a est fausse. L'option c est démentie par l'origine ouvrière des écoles Waldorf."
        }
    },
    "9": {
        "quote": "Das sind die Sorgen der Eltern und die Privatschulen kommen ihnen entgegen. Vielleicht sollten die staatlichen Schulen darüber auch einmal nachdenken.",
        "whyCorrect": {
            "de": "Option a ist richtig. Körner meint, dass Privatschulen Anregungen liefern können, über die auch staatliche Schulen nachdenken sollten.",
            "ar": "الخيار (a) صحيح. يرى الخبير أن أسلوب المدارس الخاصة وتلبيتها لرغبات الأهالي قد يشكل نموذجًا مفيدًا تفكر فيه المدارس الحكومية.",
            "fr": "L'option a est correcte. Körner suggère que les écoles publiques pourraient s'inspirer de la flexibilité des écoles privées."
        },
        "whyIncorrect": {
            "de": "Option b und c sind nicht die zentralen Thesen Körners zur Bedeutung der Privatschulen.",
            "ar": "الخياران (b) و (c) ليسا بيت القصيد في تحليل البروفيسور.",
            "fr": "Les options b et c ne constituent pas le cœur de sa réflexion."
        }
    },
    "10": {
        "quote": "Sie fanden heraus, dass attraktive Jugendliche tatsächlich um 0,5 bis 0,75 Notenpunkte besser beurteilt werden als andere Schüler mit gleichen Leistungen.",
        "whyCorrect": {
            "de": "Option c ist richtig. Die Wiener Studie belegt, dass Lehrkräfte attraktive Jugendliche bei gleicher Leistung um bis zu 0,75 Noten besser bewerten – sie lassen sich also vom Aussehen beeinflussen.",
            "ar": "الخيار (c) صحيح. أثبتت الدراسة في فيينا أن المعلمين يتأثرون بالمظهر الخارجي ويمنحون الطلاب الأكثر جاذبية درجات أعلى لنفس المستوى.",
            "fr": "L'option c est correcte. L'étude montre que les enseignants sont influencés par le physique et attribuent de meilleures notes aux élèves séduisants."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (im Berufsleben gilt das gerade für Frauen nicht). Option b ist falsch (Schönheit erzeugt keine tatsächliche Mehrleistung).",
            "ar": "الخيار (a) خاطئ فالجاذبية لم تفد النساء في العمل. والخيار (b) خاطئ فالأداء الفعلي متطابق وإنما التقييم منحاز.",
            "fr": "L'option a est réfutée dans le monde professionnel. L'option b confond performance réelle et notation subjective."
        }
    },
    "11": {
        "quote": "Die Hälfte der Fotos zeigten schöne Männer und Frauen, die anderen gehörten zu durchschnittlichen Gesichtern.",
        "whyCorrect": {
            "de": "Option c ist richtig. Genau 50 % der versendeten Bewerbungsfotos zeigten Personen mit ganz durchschnittlichem, alltäglichem Aussehen.",
            "ar": "الخيار (c) صحيح. أرسلت الدراسة في تل أبيب نصف الطلبات (50%) بصور لأشخاص ذوي ملامح ومظهر عادي تمامًا.",
            "fr": "L'option c est correcte. La moitié des candidatures (50 %) comportait des photos de personnes au visage ordinaire."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (auf der Hälfte waren Männer UND Frauen zu sehen, nicht nur Männer). Option b ist falsch (durchschnittlich heißt nicht unattraktiv).",
            "ar": "الخيار (a) خاطئ فالنصف شمل رجالاً ونساءً. والخيار (b) خاطئ فلم تكن الصور قبيحة بل عادية.",
            "fr": "L'option a est incomplète. L'option b déforme la proportion."
        }
    },
    "12": {
        "quote": "in den Personalbüros der Firmen fast ausschließlich Frauen sitzen – und die glauben offenbar, dass schöne Frauen das Betriebsklima stören.",
        "whyCorrect": {
            "de": "Option a ist richtig. Personalverantwortliche befürchten Konflikte im Büro und wollen vermeiden, dass neue Mitarbeiterinnen Unruhe oder Neid ins Team bringen.",
            "ar": "الخيار (a) صحيح. تخشى إدارات التوظيف (ومعظمها نساء) من حدوث نزاعات أو اضطراب في بيئة العمل الجماعية بسبب المنافسة.",
            "fr": "L'option a est correcte. Les recruteuses craignent que des rivalités ou tensions ne perturbent l'ambiance au sein de l'équipe."
        },
        "whyIncorrect": {
            "de": "Option b ist falsch (bei Männern half gutes Aussehen, bei Frauen schadete es). Option c ist zu allgemein formuliert.",
            "ar": "الخيار (b) خاطئ فالمظهر الجميل ساعد الرجال وأضر بالنساء. والخيار (c) غير دقيق في تعميمه.",
            "fr": "L'option b est contredite par l'écart hommes/femmes. L'option c simplifie excessivement le constat."
        }
    },
    "13": {
        "quote": "Jugendcamp Costa Brava ... Partys am Meer, günstiger Preis",
        "whyCorrect": {
            "de": "Anzeige E passt. Stefan und seine Freunde suchen Sonne, Partys und Meer für Spätsommer bei wenig Geld. Das Jugendcamp an der Costa Brava passt exakt.",
            "ar": "الإعلان E مناسب. يبحث ستيفان ورفاقه عن شمس وموسيقى وحفلات على البحر بميزانية منخفضة، ومخيم الشباب يوفر ذلك تمامًا.",
            "fr": "L'annonce E convient. Séjour jeunes sur la côte espagnole avec fêtes en bord de mer et tarifs abordables."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten keine günstige Partystimmung am Meer für Jugendliche.",
            "ar": "الإعلانات الأخرى إما باهظة أو عائلية هادئة.",
            "fr": "Les autres options ne correspondent ni au profil jeune ni au petit budget."
        }
    },
    "14": {
        "quote": "Familienhotel Schweizer Alpen ... Kinderbetreuung, Bergwanderungen",
        "whyCorrect": {
            "de": "Anzeige D passt. Familie Meyerberg will in die Schweiz zum Bergwandern und benötigt Betreuung für die kleinen Kinder. Das Familienhotel bietet beides.",
            "ar": "الإعلان D مناسب. تريد عائلة مايربرغ قضاء إجازة جبلية في سويسرا مع رعاية نهارية للأطفال، وهو ما يقدمه فندق العائلات.",
            "fr": "L'annonce D convient. Vacances dans les Alpes suisses combinant randonnées en montagne et encadrement pour jeunes enfants."
        },
        "whyIncorrect": {
            "de": "Andere Reiseangebote liegen nicht in der Schweiz oder bieten keine Kinderbetreuung.",
            "ar": "العروض الأخرى لا تقع في سويسرا أو تفتقر لحضانة الأطفال.",
            "fr": "Les autres hébergements ne sont pas situés en Suisse ou n'assurent pas de garde d'enfants."
        }
    },
    "15": {
        "quote": "Finca Mallorca ... Haus für Gäste im Mai",
        "whyCorrect": {
            "de": "Anzeige C passt. Christian und Sabine suchen im Mai ein Haus in Südeuropa mit Platz für Gäste. Die Finca auf Mallorca erfüllt alle Kriterien.",
            "ar": "الإعلان C مناسب. يبحثان عن بيت للإيجار في جنوب أوروبا في شهر مايو يتسع لاستقبال ضيوف، وتوفر فيلا مايوركا ذلك.",
            "fr": "L'annonce C convient. Finca aux Baléares disponible en mai, idéale pour accueillir des invités dans le Sud de l'Europe."
        },
        "whyIncorrect": {
            "de": "Andere Unterkünfte bieten keinen ausreichenden Platz für Gäste oder liegen in Großstädten.",
            "ar": "الإعلانات الأخرى شقق صغيرة أو في مناطق جبلية وشمالية.",
            "fr": "Les autres biens ne disposent pas de l'espace requis ou ne sont pas dans le Sud."
        }
    },
    "16": {
        "quote": "Hausboot & Ferienwohnung am See",
        "whyCorrect": {
            "de": "Anzeige H passt. Wassersport kombiniert mit einer festen Ferienwohnung für die Frauen, die nicht auf dem Boot übernachten wollen.",
            "ar": "الإعلان H مناسب. يجمع العرض بين الرياضات المائية وقارب مع شقة مريحة على ضفاف البحيرة لإرضاء الزوجات.",
            "fr": "L'annonce H convient. Formule combinant bateau habitable pour les navigateurs et appartement confortable pour leurs épouses."
        },
        "whyIncorrect": {
            "de": "Reine Bootcharter oder reine Stadtwohnungen entsprechen nicht dem Kompromiss.",
            "ar": "القوارب المنفردة أو شقق المدن لا تلبي رغبة الطرفين معًا.",
            "fr": "Les autres annonces imposent soit le bateau seul, soit un séjour sans rapport avec l'eau."
        }
    },
    "17": {
        "quote": "Kulturreise Toskana",
        "whyCorrect": {
            "de": "Anzeige B passt. Herr Krauser möchte seiner Frau eine Reise mit erstklassigen kulturellen Höhepunkten schenken. Die Kulturreise in die Toskana ist ideal.",
            "ar": "الإعلان B مناسب. يريد إهداء زوجته رحلة ثقافية مميزة، وتوفر الرحلة إلى إقليم توسكانا الإيطالي معالم فنية وتاريخية رفيعة.",
            "fr": "L'annonce B convient. Voyage culturel en Toscane, parfait pour un cadeau haut de gamme axé sur l'art et l'histoire."
        },
        "whyIncorrect": {
            "de": "Andere Urlaubsangebote sind rein sportlich oder für Jugendliche gedacht.",
            "ar": "الإعلانات الأخرى مخصصة للشباب أو المغامرات الرياضية دون طابع ثقافي.",
            "fr": "Les autres options n'ont aucune dimension patrimoniale ou artistique."
        }
    },
    "18": {
        "quote": "Hauptstadt-Residenz Berlin Ferienwohnung",
        "whyCorrect": {
            "de": "Anzeige I passt. Das Ehepaar Schäfer aus einer Kleinstadt möchte Großstadtleben in einer komfortablen Berliner Residenz-Wohnung ausprobieren.",
            "ar": "الإعلان I مناسب. يريد الزوجان تجربة حياة المدينة الكبرى في العاصمة برلين في شقة مريحة بدلاً من فندق ضيق.",
            "fr": "L'annonce I convient. Appartement meublé dans la capitale pour découvrir le rythme d'une grande métropole."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten ländliche Urlaube oder Mittelmeerstrände.",
            "ar": "الإعلانات الأخرى ريفية أو ساحلية بعيدة عن صخب المدن الكبرى.",
            "fr": "Les autres propositions se situent à la mer ou à la montagne."
        }
    },
    "19": {
        "quote": "Ferienanlage Skopolos Insel mit Wassersport & Kursen",
        "whyCorrect": {
            "de": "Anzeige J passt. Strandurlaub für die Eltern, kombiniert mit Fahrradverleih, Tauch- und Segelunterricht für die Jugendlichen (14/15 J.).",
            "ar": "الإعلان J مناسب. يجمع بين إجازة شاطئية للأهل وبرامج تدريب على الإبحار والغوص وتأجير دراجات للفتيان لكيلا يملوا.",
            "fr": "L'annonce J convient. Complexe balnéaire proposant activités nautiques et stages de plongée/voile pour occuper des ados actifs."
        },
        "whyIncorrect": {
            "de": "Reine Ruhe-Hotels ohne Freizeitaktivitäten bieten den Teenagern zu wenig Abwechslung.",
            "ar": "الفنادق الهادئة المعزولة ستشعر المراهقين بالملل.",
            "fr": "Les hôtels calmes sans infrastructure sportive n'intéresseraient pas des adolescents."
        }
    },
    "20": {
        "quote": "Die lachen doch nur über so etwas wie eine Steuer auf Computerspiele!",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Christian hält eine solche Steuer für wirkungslosen Unsinn, da echte Gamer Spiele online laden und die Steuer ignorieren würden.",
            "ar": "'لا' صحيح. يرى كريستيان أن فرض الضريبة هراء غير مجدٍ لأن اللاعبين المحترفين يحمّلون الألعاب عبر الإنترنت وسيسخرون من الضريبة.",
            "fr": "« Non » est correct. Christian juge cette taxe inutile et inefficace, soulignant que les joueurs téléchargent sur Internet."
        },
        "whyIncorrect": {
            "de": "„Ja“ ist falsch, da Christian die Maßnahme als „totalen Unsinn“ bezeichnet.",
            "ar": "اختيار 'نعم' خاطئ لأنه يصف الفكرة بالسخافة المطلقة.",
            "fr": "« Oui » est erroné car son avis est nettement hostile."
        }
    },
    "21": {
        "quote": "Computerspiele machen Spaß, weiter nichts – wieso soll man dafür Steuern zahlen?",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Carola verteidigt Computerspiele als normales Freizeitvergnügen und lehnt jegliche Sonderbesteuerung empört ab.",
            "ar": "'لا' صحيح. تدافع كارولا عن ألعاب الفيديو وتراها تسلية عادية كالموسيقى والكتب وترفض بشدة فرض أي ضريبة إضافية.",
            "fr": "« Non » est correct. Carola considère le jeu vidéo comme un loisir légitime et refuse toute taxe punitive supplémentaire."
        },
        "whyIncorrect": {
            "de": "„Ja“ widerspricht ihrer eindeutig ablehnenden Frage.",
            "ar": "'نعم' يعاكس تساؤلها الاستنكاري الرافض للضريبة.",
            "fr": "« Oui » contredit formellement son indignation."
        }
    },
    "22": {
        "quote": "Es ist einfach dumm, zu glauben, dass eine Steuer sein Verhalten ändern könnte.",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Marion hält eine Steuer für ungerecht und wirkungslos; sie würde Jugendliche nicht vom Spielen abhalten, sondern nur Unmut erzeugen.",
            "ar": "'لا' صحيح. ترى ماريون أن الاعتقاد بأن الضريبة ستغير سلوك الشباب هو غباء، وتعتبرها إجراءً غير عادل يثير الاستياء فقط.",
            "fr": "« Non » est correct. Marion estime naïf de penser qu'une taxe modifierait l'addiction des adolescents."
        },
        "whyIncorrect": {
            "de": "„Ja“ ist falsch, da Marion die Steuer als dumm und nutzlos bezeichnet.",
            "ar": "اختيار 'نعم' خاطئ لأنها تعتبر الإجراء عقيمًا وغبيًا.",
            "fr": "« Oui » est faux au vu de ses critiques sévères."
        }
    },
    "23": {
        "quote": "Ich finde, darüber muss man nachdenken, denn das wäre vielleicht eine Möglichkeit, dafür zu sorgen, dass weniger von diesen Spielen verkauft werden.",
        "whyCorrect": {
            "de": "„Ja“ ist richtig. Wolfgang befürwortet die Steuer, weil höhere Preise den Verkauf eindämmen und Jugendliche vor sozialer Isolation schützen könnten.",
            "ar": "'نعم' صحيح. يؤيد فولفغانغ الضريبة كوسيلة محتملة لتقليل مبيعات الألعاب وحماية المراهقين من العزلة وضياع المستقبل.",
            "fr": "« Oui » est correct. Wolfgang est favorable à la taxe afin de renchérir les jeux et d'en freiner la consommation excessive."
        },
        "whyIncorrect": {
            "de": "„Nein“ ist falsch: Wolfgang spricht sich ausdrücklich für die Einführung der Steuer aus.",
            "ar": "اختيار 'لا' خاطئ لأنه يصرح بتأييده لإجراءات تحد من انتشار هذه الألعاب.",
            "fr": "« Non » contredit sa volonté affichée d'augmenter le coût d'achat."
        }
    },
    "24": {
        "quote": "Wenn jemand Computerspiele spielen will, tut er das, egal, wie teuer sie sind.",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Sonja ist gegen die Steuer, da Preiserhöhungen (wie bei Tabak und Alkohol) den Konsum nicht senken, sondern nur dem Staat Geld einbringen.",
            "ar": "'لا' صحيح. تعارض سونيا الفكرة مشيرة إلى أن رفع الأسعار لم يقلل التدخين، وأن الضريبة مجرد وسيلة لربح الدولة دون علاج المشكلة.",
            "fr": "« Non » est correct. Sonja s'oppose au projet, estimant que la hausse des prix ne dissuadera pas les adeptes."
        },
        "whyIncorrect": {
            "de": "„Ja“ ist falsch, da Sonja die steuerliche Maßnahme für wirkungslos hält.",
            "ar": "اختيار 'نعم' خاطئ لأنها تنتقد استغلال الدولة للمستهلكين.",
            "fr": "« Oui » ne correspond pas à son argumentation sceptique."
        }
    },
    "25": {
        "quote": "Jedes Mittel soll uns recht sein, um unsere Kinder vor solchen Verbrechern zu schützen. Ich glaube, auch eine Steuer auf die Computerspiele könnte dabei nützlich sein.",
        "whyCorrect": {
            "de": "„Ja“ ist richtig. Hartmut befürwortet die Steuer nachdrücklich als Schutzmaßnahme für Jugendliche gegen Gewaltspiele und Amokläufe.",
            "ar": "'نعم' صحيح. يؤيد هارتموت الضريبة بقوة ويرى أن أي وسيلة لحماية الشباب من ألعاب العنف والجريمة مفيدة ومطلوبة.",
            "fr": "« Oui » est correct. Hartmut approuve fermement la taxe comme levier de protection face aux jeux violents."
        },
        "whyIncorrect": {
            "de": "„Nein“ ist falsch: Hartmut sieht in der Steuer ein nützliches Mittel der Prävention.",
            "ar": "اختيار 'لا' خاطئ لأنه يراها أداة وقائية هامة.",
            "fr": "« Non » est réfuté par son adhésion explicite."
        }
    },
    "26": {
        "quote": "Meiner Ansicht nach ist das Problem viel zu komplex für eine einfache Steuererhöhung. Verbote und Steuern führen bei Jugendlichen meist nur dazu, dass die Dinge noch reizvoller werden.",
        "whyCorrect": {
            "de": "„Nein“ ist richtig. Gudrun lehnt die Steuer ab, weil Verbote Dinge für Jugendliche oft nur noch interessanter machen; sie plädiert stattdessen für Medienkompetenz.",
            "ar": "'لا' صحيح. تعارض غودرون فرض الضريبة لأن المنع يزيد من جاذبية الأمر لدى المراهقين وتطالب بالتربية الإعلامية بدلاً من الضرائب.",
            "fr": "« Non » est correct. Gudrun rejette cette taxe simpliste qui risque de renforcer l'attrait interdit chez les jeunes."
        },
        "whyIncorrect": {
            "de": "„Ja“ widerspricht ihrer klaren Absage an steuerliche Verbote.",
            "ar": "'نعم' يتعارض مع دعوتها لرفض الضرائب واعتماد التوعية.",
            "fr": "« Oui » est erroné car elle s'oppose à la fiscalisation du problème."
        }
    },
    "27": {
        "quote": "Im Park und am Havelufer können unsere Gäste ihre freie Zeit angenehm verbringen. Zwei Ruderboote und zehn Fahrräder stehen kostenlos zur Verfügung.",
        "whyCorrect": {
            "de": "Option a ist richtig. In den Pausen können Gäste Boote und Fahrräder nutzen oder am Fluss spazieren gehen.",
            "ar": "الخيار (a) صحيح. يمكن للمشاركين في أوقات الفراغ ممارسة الرياضة وركوب الزوارق والدراجات المجانية أو التنزه على ضفاف النهر.",
            "fr": "L'option a est correcte. Les participants ont accès à des vélos, des barques et un parc pour se détendre pendant les pauses."
        },
        "whyIncorrect": {
            "de": "Option b ist falsch (sie machen ein Seminar, keinen reinen Urlaub). Option c ist falsch (Anreise ist am Freitag).",
            "ar": "الخيار (b) خاطئ فالهدف حضور دورة تدريبية وليس إجازة سياحية. والخيار (c) خاطئ فالوصول يوم الجمعة.",
            "fr": "L'option b et l'option c sont factuellement erronées d'après le texte."
        }
    },
    "28": {
        "quote": "Alle Gästezimmer können verschlossen werden.",
        "whyCorrect": {
            "de": "Option c ist richtig. Die Zimmerordnung hält ausdrücklich fest: „Alle Gästezimmer können verschlossen werden.“",
            "ar": "الخيار (c) صحيح. تنص التعليمات صراحة على إمكانية إغلاق وقفل جميع غرف الضيوف بالمفتاح.",
            "fr": "L'option c est correcte. Le règlement précise formellement que toutes les chambres peuvent être verrouillées."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (Toiletten und Duschen befinden sich auf dem Gang). Option b ist falsch (während der Seminartage wird nicht saubergemacht).",
            "ar": "الخيار (a) خاطئ فالحمامات مشتركة في الممرات. والخيار (b) خاطئ فلا تنظيف يومي للغرف خلال الدورة.",
            "fr": "L'option a est fausse (sanitaires partagés). L'option b est démentie car le ménage n'est pas fait pendant le stage."
        }
    },
    "29": {
        "quote": "Wir bitten unsere Gäste, bei der Abreise die Betten abzuziehen und alle persönlichen Gegenstände aus den Zimmern zu entfernen, auch Flaschen, Zeitungen, Prospekte usw. Die verschiedenen Mülltonnen befinden sich hinter dem Haus.",
        "whyCorrect": {
            "de": "Option b ist richtig. Die Gäste werden gebeten, Flaschen, Zeitungen und Müll selbst zu den Mülltonnen hinter dem Haus zu bringen.",
            "ar": "الخيار (b) صحيح. يُطلب من الضيوف إزالة متعلقاتهم وإلقاء القمامة والزجاجات بأنفسهم في الحاويات خلف المبنى.",
            "fr": "L'option b est correcte. Les hôtes doivent évacuer eux-mêmes leurs déchets et bouteilles vers les poubelles extérieures."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (Alkohol ist nicht im Zimmer verboten). Option c ist falsch (Essenszeiten sind festgelegt).",
            "ar": "الخيار (a) خاطئ فالكحول غير محظور في الغرفة. والخيار (c) خاطئ فمواعيد الوجبات محددة سلفًا.",
            "fr": "L'option a et l'option c ne correspondent pas aux demandes de la direction."
        }
    },
    "30": {
        "quote": "Bei der Ankunft hängt im Eingangsbereich des Kulturheims eine Liste aus, auf der die Namen und die Zimmernummern der Gäste zu finden sind.",
        "whyCorrect": {
            "de": "Option b ist richtig. Bei der Ankunft sucht jeder Gast seinen Namen auf der ausgehängten Liste und findet so selbst sein Zimmer.",
            "ar": "الخيار (b) صحيح. عند الوصول، توجد قائمة معلقة في المدخل يبحث فيها الضيف عن اسمه ورقم غرفته ليتوجه إليها بنفسه.",
            "fr": "L'option b est correcte. Les arrivants consultent la liste affichée dans le hall pour trouver le numéro de leur chambre en toute autonomie."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (niemand wird aufs Zimmer geführt). Option c ist falsch (man muss sich nicht eintragen, die Liste hängt bereits fertig da).",
            "ar": "الخيار (a) خاطئ فلا يوجد من يرافق الضيوف لغرفهم. والخيار (c) خاطئ فالقائمة جاهزة ومعلقة ولا تتطلب التسجيل.",
            "fr": "L'option a et l'option c sont réfutées par la présence de la liste déjà établie."
        }
    }
},
  "modellsatz-4": {
    "1": {
        "quote": "Nicht nur versprachen sie dem Werbetext zufolge einen hohen Anteil an Vollkorn, sondern auch „einen leichten Genuss für die Linie“ ... meinten, etwas Gutes für unseren Körper zu tun.",
        "whyCorrect": {
            "de": "Richtig. Bernd glaubte dem Werbetext und dachte, mit den „Fit“-Flocken etwas Gutes und Gesundes für seinen Körper und seine Figur zu tun.",
            "ar": "صحيح. كان بيرند يعتقد أن رقائق 'Fit' صحية ومفيدة لجسمه ورشاقته بناءً على ما وعد به الإعلان.",
            "fr": "Vrai. Bernd croyait le texte publicitaire et pensait faire du bien à son corps et à sa ligne avec ces céréales."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da Bernd die Flocken anfangs tatsächlich für gesund und figurfreundlich hielt.",
            "ar": "الخيار 'خطأ' غير صحيح، لأن بيرند كان يعتبرها بالفعل صحية في البداية.",
            "fr": "Choisir 'Faux' est incorrect car au début, Bernd les considérait réellement comme saines."
        }
    },
    "2": {
        "quote": "Wir nahmen uns also vor, an Wochenenden mehr Sport zu treiben. Doch das führte auf die Dauer nicht zum erwünschten Ergebnis.",
        "whyCorrect": {
            "de": "Falsch. Bernd trieb nicht „täglich“ Sport, sondern nahm sich lediglich vor, an den Wochenenden mehr Sport zu treiben.",
            "ar": "خطأ. لم يكن بيرند يمارس الرياضة 'يوميًا'، بل قرر ممارستها فقط في عطلات نهاية الأسبوع.",
            "fr": "Faux. Bernd ne faisait pas de sport « quotidiennement », mais avait seulement prévu d'en faire plus les week-ends."
        },
        "whyIncorrect": {
            "de": "Richtig wäre unpassend: Im Text steht ausdrücklich „an Wochenenden“ und nicht jeden Tag.",
            "ar": "الخيار 'صحيح' غير سليم لأن النص يحدد بوضوح عطلة نهاية الأسبوع وليس كل يوم.",
            "fr": "L'affirmation n'est pas vraie car le texte précise bien « les week-ends » et non chaque jour."
        }
    },
    "3": {
        "quote": "Bei der Marke unserer Wahl waren es ganze 30 %. Ich holte schnell die „Fit“-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm.",
        "whyCorrect": {
            "de": "Falsch. 35 Gramm Zucker pro 100 Gramm sind zwar viel (35 %), aber das Produkt besteht keineswegs „fast ausschließlich“ aus Zucker.",
            "ar": "خطأ. 35 غرامًا من السكر لكل 100 غرام تعني 35%، وبالتالي فالمنتج لا يتكون 'حصريًا وتقريبًا بالكامل' من السكر.",
            "fr": "Faux. 35 grammes de sucre pour 100 grammes représentent 35 %, le produit n'est donc nullement composé « presque exclusivement » de sucre."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da „fast ausschließlich“ einen Anteil von nahezu 100 % bedeuten würde.",
            "ar": "الخيار 'صحيح' غير دقيق لأن عبارة 'حصريًا تقريبًا' تعني نسبة تقارب 100%، بينما النسبة هنا 35%.",
            "fr": "L'affirmation n'est pas vraie car 35% ne signifie pas une composition quasi exclusive."
        }
    },
    "4": {
        "quote": "Ich holte schnell die „Fit“-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm. Und die tägliche Verzehrsempfehlung: 40 Gramm!!",
        "whyCorrect": {
            "de": "Falsch. Auf der Packung standen in der Nährwerttabelle die realen Zahlen (35 g Zucker), es standen dort also keineswegs „nur Lügen“.",
            "ar": "خطأ. كانت الحقائق ونسب السكر الدقيقة (35 غرام) مدونة بالفعل على العلبة في جدول القيم الغذائية، فلم تكن تحتوي 'أكاذيب فقط'.",
            "fr": "Faux. Les informations nutritionnelles réelles figuraient sur l'emballage (35 g de sucre), il n'y avait donc pas « que des mensonges »."
        },
        "whyIncorrect": {
            "de": "Richtig trifft nicht zu: Die Nährwertangaben waren wahrheitsgemäß abgedruckt.",
            "ar": "الخيار 'صحيح' غير صحيح لأن البيانات الغذائية المطبوعة على العلبة كانت صحيحة وواقعية.",
            "fr": "L'affirmation est fausse car les données nutritionnelles indiquées étaient conformes à la réalité."
        }
    },
    "5": {
        "quote": "Und die tägliche Verzehrsempfehlung: 40 Gramm!! Wer wird davon eigentlich satt? ... Wir haben immer mindestens die doppelte Menge gegessen.",
        "whyCorrect": {
            "de": "Richtig. Bernd hat zugenommen, weil er mit mindestens der doppelten Portionsgröße viel zu viele Flocken und somit übermäßig viel Zucker zu sich genommen hat.",
            "ar": "صحيح. زاد وزن بيرند لأنه كان يتناول كميات كبيرة جدًا تفوق ضعف الحصة الموصى بها يوميًا، مما زاد من السعرات والسكريات.",
            "fr": "Vrai. Bernd a grossi parce qu'il consommait au moins le double de la portion recommandée, ingérant ainsi trop de calories et de sucre."
        },
        "whyIncorrect": {
            "de": "Falsch wäre unzutreffend, da der übermäßige Verzehr der Flocken der entscheidende Grund für die Gewichtszunahme war.",
            "ar": "الخيار 'خطأ' غير صحيح، فالإفراط في تناول الرقائق بكميات مضاعفة هو السبب المباشر لزيادة الوزن.",
            "fr": "Choisir 'Faux' ne convient pas car la surconsommation des céréales est bien la cause directe de sa prise de poids."
        }
    },
    "6": {
        "quote": "Und was das Vollkorn betrifft, ist auch alles Schwindel. 20 Prozent Vollkornanteil sind noch lange kein echtes Vollkornprodukt.",
        "whyCorrect": {
            "de": "Richtig. Mit nur 20 % Vollkornanteil sind die Flocken laut Text in Wahrheit kein echtes Vollkornprodukt.",
            "ar": "صحيح. بنسبة 20% فقط من الحبوب الكاملة، فإن هذه الرقائق لا تُعد في الواقع منتج حبوب كاملة حقيقيًا.",
            "fr": "Vrai. Avec seulement 20 % de céréales complètes, ces flocons ne constituent pas un véritable produit complet."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da Bernd den geringen Vollkornanteil ausdrücklich als Schwindel entlarvt.",
            "ar": "الخيار 'خطأ' غير صحيح، لأن بيرند يوضح صراحة أنها خدعة وليست منتج حبوب كاملة فعلي.",
            "fr": "L'affirmation est vraie car l'auteur qualifie lui-même l'appellation d'illusion compte tenu du faible pourcentage."
        }
    },
    "7": {
        "quote": "Die Alpen bieten für jeden Geschmack passende Routen ... Wer innert fünf Tagen von Innsbruck zum italienischen Skiort Cortina d’Ampezzo radelt, bekommt unterwegs eine Menge geboten.",
        "whyCorrect": {
            "de": "Option c ist richtig. Der Text berichtet über Mountainbiketouren und Radstrecken durch die Alpen.",
            "ar": "الخيار (c) صحيح. يتناول النص جولات ركوب الدراجات الجبلية عبر جبال الألب.",
            "fr": "L'option c est correcte. Le texte présente des randonnées à vélo tout-terrain à travers les Alpes."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (Umweltprobleme stehen nicht im Fokus). Option b ist falsch (die beschriebene Tour führt von Österreich nach Italien, nicht durch die Schweiz).",
            "ar": "الخيار (a) خاطئ فالنص لا يناقش مشاكل بيئية. والخيار (b) خاطئ فالجولة تمتد من النمسا إلى إيطاليا وليس في سويسرا.",
            "fr": "Option a fausse (pas de focus écologique). Option b fausse (le circuit va d'Autriche en Italie)."
        }
    },
    "8": {
        "quote": "Zuerst fährt man oberhalb der Brenner-Autobahn und hat einen herrlichen Panoramablick, vorbei an Apfelplantagen. Das erste Highlight ist ein Bergweg ... mit Ausblick auf weitere Dolomitenberge ... Fanes-Kessel ... Bergseen, gespeist von Wasserfällen ...",
        "whyCorrect": {
            "de": "Option b ist richtig. Auf dieser Tour gibt es eine Fülle von landschaftlichen Sehenswürdigkeiten und Panoramen zu sehen.",
            "ar": "الخيار (b) صحيح. يمكن للمرء رؤية مناظر طبيعية خلابة وبانورامية متنوعة أثناء الجولة.",
            "fr": "L'option b est correcte. Le circuit offre une grande variété de panoramas et de merveilles naturelles à contempler."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch („Dessert“ ist hier eine Metapher für den Höhepunkt der Reise, kein Nachtisch zum Essen). Option c ist eine ungenaue Verallgemeinerung.",
            "ar": "الخيار (a) خاطئ فكلمة 'Dessert' استخدمت مجازيًا كمسك الختام وليست حلوى للأكل. والخيار (c) تعميم غير دقيق.",
            "fr": "Option a fausse (le « dessert » est une métaphore désignant le point culminant). Option c imprécise."
        }
    },
    "9": {
        "quote": "und natürlich auch Berghütten, in denen man sich bei Apfelschorle und leckerer Pasta Napoli stärken kann.",
        "whyCorrect": {
            "de": "Option c ist richtig. In den Hütten kann man mit leckerer Pasta und Getränken gut speisen.",
            "ar": "الخيار (c) صحيح. يمكن في الأكواخ الجبلية تناول وجبات لذيذة كالباستا والاستراحة.",
            "fr": "L'option c est correcte. Les refuges permettent de déguster de délicieux plats de pâtes."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (es gibt auch Pasta zu essen). Option b wird im Text für die Hütten nicht erwähnt.",
            "ar": "الخيار (a) خاطئ فهناك طعام أيضًا وليس مشروبات فقط. والخيار (b) لم يذكر المبيت في تلك الأكواخ.",
            "fr": "Option a fausse (il y a aussi à manger). Option b non mentionnée pour ces refuges."
        }
    },
    "10": {
        "quote": "Eine Reise um die Welt ... muss heute nicht anstrengend oder teuer sein ... Bücher, Denkmäler oder Museumsbesuche sind als virtuelle Touren im Internet verfügbar.",
        "whyCorrect": {
            "de": "Option b ist richtig. Der Text schildert, wie man Denkmäler und Kulturstätten dank virtueller Touren auf ganz neue Art digital entdecken kann.",
            "ar": "الخيار (b) صحيح. يتناول المقال وسيلة جديدة وحديثة لاستكشاف المعالم السياحية افتراضيًا عبر الإنترنت.",
            "fr": "L'option b est correcte. L'article présente une nouvelle manière de découvrir le patrimoine grâce aux visites virtuelles."
        },
        "whyIncorrect": {
            "de": "Option a ist zu allgemein. Option c ist falsch, da Sehenswürdigkeiten auf der ganzen Welt (Louvre, Freiheitsstatue, Grand Canyon) genannt werden.",
            "ar": "الخيار (a) عام جدًا. والخيار (c) خاطئ لأن المعالم المذكورة عالمية وليست نمساوية فقط.",
            "fr": "Option a trop générale. Option c fausse car les sites présentés sont mondiaux."
        }
    },
    "11": {
        "quote": "und auch Google macht seit Jahren mehr oder weniger bekannte, aber auf jeden Fall erhaltenswerte Schriften aus Museen, Bibliotheken und Büchereien der digitalen Welt zugänglich.",
        "whyCorrect": {
            "de": "Option a ist richtig. Google digitalisiert historische Schriften und Werke aus Museen und Bibliotheken und macht sie online für jedermann lesbar.",
            "ar": "الخيار (a) صحيح. تقوم غوغل بإتاحة المخطوطات والوثائق المحفوظة في المتاحف والمكتبات لجميع مستخدمي الإنترنت.",
            "fr": "L'option a est correcte. Google numérise les écrits des musées et bibliothèques pour les rendre accessibles en ligne à tous."
        },
        "whyIncorrect": {
            "de": "Option b ist falsch (die Nationalbibliothek digitalisiert selbst, eine Kooperation mit Google wird nicht behauptet). Option c ist unpräzise (Google digitalisiert Schriften, sammelt sie nicht physisch).",
            "ar": "الخيار (b) غير مذكور كتعاون مباشر. والخيار (c) غير دقيق فغوغل تتيحها رقميًا ولا تجمعها كقطع أثرية.",
            "fr": "Option b non étayée. Option c inexacte (Google rend accessible, ne collectionne pas physiquement)."
        }
    },
    "12": {
        "quote": "Eine Reise um die Welt, zu bedeutenden Orten, Bauwerken oder Denkmälern muss heute nicht anstrengend oder teuer sein.",
        "whyCorrect": {
            "de": "Option c ist richtig. Indem der Autor betont, dass virtuelle Reisen „nicht anstrengend“ sein müssen, verdeutlicht er, dass reale Fernreisen oft anstrengend sind und müde machen können.",
            "ar": "الخيار (c) صحيح. بتأكيد الكاتب على أن الرحلات الافتراضية 'ليست مجهدة ومضنية'، يتضح أن السفر الواقعي لمسافات بعيدة قد يسبب التعب والإرهاق.",
            "fr": "L'option c est correcte. En précisant qu'un voyage virtuel n'a plus besoin d'être « éprouvant », le texte sous-entend que les voyages lointains physiques peuvent fatiguer."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (sie müssen nicht „immer“ teuer sein). Option b ist nicht die Kernaussage des Textes.",
            "ar": "الخيار (a) غير صحيح فلا تكلف 'دائمًا' الكثير. والخيار (b) لا يتطابق مع مضمون الفقرة.",
            "fr": "Option a trop absolue (« toujours cher »). Option b hors sujet."
        }
    },
    "13": {
        "quote": "Im April können Sie das jeden Samstag bei Car Wash Royal ... tun und dazu noch einen guten Zweck unterstützen. Von jeder Fahrzeugwäsche gehen 4,– € in die Spendenkasse ... Jugendfeuerwehr",
        "whyCorrect": {
            "de": "Anzeige E passt. Bei Car Wash Royal wird das Autowaschen mit einer 4-Euro-Spende für die Jugendfeuerwehr verbunden.",
            "ar": "الإعلان E يطابق المطلوب تمامًا. تتيح المغسلة غسيل السيارة مع التبرع بـ 4 يورو لصالح فرقة إطفاء الشباب.",
            "fr": "L'annonce E convient parfaitement : 4 € par lavage sont reversés aux jeunes sapeurs-pompiers."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten zwar Autowäschen (Anzeige B), aber keine Spenden oder Unterstützung für soziale Zwecke.",
            "ar": "الإعلانات الأخرى تقدم غسيل سيارات (مثل B) لكن دون أي تبرع أو عمل خيري للآخرين.",
            "fr": "L'annonce B propose des lavages mais aucune dimension caritative."
        }
    },
    "14": {
        "quote": "Fahrschule Peter Rüegg ... Nicht für Jungfahrer.",
        "whyCorrect": {
            "de": "Anzeige X (Keine Anzeige passt). Anzeige I bietet zwar energiesparendes Fahren an, schließt Fahranfänger jedoch ausdrücklich aus („Nicht für Jungfahrer“). Daher gibt es kein passendes Angebot für Benno.",
            "ar": "الإعلان X (لا يوجد إعلان مناسب). يعرض الإعلان I دورات قيادة موفرة للطاقة لكنه يستثني السائقين الجدد صراحة ('Nicht für Jungfahrer').",
            "fr": "Annonce X (aucune annonce ne convient). L'annonce I propose l'éco-conduite mais exclut explicitement les jeunes conducteurs."
        },
        "whyIncorrect": {
            "de": "Anzeige I darf wegen der Einschränkung „Nicht für Jungfahrer“ nicht gewählt werden.",
            "ar": "لا يمكن اختيار الإعلان I بسبب شرط استبعاد السائقين الجدد.",
            "fr": "L'annonce I ne peut convenir en raison de la clause restrictive pour novices."
        }
    },
    "15": {
        "quote": "Besuchen Sie den Auto Salon Genf ... Dieses Jahr im Blickpunkt: Das E-Auto: neue Modelle – neue Technologien – bessere Leistungen",
        "whyCorrect": {
            "de": "Anzeige J passt. Auf dem Genfer Autosalon kann sich Frau Wyss über die neuesten Elektro-Modelle aller Marken informieren.",
            "ar": "الإعلان J هو الأنسب. يركز معرض جنيف للسيارات على أحدث موديلات وتقنيات السيارات الكهربائية.",
            "fr": "L'annonce J convient parfaitement : le Salon de Genève met à l'honneur les nouveaux modèles de voitures électriques."
        },
        "whyIncorrect": {
            "de": "Anzeige C bietet lediglich gebrauchte Autos in einer Niederlassung, keine herstellerübergreifende Messe für Neuentwicklungen.",
            "ar": "الإعلان C يبيع سيارات كهربائية مستعملة فقط، ولا يقدم معرضًا شاملاً لأحدث الموديلات.",
            "fr": "L'annonce C ne vend que des occasions et ne propose pas de salon d'information."
        }
    },
    "16": {
        "quote": "Suche tägl. Mitfahrgelegenheit Klosterneuburg – Wien-Zentrum, Büroarbeitszeiten ... übernehme meinen Teil der Benzinkosten.",
        "whyCorrect": {
            "de": "Anzeige G passt. Maximilian sucht genau auf dieser Pendlerstrecke (Klosterneuburg – Wien) eine Mitfahrgelegenheit und beteiligt sich an den Benzinkosten.",
            "ar": "الإعلان G مطابق تمامًا. يبحث ماكسيميليان عن رفيق سفر يومي بين كلوسترنوبرغ ومركز فيينا مع تقاسم مصاريف الوقود.",
            "fr": "L'annonce G convient exactement : un covoitureur propose de partager les frais d'essence entre Klosterneuburg et le centre de Vienne."
        },
        "whyIncorrect": {
            "de": "Anzeige H ist ein teurer Luxus-Chauffeurservice und spart Herrn Wieser keine Benzinkosten.",
            "ar": "الإعلان H يقدم سائقًا خاصًا فخمًا باهظ التكلفة ولا يساعد في توفير نفقات البنزين اليومية.",
            "fr": "L'annonce H est un service de chauffeur de luxe, bien trop onéreux pour réduire les frais."
        }
    },
    "17": {
        "quote": "Zusammen mit der Volkshochschule Ulm bieten wir exklusiv Pannenskurse für Frauen an.",
        "whyCorrect": {
            "de": "Anzeige A passt. Der Pannenhelferkurs für Frauen vermittelt genau Fertigkeiten wie Reifenwechseln bei Autopannen.",
            "ar": "الإعلان A هو الخيار الصحيح. تقدم ورشة هوفمان دورات تدريبية خاصة بالنساء للتعامل مع الأعطال وتغيير الإطارات.",
            "fr": "L'annonce A convient : cet atelier de dépannage pour femmes enseigne précisément à changer une roue lors d'une panne."
        },
        "whyIncorrect": {
            "de": "Andere Werkstätten bieten nur Reparaturen durch Mechaniker, aber keine Kurse zum Selberlernen.",
            "ar": "الإعلانات الأخرى تقدم خدمات صيانة وتصليح بواسطة الفنيين دون تدريب الشخص على القيام بها بنفسه.",
            "fr": "Les autres garages effectuent les réparations eux-mêmes sans proposer de formation pratique."
        }
    },
    "18": {
        "quote": "Mobilitätsgarantie ... Ersatzwagen bis zu 3 Tagen oder Hotelübernachtung für Sie und Ihre Mitfahrer",
        "whyCorrect": {
            "de": "Anzeige D passt. Die Mobilitätsgarantie von Hellmer stellt bei Pannen oder Unfällen einen Ersatzwagen für bis zu drei Tage bereit.",
            "ar": "الإعلان D مطابق تمامًا. يضمن عقد المساعدة سيارة بديلة لمدة تصل إلى 3 أيام في حال وقوع حادث.",
            "fr": "L'annonce D convient : la garantie mobilité met à disposition un véhicule de remplacement jusqu'à 3 jours en cas d'accident."
        },
        "whyIncorrect": {
            "de": "Anzeige F wickelt zwar Unfälle ab, verspricht aber keinen garantierten Ersatzwagen für die berufliche Weiterfahrt.",
            "ar": "الإعلان F يتولى إجراءات التأمين لكنه لا يضمن توفير سيارة بديلة فورية للعمل.",
            "fr": "L'annonce F règle les démarches d'assurance mais ne garantit pas de véhicule de prêt immédiat."
        }
    },
    "19": {
        "quote": "gesamte Unfallabwicklung inkl. Fahrzeugabholung am Unfallort und Regelung aller Formalien mit der Versicherung",
        "whyCorrect": {
            "de": "Anzeige F passt. eckert mobil übernimmt die gesamte Unfallabwicklung und alle Verhandlungen mit der Versicherung, sodass Herr Nowak keinen Ärger mehr hat.",
            "ar": "الإعلان F هو الحل المناسب. تتكفل الورشة بجميع الإجراءات الورقية والتنسيق الكامل مع شركة التأمين بعد الحادث.",
            "fr": "L'annonce F convient : ce garage prend en charge l'intégralité du dossier d'accident et toutes les formalités avec l'assurance."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten reine Pannenhilfe, regeln jedoch nicht die Formalitäten mit den Versicherungsvertretern.",
            "ar": "الإعلانات الأخرى تقدم سحب سيارات فقط دون إدارة النزاعات والشكليات مع شركات التأمين.",
            "fr": "Les autres services se limitent au dépannage sans prise en charge des formalités d'assurance."
        }
    },
    "20": {
        "quote": "Aber trotzdem, ich finde so etwas allgemein sehr cool.",
        "whyCorrect": {
            "de": "Nein. Anton findet Graffiti allgemein sehr cool und ist gegen ein Verbot.",
            "ar": "لا (Nein). يرى أنطون أن الغرافيتي أمر رائع وجذاب بوجه عام، وبالتالي فهو يرفض حظره.",
            "fr": "Non (Nein). Anton trouve le graffiti très cool et s'oppose à son interdiction."
        },
        "whyIncorrect": {
            "de": "Er befürwortet kein Verbot, da er die Kunstform trotz des Ärgers seiner Eltern positiv bewertet.",
            "ar": "هو غير مؤيد للحظر لأنه يبدي إعجابه الصريح بالغرافيتي.",
            "fr": "Il ne soutient pas l'interdiction, exprimant clairement son enthousiasme pour cette pratique."
        }
    },
    "21": {
        "quote": "Wenn überall Graffiti sind, sieht es unordentlich und chaotisch aus – schrecklich! Mich stört das. Wie soll man diesen Anblick nur tagein, tagaus ertragen?",
        "whyCorrect": {
            "de": "Ja. Ernst empfindet Graffiti als störend, unordentlich und chaotisch und ist für ein Verbot.",
            "ar": "نعم (Ja). ينزعج إرنست بشدة من مظهر الغرافيتي الفوضوي وغير المرتب ويؤيد منعه.",
            "fr": "Oui (Ja). Ernst est excédé par l'aspect désordonné des graffitis et soutient leur interdiction."
        },
        "whyIncorrect": {
            "de": "Er ist eindeutig gegen Graffiti in der Stadt und verlangt Sauberkeit.",
            "ar": "لا يوافق على وجود الغرافيتي إطلاقًا ويطالب بالنظافة والترتيب.",
            "fr": "Il rejette catégoriquement le graffiti au nom de la propreté urbaine."
        }
    },
    "22": {
        "quote": "Graffiti hat immer etwas Illegales und ich denke auch, es wäre besser, so etwas nicht zu dulden. Schließlich soll nicht jeder machen können, was er will, dann hätten wir hier ein Chaos.",
        "whyCorrect": {
            "de": "Ja. Conni betont die Illegalität und fordert, solche Aktionen nicht zu dulden, um Chaos zu verhindern.",
            "ar": "نعم (Ja). ترى كوني أن الغرافيتي عمل غير قانوني ويجب عدم التسامح معه تجنبًا للفوضى.",
            "fr": "Oui (Ja). Conni souligne le caractère illégal des graffitis et préconise de ne pas les tolérer."
        },
        "whyIncorrect": {
            "de": "Sie plädiert klar für Regeln und Nichtduldung, befürwortet also ein Verbot.",
            "ar": "موقفها حاسم بعدم السماح به لمنع الانفلات والفوضى.",
            "fr": "Elle réclame fermement l'interdiction pour préserver l'ordre."
        }
    },
    "23": {
        "quote": "Stellt euch doch mal vor, wie monoton unsere Städte wären. Mich nervt das Geordnete und übermässig Saubere ... So kann unsere Welt nicht sein!",
        "whyCorrect": {
            "de": "Nein. Torben liebt bunte Städte und lehnt das übertrieben Saubere ab; er ist entschieden gegen ein Verbot.",
            "ar": "لا (Nein). يكره توربن الرتابة والمدن المفرطة في النظافة، ويرفض حظر الغرافيتي بشدة.",
            "fr": "Non (Nein). Torben refuse l'uniformité des villes et rejette vigoureusement toute interdiction."
        },
        "whyIncorrect": {
            "de": "Torben findet Städte ohne Graffiti unvorstellbar langweilig, er will kein Verbot.",
            "ar": "يعتبر توربن المدن الخالية من الغرافيتي مملة للغاية، ولا يريد منعها.",
            "fr": "Il juge les villes sans graffitis ennuyeuses et s'oppose à leur bannissement."
        }
    },
    "24": {
        "quote": "Ich weiß nur, dass diese Farben ungesund sind ... Das kann nicht zugelassen werden ... Oder kann man dabei zusehen, wie sie sich ihre Gesundheit zerstören?",
        "whyCorrect": {
            "de": "Ja. Inge verweist auf gesundheitsschädliche giftige Dämpfe und fordert, dass dies nicht zugelassen werden darf.",
            "ar": "نعم (Ja). تحذر إنجي من الغازات السامة وأضرار الألوان على صحة الشباب، وتطالب بمنعه رسميًا.",
            "fr": "Oui (Ja). Inge insiste sur la toxicité des solvants pour la santé et exige l'interdiction de ces pratiques."
        },
        "whyIncorrect": {
            "de": "Sie fordert ein Einschreiten zum Schutz der Gesundheit, ist also für das Verbot.",
            "ar": "موقفها مؤيد للحظر بدافع الحفاظ على الصحة والسلامة العامة.",
            "fr": "Elle se prononce pour l'interdiction au nom de la protection sanitaire."
        }
    },
    "25": {
        "quote": "Ihnen allen sollte ein Denkzettel verpasst werden. Die richtige Maßnahme wäre, streng durchzugreifen.",
        "whyCorrect": {
            "de": "Ja. Gabriele fordert ein strenges Durchgreifen von Eltern und Behörden und ist klar für ein Verbot.",
            "ar": "نعم (Ja). تطالب غابرييلي باتخاذ إجراءات رادعة وتطبيق القانون بحزم، فهي مؤيدة للمنع تمامًا.",
            "fr": "Oui (Ja). Gabriele réclame des sanctions sévères et soutient fermement l'interdiction."
        },
        "whyIncorrect": {
            "de": "Sie verlangt strenge Maßnahmen und tadelt das Nachgeben der Erziehungsberechtigten.",
            "ar": "تنتقد التساهل وتدعو للصرامة والحظر التام.",
            "fr": "Elle fustige le laxisme et exige une répression sans équivoque."
        }
    },
    "26": {
        "quote": "Haben junge Leute in unserer Gesellschaft nie etwas zu sagen, können sie sich nicht frei ausdrücken? Ich lehne eine solche Bevormundung schlichtweg ab.",
        "whyCorrect": {
            "de": "Nein. Mara verteidigt die jugendliche Ausdrucksfreiheit und lehnt Verbote als Bevormundung ab.",
            "ar": "لا (Nein). تدافع مارا عن حرية الشباب في التعبير عن أنفسهم وترفض فرض الوصاية والمنع عليهم.",
            "fr": "Non (Nein). Mara revendique la liberté d'expression de la jeunesse et rejette l'interdiction comme une tutelle abusive."
        },
        "whyIncorrect": {
            "de": "Sie wehrt sich ausdrücklich gegen Verbote und Bevormundung Jugendlicher.",
            "ar": "ترفض صراحة فرض قيود وحظر على أنشطة الشباب.",
            "fr": "Elle refuse catégoriquement toute interdiction liberticide."
        }
    },
    "27": {
        "quote": "Der häufige und dauernde Gebrauch von Fenchelhonig gegen Husten und Heiserkeit kann schädlich für die Zähne sein (Karies).",
        "whyCorrect": {
            "de": "Option b ist richtig. In den Nebenwirkungen wird ausdrücklich vor möglichen Zahnschäden (Karies) bei häufigem Gebrauch gewarnt.",
            "ar": "الخيار (b) صحيح. تحذر النشرة بوضوح من أن الاستخدام المتكرر قد يضر بالأسنان ويسبب التسوس (Karies).",
            "fr": "L'option b est correcte. La notice met en garde contre d'éventuels dommages dentaires (caries) en cas d'usage répété."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (es gibt Nebenwirkungen). Option c ist falsch (allergische Reaktionen treten laut Beipackzettel „sehr selten“ auf, nicht „häufig“).",
            "ar": "الخيار (a) خاطئ فله آثار جانبية. والخيار (c) خاطئ لأن الحساسية تحدث 'نادرًا جدًا' وليس بصفة متكررة.",
            "fr": "Option a fausse (effets secondaires existants). Option c fausse (les réactions allergiques sont très rares et non fréquentes)."
        }
    },
    "28": {
        "quote": "Für Kinder ab 1 Jahr ... Kinder ab einem Jahr bekommen 2- bis 3-mal täglich je einen Messlöffel ...",
        "whyCorrect": {
            "de": "Option c ist richtig. Das Medikament ist für Kinder ab 1 Jahr zugelassen, was genau einem Mindestalter von 12 Monaten entspricht.",
            "ar": "الخيار (c) صحيح. الدواء مخصص للأطفال بدءًا من عمر سنة واحدة، أي من يبلغون 12 شهرًا على الأقل.",
            "fr": "L'option c est correcte. Le sirop est réservé aux enfants dès 1 an, soit au minimum 12 mois."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch (der Sirup hat einen „angenehmen Geschmack“). Option b ist falsch (es ist ein rein pflanzlicher Sirup).",
            "ar": "الخيار (a) خاطئ فطعمه محبب ومستساغ. والخيار (b) خاطئ لأنه مستحضر نباتي طبيعي وليس صناعيًا.",
            "fr": "Option a fausse (goût agréable). Option b fausse (sirop végétal d'origine naturelle)."
        }
    },
    "29": {
        "quote": "Nach Öffnen der Flasche ist das Medikament bei Beachtung der Aufbewahrungsbedingungen 6 Monate haltbar.",
        "whyCorrect": {
            "de": "Option a ist richtig. Nach dem Anbrechen der Flasche darf der Sirup noch genau 6 Monate (ein halbes Jahr) verwendet werden.",
            "ar": "الخيار (a) صحيح. يمكن استخدام الدواء لمدة 6 أشهر (أي نصف عام) بعد فتح الزجاجة.",
            "fr": "L'option a est correcte. Une fois ouvert, le sirop se conserve encore 6 mois (un demi-an)."
        },
        "whyIncorrect": {
            "de": "Option b ist frei erfunden. Option c ist falsch: Im Kühlschrank muss er nur bei Temperaturen über 30 °C gelagert werden, nicht „immer“.",
            "ar": "الخيار (b) لا أساس له. والخيار (c) خاطئ فالتبريد مطلوب فقط إذا تجاوزت الحرارة 30 درجة وليس دائمًا.",
            "fr": "Option b non mentionnée. Option c fausse (le frigo n'est requis qu'au-delà de 30 °C, pas en permanence)."
        }
    },
    "30": {
        "quote": "Falls vom Arzt nicht anders verordnet, ist die übliche Dosis: Kinder ab einem Jahr bekommen 2- bis 3-mal täglich je einen Messlöffel (5 ml / 6,5 g) ...",
        "whyCorrect": {
            "de": "Option c ist richtig. Die übliche Dosierung (2- bis 3-mal täglich 1 Messlöffel) ist für alle Kinder ab 1 Jahr gleich, ohne Unterscheidung nach Alter.",
            "ar": "الخيار (c) صحيح. الجرعة الاعتيادية (ملعقة قياس 2-3 مرات يوميًا) موحدة لجميع الأطفال بدءًا من عمر سنة دون تفرقة.",
            "fr": "L'option c est correcte. La posologie usuelle est identique pour tous les enfants d'au moins 1 an."
        },
        "whyIncorrect": {
            "de": "Option a ist falsch: Die übliche Dosis gilt, „falls vom Arzt nicht anders verordnet“. Option b ist falsch (der Beipackzettel nennt Wasser, Tee oder pur, nicht jedes Getränk).",
            "ar": "الخيار (a) خاطئ فالجرعة المعتادة محددة في النشرة ما لم يقرر الطبيب غيرها. والخيار (b) حدد الماء والشاي دون غيرهما.",
            "fr": "Option a inexacte (posologie type de la notice). Option b restrictivement limitée à l'eau ou au thé."
        }
    },
    "h1": {
        "quote": "Hörtext Teil 1, Text 1: Freiwilliges soziales Jahr / Bundesfreiwilligendienst Information",
        "whyCorrect": {
            "de": "Falsch. Das Angebot richtet sich an Jugendliche und Schulabgänger allgemein, nicht speziell an Studieninteressierte.",
            "ar": "خطأ. التوجيه موجه للشباب الراغبين في التطوع الاجتماعي بوجه عام وليس مخصصًا لمن يريدون الدراسة الجامعية فقط.",
            "fr": "Faux. Le conseil s'adresse aux jeunes désireux de s'engager dans le bénévolat et non exclusivement aux futurs étudiants."
        },
        "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da kein Hochschulstudium vorausgesetzt wird.",
            "ar": "الخيار 'صحيح' غير دقيق فالبرنامج يخص العمل التطوعي العام.",
            "fr": "L'affirmation est fausse car le cadre n'est pas restreint aux études."
        }
    },
    "h2": {
        "quote": "Einsatzmöglichkeiten im Seniorenzentrum / Altenheim",
        "whyCorrect": {
            "de": "Option b ist richtig. Man kann seinen Bundesfreiwilligendienst in einem Altenheim / Seniorenzentrum absolvieren.",
            "ar": "الخيار (b) صحيح. يمكن للمتطوع العمل والمشاركة في دار لرعاية المسنين (Altenheim).",
            "fr": "L'option b est correcte. L'engagement bénévole se déroule dans une maison de retraite pour personnes âgées."
        },
        "whyIncorrect": {
            "de": "Option a und c werden für diesen spezifischen Einsatzort nicht als Option genannt.",
            "ar": "المستشفى والعيادة ليسا المركز الرئيسي المحدد في هذا الإعلان.",
            "fr": "L'hôpital et le cabinet médical ne sont pas les lieux prévus."
        }
    },
    "h3": {
        "quote": "Hörtext Teil 1, Text 2: Polizeimeldung zu einem Überfall",
        "whyCorrect": {
            "de": "Falsch. Die Polizei sucht noch nach Zeugen und hat den unbekannten Täter bisher nicht identifiziert.",
            "ar": "خطأ. لا تزال الشرطة تبحث عن شهود عيان ولم تتعرف على هوية الجاني بعد.",
            "fr": "Faux. La police lance un appel à témoins et ne connaît pas encore l'auteur des faits."
        },
        "whyIncorrect": {
            "de": "Richtig ist unzutreffend, da der Täter flüchtig und unbekannt ist.",
            "ar": "الخيار 'صحيح' خاطئ فالجاني مجهول الهوية ولا يزال هاربًا.",
            "fr": "L'affirmation est fausse car le suspect est toujours recherché."
        }
    },
    "h4": {
        "quote": "Kellnerin wurde verletzt ins Krankenhaus eingeliefert",
        "whyCorrect": {
            "de": "Option a ist richtig. Die Kellnerin erlitt bei dem Vorfall Verletzungen und wird ärztlich versorgt.",
            "ar": "الخيار (a) صحيح. أصيبت النادلة بجروح نُقلت على إثرها لتلقي العلاج.",
            "fr": "L'option a est correcte. La serveuse a été blessée lors de l'incident."
        },
        "whyIncorrect": {
            "de": "Option b ist falsch (sie lebt) und Option c ist frei erfunden.",
            "ar": "الخيار (b) خاطئ فهي على قيد الحياة، والخيار (c) لا صحة له إطلاقًا.",
            "fr": "Option b fausse (elle n'est pas décédée) et c infondée."
        }
    },
    "h5": {
        "quote": "Hörtext Teil 1, Text 3: Durchsage am Flughafen für Abflüge",
        "whyCorrect": {
            "de": "Falsch. Die Ansage richtet sich an abfliegende Passagiere vor dem Boarding, nicht an ankommende Reisende.",
            "ar": "خطأ. الإعلان موجه للمسافرين المغادرين عند بوابات الصعود وليس للقادمين إلى المطار.",
            "fr": "Faux. L'annonce s'adresse aux passagers sur le départ pour l'embarquement, non aux arrivants."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da es um den Einstieg in den Flieger geht.",
            "ar": "الخيار 'صحيح' غير سليم لأن النداء يتعلق بالصعود إلى الطائرة.",
            "fr": "L'affirmation est fausse car il s'agit d'un appel d'embarquement."
        }
    },
    "h6": {
        "quote": "Letzter Aufruf für Fluggäste nach Frankfurt",
        "whyCorrect": {
            "de": "Option a ist richtig. Die Passagiere des Fluges nach Frankfurt werden zum sofortigen Einsteigen aufgerufen.",
            "ar": "الخيار (a) صحيح. النداء الأخير موجه لركاب الرحلة المتجهة إلى فرانكفورت للإسراع بالصعود.",
            "fr": "L'option a est correcte. Le dernier appel concerne les passagers du vol pour Francfort."
        },
        "whyIncorrect": {
            "de": "Option b und c entsprechen nicht den Reisenden des aufgerufenen Eilflugs.",
            "ar": "الخيارات الأخرى لا تخص الرحلة المستعجلة التي أُعلن عنها.",
            "fr": "Les autres options ne correspondent pas au vol en partance immédiate."
        }
    },
    "h7": {
        "quote": "Hörtext Teil 1, Text 4: Hotline für Ticketbuchungen und Konzertkarten",
        "whyCorrect": {
            "de": "Richtig. Die automatische Telefonansage gibt Auskunft über Buchungsmodalitäten für Eintrittskarten.",
            "ar": "صحيح. تقدم الرسالة الصوتية الآلية معلومات تفصيلية عن حجز وتذاكر الفعاليات.",
            "fr": "Vrai. Le message automatique informe sur la réservation de billets d'entrée."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da es sich genau um einen Ticket-Hotline-Dienst handelt.",
            "ar": "الخيار 'خطأ' غير صحيح، فالخدمة الهاتفية مخصصة لحجز التذاكر.",
            "fr": "L'affirmation est vraie car le service traite bien de la billetterie."
        }
    },
    "h8": {
        "quote": "Buchungen montags bis freitags bis 20.00 Uhr möglich",
        "whyCorrect": {
            "de": "Option c ist richtig. Ticketbestellungen werden von Montag bis Freitag bis 20:00 Uhr entgegengenommen.",
            "ar": "الخيار (c) صحيح. يمكن الحجز والطلب من الإثنين إلى الجمعة حتى الساعة 20:00 مساءً.",
            "fr": "L'option c est correcte. Les réservations sont ouvertes du lundi au vendredi jusqu'à 20h00."
        },
        "whyIncorrect": {
            "de": "Option a und b stimmen nicht mit den genannten Wochentagen und Öffnungszeiten überein.",
            "ar": "الخيارات (a) و(b) لا تتطابق مع مواعيد العمل الرسمية المذكورة.",
            "fr": "Les options a et b ne correspondent pas aux plages horaires énoncées."
        }
    },
    "h9": {
        "quote": "Hörtext Teil 1, Text 5: Verkehrsdurchsage der Deutschen Bahn / Störungsmeldung",
        "whyCorrect": {
            "de": "Falsch. Es handelt sich nicht um Reisewerbung, sondern um Reise- und Tarifinformationen der Bahn.",
            "ar": "خطأ. التسجيل ليس إعلانًا ترويجيًا للرحلات السياحية بل بلاغًا وإرشادات من السكك الحديدية.",
            "fr": "Faux. Il ne s'agit pas d'une publicité touristique mais d'une information de la compagnie ferroviaire."
        },
        "whyIncorrect": {
            "de": "Richtig ist unzutreffend, da kein kommerzieller Werbespot für Urlaubsreisen vorliegt.",
            "ar": "الخيار 'صحيح' غير دقيق لأن النص ليس إعلانًا تجاريًا للعطلات.",
            "fr": "L'affirmation n'est pas vraie car ce n'est pas un message publicitaire."
        }
    },
    "h10": {
        "quote": "Sondertickets für alle Verbindungen unter 100 Euro erhältlich",
        "whyCorrect": {
            "de": "Option b ist richtig. Sämtliche Sonderangebote liegen preislich unter der 100-Euro-Grenze.",
            "ar": "الخيار (b) صحيح. جميع العروض الترويجية المطروحة يقل سعرها عن 100 يورو.",
            "fr": "L'option b est correcte. Toutes les offres spéciales coûtent moins de 100 euros."
        },
        "whyIncorrect": {
            "de": "Option a ist das Gegenteil und Option c nennt nur einen einzelnen Preis.",
            "ar": "الخيار (a) عكس الواقع، والخيار (c) سعر محدد لرحلة واحدة فقط وليس للجميع.",
            "fr": "L'option a est inverse et la c mentionne un tarif unique."
        }
    },
    "h11": {
        "quote": "Gewinner unseres Sportmagazin-Preisausschreibens für eine Ballonfahrt",
        "whyCorrect": {
            "de": "Option a ist richtig. Die Teilnehmer haben die Ballonfahrt bei einem Quiz des Sportmagazins gewonnen.",
            "ar": "الخيار (a) صحيح. يحضر الفعالية الأشخاص الذين فازوا برحلة المنطاد في مسابقة المجلة الرياضية.",
            "fr": "L'option a est correcte. Les participants ont gagné ce vol en montgolfière lors d'un concours."
        },
        "whyIncorrect": {
            "de": "Option b und c sind falsch, da es sich um die tatsächlichen Gewinner des Wettbewerbs handelt.",
            "ar": "الخيارات الأخرى غير دقيقة فالحضور هم الفائزون الفعليون بالجائزة.",
            "fr": "Les autres options ne désignent pas directement les lauréats du concours."
        }
    },
    "h12": {
        "quote": "Unsere erfahrenen Ballonpiloten fliegen bereits seit über zwanzig Jahren",
        "whyCorrect": {
            "de": "Option c ist richtig. Die Ballonführer besitzen eine langjährige Flugerfahrung von mehr als 20 Jahren.",
            "ar": "الخيار (c) صحيح. يتمتع طيارو المناطيد بخبرة طيران عريقة تزيد عن 20 عامًا.",
            "fr": "L'option c est correcte. Les pilotes de montgolfière volent depuis plus de 20 ans."
        },
        "whyIncorrect": {
            "de": "Option a und b werden so im Text nicht als Merkmal der Piloten ausgesagt.",
            "ar": "الخيارات (a) و(b) لم تُذكر كصفة لطياري المنطاد في النص.",
            "fr": "Les options a et b ne reflètent pas les affirmations du guide."
        }
    },
    "h13": {
        "quote": "Heißluftballons können Höhen von bis zu 3000 Metern erreichen",
        "whyCorrect": {
            "de": "Option c ist richtig. Ein Heißluftballon kann bis zu 3.000 Meter hoch in den Himmel steigen.",
            "ar": "الخيار (c) صحيح. يمكن للمنطاد الارتفاع في الجو حتى مسافة تصل إلى 3000 متر.",
            "fr": "L'option c est correcte. La montgolfière peut monter jusqu'à 3 000 mètres d'altitude."
        },
        "whyIncorrect": {
            "de": "30 Meter und 300 Meter sind deutlich zu niedrig für die maximale Steighöhe.",
            "ar": "30 و300 متر ارتفاعات منخفضة جدًا مقارنة بالقدرة القصوى للمنطاد.",
            "fr": "30 et 300 mètres sont très en-deçà du plafond maximal mentionné."
        }
    },
    "h14": {
        "quote": "Vergessen Sie auf keinen Fall Ihre Kamera oder Ihren Fotoapparat für fantastische Bilder",
        "whyCorrect": {
            "de": "Option b ist richtig. Den Fahrgästen wird dringend empfohlen, eine Fotokamera mitzubringen.",
            "ar": "الخيار (b) صحيح. يُنصح الركاب بإحضار آلة تصوير لالتقاط مناظر مذهلة.",
            "fr": "L'option b est correcte. Il est vivement conseillé aux passagers d'emporter un appareil photo."
        },
        "whyIncorrect": {
            "de": "Option a und c sind falsch (gerade der Blick nach unten ist das Erlebnis).",
            "ar": "الخيارات (a) و(c) غير صحيحة، فالنظر للأسفل هو جوهر التجربة الرائعة.",
            "fr": "Options a et c erronées : observer le paysage en bas est tout l'intérêt du vol."
        }
    },
    "h15": {
        "quote": "Im ersten Ballon der Brüder Montgolfier befanden sich Tiere: ein Schaf, eine Ente und ein Hahn",
        "whyCorrect": {
            "de": "Option c ist richtig. Als erste Passagiere stiegen Tiere in den Korb des Ballons.",
            "ar": "الخيار (c) صحيح. كانت الكائنات الأولى التي صعدت في المنطاد حيوانات (خروف وبطة وديك).",
            "fr": "L'option c est correcte. Les premiers passagers de la montgolfière historique étaient des animaux."
        },
        "whyIncorrect": {
            "de": "Weder ein König noch die Erfinder selbst saßen im allerersten Testballon.",
            "ar": "لم يكن الملك ولا الأخوان مونتغولفييه على متن أول رحلة تجريبية في التاريخ.",
            "fr": "Ni le roi ni les frères Montgolfier ne prirent place dans ce premier vol d'essai."
        }
    },
    "h16": {
        "quote": "Herr Brunner plant und organisiert die Reise partnerschaftlich gemeinsam mit der Klasse",
        "whyCorrect": {
            "de": "Richtig. Lehrer Herr Brunner bereitet die Klassenreise in enger Zusammenarbeit mit den Schülern vor.",
            "ar": "صحيح. يقوم المعلم السيد برونر بتنظيم الرحلة المدرسية بمشاركة وتنسيق كامل مع الطلاب.",
            "fr": "Vrai. M. Brunner organise le voyage scolaire en étroite concertation avec les élèves."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da Schüler und Lehrer die Vorbereitung gemeinsam gestalten.",
            "ar": "الخيار 'خطأ' غير صحيح فالتحضير يتم بروح تشاركية مشتركة.",
            "fr": "Choisir 'Faux' est incorrect car les préparatifs sont conjoints."
        }
    },
    "h17": {
        "quote": "Die geplante Radtour wurde nach Abstimmung von der Klasse abgelehnt",
        "whyCorrect": {
            "de": "Falsch. Die Klasse hat sich gegen eine Fahrradtour entschieden und andere Reiseziele bevorzugt.",
            "ar": "خطأ. صوتت أغلبية الفصل ضد القيام بجولة بالدراجات واختاروا وجهة أخرى.",
            "fr": "Faux. La classe a rejeté l'option de la randonnée cycliste lors du vote."
        },
        "whyIncorrect": {
            "de": "Richtig ist unzutreffend, da keine Radtour beschlossen wurde.",
            "ar": "الخيار 'صحيح' غير صحيح لأن فكرة جولة الدراجات تم استبعادها.",
            "fr": "L'affirmation est fausse car l'itinéraire à vélo a été écarté."
        }
    },
    "h18": {
        "quote": "Viele Schüler lernen als Fremdsprache auch Französisch oder Italienisch",
        "whyCorrect": {
            "de": "Falsch. Die Schüler lernen nicht nur Englisch, sondern auch andere moderne Fremdsprachen.",
            "ar": "خطأ. لا يقتصر الطلاب على تعلم اللغة الإنجليزية فقط، بل يدرسون لغات أجنبية أخرى كالفرنسية.",
            "fr": "Faux. Les élèves apprennent également d'autres langues étrangères comme le français."
        },
        "whyIncorrect": {
            "de": "Richtig trifft nicht zu, da Englisch keineswegs die einzige Fremdsprache ist.",
            "ar": "الخيار 'صحيح' خاطئ لأن الإنجليزية ليست لغتهم الأجنبية الوحيدة.",
            "fr": "L'affirmation est erronée car l'anglais n'est pas leur unique langue d'apprentissage."
        }
    },
    "h19": {
        "quote": "Viktoria war begeistert von London und schwärmte von ihrem Aufenthalt",
        "whyCorrect": {
            "de": "Falsch. Viktoria fand die Reise nach London wunderbar und keineswegs enttäuschend.",
            "ar": "خطأ. كانت فيكتوريا معجبة للغاية برحلتها إلى لندن وقضت أوقاتًا رائعة.",
            "fr": "Faux. Viktoria a été enchantée par son séjour à Londres."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da London ihr sehr gut gefallen hat.",
            "ar": "الخيار 'صحيح' خاطئ، فلندن نالت إعجابها الكبير.",
            "fr": "L'affirmation est fausse car son voyage à Londres lui a beaucoup plu."
        }
    },
    "h20": {
        "quote": "Herr Brunner hatte nichts gegen Paris einzuwenden, wenn es für alle machbar ist",
        "whyCorrect": {
            "de": "Falsch. Herr Brunner war nicht grundsätzlich gegen Paris, sondern wies nur auf die finanziellen Aspekte hin.",
            "ar": "خطأ. لم يكن السيد برونر معارضًا لباريس في حد ذاتها، بل كان حريصًا على مناسبة التكاليف لجميع العائلات.",
            "fr": "Faux. M. Brunner n'était pas opposé au séjour à Paris, il veillait seulement aux contraintes budgétaires."
        },
        "whyIncorrect": {
            "de": "Richtig trifft nicht zu, da er Paris keineswegs ablehnte.",
            "ar": "الخيار 'صحيح' غير دقيق فلم يبدِ رفضًا للمدينة بذاتها.",
            "fr": "L'affirmation est fausse car il ne s'est pas opposé à la destination en soi."
        }
    },
    "h21": {
        "quote": "Für mehrere Familien mit geringerem Einkommen ist eine teure Auslandsreise zu kostspielig",
        "whyCorrect": {
            "de": "Richtig. Einige Eltern können das nötige Geld für eine weite Reise ins Ausland nicht aufbringen.",
            "ar": "صحيح. هناك عائلات تجد تكاليف السفر إلى الخارج مرتفعة جدًا وتفوق إمكانياتها المادية.",
            "fr": "Vrai. Le coût d'un voyage à l'étranger s'avère trop élevé pour plusieurs familles modestes."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da die hohen Kosten ein zentrales Problem für einige Eltern darstellen.",
            "ar": "الخيار 'خطأ' غير صحيح، فالمشكلة المالية حقيقة واقعة أثيرت خلال النقاش.",
            "fr": "Choisir 'Faux' est incorrect car le fardeau financier pour certains parents est réel."
        }
    },
    "h22": {
        "quote": "Die Schüler legen großen Wert auf Zusammenhalt: Entweder fahren alle mit oder niemand",
        "whyCorrect": {
            "de": "Richtig. Der Klasse ist es ein wichtiges Anliegen, dass ausnahmslos alle Mitschüler teilnehmen können.",
            "ar": "صحيح. يصر التلاميذ على التضامن بحيث يتمكن جميع زملاء الفصل بلا استثناء من السفر والمشاركة.",
            "fr": "Vrai. Les élèves tiennent fermement à ce que chaque camarade sans exception puisse participer."
        },
        "whyIncorrect": {
            "de": "Falsch wäre unpassend: Solidarität und gemeinsame Teilnahme stehen für die Jugendlichen im Vordergrund.",
            "ar": "الخيار 'خطأ' غير وارد، فتضامن الطلاب ومشاركة الجميع مبدأ أساسي لهم.",
            "fr": "L'affirmation est vraie : la solidarité collective est leur priorité absolue."
        }
    },
    "h23": {
        "quote": "Lukas Tilmann schildert die skeptischen Reaktionen des Publikums auf seine erste Kunstinstallation",
        "whyCorrect": {
            "de": "Lukas Tilmann (c) sagt dies. Als Künstler musste er erst lernen, mit den ablehnenden Reaktionen auf sein erstes Werk umzugehen.",
            "ar": "لوكاس تيلمان (c) هو قائل هذه العبارة. تحدث كفنان عن التحدي في تقبل ردود أفعال الناس الأولى تجاه فنه.",
            "fr": "Lukas Tilmann (c) s'exprime ainsi. En tant qu'artiste, il a dû faire face aux réactions déroutantes lors de sa première œuvre."
        },
        "whyIncorrect": {
            "de": "Weder der Moderator noch Juliane Schulz sprechen über persönliche Erfahrungen mit Kunstwerken.",
            "ar": "لم يتطرق منسق الحوار ولا يوليانه شولتز إلى تجارب فنية شخصية.",
            "fr": "Ni le modérateur ni Juliane ne partagent une expérience de création artistique."
        }
    },
    "h24": {
        "quote": "Lukas Tilmann erklärt, dass er seine Kunstobjekte aus unverbrauchten Lebensmittelresten kreiert",
        "whyCorrect": {
            "de": "Lukas Tilmann (c) erklärt seine Arbeitsweise: Seine Skulpturen entstehen aus Lebensmitteln, die übrig bleiben.",
            "ar": "لوكاس تيلمان (c) يوضح أسلوبه الفني: مجسماته تُصنع مما يتبقى ويفضل من الأطعمة.",
            "fr": "Lukas Tilmann (c) détaille son art : ses créations prennent forme à partir des surplus alimentaires."
        },
        "whyIncorrect": {
            "de": "Diese Erläuterung zur Entstehung der Kunstobjekte stammt vom Künstler selbst.",
            "ar": "هذا التفسير لكيفية صنع المنحوتات يصدر مباشرة عن الفنان نفسه.",
            "fr": "Cette description de fabrication émane exclusivement de l'artiste."
        }
    },
    "h25": {
        "quote": "Juliane Schulz von der Tafel betont, dass auch in wohlhabenden Ländern viele Bürger auf Nahrungshilfe angewiesen sind",
        "whyCorrect": {
            "de": "Juliane Schulz (b) betont als Vertreterin der Tafel, dass auch in Europa viele Menschen Hunger leiden.",
            "ar": "يوليانه شولتز (b) تؤكد من واقع عملها في بنك الطعام 'Tafel' أن الجوع والفقر موجودان أيضًا في الدول الغنية.",
            "fr": "Juliane Schulz (b) rappelle, via son action caritative, que la précarité alimentaire existe aussi dans les pays développés."
        },
        "whyIncorrect": {
            "de": "Dies ist das Kernanliegen von Juliane Schulz und ihrer Tafel-Arbeit.",
            "ar": "هذه القضية تمثل صلب رسالة يوليانه شولتز ودورها الإنساني في الجمعية.",
            "fr": "C'est l'essence même du combat de terrain mené par Juliane Schulz."
        }
    },
    "h26": {
        "quote": "Moderator zitiert die Statistik über das Nahrungsmittelaufkommen im europäischen Müll",
        "whyCorrect": {
            "de": "Der Moderator (a) führt die weltweite Statistik an, wonach die weggeworfenen Lebensmittel Europas alle Hungrigen ernähren könnten.",
            "ar": "منسق الحوار (a) هو من استشهد بالإحصائية التي تفيد بأن هدر الطعام في أوروبا يكفي لإطعام جميع جياع العالم.",
            "fr": "Le modérateur (a) cite la statistique selon laquelle le gaspillage alimentaire en Europe suffirait à nourrir tous les affamés."
        },
        "whyIncorrect": {
            "de": "Der Moderator moderiert mit dieser aufrüttelnden Zahl das Thema an.",
            "ar": "طرح المذيع هذا الرقم الإحصائي في مستهل النقاش لإثراء الحوار.",
            "fr": "Le présentateur introduit cette donnée chiffrée pour alimenter le débat."
        }
    },
    "h27": {
        "quote": "Juliane Schulz erläutert die rechtlichen Barrieren und Hygienevorschriften für Supermärkte",
        "whyCorrect": {
            "de": "Juliane Schulz (b) weist darauf hin, dass Vorschriften den Weiterverkauf oder das Verschenken bestimmter abgelaufener Waren untersagen.",
            "ar": "يوليانه شولتز (b) توضح أن اللوائح الصارمة وقوانين النظافة تحظر أحيانًا بيع أو التبرع بمنتجات معينة.",
            "fr": "Juliane Schulz (b) explique que les réglementations sanitaires interdisent de vendre ou céder certains produits."
        },
        "whyIncorrect": {
            "de": "Juliane kennt diese Problematik aus dem Alltag der Lebensmittelverteilung.",
            "ar": "تتحدث يوليانه من واقع خبرتها اليومية في توزيع وتلقي تبرعات الأغذية.",
            "fr": "Juliane expose ce problème concret rencontré dans la gestion des banques alimentaires."
        }
    },
    "h28": {
        "quote": "Moderator hebt die ökologischen Folgen von Treibhausgasen durch verrottende Lebensmittelreste hervor",
        "whyCorrect": {
            "de": "Der Moderator (a) lenkt die Diskussion auf den Umweltaspekt und die Belastung durch weggeworfene Nahrung.",
            "ar": "منسق الحوار (a) يثير مسألة الأثر البيئي الخطير والغازات المنبعثة من تحلل النفايات الغذائية.",
            "fr": "Le modérateur (a) oriente le débat sur l'impact écologique et les gaz à effet de serre générés par les déchets alimentaires."
        },
        "whyIncorrect": {
            "de": "Diese übergeordnete Frage zum Umweltschutz formuliert der Gesprächsleiter.",
            "ar": "صاغ المذيع هذا السؤال المحوري حول البيئة لتوجيه دفة الحوار.",
            "fr": "Cette mise en perspective environnementale est posée par le journaliste."
        }
    },
    "h29": {
        "quote": "Juliane Schulz kritisiert die Aktion des „Containerns“ als ineffiziente und rein provokante Scheinlösung",
        "whyCorrect": {
            "de": "Juliane Schulz (b) hält das Essen aus dem Supermarktmüll als Protestform für wirkungslos und sinnlos.",
            "ar": "يوليانه شولتز (b) ترى أن أكل بقايا طعام القمامة كنوع من الاحتجاج لا يقدم حلاً حقيقيًا ويعد تصرفًا عديم الجدوى.",
            "fr": "Juliane Schulz (b) juge inefficace et absurde de se nourrir dans les poubelles par simple esprit de contestation."
        },
        "whyIncorrect": {
            "de": "Juliane befürwortet geordnete Hilfsorganisationen statt unhygienischer Müllproteste.",
            "ar": "تدعو يوليانه للعمل المنظم المؤسسي لمساعدة المحتاجين بدلاً من الاحتجاج العشوائي.",
            "fr": "Juliane privilégie l'aide sociale structurée plutôt que des provocations stériles."
        }
    },
    "h30": {
        "quote": "Lukas Tilmann kündigt an, die Einnahmen seiner Kunstausstellung an die Tafel zu spenden",
        "whyCorrect": {
            "de": "Lukas Tilmann (c) möchte mit den Erlösen seiner Ausstellung die Arbeit der Hilfsorganisation Tafel unterstützen.",
            "ar": "لوكاس تيلمان (c) يعلن تخصيص أرباح وعائدات معرضه الفني لدعم بنك الطعام 'Tafel'.",
            "fr": "Lukas Tilmann (c) annonce que les recettes de son exposition artistique seront reversées à l'association Tafel."
        },
        "whyIncorrect": {
            "de": "Der Künstler kündigt diesen konkreten Beitrag zur Unterstützung der Tafel selbst an.",
            "ar": "أعلن الفنان لوكاس هذه المبادرة التبرعية بنفسه لدعم الجمعية.",
            "fr": "C'est l'artiste lui-même qui prend l'engagement de faire ce don solidaire."
        }
    }
},
  "modellsatz-5": {
    "1": {
        "quote": "aber da ich nichts Besseres zu tun hatte und das Wetter ausnahmsweise gut war, stimmte ich zu.",
        "whyCorrect": {
            "de": "Falsch. Am Abend des Fests war das Wetter ausnahmsweise gut. Es war während des Fests also keineswegs schlechtes Wetter.",
            "ar": "خطأ. كان الطقس في مساء المهرجان جيدًا على غير العادة («ausnahmsweise gut»)، وبالتالي لم يكن الطقس سيئًا أثناء المهرجان.",
            "fr": "Faux. Le soir de la fête, le temps était exceptionnellement beau (« ausnahmsweise gut ») ; il ne faisait donc pas mauvais temps pendant la fête."
        },
        "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da Nicole ausdrücklich betont, dass das Wetter an diesem Samstagabend gut war.",
            "ar": "الخيار 'صحيح' غير دقيق لأن نيكول أكدت بوضوح تحسن الطقس واستقراره مساء يوم السبت.",
            "fr": "Choisir 'Vrai' est incorrect car Nicole souligne expressément que le temps s'était amélioré pour la soirée."
        }
    },
    "2": {
        "quote": "Das Fest fand im Zentrum statt, das für den Verkehr gesperrt war. Wir konnten also nicht mit dem Auto in die Innenstadt fahren und mussten zu Fuß gehen.",
        "whyCorrect": {
            "de": "Richtig. Die Innenstadt war für den Verkehr komplett gesperrt; Privatwagen durften nicht hineinfahren und die Besucher mussten zu Fuß gehen.",
            "ar": "صحيح. كان مركز المدينة مغلقًا بالكامل أمام حركة المرور؛ فلم يُسمح بدخول السيارات وكان على الزوار الذهاب سيرًا على الأقدام.",
            "fr": "Vrai. Le centre-ville était entièrement fermé à la circulation ; les voitures particulières ne pouvaient pas y entrer et il fallait marcher."
        },
        "whyIncorrect": {
            "de": "Falsch ist unpassend, da die Sperrung des Stadtzentrums für Autos im Text unmissverständlich geschildert wird.",
            "ar": "الخيار 'خطأ' غير صحيح، فالنص يذكر صراحة أن السيارات لم تتمكن من الدخول للمركز بسبب إغلاقه للمرور.",
            "fr": "Choisir 'Faux' est incorrect car la fermeture du centre aux voitures est mentionnée sans équivoque."
        }
    },
    "3": {
        "quote": "Die Geschäfte waren alle auf, Straßen und Gassen waren mit Kerzen erleuchtet. Es war „lange Einkaufsnacht“.",
        "whyCorrect": {
            "de": "Falsch. Im Text steht wörtlich: „Die Geschäfte waren alle auf.“ Es waren also überhaupt keine Läden geschlossen, nicht einmal wenige.",
            "ar": "خطأ. ينص النص حرفيًا على أن: «المتاجر كانت جميعها مفتوحة» (alle auf). أي لم يكن هناك أي متجر مغلق، ولا حتى القليل منها.",
            "fr": "Faux. Le texte stipule littéralement : « Les magasins étaient tous ouverts » (alle auf). Aucun magasin n'était donc fermé."
        },
        "whyIncorrect": {
            "de": "Richtig trifft nicht zu: „alle auf“ bedeutet eine lückenlose Öffnung aller Geschäfte.",
            "ar": "الخيار 'صحيح' غير سليم لأن عبارة 'alle auf' تعني أن كافة المتاجر بلا استثناء كانت مفتوحة.",
            "fr": "L'affirmation n'est pas vraie car tous les commerces sans exception étaient ouverts."
        }
    },
    "4": {
        "quote": "Für das leibliche Wohl war bestens gesorgt: Bratwurst, Currywurst, Pommes, Erbsensuppe mit Bockwurst – und natürlich Bier von der heimischen Brauerei.",
        "whyCorrect": {
            "de": "Falsch. Die heimische Brauerei lieferte lediglich das Bier. Zudem gibt es keinerlei Hinweis darauf, dass das Essen umsonst (kostenlos) gewesen wäre.",
            "ar": "خطأ. قدمت مصبغة الجعة المحلية المشروب فقط، ولا توجد أي إشارة في النص تفيد بأن الطعام كان يُقدم مجانًا («umsonst»).",
            "fr": "Faux. La brasserie locale ne fournissait que la bière, et rien n'indique dans le texte que les repas étaient gratuits (« umsonst »)."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da auf Volksfesten Speisen bezahlt werden müssen und im Text nichts von Gratisessen steht.",
            "ar": "الخيار 'صحيح' خاطئ، فالطعام في مثل هذه المهرجانات يباع بمقابل ولم يذكر النص أنه كان مجانيًا.",
            "fr": "Choisir 'Vrai' est faux, car le texte ne dit absolument pas que les plats étaient distribués gratuitement."
        }
    },
    "5": {
        "quote": "In der sommerlichen Nacht sah man die Artisten ihre Kunststücke vorführen und man hörte nur das Knistern und Zischen des Feuers.",
        "whyCorrect": {
            "de": "Falsch. Es gab keine laute Musik bei der Show. Man hörte im Gegenteil ausschließlich das Knistern und Zischen der Flammen.",
            "ar": "خطأ. لم ترافق العرض أي موسيقى صاخبة، بل على العكس كان الصوت الوحيد المسموع هو طقطقة وهسيس النار («nur das Knistern und Zischen des Feuers»).",
            "fr": "Faux. Il n'y avait pas de musique forte lors du spectacle ; on n'entendait au contraire que le crépitement et le sifflement du feu."
        },
        "whyIncorrect": {
            "de": "Richtig ist unzutreffend: Die Rockband spielte an einem anderen Ort (Burg-Kellerei), während es am Brunnen still war bis auf das Feuer.",
            "ar": "الخيار 'صحيح' غير مطابق: فرقة الروك كانت تعزف في مكان آخر، بينما عند النافورة لم يكن هناك سوى صوت اشتعال النار.",
            "fr": "L'affirmation est fausse : le groupe de rock jouait ailleurs, tandis qu'auprès de la fontaine il n'y avait que le bruit du feu."
        }
    },
    "6": {
        "quote": "Ich werde dieses Fest nie vergessen und kann nur jedem empfehlen: Auch Michelstadt im Odenwald ist eine Reise wert (besonders im August!)",
        "whyCorrect": {
            "de": "Richtig. Nicole spricht eine klare Empfehlung aus: Michelstadt sei „eine Reise wert“, ein Besuch lohne sich also definitiv.",
            "ar": "صحيح. توصي نيكول الجميع بزيارة ميشيلشتات مؤكدة أنها «تستحق السفر إليها» («eine Reise wert»)، أي أن زيارتها مجدية وممتعة.",
            "fr": "Vrai. Nicole recommande chaleureusement la visite en affirmant que Michelstadt « vaut le voyage » (« eine Reise wert »)."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da sie den Lesern einen Besuch der Stadt im August ausdrücklich ans Herz legt.",
            "ar": "الخيار 'خطأ' غير سليم لأن نيكول تختتم رسالتها بتشجيع القراء صراحة على السفر إلى ميشيلشتات.",
            "fr": "Choisir 'Faux' ne convient pas, puisqu'elle invite expressément le lecteur à visiter la petite ville."
        }
    },
    "7": {
        "quote": "... sind es die Haushalte älterer Bürger, die zu einer stillstehenden Statistik der Online-Haushalte in der Schweiz führen: Laut Bundesamt für Statistik wollen diese 20 Prozent partout nicht online gehen.",
        "whyCorrect": {
            "de": "b ist richtig. Der Artikel beschreibt, wie sich die Zahl der internetfähigen Haushalte in der Schweiz entwickelt und weshalb das Wachstum wegen der Senioren stagniert.",
            "ar": "(b) هو الصحيح. يتناول المقال تطور نسبة الأسر المتصلة بالإنترنت في سويسرا وأسباب ركود الإحصائيات نتيجة عزوف فئة كبار السن.",
            "fr": "b est correct. L'article traite de l'évolution de la proportion de ménages connectés en Suisse et de la stagnation due aux seniors."
        },
        "whyIncorrect": {
            "de": "a und c sind falsch: Es geht weder primär um Online-Spiele noch steht der Schutz von Kindern im Mittelpunkt des Artikels.",
            "ar": "الخيارات (a) و (c) غير صحيحة: فالمقال لا يدور حول ألعاب الإنترنت ولا يركز أساسًا على حماية الأطفال بل على اتجاهات استخدام الإنترنت.",
            "fr": "a et c sont faux : le texte ne porte ni principalement sur les jeux en ligne ni sur la protection des enfants."
        }
    },
    "8": {
        "quote": "Bei einer Befragung wurden mangelndes Interesse, wenig Fachkenntnis oder kein Selbstvertrauen von den älteren Menschen angegeben.",
        "whyCorrect": {
            "de": "a ist richtig. „Wenig Fachkenntnis“ bedeutet, dass Senioren selten über fundierte Computerkenntnisse verfügen.",
            "ar": "(a) هو الصحيح. عبارة «wenig Fachkenntnis» (قلة المعرفة التخصصية) تعني ندرة امتلاك كبار السن لمهارات استخدام الحاسوب.",
            "fr": "a est correct. L'expression « peu de compétences techniques » (wenig Fachkenntnis) montre que les seniors ont rarement des connaissances en informatique."
        },
        "whyIncorrect": {
            "de": "b und c treffen auf jüngere Internetnutzer zu, nicht auf die befragten Offline-Senioren.",
            "ar": "الخياران (b) و (c) يخصان مستخدمي الإنترنت من الشباب والآباء وليس كبار السن غير المتصلين بالشبكة.",
            "fr": "b et c concernent les jeunes utilisateurs d'Internet et non les personnes âgées qui refusent de se connecter."
        }
    },
    "9": {
        "quote": "Damit liegt die Schweiz hinter den skandinavischen Ländern und den Niederlanden, wo insgesamt mehr private Haushalte Internet haben als bei uns.",
        "whyCorrect": {
            "de": "b ist richtig. In den Niederlanden haben im Vergleich zur Schweiz mehr Privathaushalte einen Internetanschluss.",
            "ar": "(b) هو الصحيح. النص يذكر صراحة أن في هولندا نسبة أسر تمتلك إنترنت أكبر مما هو عليه الحال في سويسرا.",
            "fr": "b est correct. Aux Pays-Bas, une proportion plus élevée de ménages privés a accès à Internet par rapport à la Suisse."
        },
        "whyIncorrect": {
            "de": "a und c sind unbegründet: Über identische Probleme oder Spielgewohnheiten in den Niederlanden steht nichts im Text.",
            "ar": "الخياران (a) و (c) خاطئان: لم يذكر النص أي تشابه في المشكلات أو إدمان ألعاب لدى الهولنديين.",
            "fr": "a et c sont infondés : rien n'indique des problèmes similaires ou des habitudes de jeu aux Pays-Bas."
        }
    },
    "10": {
        "quote": "Wie lässt sich der zunehmende Konsum von Functional-Food begründen? Immer mehr Menschen erklären die Gesundheit zu ihrem höchsten Gut: Sie wollen vorbeugen oder reparieren, ohne auf Genuss zu verzichten.",
        "whyCorrect": {
            "de": "c ist richtig. Der Text erläutert detailliert die Gründe für die große Beliebtheit und den Markterfolg von funktionellen Lebensmitteln (Functional Food).",
            "ar": "(c) هو الصحيح. يشرح المقال بالتفصيل دوافع الإقبال المتزايد والشعبية الكبيرة للأغذية الوظيفية («Functional-Food»).",
            "fr": "c est correct. Le texte analyse précisément pourquoi les aliments fonctionnels (Functional Food) connaissent un tel succès populaire."
        },
        "whyIncorrect": {
            "de": "a ist zu allgemein und b widerspricht dem Inhalt (Functional Food ist Essen mit Zusatznutzen, keine Verweigerung von Medikamenten).",
            "ar": "الخيار (a) عام للغاية، والخيار (b) غير صحيح ولا يتطابق مع مضمون النص.",
            "fr": "a est trop vague et b contredit le texte (les aliments fonctionnels ne remplacent pas un refus médical)."
        }
    },
    "11": {
        "quote": "Immer mehr Menschen erklären die Gesundheit zu ihrem höchsten Gut: Sie wollen vorbeugen oder reparieren, ohne auf Genuss zu verzichten.",
        "whyCorrect": {
            "de": "b ist richtig. Wer etwas zum „höchsten Gut“ erklärt, für den ist dieser Wert das Allerwichtigste.",
            "ar": "(b) هو الصحيح. اعتبار الشيء «أعلى وأثمن ما يملك الإنسان» («höchstes Gut») يعني أنه يمثل الأولوية القصوى والأهم على الإطلاق.",
            "fr": "b est correct. Qualifier quelque chose de « bien le plus précieux » (höchstes Gut) signifie que cela est devenu la chose la plus importante."
        },
        "whyIncorrect": {
            "de": "a behauptet das genaue Gegenteil („nur sehr wenige“) und c stellt einen falschen Zwang dar.",
            "ar": "الخيار (a) يناقض النص تمامًا، والخيار (c) يدعي وجود إجبار غير موجود في الواقع.",
            "fr": "a affirme le contraire (« très peu de gens ») et c invente une contrainte inexistante."
        }
    },
    "12": {
        "quote": "Stark im Trend liegt zurzeit Functional-Food. Das ist Essen, das nicht nur satt macht, sondern auch für die Gesundheit sorgt.",
        "whyCorrect": {
            "de": "a ist richtig. „Stark im Trend liegen“ bedeutet umgangssprachlich und treffend, dass etwas modern, populär und „in“ ist.",
            "ar": "(a) هو الصحيح. عبارة «stark im Trend liegen» تعني اصطلاحًا أن هذا النوع من الغذاء رائج جدًا ومواكب للموضة العصرية («ist in»).",
            "fr": "a est correct. L'expression « stark im Trend liegen » est un synonyme exact de « être tendance / être in »."
        },
        "whyIncorrect": {
            "de": "b wird im Text nicht so geurteilt und c ist falsch, da Functional Food massiv beworben wird.",
            "ar": "الخيار (b) لم يصدر به حكم سلبي، و(c) غير صحيح لأن المنتجات تُسوق بإعلانات مكثفة.",
            "fr": "b n'est pas affirmé dans le texte et c est faux car ces produits font l'objet d'une forte publicité."
        }
    },
    "13": {
        "quote": "KEKS e.V. — Hilfe für kranke Kinder: „Wir helfen und unterstützen bundesweit Kinder in Deutschland, die wegen einer kranken Speiseröhre nicht essen können. Spendenkonto: Baden-Württembergische Bank ...“",
        "whyCorrect": {
            "de": "Anzeige I passt. Frau Wickert möchte Geld an eine Hilfsorganisation für Kinder in Deutschland spenden; KEKS e.V. hilft genau bundesweit erkrankten Kindern und gibt ein Spendenkonto an.",
            "ar": "الإعلان I هو الأنسب. ترغب السيدة فيكيرت في التبرع بالمال لمنظمة تعتني بالأطفال داخل ألمانيا، وجمعية KEKS e.V. تدعم الأطفال المرضى في ألمانيا وتعلن عن حساب مصرفي للتبرع.",
            "fr": "L'annonce I correspond. Mme Wickert souhaite faire un don financier pour des enfants en Allemagne ; l'association KEKS e.V. soutient les enfants malades dans le pays et fournit un compte de dons."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen (wie B: Ärzte ohne Grenzen) wirken im weltweiten Ausland oder fordern persönliche Zeit statt Geld.",
            "ar": "الإعلانات الأخرى إما تنشط خارج ألمانيا (مثل منظمة أطباء بلا حدود) أو تطلب التطوع بالوقت وليس التبرع بالمال.",
            "fr": "Les autres annonces (comme B : Médecins sans frontières) opèrent à l'étranger ou demandent du bénévolat et non un don monétaire."
        }
    },
    "14": {
        "quote": "NAJU — Naturschutzjugend: „Du bist gerne in der Natur und möchtest dich für ihren Schutz einsetzen? Dann bist du bei der NAJU genau richtig! Werde zusammen mit 75.000 anderen Kindern und Jugendlichen aktiv für die Natur!“",
        "whyCorrect": {
            "de": "Anzeige C passt. Herr Geiger möchte als Biologielehrer seine Schüler (Kinder/Jugendliche) für Natur- und Umweltschutz begeistern; die NAJU ist die größte Jugendorganisation auf diesem Gebiet.",
            "ar": "الإعلان C هو الأنسب. أستاذ علم الأحياء يرغب في غرس حب حماية الطبيعة لدى تلاميذه (الأطفال والشباب)، وجمعية NAJU هي أكبر منظمة مخصصة للناشئة والشباب في هذا المجال.",
            "fr": "L'annonce C convient. Le professeur de biologie veut intéresser ses élèves à la protection de la nature ; la NAJU est la plus grande association de jeunes engagés dans ce domaine."
        },
        "whyIncorrect": {
            "de": "Anzeige F richtet sich an Geschenksuchende und Anzeige H wendet sich spezifisch an Eltern von Neugeborenen.",
            "ar": "الإعلان F مخصص لشراء هدية لصديق، والإعلان H مخصص للأسر التي رزقت بمواليد جدد.",
            "fr": "L'annonce F vise les personnes cherchant un cadeau et l'annonce H s'adresse aux parents de nouveau-nés."
        }
    },
    "15": {
        "quote": "Verschenken Sie eine Mitgliedschaft im NABU! „Sie möchten einem Freund etwas schenken und gleichzeitig damit etwas Gutes für den Erhalt und Schutz unserer Natur und Umwelt tun? ... Dann verschenken Sie doch eine Mitgliedschaft im NABU!“",
        "whyCorrect": {
            "de": "Anzeige F passt perfekt. Lukas sucht ein Geburtstagsgeschenk für seinen naturbegeisterten Freund Tobias; Anzeige F schlägt genau das Verschenken einer NABU-Mitgliedschaft vor.",
            "ar": "الإعلان F هو الخيار المثالي. يبحث لوكاس عن هدية عيد ميلاد لصديقه توبياس المحب للطبيعة والحيوانات؛ والإعلان F يعرض تمامًا فكرة إهداء عضوية في جمعية حماية البيئة.",
            "fr": "L'annonce F est parfaite. Lukas cherche un cadeau d'anniversaire pour son ami Tobias passionné de nature ; l'annonce F propose d'offrir une adhésion au NABU."
        },
        "whyIncorrect": {
            "de": "Anzeige C ist für Kinder und Jugendliche selbst gedacht, nicht als Geschenkidee unter Freunden.",
            "ar": "الإعلان C مخصص لانضمام الأطفال والشباب بأنفسهم وليس كفكرة هدية بين الأصدقاء.",
            "fr": "L'annonce C s'adresse aux enfants et adolescents eux-mêmes et non sous forme de cadeau."
        }
    },
    "16": {
        "quote": "Miteinander leben? „Die Bürgerinitiative ist eine Begegnungsstätte für alle Menschen in der Nachbarschaft – egal welcher Nationalität. Wir setzen uns für Toleranz ein und treten gegen Rassismus und Gewalt auf. Wir wollen ausländischen BürgerInnen ihre Integration ... erleichtern.“",
        "whyCorrect": {
            "de": "Anzeige E passt. Sara will sich in der Nachbarschaft aktiv für das friedliche Miteinander von Menschen unterschiedlicher Herkunft einsetzen; genau dies ist das Kernziel dieser Bürgerinitiative.",
            "ar": "الإعلان E هو الأنسب. تريد سارة العمل بنشاط من أجل التعايش السلمي والتسامح بين مختلف الجنسيات في الحي، وهو الهدف المباشر للمبادرة الأهلية المعلن عنها.",
            "fr": "L'annonce E convient. Sara veut s'engager pour la cohabitation pacifique et l'intégration des personnes d'origines diverses dans le quartier, ce qui est le projet de cette initiative citoyenne."
        },
        "whyIncorrect": {
            "de": "Anzeige J befasst sich mit Kriminalitätsbekämpfung in der Nachbarschaft, nicht mit internationalem Zusammenleben und Integration.",
            "ar": "الإعلان J يركز على مكافحة الجريمة بين الجيران وليس على التنوع الثقافي والاندماج.",
            "fr": "L'annonce J traite de la prévention contre la délinquance entre voisins, et non de l'intégration multiculturelle."
        }
    },
    "17": {
        "quote": "Keine Anzeige passt zu dem Wunsch, armen jungen Familien finanzielle oder soziale Hilfen zukommen zu lassen.",
        "whyCorrect": {
            "de": "X ist richtig. Keine der Anzeigen bietet Hilfe speziell für finanziell notleidende oder arme junge Familien an.",
            "ar": "(X) هو الخيار الصحيح. لا يوجد أي إعلان يقدم مساعدات مالية أو رعاية مخصصة للعائلات الشابة الفقيرة.",
            "fr": "X est correct. Aucune annonce ne propose d'aide spécifique aux jeunes familles défavorisées ou pauvres."
        },
        "whyIncorrect": {
            "de": "Anzeige H wendet sich zwar an Familien mit Babys, bietet aber lediglich Umwelttipps und keine Unterstützung gegen Armut.",
            "ar": "الإعلان H موجه للأسر الجديدة لكنه يقدم فقط نصائح بيئية مجانية ولا يقدم دعماً للفقراء.",
            "fr": "L'annonce H s'adresse aux familles avec bébé mais propose des conseils écologiques, et non une aide sociale aux démunis."
        }
    },
    "18": {
        "quote": "Helfende Hände herzlich willkommen: „Bringen Sie Ihre Talente ein in das Angebot der Caritas. Viele alte und junge, kranke und behinderte Menschen freuen sich auf die Zeit, die Sie ihnen schenken.“",
        "whyCorrect": {
            "de": "Anzeige A passt. Krankenpfleger Philipp möchte sein pflegerisches Wissen für Menschen mit Behinderung einbringen; die Caritas sucht engagierte Ehrenamtliche zur Unterstützung von Kranken und Behinderten.",
            "ar": "الإعلان A هو الأنسب. يرغب الممرض فيليب في توظيف خبراته لمساعدة ذوي الاحتياجات الخاصة؛ ومنظمة كاريتاس تبحث عن متطوعين لمساندة المرضى والمعاقين.",
            "fr": "L'annonce A correspond. Infirmier de métier, Philipp souhaite aider les personnes handicapées ; la Caritas recherche des bénévoles pour accompagner les personnes malades et handicapées."
        },
        "whyIncorrect": {
            "de": "Anzeige G (ASB) bietet professionelle Pflegedienstleistungen für Patienten an, sucht aber keine freiwilligen Helfer.",
            "ar": "الإعلان G يعرض خدمات تمريض ورعاية مدفوعة للمرضى، ولا يطلب متطوعين لتقديم المساعدة.",
            "fr": "L'annonce G propose des prestations d'aide à domicile aux usagers et ne recrute pas de bénévoles."
        }
    },
    "19": {
        "quote": "Ihr Baby ist uns nicht schnuppe! „Deshalb gibt’s für junge Familien unsere Schnuppermitgliedschaft: Ein Jahr kostenlos! ... gratis Umwelttipps für Eltern. Bund für Umwelt und Naturschutz Deutschland (BUND)“",
        "whyCorrect": {
            "de": "Anzeige H passt. Gabriel und seine Frau haben vor kurzem ein Kind bekommen und suchen ökologische Orientierung für die Erziehung; der BUND bietet jungen Eltern kostenlose Umwelttipps und eine Schnuppermitgliedschaft.",
            "ar": "الإعلان H هو الأنسب تمامًا. أصبح غابرييل والدًا جديدًا ويريد نصائح بيئية لتربية طفله؛ ويقدم اتحاد حماية البيئة BUND عضوية مجانية وإرشادات بيئية للأمهات والآباء الجدد.",
            "fr": "L'annonce H correspond parfaitement. Gabriel et son épouse viennent d'avoir un enfant et souhaitent l'éduquer au respect de la nature ; le BUND offre une adhésion gratuite et des conseils écolos aux parents."
        },
        "whyIncorrect": {
            "de": "Andere Umweltanzeigen (wie C oder F) richten sich an Jugendliche oder als Geschenk, nicht spezifisch an Eltern mit Baby.",
            "ar": "الإعلانات البيئية الأخرى مخصصة للناشئين أو كهدايا، ولا تركز على أولياء أمور المواليد الجدد.",
            "fr": "Les autres annonces d'écologie visent les adolescents ou des cadeaux, et non spécifiquement les jeunes parents."
        }
    },
    "20": {
        "quote": "Petra: „Da gibt es grundsätzlich ein Problem: Die Universitäten sind auf einmal verantwortlich für Minderjährige! Stellt die Uni dann „Aufpasser“ ein ... Das ist doch verrückt! ... Kommt mir alles sehr utopisch vor.“",
        "whyCorrect": {
            "de": "Nein. Petra lehnt das Frühstudium ab, da Universitäten rechtlich und organisatorisch nicht für minderjährige Schüler verantwortlich sein sollten.",
            "ar": "لا. بترا تعارض الفكرة وترى أن تحمل الجامعات مسؤولية رعاية قاصرين هو أمر غير واقعي وغير منطقي.",
            "fr": "Non. Petra s'oppose à cette pratique, estimant absurde et utopique que l'université doive encadrer des mineurs."
        },
        "whyIncorrect": {
            "de": "Ja ist falsch, da Petra deutliche Kritik äußert („verrückt“, „utopisch“).",
            "ar": "الخيار 'نعم' خاطئ لأن بترا تنتقد الفكرة بشدة وتصفها بغير الواقعية.",
            "fr": "Choisir 'Oui' est incorrect car Petra formule une critique virulente."
        }
    },
    "21": {
        "quote": "Willi: „Selbst den Bibliotheksausweis kann ich als Student unter 18 nicht einfach so beantragen. ... Trotzdem lohnt es sich.“",
        "whyCorrect": {
            "de": "Ja. Obwohl Willi bürokratische Hürden schildert, betont er abschließend eindeutig: „Trotzdem lohnt es sich.“ Er befürwortet das Modell.",
            "ar": "نعم. على الرغم من العقبات الإدارية التي واجهها، يختم فيلي كلامه بشكل إيجابي مؤكداً: «رغم ذلك، فالأمر يستحق العناء بالتأكيد».",
            "fr": "Oui. Malgré les tracasseries administratives qu'il rencontre, Willi conclut formellement : « Malgré tout, cela vaut le coup. » Il y est favorable."
        },
        "whyIncorrect": {
            "de": "Nein trifft nicht zu, weil sein Gesamtfazit trotz des Aufwands absolut positiv ausfällt.",
            "ar": "الخيار 'لا' غير صحيح لأن تقييمه النهائي إيجابي ومشجع جداً.",
            "fr": "Choisir 'Non' est erroné car son bilan d'expérience reste résolument positif."
        }
    },
    "22": {
        "quote": "Torsten: „Die wichtigsten Erfahrungen macht man doch in der Praxis. ... Es bringt nichts, dass sie nur studieren. Dieses Programm ist diesem Gedanken ganz entgegengesetzt.“",
        "whyCorrect": {
            "de": "Nein. Torsten plädiert für praktische Ausbildung statt theoretischer Universitätslehre und stellt sich klar gegen das Frühstudium.",
            "ar": "لا. يعارض تورستن الفكرة تمامًا، ويرى أن التعلم العملي والتطبيقي في الحياة أهم بكثير من الدراسة النظرية المبكرة.",
            "fr": "Non. Torsten est opposé au projet : il estime que seule l'expérience pratique forge la jeunesse et que ce programme y fait obstacle."
        },
        "whyIncorrect": {
            "de": "Ja ist nicht zutreffend, da Torsten das Programm als unpassend und lebensfern bezeichnet.",
            "ar": "الخيار 'نعم' غير صحيح، فتورستن يرى في البرنامج مضيعة للوقت مقارنة بالخبرة العملية.",
            "fr": "Choisir 'Oui' est faux car Torsten juge cette voie théorique inadaptée."
        }
    },
    "23": {
        "quote": "Chiara: „Ich kann mir aber vorstellen, dass es besonders für begabte Schüler ein gutes Angebot ist. ... Warum dann bis zur Matura mit dem Studium warten?“",
        "whyCorrect": {
            "de": "Ja. Chiara befürwortet das Angebot ausdrücklich für begabte Schüler, die in der Schule unterfordert sind und Förderung brauchen.",
            "ar": "نعم. تدعم كيارا الفكرة بحماس وترى أن الطلاب الموهوبين يحتاجون إلى مثل هذا التحدي العلمي دون انتظار إنهاء المرحلة المدرسية.",
            "fr": "Oui. Chiara est pour cette opportunité qui permet de stimuler les élèves précoces et doués qui s'ennuient au lycée."
        },
        "whyIncorrect": {
            "de": "Nein ist falsch: Ihre rhetorische Frage („Warum warten?“) beweist ihre uneingeschränkte Zustimmung.",
            "ar": "الخيار 'لا' خاطئ، فسؤالها الاستنكاري «لماذا الانتظار؟» يعبر عن تأييدها الكامل.",
            "fr": "Choisir 'Non' est incorrect car sa question (« Pourquoi attendre ? ») marque son adhésion."
        }
    },
    "24": {
        "quote": "Reiner: „Mit 16 oder 17 sind die Jugendlichen ja noch in der Pubertät. ... In dem Alter ist man doch noch gar nicht reif für ein Studium. ... Nicht umsonst sollte man dafür erwachsen sein.“",
        "whyCorrect": {
            "de": "Nein. Reiner hält 16- oder 17-Jährige für noch nicht reif genug für ein anspruchsvolles Studium und ist deshalb dagegen.",
            "ar": "لا. يرى راينر أن المراهقين في سن 16 أو 17 عامًا يفتقرون إلى النضج اللازم لمتابعة دراسة جامعية جادة، ولذلك يرفض الفكرة.",
            "fr": "Non. Reiner estime que des adolescents de 16 ou 17 ans manquent de maturité pour étudier à l'université et s'y oppose fermement."
        },
        "whyIncorrect": {
            "de": "Ja ist unpassend, da Reiner die Ernsthaftigkeit von Schülern an der Hochschule bezweifelt.",
            "ar": "الخيار 'نعم' لا يصح لأن راينر يشكك تمامًا في قدرة القاصرين على التفرغ العقلي للدراسة.",
            "fr": "Choisir 'Oui' est faux puisque Reiner doute du sérieux de jeunes de cet âge à la fac."
        }
    },
    "25": {
        "quote": "Helen: „... weil man intensiv mit anderen zusammenarbeitete, die ähnliche Interessen hatten. ... Wenn diese Erfahrung nun schon zeitlich früher im Leben gemacht wird, umso besser.“",
        "whyCorrect": {
            "de": "Ja. Helen hebt die Horizonterweiterung durch das Studium hervor und findet es sehr positiv („umso besser“), wenn man dies früher erlebt.",
            "ar": "نعم. تؤيد هيلين التجربة وتعتبر الالتقاء بزملاء يشاركون نفس الشغف أمراً رائعاً، وتؤكد أنه كلما حدث ذلك مبكراً كان أفضل بكثير.",
            "fr": "Oui. Helen juge que partager des passions communes à l'université ouvre l'esprit et qu'en faire l'expérience plus tôt est une excellente chose."
        },
        "whyIncorrect": {
            "de": "Nein ist falsch, da „umso besser“ ihre klare Befürwortung ausdrückt.",
            "ar": "الخيار 'لا' خاطئ، فعبارة «umso besser» (كان أفضل بكثير) تعبر عن دعمها التام.",
            "fr": "Choisir 'Non' est erroné, la tournure « umso besser » marquant un vif enthousiasme."
        }
    },
    "26": {
        "quote": "Ferdinand: „Scheint mir aber wert zu sein, es mal zu testen. Ich weiss nur nicht, wie man dann nebenbei noch die Verpflichtungen des Gymnasiums zeitlich schafft.“",
        "whyCorrect": {
            "de": "Ja. Ferdinand hält das Vorhaben grundsätzlich für erprobenswert („wert zu sein, es mal zu testen“), auch wenn er über die Zeiteinteilung nachdenkt.",
            "ar": "نعم. يرى فرديناند أن الفكرة تستحق التجربة والاختبار («wert zu sein, es mal zu testen»)، وموقفه العام منها إيجابي رغم تساؤله عن ضيق الوقت.",
            "fr": "Oui. Ferdinand juge que l'initiative mérite d'être testée (« wert zu sein, es mal zu testen ») et y est favorable sur le fond malgré la charge de travail."
        },
        "whyIncorrect": {
            "de": "Nein ist unzutreffend: Trotz organisatorischer Fragen befürwortet Ferdinand die Chance auf einen Testlauf.",
            "ar": "الخيار 'لا' غير دقيق، فهو يشجع على خوض التجربة ولا يرفضها إطلاقاً.",
            "fr": "Choisir 'Non' ne convient pas, car il salue l'intérêt de la démarche."
        }
    },
    "27": {
        "quote": "Ausgeliehene Artikel können reserviert werden. ... Für Reservationen wird eine Gebühr erhoben.",
        "whyCorrect": {
            "de": "c ist richtig. Laut Benutzungsordnung wird für jede Reservierung eine Gebühr erhoben; man muss also einen Geldbetrag entrichten.",
            "ar": "(c) هو الصحيح. تنص اللائحة بوضوح على أن الحجز يتطلب دفع رسوم («Für Reservationen wird eine Gebühr erhoben»)، أي دفع مبلغ مالي.",
            "fr": "c est correct. Le règlement stipule formellement que toute réservation donne lieu à des frais (« wird eine Gebühr erhoben ») ; il faut donc payer."
        },
        "whyIncorrect": {
            "de": "a ist falsch (die Abholfrist von einer Woche beginnt erst ab Bereitstellung, nicht ab Reservierungsdatum) und b trifft nicht zwingend zu.",
            "ar": "الخيار (a) خاطئ لأن مهلة الأسبوع تبدأ عند تجهيز المادة وليس عند حجزها، والخيار (b) غير صحيح.",
            "fr": "a est faux (le délai d'une semaine court dès que l'article est disponible) et b n'est pas une obligation systématique."
        }
    },
    "28": {
        "quote": "Wer die Bestimmungen der Bibliothek nicht beachtet oder sich ungebührlich verhält, kann vorübergehend oder gänzlich von der Benutzung ausgeschlossen werden.",
        "whyCorrect": {
            "de": "b ist richtig. Bei Verstößen gegen die Bibliotheksregeln droht ein vorübergehender oder dauerhafter Ausschluss von der Benutzung.",
            "ar": "(b) هو الصحيح. مخالفة التعليمات قد تؤدي إلى منع وحرمان المستخدم مؤقتاً أو نهائياً من دخول واستخدام المكتبة.",
            "fr": "b est correct. Tout manquement aux règles de la bibliothèque peut entraîner une exclusion temporaire ou définitive."
        },
        "whyIncorrect": {
            "de": "a erwähnt fälschlich eine Strafgebühr (Gebühren fallen nur bei Beschädigung/Verlust an) und c ist so nicht geregelt.",
            "ar": "الخيار (a) غير دقيق (فالغرامات تخص التلف أو الفقدان)، والخيار (c) لا وجود له في النص.",
            "fr": "a mentionne une amende générale non prévue pour ce cas et c n'est nullement stipulé."
        }
    },
    "29": {
        "quote": "Ausgeliehene Artikel können reserviert werden. ... bei einer anderen Bibliothek der PBZ zur Ausleihe besorgt werden, mit Ausnahme von DVDs.",
        "whyCorrect": {
            "de": "a ist richtig. Ausgeliehene Artikel (einschließlich DVDs des eigenen Bestands) können regulär reserviert werden. Die Ausnahme bei DVDs betrifft nur die Fernleihe aus anderen Zweigstellen.",
            "ar": "(a) هو الصحيح. يمكن حجز المواد المعارة بما فيها أقراص الـ DVD؛ والاستثناء الخاص بها ينطبق فقط على طلبها من فروع أخرى لمكتبة PBZ.",
            "fr": "a est correct. Les articles empruntés (y compris les DVD) peuvent être réservés localement ; l'exception relative aux DVD ne concerne que le prêt entre différentes filiales."
        },
        "whyIncorrect": {
            "de": "b ist falsch (man darf 25 Artikel gleichzeitig, nicht nur einmal pro Monat ausleihen) und c widerspricht dem Text (reservierte Artikel können nicht verlängert werden).",
            "ar": "الخيار (b) خاطئ (الحد الأقصى 25 مادة في آن واحد دون تحديد مرة بالشهر)، والخيار (c) مناقض للنص (المواد المحجوزة لا تمدد).",
            "fr": "b est faux (25 articles en simultané, non par mois) et c contredit le texte (les articles réservés ne peuvent être prolongés)."
        }
    },
    "30": {
        "quote": "Gegen Vorlage eines amtlichen Ausweises wird eine persönliche Bibliothekskarte ausgestellt, die bei jeder Ausleihe mitzubringen ist. Die Bibliothekskarte ist nicht übertragbar, auch nicht innerhalb der Familie ...",
        "whyCorrect": {
            "de": "b ist richtig. Die persönliche Karte ist nicht übertragbar und muss zwingend bei jedem einzelnen Ausleihvorgang vorgelegt werden.",
            "ar": "(b) هو الصحيح. بطاقة الاستعارة شخصية وغير قابلة للتحويل، ويجب إحضارها وإبرازها عند كل استعارة دون استثناء.",
            "fr": "b est correct. La carte de bibliothèque est strictement personnelle et doit obligatoirement être présentée à chaque emprunt."
        },
        "whyIncorrect": {
            "de": "a ist falsch (auch Personen ohne festen Wohnsitz in der Schweiz können die Bibliothek nutzen) und c ist falsch (Karten gelten nicht für die ganze Familie).",
            "ar": "الخيار (a) غير صحيح (يمكن لغير المقيمين استخدامها بقيود)، والخيار (c) خاطئ لأن البطاقة لا تشمل كافة أفراد العائلة.",
            "fr": "a est faux (les non-résidents permanents y ont aussi accès avec restrictions) et c contredit la non-transmissibilité familiale."
        }
    },
    "h1": {
        "quote": "Verkehrsmeldung: Verkehrsbehinderungen und Stillstand auf der A1 infolge extremen Winterwetters und starkem Schneefall, kein Fahrzeugunfall.",
        "whyCorrect": {
            "de": "Falsch. Auf der Autobahn A1 gab es keinen Verkehrsunfall; Ursache der Staus waren heftiger Schneefall und widrige Witterungsbedingungen.",
            "ar": "خطأ. لم يقع أي حادث سير على الطريق السريع A1، بل كان سبب الشلل والاختناقات المرورية هو هطول الثلوج الكثيفة والظروف الجوية السيئة.",
            "fr": "Faux. Il n'y a pas eu d'accident sur la A1 ; les bouchons résultaient d'intenses chutes de neige et des intempéries."
        },
        "whyIncorrect": {
            "de": "Richtig ist unzutreffend, da im Radiobericht kein Unfall gemeldet wurde.",
            "ar": "الخيار 'صحيح' غير دقيق لأن التقرير الإذاعي لم يذكر وقوع أي حادث إطلاقاً.",
            "fr": "L'affirmation est fausse car aucun accident n'a été signalé dans le bulletin routier."
        }
    },
    "h2": {
        "quote": "Wetterbedingte Staus: Starker Schneefall und spiegelglatte Fahrbahnen führten zu kilometerlangen Behinderungen auf der Autobahn.",
        "whyCorrect": {
            "de": "a ist richtig. Der Stau entstand, weil das Wetter sehr schlecht war (Schnee, Eisglätte und Unwetter).",
            "ar": "(a) هو الصحيح. حدث الازدحام المروري بسبب سوء الأحوال الجوية الشديدة (تساقط الثلوج وتجمد الطرقات).",
            "fr": "a est correct. L'embouteillage a été provoqué par le très mauvais temps (neige abondante et verglas)."
        },
        "whyIncorrect": {
            "de": "b und c sind falsch: Baustellen oder gesperrte Ausfahrten wurden in der Verkehrsmeldung nicht als Ursache genannt.",
            "ar": "الخياران (b) و (c) غير صحيحين، فلم تذكر النشرة أعمال صيانة أو إغلاق مخارج كسبب للازدحام.",
            "fr": "b et c sont faux : ni travaux ni fermeture de sortie n'ont été invoqués comme cause."
        }
    },
    "h3": {
        "quote": "Automatische Auskunft: Telefonansage eines Ausstellungshauses und Museums für Fotokunst über Öffnungszeiten und Sonderausstellungen.",
        "whyCorrect": {
            "de": "Falsch. Die Ansage stammt nicht von einem Fotostudio (Dienstleister für Porträts), sondern von einem Museum bzw. Forum für Fotografie.",
            "ar": "خطأ. التسجيل الصوتي ليس لاستوديو تصوير تجاري، بل لمعرض ومتحف عام لفنون التصوير الفوتوغرافي.",
            "fr": "Faux. Le message provient d'un musée/centre d'exposition de photographie artistique et non d'un studio photo privé."
        },
        "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da ein Kunst- und Ausstellungshaus kein gewöhnliches Fotostudio ist.",
            "ar": "الخيار 'صحيح' غير دقيق لأن المعرض الفني العام يختلف تماماً عن استوديو التصوير التجاري الشخصي.",
            "fr": "Choisir 'Vrai' est incorrect car un musée de la photographie n'est pas un studio de prise de vue."
        }
    },
    "h4": {
        "quote": "Öffnungszeiten: Montags sowie mittwochs bis sonntags geöffnet; dienstags bleibt die Ausstellung für Besucher geschlossen.",
        "whyCorrect": {
            "de": "b ist richtig. Wie die Ansage mitteilt, hat das Ausstellungshaus am Dienstag seinen regulären Schließtag.",
            "ar": "(b) هو الصحيح. كما أوضحت الرسالة الصوتية، فإن المعرض يغلق أبوابه أمام الزوار يوم الثلاثاء (Dienstag).",
            "fr": "b est correct. D'après le message enregistré, le mardi est le jour de fermeture hebdomadaire."
        },
        "whyIncorrect": {
            "de": "a und c sind falsch: Montags und mittwochs ist das Museum für Publikum geöffnet.",
            "ar": "الخياران (a) و (c) غير صحيحين؛ فالمتحف يفتح أبوابه يومي الاثنين والأربعاء.",
            "fr": "a et c sont faux : l'établissement est ouvert le lundi et le mercredi."
        }
    },
    "h5": {
        "quote": "Radiotipps für Jugendliche: Freizeit- und Sportprogramme, Wintercamps und Aktivitäten für Schüler und junge Leute.",
        "whyCorrect": {
            "de": "Richtig. Die Radiosendung stellt spezifische Ferien- und Freizeitangebote für Jugendliche während der Wintermonate vor.",
            "ar": "صحيح. تقدم الفقرة الإذاعية أفكاراً واقتراحات لأنشطة رياضية وترفيهية مخصصة للشباب خلال العطلة الشتوية.",
            "fr": "Vrai. L'émission radio présente des idées d'activités et de loisirs spécialement conçues pour les jeunes en hiver."
        },
        "whyIncorrect": {
            "de": "Falsch trifft nicht zu, da die Zielgruppe der vorgestellten Events eindeutig Jugendliche sind.",
            "ar": "الخيار 'خطأ' غير سليم لأن الفعاليات المذكورة موجهة بوضوح لفئة الشباب والناشئة.",
            "fr": "Choisir 'Faux' ne convient pas puisque les conseils s'adressent expressément aux jeunes."
        }
    },
    "h6": {
        "quote": "Schneemobil-Tour: Wegen begrenzter Teilnehmerzahl ist für die Fahrt mit dem Schneemobil eine vorherige Reservierung erforderlich.",
        "whyCorrect": {
            "de": "b ist richtig. Für die Fahrt mit dem Schneemobil muss man sich im Voraus anmelden, da die Plätze limitiert sind.",
            "ar": "(b) هو الصحيح. تتطلب جولة عربات الجليد (Schneemobil) تسجيلاً وحجزاً مسبقاً نظراً لمحدودية المقاعد.",
            "fr": "b est correct. Il est nécessaire de s'inscrire au préalable pour la randonnée en motoneige (Schneemobil)."
        },
        "whyIncorrect": {
            "de": "a und c sind frei zugänglich ohne zwingende Voranmeldung.",
            "ar": "الخياران (a) و (c) متاحان للجمهور بشكل مباشر دون اشتراط حجز مسبق.",
            "fr": "a et c sont accessibles directement sans réservation obligatoire."
        }
    },
    "h7": {
        "quote": "Kulturtipp Augsburg: Der traditionelle Augsburger Christkindlesmarkt öffnet seine Pforten für Besucher.",
        "whyCorrect": {
            "de": "Richtig. Die Meldung kündigt den traditionsreichen Augsburger Weihnachtsmarkt (Christkindlesmarkt) an.",
            "ar": "صحيح. يتحدث الخبر الإذاعي عن إقامة سوق عيد الميلاد التقليدي في مدينة أوغسبورغ.",
            "fr": "Vrai. Le reportage annonce l'ouverture du marché de Noël traditionnel d'Augsbourg."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da der Weihnachtsmarkt in Augsburg das Hauptthema der Meldung ist.",
            "ar": "الخيار 'خطأ' غير صحيح، فالسوق في أوغسبورغ هو محور الخبر المعلن عنه.",
            "fr": "Choisir 'Faux' est erroné car le marché d'Augsbourg est le sujet central du bulletin."
        }
    },
    "h8": {
        "quote": "Dauer des Marktes: Der Markt öffnet Ende November und läuft bis kurz nach dem Jahreswechsel, somit über vier Wochen lang.",
        "whyCorrect": {
            "de": "a ist richtig. Mit einer Gesamtdauer von über vier Wochen ist der Christkindlesmarkt länger als einen Monat in Betrieb.",
            "ar": "(a) هو الصحيح. يمتد السوق لأكثر من شهر كامل (من نهاية نوفمبر وحتى ما بعد رأس السنة).",
            "fr": "a est correct. S'étendant sur plus de quatre semaines complètes, le marché reste ouvert plus d'un mois."
        },
        "whyIncorrect": {
            "de": "b und c stimmen zeitlich nicht mit den tatsächlichen Markttagen überein.",
            "ar": "الخياران (b) و (c) غير دقيقين من الناحية الزمنية ولا يتطابقان مع فترة إقامة السوق.",
            "fr": "b et c ne correspondent pas aux dates de durée réelle du marché."
        }
    },
    "h9": {
        "quote": "Bunte Meldungen: Kuriose Alltagsgeschichte über eine Frau, deren Katze sie versehentlich in der Wohnung einsperrte.",
        "whyCorrect": {
            "de": "Falsch. Es handelt sich um eine humorvolle Radionachricht aus der Kategorie „Vermischtes“ und keineswegs um einen ernsten Polizeibericht.",
            "ar": "خطأ. التسجيل عبارة عن خبر طريف من الأخبار المنوعة حول قطة تسببت في حبس صاحبتها، وليس بلاغاً رسمياً للشرطة.",
            "fr": "Faux. Il s'agit d'une anecdote insolite et légère diffusée à la radio, et non d'un communiqué de police."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da der Tonfall und die Pointe rein unterhaltend sind.",
            "ar": "الخيار 'صحيح' غير مطابق لطبيعة الفقرة المسلية الخفيفة.",
            "fr": "L'affirmation est inexacte car le sujet est humoristique et non judiciaire."
        }
    },
    "h10": {
        "quote": "Befreiung: Schließlich musste ein Not-Schlüsseldienst gerufen werden, der das Schloss öffnete und die Dame befreite.",
        "whyCorrect": {
            "de": "a ist richtig. Ein herbeigerufener Schlüsseldienst knackte das Schloss und befreite die eingeschlossene Katzenbesitzerin.",
            "ar": "(a) هو الصحيح. قام فني فتح الأقفال (Schlüsseldienst) بفتح الباب وتحرير السيدة المحتجزة.",
            "fr": "a est correct. C'est le serrurier appelé en urgence qui a déverrouillé la porte et libéré la propriétaire."
        },
        "whyIncorrect": {
            "de": "b und c scheiterten oder waren gar nicht die Befreier der Frau.",
            "ar": "الخياران (b) و (c) غير صحيحين، فالجيران لم يتمكنوا من فتح الباب والشرطة لم تكن المنقذ المباشر.",
            "fr": "b et c sont faux : le voisin n'a pas pu ouvrir et la police n'est pas intervenue pour crocheter la serrure."
        }
    },
    "h11": {
        "quote": "Tourbegrüßung: „Herzlich willkommen zur Mozart-City-Tour! Unsere Führung durch das historische Salzburg dauert insgesamt 90 Minuten.“",
        "whyCorrect": {
            "de": "c ist richtig. Der Reiseleiter kündigt ausdrücklich eine Gesamtfahrzeit von 90 Minuten (anderthalb Stunden) für die Tour an.",
            "ar": "(c) هو الصحيح. يعلن المرشد السياحي بوضوح أن مدة الجولة التعريفية الكاملة هي 90 دقيقة (ساعة ونصف).",
            "fr": "c est correct. Le guide touristique annonce expressément une durée totale de 90 minutes pour la visite."
        },
        "whyIncorrect": {
            "de": "a und b sind lediglich Teilstreckenzeiten oder Pausen, nicht die Gesamtdauer.",
            "ar": "الخياران (a) و (b) يشيران فقط إلى فترات استراحة أو مراحل فرعية وليس للمدة الإجمالية.",
            "fr": "a et b ne correspondent qu'à des tronçons ou temps d'arrêt partiels."
        }
    },
    "h12": {
        "quote": "Besichtigung: „Auf unserer Tour besuchen wir das Geburtshaus von Wolfgang Amadeus Mozart in der Getreidegasse.“",
        "whyCorrect": {
            "de": "b ist richtig. Ein zentraler Höhepunkt und Besichtigungspunkt der Mozart-City-Tour ist Mozarts Geburtshaus.",
            "ar": "(b) هو الصحيح. تشمل الجولة زيارة ودخول المنزل الأصلي الذي ولد فيه الموسيقار موتسارت في سالزبورغ.",
            "fr": "b est correct. L'étape incontournable de la visite guidée est la maison natale de Mozart."
        },
        "whyIncorrect": {
            "de": "a und c werden während der Fahrt passiert oder erwähnt, aber nicht als Hauptattraktion von innen besichtigt.",
            "ar": "الخياران (a) و (c) يمر بهما الباص في الطريق فقط دون دخولهما للزيارة الميدانية.",
            "fr": "a et c sont seulement aperçus depuis le circuit et non visités."
        }
    },
    "h13": {
        "quote": "Geschichte des Mozarteums: Gegründet wurde die renommierte Institution von einer Bürgerinitiative engagierter Salzburger.",
        "whyCorrect": {
            "de": "c ist richtig. Das Mozarteum verdankt seine Entstehung engagierten Bürgern und Bewohnern der Stadt Salzburg.",
            "ar": "(c) هو الصحيح. تأسس معهد موتسارتيوم بجهود وتبرعات مواطني وأهالي مدينة سالزبورغ تكريماً للموسيقار.",
            "fr": "c est correct. L'institution du Mozarteum a été fondée par une initiative des citoyens de Salzbourg."
        },
        "whyIncorrect": {
            "de": "a und b sind historisch falsch: Mozart selbst lebte damals längst nicht mehr.",
            "ar": "الخياران (a) و (b) غير صحيحين تاريخياً، فموتسارت توفي قبل تأسيس المعهد بسنوات طويلة.",
            "fr": "a et b sont erronés : Mozart était déjà décédé et aucun groupe de scientifiques n'en est à l'origine."
        }
    },
    "h14": {
        "quote": "Eigentümer: Das Gebäude in der Getreidegasse gehörte damals dem wohlhabenden Handelsherrn Johann Lorenz Hagenauer.",
        "whyCorrect": {
            "de": "b ist richtig. Das Haus gehörte einem Händler (Kaufmann), bei dem die Familie Mozart zur Miete wohnte.",
            "ar": "(b) هو الصحيح. كان المبنى مملوكاً لأحد التجار الأثرياء (Händler) وكانت عائلة موتسارت تستأجر شقة فيه.",
            "fr": "b est correct. L'immeuble appartenait à un commerçant (marchand) chez qui la famille Mozart était locataire."
        },
        "whyIncorrect": {
            "de": "a ist falsch (die Familie Mozart war dort nur Mieter, nicht Eigentümer) und c ist frei erfunden.",
            "ar": "الخيار (a) خاطئ لأن عائلة موتسارت كانت مستأجرة للمنزل وليست مالكة له، والخيار (c) لا أساس له.",
            "fr": "a est faux (la famille Mozart n'était que locataire) et c n'a aucun fondement."
        }
    },
    "h15": {
        "quote": "Museumsausstellung: Zu den berühmtesten Exponaten gehört die kleine Kinder-Violine, auf der Mozart als Knabe spielte.",
        "whyCorrect": {
            "de": "a ist richtig. Im Museum ist die originale Kinder-Violine Mozarts ausgestellt.",
            "ar": "(a) هو الصحيح. يعرض المتحف كمان الطفولة الصغير الأصلي الذي عزف عليه موتسارت في صغره.",
            "fr": "a est correct. L'une des pièces majeures exposées dans le musée est le violon d'enfance de Mozart."
        },
        "whyIncorrect": {
            "de": "b und c stehen nicht im Geburtshaus bzw. sind nicht das herausragende Ausstellungsstück.",
            "ar": "الخياران (b) و (c) غير موجودين كمعروضات رئيسية في متحف بيت الولادة.",
            "fr": "b et c ne constituent pas les pièces maîtresses présentées dans la maison natale."
        }
    },
    "h16": {
        "quote": "Isabella: „Mein neues Smartphone habe ich mir komplett selbst vom Feriensackgeld und Babysitten zusammengespart.“",
        "whyCorrect": {
            "de": "Falsch. Isabella hat das Handy nicht von ihren Eltern geschenkt bekommen, sondern mit eigenem Geld selbst bezahlt.",
            "ar": "خطأ. لم يقدم والدا إيزابيلا الهاتف هدية لها، بل قامت بشرائه وتجميعه من مدخراتها وعملها الخاص.",
            "fr": "Faux. Isabella n'a pas reçu son téléphone de ses parents ; elle l'a financé elle-même grâce à ses économies."
        },
        "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da ihre Eltern ihr das Gerät ausdrücklich nicht finanziert haben.",
            "ar": "الخيار 'صحيح' غير دقيق لأن والديها لم يدفعا ثمن الهاتف الجديد.",
            "fr": "L'affirmation est fausse car ses parents n'ont pas acheté l'appareil."
        }
    },
    "h17": {
        "quote": "Isabella: „Schau mal hier auf dem Display, da sind die Schnappschüsse vom Strandurlaub!“",
        "whyCorrect": {
            "de": "Richtig. Isabella nimmt ihr Handy hervor und zeigt Jonas während der Bahnfahrt ihre Urlaubsbilder.",
            "ar": "صحيح. أخرجت إيزابيلا هاتفها في الترام وعرضت على يوناس صور عطلتها الصيفية.",
            "fr": "Vrai. Isabella montre à Jonas les photos de ses vacances sur l'écran de son smartphone."
        },
        "whyIncorrect": {
            "de": "Falsch trifft nicht zu: Jonas schaut sich die Fotos interessiert gemeinsam mit ihr an.",
            "ar": "الخيار 'خطأ' غير صحيح، فيوناس يشاهد الصور برفقتها باهتمام.",
            "fr": "Choisir 'Faux' est erroné car Jonas regarde les clichés avec elle."
        }
    },
    "h18": {
        "quote": "Isabella: „Chalkidiki war echt öde und langweilig, ich hatte überhaupt keine Lust auf diese Familienreise dorthin.“",
        "whyCorrect": {
            "de": "Falsch. Isabella reist keineswegs gern dorthin; sie fand den Aufenthalt auf Chalkidiki langweilig und öde.",
            "ar": "خطأ. إيزابيلا لا تحب السفر إلى خالكيديكي، بل وجدت العطلة هناك مملة ومضجرة للغاية.",
            "fr": "Faux. Isabella n'aime pas aller en Chalcidique ; elle a trouvé le séjour familial là-bas rasoir et sans intérêt."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da sie ihre Abneigung gegen diese Urlaubsreise ganz offen bekundet.",
            "ar": "الخيار 'صحيح' غير سليم لأنها أبدت تذمرها الواضح من تلك الرحلة.",
            "fr": "Choisir 'Vrai' est faux car elle exprime clairement son mécontentement vis-à-vis de cette destination."
        }
    },
    "h19": {
        "quote": "Isabella über Andreas: Sie schwärmt von Andreas, mit dem sie im Urlaub viel Zeit verbrachte und den sie sehr sympathisch findet.",
        "whyCorrect": {
            "de": "Richtig. Isabella mag Andreas sehr und erzählt Jonas mit Begeisterung von den gemeinsamen Erlebnissen.",
            "ar": "صحيح. إيزابيلا معجبة جدًا بأندرياس وتتحدث عنه بحماس وتؤكد انسجامها الكبير معه.",
            "fr": "Vrai. Isabella apprécie beaucoup Andreas et parle de lui avec un enthousiasme évident."
        },
        "whyIncorrect": {
            "de": "Falsch ist unpassend, da ihre Zuneigung zu Andreas unüberhörbar ist.",
            "ar": "الخيار 'خطأ' غير صحيح، فإعجابها وميلها إليه واضح جدًا في الحوار.",
            "fr": "Choisir 'Faux' ne convient pas car son affection pour lui est manifeste."
        }
    },
    "h20": {
        "quote": "Jonas: „Wir waren dieses Jahr wieder alle zusammen weg – mit meinen Eltern und meiner Schwester.“",
        "whyCorrect": {
            "de": "Falsch. Jonas war nicht allein mit seiner Schwester verreist, sondern gemeinsam mit der ganzen Familie inklusive Eltern.",
            "ar": "خطأ. لم يسافر يوناس بمفرده برفقة أخته فقط، بل سافر مع كامل أفراد عائلته بما في ذلك الوالدان.",
            "fr": "Faux. Jonas n'est pas parti seul avec sa sœur ; ils ont voyagé au complet avec leurs deux parents."
        },
        "whyIncorrect": {
            "de": "Richtig trifft nicht zu: Die Eltern waren während des gesamten Urlaubs dabei.",
            "ar": "الخيار 'صحيح' خاطئ، فالوالدان كانا حاضرين في الرحلة طوال الوقت.",
            "fr": "Choisir 'Vrai' est incorrect car les parents ont participé au voyage."
        }
    },
    "h21": {
        "quote": "Vergleich der Eltern: Jonas' Eltern wandern und klettern sportlich in den Bergen, während Isabellas Eltern am liebsten ruhig am Strand faulenzen.",
        "whyCorrect": {
            "de": "Richtig. Die Eltern von Jonas betreiben intensive Bergtouren und Sport; Isabellas Eltern sind im Vergleich deutlich weniger sportlich.",
            "ar": "صحيح. يمارس والدا يوناس رياضة تسلق الجبال الشاقة، بينما يفضل والدا إيزابيلا الاسترخاء والهدوء على الشاطئ دون رياضة.",
            "fr": "Vrai. Les parents de Jonas sont de grands randonneurs montagnards, alors que ceux d'Isabella préfèrent le farniente sans grand sport."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da der Kontrast zwischen beiden Elternpaaren im Gespräch deutlich herausgearbeitet wird.",
            "ar": "الخيار 'خطأ' غير صحيح، فالفرق الرياضي بين العائلتين ذُكر صراحة في الحوار.",
            "fr": "Choisir 'Faux' est erroné car le contraste sportif entre les parents est explicitement souligné."
        }
    },
    "h22": {
        "quote": "Jonas: „Ich fände es eigentlich genial, einfach mal am Strand zu liegen und zu chillen, statt jeden Tag Gipfel zu erklimmen.“",
        "whyCorrect": {
            "de": "Falsch. Jonas findet Strandurlaub keineswegs langweilig; er würde sogar sehr gerne einmal entspannte Strandferien machen.",
            "ar": "خطأ. لا يعتبر يوناس عطلة الشاطئ مملة إطلاقاً، بل على العكس يتمنى قضاء إجازة استرخاء على البحر بدلاً من تسلق الجبال المرهق.",
            "fr": "Faux. Jonas ne trouve pas les vacances à la plage ennuyeuses ; il adorerait au contraire pouvoir paresser au bord de la mer."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da Jonas die Idee eines reinen Strandurlaubs ausdrücklich attraktiv findet.",
            "ar": "الخيار 'صحيح' غير دقيق لأن يوناس يرى فكرة الاستجمام على الشاطئ جذابة وممتعة للغاية.",
            "fr": "Choisir 'Vrai' est faux car Jonas juge l'idée d'un séjour balnéaire très séduisante."
        }
    },
    "h23": {
        "quote": "Lara (b): „Herr X ist bei fast allen Schülern total beliebt, weil er immer fair ist und uns ernst nimmt.“",
        "whyCorrect": {
            "de": "Lara (b) äußert diesen Gedanken. Sie betont das gute und sympathische Verhältnis der überwiegenden Mehrheit der Klasse zu Herrn X.",
            "ar": "لارا (b) هي القائلة. تؤكد لارا أن الأستاذ X يحظى بمحبة وتقدير أغلبية الطلاب لتعامله المنصف والودود معهم.",
            "fr": "C'est Lara (b) qui s'exprime. Elle souligne que M. X est très populaire et apprécié auprès de la grande majorité des élèves."
        },
        "whyIncorrect": {
            "de": "Simon und die Moderatorin teilen zwar Aspekte des Vorfalls mit, aber die Aussage zur Beliebtheit trifft Lara.",
            "ar": "سيمون والمذيعة تطرقا لأحداث القضية، لكن لارا هي صاحبة الشهادة حول شعبية المعلم.",
            "fr": "Simon et l'animatrice abordent les faits juridiques, mais c'est Lara qui évoque cette sympathie générale."
        }
    },
    "h24": {
        "quote": "Simon (c): „Nur eine ganz kleine Gruppe von Schülern protestiert noch und ist mit dem Urteil des Gerichts nicht einverstanden.“",
        "whyCorrect": {
            "de": "Simon (c) sagt dies. Er stellt klar, dass lediglich eine kleine Minderheit das milde Urteil ablehnt.",
            "ar": "سيمون (c) هو القائل. يوضح سيمون أن قلة ضئيلة فقط (أقلية) من التلاميذ هي المعارضة لحكم المحكمة.",
            "fr": "C'est Simon (c) qui le dit. Il indique que seule une poignée d'élèves (une minorité) conteste la décision de justice."
        },
        "whyIncorrect": {
            "de": "Lara und die Moderatorin sprachen über die Entlastungsgründe und das Urteil, nicht über diese Minderheit.",
            "ar": "لارا والمذيعة ركزتا على تفاصيل الحكم، أما حصر المعترضين في أقلية فجاء على لسان سيمون.",
            "fr": "Lara et la présentatrice parlent du climat général, tandis que Simon quantifie précisément cette minorité mécontente."
        }
    },
    "h25": {
        "quote": "Moderatorin (a): „Für das Gericht war die Tatsache, dass Herr X eine akute Verletzung an der Schulter hatte, ausschlaggebend.“",
        "whyCorrect": {
            "de": "Die Moderatorin (a) führt diesen Punkt an. Sie fasst die juristische Urteilsbegründung und die Rolle der Schulterverletzung zusammen.",
            "ar": "المذيعة (a) هي التي تذكر هذه الحقيقة. تسرد تفاصيل الحكم القضائي واعتبار إصابة كتف المعلم ركيزة أساسية في براءته.",
            "fr": "C'est la présentatrice (a) qui l'explique. Elle synthétise les motivations juridiques du jugement et le rôle clé de l'épaule blessée."
        },
        "whyIncorrect": {
            "de": "Die beiden Schüler schildern ihre persönlichen Eindrücke, während die Moderatorin die Sachlage des Urteils referiert.",
            "ar": "الطلاب يتحدثون عن مشاعرهم، بينما تتولى المذيعة قراءة حيثيات الحكم القانوني الرسمي.",
            "fr": "Les élèves donnent leur ressenti personnel, tandis que l'animatrice expose les attendus juridiques de l'affaire."
        }
    },
    "h26": {
        "quote": "Moderatorin (a): „Laut Richterspruch lag bei der Bewegung keine Absicht vor, die Schülerin vorsätzlich zu schlagen.“",
        "whyCorrect": {
            "de": "Die Moderatorin (a) konstatiert dies. Sie zitiert die richterliche Feststellung, dass der Schlag unabsichtlich erfolgte.",
            "ar": "المذيعة (a) هي القائلة. تنقل خلاصة قرار القاضي بأن حركة المعلم لم تكن بقصد أو نية مسبقة لضرب الطالبة.",
            "fr": "C'est la présentatrice (a) qui rapporte ce fait. Elle cite la conclusion du juge établissant l'absence d'intention de frapper."
        },
        "whyIncorrect": {
            "de": "Simon und Lara kommentieren die Klassenatmosphäre; die Feststellung über den fehlenden Vorsatz stammt aus dem Moderationstext.",
            "ar": "علق سيمون ولارا على أجواء الصف، بينما ورد نفي القصد العمدي ضمن تقرير المذيعة.",
            "fr": "Simon et Lara commentent la dynamique de classe, tandis que l'absence de préméditation relève de la synthèse de la présentatrice."
        }
    },
    "h27": {
        "quote": "Simon (c): „Das Mädchen hat die Auseinandersetzung gezielt provoziert, weil sie unbedingt wollte, dass Herr X entlassen wird.“",
        "whyCorrect": {
            "de": "Simon (c) vertritt diesen Standpunkt. Er wirft der Schülerin vor, den Streit forciert zu haben, um den Lehrer loszuwerden.",
            "ar": "سيمون (c) هو القائل. يرى سيمون أن الطالبة تعمدت الاستفزاز لإيصال الأمر إلى طرد المعلم من وظيفته.",
            "fr": "C'est Simon (c) qui porte cette accusation. Selon lui, la jeune fille cherchait délibérément à faire renvoyer le professeur."
        },
        "whyIncorrect": {
            "de": "Weder Lara noch die Moderatorin äußern eine derart direkte Anschuldigung gegen das Mädchen.",
            "ar": "لم يصدر هذا الاتهام المباشر الصريح عن لارا أو المذيعة بل كان رأي سيمون.",
            "fr": "Ni Lara ni la présentatrice n'expriment une accusation aussi catégorique envers l'élève."
        }
    },
    "h28": {
        "quote": "Simon (c): „Diese Schülerin und ihre Clique haben sich sowieso immer isoliert und wollten nie richtig zur Klasse gehören.“",
        "whyCorrect": {
            "de": "Simon (c) beschreibt die Situation. Er stellt fest, dass das Mädchen und ihr Freundeskreis nicht in die Klassengemeinschaft integriert sind.",
            "ar": "سيمون (c) هو القائل. يشير سيمون إلى أن تلك الطالبة ومجموعتها كانوا منعزلين دائماً ولم يندمجوا ضمن الصف.",
            "fr": "C'est Simon (c) qui le constate. Il explique que la jeune fille et ses proches s'isolaient et refusaient de s'intégrer à la classe."
        },
        "whyIncorrect": {
            "de": "Lara schildert andere Aspekte des Klassenzusammenhalts, während Simon den fehlenden Anschluss dieser Gruppe anspricht.",
            "ar": "تحدثت لارا عن رحلات الصف بينما شخص سيمون بالتحديد مشكلة عزلة تلك المجموعة.",
            "fr": "Lara aborde les sorties scolaires tandis que Simon pointe l'isolement délibéré de ce groupe."
        }
    },
    "h29": {
        "quote": "Lara (b): „Früher haben wir nachmittags oft etwas unternommen, aber heute macht unsere Klasse außerhalb der Schule gar nichts mehr zusammen.“",
        "whyCorrect": {
            "de": "Lara (b) beklagt dies. Sie bedauert, dass die Schüler heute in ihrer Freizeit außerhalb des Unterrichts keine Aktivitäten mehr teilen.",
            "ar": "لارا (b) هي القائلة. تبدي لارا أسفها لأن زملاء الصف لم يعودوا يمارسون أي نشاط مشترك خارج المدرسة في الوقت الحاضر.",
            "fr": "C'est Lara (b) qui déplore cela. Elle regrette que les élèves ne fassent plus aucune sortie commune hors temps scolaire."
        },
        "whyIncorrect": {
            "de": "Simon fokussierte sich auf den Streitfall, während Lara die verloren gegangenen Freizeitaktivitäten schildert.",
            "ar": "ركز سيمون على ملابسات الخلاف، بينما تناولت لارا تراجع النشاطات المشتركة لرفاق الصف.",
            "fr": "Simon s'est concentré sur l'incident disciplinaire, alors que Lara regrette l'abandon des sorties extra-scolaires."
        }
    },
    "h30": {
        "quote": "Lara (b): „Wenn wir auf Klassenfahrt fuhren, waren die ersten zwei Tage jedes Mal ziemlich chaotisch und schwierig, bis sich alle eingelebt hatten.“",
        "whyCorrect": {
            "de": "Lara (b) erinnert sich. Sie berichtet, dass der Beginn von Klassenfahrten in den ersten Tagen stets etwas kompliziert war.",
            "ar": "لارا (b) هي القائلة. تتذكر لارا أن الأيام الأولى في الرحلات المدرسية كانت دائماً صعبة ومعقدة قبل أن يهدأ الجميع.",
            "fr": "C'est Lara (b) qui s'en souvient. Elle raconte que les premiers jours des voyages de classe étaient systématiquement difficiles et mouvementés."
        },
        "whyIncorrect": {
            "de": "Simon und die Moderatorin haben diese Anekdote über die Schulfahrten nicht erzählt.",
            "ar": "لم يتطرق سيمون أو المذيعة لهذه التفاصيل الخاصة ببدايات الرحلات المدرسية.",
            "fr": "Simon et la modératrice n'ont pas évoqué ce souvenir précis sur les départs en voyage scolaire."
        }
    }
}
,
  "modellsatz-6": {
    "1": {
        "quote": "Ich hatte das Handy in der Tasche meiner Badehose und bin damit ins Meer gelaufen. ... Leider stand ich schon hüfttief im Wasser.",
        "whyCorrect": {
            "de": "Falsch. Das Handy ging kaputt, weil Sven damit ins Salzwasser des Meeres gelaufen ist, nicht durch das spätere Abtrocknen mit dem Handtuch.",
            "ar": "خطأ. تعطل الهاتف لأن سفين نزل به في مياه البحر المالحة، وليس بسبب محاولة تجفيفه بالمنشفة لاحقاً.",
            "fr": "Faux. Le téléphone est tombé en panne parce que Sven est entré dans l'eau de mer avec, et non à cause du séchage avec la serviette."
        },
        "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da der Wasserschaden im Meer die eigentliche Ursache für den Defekt war.",
            "ar": "الخيار 'صحيح' غير دقيق لأن تسرب مياه البحر إلى الهاتف هو السبب الحقيقي وراء تعطله.",
            "fr": "Choisir 'Vrai' est incorrect car c'est l'eau de mer qui a causé les dommages irréversibles."
        }
    },
    "2": {
        "quote": "Ich habe es dann für den Rest des Strandtages in die Sonne gelegt. Im Hotel angekommen habe ich das Handy trocken geföhnt...",
        "whyCorrect": {
            "de": "Falsch. Sven hat das Handy für den Rest des Tages in die Sonne gelegt, nicht sich selbst. Er ging danach ins Hotel.",
            "ar": "خطأ. وضع سفين الهاتف في الشمس طوال بقية اليوم على الشاطئ، ولم يقضِ هو نفسه بقية اليوم مستلقياً في الشمس.",
            "fr": "Faux. C'est son téléphone que Sven a posé au soleil pour le reste de la journée, et non lui-même."
        },
        "whyIncorrect": {
            "de": "Richtig beruht auf einem Missverständnis des Satzes: Subjekt des Sonnens war der Gegenstand (das Handy).",
            "ar": "الخيار 'صحيح' ناتج عن فهم خاطئ للجملة: فالهاتف هو الذي وُضع في الشمس لتجفيفه.",
            "fr": "L'affirmation est fausse car l'objet exposé au soleil était l'appareil et non Sven."
        }
    },
    "3": {
        "quote": "Auf einer Online-Plattform erfuhr ich, das Beste sei es, das Handy ein paar Tage ausgeschaltet zu lassen.",
        "whyCorrect": {
            "de": "Richtig. Sven recherchierte im Internet auf einer Online-Plattform nach Ratschlägen zur Rettung nasser Mobiltelefone.",
            "ar": "صحيح. بحث سفين على منصة إلكترونية على الإنترنت لمعرفة النصائح والإجراءات المناسبة بعد سقوط الهاتف في الماء.",
            "fr": "Vrai. Sven s'est renseigné sur une plateforme en ligne pour savoir comment réagir face à un téléphone mouillé."
        },
        "whyIncorrect": {
            "de": "Falsch trifft nicht zu, da er den Tipp („ausgeschaltet lassen“) ausdrücklich im Netz gefunden hat.",
            "ar": "الخيار 'خطأ' غير صحيح، فقد ذكر النص صراحة أنه استقى المعلومة من منصة إلكترونية.",
            "fr": "Choisir 'Faux' est erroné car le texte mentionne clairement sa recherche sur Internet."
        }
    },
    "4": {
        "quote": "Es war der erste Urlaubstag, somit war es doppelt ärgerlich. Aber einen guten Aspekt hatte es dann doch: Ich habe Geld gespart, da teure Auslandsgespräche und SMS aus dem Ausland nicht mehr möglich waren.",
        "whyCorrect": {
            "de": "Richtig. Obwohl er sich sehr ärgerte, erkannte er den finanziellen Vorteil: Er sparte Geld bei teuren Auslandstelefonaten und SMS.",
            "ar": "صحيح. على الرغم من انزعاجه الشديد، فقد وفر المال نتيجة تعذر إجراء المكالمات وإرسال الرسائل الدولية باهظة الثمن.",
            "fr": "Vrai. Bien qu'énervé, Sven a réalisé qu'il avait économisé de l'argent en évitant les coûteux appels et SMS depuis l'étranger."
        },
        "whyIncorrect": {
            "de": "Falsch ist unpassend, da die Kostenersparnis im Text als positiver Nebeneffekt hervorgehoben wird.",
            "ar": "الخيار 'خطأ' غير سليم لأن توفير المال ذُكر كجانب إيجابي صريح في النص.",
            "fr": "Choisir 'Faux' ne convient pas puisque l'économie financière est explicitement soulignée."
        }
    },
    "5": {
        "quote": "Die SIM-Karte war glücklicherweise noch zu gebrauchen und so hatte ich weder Nummern noch Nachrichten verloren.",
        "whyCorrect": {
            "de": "Richtig. Da die SIM-Karte den Wasserschaden überstand, blieben alle Telefonnummern und gespeicherten SMS erhalten.",
            "ar": "صحيح. نظراً لأن شريحة الهاتف (SIM-Karte) ظلت صالحة للاستخدام، لم يفقد أي أرقام أو رسائل مخزنة.",
            "fr": "Vrai. Comme la carte SIM fonctionnait toujours, tous les numéros et messages sont restés enregistrés."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da er die Rettung seiner Daten ausdrücklich der intakten SIM-Karte zuschreibt.",
            "ar": "الخيار 'خطأ' غير دقيق لأن النص يؤكد سلامة الشريحة وبقاء الأرقام والرسائل.",
            "fr": "Choisir 'Faux' est inexact car la préservation des données sur la carte SIM est formellement indiquée."
        }
    },
    "6": {
        "quote": "Aber ich habe das Handy meiner Oma bekommen, das war das gleiche Modell.",
        "whyCorrect": {
            "de": "Falsch. Sven hat sich kein Handy neu gekauft oder angeschafft, sondern das alte Gerät seiner Großmutter übernommen.",
            "ar": "خطأ. لم يشترِ سفين هاتفاً جديداً أو يقتنيه بنفسه، بل حصل على هاتف جدته القديم الذي كان من نفس الطراز.",
            "fr": "Faux. Sven n'a pas acheté d'appareil identique, il a simplement récupéré le téléphone de sa grand-mère."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da „bekommen“ (geschenkt/überlassen) keineswegs „angeschafft/gekauft“ bedeutet.",
            "ar": "الخيار 'صحيح' غير صحيح لأن الحصول عليه من الجدة يختلف تماماً عن شرائه واقتنائه.",
            "fr": "Choisir 'Vrai' est faux car recevoir l'appareil de sa grand-mère ne signifie pas l'avoir acheté."
        }
    },
    "7": {
        "quote": "An den Feiertagen schätzen die Deutschen das Zusammensein im Kreis der Familie... Erstaunlicherweise zeigte die Umfrage auch, dass auch das festliche Essen und der Weihnachtsbaum...",
        "whyCorrect": {
            "de": "a ist richtig. Der Artikel beschreibt ausführlich die Bräuche, Vorlieben und Umfrageergebnisse dazu, wie Deutsche am liebsten Weihnachten feiern.",
            "ar": "(a) هو الصحيح. يستعرض المقال عادات وتقاليد وتفضيلات الألمان في الاحتفال بعيد الميلاد بناءً على استطلاع للرأي.",
            "fr": "a est correct. L'article détaille la façon dont les Allemands aiment célébrer Noël à travers diverses données de sondage."
        },
        "whyIncorrect": {
            "de": "b und c treffen nicht den Kern: Geschenke spielen laut Text kaum eine Rolle und die Frage nach dem Wer wird nicht problematisiert.",
            "ar": "الخياران (b) و (c) غير صحيحين: فالهدايا تلعب دوراً ثانوياً في المقال ولم يكن محور النص تحديد من يحتفل به.",
            "fr": "b et c ne correspondent pas au thème central du texte."
        }
    },
    "8": {
        "quote": "Erstaunlicherweise zeigte die Umfrage auch, dass auch das festliche Essen und der Weihnachtsbaum für die Deutschen recht wichtig sind. Beides gehört für sie unbedingt zum Fest.",
        "whyCorrect": {
            "de": "b ist richtig. Der Weihnachtsbaum und das festliche Essen gehören für die Deutschen unbedingt zum Fest dazu.",
            "ar": "(b) هو الصحيح. شجرة عيد الميلاد والطعام الاحتفالي يعتبران أمرين لا غنى عنهما للاحتفال بالعيد لدى الألمان.",
            "fr": "b est correct. Le sapin de Noël et le repas de fête sont indispensables pour la grande majorité des Allemands."
        },
        "whyIncorrect": {
            "de": "a widerspricht dem Text (61 % könnten auf Geschenke verzichten) und c ist falsch (sie feiern in der Familie, nicht bei Freunden).",
            "ar": "الخيار (a) يناقض النص (61% مستعدون للتخلي عن الهدايا)، و(c) غير صحيح لأنهم يفضلون التجمع العائلي.",
            "fr": "a contredit le texte (61 % se passeraient de cadeaux) et c est faux car ils fêtent en famille et non entre amis."
        }
    },
    "9": {
        "quote": "Die große Mehrheit, nämlich 92 Prozent, freuen sich darauf, die Familie zu sehen und genießen die Gesellschaft ihrer Verwandten.",
        "whyCorrect": {
            "de": "a ist richtig. Für 92 Prozent gehört die Familie fest zum Weihnachtsfest dazu.",
            "ar": "(a) هو الصحيح. بالنسبة لـ 92% من الألمان، يعتبر الاجتماع بالعائلة جزءاً أساسياً لا يتجزأ من عيد الميلاد.",
            "fr": "a est correct. Pour 92 % des personnes interrogées, la présence de la famille est indissociable des fêtes de Noël."
        },
        "whyIncorrect": {
            "de": "b verallgemeinert unzulässig auf das ganze Jahr und c trifft nicht zu (nur manche treffen sich an allen 3 Tagen).",
            "ar": "الخيار (b) تعميم غير مبرر، والخيار (c) غير دقيق إذ لا يجتمع الجميع طوال الأيام الثلاثة.",
            "fr": "b généralise abusivement et c ne concerne qu'une partie des familles."
        }
    },
    "10": {
        "quote": "das Entlassen ihrer Sprösslinge ins Studentenleben fällt Eltern zunehmend schwerer. ... Dass sich das Verhältnis von Studenten und ihren Eltern in den vergangenen Jahren gewandelt hat...",
        "whyCorrect": {
            "de": "b ist richtig. Der Artikel schildert das veränderte, oft überfürsorgliche Verhalten von Eltern bei Studienbeginn ihrer Kinder.",
            "ar": "(b) هو الصحيح. يتناول المقال سلوك الآباء والتصاقهم الشديد بأبنائهم الجدد في بداية مرحلتهم الجامعية.",
            "fr": "b est correct. L'article décrit le comportement très protecteur des parents envers leurs enfants débutant l'université."
        },
        "whyIncorrect": {
            "de": "a und c sind Nebenaspekte; der Fokus liegt auf der Eltern-Kind-Beziehung und dem elterlichen Verhalten.",
            "ar": "الخياران (a) و (c) ليسا الموضوع الرئيسي، فالنص يركز على تصرفات الوالدين وعلاقتهم بالأبناء.",
            "fr": "a et c sont secondaires ; le texte analyse avant tout l'attitude et les réactions des parents."
        }
    },
    "11": {
        "quote": "Amerikanische Eltern nehmen sich zu Semesterbeginn nicht selten Zimmer in der Nähe der Uni, um immer für ihre Kinder erreichbar zu sein. ... Mehrere SMS-Nachrichten pro Tag und tägliche Anrufe per Skype sind ebenfalls normal.",
        "whyCorrect": {
            "de": "c ist richtig. Amerikanische Eltern halten durch Hotelzimmer vor Ort, ständige SMS und tägliche Skype-Anrufe extrem engen Kontakt.",
            "ar": "(c) هو الصحيح. يحافظ الآباء في أمريكا على اتصال وثيق ويومي بأبنائهم من خلال حجز غرف قرب الجامعة والرسائل والمكالمات المستمرة.",
            "fr": "c est correct. Aux États-Unis, de nombreux parents maintiennent un contact très étroit avec leurs enfants par des visites et appels quotidiens."
        },
        "whyIncorrect": {
            "de": "a und b werden im Text nicht behauptet.",
            "ar": "الخياران (a) و (b) لم يردا في النص ولا يعكسان الواقع المذكور.",
            "fr": "a et b ne correspondent pas aux faits rapportés dans le texte."
        }
    },
    "12": {
        "quote": "Auch die Hochschulen selbst profitieren, denn das habe einen Werbeeffekt für die Uni. Gerade Eltern von mehreren Kindern seien interessiert an der Hochschule...",
        "whyCorrect": {
            "de": "a ist richtig. Die Universitäten nutzen Familientage gezielt als werbewirksame Maßnahme, um sich bei Eltern und Geschwistern positiv darzustellen.",
            "ar": "(a) هو الصحيح. تستفيد الجامعات من «يوم الأسرة» كوسيلة دعائية وترويجية لاستقطاب المزيد من الطلاب وإقناع أولياء الأمور.",
            "fr": "a est correct. Les universités tirent profit de ces journées d'accueil familial pour assurer leur promotion auprès des familles."
        },
        "whyIncorrect": {
            "de": "b ist nicht das Hauptmotiv und c trifft nicht zu (Unis bekommen kein Geld dafür).",
            "ar": "الخيار (b) ليس الدافع الأساسي، والخيار (c) غير صحيح حيث لا تتلقى الجامعات أموالاً من الآباء مقابل ذلك.",
            "fr": "b n'est pas la motivation première et c est faux (les universités ne reçoivent pas d'argent)."
        }
    },
    "13": {
        "quote": "Keine Anzeige bietet ein Seminar für Angehörige an, um psychische Erkrankungen von Familienmitgliedern besser zu verstehen.",
        "whyCorrect": {
            "de": "X ist richtig. Keine der vorliegenden Anzeigen bietet ein Seminar oder Schulungsangebot zum Verstehen psychischer Erkrankungen an.",
            "ar": "(X) هو الصحيح. لا يوجد أي إعلان يقدم دورة تدريبية أو ندوة لمساعدة الأقارب على فهم ورعاية مريض نفسي.",
            "fr": "X est correct. Aucune annonce ne propose de séminaire pour aider les proches à comprendre les maladies psychiques."
        },
        "whyIncorrect": {
            "de": "Anzeige I sucht lediglich gewerbliche Montageaufträge für eine Tagesstätte, bietet aber keine Seminare.",
            "ar": "الإعلان I يبحث فقط عن طلبيات تغليف وتركيب لمركز رعاية نهارية، ولا يقدم أي ندوات أو دورات تدريبية.",
            "fr": "L'annonce I recherche des travaux de conditionnement pour un atelier protégé et ne propose aucune formation."
        }
    },
    "14": {
        "quote": "Kinder- und Jugendhilfe Kassel: „Wir beraten anonym, vertraulich, kostenfrei in allen Rechtsgebieten, egal ob Strafrecht, Familienrecht, Arbeitsrecht...“",
        "whyCorrect": {
            "de": "Anzeige A passt. Klara ist 16 und braucht eine kostenlose, vertrauliche Rechtsberatung im Familienrecht, ob sie gegen den Willen der Eltern ausziehen darf.",
            "ar": "الإعلان A هو الأنسب. كلارا في سن 16 وتحتاج استشارة قانونية سرية ومجانية في قانون الأسرة لتعرف حقوقها في السكن بمفردها.",
            "fr": "L'annonce A correspond. Âgée de 16 ans, Klara a besoin de conseils juridiques gratuits en droit de la famille pour savoir si elle peut quitter le domicile."
        },
        "whyIncorrect": {
            "de": "Anzeige B bietet allgemeine Erziehungsberatung, jedoch keine rechtliche Prüfung von Jugendhilferechten.",
            "ar": "الإعلان B يقدم استشارات تربوية عامة ولا يتناول المسائل القانونية وحقوق القاصرين.",
            "fr": "L'annonce B propose du soutien éducatif mais pas d'expertise juridique en droit familial."
        }
    },
    "15": {
        "quote": "eki Eltern-Kind-Initiative e.V. „Bürozeiten für die Elternberatung ändern sich ab 1. März: Di u. Mi: 16.00–18.00 Uhr, Gesundheitsberatung“",
        "whyCorrect": {
            "de": "Anzeige D passt. Herr Lenz sucht Beratung zur Diät/Ernährung seines Sohnes; Anzeige D informiert über die geänderten Bürozeiten der Gesundheitsberatung.",
            "ar": "الإعلان D هو الأنسب. يبحث السيد لينتس عن استشارة بخصوص حمية ابنه الصحية؛ والإعلان D يوضح المواعيد الجديدة للاستشارة الصحية.",
            "fr": "L'annonce D convient. M. Lenz cherche des conseils sur le régime diététique de son fils ; l'annonce D précise les nouveaux horaires de la permanence santé."
        },
        "whyIncorrect": {
            "de": "Andere Anzeigen bieten Notdienste für Akutfälle oder reine Erziehungsberatung.",
            "ar": "الإعلانات الأخرى مخصصة لطوارئ الأطفال أو للاستشارات التربوية العامة دون الجانب الصحي.",
            "fr": "Les autres annonces concernent les urgences médicales ou le conseil éducatif général."
        }
    },
    "16": {
        "quote": "Kantonales Arbeitsamt Basel-Stadt: „Neu! Persönliche Beratungsgespräche für Jugendliche und Eltern zu allem, was für die erste Berufswahl wichtig ist.“",
        "whyCorrect": {
            "de": "Anzeige E passt. Daniel und seine Eltern suchen eine professionelle Beratung zur ersten Berufswahl nach dem Schulabschluss.",
            "ar": "الإعلان E هو الأنسب. يبحث دانيال ووالداه عن جلسة استشارية متخصصة حول الاختيار المهني الأول بعد نيل الشهادة المدرسية.",
            "fr": "L'annonce E correspond. Daniel et ses parents souhaitent un entretien d'orientation professionnelle en vue de son premier choix de carrière."
        },
        "whyIncorrect": {
            "de": "Anzeige B ist eine allgemeine Erziehungsberatung und keine Berufsberatung des Arbeitsamtes.",
            "ar": "الإعلان B مخصص للإرشاد التربوي وليس للتوجيه المهني واختيار الوظائف.",
            "fr": "L'annonce B traite de conseil éducatif et non d'orientation professionnelle."
        }
    },
    "17": {
        "quote": "Gebäude · Energie · Technik GET-Messe Freiburg: „Küche: neue Technologien... Während der Messeöffnungszeiten wird eine Kinderbetreuung angeboten.“",
        "whyCorrect": {
            "de": "Anzeige C passt. Das Paar möchte sich über Küchen informieren und braucht wegen der kranken Babysitterin eine Kinderbetreuung vor Ort.",
            "ar": "الإعلان C هو الأنسب. يبحث الزوجان عن مطبخ جديد وبسبب مرض جليسة الأطفال تفيدهما خدمة رعاية الأطفال المتوفرة داخل المعرض.",
            "fr": "L'annonce C est parfaite. Le couple veut s'informer sur les cuisines et l'accueil d'enfants proposé sur le salon résout l'absence de baby-sitter."
        },
        "whyIncorrect": {
            "de": "Anzeige H (Weissgerber) bietet zwar Küchen, aber keinerlei Betreuung für die Kinder.",
            "ar": "الإعلان H يخص استوديو مطابخ فقط ولا يوفر أي خدمة لرعاية ومجالسة الأطفال أثناء التسوق.",
            "fr": "L'annonce H propose des cuisines mais aucun service de garde d'enfants."
        }
    },
    "18": {
        "quote": "Verein Gemeinsam e.V. „Wir laden ein zur/zum Gesprächsrunde/Erfahrungsaustausch für pflegende Angehörige alter Menschen.“",
        "whyCorrect": {
            "de": "Anzeige J passt. Simon pflegt seine alte, kranke Mutter und sucht den Erfahrungsaustausch mit anderen pflegenden Angehörigen.",
            "ar": "الإعلان J هو الأنسب. يعتني سيمون بوالدته المسنة المريضة ويبحث عن حلقة نقاش لتبادل الخبرات مع من يمرون بنفس التجربة.",
            "fr": "L'annonce J correspond. Simon s'occupe de sa mère âgée et malade et recherche un groupe d'échange d'expériences entre aidants familiaux."
        },
        "whyIncorrect": {
            "de": "Anzeige I bietet Handwerksaufträge, keine Gesprächsrunden für Angehörige.",
            "ar": "الإعلان I مخصص للأعمال اليدوية ولا يقدم أي لقاءات حوارية لأسر المرضى.",
            "fr": "L'annonce I concerne des travaux d'assemblage et non un groupe de parole."
        }
    },
    "19": {
        "quote": "St. Martins Krankenhaus Informationsabende: „1. März: Schwangerschaft, Geburt und Wochenbett; 8. März: Das gesunde Neugeborene... keine Gebühren.“",
        "whyCorrect": {
            "de": "Anzeige G passt. Antonia erwartet ihr erstes Baby und kann sich an diesen kostenlosen Informationsabenden praxisnah informieren.",
            "ar": "الإعلان G هو الأنسب. تنتظر أنتونيا مولودها الأول وستستفيد من هذه الأمسيات التثقيفية المجانية حول الولادة ورعاية المولود الجديد.",
            "fr": "L'annonce G convient. Enceinte de son premier enfant, Antonia trouvera des réponses concrètes lors de ces soirées d'information gratuites à la maternité."
        },
        "whyIncorrect": {
            "de": "Anzeige D betrifft bereits geborene Kinder und Termine zur Erziehungsberatung.",
            "ar": "الإعلان D موجه للأطفال الأكبر سناً وتعديل مواعيد العمل وليس للأمهات الحوامل الجدد.",
            "fr": "L'annonce D s'adresse aux parents d'enfants déjà nés et aux horaires de permanence."
        }
    },
    "20": {
        "quote": "Sven: „Wenn man uns jetzt noch vom Gehsteig runterschmeißt, dann können wir nur noch auf extra Skaterbahnen fahren... Das wäre schlimm! Wo sollen wir dann noch fahren??“",
        "whyCorrect": {
            "de": "Nein. Sven ist Inline-Skater und strikt gegen ein Verbot auf Bürgersteigen, da er nicht wüsste, wo er sonst fahren soll.",
            "ar": "لا. سفين متزلج ويعارض بشدة حظر المتزلجين على الأرصفة لأن ذلك سيحرمهم من مساحات التزلج المناسبة.",
            "fr": "Non. Passionné de roller, Sven s'oppose formellement à l'interdiction qui le priverait d'endroits où patiner."
        },
        "whyIncorrect": {
            "de": "Ja trifft nicht zu: Svens Ausruf („Das wäre schlimm!“) zeigt seine entschiedene Gegenposition.",
            "ar": "الخيار 'نعم' غير صحيح، فصرخته الاحتجاجية توضح رفضه القاطع للاقتراح.",
            "fr": "Choisir 'Oui' est faux car Sven déplore vivement cette perspective."
        }
    },
    "21": {
        "quote": "Olav: „deshalb gibt es keinen Grund, uns Skateboardfahrern diese Fahrmöglichkeit wegzunehmen.“",
        "whyCorrect": {
            "de": "Nein. Olav fährt vorsichtig mit dem Skateboard auf dem Gehsteig und sieht keinen Grund für ein Verbot.",
            "ar": "لا. يتنقل أولاف بحذر بلوح التزلج على الرصيف ولا يرى أي مبرر لحرمان المتزلجين من استخدام الأرصفة.",
            "fr": "Non. Circulant prudemment en skateboard sur le trottoir, Olav s'oppose fermement à la suppression de ce droit."
        },
        "whyIncorrect": {
            "de": "Ja ist falsch, da Olav sich ausdrücklich gegen die Einschränkung ausspricht.",
            "ar": "الخيار 'نعم' خاطئ لأن أولاف يدافع بوضوح عن حقهم في استخدام الرصيف.",
            "fr": "Choisir 'Oui' est erroné car Olav conteste l'utilité d'une interdiction."
        }
    },
    "22": {
        "quote": "Karen: „Warum sonst machen zunehmend mehr Radfahrer auf den Gehsteigen den Fußgängern den Platz streitig? So eine Regelung würde uns Fußgängern helfen.“",
        "whyCorrect": {
            "de": "Ja. Karen befürwortet die Neuregelung ausdrücklich, um Fußgänger vor verdrängenden Radfahrern zu schützen.",
            "ar": "نعم. تؤيد كارين القرار الجديد لحماية المشاة واستعادة مساحتهم الآمنة بعيداً عن مضايقات الدراجات.",
            "fr": "Oui. Karen soutient sans réserve la nouvelle règle pour redonner la priorité et la sécurité aux piétons."
        },
        "whyIncorrect": {
            "de": "Nein ist unzutreffend: Karen begrüßt das Vorhaben als willkommene Hilfe für Fußgänger.",
            "ar": "الخيار 'لا' غير سليم لأن كارين تعتبر القانون المقترح دعماً وحماية حقيقية للمشاة.",
            "fr": "Choisir 'Non' ne convient pas, Karen voyant dans la règle un soulagement pour les piétons."
        }
    },
    "23": {
        "quote": "Paul: „Ich meine, die vorgeschlagene Regelung ist zu streng. Nur die Velos sollten vom Trottoir verschwinden bzw. nur noch gestossen werden.“",
        "whyCorrect": {
            "de": "Nein. Paul hält die generelle Fußgänger-Regelung für übertrieben streng und lehnt das pauschale Verbot ab.",
            "ar": "لا. يرى باول أن فرض الحظر الشامل وحصر الرصيف على المشاة فقط أمر صارم ومبالغ فيه، ويعارض اللائحة بصيغتها العامة.",
            "fr": "Non. Paul estime que la règle globale est excessivement stricte et ne souscrit pas à l'interdiction générale."
        },
        "whyIncorrect": {
            "de": "Ja ist falsch: Seine Aussage („die Regelung ist zu streng“) markiert seine Ablehnung.",
            "ar": "الخيار 'نعم' خاطئ، فوصفه للقانون بأنه «صارم أكثر مما يجب» يعبر عن عدم موافقته.",
            "fr": "Choisir 'Oui' est erroné car qualifier la règle de « trop sévère » indique son désaccord."
        }
    },
    "24": {
        "quote": "Alina: „Wenn Sie mich fragen, stimme ich der Regelung zu, weil sie meine Kinder schützt.“",
        "whyCorrect": {
            "de": "Ja. Als Mutter von zwei kleinen Kindern stimmt Alina der Regelung voll zu, damit ihre Kinder auf dem Gehsteig sicher sind.",
            "ar": "نعم. كأم لطفلين صغيرين، تؤيد ألينا اللائحة تماماً لحماية أطفالها من المتزلجين وسائقي الدراجات المسرعين.",
            "fr": "Oui. Mère de deux enfants en bas âge, Alina approuve pleinement la mesure pour assurer leur protection."
        },
        "whyIncorrect": {
            "de": "Nein ist unzutreffend, da Alina wörtlich „stimme ich der Regelung zu“ erklärt.",
            "ar": "الخيار 'لا' خاطئ، فالنص يذكر صراحة عبارتها: «أنا أوافق على هذه اللائحة».",
            "fr": "Choisir 'Non' est contredit par sa déclaration formelle d'adhésion."
        }
    },
    "25": {
        "quote": "Jonas: „Auf die Bürgersteige sollen nur Bürger, also Fußgänger, wie das Wort schon sagt.“",
        "whyCorrect": {
            "de": "Ja. Nachdem Jonas von einem Skater angefahren wurde, befürwortet er mit Nachdruck Gehsteige nur für Fußgänger.",
            "ar": "نعم. بعدما صدمه متزلج، يطالب يوناس بشدة بقصر الأرصفة على المشاة وحدهم.",
            "fr": "Oui. Ayant lui-même été percuté par un patineur, Jonas réclame fermement que les trottoirs soient réservés aux seuls piétons."
        },
        "whyIncorrect": {
            "de": "Nein ist falsch, da Jonas aus eigener schmerzhafter Betroffenheit für die Regelung plädiert.",
            "ar": "الخيار 'لا' غير صحيح لأن تجربته المؤلمة جعلته من أشد المدافعين عن حصرية الرصيف للمشاة.",
            "fr": "Choisir 'Non' est erroné car son témoignage appuie très clairement l'interdiction."
        }
    },
    "26": {
        "quote": "Ken: „Wenn aber alle Passanten ... aufpassen und höflich sind, brauchen wir keine neuen Regeln. Das wünsche ich mir.“",
        "whyCorrect": {
            "de": "Nein. Ken fordert mehr gegenseitige Rücksichtnahme und Höflichkeit statt neuer Verbote und Regeln.",
            "ar": "لا. يرى كين أن الحل يكمن في الاحترام المتبادل واللباقة بين الجميع، ويرفض سن قوانين ولوائح إضافية جديدة.",
            "fr": "Non. Ken en appelle à la courtoisie et au civisme mutuel et rejette l'adoption de nouvelles réglementations."
        },
        "whyIncorrect": {
            "de": "Ja ist nicht zutreffend, da Ken ausdrücklich sagt: „brauchen wir keine neuen Regeln“.",
            "ar": "الخيار 'نعم' لا يصح لأن كين قال بالحرف: «لسنا بحاجة إلى لوائح وقوانين جديدة».",
            "fr": "Choisir 'Oui' est inexact puisqu'il affirme expressément qu'on n'a pas besoin de règles supplémentaires."
        }
    },
    "27": {
        "quote": "Alleiniges Nach-Hause-Gehen muss von den Eltern im Vorhinein mittels Unterschrift bestätigt werden.",
        "whyCorrect": {
            "de": "c ist richtig. Eltern können vorab per schriftlicher Unterschrift bestätigen, dass ihr Kind selbstständig nach Hause gehen darf.",
            "ar": "(c) هو الصحيح. يمكن لأولياء الأمور الإقرار كتابياً بتوقيعهم المسبق بأن طفلهم مسموح له بالعودة بمفرده إلى المنزل.",
            "fr": "c est correct. Les parents peuvent autoriser par écrit et à l'avance leur enfant à rentrer seul chez lui."
        },
        "whyIncorrect": {
            "de": "a und b entsprechen nicht den schriftlich zu bestätigenden Sonderregelungen des Merkblatts.",
            "ar": "الخياران (a) و (b) لا يمثلان الإقرار الكتابي الاستثنائي المذكور في اللائحة.",
            "fr": "a et b ne correspondent pas à la dérogation écrite prévue dans le texte."
        }
    },
    "28": {
        "quote": "Pro Woche fällt eine Verpflegungspauschale in der Höhe von 45,00 € an. Dieser Beitrag wird in bar jeweils am Montag in der Früh... eingehoben.",
        "whyCorrect": {
            "de": "b ist richtig. Die Eltern zahlen wöchentlich eine Verpflegungspauschale von 45 € in bar für das Essen der Kinder.",
            "ar": "(b) هو الصحيح. يدفع أولياء الأمور مبلغاً أسبوعياً محدداً قدره 45 يورو لتغطية وجبات الطعام والمشروبات.",
            "fr": "b est correct. Les parents règlent chaque semaine un forfait repas d'un montant de 45 €."
        },
        "whyIncorrect": {
            "de": "a ist falsch (Essen wird von der Uni bereitgestellt) und c ist falsch (Geld wird einmalig montags für die ganze Woche fällig).",
            "ar": "الخيار (a) خاطئ لأن الوجبات تقدمها الجامعة، والخيار (c) غير صحيح لأن الدفع أسبوعي وليس يومياً.",
            "fr": "a est faux (les repas sont fournis) et c est inexact (le paiement est hebdomadaire et non quotidien)."
        }
    },
    "29": {
        "quote": "Den BetreuerInnen ist es nicht gestattet, Medikamente zu verabreichen.",
        "whyCorrect": {
            "de": "a ist richtig. Den Betreuern ist es ausdrücklich verboten, den Kindern irgendwelche Medikamente zu verabreichen.",
            "ar": "(a) هو الصحيح. يُمنع المشرفون منعاً باتاً من إعطاء أي أدوية للأطفال المشتركين.",
            "fr": "a est correct. Il est formellement interdit aux encadrants d'administrer des médicaments aux enfants."
        },
        "whyIncorrect": {
            "de": "b und c treffen nicht zu: Notfallmedikamente müssen die Eltern selbst mitgeben, Betreuer geben sie jedoch nicht aus.",
            "ar": "الخياران (b) و (c) غير صحيحين، فالأدوية الطارئة يحضرها الولي مع الطفل ولا تصرفها إدارة المكتب.",
            "fr": "b et c sont faux : le bureau ne distribue pas de médicaments et les parents doivent apporter ceux de secours."
        }
    },
    "30": {
        "quote": "Insgesamt werden für die Veranstaltungen (Workshops) bis zu max. 60 Kinder pro Woche aufgenommen.",
        "whyCorrect": {
            "de": "c ist richtig. Mit maximal 60 Teilnehmern pro Woche ist die Zahl der Plätze strikt begrenzt.",
            "ar": "(c) هو الصحيح. عدد المشاركين محدود للغاية حيث لا يتجاوز الحد الأقصى 60 طفلاً أسبوعياً.",
            "fr": "c est correct. Le nombre de places est strictement limité à 60 enfants par semaine au maximum."
        },
        "whyIncorrect": {
            "de": "a ist eine Empfehlung (kein zwingender Ausschluss) und b widerspricht der Anmeldung für ganze Wochenprogramme.",
            "ar": "الخيار (a) مجرد فئة موصى بها وليس شرطاً حصرياً، و(b) غير صحيح فالتسجيل يتم لأسبوع كامل.",
            "fr": "a est une recommandation d'âge et b est inexact (inscription à la semaine complète)."
        }
    },
    "h1": {
        "quote": "Reiseinformation: Wichtige Durchsage und Auskünfte zu Ausweis- und Passbestimmungen für Urlaubsreisende.",
        "whyCorrect": {
            "de": "Richtig. Die Radiodurchsage informiert Reisende über Einreisebestimmungen und Dokumente.",
            "ar": "صحيح. يقدم الإعلان الإذاعي معلومات وتوجيهات هامة للمسافرين بشأن وثائق السفر وجوازات السفر.",
            "fr": "Vrai. Le message délivre des informations aux voyageurs concernant les pièces d'identité et passeports."
        },
        "whyIncorrect": {
            "de": "Falsch trifft nicht zu, da die Hinweise sich direkt an Urlauber und Reisende richten.",
            "ar": "الخيار 'خطأ' غير صحيح فالنص موجه مباشرة إلى جمهور المسافرين.",
            "fr": "Choisir 'Faux' ne convient pas car les instructions visent expressément les vacanciers."
        }
    },
    "h2": {
        "quote": "Passgebühren: Für Kleinkinder bis zum vollendeten 2. Lebensjahr fallen keine Gebühren für den Reisepass an.",
        "whyCorrect": {
            "de": "a ist richtig. Kleinkinder bis zum Alter von zwei Jahren erhalten den Reisepass kostenlos.",
            "ar": "(a) هو الصحيح. يُعفى الأطفال الرضع حتى عمر سنتين من رسوم إصدار جواز السفر.",
            "fr": "a est correct. Les passeports sont gratuits pour les tout-petits jusqu'à l'âge de deux ans."
        },
        "whyIncorrect": {
            "de": "b und c müssen ermäßigte oder reguläre Gebühren zahlen.",
            "ar": "الخياران (b) و (c) يفرضان رسوماً مخفضة أو كاملة على الأطفال الأكبر سناً.",
            "fr": "b et c doivent s'acquitter de droits réduits ou normaux."
        }
    },
    "h3": {
        "quote": "Sprachkurs-Angebot: Kompakt- und Gruppenkurse für Business-Englisch und berufsbezogene Kommunikation, kein Einzelunterricht.",
        "whyCorrect": {
            "de": "Falsch. Es handelt sich um ein Gruppenangebot für berufliches Englisch, nicht um Privatunterricht.",
            "ar": "خطأ. الإعلان يقدم دورات جماعية للغة الإنجليزية المخصصة للأعمال، وليس دروساً خصوصية فردية.",
            "fr": "Faux. Il s'agit d'une formation collective d'anglais professionnel et non de cours particuliers."
        },
        "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da Privatstunden im Text nicht angeboten werden.",
            "ar": "الخيار 'صحيح' غير دقيق فالدروس الفردية الخاصة غير مشمولة في العرض.",
            "fr": "Choisir 'Vrai' est incorrect car l'offre porte sur des sessions de groupe."
        }
    },
    "h4": {
        "quote": "Zielgruppe: Abend- und Wochenendkurse speziell für Berufstätige mit Fokus auf Verhandlungssicherheit im Job.",
        "whyCorrect": {
            "de": "a ist richtig. Der Kurs richtet sich zielgerichtet an Berufstätige zur Verbesserung der beruflichen Sprachkompetenz.",
            "ar": "(a) هو الصحيح. الدورة موجهة خصيصاً للموظفين والمهنيين (Berufstätige) لتعزيز مهاراتهم في العمل.",
            "fr": "a est correct. Ce stage linguistique est spécialement conçu pour les professionnels en activité."
        },
        "whyIncorrect": {
            "de": "b und c sind nicht die primäre Zielgruppe der Business-Kurse.",
            "ar": "الخياران (b) و (c) لا يمثلان الفئة المستهدفة من هذه الدورات التخصصية.",
            "fr": "b et c ne sont pas les destinataires de ce programme axé sur le monde du travail."
        }
    },
    "h5": {
        "quote": "Wetterprognose: Die Temperaturen steigen in den kommenden Tagen spürbar an und bringen mildere Frühlingsluft.",
        "whyCorrect": {
            "de": "Richtig. Der Wetterbericht kündigt einen deutlichen Temperaturanstieg und wärmeres Wetter an.",
            "ar": "صحيح. تشير النشرة الجوية إلى ارتفاع ملحوظ في درجات الحرارة وتحسن الطقس ليصبح أكثر دفئاً.",
            "fr": "Vrai. Les prévisions météorologiques annoncent une hausse sensible des températures."
        },
        "whyIncorrect": {
            "de": "Falsch trifft nicht zu, da die Erwärmung explizit prognostiziert wird.",
            "ar": "الخيار 'خطأ' غير صحيح فالنشرة تؤكد قدوم كتلة هوائية دافئة.",
            "fr": "Choisir 'Faux' est erroné car le réchauffement est clairement annoncé."
        }
    },
    "h6": {
        "quote": "Niederschlag: Während Donnerstag und Freitag sonnig und trocken bleiben, setzt am Samstag ergiebiger Regen ein.",
        "whyCorrect": {
            "de": "c ist richtig. Erst am Samstag schlägt das Wetter um und es beginnt zu regnen.",
            "ar": "(c) هو الصحيح. يستقر الطقس خلال الخميس والجمعة، بينما يبدأ هطول الأمطار يوم السبت.",
            "fr": "c est correct. La pluie n'est attendue que pour la journée de samedi."
        },
        "whyIncorrect": {
            "de": "a und b bleiben laut Vorhersage heiter und trocken.",
            "ar": "الخياران (a) و (b) يتميزان بطقس مشمس وجاف تماماً.",
            "fr": "a et b restent ensoleillés et sans précipitations."
        }
    },
    "h7": {
        "quote": "Veranstaltungshinweis: Öffentlicher Vortrag an der Technischen Universität für interessierte Besucher.",
        "whyCorrect": {
            "de": "Richtig. Die Ankündigung lädt zu einem wissenschaftlichen Vortrag an der Universität ein.",
            "ar": "صحيح. يعلن التسجيل الصوتي عن تنظيم محاضرة علمية عامة في الجامعة التقنية.",
            "fr": "Vrai. L'annonce convie le public à une conférence universitaire."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da der Vortrag das zentrale Thema der Meldung ist.",
            "ar": "الخيار 'خطأ' غير صحيح لأن المحاضرة هي موضوع الخبر المعلن عنه.",
            "fr": "Choisir 'Faux' ne convient pas car la conférence est l'objet de l'annonce."
        }
    },
    "h8": {
        "quote": "Thema des Vortrags: Aktuelle Entwicklungen und humanoide Systeme in der modernen Robotik.",
        "whyCorrect": {
            "de": "c ist richtig. Der Vortrag behandelt zukunftsweisende Technologien auf dem Gebiet der Robotik.",
            "ar": "(c) هو الصحيح. تدور المحاضرة حول أحدث التطورات والأنظمة الذكية في مجال هندسة الروبوتات (Robotik).",
            "fr": "c est correct. La conférence porte sur les avancées récentes dans le domaine de la robotique."
        },
        "whyIncorrect": {
            "de": "a und b sind allenfalls Randbereiche, nicht das Hauptthema des Referats.",
            "ar": "الخياران (a) و (b) ليسا العنوان الأساسي للمحاضرة التي تركز بشكل محدد على الروبوتات.",
            "fr": "a et b ne correspondent pas à la thématique centrale de l'intervention."
        }
    },
    "h9": {
        "quote": "Telefonnachricht: Dennis verabredet sich mit Claudia für einen gemeinsamen Ausflug in den Zoologischen Garten.",
        "whyCorrect": {
            "de": "Richtig. Dennis und Claudia planen ein Treffen am Haupteingang des Zoos.",
            "ar": "صحيح. يخطط دينيس وكلوديا للقاء والذهاب معاً في نزهة إلى حديقة الحيوان.",
            "fr": "Vrai. Dennis et Claudia conviennent de se retrouver pour visiter le zoo ensemble."
        },
        "whyIncorrect": {
            "de": "Falsch trifft nicht zu, da die Verabredung der Hauptgrund des Telefonats ist.",
            "ar": "الخيار 'خطأ' غير سليم لأن الموعد واللقاء هما محور الرسالة الهاتفية.",
            "fr": "Choisir 'Faux' est erroné car le rendez-vous est au cœur de leur échange."
        }
    },
    "h10": {
        "quote": "Fahrtdauer: Dennis erklärt, dass die Anfahrt mit öffentlichen Verkehrsmitteln zum Zoo etwa 35 Minuten in Anspruch nimmt.",
        "whyCorrect": {
            "de": "b ist richtig. Dennis rechnet mit einer Fahrtzeit von circa 35 Minuten bis zum Zoo.",
            "ar": "(b) هو الصحيح. يوضح دينيس أن الرحلة عبر المواصلات العامة تستغرق حوالي 35 دقيقة للوصول إلى الحديقة.",
            "fr": "b est correct. Dennis estime qu'il lui faudra environ 35 minutes de trajet pour parvenir au zoo."
        },
        "whyIncorrect": {
            "de": "a und c nennen unzutreffende Stationsanzahlen oder Umsteigezeiten.",
            "ar": "الخياران (a) و (c) يذكران تفاصيل غير صحيحة عن عدد المحطات أو التبديل.",
            "fr": "a et c mentionnent des informations erronées concernant les correspondances ou stations."
        }
    },
    "h11": {
        "quote": "Schiffsdaten: Unser historischer Schaufelraddampfer wurde bereits in den 1990er-Jahren, also vor 2010 umfassend modernisiert.",
        "whyCorrect": {
            "de": "a ist richtig. Das Schiff wurde lange vor 2010 gebaut und in Betrieb genommen.",
            "ar": "(a) هو الصحيح. بُنيت السفينة ودخلت الخدمة قبل عام 2010 بوقت طويل.",
            "fr": "a est correct. Le bateau à vapeur a été construit bien avant l'année 2010."
        },
        "whyIncorrect": {
            "de": "b und c stimmen zeitlich nicht mit den historischen Baudaten überein.",
            "ar": "الخياران (b) و (c) لا يتطابقان مع سنة بناء السفينة وتاريخ تدشينها.",
            "fr": "b et c ne correspondent pas aux dates historiques de mise en service du navire."
        }
    },
    "h12": {
        "quote": "Burg Maus: Auf der berühmten Burg Maus befindet sich eine traditionsreiche Greifvogelstation mit Adlern und Falken.",
        "whyCorrect": {
            "de": "c ist richtig. Auf Burg Maus kann man Vögel (Greifvögel und Falken) bei Flugschauen beobachten.",
            "ar": "(c) هو الصحيح. تشتهر قلعة ماوس بمركز لعروض وتربية الطيور الجارحة (النسور والصقور).",
            "fr": "c est correct. Le château de Burg Maus abrite une station de rapaces où l'on peut admirer des oiseaux."
        },
        "whyIncorrect": {
            "de": "a und b beruhen lediglich auf der wörtlichen Namensbedeutung von Katze und Maus, nicht auf realen Tieren vor Ort.",
            "ar": "الخياران (a) و (b) تلاعُب بأسماء القلاع التاريخية (القط والفأر) وليست حيوانات معروضة هناك.",
            "fr": "a et b jouent sur les dénominations historiques des châteaux et ne correspondent à aucun animal réel."
        }
    },
    "h13": {
        "quote": "Landgang: Unser planmäßiger Landgang mit Besichtigung der historischen Drosselgasse findet in Rüdesheim statt.",
        "whyCorrect": {
            "de": "b ist richtig. Die Passagiere gehen in Rüdesheim an Land, um die Stadt zu erkunden.",
            "ar": "(b) هو الصحيح. ينزل الركاب إلى اليابسة لزيارة المعالم الشهيرة في مدينة رودسهايم (Rüdesheim).",
            "fr": "b est correct. Les passagers débarquent à Rüdesheim pour une excursion à terre."
        },
        "whyIncorrect": {
            "de": "a und c sind lediglich Zwischenstopps oder Aussichtspunkte ohne organisierten Landgang.",
            "ar": "الخياران (a) و (c) مجرد محطات مرور في النهر دون نزول للركاب.",
            "fr": "a et c ne sont que des points de passage le long du Rhin."
        }
    },
    "h14": {
        "quote": "Bordgastronomie: An unserer Schiffsbar halten wir eine reichhaltige Auswahl an verschiedenen Heiß- und Kaltgetränken für Sie bereit.",
        "whyCorrect": {
            "de": "b ist richtig. An der Bar werden verschiedene Getränke serviert.",
            "ar": "(b) هو الصحيح. يوفر بار السفينة تشكيلة متنوعة من مختلف المشروبات الساخنة والباردة.",
            "fr": "b est correct. Le bar du bord propose un vaste choix de boissons variées."
        },
        "whyIncorrect": {
            "de": "a ist zu speziell eingeschränkt und c (warme Speisen) gibt es nur im Hauptrestaurant, nicht an der Bar.",
            "ar": "الخيار (a) مقيد بنوع واحد، والخيار (c) يقدم في المطعم الرئيسي وليس في البار.",
            "fr": "a est trop restrictif et c (plats chauds) n'est servi qu'au restaurant principal."
        }
    },
    "h15": {
        "quote": "Raucherregelung: Aus Sicherheitsgründen ist das Rauchen ausschließlich in den dafür ausgewiesenen privaten Kabinen erlaubt.",
        "whyCorrect": {
            "de": "c ist richtig. Das Rauchen ist an Bord nur in einer Kabine gestattet, auf den Außendecks und Innenräumen herrscht Rauchverbot.",
            "ar": "(c) هو الصحيح. يسمح بالتدخين فقط في كبائن خاصة محددة، ويمنع تماماً في المساحات المفتوحة والأماكن العامة.",
            "fr": "c est correct. Il est uniquement permis de fumer dans des cabines dédiées à cet usage."
        },
        "whyIncorrect": {
            "de": "a und b sind rauchfreie Zonen zum Schutz aller Reisenden.",
            "ar": "الخياران (a) و (b) مناطق خالية من التدخين لسلامة وراحة الركاب.",
            "fr": "a et b sont des espaces non-fumeurs soumis à une interdiction stricte."
        }
    },
    "h16": {
        "quote": "Großvater im Café: „Ach, ein feines Stück Torte zum Kaffee lasse ich mir doch niemals entgehen!“",
        "whyCorrect": {
            "de": "Falsch. Der Großvater isst Kuchen ausgesprochen gerne und bestellt sich mit Begeisterung ein Stück.",
            "ar": "خطأ. الجد يحب تناول الكعك والحلويات كثيراً ويطلب قطعة منها باستمتاع في المقهى.",
            "fr": "Faux. Le grand-père adore les pâtisseries et commande une part de gâteau avec grand plaisir."
        },
        "whyIncorrect": {
            "de": "Richtig ist nicht zutreffend, da seine Vorliebe für Süßes deutlich hörbar ist.",
            "ar": "الخيار 'صحيح' غير دقيق لأن حبه للحلويات واضح من حواره.",
            "fr": "Choisir 'Vrai' est erroné car son penchant pour les douceurs est manifeste."
        }
    },
    "h17": {
        "quote": "Großvater: „Die Aargauer Rüeblitorte kenne ich seit meiner Jugendzeit in- und auswendig, das ist ein echter Klassiker!“",
        "whyCorrect": {
            "de": "Falsch. Lenas Großvater kennt Rüeblitorte bestens und hat sie schon oft in seinem Leben gegessen.",
            "ar": "خطأ. يعرف جد لينا كعكة الجزر السويسرية (Rüeblitorte) منذ شبابه وتناولها مرات عديدة.",
            "fr": "Faux. Le grand-père de Lena connaît parfaitement le gâteau aux carottes et en a mangé souvent dans sa vie."
        },
        "whyIncorrect": {
            "de": "Richtig trifft nicht zu, da er die Torte als vertrautes Schweizer Traditionsgebäck beschreibt.",
            "ar": "الخيار 'صحيح' غير مطابق لكلامه الذي يمتدح فيه الكعكة كطبق كلاسيكي معتاد لديه.",
            "fr": "L'affirmation est fausse car il vante ce dessert comme une recette classique bien connue de lui."
        }
    },
    "h18": {
        "quote": "Lena: „Du Opa, ich möchte unbedingt an diesem Schweizer Kochkurs teilnehmen, aber mir fehlt noch das Kursgeld dafür.“",
        "whyCorrect": {
            "de": "Richtig. Lena bittet ihren Opa um finanzielle Hilfe, um die Gebühren für den Kochkurs bezahlen zu können.",
            "ar": "صحيح. تطلب لينا من جدها مساعدة مالية لتسديد رسوم التسجيل في دورة الطهي.",
            "fr": "Vrai. Lena sollicite l'aide financière de son grand-père pour s'inscrire à un cours de cuisine."
        },
        "whyIncorrect": {
            "de": "Falsch ist unpassend, da die Kursgebühr der Hauptanlass für ihre Bitte an den Großvater ist.",
            "ar": "الخيار 'خطأ' غير صحيح لأن دفع تكاليف دورة الطبخ هو السبب المباشر لحديثها معه.",
            "fr": "Choisir 'Faux' ne convient pas puisque la participation financière est l'objet de sa demande."
        }
    },
    "h19": {
        "quote": "Lena über die Oma: „Oma steht doch gar nicht auf Fondue oder Rösti, sie zaubert am liebsten Pasta und mediterrane Gerichte.“",
        "whyCorrect": {
            "de": "Falsch. Lenas Großmutter kocht lieber italienisch und mediterran statt traditioneller Schweizer Hausmannskost.",
            "ar": "خطأ. تفضل جدة لينا تحضير الأطباق الإيطالية والمتوسطية ولا تطبخ الأكلات السويسرية التقليدية.",
            "fr": "Faux. La grand-mère de Lena préfère cuisiner des spécialités italiennes plutôt que des plats suisses traditionnels."
        },
        "whyIncorrect": {
            "de": "Richtig trifft nicht zu, da die Oma gerade keine traditionellen Gerichte der Schweiz zubereitet.",
            "ar": "الخيار 'صحيح' مناقض للحقيقة فالجدة تتجنب الطبخ السويسري الثقيل كالفوندو والروشتي.",
            "fr": "L'affirmation est fausse car la grand-mère privilégie la gastronomie méditerranéenne."
        }
    },
    "h20": {
        "quote": "Großvater: „Mit heimischen Zutaten der Region zu kochen schont weite Transportwege und nützt unserer Umwelt enorm.“",
        "whyCorrect": {
            "de": "Richtig. Die Verwendung regionaler, traditioneller Lebensmittel spart weite Transportwege und schont die Natur.",
            "ar": "صحيح. استخدام المكونات المحلية والتقليدية يقلل من مسافات الشحن الطويلة ويحمي البيئة والمناخ.",
            "fr": "Vrai. Cuisiner avec des produits du terroir évite les longs transports et préserve l'environnement."
        },
        "whyIncorrect": {
            "de": "Falsch ist nicht zutreffend, da der ökologische Vorteil regionaler Küche im Gespräch bejaht wird.",
            "ar": "الخيار 'خطأ' غير سليم لأن الفائدة البيئية للطعام المحلي كانت نقطة اتفاق أساسية.",
            "fr": "Choisir 'Faux' est erroné car l'argument écologique est explicitement mis en valeur."
        }
    },
    "h21": {
        "quote": "Gesundheitsaspekt: Die ungewohnten, extrem scharfen Gewürze exotischer Küchen belasten oft den Magen hiesiger Bürger.",
        "whyCorrect": {
            "de": "Richtig. Scharfe und exotische Gewürze wie in der mexikanischen Küche sind für manche Schweizer schwer bekömmlich.",
            "ar": "صحيح. التوابل الحارة والغريبة في المطبخ المكسيكي قد تكون غير صحية أو ثقيلة على معدة سكان سويسرا.",
            "fr": "Vrai. Les épices très piquantes de la cuisine mexicaine conviennent moins bien aux estomacs suisses non habitués."
        },
        "whyIncorrect": {
            "de": "Falsch trifft nicht zu, da die mangelnde Verträglichkeit scharfer Importküche betont wird.",
            "ar": "الخيار 'خطأ' غير صحيح فالنص يشير إلى صعوبة هضم الأطباق المكسيكية الحارة للأهالي.",
            "fr": "L'affirmation est exacte d'après les explications médicales données par le grand-père."
        }
    },
    "h22": {
        "quote": "Großvater: „Aber natürlich übernehme ich die Kurskosten sehr gerne für dich, mein Kind!“",
        "whyCorrect": {
            "de": "Falsch. Der Großvater kann und will ihr das Geld geben und bezahlt den Kochkurs mit Freude.",
            "ar": "خطأ. الجد قادر على منحها المال ويسعده جداً التكفل بدفع مصاريف دورة الطبخ لحفيدته.",
            "fr": "Faux. Le grand-père a les moyens et accepte avec grand plaisir de lui financer le cours de cuisine."
        },
        "whyIncorrect": {
            "de": "Richtig ist falsch, da er ihre Bitte nicht ablehnt, sondern sofort großzügig zusagt.",
            "ar": "الخيار 'صحيح' غير دقيق لأنه وافق على الفور وبكل سرور على منحها المبلغ المطلوب.",
            "fr": "Choisir 'Vrai' est faux car il accède immédiatement à sa demande financière."
        }
    },
    "h23": {
        "quote": "Annette Vinke (b): „Die positive Ausstrahlung und gute Laune der Moderatoren bringt den Patienten neue Lebenskraft und ist unbezahlbar.“",
        "whyCorrect": {
            "de": "Annette Vinke (b) sagt dies. Sie betont, wie wertvoll die heitere Stimmung der Sprecher für die Genesung der Kranken ist.",
            "ar": "أنيت فينكه (b) هي القائلة. تؤكد على القيمة المعنوية العالية لابتسامة ومرح المذيعين في التخفيف عن المرضى.",
            "fr": "C'est Annette Vinke (b) qui l'affirme. Elle souligne l'effet thérapeutique et précieux de la bonne humeur des animateurs."
        },
        "whyIncorrect": {
            "de": "Der Moderator und Michael sprechen über Finanzierungsmodelle und Technik, nicht über diesen emotionalen Wert.",
            "ar": "تناول المذيع ومايكل التجهيزات التقنية والتمويل، أما الجانب المعنوي فقد طرحته أنيت.",
            "fr": "L'animateur et Michael débattent de la technique et du budget, non de cet apport moral."
        }
    },
    "h24": {
        "quote": "Annette Vinke (b): „Traurige oder beunruhigende Nachrichten haben bei uns im Spitalradio striktes Sendeverbot.“",
        "whyCorrect": {
            "de": "Annette Vinke (b) erklärt dieses redaktionelle Prinzip. Negative und traurige Botschaften werden bewusst vermieden.",
            "ar": "أنيت فينكه (b) هي القائلة. توضح سياسة المحطة في استبعاد وحظر بث أي أخبار محزنة أو مقلقة للمرضى.",
            "fr": "C'est Annette Vinke (b) qui l'explique. Les messages tristes ou anxiogènes sont systématiquement exclus des ondes."
        },
        "whyIncorrect": {
            "de": "Weder Michael noch der Moderator stellten diese programmatische Regel des Krankenhaussenders auf.",
            "ar": "لم يطرح مايكل أو المذيع هذه القاعدة التحريرية الخاصة بإذاعة المستشفى بل صرحت بها أنيت.",
            "fr": "Cette règle éditoriale propre à la radio hospitalière émane de la directrice Annette."
        }
    },
    "h25": {
        "quote": "Moderator (a): „Für die Hörer bringt Werbung doch auch echte Vorzüge, da sie über neue Angebote und Rabatte informiert werden.“",
        "whyCorrect": {
            "de": "Der Moderator (a) vertritt diesen Standpunkt. Er hebt hervor, dass Konsumenten und Hörer von Werbehinweisen profitieren können.",
            "ar": "المذيع (a) هو القائل. يرى أن الإعلانات التجارية تمنح المستمعين فوائد باطلاعهم على عروض وتخفيضات جديدة.",
            "fr": "C'est l'animateur (a) qui défend cette idée. Il rappelle que la publicité informe utilement les auditeurs."
        },
        "whyIncorrect": {
            "de": "Die beiden Gäste sehen Werbung im Spital eher kritisch oder als rein notwendiges Übel.",
            "ar": "الضيفان ينظران للإعلانات بتحفظ بينما تولى المذيع ذكر فوائدها المحتملة للجمهور.",
            "fr": "Les deux invités sont plus circonspects sur la publicité que l'animateur."
        }
    },
    "h26": {
        "quote": "Annette Vinke (b): „Erst durch gezielte Werbeeinnahmen können wir die laufenden Betriebskosten unseres Senders decken.“",
        "whyCorrect": {
            "de": "Annette Vinke (b) stellt dies klar. Für ihren Sender ist kommerzielle Werbung die notwendige Basis der Finanzierung.",
            "ar": "أنيت فينكه (b) هي القائلة. توضح أن عائدات الإعلانات هي المصدر الأساسي الذي يتيح تمويل نفقات البث.",
            "fr": "C'est Annette Vinke (b) qui le précise. Les recettes publicitaires sont indispensables pour couvrir les frais de sa station."
        },
        "whyIncorrect": {
            "de": "Michael widerspricht dem für sein eigenes Projekt, bei dem auf Werbung verzichtet wird.",
            "ar": "يعارضها مايكل مستشهداً بنموذج محطته التي نجحت في العمل دون أي إعلانات تجارية.",
            "fr": "Michael prouve le contraire avec sa propre expérience exempte de réclame commerciale."
        }
    },
    "h27": {
        "quote": "Michael Schönberg (c): „Unser Sender 'Spitalfunk' finanziert sich seit jeher komplett werbefrei über Spenden und Förderer.“",
        "whyCorrect": {
            "de": "Michael Schönberg (c) berichtet stolz, dass sein Partnersender „Spitalfunk“ ganz ohne Werbespots erfolgreich arbeitet.",
            "ar": "مايكل شونبيرغ (c) هو القائل. يفيد بنجاح محطتهم «سبيمالفنك» في البث والعمل دون اللجوء لأي إعلانات.",
            "fr": "C'est Michael Schönberg (c) qui le relate. Sa radio « Spitalfunk » a réussi le pari de fonctionner sans aucune publicité."
        },
        "whyIncorrect": {
            "de": "Annette räumte ein, dass ihr Sender ohne Werbung nicht überleben könnte.",
            "ar": "أنيت أكدت حاجة محطتها للإعلانات، أما مايكل فهو الذي استطاع تدبير محطة خالية من الدعاية.",
            "fr": "Annette a reconnu dépendre de la publicité, contrairement au projet de Michael."
        }
    },
    "h28": {
        "quote": "Annette Vinke (b): „Jeder ehrenamtliche Helfer, Patient oder Angehörige, der Lust hat, darf sich aktiv ans Mikrofon setzen.“",
        "whyCorrect": {
            "de": "Annette Vinke (b) lädt dazu ein. Bei ihrem Radioprojekt steht das Mitmachen allen interessierten Freiwilligen offen.",
            "ar": "أنيت فينكه (b) هي القائلة. ترحب بمشاركة وتطوع أي شخص يرغب في خوض التجربة الإذاعية خلف الميكروفون.",
            "fr": "C'est Annette Vinke (b) qui l'explique. Son antenne est ouverte à toute personne désireuse de participer."
        },
        "whyIncorrect": {
            "de": "Michael und der Moderator thematisierten technische Pannen, nicht die offene Mitarbeiterpolitik.",
            "ar": "تحدث مايكل عن الصعوبات التقنية بينما دعت أنيت الراغبين للانضمام والتطوع بالمحطة.",
            "fr": "Michael évoque le matériel, alors qu'Annette développe la politique d'ouverture aux bénévoles."
        }
    },
    "h29": {
        "quote": "Michael Schönberg (c): „Wenn sich jemand verspricht oder ein kleiner Fehler passiert, nehmen wir das mit Humor und lachen herzlich.“",
        "whyCorrect": {
            "de": "Michael Schönberg (c) schildert die lockere Studioatmosphäre, in der Versprecher und Pannen mit Lachen genommen werden.",
            "ar": "مايكل شونبيرغ (c) هو القائل. يشير إلى تقبل الأخطاء وزلات اللسان في الاستوديو بروح مرحة والضحك عليها ببساطة.",
            "fr": "C'est Michael Schönberg (c) qui le raconte. Les lapsus et petites erreurs à l'antenne sont accueillis dans la bonne humeur et par des rires."
        },
        "whyIncorrect": {
            "de": "Annette sprach über Professionalität und Sendebeschränkungen, während Michael von diesen lustigen Momenten erzählt.",
            "ar": "ركزت أنيت على الانضباط بينما وصف مايكل المواقف العفوية والضحك على الأخطاء.",
            "fr": "Annette insiste sur le cadre éditorial, tandis que Michael dépeint ces instants d'autodérision."
        }
    },
    "h30": {
        "quote": "Michael Schönberg (c): „Für ein professionelles Tonstudio und verlässliche Sendeanlagen muss man heute beträchtliche Summen investieren.“",
        "whyCorrect": {
            "de": "Michael Schönberg (c) äußert dies. Er verweist auf die hohen Anschaffungs- und Wartungskosten für Studiotechnik.",
            "ar": "مايكل شونبيرغ (c) هو القائل. يوضح أن شراء وصيانة الأجهزة الصوتية ومعدات البث يتطلب إنفاق مبالغ مالية طائلة.",
            "fr": "C'est Michael Schönberg (c) qui le constate. L'acquisition et la maintenance d'équipements audio de qualité représentent un investissement élevé."
        },
        "whyIncorrect": {
            "de": "Weder Annette noch der Moderator gingen derart detailliert auf die hohen Anschaffungskosten der Funktechnik ein.",
            "ar": "لم يتطرق المذيع أو أنيت لهذا التفصيل المتعلق بارتفاع أسعار معدات الاستوديو.",
            "fr": "Ni l'animateur ni Annette n'ont chiffré ainsi les coûts du matériel de transmission."
        }
    }
}
};

/**
 * Helper to fetch the explanation object for any given question.
 * Returns tailored pedagogical feedback in German, Arabic, or French.
 */
function getExplanation(testId, questionId, lang) {
  const currentLang = (lang === 'ar' || lang === 'fr') ? lang : 'de';
  const testDict = explanationsData[testId] || explanationsData['modellsatz-1'];
  const qExp = testDict ? testDict[String(questionId)] : null;

  if (qExp) {
    return {
      quote: qExp.quote || '',
      whyCorrect: qExp.whyCorrect?.[currentLang] || qExp.whyCorrect?.['de'] || '',
      whyIncorrect: qExp.whyIncorrect?.[currentLang] || qExp.whyIncorrect?.['de'] || ''
    };
  }

  // Graceful fallback if a newly added question doesn't have custom handwritten explanation yet
  if (currentLang === 'ar') {
    return {
      quote: '',
      whyCorrect: 'الإجابة المحددة هي الإجابة الصحيحة وفقًا لمعطيات النص وقواعد امتحان B1.',
      whyIncorrect: 'الخيارات الأخرى لا تتطابق مع المعلومات الدقيقة الواردة في النص أو تحتوي على معلومات مضللة.'
    };
  } else if (currentLang === 'fr') {
    return {
      quote: '',
      whyCorrect: 'Cette réponse est la solution exacte selon les données du texte et les critères de l\'examen B1.',
      whyIncorrect: 'Les autres propositions contiennent des éléments non vérifiés ou contredisent directement le texte.'
    };
  }

  return {
    quote: '',
    whyCorrect: 'Diese Lösung stimmt mit den Aussagen und Fakten im Prüfungstext überein.',
    whyIncorrect: 'Die alternativen Auswahlmöglichkeiten weichen vom Text ab oder enthalten typische Prüfungsfallen.'
  };
}
