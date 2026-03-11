'use client';

import { FormEvent } from 'react';

const WHATSAPP = '902620000000';

export default function MentorOl() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = ['Yeni Mentörlük Başvurusu'];
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
          <h1 className="page-title">Mentör Ol</h1>
          <p className="page-desc">
            Deneyimlerinizi öğrenciler ve genç mezunlarla paylaşarak kariyer yolculuklarına katkı sunun.
          </p>
        </div>
      </div>

      <section className="section cream">
        <div className="section-inner">
          <div className="columns">
            <div className="card">
              <h2>Mentörlük Programı</h2>
              <p>Program kapsamında mentör-menti eşleştirmeleri hedef, sektör ve zaman uygunluğuna göre yapılır.</p>
              <ul>
                <li>Aylık en az 1 görüşme</li>
                <li>Online veya yüz yüze esnek model</li>
                <li>Kariyer ve akademik yönlendirme</li>
              </ul>
            </div>
            <div className="card">
              <h2>Başvuru Formu</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="ad">Ad Soyad</label>
                  <input id="ad" name="Ad Soyad" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="mezuniyet">Mezuniyet Yılı</label>
                  <input id="mezuniyet" name="Mezuniyet Yılı" type="number" min={1940} max={2035} required />
                </div>
                <div className="form-group">
                  <label htmlFor="alan">Uzmanlık Alanı</label>
                  <input id="alan" name="Uzmanlık Alanı" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="tecrube">Deneyim Süresi</label>
                  <select id="tecrube" name="Deneyim Süresi">
                    <option>1-3 yıl</option>
                    <option>4-7 yıl</option>
                    <option>8-12 yıl</option>
                    <option>12+ yıl</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="telefon">Telefon</label>
                  <input id="telefon" name="Telefon" type="tel" required />
                </div>
                <div className="form-group">
                  <label htmlFor="musaitlik">Müsaitlik Notu</label>
                  <textarea id="musaitlik" name="Müsaitlik Notu" />
                </div>
                <button className="btn-submit" type="submit">WhatsApp ile Mentör Başvurusu Gönder</button>
                <p className="form-note">Gönderime bastığınızda WhatsApp açılır ve bilgiler otomatik mesaj olarak gelir.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
