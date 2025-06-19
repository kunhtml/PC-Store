import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

const Navigation = ({ navigationItems }) => {
  // Sử dụng dữ liệu từ props hoặc giá trị mặc định
  const items = navigationItems || [
    { icon: 'fas fa-laptop', name: 'Laptop', link: '/laptop' },
    { icon: 'fas fa-desktop', name: 'PC Văn phòng', link: '/pc-office' }
  ];

  return (
    <Navbar expand="lg" className="navigation-bar p-0" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="w-100">
            <Nav.Link href="/" className="nav-item-home">
              <i className="fas fa-home"></i>
              <span className="ms-2">Trang chủ</span>
            </Nav.Link>
            {items.map((item) => (
              <Nav.Link key={item.id} href={item.link}>
                <i className={item.icon}></i>
                <span className="ms-2">{item.name}</span>
              </Nav.Link>
            ))}
            <Nav.Link href="/sale" className="nav-item-sale ms-auto">
              <i className="fas fa-fire"></i>
              <span className="ms-2">Khuyến mãi</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 