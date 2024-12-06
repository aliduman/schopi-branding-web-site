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
            {params.lang === 'tr' ? <TermsTR /> : <TermsEN />}
        </Container>
    )
}

function TermsTR() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Şartlar ve koşullar</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Kabul ve Kullanım Şartları</h2>
                <p className="mb-4">
                    Bu uygulamayı kullanarak, bu Şartlar ve Koşulları kabul etmiş olursunuz. Eğer bu koşulları kabul
                    etmiyorsanız, Schopi'yi kullanmaya devam etmeyiniz.
                </p>
                <p>
                    Schopi, kullanıcıların alışveriş listesi oluşturmasına, bu listeleri paylaşmasına ve kayıtlı ya da
                    misafir kullanıcı olarak uygulamayı kullanmasına olanak tanır.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Hizmet Açıklaması</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>Liste Oluşturma ve Yönetimi:</strong> Kullanıcılar, veritabanımızdaki hazır ürünlerden
                        seçim yaparak ya da kendi ürünlerini yazarak alışveriş listeleri oluşturabilir.
                    </li>
                    <li>
                        <strong>Paylaşım Özelliği:</strong> Kullanıcılar, oluşturdukları alışveriş listelerini diğer
                        kullanıcılarla paylaşabilir.
                    </li>
                    <li>
                        <strong>Çoklu Platform Desteği:</strong> Schopi hem mobil (iOS) hem de web uygulaması olarak
                        kullanılabilir.
                    </li>
                    <li>
                        <strong>Kayıtlı veya Misafir Kullanım:</strong> Kullanıcılar uygulamayı kayıt olarak veya
                        misafir kullanıcı olarak kullanabilir. Ancak, kayıtlı kullanıcılar için daha fazla özellik
                        sunulabilir.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Kullanıcı Hesapları</h2>
                <p className="mb-4">
                    - <strong>Kayıtlı Kullanıcılar:</strong> Hesap oluştururken doğru ve eksiksiz bilgi sağlamanız
                    gerekir. Hesabınızla yapılan tüm aktivitelerden siz sorumlusunuz.
                </p>
                <p className="mb-4">
                    - <strong>Misafir Kullanıcılar:</strong> Kayıt olmadan da uygulamayı kullanabilirsiniz. Ancak, bazı
                    özellikler yalnızca kayıtlı kullanıcılar için sunulabilir.
                </p>
                <p>
                    - <strong>Paylaşım ve Güvenlik:</strong> Schopi ile oluşturulan listeleri paylaşırken, paylaştığınız
                    kullanıcıların erişim ve yetkilerini dikkatlice değerlendirmelisiniz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Veri Toplama ve Gizlilik</h2>
                <p className="mb-4">
                    Schopi, kullanıcıların sağladığı bilgileri (örneğin, oluşturulan listeler) daha iyi bir deneyim
                    sunmak için toplayabilir. Ancak, kullanıcı verileri üçüncü taraflarla paylaşılmayacaktır. Daha fazla
                    bilgi için
                    <a href="/privacy" className="text-blue-500 underline"> Gizlilik Politikası</a> sayfamıza göz
                    atabilirsiniz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Uygulama Kullanımı</h2>
                <p className="mb-4">
                    - Schopi'yi yalnızca yasal amaçlar için kullanabilirsiniz.
                </p>
                <p className="mb-4">
                    - Uygulama içerisinde paylaşılan listelerin ve içeriklerin diğer kullanıcılarla paylaşımı sizin
                    sorumluluğunuzdadır.
                </p>
                <p>
                    - Uygulamayı kötüye kullanmanız durumunda hesabınız askıya alınabilir veya silinebilir.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Sorumluluk Reddi</h2>
                <p className="mb-4">
                    Schopi, kullanıcılar tarafından oluşturulan veya paylaşılan içeriklerden sorumlu değildir.
                    Schopi’nin çalışması sırasında oluşabilecek herhangi bir kesinti veya veri kaybı durumunda
                    şirketimiz sorumluluk kabul etmez.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Lisans ve Fikri Mülkiyet</h2>
                <p>
                    Schopi’nin tasarımı, logosu ve tüm diğer içerikleri, fikri mülkiyet haklarına tabidir. Bu içerikleri
                    izinsiz kullanamaz, değiştiremez veya kopyalayamazsınız.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">8. Değişiklikler</h2>
                <p>
                    Bu Şartlar ve Koşullar zaman zaman güncellenebilir. Değişiklikler yapıldığında kullanıcılar
                    bilgilendirilecektir. Uygulamayı kullanmaya devam ederek yeni şartları kabul etmiş sayılırsınız.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">9. İletişim</h2>
                <p>
                    Eğer bu Şartlar ve Koşullar hakkında sorularınız varsa, bizimle
                    <a href="mailto:support@schopi.com"
                       className="text-blue-500 underline"> support@schopi.com</a> adresi üzerinden iletişime
                    geçebilirsiniz.
                </p>
            </section>
        </div>
    );
}

