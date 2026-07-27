import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCarousel from '../components/ProductCarousel'

function Home() {
  const featured = products.slice(0, 6)

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-brand">
            <img src="/images/logo.png" alt="İdeal Gıda" />
            <div className="hero-brand-copy">
              <strong>İDEAL</strong>
              <span>Esma Gıda</span>
            </div>
          </div>
          <h1>Un ve un ürünlerinde güvenilir üretim</h1>
          <p>
            2013&apos;ten bu yana fırınlar ve işletmeler için özel amaçlı un
            karışımları üretiyoruz.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/urunler">
              Ürünleri İncele
            </Link>
            <Link className="btn btn-ghost" to="/iletisim">
              Teklif Al
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-preview">
          <div className="about-preview-media" aria-hidden="true" />
          <div className="reveal">
            <span className="section-label">Hikâyemiz</span>
            <h2 className="section-title">Tarladan fırına, kaliteli un</h2>
            <p className="section-lead">
              Esma İdeal Gıda, Abubekir Ekici tarafından 2013 yılında Pendik’te
              kuruldu. Bugün özel amaçlı unlar, ekmek karışımları ve süsleme
              ürünleriyle sektörün yanında yer alıyoruz.
            </p>
            <div className="stats">
              <div className="stat">
                <strong>2013</strong>
                <span>Kuruluş yılı</span>
              </div>
              <div className="stat">
                <strong>8+</strong>
                <span>Ürün çeşidi</span>
              </div>
              <div className="stat">
                <strong>%100</strong>
                <span>Yerli üretim</span>
              </div>
            </div>
            <div style={{ marginTop: '1.75rem' }}>
              <Link className="btn btn-outline" to="/hakkimizda">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section products-band">
        <div className="container">
          <span className="section-label">Katalog</span>
          <h2 className="section-title">Öne çıkan ürünler</h2>
          <p className="section-lead">
            Tam buğdaydan çavdara, tahıl karışımlarından malt ununa kadar fırın
            ihtiyaçlarınıza uygun ürünler.
          </p>
          <ProductCarousel products={featured} />
          <div style={{ marginTop: '2rem' }}>
            <Link className="btn btn-outline" to="/urunler">
              Tüm Ürünler
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-strip">
        <div className="container">
          <div>
            <h2>Fırınınız için doğru un karışımı</h2>
            <p>
              Sipariş, teknik bilgi veya numune talebi için bizimle iletişime
              geçin.
            </p>
          </div>
          <Link className="btn btn-primary" to="/iletisim">
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
