const btn = document.querySelector('.btn');
btn.onclick = randomBgColor;
const txt = document.querySelector('.textarea');
txt.spellcheck = false;

function randomBgColor() {
    document.body.innerHTML = '';
    var rmin = JSON.parse(txt.value).r_min;
    var rmax = JSON.parse(txt.value).r_max;
    var gmin = JSON.parse(txt.value).g_min;
    var gmax = JSON.parse(txt.value).g_max;
    var bmin = JSON.parse(txt.value).b_min;
    var bmax = JSON.parse(txt.value).b_max;
    if (JSON.parse(txt.value).isInterval == 'true') {
        setInterval(
        function randomBgColor() {
            var r = Math.floor(Math.random() * (rmax - rmin + 1) + rmin);
            var g = Math.floor(Math.random() * (gmax - gmin + 1) + gmin);
            var b = Math.floor(Math.random() * (bmax - bmin + 1) + bmin);
            var bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            document.body.style.background = bgColor;
        }, 1000)
    }
    var r = Math.floor(Math.random() * (rmax - rmin + 1) + rmin);
    var g = Math.floor(Math.random() * (gmax - gmin + 1) + gmin);
    var b = Math.floor(Math.random() * (bmax - bmin + 1) + bmin);
    var bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.body.style.background = bgColor;
}
