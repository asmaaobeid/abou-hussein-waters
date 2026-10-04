// i18n
const translations = {
    ar: {
        'meta.title': 'مياه أبو حسين - ماء الزهر وماء الورد الطبيعي',
        'meta.description': 'ماء الزهر وماء الورد الطبيعي المقطر يدويا من مياه أبو حسين',
        brand: 'أبو حسين',
        'nav.home': 'الرئيسية',
        'nav.products': 'المنتجات',
        'nav.desserts': 'الحلويات',
        'nav.uses': 'الاستخدامات',
        'nav.umrah': 'العمرة',
        'nav.about': 'من نحن',
        'umrah.eyebrow': 'بخاخ الورد الأصلي',
        'umrah.title': 'عمرتك قرّبت؟ خُد معك نفحة من الورد الأصلي.',
        'umrah.lead': 'يُستخدم في مكة لترطيب وحيوية جسدك',
        'umrah.text': 'نفحة ورد أصلية ترافقك في العمرة لتعيد حيويتك وطاقتك — كتير من الزباين انغرموا بالموضوع',
        'umrah.cta': 'اطلب بخاخ الورد الآن',
        'topbar.text': 'من دفء مكة… إلى انتعاش الورد — يُستخدم في مكة لترطيب وحيوية الجسد — اطلب بخاخ الورد الآن',
        'popup.umrahTitle': 'من دفء مكة… إلى انتعاش الورد.',
        'popup.umrahText': 'يُستخدم في مكة لترطيب وحيوية الجسد — نفحة أصيلة تمنحك الانتعاش في كل لحظة.',
        'nav.benefits': 'الفوائد',
        'nav.gallery': 'المعرض',
        'hero.title': 'نقاء الطبيعة في كل قطرة',
        'hero.subtitle': 'ماء الزهر وماء الورد المقطر يدويا<br>محضّر بحب وعلى أصول الطبيعة',
        'hero.explore': 'استكشف المنتجات',
        'hero.orderWhatsapp': 'اطلب عبر واتساب',
        'products.title': 'مجموعتنا المميزة',
        'products.subtitle': 'طبيعي 100% • مصنوع يدويا • مياه أبو حسين',
        'products.orangeBlossom': 'ماء الزهر',
        'products.orangeBlossomDesc': 'يُقطّر من زهر البرتقال العضوي الطازج ليمنحك رائحة زهرية ناعمة ومنعشة. مثالي للعناية بالبشرة والعلاج العطري وتحضير أشهى الوصفات الشرقية.',
        'products.roseWater': 'ماء الورد',
        'products.roseWaterDesc': 'يُقطّر من الورد العضوي الطازج ليقدّم عناية لطيفة ومنعشة للبشرة، مع استخدامات متعددة في العلاج العطري والمطبخ. معروف بخصائصه المهدئة والمرطبة.',
        'products.discoverSizes': 'اكتشف الأحجام',
        'feature.natural': 'طبيعي 100%',
        'feature.organic': 'عضوي',
        'feature.noPreservatives': 'من دون مواد حافظة',
        'sizes.title': 'الأحجام المتوفرة',
        'sizes.subtitle': 'اختر الحجم المناسب لاحتياجك اليومي',
        'sizes.descLabel': 'الوصف',
        'sizes.badge50': '50 مل',
        'sizes.badge100': '100 مل',
        'sizes.badge250': '250 مل',
        'sizes.badge500': '500 مل',
        'sizes.ob100': 'ماء الزهر - 100 مل',
        'sizes.ob100Desc': 'عبوة متوسطة مناسبة للاستخدام اليومي، مثالية لروتين العناية بالبشرة ولجلسات الاسترخاء والعلاج العطري.',
        'sizes.ob250': 'ماء الزهر - 250 مل',
        'sizes.ob250Desc': 'حجم كبير للاستخدام الممتد، مناسب للعائلات ولمن يعتمدون على ماء الزهر بشكل منتظم.',
        'sizes.ob500': 'ماء الزهر - 500 مل',
        'sizes.ob500Desc': 'حجم اقتصادي كبير للاستخدام المكثف، مناسب للمنازل والمنتجعات والاستخدام التجاري.',
        'sizes.rw50': 'ماء الورد - 50 مل',
        'sizes.rw50Desc': 'عبوة صغيرة ببخاخ، مثالية للتجربة الأولى أو للاستخدام الشخصي أثناء التنقل والسفر.',
        'sizes.rw100': 'ماء الورد - 100 مل',
        'sizes.rw100Desc': 'عبوة متوسطة مناسبة للاستخدام اليومي، تمنح البشرة انتعاشا وترطيبا لطيفا مع رائحة ورد طبيعية.',
        'sizes.rw250': 'ماء الورد - 250 مل',
        'sizes.rw250Desc': 'حجم كبير للاستخدام المتكرر، مناسب للعائلات ولكل من يفضل ماء الورد ضمن روتينه اليومي.',
        'sizes.rw500': 'ماء الورد - 500 مل',
        'sizes.rw500Desc': 'عبوة كبيرة اقتصادية تلبي الاستخدام المكثف، مثالية للمنتجعات والاستخدام التجاري والمنزلي.',
        'desserts.title': 'حلويات عربية… بنكهة من أيام زمان',
        'desserts.lead': 'من المعمول إلى البقلاوة، ومن المهلبية إلى القطايف…',
        'desserts.text': '<strong>ماء الورد وماء الزهر</strong> يضيفان اللمسة التي تجعل كل لقمة أطيب.',
        'desserts.pour': 'ماء الورد وماء الزهر هنا يُسكب فوق الخليط للحلويات',
        'desserts.cta': 'اكتشف ماء الزهر وماء الورد',
        'uses.title': 'استخدامات إيجابية لماء الورد وماء الزهر',
        'uses.subtitle': 'طرق بسيطة وآمنة للاستفادة من منتجات أبو حسين في يومك',
        'uses.tonerTitle': 'تونر طبيعي للوجه',
        'uses.tonerDesc': 'بعد التنظيف، مرّري ماء الورد أو ماء الزهر بقطنة نظيفة على الوجه والرقبة لانتعاش فوري وترطيب لطيف.',
        'uses.mistTitle': 'رذاذ انتعاش خلال اليوم',
        'uses.mistDesc': 'رشة خفيفة على الوجه أو الجسم تعيد الحيوية وتمنحك رائحة زهرية ناعمة دون عطور ثقيلة.',
        'uses.sootheTitle': 'تهدئة البشرة الحساسة',
        'uses.sootheDesc': 'استخدميه بلطف على البشرة بعد يوم طويل أو تعرّض للشمس للمساعدة على التهدئة والنعومة.',
        'uses.hairTitle': 'لمسة عطرية للشعر',
        'uses.hairDesc': 'رشة خفيفة على الشعر أو آخر غسلة بالماء الزهري تترك رائحة منعشة دون تثقل الخصلات.',
        'uses.linenTitle': 'تعطير الوسائد والمنزل',
        'uses.linenDesc': 'رشي قليلاً على الوسائد أو المفروشات لأجواء هادئة ورائحة طبيعية مريحة قبل النوم.',
        'uses.kitchenTitle': 'نكهة في الحلويات والمطبخ',
        'uses.kitchenDesc': 'أضيفي قطرات إلى المعمول والبقلاوة والمهلبية والقطايف لنكهة عربية أصيلة بنقاء طبيعي.',
        'uses.note': 'للعناية الخارجية فقط. اختبري كمية صغيرة على الجلد أولاً إذا كانت بشرتك حساسة جداً.',
        'about.title': 'قصتنا',
        'about.p1': 'في مياه أبو حسين، نؤمن بأن أجمل ما في الطبيعة هو نقاؤها. بدأت رحلتنا من شغف بسيط داخل المنزل، وتحولت إلى حرفة نهتم فيها بكل تفصيل لنقدم ماء الزهر وماء الورد بأفضل جودة ممكنة.',
        'about.p2': 'نقطر كل عبوة بعناية وبالطرق التقليدية للحفاظ على جوهر الزهرة وخصائصها الطبيعية. نعتمد على أزهار مختارة بعناية وماء نقي مفلتر لنحافظ على الصفاء الحقيقي في كل منتج.',
        'about.p3': 'هدفنا أن نوفر لك منتجات طبيعية خالية من المواد الكيميائية، تناسب العناية بالبشرة والاسترخاء والاستخدامات المنزلية والمطبخية بكل ثقة.',
        'about.statNatural': 'مكونات طبيعية',
        'about.statCustomers': 'عميل سعيد',
        'benefits.title': 'لماذا تختار مياه أبو حسين؟',
        'benefits.subtitle': 'اكتشف فوائد منتجاتنا الطبيعية المصنوعة بعناية',
        'benefits.skinTitle': 'فوائد للبشرة',
        'benefits.skinDesc': 'ترطيب طبيعي وتهدئة لطيفة وتنظيف منعش يناسب مختلف أنواع البشرة، مثالي للاستخدام اليومي كتونر طبيعي ومنعش.',
        'benefits.aromaTitle': 'العلاج العطري',
        'benefits.aromaDesc': 'روائح طبيعية مريحة تساعد على تهدئة الأعصاب وتحسين المزاج وصنع أجواء هادئة في المنزل.',
        'benefits.naturalTitle': 'طبيعي 100%',
        'benefits.naturalDesc': 'من دون مواد كيميائية أو مواد حافظة أو عطور صناعية، فقط خلاصة الزهور والماء النقي كما أرادتها الطبيعة.',
        'benefits.kitchenTitle': 'استخدامات في المطبخ',
        'benefits.kitchenDesc': 'أضف لمسة زهرية مميزة إلى الحلويات والمشروبات والوصفات الشرقية بطريقة طبيعية وغنية بالنكهة.',
        'benefits.handmadeTitle': 'مصنوع يدويا',
        'benefits.handmadeDesc': 'كل دفعة تُحضّر بعناية باستخدام طرق تقطير تقليدية للحفاظ على أعلى مستوى من الجودة والنقاء.',
        'benefits.ecoTitle': 'صديق للبيئة',
        'benefits.ecoDesc': 'نعتمد ممارسات مستدامة وتغليفا مناسبا للبيئة لأننا نهتم بك وبالطبيعة في الوقت نفسه.',
        'gallery.title': 'طريقة التحضير',
        'gallery.subtitle': 'من الزهرة إلى الزجاجة، هكذا نحضّر خلاصاتنا الطبيعية',
        'gallery.freshTitle': 'زهور طازجة',
        'gallery.freshDesc': 'نختار أجود الأزهار بعناية',
        'gallery.distillTitle': 'التقطير',
        'gallery.distillDesc': 'عملية تقطير تقليدية بالبخار',
        'gallery.pureTitle': 'التنقية',
        'gallery.pureDesc': 'ماء نقي ومفلتر لنتيجة مثالية',
        'gallery.bottleTitle': 'التعبئة',
        'gallery.bottleDesc': 'نعبئ المنتج بعناية للحفاظ على الانتعاش',
        'footer.tagline': 'خلاصات طبيعية نقية مصنوعة بعناية لتلائم احتياجاتك اليومية في الجمال والعناية والانتعاش.',
        'footer.quickLinks': 'روابط سريعة',
        'footer.products': 'المنتجات',
        'footer.copyright': '&copy; 2024 مياه أبو حسين. جميع الحقوق محفوظة. | صُنع بحب <i class="fas fa-heart"></i> لعشاق الطبيعة',
        'popup.newProduct': 'منتج جديد',
        'popup.bestSeller': 'الأكثر طلبا',
        'popup.description': 'بخاخ 250 مل مناسب لكل أنواع البشرة ولمختلف الاستخدامات اليومية. منتج طبيعي منعش يساعد على ترطيب البشرة ويمنحك رائحة ورد لطيفة ومميزة.',
        'popup.feature1': 'طبيعي وعضوي 100%',
        'popup.feature2': 'من دون مواد حافظة',
        'popup.feature3': 'مناسب لكل أنواع البشرة',
        'popup.feature4': 'مصنوع يدويا بعناية',
        'popup.viewProducts': 'عرض المنتجات',
        'whatsapp.title': 'تواصل معنا عبر واتساب',
        'toast.contactSuccess': 'شكرا لك، تم إرسال رسالتك بنجاح وسنتواصل معك قريبا',
        'toast.contactError': 'يرجى تعبئة جميع الحقول المطلوبة',
        'toast.addedToCart': 'تمت إضافة {name} إلى السلة',
        'cart.added': 'تمت الإضافة',
        'cart.add': 'أضف إلى السلة'
    },
    en: {
        'meta.title': 'Abou Hussein Waters - Natural Orange Blossom & Rose Water',
        'meta.description': 'Hand-distilled natural orange blossom and rose water from Abou Hussein Waters',
        brand: 'Abu Hussein',
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.desserts': 'Desserts',
        'nav.uses': 'Uses',
        'nav.umrah': 'Umrah',
        'nav.about': 'About',
        'umrah.eyebrow': 'Original rose spray',
        'umrah.title': 'Umrah coming up? Take an authentic rose touch with you.',
        'umrah.lead': 'Used in Mecca for hydration and body vitality',
        'umrah.text': 'An authentic rose touch for your Umrah to restore vitality and energy — many customers already love it',
        'umrah.cta': 'Order rose spray now',
        'topbar.text': 'From the warmth of Mecca… to rose freshness — used in Mecca for hydration and body vitality — order now',
        'popup.umrahTitle': 'From the warmth of Mecca… to the freshness of rose.',
        'popup.umrahText': 'Used in Mecca for hydration and body vitality — an authentic touch of freshness in every moment.',
        'nav.benefits': 'Benefits',
        'nav.gallery': 'Gallery',
        'hero.title': 'Nature\'s purity in every drop',
        'hero.subtitle': 'Hand-distilled orange blossom and rose water<br>Crafted with love, the natural way',
        'hero.explore': 'Explore products',
        'hero.orderWhatsapp': 'Order on WhatsApp',
        'products.title': 'Our signature collection',
        'products.subtitle': '100% natural • Handmade • Abou Hussein Waters',
        'products.orangeBlossom': 'Orange Blossom Water',
        'products.orangeBlossomDesc': 'Distilled from fresh organic orange blossoms for a soft, refreshing floral scent. Ideal for skincare, aromatherapy, and Eastern recipes.',
        'products.roseWater': 'Rose Water',
        'products.roseWaterDesc': 'Distilled from fresh organic roses for gentle, refreshing skin care, with many uses in aromatherapy and cooking. Known for its calming and hydrating qualities.',
        'products.discoverSizes': 'Discover sizes',
        'feature.natural': '100% Natural',
        'feature.organic': 'Organic',
        'feature.noPreservatives': 'No preservatives',
        'sizes.title': 'Available sizes',
        'sizes.subtitle': 'Choose the size that fits your daily needs',
        'sizes.descLabel': 'Description',
        'sizes.badge50': '50 ml',
        'sizes.badge100': '100 ml',
        'sizes.badge250': '250 ml',
        'sizes.badge500': '500 ml',
        'sizes.ob100': 'Orange Blossom Water - 100 ml',
        'sizes.ob100Desc': 'A medium bottle for everyday use, ideal for skincare routines and aromatherapy sessions.',
        'sizes.ob250': 'Orange Blossom Water - 250 ml',
        'sizes.ob250Desc': 'A larger size for extended use, suitable for families and regular orange blossom water users.',
        'sizes.ob500': 'Orange Blossom Water - 500 ml',
        'sizes.ob500Desc': 'An economical large size for heavy use at home, spas, and commercial settings.',
        'sizes.rw50': 'Rose Water - 50 ml',
        'sizes.rw50Desc': 'A small spray bottle, perfect for first tries or personal use on the go and while traveling.',
        'sizes.rw100': 'Rose Water - 100 ml',
        'sizes.rw100Desc': 'A medium bottle for daily use that refreshes and gently hydrates skin with a natural rose scent.',
        'sizes.rw250': 'Rose Water - 250 ml',
        'sizes.rw250Desc': 'A large size for frequent use, ideal for families and anyone who includes rose water in their routine.',
        'sizes.rw500': 'Rose Water - 500 ml',
        'sizes.rw500Desc': 'A large economical bottle for heavy use, ideal for spas, commercial, and home use.',
        'desserts.title': 'Arabic sweets… with the flavor of olden days',
        'desserts.lead': 'From maamoul to baklava, and from muhallabia to qatayef…',
        'desserts.text': '<strong>Rose water and orange blossom water</strong> add the touch that makes every bite better.',
        'desserts.pour': 'Rose water and orange blossom water are poured here over the dessert mixture',
        'desserts.cta': 'Discover orange blossom & rose water',
        'uses.title': 'Positive uses for rose water & orange blossom water',
        'uses.subtitle': 'Simple, gentle ways to enjoy Abou Hussein products every day',
        'uses.tonerTitle': 'Natural face toner',
        'uses.tonerDesc': 'After cleansing, sweep rose or orange blossom water on the face and neck with a clean cotton pad for instant freshness and soft hydration.',
        'uses.mistTitle': 'All-day refreshing mist',
        'uses.mistDesc': 'A light mist on the face or body restores vitality and leaves a soft floral scent without heavy perfume.',
        'uses.sootheTitle': 'Soothing for sensitive skin',
        'uses.sootheDesc': 'Use gently on skin after a long day or sun exposure to help calm and soften.',
        'uses.hairTitle': 'A light scent for hair',
        'uses.hairDesc': 'A light mist on hair, or a final rinse with floral water, leaves a fresh scent without weighing strands down.',
        'uses.linenTitle': 'Pillow & home fragrance',
        'uses.linenDesc': 'Mist lightly on pillows or linens for a calm atmosphere and a natural scent before sleep.',
        'uses.kitchenTitle': 'Flavor in sweets & cooking',
        'uses.kitchenDesc': 'Add a few drops to maamoul, baklava, muhallabia, and qatayef for an authentic Arabic flavor with natural purity.',
        'uses.note': 'For external care only. Patch-test a small amount first if your skin is very sensitive.',
        'about.title': 'Our story',
        'about.p1': 'At Abou Hussein Waters, we believe the beauty of nature is in its purity. Our journey began as a simple passion at home and grew into a craft where every detail matters, so we can offer orange blossom and rose water at the highest quality.',
        'about.p2': 'Every bottle is carefully distilled with traditional methods to preserve the essence and natural properties of the flower. We use carefully selected blossoms and pure filtered water to keep true clarity in every product.',
        'about.p3': 'Our goal is to provide chemical-free natural products you can trust for skincare, relaxation, and home and kitchen uses.',
        'about.statNatural': 'Natural ingredients',
        'about.statCustomers': 'Happy customers',
        'benefits.title': 'Why choose Abou Hussein Waters?',
        'benefits.subtitle': 'Discover the benefits of our carefully made natural products',
        'benefits.skinTitle': 'Skin benefits',
        'benefits.skinDesc': 'Natural hydration, gentle soothing, and refreshing cleansing for many skin types — ideal as a daily natural toner.',
        'benefits.aromaTitle': 'Aromatherapy',
        'benefits.aromaDesc': 'Comforting natural scents that help calm the nerves, lift the mood, and create a peaceful home atmosphere.',
        'benefits.naturalTitle': '100% Natural',
        'benefits.naturalDesc': 'No chemicals, preservatives, or synthetic fragrances — only flower essence and pure water as nature intended.',
        'benefits.kitchenTitle': 'Kitchen uses',
        'benefits.kitchenDesc': 'Add a distinctive floral touch to desserts, drinks, and Eastern recipes in a natural, flavorful way.',
        'benefits.handmadeTitle': 'Handmade',
        'benefits.handmadeDesc': 'Every batch is prepared with care using traditional distillation methods to keep the highest quality and purity.',
        'benefits.ecoTitle': 'Eco-friendly',
        'benefits.ecoDesc': 'We follow sustainable practices and thoughtful packaging because we care about you and nature together.',
        'gallery.title': 'How we make it',
        'gallery.subtitle': 'From flower to bottle — how we craft our natural extracts',
        'gallery.freshTitle': 'Fresh flowers',
        'gallery.freshDesc': 'We carefully select the finest blossoms',
        'gallery.distillTitle': 'Distillation',
        'gallery.distillDesc': 'Traditional steam distillation process',
        'gallery.pureTitle': 'Purification',
        'gallery.pureDesc': 'Pure filtered water for a perfect result',
        'gallery.bottleTitle': 'Bottling',
        'gallery.bottleDesc': 'We bottle with care to keep freshness',
        'footer.tagline': 'Pure natural extracts made with care for your daily beauty, care, and freshness needs.',
        'footer.quickLinks': 'Quick links',
        'footer.products': 'Products',
        'footer.copyright': '&copy; 2024 Abou Hussein Waters. All rights reserved. | Made with <i class="fas fa-heart"></i> for nature lovers',
        'popup.newProduct': 'New product',
        'popup.bestSeller': 'Best seller',
        'popup.description': 'A 250 ml spray suitable for all skin types and everyday uses. A refreshing natural product that helps hydrate skin and gives you a soft, distinctive rose scent.',
        'popup.feature1': '100% natural & organic',
        'popup.feature2': 'No preservatives',
        'popup.feature3': 'Suitable for all skin types',
        'popup.feature4': 'Carefully handmade',
        'popup.viewProducts': 'View products',
        'whatsapp.title': 'Contact us on WhatsApp',
        'toast.contactSuccess': 'Thank you, your message was sent and we will contact you soon',
        'toast.contactError': 'Please fill in all required fields',
        'toast.addedToCart': '{name} was added to the cart',
        'cart.added': 'Added',
        'cart.add': 'Add to cart'
    }
};

