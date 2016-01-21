document.body.innerHTML += require("./content.js");

document.onclick = function () {
    require.ensure(["./content2.js", "./content4.js"], function (require) {
        document.body.innerHTML += require("./content2.js");
    })
};

document.addEventListener("keyup", function (e) {
    if (e.keyCode !== 32) {
        return;
    }
    require(["./content3.js", "./content4.js"], function (content3) {
        document.body.innerHTML += content3;
    })
}, true);
