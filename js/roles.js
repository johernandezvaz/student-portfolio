export function initRolesAnimation() {
    const roles = [
        'Desarrollador Web',
        'Desarrollador Mobile',
        'Experto en Machine Learning',
        'Desarrollador IoT',
        'Apasionado por la tecnología'
    ];
    
    const rolesElement = document.getElementById('roles');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            rolesElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            rolesElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
    }
    
    type();
}