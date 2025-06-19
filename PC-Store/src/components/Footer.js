import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="footer mt-5">
      <div className="footer-top py-5">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-3">Về PC Store</h5>
              <ul className="list-unstyled">
                <li><a href="/about">Giới thiệu công ty</a></li>
                <li><a href="/stores">Hệ thống showroom</a></li>
                <li><a href="/warranty">Chính sách bảo hành</a></li>
                <li><a href="/return">Chính sách đổi trả</a></li>
                <li><a href="/payment">Hướng dẫn thanh toán</a></li>
              </ul>
            </Col>
            
            <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-3">Hỗ trợ khách hàng</h5>
              <ul className="list-unstyled">
                <li><a href="/shipping">Chính sách giao hàng</a></li>
                <li><a href="/installment">Hướng dẫn mua trả góp</a></li>
                <li><a href="/faq">Câu hỏi thường gặp</a></li>
                <li><a href="/contact">Liên hệ hỗ trợ</a></li>
                <li><a href="/warranty-check">Tra cứu bảo hành</a></li>
              </ul>
            </Col>
            
            <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-3">Thông tin liên hệ</h5>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> 123 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                <p><i className="fas fa-phone"></i> Hotline: 1900 1234</p>
                <p><i className="fas fa-envelope"></i> Email: support@pcstore.vn</p>
                <p><i className="fas fa-clock"></i> Giờ làm việc: 8:00 - 21:00</p>
              </div>
              <div className="social-links mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </Col>
            
            <Col xs={12} md={6} lg={3}>
              <h5 className="text-uppercase mb-3">Đăng ký nhận tin</h5>
              <p className="text-muted small">Nhận thông tin khuyến mãi mới nhất từ PC Store</p>
              <Form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <div className="d-flex">
                  <Form.Control 
                    type="email" 
                    placeholder="Nhập email của bạn" 
                    required
                    className="me-2"
                  />
                  <Button type="submit" variant="danger">
                    Đăng ký
                  </Button>
                </div>
              </Form>
              <div className="payment-methods mt-4">
                <h6 className="mb-2">Phương thức thanh toán</h6>
                <div className="payment-icons">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-jcb"></i>
                  <i className="fas fa-money-bill-wave"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="footer-bottom py-3">
        <Container>
          <p className="text-center mb-0">&copy; 2024 PC Store. Tất cả quyền được bảo lưu.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer; 