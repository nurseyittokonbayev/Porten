jQuery(document).ready(function() {
    var btn = $('#button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '1000');
    });
});

document.querySelector('.burger__active').addEventListener('click',(e) =>{
    e.preventDefault()
    document.querySelector('.media__menu').classList.toggle('burger')
    document.querySelector('.burger__active').classList.toggle('burger__btn')
    document.querySelector('.burger__active')
})