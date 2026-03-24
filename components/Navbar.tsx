'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Etkinlikler', href: '/etkinlikler' },
  { label: 'Duyurular', href: '/duyurular' },
];

const dropdowns = [
  {
    label: 'Dernek',
    items: [
      { label: 'Hakkımızda', href: '/#about-new' },
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
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Sadece ana sayfada scroll'a göre transparent/beyaz geçiş yapar.
  // Diğer sayfalarda her zaman beyaz navbar.
  const [scrolled, setScrolled] = useState(!isHome);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

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
    <nav
      className="site-nav"
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled
          ? 'rgba(255,255,255,0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(16,37,68,0.10)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(31,63,131,0.1)' : 'none',
      }}
    >
      <div className="nav-shell">
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="KAL Mezunlar Derneği Ana Sayfa">
          {/* Beyaz logo (scroll öncesi) */}
          <Image
            src="/logo-white.svg"
            alt="KAL Mezunlar Derneği"
            width={220}
            height={56}
            priority
            style={{
              height: '56px',
              width: 'auto',
              display: scrolled ? 'none' : 'block',
            }}
          />
          {/* Renkli logo (scroll sonrası) */}
          <Image
            src="/logo.svg"
            alt="KAL Mezunlar Derneği"
            width={220}
            height={56}
            priority
            style={{
              height: '56px',
              width: 'auto',
              display: scrolled ? 'block' : 'none',
            }}
          />
        </Link>

        {/* Mobil toggle */}
        <button
          className="nav-toggle"
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={menuOpen}
          onClick={() => { setMenuOpen(p => !p); setOpenDropdown(null); }}
          style={{
            borderColor: scrolled ? 'rgba(16,37,68,0.2)' : 'rgba(255,255,255,0.4)',
          }}
        >
          <span style={{ background: scrolled ? 'var(--navy)' : '#fff' }} />
          <span style={{ background: scrolled ? 'var(--navy)' : '#fff' }} />
          <span style={{ background: scrolled ? 'var(--navy)' : '#fff' }} />
        </button>

        {/* Desktop menü */}
        <div className="nav-menu">
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{ color: scrolled ? 'var(--navy)' : '#fff' }}
                >
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
                  style={{ color: scrolled ? 'var(--navy)' : '#fff' }}
                >
                  {dropdown.label}
                </button>
                <ul className="nav-dropdown">
                  {dropdown.items.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
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
