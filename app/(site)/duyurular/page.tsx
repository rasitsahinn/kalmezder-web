import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allNewsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata = {
  title: 'Duyurular | KAL Mezunlar Derneği',
  description: 'KAL Mezunlar Derneği duyuruları ve haberleri.',
};

function formatFullDateTR(dateStr: string) {
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
  ];
  const [year, month, day] = dateStr.split('-');
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

type NewsItem = {
  _id: string;
  title: string;
  category?: string;
  publishedAt: string;
  description?: string;
  featured?: boolean;
  slug?: string;
  image?: string;
};

export default async function DuyurularPage() {
  const news: NewsItem[] = await client.fetch(allNewsQuery).catch(() => []);

  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="section-inner">

        {/* Başlık */}
        <div className="ed-head" style={{ marginBottom: '48px' }}>
          <div>
            <div className="section-tag">Duyurular</div>
            <h1 className="section-title">Tüm Duyurular</h1>
          </div>
          <Link href="/" className="btn-outline" style={{ fontSize: '13px' }}>
            ← Anasayfa
          </Link>
        </div>

        {news.length === 0 ? (
          <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
            Henüz yayınlanmış duyuru bulunmuyor.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {news.map((item) => (
              <Link
                key={item._id}
                href={item.slug ? `/duyurular/${item.slug}` : '#'}
                className="nl-item"
                style={{ padding: '24px 0', display: 'block', textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                  {/* Tarih kutusu */}
                  <div style={{
                    minWidth: '72px',
                    textAlign: 'center',
                    background: 'rgba(16,37,68,0.05)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    flexShrink: 0,
                  }}>
                    <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1 }}>
                      {item.publishedAt ? item.publishedAt.split('-')[2] : '—'}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '3px' }}>
                      {item.publishedAt
                        ? ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'][parseInt(item.publishedAt.split('-')[1], 10) - 1]
                        : ''}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '2px' }}>
                      {item.publishedAt ? item.publishedAt.split('-')[0] : ''}
                    </div>
                  </div>

                  {/* İçerik */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {item.category && (
                      <div className="nl-label" style={{ marginBottom: '6px' }}>{item.category}</div>
                    )}
                    <h2 style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      margin: '0 0 8px',
                      lineHeight: 1.4,
                    }}>
                      {item.featured && <span style={{ marginRight: '6px' }}>⭐</span>}
                      {item.title}
                    </h2>
                    {item.description && (
                      <p style={{
                        fontSize: '14px',
                        color: 'var(--gray)',
                        lineHeight: 1.7,
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Görsel */}
                  {item.image && (
                    <div style={{ flexShrink: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '72px',
                          height: '72px',
                          objectFit: 'cover',
                          borderRadius: '6px',
                          display: 'block',
                        }}
                      />
                    </div>
                  )}

                  {/* Ok */}
                  <div style={{ color: 'var(--gold)', fontSize: '18px', alignSelf: 'center', flexShrink: 0 }}>
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
