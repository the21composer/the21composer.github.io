$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
    jQuery("a.link").click(function () {
        elementClick = jQuery(this).attr("id")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
    });
});