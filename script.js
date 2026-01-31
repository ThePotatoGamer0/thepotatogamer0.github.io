async function loadProjects() {
    // List your project folder names here
    const projects = ['time']; 
    const projectList = document.querySelector('.project-list');
    projectList.innerHTML = ''; // Clear placeholder

    for (const folder of projects) {
        try {
            // Fetch the README from the project folder
            const response = await fetch(`./${folder}/README.md`);
            if (!response.ok) continue;
            
            const text = await response.text();
            
            // Basic parsing: First # line is title, next non-empty line is description
            const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            const title = lines[0].replace('#', '').trim();
            const description = lines[1] || "";

            // Create the card
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
            console.error(`Failed to load project: ${folder}`, e);
        }
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);