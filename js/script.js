const accordeon = document.querySelectorAll(".item");
// console.log(accordeon);

for (let i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener("click", function() {
        this.classList.toggle("active");
        accordeon.forEach(item => 
            accordeon[i] !== item ?
            item.classList.remove("active") : ''
        );
    })
}