import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-mark">
            <strong className="footer-brand-title">KAL Mezunlar Derneği</strong>
            <span className="footer-brand-subtitle">Kocaeli Anadolu Lisesi Mezunları</span>
            <span className="footer-brand-year">1980&apos;den beri</span>
          </div>
          <p>1980&apos;den bu yana mezunlarımızı bir arada tutan köklü dernek.</p>
        </div>

        <div className="footer-col">
          <h5>Dernek</h5>
          <ul>
            <li><Link href="/#about">Hakkımızda</Link></li>
            <li><Link href="/yonetim-kurulu">Yönetim Kurulu</Link></li>
            <li><Link href="/tuzuk">Tüzük</Link></li>
            <li><Link href="/mali-raporlar">Mali Raporlar</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Üyelik</h5>
          <ul>
            <li><Link href="/uye-ol">Üye Ol</Link></li>
            <li><Link href="/aidat-ode">Aidat Öde</Link></li>
            <li><Link href="/bilgilerimi-guncelle">Bilgilerimi Güncelle</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Destek</h5>
          <ul>
            <li><Link href="/bagis-yap">Bağış Yap</Link></li>
            <li><Link href="/burs-basvurusu">Burs Başvurusu</Link></li>
            <li><Link href="/mentor-ol">Mentör Ol</Link></li>
            <li><Link href="/#contact">İletişim</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 KAL Mezunlar Derneği · Kocaeli Anadolu Lisesi</span>
        <span>Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
