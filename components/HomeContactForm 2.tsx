'use client';

import { useState } from 'react';

export default function HomeContactForm() {
  const [name, setName] = useState('');
  const [grad, setGrad] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Genel Bilgi');
  const [message, setMessage] = useState('');

  function handleContact(e: React.FormEvent) {
    e.preventDefault();
    const msg = `İletişim Formu\nAd Soyad: ${name}\nMezuniyet: ${grad}\nE-posta: ${email}\nKonu: ${topic}\nMesaj: ${message}`;
    window.open(`https://wa.me/902620000000?text=${encodeURIComponent(msg)}`, '_blank');
  }

  return (
    <form className="contact-form-new" onSubmit={handleContact}>
      <div className="form-row-new">
        <div className="form-group-new">
          <label>Ad Soyad</label>
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group-new">
          <label>Mezuniyet Yılı</label>
          <input
            type="text"
            placeholder="örn. 2005"
            value={grad}
            onChange={e => setGrad(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group-new">
        <label>E-posta</label>
        <input
          type="email"
          placeholder="eposta@ornek.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group-new">
        <label>Konu</label>
        <select value={topic} onChange={e => setTopic(e.target.value)}>
          <option>Genel Bilgi</option>
          <option>Üyelik</option>
          <option>Bağış</option>
          <option>Etkinlik</option>
          <option>Burs</option>
          <option>Diğer</option>
        </select>
      </div>
      <div className="form-group-new">
        <label>Mesaj</label>
        <textarea
          placeholder="Mesajınızı yazın..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-primary-new">
        WhatsApp ile Gönder
      </button>
    </form>
  );
}
