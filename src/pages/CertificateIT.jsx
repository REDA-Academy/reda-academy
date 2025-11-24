import React from 'react';
import { Link } from 'react-router-dom';

function CertificateIT() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        .course-hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .course-hero::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .info-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s;
          border: 2px solid transparent;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .module-item {
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s;
        }
        
        .module-item:hover {
          background: #eff6ff;
          transform: translateX(10px);
        }
        
        .cta-box {
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          border-radius: 1rem;
          padding: 3rem;
          color: white;
          text-align: center;
          box-shadow: 0 20px 40px rgba(59,130,246,0.3);
        }
        
        .timeline-item {
          position: relative;
          padding-left: 3rem;
          padding-bottom: 2rem;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          background: #3b82f6;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 0 2px #3b82f6;
        }
        
        .timeline-item::after {
          content: '';
          position: absolute;
          left: 9px;
          top: 20px;
          width: 2px;
          height: calc(100% - 20px);
          background: #e5e7eb;
        }
        
        .timeline-item:last-child::after {
          display: none;
        }

        .payment-card {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 1rem;
          padding: 2rem;
          color: white;
          margin-bottom: 1rem;
        }

        .installment-badge {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          border-radius: 0.5rem;
          padding: 1rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh'}}>
        {/* Hero Section */}
        <section className="course-hero text-white position-relative">
          <div className="container position-relative" style={{zIndex: 10}}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="badge bg-primary mb-3" style={{fontSize: '0.9rem'}}>
                  <i className="fas fa-certificate me-2"></i>CERTIFICATE PROGRAM
                </span>
                <h1 className="display-3 fw-bold mb-3">Certificate in Information Technology</h1>
                <p className="lead mb-4">
                  Build a strong foundation in IT with our comprehensive 3-month certificate program. 
                  Perfect for beginners looking to start their journey in technology.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/form" className="btn btn-light btn-lg px-4">
                    <i className="fas fa-user-plus me-2"></i>Enroll Now
                  </Link>
                  <a href="#details" className="btn btn-outline-light btn-lg px-4">
                    <i className="fas fa-info-circle me-2"></i>Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center mt-4 mt-lg-0">
                <div className="bg-white rounded-3 p-4 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" 
                    alt="IT Course" 
                    className="img-fluid rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Duration</h5>
                  <p className="text-muted mb-0">3 Months</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Schedule</h5>
                  <p className="text-muted mb-0">Flexible Timing</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Level</h5>
                  <p className="text-muted mb-0">Beginner</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Certification</h5>
                  <p className="text-muted mb-0">REDA Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-5" id="details">
          <div className="container">
            <div className="row g-5">
              {/* Left Column */}
              <div className="col-lg-8">
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-book-open text-primary me-3"></i>Course Overview
                  </h2>
                  <p className="lead text-muted mb-4">
                    Our Certificate in Information Technology program is designed to provide students 
                    with essential IT skills and knowledge needed to succeed in today's digital workplace.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="fas fa-check-circle text-success me-2"></i>What You'll Learn
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Computer Fundamentals</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Operating Systems (Windows)</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Microsoft Office Suite</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Internet & Email</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Digital Literacy</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Basic Troubleshooting</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="fas fa-users text-primary me-2"></i>Who Should Enroll
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Career Starters</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Students</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Office Workers</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Small Business Owners</li>
                        <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Anyone New to IT</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Course Modules */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-list-check text-primary me-3"></i>Course Modules
                  </h2>
                  
                  <div className="module-item">
                    <h5 className="fw-bold mb-2">Module 1: Computer Basics</h5>
                    <p className="text-muted mb-0">
                      Introduction to computers, hardware components, and basic operations
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <h5 className="fw-bold mb-2">Module 2: Operating Systems</h5>
                    <p className="text-muted mb-0">
                      Windows OS fundamentals, file management, and system settings
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <h5 className="fw-bold mb-2">Module 3: MS Word Processing</h5>
                    <p className="text-muted mb-0">
                      Document creation, formatting, tables, and professional reports
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <h5 className="fw-bold mb-2">Module 4: MS Excel Essentials</h5>
                    <p className="text-muted mb-0">
                      Spreadsheets, formulas, charts, and data management
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <h5 className="fw-bold mb-2">Module 5: MS PowerPoint</h5>
                    <p className="text-muted mb-0">
                      Creating professional presentations and visual communication
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <h5 className="fw-bold mb-2">Module 6: Internet & Communication</h5>
                    <p className="text-muted mb-0">
                      Web browsing, email management, and online safety
                    </p>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="bg-white rounded-3 p-4 shadow-sm">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-credit-card text-primary me-3"></i>Payment Details
                  </h2>
                  
                  <div className="payment-card mb-3">
                    <div className="text-center mb-3">
                      <h3 className="fw-bold mb-2">Total Course Fee</h3>
                      <h1 className="display-4 fw-bold">LKR 15,000</h1>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="bg-light rounded-3 p-3 border-2 border-primary" style={{border: '2px solid'}}>
                        <div className="text-center">
                          <i className="fas fa-money-bill-wave text-primary fs-2 mb-2"></i>
                          <h5 className="fw-bold mb-2">Admission Fee</h5>
                          <h3 className="text-primary fw-bold mb-0">LKR 2,000</h3>
                          <small className="text-muted">Pay at enrollment</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light rounded-3 p-3 border-2 border-success" style={{border: '2px solid'}}>
                        <div className="text-center">
                          <i className="fas fa-calendar-check text-success fs-2 mb-2"></i>
                          <h5 className="fw-bold mb-2">Balance</h5>
                          <h3 className="text-success fw-bold mb-0">LKR 13,000</h3>
                          <small className="text-muted">4 installments available</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-list-ol text-primary me-2"></i>Installment Plan
                    </h5>
                    <div className="row g-2">
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold">Payment 1</div>
                          <div className="fs-5">LKR 3,250</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold">Payment 2</div>
                          <div className="fs-5">LKR 3,250</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold">Payment 3</div>
                          <div className="fs-5">LKR 3,250</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold">Payment 4</div>
                          <div className="fs-5">LKR 3,250</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-info mt-4 mb-0" role="alert">
                    <i className="fas fa-info-circle me-2"></i>
                    <strong>Note:</strong> Pay LKR 2,000 admission fee at enrollment, then complete the remaining LKR 13,000 in 4 equal monthly installments of LKR 3,250 each.
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-lg-4">
                {/* Enrollment CTA */}
                <div className="cta-box mb-4">
                  <i className="fas fa-award fs-1 mb-3"></i>
                  <h3 className="fw-bold mb-3">Ready to Start?</h3>
                  <p className="mb-4">Join REDA Academy and transform your career with professional IT skills.</p>
                  <Link to="/form" className="btn btn-light btn-lg w-100 fw-bold">
                    <i className="fas fa-user-plus me-2"></i>Enroll Now
                  </Link>
                </div>

                {/* Course Features */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h5 className="fw-bold mb-4">Course Features</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Hands-on Training
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Experienced Instructors
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Modern Computer Lab
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Course Materials Included
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Certificate upon Completion
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Job Placement Support
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-3 p-4 shadow-sm">
                  <h5 className="fw-bold mb-4">Need More Info?</h5>
                  <div className="mb-3">
                    <i className="fas fa-phone text-primary me-2"></i>
                    <a href="tel:+94812222222" className="text-decoration-none text-dark">
                      +94 81 222 2222
                    </a>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-envelope text-primary me-2"></i>
                    <a href="mailto:info@redaacademy.lk" className="text-decoration-none text-dark">
                      info@redaacademy.lk
                    </a>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <span>Gatambe, Kandy</span>
                  </div>
                  <Link to="/contact" className="btn btn-outline-primary w-100 mt-3">
                    <i className="fas fa-paper-plane me-2"></i>Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CertificateIT;