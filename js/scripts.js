document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let slideIndices = [];

document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    slideIndices[index] = 1;
    showSlides(1, index);
});

// Next/previous controls
function plusSlides(n, no) {
    showSlides(slideIndices[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let container = document.querySelectorAll('.slideshow-container')[no];
    let slides = container.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndices[no] = 1 }
    if (n < 1) { slideIndices[no] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndices[no] - 1].style.display = "block";
}
