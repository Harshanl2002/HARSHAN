const mnbar = document.getElementById("menu");
const l = document.getElementById("links");

mnbar.onclick = () => {
    l.classList.toggle("dis");
    mnbar.children[0].classList.toggle("t1")
    mnbar.children[1].classList.toggle("t2")
    mnbar.children[2].classList.toggle("t3")
}
