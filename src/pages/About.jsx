import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Empowering Communities Through Education & Technology</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-content">
            <p className="intro-text">
              The <strong>Regional Economic Development Institute (REDI)</strong> implements a range of educational 
              programs through the <strong>Gatambe Information Technology Center</strong> to enhance the knowledge 
              and skills of students and adults in the Central Province.
            </p>
            <p className="intro-text">
              Our mission is to empower the community through quality training in Information and Communication 
              Technology (ICT), language development, and practical vocational skills.
            </p>
          </div>
        </section>

        <section className="courses-section">
          <h2 className="section-title">
            <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Courses Offered
          </h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3>Certificate Course in ICT</h3>
              <p className="course-duration">Duration: 3 months</p>
              <p className="course-description">
                Comprehensive foundation in Information and Communication Technology
              </p>
            </div>

            <div className="course-card featured">
              <div className="featured-badge">In Collaboration with SIBA Campus</div>
              <div className="course-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Advanced Certificate Course in ICT</h3>
              <p className="course-duration">Duration: 3 months</p>
              <p className="course-description">
                Advanced ICT training in partnership with SIBA Campus
              </p>
            </div>

            <div className="course-card">
              <div className="course-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Computer Application Assistant Course</h3>
              <p className="course-duration">Duration: 3 months</p>
              <p className="course-description">
                Practical computer skills for professional development
              </p>
            </div>

            <div className="course-card">
              <div className="course-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3>German Language Course</h3>
              <p className="course-duration">Duration: 3 months</p>
              <p className="course-description">
                Comprehensive German language training for students and professionals
              </p>
            </div>
          </div>
        </section>

        <section className="facilities-section">
          <h2 className="section-title">
            <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Facilities for External Institutions
          </h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Computer Center Rental</h3>
              <div className="facility-price">Rs. 13,000 <span>per day</span></div>
              <p>State-of-the-art computer lab facilities available for training sessions and workshops</p>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3>Lecture Hall Rental</h3>
              <div className="facility-price">Rs. 5,000 <span>per day</span></div>
              <p>Spacious lecture hall equipped with modern presentation facilities</p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-box">
            <h2>Our Mission</h2>
            <p>
              These programs and facilities are designed to promote digital literacy, professional growth, 
              and regional development through education and technology. We are committed to building a 
              skilled workforce that can contribute to the economic development of the Central Province 
              and beyond.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;