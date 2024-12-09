import { initRolesAnimation } from './roles.js';
import { initSkillsCarousel } from './skills.js';
import { initProjects } from './projects.js';
import { initContactForm } from './contact.js';
import { initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    initRolesAnimation();
    initSkillsCarousel();
    initProjects();
    initContactForm();
    initNavigation();
});