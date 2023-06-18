$(document).ready(function(){
    var currentProject = ""; // variable to store the ID of the currently shown project
    
    // Button 1
    $("#home").click(function(){
      if (currentProject !== ".home") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".home";
        $(currentProject).show("fast"); // show the new project
      }
    });
     
    // Button 2
    $("#counters").click(function(){
      if (currentProject !== ".counters") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".counters";
        $(currentProject).show("fast"); // show the new project
      }
    });

    // Button 3
    $("#play").click(function(){
      if (currentProject !== ".play") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".play";
        $(currentProject).show("fast"); // show the new project
      }
    });
 
    // Hide all content sections
    $(".counters, .play").hide();
    
}); 