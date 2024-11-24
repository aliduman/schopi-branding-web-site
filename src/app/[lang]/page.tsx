import LangRedirect from './components/LangRedirect';
import componentResolver from './utils/component-resolver';

export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
        const contentSections = [
            {
                __component: 'sections.hero',
                title: 'Welcome to the Next.js Starter',
                description: 'This is a starter template for Next.js with Strapi.',
                image: {
                    url: '/uploads/hero_image_2x_7a3f0c3b3b.png',
                },
            },
            {
                __component: 'sections.features',
                title: 'Features',
                features: [
                    {
                        title: 'Create a Strapi project',
                        description: 'Create a Strapi project using this starter template.',
                        image: {
                            url: '/uploads/feature_1_2x_5b0a1b6b1b.png',
                        },
                    },
                    {
                        title: 'Create a Next.js project',
                        description: 'Create a Next.js project using this starter template.',
                        image: {
                            url: '/uploads/feature_2_2x_6c9d2b9a4b.png',
                        },
                    },
                    {
                        title: 'Deploy',
                        description: 'Deploy on Vercel.',
                        image: {
                            url: '/uploads/feature_3_2x_7e9f2b9a4b.png',
                        },
                    },
                ]
            },
        ];
        return contentSections.map((section: any, index: number) =>
            componentResolver(section, index)
        )
    } catch (error: any) {
        window.alert('Missing or invalid credentials')
    }
}
