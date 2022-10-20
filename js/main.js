$(function() {
    function countDown(){
        let today = new Date();
        let vDate = new Date(today.getFullYear(), 9, 31); // the month is 0-indexed
        const t = vDate.getTime() - today.getTime()

        const day = Math.floor(t / (1000*60*60*24));
        const hour = Math.floor(((t) % (1000*60*60*24)) / (1000*60*60));
        const minute = Math.floor(((t) % (1000*60*60)) / (1000*60));
        const sec = Math.floor(((t) % (1000*60)) / (1000));

        // document.getElementById('year').innerText = today.getFullYear()
        document.getElementById('day').innerText = day
        document.getElementById('hour').innerText = hour
        document.getElementById('min').innerText = minute
        document.getElementById('sec').innerText = sec

        if(t <= 0 ){
            clearTimeout(counter)
            document.querySelector('.timers').innerText = 'Chương trình đã hết hạn'
        }
    }

    setInterval(countDown ,1000)

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if ( scrollTop > 100 ) {
            $('header').css('top', 0)
        } else {
            $('header').css('top', '-100%')
        }
    });

    $(window).on('load resize', () => {
        if($(window).width() < 768) $('#banner').height($('#banner .img-mobi').height())
        else $('#banner').height($('#banner .img-desk').height())

        $('.dream-bg').height($('.dream-bg > img').height())

        if($(window).width() <= 575) {
            var flowItemHeight = 0;
            $('.flow-item').each(function() {
                if(!$(this).is(':last-child')) flowItemHeight += $(this).outerHeight();
                else flowItemHeight += 50
            });
            // console.log($(window).width())
            $('.flow-item:first-child').parent().prepend(`<span class=mobi-dash/>`).addClass('position-relative')
            $('.mobi-dash').css({
                'height': flowItemHeight-50,
                'position': 'absolute',
                'top': '25px',
                'left': '40px',
                'width': '1px',
                'border-left': '1px dashed #E62B4C',
                'padding': 0
            })
        } else {
            $('.mobi-dash').remove();
        }
    })
});
