import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Ana Sayfa', end: true },
  { to: '/urunler', label: 'Ürünler' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="İdeal Gıda logosu" />
          <div className="brand-text">
            <strong>Esma İdeal</strong>
            <span>Gıda</span>
          </div>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
