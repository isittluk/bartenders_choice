$(".menu").click(function() {
    console.log('menu was clicked');
});

var checkExist = setInterval(function() {
    if ($('#card__container').length) {
       $(".drinks__btn").click(function() {
           console.log('element is loaded');
       });
       clearInterval(checkExist);
    }
 }, 100); // check every 100ms