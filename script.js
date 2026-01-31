const words = ["Projects", "Ideas", "Works"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 150;
const backSpeed = 100;
const waitTime = 2000;

function typeEffect() {
    const currentWord = words[wordIndex];
    const typewriter = document.getElementById("typewriter");

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typewriter.textContent = currentWord.substring(0, charIndex);

    let pause = isDeleting ? backSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        pause = waitTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        pause = 500;
    }

    setTimeout(typeEffect, pause);
}

async function loadProjects() {
    const projects = ['time']; 
    const projectList = document.querySelector('.project-list');
    
    for (const folder of projects) {
        try {
            const response = await fetch(`./${folder}/README.md`);
            if (!response.ok) continue;
            
            const text = await response.text();
            const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            
            const title = lines[0].replace('#', '').trim();
            const description = lines[1] || "";

            const card = document.createElement('a');
            card.href = `./${folder}/`;
            card.className = 'project-card';
            card.innerHTML = `
                <div class="card-image">
                    <img src="./${folder}/preview.png" alt="${title}" onerror="this.style.display='none'">
                    <span class="img-placeholder">IMAGE</span>
                </div>
                <div class="card-content">
                    <h2>${title}</h2>
                    <p>${description}</p>
                </div>
            `;
            projectList.appendChild(card);
        } catch (e) {
            console.error(`Error loading ${folder}:`, e);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setTimeout(typeEffect, 500);
});