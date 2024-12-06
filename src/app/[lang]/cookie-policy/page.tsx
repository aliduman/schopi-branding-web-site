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
            {params.lang === 'tr' ? <CookiePolicyTR /> : <CookiePolicyEN />}
        </Container>
    )
}

// pages/cookie-policy.js
function CookiePolicyTR() {
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

function CookiePolicyEN() {
    return (
       <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-center">Cookie Policy</h1>

    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. What is a Cookie?</h2>
        <p className="mb-4">
            Cookies are small pieces of text that are saved on your device (computer, tablet, phone) when you visit a website. Cookies are used for personalizing site content, improving user experience, and for analytics.
        </p>
    </section>

    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. What Types of Cookies Do We Use?</h2>
        <ul className="list-disc list-inside mb-4">
            <li>
                <strong>Necessary Cookies:</strong> Required for the basic functions of the application. For example, managing user sessions.
            </li>
            <li>
                <strong>Performance Cookies:</strong> Used to analyze how the website is used and to improve its performance.
            </li>
            <li>
                <strong>Functional Cookies:</strong> Used to remember user preferences (e.g., language selection).
            </li>
            <li>
                <strong>Advertising Cookies:</strong> Can be used to show more relevant ads to the user (if applicable in your application).
            </li>
        </ul>
    </section>

    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Purposes of Using Cookies</h2>
        <p className="mb-4">
            Schopi may use cookies for the following purposes:
        </p>
        <ul className="list-disc list-inside">
            <li>Improving user experience and providing personalized content.</li>
            <li>Measuring and improving the technical performance of the website.</li>
            <li>Collecting analytical information to understand user behavior.</li>
        </ul>
    </section>

    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Cookie Management</h2>
        <p className="mb-4">
            You can change your cookie preferences or disable cookies entirely. Most browsers automatically accept cookies, but you can change your settings to prevent this. However, disabling cookies may cause some features of the application to not work.
        </p>
    </section>

    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Cookies</h2>
        <p className="mb-4">
            Schopi may work with third-party service providers such as Google Analytics for analysis and performance tracking. These service providers may place their own cookies on your device. The management of these cookies is subject to the privacy policies of the third parties.
        </p>
    </section>

    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Cookie Policy Updates</h2>
        <p className="mb-4">
            Schopi may update this cookie policy from time to time. When any changes are made, we will notify our users on our website or application.
        </p>
    </section>

    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
        <p>
            If you have any questions about the cookie policy, please contact us at <a href="mailto:privacy@schopi.com" className="text-blue-500 underline">privacy@schopi.com</a>.
        </p>
    </section>
</div>
    );
}

