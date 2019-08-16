//Preloader

  $(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
 });

//Owl-carousel
$(function(){
   $("#team-members").owlCarousel({
      items:2,
      autoplay:true,
      smartSpeed:700,
      loop: true,
      autoplayHoverPause : true,
      nav:true,
      dots: false,
      navText:['<i class="fa fa-angle-left"</i>','<i class="fa fa-angle-right"</i>']
   });
});

//progress bar animation - //waypoint- animation on page scroll 

$(function(){

  $("#progress-elements").waypoint(function(){
    $(".progress-bar").each(function(){
        $(this).animate({width:$(this).attr("aria-valuenow") + "%"
         }, 1000);
      });  
     this.destroy();
  }, {
        offset: 'bottom-in-view'

  });

});

//Responsive Tabs

$(function(){
   $("#services-tabs").responsiveTabs({
      animation:'slide'
  });
});

//isotope-portfolio

$(window).on('load',function(){
   $("#isotope-container").isotope({
   });
   $("#isotope-filters").on('click','button', function(){
       var filterValue = $(this).attr('data-filter');
       $("#isotope-container").isotope({
          filter: filterValue
      });
      $("#isotope-filters").find('.active').removeClass('active');
      $(this).addClass('active');
   });
});

//Magnific-popup

$(function(){
   $("#portfolio-wrapper").magnificPopup({
      delegate: 'a',
      type:'image',
      gallery: {
         enabled:true
      }
   });
});

//testimonial

$(function(){
   $("#testimonial-slider").owlCarousel({
      items:1,
      autoplay:false,
      smartSpeed:700,
      loop: true,
      autoplayHoverPause : true,
      nav:true,
      dots: false,
      navText:['<i class="fa fa-angle-left"</i>','<i class="fa fa-angle-right"</i>']
   });
});

//stats

$(function(){
   $(".counter").counterUp({
      delay: 10,
      time: 2000
  });
});

//clients
$(function(){
   $("#clients-list").owlCarousel({
      items:6,
      autoplay:false,
      smartSpeed:700,
      loop: true,
      autoplayHoverPause : true,
      nav:true,
      dots: false,
      navText:['<i class="fa fa-angle-left"</i>','<i class="fa fa-angle-right"</i>']
   });
});

//google map

$(window).on('load', function () {

   // Map Variables
   var addressString = '230 Broadway, NY, New York 10007, USA';
   var myLatlng = {
       lat: 40.712685,
       lng: -74.005920
   };

   // 1. Render Map
   var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 11,
       center: myLatlng
   });

   // 2. Add Marker
   var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "Click To See Address"
  });

  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
      content: addressString
  });

  // Show info window when user clicks marker
  marker.addListener('click', function () {
      infowindow.open(map, marker);
  });

  // 4. Resize Function
  google.maps.event.addDomListener(window, 'resize', function () {

      var center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);

  });
});

$(function(){

   showHideNav();
  $(window).scroll(function(){
      showHideNav();
  });

  function showHideNav() {
   if($(window).scrollTop() > 50){
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();
  }
  else {
    $("nav").removeClass("white-nav-top");  
    $(".navbar-brand img").attr("src","img/logo/logo.png");
    $("#back-to-top").fadeOut();
   }
 }
});

$(function () {

   $("a.smooth-scroll").click(function (event) {

       event.preventDefault();

       // get section id like #about, #servcies, #work, #team and etc.
       var section_id = $(this).attr("href");

       $("html, body").animate({
           scrollTop: $(section_id).offset().top - 64
       }, 1250, "easeInOutExpo");

   });

});