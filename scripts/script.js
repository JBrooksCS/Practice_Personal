
/*
var element = document.getElementById('wheel');
element.style.opacity = "0.5";
*/
/*
$(window).scroll(function () {
    var theta = ($(window).scrollTop() /  Math.PI / 10);
    $('#wheel').css({ transform: 'rotate(' + theta + 'rad)' });
    theta *= 10;
    $('#wheel').css({ filter: 'hue-rotate(' + theta + 'rad)' });
    $('#wheel').css({ opacity: 0.5 });
});



$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('#wheel').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
      }
    });
  });
*/
  $(window).scroll(function () {
    var theta = ($(window).scrollTop() /  Math.PI / 10);
    console.log(theta);
    //$('#wheel').animate({ up: theta }); 
    $('#wheel').css({ transform: 'rotate(' + theta + 'rad)' });
    var hue = theta *= 5;
    $('#wheel').css({ filter: 'hue-rotate(' + theta + 'rad)' });
    theta = 50 - theta;
    $('#wheel').css({ filter: 'blur(' + theta + 'px)' });  
    
     

});

/* opacity as scroll
$('#wheel').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 1 - (elementHeight - scrollTop) / elementHeight;
    }
  });
*/
