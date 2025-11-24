import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
        }
        
        .footer-section {
          padding: 3rem 0 1rem;
        }
        
        .footer-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          display: block;
          margin-bottom: 0.75rem;
          transition: all 0.3s;
          font-size: 0.95rem;
        }
        
        .footer-link:hover {
          color: white;
          padding-left: 8px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.5rem;
          transition: all 0.3s;
          color: white;
          text-decoration: none;
        }
        
        .social-icon:hover {
          background: white;
          color: #1e3a8a;
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem 0;
          margin-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-logo {
          width: 60px;
          height: 60px;
          margin-bottom: 1rem;
        }
        
        .contact-item {
          display: flex;
          align-items: start;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .contact-item i {
          margin-right: 0.75rem;
          margin-top: 0.25rem;
          color: #3b82f6;
        }
        
        .tech-credit {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          display: inline-block;
          font-size: 0.9rem;
        }
        
        .tech-credit i {
          color: #3b82f6;
          margin-right: 0.5rem;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-section">
          <div className="container">
            <div className="row g-4">
              {/* About Section */}
              <div className="col-lg-4 col-md-6">
                <img 
                  src="/images/13.png" 
                  alt="REDA Academy Logo" 
                  className="footer-logo"
                />
                <h3 className="footer-title">REDA Academy</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6'}}>
                  Regional Economic Development Agency - Empowering communities through quality 
                  IT education and professional skills development in the Central Province.
                </p>
                <div className="mt-4">
                  <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <h4 className="footer-title">Quick Links</h4>
                <Link to="/" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>Home
                </Link>
                <Link to="/about" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>About Us
                </Link>
                <Link to="/services" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>Services
                </Link>
                <Link to="/gallery" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>Gallery
                </Link>
                <Link to="/contact" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>Contact
                </Link>
              </div>

              {/* Courses */}
              <div className="col-lg-3 col-md-6">
                <h4 className="footer-title">Our Courses</h4>
                <Link to="/courses/certificate-it" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>Certificate in IT
                </Link>
                <Link to="/courses/computer-applications" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>Computer Applications
                </Link>
                <Link to="/courses/advanced-it" className="footer-link">
                  <i className="fas fa-angle-right me-2"></i>Advanced IT Diploma
                </Link>
                <Link to="/form" className="footer-link" style={{marginTop: '1rem', color: '#3b82f6', fontWeight: '600'}}>
                  <i className="fas fa-arrow-right me-2"></i>Enroll Now
                </Link>
              </div>

              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <h4 className="footer-title">Contact Us</h4>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Address:</strong><br />
                    Gatambe Information Technology Center,<br />
                    Kandy, Central Province, Sri Lanka
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Phone:</strong><br />
                    <a href="tel:+94812088465" style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none'}}>
                      +94 81 2088 465
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email:</strong><br />
                    <a href="mailto:redaacademycp@gmail.com" style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none'}}>
                      redaacademycp@gmail.com.lk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p className="mb-0" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                  © {currentYear} REDA Academy. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="tech-credit">
                  <i className="fas fa-code"></i>
                  Developed by <strong>REDA Technical Team</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;