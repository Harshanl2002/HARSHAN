const mnbar = document.getElementById("menu");
const mc = document.getElementById("mc");
const l = document.getElementById("links");
const lo = document.getElementById("logo");
const n = document.getElementById("nav");
var w = screen.width;
mnbar.onclick = () => {
    mnbar.style.display = "none";
    n.style.height = "100%";
    mc.style.display = "block";
    l.style.display = "block";
}
mc.onclick = () => {
    mnbar.style.display = "block";
    n.style.height = "10%";
    mc.style.display = "none";
    l.style.display = "none";
}

console.log(w);
if (w <= 650) {
    l.onclick = () => {
        mnbar.style.display = "block";
        n.style.height = "10%";
        mc.style.display = "none";
        l.style.display = "none";
    }
}
