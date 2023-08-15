$(document).ready(function() {
    $("header .sticky-menu .navbar .collapse .btn-c").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    var button = $("#buttonCt a");
    var countdown = 10;
    var timer = setInterval(function() {
      countdown--;
      button.text("Open in " + countdown + " seconds");
      if (countdown <= 0) {
        clearInterval(timer);
        button.text("Buy Now!");
      }
    }, 1000);

    $("#icScrollTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
      });

    $(window).on("scroll", function () {
        const scrollY = window.scrollY;
        if (scrollY < 200) {
          $("#icScrollTop").removeClass("ic-scrollTop-show");
        } else {
          $("#icScrollTop").addClass("ic-scrollTop-show");
        }
    
        // els.forEach((e) => {
        //   const top = e.offsetTop - 200;
        //   const height = e.offsetHeight;
        //   const id = e.getAttribute("id");
        //   if (scrollY >= top && top + height >= scrollY) {
        //     links.forEach((e, i) => {
        //       e.classList.remove("active");
        //       document
        //         .querySelector(`header nav a[href="#${id}"]`)
        //         ?.classList.add("active");
        //       if (e.getAttribute("id") === "cvalue") {
        //         console.log("alo ha");
        //       }
        //     });
        //   }
        // });
      });


    $(".card-header").click(function(){
        // self clicking close
        if($(this).next(".card-body").hasClass("active")){
          $(this).next(".card-body").removeClass("active").slideUp()
         $(this).children("span").removeClass("fa-minus").addClass("fa-plus")	
        }
        else{
        $(".card .card-body").removeClass("active").slideUp()
        $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
        $(this).next(".card-body").addClass("active").slideDown()
         $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
       }
    })

});