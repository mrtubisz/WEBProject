var array = [];
var Button = document.getElementById("buttask");
Button.addEventListener('click', addArray, false);
var xyz = 0;

function addArray(){
	array[array.length] = new Object();
	var tresc = document.getElementById("task").value;
	if (tresc == "")
	{alert("Wype³nij pole");}
	else
	{
		tresc = tresc.split(' ').join(' ').charAt(0).toUpperCase() + tresc.slice(1).split(' ').join(' ')	
		array[array.length-1].task = document.createTextNode(tresc);
		add(array[array.length-1]);
	}
}
function add(zadanie){
	var list = document.getElementById("list"); 
	if(document.getElementById("xid"))
		list.removeChild(list.lastChild);
	var Task = document.createElement('p');
	zadanie.num = xyz;
	var DeleteButton = document.createElement('input');
	DeleteButton.setAttribute('type', 'submit'); 
	DeleteButton.setAttribute('value', 'delete'); 
	DeleteButton.setAttribute('id', 'DB'+ xyz);
	var CheckBox = document.createElement('input');
	CheckBox.setAttribute('type', 'checkbox'); 
	CheckBox.setAttribute('value', 'spotify');
	CheckBox.setAttribute('id', 'CB'+ xyz);	
	Task.setAttribute('id', 'T'+ xyz );
	Task.appendChild(CheckBox); 
	Task.appendChild(zadanie.task);
	Task.appendChild(DeleteButton); 
	list.appendChild(Task); 
	document.getElementById('DB'+ xyz).addEventListener('click', function() {remove(zadanie.num)}, false);
	xyz++;
};

function remove(side){
	array.splice(side, 1);
	refresh();	
};


function refresh(){
	var listaodswiez = document.getElementById("list");
	while (listaodswiez.hasChildNodes()) { 
	listaodswiez.removeChild(listaodswiez.lastChild);
}
	xyz = 0;
	if(array.length == 0)
	{
		var xtask = document.createElement('p');
		xtask.appendChild(document.createTextNode("Nie masz ¿adnych zadañ"));
		xtask.setAttribute('id', 'xid');
		list.appendChild(xtask);
	}
	else
	for(var i=0; i<array.length; i++)
	{
		add(array[i]);
	}
};

