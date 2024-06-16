$(document).ready(function() {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Muda a imagem a cada 2 segundos
        dots: true,
        arrows: true,
    });

    $('nav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });

    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-theme');
    });

    $('.nav-toggle').on('click', function() {
        $('nav ul').toggleClass('show');
        $(this).toggleClass('open');
    });
});
