const slideshowModal = document.getElementById('slideshow_modal');
const slideshowCloseButton = document.querySelector('.close-slideshow');
const previousButton = document.querySelector('.previous-slide');
const nextButton = document.querySelector('.next-slide');

let mediaCards = [];

let sliderMedias = [];
let currentIndex = undefined;

const image = slideshowModal.querySelector('img');
const video = slideshowModal.querySelector('video');
const title = slideshowModal.querySelector('h2');

function openSlideShow(main, media, index, medias){

    main.setAttribute('aria-hidden', true);
    mediaCards = Array.from(main.querySelectorAll('.media-card'));
    mediaCards.forEach((card) => card.setAttribute('tabindex', -1));
    slideshowModal.setAttribute('aria-hidden', false);

    sliderMedias = medias;
    currentIndex = index;

    slideshowModal.style.display = "block";
    slideshowCloseButton.focus();
    title.textContent = medias[index].title;

    if(media.image){
        image.style.display = 'block';
        video.style.display = 'none';
        image.setAttribute('src', `../../assets/images/medias/${medias[index].image}`);
        image.setAttribute('alt', `Image avec pour titre ${medias[index].title}`);
    }
    if(media.video){
        video.style.display = 'block';
        image.style.display = 'none';
        video.setAttribute('src', `../../assets/images/medias/${medias[index].video}`);
    }
}

slideshowCloseButton.addEventListener('click', closeSlideshow);
slideshowCloseButton.addEventListener('keypress', closeSlideshow);
previousButton.addEventListener('click', showPrevious);
previousButton.addEventListener('keypress', showPrevious);
nextButton.addEventListener('click', showNext);
nextButton.addEventListener('keypress', showNext);
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft'){
        showPrevious();
    } else if (e.key === 'ArrowRight'){
        showNext();
    } else if (e.key === 'Escape'){
        closeSlideshow();
    }
});

function showPrevious(){
    if(currentIndex > 0){
        if(sliderMedias[currentIndex - 1].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex - 1].image}`);
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[currentIndex - 1].title}`);
            video.style.display = 'none';
            image.style.display = 'block';
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex - 1].video}`);
            image.style.display = 'none';
            video.style.display = 'block';
        }
        currentIndex -= 1;
    } else {
        if(sliderMedias[sliderMedias.length - 1].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[sliderMedias.length - 1].image}`);
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[sliderMedias.length - 1].title}`);
            video.style.display = 'none';
            image.style.display = 'block';
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[sliderMedias.length - 1].video}`);
            image.style.display = 'none';
            video.style.display = 'block';
        }
        currentIndex = sliderMedias.length - 1;
    }
    title.textContent = sliderMedias[currentIndex].title;
    console.log('media index :',currentIndex);
}

function showNext(){
    if(currentIndex < sliderMedias.length - 1){
        if(sliderMedias[currentIndex + 1].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex + 1].image}`);
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[currentIndex + 1].title}`);
            video.style.display = 'none';
            image.style.display = 'block';
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[currentIndex + 1].video}`);
            image.style.display = 'none';
            video.style.display = 'block';
        }
        currentIndex += 1;
    } else {
        if(sliderMedias[0].image){
            image.setAttribute('src', `../../assets/images/medias/${sliderMedias[0].image}`);
            image.setAttribute('alt', `Image avec pour titre ${sliderMedias[0].title}`);
            video.style.display = 'none';
            image.style.display = 'block';
        } else {
            video.setAttribute('src', `../../assets/images/medias/${sliderMedias[0].video}`);
            image.style.display = 'none';
            video.style.display = 'block';
        }
        currentIndex = 0;
    }
    title.textContent = sliderMedias[currentIndex].title;
    console.log('media index :',currentIndex);
}

function closeSlideshow(){
    slideshowModal.style.display = "none";
    main.setAttribute('aria-hidden', false);
    mediaCards.forEach((card) => card.setAttribute('tabindex', 0));
    slideshowModal.setAttribute('aria-hidden', true);
}