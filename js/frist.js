$(document).ready(function(){
  //jquery Run
    $('.bannerSlider').slick({
      prevArrow: "#bannerLeftArrow",
      nextArrow: "#bannerRightArrow",
      dots: true,
      dotsClass: ` slider-dots`,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  //  count//
  const { counterUp } = window.counterUp

  const el = document.querySelector( '.counter' )

  // Start counting, typically you need to call this when the 
  // element becomes visible, or whenever you like.
 .counter( el, {
    duration: 5000,
    delay: 16,
 } )

 //search start//
    $('.searchIcon').click(function(){
      $('.searchBox').addClass('active')
    })
   
   $('.closeSearch').click(function(){
    $('.searchBox').removeClass('active')
   })

   

})



$('.sliderShop').slick({
      slidesToShow: 6,
     autoplay: true,
     autoplaySpeed: 1000,
     arrows: false
   
   })


   $('.productThumbSlider').slick({
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    // asNavFor: ".productGallerySlide",
   })

   $('.productGallerySlider').slick({
    slidesToShow: 1,
    asNavFor: ".productThumbSlider",
    arrows: false,
   })

   





