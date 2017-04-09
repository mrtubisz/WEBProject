var head = document.getElementById('heading');
var one = document.getElementById('paragraph-one');
var two = document.getElementById('paragraph-two');
var three = document.getElementById('paragraph-three');
var four = document.getElementById('paragraph-four');

head.innerHTML = 'Marcin Tubisz';

function DayOfWeek() {
    var currentDate = new Date();
    var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", 		"Sobota"];
    return days[currentDate.getDay()];
}


function Month()
{
	var currentDate = new Date();
  var month = ["stycznia","lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
  var month1 = ["styczen","luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
  if(currentDate.getDate() <= 11){
  	return month[currentDate.getMonth()];
  }else {
  	return month1[currentDate.getMonth()];
  }
}

var d = new Date();

one.innerHTML ='Data, która pojawi się przy otwarciu tej strony to: ' + DayOfWeek() +' ' + d.getDate() +' '+ Month()+ ' '+ d.getFullYear() + '</br> Godzina w momencie otwarcia strony: ' + d.getHours() +':' + d.getMinutes() +':'+ d.getSeconds()+':' + d.getMilliseconds();



var string = "Podstawą szczęścia jest wolność, a podstawą wolności odwaga.";
var split = string.split(',');

function odwracanie()
{
	var podzial = split[1].split(' ');
  var table = new Array();
  var n = 0;
   for(var i=4; i>=1;i--)
  {
  	table[n] = podzial[i];
    n++;
  }
  var wynik = table.join();
  return wynik.replace(/,/g,' ');
 }
 

two.innerHTML = 'Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga." </br>' + "Trzynastym znakiem w tym zdaniu jest: " + string.charAt(12) + "</br>Znaki pomiędzy 7. a 12. pozycją to:  " + string.substring(6,12) +"</br> Pierwszy raz znak 'ą' pojawia się na miejscu: " + (string.indexOf('ą')+1) + "</br>Ten ciąg ma " +string.length +  " znaków."+"</br> Po zamianie 'podstawą' na 'fundamentem' mamy: "  + string.replace('Podstawą','Fundamentem') +
'</br> Część zdania przed przecinkiem to: ' + split[0] + '</br> Druga część zdania po odwróceniu to: ' + odwracanie();


var a =1;
var b =5;
var c =6;
var delta = Math.pow(b,2) - (4*a*c);
var x1 = (-b - Math.sqrt(delta)) / (2*a);
var x2 = (-b + Math.sqrt(delta)) / (2*a);

three.innerHTML = 'Zadanie 1. Mam funkcję kwadratową: f(x) = x^2 + 5x + 6 </br> Wyróżnik tego trójmianu to: ' + delta + '</br>Pierwiastek kwadratowy tego wyróżnika to: ' + Math.sqrt(delta) + '</br> Miejscami zerowymi tej funkcji są: '+ x1 + " i " + x2;


function wartosc()
{
	var x= Math.PI/6;
  var wynik = Math.sqrt(Math.abs(Math.sin(Math.log(Math.pow(2,x))) + Math.max(0,x) + Math.abs(1/Math.pow(Math.E,2*x) + Math.min(-1,x))));
  return wynik;
}


four.innerHTML = 'Zadanie 2. Obliczam wartość funkcji: f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||) dla x = pi/6. </br> Mój wynik to: ' + wartosc() +' </br> Wynik w notacji wykładniczej to: ' + wartosc().toExponential() + '</br> Po zaokrąleniu wyniku w górę mam: ' + Math.ceil(wartosc());













