var password = "primaverahelada";
var usuario = "neutro"

function passcheck2() {
	
	if((document.getElementById('neutro').value) != password) {
	alert('Incorrecto');
	return false;
	}

	if((document.getElementById('neutro').value) == password) {
	alert('Correcto');
	return true;
	}
}

function passcheck() {
	
	if((document.getElementById('primaverahelada').value) != password) {
	alert('Incorrecto');
	return false;
	}

	if((document.getElementById('primaverahelada').value) == password) {
	alert('Correcto');
	return true;
	}
}

