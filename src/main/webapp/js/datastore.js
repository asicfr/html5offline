// Modernizr.applicationcache

// Modernizr.localstorage


function getData(){
	if(window.localStorage){
		for(var i=0; i<window.localStorage.length;i++){
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
			displayData(value);
		}
	}
}
 
function saveData(){
	var texte = document.getElementById("data").value;
	if(texte){
		if(window.localStorage){
			window.localStorage.setItem(key, texte);
		}
		displayData(texte);
	}
}
 
function displayData(data){
	var puce = document.createElement("li");
	var contenu = document.createTextNode(data);
	puce.appendChild(contenu);
	document.getElementById("liste").appendChild(puce);
}