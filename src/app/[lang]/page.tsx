import Container from "./components/Container";
import Hero from "./components/Hero";
import {SectionTitle} from "./components/SectionTitle";
import Benefits from "./components/Benefits";
import {Video} from "./components/Video";
import {Testimonials} from "./components/Testimonials";
import {Cta} from "./components/Cta";
import {benefitOne, benefitTwo} from "./components/data";
import {Faq} from "./components/Faq";
import {getDictionary} from './dictionaries'
import Pricing from "@/app/[lang]/components/Pricing";
import benefitOneImg from "../../../public/img/benefit-one.png";
import Dictionary from "@/app/[lang]/dictionary";
import {ChartBarSquareIcon, CursorArrowRaysIcon, FaceSmileIcon} from "@heroicons/react/24/solid";

export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
        const dict = await getDictionary(params.lang)
        return (
            <div>
                <Hero dict={dict}/>

                {/*Zaman Kazan */}
                <SectionTitle
                    preTitle={dict.section1.saveTime}
                    title={dict.section1.saveTimeDesc}
                >
                    {dict.section1.saveTimeText}
                </SectionTitle>

                <Container id="features" style={{'paddingTop': 150}}>
                    <Benefits data={setBenefitOne(dict)}/>
                    {/*<Benefits imgPos="right" data={benefitTwo} />*/}
                </Container>

                <SectionTitle
                    preTitle={dict.videoSection.subtitle}
                    title={dict.videoSection.title}
                >
                    {dict.videoSection.description}
                </SectionTitle>

                <Video videoId="fZ0D0cnR88E" dict={dict}/>

                <SectionTitle
                    preTitle={dict.testimonalSection.subtitle}
                    title={dict.testimonalSection.title}
                >
                    {dict.testimonalSection.description}
                </SectionTitle>

                <Testimonials dict={dict}/>

                <Pricing dict={dict} id={'pricing'}/>

                <SectionTitle preTitle={dict.faq.subtitle} title={dict.faq.title} id={'faq'} style={{'paddingTop': 150}}>
                    {dict.faq.description}
                </SectionTitle>

                <Faq dict={dict}/>

                <Cta dict={dict}/>
            </div>
        )
    } catch (error: any) {
        window.alert('Missing or invalid credentials')
    }
}

function setBenefitOne(dict: Dictionary) {
    const benefitOne = {
        title: dict.optionsSection.title,
        desc: dict.optionsSection.description,
        image: benefitOneImg,
        bullets: [
            {
                title: dict.optionsSection.features.feature1.title,
                desc: dict.optionsSection.features.feature1.description,
                icon: <FaceSmileIcon/>,
            },
            {
                title: dict.optionsSection.features.feature2.title,
                desc: dict.optionsSection.features.feature2.description,
                icon: <ChartBarSquareIcon/>,
            },
            {
                title: dict.optionsSection.features.feature3.title,
                desc: dict.optionsSection.features.feature3.description,
                icon: <CursorArrowRaysIcon/>,
            },
        ],
    };
    return benefitOne
}