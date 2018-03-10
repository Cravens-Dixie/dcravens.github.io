var requestURL = 'http://api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

var requestURL2 = 'http://api.wunderground.com/api/e49b6d60400b4e2f/forecast/q/MN/Franklin.json';
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2, true);
request2.send();

request.onload = function() {
    var franklinWeather = JSON.parse(request.responseText);
    var temp = franklinWeather.current_observation.temp_f;
    var currCond = franklinWeather.current_observation.weather;
    var windMPH = franklinWeather.current_observation.wind_mph;
    var precip = franklinWeather.current_observation.precip_today_in;
    var windchill = franklinWeather.current_observation.windchill_f;
    console.log(franklinWeather);
    document.getElementById("tempHi").innerHTML = temp;
    document.getElementById("currentconditions").innerHTML = currCond;
    document.getElementById("weather_icon").src = franklinWeather.current_observation.icon_url;
    document.getElementById("windSp").innerHTML = windMPH;
    document.getElementById("precip").innerHTML = precip;
    document.getElementById("windchill").innerHTML = windchill;
    //document.getElementById("frcst").innerHTML = franklinWeather.current_observation.forecast_url;
}

request2.onload = function() {
    var franklinWeather = JSON.parse(request2.responseText);
    console.log(franklinWeather);
    document.getElementById("frcst").innerHTML = franklinWeather.forecast.txt_forecast;

}
