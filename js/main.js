var typed = new Typed('#element', {
    strings: ['Marketing', 'Services', 'Business', 'Solutions'],
    typeSpeed: 200,
    loop: true,
    backSpeed: 100,
    showCursor: false,
    
    });                
function applyGradientToText(element) {
        const text = element.innerText;
        element.innerHTML = '';
        
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            span.className = 'gradient-letter';
            element.appendChild(span);
        });
    }

    const element = document.getElementById('element');
    applyGradientToText(element);