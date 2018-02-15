
$( document ).ready(function() {
    console.log( "ready!" );

var button = $('<button>')
console.log('working')

$('#Addbutton').click(function(){
console.log('is it working?',$('#SpaceInput').val());
$.ajax({
  method: "GET",
  url: "https://api.giphy.com/v1/gifs/search?api_key=c4HPX8b7O27dz3cpHjTjafwbBdcExkOJ&q=Space&limit=25&offset=0&rating=G&lang=en",
  success: function(data){
     console.log('things from api!!!', data); 
 var img = $()


 $( "#searchButton" ).click(function() {
  // do ajax call here to grab gifs
  //you want to grab the gifs every time we click the button to search 
});

  }
});


});






});