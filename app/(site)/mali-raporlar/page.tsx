import Link from 'next/link';

export default function MaliRaporlar() {
  const reports = [
    { donem: '2025', tur: 'Gelir-Gider Tablosu', tarih: '15 Şubat 2026' },
    { donem: '2025', tur: 'Bağımsız Denetim Özeti', tarih: '28 Şubat 2026' },
    { donem: '2024', tur: 'Gelir-Gider Tablosu', tarih: '12 Şubat 2025' },
    { donem: '2024', tur: 'Bütçe Gerçekleşme Raporu', tarih: '20 Mart 2025' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Şeffaflık</div>
          <h1 className="page-title">Mali Raporlar</h1>
          <p className="page-desc">Derneğimizin yıllık gelir-gider tabloları ve bağımsız denetim raporları.</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Arşiv</div>
              <h2 className="section-title">Yıllık Rapor Arşivi</h2>
            </div>
          </div>
          <table className="reports-table">
            <thead>
              <tr>
                <th>Dönem</th>
                <th>Rapor Türü</th>
                <th>Yayın Tarihi</th>
                <th>İndir</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r, i) => (
                <tr key={i}>
                  <td>{r.donem}</td>
                  <td>{r.tur}</td>
                  <td>{r.tarih}</td>
                  <td><a href="#">PDF İndir</a></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Detaylı belge talepleriniz için{' '}
            <Link href="/#contact">iletişim formu</Link> üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="section cream">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">İlkeler</div>
              <h2 className="section-title">Mali İlkeler</h2>
            </div>
          </div>
          <p className="info">
            Derneğimiz mali süreçlerde hesap verebilirlik, düzenli raporlama ve kurumsal denetim ilkelerine bağlıdır.
            Tüm mali hareketler yönetim ve denetim kurullarının kontrolünden geçer.
          </p>
        </div>
      </section>
    </>
  );
}
