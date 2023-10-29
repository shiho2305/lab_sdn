import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";
import "./style.css";

const ProductDetail = () => {
  const nav = useNavigate();

  // const handleDetail = (index) => {
  //     nav(`/products/` + (index + 1));
  // }

  return (
    <div className="mt-5 mb-5">
      <Container>
        <div className="product-detail">
          <div>
            <img
              className="img-productDetail"
              src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
              alt="shoe"
            />
          </div>
          <div>
            <h1 className="title-productDetail mb-3">Text</h1>
            <div className="price-productDetail">
              Price: <span>$22</span>
            </div>
            <div className="category-productDetail">
              Category: <span>Nike</span>
            </div>
            <p className="mt-3 description-productDetail">
              Wishing you a delightful and fantastic shopping experience! We
              hope you find the perfect items and have a great time exploring
              our products. Thank you for choosing us as your shopping
              destination.
            </p>
          </div>
        </div>

        <Comments />
      </Container>
    </div>
  );
};

export default ProductDetail;
