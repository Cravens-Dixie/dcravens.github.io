//pricing data fro service table on services page
var requestURL = '//dcravens.github.io/assignments/final/data/servicedata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
request.onload = function() {
var tablePrices = JSON.parse(request.responseText);
var safetyCheck = tablePrices.safetyCheck;
var tuneUp = tablePrices.proTuneUp;
var tuneClean = tablePrices.proTuneUpClean;
var wheelService = tablePrices.wheelService;
var suspenService = tablePrices.suspensionService;
document.getElementById("safety").innerHTML = safetyCheck;
document.getElementById("protune").innerHTML = tuneUp;
document.getElementById("ptclean").innerHTML = tuneClean;
document.getElementById("wheel").innerHTML = wheelService;
document.getElementById("suspension").innerHTML = suspenService;

}
