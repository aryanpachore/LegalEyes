class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* All your styles... (omitted for brevity) */
        nav {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-bottom: 1px solid #fbbf24;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: relative; /* Added for mobile menu positioning */
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.25rem;
          color: #92400e;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .nav-links {
          display: none;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-link {
          text-decoration: none;
          color: #78350f;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .nav-link:hover, .nav-link.active {
          background-color: rgba(245, 158, 11, 0.1);
          color: #92400e;
        }
        
        .nav-actions {
          display: none;
          align-items: center;
          gap: 1rem;
        }
        
        .btn-signin {
          padding: 0.5rem 1rem;
          background: white;
          color: #92400e;
          border: 2px solid #fbbf24;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .btn-signin:hover {
          background: #fef3c7;
          transform: translateY(-1px);
        }
        
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: white;
          border: 1px solid #fbbf24;
          border-radius: 8px;
          cursor: pointer;
        }
        
        .mobile-menu {
          display: none;
          position: absolute;
          top: 65px; /* Changed from 100% to fixed pixel */
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #fbbf24;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 100; /* Ensure it's on top */
        }
        
        .mobile-menu.active {
          display: block;
        }
        
        .mobile-nav-links {
          list-style: none;
          padding: 1rem;
          margin: 0;
        }
        
        .mobile-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          text-decoration: none;
          color: #78350f;
          font-weight: 500;
          border-radius: 8px;
          margin-bottom: 0.5rem;
        }
        
        .mobile-nav-link:hover {
          background: #fef3c7;
        }
        
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
          
          .nav-actions {
            display: flex;
          }
          
          .mobile-menu-btn {
            display: none;
          }
        }
      </style>
      
      <nav>
        <div class="nav-container">
          <div class="nav-wrapper">
            <a href="index.html" class="logo">
              <div class="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              BuddyLawyer
            </a>
            
            <ul class="nav-links">
              <li><a href="index.html" class="nav-link">Home</a></li>
              <li><a href="dashboard.html" class="nav-link">Dashboard</a></li>
              <li><a href="documents.html" class="nav-link">Documents</a></li>
              <li><a href="chat.html" class="nav-link">AI Chat</a></li>
            </ul>
            
            <div class="nav-actions">
              <a href="login.html" class="btn-signin" style="text-decoration: none;">Sign In</a>
            </div>
            
            <button class="mobile-menu-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#78350f" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div class="mobile-menu" id="mobileMenu">
            <ul class="mobile-nav-links">
              <li><a href="index.html" class="mobile-nav-link">Home</a></li>
              <li><a href="dashboard.html" class="mobile-nav-link">Dashboard</a></li>
              <li><a href="documents.html" class="mobile-nav-link">Documents</a></li>
              <li><a href="chat.html" class="mobile-nav-link">AI Chat</a></li>
              <li><a href="login.html" class="mobile-nav-link">Sign In</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    
    // --- THIS IS THE FIX ---
    // Add event listener for the mobile menu button
    const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
    // --- END OF FIX ---

    // Set active link based on current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = this.shadowRoot.querySelector(`.nav-link[href="${currentPath}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);

// The global toggleMobileMenu() function is no longer needed.