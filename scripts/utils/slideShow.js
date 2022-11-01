const slideshowModal = document.getElementById('slideshow_modal');
const slideshowCloseButton = document.querySelector('.close-slideshow');
const previousButton = document.querySelector('.previous-slide');
const nextButton = document.querySelector('.next-slide');

let sliderMedias = []
let currentIndex = undefined

const image = slideshowModal.querySelector('img');
const video = slideshowModal.querySelector('video');
const title = slideshowModal.querySelector('h2');

function openSlideShow(media, index, medias){

    sliderMedias = medias
    currentIndex = index

    slideshowModal.style.display = "block"
    title.textContent = medias[index].title

    if(media.image){
        image.style.display = 'block'
        video.style.display = 'none'
        image.setAttribute('src', `../../assets/images/medias/${medias[index].image}`)
        image.setAttribute('alt', `Image avec pour titre ${medias[index].title}`)
    }
    if(media.video){
        video.style.display = 'block'
        image.style.display = 'none'
        video.setAttribute('src', `../../assets/images/medias/${medias[index].video}`)
    }
}

slideshowCloseButton.addEventListener('click', closeSlideshow);
previousButton.addEventListener('click', showPrevious);
nextButton.addEventListener('click', showNext);

function showPrevious(){
    if(currentIndex > 0){
        if(sliderMedias[currentIndex - 1].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex - 1].image}`)
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[currentIndex - 1].title}`)
            video.style.display = 'none'
            image.style.display = 'block'
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex - 1].video}`)
            image.style.display = 'none'
            video.style.display = 'block'
        }
        currentIndex -= 1
    } else {
        if(sliderMedias[sliderMedias.length - 1].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[sliderMedias.length - 1].image}`)
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[sliderMedias.length - 1].title}`)
            video.style.display = 'none'
            image.style.display = 'block'
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[sliderMedias.length - 1].video}`)
            image.style.display = 'none'
            video.style.display = 'block'
        }
        currentIndex = sliderMedias.length - 1
    }
    title.textContent = sliderMedias[currentIndex].title
}

function showNext(){
    if(currentIndex < sliderMedias.length - 1){
        if(sliderMedias[currentIndex + 1].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex + 1].image}`)
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[currentIndex + 1].title}`)
            video.style.display = 'none'
            image.style.display = 'block'
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex + 1].video}`)
            image.style.display = 'none'
            video.style.display = 'block'
        }
        currentIndex += 1
    } else {
        if(sliderMedias[0].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[0].image}`)
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[0].title}`)
            video.style.display = 'none'
            image.style.display = 'block'
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[0].video}`)
            image.style.display = 'none'
            video.style.display = 'block'
        }
        currentIndex = 0;
    }
    title.textContent = sliderMedias[currentIndex].title
}

function closeSlideshow(){
    slideshowModal.style.display = "none"
}