const bannerImageElement = document.querySelector('.banner_image');

bannerImageElement.addEventListener('click', () => {
    bannerImageElement.classList.toggle('animate');
});



function toggleAboutText() {
    const aboutTextElement = document.querySelector('.about_text');
    const newP = document.createElement('p');
    newP.textContent = "Je suis un développeur web passionné avec une expérience dans la création de sites web modernes et fonctionnels. J'aime relever les défis et trouver des solutions créatives pour répondre aux besoins de mes clients. J'ai travaillé sur plusieurs projets, allant de petits sites personnels à des applications web complexes pour des entreprises. Mon objectif est de continuer à apprendre et à évoluer en tant que développeur, tout en créant des expériences utilisateur exceptionnelles.";
    newP.className = 'additional-info';
    aboutTextElement.appendChild(newP);
}