import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import SchoolBuildingSVG from '@/components/SchoolBuildingSVG';
import { client } from '@/sanity/lib/client';
import { eventsQuery, featuredNewsQuery, sideNewsQuery } from '@/sanity/lib/queries';

// Sanity'den gelen içerik her 60 saniyede bir ISR ile yenilenir
export const revalidate = 60;

export const metadata = {
  title: 'KAL Mezunlar Derneği | Anasayfa',
};

// Türkçe tarih formatı: "15 Nis", "22 Mar"
function formatDateTR(dateStr: string) {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const [, month, day] = dateStr.split('-');
  return { day, month: months[parseInt(month, 10) - 1] };
}

// "15 Mart 2025" formatı
function formatFullDateTR(dateStr: string) {
  const months = [
    'Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
    'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'
  ];
  const [year, month, day] = dateStr.split('-');
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

export default async function HomePage() {
  // Sanity'den veri çek — hata olursa fallback veriler kullanılır
  const [events, featuredNews, sideNews] = await Promise.all([
    client.fetch(eventsQuery).catch(() => []),
    client.fetch(featuredNewsQuery).catch(() => null),
    client.fetch(sideNewsQuery).catch(() => []),
  ]);

  return (
    <>
      {/* HERO — editorial */}
      <section id="hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-editorial">

          {/* İki sütunlu gövde */}
          <div className="hero-body">
            <div className="hero-left">
              <div className="hero-year-bg" aria-hidden="true">1980</div>
              <h1 className="hero-title">
                Geçmişten<br />
                <em>Geleceğe,</em><br />
                Birlikte
              </h1>
              <div className="hero-gold-rule" />
              <p className="hero-desc">
                1980&apos;den bu yana mezunlarımızı bir arada tutan,
                öğrencilerimize destek olan ve okul mirasımızı
                gururla yaşatan güçlü bir topluluk.
              </p>
            </div>

            <div className="hero-col-rule" />

            <div className="hero-right">
              <SchoolBuildingSVG />
            </div>
          </div>

          {/* Alt aksiyon şeridi */}
          <div className="hero-strip">
            <Link href="/uye-ol" className="hs-item">
              <span className="hs-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </span>
              <span className="hs-label">Üye Olun</span>
              <span className="hs-arrow">→</span>
            </Link>
            <Link href="/bagis-yap" className="hs-item">
              <span className="hs-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </span>
              <span className="hs-label">Bağış Yapın</span>
              <span className="hs-arrow">→</span>
            </Link>
            <Link href="/aidat-ode" className="hs-item">
              <span className="hs-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
              </span>
              <span className="hs-label">Aidat Ödeyin</span>
              <span className="hs-arrow">→</span>
            </Link>
            <Link href="/bilgilerimi-guncelle" className="hs-item">
              <span className="hs-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </span>
              <span className="hs-label">Bilgileri Güncelleyin</span>
              <span className="hs-arrow">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Hakkımızda</div>
              <h2 className="section-title">Kocaeli Anadolu Lisesi&apos;nin<br />Köklü Mezun Ailesi</h2>
            </div>
          </div>
          <div className="about-cols">
            <div className="about-text">
              <p>
                <strong>KAL Mezunlar Derneği</strong>, 1980 yılından itibaren Kocaeli Anadolu Lisesi
                mezunlarını bir arada tutan, nesiller arası köprü kuran bir sivil toplum kuruluşudur.
              </p>
              <p>
                Mezunlarımız arasında güçlü bir iletişim ağı oluşturarak kariyer fırsatları,
                mentorluk programları ve sosyal etkinliklerle büyük bir aile olmayı sürdürüyoruz.
              </p>
              <p>
                Mevcut öğrencilerimize burs ve destek programlarıyla katkı sağlarken,
                okulumuzun fiziki altyapısının geliştirilmesine de öncülük ediyoruz.
              </p>
            </div>
            <div className="col-rule" />
            <div className="about-features">
              <div className="af-item">
                <span className="af-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </span>
                <div className="af-body">
                  <h4>Burs Programı</h4>
                  <p>Her yıl ihtiyaç sahibi başarılı öğrencilere burs vererek eğitime destek oluyoruz.</p>
                </div>
              </div>
              <div className="af-item">
                <span className="af-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="2.5"/>
                    <circle cx="4" cy="19" r="2.5"/>
                    <circle cx="20" cy="19" r="2.5"/>
                    <line x1="12" y1="7.5" x2="12" y2="13"/>
                    <line x1="12" y1="13" x2="4" y2="16.5"/>
                    <line x1="12" y1="13" x2="20" y2="16.5"/>
                  </svg>
                </span>
                <div className="af-body">
                  <h4>Mezun Ağı</h4>
                  <p>Kariyer ve mentorluk fırsatları için geniş mezun profesyonel ağı.</p>
                </div>
              </div>
              <div className="af-item">
                <span className="af-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18"/>
                    <path d="M3 7l9-4 9 4"/>
                    <path d="M4 7v14"/>
                    <path d="M20 7v14"/>
                    <rect x="9" y="13" width="6" height="8"/>
                    <line x1="9" y1="10" x2="9" y2="10.5"/>
                    <line x1="15" y1="10" x2="15" y2="10.5"/>
                  </svg>
                </span>
                <div className="af-body">
                  <h4>Okul Desteği</h4>
                  <p>Altyapı yatırımları ve proje destekleriyle okulumuzun yanındayız.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Etkinlikler</div>
              <h2 className="section-title">Yaklaşan Etkinlikler</h2>
            </div>
            <Link href="/etkinlikler" className="btn-outline">Tümünü Gör</Link>
          </div>
          <div className="ee-list">
            {events.length > 0 ? events.map((ev: {
              _id: string; title: string; category?: string;
              date: string; description?: string; slug?: string;
            }) => {
              const { day, month } = formatDateTR(ev.date);
              return (
                <div key={ev._id} className="ee-item">
                  <div className="ee-date">
                    <strong>{day}</strong>
                    <span>{month}</span>
                  </div>
                  <div className="ee-body">
                    {ev.category && <div className="ee-cat">{ev.category}</div>}
                    <h3>{ev.title}</h3>
                    {ev.description && <p>{ev.description}</p>}
                  </div>
                  <a href={ev.slug ? `/etkinlikler/${ev.slug}` : '#'} className="ee-link">Detaylar →</a>
                </div>
              );
            }) : (
              /* Sanity'de veri yoksa fallback */
              <>
                <div className="ee-item">
                  <div className="ee-date"><strong>15</strong><span>Nis</span></div>
                  <div className="ee-body">
                    <div className="ee-cat">Yıllık Buluşma</div>
                    <h3>2025 Mezun Gecesi</h3>
                    <p>Tüm mezunlarımızı bir araya getiren yıllık buluşmamız.</p>
                  </div>
                  <a href="#" className="ee-link">Detaylar →</a>
                </div>
                <div className="ee-item">
                  <div className="ee-date"><strong>22</strong><span>Mar</span></div>
                  <div className="ee-body">
                    <div className="ee-cat">Kariyer</div>
                    <h3>Kariyer Söyleşisi: Mühendislik Dünyası</h3>
                    <p>Mezunlarımızla kariyer söyleşisi ve networking etkinliği.</p>
                  </div>
                  <a href="#" className="ee-link">Detaylar →</a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership">
        <div className="section-inner">
          <div className="ed-head me-head">
            <div>
              <div className="section-tag me-tag">Üyelik</div>
              <h2 className="section-title me-title">KAL Ailesinin<br />Bir Parçası Olun</h2>
            </div>
          </div>
          <div className="me-cols">
            <div className="me-left">
              <p>
                Yıllık aidat ödeyen üyelerimiz derneğin tüm etkinliklerine
                katılım ve özel avantajlardan yararlanır. Üyelik, hem okula
                destek hem de mezun ağına erişim anlamına gelir.
              </p>
              <Link href="/uye-ol" className="btn-light">Hemen Üye Ol</Link>
            </div>
            <div className="col-rule me-rule" />
            <div className="me-right">
              <div className="me-feat">Tüm etkinliklere öncelikli katılım hakkı</div>
              <div className="me-feat">Mezun ağı ve kariyer fırsatlarına erişim</div>
              <div className="me-feat">Aylık dernek bültenine abone olma</div>
              <div className="me-feat">Genel Kurul&apos;da oy kullanma hakkı</div>
              <div className="me-feat">Üyelik kartı ve sertifikası</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">Duyurular</div>
            </div>
            <Link href="/duyurular" className="btn-outline">Tümünü Gör</Link>
          </div>
          <div className="news-ed">
            {/* Öne çıkan duyuru */}
            <div className="news-featured">
              {featuredNews ? (
                <>
                  <div className="nf-label">{featuredNews.category || 'Önemli Duyuru'}</div>
                  <h2 className="nf-title">{featuredNews.title}</h2>
                  {featuredNews.description && (
                    <p className="nf-desc">{featuredNews.description}</p>
                  )}
                  <div className="nf-meta">
                    {featuredNews.publishedAt && (
                      <span>{formatFullDateTR(featuredNews.publishedAt)}</span>
                    )}
                    <a href={featuredNews.slug ? `/duyurular/${featuredNews.slug}` : '#'}>
                      Devamını Oku →
                    </a>
                  </div>
                </>
              ) : (
                /* Fallback — Sanity'de öne çıkan duyuru yoksa */
                <>
                  <div className="nf-label">Önemli Duyuru</div>
                  <h2 className="nf-title">2025–2026 Burs Başvuruları Açıldı</h2>
                  <p className="nf-desc">
                    Kocaeli Anadolu Lisesi&apos;nde okuyan ihtiyaç sahibi ve başarılı öğrenciler için
                    burs başvuruları başladı.
                  </p>
                  <div className="nf-meta">
                    <span>15 Mart 2025</span>
                    <a href="#">Devamını Oku →</a>
                  </div>
                </>
              )}
            </div>
            <div className="col-rule" />
            {/* Yan duyuru listesi */}
            <div className="nl-list">
              {sideNews.length > 0 ? sideNews.map((item: {
                _id: string; title: string; category?: string;
                publishedAt: string; slug?: string;
              }) => (
                <a
                  key={item._id}
                  href={item.slug ? `/duyurular/${item.slug}` : '#'}
                  className="nl-item"
                >
                  {item.category && <div className="nl-label">{item.category}</div>}
                  <h4>{item.title}</h4>
                  {item.publishedAt && (
                    <div className="nl-date">{formatFullDateTR(item.publishedAt)}</div>
                  )}
                </a>
              )) : (
                /* Fallback listesi */
                <>
                  <a href="#" className="nl-item">
                    <div className="nl-label">Etkinlik</div>
                    <h4>Bahar Buluşması için kayıtlar başladı</h4>
                    <div className="nl-date">10 Mart 2025</div>
                  </a>
                  <a href="#" className="nl-item">
                    <div className="nl-label">Dernek</div>
                    <h4>Yönetim kurulu toplantısı kararları açıklandı</h4>
                    <div className="nl-date">2 Mart 2025</div>
                  </a>
                  <a href="#" className="nl-item">
                    <div className="nl-label">Okul</div>
                    <h4>Yeni laboratuvar bağışı gerçekleştirildi</h4>
                    <div className="nl-date">20 Şubat 2025</div>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-inner">
          <div className="ed-head">
            <div>
              <div className="section-tag">İletişim</div>
              <h2 className="section-title">Bizimle İletişime Geçin</h2>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-detail">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div className="contact-detail-text">
                  <strong>Adres</strong>
                  <span>Kocaeli Anadolu Lisesi<br />İzmit, Kocaeli</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div className="contact-detail-text">
                  <strong>E-posta</strong>
                  <span>iletisim@kalmezunlar.org</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 8.34 8.34l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div className="contact-detail-text">
                  <strong>Telefon</strong>
                  <span>+90 (262) 000 00 00</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <div className="contact-detail-text">
                  <strong>Çalışma Saatleri</strong>
                  <span>Pazartesi – Cuma · 09:00 – 17:00</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
