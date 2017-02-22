$(function (){
    $('input').on('blur', function () {
        if (this.value.length < 3) {
            $(this).addClass('red-frame');
        } else {
            $(this).removeClass('red-frame');
        }
    });

    $('form').on('submit', function(event) {
        var canSend = true;
        $(this).find('input').each(function () {
            if (this.value.length < 3) {
                $(this).addClass('red-frame');
                canSend = false;
            }
        });
        if (!canSend) event.preventDefault();
    });

    var flag = true;
    $('.mobile-menu').on('click', function () {
        if(flag) {
            flag = false;

            $('.main-header .nav').slideToggle(function () {
                flag = true;
            });
        }
    })
});
