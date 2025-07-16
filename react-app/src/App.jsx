import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with email: ${email}`)
    setEmail('')
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="nav-brand">
            <h2>✨ CursorPlay</h2>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            Build Amazing Things with 
            <span className="gradient-text"> Modern React</span>
          </h1>
          <p className="hero-subtitle">
            Experience the power of cutting-edge web development with React 19, 
            Vite, and modern tooling. Create fast, beautiful, and scalable applications.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>
            <div className="card-content">
              <div className="code-line">
                <span className="keyword">const</span> 
                <span className="variable"> App</span> 
                <span className="operator"> = </span>
                <span className="bracket">() => {</span>
              </div>
              <div className="code-line">
                <span className="indent">  </span>
                <span className="keyword">return</span> 
                <span className="bracket"> (</span>
              </div>
              <div className="code-line">
                <span className="indent">    </span>
                <span className="tag">&lt;div</span>
                <span className="attribute"> className</span>
                <span className="operator">=</span>
                <span className="string">"amazing"</span>
                <span className="tag">&gt;</span>
              </div>
              <div className="code-line">
                <span className="indent">      </span>
                <span className="tag">&lt;h1&gt;</span>
                <span className="text">Hello World!</span>
                <span className="tag">&lt;/h1&gt;</span>
              </div>
              <div className="code-line">
                <span className="indent">    </span>
                <span className="tag">&lt;/div&gt;</span>
              </div>
              <div className="code-line">
                <span className="indent">  </span>
                <span className="bracket">)</span>
              </div>
              <div className="code-line">
                <span className="bracket">}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Built with Vite for ultra-fast development and blazing-quick builds that keep you productive.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Modern Tooling</h3>
              <p>Latest React 19, ESLint, and modern JavaScript features out of the box for the best developer experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach ensures your applications look great on every device and screen size.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful UI</h3>
              <p>Stunning interfaces with smooth animations and modern design principles that users love.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Production Ready</h3>
              <p>Optimized builds, code splitting, and performance features ready for deployment at scale.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Developer Friendly</h3>
              <p>Hot module replacement, excellent debugging tools, and clear documentation to boost productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of developers building amazing applications with our platform.</p>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CursorPlay</h3>
              <p>Building the future of web development, one component at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#docs">Documentation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 CursorPlay. All rights reserved. Built with ❤️ and React.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
