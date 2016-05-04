$(document).ready(function() {
	$( "<span></span>" ).insertAfter( "#username" ).hide();
	$( "<span></span>" ).insertAfter( "#password" ).hide();
	$( "<span></span>" ).insertAfter( "#email" ).hide();
$( "#username" ).focus(function() {
  if($(this).val().length == 0){
  	$(this).next("span").removeClass("error ok").addClass("info");
	$(this).next("span").text("Username should have only letter");
  }
  $(this).next("span").show();
});
$( "#password" ).focus(function() {
  if($(this).val().length == 0){
  	$(this).next("span").removeClass("error ok").addClass("info");
	$(this).next("span").text("Password should have atleast 8 characters");
  }
  $(this).next("span").show();
});
$( "#email" ).focus(function() {
  if($(this).val().length == 0){
  	$(this).next("span").removeClass("error ok").addClass("info");
	$(this).next("span").text("Email should have @ symbol");
  }
  $(this).next("span").show();
});
$( "#username" ).blur(function() {
  if($("#username").val().length == 0)
  	$(this).next("span").hide();
});
$( "#password" ).blur(function() {
  if($("#password").val().length == 0)
  	$(this).next("span").hide();
});
$( "#email" ).blur(function() {
  if($("#email").val().length == 0)
  	$(this).next("span").hide();
});
$( "#username" ).keyup(function() {
  var regex = /^[a-zA-Z]*$/;
  if (regex.test($("#username").val())==false) {
     $(this).next("span").removeClass("info ok").addClass("error");
     $(this).next("span").text("Error"); 	   
  }
  else{
     $(this).next("span").removeClass("error info").addClass("ok");
     $(this).next("span").text("Ok"); 	   
  }
  if($(this).val().length == 0){
  	$(this).next("span").removeClass("error ok").addClass("info");
	$(this).next("span").text("Username should have only letter");
        $(this).next("span").show();
  }
});
$( "#password" ).keyup(function() {
  var myLength = $("#password").val().length;
  if(myLength < 8){
     $(this).next("span").removeClass("info ok").addClass("error");
     $(this).next("span").text("Error"); 	   
  }
  else{
     $(this).next("span").removeClass("error info").addClass("ok");
     $(this).next("span").text("Ok"); 	   
  }
  if($(this).val().length == 0){
  	$(this).next("span").removeClass("error ok").addClass("info");
	$(this).next("span").text("Password should have atleast 8 characters");
        $(this).next("span").show();
  }
});
$( "#email" ).keyup(function() {
  if($("#email").val().indexOf("@") < 0){
     $(this).next("span").removeClass("info ok").addClass("error");
     $(this).next("span").text("Error"); 	   
  }
  else{
     $(this).next("span").removeClass("error info").addClass("ok");
     $(this).next("span").text("Ok"); 	   
  }
  if($(this).val().length == 0){
  	$(this).next("span").removeClass("error ok").addClass("info");
	$(this).next("span").text("Email should have @ symbol");
        $(this).next("span").show();
  }
});
});

