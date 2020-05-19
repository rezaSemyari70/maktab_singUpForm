$(document).ready(function(){
  $(".btn").click(function(){
    $(".para").toggle();
   let text = $(".para").is(':visible') ? 'less' : 'more';
   $(".btn").text(text)
  });
});


$(document).ready(function () {
  $(".btnRed").click(function(){
    $(".chengeBackColor").css("background-color", "red");
  });
  $(".btnBlue").click(function(){
    $(".chengeBackColor").css("background-color", "blue");
  });
  $(".btnGreen").click(function(){
    $(".chengeBackColor").css("background-color", "Green");
  });
  $(".btnYellow").click(function(){
    $(".chengeBackColor").css("background-color", "yellow");
  });
  
})