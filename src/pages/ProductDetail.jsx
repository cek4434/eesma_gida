import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'

function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="section-title">Ürün bulunamadı</h1>
          <p className="section-lead">Aradığınız ürün katalogda yer almıyor.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-outline" to="/urunler">
              Ürünlere Dön
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const ratioHeaders = product.baking?.ratios?.[0]
  const hasPer20 = ratioHeaders && 'per20kg' in ratioHeaders
  const batchLabel = hasPer20 ? '20 kg' : '25 kg'

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to="/urunler" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
            ← Tüm ürünler
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container detail-layout">
          <div className="detail-media">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detail-content">
            <div className="category">{product.category}</div>
            <h1>{product.name}</h1>
            <p className="lead">{product.usage}</p>

            <div className="chip-row">
              <span className="chip">Net: {product.weight}</span>
              <span className="chip">{product.shelfLife}</span>
              {product.allergen && <span className="chip">{product.allergen}</span>}
            </div>

            <div className="detail-block">
              <h2>İçindekiler</h2>
              <ul className="ingredient-list">
                {product.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {product.specs && (
              <div className="detail-block">
                <h2>Teknik özellikler</h2>
                <div className="specs-grid">
                  {product.specs.map((spec) => (
                    <div className="spec-box" key={spec.label}>
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.baking && (
              <>
                <div className="detail-block">
                  <h2>Üretim önerileri</h2>
                  <div className="baking-grid">
                    <div className="baking-card">
                      <h3>Yoğurma</h3>
                      <ul>
                        <li>
                          <span>Çatal kazan</span>
                          <strong>{product.baking.kneading.fork}</strong>
                        </li>
                        <li>
                          <span>Mikser kazan</span>
                          <strong>{product.baking.kneading.spiral}</strong>
                        </li>
                        <li>
                          <span>Hamur sıcaklığı</span>
                          <strong>{product.baking.kneading.doughTemp}</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="baking-card">
                      <h3>Fermantasyon</h3>
                      <ul>
                        <li>
                          <span>İlk fermantasyon</span>
                          <strong>{product.baking.fermentation.first}</strong>
                        </li>
                        <li>
                          <span>Kesme işlemi</span>
                          <strong>{product.baking.fermentation.cutting}</strong>
                        </li>
                        <li>
                          <span>Son fermantasyon</span>
                          <strong>{product.baking.fermentation.final}</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="baking-card">
                      <h3>Pişirme</h3>
                      <ul>
                        <li>
                          <span>Fırın sıcaklığı</span>
                          <strong>{product.baking.baking.ovenTemp}</strong>
                        </li>
                        <li>
                          <span>Pişirme süresi</span>
                          <strong>{product.baking.baking.time}</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {product.baking.ratios && (
                  <div className="detail-block">
                    <h2>Karışım oranları</h2>
                    <table className="ratio-table">
                      <thead>
                        <tr>
                          <th>Malzeme</th>
                          <th>1 kg</th>
                          <th>{batchLabel}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.baking.ratios.map((row) => (
                          <tr key={row.label}>
                            <td>{row.label}</td>
                            <td>{row.per1kg}</td>
                            <td>{row.per20kg || row.per25kg}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            <Link className="btn btn-primary" to="/iletisim">
              Bu ürün için teklif al
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
