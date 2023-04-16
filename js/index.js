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
const scrollnamemain4v2 = document.querySelectorAll('.scroll-name-main4v2');
const scrollnamemain5 = document.querySelectorAll('.scroll-name-main5');
const scrollnamemain6 = document.querySelectorAll('.scroll-name-main6');
const scrollnamemain7 = document.querySelectorAll('.scroll-name-main7');
const scrollnamemain8 = document.querySelectorAll('.scroll-name-main8');
const scrollnamemain9 = document.querySelectorAll('.scroll-name-main9');
const scrollimgmain = document.querySelectorAll('.scroll-img-main');

const handleScroll = () => {
    let threshold;
    if (window.innerWidth < 1025 && window.innerWidth > 820) {
      if (window.innerHeight = 600){
        threshold = window.innerHeight * 0.8;
      }
      else{
        threshold = window.innerHeight * 0.4;
      } // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 821 && window.innerWidth > 768) {
      if (window.innerHeight = 1180){
        threshold = window.innerHeight * 0.2;
      }
      else{
        threshold = window.innerHeight * 100;
      } // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
      threshold = window.innerHeight * 0.5;
    }
    else if (window.innerWidth < 769 && window.innerWidth > 425) {
      if (window.innerHeight = 1024){
        threshold = window.innerHeight * 0.4; // set threshold to 50% of viewport height for mobile screens
      }
      else{
        threshold = window.innerHeight * 0.6; // set threshold to 50% of viewport height for mobile screens
      }
    }
    else if (window.innerWidth < 426 && window.innerWidth > 375) {
        threshold = window.innerHeight * 0.9; // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 376 && window.innerHeight < 813 && window.innerWidth > 320) {
        threshold = window.innerHeight * 1; // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 321 && window.innerWidth > 0) {
      if (window.innerHeight = 568){
        threshold = window.innerHeight * 1.5;
      }
      else{
        threshold = window.innerHeight * 1.7;
      } // set threshold to 50% of viewport height for mobile screens
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
    let threshold;
    if (window.innerWidth < 1025 && window.innerWidth > 820) {
      if (window.innerHeight = 600){
        threshold = window.innerHeight * 1.8;
      }
      else{
        threshold = window.innerHeight * 1.2;
      } // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 821 && window.innerWidth > 768) {
      if (window.innerHeight = 1180){
        threshold = window.innerHeight * 0.5;
      }
      else{
        threshold = window.innerHeight * 0.5;
      } // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
      threshold = window.innerHeight * 1.1;
    }
    else if (window.innerWidth < 769 && window.innerWidth > 425) {
      if (window.innerHeight = 926){
        threshold = window.innerHeight * 1.4; // set threshold to 50% of viewport height for mobile screens
      }
      else{
        threshold = window.innerHeight * 1.15; // set threshold to 50% of viewport height for mobile screens
      }
    }
    else if (window.innerWidth < 426 && window.innerWidth > 375) {
        threshold = window.innerHeight * 1.5; // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 376 && window.innerHeight < 813 && window.innerWidth > 320) {
        threshold = window.innerHeight * 1.9; // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 321 && window.innerHeight < 569) {
        threshold = window.innerHeight * 2.9; // set threshold to 50% of viewport height for mobile screens
    }
    else {
      threshold = window.innerHeight * 1.3; // set threshold to 70% of viewport height for desktop screens
    }
    
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
  
window.addEventListener('scroll', handleScrollYOver1000);
  

// const handleScrollYOver1000 = () => {
// const threshold = window.innerHeight * 1.3; // set threshold to 50% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollimgmain.forEach(element => {
//     element.classList.add('img-main');
//     });
//     scrollblockbox3.forEach(element => {
//     element.classList.add('blockbox', 'visible');
//     });
//     scrollblockbox4.forEach(element => {
//     element.classList.add('blockbox2', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver1000);
// }
// };

const handleScrollYOver1300 = () => {
    let threshold;
    if (window.innerWidth < 1025 && window.innerWidth > 820) {
      if (window.innerHeight = 600){
        threshold = window.innerHeight * 2.5;
      }
      else{
        threshold = window.innerHeight * 2.3; // set threshold to 50% of viewport height for mobile screens
      } // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 821 && window.innerWidth > 768) {
      if (window.innerHeight = 1180){
        threshold = window.innerHeight * 0.8;
      }
      else{
        threshold = window.innerHeight * 0.8;
      } // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
      threshold = window.innerHeight * 1.5;
    }
    else if (window.innerWidth < 769 && window.innerWidth > 530) {
        threshold = window.innerHeight * 2.6; // set threshold to 50% of viewport height for mobile screens
    }
    else if (window.innerWidth < 531 && window.innerWidth > 425) {
        threshold = window.innerHeight * 3.6; // set threshold to 50% of viewport height for mobile screens
    }
    else {
      threshold = window.innerHeight * 1.7; // set threshold to 70% of viewport height for desktop screens
    }
    
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
  
window.addEventListener('scroll', handleScrollYOver1300);

// const handleScrollYOver1300 = () => {
// const threshold = window.innerHeight * 1.7; // set threshold to 80% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollnamemain3.forEach(element => {
//     element.classList.add('name-main');
//     });
//     scrollblockbox5.forEach(element => {
//     element.classList.add('blockbox', 'visible');
//     });
//     scrollblockbox6.forEach(element => {
//     element.classList.add('blockbox2', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver1300);
// }
// };

const handleScrollYOver1700 = () => {
  let threshold;
  if (window.innerWidth < 1025 && window.innerWidth > 820) {
    if (window.innerHeight = 600){
      threshold = window.innerHeight * 3;
    }
    else{
      threshold = window.innerHeight * 2.7; // set threshold to 50% of viewport height for mobile screens
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 821 && window.innerWidth > 768) {
    if (window.innerHeight = 1180){
      threshold = window.innerHeight * 1;
    }
    else{
      threshold = window.innerHeight * 1;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 2;
  }
  else if (window.innerWidth < 769 && window.innerWidth > 425) {
    if (window.innerHeight = 926){
      threshold = window.innerHeight * 3.3; // set threshold to 50% of viewport height for mobile screens
    }
    else{
      threshold = window.innerHeight * 3.25; // set threshold to 50% of viewport height for mobile screens
    }
  }
  else if (window.innerWidth < 426 && window.innerWidth > 375) {
    threshold = window.innerHeight * 3.2; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 376 && window.innerWidth > 320) {
    if (window.innerHeight = 667){
      threshold = window.innerHeight * 4.05;
    }
    else{
      threshold = window.innerHeight * 3.9;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 321 && window.innerWidth > 0) {
    if (window.innerHeight = 568){
      threshold = window.innerHeight * 4.8;
    }
    else{
      threshold = window.innerHeight * 2.75;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else {
    threshold = window.innerHeight * 2.4; // set threshold to 70% of viewport height for desktop screens
  }
  
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
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver1700);
  }
};

window.addEventListener('scroll', handleScrollYOver1700);

const handleScrollYOver1900 = () => {
  let threshold;
  if (window.innerWidth < 1025 && window.innerWidth > 820) {
    if (window.innerHeight = 600){
      threshold = window.innerHeight * 3;
    }
    else{
      threshold = window.innerHeight * 2.7; // set threshold to 50% of viewport height for mobile screens
    }
  }
  else if (window.innerWidth < 821 && window.innerWidth > 768) {
    if (window.innerHeight = 1180){
      threshold = window.innerHeight * 1.1;
    }
    else{
      threshold = window.innerHeight * 1.1;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 2;
  }
  else if (window.innerWidth < 769 && window.innerWidth > 530) {
      threshold = window.innerHeight * 4.5; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 429 && window.innerHeight > 925 && window.innerWidth > 425) {
    threshold = window.innerHeight * 3.85; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 426 && window.innerWidth > 375) {
    if (window.innerHeight = 844){
      threshold = window.innerHeight * 4;
    }
    else{
      threshold = window.innerHeight * 3.9;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 376 && window.innerWidth > 320) {
    if (window.innerHeight = 667){
      threshold = window.innerHeight * 5.1;
    }
    else{
      threshold = window.innerHeight * 4.4;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 321 && window.innerWidth > 0) {
    if (window.innerHeight = 568){
      threshold = window.innerHeight * 5.7;
    }
    else{
      threshold = window.innerHeight * 3.4;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else {
    threshold = window.innerHeight * 2.4; // set threshold to 70% of viewport height for desktop screens
  }
  
  if (window.scrollY > threshold) {
    // add classes to elements
      scrollnamemain4v2.forEach(element => {
        element.classList.add('name-main');
      });
      scrollblockbox8.forEach(element => {
        element.classList.add('blockbox2', 'visible');
      });
    // remove event listener after it is triggered
    window.removeEventListener('scroll', handleScrollYOver1900);
  }
};

window.addEventListener('scroll', handleScrollYOver1900);

const handleScrollYOver2000 = () => {
  let threshold;
  if (window.innerWidth < 1025 && window.innerWidth > 820) {
    if (window.innerHeight = 600){
      threshold = window.innerHeight * 3.7;
    }
    else{
      threshold = window.innerHeight * 3.9; // set threshold to 50% of viewport height for mobile screens
    }
  }
  else if (window.innerWidth < 821 && window.innerWidth > 768) {
    if (window.innerHeight = 1180){
      threshold = window.innerHeight * 1.4;
    }
    else{
      threshold = window.innerHeight * 1.4;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 2.5;
  }
  else if (window.innerWidth < 1280 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 3.7;
  }
  else if (window.innerWidth < 769 && window.innerWidth > 429) {
      threshold = window.innerHeight * 3.8; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 429 && window.innerHeight > 925 && window.innerWidth > 425) {
    threshold = window.innerHeight * 3.2; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 426 && window.innerWidth > 375) {
    threshold = window.innerHeight * 3.6; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 376 && window.innerWidth > 320) {
    if (window.innerHeight = 667){
      threshold = window.innerHeight * 4.4;
    }
    else{
      threshold = window.innerHeight * 4;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 321 && window.innerWidth > 0) {
    if (window.innerHeight = 568){
      threshold = window.innerHeight * 5.2;
    }
    else{
      threshold = window.innerHeight * 2.9;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else {
    threshold = window.innerHeight * 2.9; // set threshold to 70% of viewport height for desktop screens
  }
  
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

window.addEventListener('scroll', handleScrollYOver2000);


// const handleScrollYOver1700 = () => {
// const threshold = window.innerHeight * 2.4; // set threshold to 80% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollanimation2.forEach(element => {
//     element.classList.add('slide-up', 'visible');
//     });
//     scrollnamemain4.forEach(element => {
//     element.classList.add('name-main');
//     });
//     scrollblockbox7.forEach(element => {
//     element.classList.add('blockbox', 'visible');
//     });
//     scrollblockbox8.forEach(element => {
//     element.classList.add('blockbox2', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver1700);
// }
// };

// const handleScrollYOver2000 = () => {
// const threshold = window.innerHeight * 2.9; // set threshold to 80% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollnamemain5.forEach(element => {
//     element.classList.add('name-main');
//     });
//     scrollblockbox9.forEach(element => {
//     element.classList.add('blockbox', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver2000);
// }
// };

const handleScrollYOver2200 = () => {
  let threshold;
  if (window.innerWidth < 1025 && window.innerWidth > 820) {
    if (window.innerHeight = 600){
      threshold = window.innerHeight * 4;
    }
    else{
      threshold = window.innerHeight * 4; // set threshold to 50% of viewport height for mobile screens
    }
  }
  else if (window.innerWidth < 821 && window.innerWidth > 768) {
    if (window.innerHeight = 1180){
      threshold = window.innerHeight * 1.6;
    }
    else{
      threshold = window.innerHeight * 1.6;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 3;
  }
  else if (window.innerWidth < 769 && window.innerWidth > 530) {
      threshold = window.innerHeight * 5.3; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 429 && window.innerHeight > 925 && window.innerWidth > 425) {
    threshold = window.innerHeight * 4.4; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 426 && window.innerWidth > 375) {
    threshold = window.innerHeight * 4.4; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 376 && window.innerWidth > 320) {
    if (window.innerHeight = 667){
      threshold = window.innerHeight * 5.7;
    }
    else{
      threshold = window.innerHeight * 5;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 321 && window.innerWidth > 0) {
    if (window.innerHeight = 568){
      threshold = window.innerHeight * 6.4;
    }
    else{
      threshold = window.innerHeight * 3.35;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else {
    threshold = window.innerHeight * 3.35; // set threshold to 70% of viewport height for desktop screens
  }
  
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

window.addEventListener('scroll', handleScrollYOver2200);

// const handleScrollYOver2200 = () => {
// const threshold = window.innerHeight * 3.45; // set threshold to 80% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollnamemain6.forEach(element => {
//     element.classList.add('name-main');
//     });
//     scrollblockbox10.forEach(element => {
//     element.classList.add('blockbox2', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver2200);
// }
// };

const handleScrollYOver2400 = () => {
  let threshold;
  if (window.innerWidth < 1025 && window.innerWidth > 820) {
    if (window.innerHeight = 600){
      threshold = window.innerHeight * 5;
    }
    else{
      threshold = window.innerHeight * 4.3; // set threshold to 50% of viewport height for mobile screens
    }
  }
  else if (window.innerWidth < 821 && window.innerWidth > 768) {
    if (window.innerHeight = 1180){
      threshold = window.innerHeight * 1.9;
    }
    else{
      threshold = window.innerHeight * 1.9; // set threshold to 50% of viewport height for mobile screens
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 3.9;
  }
  else if (window.innerWidth < 769 && window.innerWidth > 530) {
      threshold = window.innerHeight * 6.2; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 429 && window.innerHeight > 925 && window.innerWidth > 425) {
    threshold = window.innerHeight * 5.1; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 426 && window.innerWidth > 375) {
    if (window.innerHeight = 844){
      threshold = window.innerHeight * 5.2;
    }
    else{
      threshold = window.innerHeight * 4.1;
    }
  }
  else if (window.innerWidth < 376 && window.innerWidth > 320) {
    if (window.innerHeight = 667){
      threshold = window.innerHeight * 6.4;
    }
    else{
      threshold = window.innerHeight * 4.1;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 321 && window.innerWidth > 0) {
    if (window.innerHeight = 568){
      threshold = window.innerHeight * 7.1;
    }
    else{
      threshold = window.innerHeight * 4.1;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else {
    threshold = window.innerHeight * 4.1; // set threshold to 70% of viewport height for desktop screens
  }
  
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

window.addEventListener('scroll', handleScrollYOver2400);

// const handleScrollYOver2400 = () => {
// const threshold = window.innerHeight * 4.1; // set threshold to 80% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollanimation3.forEach(element => {
//     element.classList.add('slide-up', 'visible');
//     });
//     scrollnamemain7.forEach(element => {
//     element.classList.add('name-main');
//     });
//     scrollblockbox11.forEach(element => {
//     element.classList.add('blockbox', 'visible');
//     });
//     scrollblockbox12.forEach(element => {
//     element.classList.add('blockbox2', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver2400);
// }
// };

const handleScrollYOver2600 = () => {
  let threshold;
  if (window.innerWidth < 1025 && window.innerWidth > 820) {
    if (window.innerHeight = 600){
      threshold = window.innerHeight * 5.45;
    }
    else{
      threshold = window.innerHeight * 4.85; // set threshold to 50% of viewport height for mobile screens
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 821 && window.innerWidth > 768) {
    if (window.innerHeight = 1180){
      threshold = window.innerHeight * 2.4;
    }
    else{
      threshold = window.innerHeight * 4.85; // set threshold to 50% of viewport height for mobile screens
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 4.6;
  }
  else if (window.innerWidth < 769 && window.innerWidth > 530) {
    if (window.innerHeight = 1024){
      threshold = window.innerHeight * 6.6;
    }
    else{
      threshold = window.innerHeight * 4.85;
    }
  }
  else if (window.innerWidth < 429 && window.innerHeight > 925 && window.innerWidth > 425) {
    threshold = window.innerHeight * 5.6; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 426 && window.innerWidth > 375) {
    threshold = window.innerHeight * 5.8; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 376 && window.innerWidth > 320) {
    if (window.innerHeight = 667){
      threshold = window.innerHeight * 7.2;
    }
    else{
      threshold = window.innerHeight * 4.85;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 321 && window.innerWidth > 0) {
    if (window.innerHeight = 568){
      threshold = window.innerHeight * 7.8;
    }
    else{
      threshold = window.innerHeight * 4.85;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else {
    threshold = window.innerHeight * 4.85; // set threshold to 70% of viewport height for desktop screens
  }
  
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

window.addEventListener('scroll', handleScrollYOver2600);

// const handleScrollYOver2600 = () => {
// const threshold = window.innerHeight * 4.85; // set threshold to 80% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollanimation4.forEach(element => {
//     element.classList.add('slide-up', 'visible');
//     });
//     scrollnamemain8.forEach(element => {
//     element.classList.add('name-main');
//     });
//     scrollblockbox13.forEach(element => {
//     element.classList.add('blockbox', 'visible');
//     });
//     scrollblockbox14.forEach(element => {
//     element.classList.add('blockbox2', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver2600);
// }
// };

const handleScrollYOver3000 = () => {
  let threshold;
  if (window.innerWidth < 1025 && window.innerWidth > 820) {
    if (window.innerHeight = 600){
      threshold = window.innerHeight * 6.6;
    }
    else{
      threshold = window.innerHeight * 5.7; // set threshold to 50% of viewport height for mobile screens
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 821 && window.innerWidth > 768) {
    if (window.innerHeight = 1180){
      threshold = window.innerHeight * 2.8;
    }
    else{
      threshold = window.innerHeight * 5.7; // set threshold to 50% of viewport height for mobile screens
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 1281 && window.innerWidth > 1024) {
    threshold = window.innerHeight * 5;
  }
  else if (window.innerWidth < 769 && window.innerWidth > 530) {
    if (window.innerHeight = 1024){
      threshold = window.innerHeight * 7;
    }
    else{
      threshold = window.innerHeight * 5.7;
    }
  }
  else if (window.innerWidth < 429 && window.innerHeight > 925 && window.innerWidth > 425) {
    threshold = window.innerHeight * 6.3; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 426 && window.innerWidth > 375) {
    threshold = window.innerHeight * 6.4; // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 376 && window.innerWidth > 320) {
    if (window.innerHeight = 667){
      threshold = window.innerHeight * 7.9;
    }
    else{
      threshold = window.innerHeight * 5.7;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else if (window.innerWidth < 321 && window.innerWidth > 0) {
    if (window.innerHeight = 568){
      threshold = window.innerHeight * 9.2;
    }
    else{
      threshold = window.innerHeight * 5.7;
    } // set threshold to 50% of viewport height for mobile screens
  }
  else {
    threshold = window.innerHeight * 5.7; // set threshold to 70% of viewport height for desktop screens
  }
  
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

window.addEventListener('scroll', handleScrollYOver3000);

// const handleScrollYOver3000 = () => {
// const threshold = window.innerHeight * 5.7; // set threshold to 80% of viewport height
// if (window.scrollY > threshold) {
//     // add classes to elements
//     scrollanimation5.forEach(element => {
//     element.classList.add('slide-up', 'visible');
//     });
//     scrollnamemain9.forEach(element => {
//     element.classList.add('name-main');
//     });
//     scrollblockbox15.forEach(element => {
//     element.classList.add('blockbox', 'visible');
//     });
//     scrollblockbox16.forEach(element => {
//     element.classList.add('blockbox2', 'visible');
//     });
//     // remove event listener after it is triggered
//     window.removeEventListener('scroll', handleScrollYOver3000);
// }
// };


// window.addEventListener('scroll', handleScroll);
// window.addEventListener('scroll', handleScrollYOver1000);
// window.addEventListener('scroll', handleScrollYOver1300);
// window.addEventListener('scroll', handleScrollYOver1700);
// window.addEventListener('scroll', handleScrollYOver2000);
// window.addEventListener('scroll', handleScrollYOver2200);
// window.addEventListener('scroll', handleScrollYOver2400);
// window.addEventListener('scroll', handleScrollYOver2600);
// window.addEventListener('scroll', handleScrollYOver3000);