var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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