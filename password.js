var password = "primaverahelada";

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
