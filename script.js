// Display current date
var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDay);

// On click, searches based on city or zip code.
$("#search").click(function () {
    var location = $("#location").val();
    weatherInfo(location);
});

// Accesses weather API data base
function weatherInfo(location) {
    var queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + location + "&key=26ec32875e6342549b54ba0964115b05&units=I";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (responseWeatherInfo) {
        $("temperature")
        console.log(responseWeatherInfo);
        // Loop through the first 5 arrays to display the next 5 days of the weather
        for (let i = 0; i < 5; i++) {
            $(".temperature").text("Temperature: " + responseWeatherInfo.data[i].temp + " F");
            $(".humidity").text("Humidity: " + responseWeatherInfo.data[i].rh + "%");
            $(".windSpeed").text("Wind Speed: " + responseWeatherInfo.data[i].wind_spd + "mph");
            $(".uv").text("UV Index: " + responseWeatherInfo.data[i].uv);

        }
        // Print each day's weather
        $.each(responseWeatherInfo.data[i],function() {
        })
    })
}