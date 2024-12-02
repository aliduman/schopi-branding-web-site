import Container from "./components/Container";
import Hero from "./components/Hero";
import { SectionTitle } from "./components/SectionTitle";
import Benefits from "./components/Benefits";
import { Video } from "./components/Video";
import { Testimonials } from "./components/Testimonials";
import { Cta } from "./components/Cta";
import { benefitOne, benefitTwo } from "./components/data";
import { Faq } from "./components/Faq";
import { getDictionary } from './dictionaries'
import Pricing from "@/app/[lang]/components/Pricing";

export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
        const dict = await getDictionary(params.lang)
        return (
            <Container>
                <Hero />

                {/*Zaman Kazan */}
                <SectionTitle
                    preTitle={dict.section1.saveTime}
                    title={dict.section1.saveTimeDesc}
                    id="product"
                >
                    {dict.section1.saveTimeText}
                </SectionTitle>

                <Container id="features">
                    <Benefits data={benefitOne} />
                    {/*<Benefits imgPos="right" data={benefitTwo} />*/}
                </Container>

                <SectionTitle
                    preTitle="Bir video izleyin"
                    title="Ürünümüzü daha yakından tanıyın"
                >
                    Schopi'yi kullanırken sizi neler beklediğini daha iyi anlamak için bu videoyu
                    izleyin.
                </SectionTitle>

                <Video videoId="fZ0D0cnR88E" />

                <SectionTitle
                    preTitle="Görüşler"
                    title="İşte müşterilerimizin söyledikleri"
                >
                    Müşterilerimizin Schopi'yi kullanırken yaşadıkları deneyimleri ve memnuniyetlerini
                    okuyun.
                </SectionTitle>

                <Testimonials />

                <Pricing id={'pricing'}/>

                <SectionTitle preTitle="S.S.S" title="Sıkça Sorulan Sorular" id={'faq'} style={{'paddingTop': 150}}>
                    Schopi hakkında merak ettiğiniz soruların yanıtlarını burada bulabilirsiniz.
                </SectionTitle>

                <Faq />

                <Cta />
            </Container>
        )
    } catch (error: any) {
        window.alert('Missing or invalid credentials')
    }
}
