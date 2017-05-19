(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        $(".home_page_slide").owlCarousel({
            items:1,
            nav:true,
            navText:["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
            loop:true,
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	