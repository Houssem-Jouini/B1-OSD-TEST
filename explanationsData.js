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
