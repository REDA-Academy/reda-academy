import React, { useState } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/images/Gallary/Picture1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/images/Gallary/Picture2.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/images/Gallary/Picture3.jpg', alt: 'Gallery Image 3' },
    { id: 4, src: '/images/Gallary/Picture4.jpg', alt: 'Gallery Image 4' },
    { id: 5, src: '/images/Gallary/Picture5.jpg', alt: 'Gallery Image 5' },
    { id: 6, src: '/images/Gallary/Picture6.jpg', alt: 'Gallery Image 6' },
    { id: 7, src: '/images/Gallary/Picture7.jpg', alt: 'Gallery Image 7' },
    { id: 8, src: '/images/Gallary/Picture8.jpg', alt: 'Gallery Image 8' },
    { id: 9, src: '/images/Gallary/Picture9.jpg', alt: 'Gallery Image 9' },
    { id: 10, src: '/images/Gallary/Picture10.jpg', alt: 'Gallery Image 10' },
    { id: 11, src: '/images/Gallary/Picture11.jpg', alt: 'Gallery Image 11' },
    { id: 12, src: '/images/Gallary/Picture12.jpg', alt: 'Gallery Image 12' },
    { id: 13, src: '/images/Gallary/Picture13.jpg', alt: 'Gallery Image 13' },
  ];

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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
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
        maxWidth: '1400px',
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
            Our Gallery
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '300',
            letterSpacing: '0.5px'
          }}>
            Explore Our Moments & Memories
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          animation: 'slideIn 1s ease-out 0.2s backwards'
        }}>
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              style={{
                position: 'relative',
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                border: '2px solid rgba(59, 130, 246, 0.2)',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(26, 54, 93, 0.4)';
                e.currentTarget.style.borderColor = '#1a365d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              <div style={{
                position: 'relative',
                paddingTop: '75%',
                overflow: 'hidden'
              }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26, 54, 93, 0.7) 0%, transparent 50%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}>
                  🔍 Click to view
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-out',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '2rem',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              fontWeight: '300'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            ×
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.5)',
              border: '3px solid rgba(59, 130, 246, 0.5)',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: '85vh',
                display: 'block'
              }}
            />
          </div>

          {/* Navigation Hint */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontSize: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            Click anywhere to close
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;