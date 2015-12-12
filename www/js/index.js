$(document).on('deviceready', function() {

      // Initialize collapse button
      $(".button-collapse").sideNav();
      
      $(".dia_menu_clicat").click(function(){
        
            var dia_clicat = $(this).attr('dia');
            alert("Clicat el " + dia_clicat)
      
      });

});
