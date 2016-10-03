var counter = 0;

$(function() {

  /*  $("button#search").click(function(ev) {
        var zipCode = $("#searchBarText").val();
        getLonLatForMap(zipCode);
        $("#searchBarText").val("");
    });

    $(document).on('click', 'button#remove', function() {
        var parentDiv = $(this).parent();
        parentDiv.remove();
    });


});//onready function

var getLonLatForMap = function(zipCode) {
    var googleKey = "&key=AIzaSyA66cWKVgfjelpn0p6a5pfNShURwhu8Fyk";
    var id = "map" + counter;
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + googleKey).done(function(data) {
        var latitude = data.results[0].geometry.location.lat;
        var longitude = data.results[0].geometry.location.lng; 
        var cityState = data.results[0].formatted_address;

        var template = $("#template").html();

        template = template.replace("@@cityState@@", cityState);
        template = template.replace("@@latitude@@", Number(latitude));
        template = template.replace("@@longitude@@", Number(longitude));
        template = template.replace("@@ID1@@", id);
        template = template.replace("@@ID2@@", id);

        $("#maps").append(template);
        counter++;

    });
}

*/
document.getElementById('zoom-to-area').addEventListener('click', function() {
          zoomToArea();
        });

 $("#zoomToArea").on("click"); function zoomToArea(){
        var geocoder = new google.maps.Geocoder();
        var address = document.getElementById('zoom-to-area-text').value;
        if (address == '') {
          window.alert('You must enter an area, or address.');
        } else {
          geocoder.geocode(
            { address: address,
                }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
              } else {
                window.alert('We could not find that location - try entering a more' +
                    ' specific place.');
              }
                });

        
 


}
}

});
