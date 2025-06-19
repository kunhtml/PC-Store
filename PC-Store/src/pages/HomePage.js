import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

const HomePage = ({ products, banners, siteInfo, navigation, footerLinks }) => {
  // Lọc sản phẩm theo category và featured
  const getFeaturedProductsByCategory = (category) => {
    return products.filter(p => p.category === category && p.featured);
  };

  const laptopProducts = getFeaturedProductsByCategory('laptop');
  const pcProducts = getFeaturedProductsByCategory('pc');
  const componentProducts = getFeaturedProductsByCategory('component');

  return (
    <>
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
    </>
  );
};

export default HomePage; 