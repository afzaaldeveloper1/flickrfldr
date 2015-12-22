$(document).ready() {
    var main = "http://api.flickr.com/services/rest/?";
    var meth = &method=flickr.places.find;
    var apikey = "12afca62d7467986169c32929d89ba2b";
    var uid = jujujaja1;
    var fullUrl = main+meth+"&api_key=["+apikey+"]&user_id=	 ["+uid+"]&format=json&per_page=500";
  
    $.ajax ({
    	type: "GET",
    	url: fullUrl,
    	success: function(data) {
    		$.each(data, function(i, data) {
        	$(".gallery").append('<div>');//dont know what to put here
        });
    	};
    });
    
	$('.btn').on('click', function(e) {
        e.preventDefault();
	    $.ajax ({
            type: "POST",
    	    url: fullUrl,
            data: $("#address").val(),
            success: function(data) {
      	    $("#gallery").append('<div>');//dont know what to put here
            }
        });
    });
}