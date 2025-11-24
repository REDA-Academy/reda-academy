import React from 'react';

function Services() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1a365d 50%, #2d3748 100%)',
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
        top: '-100px',
        right: '-100px',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
        bottom: '-100px',
        left: '-100px',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          animation: 'slideIn 0.8s ease-out'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            margin: '0 0 1rem 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            filter: 'drop-shadow(0 0 30px rgba(147, 197, 253, 0.5))'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '300',
            letterSpacing: '0.5px'
          }}>
            Premium Facilities for Your Events & Training
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '2.5rem',
          animation: 'slideIn 1s ease-out 0.2s backwards'
        }}>
          
          {/* Computer Lab Card */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            borderRadius: '24px',
            padding: '3rem',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-12px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(26, 54, 93, 0.4)';
            e.currentTarget.style.borderColor = '#1a365d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
          }}>
            
            {/* Decorative background */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(50%, -50%)'
            }}></div>

            {/* Icon */}
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'linear-gradient(135deg, #1a365d 0%, #1e40af 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              💻
            </div>

            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#1f2937',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Computer Lab Rental
            </h3>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <span style={{
                fontSize: '3rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #1a365d 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                LKR 13,000
              </span>
              <span style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                / day
              </span>
            </div>

            <div style={{
              background: 'rgba(59, 130, 246, 0.08)',
              padding: '1.25rem',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🖥️</span>
                <span style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
                  40 High-Performance PCs
                </span>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#4b5563',
                margin: 0
              }}>
                Fully equipped computer lab perfect for training sessions, workshops, examinations, and educational programs.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1a365d 0%, #1e40af 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              color: 'white',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📞 Book Now - Contact Us:
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a href="tel:0712064046" style={{
                  color: '#fbbf24',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  ☎️ 071-2064046
                </a>
                <a href="tel:0812088465" style={{
                  color: '#fbbf24',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  ☎️ 081-2088465
                </a>
              </div>
            </div>
          </div>

          {/* Hall Rental Card */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            borderRadius: '24px',
            padding: '3rem',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-12px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(26, 54, 93, 0.4)';
            e.currentTarget.style.borderColor = '#1a365d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
          }}>
            
            {/* Decorative background */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(50%, -50%)'
            }}></div>

            {/* Icon */}
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'linear-gradient(135deg, #1a365d 0%, #1e40af 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              boxShadow: '0 10px 30px rgba(26, 54, 93, 0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              🏛️
            </div>

            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#1f2937',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Conference Hall Rental
            </h3>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <span style={{
                fontSize: '3rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #1a365d 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                LKR 5,000
              </span>
              <span style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                / day
              </span>
            </div>

            <div style={{
              background: 'rgba(245, 158, 11, 0.08)',
              padding: '1.25rem',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🪑</span>
                <span style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
                  30 Comfortable Seats
                </span>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#4b5563',
                margin: 0
              }}>
                Spacious conference hall ideal for meetings, seminars, presentations, and small events. Well-equipped and professionally maintained.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1a365d 0%, #1e40af 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              color: 'white',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📞 Book Now - Contact Us:
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a href="tel:0712064046" style={{
                  color: '#fbbf24',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  ☎️ 071-2064046
                </a>
                <a href="tel:0812088465" style={{
                  color: '#fbbf24',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  ☎️ 081-2088465
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;