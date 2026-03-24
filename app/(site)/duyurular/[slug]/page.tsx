import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { newsDetailQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

type NewsDetail = {
  _id: string;
  title: string;
  category?: string;
  publishedAt: string;
  description?: string;
  featured?: boolean;
  slug: string;
  image?: string;
};

function formatFullDateTR(dateStr: string) {
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
  ];
  const [year, month, day] = dateStr.split('-');
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news: NewsDetail | null = await client.fetch(newsDetailQuery, { slug }).catch(() => null);
  if (!news) return { title: 'Duyuru Bulunamadı | KAL Mezunlar Derneği' };
  return {
    title: `${news.title} | KAL Mezunlar Derneği`,
    description: news.description,
  };
}

export default async function DuyuruDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news: NewsDetail | null = await client.fetch(newsDetailQuery, { slug }).catch(() => null);

  if (!news) notFound();

  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="section-inner" style={{ maxWidth: '760px' }}>

        {/* Geri butonu */}
        <Link
          href="/duyurular"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: 'var(--gray)',
            textDecoration: 'none',
            marginBottom: '40px',
            letterSpacing: '0.04em',
          }}
        >
          ← Tüm Duyurular
        </Link>

        {/* Kategori + tarih */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {news.category && (
            <span className="nl-label">{news.category}</span>
          )}
          {news.publishedAt && (
            <span style={{ fontSize: '12px', color: 'var(--gray)', letterSpacing: '0.04em' }}>
              {formatFullDateTR(news.publishedAt)}
            </span>
          )}
        </div>

        {/* Başlık */}
        <h1 style={{
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 700,
          color: 'var(--navy)',
          lineHeight: 1.3,
          marginBottom: '32px',
        }}>
          {news.featured && <span style={{ marginRight: '8px' }}>⭐</span>}
          {news.title}
        </h1>

        {/* Ayırıcı çizgi */}
        <div style={{
          width: '48px',
          height: '3px',
          background: 'var(--gold)',
          marginBottom: '32px',
          borderRadius: '2px',
        }} />

        {/* Kapak görseli */}
        {news.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={news.image}
            alt={news.title}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '32px',
              display: 'block',
            }}
          />
        )}

        {/* İçerik */}
        {news.description ? (
          <div style={{
            fontSize: '17px',
            color: 'var(--gray)',
            lineHeight: 1.85,
            whiteSpace: 'pre-line',
          }}>
            {news.description}
          </div>
        ) : (
          <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
            Bu duyuru için ek içerik bulunmuyor.
          </p>
        )}

        {/* Alt — geri butonu */}
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(16,37,68,0.1)' }}>
          <Link href="/duyurular" className="btn-outline" style={{ fontSize: '13px' }}>
            ← Tüm Duyurular
          </Link>
        </div>

      </div>
    </section>
  );
}
