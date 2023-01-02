$(function(){
    new WOW().init();

    $(window).on('load', function(){
        $(".loader").hide();
    });

    // $(".partner_caller").on('click', function(){
    //     if ($(this).find('input').is(":checked")) {
    //         $(".service_in_cont").hide();
    //         $(".contact_message").attr("placeholder", "Talk to us");
    //     } else {
    //         $(".service_in_cont").show();
    //         $(".contact_message").attr("placeholder", "Tell us about your project");
    //     }
    // });
    $("#contService").on('click', function(){
        $(".service_in_cont").show();
        $(".contact_message").attr("placeholder", "Tell us about your project"); 
    });
    $("#contPartner").on('click', function(){
        $(".service_in_cont").hide();  
        $(".contact_message").attr("placeholder", "Talk to us");   
    });


    // Cycler
    var timer = setInterval(function () {
        if ($(".service_bnr_item:last-child").hasClass("active")) {
            $(".service_bnr_item:first-child").addClass("active current");
            $(".service_bnr_item:last-child").removeClass("active current");
            $(".serve_bnr_img").attr("src", $(".service_bnr_item.active").attr("data-img"));
        } else {
            $(".service_bnr_item.active").next().addClass("active current");
            $(".service_bnr_item.current").prev().removeClass("active");
            $(".service_bnr_item.current").removeClass("current");
            $(".serve_bnr_img").attr("src", $(".service_bnr_item.active").attr("data-img"));
        }
    }, 5000);
    $(".srv_bnr_item_head").click(function(){
        $(".service_bnr_item.active").addClass("leaveActive");
        $(this).parent().addClass("active current");
        $(".service_bnr_item.leaveActive").removeClass("active leaveActive");
        $(".service_bnr_item.current").removeClass("current");
        $(".serve_bnr_img").attr("src", $(".service_bnr_item.active").attr("data-img"));
        clearInterval(timer);
        timer = setInterval(function () {
            if ($(".service_bnr_item:last-child").hasClass("active")) {
                $(".service_bnr_item:first-child").addClass("active current");
                $(".service_bnr_item:last-child").removeClass("active current");
                $(".serve_bnr_img").attr("src", $(".service_bnr_item.active").attr("data-img"));
            } else {
                $(".service_bnr_item.active").next().addClass("active current");
                $(".service_bnr_item.current").prev().removeClass("active");
                $(".service_bnr_item.current").removeClass("current");
                $(".serve_bnr_img").attr("src", $(".service_bnr_item.active").attr("data-img"));
            }
        }, 5000);
    })
})