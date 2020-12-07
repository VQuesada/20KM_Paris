/*+++++++Animación foto++++++*/
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("widthAdapt").style.-webkitAnimation = "leftToRight 4s ease-in";
    }