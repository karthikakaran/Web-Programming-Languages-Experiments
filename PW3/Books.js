$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "Books.xml",
		dataType: "xml",
		success: function(xml) {
			$(xml).find('book').each(function(){
				var title = $(this).find('title').text();
				var year = $(this).find('year').text();
				var price = $(this).find('price').text();
				var category =  $(this).attr('category') ;
				$tr = $("<tr></tr>").appendTo("table");
				$("<td></td>").html(title).appendTo($tr);var authorList="";
			        var authorList;
				$(this).find('author').each(function( index ) {
  					authorList = authorList +"," + $( this ).text();
				});
				authorList = authorList.slice(1);
				$("<td></td>").html(authorList).appendTo($tr);
				$("<td></td>").html(year).appendTo($tr);
				$("<td></td>").html(price).appendTo($tr);
				$("<td></td>").html(category).appendTo($tr);
			});
		},
		error: function() {
			alert("The Book.xml file could not be processed correctly.");
		}
	});
});
