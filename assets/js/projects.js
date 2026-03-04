document.addEventListener('DOMContentLoaded', function() {
    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.isotope-container');
            const imageMap = {
                'filter-cybersecurity': 'assets/images/cs.jpeg',
                'filter-product': 'assets/images/ds.webp',
                'filter-app': 'assets/images/swd.avif'
            };

            Object.values(data.projects).forEach(project => {
                const projectCard = `
                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${project.class}">
                        <div class="card">
                            <img src="${imageMap[project.class]}" class="card-img-top" alt="${project.name}">
                            <div class="card-body">
                                <h5 class="card-title">${project.name}</h5>
                                <p class="card-text">${project.description}</p>
                                <a href="${project.website}" class="btn btn-dark" target="_blank" data-mdb-ripple-init>
                                    <i class="bi bi-box-arrow-up-right"></i>
                                    Project Page
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', projectCard);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});
