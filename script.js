var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');

        }

    }

}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tablink of tabcontents){
        tablink.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function copytoclipboard(elementId) {
    var copyText = document.getElementById(elementId);
    var cpysuccess = copyText.querySelector('.cpysuccess');
    
    var textContent = copyText.textContent;

    navigator.clipboard.writeText(textContent);

    cpysuccess.style.display = 'block';

    setTimeout(function () {
        cpysuccess.style.display = 'none';
    }, 2000);

}

let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let forwardbtn = document.getElementById("forwardbtn");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });

backbtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 600;
});

forwardbtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 600;
});

function hideClass(chosenClass){
    var menu = document.querySelector(".menu");
    menu.classList.add("absent");

    var foo = document.querySelector(chosenClass);
    foo.classList.add("present");
}

let scrollbackup = new IntersectionObserver(hide);

hide