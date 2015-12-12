$(document).on('deviceready', function() {

      // Initialize collapse button
      $(".button-collapse").sideNav();
      
      var $clicar_menu = $('.btn_menu');
	clicar_menu.on('click', function() {
	
		alert("Clicat");
		
	});	

});
