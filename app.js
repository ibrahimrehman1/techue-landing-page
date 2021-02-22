function addColor(e){
    e.parentNode.childNodes[3].style.background = "linear-gradient(140deg, #EC41FF, #0984E3)";
}

function removeColor(e){
    e.parentNode.childNodes[3].style.background = "";
}

window.addEventListener("scroll", addBackgroundColor);

function addBackgroundColor(){
    let nav = document.querySelector("nav");
    let hamburger = document.querySelector(".hamburger-icon")
    let bar1 = document.querySelector("#bar-1");
    let bar2 = document.querySelector("#bar-2");
    let bar3 = document.querySelector("#bar-3");
    let navArr = Array.from(document.getElementsByClassName("navlink"));
    if (window.scrollY){
        nav.classList.add("navbar-style");
        navArr.map((item)=>item.classList.add("add-white"))
        hamburger.classList.add("add-burger-color");
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";



    }else{
        nav.classList.remove("navbar-style");
        navArr.map((item)=>item.classList.remove("add-white"))
        hamburger.classList.remove("add-burger-color");
        bar1.style.backgroundColor = "black";
        bar2.style.backgroundColor = "black";
        bar3.style.backgroundColor = "black";
    }
}

addBackgroundColor()

let status1 = false;
let status2 = false;
function focusColor(element){
    let arr = Array.from(element.parentNode.childNodes);
    arr.map((ele, index)=>{
        if (index === 1 || index === 3){
            ele.style.backgroundColor = "white";
        }
    })
    element.style.backgroundColor = "#EC41FF";
    if (element.parentNode.childNodes[1] === element){
        status1 = true;
        document.querySelector(".article-3-sub-section-div1").classList.remove("add-transition1");
        document.querySelector(".article-3-sub-section-div2").classList.remove("add-transition2");

    }else{
        status2 = true;
        document.querySelector(".article-3-sub-section-div1").classList.add("add-transition1");
        document.querySelector(".article-3-sub-section-div2").classList.add("add-transition2");
    }
}

function setColor(element){
    if (element.style.backgroundColor === "white"){
        element.style.backgroundColor = "#EC41FF";
        if (element.parentNode.childNodes[1] === element){
            status1 = false;
        }else{
            status2 = false;
        }
    }
}

function resetColor(element){
    console.log(element.style.backgroundColor)
    if (element.parentNode.childNodes[1] === element){
        if (element.style.backgroundColor === "rgb(236, 65, 255)" && !status1){
            element.style.backgroundColor = "white";
        }
    }else{
        if (element.style.backgroundColor === "rgb(236, 65, 255)" && !status2){
            element.style.backgroundColor = "white";
        }
    }
}

focusColor(document.querySelector(".span-1"));
document.querySelector(".span-2").style.backgroundColor = "white";




const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "flip",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

document.querySelector("#burgerIcon").addEventListener("click", ()=>{
    let nav = document.querySelector(".navbar");
    let hamburger = document.querySelector(".hamburger-icon")
    let bar1 = document.querySelector("#bar-1");
    let bar2 = document.querySelector("#bar-2");
    let bar3 = document.querySelector("#bar-3");
    document.querySelector("#bar-1").classList.toggle("tilt-1");
    document.querySelector("#bar-2").classList.toggle("tilt-2");
    document.querySelector("#bar-3").classList.toggle("tilt-3");
    document.querySelector("#hidden-div").classList.toggle("show-div")
    document.querySelector(".div1").classList.toggle("nav-links-flex")
    nav.classList.add("navbar-style")
    nav.classList.toggle("navbar-extend")
    if (nav.classList.contains("navbar-extend")){
        document.querySelector(".navbar-div").style.flexDirection = "column";
        hamburger.classList.add("add-burger-color");
        Array.from(document.querySelectorAll(".hidden-div-span")).map(ele=>{
            ele.classList.add("addColors");
        })
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";
    }
})

function minimize(){
    let nav = document.querySelector(".navbar");
    document.querySelector("#hidden-div").classList.remove("show-div")
    document.querySelector("#bar-1").classList.remove("tilt-1");
    document.querySelector("#bar-2").classList.remove("tilt-2");
    document.querySelector("#bar-3").classList.remove("tilt-3");
    nav.classList.remove("navbar-extend");
    document.querySelector(".div1").classList.remove("nav-links-flex")
}