$(document).on('deviceready', function() {

    //enabling zoom control
     cordova.plugins.ZoomControl.ZoomControl("true");
     // enabling built in zoom control
     cordova.plugins.ZoomControl.setBuiltInZoomControls("true");
     // enabling display zoom control
     cordova.plugins.ZoomControl.setDisplayZoomControls("true");

    // Initialize collapse button
    /*
      $(".button-collapse").sideNav();
      
       
      $("#nav_lateral").click(function(){
        
            $(".button-collapse").sideNav("show").css("z-index", 1000000);
      
      });
      
      
      $(".dia_menu_clicat").click(function(){
        
            var dia_clicat = $(this).attr("dia");
            alert("Clicat el " + dia_clicat);
      
      });

      $(".Diumenge").click(function(){
        
            var dia_clicat = $(this).attr("dia");
            alert("Clicat el " + dia_clicat);
      
      });      
   */
   
});
