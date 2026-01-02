import Link from 'next/link';

export default function InviteExpiredPage() {
    return (
        <div className="container">
            <h2>⏰ Davet Süresi Dolmuş</h2>
            <p>Bu davet linkinin süresi dolmuş. Lütfen yeni bir davet isteyin.</p>
            <Link href="https://www.schopi.com" className="btn">
                Ana Sayfaya Dön
            </Link>

            <style jsx>{`
                .container {
                    text-align: center;
                    padding: 40px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
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
                }
                .btn:hover {
                    background: #5568d3;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
                }
            `}</style>
        </div>
    );
}

