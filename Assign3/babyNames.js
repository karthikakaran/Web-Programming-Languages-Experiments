$(document).ready(function(){
     for(var i = 2004; i <= 2013; i++) {
          $("#year")
         .append($("<option></option>")
         .attr("value",i)
         .text(i)); 
     }
    
    $("#target").submit(function(e){
        e.preventDefault();
        e.stopPropagation(); 
        $("p").not(".bg-1").empty();
        var yearVal = $("#year").val();
        $.ajax({
            type: "post",
            url: "babyNames.php",
            data: {year:  yearVal},
            dataType: "json",
            success: function(resp) {
               for(var i = 0;i<5;i++) 
                  $(".rank").append($("<p></p>").text(resp[i]['ranking']));
               for(var i = 0;i<resp.length;i++){
                  if(resp[i]['gender'] == 'm'){
                    $(".male").append($("<p></p>").text(resp[i]['name']));
                   // $(".rank").append($("<p></p>").text(resp[i]['ranking']));
                  }
                  else{
                  //  $(".rank").append($("<p></p>").text(resp[i]['ranking']));
                    $(".female").append($("<p></p>").text(resp[i]['name']));
                  }
               }     
            },
            error: function() {
                alert("Baby names file could not be processed correctly.");
            }
        }) ;
    });
});
