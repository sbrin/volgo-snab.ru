if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

$(document).ready(function(){
    
    $('.carousel').carousel();
    
    $('.request-price button').click(function(){
        $('#popup_overlay').fadeIn();
        $('.overlay_wrapper').fadeIn();
        $('.form').fadeIn();
        $('#af_message').val('Интересует стоимость товара "' + $('.item__title').text() + '"' );
    })
    
    $('#popup_overlay, .form-close').click(function(){
        $('#popup_overlay').fadeOut();
        $('.success').fadeOut();
        $('.overlay_wrapper').fadeOut();
    });

    
    $('.form .reset').click(function(){
        $('.ajax_form').clearForm();
    });
    
    $('#af_phone').mask('####################');
});
    