#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate complete pedagogical explanations for data/tests/modellsatz-24.json (Modelltest 18)
Conforming strictly to validate-tests.js schema with whyCorrect (de/fr/ar), whyIncorrect (de/fr/ar), and quote.
"""

explanations = {
  # --- TEIL 1 (1-6) ---
  "1": {
    "quote": "Fahrzeugverkehr gibt es da so gut wie gar keinen, dadurch hatten die Kinder eine sehr große Bewegungsfreiheit.",
    "whyCorrect": {
      "de": "Lösung: Richtig. Im Text steht: „Fahrzeugverkehr gibt es da so gut wie gar keinen, dadurch hatten die Kinder eine sehr große Bewegungsfreiheit.“ Es gab also kaum Verkehr nahe dem Bauernhof.",
      "fr": "Solution : Vrai (Richtig). Le texte indique : « Il n'y a pratiquement aucune circulation automobile, ce qui donnait aux enfants une très grande liberté de mouvement. » Il n'y avait donc presque pas de circulation près de la ferme.",
      "ar": "الحل: صحيح (Richtig). ورد في النص: «حركة مرور السيارات تكاد تكون منعدمة تماماً هناك، مما منح الأطفال حرية حركة واسعة للغاية». بالتالي لم تكن هناك أي حركة مرور تقريباً قرب المزرعة."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist hier nicht zutreffend, da die Aussage („Es gab kaum Verkehr in der Nähe des Bauernhofs.“) durch den Textbeleg eindeutig bestätigt wird.",
      "fr": "Choisir « Faux » (Falsch) est incorrect, car l'affirmation (« Il n'y avait presque pas de circulation à proximité de la ferme. ») est explicitement confirmée par le texte.",
      "ar": "اختيار «خطأ» (Falsch) غير صحيح، لأن العبارة («لم تكن هناك حركة مرور تقريباً بالقرب من المزرعة.») مؤكدة بوضوح في النص."
    }
  },
  "2": {
    "quote": "Fast alles stammt aus eigener Herstellung, z.B. Schinken, Zwetschkenmarmelade, frische Semmeln usw.",
    "whyCorrect": {
      "de": "Lösung: Falsch. Dieter schreibt: „Fast alles stammt aus eigener Herstellung, z.B. Schinken, Zwetschkenmarmelade, frische Semmeln usw.“ Die Speisen wurden vom Biobauernhof selbst produziert, nicht von den Gästen zubereitet.",
      "fr": "Solution : Faux (Falsch). Dieter écrit : « Presque tout provient de notre propre production, par ex. le jambon, la confiture de quetsches, les petits pains frais, etc. » Les aliments étaient produits par la ferme biologique elle-même et non confectionnés par les clients.",
      "ar": "الحل: خاطئ (Falsch). كتب ديتر: «كل شيء تقريباً من إنتاج المزرعة الخاص، مثل لحم الخنزير المقدد ومربى البرقوق والخبز الطازج وما إلى ذلك». فالأطعمة أنتجتها المزرعة العضوية نفسها ولم يُعدها الضيوف."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da die Speisen vom Hof selbst stammen und die Gäste das Frühstück nicht selbst herstellten.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car les aliments étaient fabriqués par la ferme biologique et non par les clients de passage.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن الأطعمة كانت من إنتاج المزرعة الخاصة ولم يقم الضيوف بإعدادها."
    }
  },
  "3": {
    "quote": "Der Hof verfügt über ein beheiztes Schwimmbad mit Liegewiese. Ich und Lena haben uns richtig auf die faule Haut gelegt, aber die Kinder sind viel lieber zum hauseigenen Forellenteich und haben geangelt.",
    "whyCorrect": {
      "de": "Lösung: Falsch. Das beheizte Schwimmbad stand allen Gästen zur Verfügung. Die Kinder durften es selbstverständlich benutzen, zogen es jedoch vor, am Teich zu angeln: „aber die Kinder sind viel lieber zum hauseigenen Forellenteich und haben geangelt.“",
      "fr": "Solution : Faux (Falsch). La piscine chauffée était accessible à tous les hôtes. Les enfants avaient tout à fait le droit de l'utiliser, mais ils préféraient aller pêcher des truites à l'étang.",
      "ar": "الحل: خاطئ (Falsch). كان المسبح متاحاً لجميع النزلاء بلا استثناء، وكان يحق للأطفال استخدامه بالتأكيد، إلا أنهم فضلوا الذهاب إلى بركة المزرعة لصيد الأسماك."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da es im Text keinerlei Beschränkung des Schwimmbads nur auf Erwachsene gibt.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car le texte ne mentionne aucune restriction d'accès réservant la piscine aux seuls adultes.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، إذ لا يوجد في النص أي قيد يقصر استخدام المسبح على الكبار فقط."
    }
  },
  "4": {
    "quote": "Die Kinder waren auch oft im Stall bei den Tieren. Sie durften sogar einmal bei der Geburt eines Kalbes dabei sein. Und sie haben gelernt, wie man eine Kuh melkt.",
    "whyCorrect": {
      "de": "Lösung: Richtig. Im Text heißt es: „Die Kinder waren auch oft im Stall bei den Tieren. Sie durften sogar einmal bei der Geburt eines Kalbes dabei sein. Und sie haben gelernt, wie man eine Kuh melkt.“ Sie beschäftigten sich häufig mit den Tieren.",
      "fr": "Solution : Vrai (Richtig). Le texte précise que les enfants passaient beaucoup de temps à l'étable avec les animaux, ont assisté à la naissance d'un veau et ont appris à traire une vache.",
      "ar": "الحل: صحيح (Richtig). يؤكد النص: «كان الأطفال يقضون وقتاً طويلاً في الحظيرة مع الحيوانات. حتى أنهم حضروا ولادة عجل، وتعلموا كيف يحلبون البقرة»."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist hier nicht zutreffend, da der Text ausdrücklich bestätigt, dass die Kinder oft im Stall bei den Tieren waren.",
      "fr": "Choisir « Faux » (Falsch) est incorrect, car le texte affirme expressément que les enfants s'occupaient régulièrement des animaux.",
      "ar": "اختيار «خطأ» (Falsch) غير صحيح، لأن النص يثبت صراحة أن الأطفال ترددوا كثيراً على الحيوانات في الحظيرة."
    }
  },
  "5": {
    "quote": "Ab und zu haben wir auch Ausflüge unternommen. Einmal sind wir zum Wörthersee baden gefahren... Ein anderes Mal waren wir auf der Burg Hochosterwitz...",
    "whyCorrect": {
      "de": "Lösung: Richtig. Dieter berichtet: „Ab und zu haben wir auch Ausflüge unternommen. Einmal sind wir zum Wörthersee baden gefahren... Ein anderes Mal waren wir auf der Burg Hochosterwitz mit ihren 14 (!) Burgtoren.“",
      "fr": "Solution : Vrai (Richtig). Dieter mentionne explicitement plusieurs excursions en famille : baignade au lac Wörthersee et visite du château fort de Hochosterwitz.",
      "ar": "الحل: صحيح (Richtig). يذكر ديتر قيام الأسرة برحلات عدة: «بين الحين والآخر قمنا برحلات استكشافية؛ كالسباحة في بحيرة فورتيرزيه وزيارة قلعة هوخ أوسترفيتز»."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist hier nicht zutreffend, da die Aussage („Die Familie hat manchmal Ausflüge gemacht.“) wörtlich mit „Ab und zu haben wir auch Ausflüge unternommen“ übereinstimmt.",
      "fr": "Choisir « Faux » (Falsch) est incorrect, car l'affirmation correspond mot à mot au récit de Dieter dans la lettre.",
      "ar": "اختيار «خطأ» (Falsch) غير صحيح، لأن عبارة القيام برحلات تتطابق حرفياً مع ما ورد في رسالة ديتر."
    }
  },
  "6": {
    "quote": "Die Zimmer haben keinen Fernseher und kein Radio. Doch wir brauchten beides nicht.",
    "whyCorrect": {
      "de": "Lösung: Falsch. Dieter schreibt: „Die Zimmer haben keinen Fernseher und kein Radio. Doch wir brauchten beides nicht.“ Die Kinder lasen nicht aus Vorliebe statt fernzusehen, sondern es gab schlicht gar keinen Fernseher.",
      "fr": "Solution : Faux (Falsch). Dieter précise que les chambres n'étaient équipées ni de télévision ni de radio. Les enfants ne lisaient donc pas par préférence au détriment de la télévision, il n'y avait aucun écran.",
      "ar": "الحل: خاطئ (Falsch). يوضح ديتر أن الغرف لم تكن مزودة بأي تلفاز أو مذياع أصلاً، وبالتالي لم يكن سبب القراءة تفضيلها على التلفاز بل عدم وجود أي جهاز تلفاز."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da die Begründung („statt fernzusehen“) unzutreffend ist; es war überhaupt kein Fernseher vorhanden.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car la formulation laisse entendre un choix délibéré alors qu'aucun téléviseur n'existait.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن المقارنة بمشاهدة التلفاز باطلة لعدم وجود تلفاز في الغرف على الإطلاق."
    }
  },

  # --- TEIL 2 (7-12) ---
  "7": {
    "quote": "Vier Millionen Menschen in Deutschland können diesen Text nicht richtig lesen, weil sie Analphabeten sind. Sie sind arm, isoliert und von anderen abhängig.",
    "whyCorrect": {
      "de": "Lösung: a (die Situation von Analphabeten). Der gesamte Text befasst sich mit den Lebensumständen, den beruflichen Hürden und den Lernmöglichkeiten von vier Millionen Analphabeten in Deutschland.",
      "fr": "Solution : a (la situation des analphabètes). L'ensemble de l'article traite des conditions de vie, des difficultés professionnelles et des opportunités d'apprentissage des quatre millions d'analphabètes en Allemagne.",
      "ar": "الحل: a (أوضاع وظروف الأميين). يتناول النص بأكمله ظروف معيشة أربعة ملايين أمي في ألمانيا، والتحديات المهنية التي تواجههم وسبل التعلم المتاحة لهم."
    },
    "whyIncorrect": {
      "de": "Option b („die Kurse der Volkshochschule“) und Option c („die Gründe für Analphabetismus“) stellen lediglich Randaspekte dar und bilden nicht das Hauptthema des Textes.",
      "fr": "Les options b (« les cours des universités populaires ») et c (« les causes de l'analphabétisme ») ne sont que des détails secondaires et non le sujet principal.",
      "ar": "الخياران b (دورات مدارس تعليم الكبار) وc (أسباب انتشار الأمية) هما مجرد تفاصيل جانبية وليسا الموضوع المحوري للمقال."
    }
  },
  "8": {
    "quote": "Denn wer nicht lesen und schreiben kann, ist eher arbeitslos... Einfache Arbeitsplätze werden wegrationalisiert und mit Robotern besetzt. Schreiben und Lesen ist mittlerweile auch bei einfachen Jobs nötig.",
    "whyCorrect": {
      "de": "Lösung: c (finden nicht so leicht einen Arbeitsplatz). Der Text stellt klar: Da einfache Arbeitsplätze durch Roboter ersetzt werden und selbst Hilfsjobs Lese- und Schreibkenntnisse verlangen, sind Analphabeten besonders oft arbeitslos und finden schwer Arbeit.",
      "fr": "Solution : c (ne trouvent pas facilement un emploi). Le texte explique que la robotisation supprime les emplois simples et que même les tâches élémentaires exigent désormais de savoir lire et écrire, ce qui rend l'accès à l'emploi très difficile pour eux.",
      "ar": "الحل: c (لا يجدون فرص عمل بسهولة). يوضح النص أنه نظراً لأتمتة الوظائف البسيطة بالروبوتات وحاجة كافة الأعمال لقراءة التعليمات، يواجه الأميون صعوبة بالغة في إيجاد وظائف."
    },
    "whyIncorrect": {
      "de": "Option a („werden immer schlecht bezahlt“) ist verallgemeinernd falsch (im Text: „wenn Analphabeten einen Job finden, dann meist...“), und Option b („müssen die Arbeit von Robotern machen“) verkehrt die Aussage, da Roboter menschliche Arbeitsplätze ersetzen.",
      "fr": "L'option a généralise à tort (« sont toujours mal payés ») et l'option b contredit le texte (les robots remplacent les humains, ils ne leur dictent pas leur travail).",
      "ar": "الخيار a يعمم خطأً بكلمة «دائماً»، والخيار b يقلب المعنى لأن الروبوتات هي التي تأخذ مكان العمال وليس العكس."
    }
  },
  "9": {
    "quote": "Wer es schafft, trotz der Lese- und Schreibschwäche das Internet zu benutzen, kann dort spezielle Lern-Seiten besuchen. Etwa 250000 Menschen nutzen ein Online-Lernportal des Deutschen Volkshochschul-Verbandes, wo sie sich per Bild und Ton die Buchstaben erschließen können.",
    "whyCorrect": {
      "de": "Lösung: c (gibt es die Möglichkeit, lesen und schreiben zu lernen). Der Text erläutert, dass über 250.000 Menschen Online-Lernportale nutzen, um per Bild und Ton Lesen und Schreiben zu lernen.",
      "fr": "Solution : c (il existe la possibilité d'apprendre à lire et à écrire). Le texte mentionne que plus de 250 000 usagers apprennent les lettres grâce à l'image et au son sur des portails en ligne spécialisés.",
      "ar": "الحل: c (تتوفر إمكانية تعلم القراءة والكتابة). يبين النص بوضوح أن أكثر من 250 ألف شخص يتعلمون الحروف والقراءة والكتابة عبر بوابات تعليمية بالصوت والصورة على الإنترنت."
    },
    "whyIncorrect": {
      "de": "Option a („kann man auch als Analphabet bequem surfen“) ist falsch, da das Surfen mit Leseschwäche eine Hürde ist („Wer es schafft...“), und Option b verdreht die Zahl (250.000 ist die Zahl der Portalnutzer, nicht aller Analphabeten).",
      "fr": "L'option a est contredite (« Wer es schafft... » prouve que ce n'est pas facile) et l'option b déforme le chiffre de 250 000 usagers du portail.",
      "ar": "الخيار a خاطئ لأن التصفح يشكل عائقاً كبيراً، والخيار b يحرّف الرقم 250 ألفاً الذي يمثل مستخدمي البوابة التعليمية وليس كل الأميين."
    }
  },
  "10": {
    "quote": "Das Prince Charles Cinema am Leicester Square in London hat jetzt eine eigenwillige Maßnahme gegen diese Kino-Ruhestörer eingeführt... Freiwillige verkleiden sich als „Kino-Ninjas“...",
    "whyCorrect": {
      "de": "Lösung: b (eine Aktion in einem englischen Kino). Der Text berichtet über eine Initiative im Prince Charles Cinema in London (England), wo Freiwillige als Ninjas für Ruhe sorgen.",
      "fr": "Solution : b (une action dans un cinéma anglais). L'article relate l'initiative mise en place au Prince Charles Cinema de Londres (Angleterre) contre les perturbateurs en salle.",
      "ar": "الحل: b (مبادرة في قاعة سينما إنجليزية). يتحدث المقال عن مبادرة سينما «برينس تشارلز» في لندن بإنجلترا لضبط الهدوء داخل القاعة."
    },
    "whyIncorrect": {
      "de": "Option a („einen neuen japanischen Film“) und Option c („einen Sicherheitsservice in Kinos“) sind unzutreffend; es geht um ehrenamtliche Kinobesucher in einem Londoner Kino.",
      "fr": "Les options a (« un nouveau film japonais ») et c (« un service de sécurité classique ») ne correspondent pas au sujet de l'article.",
      "ar": "الخياران a (فيلم ياباني جديد) وc (شركة حراسة أمنية) لا علاقة لهما بالمبادرة التطوعية الطريفة في لندن."
    }
  },
  "11": {
    "quote": "Die Idee für diese ungewöhnliche Taskforce – bei der ehrenamtliche Kinobesucher im Austausch für freien Eintritt aktiv werden...",
    "whyCorrect": {
      "de": "Lösung: a (bekommen für ihre Arbeit Freikarten für das Kino). Im Text steht ausdrücklich: „im Austausch für freien Eintritt aktiv werden“. Freier Eintritt entspricht Freikarten.",
      "fr": "Solution : a (reçoivent des billets gratuits pour le cinéma en échange de leur travail). Le texte indique clairement que les bénévoles interviennent « en échange d'une entrée gratuite » (Freikarten).",
      "ar": "الحل: a (يحصلون على تذاكر سينما مجانية مقابل عملهم). ينص المقال صراحة على أن المتطوعين ينشطون «مقابل الدخول المجاني» لمشاهدة الأفلام."
    },
    "whyIncorrect": {
      "de": "Option b („wollen Kinobesucher erschrecken“) und Option c („schicken störenden Besuchern eine SMS“) sind sachlich falsch; die Ninjas sprechen Störer lediglich diskret an.",
      "fr": "Les options b (« veulent effrayer les spectateurs ») et c (« envoient des SMS ») sont fausses ; les ninjas se contentent d'un rappel à l'ordre verbal.",
      "ar": "الخياران b (إخافة المشاهدين) وc (إرسال رسائل نصية) خاطئان؛ إذ يكتفي المتطوعون بالتنبيه الشفهي المباشر بهدوء."
    }
  },
  "12": {
    "quote": "Als er selbst aber einmal einen Anruf im Kino annahm, warnten ihn zwei Kinogäste aus der Schweiz leise, doch endlich ruhig zu sein. Er bekam erst Angst, gab den Leuten dann aber recht. Und so erfand er die Kino-Ninjas.",
    "whyCorrect": {
      "de": "Lösung: c (bekam seine Idee durch einen eigenen Kinobesuch). Gregor Lawson erfand die Kino-Ninjas, nachdem er selbst bei einem Kinobesuch beim Telefonieren ertappt und ermahnt worden war.",
      "fr": "Solution : c (a eu son idée lors d'une séance de cinéma personnelle). Gregor Lawson a eu cette révélation après avoir été lui-même rappelé au calme alors qu'il décrochait son téléphone en salle.",
      "ar": "الحل: c (استلهم فكرته إثر تجربة شخصية في السينما). جاءت الفكرة لغريغور لوسون عندما تلقى اتصالاً في قاعة العرض ونبهه مشاهدان ليلتزم الصمت، فأدرك صوابهما."
    },
    "whyIncorrect": {
      "de": "Option a („spricht oft am Handy, wenn er im Kino ist“) und Option b („ist auch ein Kino-Ninja“) werden durch den Text nicht gestützt; es war ein einmaliger Vorfall und er ist der Erfinder der Kampagne.",
      "fr": "Les options a (« téléphone souvent au cinéma ») et b (« est lui-même un ninja ») ne sont nullement affirmées par le texte.",
      "ar": "الخياران a (يتحدث كثيراً بالهاتف في السينما) وb (هو نفسه أحد النينجا) غير صحيحين ولا يدعمهما النص."
    }
  },

  # --- TEIL 3 (13-19) ---
  "13": {
    "quote": "Anzeige f: „Das goldene Kreativbuch zu Weihnachten: Zum Weihnachtsfest selbst etwas basteln! Ob allein oder mit der ganzen Familie – genießen Sie Ihr handwerkliches Geschick. Mit diesem Buch bekommen Sie schöne Inspirationen für Geschenke und auch Weihnachtsschmuck.“",
    "whyCorrect": {
      "de": "Lösung: f (Das goldene Kreativbuch zu Weihnachten). Max' Schwester ist sehr kreativ und macht Geschenke am liebsten in Handarbeit selbst. Anzeige f bietet ein Bastelbuch mit Ideen für selbstgemachte Geschenke und Schmuck.",
      "fr": "Solution : f (Le livre créatif d'or de Noël). La sœur de Max est très créative et fabrique ses cadeaux de Noël à la main. L'annonce f propose un livre d'idées de bricolage manuel pour cadeaux et décorations.",
      "ar": "الحل: f (كتاب الإبداع الذهبي لعيد الميلاد). أخت ماكس فنانة ومبدعة وتفضل صنع هدايا عيد الميلاد يدوياً بنفسها؛ ويقدم الإعلان f كتاباً لأفكار الأشغال اليدوية وصناعة الهدايا والزينة."
    },
    "whyIncorrect": {
      "de": "Alle anderen Anzeigen bieten Konzerte, Bälle oder Bücher zum Lesen und treffen nicht auf kreative Handarbeit zu.",
      "fr": "Toutes les autres annonces portent sur des sorties, des concerts ou des livres de lecture, sans rapport avec le bricolage manuel.",
      "ar": "بقية الإعلانات تتناول حفلات موسيقية أو كتب قراءة أو مناسبات راقصة ولا علاقة لها بالأشغال اليدوية."
    }
  },
  "14": {
    "quote": "Anzeige a: „Adventsball am 15. Dezember in die Stadthalle Allstetten... Show der Landesmeister Markus und Monika Lenz in Senioren II A Standard u.v.m. Tanzkapelle Zell... Tanzsportclub Allstetten e.V.“",
    "whyCorrect": {
      "de": "Lösung: a (Adventsball am 15. Dezember · Tanzsportclub Allstetten e.V.). Janas Eltern besuchen eine Tanzschule und lieben Standardtanz. Anzeige a lädt zu einem festlichen Adventsball mit Tanzschau und Live-Tanzkapelle ein.",
      "fr": "Solution : a (Bal de l'Avent le 15 décembre · Tanzsportclub Allstetten e.V.). Les parents de Jana adorent la danse de salon. L'annonce a propose un grand bal de danse standard avec démonstrations de champions et musique en direct.",
      "ar": "الحل: a (حفل رقص الأدفنت في 15 ديسمبر · نادي رقص ألشتيتن). يرتاد والدا يانا مدرسة رقص ويعشقان هذه الهواية؛ ويدعو الإعلان a لحفل راقص راقٍ مع عروض رقص قياسي وأوركسترا حية."
    },
    "whyIncorrect": {
      "de": "Andere Anzeigen bieten keine Tanzveranstaltung für tanzbegeisterte Paare.",
      "fr": "Aucune autre annonce ne propose d'événement dansant pour couples amateurs de danse.",
      "ar": "لا يوفر أي إعلان آخر فعالية راقصة تناسب الأزواج الشغوفين بالرقص."
    }
  },
  "15": {
    "quote": "Anzeige d: „Rundflug mit dem Heissluftballon... Nach dem interessanten Aufbau der Ballon-Technik wird in landschaftlich reizvoller Umgebung gestartet und man erlebt das wunderbare Schweben über Wälder und Felder...“",
    "whyCorrect": {
      "de": "Lösung: d (Rundflug mit dem Heißluftballon · Schweizer Erlebnisgeschenke). Der Traumberuf des Sohnes ist Pilot. Ein Gutschein für einen Rundflug im Heißluftballon mit Erläuterung der Flugtechnik ist das perfekte Erlebnisgeschenk.",
      "fr": "Solution : d (Vol en montgolfière · Schweizer Erlebnisgeschenke). Le fils rêve de devenir pilote. Un bon pour un vol en montgolfière au-dessus des paysages avec découverte de la technique aérienne constitue le cadeau idéal.",
      "ar": "الحل: d (جولة في منطاد الهواء الساخن · Schweizer Erlebnisgeschenke). يحلم الفتى بأن يصبح طياراً، وقسيمة التحليق في منطاد الهواء الساخن والتعرف على تقنيات الطيران تمثل الهدية المثلى."
    },
    "whyIncorrect": {
      "de": "Andere Anzeigen betreffen Kultur, Essen oder Bücher, nicht aber das Erlebnis des Fliegens in der Luft.",
      "fr": "Les autres annonces concernent la gastronomie, la musique ou les livres, et non une expérience aérienne.",
      "ar": "سائر الإعلانات تدور حول الحفلات الموسيقية أو الكتب أو المطاعم ولا تتضمن أي تجربة طيران في الجو."
    }
  },
  "16": {
    "quote": "Keine Anzeige bietet den direkten Kauf von neuem Weihnachtsbaumschmuck im Geschäft an.",
    "whyCorrect": {
      "de": "Lösung: 0 (Keine passende Anzeige). Sabine und Marei möchten gemeinsam fertigen Weihnachtsschmuck für den Tannenbaum kaufen. Es gibt keine Anzeige eines Kaufhauses oder Marktes für den Kauf von Christbaumschmuck.",
      "fr": "Solution : 0 (Aucune annonce correspondante). Sabine et Marei veulent faire des courses ensemble pour acheter de nouvelles décorations de sapin. Aucune annonce ne propose de magasin ou marché de vente de décorations pour sapin.",
      "ar": "الحل: 0 (لا يوجد إعلان مناسب). تريد سابين وماري التسوق لشراء زينة جاهزة جديدة لشجرة عيد الميلاد؛ ولا يوجد في القائمة أي إعلان لمتجر أو معرض يبيع زينة شجرة العيد."
    },
    "whyIncorrect": {
      "de": "Anzeige f ist ein Bastelbuch (nicht fertiger Schmuck zum Einkaufen) und Anzeige g ist ein Kinderweihnachtsmarkt des CVJM; somit trifft keine Anzeige genau zu.",
      "fr": "L'annonce f est un livre de bricolage (et non un achat de décorations finies) et l'annonce g est une fête caritative pour enfants du CVJM.",
      "ar": "الإعلان f هو كتاب لصنع الزينة يدوياً وليس شراء زينة جاهزة، والإعلان g سوق خيري لألعاب وكتب الأطفال، فلا يوجد إعلان مطابق."
    }
  },
  "17": {
    "quote": "Anzeige j: „Harlem Gospel Chor: Di, 17.12. und Mi, 18.12. in der Apostel-Paulus-Kirche. Der Harlem Gospel Chor präsentiert die schönsten Spirituals und Gospels. In einer mitreißenden Bühnenshow...“",
    "whyCorrect": {
      "de": "Lösung: j (Harlem Gospel Chor · Apostel-Paulus-Kirche). Oskar sucht ein Weihnachtskonzert, das keine klassische Musik enthält. Der Harlem Gospel Chor bietet mitreißende Spirituals und Gospels in einer modernen Bühnenshow.",
      "fr": "Solution : j (Harlem Gospel Chor · Église Apostel-Paulus). Oskar recherche un concert de Noël non classique pour sa nièce. Le Harlem Gospel Chor propose un spectacle vivant de spirituals et gospels américains.",
      "ar": "الحل: j (فرقة هارلم للغوسبل · كنيسة الرسل بولس). يبحث أوسكار عن حفل موسيقي ميلادي غير كلاسيكي لابنة أخته؛ وتقدم فرقة هارلم ترانيم الغوسبل والروحانيات الحماسية في عرض حي مبهج."
    },
    "whyIncorrect": {
      "de": "Anzeige b (Panflöte & Orgel mit deutschen Weihnachtsliedern) und Anzeige c (Bachs Weihnachts-Oratorium) sind klassische Weihnachtsmusik und schließen sich daher aus.",
      "fr": "Les annonces b (orgue et flûte de pan) et c (Oratorio de Bach) correspondent à de la musique classique traditionnelle.",
      "ar": "الإعلانات b وc تتضمن موسيقى دينية كلاسيكية تقليدية (باخ وأورغن) وهو ما لا يريده أوسكار."
    }
  },
  "18": {
    "quote": "Anzeige e: „Hamburg ganz(s) weihnachtlich: Gehen Sie doch in der Weihnachtszeit einfach mal ganz(s) genüsslich essen... servieren Ihnen 57 Restaurants weihnachtliche Menüs rund um und mit der Gans. Schon ab 22,50 € pro Person...“",
    "whyCorrect": {
      "de": "Lösung: e (Hamburg ganz(s) weihnachtlich · Weihnachtsmenüs). Bernd möchte seine Frau zu einem festlichen Essen zu zweit im Advent einladen. Anzeige e bietet festliche Menüs in 57 Restaurants.",
      "fr": "Solution : e (Hambourg gourmand de Noël · Menus festifs). Bernd veut inviter sa femme à un dîner gastronomique en tête-à-tête pour célébrer leur rencontre pendant l'Avent. L'annonce e présente les menus de fête de 57 restaurants.",
      "ar": "الحل: e (هامبورغ وأجواء العيد · قوائم طعام احتفالية). يريد بيرند دعوة زوجته لعشاء احتفالي لشخصين بمناسبة ذكرى تعارفهما في زمن المجيء؛ ويقدم الإعلان e عشاءً ميلادياً فاخراً في 57 مطعماً."
    },
    "whyIncorrect": {
      "de": "Keine andere Anzeige bietet Restaurantbesuche oder festliche Weihnachtsmenüs für Paare an.",
      "fr": "Aucune autre annonce ne propose de sortie au restaurant ou de menus de fête pour couples.",
      "ar": "لا يقدم أي إعلان آخر عشاءً رومانسياً في مطاعم أو قوائم طعام مخصصة للمناسبات."
    }
  },
  "19": {
    "quote": "Anzeige i: „Reclams Weihnachtsbuch. Der Klassiker unter den Weihnachtsbüchern. Schöne Erzählungen zum Lesen und Vorlesen, Gedichte aus allen Zeiten und vielen Ländern, die bekanntesten Lieder...“",
    "whyCorrect": {
      "de": "Lösung: i (Reclams Weihnachtsbuch · Reclam Verlag). Luzies Großvater bleibt am liebsten zu Hause im Schaukelstuhl und liest. Anzeige i empfiehlt ein klassisches Lesebuch mit besinnlichen Weihnachtsgeschichten und Gedichten.",
      "fr": "Solution : i (Le livre de Noël des éditions Reclam). Le grand-père de Luzie aime rester chez lui dans son fauteuil à bascule et lire. L'annonce i propose une anthologie classique de contes et poèmes de Noël à lire paisiblement.",
      "ar": "الحل: i (كتاب عيد الميلاد من دار ريكلام). جد لوتسي يفضل البقاء في المنزل في كرسيه الهزاز والقراءة؛ ويقدم الإعلان i كتاباً كلاسيكياً يضم أجمل قصص وقصائد عيد الميلاد."
    },
    "whyIncorrect": {
      "de": "Anzeige f ist ein Bastelbuch für Kinder/Familien, während Anzeige i ein klassisches Lesebuch für ruhige Lesestunden ist.",
      "fr": "L'annonce f est un manuel de bricolage manuel, tandis que l'annonce i est un recueil de lecture littéraire pour les amateurs de livres.",
      "ar": "الإعلان f هو كتاب أنشطة وحرف يدوية، بينما الإعلان i هو كتاب أدبي للقراءة والاستمتاع الهادئ."
    }
  },

  # --- TEIL 4 (20-26) ---
  "20": {
    "quote": "Doch das führt dazu, dass sie den Urlaub selbst kaum wirklich erleben, sondern als Event für ihr Profil sehen. Facebook schafft eine falsche Realität und Wahrnehmung!",
    "whyCorrect": {
      "de": "Lösung: Nein. Sebastian (42, Bern) kritisiert, dass Facebook eine oberflächliche Scheinwelt erzeuge und Menschen das reale Erleben verlernten. Er ist gegen Facebook.",
      "fr": "Solution : Non (Nein). Sebastian (42 ans, Berne) dénonce l'illusion et la superficialité générées par Facebook, affirmant que les gens vivent pour leur profil et non pour eux-mêmes.",
      "ar": "الحل: لا (Nein). ينتقد سيباستيان (42 عاماً، برن) تزييف الواقع وتحويل الإجازات لمجرد استعراض افتراضي؛ فهو معارض لفيسبوك."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist hier nicht zutreffend, da Sebastians Haltung („Facebook schafft eine falsche Realität und Wahrnehmung!“) eindeutig ablehnend ist.",
      "fr": "Choisir « Oui » (Ja) est incorrect, car la conclusion de Sebastian est explicitement négative.",
      "ar": "اختيار «نعم» (Ja) غير صحيح، لأن موقف سيباستيان رافض تماماً ويصف فيسبوك بصانع الواقع المزيف."
    }
  },
  "21": {
    "quote": "Facebook hat von allem etwas: Kommunikation, Information, Klatsch. Es ist einfach und überschaubar. Man kann dadurch ständig gut informiert sein und das ist ja heute von großer Wichtigkeit.",
    "whyCorrect": {
      "de": "Lösung: Ja. Rahel (21, Klagenfurt) sieht große Vorteile in der ständigen Information und Vernetzung. Sie ist für Facebook.",
      "fr": "Solution : Oui (Ja). Rahel (21 ans, Klagenfurt) apprécie d'être constamment connectée et bien informée grâce à la plateforme.",
      "ar": "الحل: نعم (Ja). تشيد راحيل (21 عاماً، كلاغنفورت) بفيسبوك لجمعه بين التواصل والمعلومات وسهولة البقاء على اطلاع دائم."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist hier nicht zutreffend, da Rahel Facebook ausdrücklich positiv bewertet („Menschen, die da nicht mitmachen, sind im Nachteil“).",
      "fr": "Choisir « Non » (Nein) est incorrect, car Rahel estime que ceux qui ne l'utilisent pas sont pénalisés.",
      "ar": "اختيار «لا» (Nein) غير صحيح، لأن راحيل تؤكد أن من لا يستخدم فيسبوك يكون في موقع ضعف ونقص للمعلومة."
    }
  },
  "22": {
    "quote": "Als Vater kann ich mir die Attraktivität von Facebook nur dadurch erklären, dass auf die Jugendlichen ein Gruppendruck ausgeübt wird... Dabei erzieht Facebook eine Generation von Menschen, die weder richtig kommunizieren noch zwischen wichtigen und unwichtigen Informationen unterscheiden können.",
    "whyCorrect": {
      "de": "Lösung: Nein. Patrick (48, Lausanne) sieht Gefahren im Gruppenzwang und warnt vor einem Verlust echter Kommunikationsfähigkeiten. Er ist gegen Facebook.",
      "fr": "Solution : Non (Nein). Patrick (48 ans, Lausanne) juge sévèrement Facebook, estimant qu'il nuit aux capacités réelles de communication des adolescents.",
      "ar": "الحل: لا (Nein). يعارض باتريك (48 عاماً، لوزان) فيسبوك معتبراً إياه نتاج ضغط جماعي يربي جيلاً فاقداً لمهارات التواصل الحقيقي."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist hier nicht zutreffend, da Patricks Kommentar durchweg kritisch und warnend formuliert ist.",
      "fr": "Choisir « Oui » (Ja) est incorrect, car le propos de Patrick constitue une mise en garde critique.",
      "ar": "اختيار «نعم» (Ja) غير صحيح، لأن تعليق باتريك كله نقد وتحذير من أضرار فيسبوك."
    }
  },
  "23": {
    "quote": "Für mich ist absolut unverständlich, dass die Menschen in sozialen Medien wie Facebook über alles Private schreiben, ohne sich Gedanken zu machen. Dabei ist doch bekannt, dass es keine richtige Absicherung der Daten gibt!",
    "whyCorrect": {
      "de": "Lösung: Nein. Antonia (27, Rostock) verurteilt die Preisgabe von Privatem und den mangelnden Datenschutz. Sie ist gegen Facebook.",
      "fr": "Solution : Non (Nein). Antonia (27 ans, Rostock) déplore l'exposition imprudente de la vie privée et l'absence de réelle sécurité des données personnelles.",
      "ar": "الحل: لا (Nein). تعارض أنتونيا (27 عاماً، روستوك) فيسبوك بشدة مستنكرة نشر الخصوصيات وغياب الحماية الحقيقية للبيانات."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist hier nicht zutreffend, da Antonias Aussage das Verhalten auf Facebook als „absolut unverständlich“ ablehnt.",
      "fr": "Choisir « Oui » (Ja) est incorrect, car Antonia qualifie l'étalage sur Facebook d'incompréhensible et dangereux.",
      "ar": "اختيار «نعم» (Ja) غير صحيح، لأن أنتونيا تصف ما يحدث على فيسبوك بأنه غير مفهوم ومحفوف بالمخاطر."
    }
  },
  "24": {
    "quote": "Es ist doch klar, dass sich die Technologie weiterentwickelt und man da mitmachen will... Jedenfalls möchte ich nicht altmodisch und langweilig sein, ich gehe mit der Zeit!",
    "whyCorrect": {
      "de": "Lösung: Ja. Nicki (35, Krems) nutzt Facebook gerne, um mit der modernen Entwicklung Schritt zu halten. Sie ist für Facebook.",
      "fr": "Solution : Oui (Ja). Nicki (35 ans, Krems) défend l'utilisation de Facebook pour rester moderne et vivre avec son temps.",
      "ar": "الحل: نعم (Ja). تؤيد نيكي (35 عاماً، كريمس) استخدام فيسبوك كوسيلة لمواكبة التطور التقني والعصري."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist hier nicht zutreffend, da Nicki sich ausdrücklich dafür ausspricht, mit der Zeit zu gehen und die Technologie zu nutzen.",
      "fr": "Choisir « Non » (Nein) est incorrect, car Nicki affirme haut et fort vouloir participer au progrès technologique.",
      "ar": "اختيار «لا» (Nein) غير صحيح، لأن نيكي تعلن صراحة رغبتها في مواكبة العصر والتكنولوجيا."
    }
  },
  "25": {
    "quote": "Über Facebook habe ich die ideale Lösung gefunden und kann auch von zu Hause bei und mit meinen Freundinnen sein.",
    "whyCorrect": {
      "de": "Lösung: Ja. Olivia (16, Wuppertal) sieht in Facebook die ideale Lösung, um mit ihren Freundinnen in Kontakt zu bleiben. Sie ist für Facebook.",
      "fr": "Solution : Oui (Ja). Olivia (16 ans, Wuppertal) trouve dans Facebook la réponse parfaite pour rester en lien avec toutes ses amies depuis chez elle.",
      "ar": "الحل: نعم (Ja). ترى أوليفيا (16 عاماً، فوبرتال) في فيسبوك حلاً مثالياً للتواصل المستمر مع صديقاتها من البيت."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist hier nicht zutreffend, da Olivia Facebook als unverzichtbare und ideale Bereicherung ihres Alltags beschreibt.",
      "fr": "Choisir « Non » (Nein) est incorrect, car Olivia vante les mérites de la plateforme pour ses amitiés.",
      "ar": "اختيار «لا» (Nein) غير صحيح، لأن أوليفيا تصف فيسبوك بالحل المثالي للصداقة والتواصل."
    }
  },
  "26": {
    "quote": "Ich habe mir dann auch ein Profil eingerichtet und seitdem schon fünf Freundinnen aus der Schulzeit wieder gefunden!",
    "whyCorrect": {
      "de": "Lösung: Ja. Giesela (44, Halle) konnte dank Facebook den Kontakt zu früheren Schulfreundinnen wiederherstellen. Sie ist für Facebook.",
      "fr": "Solution : Oui (Ja). Giesela (44 ans, Halle) a renoué avec cinq amies d'enfance grâce à Facebook et en tire un bilan très positif.",
      "ar": "الحل: نعم (Ja). تعبر غيزيلا (44 عاماً، هاله) عن رضاها وسعادتها بفيسبوك بعدما مكنها من استعادة التواصل مع خمس من صديقات المدرسة."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist hier nicht zutreffend, da Gieselas anfängliche Skepsis durch die positive Erfahrung des Wiederfindens von Schulfreundinnen gewichen ist.",
      "fr": "Choisir « Non » (Nein) est incorrect, car ses doutes initiaux ont été effacés par le succès de ses retrouvailles amicales.",
      "ar": "اختيار «لا» (Nein) غير صحيح، لأن شكوكها القديمة تلاشت بعد استعادة صداقاتها عبر الموقع."
    }
  },

  # --- TEIL 5 (27-30) ---
  "27": {
    "quote": "...sind die Trainingsgeräte nach Beendigung der Benutzung sofort wieder frei zu machen und die Griffflächen mit Desinfektionsmittel gründlich zu reinigen.",
    "whyCorrect": {
      "de": "Lösung: b (muss man die Griffe der Geräte nach der Benutzung sauber machen). In der Ordnung steht klar, dass die Griffflächen nach dem Training desinfiziert und gereinigt werden müssen.",
      "fr": "Solution : b (il faut nettoyer les poignées des appareils après utilisation). Le règlement exige que les poignées des machines soient soigneusement désinfectées après chaque usage.",
      "ar": "الحل: b (يجب تنظيف وتطهير مقابض الأجهزة بعد استخدامها). تنص اللائحة بوضوح على وجوب تطهير أسطح مقابض الأجهزة بالمطهر بعد الانتهاء منها مباشرة."
    },
    "whyIncorrect": {
      "de": "Option a („darf man auch ohne Schuhe trainieren“) ist ausdrücklich verboten, und Option c („gibt es an jedem Gerät ein großes Handtuch“) ist falsch, da man sein eigenes Handtuch mitbringen oder mieten muss.",
      "fr": "L'option a est formellement interdite (chaussures obligatoires) et l'option c est fausse (chacun doit apporter ou louer sa serviette).",
      "ar": "الخيار a ممنوع صراحة (ارتداء الأحذية إلزامي)، والخيار c خاطئ لأن المناشف يجلبها المتدرب بنفسه أو يستأجرها."
    }
  },
  "28": {
    "quote": "Bitte beachten Sie, dass die Benutzung des CORPUS FITNESS STUDIO auf eigene Gefahr erfolgt. Auch haftet der Verein nicht für Wertsachen, Bargeld und Vermögensschäden. Gleiches gilt für die Zerstörung, Beschädigung und das Abhandenkommen von mitgebrachten Gegenständen.",
    "whyCorrect": {
      "de": "Lösung: a (selbst auf ihre Sachen aufpassen). Das Studio haftet nicht für mitgebrachte Gegenstände und Wertsachen; die Benutzung erfolgt auf eigene Gefahr.",
      "fr": "Solution : a (faire attention eux-mêmes à leurs affaires). Le club décline toute responsabilité pour les vols ou dégradations ; les membres doivent veiller eux-mêmes sur leurs biens.",
      "ar": "الحل: a (الانتباه إلى أغراضهم وممتلكاتهم بأنفسهم). يعفي النادي نفسه من أي مسؤولية عن فقدان أو سرقة المقتنيات، وتقع حراستها على عاتق المتدرب."
    },
    "whyIncorrect": {
      "de": "Option b („ihr Auto auf den Stellplätzen parken“) ist keine Pflicht (auch dort parkt man auf eigene Gefahr), und Option c („nicht alle gefährlichen Trainingsgeräte benutzen“) kommt im Text nicht vor.",
      "fr": "L'option b n'est pas une obligation et l'option c n'apparaît nulle part dans les consignes.",
      "ar": "الخيار b ليس إجبارياً واستخدام المواقف يكون على مسؤولية السائق، والخيار c لا وجود له في اللائحة."
    }
  },
  "29": {
    "quote": "Vor Trainingsbeginn sind Einzel- sowie Monatskarten den Trainern vorzuzeigen.",
    "whyCorrect": {
      "de": "Lösung: a (werden die Karten kontrolliert). Vor Beginn des Trainings müssen die Karten den Trainern vorgezeigt werden, sie werden also kontrolliert.",
      "fr": "Solution : a (les cartes sont contrôlées). Les membres doivent obligatoirement présenter leur titre d'accès à l'entraîneur avant de démarrer.",
      "ar": "الحل: a (يتم فحص وتدقيق البطاقات). توضح الفقرة الأولى أنه يجب إبراز بطاقات الدخول والاشتراك للمدربين قبل بدء التمارين."
    },
    "whyIncorrect": {
      "de": "Option b („kann der Verlust von Eintrittsausweisen gemeldet werden“) ist irreführend, da verlorene Ausweise nicht ersetzt werden, und Option c („geben die Trainer den Benutzern eine Monatskarte“) vertauscht die Rollen.",
      "fr": "L'option b est sans objet (aucun duplicata n'est délivré) et l'option c inverse les rôles (c'est l'usager qui présente sa carte).",
      "ar": "الخيار b لا طائل منه لعدم تعويض البطاقات الضائعة، والخيار c يعكس الأدوار لأن المتدرب هو من يبرز بطاقته للمدرب."
    }
  },
  "30": {
    "quote": "Das Training ist in Sportkleidung durchzuführen. Die Trainingskleidung soll den Hautkontakt mit den Polstern verhindern.",
    "whyCorrect": {
      "de": "Lösung: a (Man darf nicht ohne Sportkleidung trainieren). Die Benutzungsordnung schreibt verbindlich vor, dass das Training in Sportkleidung durchzuführen ist.",
      "fr": "Solution : a (Il est interdit de s'entraîner sans vêtements de sport). Le port d'une tenue de sport spécifique est obligatoire pour éviter le contact direct avec les selleries.",
      "ar": "الحل: a (لا يجوز ممارسة التدريب بدون ملابس رياضية). تلزم اللائحة الجميع بأداء التمارين بزي رياضي يمنع الملامسة المباشرة لجلد الجسم مع الأجهزة."
    },
    "whyIncorrect": {
      "de": "Option b („T-Shirts muss man immer nach dem Training wechseln“) verfälscht die Vorschrift (nur bei starkem Schwitzen) und Option c („Man soll keine Haut sehen können“) übertreibt maßlos.",
      "fr": "L'option b déforme la consigne (changement requis seulement en cas de forte transpiration) et l'option c est une exagération infondée.",
      "ar": "الخيار b يحرّف القاعدة (التبديل مشروط بالعرق الشديد)، والخيار c مبالغة لا أصل لها في النص."
    }
  },

  # --- TEIL 6 (HÖREN h1-h30) ---
  "h1": {
    "quote": "Sehr verehrte Kundschaft! In unserer Lebensmittelabteilung im Untergeschoss erwarten Sie heute preisgünstige Angebote. Koteletts vom Schwein... Pizza... Coca-Cola...",
    "whyCorrect": {
      "de": "Lösung: Falsch. Es handelt sich um eine Supermarkt-Durchsage über Sonderangebote zum Kaufen und Mitnehmen, nicht um ein Speiselokal.",
      "fr": "Solution : Faux (Falsch). L'annonce porte sur des promotions de produits alimentaires à emporter dans un supermarché, non sur un lieu de restauration sur place.",
      "ar": "الحل: خاطئ (Falsch). الإعلان الصوتي يدعو لشراء سلع غذائية بتخفيضات في السوبرماركت، ولا يتعلق بمطعم أو مقصف لتناول الطعام."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da man im Lebensmittelmarkt Waren einkauft und nicht vor Ort speist.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car il s'agit d'achats de produits alimentaires et non d'un service de repas.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن القسم مخصص لشراء الأطعمة ونقلها للمنزل وليس لتناول الوجبات هناك."
    }
  },
  "h2": {
    "quote": "Schließlich bieten wir für Ihre gesunde Ernährung Tafeläpfel „Granny Smith“ aus Südafrika im 1,5 Kilo Beutel heute nur 1,99 Euro.",
    "whyCorrect": {
      "de": "Lösung: c (Obst). Die Tafeläpfel im Sonderangebot zählen zur Kategorie Obst.",
      "fr": "Solution : c (Des fruits / Obst). Les pommes Granny Smith en promotion appartiennent à la catégorie des fruits.",
      "ar": "الحل: c (فواكه / Obst). تفاح المائدة المعروض ضمن التخفيضات يندرج تحت فئة الفواكه."
    },
    "whyIncorrect": {
      "de": "Option a („Wurst“) und Option b („Gemüse“) sind falsch; im Angebot sind Koteletts (Fleisch, nicht Wurst) und Äpfel (Obst).",
      "fr": "Les options a (« charcuterie ») et b (« légumes ») ne correspondent pas aux pommes annoncées.",
      "ar": "الخياران a (نقانق) وb (خضار) غير صحيحين، فالمعروض هو اللحم المقدد والتفاح (فواكه)."
    }
  },
  "h3": {
    "quote": "In der Herrenabteilung, in der dritten Etage unseres Bekleidungshauses, wurde an der Kassa nahe beim Aufzug ein Mobiltelefon der Marke Nokia gefunden.",
    "whyCorrect": {
      "de": "Lösung: Falsch. Es gibt keine Handys im Angebot; die Durchsage meldet ein im Geschäft gefundenes Nokia-Mobiltelefon.",
      "fr": "Solution : Faux (Falsch). Il ne s'agit pas d'une offre promotionnelle de téléphones, mais d'un appareil Nokia trouvé et déposé à l'accueil.",
      "ar": "الحل: خاطئ (Falsch). لا توجد هواتف معروضة للبيع بتخفيضات، بل إن الإعلان يبحث عن صاحب هاتف نوكيا مفقود عُثر عليه بالقرب من المصعد."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da ein Fundstück und kein Verkaufsangebot vorliegt.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car il s'agit d'un objet perdu et non d'une promotion commerciale.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، فالأمر يتعلق بغرض مفقود وليس بتخفيضات تجارية."
    }
  },
  "h4": {
    "quote": "In der Herrenabteilung, in der dritten Etage unseres Bekleidungshauses, wurde an der Kassa nahe beim Aufzug ein Mobiltelefon der Marke Nokia gefunden.",
    "whyCorrect": {
      "de": "Lösung: c (Im 3. Stock). Die Durchsage gibt an: „in der dritten Etage unseres Bekleidungshauses“. Das entspricht dem 3. Stock.",
      "fr": "Solution : c (Au 3e étage / Im 3. Stock). Le message précise que le téléphone a été trouvé au troisième étage (« in der dritten Etage »).",
      "ar": "الحل: c (في الطابق الثالث / Im 3. Stock). ذكر المتحدث أن الهاتف وجد في الطابق الثالث من متجر الملابس («in der dritten Etage»)."
    },
    "whyIncorrect": {
      "de": "Option a („Im Aufzug“) und Option b („An der Sammelkasse“) sind falsch; nahe beim Aufzug im 3. Stock wurde es gefunden, abgeholt werden kann es an der Sammelkasse im Erdgeschoss.",
      "fr": "Les options a (« dans l'ascenseur ») et b (« à la caisse centrale ») confondent le lieu de trouvaille (3e étage) et le point de retrait (rez-de-chaussée).",
      "ar": "الخياران a (داخل المصعد) وb (عند الخزينة المركزية) يخلطان بين مكان العثور عليه (الطابق الثالث) ومكان استلامه (الطابق الأرضي)."
    }
  },
  "h5": {
    "quote": "Guten Morgen, meine Damen und Herren! Sie hören den Wetterbericht für heute, Donnerstag, 27. Oktober... Im übrigen Deutschland anfangs bewölkt, später sonniges und trockenes Wetter.",
    "whyCorrect": {
      "de": "Lösung: Richtig. Der Radiosprecher verliest den Wetterbericht für Berlin und das gesamte Bundesgebiet Deutschland.",
      "fr": "Solution : Vrai (Richtig). Le présentateur donne les prévisions météorologiques pour Berlin et l'ensemble du territoire allemand.",
      "ar": "الحل: صحيح (Richtig). يقدم المذيع النشرة الجوية لبرلين ولكافة أرجاء ألمانيا."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist hier nicht zutreffend, da die Radiomeldung ausdrücklich die Wettervorhersage für Deutschland liefert.",
      "fr": "Choisir « Faux » (Falsch) est incorrect, car il s'agit précisément d'un bulletin météo national.",
      "ar": "اختيار «خطأ» (Falsch) غير صحيح، لأن النشرة مخصصة بالكامل لطقس ألمانيا."
    }
  },
  "h6": {
    "quote": "Tageshöchsttemperaturen zwischen 11 Grad an der Küste und 17 Grad im Süden in Alpennähe.",
    "whyCorrect": {
      "de": "Lösung: c (17° C). Die im Wetterbericht genannte Höchsttemperatur für Deutschland liegt bei 17 Grad im Süden.",
      "fr": "Solution : c (17 °C). La température maximale annoncée pour l'Allemagne est de 17 degrés dans le Sud au pied des Alpes.",
      "ar": "الحل: c (17 درجة مئوية / 17° C). درجة الحرارة القصوى المتوقعة في ألمانيا تصل إلى 17 درجة مئوية في الجنوب قرب جبال الألب."
    },
    "whyIncorrect": {
      "de": "Option a („12° C“) und Option b („15° C“) beziehen sich auf Berlin bzw. Mindestwerte, während deutschlandweit bis zu 17° C erreicht werden.",
      "fr": "Les options a (12 °C) et b (15 °C) correspondent aux valeurs de Berlin et non au maximum national.",
      "ar": "الخياران a وb يمثلان درجات حرارة برلين وليس الحد الأقصى العام في ألمانيا."
    }
  },
  "h7": {
    "quote": "Wir sind doch heute zum Eislaufen verabredet. Leider kann ich dich nun doch nicht abholen... Wir treffen uns dann so um fünf, Viertel nach fünf direkt vor dem Horst-Dohm-Eislaufstadion...",
    "whyCorrect": {
      "de": "Lösung: Falsch. Jonas kommt sehr wohl zum Eislaufen; er kann Kathrin lediglich nicht zu Hause abholen.",
      "fr": "Solution : Faux (Falsch). Jonas se rend bien au rendez-vous de patinage ; il ne peut simplement pas passer la prendre chez elle.",
      "ar": "الحل: خاطئ (Falsch). يوناس سيذهب للتزلج مع كاترين، ولكنه تعذر عليه فقط المرور لمنزلها لاصطحابها."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da Jonas das Eislaufen keineswegs absagt, sondern einen direkten Treffpunkt am Stadion vereinbart.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car la sortie n'est pas annulée, seul le point de départ change.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن يوناس لم يلغِ الموعد بل اتفق على اللقاء مباشرة أمام حلبة التزلج."
    }
  },
  "h8": {
    "quote": "Also, geh den Hohenzollerndamm immer geradeaus, über die Forckenbeckstraße bis zur Landecker Straße. Da biegst du rechts ab und gehst weiter geradeaus über die Cunostraße bis zur Fritz-Wildung-Straße.",
    "whyCorrect": {
      "de": "Lösung: c (Geradeaus und rechts). Kathrin soll den Hohenzollerndamm geradeaus gehen und an der Landecker Straße rechts abbiegen.",
      "fr": "Solution : c (Tout droit puis à droite / Geradeaus und rechts). Jonas lui dit d'aller tout droit sur le Hohenzollerndamm puis de tourner à droite dans la Landecker Straße.",
      "ar": "الحل: c (إلى الأمام ثم يميناً / Geradeaus und rechts). يطلب منها يوناس السير إلى الأمام على شارع هوهنتسولرندام ثم الانعطاف يميناً في شارع لانديكر شتراسه."
    },
    "whyIncorrect": {
      "de": "Option a („Links und rechts“) und Option b („Geradeaus und links“) stimmen nicht mit der Wegbeschreibung überein.",
      "fr": "Les options a et b sont contraires aux indications précises données par Jonas au répondeur.",
      "ar": "الخياران a وb يتعارضان مع إرشادات الطريق التي شرحها يوناس بوضوح."
    }
  },
  "h9": {
    "quote": "In der Reihe „Bell’Arte Events“ findet am Samstag, den 28.7. um 20.00 Uhr im Brunnenhof der Residenz das Konzert „Eine griechische Sommernacht – Ägäische Träume“...",
    "whyCorrect": {
      "de": "Lösung: Falsch. Das Konzert trägt den Titel „Eine griechische Sommernacht“, findet jedoch im Brunnenhof der Residenz in München statt, nicht in Griechenland.",
      "fr": "Solution : Faux (Falsch). Le concert s'intitule certes « Nuit d'été grecque », mais il a lieu à Munich (cour de la Résidence), pas en Grèce.",
      "ar": "الحل: خاطئ (Falsch). الحفل يحمل اسم «ليلة صيفية يونانية» لكنه يقام في باحة الإقامة الملكية بميونخ وليس في دولة اليونان."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da der Veranstaltungsort in Deutschland (München) und nicht in Griechenland liegt.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car l'événement se tient en Allemagne et non en Grèce.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن مكان إقامة الحفل هو مدينة ميونخ بألمانيا."
    }
  },
  "h10": {
    "quote": "Bei Regen wird die Vorstellung in den Herkulessaal verlegt.",
    "whyCorrect": {
      "de": "Lösung: b (findet das Konzert an einem anderen Ort statt). Bei schlechtem Wetter wird das Konzert in den Herkulessaal verlegt, also an einen anderen Ort.",
      "fr": "Solution : b (le concert a lieu dans un autre endroit). En cas d'intempéries, la représentation est déplacée dans la salle Herkules (autre lieu).",
      "ar": "الحل: b (يقام الحفل في مكان آخر مغطى). عند هطول الأمطار يُنقل الحفل إلى قاعة هرقل (مكان آخر مغطى)."
    },
    "whyIncorrect": {
      "de": "Option a („findet das Konzert nicht statt“) und Option c („findet das Konzert an einem anderen Tag statt“) sind falsch; die Aufführung wird weder abgesagt noch verschoben.",
      "fr": "Les options a (« annulé ») et c (« reporté ») sont fausses ; la date est maintenue, seul le lieu est couvert.",
      "ar": "الخياران a (إلغاء الحفل) وc (تأجيله ليوم آخر) غير صحيحين، فالموعد باقٍ وإنما يتغير المكان فقط."
    }
  },

  "h11": {
    "quote": "Was Sie hier leider nicht sehen werden, dazu müssten Sie ins Werk nach Untertürkheim fahren, ist die Produktion der Autos.",
    "whyCorrect": {
      "de": "Lösung: b (In Untertürkheim). Die Autoproduktion erfolgt im Werk in Untertürkheim, nicht im Museum selbst.",
      "fr": "Solution : b (À Untertürkheim / In Untertürkheim). Le guide explique que les voitures sont produites dans l'usine d'Untertürkheim.",
      "ar": "الحل: b (في أونترتوركهايم / In Untertürkheim). أوضح المرشد أن تصنيع وإنتاج السيارات يتم في مصنع أونترتوركهايم."
    },
    "whyIncorrect": {
      "de": "Option a („In Stuttgart“) ist der Standort des Museums, und Option c („In Bremen“) betrifft die Endmontage.",
      "fr": "L'option a est le lieu du musée et l'option c correspond au montage final.",
      "ar": "الخيار a هو مقر المتحف، والخيار c مخصص لمرحلة التجميع النهائي."
    }
  },
  "h12": {
    "quote": "Sie haben sich für eine Automobilführung entschieden... Sie sehen aber auch zahlreiche technische Neuheiten und bekommen Informationen zur Geschichte der Firma.",
    "whyCorrect": {
      "de": "Lösung: a (die Geschichte der Firma). Die Automobilführung vermittelt Wissenswertes über technische Neuheiten und die Geschichte des Unternehmens.",
      "fr": "Solution : a (l'histoire de l'entreprise / die Geschichte der Firma). La visite automobile met l'accent sur les innovations et l'histoire de la société.",
      "ar": "الحل: a (تاريخ الشركة وتطورها / die Geschichte der Firma). تركز جولة السيارات على تاريخ الشركة ونشأتها وأبرز ابتكاراتها."
    },
    "whyIncorrect": {
      "de": "Option b („die spezielle Architektur“) gehört zur Freitagsführung und Option c („die Endmontage“) kann im Museum gar nicht besichtigt werden.",
      "fr": "L'option b concerne la visite du vendredi et l'option c n'est pas visible au musée.",
      "ar": "الخيار b مخصص لجولة يوم الجمعة المعمارية، والخيار c لا يمكن مشاهدته في المتحف."
    }
  },
  "h13": {
    "quote": "Insgesamt sind 160 Wagen ausgestellt.",
    "whyCorrect": {
      "de": "Lösung: c (160). Im Museum sind exakt 160 Fahrzeuge zu sehen.",
      "fr": "Solution : c (160). L'exposition compte au total 160 automobiles.",
      "ar": "الحل: c (160 سيارة). يضم المعرض 160 سيارة بشكل إجمالي."
    },
    "whyIncorrect": {
      "de": "Option a (116) und Option b (120) entsprechen nicht der genannten Zahl der ausgestellten Wagen.",
      "fr": "Les options a (116) et b (120) ne correspondent pas au nombre cité par le guide.",
      "ar": "الرقمان 116 و120 لا يمثلان عدد السيارات المعروضة المذكور في المقطع."
    }
  },
  "h14": {
    "quote": "Oben angekommen sehen Sie fünf thematisch gestaltete Kollektionen oder besuchen nach Belieben sieben Mythosräume... Beide Rundgänge führen Sie zum Ausgangspunkt zurück.",
    "whyCorrect": {
      "de": "Lösung: b (Zwei). Es gibt zwei verschiedene Rundgang-Möglichkeiten: die Kollektionen oder die Mythosräume.",
      "fr": "Solution : b (Deux / Zwei). Deux circuits de visite s'offrent au visiteur : les collections ou les salles du mythe.",
      "ar": "الحل: b (مساران اثنان / Zwei). هناك مساران مختلفان للقيام بالجولة في المتحف."
    },
    "whyIncorrect": {
      "de": "Option a (Neun = Ebene 9) und Option c (Fünf = Zahl der Kollektionen) verwechseln Details mit den zwei Hauptrundgängen.",
      "fr": "Les options a (neuf étages) et c (cinq collections) confondent d'autres chiffres de la visite.",
      "ar": "الرقمان 9 (الطابق التاسع) و5 (عدد المجموعات) يخلطان بين تفاصيل المعرض ومسارَي الجولة الرئيسيين."
    }
  },
  "h15": {
    "quote": "Wenn Sie größeren Hunger bekommen haben, ist das Restaurant bis 19.00 Uhr geöffnet... Die warme Küche schließt allerdings schon um 18.30 Uhr.",
    "whyCorrect": {
      "de": "Lösung: a (Bis um 18.30 Uhr). Warme Speisen werden im Restaurant bis 18.30 Uhr zubereitet.",
      "fr": "Solution : a (Jusqu'à 18h30 / Bis um 18.30 Uhr). Les plats chauds sont servis au restaurant jusqu'à 18h30.",
      "ar": "الحل: a (حتى الساعة 18:30 / Bis um 18.30 Uhr). يتوقف تقديم الأطباق الساخنة في المطعم عند الساعة 18:30."
    },
    "whyIncorrect": {
      "de": "Option b (19.00 Uhr) ist die Schließzeit des Restaurants und Option c (18.00 Uhr) die der Cafébar und des Museumsshops.",
      "fr": "19h00 est la fermeture définitive et 18h00 la fermeture du bar café et de la boutique.",
      "ar": "الساعة 19:00 موعد إغلاق المطعم، والساعة 18:00 موعد إغلاق المقهى ومتجر الهدايا."
    }
  },

  "h16": {
    "quote": "B: Servus, Eva... Ich gehe mit einem Freund vom Basketball ins Kino.",
    "whyCorrect": {
      "de": "Lösung: Falsch. Ben fährt mit einem Freund ins Kino und nicht zum Basketballtraining.",
      "fr": "Solution : Faux (Falsch). Ben se rend au cinéma avec un camarade du basket, non à l'entraînement.",
      "ar": "الحل: خاطئ (Falsch). بن ذاهب للسينما برفقة صديق من نادي السلة، وليس لحضور تدريب رياضي."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da Ben ausdrücklich erklärt, dass er ins Kino geht.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car Ben dit clairement qu'il va au cinéma.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن بن صرح بأنه في طريقه إلى السينما."
    }
  },
  "h17": {
    "quote": "E: Ja, das hat mir meine Schwester aus Wien mitgebracht.",
    "whyCorrect": {
      "de": "Lösung: Richtig. Eva bestätigt, dass ihre Schwester ihr das T-Shirt aus Wien mitgebracht hat.",
      "fr": "Solution : Vrai (Richtig). Eva confirme que son t-shirt lui a été offert par sa sœur depuis Vienne.",
      "ar": "الحل: صحيح (Richtig). تؤكد إيفا أن أختها جلبت لها القميص معها من فيينا."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist hier nicht zutreffend, da die Aussage durch Evas Antwort wortwörtlich belegt ist.",
      "fr": "Choisir « Faux » (Falsch) est incorrect, car Eva l'indique explicitement dans le dialogue.",
      "ar": "اختيار «خطأ» (Falsch) غير صحيح، لأن إيفا تؤكد ذلك صراحة في الحوار."
    }
  },
  "h18": {
    "quote": "E: ...und sie kommt nur ganz selten nach Hause... Das finde ich viel zu wenig... Und jetzt fehlt sie mir.",
    "whyCorrect": {
      "de": "Lösung: Richtig. Eva vermisst ihre Schwester sehr und findet die seltenen Besuche viel zu wenig.",
      "fr": "Solution : Vrai (Richtig). Eva regrette l'éloignement de sa sœur et aimerait la voir plus souvent.",
      "ar": "الحل: صحيح (Richtig). تعبر إيفا عن اشتياقها الشديد لأختها وتتمنى لو تراها أكثر من ذلك."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist hier nicht zutreffend, da Eva deutlich sagt: „Das finde ich viel zu wenig.“",
      "fr": "Choisir « Faux » (Falsch) est incorrect, car Eva affirme clairement que sa sœur lui manque.",
      "ar": "اختيار «خطأ» (Falsch) غير صحيح، لأن إيفا تقول بالحرف إن زيارات أختها قليلة جداً وتشتاق إليها."
    }
  },
  "h19": {
    "quote": "B: ...ich muss mein Zimmer mit meinem Bruder teilen. Und der räumt nie auf … wir streiten uns dauernd...",
    "whyCorrect": {
      "de": "Lösung: Falsch. Ben und sein Bruder streiten sich ständig und verstehen sich keineswegs gut.",
      "fr": "Solution : Faux (Falsch). Ben et son frère se disputent constamment à propos du désordre.",
      "ar": "الحل: خاطئ (Falsch). بن وشقيقه يتشاجران طوال الوقت بسبب الفوضى في الغرفة المشتركة."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da Ben von andauernden Streitigkeiten berichtet.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car Ben dit qu'ils se disputent tout le temps.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن بن صرح بأنهما في شجار دائم."
    }
  },
  "h20": {
    "quote": "B: …und wenn er morgens um halb sechs aufsteht, macht er immer einen furchtbaren Lärm und dann werde ich auch wach, obwohl ich noch eine Stunde schlafen könnte.",
    "whyCorrect": {
      "de": "Lösung: Falsch. Bens Bruder muss um halb sechs aufstehen; Ben selbst könnte noch eine Stunde länger schlafen.",
      "fr": "Solution : Faux (Falsch). C'est le frère de Ben qui doit se lever à 5h30, réveillant Ben contre son gré.",
      "ar": "الحل: خاطئ (Falsch). شقيق بن هو من يستيقظ في الخامسة والنصف صباحاً، بينما يستطيع بن النوم ساعة إضافية."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da Ben durch den Lärm seines Bruders geweckt wird und nicht selbst aufstehen müsste.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car Ben n'a pas besoin de se lever si tôt pour ses propres activités.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن الاستيقاظ المبكر مفروض على أخيه فقط وليس على بن."
    }
  },
  "h21": {
    "quote": "B: Aber meinem Bruder machen die Motorräder mehr Spaß als die Autos. Und über Motorräder weiß er gut Bescheid.",
    "whyCorrect": {
      "de": "Lösung: Falsch. Bens Bruder findet Motorräder viel interessanter und repariert sie lieber als Autos.",
      "fr": "Solution : Faux (Falsch). Le frère de Ben préfère nettement les motos aux voitures.",
      "ar": "الحل: خاطئ (Falsch). شقيق بن يفضل الدراجات النارية ويجدها أمتع وأكثر تشويقاً من السيارات."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist hier nicht zutreffend, da Ben ausdrücklich das Gegenteil sagt.",
      "fr": "Choisir « Vrai » (Richtig) est incorrect, car le dialogue affirme précisément l'inverse.",
      "ar": "اختيار «صحيح» (Richtig) غير صحيح، لأن بن أكد تفضيل أخيه للدراجات النارية صراحة."
    }
  },
  "h22": {
    "quote": "B: Jetzt in der Lehre kriegt er ja noch nicht viel Lohn.",
    "whyCorrect": {
      "de": "Lösung: Richtig. Als Lehrling erhält Bens Bruder nur eine geringe Ausbildungsvergütung.",
      "fr": "Solution : Vrai (Richtig). Ben confirme que son frère perçoit un faible salaire en tant qu'apprenti.",
      "ar": "الحل: صحيح (Richtig). يؤكد بن أن دخل شقيقه في فترة التدريب المهني ضئيل."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist hier nicht zutreffend, da Bens Aussage („kriegt er ja noch nicht viel Lohn“) die Aussage bestätigt.",
      "fr": "Choisir « Faux » (Falsch) est incorrect, car Ben le formule sans équivoque.",
      "ar": "اختيار «خطأ» (Falsch) غير صحيح، لأن بن ذكر حرفياً أن راتب التدريب قليل."
    }
  },

  "h23": {
    "quote": "S: Allerdings ist die Gewaltbereitschaft gestiegen. Das sehen wir jeden Tag auf dem Schulhof.",
    "whyCorrect": {
      "de": "Lösung: b (Frau Steiner). Schulleiterin Frau Steiner berichtet aus ihrem Schulalltag über die Zunahme der Gewaltbereitschaft.",
      "fr": "Solution : b (Mme Steiner / Frau Steiner). C'est la directrice d'école qui constate une hausse de l'agressivité sur la cour d'école.",
      "ar": "الحل: b (السيدة شتاينر / Frau Steiner). مديرة المدرسة السيدة شتاينر هي من تشهد يومياً على ازدياد العنف في فناء المدرسة."
    },
    "whyIncorrect": {
      "de": "Weder der Moderator (Option a) noch Frau Gerber (Option c) haben diese Aussage über den Schulhof getroffen.",
      "fr": "Ni l'animateur (option a) ni Mme Gerber (option c) n'ont tenu ces propos.",
      "ar": "لم تصدر هذه العبارة عن المذيع (الخيار a) ولا عن السيدة غيربر (الخيار c)."
    }
  },
  "h24": {
    "quote": "S: Da haben Sie den richtigen Punkt getroffen. Wenn die Eltern nicht kontrollieren, wo sich ihre Kinder aufhalten, mit wem und was sie machen, dann entstehen die Probleme.",
    "whyCorrect": {
      "de": "Lösung: b (Frau Steiner). Frau Steiner sieht in der mangelnden elterlichen Aufsicht und Kontrolle die Hauptursache für Jugendgewalt.",
      "fr": "Solution : b (Mme Steiner / Frau Steiner). Mme Steiner insiste sur le fait que le défaut de contrôle parental engendre les problèmes de comportement.",
      "ar": "الحل: b (السيدة شتاينر / Frau Steiner). تؤكد السيدة شتاينر أن تقصير الأسرة في مراقبة الأبناء هو ما يولد السلوك العدواني."
    },
    "whyIncorrect": {
      "de": "Frau Gerber (Option c) widerspricht dieser Ansicht gerade und möchte die Familie nicht allein verantwortlich machen.",
      "fr": "Mme Gerber (option c) rejette cette idée et refuse d'accuser uniquement la famille.",
      "ar": "السيدة غيربر (الخيار c) ترفض تحميل الأسرة وحدها المسؤولية، خلافاً لموقف السيدة شتاينر."
    }
  },
  "h25": {
    "quote": "G: ...weil ein paar ausländische Familien ihre Kinder nicht erziehen können. Das Gesetz sollte nur für die Ausländer gelten.",
    "whyCorrect": {
      "de": "Lösung: c (Frau Gerber). Frau Gerber äußert das Vorurteil, dass ausländische Kinder Probleme machten und Gesetze nur für sie gelten sollten.",
      "fr": "Solution : c (Mme Gerber / Frau Gerber). C'est Mme Gerber qui tient ces propos stéréotypés à l'encontre des familles étrangères.",
      "ar": "الحل: c (السيدة غيربر / Frau Gerber). السيدة غيربر هي من أطلقت هذا الحكم المتحيز بحق العائلات الأجنبية وأبنائها."
    },
    "whyIncorrect": {
      "de": "Frau Steiner (Option b) widerspricht dem energisch und betont das friedliche Miteinander an ihrer Schule.",
      "fr": "Mme Steiner (option b) s'indigne vivement de ce préjugé.",
      "ar": "السيدة شتاينر (الخيار b) عارضت ذلك بشدة واستنكرت هذا الموقف."
    }
  },
  "h26": {
    "quote": "S: Wir erziehen unsere Schüler dazu, dass sie tolerant sind. Und in der Erziehung sehe ich mehr Chancen als in Verboten und Gesetzen.",
    "whyCorrect": {
      "de": "Lösung: b (Frau Steiner). Schulleiterin Frau Steiner setzt auf Erziehung zu Toleranz statt auf Verbote und Gesetze.",
      "fr": "Solution : b (Mme Steiner / Frau Steiner). Mme Steiner privilégie l'action éducative et la tolérance plutôt que la répression législative.",
      "ar": "الحل: b (السيدة شتاينر / Frau Steiner). السيدة شتاينر ترى في التربية على التسامح أثراً أبلغ وأنجع من كثرة القوانين والمنع."
    },
    "whyIncorrect": {
      "de": "Frau Gerber (Option c) befürwortet strengere Gesetze und Verbote.",
      "fr": "Mme Gerber (option c) réclame au contraire des lois et sanctions plus rigoureuses.",
      "ar": "السيدة غيربر (الخيار c) تطالب بالقوانين الصارمة والعقوبات بخلاف رأي مديرة المدرسة."
    }
  },
  "h27": {
    "quote": "G: Aber Sport kann zweifellos auch dabei helfen. Einerseits lernt man dort Fair Play und andererseits kann man sich ganz gut abreagieren.",
    "whyCorrect": {
      "de": "Lösung: c (Frau Gerber). Frau Gerber ist überzeugt, dass Sport durch Fair Play und Stressabbau sicher gegen Gewalt hilft.",
      "fr": "Solution : c (Mme Gerber / Frau Gerber). Mme Gerber affirme avec assurance que le sport aide à prévenir la violence grâce au fair-play.",
      "ar": "الحل: c (السيدة غيربر / Frau Gerber). السيدة غيربر مقتنعة بأن الرياضة وسيلة مؤكدة ضد العنف لتعليمها اللعب النظيف وتفريغ التوتر."
    },
    "whyIncorrect": {
      "de": "Frau Steiner (Option b) relativiert dies („Jein... hängt von der Sportart ab, z.B. Kampfsport“).",
      "fr": "Mme Steiner (option b) est beaucoup plus nuancée, rappelant que certains sports de combat favorisent la violence.",
      "ar": "السيدة شتاينر (الخيار b) تحفظت على ذلك موضحة أن بعض الرياضات القتالية قد تزيد من العنف."
    }
  },
  "h28": {
    "quote": "M: In der Schweiz verbietet das Gesetz den Verkauf von Wein, Bier und Apfelwein an unter 16-Jährige und von Spirituosen, Aperitifs und Alcopops an unter 18-Jährige.",
    "whyCorrect": {
      "de": "Lösung: a (Moderator). Der Moderator legt die gesetzliche Differenzierung zwischen Bier/Wein (ab 16) und Spirituosen (ab 18) dar.",
      "fr": "Solution : a (L'animateur / Moderator). C'est le présentateur qui rappelle les deux seuils d'âge fixés par la loi suisse selon les alcools.",
      "ar": "الحل: a (المذيع / Moderator). المذيع هو من استعرض نصوص القانون السويسري التي تميز بين المشروبات الكحولية الخفيفة والقوية."
    },
    "whyIncorrect": {
      "de": "Die beiden Gäste (Option b und c) äußern sich erst anschließend wertend zu diesem Gesetzestext.",
      "fr": "Les deux invitées (options b et c) ne font que donner leur opinion suite à ce rappel juridique de l'animateur.",
      "ar": "الضيفتان (الخياران b وc) اكتفتا بالتعليق وإبداء الرأي بعد أن تلا المذيع نصوص القانون."
    }
  },
  "h29": {
    "quote": "S: In meinen Augen hängt das vielmehr damit zusammen, dass Jugendliche gern etwas Unerlaubtes machen.",
    "whyCorrect": {
      "de": "Lösung: b (Frau Steiner). Frau Steiner argumentiert, dass gerade Verbote den Reiz des Unerlaubten für Jugendliche erhöhen.",
      "fr": "Solution : b (Mme Steiner / Frau Steiner). Mme Steiner explique qu'une interdiction rend la transgression stimulante et attractive pour les ados.",
      "ar": "الحل: b (السيدة شتاينر / Frau Steiner). السيدة شتاينر ترى أن فرض المنع يغري الشباب بارتكاب الممنوع بحثاً عن الإثارة وإثبات الذات."
    },
    "whyIncorrect": {
      "de": "Frau Gerber (Option c) fordert ein striktes Totalverbot von Alkohol für unter 18-Jährige.",
      "fr": "Mme Gerber (option c) préconise au contraire une prohibition totale des alcools pour les mineurs.",
      "ar": "السيدة غيربر (الخيار c) تطالب بحظر شامل على الكحول لمن هم دون 18 ولا تتفق مع هذا الطرح."
    }
  },
  "h30": {
    "quote": "G: Wichtig finde ich auch, dass die Kinder konfliktfähig werden. Die meisten Kinder sind Einzelkinder und haben nie gelernt, mit anderen zu streiten. Da könnte die Schule helfen, meine ich.",
    "whyCorrect": {
      "de": "Lösung: c (Frau Gerber). Frau Gerber fordert, dass Schüler in der Schule den konstruktiven Umgang mit Streit und Konflikten lernen sollten.",
      "fr": "Solution : c (Mme Gerber / Frau Gerber). C'est Mme Gerber qui conclut que l'école doit former les enfants à la résolution pacifique des conflits.",
      "ar": "الحل: c (السيدة غيربر / Frau Gerber). السيدة غيربر هي من اقترحت أن تدرب المدرسة الطلاب على مهارات إدارة الخلافات وفض النزاعات بسلام."
    },
    "whyIncorrect": {
      "de": "Frau Steiner (Option b) sprach zuvor über die Zusammenarbeit von Familie, Schule und Staat gegen Gewalt.",
      "fr": "Mme Steiner (option b) s'est concentrée sur la coopération globale entre l'école, la famille et l'État.",
      "ar": "السيدة شتاينر (الخيار b) ركزت في مداخلتها على التعاون المشترك بين كافة مؤسسات المجتمع لمواجهة العنف."
    }
  }
}
