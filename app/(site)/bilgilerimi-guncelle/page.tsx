'use client';

import { FormEvent } from 'react';

const WHATSAPP = '902620000000';

export default function Bilgilerimi() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = ['Bilgi Güncelleme Talebi'];
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
          <h1 className="page-title">Bilgilerimi Güncelle</h1>
          <p className="page-desc">
            Formu doldurun, güncelleme talebiniz doğrudan WhatsApp hattımıza otomatik mesaj olarak gitsin.
          </p>
        </div>
      </div>

      <section className="section cream">
        <div className="section-inner">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="adsoyad">Ad Soyad</label>
                  <input id="adsoyad" name="Ad Soyad" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="mezuniyet">Mezuniyet Yılı</label>
                  <input id="mezuniyet" name="Mezuniyet Yılı" type="number" min={1940} max={2035} />
                </div>
                <div className="form-group">
                  <label htmlFor="eposta">E-posta</label>
                  <input id="eposta" name="E-posta" type="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefon">Telefon</label>
                  <input id="telefon" name="Telefon" type="tel" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="tur">Güncellenecek Alan</label>
                  <select id="tur" name="Güncellenecek Alan">
                    <option>İletişim Bilgileri</option>
                    <option>Adres Bilgileri</option>
                    <option>Meslek / Çalışma Bilgileri</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="yeni">Yeni Bilgiler</label>
                  <textarea id="yeni" name="Yeni Bilgiler" required placeholder="Güncel bilgilerinizi detaylı yazın" />
                </div>
                <div className="form-group full">
                  <label htmlFor="not">Ek Not</label>
                  <textarea id="not" name="Ek Not" placeholder="İsteğe bağlı" />
                </div>
              </div>
              <button className="btn-submit" type="submit">WhatsApp ile Güncelleme Talebi Gönder</button>
              <p className="form-note">Gönderime bastığınızda WhatsApp açılır ve bilgiler otomatik mesaj olarak gelir.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
