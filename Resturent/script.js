const Slider = document.querySelectorAll('.slider');
const autoScroll = true;
let slideinterval;
let intervaltime = 3000;


// next slide
const nextSlide = () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        Slider[0].classList.add('current');
    }
    current.classList.remove('current');
}

if(autoScroll){
    slideinterval = setInterval(nextSlide, intervaltime )
}
