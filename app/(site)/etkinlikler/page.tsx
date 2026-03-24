import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allEventsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata = {
  title: 'Etkinlikler | KAL Mezunlar Derneği',
  description: 'KAL Mezunlar Derneği etkinlikleri — yaklaşan ve geçmiş etkinlikler.',
};

const MONTHS_SHORT = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];

type EventItem = {
  _id: string;
  title: string;
  category?: string;
  date: string;
  description?: string;
  slug?: string;
  image?: string;
};

function EventRow({ ev, past }: { ev: EventItem; past?: boolean }) {
  const [year, month, day] = ev.date.split('-');
  return (
    <Link
      href={ev.slug ? `/etkinlikler/${ev.slug}` : '#'}
      className={`news-list-row${past ? ' news-list-row--past' : ''}`}
    >
      {/* Tarih */}
      <div className={`news-row-date${past ? '' : ' news-row-date--upcoming'}`}>
        <span className="news-row-day">{parseInt(day, 10)}</span>
        <span className="news-row-mon">{MONTHS_SHORT[parseInt(month, 10) - 1]}</span>
        <span className="news-row-year">{year}</span>
      </div>

      {/* İçerik */}
      <div className="news-row-body">
        {ev.category && (
          <div className="ee-cat">{ev.category}</div>
        )}
        <h2 className="news-row-title">{ev.title}</h2>
        {ev.description && (
          <p className="news-row-desc">{ev.description}</p>
        )}
      </div>

      {/* Görsel */}
      {ev.image && (
        <div className="news-row-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ev.image} alt={ev.title} className="news-row-img" />
        </div>
      )}

      {/* Ok */}
      <div className="news-row-arrow">→</div>
    </Link>
  );
}

export default async function EtkinliklerPage() {
  const events: EventItem[] = await client.fetch(allEventsQuery).catch(() => []);
  const today    = new Date().toISOString().split('T')[0];
  const upcoming = events.filter(e => e.date >= today);
  const past     = events.filter(e => e.date < today).reverse();

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Etkinlikler</div>
          <h1 className="page-title">Tüm Etkinlikler</h1>
          <p className="page-desc">
            Yaklaşan ve geçmiş etkinliklerimizi takip edin, kayıt yaptırın.
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

          {events.length === 0 ? (
            <p style={{ color: 'var(--gray)', fontSize: '16px' }}>
              Henüz etkinlik bulunmuyor.
            </p>
          ) : (
            <>
              {/* Yaklaşan */}
              {upcoming.length > 0 && (
                <div style={{ marginBottom: '56px' }}>
                  <div className="events-group-label events-group-label--upcoming">
                    Yaklaşan Etkinlikler
                  </div>
                  <div className="news-list-page">
                    {upcoming.map(ev => <EventRow key={ev._id} ev={ev} />)}
                  </div>
                </div>
              )}

              {upcoming.length === 0 && (
                <p style={{ color: 'var(--gray)', fontSize: '15px', marginBottom: '32px' }}>
                  Şu anda planlanmış yaklaşan etkinlik bulunmuyor.
                </p>
              )}

              {/* Geçmiş */}
              {past.length > 0 && (
                <div>
                  <div className="events-group-label events-group-label--past">
                    Geçmiş Etkinlikler
                  </div>
                  <div className="news-list-page">
                    {past.map(ev => <EventRow key={ev._id} ev={ev} past />)}
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </>
  );
}
