//Franklin Weather conditions from WUnderground
var stringBuilder = '//api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/' + city + '.json';
var requestURL;

// Get the city passed in from HTML
switch(city) {
    case "franklin":
        requestURL = '//api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/MN/Franklin.json';
        requestURL2 = '//api.wunderground.com/api/e49b6d60400b4e2f/forecast/q/MN/Franklin.json';
        break;
    case "greenville":
        requestURL = '//api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/TX/Greenville.json';
        requestURL2 = '//api.wunderground.com/api/e49b6d60400b4e2f/forecast/q/TX/Greenville.json';
        break;
    case "springfield":
        requestURL = '//api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/OR/Springfield.json';
        requestURL2 = '//api.wunderground.com/api/e49b6d60400b4e2f/forecast/q/OR/Springfield.json';
        break;
}

// Send conditions request
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

// Send forecast request
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2, true);
request2.send();

// Post conditions response data to HTML
request.onload = function() {
    var cityWeather = JSON.parse(request.responseText);
    var temp = cityWeather.current_observation.temp_f;
    var currCond = cityWeather.current_observation.weather;
    var windMPH = cityWeather.current_observation.wind_mph;
    var precip = cityWeather.current_observation.precip_today_in;
    var windchill = cityWeather.current_observation.windchill_f;
    console.log(cityWeather);
    document.getElementById("tempHi").innerHTML = temp;
    document.getElementById("currentconditions").innerHTML = currCond;
    document.getElementById("weather_icon").src = cityWeather.current_observation.icon_url;
    document.getElementById("windSp").innerHTML = windMPH;
    document.getElementById("precip").innerHTML = precip;
    document.getElementById("windchill").innerHTML = windchill;
    //document.getElementById("frcst").innerHTML = cityWeather.current_observation.forecast_url;
}

// Post forecast response data to HTML
request2.onload = function() {
    var cityWeather = JSON.parse(request2.responseText);
    console.log(cityWeather);
    document.getElementById("frcst").innerHTML = cityWeather.forecast.txt_forecast.forecastday[0].fcttext;

}
