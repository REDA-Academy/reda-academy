import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdvancedIT() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        .course-hero {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .course-hero::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%);
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
          border-color: #f59e0b;
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .skill-badge {
          background: #fff7ed;
          border: 2px solid #f59e0b;
          border-radius: 2rem;
          padding: 0.75rem 1.5rem;
          margin: 0.5rem;
          display: inline-block;
          transition: all 0.3s;
          font-weight: 600;
          color: #d97706;
        }
        
        .skill-badge:hover {
          background: #f59e0b;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(245,158,11,0.3);
        }
        
        .cta-box {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border-radius: 1rem;
          padding: 3rem;
          color: white;
          text-align: center;
          box-shadow: 0 20px 40px rgba(245,158,11,0.3);
        }
        
        .partnership-badge {
          background: white;
          color: #d97706;
          padding: 1rem 2rem;
          border-radius: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
        }
        
        .faq-item {
          background: white;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }
        
        .faq-item:hover {
          box-shadow: 0 4px 12px rgba(245,158,11,0.2);
        }
        
        .faq-question {
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          color: #1f2937;
          transition: all 0.3s;
        }
        
        .faq-question:hover {
          background: #fff7ed;
        }
        
        .faq-answer {
          padding: 0 1.5rem;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-answer.open {
          padding: 0 1.5rem 1.5rem;
          max-height: 200px;
        }
        
        .requirement-box {
          background: #fff7ed;
          border-left: 4px solid #f59e0b;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }
      `}</style>

      <div style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh'}}>
        {/* Hero Section */}
        <section className="course-hero text-white position-relative">
          <div className="container position-relative" style={{zIndex: 10}}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="partnership-badge">
                  <i className="fas fa-handshake" style={{color: '#f59e0b', fontSize: '1.5rem'}}></i>
                  <span>In Partnership with SIBA Campus</span>
                </div>
                <h1 className="display-3 fw-bold mb-3">Diploma in Information Technology</h1>
                <p className="lead mb-4">
                  Go beyond the basics and ignite your creativity with innovative IT solutions. Our comprehensive 
                  hands-on program prepares you for exciting career paths in programming, web development, and graphic design.
                </p>
                <div className="alert alert-light d-inline-block mb-4">
                  <i className="fas fa-star text-warning me-2"></i>
                  <strong>The Best IT Diploma in Kandy</strong>
                </div>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/form" className="btn btn-light btn-lg px-4">
                    <i className="fas fa-user-plus me-2"></i>Apply Now
                  </Link>
                  <a href="#details" className="btn btn-outline-light btn-lg px-4">
                    <i className="fas fa-info-circle me-2"></i>Course Details
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center mt-4 mt-lg-0">
                <div className="bg-white rounded-3 p-4 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400" 
                    alt="Advanced IT Course" 
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
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Location</h5>
                  <p className="text-muted mb-0">Gatambe, Kandy</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-language"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Medium</h5>
                  <p className="text-muted mb-0">English/Sinhala</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="info-card text-center">
                  <div className="feature-icon mx-auto">
                    <i className="fas fa-award"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Certification</h5>
                  <p className="text-muted mb-0">SIBA Diploma</p>
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
                    <i className="fas fa-book-open me-3" style={{color: '#f59e0b'}}></i>Course Overview
                  </h2>
                  <p className="lead text-muted mb-4">
                    The Diploma in Information Technology, offered by the Department of Information Technology at 
                    SIBA Campus in collaboration with REDA Academy, empowers individuals with the practical skills 
                    required to perform office work, graphic designing, and programming-related tasks.
                  </p>
                  
                  <h4 className="fw-bold mb-3" style={{color: '#f59e0b'}}>What You'll Learn</h4>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Fundamentals</h6>
                          <p className="text-muted small mb-0">Introduction to Computers and PC Software Tools</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Data Science</h6>
                          <p className="text-muted small mb-0">Data Representations in Computers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Web Development</h6>
                          <p className="text-muted small mb-0">Introduction to Web Technologies</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Professional Skills</h6>
                          <p className="text-muted small mb-0">Presentation Skills & Communication</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Design</h6>
                          <p className="text-muted small mb-0">Computer Graphics and Image Editing</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Animation</h6>
                          <p className="text-muted small mb-0">Introduction to 2D Animation</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Programming</h6>
                          <p className="text-muted small mb-0">Object Oriented Programming Concepts</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-check-circle text-success fs-5 me-3 mt-1"></i>
                        <div>
                          <h6 className="fw-bold mb-1">Languages</h6>
                          <p className="text-muted small mb-0">Java, C#, and Python</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-code me-3" style={{color: '#f59e0b'}}></i>Skills You'll Develop
                  </h2>
                  <div className="text-center">
                    <span className="skill-badge"><i className="fab fa-java me-2"></i>Java</span>
                    <span className="skill-badge"><i className="fab fa-python me-2"></i>Python</span>
                    <span className="skill-badge"><i className="fas fa-hashtag me-2"></i>C#</span>
                    <span className="skill-badge"><i className="fab fa-html5 me-2"></i>Web Development</span>
                    <span className="skill-badge"><i className="fas fa-paint-brush me-2"></i>Graphic Design</span>
                    <span className="skill-badge"><i className="fas fa-image me-2"></i>Image Editing</span>
                    <span className="skill-badge"><i className="fas fa-film me-2"></i>2D Animation</span>
                    <span className="skill-badge"><i className="fas fa-cube me-2"></i>OOP</span>
                    <span className="skill-badge"><i className="fas fa-database me-2"></i>Data Management</span>
                    <span className="skill-badge"><i className="fas fa-presentation me-2"></i>Presentations</span>
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-clipboard-check me-3" style={{color: '#f59e0b'}}></i>Course Requirements
                  </h2>
                  
                  <div className="requirement-box">
                    <h5 className="fw-bold mb-2">
                      <i className="fas fa-graduation-cap me-2" style={{color: '#f59e0b'}}></i>Entry Requirements
                    </h5>
                    <p className="mb-0 text-muted">
                      After O/L or A/L. Anyone who is interested can join. No specific prerequisites required.
                    </p>
                  </div>
                  
                  <div className="requirement-box">
                    <h5 className="fw-bold mb-2">
                      <i className="fas fa-language me-2" style={{color: '#f59e0b'}}></i>Language Requirements
                    </h5>
                    <p className="mb-0 text-muted">
                      No specific language requirement. Course available in English and Sinhala medium.
                    </p>
                  </div>
                  
                  <div className="requirement-box">
                    <h5 className="fw-bold mb-2">
                      <i className="fas fa-book me-2" style={{color: '#f59e0b'}}></i>Course Requirements
                    </h5>
                    <p className="mb-0 text-muted">
                      No specific course requirement. Suitable for beginners and career switchers.
                    </p>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-3 p-4 shadow-sm">
                  <h2 className="fw-bold mb-4">
                    <i className="fas fa-question-circle me-3" style={{color: '#f59e0b'}}></i>Frequently Asked Questions
                  </h2>
                  
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(0)}>
                      <span>Is there a practical component in the program?</span>
                      <i className={`fas fa-chevron-${openFaq === 0 ? 'up' : 'down'}`} style={{color: '#f59e0b'}}></i>
                    </div>
                    <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                      <p className="text-muted mb-0">
                        Yes! This is a hands-on program with extensive practical components. You'll work on real-world 
                        projects in programming, web development, and graphic design throughout the course.
                      </p>
                    </div>
                  </div>
                  
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(1)}>
                      <span>What is the course duration?</span>
                      <i className={`fas fa-chevron-${openFaq === 1 ? 'up' : 'down'}`} style={{color: '#f59e0b'}}></i>
                    </div>
                    <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                      <p className="text-muted mb-0">
                        The Diploma in Information Technology is a comprehensive 3-month intensive program designed 
                        to provide you with industry-ready skills.
                      </p>
                    </div>
                  </div>
                  
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(2)}>
                      <span>Where is the course offered?</span>
                      <i className={`fas fa-chevron-${openFaq === 2 ? 'up' : 'down'}`} style={{color: '#f59e0b'}}></i>
                    </div>
                    <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                      <p className="text-muted mb-0">
                        The course is offered at REDA Academy's Gatambe Information Technology Center in Kandy, 
                        in partnership with SIBA Campus.
                      </p>
                    </div>
                  </div>
                  
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(3)}>
                      <span>What is the medium of teaching?</span>
                      <i className={`fas fa-chevron-${openFaq === 3 ? 'up' : 'down'}`} style={{color: '#f59e0b'}}></i>
                    </div>
                    <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                      <p className="text-muted mb-0">
                        Classes are conducted in both English and Sinhala to ensure all students can learn comfortably 
                        and effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-lg-4">
                {/* Enrollment CTA */}
                <div className="cta-box mb-4">
                  <i className="fas fa-trophy fs-1 mb-3"></i>
                  <h3 className="fw-bold mb-3">Best IT Diploma in Kandy!</h3>
                  <p className="mb-4">SIBA Campus partnership ensures industry-recognized certification and quality education.</p>
                  <Link to="/form" className="btn btn-light btn-lg w-100 fw-bold">
                    <i className="fas fa-user-plus me-2"></i>Apply Now
                  </Link>
                </div>

                {/* Program Highlights */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h5 className="fw-bold mb-4">Program Highlights</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      SIBA Campus Partnership
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Learn 3 Programming Languages
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Web Development Training
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Graphic Design & Animation
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Hands-on Practical Projects
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Industry-Recognized Diploma
                    </li>
                  </ul>
                </div>

                {/* Career Paths */}
                <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
                  <h5 className="fw-bold mb-4">Career Opportunities</h5>
                  <div className="mb-3 p-3 rounded" style={{background: '#fff7ed'}}>
                    <i className="fas fa-code me-2" style={{color: '#f59e0b'}}></i>
                    <strong>Junior Developer</strong>
                  </div>
                  <div className="mb-3 p-3 rounded" style={{background: '#fff7ed'}}>
                    <i className="fas fa-laptop-code me-2" style={{color: '#f59e0b'}}></i>
                    <strong>Web Developer</strong>
                  </div>
                  <div className="mb-3 p-3 rounded" style={{background: '#fff7ed'}}>
                    <i className="fas fa-paint-brush me-2" style={{color: '#f59e0b'}}></i>
                    <strong>Graphic Designer</strong>
                  </div>
                  <div className="mb-3 p-3 rounded" style={{background: '#fff7ed'}}>
                    <i className="fas fa-film me-2" style={{color: '#f59e0b'}}></i>
                    <strong>Animation Designer</strong>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-3 p-4 shadow-sm">
                  <h5 className="fw-bold mb-4">Contact Information</h5>
                  <div className="mb-3">
                    <strong className="d-block mb-2">Domestic Students</strong>
                    <i className="fas fa-phone me-2" style={{color: '#f59e0b'}}></i>
                    <a href="tel:0812421693" className="text-decoration-none text-dark">
                      081 24 21 693
                    </a>
                  </div>
                  <div className="mb-3">
                    <strong className="d-block mb-2">International Students</strong>
                    <i className="fas fa-phone me-2" style={{color: '#f59e0b'}}></i>
                    <a href="tel:+94812421693" className="text-decoration-none text-dark">
                      +94 81 24 21 693
                    </a>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-envelope me-2" style={{color: '#f59e0b'}}></i>
                    <a href="mailto:info@redaacademy.lk" className="text-decoration-none text-dark">
                      info@redaacademy.lk
                    </a>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-map-marker-alt me-2" style={{color: '#f59e0b'}}></i>
                    <span>Gatambe, Kandy</span>
                  </div>
                  <Link to="/contact" className="btn w-100 mt-3 text-white fw-semibold" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
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

export default AdvancedIT