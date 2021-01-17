//подключаем файл
//alert("Hello Gulp!");
;

// поддержка webp?
function testWebP(callback) {
  const webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

function burgerClick() {
  const burgerEl = document.querySelector('.header__burger');
  const body = document.querySelector('body');
  const menu = document.querySelector('.header__wrapper');
  function addClass(e) {
    if (e.target.className.includes('active')) {
      burgerEl.className = 'header__burger'
      body.className = '';
      menu.className = 'header__wrapper'
    } else {
      burgerEl.className = 'header__burger active'
      body.className = 'lock';
      menu.className = 'header__wrapper active'
    }
  };
  burgerEl.addEventListener("click", addClass);
}

function sliderBanner() {
  const arrowRight = 'arrow__right';
  const arrowLeft = 'arrow__left'
  const point = 'point__item'
  const root = document.querySelector('.banner__button')
  const arrayBanner = [];
  const bannerSliderElement = document.querySelector('#slider-banner').children
  const arrayPoint = [];
  const pointElement = document.querySelector('.point').children;


  for (let i = 0; i < bannerSliderElement.length; i++) {
    arrayBanner.push(bannerSliderElement[i])
  }

  for (let i = 0; i < pointElement.length; i++) {
    arrayPoint.push(pointElement[i])
  }
  function button(target) {
    let indexActivePoint = arrayPoint.findIndex((el) => el.className.includes('point__item--activ'))
    let indexActiveBanner = arrayBanner.findIndex((el) => el.className.includes('screen-activ'))

    if (target.className == (arrowRight)) {
      bannerSliderElement[indexActiveBanner].className = 'screen screen-no-activ'
      bannerSliderElement[indexActivePoint + 1].className = 'screen screen-activ';
      pointElement[indexActivePoint].className = 'point__item';
      pointElement[indexActiveBanner + 1].className = 'point__item point__item--activ';
    } else if (target.className == (arrowLeft)) {
      bannerSliderElement[indexActiveBanner].className = 'screen screen-no-activ'
      bannerSliderElement[indexActivePoint - 1].className = 'screen screen-activ';
      pointElement[indexActivePoint].className = 'point__item';
      pointElement[indexActiveBanner - 1].className = 'point__item point__item--activ';
    } else if (target.className.includes(point)) {
      let indexPoint = arrayPoint.indexOf(target);
      bannerSliderElement[indexActiveBanner].className = 'screen screen-no-activ'
      bannerSliderElement[indexPoint].className = 'screen screen-activ';
      pointElement[indexActivePoint].className = 'point__item';
      pointElement[indexPoint].className = 'point__item point__item--activ';
    }

    if (bannerSliderElement[bannerSliderElement.length - 1].className.includes('screen-activ')) {
      root.querySelector('.arrow__right').className = arrowRight + ' ' + 'arrow__last-el'
    } else {
      root.querySelector('.arrow__right').className = arrowRight
    }
    if (bannerSliderElement[0].className.includes('screen-activ')) {
      root.querySelector('.arrow__left').className = arrowLeft + ' ' + 'arrow__last-el'
    } else {
      root.querySelector('.arrow__left').className = arrowLeft
    }
  }
  root.addEventListener('click', (e) => button(e.target))
}

sliderBanner();
burgerClick();
