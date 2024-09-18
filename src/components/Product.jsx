export default function Product(props) {
    
    const {product} = props;
    return (
        <div className="product">
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <p>
            <span className="pr-name">{product.name}</span>
            <span className="pr-price">${product.price}</span>
            </p>
            <button className="add-to-cart">Add to Cart</button>
            <button>
                <span>&#129293;</span> <span>Add to Wishlist</span>
            </button>
      </div>
    );
}

