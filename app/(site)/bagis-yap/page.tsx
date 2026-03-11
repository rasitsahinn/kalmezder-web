'use client';

import { FormEvent, useState } from 'react';

function copyToClipboard(text: string, btn: HTMLButtonElement, doneLabel: string, defaultLabel: string) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = doneLabel;
    setTimeout(() => { btn.textContent = defaultLabel; }, 1400);
  });
}

export default function BagisYap() {
  const [showBank, setShowBank] = useState(false);
  const [summary, setSummary] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const tutar = (form.elements.namedItem('tutar') as HTMLInputElement).value;
    const alan = (form.elements.namedItem('alan') as HTMLSelectElement).value;
    setSummary(`Bağış Alanı: ${alan} · Tutar: ${tutar} TL`);
    setShowBank(true);
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Destek</div>
          <h1 className="page-title">Bağış Yap</h1>
          <p className="page-desc">Burs, etkinlik ve mezun dayanışması projelerine katkı sunun.</p>
        </div>
      </div>

      <section className="section cream">
        <div className="section-inner section-grid section-grid-asym">
          <div className="card">
            <p className="donation-warm-note">
              Yaptığınız her bağış, bir öğrencinin yolunu aydınlatan kıymetli bir umut oluyor.
              Desteğiniz için gönülden teşekkür ederiz.
            </p>
          </div>
          <div className="card">
            <h2>Bağış Formu</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="adsoyad">Ad Soyad</label>
                <input id="adsoyad" name="adsoyad" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="tutar">Tutar (TL)</label>
                <input id="tutar" name="tutar" type="number" min={1} required />
              </div>
              <div className="form-group">
                <label htmlFor="alan">Bağış Alanı</label>
                <select id="alan" name="alan">
                  <option>Burs Fonu</option>
                  <option>Etkinlik Desteği</option>
                  <option>Genel Fon</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="not">Not</label>
                <textarea id="not" name="not" placeholder="İsteğe bağlı" />
              </div>
              <button className="btn-submit" type="submit">Bağışı Tamamla</button>
            </form>

            {showBank && (
              <div className="bank-info">
                <h3>Dernek Hesap Bilgileri</h3>
                <div className="copy-row">
                  <p><strong>Hesap Sahibi:</strong> <span className="copy-value">KAL Mezunlar Derneği</span></p>
                  <button
                    type="button"
                    className="copy-owner"
                    onClick={(e) => copyToClipboard('KAL Mezunlar Derneği', e.currentTarget, 'Kopyalandı', 'Hesap Sahibini Kopyala')}
                  >
                    Hesap Sahibini Kopyala
                  </button>
                </div>
                <p><strong>Banka:</strong> Ziraat Bankası</p>
                <p><strong>Şube:</strong> Kocaeli Şubesi</p>
                <span className="iban-code">TR00 0000 0000 0000 0000 0000 00</span>
                <button
                  type="button"
                  className="copy-iban"
                  onClick={(e) => copyToClipboard('TR00 0000 0000 0000 0000 0000 00', e.currentTarget, 'Kopyalandı', 'IBAN Kopyala')}
                >
                  IBAN Kopyala
                </button>
                {summary && <p className="bank-summary">{summary}</p>}
                <p className="bank-note">Not: Gerçek IBAN ve şube bilgilerini dernek resmi hesap bilgileriyle güncelleyin.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
