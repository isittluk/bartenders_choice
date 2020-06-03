$(".menu").click(function() {
    console.log('menu was clicked');
});

var checkExist = setInterval(function() {
    if ($('#card__container').length) {
       $(".drinks__btn").click(function() {
           console.log('hello');
           $('.card__card').toggleClass('is-flipped');
       });
       clearInterval(checkExist);
    }
 }, 100); // check every 100ms