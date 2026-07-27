import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="İdeal Gıda logosu" />
            <div>
              <h3>Esma İdeal Gıda</h3>
              <p>
                2013&apos;ten beri un ve un ürünleri üretiminde güvenilir çözüm
                ortağınız.
              </p>
            </div>
          </div>

          <div>
            <h4>Keşfet</h4>
            <ul>
              <li>
                <Link to="/urunler">Ürünler</Link>
              </li>
              <li>
                <Link to="/hakkimizda">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>İletişim</h4>
            <ul>
              <li>Kavakpınar Mah. Tandoğan Cd. No:142</li>
              <li>34899 Pendik / İstanbul</li>
              <li>
                <a href="tel:+905332644815">+90 533 264 48 15</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Esma İdeal Gıda</span>
          <span>Yerli üretim · Un ve un ürünleri</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
