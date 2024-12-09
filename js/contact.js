export function initContactForm() {
    emailjs.init("OymTMs4wyLL2auEw7");

    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Crear el elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    form.parentElement.appendChild(notification);

    function showNotification(message, type) {
        const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        `;
        notification.classList.add('show');
        
        // Ocultar la notificación después de 5 segundos
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        submitBtn.classList.add('loading');
        submitBtn.querySelector('.btn-text').textContent = 'Enviando...';
        submitBtn.disabled = true;

        const formData = {
            from_name: form.querySelector('#name').value,
            from_email: form.querySelector('#email').value,
            project_type: form.querySelector('#projectType').value,
            message: form.querySelector('#message').value,
            to_name: 'José Hernández',
        };

        const projectTypes = {
            'web': 'Desarrollo Web',
            'mobile': 'Desarrollo Móvil',
            'iot': 'Internet de las Cosas (IoT)',
            'ml': 'Machine Learning'
        };
        formData.project_type = projectTypes[formData.project_type] || formData.project_type;

        try {
            const result = await emailjs.send(
                'service_a5uqni8',
                'template_iv0r0jb',
                formData
            );
            
            if (result.status === 200) {
                showNotification('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
                form.reset();
            } else {
                throw new Error('Error al enviar el mensaje');
            }
            
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            showNotification('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-text').textContent = 'Enviar Mensaje';
            submitBtn.disabled = false;
        }
    });
}