#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 28 - Explanations Data (Modelltest 22 — Hueber Zertifikat B1)
Complete trilingual pedagogical explanations (de/fr/ar) with authentic quotes
for all 60 questions: 1-30 (Lesen) and h1-h30 (Hören).
Strictly adheres to validate-tests schema: quote, whyCorrect (de/fr/ar), whyIncorrect (de/fr/ar).
"""

explanations = {
  # ==================== LESEN TEIL 1 (1–6) ====================
  "1": {
    "quote": "Doch an einem Samstag schlug meine Tante vor, dass wir abends zum Michelstädter Altstadtfest gehen. Ich machte mir zwar keine große Hoffnung auf gute Unterhaltung, aber da ich nichts Besseres zu tun hatte und das Wetter ausnahmsweise gut war, stimmte ich zu.",
    "whyCorrect": {
      "de": "Falsch. Die Aussage behauptet, man habe sich trotz des schlechten Wetters gut unterhalten. Im Text steht jedoch ausdrücklich, dass das Wetter an diesem Abend ausnahmsweise gut war.",
      "fr": "Faux. L'énoncé affirme qu'on s'est bien amusé malgré le mauvais temps, or le texte indique clairement que le temps était exceptionnellement clément ce soir-là.",
      "ar": "خطأ. تدعي الجملة أن الناس استمتعوا بوقتهم رغم سوء الأحوال الجوية، بينما يوضح النص صراحة أن الطقس كان جيداً على غير العادة في ذلك المساء."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da das Fest nicht bei schlechtem Wetter stattfand, sondern der Regen ausnahmsweise Pause machte.",
      "fr": "« Vrai » est incorrect car la fête n'a pas eu lieu sous la pluie ou le mauvais temps, mais par beau temps exceptionnel.",
      "ar": "«صحيح» غير صائبة لأن المهرجان لم يُقم في طقس سيئ، بل توقف المطر وكان الجو صحواً على غير العادة."
    }
  },
  "2": {
    "quote": "Das Fest fand im Zentrum statt, das für den Verkehr gesperrt war. Wir konnten also nicht mit dem Auto in die Innenstadt fahren und mussten zu Fuß gehen.",
    "whyCorrect": {
      "de": "Richtig. Das Zentrum war für jeglichen Verkehr gesperrt, sodass keine Privatwagen fahren durften und man zu Fuß gehen musste.",
      "fr": "Vrai. Le centre-ville était entièrement fermé à la circulation automobile, interdisant le passage des voitures privées.",
      "ar": "صحيح. كان مركز المدينة مغلقاً بالكامل أمام حركة السير، مما منع دخول السيارات الخاصة واقتضى المشي على الأقدام."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist falsch, da der Text ausdrücklich bestätigt: „für den Verkehr gesperrt“ und „konnten nicht mit dem Auto fahren“.",
      "fr": "« Faux » est erroné car le texte confirme explicitement la fermeture de la zone à la circulation automobile.",
      "ar": "«خطأ» غير صحيحة لأن النص يؤكد بوضوح حظر حركة المرور ومنع قيادة السيارات داخل المركز."
    }
  },
  "3": {
    "quote": "Die Geschäfte waren alle auf, Straßen und Gassen waren mit Kerzen erleuchtet. Es war „lange Einkaufsnacht“.",
    "whyCorrect": {
      "de": "Falsch. Die Aussage behauptet, nur wenige Läden seien geschlossen gewesen. Im Text heißt es aber: „Die Geschäfte waren alle auf“ – es war also kein einziger Laden geschlossen.",
      "fr": "Faux. L'affirmation prétend que seuls quelques magasins étaient fermés. En réalité, tous les magasins étaient ouverts sans exception (« alle auf »).",
      "ar": "خطأ. تزعم العبارة أن محلات قليلة فقط كانت مغلقة، في حين يذكر النص: «كانت المتاجر كلها مفتوحة»، أي لم يُغلق أي متجر على الإطلاق."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, weil die Formulierung „nur wenige Läden geschlossen“ fälschlicherweise voraussetzt, dass überhaupt Geschäfte zu waren.",
      "fr": "« Vrai » est faux car affirmer que « peu de magasins étaient fermés » implique à tort que certains étaient fermés.",
      "ar": "«صحيح» غير ملائمة لأن الادعاء بأن «محلات قليلة فقط كانت مغلقة» يفترض خطأً وجود متاجر مقفلة."
    }
  },
  "4": {
    "quote": "Für das leibliche Wohl war bestens gesorgt: Bratwurst, Currywurst, Pommes, Erbsensuppe mit Bockwurst – und natürlich Bier von der heimischen Brauerei.",
    "whyCorrect": {
      "de": "Falsch. Das Bier stammte von der heimischen Brauerei und es gab zahlreiche Essensstände, aber nirgendwo steht, dass die Speisen umsonst (kostenlos) verteilt wurden.",
      "fr": "Faux. La brasserie locale fournissait de la bière et il y avait une offre variée de plats, mais rien n'était offert gratuitement (« umsonst »).",
      "ar": "خطأ. وفرت مصنعة الجعة المحلية المشروبات وتعددت أكشاك الطعام، لكن النص لم يذكر قط أن الأطباق قُدمت بالمجان («umsonst»)."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da „umsonst“ gratis bedeutet, wofür der Text keinerlei Anhaltspunkte liefert.",
      "fr": "« Vrai » est incorrect car la gratuité des repas n'est absolument pas mentionnée dans le texte.",
      "ar": "«صحيح» خاطئة تماماً لعدم وجود أي إشارة إلى مجانية الوجبات الغذائية في المهرجان."
    }
  },
  "5": {
    "quote": "In der sommerlichen Nacht sah man die Artisten ihre Kunststücke vorführen und man hörte nur das Knistern und Zischen des Feuers.",
    "whyCorrect": {
      "de": "Falsch. Die Artisten traten ohne laute Musik auf; die Zuschauer hörten ausschließlich das Knistern und Zischen der Flammen.",
      "fr": "Faux. Le spectacle de feu s'est déroulé sans musique forte ; on n'entendait que le crépitement et le souffle des flammes.",
      "ar": "خطأ. قدم الفنانون استعراض النار في هدوء وبدون موسيقى صاخبة، حيث كان الصوت الوحيد المسموع هو صوت طقطقة وهسيس النار."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da die Rockband zuvor an der Burg-Kellerei spielte, die Show am Brunnen jedoch nur vom Klang des Feuers begleitet wurde.",
      "fr": "« Vrai » est faux car la musique rock était jouée ailleurs ; le numéro de feu au puits n'avait pas d'accompagnement musical sonore.",
      "ar": "«صحيح» غير صحيحة لأن فرقة الروك كانت تعزف في موقع آخر، بينما عُرضت فقرة النار دون خلفية موسيقية."
    }
  },
  "6": {
    "quote": "Ich werde dieses Fest nie vergessen und kann nur jedem empfehlen: Auch Michelstadt im Odenwald ist eine Reise wert (besonders im August!!)",
    "whyCorrect": {
      "de": "Richtig. Nicole stellt fest, dass Michelstadt eine Reise wert ist, was bedeutet, dass sich ein Besuch auf jeden Fall lohnt.",
      "fr": "Vrai. Nicole affirme que la ville vaut le déplacement (« ist eine Reise wert »), ce qui équivaut à dire que la visite en vaut la peine.",
      "ar": "صحيح. تؤكد نيكول أن ميشيلشتات تستحق السفر إليها وقضاء عطلة فيها («ist eine Reise wert»)، أي أن زيارتها مجدية وممتعة."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da Nicoles Schlussfolgerung eine uneingeschränkte Besuchsempfehlung darstellt.",
      "fr": "« Faux » est incorrect car Nicole conclut son récit par une recommandation chaleureuse à visiter la ville.",
      "ar": "«خطأ» غير صحيحة لأن خاتمة مقال نيكول تتضمن توصية صريحة ومتحمسة بزيارة المدينة."
    }
  },

  # ==================== LESEN TEIL 2 (7–12) ====================
  "7": {
    "quote": "... sind es die Haushalte älterer Bürger, die zu einer stillstehenden Statistik der Online-Haushalte in der Schweiz führen: Laut Bundesamt für Statistik wollen diese 20 Prozent partout nicht online gehen. Damit liegt die Schweiz hinter den skandinavischen Ländern...",
    "whyCorrect": {
      "de": "Richtig ist b: „wie sich die Zahl der Online-Haushalte in der Schweiz entwickelt.“ Der Artikel analysiert das Stagnieren der Online-Zahlen und vergleicht die Quote mit anderen Ländern.",
      "fr": "La bonne réponse est b : « l'évolution du nombre de foyers connectés en Suisse ». L'article étudie la stagnation des chiffres et les compare à l'international.",
      "ar": "الإجابة الصحيحة هي b: «كيف يتطور عدد الأسر المتصلة بالإنترنت في سويسرا». يحلل المقال أسباب ركود نسبة الأسر المتصلة ومقارنتها بدول أخرى."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da Online-Spiele nicht das Hauptthema sind; c ist falsch, weil Kinderschutzprogramme nur ein Nebenaspekt am Rande sind.",
      "fr": "a est faux (les jeux en ligne ne sont pas le sujet) ; c est faux (la protection des mineurs n'est qu'un détail secondaire).",
      "ar": "الخيار a خاطئ لأن الألعاب ليست الموضوع الأساسي؛ والخيار c خاطئ لأن حماية الأطفال مجرد نقطة ثانوية."
    }
  },
  "8": {
    "quote": "Bei einer Befragung wurden mangelndes Interesse, wenig Fachkenntnis oder kein Selbstvertrauen von den älteren Menschen angegeben.",
    "whyCorrect": {
      "de": "Richtig ist a: „haben selten Computerkenntnisse.“ Der Text nennt explizit „wenig Fachkenntnis“ als einen der Hauptgründe der Senioren.",
      "fr": "La bonne réponse est a : « ont rarement des compétences informatiques ». Le texte cite expressément le manque de connaissances techniques (« wenig Fachkenntnis »).",
      "ar": "الإجابة الصحيحة هي a: «نادراً ما يمتلكون مهارات بالكمبيوتر». يذكر النص بصراحة «wenig Fachkenntnis» (قلة المعرفة المتخصصة) كسبب رئيسي لدى المسنين."
    },
    "whyIncorrect": {
      "de": "b und c treffen auf jüngere Internetnutzer zu, nicht auf die Senioren, die gar nicht erst online gehen wollen.",
      "fr": "b et c concernent les internautes plus jeunes qui craignent les virus, non les seniors qui refusent d'aller en ligne.",
      "ar": "الخياران b و c ينطبقان على فئة الشباب الذين يخشون الفيروسات، وليس على كبار السن الممتنعين عن استخدام الشبكة."
    }
  },
  "9": {
    "quote": "Damit liegt die Schweiz hinter den skandinavischen Ländern und den Niederlanden, wo insgesamt mehr private Haushalte Internet haben als bei uns.",
    "whyCorrect": {
      "de": "Richtig ist b: „haben mehr Haushalte Internet als in der Schweiz.“ Der Text sagt wörtlich, dass in den Niederlanden mehr Privathaushalte über Internet verfügen als in der Schweiz.",
      "fr": "La bonne réponse est b : « ont plus de ménages connectés qu'en Suisse ». Le texte l'indique noir sur blanc pour les Pays-Bas et les pays scandinaves.",
      "ar": "الإجابة الصحيحة هي b: «تمتلك أسرٌ أكثر إنترنت مقارنة بسويسرا». يشير النص حرفياً إلى تقدم هولندا في نسبة انتشار الإنترنت المنزلي مقارنة بسويسرا."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da über spezifische Probleme der Niederlande nichts berichtet wird; c ist eine freie Erfindung ohne Textbezug.",
      "fr": "a est faux car rien n'indique des problèmes similaires aux Pays-Bas ; c est une invention sans fondement textuel.",
      "ar": "الخيار a غير صحيح لعدم ذكر مشكلات مطابقة بهولندا؛ والخيار c ادعاء لا أصل له في المقال."
    }
  },
  "10": {
    "quote": "Stark im Trend liegt zurzeit Functional-Food. Das ist Essen, das nicht nur satt macht, sondern auch für die Gesundheit sorgt... Gesundheit ist für viele Menschen zum höchsten Gut geworden.",
    "whyCorrect": {
      "de": "Richtig ist c: „warum Functional-Food beliebt ist.“ Der Text erläutert das wachsende Gesundheitsbewusstsein und das Streben nach Wohlbefinden, das diesen Trend antreibt.",
      "fr": "La bonne réponse est c : « pourquoi les aliments fonctionnels sont populaires ». L'article explique l'intérêt croissant pour la santé et le bien-être.",
      "ar": "الإجابة الصحيحة هي c: «لماذا تحظى الأغذية الوظيفية بشعبية كبيرة». يوضح المقال دوافع الإقبال عليها وعلاقتها بالوعي الصحي المعاصر."
    },
    "whyIncorrect": {
      "de": "a ist falsch, weil die medizinische Wirkung wissenschaftlich umstritten ist; b ist falsch, da Zivilisationskrankheiten nur als Sorge erwähnt werden.",
      "fr": "a est faux car l'effet curatif est contesté scientifiquement ; b est faux car l'origine des maladies modernes n'est pas le propos.",
      "ar": "الخيار a خاطئ لكون علاج الأمراض غير مثبت علمياً؛ والخيار b خاطئ لأن نشأة أمراض العصر ليست جوهر المقال."
    }
  },
  "11": {
    "quote": "Und es entspricht einem allgemeinen Trend in der Bevölkerung: Gesundheit ist für viele Menschen zum höchsten Gut geworden.",
    "whyCorrect": {
      "de": "Richtig ist b: „ist für immer mehr Menschen das Wichtigste.“ Der Ausdruck „zum höchsten Gut geworden“ bedeutet, dass Gesundheit an oberster Stelle steht.",
      "fr": "La bonne réponse est b : « est la chose primordiale pour de plus en plus de gens ». L'expression « zum höchsten Gut geworden » signifie le bien le plus précieux.",
      "ar": "الإجابة الصحيحة هي b: «أصبحت أهم شيء للمزيد من الناس». عبارة «zum höchsten Gut geworden» تعني أنها غدت أثمن ما يملكه الإنسان."
    },
    "whyIncorrect": {
      "de": "a steht im krassen Widerspruch zum beschriebenen Trend; c ist falsch, da der Kauf von Functional-Food freiwillig erfolgt.",
      "fr": "a contredit formellement la tendance générale ; c est inexact car la consommation résulte d'un choix volontaire et non d'une contrainte.",
      "ar": "الخيار a يناقض تماماً واقع التوجه السائد؛ والخيار c غير سليم لأن تناول هذه الأطعمة خيار شخصي وليس إجبارياً."
    }
  },
  "12": {
    "quote": "Stark im Trend liegt zurzeit Functional-Food. Das ist Essen, das nicht nur satt macht, sondern auch für die Gesundheit sorgt.",
    "whyCorrect": {
      "de": "Richtig ist a: „ist in.“ Der deutsche Ausdruck „im Trend liegen“ ist bedeutungsgleich mit der Wendung „in sein“ (modisch und sehr gefragt sein).",
      "fr": "La bonne réponse est a : « est très tendance / in ». L'expression « im Trend liegen » est synonyme de « in sein ».",
      "ar": "الإجابة الصحيحة هي a: «شائع ومطلوب وعلى الموضة («in»)». التعبير الألماني «im Trend liegen» يطابق تماماً معنى كلمة «in sein»."
    },
    "whyIncorrect": {
      "de": "b verallgemeinert zu stark (die Wirkung ist umstritten, aber nicht generell ungesund); c ist falsch, da Functional-Food mit massivem Werbeaufwand beworben wird.",
      "fr": "b est inexact (les vertus sont débattues mais non néfastes) ; c est faux car la publicité est omniprésente dans ce secteur.",
      "ar": "الخيار b فيه تعميم جائر، والخيار c خاطئ تماماً لأن الشركات ترصد حملات إعلانية ضخمة لتسويق هذا الغذاء."
    }
  },

  # ==================== LESEN TEIL 3 (13–19) ====================
  "13": {
    "quote": "KEKS e.V. Sommerrainstr. 61, 70347 Stuttgart. Wenn jeder Bissen im Hals stecken bleibt … Wir helfen und unterstützen bundesweit Kinder, die wegen einer kranken Speiseröhre nicht essen können. Spendenkonto: Baden-Württembergische Bank...",
    "whyCorrect": {
      "de": "Richtig ist i. Frau Wickert möchte Geld für kranke Kinder in Deutschland spenden. KEKS e.V. hilft bundesweit betroffenen Kindern und gibt ein Spendenkonto an.",
      "fr": "L'annonce i correspond à la situation. Mme Wickert désire donner de l'argent pour des enfants malades en Allemagne ; l'association KEKS e.V. fournit son compte bancaire.",
      "ar": "الإعلان i هو الأنسب. تريد السيدة فيكرت التبرع لجمعية تعنى بالأطفال المرضى بألمانيا، وجمعية KEKS تدعم الأطفال وتضع رقم حساب للتبرعات."
    },
    "whyIncorrect": {
      "de": "Andere Anzeigen bieten ehrenamtliche Mitarbeit an oder richten sich an weltweite Hilfseinsätze (wie Ärzte ohne Grenzen), nicht speziell an Kinder in Deutschland.",
      "fr": "D'autres annonces ciblent l'action internationale (Médecins Sans Frontières) ou le bénévolat sans lien direct avec les enfants en Allemagne.",
      "ar": "الإعلانات الأخرى تطلب متطوعين بالجهد أو موجهة لإغاثة دولية عامة (كأطباء بلا حدود) وليست مخصصة للأطفال داخل ألمانيا."
    }
  },
  "14": {
    "quote": "Du bist gerne in der Natur und möchtest dich für ihren Schutz einsetzen? Dann bist du bei der NAJU genau richtig! Werde zusammen mit 75.000 anderen Kindern und Jugendlichen aktiv für die Natur! ... Die Naturschutzjugend (NAJU) ist die Jugendorganisation des NABU...",
    "whyCorrect": {
      "de": "Richtig ist c. Biologielehrer Geiger sucht nach Angeboten für seine Schüler. Die Naturschutzjugend (NAJU) ist speziell für Kinder und Jugendliche gedacht.",
      "fr": "L'annonce c correspond au souhait de M. Geiger, enseignant de biologie voulant motiver ses élèves par le biais d'un club de jeunesse dédié à la nature.",
      "ar": "الإعلان c يطابق غاية أستاذ الأحياء غايغر لتحفيز تلاميذه، حيث تشكل NAJU منظمة شبابية مخصصة للأطفال والناشئة في مجال البيئة."
    },
    "whyIncorrect": {
      "de": "Anzeige f bietet lediglich Geschenkgutscheine für Einzelpersonen an; Anzeige h wendet sich ausschließlich an Eltern mit Säuglingen.",
      "fr": "L'annonce f ne concerne qu'un cadeau d'adhésion individuel ; l'annonce h cible les jeunes parents avec bébés.",
      "ar": "الإعلان f يقتصر على إهداء اشتراك لشخص واحد، والإعلان h موجه لأولياء أمور الأطفال الرضع فقط."
    }
  },
  "15": {
    "quote": "Verschenken Sie eine Mitgliedschaft im NABU! ... und gleichzeitig damit etwas Gutes für den Erhalt und Schutz unserer Natur und Umwelt tun? Ihr Geschenk soll sinnstiftend und etwas „anders“ als andere Geschenke sein?",
    "whyCorrect": {
      "de": "Richtig ist f. Lukas sucht ein Geburtstagsgeschenk für Tobias, der Naturfreund ist. Anzeige f schlägt vor, eine Mitgliedschaft im NABU als Geschenk zu erwerben.",
      "fr": "L'annonce f correspond à la recherche de Lukas : offrir en cadeau d'anniversaire une adhésion solidaire à la ligue de protection de la nature (NABU).",
      "ar": "الإعلان f هو الحل الأمثل لبحث لوكاس عن هدية لصديقه توبياس، حيث يدعو الإعلان إلى إهداء اشتراك عضوية في منظمة NABU."
    },
    "whyIncorrect": {
      "de": "Anzeige c ist für Kinder/Jugendliche zum Selbstmitmachen, keine Geschenkidee; Anzeige d betrifft Kleiderspenden.",
      "fr": "L'annonce c est destinée à l'engagement personnel des jeunes, non à un cadeau d'anniversaire.",
      "ar": "الإعلان c يخص المشاركة الشخصية للشباب وليس شراء هدية، والإعلان d خاص بالملابس المستعملة."
    }
  },
  "16": {
    "quote": "Bürgerinitiative Ausländische Mitbürgerinnen e.V. Kommen Sie doch einfach mal vorbei! Wir setzen uns für Dialog und das friedliche Zusammenleben von Menschen aus verschiedenen Ländern ein.",
    "whyCorrect": {
      "de": "Richtig ist e. Sara will sich für das Zusammenleben mit ausländischen Nachbarn engagieren. Die Bürgerinitiative fördert genau dieses friedliche Miteinander.",
      "fr": "L'annonce e répond parfaitement à l'objectif de Sara de s'investir activement dans le vivre-ensemble et l'amitié entre communautés culturelles.",
      "ar": "الإعلان e يلبي تماماً رغبة سارة في العمل من أجل التعايش السلمي والتآخي بين المواطنين والمقيمين من مختلف الجنسيات."
    },
    "whyIncorrect": {
      "de": "Anzeige j bietet allgemeine Nachbarschaftshilfe für Senioren ohne interkulturellen Fokus; Anzeige a sucht Helfer für Caritas-Dienste.",
      "fr": "L'annonce j porte sur l'aide de voisinage générique (courses pour seniors) sans dimension interculturelle.",
      "ar": "الإعلان j يركز على تقديم العون المنزلي العادي للمسنين وليس على الاندماج والتعايش بين الثقافات."
    }
  },
  "17": {
    "quote": "Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
    "whyCorrect": {
      "de": "Richtig ist 0. Frau Anders möchte armen jungen Familien helfen. Keine der vorhandenen Anzeigen bietet konkrete finanzielle oder soziale Hilfen für bedürftige Familien an.",
      "fr": "La bonne réponse est 0. Mme Anders cherche à soutenir des familles précaires ; aucune annonce ne propose une telle assistance sociale ciblée.",
      "ar": "الإجابة الصحيحة هي 0. تبحث السيدة أندرس عن دعم الأسر الشابة المحتاجة، ولا يتضمن أي إعلان مساعدة اجتماعية موجهة للأسر الفقيرة."
    },
    "whyIncorrect": {
      "de": "Anzeige h richtet sich zwar an junge Familien, bietet aber lediglich ökologische Ratgeber und kostenlose Mitgliedschaft im Naturschutzbund, keine Armutshilfe.",
      "fr": "L'annonce h s'adresse aux jeunes familles mais propose des conseils verts et une adhésion écologique d'essai, et non une aide sociale.",
      "ar": "الإعلان h موجه للأسر الجديدة لكنه يقدم نصائح بيئية وعضوية شرفية لحماية الطبيعة، وليس إعانة للفقراء."
    }
  },
  "18": {
    "quote": "Helfende Hände herzlich willkommen ... Sie wollen Ihre Erfahrung aus dem Beruf an einen Schüler weitergeben? Dann sind Sie unser Typ: Bringen Sie Ihre Talente ein in das Angebot der Caritas. Viele alte und junge, kranke und behinderte Menschen freuen sich...",
    "whyCorrect": {
      "de": "Richtig ist a. Philipp ist Krankenpfleger und will behinderten Menschen helfen. Anzeige a der Caritas sucht qualifizierte Helfer für kranke und behinderte Mitmenschen.",
      "fr": "L'annonce a convient à Philipp : la Caritas recherche des volontaires qualifiés pour accompagner des personnes malades ou en situation de handicap.",
      "ar": "الإعلان a يطابق رغبة فيليب الممرض في تسخير كفاءته التمريضية لمساعدة ذوي الإعاقة ضمن برامج منظمة كاريتاس."
    },
    "whyIncorrect": {
      "de": "Anzeige g ist ein kommerzieller Pflegedienst für Kunden, kein Ehrenamt; Anzeige b betrifft humanitäre Auslandseinsätze.",
      "fr": "L'annonce g est une entreprise payante de soins à domicile pour des clients et non du bénévolat social.",
      "ar": "الإعلان g يمثل خدمة رعاية منزلية تجارية مدفوعة للزبائن وليس فرصة للتطوع الإنساني المجاني."
    }
  },
  "19": {
    "quote": "Ihr Baby ist uns nicht schnuppe! Deshalb gibt's für junge Familien unsere Schnuppermitgliedschaft. Ein Jahr kostenlos. Wenn Sie uns diese Anzeige schicken, erfahren Sie mehr und bekommen gratis Umwelttipps für Eltern. Bund für Umwelt und Naturschutz Deutschland...",
    "whyCorrect": {
      "de": "Richtig ist h. Gabriel ist junger Vater und will sein Kind umweltbewusst erziehen. Anzeige h des BUND bietet kostenlose Umwelttipps speziell für Eltern mit Kleinkindern.",
      "fr": "L'annonce h du BUND répond exactement au profil de Gabriel : adhésion d'essai et conseils écologiques pratiques destinés aux parents de nouveau-nés.",
      "ar": "الإعلان h مناسب تماماً لغابرييل، حيث تمنح جمعية BUND نصائح بيئية مجانية وعضوية تجريبية للآباء الجدد لتنشئة أطفالهم."
    },
    "whyIncorrect": {
      "de": "Anzeige c ist für Jugendliche ab Schulalter; Anzeige f dient als Geschenk für Erwachsene.",
      "fr": "L'annonce c concerne les adolescents d'âge scolaire, et non l'éveil écologique des bébés.",
      "ar": "الإعلان c يستهدف الفتيان واليافعين في سن المدرسة، وليس الأطفال الرضع وحديثي الولادة."
    }
  },

  # ==================== LESEN TEIL 4 (20–26) ====================
  "20": {
    "quote": "Da gibt es grundsätzlich ein Problem: Die Universitäten sind auf einmal verantwortlich für Minderjährige! Stellt die Uni dann „Aufpasser“ ein, die immer bei diesen Jugendlichen sind und auf sie aufpassen? Das ist doch verrückt! ... Kommt mir alles sehr utopisch vor.",
    "whyCorrect": {
      "de": "Nein. Petra hält die universitäre Aufsichtspflicht über Minderjährige für völlig verrückt und utopisch und lehnt das Vorhaben entschieden ab.",
      "fr": "Non. Petra juge insensée la prise en charge de mineurs par l'université et qualifie ce projet d'utopie dangereuse.",
      "ar": "لا (Nein). تعارض بترا الفكرة بقوة وتعتبر تحمل الجامعات لمسؤولية ورعاية قاصرين أمراً جنونياً وغير قابل للتطبيق."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da Petra keine Vorteile sieht, sondern organisatorische und rechtliche Bedenken äußert.",
      "fr": "« Oui » est erroné, ses propos exprimant un rejet catégorique et sans nuance de la mesure.",
      "ar": "«نعم» غير صحيحة لأن بترا تبدي اعتراضاً صريحاً وتصف المبادرة بالجنون والمستحيل."
    }
  },
  "21": {
    "quote": "Besonders umständlich ist auch, dass ich mich nicht über das Online-System der Uni für Prüfungen anmelden kann. Stattdessen muss ich persönlich bei der Professorin vorbeigehen. Trotzdem lohnt es sich.",
    "whyCorrect": {
      "de": "Ja. Willi studiert bereits als Minderjähriger und stellt trotz aller formalen Hürden klar fest: „Trotzdem lohnt es sich.“",
      "fr": "Oui. Willi, lui-même étudiant mineur, surmonte les tracasseries administratives et affirme que cela en vaut pleinement la peine.",
      "ar": "نعم (Ja). يؤيد فيلي الفكرة لكونه طالباً قاصراً في الجامعة، ويؤكد رغم المتاعب الإدارية أن الأمر يستحق العناء تماماً."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist falsch, weil sein Fazit eindeutig positiv ausfällt.",
      "fr": "« Non » est incorrect car sa conclusion finale est résolument enthousiaste et favorable.",
      "ar": "«لا» غير صائبة لأن خلاصة كلامه إيجابية ومؤيدة لمواصلة التجربة."
    }
  },
  "22": {
    "quote": "Die wichtigsten Erfahrungen macht man doch in der Praxis. Viel richtiger wäre, dass alle jungen Leute in ihrem Leben etwas Konkretes lernen, auch bevor sie studieren. Die Praxis wird sie im Leben weiterbringen, nicht die Theorie... Es bringt nichts, dass sie nur studieren. Dieses Programm ist diesem Gedanken ganz entgegengesetzt.",
    "whyCorrect": {
      "de": "Nein. Torsten plädiert für praktische Arbeitserfahrung vor der Theorie und sieht im Frühstudium den falschen Weg.",
      "fr": "Non. Torsten privilégie l'apprentissage concret par la pratique avant les études et rejette le programme d'études précoces.",
      "ar": "لا (Nein). يعارض تورستن ذلك مؤكداً أن الخبرة العملية أهم بكثير من الدراسة النظرية المبكرة."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist unzutreffend, da Torsten das Programm als dem eigentlichen Lebensbedarf entgegengesetzt bezeichnet.",
      "fr": "« Oui » est faux, Torsten jugeant le dispositif inadapté aux véritables nécessités de la jeunesse.",
      "ar": "«نعم» غير صحيحة لأن تورستن ينتقد البرنامج ويعتبره مضيعة للوقت بعيداً عن الواقع العملي."
    }
  },
  "23": {
    "quote": "Ich kann mir aber vorstellen, dass es besonders für begabte Schüler ein gutes Angebot ist. Diese jungen Leute werden in der Schule sowieso unterfordert und müssen sich kaum anstrengen... Warum dann bis zur Matura mit dem Studium warten?",
    "whyCorrect": {
      "de": "Ja. Chiara befürwortet das Frühstudium für begabte Schüler, um ihnen intellektuelle Herausforderungen zu bieten.",
      "fr": "Oui. Chiara approuve sans réserve pour éviter l'ennui des élèves précoces et répondre à leurs besoins intellectuels.",
      "ar": "نعم (Ja). تؤيد كيارا الخطوة بشدة لمنح المتفوقين تحديات علمية تتناسب مع قدراتهم العالية."
    },
    "whyIncorrect": {
      "de": "„Nein“ widerspricht Chiaras Feststellung, dass unsere Gesellschaft solche geförderten Talente dringend brauche.",
      "fr": "« Non » contredirait son plaidoyer clair en faveur du plein épanouissement des jeunes talents.",
      "ar": "«لا» تناقض موقف كيارا الداعم بقوة لتشجيع العقول النابغة قبل إنهاء المدرسة."
    }
  },
  "24": {
    "quote": "Mit 16 oder 17 sind die Jugendlichen ja noch in der Pubertät... In dem Alter ist man doch noch gar nicht reif für ein Studium. Ich kann nicht glauben, dass so junge Menschen schon ernsthaft dabei sind. Nicht umsonst sollte man dafür erwachsen sein.",
    "whyCorrect": {
      "de": "Nein. Reiner hält Schüler unter 18 für unreif und unfähig zu einem ernsthaften Studium.",
      "fr": "Non. Reiner estime les adolescents de cet âge immatures et inaptes à suivre sérieusement un cursus universitaire.",
      "ar": "لا (Nein). يرفض راينر الفكرة لكون المراهقين في سن 16 أو 17 عاماً غير ناضجين لتحمل مسؤولية الجامعة."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da Reiner ausdrücklich betont, dass man für die Universität zwingend erwachsen sein sollte.",
      "fr": "« Oui » est erroné, Reiner insistant sur la nécessité d'avoir atteint l'âge adulte pour étudier.",
      "ar": "«نعم» خاطئة لكون راينر يشدد على ضرورة بلوغ سن الرشد قبل الالتحاق بالجامعة."
    }
  },
  "25": {
    "quote": "Wenn diese Erfahrung nun schon zeitlich früher im Leben gemacht wird, umso besser.",
    "whyCorrect": {
      "de": "Ja. Helen schätzte ihre eigene Studienzeit sehr und begrüßt es ausdrücklich („umso besser“), wenn Jugendliche diese Chance schon früher erhalten.",
      "fr": "Oui. Helen garde un souvenir marquant de ses études et se félicite qu'on puisse vivre cette émulation intellectuelle plus tôt.",
      "ar": "نعم (Ja). ترحب هيلين بالفكرة وترى أن خوض هذه التجربة الثرية في وقت مبكر من العمر أمر ممتاز ومفيد."
    },
    "whyIncorrect": {
      "de": "„Nein“ widerspricht Helens eindeutiger Befürwortung der frühen Horizonterweiterung.",
      "fr": "« Non » est contredit par sa conviction que l'expérience universitaire précoce élargit utilement l'horizon.",
      "ar": "«لا» تناقض تأكيد هيلين على أن التجربة المبكرة تحفز الطلاب وتوسع مداركهم."
    }
  },
  "26": {
    "quote": "Hier in der Nähe gibt es das nicht. Scheint mir aber wert zu sein, es mal zu testen. Ich weiss nur nicht, wie man dann nebenbei noch die Verpflichtungen des Gymnasiums zeitlich schafft.",
    "whyCorrect": {
      "de": "Ja. Ferdinand hält das Frühstudium für absolut testenswert, auch wenn er organisatorische Fragen zur Zeiteinteilung aufwirft.",
      "fr": "Oui. Ferdinand juge que l'initiative mérite d'être tentée (« wert zu sein, es mal zu testen »), malgré ses interrogations d'emploi du temps.",
      "ar": "نعم (Ja). يرى فرديناند أن الفكرة جديرة بالتجربة والاختبار الفعلي، مع تساؤله فقط عن كيفية تنظيم الوقت مع المدرسة."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist unzutreffend, da seine Zeitfragen kein prinzipielles Dagegensein bedeuten.",
      "fr": "« Non » est erroné, ses doutes pratiques ne remettant pas en cause son approbation globale.",
      "ar": "«لا» غير دقيقة لأن استفساراته عن المواعيد لا تعني رفضه للمبدأ بحد ذاته."
    }
  },

  # ==================== LESEN TEIL 5 (27–30) ====================
  "27": {
    "quote": "Ausgeliehene Artikel können reserviert werden. Sobald die reservierten Artikel bereitstehen, wird dies telefonisch oder per SMS mitgeteilt. Die Artikel sind dann innerhalb einer Woche abzuholen. Für Reservationen wird eine Gebühr erhoben.",
    "whyCorrect": {
      "de": "Richtig ist c: „muss man dafür einen Geldbetrag zahlen.“ Der Text hält unmissverständlich fest: „Für Reservationen wird eine Gebühr erhoben.“",
      "fr": "La bonne réponse est c : « on doit payer une somme d'argent ». Le texte énonce : « Für Reservationen wird eine Gebühr erhoben ».",
      "ar": "الإجابة الصحيحة هي c: «يجب دفع مبلغ مالي مقابل ذلك». ينص النظام صراحة على فرض رسوم مالية على عمليات الحجز."
    },
    "whyIncorrect": {
      "de": "a ist falsch, weil die Wochenfrist erst ab Benachrichtigung über die Bereitstellung gilt, nicht ab Reservierung; b betrifft die Fernleihe, nicht die reguläre Reservierung.",
      "fr": "a est inexact (le délai d'une semaine court à partir de la mise à disposition) ; b confond réservation et prêt inter-bibliothèques.",
      "ar": "الخيار a غير صحيح لأن مهلة الأسبوع تبدأ بعد تجهيز المواد، والخيار b يخلط بين الحجز وطلب المواد من فروع أخرى."
    }
  },
  "28": {
    "quote": "Wer die Bestimmungen der Bibliothek nicht beachtet oder sich ungebührlich verhält, kann vorübergehend oder gänzlich von der Benutzung ausgeschlossen werden.",
    "whyCorrect": {
      "de": "Richtig ist b: „kann es sein, dass man die PBZ nicht mehr benutzen darf.“ Der Text sieht bei Verstößen den vorübergehenden oder dauerhaften Ausschluss vor.",
      "fr": "La bonne réponse est b : « on risque de ne plus pouvoir utiliser la bibliothèque ». L'usager peut être suspendu ou exclu définitivement.",
      "ar": "الإجابة الصحيحة هي b: «قد يُمنع الشخص من استخدام المكتبة». تنص اللائحة على إمكانية الحرمان المؤقت أو النهائي للمخالفين."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da Gebühren nur für Beschädigungen/Verluste verrechnet werden; c ist keine vorgesehene Regel für diesen Fall.",
      "fr": "a est faux (des frais s'appliquent en cas de dégradation matérielle) ; c n'est pas stipulé sous cette forme.",
      "ar": "الخيار a يخص تكاليف إتلاف أو فقدان المواد، والخيار c لم يرد كإجراء عقابي محدد."
    }
  },
  "29": {
    "quote": "Ausgeliehene Artikel können reserviert werden... Ebenso können gegen Gebühr Artikel, die nicht im lokalen Bestand vorhanden sind, bei einer anderen Bibliothek der PBZ zur Ausleihe besorgt werden, mit Ausnahme von DVDs.",
    "whyCorrect": {
      "de": "Richtig ist a: „auch DVDs reservieren lassen.“ Grundsätzlich können alle entliehenen Medien reserviert werden. Die Ausnahme bei DVDs betrifft nur die Bestellung aus anderen Zweigstellen.",
      "fr": "La bonne réponse est a : « faire aussi réserver des DVD ». Tout média emprunté peut être réservé ; l'exclusion ne vise que l'acheminement inter-sites.",
      "ar": "الإجابة الصحيحة هي a: «حجز أقراص DVD أيضاً». فالحجز متاح لجميع المواد المعارة، والاستثناء الوارد يخص النقل من مكتبات أخرى فقط."
    },
    "whyIncorrect": {
      "de": "b ist falsch, da 25 Artikel gleichzeitig (nicht monatlich) ausgeliehen werden dürfen; c ist falsch, weil reservierte Artikel von der Verlängerung ausgenommen sind.",
      "fr": "b est faux (25 articles en simultané, pas par mois) ; c est faux (les articles réservés ne peuvent être prolongés).",
      "ar": "الخيار b خاطئ لأن الحد هو 25 مادة في وقت واحد، والخيار c خاطئ لأن المواد المحجوزة لا تقبل التمديد إطلاقاً."
    }
  },
  "30": {
    "quote": "Gegen Vorlage eines amtlichen Ausweises wird eine persönliche Bibliothekskarte ausgestellt, die bei jeder Ausleihe mitzubringen ist.",
    "whyCorrect": {
      "de": "Richtig ist b: „muss man jedes Mal die Bibliothekskarte bei sich haben.“ Die Karte ist bei jedem einzelnen Ausleihvorgang zwingend vorzuweisen.",
      "fr": "La bonne réponse est b : « avoir sa carte sur soi à chaque fois ». L'usager doit impérativement présenter sa carte personnelle lors de chaque prêt.",
      "ar": "الإجابة الصحيحة هي b: «إحضار بطاقة المكتبة في كل مرة استعارة». تشترط اللائحة إبراز البطاقة في كل عملية إعارة دون استثناء."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da die PBZ allen Interessierten offensteht; c ist falsch, da die Karte persönlich und nicht übertragbar ist.",
      "fr": "a est faux (l'accès est ouvert à tous) ; c est faux (la carte est strictement nominative et non familiale).",
      "ar": "الخيار a غير صحيح لأن المكتبة مفتوحة للجميع، والخيار c خاطئ لكون البطاقة شخصية ولا تُشارك مع أفراد العائلة."
    }
  },

  # ==================== HÖREN TEIL 1 (h1–h10) ====================
  "h1": {
    "quote": "Auf der A1 Richtung Hamburg ein Kilometer Stau wegen dichten Nebels. Autofahrer werden gebeten, den Wetterverhältnissen entsprechend vorsichtig zu fahren. Die Ausfahrt Hamburg-Harburg ist wegen Bauarbeiten gesperrt.",
    "whyCorrect": {
      "de": "Falsch. Die Meldung berichtet von Stau wegen dichten Nebels und einer Sperrung wegen Bauarbeiten. Ein Unfall ist nicht passiert.",
      "fr": "Faux. L'embouteillage est causé par un brouillard dense et des travaux de voirie, sans aucun accident de circulation.",
      "ar": "خطأ. ينجم الازدحام عن الضباب الكثيف وأعمال الصيانة في المخرج، ولم يقع أي حادث سير على الطريق."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da weder ein Unfall noch verletzte Personen gemeldet werden.",
      "fr": "« Vrai » est erroné car l'annonce radio ne fait état d'aucun accident.",
      "ar": "«صحيح» غير مطابقة لأن الإذاعة لم تذكر وقوع أي حادث إطلاقاً."
    }
  },
  "h2": {
    "quote": "Auf der A1 Richtung Hamburg ein Kilometer Stau wegen dichten Nebels.",
    "whyCorrect": {
      "de": "Richtig ist a: „Weil das Wetter schlecht ist.“ Die ausdrücklich genannte Ursache für den Stau ist dichter Nebel (schlechtes Wetter).",
      "fr": "La bonne réponse est a : « Parce que la météo est mauvaise ». Le bouchon est expressément imputé au brouillard intense.",
      "ar": "الإجابة الصحيحة هي a: «بسبب سوء الأحوال الجوية». السبب المعلن للازدحام هو الضباب الكثيف (سوء الطقس)."
    },
    "whyIncorrect": {
      "de": "b und c betreffen die gesperrte Ausfahrt Hamburg-Harburg, sind aber nicht der Grund für den Stau auf der Fahrbahn.",
      "fr": "b et c concernent la fermeture de la sortie Harburg mais n'expliquent pas le bouchon principal sur l'autoroute.",
      "ar": "الخياران b و c يفسران إغلاق مخرج هاربورغ فقط، وليسا سبب الازدحام المباشر على الطريق."
    }
  },
  "h3": {
    "quote": "Die Berlinische Galerie ist das Landesmuseum für Moderne Kunst, Fotografie und Architektur. Wir präsentieren Ihnen zurzeit und bis zum Jahresende „Kunst in Berlin von 1880 bis 1980“.",
    "whyCorrect": {
      "de": "Falsch. Es handelt sich um ein Landesmuseum für Kunst und Architektur, nicht um ein kommerzielles Fotostudio.",
      "fr": "Faux. Il s'agit d'un grand musée public d'art et d'architecture, et non d'un studio de photographe professionnel.",
      "ar": "خطأ. الجهة المعنية هي متحف وطني للفنون والعمارة، وليست استوديو تجاري للتصوير."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da das Museum zwar Fotografien ausstellt, aber kein Fotostudio ist.",
      "fr": "« Vrai » est faux car l'exposition de photos d'archives n'en fait nullement un studio photo.",
      "ar": "«صحيح» خاطئة لأن عرض الصور التاريخية داخل المتحف لا يجعله استوديو تصوير."
    }
  },
  "h4": {
    "quote": "Geöffnet ist unser Haus am Montag, und Mittwoch bis Sonntag von 10 bis 18 Uhr.",
    "whyCorrect": {
      "de": "Richtig ist b: „Am Dienstag.“ Das Museum öffnet montags sowie mittwochs bis sonntags; der Dienstag fehlt und ist der Ruhetag.",
      "fr": "La bonne réponse est b : « Le mardi ». Le musée est accessible lundi, puis du mercredi au dimanche ; il est donc fermé le mardi.",
      "ar": "الإجابة الصحيحة هي b: «يوم الثلاثاء». يفتح المتحف الاثنين ومن الأربعاء إلى الأحد، مما يعني إغلاقه التام يوم الثلاثاء."
    },
    "whyIncorrect": {
      "de": "a und c sind Öffnungstage, wie in der Bandansage klar aufgezählt wird.",
      "fr": "a et c sont des jours d'ouverture expressément cités par le répondeur téléphonique.",
      "ar": "الخياران a و c هما من أيام العمل والفتح الرسمية للمتحف."
    }
  },
  "h5": {
    "quote": "Salü, meine Lieben, hier ist wie jeden ersten Montag im Monat euer Anton mit interessanten Tipps für eure Freizeit... Jugendliche ab 13...",
    "whyCorrect": {
      "de": "Richtig. Anton stellt Freizeitangebote und Ausflüge vor, die sich ausdrücklich an Jugendliche richten.",
      "fr": "Vrai. L'animateur Anton propose des suggestions de loisirs et sorties spécialement destinées aux adolescents.",
      "ar": "صحيح. يقدم المذيع أنتون مقترحات وأنشطة ترفيهية موجهة خصيصاً لفئة الشباب والناشئة."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da der gesamte Radiobeitrag Jugendliche als Zielgruppe anspricht.",
      "fr": "« Faux » est incorrect car la cible annoncée est bel et bien la jeunesse.",
      "ar": "«خطأ» غير صحيحة لأن النشرة تخاطب اليافعين بشكل صريح ومباشر."
    }
  },
  "h6": {
    "quote": "Anmeldung und Reservierung der Schneemobile bis 17.00 Uhr am Vortag bei der Schweizer Ski- und Snowboardschule Adelboden.",
    "whyCorrect": {
      "de": "Richtig ist b: „Für die Fahrt mit dem Schneemobil.“ Eine vorherige Anmeldung bis zum Vortag wird nur für Schneemobile gefordert.",
      "fr": "La bonne réponse est b : « Pour le tour en motoneige ». L'inscription préalable avant 17h la veille est expressément requise pour cette activité.",
      "ar": "الإجابة الصحيحة هي b: «لركوب زلاجة الجليد الآلية». التسجيل المسبق قبل الخامسة من مساء اليوم السابق مطلوب لمركبات الجليد فقط."
    },
    "whyIncorrect": {
      "de": "a und c können ohne Voranmeldung besucht bzw. ausgeliehen werden.",
      "fr": "a et c sont en accès libre sans obligation d'enregistrement préalable.",
      "ar": "الخياران a و c لا يتطلبان تسجيلاً أو حجزاً مسبقاً قبل الموعد."
    }
  },
  "h7": {
    "quote": "Besuchen Sie auch in diesem Jahr den Augsburger Christkindlesmarkt vor dem Rathaus mit seiner über 500-jährigen Tradition.",
    "whyCorrect": {
      "de": "Richtig. Die Radiodurchsage bewirbt den traditionsreichen Augsburger Christkindlesmarkt.",
      "fr": "Vrai. Le spot radio annonce l'ouverture du marché de Noël traditionnel sur la place de la mairie d'Augsbourg.",
      "ar": "صحيح. يعلن المذيع عن إقامة سوق عيد الميلاد العريق في الساحة المقابلة لمبنى بلدية أوغسبورغ."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da der Christkindlesmarkt ein Weihnachtsmarkt ist.",
      "fr": "« Faux » est erroné car le Christkindlesmarkt est l'appellation traditionnelle du marché de Noël.",
      "ar": "«خطأ» غير صائبة لأن «Christkindlesmarkt» هو الاسم التقليدي لسوق عيد الميلاد."
    }
  },
  "h8": {
    "quote": "Vom 21.11. bis zum 24.12. locken mehr als 135 Stände mit weihnachtlicher Handwerkskunst.",
    "whyCorrect": {
      "de": "Richtig ist a: „Länger als einen Monat.“ Vom 21. November bis 24. Dezember sind es 34 Tage, also mehr als ein Monat.",
      "fr": "La bonne réponse est a : « Plus d'un mois ». La durée du 21 novembre au 24 décembre correspond à 34 jours.",
      "ar": "الإجابة الصحيحة هي a: «أكثر من شهر واحد». تمتد الفترة من 21 نوفمبر إلى 24 ديسمبر لتبلغ 34 يوماً."
    },
    "whyIncorrect": {
      "de": "b ist rechnerisch falsch (34 Tage sind mehr als ein Monat); c verwechselt die 135 Verkaufsstände mit der Anzahl der Tage.",
      "fr": "b est erroné (34 jours dépassent un mois) ; c confond le nombre de stands (135) avec une durée.",
      "ar": "الخيار b خاطئ حسابياً، والخيار c يخلط بين عدد الأكشاك البالغ 135 كشكاً وعدد الأيام."
    }
  },
  "h9": {
    "quote": "Sie hören die Nachrichten im Radio. Eine Katze hat in Freiburg ihre Besitzerin ausgesperrt.",
    "whyCorrect": {
      "de": "Falsch. Die Durchsage wird als allgemeine Radionachricht (Nachrichten im Radio) eingeleitet, nicht als amtlicher Polizeibericht.",
      "fr": "Faux. Il s'agit d'une brève insolite diffusée dans le journal d'information de la radio, non d'un communiqué de police.",
      "ar": "خطأ. قُدم المقطع كخبر طريف ضمن نشرة الأخبار الإذاعية العامة، وليس كتقرير رسمي صادر عن أجهزة الشرطة."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da das bloße Vorkommen der Polizei im Text den Beitrag nicht zu einem Polizeibericht macht.",
      "fr": "« Vrai » est faux car la simple intervention policière ne transforme pas le bulletin d'info en rapport de police.",
      "ar": "«صحيح» خاطئة لأن ذكر تدخل الشرطة لا يجعل الخبر تقريراً أمنياً رسمياً."
    }
  },
  "h10": {
    "quote": "Schließlich musste die Polizei alarmiert werden. Ein Schlüsseldienst baute das gesamte Türschloss aus und befreite die frierende Frau.",
    "whyCorrect": {
      "de": "Richtig ist a: „Der Schlüsseldienst.“ Erst der herbeigerufene Schlüsseldienst baute das Schloss aus und befreite die Frau vom Balkon.",
      "fr": "La bonne réponse est a : « Le serrurier ». C'est le serrurier mandaté qui a démonté la serrure pour délivrer la dame.",
      "ar": "الإجابة الصحيحة هي a: «خدمة فتح الأقفال (النجار)». قام فني فتح الأقفال بفك القفل بالكامل وتحرير المرأة المحتجزة في الشرفة."
    },
    "whyIncorrect": {
      "de": "b (Nachbar) und c (Polizei) scheiterten daran, dass der Schlüssel von innen im Schloss steckte.",
      "fr": "b (le voisin) et c (la police) ont échoué car la clé était engagée de l'intérieur.",
      "ar": "الخياران b و c فشلا في فتح الباب بسبب وجود المفتاح في القفل من الداخل."
    }
  },

  # ==================== HÖREN TEIL 2 (h11–h15) ====================
  "h11": {
    "quote": "... und ich begleite Sie auf der circa eineinhalbstündigen Rundfahrt in Salzburg, die Sie zu allen wichtigen Sehenswürdigkeiten der Stadt bringen wird.",
    "whyCorrect": {
      "de": "Richtig ist c: „Neunzig Minuten.“ Eineinhalb Stunden entsprechen genau 90 Minuten Rundfahrt.",
      "fr": "La bonne réponse est c : « 90 minutes ». Une heure et demie équivaut précisément à 90 minutes de trajet touristique.",
      "ar": "الإجابة الصحيحة هي c: «تسعون دقيقة». ساعة ونصف تساوي تماماً 90 دقيقة للجولة بأكملها."
    },
    "whyIncorrect": {
      "de": "a (20 Minuten) ist nur die Fahrzeit zur Getreidegasse; b (15 Minuten) war die anfängliche Verspätung des Busses.",
      "fr": "a (20 min) est le trajet vers la première étape ; b (15 min) était le retard de départ.",
      "ar": "الخيار a (20 دقيقة) هو زمن الوصول للمحطة الأولى، والخيار b (15 دقيقة) هو مدة تأخر الحافلة عند الانطلاق."
    }
  },
  "h12": {
    "quote": "Nach einer kurzen Fahrzeit von etwa 20 Minuten werden wir zuerst Mozarts Geburtshaus in der Getreidegasse besichtigen. Verwechseln Sie das bitte nicht mit Mozarts Wohnhaus, das heute nicht auf unserem Programm steht.",
    "whyCorrect": {
      "de": "Richtig ist b: „das Geburtshaus Mozarts.“ Die Führerin betont ausdrücklich, dass das Geburtshaus besichtigt wird und nicht das Wohnhaus.",
      "fr": "La bonne réponse est b : « la maison natale de Mozart ». La guide insiste pour ne pas la confondre avec la maison d'habitation non visitée.",
      "ar": "الإجابة الصحيحة هي b: «البيت الذي ولد فيه موزارت». تشدد المرشدة على زيارة مسقط رأسه وليس المنزل الذي أقام فيه لاحقاً."
    },
    "whyIncorrect": {
      "de": "a steht ausdrücklich nicht auf dem Programm; c (Schloss Leopoldskron) wird überhaupt nicht angefahren.",
      "fr": "a est explicitement exclu du parcours ; c n'est pas au programme des visites.",
      "ar": "الخيار a مستبعد صراحة من جدول الزيارة، والخيار c لم يرد ذكره إطلاقاً."
    }
  },
  "h13": {
    "quote": "Den Abschluss unserer Tour bildet ein Besuch der Stiftung Mozarteum in der Schwarzstraße 26. Diese wurde im Jahr 1842 von den Bürgern der Stadt Salzburg gegründet.",
    "whyCorrect": {
      "de": "Richtig ist c: „Von Salzburgern.“ Die Stiftung Mozarteum wurde 1842 von engagierten Bürgern der Stadt Salzburg ins Leben gerufen.",
      "fr": "La bonne réponse est c : « Par des citoyens de Salzbourg ». La fondation a été créée en 1842 par les habitants de la ville.",
      "ar": "الإجابة الصحيحة هي c: «من قِبل سكان سالزبورغ». أنشأ أهالي ومواطنو سالزبورغ مؤسسة الموزارتيوم عام 1842."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da Mozart damals längst verstorben war; b ist falsch, da Wissenschaftler nur einen Arbeitsbereich der Stiftung bilden.",
      "fr": "a est chronologiquement impossible ; b confond l'activité de recherche avec les membres fondateurs.",
      "ar": "الخيار a مستحيل لوفاة موزارت قبل ذلك بعقود، والخيار b يخلط بين العلماء ومؤسسي الهيئة."
    }
  },
  "h14": {
    "quote": "Das sogenannte „Hagenauer Haus“ war im Besitz eines Freundes der Mozarts, des Händlers Johann Lorenz Hagenauer.",
    "whyCorrect": {
      "de": "Richtig ist b: „Einem Händler.“ Das Geburtshaus gehörte dem Salzburger Händler Johann Lorenz Hagenauer, der mit der Familie befreundet war.",
      "fr": "La bonne réponse est b : « À un commerçant ». L'immeuble appartenait à Johann Lorenz Hagenauer, négociant et ami de la famille.",
      "ar": "الإجابة الصحيحة هي b: «لتاجر». كان المبنى ملكاً للتاجر يوهان لورنتس هاغيناور الذي ربطته صداقة بأسرة موزارت."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da die Mozarts dort nur zur Miete im dritten Stock wohnten; c (Babette von Moll) war Nachbarin und nicht Besitzerin.",
      "fr": "a est faux car les Mozart n'étaient que locataires ; c désigne une voisine de palier.",
      "ar": "الخيار a خاطئ لأن أسرة موزارت كانت تستأجر شقة فقط، والخيار c يخص الجارة المقيمة بالجوار."
    }
  },
  "h15": {
    "quote": "Zu den berühmtesten Ausstellungsstücken zählen Mozarts Kinder-Violine und Briefe der Familie Mozart.",
    "whyCorrect": {
      "de": "Richtig ist a: „Mozarts Kinder-Violine.“ Zu den Höhepunkten der Museumsausstellung gehört seine Kinder-Violine.",
      "fr": "La bonne réponse est a : « Le violon d'enfance de Mozart ». C'est l'une des pièces maîtresses les plus célèbres du musée.",
      "ar": "الإجابة الصحيحة هي a: «كمان موزارت أثناء طفولته». يعد كمانه الصغير ورسائل الأسرة من أبرز مقتنيات المتحف."
    },
    "whyIncorrect": {
      "de": "b ist falsch, da im Museum lediglich ein Ölbild namens „Mozart am Klavier“ hängt; c (Möbel) befindet sich in der Nachbarwohnung, nicht im Hauptexponatbereich.",
      "fr": "b est faux (il s'agit d'un tableau représentant Mozart au piano et non du piano) ; c concerne la reconstitution d'un appartement voisin.",
      "ar": "الخيار b خاطئ لأن المعروض هو لوحة زيتية بعنوان «موزارت على البيانو»، والخيار c أثاث في الشقة الخلفية."
    }
  },

  # ==================== HÖREN TEIL 3 (h16–h22) ====================
  "h16": {
    "quote": "... mein Handy ist schon alt, aber meine Eltern haben mir zum Geburtstag kein neues schenken wollen.",
    "whyCorrect": {
      "de": "Falsch. Isabellas Eltern weigerten sich, ihr ein neues Smartphone zum Geburtstag zu kaufen; ihr Gerät ist alt.",
      "fr": "Faux. Les parents d'Isabella ont refusé de lui acheter un nouveau téléphone pour son anniversaire.",
      "ar": "خطأ. رفض والدا إيزابيلا شراء هاتف جديد لها في عيد ميلادها وظلت تستخدم هاتفها القديم."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da sie ausdrücklich bedauert, kein neues Handy bekommen zu haben.",
      "fr": "« Vrai » est inexact car elle regrette formellement de ne pas en avoir reçu un nouveau.",
      "ar": "«صحيح» منافية للواقع لأنها تعبر بوضوح عن حزنها لعدم حصولها على هاتف جديد."
    }
  },
  "h17": {
    "quote": "J: Verstehe. Aber zeig jetzt mal die Fotos. Das ist euer Ferienhaus? I: hmhm J: Und das ist der Strand? Echt klasse!",
    "whyCorrect": {
      "de": "Richtig. Isabella nimmt ihr Handy heraus und zeigt Jonas nacheinander ihre Urlaubsbilder.",
      "fr": "Vrai. Isabella sort son téléphone pour faire défiler ses photos de vacances devant Jonas.",
      "ar": "صحيح. تخرج إيزابيلا هاتفها وتعرض صور عطلتها الصيفية على يوناس تباعاً."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da Jonas die Bilder auf dem Display direkt kommentiert.",
      "fr": "« Faux » est incorrect car Jonas observe et commente les clichés à l'écran.",
      "ar": "«خطأ» غير صحيحة لأن يوناس يشاهد الصور على الشاشة ويعلق عليها بالتفصيل."
    }
  },
  "h18": {
    "quote": "Na ja, eigentlich ist es ja ganz schön dort, aber jedes Jahr … Ich würde lieber einmal woanders hinfahren, etwas anderes sehen.",
    "whyCorrect": {
      "de": "Falsch. Isabella möchte nicht jedes Jahr auf die Chalkidiki fahren, sondern würde lieber andere Orte kennenlernen.",
      "fr": "Faux. Isabella se lasse d'aller chaque été au même endroit et préférerait découvrir d'autres horizons.",
      "ar": "خطأ. تسأم إيزابيلا من الذهاب إلى نفس المكان سنوياً وتتمنى السفر إلى وجهات جديدة ومختلفة."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da sie den Aufenthalt dort als eintönig empfindet und Abwechslung wünscht.",
      "fr": "« Vrai » est erroné car elle exprime clairement son désir de changement.",
      "ar": "«صحيح» غير ملائمة لكونها تطمح بوضوح إلى تغيير مكان قضاء العطلة."
    }
  },
  "h19": {
    "quote": "J: Und du findest ihn toll? Erzähl. I: Ja, ich finde ihn toll, aber er hat schon eine Freundin.",
    "whyCorrect": {
      "de": "Richtig. Auf Jonas' Nachfrage bestätigt Isabella offen, dass sie Andreas toll findet.",
      "fr": "Vrai. Isabella admet sans détour auprès de Jonas qu'elle apprécie beaucoup Andreas.",
      "ar": "صحيح. تقر إيزابيلا بصراحة أمام يوناس بإعجابها الشديد بأندرياس."
    },
    "whyIncorrect": {
      "de": "„Falsch“ widerspricht Isabellas eigener klarer Aussage im Dialog.",
      "fr": "« Faux » est en contradiction directe avec les aveux d'Isabella.",
      "ar": "«خطأ» تعارض تماماً اعتراف إيزابيلا الواضح بمشاعر الإعجاب."
    }
  },
  "h20": {
    "quote": "I: Waaas? Und das alles mit deinen Eltern? J: Ja, mit meinen Eltern und meiner Schwester.",
    "whyCorrect": {
      "de": "Falsch. Jonas war nicht allein mit seiner Schwester unterwegs, sondern mit der ganzen Familie inklusive der Eltern.",
      "fr": "Faux. Jonas n'est pas parti seul avec sa sœur, mais accompagné de leurs deux parents.",
      "ar": "خطأ. لم يسافر يوناس مع أخته بمفردهما، بل رافقهما والداهما في الرحلة بأكملها."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da die Eltern die gesamte Reise aktiv mitgestaltet haben.",
      "fr": "« Vrai » est faux car les parents ont pris part à toutes les excursions familiales.",
      "ar": "«صحيح» خاطئة لأن الوالدين كانا حاضرين ومشاركين في كل أنشطة الرحلة."
    }
  },
  "h21": {
    "quote": "Meine Eltern liegen immer nur am Strand oder beschäftigen sich mit dem Garten oder sitzen auf der Terrasse und lesen. Wir machen nicht mal einen Ausflug.",
    "whyCorrect": {
      "de": "Richtig. Isabellas Eltern sind sehr passiv, während Jonas' Eltern sportliche Aktivitäten wie Rafting und Wandern lieben.",
      "fr": "Vrai. Les parents d'Isabella ne font aucun sport et restent inactifs, à l'inverse de ceux de Jonas.",
      "ar": "صحيح. والدا إيزابيلا خاملان يفضلان الاستلقاء، بينما والدا يوناس في غاية النشاط والحيوية الرياضية."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da der Kontrast zwischen den sportlichen Eltern von Jonas und den trägen Eltern von Isabella ganz deutlich wird.",
      "fr": "« Faux » est incorrect tant l'opposition entre les deux modes de vie est marquée dans le dialogue.",
      "ar": "«خطأ» غير صحيحة لوجود تباين صارخ في النص بين نشاط عائلة يوناس وركود عائلة إيزابيلا."
    }
  },
  "h22": {
    "quote": "Na, also ich würde ganz gern einmal in den Ferien nur am Strand liegen und faulenzen.",
    "whyCorrect": {
      "de": "Falsch. Jonas findet Urlaub am Strand keineswegs langweilig; er würde sich im Gegenteil wünschen, einfach mal faulenzen zu dürfen.",
      "fr": "Faux. Jonas ne trouve pas cela ennuyeux ; il aimerait au contraire pouvoir paresser au bord de la mer.",
      "ar": "خطأ. لا يرى يوناس راحة الشاطئ أمراً مملاً، بل يتمنى قضاء إجازة مريحة للاسترخاء دون عناء."
    },
    "whyIncorrect": {
      "de": "„Richtig“ verkehrt Jonas' persönliche Sehnsucht nach einem entspannten Strandurlaub ins Gegenteil.",
      "fr": "« Vrai » contredit le souhait explicite de Jonas de pouvoir enfin se reposer à la plage.",
      "ar": "«صحيح» تعكس رغبة يوناس في الحصول على إجازة شاطئية هادئة وتجعلها نقيضاً لما قاله."
    }
  },

  # ==================== HÖREN TEIL 4 (h23–h30) ====================
  "h23": {
    "quote": "L: Also ich finde es gut, dass Herr … äh … Herr X jetzt doch nicht entlassen wird. Außer den Freunden von der Schülerin, die er geschlagen hat, mögen ihn alle.",
    "whyCorrect": {
      "de": "Lara (b / 1). Lara berichtet, dass bis auf den kleinen Freundeskreis des Mädchens die gesamte Schülerschaft Herrn X schätzt.",
      "fr": "Lara (b / 1). Lara affirme que tous les élèves apprécient Monsieur X, hormis la bande d'amis de l'élève concernée.",
      "ar": "لارا (Lara - b / 1). تصرح لارا بأن جميع الطلاب يحبون الأستاذ X باستثناء شلة تلك الطالبة فقط."
    },
    "whyIncorrect": {
      "de": "Simon und die Moderatorin haben diese Feststellung über die Beliebtheit des Lehrers nicht getroffen.",
      "fr": "Ni Simon ni l'animatrice n'ont formulé ce constat sur la sympathie générale envers l'enseignant.",
      "ar": "لم يصدر هذا القول عن سيمون أو المذيعة، بل كان تأكيداً مباشراً من لارا."
    }
  },
  "h24": {
    "quote": "S: Das ist nicht so einfach zu sagen. Nur ganz wenige sind gegen die Wiedereinstellung. Natürlich sind die meisten dagegen, dass ein Lehrer einen Schüler schlägt, aber sie finden, dass dies eine ganz besondere Situation war.",
    "whyCorrect": {
      "de": "Simon (c / 2). Simon erklärt, dass lediglich eine kleine Minderheit („nur ganz wenige“) mit der Rückkehr des Lehrers unzufrieden ist.",
      "fr": "Simon (c / 2). Simon précise que seule une infime minorité s'oppose à la réintégration du professeur.",
      "ar": "سيمون (Simon - c / 2). يوضح سيمون أن قلة ضئيلة جداً فقط تعارض عودة المعلم لممارسة وظيفته."
    },
    "whyIncorrect": {
      "de": "Lara und die Moderatorin sprachen über die juristischen Details und nicht über die quantitative Minderheit an der Schule.",
      "fr": "Lara et la présentatrice n'ont pas quantifié la proportion d'élèves désapprouvant le jugement.",
      "ar": "لم تحدد لارا ولا المذيعة النسبة العددية للطلاب المعارضين للقرار القضائي."
    }
  },
  "h25": {
    "quote": "M: Ja, ich habe gelesen, dass das Gericht sein Urteil mit der besonderen Situation begründet hat. Die Schülerin soll den Lehrer als Erste geschlagen haben. Und zwar auf seine verletzte Schulter. Wusste die Schülerin, dass sich der Lehrer an der Schulter verletzt hatte?",
    "whyCorrect": {
      "de": "Moderatorin (a / 0). Die Moderatorin verweist auf die Begründung des Gerichts bezüglich des Schlages auf die verletzte Schulter.",
      "fr": "L'animatrice (a / 0). La présentatrice rappelle le rôle déterminant de la blessure préalable à l'épaule dans l'argumentaire du tribunal.",
      "ar": "المذيعة (Moderatorin - a / 0). تشير المذيعة إلى حيثيات المحكمة التي ركزت على ضرب الطالبة لكتف المعلم المصابة."
    },
    "whyIncorrect": {
      "de": "Die Schüler Lara und Simon antworten lediglich auf diese rechtliche Information der Moderatorin.",
      "fr": "Les deux élèves ne font que réagir aux éléments du dossier judiciaire exposés par l'animatrice.",
      "ar": "اقتصر دور لارا وسيمون على التعقيب على هذه المعلومة القانونية التي طرحتها المذيعة."
    }
  },
  "h26": {
    "quote": "M: In der Urteilsbegründung steht, dass das Gericht der Meinung ist, dass Herr X die Schülerin nicht schlagen wollte, sondern dass er automatisch reagiert hat, als Reflex sozusagen, als ihn die Schülerin auf die verletzte Schulter geschlagen hat.",
    "whyCorrect": {
      "de": "Moderatorin (a / 0). Die Moderatorin zitiert den Urteilstext, wonach der Schlag des Lehrers keine Absicht, sondern eine reflexartige Abwehrreaktion war.",
      "fr": "L'animatrice (a / 0). La présentatrice rapporte la conclusion des juges écartant toute intentionnalité au profit d'un réflexe physique de douleur.",
      "ar": "المذيعة (Moderatorin - a / 0). تنقل المذيعة نص قرار المحكمة بأن ردة فعل المعلم كانت حركة لا إرادية ومنعكساً دفاعياً دون نية مسبقة."
    },
    "whyIncorrect": {
      "de": "Lara und Simon haben diese Urteilsformulierung nicht in das Gespräch eingebracht.",
      "fr": "Lara et Simon n'étaient pas à l'origine de cette citation extraite du compte-rendu d'audience.",
      "ar": "لم يكن سيمون أو لارا هما من استشهد بحيثيات الحكم القضائي في هذا الصدد."
    }
  },
  "h27": {
    "quote": "S: ... und ich weiß, dass das Mädchen sogar gewettet hatte, dass sie es als Erste schafft, dass Herr X seine Ruhe verliert und sie schlägt, damit er entlassen wird.",
    "whyCorrect": {
      "de": "Simon (c / 2). Simon deckt auf, dass die Schülerin eine Wette abgeschlossen hatte, um die Entlassung des Lehrers zu provozieren.",
      "fr": "Simon (c / 2). Simon révèle le pari malveillant de l'élève visant délibérément le licenciement de l'enseignant.",
      "ar": "سيمون (Simon - c / 2). يكشف سيمون رهان الطالبة الخبيث لدفع المعلم لضربها وفقدان وظيفته."
    },
    "whyIncorrect": {
      "de": "Weder Lara noch die Moderatorin wussten von dieser Wette bzw. sprachen sie aus.",
      "fr": "Ni Lara ni l'animatrice n'ont rapporté l'existence de ce pari prémédité.",
      "ar": "لم تتحدث لارا ولا المذيعة عن تفاصيل هذا الرهان الاستفزازي."
    }
  },
  "h28": {
    "quote": "S: Diese Schüler haben keine anderen Freunde, nicht nur in der Klasse, auch sonst. Sie reden auch in der Pause praktisch mit keinem anderen … und wir reden auch nicht mit ihnen. Das kann vielleicht ihr Verhalten erklären.",
    "whyCorrect": {
      "de": "Simon (c / 2). Simon analysiert die mangelnde Integration der Gruppe und das Fehlen sozialer Kontakte zur restlichen Klasse.",
      "fr": "Simon (c / 2). Simon met en lumière l'isolement social de la clique et leur absence d'intégration au sein de la classe.",
      "ar": "سيمون (Simon - c / 2). يحلل سيمون العزلة الاجتماعية لمجموعة الطلاب وانعدام تواصلهم مع باقي الزملاء."
    },
    "whyIncorrect": {
      "de": "Lara sprach über Schulleitergespräche, während Simon das psychologische Problem der Ausgrenzung schilderte.",
      "fr": "Lara s'est focalisée sur les entrevues disciplinaires, tandis que Simon a décrit leur rejet social.",
      "ar": "ركزت لارا على إجراءات الإدارة، في حين فسر سيمون دوافعهم بعدم الاندماج والنبذ الاجتماعي."
    }
  },
  "h29": {
    "quote": "M: Macht ihr denn sonst als Klasse irgendetwas gemeinsam? Ich meine, außerhalb des Unterrichts. ... L: Nö, jetzt eigentlich nichts mehr … früher schon … und eine Klassenfahrt haben wir das letzte Mal vor zwei Jahren gemacht, in der 9. Klasse.",
    "whyCorrect": {
      "de": "Lara (b / 1). Lara verneint gemeinsame Klassenaktivitäten außerhalb der Schule und weist darauf hin, dass man nichts mehr zusammen unternimmt.",
      "fr": "Lara (b / 1). Lara confirme qu'il n'y a plus aucune activité extrascolaire commune au sein de la classe.",
      "ar": "لارا (Lara - b / 1). تؤكد لارا غياب أي نشاط صفي مشترك حالياً خارج نطاق اليوم الدراسي."
    },
    "whyIncorrect": {
      "de": "Die Moderatorin stellte die Frage, aber Lara formulierte die ablehnende Feststellung.",
      "fr": "L'animatrice a posé la question, mais c'est Lara qui a fait le constat de l'absence totale d'activités.",
      "ar": "طرحت المذيعة السؤال فقط، بينما كانت لارا هي صاحبة الإقرار بانعدام الأنشطة المشتركة."
    }
  },
  "h30": {
    "quote": "L: Auch früher bei den Klassenfahrten gab es an den ersten zwei Tagen immer einige Probleme mit dem Mädchen und ihren Freunden, aber danach war es eigentlich immer sehr schön...",
    "whyCorrect": {
      "de": "Lara (b / 1). Lara erinnert sich daran, dass frühere Klassenfahrten an den ersten beiden Tagen stets schwierig verliefen, bevor sich die Stimmung besserte.",
      "fr": "Lara (b / 1). Lara se souvient que les premiers jours en voyage scolaire étaient systématiquement conflictuels avant que le groupe ne s'apaise.",
      "ar": "لارا (Lara - b / 1). تتذكر لارا أن اليومين الأولين في الرحلات المدرسية السابقة كانا يتسمان دائماً بالصعوبة والتوتر قبل تحسن الأجواء."
    },
    "whyIncorrect": {
      "de": "Simon plädierte für eine neue Klassenfahrt, aber die Schilderung der Startschwierigkeiten stammte von Lara.",
      "fr": "Simon a défendu l'utilité d'un nouveau voyage, mais l'évocation des départs difficiles provient de Lara.",
      "ar": "دافع سيمون عن فكرة تنظيم رحلة جديدة، بينما سردت لارا تجربة البدايات المتعثرة في الرحلات السابقة."
    }
  }
}
