    async function getPhotographers() {
        const data = await (await fetch('../../data/photographers.json')).json();
        const photographers = data.photographers;
        return photographers;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            const link = document.createElement('a');
            link.setAttribute('href', `photographer.html?id=${photographer.id}`);
            link.setAttribute('title', `Lien vers le profile de ${photographer.name}`)
            link.style.textDecoration = 'none'
            link.appendChild(userCardDOM)
            photographersSection.appendChild(link);
        });
    };

    async function init() {
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    