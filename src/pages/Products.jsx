import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Ürünler</span>
          <h1>Un ve un karışımları</h1>
          <p>
            Özel amaçlı unlar, ekmek karışımları, malt unu ve süsleme ürünleri —
            profesyonel fırınlar için hazırlandı.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
