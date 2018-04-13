//pricing data fro service table on services page
var requestURL = 'data/servicedata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
request.onload = function() {

    alert(request.responseText);

    var tablePrices = JSON.parse(request.responseText);
    var safetyCheck = tablePrices.prices[0];
    var tuneUp = tablePrices.prices.proTuneUp;
    var tuneClean = tablePrices.prices.proTuneUpClean;
    var wheelService = tablePrices.prices.wheelService;
    var suspenService = tablePrices.prices.suspensionService;

    document.getElementById("safety").innerHTML = safetyCheck;
    document.getElementById("protune").innerHTML = tuneUp;
    document.getElementById("ptclean").innerHTML = tuneClean;
    document.getElementById("wheel").innerHTML = wheelService;
    document.getElementById("suspension").innerHTML = suspenService;
}
