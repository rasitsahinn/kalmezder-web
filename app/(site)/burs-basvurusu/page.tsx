'use client';

import { FormEvent } from 'react';

const WHATSAPP = '902620000000';

export default function BursBasvurusu() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = ['Yeni Burs Başvurusu'];
    data.forEach((value, key) => {
      if (String(value).trim() !== '') lines.push(`${key}: ${value}`);
    });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Destek</div>
          <h1 className="page-title">Burs Başvurusu</h1>
          <p className="page-desc">KAL Mezunlar Derneği burs programına başvurmak için formu eksiksiz doldurunuz.</p>
        </div>
      </div>

      <section className="section cream">
        <div className="section-inner">
          <p className="info">
            Başvurular dönemsel olarak değerlendirilir. Eksik belgeli başvurular incelemeye alınmaz.
            Lütfen iletişim bilgilerinizi doğru giriniz.
          </p>
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="ad">Ad Soyad</label>
                  <input id="ad" name="Ad Soyad" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="okul">Okul / Bölüm</label>
                  <input id="okul" name="Okul / Bölüm" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="sinif">Sınıf</label>
                  <input id="sinif" name="Sınıf" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="gano">GANO</label>
                  <input id="gano" name="GANO" type="text" placeholder="örn. 3.20" />
                </div>
                <div className="form-group full">
                  <label htmlFor="email">E-posta</label>
                  <input id="email" name="E-posta" type="email" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="tel">Telefon</label>
                  <input id="tel" name="Telefon" type="tel" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="durum">Maddi Durum Beyanı</label>
                  <textarea id="durum" name="Maddi Durum Beyanı" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="hedef">Akademik Hedefler</label>
                  <textarea id="hedef" name="Akademik Hedefler" />
                </div>
              </div>
              <button className="btn-submit" type="submit">WhatsApp ile Burs Başvurusu Gönder</button>
              <p className="form-note">Gönderime bastığınızda WhatsApp açılır ve bilgiler otomatik mesaj olarak gelir.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
