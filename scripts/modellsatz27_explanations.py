#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 27 - Explanations Data (Modelltest 21 — Hueber Zertifikat B1)
Complete trilingual pedagogical explanations (de/fr/ar) with authentic quotes
for all 60 questions: 1-30 (Lesen) and h1-h30 (Hören).
"""

explanations = {
  # ==================== LESEN TEIL 1 (1-6) ====================
  "1": {
    "quote": "Gutgläubig, wie wir nun mal waren, konsumierten wir umso mehr von dem Produkt und meinten, etwas Gutes für unseren Körper zu tun.",
    "whyCorrect": {
      "de": "Richtig. Bernd und seine Freundin vertrauten der Werbung und glaubten fest daran, dass die Getreideflocken gesund für ihren Körper seien.",
      "fr": "Vrai. Bernd et son amie faisaient toute confiance au message publicitaire et étaient convaincus de consommer un aliment sain et bénéfique pour leur organisme.",
      "ar": "صحيح. كان بيرند وصديقته يثقان بالإعلانات ويعتقدان تماماً أن رقائق الحبوب مفيدة وصحية لأجسامهما."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da Bernd ausdrücklich schreibt, dass er das Produkt anfangs für gesund und figurfreundlich hielt.",
      "fr": "« Faux » est incorrect, car le texte indique clairement qu'il croyait faire du bien à son corps en mangeant ces céréales.",
      "ar": "«خطأ» غير صحيح لأن النص يؤكد بوضوح أنه كان يظن أنه يقدم لجسمه غذاءً صحياً وخفيفاً."
    }
  },
  "2": {
    "quote": "Meine Partnerin und ich sind nämlich beide voll berufstätig und verbringen viele Stunden im Büro. Wir nahmen uns also vor, an Wochenenden mehr Sport zu treiben.",
    "whyCorrect": {
      "de": "Falsch. Sie arbeiteten zwar viel, trieben jedoch keineswegs täglich Sport, sondern nahmen sich lediglich vor, am Wochenende mehr Sport zu treiben.",
      "fr": "Faux. Bien qu'ils travaillent beaucoup au bureau, ils ne faisaient absolument pas de sport quotidiennement, mais prévoyaient seulement d'en faire plus durant le week-end.",
      "ar": "خطأ. على الرغم من ساعات عملهما الطويلة في المكتب، لم يجدا وقتاً يومياً لممارسة الرياضة، بل خططا لممارستها فقط في عطلات نهاية الأسبوع."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, da von täglichen Fitness-Übungen im Text keine Rede ist; es ging ausschließlich um die Wochenenden.",
      "fr": "« Vrai » ne convient pas, car il n'est jamais question d'exercices quotidiens, mais uniquement d'activités sportives le week-end.",
      "ar": "«صحيح» لا تنطبق لعدم وجود تمارين يومية، فالرياضة كانت مقتصرة على التخطيط لعطلة نهاية الأسبوع."
    }
  },
  "3": {
    "quote": "Ich holte schnell die „Fit“-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm.",
    "whyCorrect": {
      "de": "Falsch. Der Zuckergehalt betrug 35 Gramm pro 100 Gramm (35 %). Die Flocken bestehen also zu einem Drittel aus Zucker, aber keineswegs fast ausschließlich.",
      "fr": "Faux. La teneur en sucre était de 35 g pour 100 g (soit 35 %). Les céréales en contiennent donc environ un tiers, mais ne sont nullement fabriquées « presque exclusivement » de sucre.",
      "ar": "خطأ. بلغت نسبة السكر 35 غراماً لكل 100 غرام (أي 35%). الرقائق تحتوي على ثلث وزنها سكراً، وليست مصنوعة كلياً أو بشكل شبه حصري من السكر."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist falsch, da 35 % Zucker zwar sehr hoch ist, aber nicht bedeutet, dass das Produkt fast nur aus Zucker besteht.",
      "fr": "« Vrai » est inexact : 35 % représente une part importante, mais loin d'être la composition quasi exclusive du produit.",
      "ar": "«صحيح» غير دقيقة لأن 35% نسبة مرتفعة ولكنها لا تعني أن المنتج يتكون بالكامل أو حصرياً من السكر."
    }
  },
  "4": {
    "quote": "Ich holte schnell die „Fit“-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm. Und die tägliche Verzehrsempfehlung: 40 Gramm!!",
    "whyCorrect": {
      "de": "Falsch. Die tatsächlichen Nährwerte (35 g Zucker pro 100 g) waren korrekt auf der Packung angegeben; es standen dort also nicht nur Lügen.",
      "fr": "Faux. Les informations nutritionnelles réelles (35 g de sucre pour 100 g) figuraient bien et honnêtement sur le paquet ; l'emballage ne contenait donc pas que des mensonges.",
      "ar": "خطأ. القيمة الغذائية الحقيقية (35 غرام سكر لكل 100 غرام) كانت مكتوبة ومطبوعة بدقة على العلبة، وبالتالي لم تكن كل المعلومات المكتوبة أكاذيب."
    },
    "whyIncorrect": {
      "de": "„Richtig“ widerspricht dem Text: Die Zusammensetzung stand wahrheitsgemäß auf der Verpackung, wenn auch im Kleingedruckten.",
      "fr": "« Vrai » contredit le texte : la composition réelle était imprimée noir sur blanc sur la boîte.",
      "ar": "«صحيح» تتناقض مع النص، حيث كانت المكونات الحقيقية ونسبة السكر مدونة بصراحة على الغلاف."
    }
  },
  "5": {
    "quote": "Und die tägliche Verzehrsempfehlung: 40 Gramm!! Wer wird davon eigentlich satt? ... Wir haben immer mindestens die doppelte Menge gegessen. ... Kein Wunder also, dass wir zugenommen haben...",
    "whyCorrect": {
      "de": "Richtig. Die Portionsempfehlung lag bei nur 40 Gramm. Bernd und seine Partnerin aßen jedoch mindestens die doppelte Menge, weshalb sie durch die hohe Kalorien- und Zuckermenge zunahmen.",
      "fr": "Vrai. La portion recommandée n'était que de 40 g. Bernd et son amie en consommaient au moins le double, ce qui explique directement leur prise de poids.",
      "ar": "صحيح. كانت الحصة اليومية الموصى بها 40 غراماً فقط، بينما كانا يتناولان ضعف هذه الكمية على الأقل، مما تسبب في زيادة وزنهما."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist unzutreffend, da Bernd den übermäßigen Verzehr der doppelten Portionsmenge als Ursache für die Gewichtszunahme beschreibt.",
      "fr": "« Faux » ne convient pas, car Bernd attribue explicitement leur prise de poids à la consommation de portions bien supérieures aux recommandations.",
      "ar": "«خطأ» غير صحيحة لأن بيرند يربط صراحة بين تناولهما كميات مضاعفة من الرقائق وبين اكتساب الوزن."
    }
  },
  "6": {
    "quote": "20 Prozent Vollkornanteil sind noch lange kein echtes Vollkornprodukt. In Vollkornbrot beispielsweise müssen mindestens 90 Prozent Vollkorn stecken.",
    "whyCorrect": {
      "de": "Richtig. Ein Vollkornanteil von lediglich 20 Prozent qualifiziert das Produkt nach lebensmittelrechtlichen Standards nicht als echtes Vollkornprodukt.",
      "fr": "Vrai. Avec seulement 20 % de céréales complètes, le produit ne peut pas être considéré comme un véritable produit complet (contrairement au pain complet qui en exige 90 %).",
      "ar": "صحيح. نسبة حبوب كاملة لا تتجاوز 20% لا تجعل المنتج منتج حبوب كاملة حقيقياً، مقارنة بخبز الحبوب الكاملة الذي يتطلب 90% على الأقل."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist fehlerhaft, da Bernd ausdrücklich darlegt, dass 20 % kein echtes Vollkornprodukt ausmachen.",
      "fr": "« Faux » est erroné, car l'auteur souligne bien que 20 % est insuffisant pour parler d'un véritable produit complet.",
      "ar": "«خطأ» غير دقيقة لأن الكاتب يوضح أن نسبة 20% خدعة تسويقية وليست منتج حبوب كاملة حقيقياً."
    }
  },

  # ==================== LESEN TEIL 2 (7-12) ====================
  "7": {
    "quote": "Für sie sind die Alpen eine willkommene Gelegenheit, die eigenen Grenzen auszuprobieren... Die Alpen bieten für jeden Geschmack passende Routen...",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Der Artikel beschreibt alpine Fahrrad- und Mountainbiketouren sowie unterschiedliche Routen durch die Bergwelt.",
      "fr": "La réponse c est correcte. L'article est consacré aux randonnées et circuits en VTT à travers les Alpes.",
      "ar": "الخيار (ج) هو الصحيح. يدور النص حول رحلات ومسارات الدراجات الجبلية في جبال الألب."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da Umweltfragen nicht im Fokus stehen. b ist falsch, da es sich um eine Tour von Österreich nach Italien (Innsbruck nach Cortina d’Ampezzo) handelt und nicht nur um die Schweiz.",
      "fr": "a est faux (les problèmes écologiques ne sont pas le sujet). b est faux car le circuit part d'Innsbruck en Autriche vers l'Italie et ne se limite pas à la Suisse.",
      "ar": "(أ) غير صحيحة لأن قضايا البيئة ليست محور النص. (ب) غير صحيحة لأن المسار يمتد من النمسا إلى إيطاليا ولا يقتصر على سويسرا."
    }
  },
  "8": {
    "quote": "Wer innert fünf Tagen von Innsbruck zum italienischen Skiort Cortina d’Ampezzo radelt, bekommt unterwegs eine Menge geboten... Panoramablick... Bergweg... Ausblick auf weitere Dolomitenberge...",
    "whyCorrect": {
      "de": "Lösung b ist richtig. Auf der beschriebenen Fünftagestour wird den Radfahrern landschaftlich und optisch sehr viel geboten.",
      "fr": "La réponse b est correcte. Sur ce parcours de cinq jours, les cyclistes découvrent de magnifiques paysages et de nombreux panoramas exceptionnels.",
      "ar": "الخيار (ب) هو الصحيح. خلال هذه الجولة التي تستغرق خمسة أيام، يتاح لراكبي الدراجات مشاهدة الكثير من المناظر الخلابة."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da das Wort „Dessert“ nur metaphorisch für den Tourhöhepunkt gebraucht wird. c ist falsch, da es nicht um die allgemeine Reiselust geht, sondern um das Erlebnis der Route.",
      "fr": "a est faux : le mot « dessert » est une métaphore désignant le clou du spectacle à la fin de la randonnée. c ne correspond pas au sens du passage.",
      "ar": "(أ) غير صحيحة لأن كلمة «تحلية» استُخدمت مجازاً للتعبير عن مسك الختام في الجولة. (ج) لا تعبر عن المعلومة المذكورة في النص."
    }
  },
  "9": {
    "quote": "...und natürlich auch Berghütten, in denen man sich bei Apfelschorle und leckerer Pasta Napoli stärken kann.",
    "whyCorrect": {
      "de": "Lösung c ist richtig. In den Hütten des Fanes-Kessels kann man sich mit Speisen wie Pasta Napoli stärken.",
      "fr": "La réponse c est correcte. Dans les refuges de montagne, on peut se restaurer avec de bons petits plats comme des pâtes napolitaines.",
      "ar": "الخيار (ج) هو الصحيح. يمكن في الأكواخ الجبلية تناول وجبات شهية مثل المعكرونة على الطريقة النابولية."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da es auch warme Mahlzeiten (Pasta) gibt. b ist falsch, weil Übernachtungsmöglichkeiten im Text nicht genannt werden.",
      "fr": "a est faux car on y sert aussi des plats chauds (pâtes). b est faux car le texte ne mentionne pas la possibilité d'y dormir.",
      "ar": "(أ) غير صحيحة لوجود أطعمة ساخنة أيضاً. (ب) غير صحيحة لعدم ذكر إمكانية المبيت أو النوم في الأكواخ."
    }
  },
  "10": {
    "quote": "Bücher, Denkmäler oder Museumsbesuche sind als virtuelle Touren im Internet verfügbar. ... Mittlerweile sind virtuelle Reisen zu Denkmälern quer durch Kontinente und rund um die Welt kein Problem mehr.",
    "whyCorrect": {
      "de": "Lösung b ist richtig. Der Text stellt virtuelle Reisen und digitale Rundgänge als moderne Methode vor, Kulturdenkmäler zu erkunden.",
      "fr": "La réponse b est correcte. Le texte présente les visites virtuelles et numériques comme une nouvelle façon de découvrir monuments et musées.",
      "ar": "الخيار (ب) هو الصحيح. يقدم النص الجولات والرحلات الافتراضية كوسيلة عصرية وجديدة للتعرف على المعالم السياحية والثقافية."
    },
    "whyIncorrect": {
      "de": "a ist zu allgemein und bezieht sich nicht auf die Digitalisierung. c ist zu eng gefasst, da weltweite Denkmäler (Louvre, Pisa, Grand Canyon) erwähnt werden.",
      "fr": "a est trop vague. c est inexact car l'article parle de monuments du monde entier (Louvre, Pise, Grand Canyon) et pas seulement d'Autriche.",
      "ar": "(أ) عامة جداً ولا تركز على الجانب الرقمي. (ج) ضيقة للغاية لأن المقال يتحدث عن معالم عالمية في باريس وإيطاليا وأمريكا."
    }
  },
  "11": {
    "quote": "...und auch Google macht seit Jahren mehr oder weniger bekannte, aber auf jeden Fall erhaltenswerte Schriften aus Museen, Bibliotheken und Büchereien der digitalen Welt zugänglich.",
    "whyCorrect": {
      "de": "Lösung a ist richtig. Google digitalisiert historische Handschriften und Schriften aus Bibliotheken und macht sie online für jedermann lesbar.",
      "fr": "La réponse a est correcte. Google rend accessibles aux internautes des textes et manuscrits précieux issus de musées et de bibliothèques.",
      "ar": "الخيار (أ) هو الصحيح. تتيح شركة جوجل لمستخدمي الإنترنت فرصة الاطلاع على وثائق ومخطوطات قيمة من المتاحف والمكتبات وقراءتها رقمياً."
    },
    "whyIncorrect": {
      "de": "b ist falsch, da die Österreichische Nationalbibliothek eigene Digitalisierungsprojekte betreibt. c ist falsch, da Google Schriften zugänglich macht, statt Kunstwerke physisch zu sammeln.",
      "fr": "b est faux car la Bibliothèque nationale autrichienne mène ses propres projets. c est faux car Google numérise des écrits et ne collectionne pas des œuvres physiques.",
      "ar": "(ب) غير صحيحة لأن المكتبة الوطنية النمساوية تقوم بمشاريعها الخاصة. (ج) غير صحيحة لأن جوجل تنشر كتابات ومخطوطات رقمية ولا تجمع قطعاً فنية."
    }
  },
  "12": {
    "quote": "Eine Reise um die Welt, zu bedeutenden Orten, Bauwerken oder Denkmälern muss heute nicht anstrengend oder teuer sein. ... Oder nicht mehr gut zu Fuß? Alles kein Problem.",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Der Verfasser stellt fest, dass reale weite Reisen oft sehr anstrengend sind und körperlich ermüden können.",
      "fr": "La réponse c est correcte. L'auteur souligne que les voyages lointains physiques peuvent être très fatigants et épuisants.",
      "ar": "الخيار (ج) هو الصحيح. يشير النص إلى أن السفر الواقعي لمسافات بعيدة قد يكون مجهداً ومتعباً بدنياً."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da weite Reisen nicht „immer“ viel Geld kosten müssen. b ist falsch, weil die Zahl der Touristen nicht als generelle Aussage über weite Reisen hervorgehoben wird.",
      "fr": "a est faux en raison du mot « toujours » (immer). b ne constitue pas l'affirmation centrale du paragraphe.",
      "ar": "(أ) غير صحيحة بسبب كلمة «دائماً». (ب) ليست الفكرة الأساسية المذكورة في الفقرة."
    }
  },

  # ==================== LESEN TEIL 3 (13-19) ====================
  "13": {
    "quote": "Im April können Sie das jeden Samstag bei Car Wash Royal ... tun und dazu noch einen guten Zweck unterstützen. Von jeder Fahrzeugwäsche gehen 4,- € in die Spendenkasse, sodass mit einer schönen Summe gerechnet werden darf, die anschließend an die Jugendfeuerwehr Schwerte übergeben werden kann.",
    "whyCorrect": {
      "de": "Anzeige e passt. Bei Car Wash Royal gehen 4 Euro pro Autowäsche als Spende an die Jugendfeuerwehr, womit man beim Waschen Gutes tut.",
      "fr": "L'annonce e convient. Chez Car Wash Royal, 4 € par lavage sont reversés à la brigade des jeunes sapeurs-pompiers, ce qui allie lavage et action solidaire.",
      "ar": "الإعلان (e) هو المناسب. في مغسلة Car Wash Royal يتم التبرع بمبلغ 4 يورو من كل غسيل لفرقة إطفاء الشباب، مما يحقق عمل الخير أثناء غسيل السيارة."
    },
    "whyIncorrect": {
      "de": "Anzeige h bietet lediglich einen Rabatt für Stammkunden, unterstützt jedoch keinen wohltätigen Zweck.",
      "fr": "L'annonce h ne propose qu'un programme de fidélité commercial sans vocation caritative.",
      "ar": "الإعلان (h) يقدم تخفيضاً للزبائن الدائمين فقط ولا يقدم أي تبرع خيري."
    }
  },
  "14": {
    "quote": "Fahrschule Peter Rüegg: Sicherfahren lernen... Umweltschonend und energiesparend fahren lernen... Nicht für Jungfahrer.",
    "whyCorrect": {
      "de": "Lösung 0 ist richtig. Für Benno gibt es keine passende Anzeige, da Anzeige i ausdrücklich nicht für Jungfahrer gedacht ist.",
      "fr": "La réponse 0 est correcte. Aucune annonce ne convient pour Benno, car l'annonce i précise formellement « Nicht für Jungfahrer » (exclut les jeunes conducteurs récents).",
      "ar": "الخيار (0) هو الصحيح. لا يوجد إعلان مناسب لحالة بينو، فالإعلان الوحيد المتعلق بالقيادة الاقتصادية (i) ينص صراحة على أنه «غير مخصص للسائقين المبتدئين»."
    },
    "whyIncorrect": {
      "de": "Anzeige i scheidet aus, da Benno erst seit Kurzem den Führerschein besitzt und die Kurse für Jungfahrer gesperrt sind.",
      "fr": "L'annonce i ne peut pas convenir car Benno est un jeune permis, or le stage refuse explicitement cette catégorie.",
      "ar": "الإعلان (i) لا يصلح لأن بينو حاصل على الرخصة حديثاً، بينما الدورة تستبعد المبتدئين تماماً."
    }
  },
  "15": {
    "quote": "Besuchen Sie den Auto Salon Genf – Dieses Jahr im Blickpunkt: Das E-Auto: neue Modelle – neue Technologien – bessere Leistungen.",
    "whyCorrect": {
      "de": "Anzeige j passt. Auf dem Auto Salon in Genf werden neue Elektroautos verschiedenster Hersteller und modernste Technologien präsentiert.",
      "fr": "L'annonce j convient. Le Salon de l'Auto de Genève met en vedette les dernières nouveautés et technologies de voitures électriques de toutes marques.",
      "ar": "الإعلان (j) هو المناسب. يقدم معرض جنيف للسيارات نظرة شاملة على أحدث موديلات وتقنيات السيارات الكهربائية لمختلف الماركات العالمية."
    },
    "whyIncorrect": {
      "de": "Anzeige c bietet lediglich gebrauchte Elektroautos in Klosterneuburg an, keine Übersicht über die neuesten Modelle aller Automarken.",
      "fr": "L'annonce c ne propose que des véhicules électriques d'occasion locaux et non les dernières nouveautés de l'ensemble des marques.",
      "ar": "الإعلان (c) يقتصر على بيع سيارات كهربائية مستعملة في منطقة كلاسترنوويبورغ، ولا يقدم أحدث الموديلات العالمية."
    }
  },
  "16": {
    "quote": "Suche tägl. Mitfahrgelegenheit Klosterneuburg – Wien-Zentrum, Büroarbeitszeiten. ... übernehme meinen Teil der Benzinkosten. Kontakt: Maximilian",
    "whyCorrect": {
      "de": "Anzeige g passt. Maximilian sucht eine tägliche Mitfahrgelegenheit genau auf der Strecke Klosterneuburg – Wien-Zentrum und beteiligt sich am Benzingeld.",
      "fr": "L'annonce g convient. Maximilien cherche un covoiturage quotidien sur le trajet Klosterneuburg – centre de Vienne et propose de partager les frais de carburant.",
      "ar": "الإعلان (g) هو المناسب. يبحث ماكسيميليان عن مشاركة يومية في السيارة على نفس الخط بين كلاسترنوويبورغ ووسط فيينا مع تقاسم مصاريف الوقود."
    },
    "whyIncorrect": {
      "de": "Anzeige b passt nicht, da Herr Wieser gehbehindert ist und weiterhin mit dem Auto ins Büro fahren möchte.",
      "fr": "L'annonce b (transports en commun) ne convient pas à une personne à mobilité réduite souhaitant voyager en voiture.",
      "ar": "الإعلان (b) يتعلق بالنقل العام بالمترو، وهو غير مناسب للسيد فيزر الذي يعاني من إعاقة حركية ويفضل ركوب السيارة."
    }
  },
  "17": {
    "quote": "Zusammen mit der Volkshochschule Ulm bieten wir exklusiv Pannenkurse für Frauen an. ... Reifenwechsel, kleine Pannen selbst beheben...",
    "whyCorrect": {
      "de": "Anzeige a passt. Auto-Profi Hoffmann veranstaltet in Kooperation mit der VHS Pannenkurse für Frauen, in denen u. a. der Reifenwechsel erlernt wird.",
      "fr": "L'annonce a convient. Auto-Profi Hoffmann propose des cours d'auto-dépannage spécialement conçus pour les femmes, incluant l'apprentissage du changement de roue.",
      "ar": "الإعلان (a) هو المناسب. توفر ورشة هوفمان بالتعاون مع معهد تعليم الكبار دورات تدريبية خاصة بالنساء لتعلم التعامل مع الأعطال وتغيير الإطارات."
    },
    "whyIncorrect": {
      "de": "Andere Anzeigen bieten reine Werkstattleistungen, aber keine Schulungskurse zur Selbsthilfe für Frauen.",
      "fr": "Les autres annonces concernent des réparations effectuées par des garages et non des formations d'apprentissage pratique pour femmes.",
      "ar": "بقية الإعلانات تقدم خدمات تصليح في الورش وليست دورات تدريبية لتعلم تغيير الإطارات بنفسها."
    }
  },
  "18": {
    "quote": "Mobilitätsgarantie – 365 Tage im Jahr, 24 Stunden am Tag: Pannenhilfe... Ersatzwagen bis zu 3 Tagen oder Hotelübernachtung...",
    "whyCorrect": {
      "de": "Anzeige d passt. Autohaus Hellmer garantiert im Pannen- oder Unfallfall einen Ersatzwagen für bis zu 3 Tage, was für berufstätige Fahrerinnen ideal ist.",
      "fr": "L'annonce d convient. Le garage Hellmer offre une garantie mobilité incluant un véhicule de remplacement jusqu'à 3 jours en cas d'accident.",
      "ar": "الإعلان (d) هو المناسب. تضمن وكالة هيلمر توفير سيارة بديلة لمدة تصل إلى 3 أيام في حال وقوع حادث، مما يحل مشكلة السيدة شولته في عملها."
    },
    "whyIncorrect": {
      "de": "Anzeige f bietet Unfallabwicklung, erwähnt jedoch keine mehrtägige Ersatzwagengarantie.",
      "fr": "L'annonce f prend en charge les démarches avec l'assurance mais ne garantit pas explicitement une voiture de prêt pendant plusieurs jours.",
      "ar": "الإعلان (f) يهتم بالإجراءات مع شركة التأمين دون النص على توفير سيارة بديلة لعدة أيام."
    }
  },
  "19": {
    "quote": "Der absolute Allround-Service: alle Reparaturen... gesamte Unfallabwicklung inkl. Fahrzeugabholung am Unfallort und Regelung aller Formalien mit der Versicherung.",
    "whyCorrect": {
      "de": "Anzeige f passt. eckert mobil übernimmt die gesamte Unfallabwicklung inklusive aller Formalitäten und Korrespondenzen mit der Versicherung.",
      "fr": "L'annonce f convient. eckert mobil s'occupe de l'intégralité du sinistre, y compris de toutes les démarches et formalités auprès des compagnies d'assurance.",
      "ar": "الإعلان (f) هو المناسب. تتولى ورشة إيكرت موبيل معالجة الحادث بالكامل بما في ذلك سحب السيارة وإنهاء كافة الإجراءات الإدارية مع شركة التأمين."
    },
    "whyIncorrect": {
      "de": "Anzeige d bietet Pannenhilfe, aber keine vollständige Entlastung bei lästigen Versicherungsformalitäten.",
      "fr": "L'annonce d propose du dépannage mais ne gère pas tous les litiges et dossiers administratifs avec l'assurance.",
      "ar": "الإعلان (d) يركز على سحب السيارة وتوفير بديل، وليس تسوية كافة الأوراق والمشاكل مع شركات التأمين."
    }
  },

  # ==================== LESEN TEIL 4 (20-26) ====================
  "20": {
    "quote": "Aber trotzdem, ich finde so etwas allgemein sehr cool.",
    "whyCorrect": {
      "de": "Nein. Anton findet Graffiti cool und befürwortet kein Verbot, auch wenn seine Eltern das Sprayen seiner Schwester bestraft haben.",
      "fr": "Non. Anton trouve les graffitis très cool et ne souhaite pas leur interdiction, même si ses parents ont puni sa sœur.",
      "ar": "لا. يرى أنتون أن فن الجرافيتي رائع جداً ولا يؤيد منعه، رغم معاقبة والديه لأخته."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da Anton sich positiv über Street Art und Graffiti äußert.",
      "fr": "« Oui » est faux, car Anton exprime une opinion favorable envers les graffitis.",
      "ar": "«نعم» غير صحيحة لأن أنتون يعبر عن إعجابه الصريح بهذا الفن."
    }
  },
  "21": {
    "quote": "Wenn überall Graffiti sind, sieht es unordentlich und chaotisch aus – schrecklich! Mich stört das.",
    "whyCorrect": {
      "de": "Ja. Ernst empfindet Graffiti als unordentlich, chaotisch und störend. Er ist ganz klar für ein Verbot.",
      "fr": "Oui. Ernst juge les graffitis désordonnés, chaotiques et insupportables. Il est nettement partisan d'une interdiction.",
      "ar": "نعم. يرى إرنست أن الجرافيتي يشوه المنظر العام ويسبب الفوضى والقبح، ويؤيد منعه تماماً."
    },
    "whyIncorrect": {
      "de": "„Nein“ trifft nicht zu, da Ernst die Schmierereien verurteilt und ein sauberes Stadtbild fordert.",
      "fr": "« Non » ne convient pas, car Ernst rejette totalement ces dégradations visuelles.",
      "ar": "«لا» لا تنطبق، فإرنست مستاء جداً ويطالب بالحفاظ على نظافة واجهات المباني."
    }
  },
  "22": {
    "quote": "Graffiti hat immer etwas Illegales und ich denke auch, es wäre besser, so etwas nicht zu dulden. Schließlich soll nicht jeder machen können, was er will, dann hätten wir hier ein Chaos.",
    "whyCorrect": {
      "de": "Ja. Conni betont den illegalen Charakter von Graffiti und spricht sich ausdrücklich dafür aus, solche Aktionen nicht zu dulden (also zu verbieten).",
      "fr": "Oui. Conni insiste sur l'illégalité des graffitis et estime qu'il vaut mieux ne pas les tolérer afin d'éviter le désordre et le chaos.",
      "ar": "نعم. تؤكد كوني على الطابع غير القانوني للجرافيتي وتصرح بضرورة عدم التسامح معه ومنعه لتجنب الفوضى."
    },
    "whyIncorrect": {
      "de": "„Nein“ widerspricht Connis Aussage, dass Graffiti nicht geduldet werden sollte.",
      "fr": "« Non » contredit sa conclusion explicite de ne pas tolérer cette pratique.",
      "ar": "«لا» تتعارض مع دعوتها الواضحة إلى عدم قبول هذه التصرفات."
    }
  },
  "23": {
    "quote": "Mich nervt das Geordnete und übermässig Saubere. Man muss doch mal etwas anderes sehen können. ... finde ich die Stadt unvorstellbar langweilig und nichtssagend.",
    "whyCorrect": {
      "de": "Nein. Torben empfindet Städte ohne Graffiti als monoton und langweilig. Er ist entschieden gegen ein Verbot.",
      "fr": "Non. Torben trouve les villes sans graffitis monotones et ennuyeuses ; il s'oppose fermement à toute interdiction.",
      "ar": "لا. يرى توربن أن المدن بدون جرافيتي تصبح كئيبة ومملة، ويعارض فكرة الحظر والمنع بشدة."
    },
    "whyIncorrect": {
      "de": "„Ja“ ist falsch, da Torben Graffiti als willkommene Abwechslung gegen städtische Monotonie verteidigt.",
      "fr": "« Oui » est erroné, car Torben défend la diversité visuelle apportée par les graffitis.",
      "ar": "«نعم» غير صحيحة لأن توربن يرى في الجرافيتي كسراً للملل والروتين."
    }
  },
  "24": {
    "quote": "Ich weiß nur, dass diese Farben ungesund sind. ... Das kann nicht zugelassen werden. Sogar junge Leute müssen das verstehen.",
    "whyCorrect": {
      "de": "Ja. Inge verweist auf die giftigen Farbdämpfe und Gesundheitsschäden und fordert, dass Sprayen nicht zugelassen (also verboten) wird.",
      "fr": "Oui. Inge met en avant la toxicité des peintures et les risques sanitaires, exigeant qu'on n'autorise pas cette pratique.",
      "ar": "نعم. تشير إنجي إلى الأبخرة السامة والغازات المضرة بالصحة وتطالب بعدم السماح بها وحظرها فوراً."
    },
    "whyIncorrect": {
      "de": "„Nein“ ist unzutreffend, da Inge ein striktes Vorgehen zum Schutz der Gesundheit verlangt.",
      "fr": "« Non » est inexact, car elle appelle clairement à une interdiction au nom de la santé publique.",
      "ar": "«لا» غير صحيحة لأنها تدعو بحزم إلى منعها لحماية الصحة العامة."
    }
  },
  "25": {
    "quote": "Die richtige Maßnahme wäre, streng durchzugreifen.",
    "whyCorrect": {
      "de": "Ja. Gabriele kritisiert fehlende Disziplin und fordert ein strenges Durchgreifen gegen Sprayer.",
      "fr": "Oui. Gabriele dénonce le laxisme général et préconise des sanctions strictes et une répression ferme.",
      "ar": "نعم. تنتقد غابرييلي التساهل مع المخالفين وتطالب بتطبيق إجراءات حازمة وصارمة لمنع هذه الظاهرة."
    },
    "whyIncorrect": {
      "de": "„Nein“ widerspricht Gabrieles Forderung nach hartem Durchgreifen.",
      "fr": "« Non » contredit sa volonté affichée d'intervenir sévèrement.",
      "ar": "«لا» تتناقض مع مطالبتها بالتدخل الصارم ومعاقبة الفاعلين."
    }
  },
  "26": {
    "quote": "Haben junge Leute in unserer Gesellschaft nie etwas zu sagen, können sie sich nicht frei ausdrücken? Ich lehne eine solche Bevormundung schlichtweg ab.",
    "whyCorrect": {
      "de": "Nein. Mara verteidigt die freie Ausdrucksform der Jugend und lehnt Verbote als ungerechtfertigte Bevormundung ab.",
      "fr": "Non. Mara défend la liberté d'expression des jeunes et rejette toute forme d'interdiction et de paternalisme.",
      "ar": "لا. تدافع مارا عن حرية الشباب في التعبير عن أنفسهم وترفض الوصاية وفرض الحظر رفضا قاطعاً."
    },
    "whyIncorrect": {
      "de": "„Ja“ trifft nicht zu, da Mara sich energisch gegen Verbote ausspricht.",
      "fr": "« Oui » est erroné, car Mara s'oppose résolument à l'interdiction.",
      "ar": "«نعم» غير صحيحة لأن مارا ترفض حظر هذا النشاط الشبابي."
    }
  },

  # ==================== LESEN TEIL 5 (27-30) ====================
  "27": {
    "quote": "Der häufige und dauernde Gebrauch von Fenchelhonig gegen Husten und Heiserkeit kann schädlich für die Zähne sein (Karies).",
    "whyCorrect": {
      "de": "Lösung b ist richtig. In der Packungsbeilage wird ausdrücklich gewarnt, dass der dauerhafte Gebrauch zu Zahnschäden (Karies) führen kann.",
      "fr": "La réponse b est correcte. La notice signale explicitement qu'un usage fréquent et prolongé peut endommager les dents (caries).",
      "ar": "الخيار (ب) هو الصحيح. تحذر النشرة الطبية صراحة من أن الاستخدام المتكرر والمستمر للعسل قد يسبب تسوساً وأضراراً للأسنان."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da Nebenwirkungen existieren. c ist falsch, weil Hautreaktionen als „sehr selten“ und nicht als „häufig“ eingestuft werden.",
      "fr": "a est faux car des effets secondaires sont mentionnés. c est faux car les réactions cutanées sont qualifiées de « très rares » et non de fréquentes.",
      "ar": "(أ) غير صحيحة لوجود آثار جانبية. (ج) غير صحيحة لأن الحساسية الجلدية صُنفت على أنها «نادرة جداً» وليست شائعة."
    }
  },
  "28": {
    "quote": "Für Kinder ab 1 Jahr ... Kinder ab einem Jahr bekommen 2- bis 3-mal täglich...",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Das Medikament ist für Kinder ab 1 Jahr (also ab 12 Monaten) zugelassen.",
      "fr": "La réponse c est correcte. Le produit est expressément destiné aux enfants à partir de 1 an (soit au moins douze mois).",
      "ar": "الخيار (ج) هو الصحيح. الدواء مخصص للأطفال بدءاً من عمر سنة واحدة (أي 12 شهراً على الأقل)."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da der Sirup einen angenehmen Geschmack hat. b ist falsch, weil Fenchelhonig ein pflanzliches Mittel mit natürlichem Fenchelöl ist.",
      "fr": "a est faux car le goût est décrit comme agréable. b est faux car il s'agit d'un produit végétal à l'huile de fenouil et non de substances artificielles.",
      "ar": "(أ) غير صحيحة لأن طعمه حلو ومستحب. (ب) غير صحيحة لأنه علاج نباتي طبيعي وليس مركباً من مواد كيميائية اصطناعية فقط."
    }
  },
  "29": {
    "quote": "Nach Öffnen der Flasche ist das Medikament bei Beachtung der Aufbewahrungsbedingungen 6 Monate haltbar.",
    "whyCorrect": {
      "de": "Lösung a ist richtig. Nach dem ersten Öffnen kann der Sirup noch 6 Monate (also ein halbes Jahr) verwendet werden.",
      "fr": "La réponse a est correcte. Une fois le flacon ouvert, le sirop se conserve pendant 6 mois (soit un demi-an).",
      "ar": "الخيار (أ) هو الصحيح. بعد فتح الزجاجة، يظل الشراب صالحاً للاستعمال لمدة 6 أشهر (أي نصف سنة) مع مراعاة شروط الحفظ."
    },
    "whyIncorrect": {
      "de": "b ist falsch, da der Sirup nicht erwärmt werden soll. c ist falsch, weil eine Lagerung im Kühlschrank nur bei Temperaturen über 30 °C erforderlich ist.",
      "fr": "b est faux car rien n'indique de chauffer le sirop. c est faux car le réfrigérateur n'est recommandé qu'en cas de température ambiante supérieure à 30 °C.",
      "ar": "(ب) غير صحيحة لعدم وجود تعليمات بتسخين الدواء. (ج) غير صحيحة لأن وضعه في الثلاجة مطلوب فقط عند ارتفاع الحرارة عن 30 درجة مئوية وليس دائماً."
    }
  },
  "30": {
    "quote": "Falls vom Arzt nicht anders verordnet, ist die übliche Dosis: Kinder ab einem Jahr bekommen 2- bis 3-mal täglich je einen Messlöffel...",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Die übliche Dosierung (2- bis 3-mal täglich ein Messlöffel) gilt einheitlich für alle Kinder ab einem Jahr.",
      "fr": "La réponse c est correcte. La posologie standard s'applique de la même manière à tous les enfants à partir d'un an, qu'ils soient plus jeunes ou plus âgés.",
      "ar": "الخيار (ج) هو الصحيح. تسري الجرعة المعتادة (ملعقة قياس مرتين إلى 3 مرات يومياً) بشكل موحد على كافة الأطفال من سن عام فما فوق."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da die Standarddosis in der Packungsbeilage steht („Falls vom Arzt nicht anders verordnet“). b ist falsch, da nur Wasser, Tee oder pure Einnahme genannt werden.",
      "fr": "a est faux car la dose usuelle est fixée par la notice. b est faux car seuls l'eau, le thé ou la prise pure sont mentionnés.",
      "ar": "(أ) غير صحيحة لأن النشرة حددت الجرعة النموذجية مسبقاً. (ب) غير صحيحة لأن التناول يقتصر على الماء أو الشاي أو بمفرده دون خلطه بأي مشروب آخر."
    }
  },

  # ==================== HÖREN TEIL 1 (h1-h10) ====================
  "h1": {
    "quote": "...noch ein Tipp für junge Leute, die eine spannende Aufgabe suchen und etwas Sinnvolles tun wollen, ehe sie sich ihrer Ausbildung widmen. Der Malteser-Freiwilligendienst sucht engagierte Menschen für das freiwillige soziale Jahr.",
    "whyCorrect": {
      "de": "Falsch. Der Tipp richtet sich an Jugendliche vor Beginn einer Ausbildung oder eines Studiums, um ein freiwilliges soziales Jahr zu absolvieren.",
      "fr": "Faux. L'annonce s'adresse aux jeunes souhaitant effectuer une année de volontariat social avant de commencer leurs études ou leur formation.",
      "ar": "خطأ. النصيحة موجهة للشباب قبل بدء دراستهم أو تدريبهم المهني، بهدف قضاء سنة تطوعية في العمل الاجتماعي."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, da es um eine Orientierungsphase vor der beruflichen Ausbildung geht.",
      "fr": "« Vrai » ne convient pas car il s'agit d'un engagement bénévole avant l'entrée dans les études.",
      "ar": "«صحيح» لا تصح لأن الفكرة هي التطوع والخدمة الاجتماعية قبل الانخراط في التعليم العالي."
    }
  },
  "h2": {
    "quote": "Zu den Tätigkeitsfeldern gehören Familienpflege, Schulbetreuung, Jugendarbeit, Altenhilfe, Fahrdienste...",
    "whyCorrect": {
      "de": "Lösung b ist richtig. Zu den genannten Einsatzbereichen des Freiwilligendienstes zählt ausdrücklich die Altenhilfe.",
      "fr": "La réponse b est correcte. Parmi les domaines d'activité mentionnés figure explicitement l'aide aux personnes âgées (Altenhilfe).",
      "ar": "الخيار (ب) هو الصحيح. من بين مجالات العمل التطوعي المذكورة في الإعلان تقديم المساعدة والرعاية لكبار السن (Altenhilfe)."
    },
    "whyIncorrect": {
      "de": "a und c sind falsch, da Krankenhäuser und Arztpraxen im Text nicht als Einsatzorte aufgeführt werden.",
      "fr": "a et c sont faux car les hôpitaux et cabinets médicaux ne sont pas cités dans la liste des activités proposées.",
      "ar": "(أ) و(ج) غير صحيحتين لعدم ذكر المستشفيات أو العيادات الطبية الخاصة."
    }
  },
  "h3": {
    "quote": "Die Polizei sucht nach Zeugen eines bewaffneten Raubüberfalls... Hinweise bitte an die Kriminalpolizei.",
    "whyCorrect": {
      "de": "Falsch. Der Täter ist flüchtig und unbekannt; die Polizei bittet die Bevölkerung um Hinweise zur Identifizierung.",
      "fr": "Faux. L'auteur du braquage a pris la fuite et reste inconnu ; les enquêteurs font appel à témoins pour le retrouver.",
      "ar": "خطأ. الجاني لاذ بالفرار وهوية مرتكب الجريمة مجهولة، والشرطة تطلب مساعدة الشهود للتعرف عليه."
    },
    "whyIncorrect": {
      "de": "„Richtig“ widerspricht dem Zeugenaufruf der Polizei nach dem flüchtigen Täter.",
      "fr": "« Vrai » contredit l'avis de recherche lancé par la police criminelle.",
      "ar": "«صحيح» تتناقض مع نداء الشرطة الموجه للجمهور طلباً لمعلومات عن الفاعل الهارب."
    }
  },
  "h4": {
    "quote": "Die Kellnerin erlitt leichte Schnittverletzungen und wurde mit dem Krankenwagen in die Notaufnahme gebracht.",
    "whyCorrect": {
      "de": "Lösung a ist richtig. Die Kellnerin wurde bei dem Überfall verletzt und ins Krankenhaus gebracht.",
      "fr": "La réponse a est correcte. La serveuse a subi des coupures et a été transportée aux urgences pour recevoir des soins.",
      "ar": "الخيار (أ) هو الصحيح. أُصيبت النادلة بجروح إثر الاعتداء ونُقلت إلى قسم الطوارئ بالمستشفى."
    },
    "whyIncorrect": {
      "de": "b ist falsch, da sie glücklicherweise nur leicht verletzt wurde. c ist vollkommen abwegig.",
      "fr": "b est faux car ses blessures sont légères et elle est bien vivante. c est absurde et infondé.",
      "ar": "(ب) غير صحيحة لأن إصاباتها كانت طفيفة وهي على قيد الحياة. (ج) غير واردة إطلاقاً."
    }
  },
  "h5": {
    "quote": "Letzter Aufruf für Fluggäste nach Frankfurt... begeben Sie sich bitte unverzüglich zum Flugsteig B12.",
    "whyCorrect": {
      "de": "Falsch. Die Durchsage richtet sich an abreisende Passagiere vor dem Abflug und nicht an Ankommende.",
      "fr": "Faux. L'annonce concerne des passagers au départ pour leur embarquement et non des voyageurs arrivant à destination.",
      "ar": "خطأ. الإعلان موجه للمسافرين المغادرين عند بوابات الصعود إلى الطائرة، وليس للقادمين."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da ein „letzter Aufruf“ zum Einsteigen für abfliegende Fluggäste erfolgt.",
      "fr": "« Vrai » est incorrect, car il s'agit d'un appel final pour monter à bord avant le décollage.",
      "ar": "«صحيح» لا تصح، فالنداء الأخير مخصص دائماً لركوب الطائرة قبل إقلاعها."
    }
  },
  "h6": {
    "quote": "Letzter Aufruf für alle noch nicht an Bord befindlichen Fluggäste des Fluges LH 425 nach Frankfurt...",
    "whyCorrect": {
      "de": "Lösung a ist richtig. Die Fluggäste nach Frankfurt erhalten den letzten Aufruf und müssen sich unverzüglich zum Gate begeben.",
      "fr": "La réponse a est correcte. Ce sont les passagers à destination de Francfort qui doivent se dépêcher pour embarquer.",
      "ar": "الخيار (أ) هو الصحيح. ركاب الرحلة المتجهة إلى فرانكفورت هم المعنيون بالنداء الأخير ويجب عليهم الإسراع للبوابة."
    },
    "whyIncorrect": {
      "de": "b und c treffen nicht zu, da der Flug nach Frankfurt aufgerufen wird.",
      "fr": "b et c ne correspondent pas au vol mentionné dans l'annonce sonore.",
      "ar": "(ب) و(ج) غير صحيحتين لاختلاف وجهة الرحلة المذكورة في النداء."
    }
  },
  "h7": {
    "quote": "Herzlich willkommen bei der Tagesspiegel-Ticket-Hotline. ... Unseren Bestellservice können Sie von Montag bis Freitag...",
    "whyCorrect": {
      "de": "Richtig. Die automatische Ansage informiert die Anrufer über die Bestellmöglichkeiten von Theater- und Konzertkarten.",
      "fr": "Vrai. Le répondeur téléphonique automatique renseigne les clients sur la réservation et l'achat de billets de spectacles.",
      "ar": "صحيح. تقدم الرسالة الهاتفية المسجلة معلومات وافية حول كيفية حجز وشراء تذاكر الحفلات والمسارح."
    },
    "whyIncorrect": {
      "de": "„Falsch“ ist fehlerhaft, da es sich explizit um eine Ticket-Hotline für Eintrittskarten handelt.",
      "fr": "« Faux » est erroné, le service étant dédié précisément à la billetterie.",
      "ar": "«خطأ» غير صحيحة لأن الخط الساخن مخصص بالكامل لحجز التذاكر."
    }
  },
  "h8": {
    "quote": "Unseren Bestellservice können Sie von Montag bis Freitag, 7.30 Uhr bis 20.00 Uhr und Samstag und Sonntag von 8.00 Uhr bis 12.00 Uhr in Anspruch nehmen.",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Bestellungen werden montags bis freitags bis 20.00 Uhr entgegengenommen.",
      "fr": "La réponse c est correcte. Le service de commande par téléphone est ouvert du lundi au vendredi jusqu'à 20 h.",
      "ar": "الخيار (ج) هو الصحيح. يستقبل الخط طلبات الحجز من الإثنين إلى الجمعة حتى الساعة الثامنة مساءً."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da am Wochenende nur bis 12.00 Uhr geöffnet ist. b ist falsch, da am Wochenende andere Zeiten gelten.",
      "fr": "a est faux car le week-end le service ferme à midi. b est faux car les horaires du samedi-dimanche sont différents.",
      "ar": "(أ) غير صحيحة لأن الخدمة تنتهي في عطلة نهاية الأسبوع عند الظهر. (ب) غير صحيحة لاختلاف المواعيد بين أيام الأسبوع والعطلة."
    }
  },
  "h9": {
    "quote": "Heute, sehr geehrte Kunden, haben wir für die Reiselustigen unter Ihnen ganz besondere Angebote: Trolley „Neo“... Multifunktionsrucksack... Doppeldecker Reisetasche...",
    "whyCorrect": {
      "de": "Falsch. Die Durchsage bewirbt Reisegepäck (Koffer, Taschen und Rucksäcke) im Kaufhaus und keine Urlaubsreisen.",
      "fr": "Faux. L'annonce dans le grand magasin vante des articles de bagagerie (valises, sacs de voyage) et non des forfaits de vacances.",
      "ar": "خطأ. الإعلان الصوتي في المتجر يروج لحقائب السفر وحقائب الظهر، ولا يعلن عن رحلات سياحية."
    },
    "whyIncorrect": {
      "de": "„Richtig“ ist unzutreffend, da Produkte (Gepäck) verkauft werden und keine Reisen.",
      "fr": "« Vrai » ne convient pas, car il s'agit d'une vente d'équipements de bagage et non de voyages.",
      "ar": "«صحيح» لا تصح، فالإعلان مخصص للأمتعة ومستلزمات السفر وليس لتذاكر السفر."
    }
  },
  "h10": {
    "quote": "Trolley „Neo“ ... jetzt nur noch 99,95 Euro. Multifunktionsrucksack ... jetzt nur 24,95 Euro statt 34,95. Doppeldecker Reisetasche ... für nur 69,95 Euro statt wie bisher 89,95.",
    "whyCorrect": {
      "de": "Lösung b ist richtig. Alle drei vorgestellten Artikel kosten weniger als 100 Euro (99,95 €, 24,95 € und 69,95 €).",
      "fr": "La réponse b est correcte. Les trois articles présentés coûtent tous moins de 100 euros (99,95 €, 24,95 € et 69,95 €).",
      "ar": "الخيار (ب) هو الصحيح. كافة العروض المعروضة يقل سعرها عن 100 يورو (99.95 و24.95 و69.95 يورو)."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da keines der Angebote über 100 Euro liegt. c ist falsch, weil 98 das Volumen der Tasche in Litern bezeichnet.",
      "fr": "a est faux car aucun ne dépasse 100 €. c est un piège : 98 correspond au volume en litres de la grande valise.",
      "ar": "(أ) غير صحيحة لأن جميع الأسعار دون 100 يورو. (ج) غير صحيحة لأن الرقم 98 يمثل سعة الحقيبة باللترات وليس السعر."
    }
  },

  # ==================== HÖREN TEIL 2 (h11-h15) ====================
  "h11": {
    "quote": "Sie gehören zu den glücklichen Gewinnern einer Ballonfahrt beim Quiz des Sportmagazins „Extrem und exklusiv“.",
    "whyCorrect": {
      "de": "Lösung a ist richtig. Die Teilnehmer der Informationsveranstaltung haben die Ballonfahrt bei einem Quiz gewonnen.",
      "fr": "La réponse a est correcte. Les personnes présentes à la séance d'information sont les gagnantes du concours organisé par le magazine.",
      "ar": "الخيار (أ) هو الصحيح. الحاضرون في اللقاء التعريفي هم الفائزون برحلة المنطاد في مسابقة المجلة الرياضية."
    },
    "whyIncorrect": {
      "de": "b und c treffen nicht zu, da die Fahrt bereits gewonnen wurde und das Quiz in der Vergangenheit lag.",
      "fr": "b et c ne conviennent pas car le tirage au sort a déjà eu lieu et la récompense a été remportée.",
      "ar": "(ب) و(ج) غير صحيحتين لأن المسابقة انتهت بالفعل والضيوف فازوا بالرحلة مسبقاً."
    }
  },
  "h12": {
    "quote": "Unsere Piloten bringen eine Erfahrung von über 20 Jahren mit und garantieren höchste Sicherheit.",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Die Ballonpiloten verfügen über eine langjährige Flugerfahrung von mehr als zwanzig Jahren.",
      "fr": "La réponse c est correcte. Les pilotes de montgolfière ont à leur actif plus de vingt ans d'expérience de vol.",
      "ar": "الخيار (ج) هو الصحيح. يتمتع طيارو المناطيد بخبرة طيران طويلة تمتد لأكثر من 20 عاماً."
    },
    "whyIncorrect": {
      "de": "a und b werden im Vortrag nicht als Tatsachen über die Piloten erwähnt.",
      "fr": "a et b ne correspondent à aucune information énoncée dans l'exposé.",
      "ar": "(أ) و(ب) غير صحيحتين لعدم ورودهما في حديث المتحدث."
    }
  },
  "h13": {
    "quote": "Maximal können wir bis 3 000 Meter Höhe steigen. Was die Geschwindigkeit betrifft, so sind wir so schnell wie der Wind.",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Ein Heißluftballon kann bei guten Bedingungen eine maximale Flughöhe von bis zu 3 000 Metern erreichen.",
      "fr": "La réponse c est correcte. La montgolfière peut s'élever jusqu'à une altitude maximale de 3 000 mètres.",
      "ar": "الخيار (ج) هو الصحيح. يمكن للمنطاد الارتفاع في الجو حتى 3000 متر كحد أقصى."
    },
    "whyIncorrect": {
      "de": "a und b nennen deutlich zu niedrige Werte.",
      "fr": "a et b indiquent des altitudes bien inférieures à la limite annoncée.",
      "ar": "(أ) و(ب) أرقام منخفضة جداً لا تطابق ما ذكره الطيار."
    }
  },
  "h14": {
    "quote": "Nehmen Sie übrigens unbedingt einen Fotoapparat mit, denn nicht selten können wir auch Tiere des Waldes sehen...",
    "whyCorrect": {
      "de": "Lösung b ist richtig. Der Referent rät den Passagieren dringend dazu, eine Kamera mitzunehmen, um die Aussicht festzuhalten.",
      "fr": "La réponse b est correcte. L'intervenant conseille vivement d'emporter un appareil photo pour immortaliser le vol et la faune.",
      "ar": "الخيار (ب) هو الصحيح. ينصح المرشد الركاب بشدة باصطحاب كاميرا لالتقاط صور للمناظر والحيوانات البرية."
    },
    "whyIncorrect": {
      "de": "a ist falsch, da sogar Menschen mit Höhenangst problemlos mitfahren können. c ist falsch, da das Hinunterschauen gerade das Erlebnis ausmacht.",
      "fr": "a est faux car même les personnes sujettes au vertige peuvent participer sans crainte. c contredit l'intérêt même du voyage aérien.",
      "ar": "(أ) غير صحيحة لأن أصحاب الخوف من المرتفعات يمكنهم الركوب بأمان دون دوار. (ج) تتنافى مع متعة الاستمتاع بمشاهدة الأرض من الأعلى."
    }
  },
  "h15": {
    "quote": "Drei Tiere, und zwar ein Hahn, eine Ente und ein Hammel waren die ersten Lebewesen, die sich in einem Heißluftballon in die Luft bewegten.",
    "whyCorrect": {
      "de": "Lösung c ist richtig. Im allerersten Heißluftballon der Gebrüder Montgolfier flogen drei Tiere mit (Hahn, Ente und Schaf).",
      "fr": "La réponse c est correcte. Les premiers passagers envoyés dans les airs à bord du ballon étaient des animaux (un coq, un canard et un mouton).",
      "ar": "الخيار (ج) هو الصحيح. كانت الحيوانات الثلاثة (ديك وبطة وخروف) هي أول الكائنات الحية التي صعدت في أول منطاد في التاريخ."
    },
    "whyIncorrect": {
      "de": "a und b sind falsch: König Ludwig XVI. schaute nur vom Boden aus zu, und die Brüder Montgolfier bauten den Ballon, stiegen aber beim ersten Test nicht selbst ein.",
      "fr": "a et b sont faux : le roi assistait à l'événement depuis le sol et les frères constructeurs ne sont pas montés à bord du premier vol d'essai.",
      "ar": "(أ) و(ب) غير صحيحتين لأن الملك كان يراقب من الأرض، والأخوان مونغولفييه هما من صنعا المنطاد ولم يركباه في التجربة الأولى."
    }
  },

  # ==================== HÖREN TEIL 3 (h16-h22) ====================
  "h16": {
    "quote": "Viktoria hat mir erzählt, dass Sie angefangen haben, mit den Schülern zusammen die Klassenreise zu planen … B: Ganz richtig.",
    "whyCorrect": {
      "de": "Richtig. Lehrer Brunner bestätigt, dass die Planung der Abschlussreise gemeinsam mit der Schülerschaft erfolgt.",
      "fr": "Vrai. L'enseignant confirme qu'il organise le voyage de fin d'année en concertation directe avec ses élèves.",
      "ar": "صحيح. يؤكد الأستاذ برونر أنه يخطط لرحلة التخرج المدرسية بالتعاون والمشاركة مع تلاميذه."
    },
    "whyIncorrect": {
      "de": "„Falsch“ widerspricht der klaren Bestätigung von Herrn Brunner im Dialog.",
      "fr": "« Faux » est en contradiction avec la réponse affirmative de M. Brunner.",
      "ar": "«خطأ» تتعارض مع تأكيد المعلم الصريح في الحوار."
    }
  },
  "h17": {
    "quote": "B: Ja, da sind wir noch am Überlegen. ... Das ist ja noch nicht endgültig mit der Radtour …",
    "whyCorrect": {
      "de": "Falsch. Die Radtour ist keineswegs beschlossen, sondern lediglich einer von vielen Diskussionsvorschlägen.",
      "fr": "Faux. L'excursion à vélo n'a absolument pas été décidée de façon définitive ; elle ne fait partie que des pistes envisagées.",
      "ar": "خطأ. لم تقرر الدفعة بعد القيام بجولة بالدراجات، فالأمر ما زال قيد التفكير والنقاش ولم يُحسم بعد."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, da Herr Brunner ausdrücklich sagt, dass noch nichts endgültig feststeht.",
      "fr": "« Vrai » ne convient pas car le professeur insiste sur le fait que la décision n'est pas encore prise.",
      "ar": "«صحيح» لا تصح لتأكيد المعلم أن الفكرة ما زالت مجرد اقتراح غير نهائي."
    }
  },
  "h18": {
    "quote": "R: ...und für alle sind doch Englisch und Französisch Pflicht. Da müssen Sie auf jeden Fall mit der Klasse nach Paris oder London fahren.",
    "whyCorrect": {
      "de": "Falsch. An der Schule lernen alle Schüler sowohl Englisch als auch Französisch verpflichtend, also nicht nur Englisch.",
      "fr": "Faux. Tous les élèves étudient obligatoirement l'anglais et le français, et non pas seulement l'anglais.",
      "ar": "خطأ. اللغتان الإنجليزية والفرنسية إلزاميتان لجميع الطلاب، وبالتالي فهم لا يدرسون الإنجليزية وحدها."
    },
    "whyIncorrect": {
      "de": "„Richtig“ übersieht die Aussage der Mutter über beide Pflichtfremdsprachen.",
      "fr": "« Vrai » contredit la mention explicite des deux langues vivantes obligatoires.",
      "ar": "«صحيح» غير دقيقة لتأكيد ولية الأمر على إلزامية اللغتين معاً."
    }
  },
  "h19": {
    "quote": "R: Wir waren letztes Jahr mit der Viktoria in London. Sie war begeistert. Es gibt dort vieles, was für Jugendliche interessant ist...",
    "whyCorrect": {
      "de": "Falsch. Viktoria war von der Reise nach London restlos begeistert und es hat ihr sehr gut gefallen.",
      "fr": "Faux. Victoria a été enchantée et enthousiasmée par son séjour à Londres l'année passée.",
      "ar": "خطأ. كانت فيكتوريا مبهورة ومتحمسة جداً لزيارتها إلى لندن في العام الماضي وقد أعجبتها كثيراً."
    },
    "whyIncorrect": {
      "de": "„Richtig“ widerspricht der Aussage der Mutter („Sie war begeistert“).",
      "fr": "« Vrai » est contraire aux propos de sa mère qui affirme qu'elle a adoré Londres.",
      "ar": "«صحيح» تعاكس ما ذكرته والدتها صراحة بأن ابنتها كانت معجبة للغاية بلندن."
    }
  },
  "h20": {
    "quote": "B: Tja, … Paris oder London wäre nicht schlecht, aber ... so eine Reise ins Ausland ist ziemlich teuer …",
    "whyCorrect": {
      "de": "Falsch. Herr Brunner war keineswegs prinzipiell gegen Paris; er fand die Idee gut, verwies jedoch auf die hohen Reisekosten für manche Familien.",
      "fr": "Faux. M. Brunner n'était pas opposé au principe d'un voyage à Paris ; il trouvait l'idée intéressante mais redoutait le coût financier pour les familles modestes.",
      "ar": "خطأ. لم يكن المعلم ضد الذهاب إلى باريس، بل وجد الفكرة رائعة ولكنه عبّر عن قلقه من التكلفة المالية الباهظة."
    },
    "whyIncorrect": {
      "de": "„Richtig“ trifft nicht zu, da er die Destination nicht ablehnte, sondern finanzielle Rücksichtnahme anmahnte.",
      "fr": "« Vrai » est inexact, car son hésitation reposait uniquement sur des considérations budgétaires pour les élèves.",
      "ar": "«صحيح» غير صحيحة لأن تحفظه كان مرتبطاً فقط بالتكاليف المادية وليس بالمدينة نفسها."
    }
  },
  "h21": {
    "quote": "B: Ich weiß, Frau Riegler. Aber so eine Reise ins Ausland ist ziemlich teuer … nicht alle Eltern können sich das leisten.",
    "whyCorrect": {
      "de": "Richtig. Der Lehrer erklärt, dass sich einige Eltern eine kostspielige Auslandsreise finanziell nicht leisten können.",
      "fr": "Vrai. L'enseignant rappelle que certains parents d'élèves n'ont pas les moyens financiers de payer un voyage à l'étranger.",
      "ar": "صحيح. يوضح المعلم أن بعض أولياء الأمور لا يستطيعون تحمل النفقات المرتفعة للسفر إلى الخارج."
    },
    "whyIncorrect": {
      "de": "„Falsch“ widerspricht der Begründung von Herrn Brunner für seine Zurückhaltung gegenüber Fernreisen.",
      "fr": "« Faux » contredit l'argument budgétaire invoqué par le professeur.",
      "ar": "«خطأ» تتنافى مع ما قاله الأستاذ حول الظروف المادية الصعبة لبعض الأسر."
    }
  },
  "h22": {
    "quote": "B: Und den Schülern ist es wichtig, dass kein Mitschüler zu Hause bleiben muss … alle wollen gemeinsam fahren.",
    "whyCorrect": {
      "de": "Richtig. Der Klasse ist Gemeinschaft und Solidarität wichtig: Niemand soll aus Geldmangel von der Reise ausgeschlossen werden.",
      "fr": "Vrai. Les élèves sont solidaires et souhaitent que la destination choisie permette à toute la classe de participer sans exception.",
      "ar": "صحيح. يحرص الطلاب على التضامن والمشاركة الجماعية حتى يتمكن جميع الزملاء من السفر دون استثناء أحد."
    },
    "whyIncorrect": {
      "de": "„Falsch“ steht im Widerspruch zum geäußerten Wunsch der gesamten Klasse.",
      "fr": "« Faux » contredit la volonté solidaire exprimée par les lycéens.",
      "ar": "«خطأ» تخالف رغبة جميع الطلاب المؤكدة في سفر الجميع معاً."
    }
  },

  # ==================== HÖREN TEIL 4 (h23-h30) ====================
  "h23": {
    "quote": "T: Meine Tischnachbarn fanden sie toll. Das weckte mein Interesse und war der Anlass weiterzumachen. Ich war auch gespannt, ob ich noch mehr schaffen kann.",
    "whyCorrect": {
      "de": "Lukas Tilmann (c) äußert diese Aussage. Die positive Resonanz seiner Freunde spornte ihn an, sich der kreativen Herausforderung weiterer Essens-Kunstwerke zu stellen.",
      "fr": "C'est Lukas Tilmann (c) qui s'exprime. L'accueil enthousiaste de son entourage a été un défi stimulant pour continuer à créer.",
      "ar": "صاحب العبارة هو لوكاس تيلمان (ج). شجعه إعجاب زملائه على خوض التحدي ومواصلة ابتكار أعمال فنية جديدة من الطعام."
    },
    "whyIncorrect": {
      "de": "Moderator und Juliane Schulz haben diesen persönlichen Werdegang nicht erlebt.",
      "fr": "L'animateur et Juliane Schulz n'ont pas vécu cette expérience artistique personnelle.",
      "ar": "المذيع ويوليانه لم يمرّا بهذه التجربة الفنية الخاصة."
    }
  },
  "h24": {
    "quote": "T: Ich werfe nichts weg, sondern arbeite mit dem, was beim Kochen übrig bleibt.",
    "whyCorrect": {
      "de": "Lukas Tilmann (c) erklärt, dass er für seine Kunstobjekte ausschließlich Lebensmittelreste verwendet, die bei der Zubereitung von Mahlzeiten übrig bleiben.",
      "fr": "C'est Lukas Tilmann (c) qui explique qu'il crée ses œuvres d'art à partir des restes et surplus culinaires.",
      "ar": "لوكاس تيلمان (ج) هو من يوضح أنه يصنع مجسماته الفنية مما يتبقى من الطعام أثناء الطهي دون هدر."
    },
    "whyIncorrect": {
      "de": "Weder der Moderator noch Frau Schulz fertigen künstlerische Objekte aus Resten an.",
      "fr": "Ni le présentateur ni Mme Schulz ne conçoivent des objets d'art avec des restes.",
      "ar": "المذيع ويوليانه لا يقومان بصناعة مجسمات من بقايا الأطعمة."
    }
  },
  "h25": {
    "quote": "S: ...denn Hunger und Armut gibt es leider nicht nur in Entwicklungsländern, sondern auch bei uns in Deutschland hungern Menschen.",
    "whyCorrect": {
      "de": "Juliane Schulz (b) von der Tafel weist darauf hin, dass Hunger auch in wohlhabenden Ländern wie Deutschland existiert.",
      "fr": "C'est Juliane Schulz (b) qui rappelle que la faim et la précarité ne touchent pas seulement les pays pauvres, mais aussi l'Allemagne.",
      "ar": "يوليانه شولتس (ب) من جمعية «تافل» هي من تؤكد أن الجوع موجود أيضاً في الدول المتقدمة وليس في الدول الفقيرة فقط."
    },
    "whyIncorrect": {
      "de": "Die anderen Gesprächsteilnehmer thematisierten an dieser Stelle noch nicht die heimische Armut.",
      "fr": "Les autres interlocuteurs n'avaient pas encore soulevé ce point sur la pauvreté locale.",
      "ar": "المتحدثان الآخران لم يعبّرا عن هذه النقطة المحددة حول الفقر في المجتمعات الغنية."
    }
  },
  "h26": {
    "quote": "M: Herr Tilmann, Sie haben einen sehr interessanten Punkt angesprochen. Das weggeworfene Essen Europas könnte das Hungerproblem der Welt dreifach lösen.",
    "whyCorrect": {
      "de": "Der Moderator (a) zitiert die erschreckende Statistik, dass die europäischen Essensabfälle ausreichen würden, um den Welthunger dreifach zu stillen.",
      "fr": "C'est le modérateur (a) qui cite la statistique frappante selon laquelle la nourriture jetée en Europe suffirait à nourrir tous les affamés du monde.",
      "ar": "المذيع (أ) هو من يطرح الإحصائية الصادمة بأن الطعام المهدور في أوروبا يكفي للقضاء على الجوع في العالم ثلاث مرات."
    },
    "whyIncorrect": {
      "de": "Juliane und Lukas haben diese konkrete Formulierung in diesem Moment nicht ausgesprochen.",
      "fr": "Cette formulation exacte a été prononcée par l'animateur radio.",
      "ar": "هذه العبارة وردت على لسان مقدم البرنامج الإذاعي."
    }
  },
  "h27": {
    "quote": "S: Es ist nämlich nicht erlaubt, Produkte mit falscher Etikette oder kurz vor dem Ablaufdatum zu verkaufen ... aber man darf solche Produkte auch nicht verschenken.",
    "whyCorrect": {
      "de": "Juliane Schulz (b) kritisiert die rechtlichen Vorschriften, wonach einwandfreie Ware weder verkauft noch kostenlos verschenkt werden darf.",
      "fr": "C'est Juliane Schulz (b) qui dénonce les règles absurdes interdisant à la fois la vente et le don gratuit de certains produits mal étiquetés.",
      "ar": "يوليانه شولتس (ب) هي من تشير إلى القوانين الصارمة التي تمنع بيع المنتجات ذات الملصقات الخاطئة أو حتى التبرع بها مجاناً."
    },
    "whyIncorrect": {
      "de": "Lukas zeigt sich darüber schockiert, hat die Information aber nicht selbst erläutert.",
      "fr": "Lukas réagit avec surprise à cette information donnée par Juliane.",
      "ar": "لوكاس فوجئ بهذا الأمر، بينما كانت يوليانه هي من قدمت هذه المعلومة القانونية."
    }
  },
  "h28": {
    "quote": "M: Außerdem verliert die Welt ohne Not wertvolle Ressourcen – Wasser, Energie, Dünger usw. Auch das Klima wird belastet, Verpackungsmüll bleibt unentsorgt.",
    "whyCorrect": {
      "de": "Der Moderator (a) betont die gravierenden Umweltfolgen, den Ressourcenverlust und die Klimabelastung durch weggeworfene Lebensmittel.",
      "fr": "C'est le modérateur (a) qui met en exergue l'impact environnemental, le gaspillage de ressources (eau, énergie) et la pollution causée par les déchets.",
      "ar": "المذيع (أ) هو من يشير إلى الأضرار البيئية وهدر الموارد الثمينة كالطاقة والمياه وتلوث المناخ بسبب إلقاء الطعام في القمامة."
    },
    "whyIncorrect": {
      "de": "Die Gäste stimmen zu, aber der Moderator formuliert diese ökologischen Aspekte.",
      "fr": "Les invités approuvent, mais c'est l'animateur qui formule cette synthèse écologique.",
      "ar": "الضيفان وافقا على كلامه، لكن المذيع هو من بادر بصياغة هذه الرؤية البيئية."
    }
  },
  "h29": {
    "quote": "S: Für mich sind solche Protestaktionen keine Lösung. Wenn jemand helfen möchte, soll er sich an die „Tafel“ wenden. Da brauchen wir Helfer, jederzeit.",
    "whyCorrect": {
      "de": "Juliane Schulz (b) hält Protestaktionen, bei denen aus dem Müll gegessen wird, für sinnlos und plädiert stattdessen für konkretes Engagement bei Hilfsorganisationen.",
      "fr": "C'est Juliane Schulz (b) qui considère que manger dans les poubelles par protestation est vain et appelle plutôt à aider concrètement les banques alimentaires.",
      "ar": "يوليانه شولتس (ب) هي من تعتبر أن تناول الطعام من القمامة كحركة احتجاجية لا طائل منه، وتدعو للمساعدة الفعلية عبر بنوك الطعام."
    },
    "whyIncorrect": {
      "de": "Weder Lukas noch der Moderator äußern diese klare Ablehnung solcher Protestformen.",
      "fr": "Ni Lukas ni l'animateur n'expriment ce jugement sur l'inutilité de ces manifestations.",
      "ar": "لم يعبر المذيع أو لوكاس عن هذا الموقف الرافض لأسلوب الاحتجاج بالقمامة."
    }
  },
  "h30": {
    "quote": "T: Ich werde eine Ausstellung mit den Fotos von meinen Werken machen. Das Eintrittsgeld werde ich dann der „Tafel“ spenden.",
    "whyCorrect": {
      "de": "Lukas Tilmann (c) kündigt an, eine Fotoausstellung seiner Essens-Kunstwerke zu veranstalten und die gesamten Einnahmen der Tafel zu spenden.",
      "fr": "C'est Lukas Tilmann (c) qui propose d'organiser une exposition de photos de ses œuvres et de reverser tous les bénéfices à l'association Tafel.",
      "ar": "لوكاس تيلمان (ج) هو من يعلن عن إقامة معرض لصور مجسماته والتبرع بعائدات التذاكر بالكامل لصالح بنك الطعام (تافل)."
    },
    "whyIncorrect": {
      "de": "Die Initiative zur Fotoausstellung und Spende geht von Künstler Lukas aus.",
      "fr": "L'initiative d'exposer et de reverser les recettes vient de l'artiste Lukas.",
      "ar": "مبادرة تنظيم المعرض والتبرع بأموال التذاكر صادرة عن الفنان لوكاس نفسه."
    }
  }
}
