import Container from "../components/Container";

type Props = {
    params: {
        lang: string,
        slug: string
    }
}

export default async function PageRoute({params}: Props) {
    return (
        <Container style={{'paddingTop':175}}>
            <Privacy />
        </Container>
    )
}

// pages/privacy.js
function Privacy() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Gizlilik Politikası</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Toplanan Bilgiler</h2>
                <p className="mb-4">
                    Schopi, kullanıcı deneyimini geliştirmek için bazı bilgileri toplar. Topladığımız bilgiler şunları
                    içerir:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        **Kayıt Bilgileri:** E-posta adresi ve isim (yalnızca kayıtlı kullanıcılar için).
                    </li>
                    <li>
                        **Liste Verileri:** Kullanıcıların oluşturduğu alışveriş listeleri ve liste içerikleri.
                    </li>
                    <li>
                        **Teknik Bilgiler:** Cihaz türü, tarayıcı bilgileri ve uygulama kullanım verileri.
                    </li>
                </ul>
                <p>
                    Misafir kullanıcılar için yalnızca minimum düzeyde bilgi toplanır (örneğin, tarayıcı verileri).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Bilgilerin Kullanımı</h2>
                <p className="mb-4">
                    Toplanan bilgiler, aşağıdaki amaçlarla kullanılmaktadır:
                </p>
                <ul className="list-disc list-inside">
                    <li>Kullanıcı deneyimini iyileştirmek.</li>
                    <li>Alışveriş listesi yönetimini optimize etmek.</li>
                    <li>Uygulama performansını izlemek ve hataları gidermek.</li>
                </ul>
                <p className="mt-4">
                    Bilgileriniz hiçbir şekilde üçüncü taraflarla pazarlama veya ticari amaçlarla paylaşılmaz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Bilgi Paylaşımı</h2>
                <p className="mb-4">
                    Schopi, kullanıcı bilgilerini aşağıdaki durumlar dışında üçüncü taraflarla paylaşmaz:
                </p>
                <ul className="list-disc list-inside">
                    <li>Yasal talepler veya düzenlemelere uyma zorunluluğu.</li>
                    <li>Hizmet sağlayıcılarla (örneğin, sunucu barındırma hizmeti) entegrasyon.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Veri Saklama</h2>
                <p className="mb-4">
                    Kullanıcı verileri, yalnızca hizmetin sağlanması için gerekli olduğu süre boyunca saklanır.
                    Kullanıcılar, dilediklerinde hesaplarını ve verilerini tamamen silebilir.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Güvenlik</h2>
                <p className="mb-4">
                    Schopi, kullanıcı verilerinin güvenliğini sağlamak için endüstri standartlarında teknik ve
                    organizasyonel önlemler uygular. Ancak, internet üzerinden iletilen hiçbir verinin %100 güvenliğini
                    garanti edemeyiz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Çocukların Gizliliği</h2>
                <p className="mb-4">
                    Schopi, 13 yaşın altındaki çocuklardan bilerek bilgi toplamaz. Eğer bir ebeveyn veya vasi iseniz ve
                    çocuğunuzun bilgilerinin toplandığını düşünüyorsanız, bizimle iletişime geçebilirsiniz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Gizlilik Politikası Değişiklikleri</h2>
                <p className="mb-4">
                    Schopi, bu Gizlilik Politikasını zaman zaman güncelleyebilir. Değişiklikler yapıldığında
                    kullanıcılar bilgilendirilecektir. Lütfen bu politikayı düzenli olarak gözden geçirin.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">8. İletişim</h2>
                <p>
                    Bu Gizlilik Politikası hakkında sorularınız varsa, bizimle
                    <a href="mailto:privacy@schopi.com"
                       className="text-blue-500 underline"> privacy@schopi.com</a> adresi üzerinden iletişime
                    geçebilirsiniz.
                </p>
            </section>
        </div>
    );
}
