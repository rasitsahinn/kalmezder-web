import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { eventsQuery, featuredNewsQuery, sideNewsQuery } from '@/sanity/lib/queries';
import HomeContactForm from '@/components/HomeContactForm';
import HeroMorphing from '@/components/HeroMorphing';

export const revalidate = 60;

export const metadata = {
  title: 'KAL Mezunlar Derneği | Anasayfa',
};

function formatDateTR(dateStr: string) {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const [, month, day] = dateStr.split('-');
  return { day, month: months[parseInt(month, 10) - 1] };
}

function formatFullDateTR(dateStr: string) {
  const months = [
    'Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
    'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'
  ];
  const [year, month, day] = dateStr.split('-');
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

export default async function HomePage() {
  const [events, featuredNews, sideNews] = await Promise.all([
    client.fetch(eventsQuery).catch(() => []),
    client.fetch(featuredNewsQuery).catch(() => null),
    client.fetch(sideNewsQuery).catch(() => []),
  ]);

  return (
    <>
      {/* SVG goo filter for morphing gradients */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* HERO */}
      <section id="hero-new" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Morphing gradient arka plan — mouse takipli */}
        <HeroMorphing />

        <div className="hero-inner-new">
          {/* Sol: metin */}
          <div>
            <h1 className="hero-title-new">
              Geçmişten<br />
              Geleceğe,<br />
              Birlikte
            </h1>
            <p className="hero-desc-new">
              1980&apos;den bu yana mezunlarımızı bir arada tutan,
              öğrencilerimize destek olan ve okul mirasımızı
              gururla yaşatan güçlü bir topluluk.
            </p>
          </div>

          {/* Sağ: madalyon */}
          <div className="hero-visual-wrap">
            <Image
              src="/kalmedpin.png"
              alt="KAL Mezunlar Derneği Pin"
              width={560}
              height={425}
              priority
              style={{
                width: '100%',
                maxWidth: '560px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))',
              }}
            />
            <div style={{
              textAlign: 'center',
              marginTop: '8px',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}>
              Kocaeli Anadolu Lisesi · 1980&apos;den beri
            </div>
          </div>

          {/* Hızlı aksiyon butonları — masaüstü + mobil */}
          <div className="building-actions">
            <Link href="/uye-ol" className="ba-btn">
              <span className="ba-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="9" r="5" stroke="white" strokeWidth="1.8" fill="none" />
                  <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  <circle cx="22" cy="6" r="5" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5" />
                  <line x1="22" y1="3.5" x2="22" y2="8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="19.5" y1="6" x2="24.5" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="ba-label">Üye Olun</span>
            </Link>
            <Link href="/bagis-yap" className="ba-btn">
              <span className="ba-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 16l2-7a2 2 0 012-2h1v9" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 13h3a2 2 0 012 2v1h2a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-4" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="7" r="5" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </span>
              <span className="ba-label">Bağış Yapın</span>
            </Link>
            <Link href="/aidat-ode" className="ba-btn">
              <span className="ba-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="7" width="22" height="15" rx="2.5" stroke="white" strokeWidth="1.8" fill="none" />
                  <rect x="3" y="11" width="22" height="4" fill="white" opacity="0.25" />
                  <line x1="8" y1="19" x2="13" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="15" y1="19" x2="18" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="ba-label">Aidat Ödeyin</span>
            </Link>
            <Link href="/bilgilerimi-guncelle" className="ba-btn">
              <span className="ba-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M18 4l6 6-13 13H5v-6L18 4z" stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
                  <line x1="15" y1="7" x2="21" y2="13" stroke="white" strokeWidth="1.5" />
                  <line x1="3" y1="25" x2="25" y2="25" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
              <span className="ba-label">Bilgileri Güncelleyin</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">44<sup>+</sup></div>
            <div className="stat-label">Yıllık Deneyim</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2800<sup>+</sup></div>
            <div className="stat-label">Aktif Üye</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">120<sup>+</sup></div>
            <div className="stat-label">Düzenlenen Etkinlik</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">340<sup>+</sup></div>
            <div className="stat-label">Verilen Burs</div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about-new" style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-tag">Hakkımızda</div>
          <h2 className="section-title">Kocaeli Anadolu Lisesi&apos;nin<br />Köklü Mezun Ailesi</h2>
          <div className="about-grid-new">
            <div className="about-text-new">
              <p>
                <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>KAL Mezunlar Derneği</strong>, 1980 yılından
                itibaren Kocaeli Anadolu Lisesi mezunlarını bir arada tutan, nesiller arası köprü kuran
                bir sivil toplum kuruluşudur.
              </p>
              <p>
                Mezunlarımız arasında güçlü bir iletişim ağı oluşturarak kariyer fırsatları,
                mentorluk programları ve sosyal etkinliklerle büyük bir aile olmayı sürdürüyoruz.
              </p>
              <p>
                Mevcut öğrencilerimize burs ve destek programlarıyla katkı sağlarken,
                okulumuzun fiziki altyapısının geliştirilmesine de öncülük ediyoruz.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/uye-ol" className="hero-btn-primary" style={{ fontSize: '14px', padding: '12px 24px' }}>
                  Üye Ol
                </Link>
                <Link href="/yonetim-kurulu" className="btn-outline-new">
                  Yönetim Kurulu
                </Link>
              </div>
            </div>
            <div className="about-visual-cards">
              <div className="about-card-new">
                <div className="about-card-icon-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h4>Burs Programı</h4>
                <p>Her yıl ihtiyaç sahibi başarılı öğrencilere burs vererek eğitime destek oluyoruz. 340+ öğrenci bu programdan faydalandı.</p>
              </div>
              <div className="about-card-new">
                <div className="about-card-icon-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="2.5"/>
                    <circle cx="4" cy="19" r="2.5"/>
                    <circle cx="20" cy="19" r="2.5"/>
                    <line x1="12" y1="7.5" x2="12" y2="13"/>
                    <line x1="12" y1="13" x2="4" y2="16.5"/>
                    <line x1="12" y1="13" x2="20" y2="16.5"/>
                  </svg>
                </div>
                <h4>Mezun Ağı</h4>
                <p>Kariyer ve mentorluk fırsatları için geniş mezun profesyonel ağı.</p>
              </div>
              <div className="about-card-new">
                <div className="about-card-icon-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14"/>
                    <rect x="9" y="13" width="6" height="8"/>
                  </svg>
                </div>
                <h4>Okul Desteği</h4>
                <p>Altyapı yatırımları ve proje destekleriyle okulumuzun yanındayız.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section id="actions-new">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-tag">Ne Yapmak İstersiniz?</div>
          <h2 className="section-title">Derneğimize Katkıda Bulunun</h2>
          <div className="actions-grid-new">
            <Link href="/uye-ol" className="action-card-new">
              <div className="action-icon-new">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <h3>Üye Ol</h3>
              <p>KAL ailesine katılın, etkinliklere öncelikli erişim ve mezun ağından yararlanın.</p>
              <span className="action-arrow-new">Başvur →</span>
            </Link>
            <Link href="/bagis-yap" className="action-card-new">
              <div className="action-icon-new">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Bağış Yap</h3>
              <p>Okula ve öğrencilere destek olmak için bağışta bulunun, geleceğe yatırım yapın.</p>
              <span className="action-arrow-new">Bağış Yap →</span>
            </Link>
            <Link href="/mentor-ol" className="action-card-new">
              <div className="action-icon-new">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Mentör Ol</h3>
              <p>Deneyimlerinizi paylaşın, genç mezunlara kariyer yolculuklarında rehberlik edin.</p>
              <span className="action-arrow-new">Başvur →</span>
            </Link>
            <Link href="/iletisim" className="action-card-new">
              <div className="action-icon-new">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>İletişime Geçin</h3>
              <p>Sorularınız ve önerileriniz için bizimle iletişime geçin.</p>
              <span className="action-arrow-new">İletişim →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="events-header">
            <div>
              <div className="section-tag">Etkinlikler</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Yaklaşan Etkinlikler</h2>
            </div>
            <Link href="/etkinlikler" className="btn-outline-new">Tümünü Gör</Link>
          </div>
          <div className="events-grid-new">
            {events.length > 0 ? events.slice(0, 3).map((ev: {
              _id: string; title: string; category?: string;
              date: string; description?: string; slug?: string;
            }) => {
              const { day, month } = formatDateTR(ev.date);
              return (
                <div key={ev._id} className="event-card-new">
                  <div className="event-img-new">
                    <div className="event-date-badge">
                      <strong>{day}</strong>
                      <span>{month}</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="event-body-new">
                    {ev.category && <div className="event-category-new">{ev.category}</div>}
                    <h3>{ev.title}</h3>
                    {ev.description && <p>{ev.description}</p>}
                    <Link href={ev.slug ? `/etkinlikler/${ev.slug}` : '/etkinlikler'} className="event-link-new">
                      Detayları Gör →
                    </Link>
                  </div>
                </div>
              );
            }) : (
              <>
                <div className="event-card-new">
                  <div className="event-img-new">
                    <div className="event-date-badge">
                      <strong>15</strong>
                      <span>Nis</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="event-body-new">
                    <div className="event-category-new">Yıllık Buluşma</div>
                    <h3>2025 Mezun Gecesi</h3>
                    <p>Tüm mezunlarımızı bir araya getiren yıllık buluşmamız.</p>
                    <a href="#" className="event-link-new">Detayları Gör →</a>
                  </div>
                </div>
                <div className="event-card-new">
                  <div className="event-img-new">
                    <div className="event-date-badge">
                      <strong>22</strong>
                      <span>Mar</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="event-body-new">
                    <div className="event-category-new">Kariyer</div>
                    <h3>Kariyer Söyleşisi: Mühendislik Dünyası</h3>
                    <p>Mezunlarımızla kariyer söyleşisi ve networking etkinliği.</p>
                    <a href="#" className="event-link-new">Detayları Gör →</a>
                  </div>
                </div>
                <div className="event-card-new">
                  <div className="event-img-new">
                    <div className="event-date-badge">
                      <strong>10</strong>
                      <span>May</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="event-body-new">
                    <div className="event-category-new">Burs</div>
                    <h3>Burs Töreni 2025</h3>
                    <p>Yılın burs ödülleri takdim töreni ve kutlama etkinliği.</p>
                    <a href="#" className="event-link-new">Detayları Gör →</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership-section">
        <div className="membership-inner-new">
          <div className="membership-content-new">
            <div className="section-tag">Üyelik</div>
            <h2 className="section-title">KAL Ailesinin<br />Bir Parçası Olun</h2>
            <p>
              Yıllık aidat ödeyen üyelerimiz derneğin tüm etkinliklerine katılım hakkı,
              özel avantajlar ve mezun ağına erişim gibi ayrıcalıklardan yararlanır.
            </p>
            <div className="membership-benefits-new">
              {[
                'Tüm etkinliklere öncelikli katılım hakkı',
                'Mezun ağı ve kariyer fırsatlarına erişim',
                'Aylık dernek bültenine abone olma',
                'Genel Kurul\'da oy kullanma hakkı',
                'Üyelik kartı ve sertifikası',
              ].map((b, i) => (
                <div key={i} className="benefit-item-new">
                  <div className="benefit-check-new">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  {b}
                </div>
              ))}
            </div>
            <Link href="/uye-ol" className="hero-btn-primary" style={{ display: 'inline-block' }}>
              Hemen Üye Ol
            </Link>
          </div>
          <div>
            <div className="membership-card-new">
              <h3>Yıllık Üyelik</h3>
              <div className="price">₺500</div>
              <div className="price-note">yıllık aidat · KDV dahil</div>
              <div className="membership-card-divider" />
              {[
                'Etkinliklere öncelikli katılım',
                'Mezun ağına tam erişim',
                'Burs programı desteği',
                'Dernek bülteni',
                'Genel Kurul oy hakkı',
              ].map((f, i) => (
                <div key={i} className="mem-feature-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </div>
              ))}
              <Link href="/uye-ol" className="btn-light-new">Üye Olmak İstiyorum</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '0' }}>
            <div>
              <div className="section-tag">Duyurular</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Son Haberler</h2>
            </div>
            <Link href="/duyurular" className="btn-outline-new">Tümünü Gör</Link>
          </div>
          <div className="news-grid-new">
            <div className="news-main-new">
              <div className="news-main-img-new">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="news-main-body-new">
                {featuredNews ? (
                  <>
                    <span className="news-tag-new">{featuredNews.category || 'Önemli Duyuru'}</span>
                    <h2>{featuredNews.title}</h2>
                    {featuredNews.description && <p>{featuredNews.description}</p>}
                  </>
                ) : (
                  <>
                    <span className="news-tag-new">Önemli Duyuru</span>
                    <h2>2025–2026 Burs Başvuruları Açıldı</h2>
                    <p>
                      Kocaeli Anadolu Lisesi&apos;nde okuyan ihtiyaç sahibi ve başarılı öğrenciler için
                      burs başvuruları başladı. Son başvuru tarihi 30 Nisan 2025.
                    </p>
                  </>
                )}
              </div>
              <div className="news-meta-new">
                <span>
                  {featuredNews?.publishedAt
                    ? formatFullDateTR(featuredNews.publishedAt)
                    : '15 Mart 2025'}
                </span>
                <Link href={featuredNews?.slug ? `/duyurular/${featuredNews.slug}` : '/duyurular'}>
                  Devamını Oku →
                </Link>
              </div>
            </div>
            <div className="news-list-new">
              {sideNews.length > 0 ? sideNews.map((item: {
                _id: string; title: string; category?: string;
                publishedAt: string; slug?: string;
              }) => (
                <Link
                  key={item._id}
                  href={item.slug ? `/duyurular/${item.slug}` : '/duyurular'}
                  className="news-item-new"
                >
                  {item.category && <div className="news-item-tag-new">{item.category}</div>}
                  <h4>{item.title}</h4>
                  {item.publishedAt && (
                    <div className="news-item-date-new">{formatFullDateTR(item.publishedAt)}</div>
                  )}
                </Link>
              )) : (
                <>
                  <a href="#" className="news-item-new">
                    <div className="news-item-tag-new">Etkinlik</div>
                    <h4>Bahar Buluşması için kayıtlar başladı</h4>
                    <div className="news-item-date-new">10 Mart 2025</div>
                  </a>
                  <a href="#" className="news-item-new">
                    <div className="news-item-tag-new">Dernek</div>
                    <h4>Yönetim kurulu toplantısı kararları açıklandı</h4>
                    <div className="news-item-date-new">2 Mart 2025</div>
                  </a>
                  <a href="#" className="news-item-new">
                    <div className="news-item-tag-new">Okul</div>
                    <h4>Yeni laboratuvar bağışı gerçekleştirildi</h4>
                    <div className="news-item-date-new">20 Şubat 2025</div>
                  </a>
                  <a href="#" className="news-item-new">
                    <div className="news-item-tag-new">Burs</div>
                    <h4>2024–2025 burs listesi açıklandı</h4>
                    <div className="news-item-date-new">5 Şubat 2025</div>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-tag">İletişim</div>
          <h2 className="section-title">Bizimle İletişime Geçin</h2>
          <div className="contact-grid-new">
            <div className="contact-info-new">
              <h3>İletişim Bilgileri</h3>
              <div className="contact-detail-new">
                <div className="contact-icon-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-detail-text-new">
                  <strong>Adres</strong>
                  <span>Kocaeli Anadolu Lisesi<br />İzmit, Kocaeli</span>
                </div>
              </div>
              <div className="contact-detail-new">
                <div className="contact-icon-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-detail-text-new">
                  <strong>E-posta</strong>
                  <span>iletisim@kalmezunlar.org</span>
                </div>
              </div>
              <div className="contact-detail-new">
                <div className="contact-icon-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 8.34 8.34l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-detail-text-new">
                  <strong>Telefon / WhatsApp</strong>
                  <span>+90 (262) 000 00 00</span>
                </div>
              </div>
              <div className="contact-detail-new">
                <div className="contact-icon-new">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="contact-detail-text-new">
                  <strong>Çalışma Saatleri</strong>
                  <span>Pazartesi – Cuma · 09:00 – 17:00</span>
                </div>
              </div>
            </div>
            <HomeContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
