'use client';

import { useEffect, useState, useRef } from 'react';

export default function InvitePage() {
    const [appOpened, setAppOpened] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState(false);
    const appOpenedRef = useRef(false);
    const attemptCountRef = useRef(0);

    useEffect(() => {
        // URL'den token'ı al
        const urlParams = new URLSearchParams(window.location.search);
        const tokenParam = urlParams.get('token');

        if (!tokenParam) {
            setError(true);
            return;
        }

        setToken(tokenParam);

        // Token'ı localStorage'a kaydet (fallback için)
        if (typeof window !== 'undefined') {
            localStorage.setItem('schopi_invite_token', tokenParam);
        }

        const deepLink = `schopi://invite?token=${encodeURIComponent(tokenParam)}`;
        const appStoreUrl = 'https://apps.apple.com/tr/app/schopi/YOUR_APP_ID';

        function tryOpenApp() {
            attemptCountRef.current += 1;
            console.log(`Uygulama açılmaya çalışılıyor (deneme ${attemptCountRef.current})...`);

            // iOS için deep link
            window.location.href = deepLink;

            // Alternatif: iframe kullanarak (bazı iOS versiyonlarında daha iyi çalışır)
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = deepLink;
            document.body.appendChild(iframe);

            setTimeout(() => {
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
            }, 1000);
        }

        // Sayfa görünürlüğü değiştiğinde kontrol et
        const handleVisibilityChange = () => {
            if (document.hidden) {
                appOpenedRef.current = true;
                setAppOpened(true);
                console.log('✅ Uygulama muhtemelen açıldı');
            }
        };

        // Blur eventi - kullanıcı başka bir uygulamaya geçti
        const handleBlur = () => {
            appOpenedRef.current = true;
            setAppOpened(true);
            console.log('✅ Uygulama muhtemelen açıldı (blur)');
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);

        // 500ms bekle, sonra dene
        const openTimer = setTimeout(tryOpenApp, 500);

        // 3 saniye sonra fallback göster
        const fallbackTimer = setTimeout(() => {
            if (!appOpenedRef.current) {
                console.log('⚠️ Uygulama açılmadı, fallback gösteriliyor');
                const fallback = document.getElementById('fallback');
                if (fallback) {
                    fallback.classList.add('show');
                }
            }
        }, 3000);

        // 5 saniye sonra hala açılmadıysa App Store'a yönlendir
        const redirectTimer = setTimeout(() => {
            if (!appOpenedRef.current && !document.hidden) {
                console.log('⚠️ App Store\'a yönlendiriliyor...');
                setTimeout(() => {
                    window.location.href = appStoreUrl;
                }, 1500);
            }
        }, 5000);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(fallbackTimer);
            clearTimeout(redirectTimer);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('blur', handleBlur);
        };
    }, []);

    const handleOpenApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (token) {
            const deepLink = `schopi://invite?token=${encodeURIComponent(token)}`;
            window.location.href = deepLink;
        }
    };

    if (error) {
        return (
            <div className="container">
                <div id="message">
                    <h2>❌ Hata</h2>
                    <p>Geçersiz davet linki</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div id="message">
                {/* Logo eklenebilir */}
                {/* <img src="logo.png" alt="Schopi" className="logo"> */}

                <h2>🎉 Liste Daveti!</h2>
                <p>Schopi uygulamasına yönlendiriliyorsunuz...</p>
                <div className="loader"></div>

                <div className="fallback" id="fallback">
                    <p>Uygulama açılmadı mı?</p>
                    <a href="#" id="openAppBtn" onClick={handleOpenApp} className="btn">
                        Uygulamayı Aç
                    </a>
                    <br />
                    <br />
                    <p style={{ fontSize: '14px' }}>Uygulama yüklü değilse:</p>
                    <a href="https://apps.apple.com/tr/app/schopi/YOUR_APP_ID" id="appStoreBtn" className="btn">
                        App Store&apos;dan İndir
                    </a>
                </div>
            </div>

            <style jsx>{`
                .container {
                    text-align: center;
                    padding: 40px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                }
                .logo {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 20px;
                }
                .loader {
                    margin: 20px auto;
                    width: 50px;
                    height: 50px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                h2 {
                    color: #333;
                    margin-bottom: 10px;
                    font-size: 24px;
                }
                p {
                    color: #666;
                    line-height: 1.6;
                }
                .btn {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 14px 40px;
                    background: #667eea;
                    color: white;
                    text-decoration: none;
                    border-radius: 25px;
                    font-weight: 600;
                    transition: all 0.3s;
                    cursor: pointer;
                }
                .btn:hover {
                    background: #5568d3;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
                }
                .fallback {
                    display: none;
                    margin-top: 20px;
                }
                .fallback.show {
                    display: block;
                }
            `}</style>
        </div>
    );
}

