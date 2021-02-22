function addColor(e){
    e.parentNode.childNodes[3].style.background = "linear-gradient(140deg, #EC41FF, #0984E3)";
}

function removeColor(e){
    e.parentNode.childNodes[3].style.background = "";
}

window.addEventListener("scroll", addBackgroundColor);

function addBackgroundColor(){
    let nav = document.querySelector("nav");
    let navArr = Array.from(document.getElementsByClassName("navlink"));
    if (window.scrollY){
        nav.classList.add("navbar-style");
        navArr.map((item)=>item.classList.add("add-white"))
    }else{
        nav.classList.remove("navbar-style");
        navArr.map((item)=>item.classList.remove("add-white"))
        
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

