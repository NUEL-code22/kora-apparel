import { useState } from 'react';

function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [isFavourite, setIsFavourite] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);

  const handleAddToBag = () => {
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
        <button 
          className={`fav-btn ${isFavourite ? 'active' : ''}`}
          onClick={() => setIsFavourite(!isFavourite)}
          title="Save to Wishlist"
        >
          {isFavourite ? '♥' : '♡'}
        </button>
      </div>

      <div className="card-body">
        <span className="category-tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">₦{product.price.toLocaleString()}</p>

        <div className="size-selector">
          <span>Size: </span>
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              type="button"
              className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button className="btn-primary full-width" onClick={handleAddToBag}>
          {addedToBag ? `✓ Added (${selectedSize})` : 'Add to Bag'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;