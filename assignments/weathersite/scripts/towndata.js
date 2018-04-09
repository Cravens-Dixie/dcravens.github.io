var requestURL = '//byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {

    var currentevent = JSON.parse(request.responseText);
    var eventfr = currentevent.towns["0"].events;
    var eventgr = currentevent.towns["1"].events;
    var eventsp = currentevent.towns["3"].events;
    console.log(currentevent);

    var text = "";
    for (i = 0; i < eventfr.length; i++) {
        text += eventfr[i] + "<br>";
    }
    document.getElementById("eventsfr").innerHTML= text;

    text = "";
    for (i = 0; i < eventgr.length; i++) {
        text += eventgr[i] + "<br>";
    }
    document.getElementById("eventsgr").innerHTML= text;

    text = "";
    for (i = 0; i < eventsp.length; i++) {
        text += eventsp[i] + "<br>";
    }
    document.getElementById("eventssp").innerHTML= text;

}
