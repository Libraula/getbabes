import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/escort.css';

function EscortPage() {
  const location = useLocation();
  // Always call hooks first
  const [selectedImage, setSelectedImage] = useState(0);

  // Retrieve the model data from the router state
  const model = location.state?.model;

  // If model is not provided, display a fallback message.
  if (!model) {
    return <div>No model data found.</div>;
  }

  // Use the model's images if available, otherwise fallback to placeholder images.
  const images = model.images && model.images.length ? model.images : [
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
            alt={model.name} 
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
          <h1>{model.name}</h1>
          <div className="basic-info">
            <p>Age: {model.age} years</p>
            <p>Location: {model.location}</p>
            <p>Phone: {model.phone}</p>
          </div>

          <div className="description">
            <h2>About Me</h2>
            <p>{model.description}</p>
          </div>

          <div className="hobbies">
            <h2>Hobbies</h2>
            <ul>
              {model.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>

          <div className="services">
            <h2>Services Offered</h2>
            <ul>
              {model.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
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
