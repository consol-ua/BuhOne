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


burgerClick();
