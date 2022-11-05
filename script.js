const mnbar = document.getElementById("menu");
const mc = document.getElementById("mc");
const l = document.getElementById("links");

mnbar.onclick = () => {
    mnbar.style.display = "none";
    mc.style.display = "block";
    l.style.display = "block";
}
mc.onclick = () => {
    mnbar.style.display = "block";
    mc.style.display = "none";
    l.style.display = "none";
}
