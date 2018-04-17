

var icao = document.querySelector("#icao");
var weatherResults = document.querySelector("#airport");
var submit = document.querySelector("#submit");
// var requestURL = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&;'
// var request = new XMLHttpRequest();


submit.addEventListener("click", function() {
var submitValue = document.querySelector("#icao").value;
	console.log(submitValue);
	// request.open("GET", requestURL + "stationString=" + submitValue + "&hoursBeforeNow=2");
	// request.responseType = ""
	weatherResults.textContent = submitValue;
})


//blank URL
//https://www.aviationweather.gov/metar/data?ids=&format=raw&date=0&hours=0

//airport URL
//https://www.aviationweather.gov/metar/data?ids=krdu&format=raw&date=0&hours=0

//api URL
//https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&

//+ airport
//stationString=KDEN KSEA, PHNL&hoursBeforeNow=2