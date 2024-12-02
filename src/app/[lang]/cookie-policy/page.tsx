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
            <CookiePolicy />
        </Container>
    )
}

// pages/cookie-policy.js
function CookiePolicy() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Çerez Politikası</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Çerez Nedir?</h2>
                <p className="mb-4">
                    Çerezler (Cookies), bir web sitesini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet, telefon)
                    küçük dosyalar olarak kaydedilen metin parçacıklarıdır. Çerezler, site içeriğinin
                    kişiselleştirilmesi, kullanıcı deneyiminin iyileştirilmesi ve analizler için kullanılır.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Hangi Tür Çerezleri Kullanıyoruz?</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>Gerekli Çerezler:</strong> Uygulamanın temel işlevlerini yerine getirmesi için
                        zorunludur. Örneğin, kullanıcı oturumlarının yönetilmesi.
                    </li>
                    <li>
                        <strong>Performans Çerezleri:</strong> Web sitesinin nasıl kullanıldığını analiz ederek
                        performansını artırmak için kullanılır.
                    </li>
                    <li>
                        <strong>Fonksiyonel Çerezler:</strong> Kullanıcı tercihlerini (örneğin, dil seçimi) hatırlamak
                        için kullanılır.
                    </li>
                    <li>
                        <strong>Reklam Çerezleri:</strong> Kullanıcıya daha ilgili reklamlar göstermek için
                        kullanılabilir (uygulamanızda varsa).
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Çerezlerin Kullanım Amaçları</h2>
                <p className="mb-4">
                    Schopi, aşağıdaki amaçlarla çerezleri kullanabilir:
                </p>
                <ul className="list-disc list-inside">
                    <li>Kullanıcı deneyimini iyileştirmek ve kişiselleştirilmiş içerik sunmak.</li>
                    <li>Web sitesinin teknik performansını ölçmek ve geliştirmek.</li>
                    <li>Analitik bilgiler toplayarak kullanıcı davranışlarını anlamak.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Çerez Yönetimi</h2>
                <p className="mb-4">
                    Çerez tercihlerinizi değiştirebilir veya çerezleri tamamen devre dışı bırakabilirsiniz. Çoğu
                    tarayıcı çerezleri otomatik olarak kabul eder, ancak ayarlarınızı değiştirerek bunu
                    engelleyebilirsiniz. Ancak, çerezlerin devre dışı bırakılması uygulamanın bazı özelliklerinin
                    çalışmamasına neden olabilir.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Üçüncü Taraf Çerezler</h2>
                <p className="mb-4">
                    Schopi, analiz ve performans takibi amacıyla Google Analytics gibi üçüncü taraf hizmet
                    sağlayıcılarıyla çalışabilir. Bu hizmet sağlayıcılar, kendi çerezlerini cihazınıza yerleştirebilir.
                    Bu çerezlerin yönetimi üçüncü tarafların gizlilik politikalarına tabidir.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Çerez Politikası Güncellemeleri</h2>
                <p className="mb-4">
                    Schopi, bu çerez politikasını zaman zaman güncelleyebilir. Herhangi bir değişiklik olduğunda, web
                    sitemizde veya uygulamada bir bildirimle kullanıcılarımızı bilgilendireceğiz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. İletişim</h2>
                <p>
                    Çerez politikası hakkında sorularınız varsa, lütfen bizimle <a href="mailto:privacy@schopi.com"
                                                                                   className="text-blue-500 underline">privacy@schopi.com</a> adresinden
                    iletişime geçin.
                </p>
            </section>
        </div>
    );
}

