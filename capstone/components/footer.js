class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #92400e 0%, #78350f 100%);
          color: #fef3c7;
          margin-top: auto;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem 1.5rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: #fef3c7;
          text-decoration: none;
        }
        
        .footer-logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .footer-description {
          color: #fde68a;
          line-height: 1.6;
        }
        
        .footer-social {
          display: flex;
          gap: 0.75rem;
        }
        
        .social-link {
          width: 36px;
          height: 36px;
          background: rgba(254, 243, 199, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fef3c7;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .social-link:hover {
          background: rgba(251, 191, 36, 0.2);
          transform: translateY(-2px);
        }
        
        .footer-column h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #fef3c7;
          margin-bottom: 1rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: #fde68a;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-links a:hover {
          color: #fef3c7;
        }
        
        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(254, 243, 199, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-copyright {
          color: #fde68a;
          font-size: 0.875rem;
        }
        
        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-legal a {
          color: #fde68a;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }
        
        .footer-legal a:hover {
          color: #fef3c7;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="footer-logo">
                <div class="footer-logo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </div>
                BuddyLawyer
              </a>
              <p class="footer-description">
                Your AI-powered legal document assistant. Simplify legal workflows with intelligent document summarization, editing, and management.
              </p>
              <div class="footer-social">
                <a href="#" class="social-link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="footer-column">
              <h4>Product</h4>
              <ul class="footer-links">
                <li><a href="dashboard.html">Dashboard</a></li>
                <li><a href="documents.html">Document Management</a></li>
                <li><a href="chat.html">AI Assistant</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h4>Features</h4>
              <ul class="footer-links">
                <li><a href="#">Document Summarization</a></li>
                <li><a href="#">Magic Write</a></li>
                <li><a href="#">Smart Highlight</a></li>
                <li><a href="#">Legal Templates</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h4>Company</h4>
              <ul class="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-copyright">
              © 2024 BuddyLawyer. All rights reserved.
            </div>
            <div class="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);