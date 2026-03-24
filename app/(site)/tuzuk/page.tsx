export default function Tuzuk() {
  const rules = [
    {
      title: 'Amaç ve Kapsam',
      body: 'Derneğimizin temel amacı mezunlar arasındaki dayanışmayı güçlendirmek, eğitim ve sosyal projeler üretmek, okul kültürünü yaşatmaktır.',
    },
    {
      title: 'Üyelik Koşulları',
      body: 'Kocaeli Anadolu Lisesi mezunları veya tüzükte belirtilen şartları sağlayan kişiler üyelik başvurusunda bulunabilir.',
    },
    {
      title: 'Genel Kurul',
      body: 'Genel kurul derneğin en yetkili organıdır. Olağan toplantılar tüzükte belirtilen dönemlerde gerçekleştirilir.',
    },
    {
      title: 'Yönetim ve Denetim',
      body: 'Yönetim kurulu derneğin yürütme faaliyetlerini sürdürür, denetim kurulu mali ve idari süreçlerin uygunluğunu takip eder.',
    },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Dernek</div>
          <h1 className="page-title">Dernek Tüzüğü</h1>
          <p className="page-desc">
            KAL Mezunlar Derneği tüzüğü, derneğin amaçlarını, üyelik koşullarını ve çalışma esaslarını belirler.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Tüzük</div>
              <h2 className="section-title">Temel Hükümler</h2>
            </div>
          </div>
          <div className="rule-grid">
            {rules.map((r) => (
              <div className="rule-card" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Doküman</div>
              <h2 className="section-title">Tüzük Dokümanı</h2>
            </div>
          </div>
          <div className="download">
            <p>Güncel tüzük metnini PDF olarak indirebilirsiniz.</p>
            <a href="#" className="btn-primary">Tüzüğü İndir (PDF)</a>
          </div>
        </div>
      </section>
    </>
  );
}