let currentLang = 'ar';

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ||
        (translations.ar && translations.ar[key]) ||
        key;
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('siteLang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('title', translations[lang][key]);
        }
    });

    document.querySelectorAll('[data-i18n-content]').forEach(el => {
        const key = el.getAttribute('data-i18n-content');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('content', translations[lang][key]);
        }
    });

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
        document.title = t('meta.title');
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    refreshSizeCarouselsLanguage();
}

// Size carousels (scroll / browse all sizes)
const sizeCatalog = {
    orange: [
        {
            image: 'images/product-orange-100.png',
            titleKey: 'sizes.ob100',
            descKey: 'sizes.ob100Desc',
            badgeKey: 'sizes.badge100'
        },
        {
            image: 'images/product-orange-250.png',
            titleKey: 'sizes.ob250',
            descKey: 'sizes.ob250Desc',
            badgeKey: 'sizes.badge250'
        },
        {
            image: 'images/product-orange-500.png',
            titleKey: 'sizes.ob500',
            descKey: 'sizes.ob500Desc',
            badgeKey: 'sizes.badge500'
        }
    ],
    rose: [
        {
            image: 'images/product-rose-spray.png',
            titleKey: 'sizes.rw50',
            descKey: 'sizes.rw50Desc',
            badgeKey: 'sizes.badge50'
        },
        {
            image: 'images/product-rose-100.png',
            titleKey: 'sizes.rw100',
            descKey: 'sizes.rw100Desc',
            badgeKey: 'sizes.badge100'
        },
        {
            image: 'images/product-rose-250.png',
            titleKey: 'sizes.rw250',
            descKey: 'sizes.rw250Desc',
            badgeKey: 'sizes.badge250'
        },
        {
            image: 'images/product-rose-500.png',
            titleKey: 'sizes.rw500',
            descKey: 'sizes.rw500Desc',
            badgeKey: 'sizes.badge500'
        }
    ]
};

