let params = new URL(document.location).searchParams;
let photographerId = params.get('id');

async function getPhotographer(){
    const data = await (await fetch('../../data/photographers.json')).json();
    const photographer = data.photographers.find(photographer => photographer.id == photographerId);
    return photographer;
}

async function getPhotographerMedias(){
    const data = await (await fetch('../../data/photographers.json')).json();
    const photographerMedias = data.media.filter((media) => media.photographerId == photographerId);

    return photographerMedias;
} 

getPhotographerMedias()

async function displayData(photographer, medias){
    const main = document.getElementById('main');
    const photographerHeader = document.querySelector('.photograph-header');
    const contactButton = document.querySelector('.contact_button');
    const photographerModel = photographerFactory(photographer);
    const photographerInfos = photographerModel.getPhotographerProfileHeader();
    photographerHeader.insertBefore(photographerInfos, contactButton);

    const photographerImage = document.createElement('img');
    photographerImage.setAttribute('src', photographerModel.picture);
    photographerImage.setAttribute('alt', `photo de ${photographerModel.name}`);

    photographerHeader.appendChild(photographerImage);

    const mediasContainer = document.createElement('div');
    mediasContainer.classList.add('media-container');

    let totalLikes = 0;

    medias.forEach((media, index) => {
        const medialModel = mediaFactory(media);
        const mediaCard = medialModel.getPhotographerMediaCards();
        mediaCard.addEventListener('click', () => {
            openSlideShow(media, index, medias)
        })
        mediasContainer.appendChild(mediaCard);
        totalLikes += media.likes
    })

    main.appendChild(mediasContainer);

    const infosBlock = document.createElement('div');
    infosBlock.classList.add('info-block');

    infosBlock.innerHTML = `
        <span>${totalLikes}<i aria-label="likes" class="fa-solid fa-heart"></i></span>
        <span>${photographer.price}€ / jour</span>
    `

    main.appendChild(infosBlock)
}

async function init(){
    const photographer = await getPhotographer();
    const medias = await getPhotographerMedias();
    displayData(photographer, medias);
}

init()