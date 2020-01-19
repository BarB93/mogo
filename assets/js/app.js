$(function() {

        var header = $("#header"),
            introH = $("#intro").innerHeight(),
            scrollOffset = $(window).scrollTop(),
            headerInnerHeight = $(".header__inner").outerHeight(true);

    /*Fixed Header*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

         checkActiveNav(scrollOffset);

    });

    function checkScroll(scrollOfset) {

        if(scrollOffset >= introH - headerInnerHeight) {
            header.addClass("fixed");

        }else header.removeClass("fixed");
    }

    function checkActiveNav(scrollOffset) {
         var headerHeigth = $(".header").outerHeight(true),

             $about = $("#about").offset().top - headerHeigth ,
             $service = $("#service").offset().top - headerHeigth,
             $work = $("#work").offset().top - headerHeigth,
             $blog = $("#blog").offset().top - headerHeigth,
             $contact = $("#contact").offset().top - headerHeigth;






           if(scrollOffset >= $contact){
                $("[data-scroll]").removeClass("active");
                $("[data-scroll='#contact']").addClass("active");
           }else if(scrollOffset >= $blog ){
                $("[data-scroll]").removeClass("active");
                $("[data-scroll='#blog']").addClass("active");
           }else if(scrollOffset >= $work){
                $("[data-scroll]").removeClass("active");
                $("[data-scroll='#work']").addClass("active");
           }else if(scrollOffset >= $service ){
                $("[data-scroll]").removeClass("active");
                $("[data-scroll='#service']").addClass("active");
           }else if(scrollOffset >= $about ){
                $("[data-scroll]").removeClass("active");
                $("[data-scroll='#about']").addClass("active");
           }




    }


    /*Menu nav toggle*/
    $("#nav-toggle").on("click",function(event){
        event.preventDefault();

        var $this = $(this),
            $nav = $("#nav"),
            $header = $("#header");

        if($nav.hasClass("active")) {
            $nav.removeClass("active");
            $this.removeClass("active");




        } else {
            $nav.addClass("active");
            $this.addClass("active");


        }
    });


       /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
           event.preventDefault();

         var $this = $(this),
             blockId = $(this).data('scroll'),
             headerInnerHeight = $(".header__inner").outerHeight(true),
             $nav = $("#nav"),
             $navToggle = $("#nav-toggle"),
             blockOffset = $(blockId).offset().top - headerInnerHeight ;

         $nav.removeClass("active");
         $navToggle.removeClass("active");


        $("#nav a").removeClass("active");
        $this.addClass("active");

       $("html, body").animate({
           scrollTop: blockOffset
       },500);

    });


    /*Wedo accordion*/
    $("[data-collapse]").on("click", function(event){

        event.preventDefault();

        var $this = $(this),
             blockId = $(this).data('collapse'),
             blockContent = $(blockId);




        if($this.hasClass("active")) {
            $this.removeClass("active");
        }
        else {
            $this.addClass("active");
        }



    });


     /*Reviews(slider)*/
    
    // section--grey
    $(".slick").slick({
        arrows:true,

    });


    // section--rev
 
    // $(".section--rev .reviews").slick();

















});
