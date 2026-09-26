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
