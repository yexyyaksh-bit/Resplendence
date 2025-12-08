class CustomNav extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(16px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        .nav-container.scrolled {
          background-color: rgba(217, 0, 50, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }
        
        .nav-container.scrolled a,
        .nav-container.scrolled .nav-link,
        .nav-container.scrolled button {
          color: white !important;
        }
        
        .nav-container.scrolled .nav-link::after {
          background-color: white;
        }
        .nav-link {
          position: relative;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          background: rgba(217, 0, 50, 0.1);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 12px;
          width: 0;
          height: 2px;
          background-color: #D90032;
          transition: width 0.3s ease;
        }
.nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          
          .mobile-menu {
            display: flex;
          }
        }
      </style>
      <div class="nav-container">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a href="#" class="text-2xl font-heading font-bold text-crimson-700">
            RESPLENDENCE | Winter Carnival
          </a>
<!-- Desktop Menu -->
          <nav class="desktop-menu hidden md:block">
            <ul class="flex space-x-8">
              <li><a href="#" class="nav-link text-gray-800 hover:text-crimson-700 font-medium">Home</a></li>
              <li><a href="#highlights" class="nav-link text-gray-800 hover:text-crimson-700 font-medium">Attractions</a></li>
              <li><a href="#tickets" class="nav-link text-gray-800 hover:text-crimson-700 font-medium">Tickets</a></li>
              <li><a href="#attractions" class="nav-link text-gray-800 hover:text-crimson-700 font-medium">Competitions</a></li>
              <li><a href="#contact" class="nav-link text-gray-800 hover:text-crimson-700 font-medium">Contact</a></li>
            </ul>
</nav>
          
          <!-- Mobile Menu Button -->
          <button id="mobile-menu-button" class="mobile-menu md:hidden text-gray-800">
            <i data-feather="menu"></i>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200">
          <ul class="px-6 py-4 space-y-4">
            <li><a href="#" class="block text-gray-800 hover:text-crimson-700 font-medium">Home</a></li>
            <li><a href="#highlights" class="block text-gray-800 hover:text-crimson-700 font-medium">Highlights</a></li>
            <li><a href="#tickets" class="block text-gray-800 hover:text-crimson-700 font-medium">Tickets</a></li>
            <li><a href="#attractions" class="block text-gray-800 hover:text-crimson-700 font-medium">Attractions</a></li>
            <li><a href="#contact" class="block text-gray-800 hover:text-crimson-700 font-medium">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <script>
        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
          const nav = this.shadowRoot.querySelector('.nav-container');
          if (window.scrollY > 10) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
        });
        
        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
          const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
          const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
          
          if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
              mobileMenu.classList.toggle('hidden');
            });
          }
        });
      </script>
    `;
  }

  connectedCallback() {
    // Replace feather icons in shadow DOM
    setTimeout(() => {
      if (window.feather) {
        window.feather.replace();
      }
    }, 100);
  }
}

customElements.define('custom-nav', CustomNav);
