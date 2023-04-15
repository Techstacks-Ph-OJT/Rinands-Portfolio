const scrollanimation = document.querySelectorAll('.scroll-animation-slide-up');
const scrollanimation2 = document.querySelectorAll('.scroll-animation-slide-up2');
const scrollanimation3 = document.querySelectorAll('.scroll-animation-slide-up3');
const scrollanimation4 = document.querySelectorAll('.scroll-animation-slide-up4');
const scrollanimation5 = document.querySelectorAll('.scroll-animation-slide-up5');
const scrollblockbox = document.querySelectorAll('.scroll-blockbox-animation');
const scrollblockbox2 = document.querySelectorAll('.scroll-blockbox-animation2');
const scrollblockbox3 = document.querySelectorAll('.scroll-blockbox-animation3');
const scrollblockbox4 = document.querySelectorAll('.scroll-blockbox-animation4');
const scrollblockbox5 = document.querySelectorAll('.scroll-blockbox-animation5');
const scrollblockbox6 = document.querySelectorAll('.scroll-blockbox-animation6');
const scrollblockbox7 = document.querySelectorAll('.scroll-blockbox-animation7');
const scrollblockbox8 = document.querySelectorAll('.scroll-blockbox-animation8');
const scrollblockbox9 = document.querySelectorAll('.scroll-blockbox-animation9');
const scrollblockbox10 = document.querySelectorAll('.scroll-blockbox-animation10');
const scrollblockbox11 = document.querySelectorAll('.scroll-blockbox-animation11');
const scrollblockbox12 = document.querySelectorAll('.scroll-blockbox-animation12');
const scrollblockbox13 = document.querySelectorAll('.scroll-blockbox-animation13');
const scrollblockbox14 = document.querySelectorAll('.scroll-blockbox-animation14');
const scrollblockbox15 = document.querySelectorAll('.scroll-blockbox-animation15');
const scrollblockbox16 = document.querySelectorAll('.scroll-blockbox-animation16');
const scrollnamemain = document.querySelectorAll('.scroll-name-main');
const scrollnumbermain = document.querySelectorAll('.scroll-number-main');
const scrollnamemain2 = document.querySelectorAll('.scroll-name-main2');
const scrollnamemain3 = document.querySelectorAll('.scroll-name-main3');
const scrollnamemain4 = document.querySelectorAll('.scroll-name-main4');
const scrollnamemain5 = document.querySelectorAll('.scroll-name-main5');
const scrollnamemain6 = document.querySelectorAll('.scroll-name-main6');
const scrollnamemain7 = document.querySelectorAll('.scroll-name-main7');
const scrollnamemain8 = document.querySelectorAll('.scroll-name-main8');
const scrollnamemain9 = document.querySelectorAll('.scroll-name-main9');
const scrollimgmain = document.querySelectorAll('.scroll-img-main');

const handleScroll = () => {
    let threshold;
    if (window.innerWidth < 1025 && window.innerWidth > 768) {
      threshold = window.innerHeight * 0.8; // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 769 && window.innerWidth > 425) {
        threshold = window.innerHeight * 0.93; // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 426 && window.innerWidth > 375) {
        threshold = window.innerHeight * 1.5; // set threshold to 50% of viewport height for mobile screens
    }
    else {
      threshold = window.innerHeight * 0.7; // set threshold to 70% of viewport height for desktop screens
    }
    
    if (window.scrollY > threshold) {
      // add classes to elements
      scrollanimation.forEach(element => {
        element.classList.add('slide-up', 'visible');
      });
      scrollblockbox.forEach(element => {
        element.classList.add('blockbox', 'visible');
      });
      scrollblockbox2.forEach(element => {
        element.classList.add('blockbox2', 'visible');
      });
      scrollnamemain.forEach(element => {
        element.classList.add('name-main');
      });
      scrollnumbermain.forEach(element => {
        element.classList.add('name-main-number');
      });
      scrollnamemain2.forEach(element => {
        element.classList.add('name-main');
      });
      // remove event listener after it is triggered
      window.removeEventListener('scroll', handleScroll);
    }
  };
  
