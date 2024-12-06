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
    };
    heroSection: {
        title: string;
        description: string;
        appleStoreDownload: string;
        useWebApp: string;
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
        features: {
            feature1: {
                title: string;
                description: string;
            };
            feature2: {
                title: string;
                description: string;
            };
            feature3: {
                title: string;
                description: string;
            };
        };
    };
    videoSection: {
        subtitle: string;
        title: string;
        description: string;
        playVideo: string;
        comingSoonButtonText: string;
        playButtonText: string;
    };
    testimonalSection: {
        subTitle: string;
        title: string;
        description: string;
        testimonials: {
            testimonial1: {
                name: string;
                job: string;
                comment: string;
            };
            testimonial2: {
                name: string;
                job: string;
                comment: string;
            };
            testimonial3: {
                name: string;
                job: string;
                comment: string;
            };
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
        questions: {
            question: string;
            answer: string;
        }[];
    };
    cta: {
        title: string;
        description: string;
        appStoreDownload: string;
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