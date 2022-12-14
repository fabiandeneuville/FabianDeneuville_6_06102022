/********** Media factory **********/

function mediaFactory(data){
    const {id, image, likes, price, title, date, photographerId, video} = data;

    function getPhotographerMediaCards(){

        const mediaCard = document.createElement('div');
        mediaCard.classList.add('media-card');

        // Case when data has image
        if(image){
            mediaCard.innerHTML = `
            <img class="media-miniature" src="../../assets/images/medias/${image}" alt="Image avec pour titre ${title}"/>
            <div class="media-infos">
                <span class="title">${title}</span>
                <span class="likes">
                    <span class="likes-count">${likes}</span> <i tabindex="0" title="liker l'image" role="button" class="fa-solid fa-heart"></i>
                </span>
            </div>
            `
            return mediaCard;
        }

        // Case when data has video
        if(video){
            mediaCard.innerHTML = `
            <video class="media-miniature" autoplay>
                <source src="../../assets/images/medias/${video}" type="video/mp4">
                <p>Votre navigateur ne permet pas l'affichage de ce media.</p>
            </video>
            <div class="media-infos">
                <span class="title">${title}</span>
                <span class="likes">
                    <span class="likes-count">${likes}</span> <i tabindex="0" title="liker la vidéo" role="button" class="fa-solid fa-heart"></i>
                </span>
            </div>
            `
            return mediaCard;
        }
    }

    return { getPhotographerMediaCards };
}
