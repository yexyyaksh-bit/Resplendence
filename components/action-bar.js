class ActionBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .action-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(217, 0, 50, 0.9);
          color: white;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .site-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        .nav-links {
          display: flex;
          gap: 1rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          padding: 0.3rem 0.5rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      </style>
      
      <div class="action-bar">
        <div class="site-name">RESPLENDENCE</div>
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="#highlights" class="nav-link">Attractions</a>
          <a href="#tickets" class="nav-link">Tickets</a>
          <a href="#attractions" class="nav-link">Competitions</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-action-bar', ActionBar);