var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);



function weatherInfo(){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=0a87b047396d3f1e1b0d1c65b1f0e606";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("temperature")
    }
}