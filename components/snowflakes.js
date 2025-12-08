
class Snowflakes extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    
    // Create 100 snowflakes (doubled the amount)
    const snowflakesHTML = Array(100).fill('').map((_, i) => 
      `<div class="snowflake" id="flake-${i}" style="
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
        animation-duration: ${5 + Math.random() * 10}s;
        opacity: ${0.2 + Math.random() * 0.8};
        transform: scale(${0.5 + Math.random()});
        will-change: transform;
      ">❄</div>`
    ).join('');

    this.shadowRoot.innerHTML = `
      <style>
        .snowflakes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .snowflake {
          position: absolute;
          color: white;
          font-size: 1rem;
          animation: fall linear infinite;
          transition: transform 0.3s ease-out;
          pointer-events: none;
          user-select: none;
        }
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        .snowflake:hover {
          transform: translateX(${Math.random() > 0.5 ? '-' : ''}20px) !important;
        }
      </style>
      <div class="snowflakes">
        ${snowflakesHTML}
      </div>
    `;

    // Add mouse move interaction
    this.shadowRoot.querySelector('.snowflakes').addEventListener('mousemove', (e) => {
      const snowflakes = this.shadowRoot.querySelectorAll('.snowflake');
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      snowflakes.forEach(flake => {
        const rect = flake.getBoundingClientRect();
        const flakeX = rect.left + rect.width/2;
        const flakeY = rect.top + rect.height/2;
        
        // Calculate distance from mouse to snowflake
        const distance = Math.sqrt(
          Math.pow(mouseX - flakeX, 2) + 
          Math.pow(mouseY - flakeY, 2)
        );
        
        // If mouse is within 100px of snowflake
        if (distance < 100) {
          const force = (100 - distance) / 10;
          const angle = Math.atan2(flakeY - mouseY, flakeX - mouseX);
          const pushX = Math.cos(angle) * force;
          const pushY = Math.sin(angle) * force;
          
          flake.style.transform = `translate(${pushX}px, ${pushY}px)`;
          
          // Reset after a short delay
          setTimeout(() => {
            flake.style.transform = '';
          }, 300);
        }
      });
    });
  }
}
customElements.define('custom-snowflakes', Snowflakes);