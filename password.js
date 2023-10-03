var password = "XXXX";

function passcheck() {
	
	if((document.getElementById('pass1').value) != password) {
	alert('Incorrecto');
	return false;
	}

	if((document.getElementById('pass1').value) == password) {
	alert('Correcto');
	return true;
	}
}
