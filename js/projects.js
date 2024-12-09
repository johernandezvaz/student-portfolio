export function initProjects() {
    const projects = [
        {
            title: 'Clasificador de Imágenes',
            description: 'Modelo de deep learning para clasificación de imágenes usando TensorFlow y CNN',
            image: 'images/projects/ml-classifier.jpg',
            category: 'machine-learning',
            tags: ['Python', 'TensorFlow', 'CNN']
        },
        {
            title: 'Análisis de Sentimientos',
            description: 'Sistema de análisis de sentimientos en tiempo real para redes sociales',
            image: 'images/projects/ml-sentiment.jpg',
            category: 'machine-learning',
            tags: ['Python', 'NLTK', 'scikit-learn']
        },
        {
            title: 'E-commerce Dashboard',
            description: 'Panel de administración para tienda online con análisis en tiempo real',
            image: 'images/projects/web-dashboard.jpg',
            category: 'web',
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            title: 'Blog Personal',
            description: 'Blog minimalista con sistema de gestión de contenidos',
            image: 'images/projects/web-blog.jpg',
            category: 'web',
            tags: ['Vue.js', 'Firebase', 'Tailwind']
        },
        {
            title: 'App de Fitness',
            description: 'Aplicación móvil para seguimiento de rutinas de ejercicio',
            image: 'images/projects/mobile-fitness.jpg',
            category: 'mobile',
            tags: ['Flutter', 'Firebase', 'BLoC']
        },
        {
            title: 'Chat en Tiempo Real',
            description: 'Aplicación de mensajería instantánea multiplataforma',
            image: 'images/projects/mobile-chat.jpg',
            category: 'mobile',
            tags: ['React Native', 'Socket.io', 'Redux']
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderProjects(category = 'all') {
        const filteredProjects = category === 'all' 
            ? projects 
            : projects.filter(project => project.category === category);

        projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span class="project-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProjects(button.dataset.filter);
        });
    });

    // Renderizar todos los proyectos inicialmente
    renderProjects();
}