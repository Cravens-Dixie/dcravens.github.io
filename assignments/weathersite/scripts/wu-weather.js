//Franklin Weather conditions from WUnderground
var requestURL = '//api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

var requestURL2 = '//api.wunderground.com/api/e49b6d60400b4e2f/forecast/q/MN/Franklin.json';
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
    document.getElementById("frcst").innerHTML = franklinWeather.forecast.txt_forecast.forecastday[0].fcttext;

}
//Greenville Weather conditions from WUnderground

var requestURL = '//api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/TX/Greenville.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

var requestURL2 = '//api.wunderground.com/api/e49b6d60400b4e2f/forecast/q/TX/Greenville.json';
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2, true);
request2.send();

request.onload = function() {
    var greenvilleWeather = JSON.parse(request.responseText);
    var temp = greenvilleWeather.current_observation.temp_f;
    var currCond = greenvilleWeather.current_observation.weather;
    var windMPH = greenvilleWeather.current_observation.wind_mph;
    var precip = greenvilleWeather.current_observation.precip_today_in;
    var windchill = greenvilleWeather.current_observation.windchill_f;
    console.log(greenvilleWeather);
    document.getElementById("tempHi2").innerHTML = temp;
    document.getElementById("currentconditions2").innerHTML = currCond;
    document.getElementById("weather_icon2").src = greenvilleWeather.current_observation.icon_url;
    document.getElementById("windSp2").innerHTML = windMPH;
    document.getElementById("precip2").innerHTML = precip;
    document.getElementById("windchill2").innerHTML = windchill;
    //document.getElementById("frcst").innerHTML = franklinWeather.current_observation.forecast_url;
}

request2.onload = function() {
    var greenvilleWeather = JSON.parse(request2.responseText);
    console.log(greenvilleWeather);
    document.getElementById("frcst2").innerHTML = greenvilleWeather.forecast.txt_forecast.forecastday[0].fcttext;

}
//Springfield Weather conditions from WUnderground
var requestURL = '//api.wunderground.com/api/e49b6d60400b4e2f/conditions/q/OR/Springfield.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

var requestURL2 = '//api.wunderground.com/api/e49b6d60400b4e2f/forecast/q/OR/Springfield.json';
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2, true);
request2.send();

request.onload = function() {
    var springfieldWeather = JSON.parse(request.responseText);
    var temp = springfieldWeather.current_observation.temp_f;
    var currCond = springfieldWeather.current_observation.weather;
    var windMPH = springfieldWeather.current_observation.wind_mph;
    var precip = springfieldWeather.current_observation.precip_today_in;
    var windchill = springfieldWeather.current_observation.windchill_f;
    console.log(springfieldWeather);
    document.getElementById("tempHi3").innerHTML = temp;
    document.getElementById("currentconditions3").innerHTML = currCond;
    document.getElementById("weather_icon3").src = springfieldWeather.current_observation.icon_url;
    document.getElementById("windSp3").innerHTML = windMPH;
    document.getElementById("precip3").innerHTML = precip;
    document.getElementById("windchill3").innerHTML = windchill;
    //document.getElementById("frcst").innerHTML = franklinWeather.current_observation.forecast_url;
}

request2.onload = function() {
    var springfieldWeather = JSON.parse(request2.responseText);
    console.log(springfieldWeather);
    document.getElementById("frcst3").innerHTML = springfieldWeather.forecast.txt_forecast.forecastday[0].fcttext;

}
