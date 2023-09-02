var password = "primaverahelada";

function passcheck() {
	
	if(document.getElementByID('pass1').value) != password {
	alert('Incorrecto');
	return false;
	}

	if(document.getElementByID('pass1').value) == password {
	alert('Correcto');
	}
}