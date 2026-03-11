import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allEventsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata = {
  title: 'Etkinlikler | KAL Mezunlar Derneği',
  description: 'KAL Mezunlar Derneği etkinlikleri — yaklaşan ve geçmiş etkinlikler.',
};

const MONTHS_TR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];
const MONTHS_SHORT = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];

function formatFullDateTR(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${parseInt(day, 10)} ${MONTHS_TR[parseInt(month, 10) - 1]} ${year}`;
}

type EventItem = {
  _id: string;
  title: string;
  category?: string;
  date: string;
  description?: string;
  slug?: string;
  image?: string;
};

function EventCard({ ev, past }: { ev: EventItem; past?: boolean }) {
  const [year, month, day] = ev.date.split('-');
  return (
    <Link
      href={ev.slug ? `/etkinlikler/${ev.slug}` : '#'}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        padding: '24px 0',
        borderTop: '1px solid rgba(16,37,68,0.09)',
        textDecoration: 'none',
        opacity: past ? 0.7 : 1,
        transition: 'opacity 0.15s',
      }}
    >
      {/* Tarih kutusu */}
      <div style={{
        minWidth: '72px',
        textAlign: 'center',
        background: past ? 'rgba(16,37,68,0.04)' : 'rgba(16,37,68,0.07)',
        borderRadius: '6px',
        padding: '8px 12px',
        flexShrink: 0,
        borderLeft: past ? 'none' : '3px solid var(--gold)',
      }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1 }}>
          {day}
        </div>
        <div style={{ fontSize: '11px', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '3px' }}>
          {MONTHS_SHORT[parseInt(month, 10) - 1]}
        </div>
        <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '2px' }}>
          {year}
        </div>
      </div>

      {/* İçerik */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {ev.category && (
          <div className="ee-cat" style={{ marginBottom: '6px' }}>{ev.category}</div>
        )}
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--navy)',
          margin: '0 0 8px',
          lineHeight: 1.4,
        }}>
          {ev.title}
        </h2>
        {ev.description && (
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
            {ev.description}
          </p>
        )}
      </div>

      {/* Görsel */}
      {ev.image && (
        <div style={{ flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ev.image}
            alt={ev.title}
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
    </Link>
  );
}

export default async function EtkinliklerPage() {
  const events: EventItem[] = await client.fetch(allEventsQuery).catch(() => []);

  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  const upcoming = events.filter(e => e.date >= today);
  const past = events.filter(e => e.date < today).reverse(); // geçmişler yeniden eskiye

  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="section-inner">

        {/* Başlık */}
        <div className="ed-head" style={{ marginBottom: '48px' }}>
          <div>
            <div className="section-tag">Etkinlikler</div>
            <h1 className="section-title">Tüm Etkinlikler</h1>
          </div>
          <Link href="/" className="btn-outline" style={{ fontSize: '13px' }}>
            ← Anasayfa
          </Link>
        </div>

        {events.length === 0 ? (
          <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
            Henüz etkinlik bulunmuyor.
          </p>
        ) : (
          <>
            {/* Yaklaşan Etkinlikler */}
            {upcoming.length > 0 && (
              <div style={{ marginBottom: '64px' }}>
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '8px',
                }}>
                  Yaklaşan Etkinlikler
                </h2>
                <div>
                  {upcoming.map(ev => (
                    <EventCard key={ev._id} ev={ev} />
                  ))}
                </div>
              </div>
            )}

            {/* Geçmiş Etkinlikler */}
            {past.length > 0 && (
              <div>
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gray)',
                  marginBottom: '8px',
                }}>
                  Geçmiş Etkinlikler
                </h2>
                <div>
                  {past.map(ev => (
                    <EventCard key={ev._id} ev={ev} past />
                  ))}
                </div>
              </div>
            )}

            {/* Hiç yaklaşan yoksa mesaj */}
            {upcoming.length === 0 && past.length > 0 && (
              <p style={{ color: 'var(--gray)', fontSize: '15px', marginBottom: '32px' }}>
                Şu anda planlanmış yaklaşan etkinlik bulunmuyor.
              </p>
            )}
          </>
        )}

      </div>
    </section>
  );
}
