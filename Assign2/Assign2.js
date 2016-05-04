$(document).ready(function(){
	var img = $('img');
	var description = $('#desc');
	var backgrounds = new Array(
		  "Imgs/img0.jpg"
		, "Imgs/img1.jpg"
		, "Imgs/img2.jpg"
		, "Imgs/img3.jpg"
		, "Imgs/img4.jpg"
		, "Imgs/img5.jpg"
		, "Imgs/img6.jpg"
		, "Imgs/img7.jpg"
		, "Imgs/img8.jpg"
		, "Imgs/img9.jpg"
	);
	var descrips = new Array(
		  "Sun Set and Sea"
		, "Amsterdam Fields"
		, "imgFarm House Beauty"
		, "Color House Venice"
		, "Lavendar Beauty"
		, "Blue Snow Island"
		, "Water Fall"
		, "Yellow Forest"
		, "Beauty Rail Track"
		, "Voilet Sea Shore"

	);
	var current = 0;
	function changeBg(){
 	   var src = backgrounds[current]; 
 	   $("img").fadeOut(300, function() {
           	img.attr("src",src);
		img.attr("alt", descrips[current]);
		description.text(descrips[current]);
    	   }).fadeIn(300);
	   //var src = backgrounds[current];   
	   //img.attr("src", src);
	   //img.attr("alt", descrips[current]);  
	   //description.text(descrips[current]);
	}
	$('#left').click(function(){
	  current--;
	  current = Math.max(0,current);
	  changeBg();
	});

	$('#right').click(function(){
	  current++;
	  current = Math.min(9,current);
	  changeBg();
	});

	$('button').click(function(){
	  var id = $(this).attr('id');
	  current = parseInt(id);
	  changeBg();
	});

});
