
function printList(list){
	var listHTML = '<ol>';
	for(var i = 0; i < list.length; i += 1){
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}
function print(html){
	document.write(html);
}


var productos = ['arroz', 'azucar', 'pan', 'pera', 'harina', 'papas'];

while (true){
	var producto = prompt ("Ingrese producto a comprar");
	if (producto == 'q'){
		alert("Se acabo la busqueda");
		break;
	}
	else if (producto == 'l'){
		printList(  productos);		
	}
	else {
		if (productos.indexOf(producto)<0){
			alert("El producto esta agotado");
		}
		else{
			alert("cuanto de esto desea, lleve antes de que se agote");
		}
	}}


/*
function printList(  list ){
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i += 1){
		listHTML += '<li>' + list[i] + '</li>' ;
}
listHTML += '</ol>';
print(listHTML);
}

function print(html){
	document.write(html);
}

var playList = [];
playList.push("Soneros de bailadores");
playList.push("Aparentemente");
playList.push("No lo beses");
playList.unshift("Mi peor error");
playList.unshift("no querias lastimarme");

printList(  playList);
*/