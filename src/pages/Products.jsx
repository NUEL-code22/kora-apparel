import { useState } from 'react';
import { products } from '../data/productsData';
import ProductCard from '../components/ProductCard';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tops', 'Outerwear', 'Bottoms'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((item) => item.category === selectedCategory);

  return (
    <section className="products-page">
      <div className="page-header">
        <h2>Our Collection</h2>
        <p>Explore our latest ready-to-wear garments.</p>
      </div>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default Products;