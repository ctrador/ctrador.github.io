$(function() {

(function(){
    $("button").click(function(){
        $("p:first").replaceWith("Hello world!");
    });
});

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
      

})
//AIzaSyCm8VFnVnwN-h2LcC2jAiDbua0oNXj0vEA

content_copy
