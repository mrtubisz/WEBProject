//1
var el1 = document.getElementsByClassName('example')[0];
if (el1.hasAttribute("class")) {
el1.removeAttribute("class");
}
//2
	var text = "rotakifytnedi-ywon";
  var table = new Array();
  var n = 0;
   for(var i=text.length-1; i>=0;i--)
  {
  	table[n] = text.charAt(i);
    n++;
  }
	var wynik = "";
    for(var i=0; i<n;i++)
  {
  	wynik +=table[i]; 
  }
  
	if (!(el1.hasAttribute('id'))) {
	el1.setAttribute('id', wynik);
}
console.log();

//3

var el3 =  document.getElementsByClassName('wrapper')[0];
el3.innerHTML += "<a href='sealcode.org'>LINK</a>";

	if (!(el3.lastChild.hasAttribute('class'))) {
	el3.lastChild.setAttribute('class', 'new-class');
}
	if (!(el3.lastChild.hasAttribute('target'))) {
	el3.lastChild.setAttribute('target', 'blank');
}

//4

var el4 = document.getElementById("nowy-identyfikator");

el4.nextSibling.nextSibling.innerHTML = "";
	for(var i=1 ; i<=30; i++)
  {
  	el4.nextSibling.nextSibling.innerHTML += "<li id='new"+i+"'>Nowa treść "+ i + "</li>" + "<br />";
  }

//5

el3.lastChild.previousSibling.previousSibling.innerHTML = "Zmieniona treść akapitu.";


