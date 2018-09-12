$(document).ready(function() {

  /******** Homepage Carousel - All Photos *********/
  var olapicEndpoint = "https://photorankapi-a.akamaihd.net/customers/216892/media/recent?auth_token=f7f217fadcb8dad0bab9395c689114b74d48dbb84aa6fba32c1aa71c0a95f5e1&version=v2.2&wrap_responses=1&count=20";

  $.ajax({
    dataType: "json",
    url: olapicEndpoint,
    type: "GET",
    data: {
      format: "json"
    },
    success: function(data) {
      mediaArray = data.data._embedded.media;


      // Loop through the mediaArray
      for (x=0; x < mediaArray.length; x++) {
        var mediaItem = mediaArray[x];
        var olapicImage = mediaItem.images.mobile;

        $(".owl-carousel").append("<div class='item olapic-image'><img src='" + olapicImage + "'></div>");
      };

      // Set up Owl Carousel
      $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        touchDrag: true,
        nav: true,
        navText: ["<i class='arrow left'></i>", "<i class='arrow right'></i>"],
        dots: false,
        video: true,
        slideBy: 'page',
        navSpeed: 150,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 150,
        responsive: {
          0: {
            items:1,
            center:true
          },
          414: {
            items: 2
          },
          550: {
            items:3
          },
          1000: {
            items:4
          }
        }
      });
    },
    error: function(error){
      console.log(error);
    }
  });
});
