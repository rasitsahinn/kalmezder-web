import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { eventDetailQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

type EventDetail = {
  _id: string;
  title: string;
  category?: string;
  date: string;
  description?: string;
  slug: string;
  image?: string;
};

const MONTHS_TR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

function formatFullDateTR(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${parseInt(day, 10)} ${MONTHS_TR[parseInt(month, 10) - 1]} ${year}`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ev: EventDetail | null = await client.fetch(eventDetailQuery, { slug }).catch(() => null);
  if (!ev) return { title: 'Etkinlik Bulunamadı | KAL Mezunlar Derneği' };
  return {
    title: `${ev.title} | KAL Mezunlar Derneği`,
    description: ev.description,
  };
}

export default async function EtkinlikDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ev: EventDetail | null = await client.fetch(eventDetailQuery, { slug }).catch(() => null);

  if (!ev) notFound();

  const today = new Date().toISOString().split('T')[0];
  const isUpcoming = ev.date >= today;

  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="section-inner" style={{ maxWidth: '760px' }}>

        {/* Geri butonu */}
        <Link
          href="/etkinlikler"
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
          ← Tüm Etkinlikler
        </Link>

        {/* Yaklaşan / Geçmiş etiketi + tarih */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isUpcoming ? 'var(--gold)' : 'var(--gray)',
            padding: '3px 10px',
            border: `1px solid ${isUpcoming ? 'var(--gold)' : 'rgba(16,37,68,0.2)'}`,
            borderRadius: '20px',
          }}>
            {isUpcoming ? 'Yaklaşan Etkinlik' : 'Geçmiş Etkinlik'}
          </span>
          {ev.category && (
            <span className="ee-cat">{ev.category}</span>
          )}
        </div>

        {/* Tarih */}
        <div style={{ fontSize: '14px', color: 'var(--gray)', marginBottom: '16px', letterSpacing: '0.04em' }}>
          📅 {formatFullDateTR(ev.date)}
        </div>

        {/* Başlık */}
        <h1 style={{
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 700,
          color: 'var(--navy)',
          lineHeight: 1.3,
          marginBottom: '32px',
        }}>
          {ev.title}
        </h1>

        {/* Ayırıcı */}
        <div style={{
          width: '48px',
          height: '3px',
          background: 'var(--gold)',
          marginBottom: '32px',
          borderRadius: '2px',
        }} />

        {/* Kapak görseli */}
        {ev.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={ev.image}
            alt={ev.title}
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
        {ev.description ? (
          <div style={{
            fontSize: '17px',
            color: 'var(--gray)',
            lineHeight: 1.85,
            whiteSpace: 'pre-line',
          }}>
            {ev.description}
          </div>
        ) : (
          <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
            Bu etkinlik için ek bilgi bulunmuyor.
          </p>
        )}

        {/* Alt — geri butonu */}
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(16,37,68,0.1)' }}>
          <Link href="/etkinlikler" className="btn-outline" style={{ fontSize: '13px' }}>
            ← Tüm Etkinlikler
          </Link>
        </div>

      </div>
    </section>
  );
}
