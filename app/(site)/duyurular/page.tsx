import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allNewsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata = {
  title: 'Duyurular | KAL Mezunlar Derneği',
  description: 'KAL Mezunlar Derneği duyuruları ve haberleri.',
};

const MONTHS_SHORT = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];

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
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Duyurular</div>
          <h1 className="page-title">Tüm Duyurular</h1>
          <p className="page-desc">
            Derneğimizden son haberler, etkinlik duyuruları ve önemli bilgilendirmeler.
          </p>
        </div>
      </div>

      {/* İçerik */}
      <section className="section">
        <div className="section-inner">

          {/* Geri butonu */}
          <div style={{ marginBottom: '32px' }}>
            <Link href="/" className="btn-outline" style={{ fontSize: '13px' }}>
              ← Anasayfa
            </Link>
          </div>

          {news.length === 0 ? (
            <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
              Henüz yayınlanmış duyuru bulunmuyor.
            </p>
          ) : (
            <div className="news-list-page">
              {news.map((item) => {
                const parts = item.publishedAt?.split('-') ?? [];
                const day   = parts[2] ? parseInt(parts[2], 10) : '—';
                const mon   = parts[1] ? MONTHS_SHORT[parseInt(parts[1], 10) - 1] : '';
                const year  = parts[0] ?? '';
                return (
                  <Link
                    key={item._id}
                    href={item.slug ? `/duyurular/${item.slug}` : '#'}
                    className="news-list-row"
                  >
                    {/* Tarih */}
                    <div className="news-row-date">
                      <span className="news-row-day">{day}</span>
                      <span className="news-row-mon">{mon}</span>
                      <span className="news-row-year">{year}</span>
                    </div>

                    {/* İçerik */}
                    <div className="news-row-body">
                      {item.category && (
                        <div className="nl-label">{item.category}</div>
                      )}
                      <h2 className="news-row-title">
                        {item.featured && <span style={{ marginRight: '6px' }}>⭐</span>}
                        {item.title}
                      </h2>
                      {item.description && (
                        <p className="news-row-desc">{item.description}</p>
                      )}
                    </div>

                    {/* Görsel */}
                    {item.image && (
                      <div className="news-row-img-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="news-row-img"
                        />
                      </div>
                    )}

                    {/* Ok */}
                    <div className="news-row-arrow">→</div>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
