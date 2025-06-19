<<<<<<< Updated upstream
function App() {
  return <h1>Hello World</h1>;
=======
import React, { useState, useEffect } from 'react';
import { Spinner, Alert, Container, Button } from 'react-bootstrap';
import { productAPI, bannerAPI, navigationAPI, siteInfoAPI, footerLinksAPI, handleAPIError } from './services/api';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [navigation, setNavigation] = useState([]);
  const [siteInfo, setSiteInfo] = useState(null);
  const [footerLinks, setFooterLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch tất cả dữ liệu cùng lúc
      const [productsRes, bannersRes, navRes, siteInfoRes, footerLinksRes] = await Promise.all([
        productAPI.getAll(),
        bannerAPI.getAll(),
        navigationAPI.getAll(),
        siteInfoAPI.get(),
        footerLinksAPI.get()
      ]);
      
      setProducts(productsRes.data);
      setBanners(bannersRes.data);
      setNavigation(navRes.data);
      setSiteInfo(siteInfoRes.data);
      setFooterLinks(footerLinksRes.data);
      setError(null);
    } catch (err) {
      const errorMessage = handleAPIError(err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Lọc sản phẩm theo category và featured
  const getFeaturedProductsByCategory = (category) => {
    return products.filter(p => p.category === category && p.featured);
  };

  const laptopProducts = getFeaturedProductsByCategory('laptop');
  const pcProducts = getFeaturedProductsByCategory('pc');
  const componentProducts = getFeaturedProductsByCategory('component');

  if (loading) {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="text-center">
            <Spinner animation="border" variant="danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p className="mt-3">Đang tải dữ liệu...</p>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Container className="py-5">
          <Alert variant="danger">
            <Alert.Heading>Lỗi!</Alert.Heading>
            <p>{error}</p>
            <hr />
            <p className="mb-0">
              Hãy chắc chắn rằng json-server đang chạy trên port 3001. 
              Chạy lệnh: <code>npm run server</code> hoặc <code>npm run dev</code>
            </p>
            <Button variant="danger" onClick={fetchData} className="mt-3">
              Thử lại
            </Button>
          </Alert>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header siteInfo={siteInfo} />
      <Navigation navigationItems={navigation} />
      <Banner banners={banners} />
      
      {laptopProducts.length > 0 && (
        <ProductSection 
          title="Laptop Gaming Hot" 
          products={laptopProducts} 
          viewMoreLink="/laptop-gaming"
        />
      )}
      
      {pcProducts.length > 0 && (
        <ProductSection 
          title="PC Bán Chạy" 
          products={pcProducts} 
          viewMoreLink="/pc-desktops"
        />
      )}
      
      {componentProducts.length > 0 && (
        <ProductSection 
          title="Linh Kiện Máy Tính" 
          products={componentProducts} 
          viewMoreLink="/components"
        />
      )}
      
      <Footer siteInfo={siteInfo} footerLinks={footerLinks} />
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
