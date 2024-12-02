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
            <Terms />
        </Container>
    )
}

function Terms() {
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