function TermsEN() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Acceptance and Terms of Use</h2>
                <p className="mb-4">
                    By using this application, you accept these Terms and Conditions. If you do not accept these terms,
                    please do not continue using Schopi.
                </p>
                <p>
                    Schopi allows users to create shopping lists, share these lists, and use the application as a
                    registered or guest user.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Service Description</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>List Creation and Management:</strong> Users can create shopping lists by selecting from
                        our database of ready-made products or by writing their own products.
                    </li>
                    <li>
                        <strong>Sharing Feature:</strong> Users can share the shopping lists they create with other
                        users.
                    </li>
                    <li>
                        <strong>Multi-Platform Support:</strong> Schopi can be used as both a mobile (iOS) and web
                        application.
                    </li>
                    <li>
                        <strong>Registered or Guest Use:</strong> Users can use the application as a registered or guest
                        user. However, more features may be offered to registered users.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
                <p className="mb-4">
                    - <strong>Registered Users:</strong> You must provide accurate and complete information when
                    creating an account. You are responsible for all activities that occur under your account.
                </p>
                <p className="mb-4">
                    - <strong>Guest Users:</strong> You can use the application without registering. However, some
                    features may only be available to registered users.
                </p>
                <p>
                    - <strong>Sharing and Security:</strong> When sharing lists created with Schopi, you should
                    carefully evaluate the access and permissions of the users you share with.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Data Collection and Privacy</h2>
                <p className="mb-4">
                    Schopi may collect information provided by users (e.g., created lists) to offer a better experience.
                    However, user data will not be shared with third parties. For more information, please see our
                    <a href="/privacy" className="text-blue-500 underline"> Privacy Policy</a> page.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Application Use</h2>
                <p className="mb-4">
                    - You may only use Schopi for lawful purposes.
                </p>
                <p className="mb-4">
                    - You are responsible for sharing lists and content shared within the application with other users.
                </p>
                <p>
                    - If you misuse the application, your account may be suspended or deleted.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Disclaimer of Liability</h2>
                <p className="mb-4">
                    Schopi is not responsible for content created or shared by users. Our company does not accept
                    responsibility for any interruptions or data loss that may occur during the operation of Schopi.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. License and Intellectual Property</h2>
                <p>
                    The design, logo, and all other content of Schopi are subject to intellectual property rights. You
                    may not use, modify, or copy this content without permission.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">8. Changes</h2>
                <p>
                    These Terms and Conditions may be updated from time to time. Users will be notified of any changes.
                    By continuing to use the application, you accept the new terms.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
                <p>
                    If you have any questions about these Terms and Conditions, please contact us at
                    <a href="mailto:support@schopi.com" className="text-blue-500 underline"> support@schopi.com</a>.
                </p>
            </section>
        </div>
    );
}
