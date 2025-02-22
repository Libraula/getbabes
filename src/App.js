import { useState } from 'react';
import { BrowserRouter as Router, useNavigate, Routes, Route } from 'react-router-dom';
import './App.css';
import EscortPage from './pages/escort';

// Separate component for the main app content
function AppContent() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleModelClick = (model) => {
    navigate(`/escort/${model.name.toLowerCase()}`, { state: { model } });
  };

  const models = [
    {
      name: "Nakato",
      age: 23,
      location: "Ntinda, Kampala", 
      phone: "+256 700 123456",
      description: "I am a charming and sophisticated companion offering an unforgettable experience. I pride myself on being well-educated, articulate, and the perfect company for any occasion.",
      hobbies: ["Swimming", "Dancing", "Fine Dining", "Traveling"],
      services: ["Dinner Dates", "Social Events"],
      images: [
        "https://placehold.co/200x300",
        "https://placehold.co/200x300",
        "https://placehold.co/200x300", 
        "https://placehold.co/200x300"
      ]
    },
    {
      name: "Namukasa",
      age: 25,
      location: "Bukoto, Kampala",
      phone: "+256 700 234567", 
      description: "Elegant and sophisticated companion for the discerning gentleman. I offer a genuine girlfriend experience with class and style.",
      hobbies: ["Reading", "Yoga", "Cooking", "Art"],
      services: ["Private Dates", "Weekend Getaways"],
      images: [
        "https://placehold.co/200x300",
        "https://placehold.co/200x300",
        "https://placehold.co/200x300",
        "https://placehold.co/200x300"
      ]
    },
    // ... other models with same structure
  ];

  return (
    <div className="App">
      <nav className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}>
        <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
          <span className="hamburger"></span>
        </button>
        
        <div className={`nav-content side-nav ${isNavOpen ? 'show' : ''}`}>
          <div className="nav-left">
            <a href="/" className="nav-logo">GetHotBabes</a>
            <a href="/models">Models</a>
            <a href="/locations">Locations</a>
            <a href="/events">Events</a>
            <a href="/about">About</a>
          </div>
          <div className="nav-right">
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Sign Up</a>
          </div>
        </div>
      </nav>

      <header className="App-header">
        <h1>Get Hot Babes</h1>
        <p className="tagline">Find Your Perfect Match Today</p>
      </header>

      <main>
        <section className="featured">
          <h2>Featured Models</h2>
          <div className="companion-grid">
            {models.map((model, index) => (
              <div 
                key={index}
                className="companion-card"
                onClick={() => handleModelClick(model)}
                style={{cursor: 'pointer'}}
              >
                <img src={model.images[0]} alt={model.name} />
                <h3>{model.name}</h3>
                <p>{model.age} years old</p>
                <p>{model.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="subscription-plans">
          <h2>Choose Your Membership</h2>
          
          <div className="plan-cards">
            <div className="plan-card">
              <h3>Basic</h3>
              <p className="price">UGX 370,000</p>
              <ul>
                <li>24 hour access</li>
                <li>View all profiles</li>
                <li>Basic messaging</li>
              </ul>
              <button className="subscribe-btn">Join Now</button>
            </div>

            <div className="plan-card">
              <h3>Premium</h3>
              <p className="price">UGX 1,490,000</p>
              <ul>
                <li>7 days access</li>
                <li>Priority messaging</li>
                <li>Video chat</li>
              </ul>
              <button className="subscribe-btn">Join Now</button>
            </div>

            <div className="plan-card">
              <h3>Elite</h3>
              <p className="price">UGX 3,730,000</p>
              <ul>
                <li>30 days access</li>
                <li>VIP features</li>
                <li>Private events</li>
              </ul>
              <button className="subscribe-btn">Join Now</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Must be 18+ to join. Terms and conditions apply.</p>
      </footer>
    </div>
  );
}

// Main App component wrapped with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/escort/:name" element={<EscortPage />} />
      </Routes>
    </Router>
  );
}

export default App;
