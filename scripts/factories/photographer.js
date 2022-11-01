function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline} = data;

    const picture = `assets/images/photographers/${portrait}`;

    function getPhotographerProfileCard() {

        const article = document.createElement( 'article' );

        article.innerHTML = `
            <img src="${picture}" alt="Portrait du photographe ${name}"/>
            <h2>${name}</h2>
            <p class="location">${city}, ${country}</p>
            <p class="resume">${tagline}</p>
            <p class="dailyRate">${price}€/jour</p>
        `
        return article;

    }

    function getPhotographerProfileHeader(){
        
        const photographerInfos = document.createElement('div');
        photographerInfos.innerHTML = `
            <h1>${name}</h1>
            <h2 class="location">${city}, ${country}</h2>
            <p class="tagline">${tagline}</p>
        `
        return photographerInfos;

    }

    return { name, picture, location, tagline, getPhotographerProfileCard, getPhotographerProfileHeader }
}