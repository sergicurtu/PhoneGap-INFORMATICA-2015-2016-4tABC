$(document).on('deviceready', function() {

      // Initialize collapse button
      $(".button-collapse").sideNav();
      
      
      $("#nav_lateral").click(function(){
        
            $('.button-collapse').sideNav('show');
      
      });
      
      $(".dia_menu_clicat").click(function(){
        
            var dia_clicat = $(this).attr('dia');
            alert("Clicat el " + dia_clicat);
      
      });
      
});
