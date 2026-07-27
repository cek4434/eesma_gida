import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/urunler/${product.id}`} className="product-card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-card-body">
        <span className="category">{product.category}</span>
        <h3>
          <Link to={`/urunler/${product.id}`}>{product.name}</Link>
        </h3>
        <p>{product.shortDescription}</p>
        <div className="product-card-meta">
          <span>{product.weight}</span>
          <Link to={`/urunler/${product.id}`}>Detay →</Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
