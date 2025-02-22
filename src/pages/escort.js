import { useState } from 'react';
import '../styles/escort.css';

function EscortPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    "https://placehold.co/400x600",
    "https://placehold.co/400x600", 
    "https://placehold.co/400x600",
    "https://placehold.co/400x600"
  ];

  return (
    <div className="escort-page">
      <div className="escort-profile">
        <div className="image-gallery">
          <img 
            src={images[selectedImage]} 
            alt="Model" 
            className="main-image"
          />
          <div className="thumbnail-strip">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="escort-details">
          <h1>Nakato</h1>
          <div className="basic-info">
            <p>Age: 23 years</p>
            <p>Location: Ntinda, Kampala</p>
            <p>Phone: +256 700 123456</p>
          </div>

          <div className="description">
            <h2>About Me</h2>
            <p>
              I am a charming and sophisticated companion offering an unforgettable experience. 
              I pride myself on being well-educated, articulate, and the perfect company for any occasion.
            </p>
          </div>

          <div className="hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li>Swimming</li>
              <li>Dancing</li>
              <li>Fine Dining</li>
              <li>Traveling</li>
            </ul>
          </div>

          <div className="services">
            <h2>Services Offered</h2>
            <ul>
              <li>Dinner Dates</li>
              <li>Social Events</li>
              <li>Travel Companion</li>
              <li>Private Meetings</li>
            </ul>
          </div>

          <div className="rates">
            <h2>Rates</h2>
            <div className="rate-cards">
              <div className="rate-card">
                <h3>2 Hours</h3>
                <p className="price">UGX 370,000</p>
              </div>
              
              <div className="rate-card">
                <h3>4 Hours</h3>
                <p className="price">UGX 670,000</p>
              </div>
              
              <div className="rate-card">
                <h3>Overnight</h3>
                <p className="price">UGX 1,490,000</p>
              </div>
            </div>
          </div>

          <button className="contact-btn">Contact Now</button>
        </div>
      </div>
    </div>
  );
}

export default EscortPage;
