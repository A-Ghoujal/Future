export function adjustSvgForMobile() {
    var svgText = document.querySelector('#welcome-svg text');
    var screenWidth = window.innerWidth;
  
    svgText.innerHTML = '';
  
    if (screenWidth <= 768) { 
        svgText.setAttribute('y', '40%');
        svgText.innerHTML = 'Welcome to <tspan x="50%" dy="1.2em">BOOST My Business</tspan><tspan x="50%" dy="1.2em">Agency</tspan>';
    } else { 
        svgText.setAttribute('y', '50%');
        svgText.textContent = 'Welcome to BOOST MY BUSNIESS Agency';
    }
  }
  
  document.querySelectorAll('.card p').forEach(item => {
    item.addEventListener('click', function() {
      // Reset all sections to their default state
      document.querySelectorAll('.card p').forEach(section => {
        section.style.backgroundSize = 'cover';
      });
  
      // Scale up the clicked section
      this.style.backgroundSize = '110%';
    });
  });
  
  
  
  