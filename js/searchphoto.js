$(document).ready(function() {
	$('.btn').on('click', function(e) {
    e.preventDefault();
    
    var address = $("#address").val();
    var urlgog= "https://maps.googleapis.com/maps/api/geocode/json?address=";
    urlgog += "key=AIzaSyB2GSm2xmpapNi7O6xAE2mMpb1PSWNiNFA";
    urlgog += "&address=" + address;
   
		$.ajax ({
    	type: "GET",
    	url: urlgog,
      success: getInfoGoog();
    });
   }); 
	
  function getInfoGoog(response) {

    var geoLocation = response.results[0].geometry.location;
    var flickrApiUrl = "https://api.flickr.com/services/rest/?";
    var flickrApiParams = {
      api_key: "5d0b99b598780adb1ce7f682110a03e6",
      method: "flickr.photos.search",
      format: "json",
      nojsoncallback: 1,
      lat: geoLocation.lat,
      lon: geoLocation.lng
    }
    
    $.ajax({
      type: "GET",
      url: flickrApiUrl + $.param(flickrApiParams),
      success: flickrGetPhoto()
    });
  }
  
  function flickrGetPhoto(picture) {
    var Photos = picture.photos.photo;
    for(var i = 0; i < Photos.length; i++) {
      var newPic = buildThumbnail(lPhotos[i]);
      $("#gallery").append(newPic);
    }
  }
});