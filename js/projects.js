export function initProjects() {
    const projects = [
        // Machine Learning Projects
        {
            title: 'Reconocimiento de Dígitos',
            description: 'Modelo de deep learning para reconocimiento de dígitos manuscritos usando PyTorch.',
            image: 'images/projects/digits-recognition.png',
            link: 'https://www.kaggle.com/code/maikua/reconocimiento-digitos-maikua',
            category: 'machine-learning',
            tags: ['PyTorch', 'Deep Learning', 'Computer Vision']
        },
        {
            title: 'Predicción de Obesidad',
            description: 'Sistema de predicción de obesidad utilizando técnicas de machine learning y PyTorch.',
            image: 'images/projects/obesity-prediction.jpg',
            link: 'https://www.kaggle.com/code/maikua/predicci-n-obesidad-maikua',
            category: 'machine-learning',
            tags: ['PyTorch', 'Machine Learning', 'Healthcare']
        },
        {
            title: 'Desempeño de Alumnos',
            description: 'Análisis predictivo del rendimiento académico de estudiantes.',
            image: 'images/projects/student-performance.jpg',
            link: 'https://www.kaggle.com/code/maikua/desempe-o-alumnos-maikua',
            category: 'machine-learning',
            tags: ['Data Analysis', 'Education', 'Predictive Modeling']
        },
        {
            title: 'Felicidad Mundial',
            description: 'Análisis de tendencias de felicidad global a través de los años.',
            image: 'images/projects/world-happiness.jpg',
            link: 'https://www.kaggle.com/code/maikua/felicidad-a-nivel-mundial-maikua',
            category: 'machine-learning',
            tags: ['Data Visualization', 'Time Series', 'Global Analysis']
        },

        // Web Development Projects
        {
            title: 'Maikua',
            description: 'Sitio web corporativo para para servicios de IA, IoT, Desarrollo Web & Móvil',
            image: 'images/projects/maikua.png',
            link: 'https://www.maikua.com.mx/',
            category: 'web',
            tags: ['HTML', 'JS', 'Full Stack']
        },
        {
            title: 'Noubeau',
            description: 'Plataforma web para servicios de IA y desarrollo web.',
            image: 'images/projects/noubeau.jpg',
            link: 'https://www.noubeau.com/',
            category: 'web',
            tags: ['HTML', 'CSS', 'Full Stack']
        },
        
        {
            title: 'ASECALAB',
            description: 'Sitio web corporativo para laboratorio de pruebas mecanicas.',
            image: 'images/projects/asecalab.jpg',
            link: 'https://www.asecalab.com.mx/',
            category: 'web',
            tags: ['HTML', 'JS', 'Full Stack']
        },
        {
            title: 'SigMundFiles',
            description: 'Sistema de gestión de archivos y documentos psicologicos.',
            image: 'images/projects/sigmundfiles.jpg',
            link: 'https://github.com/johernandezvaz/SigMundFiles',
            category: 'web',
            tags: ['Django', 'Python', 'Web App']
        },
        {
            title: 'CodeCuu',
            description: 'Aplicación web de compra de boletos de evento dental.',
            image: 'images/projects/codec.jpg',
            link: 'https://www.codecuu.com/',
            category: 'web',
            tags: ['HTML', 'CSS', 'Event']
        },

        // Mobile Development Projects
        {
            title: 'CODEC Mobile',
            description: 'Aplicación móvil para gestión de códigos qr y lista de invitados.',
            image: 'images/projects/codec.jpg',
            link: 'https://github.com/johernandezvaz/CODEC_MOBILE',
            category: 'mobile',
            tags: ['Flutter', 'Mobile App', 'Cross-platform']
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createProjectCard(project) {
        return `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-overlay">
                        <span class="view-project">Ver Proyecto</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span class="project-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </a>
        `;
    }

    function renderProjects(category = 'all') {
        const filteredProjects = category === 'all' 
            ? projects 
            : projects.filter(project => project.category === category);

        projectsGrid.innerHTML = filteredProjects.map(createProjectCard).join('');

        // Añadir animación de entrada a las tarjetas
        const cards = projectsGrid.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        });
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
