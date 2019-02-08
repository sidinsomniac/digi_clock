const digiHour = document.querySelector('#digihour');
const digiMinute = document.querySelector('#digiminute');
const digiColon = document.querySelector('#digicolon');
const DM = document.querySelector('#digimeridian');


function AutomateClock(){
var date = new Date();
let Hours = date.getHours();
let Minutes = date.getMinutes();
let Seconds = date.getSeconds();
	if(Hours>12){
		DM.textContent="PM";
		Hours-=12;
	}
	else
	DM.textContent="AM";
	if(Hours<10)
		Hours= "0"+Hours;
	if(Minutes<10)
		Minutes= "0"+Minutes;
	digiHour.textContent = Hours;
	digiMinute.textContent=Minutes;
	digiColon.textContent=":";
	digiColon.classList.toggle('vanish');
}

setInterval(AutomateClock,1000);



