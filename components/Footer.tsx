'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const cur = useRef({ x: 0, y: 0 });
  const tgt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    tgt.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cur.current = { ...tgt.current };

    function onMove(e: MouseEvent) {
      tgt.current.x = e.clientX;
      tgt.current.y = e.clientY;
    }
    function tick() {
      cur.current.x += (tgt.current.x - cur.current.x) / 20;
      cur.current.y += (tgt.current.y - cur.current.y) / 20;
      if (interactiveRef.current) {
        interactiveRef.current.style.transform =
          `translate(${Math.round(cur.current.x)}px, ${Math.round(cur.current.y)}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <footer className="site-footer">
      {/* Morphing gradient — aynı hero efekti */}
      <div className="morphing-gradients-bg">
        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="g5" />
          <div className="interactive" ref={interactiveRef} />
        </div>
      </div>

      <div className="footer-top">
        {/* Logo */}
        <div className="footer-brand-logo">
          <Link href="/">
            <Image
              src="/logo-footer-badge.svg"
              alt="KAL Mezunlar Derneği"
              width={160}
              height={160}
              style={{ width: '100%', maxWidth: '160px', height: 'auto', display: 'block', opacity: 0.6 }}
            />
          </Link>
        </div>

        {/* Alıntı */}
        <div className="footer-brand-text">
          <p>&ldquo;1980&apos;den bu yana mezunlarımızı bir arada tutan köklü dernek.&rdquo;</p>
        </div>

        {/* DERNEK */}
        <div className="footer-col">
          <h5>Dernek</h5>
          <ul>
            <li><Link href="/#about-new">KALMED Hakkında</Link></li>
            <li><Link href="/yonetim-kurulu">Yönetim Kurulu</Link></li>
            <li><Link href="/tuzuk">Dernek Tüzüğü</Link></li>
            <li><Link href="/mali-raporlar">Mali Raporlar</Link></li>
          </ul>
        </div>

        {/* ÜYELİK */}
        <div className="footer-col">
          <h5>Üyelik</h5>
          <ul>
            <li><Link href="/uye-ol">Üye Ol</Link></li>
            <li><Link href="/aidat-ode">Aidat İşlemleri</Link></li>
            <li><Link href="/bilgilerimi-guncelle">Bilgilerimi Güncelle</Link></li>
          </ul>
        </div>

        {/* DESTEK */}
        <div className="footer-col">
          <h5>Destek</h5>
          <ul>
            <li><Link href="/bagis-yap">Bağış Yap</Link></li>
            <li><Link href="/burs-basvurusu">Burs Başvurusu</Link></li>
            <li><Link href="/mentor-ol">Mentör Ol</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 KAL Mezunlar Derneği · Kocaeli Anadolu Lisesi</span>
        <span>Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
