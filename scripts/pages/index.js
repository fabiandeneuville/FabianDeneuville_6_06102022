/*********** Index page **********/

// Function to get photographers datas
async function getPhotographers() {
    const data = await (await fetch('https://raw.githubusercontent.com/fabiandeneuville/FabianDeneuville_6_06102022/main/data/photographers.json')).json();
    const photographers = data.photographers;
    return photographers;
}

// Function to display photographers on index page
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const PhotographerProfileCard = photographerModel.getPhotographerProfileCard();
        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${photographer.id}`);
        link.setAttribute('title', `Lien vers le profile de ${photographer.name}`);
        link.style.textDecoration = 'none';
        link.appendChild(PhotographerProfileCard);
        photographersSection.appendChild(link);
    });
}

// Function to render photographers cards on index page when page is loaded
async function init() {
    const photographers = await getPhotographers();
    displayData(photographers);
}
    
init();
    