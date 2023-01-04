window.onload = function(){
    let minusBtn = document.querySelector("#left");
    let plusBtn = document.querySelector("#right");
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        
        let i;
        let slides = document.getElementsByClassName("videoWrapper");

        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }

    minusBtn.addEventListener("click", function() {
        showSlides(slideIndex += -1);
    });
    plusBtn.addEventListener("click", function() {
        showSlides(slideIndex += 1);
    });
}