window.addEventListener('scroll', handleScroll);
  

const handleScrollYOver1000 = () => {
const threshold = window.innerHeight * 1.3; // set threshold to 50% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollimgmain.forEach(element => {
    element.classList.add('img-main');
    });
    scrollblockbox3.forEach(element => {
    element.classList.add('blockbox', 'visible');
    });
    scrollblockbox4.forEach(element => {
    element.classList.add('blockbox2', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver1000);
}
};

const handleScrollYOver1300 = () => {
const threshold = window.innerHeight * 1.7; // set threshold to 80% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollnamemain3.forEach(element => {
    element.classList.add('name-main');
    });
    scrollblockbox5.forEach(element => {
    element.classList.add('blockbox', 'visible');
    });
    scrollblockbox6.forEach(element => {
    element.classList.add('blockbox2', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver1300);
}
};

const handleScrollYOver1700 = () => {
const threshold = window.innerHeight * 2.6; // set threshold to 80% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollanimation2.forEach(element => {
    element.classList.add('slide-up', 'visible');
    });
    scrollnamemain4.forEach(element => {
    element.classList.add('name-main');
    });
    scrollblockbox7.forEach(element => {
    element.classList.add('blockbox', 'visible');
    });
    scrollblockbox8.forEach(element => {
    element.classList.add('blockbox2', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver1700);
}
};

const handleScrollYOver2000 = () => {
const threshold = window.innerHeight * 3.05; // set threshold to 80% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollnamemain5.forEach(element => {
    element.classList.add('name-main');
    });
    scrollblockbox9.forEach(element => {
    element.classList.add('blockbox', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver2000);
}
};

const handleScrollYOver2200 = () => {
const threshold = window.innerHeight * 3.55; // set threshold to 80% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollnamemain6.forEach(element => {
    element.classList.add('name-main');
    });
    scrollblockbox10.forEach(element => {
    element.classList.add('blockbox2', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver2200);
}
};

const handleScrollYOver2400 = () => {
const threshold = window.innerHeight * 4.25; // set threshold to 80% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollanimation3.forEach(element => {
    element.classList.add('slide-up', 'visible');
    });
    scrollnamemain7.forEach(element => {
    element.classList.add('name-main');
    });
    scrollblockbox11.forEach(element => {
    element.classList.add('blockbox', 'visible');
    });
    scrollblockbox12.forEach(element => {
    element.classList.add('blockbox2', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver2400);
}
};

const handleScrollYOver2600 = () => {
const threshold = window.innerHeight * 5; // set threshold to 80% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollanimation4.forEach(element => {
    element.classList.add('slide-up', 'visible');
    });
    scrollnamemain8.forEach(element => {
    element.classList.add('name-main');
    });
    scrollblockbox13.forEach(element => {
    element.classList.add('blockbox', 'visible');
    });
    scrollblockbox14.forEach(element => {
    element.classList.add('blockbox2', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver2600);
}
};

const handleScrollYOver3000 = () => {
const threshold = window.innerHeight * 5.8; // set threshold to 80% of viewport height
if (window.scrollY > threshold) {
    // add classes to elements
    scrollanimation5.forEach(element => {
    element.classList.add('slide-up', 'visible');
    });
    scrollnamemain9.forEach(element => {
    element.classList.add('name-main');
    });
    scrollblockbox15.forEach(element => {
    element.classList.add('blockbox', 'visible');
    });
    scrollblockbox16.forEach(element => {
    element.classList.add('blockbox2', 'visible');
    });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver3000);
}
};


window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', handleScrollYOver1000);
window.addEventListener('scroll', handleScrollYOver1300);
window.addEventListener('scroll', handleScrollYOver1700);
window.addEventListener('scroll', handleScrollYOver2000);
window.addEventListener('scroll', handleScrollYOver2200);
window.addEventListener('scroll', handleScrollYOver2400);
window.addEventListener('scroll', handleScrollYOver2600);
window.addEventListener('scroll', handleScrollYOver3000);