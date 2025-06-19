import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = ({ title, products, viewMoreLink }) => {
  return (
    <section className="product-section py-4">
      <Container>
        <div className="section-header d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-danger border-2">
          <h2 className="section-title text-uppercase fw-bold mb-0">{title}</h2>
          <a href={viewMoreLink} className="view-more text-danger text-decoration-none fw-medium">
            Xem tất cả <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        
        <Row className="g-3">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductSection; 