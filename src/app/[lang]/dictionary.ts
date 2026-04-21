export default interface Dictionary {
    header: {
        logo: string;
        menu: {
            product: string;
            features: string;
            pricing: string;
            faq: string;
            privacyPolicy: string;
            termsOfService: string;
            cookiePolicy: string;
        };
        cta: string;
        closeMenu: string;
        comingSoon: string;
    };
    heroSection: {
        title: string;
        titleHighlight: string;
        description: string;
        badgeText: string;
        appleStoreDownload: string;
        useWebApp: string;
        appStoreComingSoon: string;
        socialProofText: string;
        featureTags: string[];
        phoneBadge1Label: string;
        phoneBadge1Sub: string;
        phoneBadge2Label: string;
        phoneBadge2Sub: string;
        phoneBadge3Label: string;
        phoneBadge3Sub: string;
    };
    downloadApp: string;
    section1: {
        saveTime: string;
        saveTimeDesc: string;
        saveTimeText: string;
    };
    optionsSection: {
        title: string;
        description: string;
        badge1: string;
        badge2: string;
        badge3: string;
        features: {
            feature1: { title: string; description: string };
            feature2: { title: string; description: string };
            feature3: { title: string; description: string };
        };
        demo: {
            liveShareNames: string[];
            liveShareActions: string[];
            liveShareTimes: string[];
            liveShareActiveText: string;
            budgetTotalLabel: string;
            budgetCategories: string[];
            platformIosLabel: string;
            platformIosStatus: string;
            platformIosBadge: string;
            platformWebLabel: string;
            platformWebStatus: string;
            platformWebBadge: string;
            allDevicesSynced: string;
        };
    };
    statsSection: {
        features: Array<{ label: string; status: string }>;
        statusActive: string;
    };
    videoSection: {
        subtitle: string;
        title: string;
        description: string;
        playVideo?: string;
        comingSoonButtonText: string;
        playButtonText: string;
        preparingText: string;
    };
    testimonalSection: {
        subTitle: string;
        title: string;
        description: string;
        testimonials: {
            testimonial1: { name: string; job: string; comment: string; commentPlain: string; highlight: string };
            testimonial2: { name: string; job: string; comment: string; commentPlain: string; highlight: string };
            testimonial3: { name: string; job: string; comment: string; commentPlain: string; highlight: string };
            testimonial4: { name: string; job: string; commentPlain: string; highlight: string };
        };
    };
    subscribeSection: {
        title: string;
        description: string;
        package1: {
            title: string;
            subtitle: string;
            realPrice: string;
            discountPrice: string;
            comingSoonButtonText: string;
            features: string[];
        };
        package2: {
            title: string;
            subtitle: string;
            realPrice: string;
            discountPrice: string;
            discountLabel: string;
            bestChoiceLabel: string;
            comingSoonButtonText: string;
            features: string[];
        };
        package3: {
            title: string;
            subtitle: string;
            realPrice: string;
            discountPrice: string;
            comingSoonButtonText: string;
            features: string[];
        };
    };
    faq: {
        title: string;
        subtitle: string;
        description: string;
        questions: { question: string; answer: string }[];
    };
    cta: {
        title: string;
        description: string;
        appStoreDownload: string;
        appStoreComingSoon: string;
        trustBadges: string[];
    };
    footer: {
        description: string;
        followUs: string;
        menu: {
            product: string;
            features: string;
            pricing: string;
            faq: string;
            privacyPolicy: string;
            termsOfService: string;
            cookiePolicy: string;
        };
    };
}
