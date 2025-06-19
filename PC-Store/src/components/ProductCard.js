import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const calculateDiscount = (originalPrice, salePrice) => {
    return Math.round((1 - salePrice / originalPrice) * 100);
  };

  return (
    <Card className="product-card h-100 position-relative">
      {product.sale && (
        <Badge 
          bg="danger" 
          className="position-absolute top-0 end-0 m-2 z-1"
        >
          -{calculateDiscount(product.originalPrice, product.price)}%
        </Badge>
      )}
      
      <div className="product-image-wrapper">
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-name fs-6">{product.name}</Card.Title>
        
        <div className="product-specs flex-grow-1">
          {product.specs.map((spec, index) => (
            <div key={index} className="spec-item small text-muted">
              <i className="fas fa-check text-success me-1"></i> {spec}
            </div>
          ))}
        </div>
        
        <div className="product-price mt-3">
          {product.sale && (
            <div className="original-price text-muted text-decoration-line-through small">
              {formatPrice(product.originalPrice)}
            </div>
          )}
          <div className="current-price text-danger fw-bold fs-5">
            {formatPrice(product.price)}
          </div>
        </div>
        
        <Button 
          variant="danger" 
          className="mt-3 w-100"
          disabled={!product.inStock}
        >
          {product.inStock ? (
            <>
              <i className="fas fa-shopping-cart me-2"></i>
              Thêm vào giỏ
            </>
          ) : (
            'Hết hàng'
          )}
        </Button>
      </Card.Body>
      
      {!product.inStock && (
        <div className="out-of-stock-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <Badge bg="secondary" className="fs-6 text-uppercase px-3 py-2">
            Hết hàng
          </Badge>
        </div>
      )}
    </Card>
  );
};

export default ProductCard; 