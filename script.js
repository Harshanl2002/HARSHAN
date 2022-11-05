const mnbar = document.getElementById("menu");
const mc = document.getElementById("mc");
const l = document.getElementById("links");
const lo = document.getElementById("logo");
const n = document.getElementById("nav");
var w = screen.width;

mnbar.onclick = () => {
    mnbar.style.display = "none";
    mc.style.display = "block";
    l.style.transform = "translateX(0%)";
    l.style.transition = "transform .5s linear"
}

mc.onclick = () => {
    mnbar.style.display = "block";
    n.style.height = "10%";
    mc.style.display = "none";
    l.style.transform = "translateX(100%)";
    l.style.transition = "transform .5s linear";
}
