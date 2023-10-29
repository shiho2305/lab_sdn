import React, { useState } from 'react';
import {AiFillStar} from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import ProductDetail from './ProductDetail';
import AddProduct from './addProduct';

const products = [
    {
      id: 1,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Nike", 
      reviews: 4,
    },
    {
      id: 2,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Vans", 
      reviews: 4,
    },
    {
      id: 3,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Adidas", 
      reviews: 4,
    },
    {
      id: 4,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Nike", 
      reviews: 4,
    },
    {
      id: 5,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Adidas", 
      reviews: 4,
    },
    {
      id: 6,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Adidas", 
      reviews: 4,
    },
    {
      id: 7,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Nike", 
      reviews: 4,
    },
    {
      id: 8,
      name: "Shoe",
      image: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      price: 200,
      category: "Puma", 
      reviews: 4,
    },
    
];


const Product = () => {

    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [showAddProduct, setShowAddProduct] = useState(false);

    const filteredProducts = products.filter((product) => {
        return selectedCategory === 'All Products' || product.category === selectedCategory;
    })
    

    return (
        <>
            {showAddProduct ? (
              <AddProduct />
            ) : ( 
          <>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className='filter-btn'>
                    <Button
                    variant="outline-secondary"
                    onClick={() => setSelectedCategory('All Products')}
                    >
                    All Products
                    </Button>
                    <Button
                    variant="outline-secondary"
                    onClick={() => setSelectedCategory('Nike')}
                    >
                    Nike
                    </Button>
                    <Button
                    variant="outline-secondary"
                    onClick={() => setSelectedCategory('Adidas')}
                    >
                    Adidas
                    </Button>
                    <Button
                    variant="outline-secondary"
                    onClick={() => setSelectedCategory('Puma')}
                    >
                    Puma
                    </Button>
                    <Button
                    variant="outline-secondary"
                    onClick={() => setSelectedCategory('Vans')}
                    >
                    Vans
                    </Button>
                </div>
                <div className='btn-createProduct'>
                    <Button variant="primary" onClick={() => setShowAddProduct(true)}>Add Product</Button>
                </div>              
            </div>

       
            <div className='product-card-container'>
                {filteredProducts.map((product) => (
                    <div className='product-card' key={product.id}>
                    <img src={product.image} alt={product.name} className='product-card-img'/>
                    <div className='product-card-details'>
                        <h3 className='product-card-title'>{product.name}</h3>
                        <div className='product-card-reviews'>
                            <AiFillStar className='rating-start'/> 
                            <AiFillStar className='rating-start'/> 
                            <AiFillStar className='rating-start'/> 
                            <AiFillStar className='rating-start'/>
                            <span className='total-reviews'>({product.reviews} reviews)</span>
                        </div>
                        <span className='Category-brand'>{product.category}</span>
                        <div className='product-card-price'>
                            <div className='price'>
                                <del>$560,00</del> {product.price}
                            </div>
                            <div className='btn-productDetails'>
                                <Button variant="primary">Detail</Button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
          </>

            )}

        </>
    );
}

export default Product;
