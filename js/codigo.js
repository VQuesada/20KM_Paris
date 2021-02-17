window.onload = function() {
    //NAVBAR
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu-list");
    const seccion1 = document.querySelector(".seleccion1");
    const seccion2 = document.querySelector(".seleccion2");
    const seccion3 = document.querySelector(".seleccion3");
    const seccion4 = document.querySelector(".seleccion4");
    const seccion5 = document.querySelector(".seleccion5");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = () => {
        menu.classList.add("active");
        menuBtn.classList.add("hide");
        body.classList.add("disabledScroll")
    }
    cancelBtn.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledScroll")
    }
    seccion1.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledScroll")
    }
    seccion2.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledScroll")
    }
    seccion3.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledScroll")
    }
    seccion4.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledScroll")
    }
    seccion5.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledScroll")
    }

    //--CUENTA ATRAS
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "0d 0h 0m 0s";
        }
    }, 1000);


    //Dar color a la navbar al hacer scroll hacia abajo
    window.onscroll = function() {
        scrollFunction()
    };


    window.onscroll = () => {
        this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        this.scrollY < 20 ? navbar.classList.remove("cerrar") : navbar.classList.add("cerrar");
    }
}