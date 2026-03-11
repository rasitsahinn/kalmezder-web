'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { KAL_LOGO_BASE64 } from '@/constants/logo';

const navItems = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/#about' },
  { label: 'Etkinlikler', href: '/etkinlikler' },
  { label: 'Duyurular', href: '/duyurular' },
];

const dropdowns = [
  {
    label: 'Dernek',
    items: [
      { label: 'Yönetim Kurulu', href: '/yonetim-kurulu' },
      { label: 'Tüzük', href: '/tuzuk' },
      { label: 'Mali Raporlar', href: '/mali-raporlar' },
    ],
  },
  {
    label: 'Üyelik',
    items: [
      { label: 'Üye Ol', href: '/uye-ol' },
      { label: 'Aidat Öde', href: '/aidat-ode' },
      { label: 'Bilgilerimi Güncelle', href: '/bilgilerimi-guncelle' },
    ],
  },
  {
    label: 'Destek',
    items: [
      { label: 'Bağış Yap', href: '/bagis-yap' },
      { label: 'Burs Başvurusu', href: '/burs-basvurusu' },
      { label: 'Mentör Ol', href: '/mentor-ol' },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setMenuOpen(false); setOpenDropdown(null); }
    }
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 960) { setMenuOpen(false); setOpenDropdown(null); }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleDropdown(label: string) {
    setOpenDropdown(prev => (prev === label ? null : label));
  }

  return (
    <nav className="site-nav" ref={navRef}>
      <div className="nav-inner">

        {/* Sol — amblem + isim */}
        <Link href="/" className="nav-brand" aria-label="KAL Mezunlar Derneği Ana Sayfa">
          <img src={KAL_LOGO_BASE64} alt="KAL" className="nav-brand-img" />
          <span className="nav-brand-name">KAL Mezunlar Derneği</span>
        </Link>

        {/* Sağ — linkler + dropdown'lar */}
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}

          {dropdowns.map(dropdown => (
            <li
              key={dropdown.label}
              className={`nav-item${openDropdown === dropdown.label ? ' open' : ''}`}
            >
              <button
                className="nav-parent"
                type="button"
                aria-expanded={openDropdown === dropdown.label}
                onClick={() => toggleDropdown(dropdown.label)}
              >
                {dropdown.label}
              </button>
              <ul className="nav-dropdown">
                {dropdown.items.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Mobil toggle */}
        <button
          className="nav-toggle"
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={menuOpen}
          aria-controls="nav-mobile"
          onClick={() => { setMenuOpen(p => !p); setOpenDropdown(null); }}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="nav-mobile" id="nav-mobile">
          <ul className="nav-mobile-list">
            {navItems.map(item => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            {dropdowns.map(dropdown => (
              <li key={dropdown.label} className={`nav-item${openDropdown === dropdown.label ? ' open' : ''}`}>
                <button
                  className="nav-parent"
                  type="button"
                  onClick={() => toggleDropdown(dropdown.label)}
                >
                  {dropdown.label}
                </button>
                <ul className="nav-dropdown">
                  {dropdown.items.map(item => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
