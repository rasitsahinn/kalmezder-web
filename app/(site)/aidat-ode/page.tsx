'use client';

import { FormEvent, useState } from 'react';

const AMOUNTS = ['500', '1000', '1500'];

function copyToClipboard(text: string, btn: HTMLButtonElement, doneLabel: string, defaultLabel: string) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = doneLabel;
    setTimeout(() => { btn.textContent = defaultLabel; }, 1400);
  });
}

export default function AidatOde() {
  const [amount, setAmount] = useState('500');
  const [showBank, setShowBank] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!amount) return;
    setShowBank(true);
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Üyelik</div>
          <h1 className="page-title">Aidat Öde</h1>
          <p className="page-desc">Yıllık aidat ödemenizi güvenli şekilde tamamlayın.</p>
        </div>
      </div>

      <section className="section cream">
        <div className="section-inner section-grid">
          <div className="card">
            <h2>Aidat Bilgisi</h2>
            <p>2026 yılı standart aidat tutarı 500 TL&apos;dir. Öğrenci veya yeni mezun indirimli aidat için yönetimle iletişime geçebilirsiniz.</p>
            <p className="text-spaced">Ödemeleriniz burs ve dayanışma projelerine doğrudan katkı sağlar.</p>
          </div>
          <div className="card">
            <h2>Ödeme Formu</h2>
            <form onSubmit={handleSubmit}>
              <div className="amounts">
                {AMOUNTS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    className={amount === a ? 'is-active' : ''}
                    onClick={() => setAmount(a)}
                  >
                    {Number(a).toLocaleString('tr-TR')} TL
                  </button>
                ))}
              </div>
              <div className="form-group">
                <label htmlFor="tutar">Tutar</label>
                <input
                  id="tutar"
                  name="tutar"
                  type="number"
                  min={1}
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="odeme-tip">Ödeme Tipi</label>
                <input id="odeme-tip" name="odeme-tip" type="text" value="Havale / EFT" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="aciklama">Açıklama</label>
                <input id="aciklama" name="aciklama" type="text" placeholder="Opsiyonel" />
              </div>
              <button className="btn-submit" type="submit">Ödemeyi Tamamla</button>
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
                <p className="bank-note">Not: Gerçek IBAN ve şube bilgilerini dernek resmi hesap bilgileriyle güncelleyin.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
