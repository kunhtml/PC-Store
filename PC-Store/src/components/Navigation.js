import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

<<<<<<< Updated upstream
const Navigation = () => {
  const categories = [
    { icon: 'fas fa-laptop', name: 'Laptop', link: '/laptop' },
    { icon: 'fas fa-desktop', name: 'PC Văn phòng', link: '/pc-office' },
    { icon: 'fas fa-gamepad', name: 'PC Gaming', link: '/pc-gaming' },
    { icon: 'fas fa-microchip', name: 'Linh kiện', link: '/components' },
    { icon: 'fas fa-tv', name: 'Màn hình', link: '/monitors' },
    { icon: 'fas fa-keyboard', name: 'Phụ kiện', link: '/accessories' },
    { icon: 'fas fa-hdd', name: 'Thiết bị lưu trữ', link: '/storage' },
    { icon: 'fas fa-network-wired', name: 'Thiết bị mạng', link: '/network' },
=======
const Navigation = ({ navigationItems }) => {
  // Sử dụng dữ liệu từ props hoặc giá trị mặc định
  const items = navigationItems || [
    { icon: 'fas fa-laptop', name: 'Laptop', link: '/laptop' },
    { icon: 'fas fa-desktop', name: 'PC Văn phòng', link: '/pc-office' }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            {categories.map((category, index) => (
              <Nav.Link key={index} href={category.link}>
                <i className={category.icon}></i>
                <span className="ms-2">{category.name}</span>
=======
            {items.map((item) => (
              <Nav.Link key={item.id} href={item.link}>
                <i className={item.icon}></i>
                <span className="ms-2">{item.name}</span>
>>>>>>> Stashed changes
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