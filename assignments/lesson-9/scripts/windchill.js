var temp1 = parseInt(document.getElementById("tempHi").innerHTML);
var temp2 = parseInt(document.getElementById("tempLo").innerHTML);
var tempF = (temp1 + temp2) / 2;
var speed = parseInt(document.getElementById("windSp").innerHTML);
var speedFactor = Math.pow(speed, 0.16);
var windChillFac = parseInt(35.74 + (0.6215 * tempF) - (35.75 * speedFactor) + (0.4275 * tempF * speedFactor));

document.getElementById("windchill").innerHTML = windChillFac + "&deg;F";
