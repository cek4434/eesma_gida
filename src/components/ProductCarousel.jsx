import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductCarousel({ products }) {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')
    const sync = () => setIsMobile(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!isMobile || products.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % products.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [isMobile, products.length])

  useEffect(() => {
    if (!isMobile) setIndex(0)
  }, [isMobile])

  return (
    <div className="product-carousel">
      <div className="product-carousel-viewport">
        <div
          className="product-carousel-track"
          style={
            isMobile
              ? { transform: `translateX(-${index * 100}%)` }
              : undefined
          }
        >
          {products.map((product) => (
            <div className="product-carousel-slide" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {isMobile && products.length > 1 ? (
        <div className="product-carousel-dots">
          {products.map((product, dotIndex) => (
            <button
              key={product.id}
              type="button"
              className={dotIndex === index ? 'active' : ''}
              aria-label={product.name}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ProductCarousel
