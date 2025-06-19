import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo: check if email is admin@pcstore.vn and password is 123456
      if (formData.email === 'admin@pcstore.vn' && formData.password === '123456') {
        // Save user info to localStorage
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          name: 'Admin PC Store'
        }));
        
        // Redirect to home page
        navigate('/');
      } else {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center min-vh-100 align-items-center">
          <Col xs={12} md={6} lg={5}>
            <Card className="shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="text-danger fw-bold">PC Store</h2>
                  <p className="text-muted">Đăng nhập vào tài khoản của bạn</p>
                </div>

                {showAlert && (
                  <Alert variant="danger" dismissible onClose={() => setShowAlert(false)}>
                    Email hoặc mật khẩu không chính xác!
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Nhập email của bạn"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Nhập mật khẩu"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Ghi nhớ đăng nhập"
                      id="remember-me"
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="danger"
                      type="submit"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Đang đăng nhập...
                        </>
                      ) : (
                        'Đăng nhập'
                      )}
                    </Button>
                  </div>

                  <div className="text-center mt-3">
                    <Link to="/forgot-password" className="text-decoration-none">
                      Quên mật khẩu?
                    </Link>
                  </div>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p className="mb-0">
                      Chưa có tài khoản?{' '}
                      <Link to="/register" className="text-danger text-decoration-none fw-bold">
                        Đăng ký ngay
                      </Link>
                    </p>
                  </div>

                  <div className="demo-info mt-4 p-3 bg-light rounded">
                    <p className="mb-1 small"><strong>Demo Account:</strong></p>
                    <p className="mb-0 small">Email: admin@pcstore.vn</p>
                    <p className="mb-0 small">Password: 123456</p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login; 