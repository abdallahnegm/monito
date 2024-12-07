let bar = document.querySelector(".bar");
let mobileMenu = document.querySelector(".mobile-menu");
bar.addEventListener("click",function(){
    mobileMenu.classList.toggle("active");
})
$('#products').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('#slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})
// start counter 
let counters = document.querySelectorAll(".counter");
counters.forEach((counter)=>{
    counter.innerText = "0";
    let start = 0;
    let end = +counter.getAttribute("data-target");
    let speed = 80;
    let count = setInterval(()=>{
        start += end / speed;
        counter.innerText = Math.floor(start);
        if(start == end){
            clearInterval(count);
        }
    },speed)
})