import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        :root {
          --primary: #1e40af;
          --secondary: #7c3aed;
          --accent: #f59e0b;
        }
        
        body {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%);
          border-radius: 50%;
          top: -200px;
          left: -200px;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .logo-box {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s;
        }
        
        .logo-box:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-5px);
        }
        
        .card-glow {
          position: relative;
          transition: all 0.5s;
        }
        
        .card-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.5s;
          z-index: -1;
          filter: blur(10px);
        }
        
        .card-glow:hover::before {
          opacity: 0.7;
        }
        
        .card-glow:hover {
          transform: translateY(-10px) scale(1.02);
        }
        
        .card-img-top {
          height: 200px;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .card-glow:hover .card-img-top {
          transform: scale(1.1);
        }
        
        .badge-custom {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 10;
        }
        
        .featured-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border: none;
          transition: all 0.3s;
        }
        
        .btn-gradient:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
      `}</style>

      <div>
        {/* Hero Section */}
        <section className="hero text-white py-5 position-relative">
          <div className="container position-relative" style={{zIndex: 10}}>
            {/* Logos */}
            <div className="row justify-content-center mb-4">
              <div className="col-auto">
                <div className="logo-box rounded-3 p-3">
                  <div className="bg-white rounded-2 d-flex align-items-center justify-content-center p-2" style={{width: '80px', height: '80px'}}>
                    <img 
                      src="/images/13.png" 
                      alt="REDA Logo" 
                      className="img-fluid"
                      style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
                    />
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="logo-box rounded-3 p-3">
                  <div className="bg-white rounded-2 d-flex align-items-center justify-content-center p-2" style={{width: '80px', height: '80px'}}>
                    <img 
                      src="/images/png-clipart-emblem-of-sri-lanka-government-of-sri-lanka-national-emblem-sri-lankan-moors-emblem-of-sri-lanka-emblem-logo-thumbnail.png" 
                      alt="Sri Lanka Government Logo" 
                      className="img-fluid"
                      style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
                    />
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="logo-box rounded-3 p-3">
                  <div className="bg-white rounded-2 d-flex align-items-center justify-content-center p-2" style={{width: '80px', height: '80px'}}>
                    <img 
                      src="/images/Central_Province.png" 
                      alt="Central Province Logo" 
                      className="img-fluid"
                      style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-3">REDA Academy of Information Technology</h1>
              <p className="lead mb-2">Regional Economic Development Agency</p>
              <hr className="border border-primary opacity-50 w-25 mx-auto mb-3" />
              <p className="fs-5">Empowering Futures Through Technology & Professional Skills Development</p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-5">
          <div className="container">
            {/* Section Header */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">Professional Certification Programs</h2>
              <p className="lead text-muted">Industry-relevant IT education for career advancement</p>
            </div>

            {/* Cards */}
            <div className="row g-4">
              
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="card card-glow border-0 shadow h-100 overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <span className="badge badge-custom bg-primary">CERTIFICATE</span>
                    <span className="badge badge-custom bg-dark" style={{left: 'auto', right: '15px'}}>3 Months</span>
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" className="card-img-top" alt="IT Course" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bold mb-4">Certificate in Information Technology</h5>
                    
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <span>🏛️</span>
                        <span className="ms-2">REDA Certified Program</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <span>👔</span>
                        <span className="ms-2">Entry-level Professionals</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span>🎯</span>
                        <span className="ms-2">Foundation Skills</span>
                      </div>
                    </div>
                    
                    <ul className="list-unstyled small mb-4">
                      <li className="mb-2"><span className="text-primary">✓</span> Basic Computer Operations</li>
                      <li className="mb-2"><span className="text-primary">✓</span> Software Applications</li>
                      <li className="mb-2"><span className="text-primary">✓</span> Digital Literacy</li>
                      <li><span className="text-primary">✓</span> IT Fundamentals</li>
                    </ul>
                    
                    <Link to="/courses/certificate-it" className="btn btn-gradient text-white w-100 fw-semibold" style={{textDecoration: 'none'}}>
                      Program Details <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 - Featured */}
              <div className="col-lg-4 col-md-6">
                <div className="card card-glow border-2 border-danger shadow h-100 overflow-hidden position-relative">
                  <span className="badge featured-badge bg-danger">Most Popular</span>
                  <div className="position-relative overflow-hidden">
                    <span className="badge badge-custom" style={{background: '#7c3aed'}}>DIPLOMA</span>
                    <span className="badge badge-custom bg-dark" style={{left: 'auto', right: '15px'}}>6 Months</span>
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400" className="card-img-top" alt="Applications Course" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bold mb-4">Computer Applications Assistant</h5>
                    
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <span>💼</span>
                        <span className="ms-2">Office Ready Skills</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <span>📈</span>
                        <span className="ms-2">Career Advancement</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span>🏆</span>
                        <span className="ms-2">Industry Recognized</span>
                      </div>
                    </div>
                    
                    <ul className="list-unstyled small mb-4">
                      <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> MS Office Suite Mastery</li>
                      <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> Data Management</li>
                      <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> Professional Presentations</li>
                      <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> Productivity Tools</li>
                      <li><span style={{color: '#7c3aed'}}>✓</span> Technical Support Basics</li>
                    </ul>
                    
                    <Link to="/courses/computer-applications" className="btn text-white w-100 fw-semibold" style={{background: 'linear-gradient(135deg, #7c3aed, #ec4899)', textDecoration: 'none'}}>
                      Program Details <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="card card-glow border-0 shadow h-100 overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <span className="badge badge-custom" style={{background: '#f59e0b'}}>ADVANCED</span>
                    <span className="badge badge-custom bg-dark" style={{left: 'auto', right: '15px'}}>3 Months</span>
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400" className="card-img-top" alt="Advanced IT" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bold mb-4">Advanced IT Certification</h5>
                    
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <span>🤝</span>
                        <span className="ms-2">SIBA Collaboration</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <span>🎓</span>
                        <span className="ms-2">O/L Qualified</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span>🚀</span>
                        <span className="ms-2">Career Focused</span>
                      </div>
                    </div>
                    
                    <ul className="list-unstyled small mb-4">
                      <li className="mb-2"><span style={{color: '#f59e0b'}}>✓</span> Advanced Software Skills</li>
                      <li className="mb-2"><span style={{color: '#f59e0b'}}>✓</span> IT Support Specialist</li>
                      <li className="mb-2"><span style={{color: '#f59e0b'}}>✓</span> Network Fundamentals</li>
                      <li><span style={{color: '#f59e0b'}}>✓</span> Professional Development</li>
                    </ul>
                    
                    <Link to="/courses/advanced-it" className="btn text-white w-100 fw-semibold" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)', textDecoration: 'none'}}>
                      Program Details <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
             {/* Card 4 - template */}
{/*<div className="col-lg-4 col-md-6">
  <div className="card card-glow border-2 border-danger shadow h-100 overflow-hidden position-relative">
    <span className="badge featured-badge bg-danger">Most Popular</span>
    <div className="position-relative overflow-hidden">
      <span className="badge badge-custom" style={{background: '#7c3aed'}}>DIPLOMA</span>
      <span className="badge badge-custom bg-dark" style={{left: 'auto', right: '15px'}}>6 Months</span>
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400" className="card-img-top" alt="Applications Course" />
    </div>
    <div className="card-body">
      <h5 className="card-title text-center fw-bold mb-4">Computer Applications Assistant</h5>
      
      <div className="mb-3">
        <div className="d-flex align-items-center mb-2">
          <span>💼</span>
          <span className="ms-2">Office Ready Skills</span>
        </div>
        <div className="d-flex align-items-center mb-2">
          <span>📈</span>
          <span className="ms-2">Career Advancement</span>
        </div>
        <div className="d-flex align-items-center">
          <span>🏆</span>
          <span className="ms-2">Industry Recognized</span>
        </div>
      </div>
      
      <ul className="list-unstyled small mb-4">
        <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> MS Office Suite Mastery</li>
        <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> Data Management</li>
        <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> Professional Presentations</li>
        <li className="mb-2"><span style={{color: '#7c3aed'}}>✓</span> Productivity Tools</li>
        <li><span style={{color: '#7c3aed'}}>✓</span> Technical Support Basics</li>
      </ul>
      
      <Link to="/courses/computer-applications" className="btn text-white w-100 fw-semibold" style={{background: 'linear-gradient(135deg, #7c3aed, #ec4899)', textDecoration: 'none'}}>
        Program Details <i className="fas fa-arrow-right ms-2"></i>
      </Link>
    </div>
  </div>
</div>*/}

</div>

            {/* CTA Section */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card border-0 shadow-lg overflow-hidden" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)'}}>
                  <div className="card-body text-center text-white py-5">
                    <h3 className="display-6 fw-bold mb-3">Ready to Advance Your Career?</h3>
                    <p className="lead mb-4">Join hundreds of successful graduates who transformed their careers with REDA Academy</p>
                    <Link to="/form" className="btn btn-light btn-lg fw-semibold px-5" style={{textDecoration: 'none'}}>
                      Enroll Now <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default WelcomePage;