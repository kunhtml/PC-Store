import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Badge } from 'react-bootstrap';
import './Header.css';

<<<<<<< Updated upstream
const Header = () => {
=======
const Header = ({ siteInfo }) => {
>>>>>>> Stashed changes
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

<<<<<<< Updated upstream
=======
  // Sử dụng dữ liệu từ props hoặc giá trị mặc định
  const info = siteInfo || {
    name: 'PC Store',
    tagline: 'Máy tính & Linh kiện',
    hotline: '1900 1234'
  };

>>>>>>> Stashed changes
  return (
    <header className="header">
      <div className="header-top bg-light py-2">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <div className="hotline d-flex align-items-center">
                <i className="fas fa-phone me-2"></i>
<<<<<<< Updated upstream
                <span className="fw-bold text-danger">Hotline: 1900 1234</span>
=======
                <span className="fw-bold text-danger">Hotline: {info.hotline}</span>
>>>>>>> Stashed changes
              </div>
            </Col>
            <Col xs={12} md={6} className="text-md-end">
              <div className="header-right">
                <a href="/login" className="text-dark text-decoration-none me-2">Đăng nhập</a>
                <span className="text-muted">|</span>
                <a href="/register" className="text-dark text-decoration-none ms-2">Đăng ký</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="header-main py-3">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={3}>
              <div className="logo">
<<<<<<< Updated upstream
                <h1 className="text-danger mb-0">PC Store</h1>
                <small className="text-muted">Máy tính & Linh kiện</small>
=======
                <h1 className="text-danger mb-0">{info.name}</h1>
                <small className="text-muted">{info.tagline}</small>
>>>>>>> Stashed changes
              </div>
            </Col>
            
            <Col xs={12} md={6}>
              <Form onSubmit={handleSearch}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên sản phẩm cần tìm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  <Button variant="danger" type="submit">
                    <i className="fas fa-search"></i>
                  </Button>
                </InputGroup>
              </Form>
            </Col>
            
            <Col xs={12} md={3} className="text-md-end">
              <div className="cart-wrapper d-inline-flex align-items-center p-2 rounded">
                <div className="position-relative">
                  <i className="fas fa-shopping-cart fs-4 text-danger"></i>
                  <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                    0
                  </Badge>
                </div>
                <span className="ms-2 fw-medium">Giỏ hàng</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header; 