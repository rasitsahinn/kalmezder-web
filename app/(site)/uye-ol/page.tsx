'use client';

import { FormEvent } from 'react';

const WHATSAPP = '902620000000';

export default function UyeOl() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = ['Yeni Üyelik Başvurusu'];
    data.forEach((value, key) => {
      if (String(value).trim() !== '') lines.push(`${key}: ${value}`);
    });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-tag">Üyelik</div>
          <h1 className="page-title">Üye Ol</h1>
          <p className="page-desc">Formu doldurun, başvurunuz doğrudan WhatsApp hattımıza gönderilsin.</p>
        </div>
      </div>

      <section className="section cream">
        <div className="section-inner">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="ad">Ad</label>
                  <input id="ad" name="Ad" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="soyad">Soyad</label>
                  <input id="soyad" name="Soyad" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eposta">E-posta</label>
                  <input id="eposta" name="E-posta" type="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefon">Telefon</label>
                  <input id="telefon" name="Telefon" type="tel" required />
                </div>
                <div className="form-group">
                  <label htmlFor="mezuniyet">Mezuniyet Yılı</label>
                  <input id="mezuniyet" name="Mezuniyet Yılı" type="number" min={1940} max={2035} />
                </div>
                <div className="form-group">
                  <label htmlFor="meslek">Meslek</label>
                  <input id="meslek" name="Meslek" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="sehir">Şehir</label>
                  <input id="sehir" name="Şehir" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="katki">Katkı Alanı</label>
                  <select id="katki" name="Katkı Alanı">
                    <option>Etkinlik</option>
                    <option>Burs</option>
                    <option>Mentörlük</option>
                    <option>İletişim</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="mesaj">Mesaj</label>
                  <textarea id="mesaj" name="Mesaj" placeholder="Kendinizden kısaca bahsedin" />
                </div>
              </div>
              <button className="btn-submit" type="submit">WhatsApp ile Başvuru Gönder</button>
              <p className="form-note">Gönderime bastığınızda WhatsApp açılır ve bilgiler otomatik mesaj olarak gelir.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
