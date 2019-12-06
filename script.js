var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDay);


$("#search").click(function () {
    var location = $("#location").val();
    weatherInfo(location)
});


function weatherInfo(location) {
    var queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + location + "&key=26ec32875e6342549b54ba0964115b05";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (responseWeatherInfo) {
        $("temperature")
        console.log(responseWeatherInfo)
        for (let i = 0; i < 5; i++) {
            //let tempC = responseWeatherInfo.data[i]temp;
            //let tempF = (9/5)*tempC + 32
            $(".temperature").text("Temperature " + responseWeatherInfo.main.temp + " F")
            $(".humidity").text("Humidity " + responseWeatherInfo.main.humidity + "%")
            $(".windSpeed").text("Wind Speed " + responseWeatherInfo.wind.speed + "mph")

        }
        // $.each(responseWeatherInfo.data[i],function() {
        // })
    })
}