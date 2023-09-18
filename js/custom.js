const slides = document.querySelectorAll(".slide");
const preve = document.querySelector(".preve");
const next = document.querySelector(".next");

let index = 0;

preve.addEventListener("click",function () {
    preveslide();
})

next.addEventListener("click",function () {
    nextslide();
})

function preveslide() {
    if (index == 0) {
        index = slides.length -1;
    }
    else
    {
        index--;
    }
    changeSlide();
}
function nextslide() {
    if (index == slides.length -1) {
        index = 0;
    }
    else
    {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    slides[index].classList.add("active");

    // adding code to show active indicator dot
    let indicators = document.querySelectorAll(".slides .indicatorContainer > div")
    indicators.forEach(function(indicator) {
        indicator.classList.remove("active");
    });
   indicators[index].classList.add("active");

   resetAutoplay();
}

// creating dot indicater using javascript start

const indicatorContainer = document.querySelector(".indicatorContainer");

function bulidIndicatores() {
    for (let i = 0; i < slides.length; i++) {
        let element = document.createElement("div");
        element.dataset.i = i +1;
        element.setAttribute("oneclick", "gotoslide(this)");

        // macking first dot in slider
        if(i == 0){
            element.classList.add("active");
        }

        indicatorContainer.appendChild(element)
    }
}
bulidIndicatores();

// creating dot indicater using javascript end

// create going to function
function gotoslide(element){
    let k = element.dataset.i;
    index = k-1;
    changeSlide();
}


// slider auto play
let timer = setInterval(nextslide, 4000);

function resetAutoplay(){
    clearInterval(timer);
    timer = setInterval(nextslide, 4000);
}

