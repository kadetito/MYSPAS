
	/*SIDEBAR*/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
	


	









$(document).ready(function() {
  $('a.panels').click(function() {

    $('a.panels').removeClass('selected');
    $(this).addClass('selected');

    current = $(this);

    $('#wrapper').scrollTo($(this).attr('href'), 800);

    return false;
  });

  $(window).resize(function() {
    resizePanel();
  });

});

function resizePanel() {

  width = $(window).width();
  height = $(window).height();

  mask_width = width * $('.item').length;

  $('#debug').html(width + ' ' + height + ' ' + mask_width);

  $('#wrapper, .item').css({
    width: width,
    height: height
  });
  $('#mask').css({
    width: mask_width,
    height: height
  });
  $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}


