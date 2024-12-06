import Container from "../components/Container";

type Props = {
    params: {
        lang: string,
        slug: string
    }
}

export default async function PageRoute({params}: Props) {
    return (
        <Container style={{'paddingTop': 175}}>
            {params.lang === 'tr' ? <PrivacyTR /> : <PrivacyEN />}
        </Container>
    )
}

// pages/privacy.js
function PrivacyTR() {
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


function PrivacyEN() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Collected Information</h2>
                <p className="mb-4">
                    Schopi collects certain information to improve the user experience. The information we collect
                    includes:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        **Registration Information:** Email address and name (for registered users only).
                    </li>
                    <li>
                        **List Data:** Shopping lists and list contents created by users.
                    </li>
                    <li>
                        **Technical Information:** Device type, browser information, and app usage data.
                    </li>
                </ul>
                <p>
                    Only minimal information is collected for guest users (e.g., browser data).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
                <p className="mb-4">
                    The collected information is used for the following purposes:
                </p>
                <ul className="list-disc list-inside">
                    <li>Improving the user experience.</li>
                    <li>Optimizing shopping list management.</li>
                    <li>Monitoring app performance and fixing errors.</li>
                </ul>
                <p className="mt-4">
                    Your information is not shared with third parties for marketing or commercial purposes.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Information Sharing</h2>
                <p className="mb-4">
                    Schopi does not share user information with third parties except in the following cases:
                </p>
                <ul className="list-disc list-inside">
                    <li>Compliance with legal requests or regulations.</li>
                    <li>Integration with service providers (e.g., server hosting services).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Data Retention</h2>
                <p className="mb-4">
                    User data is retained only for as long as necessary to provide the service. Users can delete their
                    accounts and data at any time.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Security</h2>
                <p className="mb-4">
                    Schopi implements industry-standard technical and organizational measures to ensure the security of
                    user data. However, we cannot guarantee 100% security of data transmitted over the internet.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Children's Privacy</h2>
                <p className="mb-4">
                    Schopi does not knowingly collect information from children under the age of 13. If you are a parent
                    or guardian and believe your child’s information has been collected, please contact us.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Privacy Policy Changes</h2>
                <p className="mb-4">
                    Schopi may update this Privacy Policy from time to time. Users will be notified of any changes.
                    Please review this policy regularly.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at
                    <a href="mailto:privacy@schopi.com" className="text-blue-500 underline"> privacy@schopi.com</a>.
                </p>
            </section>
        </div>
    );
}