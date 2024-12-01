import Container from "./components/Container";
import Hero from "./components/Hero";
import { SectionTitle } from "./components/SectionTitle";
import Benefits from "./components/Benefits";
import { Video } from "./components/Video";
import { Testimonials } from "./components/Testimonials";
import { Cta } from "./components/Cta";
import { benefitOne, benefitTwo } from "./components/data";
import { Faq } from "./components/Faq";

export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
        return (
            <Container>
                <Hero />
                <SectionTitle
                    preTitle="Zaman Kazanın"
                    title="Alışveriş Yaparken Daha Az Zaman, Daha Fazla Organize Olun "
                >
                    Schopi alışveriş yaparken daha fazla zaman kazandıracak ve geriye dönük olarak
                    daha fazla organize olmanıza yardımcı olacak.
                </SectionTitle>

                <Benefits data={benefitOne} />
                <Benefits imgPos="right" data={benefitTwo} />

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

                <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
                    Answer your customers possible questions here, it will increase the
                    conversion rate as well as support or chat requests.
                </SectionTitle>

                <Faq />
                <Cta />
            </Container>
        )
    } catch (error: any) {
        window.alert('Missing or invalid credentials')
    }
}
