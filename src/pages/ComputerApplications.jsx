import React from 'react';
import { Link } from 'react-router-dom';

function ComputerApplications() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        .course-hero {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .course-hero::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%);
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
          border-color: #7c3aed;
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .module-item {
          background: #faf5ff;
          border-left: 4px solid #7c3aed;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s;
          position: relative;
        }
        
        .module-item:hover {
          background: #f3e8ff;
          transform: translateX(10px);
          box-shadow: 0 4px 12px rgba(124,58,237,0.2);
        }
        
        .module-number {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
        }
        
        .cta-box {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          border-radius: 1rem;
          padding: 3rem;
          color: white;
          text-align: center;
          box-shadow: 0 20px 40px rgba(124,58,237,0.3);
        }
        
        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #dc2626;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
          font-weight: bold;
          font-size: 0.85rem;
          box-shadow: 0 4px 12px rgba(220,38,38,0.4);
          z-index: 10;
        }

        .payment-card {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 1rem;
          padding: 2rem;
          color: white;
          margin-bottom: 1rem;
        }

        .installment-badge {
          background: rgba(124,58,237,0.1);
          border: 2px solid #7c3aed;
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
                <span className="badge mb-3" style={{fontSize: '0.9rem', background: 'rgba(255,255,255,0.2)'}}>
                  <i className="fas fa-star me-2"></i>MOST POPULAR PROGRAM
                </span>
                <h1 className="display-3 fw-bold mb-3">Computer Applications Assistant</h1>
                <p className="lead mb-4">
                  Master essential office applications and multimedia skills with our comprehensive 3-month diploma program. 
                  Perfect for those seeking professional office-ready competencies.
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
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400" 
                    alt="Computer Applications Course" 
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
                  <p className="text-muted mb-0">Weekdays/Weekends</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Level</h5>
                  <p className="text-muted mb-0">Intermediate</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-award"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Certification</h5>
                  <p className="text-muted mb-0">REDA Diploma</p>
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
                    <i className="fas fa-book-open me-3" style={{color: '#7c3aed'}}></i>Course Overview
                  </h2>
                  <p className="lead text-muted mb-4">
                    Our Computer Applications Assistant program provides comprehensive training in office productivity 
                    tools, database management, and multimedia design. This industry-recognized course prepares you 
                    for immediate employment in professional office environments.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="fas fa-check-circle text-success me-2"></i>What You'll Master
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>File & Folder Management</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Advanced Word Processing</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Excel & Data Analysis</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Professional Presentations</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Database Management</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Internet & Email Operations</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Graphic Design (Photoshop)</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="fas fa-users me-2" style={{color: '#7c3aed'}}></i>Ideal For
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Office Administrators</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Administrative Assistants</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Data Entry Specialists</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Career Switchers</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Fresh Graduates</li>
                        <li className="mb-2"><i className="fas fa-angle-right me-2" style={{color: '#7c3aed'}}></i>Entrepreneurs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Course Modules */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4 position-relative">
                  <span className="popular-badge">
                    <i className="fas fa-fire me-2"></i>7 Comprehensive Modules
                  </span>
                  <h2 className="fw-bold mb-4 mt-3">
                    <i className="fas fa-list-check me-3" style={{color: '#7c3aed'}}></i>Course Modules
                  </h2>
                  
                  <div className="module-item">
                    <span className="module-number">M-01</span>
                    <h5 className="fw-bold mb-2" style={{color: '#7c3aed'}}>Maintain Files & Folders</h5>
                    <p className="text-muted mb-0">
                      Organize, manage, and secure digital files and folder structures. Learn efficient file 
                      naming conventions, backup strategies, and data organization best practices.
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <span className="module-number">M-02</span>
                    <h5 className="fw-bold mb-2" style={{color: '#7c3aed'}}>Perform Word Processing</h5>
                    <p className="text-muted mb-0">
                      Master MS Word for creating professional documents, reports, letters, and business 
                      correspondence. Advanced formatting, mail merge, and document automation.
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <span className="module-number">M-03</span>
                    <h5 className="fw-bold mb-2" style={{color: '#7c3aed'}}>Prepare Spreadsheets</h5>
                    <p className="text-muted mb-0">
                      Excel mastery including formulas, functions, pivot tables, data analysis, charts, 
                      and financial calculations for business decision-making.
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <span className="module-number">M-04</span>
                    <h5 className="fw-bold mb-2" style={{color: '#7c3aed'}}>Prepare Presentations</h5>
                    <p className="text-muted mb-0">
                      Create compelling PowerPoint presentations with animations, transitions, multimedia 
                      integration, and professional design principles.
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <span className="module-number">M-05</span>
                    <h5 className="fw-bold mb-2" style={{color: '#7c3aed'}}>Maintain Databases</h5>
                    <p className="text-muted mb-0">
                      Database fundamentals using MS Access. Create, manage, and query databases. 
                      Design forms, reports, and automate data management tasks.
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <span className="module-number">M-06</span>
                    <h5 className="fw-bold mb-2" style={{color: '#7c3aed'}}>Perform Internet & Email Operations</h5>
                    <p className="text-muted mb-0">
                      Professional email management, web research, cloud services, online collaboration 
                      tools, and digital communication etiquette.
                    </p>
                  </div>
                  
                  <div className="module-item">
                    <span className="module-number">M-07</span>
                    <h5 className="fw-bold mb-2" style={{color: '#7c3aed'}}>Develop Graphics for Online/Print Media</h5>
                    <p className="text-muted mb-0">
                      Adobe Photoshop fundamentals - photo editing, graphic design, social media graphics, 
                      print materials, and multimedia content creation.
                    </p>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-credit-card me-3" style={{color: '#7c3aed'}}></i>Payment Details
                  </h2>
                  
                  <div className="payment-card mb-3">
                    <div className="text-center mb-3">
                      <h3 className="fw-bold mb-2">Total Course Fee</h3>
                      <h1 className="display-4 fw-bold">LKR 20,000</h1>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="bg-light rounded-3 p-3" style={{border: '2px solid #7c3aed'}}>
                        <div className="text-center">
                          <i className="fas fa-money-bill-wave fs-2 mb-2" style={{color: '#7c3aed'}}></i>
                          <h5 className="fw-bold mb-2">Admission Fee</h5>
                          <h3 className="fw-bold mb-0" style={{color: '#7c3aed'}}>LKR 5,000</h3>
                          <small className="text-muted">Pay at enrollment (1/4 of total)</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light rounded-3 p-3" style={{border: '2px solid #10b981'}}>
                        <div className="text-center">
                          <i className="fas fa-calendar-check text-success fs-2 mb-2"></i>
                          <h5 className="fw-bold mb-2">Balance</h5>
                          <h3 className="text-success fw-bold mb-0">LKR 15,000</h3>
                          <small className="text-muted">4 installments available</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-list-ol me-2" style={{color: '#7c3aed'}}></i>Installment Plan
                    </h5>
                    <div className="row g-2">
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold" style={{color: '#7c3aed'}}>Payment 1</div>
                          <div className="fs-5 fw-bold">LKR 3,750</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold" style={{color: '#7c3aed'}}>Payment 2</div>
                          <div className="fs-5 fw-bold">LKR 3,750</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold" style={{color: '#7c3aed'}}>Payment 3</div>
                          <div className="fs-5 fw-bold">LKR 3,750</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="installment-badge">
                          <div className="fw-bold" style={{color: '#7c3aed'}}>Payment 4</div>
                          <div className="fs-5 fw-bold">LKR 3,750</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-info mt-4 mb-0" role="alert">
                    <i className="fas fa-info-circle me-2"></i>
                    <strong>Note:</strong> Pay LKR 5,000 admission fee (1/4 of total) at enrollment, then complete the remaining LKR 15,000 in 4 equal monthly installments of LKR 3,750 each.
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="bg-white rounded-3 p-4 shadow-sm">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-briefcase me-3" style={{color: '#7c3aed'}}></i>Career Opportunities
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 rounded-3" style={{background: '#faf5ff'}}>
                        <i className="fas fa-user-tie fs-4 me-3" style={{color: '#7c3aed'}}></i>
                        <div>
                          <h6 className="fw-bold mb-0">Office Administrator</h6>
                          <small className="text-muted">Rs. 35,000 - 50,000</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 rounded-3" style={{background: '#faf5ff'}}>
                        <i className="fas fa-laptop-code fs-4 me-3" style={{color: '#7c3aed'}}></i>
                        <div>
                          <h6 className="fw-bold mb-0">Data Analyst Assistant</h6>
                          <small className="text-muted">Rs. 40,000 - 60,000</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 rounded-3" style={{background: '#faf5ff'}}>
                        <i className="fas fa-database fs-4 me-3" style={{color: '#7c3aed'}}></i>
                        <div>
                          <h6 className="fw-bold mb-0">Database Assistant</h6>
                          <small className="text-muted">Rs. 35,000 - 55,000</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 rounded-3" style={{background: '#faf5ff'}}>
                        <i className="fas fa-palette fs-4 me-3" style={{color: '#7c3aed'}}></i>
                        <div>
                          <h6 className="fw-bold mb-0">Junior Graphic Designer</h6>
                          <small className="text-muted">Rs. 30,000 - 50,000</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-lg-4">
                {/* Enrollment CTA */}
                <div className="cta-box mb-4">
                  <i className="fas fa-star fs-1 mb-3"></i>
                  <h3 className="fw-bold mb-3">Most Popular Choice!</h3>
                  <p className="mb-4">Join hundreds of successful graduates. Transform your career with comprehensive office skills.</p>
                  <Link to="/form" className="btn btn-light btn-lg w-100 fw-bold">
                    <i className="fas fa-user-plus me-2"></i>Enroll Now
                  </Link>
                </div>

                {/* Course Features */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h5 className="fw-bold mb-4">Program Highlights</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      7 Industry-Standard Modules
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Adobe Photoshop Training
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Database Management Skills
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Practical Office Projects
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Professional Certification
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Job Placement Assistance
                    </li>
                  </ul>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h5 className="fw-bold mb-4">Entry Requirements</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-graduation-cap me-2" style={{color: '#7c3aed'}}></i>
                      O/L or equivalent
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-laptop me-2" style={{color: '#7c3aed'}}></i>
                      Basic computer knowledge
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-language me-2" style={{color: '#7c3aed'}}></i>
                      English proficiency (basic)
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-3 p-4 shadow-sm">
                  <h5 className="fw-bold mb-4">Need More Info?</h5>
                  <div className="mb-3">
                    <i className="fas fa-phone me-2" style={{color: '#7c3aed'}}></i>
                    <a href="tel:+94812222222" className="text-decoration-none text-dark">
                      +94 81 222 2222
                    </a>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-envelope me-2" style={{color: '#7c3aed'}}></i>
                    <a href="mailto:redaacademycp@gmail.com" className="text-decoration-none text-dark">
                      redaacademycp@gmail.com
                    </a>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-map-marker-alt me-2" style={{color: '#7c3aed'}}></i>
                    <span>Gatambe, Kandy</span>
                  </div>
                  <Link to="/contact" className="btn w-100 mt-3 text-white fw-semibold" style={{background: 'linear-gradient(135deg, #7c3aed, #ec4899)'}}>
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

export default ComputerApplications;