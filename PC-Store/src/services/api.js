import axios from 'axios';

const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product APIs
export const productAPI = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  getByCategory: (category) => api.get(`/products?category=${category}`),
  getFeatured: () => api.get('/products?featured=true'),
  create: (product) => api.post('/products', product),
  update: (id, product) => api.put(`/products/${id}`, product),
  delete: (id) => api.delete(`/products/${id}`),
};

// Banner APIs
export const bannerAPI = {
  getAll: () => api.get('/banners'),
  getById: (id) => api.get(`/banners/${id}`),
};

// Category APIs
export const categoryAPI = {
  getAll: () => api.get('/categories'),
  getById: (id) => api.get(`/categories/${id}`),
};

// Navigation APIs
export const navigationAPI = {
  getAll: () => api.get('/navigation'),
};

// Site Info APIs
export const siteInfoAPI = {
  get: () => api.get('/siteInfo'),
};

// Footer Links APIs
export const footerLinksAPI = {
  get: () => api.get('/footerLinks'),
};

// Helper function to handle errors
export const handleAPIError = (error) => {
  if (error.response) {
    // Server responded with error status
    console.error('API Error:', error.response.data);
    return error.response.data.message || 'Có lỗi xảy ra từ server';
  } else if (error.request) {
    // Request was made but no response
    console.error('Network Error:', error.request);
    return 'Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.';
  } else {
    // Something else happened
    console.error('Error:', error.message);
    return 'Có lỗi xảy ra. Vui lòng thử lại.';
  }
};

export default api; 