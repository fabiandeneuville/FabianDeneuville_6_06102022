function mediaFactory(data){
    const {id, image, likes, price, title, date, photographerId, video} = data;

    function getPhotographerMediaCards(){

        const mediaCard = document.createElement('div');
        mediaCard.classList.add('media-card')

        if(image){
            mediaCard.innerHTML = `
            <img class="media-miniature" src="../../assets/images/medias/${image}" alt="Image avec pour titre ${title}"/>
            <div class="media-infos">
                <span class="title">${title}</span>
                <span class="likes">
                    <span>${likes}</span> <i aria-label="likes" class="fa-solid fa-heart"></i>
                </span>
            </div>
            `
            return mediaCard
        }
        if(video){
            mediaCard.innerHTML = `
            <video class="media-miniature" autoplay>
                <source src="../../assets/images/medias/${video}" type="video/mp4">
                <p>Votre navigateur ne permet pas l'affichage de ce media.</p>
            </video>
            <div class="media-infos">
                <span class="title">${title}</span>
                <span class="likes">
                    <span>${likes}</span> <i aria-label="likes" class="fa-solid fa-heart"></i>
                </span>
            </div>
            `
            return mediaCard
        }
    }

    return { getPhotographerMediaCards };
}
