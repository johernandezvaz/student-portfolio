export function initSkillsCarousel() {
    const skills = [
        { name: 'HTML', image: 'images/html.png' },
        { name: 'CSS', image: 'images/css.png' },
        { name: 'JavaScript', image: 'images/javascript.png' },
        { name: 'Node.js', image: 'images/nodejs.png' },
        { name: 'React', image: 'images/react.png' },
        { name: 'Tailwind CSS', image: 'images/tailwindcss.png' },
        { name: 'Python', image: 'images/python.png' },
        { name: 'Django', image: 'images/django.png' },
        { name: 'Flask', image: 'images/flask.png' },
        { name: 'TensorFlow', image: 'images/tensorflow.png' },
        { name: 'PyTorch', image: 'images/pytorch.png' },
        { name: 'Flutter', image: 'images/flutter.png' },
        { name: 'Java', image: 'images/java.png' },
        { name: 'C#', image: 'images/csharp.png' }
    ];
    
    const track = document.querySelector('.skills-track');
    
    // Duplicar los skills para crear el efecto infinito
    const skillsHtml = [...skills, ...skills].map(skill => `
        <div class="skill-logo">
            <img src="${skill.image}" alt="${skill.name}" title="${skill.name}">
        </div>
    `).join('');
    
    track.innerHTML = skillsHtml;

    // Clonar el primer conjunto de elementos y añadirlo al final
    const firstSetClone = track.innerHTML;
    track.innerHTML += firstSetClone;
}