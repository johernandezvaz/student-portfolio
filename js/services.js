export function initServices() {
    const services = [
        {
            icon: 'images/design-icon.svg',
            title: 'UI/UX Design',
            description: 'Create beautiful and usable interfaces for web and mobile applications.'
        },
        {
            icon: 'images/development-icon.svg',
            title: 'Development',
            description: 'Build robust and scalable applications using modern technologies.'
        },
        {
            icon: 'images/marketing-icon.svg',
            title: 'Digital Marketing',
            description: 'Increase your online presence and reach your target audience.'
        }
    ];

    const servicesGrid = document.getElementById('servicesGrid');
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card">
            <img src="${service.icon}" alt="${service.title}" class="service-icon">
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}