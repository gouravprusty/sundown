const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
});

let loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)

let menuBtn = document.querySelector(".mobile_menu");
menuBtn.addEventListener("click", () => {
    menu.style.top = "0";
})
let close = document.querySelector(".menu_close");
let menu = document.querySelector(".menu_container");
close.addEventListener("click", () => {
    menu.style.top = "-100%";
})

let elements = document.querySelectorAll(".page3_element");
let fixed_image = document.querySelector(".page3_fixed_image");
elements.forEach((item) => {
    let image_src = item.getAttribute("data-image");
    item.addEventListener("mouseenter", () => {
        fixed_image.style.display = "block";
        fixed_image.style.backgroundImage = `URL(${image_src})`;
    });
    fixed_image.addEventListener("mouseenter",function(){
        fixed_image.style.display = "block";
    });
    item.addEventListener("mouseleave", () => {
        fixed_image.style.display = "none";
    });
    fixed_image.addEventListener("mouseleave",function(){
        fixed_image.style.display = "none";
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
});

let p4_tabs = document.querySelectorAll(".p4_left_head h2");
let p4_desc = document.querySelector(".p4_left_text");
let p4_image = document.querySelector(".p4_sec1_img");
p4_tabs.forEach((tab) => {
    tab.addEventListener("click", function(){
        p4_tabs.forEach((tab) => tab.classList.remove("clicked"));
        this.classList.add("clicked");
        let image = this.getAttribute("data-image");
        let desc = this.getAttribute("data-text");
        p4_desc.innerText = desc;
        p4_image.setAttribute("src", image);
    });
});