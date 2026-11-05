#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 25 - Explanations Data (Modelltest 19 — Hueber Zertifikat B1)
Structured explanations with quote, whyCorrect (de/fr/ar), and whyIncorrect (de/fr/ar)
for all 60 questions (1-30 and h1-h30).
"""

explanations = {
  "1": {
    "quote": "mein erstes Wintersemester hat vor drei Wochen begonnen und ich bin nun täglich ca. 5 Stunden an der Uni.",
    "whyCorrect": {
      "de": "Richtig. Lutz schreibt, dass sein erstes Wintersemester vor drei Wochen begonnen hat und er täglich ca. 5 Stunden an der Universität verbringt. Er beginnt also gerade sein Studium.",
      "fr": "Vrai. Lutz indique que son premier semestre d'hiver a débuté il y a trois semaines et qu'il passe environ 5 heures par jour à l'université. Il commence donc ses études universitaires.",
      "ar": "صحيح. يذكر لوتس أن فصله الدراسي الشتوي الأول بدأ منذ ثلاثة أسابيع وأنه يقضي حوالي 5 ساعات يومياً في الجامعة، مما يعني أنه طالب مستجد في بداية دراسته."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da die Aussage („Lutz ist Studienanfänger.“) durch den Text („erstes Wintersemester“) eindeutig belegt wird.",
      "fr": "« Faux » est incorrect, car le texte confirme clairement qu'il s'agit de son tout premier semestre universitaire (« erstes Wintersemester »).",
      "ar": "«خطأ» غير صحيح لأن النص يؤكد بوضوح أنه في فصله الدراسي الأول («erstes Wintersemester»)."
    }
  },
  "2": {
    "quote": "die Wohnungssuche. Ich hatte keine Ahnung, wie stressig das sein kann. ... Nach unheimlich langem Suchen hab ich schließlich ein Zimmer in einer Wohngemeinschaft gefunden",
    "whyCorrect": {
      "de": "Falsch. Lutz betont, wie extrem stressig und langwierig die Wohnungssuche in Frankfurt war: „Ich hatte keine Ahnung, wie stressig das sein kann. ... Nach unheimlich langem Suchen hab ich schließlich ein Zimmer ... gefunden“. Es ist keineswegs eine einfache Sache.",
      "fr": "Faux. Lutz souligne à quel point la recherche d'un logement à Francfort a été stressante et difficile : « Je n'avais aucune idée à quel point cela pouvait être stressant. ... Après de très longues recherches, j'ai enfin trouvé une chambre... » Ce n'est donc pas facile.",
      "ar": "خطأ. يؤكد لوتس أن البحث عن سكن في فرانكفورت كان مجهداً للغاية وصعباً: «لم تكن لدي فكرة عن مدى التوتر والإرهاق الذي قد يسببه ذلك... وبعد بحث طويل وشاق وجدت أخيراً غرفة»، فهو ليس بالأمر السهل إطلاقاً."
    },
    "whyIncorrect": {
      "de": "„Richtig“ wäre unzutreffend, da die Wohnungssuche in Frankfurt wegen extrem hoher Mieten und großer Nachfrage sehr kompliziert war.",
      "fr": "« Vrai » ne convient pas, car la recherche de logement s'est avérée particulièrement ardue en raison des loyers exorbitants et de la forte concurrence.",
      "ar": "«صحيح» لا ينطبق هنا، لأن البحث عن شقة كان معقداً جداً بسبب الأسعار المرتفعة والمنافسة الشديدة."
    }
  },
  "3": {
    "quote": "Ich habe mir die allernotwendigsten Möbel angeschafft, gebraucht, versteht sich, doch in gutem Zustand. Jetzt fehlt mir nur noch ein Schrank.",
    "whyCorrect": {
      "de": "Richtig. Lutz hat sich nur die nötigsten gebrauchten Möbel besorgt und erwähnt ausdrücklich: „Jetzt fehlt mir nur noch ein Schrank.“ Sein Zimmer ist also noch nicht komplett eingerichtet.",
      "fr": "Vrai. Lutz n'a acheté que les meubles les plus indispensables d'occasion et précise expressément : « Il ne me manque plus qu'une armoire. » Sa chambre n'est donc pas encore totalement meublée.",
      "ar": "صحيح. اشترى لوتس فقط الأثاث المستعمل الأكثر ضرورة، ويوضح صراحة: «ينقصني الآن خزانة ملابس فقط»، أي أن غرفته لم يكتمل تأثيثها بالكامل بعد."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da durch das Fehlen eines Schranks belegt ist, dass das Zimmer noch nicht ganz fertig eingerichtet ist.",
      "fr": "« Faux » est contredit par le fait qu'il lui manque encore une armoire pour que sa chambre soit complètement aménagée.",
      "ar": "«خطأ» غير دقيق لأن النص يذكر بوضوح أن خزانة الملابس ما زالت تنقصه ليكتمل أثاث الغرفة."
    }
  },
  "4": {
    "quote": "Ich wohne erst zehn Tage hier, aber wir vier verstehen uns schon sehr gut. Und mit Küchen- und Putzdienst scheint es auch zu klappen",
    "whyCorrect": {
      "de": "Richtig. Lutz berichtet erfreut: „wir vier verstehen uns schon sehr gut. Und mit Küchen- und Putzdienst scheint es auch zu klappen“. Es gab bisher keinerlei Streitigkeiten oder Konflikte.",
      "fr": "Vrai. Lutz rapporte avec satisfaction : « nous quatre nous entendons déjà très bien. Et pour la cuisine et le ménage, tout semble bien fonctionner aussi ». Il n'a rencontré aucun problème avec ses colocataires.",
      "ar": "صحيح. يوضح لوتس بسرور: «نحن الأربعة نتفاهم بشكل ممتاز بالفعل، ويبدو أن جدول المطبخ والتنظيف يسير على ما يرام أيضاً»، أي أنه لم يواجه أي مشكلات مع زملائه في السكن حتى الآن."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist nicht korrekt, da das Zusammenleben in der Wohngemeinschaft harmonisch verläuft und keine Probleme aufgetreten sind.",
      "fr": "« Faux » est contredit par la bonne entente rapportée et le bon fonctionnement du ménage commun.",
      "ar": "«خطأ» لا يصح لأن التفاهم بين الزملاء في السكن المشترك ممتاز ولم تقع أي مشكلات."
    }
  },
  "5": {
    "quote": "Die Wohnung liegt in einem Altbau: hohe Wände, große Fenster, Holzfußboden … echt super. Mein Zimmer blickt auf den Hinterhof, ist also ruhig und hell.",
    "whyCorrect": {
      "de": "Falsch. Lutz sieht das Alter des Gebäudes keineswegs als Nachteil, sondern schwärmt vom Altbau: „hohe Wände, große Fenster, Holzfußboden … echt super.“",
      "fr": "Faux. Lutz ne considère pas l'ancienneté du bâtiment comme un inconvénient, mais au contraire il en fait l'éloge : « hauts plafonds, grandes fenêtres, parquet au sol... vraiment super ».",
      "ar": "خطأ. لا يعتبر لوتس قِدم المبنى عيباً أو سلبية على الإطلاق، بل يمتدحه بحماس: «جدران عالية، نوافذ كبيرة، أرضيات خشبية... رائع حقاً»."
    },
    "whyIncorrect": {
      "de": "„Richtig“ wäre falsch, da der Altbaucharakter für Lutz ein klarer Vorteil und Qualitätsmerkmal ist.",
      "fr": "« Vrai » est inexact, car le charme de l'ancien représente un véritable atout pour Lutz.",
      "ar": "«صحيح» غير صحيح لأن طابع المبنى القديم يُعد ميزة إيجابية كبيرة بالنسبة له."
    }
  },
  "6": {
    "quote": "Du kannst mich auch jederzeit besuchen, aber bring unbedingt deinen Schlafsack mit.",
    "whyCorrect": {
      "de": "Richtig. Lutz lädt Florian herzlich ein und versichert ihm: „Du kannst mich auch jederzeit besuchen, aber bring unbedingt deinen Schlafsack mit.“ Florian kann also jederzeit bei ihm übernachten.",
      "fr": "Vrai. Lutz invite chaleureusement Florian en lui disant : « Tu peux aussi venir me voir n'importe quand, mais apporte absolument ton sac de couchage. » Florian est donc bienvenu pour loger sur place quand il le désire.",
      "ar": "صحيح. يدعو لوتس صديقه فلوريان بحرارة قائلاً: «يمكنك زيارتي في أي وقت، لكن احرص على إحضار كيس نومك معك»، مما يعني أنه يرحب بمبيته في أي وقت يشاء."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da die Erlaubnis und Einladung zum Übernachten („jederzeit besuchen“) ausdrücklich im Text ausgesprochen wird.",
      "fr": "« Faux » ne convient pas, car l'invitation à séjourner n'importe quand est formulée explicitement.",
      "ar": "«خطأ» غير صحيح لأن الدعوة لزيارته والمبيت في أي وقت ذُكرت بعبارة صريحة."
    }
  },
  "7": {
    "quote": "Kunden der Berliner Verkehrsbetriebe (BVG) können ihre Bus- und Bahnfahrten ab sofort bargeldlos mit dem Handy bezahlen. Das System unter dem Namen „Touch & Travel“ lief erst als Pilotprojekt und gilt nun für das ganze Gebiet der BVG.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Der gesamte Artikel stellt das neue Ticketsystem „Touch & Travel“ vor, mit dem Fahrgäste ihre Fahrkarten bargeldlos per Handy kaufen und abrechnen können.",
      "fr": "La réponse b est correcte : L'ensemble de l'article présente le nouveau système « Touch & Travel » permettant aux usagers de régler leurs trajets en bus et en métro directement avec leur téléphone portable.",
      "ar": "الخيار b صحيح: يدور المقال بأكمله حول تقديم نظام «Touch & Travel» الجديد الذي يتيح للركاب دفع ثمن التذاكر في الحافلات والقطارات عبر الهاتف المحمول بدون نقود ورقية."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, weil nicht die Fahrpreise das Hauptthema sind. Option c ist falsch, weil es nicht um Verkehrsprobleme durch Busse geht, sondern um ein Bezahlsystem.",
      "fr": "L'option a est fausse car les tarifs ne sont pas le sujet central. L'option c est fausse car l'article ne traite pas des problèmes de circulation causés par les transports, mais d'un moyen de paiement.",
      "ar": "الخيار a غير صحيح لأن أسعار التذاكر ليست الموضوع الرئيسي، والخيار c غير صحيح لأن المقال لا يناقش مشكلات المرور الناتجة عن الحافلات بل طريقة الدفع."
    }
  },
  "8": {
    "quote": "Das System unter dem Namen „Touch & Travel“ lief erst als Pilotprojekt und gilt nun für das ganze Gebiet der BVG.",
    "whyCorrect": {
      "de": "Lösung a ist richtig: Im Text steht wörtlich, dass „Touch & Travel“ nach der Pilotphase „nun für das ganze Gebiet der BVG“ gilt, also auf allen Strecken des BVG-Netzes.",
      "fr": "La réponse a est correcte : Le texte indique textuellement que le système « s'applique désormais à l'ensemble du réseau de la BVG » (« für das ganze Gebiet der BVG »).",
      "ar": "الخيار a صحيح: يذكر النص حرفياً أن النظام أصبح يسري «الآن على كامل شبكة ومناطق هيئة النقل ببرلين BVG»، أي على جميع خطوطها."
    },
    "whyIncorrect": {
      "de": "Option b ist falsch, da man sich nicht vor der ersten Fahrt am Computer anmelden muss, sondern sich einfach per Funksignal mit dem Handy an der Haltestelle anmeldet. Option c ist falsch, weil es keine neue Strecke ist, sondern ein Ticketsystem.",
      "fr": "L'option b est fausse car aucune inscription préalable sur ordinateur n'est exigée. L'option c est fausse car il s'agit d'un système de billetterie et non d'une nouvelle ligne.",
      "ar": "الخيار b غير صحيح لأنه لا يلزم التسجيل عبر الكمبيوتر قبل أول رحلة، والخيار c غير صحيح لأنه ليس اسماً لخط سير جديد بل نظام دفع تذاكر."
    }
  },
  "9": {
    "quote": "Experten für Verkehrsprobleme gehen davon aus, dass durch dieses neue System Bus- und Bahnfahrten besonders für jüngere Menschen attraktiver werden.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: Die Verkehrsexperten gehen davon aus, dass Bus und Bahn besonders für junge Leute attraktiver werden und sie somit als neue Kunden gewonnen werden sollen.",
      "fr": "La réponse c est correcte : Les experts estiment que ce système rendra les transports plus séduisants pour les jeunes, les incitant ainsi à devenir usagers des transports publics.",
      "ar": "الخيار c صحيح: يتوقع خبراء المرور أن تصبح الحافلات والقطارات أكثر جاذبية للشباب بفضل هذا النظام الجديد بهدف جذبهم ليصبحوا عملاء وركاباً دائمين."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, weil nicht gesagt wird, dass junge Menschen das System bereits praktisch finden, sondern dass man sie erst gewinnen will. Option b ist falsch, weil die Unkenntnis des Streckensystems allgemein für Fahrgäste gilt, nicht spezifisch für Jugendliche.",
      "fr": "L'option a est fausse car le texte exprime un espoir des experts et non un avis déjà formulé par les jeunes. L'option b est fausse car la méconnaissance du réseau concerne les usagers en général.",
      "ar": "الخيار a غير صحيح لأن النص يتحدث عن توقعات الخبراء وليس عن رأي أعلنه الشباب بعد، والخيار b غير صحيح لأن صعوبة معرفة خطوط الشبكة عامة ولا تخص الشباب فقط."
    }
  },
  "10": {
    "quote": "Demnach arbeiten ungefähr sechs von zehn Berufstätigen auch im Urlaub, viele sogar jeden Tag.",
    "whyCorrect": {
      "de": "Lösung a ist richtig: Der Text behandelt die Ergebnisse einer Umfrage, wonach etwa 60 Prozent der deutschen Berufstätigen auch während ihres Urlaubs arbeiten.",
      "fr": "La réponse a est correcte : L'article traite des résultats d'un sondage montrant qu'environ 60 % des actifs allemands travaillent durant leurs congés payés.",
      "ar": "الخيار a صحيح: يدور المقال حول نتائج استطلاع يُظهر أن حوالي ستة من كل عشرة موظفين ألمان يعملون أيضاً أثناء إجازاتهم وعطلاتهم."
    },
    "whyIncorrect": {
      "de": "Option b ist falsch, da nicht behauptet wird, dass Angestellte zu wenig Urlaub hätten. Option c ist falsch, da es um das Arbeiten im Urlaub und nicht um allgemeine Härte der Arbeitsbedingungen geht.",
      "fr": "L'option b est fausse car le nombre de jours de congé n'est pas remis en cause. L'option c est fausse car le sujet est le travail pendant les vacances et non la pénibilité globale du travail.",
      "ar": "الخيار b غير صحيح لأنه لا يدعي قلة أيام العطل، والخيار c غير صحيح لأن التركيز ينصب على العمل أثناء الإجازة وليس قسوة ظروف العمل عموماً."
    }
  },
  "11": {
    "quote": "Beim Alter hingegen gilt: je jünger, desto mehr. Der Anteil derer, die in der freien Zeit arbeiten, nimmt mit höherem Alter also ab.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Der Text stellt klar fest: „je jünger, desto mehr. Der Anteil derer, die in der freien Zeit arbeiten, nimmt mit höherem Alter also ab.“ Jüngere Berufstätige arbeiten demnach öfter im Urlaub als ältere Kollegen.",
      "fr": "La réponse b est correcte : Le texte affirme clairement : « plus on est jeune, plus on travaille [en congé]. La part de ceux qui travaillent pendant leur temps libre diminue avec l'âge. » Les jeunes actifs travaillent donc plus souvent pendant leurs vacances que les plus âgés.",
      "ar": "الخيار b صحيح: يوضح النص بوضوح: «كلما كان الموظف أصغر سناً، زاد عمله في الإجازة؛ وتنخفض نسبة من يعملون في أوقات فراغهم مع التقدم في السن»، أي أن الشباب يعملون أثناء العطلة أكثر من كبار السن."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, da der Erholungsbedarf nicht als unterschiedlich dargestellt wird. Option c ist falsch, weil Verantwortungsgefühl als allgemeiner Grund für alle genannt wird, nicht nur für Jüngere.",
      "fr": "L'option a est fausse car le besoin de repos n'est pas comparé. L'option c est fausse car le sens des responsabilités est cité pour l'ensemble des sondés et non spécifiquement pour les jeunes.",
      "ar": "الخيار a غير صحيح لأن النص لا يقول إن الشباب يحتاجون راحة أقل، والخيار c غير صحيح لأن حس المسؤولية ذُكر كدافع عام لدى الجميع وليس الشباب فقط."
    }
  },
  "12": {
    "quote": "Die meisten geben als Grund das Verantwortungsgefühl an oder „weil sonst die Arbeit nicht fertig wird“.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: Als Hauptgrund für die Arbeit im Urlaub wird angegeben, dass die Betroffenen Angst haben, dass sonst die anfallende Arbeit nicht fertig wird.",
      "fr": "La réponse c est correcte : La raison principale invoquée pour travailler pendant les congés est le sens des responsabilités ou « parce que sinon le travail ne sera pas terminé » (« weil sonst die Arbeit nicht fertig wird »).",
      "ar": "الخيار c صحيح: يذكر النص أن السبب الأبرز للعمل في الإجازة هو الإحساس بالمسؤولية أو «لأن العمل لن ينجز ويكتمل بغير ذلك»."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, da Lebenspartner dies zwar oft tolerieren, es aber nicht der Grund für die Arbeit ist. Option b ist falsch, weil zusätzliches Geld im Text überhaupt nicht als Motiv erwähnt wird.",
      "fr": "L'option a est fausse car la compréhension des conjoints n'est pas la motivation du travail. L'option b est fausse car le gain financier supplémentaire n'est absolument pas mentionné.",
      "ar": "الخيار a غير صحيح لأن تفهم الشريك ليس سبباً للعمل، والخيار b غير صحيح لأن كسب المزيد من المال لم يُذكر إطلاقاً كدافع في النص."
    }
  },
  "13": {
    "quote": "Charlotte und Jan Kaiser suchen einen Schüler oder Studenten, der ihren Garten pflegt, wenn sie in Urlaub sind.",
    "whyCorrect": {
      "de": "Lösung 0 (Keine passende Anzeige): Keine der vorliegenden Anzeigen bietet eine kurzfristige Urlaubsvertretung für Gartenarbeiten durch Schüler oder Studenten an.",
      "fr": "Solution 0 (Aucune annonce) : Aucune annonce ne propose les services d'un élève ou étudiant pour s'occuper d'un jardin temporairement pendant les vacances.",
      "ar": "الحل 0 (لا يوجد إعلان مناسب): لا يوجد في الإعلانات المعروضة أي إعلان يقدم خدمات طالب مدرسي أو جامعي لرعاية الحديقة أثناء سفر أصحابها في العطلة."
    },
    "whyIncorrect": {
      "de": "Anzeige d scheidet aus, da die Dame eine dauerhafte Wohnung zur Miete sucht, nicht nur eine Urlaubsvertretung. Anzeige i ist ein professioneller Dienstleister, kein Schüler/Student.",
      "fr": "L'annonce d ne convient pas car la dame cherche un logement permanent. L'annonce i propose une entreprise professionnelle et non un étudiant.",
      "ar": "الإعلان d لا يناسب لأن السيدة تبحث عن استئجار شقة دائمة، والإعلان i يخص شركة متخصصة وليس طالباً يقدم عملاً مؤقتاً."
    }
  },
  "14": {
    "quote": "Hanna Gruber hat alte Gartenmöbel aus Eisen; sie möchte sie reparieren lassen.",
    "whyCorrect": {
      "de": "Lösung g ist richtig: Anzeige g bietet genau diesen Service an: „Repariere und pflege Gartenmöbel im Raum Linz, auch Antiquitäten, günstige Preise...“.",
      "fr": "La réponse g est correcte : L'annonce g propose exactement ce service : « Répare et entretient le mobilier de jardin dans la région de Linz, y compris les antiquités... ».",
      "ar": "الخيار g صحيح: يقدم الإعلان g هذه الخدمة تحديداً: «تصليح وصيانة أثاث الحدائق في منطقة لينتس، بما في ذلك الأثاث القديم والعتيق بأسعار مناسبة»."
    },
    "whyIncorrect": {
      "de": "Anzeige f bietet nur Material und Beratung zum „Selbermachen“ im Baumarkt an, während Hanna ihre Möbel von jemandem reparieren lassen möchte.",
      "fr": "L'annonce f ne vend que du matériel de bricolage pour réparer soi-même, alors qu'Hanna souhaite faire réparer ses meubles par un artisan.",
      "ar": "الإعلان f يقدم فقط مستلزمات وإرشادات للتصليح الذاتي في متجر الأدوات، بينما ترغب هانا في أن يصلح لها شخص مختص أثاثها."
    }
  },
  "15": {
    "quote": "Benjamin Koch findet es nicht lustig, wenn seine Freunde Witze über seine selbst gebauten Gartenmöbel machen. Jetzt will er ihnen zeigen, dass er damit auch einen Preis gewinnen kann.",
    "whyCorrect": {
      "de": "Lösung h ist richtig: Anzeige h lädt zu einem Gartenwettbewerb ein: „bauen Sie individuelle Gartenmöbel ... ? ... als Anleitung bei unserem neuen Gartenwettbewerb mitmachen lassen ... Tolle Preise zu gewinnen!“.",
      "fr": "La réponse h est correcte : L'annonce h invite à un concours de jardinage : « vous fabriquez du mobilier de jardin sur mesure... ? Participez à notre concours de jardinage... De superbes prix à gagner ! ».",
      "ar": "الخيار h صحيح: يدعو الإعلان h لمسابقة حدائق تناسب بنيامين تماماً: «هل تصنع أثاث حدائق مميزاً بنفسك؟ شارك بدليل تعليمي في مسابقتنا الجديدة... جوائز رائعة بانتظاركم!»."
    },
    "whyIncorrect": {
      "de": "Anzeige a ist ein Fotowettbewerb für Blumenparadiese, kein Wettbewerb für selbst gebaute Möbel.",
      "fr": "L'annonce a est un concours photo dédié aux fleurs et balcons fleuris, pas aux meubles artisanaux.",
      "ar": "الإعلان a مسابقة تصوير لأجمل حديقة زهور وليس مسابقة لأثاث الحدائق المصنوع يدوياً."
    }
  },
  "16": {
    "quote": "Fabian Kunz sucht jemanden, der seine Apfelbäume schneidet, damit seine Apfelernte nächstes Jahr besser wird.",
    "whyCorrect": {
      "de": "Lösung i ist richtig: Anzeige i von gartenarbeiter.de wirbt ausdrücklich: „Wir ... schneiden Obstbäume, fällen Bäume ... günstig – schnell – professionell“.",
      "fr": "La réponse i est correcte : L'annonce i de gartenarbeiter.de annonce explicitement : « Nous taillons les arbres fruitiers, abattons les arbres... économique, rapide et professionnel ».",
      "ar": "الخيار i صحيح: يعلن الموقع في الإعلان i بوضوح: «نحن نقلم أشجار الفاكهة ونقطع الأشجار... بأسعار مناسبة وبسرعة واحترافية»."
    },
    "whyIncorrect": {
      "de": "Anzeige c (Früchtehof) verkauft lediglich frische Äpfel und Birnen, schneidet aber keine Obstbäume für Kunden.",
      "fr": "L'annonce c vend des fruits frais de la ferme mais ne propose aucune prestation de taille d'arbres.",
      "ar": "الإعلان c يبيع التفاح والكمثرى من المزرعة ولا يقدم خدمات تقليم الأشجار للزبائن."
    }
  },
  "17": {
    "quote": "Der junge Mann, der im 1. Stock gewohnt und sich auch um den Garten gekümmert hat, ist ausgezogen. Frau Jansen, der das Haus gehört, sucht wieder nach einer ähnlichen Lösung.",
    "whyCorrect": {
      "de": "Lösung d ist richtig: In Anzeige d sucht eine ruhige Dame eine 2-Zimmer-Wohnung und bietet dabei an: „Gerne Übernahme v. Gartenpflege“. Das ist die ideale Mieterin für Frau Jansen.",
      "fr": "La réponse d est correcte : Dans l'annonce d, une dame calme cherche un appartement de 2 pièces et propose : « Prend volontiers en charge l'entretien du jardin ». C'est la solution parfaite pour Mme Jansen.",
      "ar": "الخيار d صحيح: في الإعلان d تبحث سيدة هادئة عن شقة من غرفتين وتعرض في إعلانها: «مستعدة للمساعدة في رعاية الحديقة»، وهي المطابقة التامة لما تبحث عنه السيدة يانسن."
    },
    "whyIncorrect": {
      "de": "Andere Anzeigen bieten handwerkliche Dienstleistungen gegen Bezahlung an, nicht jedoch ein Mietverhältnis gekoppelt mit Gartenpflege.",
      "fr": "Les autres annonces concernent des prestations payantes d'entreprises et non une location avec prise en charge du jardin.",
      "ar": "بقية الإعلانات تعرض خدمات تجارية مدفوعة ولا تجمع بين الاستئجار والقيام بأعمال الحديقة."
    }
  },
  "18": {
    "quote": "In Rafaels und Janas Garten sind viele Bäume kaputt. Doch bevor sie neue Bäume kaufen, möchten sie einen Experten fragen.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Anzeige b bietet fachmännische Baumberatung: „Vor Fehlplanung schützt Sie unsere Sorten- und Standortberatung. ... Beratung von Pfefferer, den Baumspezialisten.“",
      "fr": "La réponse b est correcte : L'annonce b propose les conseils d'experts en arboriculture : « Notre conseil en variétés et en emplacement vous évite les erreurs... Conseil de Pfefferer, les spécialistes des arbres ».",
      "ar": "الخيار b صحيح: يقدم الإعلان b استشارة متخصصة من خبراء الأشجار: «استشارتنا حول أصناف الأشجار ومواقع زراعتها تحميكم من التخطيط الخاطئ... استشارة من بفيفيرر، متخصصي الأشجار»."
    },
    "whyIncorrect": {
      "de": "Anzeige i schneidet und fällt Bäume, bietet aber keine wissenschaftlich-fachliche Kauf- und Standortberatung.",
      "fr": "L'annonce i propose l'abattage et la taille mais pas de conseil d'orientation pour l'achat de nouveaux arbres adaptés.",
      "ar": "الإعلان i مخصص لتقليم وقطع الأشجار وليس لتقديم استشارات لشراء واختيار أشجار جديدة."
    }
  },
  "19": {
    "quote": "Für das Hochzeitsfest ihrer Tochter möchten Anna und Hans Moser ihren Garten besonders schön dekorieren und suchen nach Ideen.",
    "whyCorrect": {
      "de": "Lösung j ist richtig: Die Messe Giardina in Zürich präsentiert: „Showgarten – Pflanzen – Floristik – Gartenmöbel – Dekoration – Kunst – Accessoires – Düfte...“, ideal für Dekorationsideen.",
      "fr": "La réponse j est correcte : Le salon Giardina à Zurich propose : « Jardins modèles, plantes, art floral, mobilier, décoration, accessoires... », idéal pour trouver des idées de décoration festive.",
      "ar": "الخيار j صحيح: يقدم معرض غياردينيا في زيورخ: «حدائق استعراضية، نباتات، تنسيق زهور، ديكور، فنون، إكسسوارات...»، وهو مثالي لاستلهام أفكار تزيين الحديقة لحفل الزفاف."
    },
    "whyIncorrect": {
      "de": "Anzeige a ist ein Fotowettbewerb und gibt keine Anregungen zur festlichen Gartendekoration für Hochzeiten.",
      "fr": "L'annonce a est un concours de photographie pour magazines et non une source d'inspiration pour décorations de mariage.",
      "ar": "الإعلان a يطلب إرسال صور لمسابقة مجلة ولا يقدم عروضاً أو أفكاراً لديكورات الأعراس."
    }
  },
  "20": {
    "quote": "Deshalb finde ich den Hundeführerschein unrealistisch. Das kommt mir doch etwas zu extrem vor.",
    "whyCorrect": {
      "de": "Lösung: Nein. Maren hält die Maßnahme für unpraktikabel und lehnt sie ab: „Deshalb finde ich den Hundeführerschein unrealistisch. Das kommt mir doch etwas zu extrem vor.“",
      "fr": "Solution : Non (Nein). Maren rejette cette mesure en la qualifiant d'irréaliste et excessive : « C'est pourquoi je trouve le permis pour chiens irréaliste. Cela me semble un peu trop extrême. »",
      "ar": "الحل: لا (Nein). ترفض مارين الفكرة وتراها غير واقعية ومفرطة: «لذلك أجد رخصة الكلاب أمراً غير واقعي، ويبدو لي مبالغاً فيه إلى حد ما»."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist unzutreffend, da sie den Hundeführerschein ausdrücklich als „unrealistisch“ und „zu extrem“ bezeichnet.",
      "fr": "« Oui » ne convient pas, car elle qualifie clairement le permis de démesuré et inapplicable.",
      "ar": "«نعم» غير صحيح لأنها تصرح بوضوح بأنه «غير واقعي» و«مبالغ فيه»."
    }
  },
  "21": {
    "quote": "Leider haben gerade die Kleinhundebesitzer ihre Vierbeiner meistens nicht im Griff und daran wird auch ein Hundeführerschein nichts ändern und wir Normalhundebesitzer müssen dann darunter leiden.",
    "whyCorrect": {
      "de": "Lösung: Nein. Janina ist gegen den Führerschein, weil er ihrer Meinung nach nichts am Problem ändert und normale Hundehalter nur unnötig belastet werden.",
      "fr": "Solution : Non (Nein). Janina est opposée au permis car selon elle il ne changera rien au comportement des propriétaires et pénalisera les maîtres exemplaires.",
      "ar": "الحل: لا (Nein). تعارض يانينا الرخصة لأنها ترى أنها لن تغير من المشكلة شيئاً وستجعل أصحاب الكلاب العاديين الملتزمين يعانون دون فائدة."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da Janina klar betont, dass ein Hundeführerschein wirkungslos wäre und den falschen Personen schadet.",
      "fr": "« Oui » est inexact, car elle estime que le permis est inefficace et pénalisant pour les bons maîtres.",
      "ar": "«نعم» لا يصح لأنها تؤكد أن رخصة الكلاب لن تفيد وستضر بأصحاب الكلاب المنضبطين."
    }
  },
  "22": {
    "quote": "Der Hundeführerschein ist da genau richtig, aber er muss dann auch für alle gelten, ohne Ausnahme.",
    "whyCorrect": {
      "de": "Lösung: Ja. Nadja befürwortet die Maßnahme uneingeschränkt: „Der Hundeführerschein ist da genau richtig, aber er muss dann auch für alle gelten, ohne Ausnahme.“",
      "fr": "Solution : Oui (Ja). Nadja soutient fermement l'initiative : « Le permis pour chiens est tout à fait la bonne solution, mais il doit alors s'appliquer à tous sans exception. »",
      "ar": "الحل: نعم (Ja). تؤيد ناديا الفكرة بحماس: «رخصة الكلاب هي الحل الصائب تماماً، لكن يجب تطبيقها على الجميع دون أي استثناء»."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist falsch, da Nadja den Hundeführerschein ausdrücklich als „genau richtig“ bezeichnet.",
      "fr": "« Non » est contredit par son approbation sans équivoque du permis (« genau richtig »).",
      "ar": "«لا» غير صحيح لأن ناديا تعتبر رخصة قيادة الكلاب خطوة صائبة وفي محلها تماماً."
    }
  },
  "23": {
    "quote": "Das ist doch nicht zu fassen, was sich die Bürokraten für die Hundebesitzer überlegen! So einen dummen Vorschlag habe ich schon lange nicht mehr gehört. ... Unglaublich!!",
    "whyCorrect": {
      "de": "Lösung: Nein. Regula empört sich über den bürokratischen Vorschlag und nennt ihn eine Zumutung und „dummen Vorschlag“.",
      "fr": "Solution : Non (Nein). Regula s'indigne de cette initiative bureaucratique qu'elle juge ridicule : « Je n'ai pas entendu une proposition aussi stupide depuis longtemps... Incroyable !! »",
      "ar": "الحل: لا (Nein). تستنكر ريغولا الفكرة بشدة وتعتبرها مقترحاً أحمق وتدخلاً بيروقراطياً غير معقول: «لم أسمع باقتراح غبي كهذا منذ زمن طويل... أمر لا يُصدق!»."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da sie den Vorschlag vehement und scharf zurückweist.",
      "fr": "« Oui » est exclu, car son commentaire traduit une hostilité totale au projet.",
      "ar": "«نعم» غير صحيح لأن تعليقها يعبر عن رفض قاطع وغضب من هذا الاقتراح."
    }
  },
  "24": {
    "quote": "Mit noch einer Regelung, die niemand ernst nimmt, macht der Staat sich nur noch lächerlicher. Wer wird dann diesen Hundeführerschein kontrollieren?",
    "whyCorrect": {
      "de": "Lösung: Nein. Hans hält die Regelung für lächerlich und meint, dass hier nur ein Politiker auf sich aufmerksam machen wollte.",
      "fr": "Solution : Non (Nein). Hans s'oppose au permis, estimant que l'État se rend ridicule avec des lois inapplicables et incontrôlables sur le terrain.",
      "ar": "الحل: لا (Nein). يرى هانز أن هذا القانون سيجعل الدولة أضحوكة ولن يستطيع أحد مراقبته وتنفيذه على أرض الواقع."
    },
    "whyIncorrect": {
      "de": "„Ja“ trifft nicht zu, da Hans die Sinnhaftigkeit und Kontrollierbarkeit der Vorschrift komplett bestreitet.",
      "fr": "« Oui » est faux, Hans considérant ce projet comme une tentative ridicule d'un politicien en quête de visibilité.",
      "ar": "«نعم» لا يصح لأن هانز يسخر من القانون ويرى استحالة تطبيقه عملياً."
    }
  },
  "25": {
    "quote": "Für die Hunde lohnt sich das sicher, da die Qualität ihrer Besitzer zunehmen würde. ... Ja, ich sehe das als Hundeschutz.",
    "whyCorrect": {
      "de": "Lösung: Ja. Konstantin befürwortet den Führerschein und sieht darin einen wirksamen Tierschutz, damit Hundehalter besser qualifiziert werden.",
      "fr": "Solution : Oui (Ja). Konstantin soutient la mesure en précisant qu'elle améliorera les compétences des maîtres : « Oui, je vois cela comme une protection des chiens. »",
      "ar": "الحل: نعم (Ja). يؤيد قسطنطين الفكرة مؤكداً أنها تصب في مصلحة الكلاب وحمايتها وتحسين كفاءة أصحابها: «نعم، أنا أرى ذلك حماية للكلاب»."
    },
    "whyIncorrect": {
      "de": "„Nein“ wäre unzutreffend, da Konstantin ausdrücklich „Ja, ich sehe das als Hundeschutz“ sagt.",
      "fr": "« Non » est démenti par son affirmation formelle d'y voir un progrès pour le bien-être animal.",
      "ar": "«لا» غير وارد لأنه يوافق صراحة ويعتبرها خطوة لحماية الحيوان."
    }
  },
  "26": {
    "quote": "Dieser Hundeführerschein sollte schon seit Jahren da sein, denn es gibt einfach zu viele Menschen, die persönliche Probleme mithilfe eines Hundes lösen möchten ...",
    "whyCorrect": {
      "de": "Lösung: Ja. Andreas befürwortet den Führerschein ausdrücklich und fordert, dass er eigentlich schon seit Jahren hätte eingeführt werden müssen.",
      "fr": "Solution : Oui (Ja). Andreas est très favorable au permis, affirmant qu'il « aurait dû exister depuis des années » pour éviter les adoptions irréfléchies.",
      "ar": "الحل: نعم (Ja). يؤيد أندرياس الفكرة بشدة ويؤكد أن هذه الرخصة «كان ينبغي تطبيقها منذ سنوات» لحماية الكلاب من سوء المعاملة."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist falsch, da Andreas sich voll und ganz hinter die Maßnahme stellt.",
      "fr": "« Non » est contredit par son plaidoyer appuyé en faveur du permis obligatoire.",
      "ar": "«لا» غير صحيح لأن تعليقه يمثل دعماً صريحاً ومتحمساً لفرض الرخصة."
    }
  },
  "27": {
    "quote": "Auch in Camps in Deutschland sind die Gruppen international. Campsprache ist in der Regel Englisch. Grundkenntnisse reichen aus.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: Im Text heißt es ausdrücklich: „Campsprache ist in der Regel Englisch.“ Die Freiwilligen kommunizieren also normalerweise auf Englisch miteinander.",
      "fr": "La réponse c est correcte : Le texte précise explicitement : « La langue du camp est en règle générale l'anglais. » Les volontaires communiquent donc habituellement en anglais.",
      "ar": "الخيار c صحيح: يذكر النص بوضوح: «لغة المخيم هي الإنجليزية في العادة»، أي أن التواصل بين المتطوعين يجري بالإنجليزية غالباً."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, weil man ab 16 bzw. 18 Jahren mitmachen kann und eine Begrenzung nach oben nur in seltenen Einzelfällen existiert. Option b ist falsch, weil die Gruppen international aus vielen Ländern zusammengesetzt sind.",
      "fr": "L'option a est fausse car les adultes de plus de 21 ans peuvent parfaitement participer. L'option b est fausse car les équipes sont internationales et proviennent de pays divers.",
      "ar": "الخيار a غير صحيح لأنه لا يوجد حد أقصى للسن فوق 21 إلا في حالات استثنائية، والخيار b غير صحيح لأن الفرق دولية وتضم مشاركين من مختلف البلدان."
    }
  },
  "28": {
    "quote": "Wann? Von Juni bis Oktober, einige im Frühling oder Winter",
    "whyCorrect": {
      "de": "Lösung a ist richtig: Durch die Angaben „Von Juni bis Oktober, einige im Frühling oder Winter“ werden Sommer, Herbst, Frühling und Winter abgedeckt – der Dienst ist also zu allen Jahreszeiten möglich.",
      "fr": "La réponse a est correcte : La mention « De juin à octobre, certains au printemps ou en hiver » couvre les quatre saisons, le volontariat est donc possible tout au long de l'année.",
      "ar": "الخيار a صحيح: تغطي عبارة «من يونيو إلى أكتوبر، وبعضها في الربيع أو الشتاء» فصول السنة الأربعة، وبالتالي فإن العمل التطوعي متاح في جميع فصول السنة."
    },
    "whyIncorrect": {
      "de": "Option b ist falsch, da die Camps „zwei, drei oder vier Wochen“ dauern, also nicht mindestens einen Monat. Option c ist falsch, weil Profis ausdrücklich nicht erwartet werden („niemand erwartet Profis“).",
      "fr": "L'option b est fausse car les camps durent de 2 à 4 semaines (et non un mois minimum). L'option c est fausse car les organisateurs précisent que personne n'attend d'experts professionnels.",
      "ar": "الخيار b غير صحيح لأن مدة المخيمات أسبوعان أو ثلاثة أو أربعة (أي لا تشترط شهراً كحد أدنى)، والخيار c غير صحيح لأن النص يوضح صراحة أنه لا يُشترط أن يكون المشارك محترفاً."
    }
  },
  "29": {
    "quote": "Im Studienteil des Camps bietet dir das Projekt, dich mit seiner Arbeit, seinem politischen und sozialen Umfeld thematisch auseinanderzusetzen.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Der Studienteil ermöglicht und erwartet von den Teilnehmenden, sich mit den Hintergründen, der Arbeit und dem politischen/sozialen Kontext theoretisch auseinanderzusetzen.",
      "fr": "La réponse b est correcte : La phase d'étude du camp invite les participants à étudier théoriquement le contexte politique et social du projet (« thematisch auseinandersetzen »).",
      "ar": "الخيار b صحيح: يقدم الجزء الدراسي في المخيم فرصة للمتطوع للتعمق نظرياً ودراسة الجوانب الاجتماعية والسياسية المرتبطة بمشروع العمل."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, da Unterkunft gestellt wird („Deine Campgruppe erhält eine meist einfache Unterkunft“). Option c ist falsch, da Campleiter den Freiwilligen zur Seite stehen und nicht zwingend Hilfe von ihnen einfordern.",
      "fr": "L'option a est fausse car l'hébergement est fourni par l'organisation. L'option c est fausse car ce sont les chefs de camp qui accompagnent et soutiennent les bénévoles.",
      "ar": "الخيار a غير صحيح لأن المنظمة تؤمن السكن البسيط، والخيار c غير صحيح لأن قادة المخيم هم من يتولون إرشاد ومساعدة المتطوعين."
    }
  },
  "30": {
    "quote": "Für manche Länder musst du ein gebührenpflichtiges Visum beantragen.",
    "whyCorrect": {
      "de": "Lösung a ist richtig: Da man nur „für manche Länder“ ein Visum benötigt, muss man eventuell bzw. „vielleicht für ein Visum“ bezahlen.",
      "fr": "La réponse a est correcte : Étant donné que le visa payant n'est requis que « pour certains pays », il est possible (« peut-être ») d'avoir à payer des frais de visa.",
      "ar": "الخيار a صحيح: نظراً لأن التأشيرة مدفوعة الرسوم تُطلب «لبعض البلدان فقط»، فقد يضطر المتطوع للدفع للحصول على تأشيرة بحسب بلد الوجهة."
    },
    "whyIncorrect": {
      "de": "Option b ist falsch, da man für die Organisation der Reise selbst verantwortlich ist, aber nicht dafür an die Organisation zahlen muss. Option c ist falsch, da man die Anreise auch bei Auslandscamps selbst bezahlt und nicht nur die Hinreise.",
      "fr": "L'option b est fausse car on organise soi-même son voyage sans frais forfaitaires d'organisation. L'option c est fausse car le bénévole finance lui-même aller et retour.",
      "ar": "الخيار b غير صحيح لأن المتطوع يرتب سفره بنفسه، والخيار c غير صحيح لأن تمويل السفر ذهاباً وإياباً يقع على عاتق المتطوع في الداخل والخارج."
    }
  },
  "h1": {
    "quote": "Alemannen-Realschule Müllheim. Wenn Sie sich über unsere Veranstaltungen informieren wollen, wählen Sie die Eins. Wenn Sie Ihr Kind für das neue Schuljahr in Klasse 5 anmelden wollen ...",
    "whyCorrect": {
      "de": "Falsch. Die Ansage stammt von einer Realschule (Alemannen-Realschule Müllheim, Klasse 5), nicht von einer Berufsschule.",
      "fr": "Faux. Le message automatique émane d'un collège (Realschule de Müllheim, inscription en classe de 5e), et non d'une école professionnelle (Berufsschule).",
      "ar": "خطأ. الإعلان صادر عن مدرسة إعدادية (Alemannen-Realschule Müllheim لتسجيل تلاميذ الصف الخامس)، وليس عن مدرسة مهنية."
    },
    "whyIncorrect": {
      "de": "„Richtig“ wäre falsch, da im Text ausdrücklich von einer Realschule für Klasse 5 die Rede ist.",
      "fr": "« Vrai » est contredit par le nom explicite de l'établissement d'enseignement secondaire général.",
      "ar": "«صحيح» لا يصح لأن التسجيل مخصص للمدرسة الإعدادية وليس للمدرسة المهنية."
    }
  },
  "h2": {
    "quote": "Bringen Sie bitte das Familienstammbuch oder die Geburtsurkunde Ihres Kindes mit, die Bestätigung der Grundschule und ein Passfoto.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: In der Durchsage wird ausdrücklich verlangt: „ein Passfoto“. Ein Foto ist also zwingend erforderlich.",
      "fr": "La réponse c est correcte : La secrétaire indique formellement qu'il faut apporter « une photo d'identité » (« ein Passfoto »).",
      "ar": "الخيار c صحيح: تطلب الموظفة بوضوح إحضار «صورة شخصية حديثة (Passfoto)» ضمن مستندات التسجيل."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, da ein Familienstammbuch oder eine Geburtsurkunde verlangt wird, kein Pass. Option b ist falsch, weil nicht das Grundschulzeugnis, sondern die Anmeldebestätigung der Grundschule gemeint ist.",
      "fr": "L'option a est fausse car c'est le livret de famille ou l'acte de naissance qui est demandé. L'option b est inexacte car il s'agit d'une attestation d'inscription et non du bulletin.",
      "ar": "الخيار a غير صحيح لأنه يُطلب دفتر العائلة أو شهادة الميلاد وليس جواز السفر، والخيار b غير صحيح لأنه يُطلب إشعار التأكيد وليس الشهادة المدرسية."
    }
  },
  "h3": {
    "quote": "Hier eine Meldung der Polizei: Gestern gegen 13 Uhr kam es in der Goethestraße zu einem Verkehrsunfall ...",
    "whyCorrect": {
      "de": "Richtig. Es handelt sich um einen polizeilichen Zeugenaufruf nach einem Verkehrsunfall in der Goethestraße.",
      "fr": "Vrai. Il s'agit d'un appel à témoins de la police suite à un accident de la circulation survenu dans la Goethestraße.",
      "ar": "صحيح. البيان عبارة عن بلاغ ونداء للشهود من الشرطة بخصوص حادث مروري وقع في شارع غوته."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da die Polizeidurchsage eindeutig von einem Verkehrsunfall berichtet.",
      "fr": "« Faux » ne convient pas car il s'agit bien d'un communiqué officiel concernant un accident.",
      "ar": "«خطأ» غير صحيح لأن الإعلان هو بالفعل بلاغ عن حادث سير."
    }
  },
  "h4": {
    "quote": "Wer hat den Unfall beobachtet? Zeugen werden gebeten, sich bei der Polizei zu melden.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: Die Polizei bittet Personen, die den Vorfall beobachtet haben (Unfallzeugen), sich zu melden.",
      "fr": "La réponse c est correcte : La police invite les témoins oculaires ayant assisté à la scène à se manifester auprès des services de police.",
      "ar": "الخيار c صحيح: تطلب الشرطة من الأشخاص الذين شهدوا الحادث وتفاصيله التواصل مع قسم الشرطة للإدلاء بأقوالهم."
    },
    "whyIncorrect": {
      "de": "Option a und b sind falsch, da die Identität der Autofahrerin und des Jungen bereits bekannt sind und Zeugen gesucht werden.",
      "fr": "Les options a et b sont fausses car la conductrice et l'enfant sont déjà identifiés ; la police recherche des témoins extérieurs.",
      "ar": "الخياران a و b غير صحيحين لأن السائقة والطفل معروفان بالفعل والمطلوب هو الشهود الخارجيون."
    }
  },
  "h5": {
    "quote": "Gleis 4. Einfahrt des Regional-Express aus Stuttgart zur Weiterfahrt nach Heilbronn.",
    "whyCorrect": {
      "de": "Richtig. Die Durchsage kündigt die unmittelbare Einfahrt des Zuges am Bahnsteig an: „Einfahrt des Regional-Express ...“.",
      "fr": "Vrai. L'annonce en gare signale l'entrée immédiate du train en gare sur la voie 4 (« Einfahrt des Regional-Express »).",
      "ar": "صحيح. تعلن الإذاعة الداخلية في المحطة عن وصول ودخول القطار إلى الرصيف حالاً («Einfahrt des Regional-Express»)."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da der Zug gerade an Gleis 4 einfährt.",
      "fr": "« Faux » est contredit par l'annonce d'arrivée imminente sur le quai.",
      "ar": "«خطأ» غير صحيح لأن القطار يدخل المحطة في تلك اللحظة."
    }
  },
  "h6": {
    "quote": "Einfahrt des Regional-Express aus Stuttgart zur Weiterfahrt nach Heilbronn.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Der Zug kommt aus Stuttgart und fährt weiter nach Heilbronn.",
      "fr": "La réponse b est correcte : Le train provient de Stuttgart et poursuit son voyage à destination d'Heilbronn (« Weiterfahrt nach Heilbronn »).",
      "ar": "الخيار b صحيح: القطار قادم من شتوتغارت ومسار رحلته يكمل باتجاه هايلبرون («Weiterfahrt nach Heilbronn»)."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, weil er nicht aus Heilbronn kommt, sondern dorthin fährt. Option c ist falsch, weil Eberberg nur ein Zwischenhalt ist.",
      "fr": "L'option a est fausse car Heilbronn est le terminus et non l'origine. L'option c est fausse car Eberberg n'est qu'un arrêt intermédiaire.",
      "ar": "الخيار a غير صحيح لأن هايلبرون هي وجهته وليس مصدره، والخيار c غير صحيح لأن إيبربيرغ محطة توقف فرعية."
    }
  },
  "h7": {
    "quote": "Guten Abend, liebe Hörerinnen und Hörer. In unserer heutigen Wirtschaftssendung berichten wir über ein bemerkenswertes Projekt ...",
    "whyCorrect": {
      "de": "Falsch. Die Moderatorin begrüßt das allgemeine Publikum zu einer „Wirtschaftssendung“, es ist also keine Kindersendung.",
      "fr": "Faux. La présentatrice annonce une émission économique destinée au grand public (« Wirtschaftssendung ») et non un programme conçu par ou pour des enfants.",
      "ar": "خطأ. تعلن المذيعة في البداية عن برنامج اقتصادي عام («Wirtschaftssendung») موجه لعموم المستمعين، وليس برنامجاً موجهاً أو مصنوعاً من قِبل الأطفال."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, auch wenn es im Beitrag inhaltlich um eine Schülerinitiative geht.",
      "fr": "« Vrai » est inexact, le thème abordant une initiative de jeunes mais l'émission étant un magazine économique pour adultes.",
      "ar": "«صحيح» لا ينطبق، فرغم أن التقرير يتناول مبادرة أطفال، إلا أن البرنامج برنامج اقتصادي للكبار."
    }
  },
  "h8": {
    "quote": "Schon in den ersten vier Wochen wurden eine Viertelmillion Tafeln von den Händlern bestellt.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Die Sprecherin erwähnt, dass „eine Viertelmillion Tafeln von den Händlern bestellt“ wurden.",
      "fr": "La réponse b est correcte : La journaliste indique textuellement qu'un quart de million de tablettes « ont été commandées par les commerçants ».",
      "ar": "الخيار b صحيح: تذكر المذيعة صراحة أن ربع مليون لوح شوكولاتة «تم طلبها من قِبل التجار وأصحاب المتاجر»."
    },
    "whyIncorrect": {
      "de": "Option a ist falsch, da die Tafeln nicht alle von Kindern gegessen wurden. Option c ist falsch, da sie von den Händlern bestellt und nicht bereits an Endverbraucher verkauft wurden.",
      "fr": "L'option a est fausse car ce n'est pas la consommation des enfants. L'option c est fausse car il s'agit de commandes passées par les distributeurs et non de ventes finales.",
      "ar": "الخيار a غير صحيح لأن الأطفال لم يلتهموها جميعاً، والخيار c غير صحيح لأن هذا الرقم يعبر عن طلبيات المتاجر وليس المبيعات للمستهلكين."
    }
  },
  "h9": {
    "quote": "möchten wir euch noch zur Teilnahme an einem Wettbewerb auffordern. Die Kunsthalle Bremen bringt in Kürze ein Computerspiel über Malerei heraus und dazu braucht sie eure Hilfe ...",
    "whyCorrect": {
      "de": "Falsch. Es handelt sich um einen Aufruf zur Teilnahme an einem Spieletest-Wettbewerb, nicht um ein Quiz.",
      "fr": "Faux. Il s'agit d'un appel à participer à un concours de testeurs de jeux vidéo et non d'un jeu de quiz.",
      "ar": "خطأ. هذا الإعلان دعوة للمشاركة في مسابقة لتجربة وتقييم لعبة إلكترونية جديدة، وليس مسابقة أسئلة وأجوبة (كويز)."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da kein Quiz gespielt wird, sondern Tester für ein neues Lernspiel gesucht werden.",
      "fr": "« Vrai » est contredit par la nature du message invitant à tester une version bêta d'un jeu.",
      "ar": "«صحيح» غير وارد لأنه لا توجد أسئلة كويز بل دعوة لاختبار لعبة كمبيوتر."
    }
  },
  "h10": {
    "quote": "Diejenigen, die die besten Vorschläge zur Verbesserung des Spiels machen, werden zur feierlichen Eröffnung in die Kunsthalle Bremen eingeladen.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Eingeladen wird, wer „die besten Vorschläge zur Verbesserung des Spiels“ einreicht.",
      "fr": "La réponse b est correcte : Seront invités à la Kunsthalle de Brême ceux qui formuleront « les meilleures propositions pour améliorer le jeu ».",
      "ar": "الخيار b صحيح: توجه الدعوة لحضور الافتتاح الاحتفالي لمن يقدم «أفضل الاقتراحات والنصائح لتطوير اللعبة وتحسينها»."
    },
    "whyIncorrect": {
      "de": "Option a und c sind falsch, da das bloße Ausfüllen oder Schreiben der Meinung nicht reicht; nur die besten Verbesserungsvorschläge gewinnen die Einladung.",
      "fr": "Les options a et c sont insuffisantes : le simple fait de donner son avis ou remplir le formulaire ne suffit pas, il faut fournir les meilleures suggestions d'amélioration.",
      "ar": "الخياران a و c غير صحيحين لأن مجرد إبداء الرأي أو تعبئة الاستبيان لا يكفي للفوز بالدعوة، بل التميز بأفضل مقترحات التحسين."
    }
  },
  "h11": {
    "quote": "Zusammen mit unseren Lehrerinnen und Lehrern haben wir aus den Klassen 8 und 9 diesen Umwelttag für euch vorbereitet.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: Der Schülersprecher erklärt zu Beginn, dass Schüler der Klassen 8 und 9 gemeinsam mit ihren Lehrern den Tag organisiert haben.",
      "fr": "La réponse c est correcte : Le porte-parole des élèves explique d'emblée que les élèves des classes de 8e et 9e ont préparé cet événement conjointement avec leurs professeurs.",
      "ar": "الخيار c صحيح: يوضح ممثل الطلاب في البداية أن طلاب الصفين الثامن والتاسع نظموا يوم البيئة بالتعاون مع المعلمات والمعلمين معاً."
    },
    "whyIncorrect": {
      "de": "Option a und b sind unvollständig, da weder die Lehrer noch die Schüler allein die Vorbereitung übernommen haben, sondern beide gemeinsam.",
      "fr": "Les options a et b sont incomplètes car l'organisation a été menée conjointement par les professeurs et les élèves.",
      "ar": "الخياران a و b غير مكتملين لأن التنظيم لم يكن من قِبل طرف واحد بل بالتعاون المشترك بين المدرسين والطلاب."
    }
  },
  "h12": {
    "quote": "Dazu gehören Bereiche wie Heizung, Stromverbrauch, Mobilität und auch unsere tägliche Ernährung.",
    "whyCorrect": {
      "de": "Lösung a ist richtig: Zu den genannten Schwerpunkten gehören ausdrücklich die Bereiche Heizung und tägliche Ernährung.",
      "fr": "La réponse a est correcte : Parmi les domaines abordés figurent expressément le chauffage (« Heizung ») et l'alimentation quotidienne (« Ernährung »).",
      "ar": "الخيار a صحيح: تتضمن المجالات المذكورة في العرض بوضوح قطاع التدفئة («Heizung») ونظام التغذية اليومية («Ernährung»)."
    },
    "whyIncorrect": {
      "de": "Option b und c nennen Themen, die so nicht in der Aufzählung der Stationen vorkommen oder nur Teilaspekte sind.",
      "fr": "Les options b et c mentionnent des sujets qui ne correspondent pas à la liste des thèmes annoncés par l'élève.",
      "ar": "الخياران b و c يتضمنان مواضيع لم تذكر ضمن قائمة المحاور الرئيسية التي استعرضها الطالب."
    }
  },
  "h13": {
    "quote": "In Deutschland besitzen rund 40 Millionen Menschen ein Auto, das ist fast die Hälfte der Bevölkerung.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: Der Vortragende stellt fest, dass rund 40 Millionen Menschen ein Auto besitzen, was „fast die Hälfte der Bevölkerung“ ausmacht.",
      "fr": "La réponse c est correcte : L'intervenant souligne qu'environ 40 millions d'Allemands possèdent une voiture, soit « près de la moitié de la population ».",
      "ar": "الخيار c صحيح: يذكر المتحدث أن حوالي 40 مليون شخص يمتلكون سيارة في ألمانيا، وهو ما يعادل «ما يقارب نصف عدد السكان»."
    },
    "whyIncorrect": {
      "de": "Option a ist zu vage. Option b ist falsch, da 40 Millionen bei ca. 80 Millionen Einwohnern der Hälfte und nicht einem Drittel entspricht.",
      "fr": "L'option a est trop imprécise. L'option b est erronée car 40 millions sur environ 82 millions d'habitants représentent la moitié et non un tiers.",
      "ar": "الخيار a فضفاض جداً، والخيار b غير صحيح لأن 40 مليوناً يمثلون النصف تقريباً وليس الثلث."
    }
  },
  "h14": {
    "quote": "Packt euer Pausenbrot in eine wiederverwendbare Butterbrotdose statt in Alufolie oder Plastiktüten.",
    "whyCorrect": {
      "de": "Lösung b ist richtig: Die Schüler raten dazu, eine feste, wiederverwendbare Brotdose („Butterbrotdose“) zu verwenden, um Müll zu vermeiden.",
      "fr": "La réponse b est correcte : Les élèves conseillent d'utiliser une boîte à goûter réutilisable (« Butterbrotdose ») pour éviter les emballages jetables.",
      "ar": "الخيار b صحيح: يوصي الطلاب بوضع شطيرة الاستراحة في علبة طعام صلبة قابلة لإعادة الاستخدام («Butterbrotdose») لتجنب النفايات."
    },
    "whyIncorrect": {
      "de": "Option a und c sind falsch, da Plastik- und Alufolien als umweltschädlicher Abfall vermieden werden sollen.",
      "fr": "Les options a et c sont rejetées car le papier jetable et le plastique génèrent des déchets inutiles.",
      "ar": "الخياران a و c غير صحيحين لأن الأوراق والأكياس البلاستيكية تنتج نفايات مضرة بالبيئة."
    }
  },
  "h15": {
    "quote": "Schaltet Computer und Bildschirme nach der Benutzung ganz aus und zieht den Stecker, denn im Standby-Modus wird weiterhin Strom verbraucht.",
    "whyCorrect": {
      "de": "Lösung c ist richtig: Es wird geraten, das Gerät nicht im Standby-Betrieb zu lassen, sondern komplett vom Netz zu trennen („den Stecker ziehen“).",
      "fr": "La réponse c est correcte : Il est recommandé de débrancher complètement l'appareil (« den Stecker ziehen ») plutôt que de le laisser en veille.",
      "ar": "الخيار c صحيح: تنصح التوجيهات بعدم ترك الأجهزة في وضع الاستعداد، بل فصل القابس من الكهرباء تماماً («den Stecker ziehen»)."
    },
    "whyIncorrect": {
      "de": "Option a ist unzureichend. Option b ist falsch, weil der Standby-Betrieb (Wartebetrieb) ausdrücklich vermieden werden soll.",
      "fr": "L'option a est incomplète. L'option b est fausse car le mode veille (« Wartebetrieb ») continue de consommer de l'énergie et doit être évité.",
      "ar": "الخيار a غير كافٍ، والخيار b غير صحيح لأن وضع الاستعداد يستهلك الكهرباء ويجب تجنبه."
    }
  },
  "h16": {
    "quote": "Hallo, Simon! ... Wie geht es denn den Kolleginnen und Kollegen in unserer Buchhandlung?",
    "whyCorrect": {
      "de": "Richtig. Frau Pichler erkundigt sich nach den ehemaligen Kollegen in der Buchhandlung, in der sie tätig war.",
      "fr": "Vrai. Mme Pichler prend des nouvelles de ses anciens collègues de la librairie (« Buchhandlung ») dans laquelle elle travaillait.",
      "ar": "صحيح. تسأل السيدة بيخلر سيمون عن زملائها السابقين في متجر بيع الكتب («Buchhandlung») حيث كانت تعمل."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da ihre frühere Tätigkeit in der Buchhandlung im Dialog eindeutig bestätigt wird.",
      "fr": "« Faux » ne convient pas, sa profession antérieure de libraire étant expressément confirmée dans la conversation.",
      "ar": "«خطأ» غير صحيح لأن عملها السابق في متجر الكتب مؤكد وواضح في الحديث."
    }
  },
  "h17": {
    "quote": "Wie geht es denn den Kolleginnen und Kollegen in unserer Buchhandlung? – Danke, Frau Pichler, alles prima. Wir vermissen Sie aber immer noch.",
    "whyCorrect": {
      "de": "Richtig. Simon und Frau Pichler haben zusammen in derselben Buchhandlung gearbeitet und waren Kollegen.",
      "fr": "Vrai. Simon et Mme Pichler étaient collègues au sein de la même librairie, comme le montrent leurs échanges chaleureux.",
      "ar": "صحيح. كان سيمون والسيدة بيخلر يعملان معاً كزميلين في نفس متجر بيع الكتب."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da Simon bestätigt: „Wir vermissen Sie aber immer noch.“",
      "fr": "« Faux » est réfuté par les propos de Simon attestant qu'ils travaillaient ensemble.",
      "ar": "«خطأ» لا يصح لأن حديثهما المشترك يؤكد أنهما كانا زميلي عمل في المكتبة."
    }
  },
  "h18": {
    "quote": "Ehrlich gesagt war die erste Zeit im Ruhestand furchtbar langweilig, ich hatte zu nichts Lust und hab nur vor dem Fernseher gesessen …",
    "whyCorrect": {
      "de": "Falsch. Frau Pichler war keineswegs froh, sondern empfand die Anfangszeit im Ruhestand als deprimierend und langweilig.",
      "fr": "Faux. Mme Pichler n'était pas heureuse au début de sa retraite : elle s'ennuyait terriblement et ne faisait que regarder la télévision.",
      "ar": "خطأ. لم تكن السيدة بيخلر سعيدة بتقاعدها، بل شعرت في البداية بملل فظيع وفقدان للشغف والجلوس الدائم أمام التلفاز."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, da sie die erste Zeit im Ruhestand als „furchtbar langweilig“ beschreibt.",
      "fr": "« Vrai » est contredit par ses aveux sur l'ennui et le manque de motivation qu'elle a ressentis.",
      "ar": "«صحيح» لا ينطبق لأنها وصفت بداية تقاعدها بالملل الشديد والإحباط."
    }
  },
  "h19": {
    "quote": "Und jeder kann Freunde mitbringen, auch wenn sie nicht im Verein sind.",
    "whyCorrect": {
      "de": "Falsch. Frau Pichler erwähnt ausdrücklich, dass auch Nichtmitglieder und Freunde jederzeit zu den Vereinstreffen mitkommen dürfen.",
      "fr": "Faux. Mme Pichler souligne que les non-membres et invités peuvent assister librement aux rencontres (« jeder kann Freunde mitbringen »).",
      "ar": "خطأ. توضح السيدة بيخلر صراحة أن بإمكان أي شخص اصطحاب أصدقائه لحضور اللقاءات حتى لو لم يكونوا أعضاء في النادي."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da der Verein offen für Gäste und Freunde ist.",
      "fr": "« Vrai » est inexact car l'accès est ouvert aux proches des adhérents.",
      "ar": "«صحيح» غير صحيح لأن اللقاءات مفتوحة للأصدقاء وغير الأعضاء."
    }
  },
  "h20": {
    "quote": "Frau Pichler, ich wollte sowieso diese Tage anrufen und Sie was fragen, gut, dass wir uns hier treffen.",
    "whyCorrect": {
      "de": "Falsch. Simon hatte vor, sie in den nächsten Tagen anzurufen, hat es aber noch nicht getan. Er freut sich daher über die zufällige Begegnung.",
      "fr": "Faux. Simon avait l'intention de l'appeler dans les jours à venir mais ne l'avait pas encore fait ; la rencontre à l'arrêt est fortuite.",
      "ar": "خطأ. كان سيمون ينوي الاتصال بها في الأيام القادمة لكنه لم يتصل بعد، لذلك سعد بلقائها صدفة في المحطة."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da er sie erst noch anrufen wollte („wollte sowieso diese Tage anrufen“) und nicht bereits vergeblich angerufen hatte.",
      "fr": "« Vrai » est inexact car l'appel téléphonique était seulement projeté et non déjà passé.",
      "ar": "«صحيح» غير دقيق لأن الاتصال كان مجرد فكرة يخطط لها ولم يحدث بعد."
    }
  },
  "h21": {
    "quote": "Wir wollen ab nächstem Monat regelmäßig Lesungen und Geschichten-Nachmittage für Kinder bei uns im Laden anbieten.",
    "whyCorrect": {
      "de": "Richtig. Simon erzählt, dass die Buchhandlung ab dem kommenden Monat regelmäßige Lesenachmittage für Kinder veranstalten will.",
      "fr": "Vrai. Simon explique que la librairie prévoit d'organiser régulièrement des après-midis de lecture de contes pour enfants dès le mois prochain.",
      "ar": "صحيح. يوضح سيمون أن متجر الكتب يعتزم تنظيم جلسات قراءة منتظمة وحكايات للأطفال ابتداءً من الشهر القادم."
    },
    "whyIncorrect": {
      "de": "„Falsch“ trifft nicht zu, da die Planung dieser regelmäßigen Veranstaltungen ausdrücklich von Simon bestätigt wird.",
      "fr": "« Faux » ne convient pas, l'initiative étant explicitement détaillée par Simon.",
      "ar": "«خطأ» غير صحيح لأن مشروع الفعاليات المخصصة للأطفال مؤكد تماماً في الحوار."
    }
  },
  "h22": {
    "quote": "Das klingt ja herrlich! Ich liebe es, Kindern vorzulesen. Da mache ich natürlich sehr gerne mit!",
    "whyCorrect": {
      "de": "Falsch. Frau Pichler freut sich riesig über das Angebot und sagt sofort begeistert zu: „Da mache ich natürlich sehr gerne mit!“",
      "fr": "Faux. Mme Pichler est enthousiasmée par la proposition et accepte sans hésiter : « J'adore faire la lecture aux enfants. J'y participerai avec grand plaisir ! »",
      "ar": "خطأ. السيدة بيخلر متحمسة جداً للفكرة وتوافق على الفور قائلة: «هذا رائع! أنا أعشق القراءة للأطفال وسأشارك بكل سرور بالطبع!»."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da sie nicht ablehnt, sondern im Gegenteil mit großer Freude zusagt.",
      "fr": "« Vrai » est totalement erroné, Mme Pichler manifestant un enthousiasme immédiat pour le projet.",
      "ar": "«صحيح» لا ينطبق على الإطلاق لأنها رحبت بالمشاركة بسعادة بالغة."
    }
  },
  "h23": {
    "quote": "E: Die Kindernothilfe setzt sich seit über 50 Jahren für bedürftige Kinder in Afrika, Asien und Lateinamerika ein, also weltweit.",
    "whyCorrect": {
      "de": "Lösung c (Paul Egger): Paul Egger stellt seinen Verein vor und betont den weltweiten Einsatz der Kindernothilfe auf drei Kontinenten.",
      "fr": "La réponse c (Paul Egger) est correcte : Paul Egger présente l'action de son ONG Kindernothilfe qui œuvre pour les enfants défavorisés dans le monde entier.",
      "ar": "الخيار c (باول إيغر) صحيح: يقدم باول إيغر جمعيته موضحاً أنها تعمل لمساعدة الأطفال المحتاجين في شتى أنحاء العالم منذ أكثر من 50 عاماً."
    },
    "whyIncorrect": {
      "de": "Weder die Journalistin noch die Lehrerin haben die Tätigkeitsbereiche der Hilfsorganisation so vorgestellt.",
      "fr": "Cette déclaration émane du responsable de l'association lui-même et non des autres participantes.",
      "ar": "هذه المعلومة صادرة عن ممثل الجمعية نفسه وليست من المذيعة أو المعلمة."
    }
  },
  "h24": {
    "quote": "J: Laut Schätzungen müssen weltweit mehr als 150 Millionen Kinder regelmäßig arbeiten, viele davon unter gefährlichen Bedingungen.",
    "whyCorrect": {
      "de": "Lösung a (Journalistin): Die Journalistin zitiert in ihrer Moderation die weltweiten Zahlen zur Kinderarbeit (über 150 Millionen Kinder).",
      "fr": "La réponse a (La journaliste) est correcte : C'est la journaliste qui introduit le sujet en rappelant les chiffres alarmants du travail forcé des enfants dans le monde.",
      "ar": "الخيار a (الصحفية / المذيعة) صحيح: المذيعة هي من ذكرت هذه الإحصائية الدولية الصادمة عن ملايين الأطفال المجبرين على العمل."
    },
    "whyIncorrect": {
      "de": "Frau Fink und Herr Egger haben diese einleitende statistische Zahl in der Diskussion nicht genannt.",
      "fr": "Mme Fink et M. Egger n'ont pas présenté ces chiffres globaux en début d'émission.",
      "ar": "المعلمة والسيد إيغر لم يطرحا هذا الرقم الإحصائي الشامل في بداية الحوار."
    }
  },
  "h25": {
    "quote": "F: Im Unterricht haben wir uns mit der Herstellung von Fußbällen beschäftigt. Die meisten Fußbälle der Welt werden ja in Pakistan und Indien hergestellt.",
    "whyCorrect": {
      "de": "Lösung b (Eva Fink): Die Lehrerin Eva Fink berichtet aus ihrem Unterricht, dass Fußbälle vor allem in Indien und Pakistan von Hand genäht werden.",
      "fr": "La réponse b (Eva Fink) est correcte : L'institutrice Eva Fink explique dans le cadre de son projet de classe que la majorité des ballons de football sont cousus en Inde et au Pakistan.",
      "ar": "الخيار b (إيفا فينك) صحيح: توضح المعلمة إيفا فينك من واقع تجربتها الصفية أن كرات القدم تصنع وتخاط بأيدي الأطفال والعمال في الهند وباكستان."
    },
    "whyIncorrect": {
      "de": "Diese Information über das Schulprojekt und Indien stammt von der Klassenlehrerin.",
      "fr": "Ce détail fait partie de l'expérience pédagogique racontée par l'enseignante.",
      "ar": "هذه المعلومة جزء من المشروع المدرسي الذي تشرحه المعلمة."
    }
  },
  "h26": {
    "quote": "F: Ich habe meinen Schülern Lederstücke und Nadeln gegeben und gesagt: Versucht doch mal, daraus einen Fußball zu nähen.",
    "whyCorrect": {
      "de": "Lösung b (Eva Fink): Frau Fink beschreibt ihr Experiment im Unterricht, bei dem ihre Schüler selbst versuchen sollten, einen Lederball zusammenzunähen.",
      "fr": "La réponse b (Eva Fink) est correcte : Mme Fink raconte comment elle a demandé à ses propres élèves de tenter de coudre un ballon en cuir en classe.",
      "ar": "الخيار b (إيفا فينك) صحيح: تسرد المعلمة تجربتها عندما وزعت قطع الجلد والإبر على تلاميذها وطلبت منهم تجربة خياطة كرة قدم بأنفسهم."
    },
    "whyIncorrect": {
      "de": "Herr Egger und die Moderatorin haben diese Unterrichtsaufgabe nicht initiiert.",
      "fr": "Cette consigne pédagogique a été conçue et mise en œuvre par l'enseignante.",
      "ar": "هذه المبادرة والنشاط الصفي كانا من ابتكار وتطبيق المعلمة في صفها."
    }
  },
  "h27": {
    "quote": "F: Meine Schüler meinten, sie bräuchten mindestens eine Woche für einen Ball. Die Kinder in Indien müssen allerdings zwei Bälle pro Tag schaffen.",
    "whyCorrect": {
      "de": "Lösung b (Eva Fink): Frau Fink schildert den Kontrast: Während ihre Schüler eine Woche bräuchten, müssen Kinderarbeiter in Indien zwei Bälle täglich fertigstellen.",
      "fr": "La réponse b (Eva Fink) est correcte : C'est Mme Fink qui souligne la cadence imposée aux enfants en Inde (deux ballons par jour) par rapport à ses élèves.",
      "ar": "الخيار b (إيفا فينك) صحيح: المعلمة إيفا فينك هي التي توضح المقارنة الصادمة بأن الأطفال هناك مجبرون على إنهاء خياطة كرتين كل يوم."
    },
    "whyIncorrect": {
      "de": "Diese Gegenüberstellung der Arbeitsleistung stammt von der Lehrerin im Zusammenhang mit dem Schulexperiment.",
      "fr": "Cette comparaison frappante fait partie intégrante du récit de l'enseignante.",
      "ar": "المقارنة وردت على لسان المعلمة أثناء سرد نتائج تجربتها مع تلاميذ الصف."
    }
  },
  "h28": {
    "quote": "E: Diese Aktion war ein großer Erfolg. Das gesammelte Geld, etwa 3.500 Euro, haben die Schüler der Kindernothilfe gespendet.",
    "whyCorrect": {
      "de": "Lösung c (Paul Egger): Herr Egger lobt den Erfolg des Schulbasars und bedankt sich für die Spende von 3.500 Euro an die Kindernothilfe.",
      "fr": "La réponse c (Paul Egger) est correcte : Paul Egger salue le succès éclatant du bazar scolaire qui a permis de récolter 3 500 euros de dons pour son association.",
      "ar": "الخيار c (باول إيغر) صحيح: يمتدح باول إيغر النجاح الباهر للبازار المدرسي وتبرع الطلاب بحوالي 3500 يورو لصالح جمعية إغاثة الأطفال."
    },
    "whyIncorrect": {
      "de": "Herr Egger hebt als Vertreter der Organisation die Wirksamkeit und den finanziellen Erfolg der Spendenaktion hervor.",
      "fr": "M. Egger s'exprime en tant que bénéficiaire de la collecte de fonds pour son ONG.",
      "ar": "السيد إيغر هو من أشاد بالنجاح الكبير للفعالية وحجم التبرع الذي تسلمته جمعيته."
    }
  },
  "h29": {
    "quote": "E: Wer etwas tun möchte, sollte beim Einkaufen bewusst auf Produkte mit dem Fairtrade-Siegel achten, denn da ist Kinderarbeit verboten.",
    "whyCorrect": {
      "de": "Lösung c (Paul Egger): Herr Egger empfiehlt Verbrauchern den gezielten Kauf von Fairtrade-Produkten als konkreten Beitrag gegen ausbeuterische Kinderarbeit.",
      "fr": "La réponse c (Paul Egger) est correcte : M. Egger conseille aux consommateurs de privilégier les articles portant le label Fairtrade pour lutter contre le travail des enfants.",
      "ar": "الخيار c (باول إيغر) صحيح: ينصح باول إيغر المستهلكين بالبحث عن علامة التجارة العادلة «Fairtrade» عند الشراء كإجراء فعّال لمكافحة عمالة الأطفال."
    },
    "whyIncorrect": {
      "de": "Dieser praktische Ratschlag für Konsumenten wurde von Paul Egger als Schlussempfehlung gegeben.",
      "fr": "Cette recommandation citoyenne est formulée par le représentant de l'association.",
      "ar": "هذه النصيحة الاستهلاكية صدرت عن ممثل جمعية إغاثة الأطفال في نهاية حديثه."
    }
  },
  "h30": {
    "quote": "E: Durch unsere Projekte schaffen wir es, dass viele Kinder trotz Teilzeitarbeit nachmittags oder abends eine Schule besuchen und lernen können.",
    "whyCorrect": {
      "de": "Lösung c (Paul Egger): Paul Egger erläutert, dass Bildungsprojekte der Kindernothilfe es ermöglichen, dass manche arbeitende Kinder dennoch die Schule besuchen können.",
      "fr": "La réponse c (Paul Egger) est correcte : Paul Egger explique que les programmes de son ONG permettent à certains enfants de suivre une scolarité malgré le travail.",
      "ar": "الخيار c (باول إيغر) صحيح: يشرح باول إيغر أن مشاريع جمعيته تتيح لبعض الأطفال العاملين الالتحاق بالمدارس والتعلم رغم ظروف عملهم الصعبة."
    },
    "whyIncorrect": {
      "de": "Herr Egger berichtet hier über die konkreten Errungenschaften der Bildungsinitiativen der Hilfsorganisation.",
      "fr": "M. Egger détaille ici les actions menées sur le terrain par l'ONG pour maintenir l'accès à l'école.",
      "ar": "السيد إيغر هو من عرض هذا الإنجاز الخاص بمشاريع التعليم والدعم التابعة لجمعيته."
    }
  }
}
