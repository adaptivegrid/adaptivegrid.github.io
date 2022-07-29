/* Устанавливаем индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */

function showSlides(n) {
    // let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) { 
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
        slides[slideIndex - 1].style.display = "block"; 
    }    
};

function changeItem(id){
    let fullDiv = document.getElementById(id);
    let byId = fullDiv.getAttribute("id");
    document.getElementById(byId).style.margin = "-20px 0 20px 0";
    document.getElementById(byId).style.transition = "0.5s";
    document.getElementById(byId).style.transition = "0.4s";
    
}
// функция, которая сработает при наведении.
//она означает - выбрать элемент к Id у которого надо что-то изменить.
// когда в скобки где написано one-two добавите Id своего элемента
function rechangeItem(id) {
    let fullDiv = document.getElementById(id);
    let byId = fullDiv.getAttribute("id");
    document.getElementById(byId).style.margin = "0 0 0 0";
    document.getElementById(byId).style.transition = "0.5s";
    document.getElementById(byId).style.transitionDelay = "0.3s";
}// тут всё также. но наобарот. протсес происходящий про отводе курсора.


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
   options1 = {
    threshold: [0.5] };
    observer = new IntersectionObserver(onEntry, options1);
    elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

setTimeout(
  function hr(){
    document.getElementById('hr').style.color = "green";
  }, 4000)

