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
      description: "A charming and sophisticated companion offering an unforgettable experience.",
      hobbies: ["Swimming", "Dancing", "Fine Dining", "Traveling"],
      services: ["Dinner Dates", "Social Events"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Namukasa",
      age: 25,
      location: "Bukoto, Kampala",
      phone: "+256 700 234567",
      description: "Elegant and sophisticated, offering a genuine girlfriend experience with class.",
      hobbies: ["Reading", "Yoga", "Cooking", "Art"],
      services: ["Private Dates", "Weekend Getaways"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Achieng",
      age: 26,
      location: "Jinja, Eastern Uganda",
      phone: "+256 700 345678",
      description: "Fun-loving and adventurous, I enjoy exploring new places and meeting new people.",
      hobbies: ["Kayaking", "Hiking", "Dancing"],
      services: ["Adventure Dates", "Nightlife Tours"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Nabirye",
      age: 24,
      location: "Mbale, Eastern Uganda",
      phone: "+256 700 456789",
      description: "A mix of beauty and brains, I offer intelligent conversation and vibrant company.",
      hobbies: ["Poetry", "Photography", "Cycling"],
      services: ["Cultural Tours", "Coffee Dates"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Auma",
      age: 22,
      location: "Gulu, Northern Uganda",
      phone: "+256 700 567890",
      description: "An independent and confident lady who enjoys deep conversations and good company.",
      hobbies: ["Singing", "Fashion", "Makeup Artistry"],
      services: ["Event Companionship", "Shopping Partner"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Tusiime",
      age: 27,
      location: "Mbarara, Western Uganda",
      phone: "+256 700 678901",
      description: "Classy, elegant, and well-spoken. I enjoy fine dining and meaningful conversations.",
      hobbies: ["Wine Tasting", "Horse Riding", "Traveling"],
      services: ["Luxury Dinners", "Weekend Getaways"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Akello",
      age: 24,
      location: "Lira, Northern Uganda",
      phone: "+256 700 789012",
      description: "I bring warmth and joy to any occasion with my cheerful and engaging personality.",
      hobbies: ["Dancing", "Baking", "Volunteering"],
      services: ["Social Events", "Casual Meetups"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Kyomuhendo",
      age: 26,
      location: "Kabale, Western Uganda",
      phone: "+256 700 890123",
      description: "A sophisticated and passionate woman who enjoys the arts and deep discussions.",
      hobbies: ["Painting", "Sculpting", "Hiking"],
      services: ["Gallery Tours", "Mountain Retreats"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Nanyonga",
      age: 23,
      location: "Entebbe, Central Uganda",
      phone: "+256 700 901234",
      description: "Sweet, caring, and fun. I love the beach and everything about the ocean.",
      hobbies: ["Swimming", "Boat Riding", "Sunbathing"],
      services: ["Beach Dates", "Poolside Relaxation"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Mugisha",
      age: 28,
      location: "Fort Portal, Western Uganda",
      phone: "+256 700 012345",
      description: "A strong and confident lady with a passion for nature and conservation.",
      hobbies: ["Bird Watching", "Photography", "Nature Walks"],
      services: ["Wildlife Tours", "Eco-Retreats"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Nabukeera",
      age: 21,
      location: "Mukono, Central Uganda",
      phone: "+256 700 123789",
      description: "Young, lively, and fun. I love to party and make unforgettable memories.",
      hobbies: ["Clubbing", "Music Festivals", "Dancing"],
      services: ["Party Companion", "Club Nights"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    },
    {
      name: "Atuhaire",
      age: 30,
      location: "Masaka, Central Uganda",
      phone: "+256 700 234890",
      description: "A mature and experienced woman who knows how to make a man feel special.",
      hobbies: ["Cooking", "Hosting", "Candlelit Dinners"],
      services: ["Private Chef Experiences", "Romantic Evenings"],
      images: ["https://placehold.co/200x300", "https://placehold.co/200x300"]
    }
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
