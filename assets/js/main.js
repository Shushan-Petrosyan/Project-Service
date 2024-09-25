let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-content').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);

let touchStartX = 0;
let touchEndX = 0;

const carousel = document.querySelector('.carousel');

carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
});

carousel.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX > touchEndX + 50) {
        nextSlide();
    } else if (touchStartX < touchEndX - 50) {
        prevSlide();
    }
}

const burgerImg = document.querySelector('.burger-img');
    const hiddenDiv = document.querySelector('.hidden-div');
    const cancelBtn = document.querySelector('.cancel');
    const corousel = document.querySelector('.carousel');

    burgerImg.addEventListener('click', () => {
        if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
            hiddenDiv.style.display = 'block';
            corousel.style.display  =   'none';
        } else {
            hiddenDiv.style.display = 'none';
            corousel.style.display  =   'block';
        }
    });

    cancelBtn.addEventListener('click', () => {
        hiddenDiv.style.display = 'none';
        corousel.style.display  =   'block';
    });
