import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = ({ banners = [] }) => {
  // Dữ liệu mặc định nếu không có banners
  const defaultBanners = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1200x400/FF0000/FFFFFF?text=SALE+50%25+LAPTOP+GAMING',
      alt: 'Sale Laptop Gaming',
      link: '/sale-laptop'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1200x400/0066CC/FFFFFF?text=PC+GAMING+CHOI+TET',
      alt: 'PC Gaming',
      link: '/pc-gaming'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1200x400/FF6600/FFFFFF?text=MAN+HINH+GIAM+GIA+30%25',
      alt: 'Màn hình giảm giá',
      link: '/monitors-sale'
    }
  ];

  const sidebarItems = [
    {
      image: 'https://via.placeholder.com/300x150/00CC00/FFFFFF?text=FREE+SHIP',
      alt: 'Free ship'
    },
    {
      image: 'https://via.placeholder.com/300x150/FF00FF/FFFFFF?text=TRA+GOP+0%25',
      alt: 'Trả góp 0%'
    }
  ];

  const displayBanners = banners.length > 0 ? banners : defaultBanners;

  return (
    <section className="banner-section py-3">
      <Container>
        <Row>
          <Col lg={8}>
            <Carousel 
              indicators={true} 
              controls={true} 
              interval={3000}
              variant="dark"
            >
              {displayBanners.map((banner) => (
                <Carousel.Item key={banner.id}>
                  <a href={banner.link}>
                    <img
                      className="d-block w-100"
                      src={banner.image}
                      alt={banner.alt}
                    />
                  </a>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          
          <Col lg={4}>
            <Row>
              {sidebarItems.map((item, index) => (
                <Col xs={12} className={index === 0 ? 'mb-3' : ''} key={index}>
                  <div className="sidebar-item">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-100 rounded"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner; 