const sizeCarouselState = {};

function setSizeCarouselIndex(key, index, instant = false) {
    const items = sizeCatalog[key];
    const root = document.querySelector(`[data-size-carousel="${key}"]`);
    if (!root || !items?.[index]) return;

    sizeCarouselState[key] = index;
    const item = items[index];
    const img = root.querySelector('[data-size-image]');
    const title = root.querySelector('[data-size-title]');
    const desc = root.querySelector('[data-size-desc]');
    const thumbs = root.querySelectorAll('.size-thumb');

    const apply = () => {
        img.src = item.image;
        img.alt = t(item.titleKey);
        title.textContent = t(item.titleKey);
        desc.textContent = t(item.descKey);
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('is-active', i === index);
            thumb.setAttribute('aria-pressed', i === index ? 'true' : 'false');
        });
        const activeThumb = thumbs[index];
        if (activeThumb) {
            activeThumb.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
        }
        img.classList.remove('is-switching');
    };

    if (instant) {
        apply();
        return;
    }

    img.classList.add('is-switching');
    setTimeout(apply, 180);
}

function refreshSizeCarouselsLanguage() {
    Object.keys(sizeCarouselState).forEach((key) => {
        setSizeCarouselIndex(key, sizeCarouselState[key], true);
    });
}

function initSizeCarousels() {
    document.querySelectorAll('[data-size-carousel]').forEach((root) => {
        const key = root.getAttribute('data-size-carousel');
        const items = sizeCatalog[key];
        if (!items || !items.length) return;

        sizeCarouselState[key] = 0;
        const thumbs = root.querySelector('[data-size-thumbs]');
        thumbs.innerHTML = '';

        items.forEach((item, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `size-thumb${key === 'rose' ? ' size-thumb-rose' : ''}`;
            btn.setAttribute('aria-label', t(item.titleKey));
            btn.innerHTML = `<img src="${item.image}" alt="" loading="lazy">`;
            btn.addEventListener('click', () => setSizeCarouselIndex(key, index));
            thumbs.appendChild(btn);
        });

        root.querySelector('.size-nav-prev')?.addEventListener('click', () => {
            const next = (sizeCarouselState[key] - 1 + items.length) % items.length;
            setSizeCarouselIndex(key, next);
        });
        root.querySelector('.size-nav-next')?.addEventListener('click', () => {
            const next = (sizeCarouselState[key] + 1) % items.length;
            setSizeCarouselIndex(key, next);
        });

        setSizeCarouselIndex(key, 0, true);
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

const savedLang = localStorage.getItem('siteLang');
setLanguage(savedLang === 'en' ? 'en' : 'ar');
initSizeCarousels();

// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section > .container, .products-grid, .benefits-grid, .gallery-grid').forEach(el => {
    observer.observe(el);
});

// Add to Cart functionality
const cartButtons = document.querySelectorAll('.btn-cart');
let cartCount = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        cartCount++;
        showToast(t('toast.addedToCart').replace('{name}', productName));
        
        // Add animation
        button.textContent = t('cart.added');
        button.style.background = '#6b8e6b';
        
        setTimeout(() => {
            button.textContent = t('cart.add');
            button.style.background = '';
        }, 2000);
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            showToast(t('toast.contactSuccess'));
            contactForm.reset();
        } else {
            showToast(t('toast.contactError'));
        }
    });
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Soft parallax on hero media only
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const media = document.querySelector('.hero-media');
    if (media && scrolled < window.innerHeight) {
        media.style.transform = `translateY(${scrolled * 0.25}px)`;
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Product card hover effects
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize on load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) heroContent.classList.add('fade-in');
    
    // Animate floating petals
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        petal.style.animationDelay = `${index * 2}s`;
    });

    // Ensure hero video plays on mobile policies
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.play().catch(() => {});
    }
});

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal, .product-card, .benefit-card, .gallery-item, .section-title, .desserts-title, .desserts-lead, .desserts-text, .use-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'reveal');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Add active class to nav links on click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// New Item Popup
function showPopup() {
    const popup = document.getElementById('newItemPopup');
    if (!popup) {
        console.error('Popup element not found!');
        return;
    }
    
    console.log('showPopup called, popup element found');
    
    // Show popup immediately for testing
    setTimeout(() => {
        if (popup) {
            popup.classList.add('show');
            // Prevent body scroll when popup is open
            document.body.style.overflow = 'hidden';
            console.log('Popup class "show" added');
        } else {
            console.error('Popup element disappeared!');
        }
    }, 500); // Show popup after 0.5 seconds
}

function closePopup() {
    const popup = document.getElementById('newItemPopup');
    popup.classList.remove('show');
    // Restore body scroll
    document.body.style.overflow = '';
    // Mark popup as shown for this session
    sessionStorage.setItem('popupShown', 'true');
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('newItemPopup');
    if (e.target === popup) {
        closePopup();
    }
});

// Show popup on page load - try multiple ways
(function() {
    function initPopup() {
        console.log('Initializing popup...');
        const popup = document.getElementById('newItemPopup');
        if (popup) {
            console.log('Popup found, will show in 0.5 seconds');
            setTimeout(() => {
                popup.classList.add('show');
                document.body.style.overflow = 'hidden';
                console.log('Popup should be visible now');
            }, 500);
        } else {
            console.error('Popup element not found in DOM!');
        }
    }
    
    // Try immediately if DOM is ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(initPopup, 100);
    } else {
        window.addEventListener('load', initPopup);
        document.addEventListener('DOMContentLoaded', initPopup);
    }
    
    // Also call the original function
    window.addEventListener('load', showPopup);
})();
