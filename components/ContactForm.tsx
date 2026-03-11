'use client';

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={e => e.preventDefault()}>
      <div className="form-row">
        <div className="form-group">
          <label>Ad Soyad</label>
          <input type="text" placeholder="Adınız Soyadınız" />
        </div>
        <div className="form-group">
          <label>E-posta</label>
          <input type="email" placeholder="eposta@ornek.com" />
        </div>
      </div>
      <div className="form-group">
        <label>Konu</label>
        <select>
          <option>Genel Bilgi</option>
          <option>Üyelik</option>
          <option>Bağış</option>
          <option>Etkinlik</option>
          <option>Diğer</option>
        </select>
      </div>
      <div className="form-group">
        <label>Mesaj</label>
        <textarea placeholder="Mesajınızı yazın..." />
      </div>
      <button type="submit" className="btn-submit-contact">Mesaj Gönder</button>
    </form>
  );
}
