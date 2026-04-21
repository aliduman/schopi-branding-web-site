import { getDictionary } from './dictionaries'
import HeroRevamp from "./components/HeroRevamp";
import FeaturesRevamp from "./components/FeaturesRevamp";
import StatsSection from "./components/StatsSection";
import TestimonialsRevamp from "./components/TestimonialsRevamp";
import PricingRevamp from "./components/PricingRevamp";
import FaqRevamp from "./components/FaqRevamp";
import CtaRevamp from "./components/CtaRevamp";
import VideoRevamp from "./components/VideoRevamp";
import { getUnsplashAvatarUrlsByGender } from "@/lib/unsplash";

export default async function RootRoute({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang);
    const avatarGenders: Array<"female" | "male"> = [
        "female", // Ayse
        "male",   // Mehmet
        "female", // Zeynep
        "male",   // Eren
        "female", // Nurcan
        "female", // Ayse (testimonial)
        "male",   // Mehmet (testimonial)
        "female", // Zeynep (testimonial)
        "male",   // Can
    ];

    const avatarUrls = await getUnsplashAvatarUrlsByGender(avatarGenders);
    const heroAvatarUrls = avatarUrls.slice(0, 5);
    const testimonialAvatarUrls = avatarUrls.slice(5, 9);

    return (
        <div className="bg-[#080808] min-h-screen">
            <HeroRevamp dict={dict} socialProofAvatars={heroAvatarUrls} />
            <StatsSection dict={dict} />
            <FeaturesRevamp dict={dict} />
            <VideoRevamp dict={dict} videoId="fZ0D0cnR88E" />
            <TestimonialsRevamp dict={dict} avatarUrls={testimonialAvatarUrls} />
            <PricingRevamp dict={dict} />
            <FaqRevamp dict={dict} />
            <CtaRevamp dict={dict} />
        </div>
    );
}
