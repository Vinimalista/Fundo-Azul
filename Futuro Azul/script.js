document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const carouselImages = document.querySelectorAll(".carousel img");
    let index = 0;

    function showNextImage() {
        index = (index + 1) % carouselImages.length;
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(showNextImage, 3000);

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Obrigado pela sua mensagem, ${name}! Em breve entraremos em contato através do email: ${email}.`);
        form.reset();
    });
});
