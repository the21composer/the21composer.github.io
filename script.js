$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
    jQuery("a.link").click(function () {
        elementClick = jQuery(this).attr("id");
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
    });

    jQuery(".download-btn,.soc-btn").click(function () {
        elementClick = jQuery(this).attr("id");
        location.href = elementClick;
    });

    jQuery("#cover-type").prop('checked', true);
    
    jQuery("#cover-type").on("change", function(){
        if(jQuery("#cover-type").prop("checked")){
            jQuery(".cover").show(); 
        }
        else{
            jQuery(".cover").hide();
        };
    });
});