document.addEventListener('DOMContentLoaded', function () {
    // For lucy
    const images = [
        'images/Lucy_upsidedown.JPG',
        'images/Lucy_sleeping.JPG',
        'images/Lucy_sleepingpt2.JPG',
        'images/Lucy_laying.JPG',
    ];

    let currentImageIndex = 0;
    const luimg = document.querySelector('.luimg');
    const prevButton = luimg.querySelector('#prev');
    const nextButton = luimg.querySelector('#next');

    function changeImage(direction) {
        currentImageIndex += direction;

        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        const imgElements = luimg.querySelectorAll('img');
        imgElements[currentImageIndex].style.display = 'block';

        for (let i = 0; i < imgElements.length; i++) {
            if (i !== currentImageIndex) {
                imgElements[i].style.display = 'none';
            }
        }
    }
    prevButton.addEventListener('click', () => {
        changeImage(-1);
    });

    nextButton.addEventListener('click', () => {
        changeImage(1);
    });

    // For Rosie
    const imagesR = [
        'images/rosie_sleeping.jpg',
        'images/rosie_blanket.jpg',
        'images/rosie_table.jpg',
        'images/rosie_towel.jpg'
    ];
    let currentImageIndexR = 0;
    const roimg = document.querySelector('.roimg');
    const prevButtonR = roimg.querySelector('#prev');
    const nextButtonR = roimg.querySelector('#next');

    function changeImageR(direction) {
    currentImageIndexR += direction;

    if (currentImageIndexR < 0) {
        currentImageIndexR = imagesR.length - 1;
    } else if (currentImageIndexR >= imagesR.length) {
        currentImageIndexR = 0;
    }

    const imgElementsR = roimg.querySelectorAll('img');
    imgElementsR[currentImageIndexR].style.display = 'block';

    for (let i = 0; i < imgElementsR.length; i++) {
        if (i !== currentImageIndexR) {
            imgElementsR[i].style.display = 'none';
        }
    }
    }

    prevButtonR.addEventListener('click', () => {
        changeImageR(-1);
    });

    nextButtonR.addEventListener('click', () => {
        changeImageR(1);
    });
   
    // For Honey
    const imagesH = [
        'images/honey_sleeping.jpeg',
        'images/honey_rock.jpeg',
        'images/honey_swimming.jpeg',
        'images/honey_smiling.jpeg',
    ];
    
    let currentImageIndexH = 0;
    const honimg = document.querySelector('.honimg');
    const prevButtonH = honimg.querySelector('#prev');
    const nextButtonH = honimg.querySelector('#next');
    
    function changeImageH(direction) {
        currentImageIndexH += direction;
    
        if (currentImageIndexH < 0) {
            currentImageIndexH = imagesH.length - 1;
        } else if (currentImageIndexH >= imagesH.length) {
            currentImageIndexH = 0;
        }
    
        const imgElementsH = honimg.querySelectorAll('img');
        imgElementsH[currentImageIndexH].style.display = 'block';
    
        for (let i = 0; i < imgElementsH.length; i++) {
            if (i !== currentImageIndexH) {
                imgElementsH[i].style.display = 'none';
            }
        }
    }
   
    prevButtonH.addEventListener('click', () => {
        changeImageH(-1);
    });
    
    nextButtonH.addEventListener('click', () => {
        changeImageH(1);
    });


    // For Sofie
    const imagesS = [
        'images/sofie2.JPG',
        'images/sofie3.JPG',
        'images/sofie4.JPG',
        'images/sofie5.JPG',
    ];
    
    let currentImageIndexS = 0;
    const soimg = document.querySelector('.soimg');
    const prevButtonS = soimg.querySelector('#prev');
    const nextButtonS = soimg.querySelector('#next');
    
    function changeImageS(direction) {
        currentImageIndexS += direction;
    
        if (currentImageIndexS < 0) {
            currentImageIndexS = imagesS.length - 1;
        } else if (currentImageIndexS >= imagesS.length) {
            currentImageIndexS = 0;
        }
    
        const imgElementsS = soimg.querySelectorAll('img');
        imgElementsS[currentImageIndexS].style.display = 'block';
    
        for (let i = 0; i < imgElementsS.length; i++) {
            if (i !== currentImageIndexS) {
                imgElementsS[i].style.display = 'none';
            }
        }
    }
    
    prevButtonS.addEventListener('click', () => {
        changeImageS(-1);
    });
    
    nextButtonS.addEventListener('click', () => {
        changeImageS(1);
    });

    // For Finn
    const imagesF = [
        'images/Finn_Shlumped.PNG',
        'images/Finn_Kitten.jpg',
        'images/Finn_GOAT.PNG',
        'images/Finn_Goldenhr.PNG',
    ];
    
    let currentImageIndexF = 0;
    const finnimg = document.querySelector('.finnimg');
    const prevButtonF = finnimg.querySelector('#prev');
    const nextButtonF = finnimg.querySelector('#next');
    
    function changeImageF(direction) {
        currentImageIndexF += direction;
    
        if (currentImageIndexF < 0) {
            currentImageIndexF = imagesF.length - 1;
        } else if (currentImageIndexF >= imagesF.length) {
            currentImageIndexF = 0;
        }
    
        const imgElementsF = finnimg.querySelectorAll('img');
        imgElementsF[currentImageIndexF].style.display = 'block';
    
        for (let i = 0; i < imgElementsF.length; i++) {
            if (i !== currentImageIndexF) {
                imgElementsF[i].style.display = 'none';
            }
        }
    }
    
    prevButtonF.addEventListener('click', () => {
        changeImageF(-1);
    });
    
    nextButtonF.addEventListener('click', () => {
        changeImageF(1);
    });

});