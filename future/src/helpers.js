export function adjustSvgForMobile() {
    var svgText = document.querySelector('#welcome-svg text');
    var screenWidth = window.innerWidth;
  
    svgText.innerHTML = '';
  
    if (screenWidth <= 768) { 
        svgText.setAttribute('y', '40%');
        svgText.innerHTML = 'Welcome to <tspan x="50%" dy="1.2em">Agency</tspan><tspan x="50%" dy="1.2em">BOOST My Business</tspan>';
    } else { 
        svgText.setAttribute('y', '50%');
        svgText.textContent = 'Welcome to Agency BOOST My Business';
    }
  }
  
  