
$(document).ready(function () {
  $('#breadcrumb').hide();
  var userVal = $("#term").keyup(function() {
    return $(this).val();
  });
  $('#myGet').click(function () {
    console.log(userVal.val());
    $.ajax({
  url: "http://api.sandbox.yellowapi.com/FindBusiness/?what=Hotels&where=" + userVal.val() + "&pgLen=15&pg=2&dist=1&fmt=JSON&lang=en&UID=rrtt4&apikey=nnxmz929eaa6wwmz3tw7rw7a",
  dataType:"json",
  success:function(results) {
    $("#breadcrumb").empty();
    for( var i = 0; i < results.listings.length; i++) {
      //console.log(results.listings[i].name +  ", " + results.listings[i].address.city);
      $('#breadcrumb').append( $('<li></li>', {
        'text': results.listings[i].name +  ", " + results.listings[i].address.city + ", " + results.listings[i].address.prov
      }) );
    }
    
  }
  });
  })
});

/*function definition

   var getPoster = function(){

        //Grab the movie title and store it in a variable

        var film = $('#term').val();

         //Check if the user has entered anything

         if(film == ''){

            //If the input field was empty, display a message

            $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");
/*http://api.sandbox.yellowapi.com/FindBusiness/?what=Restaurants&where=Toronto&pgLen=5&pg=1&dist=1&fmt=JSON&lang=en&UID=rrtt4&apikey=nnxmz929eaa6wwmz3tw7rw7a*/