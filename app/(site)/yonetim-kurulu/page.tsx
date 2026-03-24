export default function YonetimKurulu() {
  const boardMembers = [
    { initials: 'AY', name: 'Ahmet Yılmaz', role: 'Başkan', year: '1995 Mezunu' },
    { initials: 'FD', name: 'Fatma Demir', role: 'Başkan Yardımcısı', year: '2001 Mezunu' },
    { initials: 'MK', name: 'Mehmet Kaya', role: 'Genel Sekreter', year: '1998 Mezunu' },
    { initials: 'AÇ', name: 'Ayşe Çelik', role: 'Sayman', year: '2003 Mezunu' },
    { initials: 'MŞ', name: 'Mustafa Şahin', role: 'Üye', year: '1992 Mezunu' },
    { initials: 'ZA', name: 'Zeynep Arslan', role: 'Üye', year: '2007 Mezunu' },
    { initials: 'AK', name: 'Ali Koç', role: 'Üye', year: '1988 Mezunu' },
  ];

  const auditors = [
    { initials: 'HY', name: 'Hatice Yıldız', role: 'Denetim Başkanı', year: '1996 Mezunu' },
    { initials: 'OT', name: 'Osman Türk', role: 'Denetçi', year: '2000 Mezunu' },
    { initials: 'NA', name: 'Nilüfer Aydın', role: 'Denetçi', year: '2004 Mezunu' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Dernek</div>
          <h1 className="page-title">Yönetim Kurulu</h1>
          <p className="page-desc">Derneğimizi yöneten seçilmiş yöneticilerimiz</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Yönetim</div>
              <h2 className="section-title">Yönetim Kurulu Üyeleri</h2>
            </div>
          </div>
          <div className="board-grid">
            {boardMembers.map((m) => (
              <div className="board-card" key={m.name}>
                <div className="board-avatar">{m.initials}</div>
                <div className="board-name">{m.name}</div>
                <div className="board-role">{m.role}</div>
                <div className="board-year">{m.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Denetim</div>
              <h2 className="section-title">Denetim Kurulu</h2>
            </div>
          </div>
          <div className="board-grid">
            {auditors.map((m) => (
              <div className="board-card" key={m.name}>
                <div className="board-avatar">{m.initials}</div>
                <div className="board-name">{m.name}</div>
                <div className="board-role">{m.role}</div>
                <div className="board-year">{m.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
