const mnbar = document.getElementById("menu");
const l = document.getElementById("links");
const lo = document.getElementById("nav");
mnbar.onclick = () => {
    l.classList.toggle("dis");
    mnbar.children[0].classList.toggle("t1")
    mnbar.children[1].classList.toggle("t2")
    mnbar.children[2].classList.toggle("t3")
    lo.classList.toggle("dis1")
}
$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.nav').addClass("sticky");
        } else {
            $('.nav').removeClass("sticky");
        }
    })
})