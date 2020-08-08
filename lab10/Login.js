
document.addEventListener("DOMContentLoaded", function(event){
	document.getElementById("email").addEventListener("blur", checkEmail);
	document.getElementById("password").addEventListener("blur", checkPassword);
	document.getElementById("formLogin").addEventListener("submit", checkSignUp);
});


function checkEmail(event)
{
	const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	return checkField(document.getElementById("email"), emailRegex, event);
}


function checkPassword(event)
{
	const passwordRegex = /^(\S*)?\d+(\S*)?$/;
	return checkField(document.getElementById("password"), passwordRegex, event);
}

function checkSignUp(event)
{	
	var isOK = true;
	isOK = isOK& checkEmail(event);
	isOK = isOK& checkPassword(event);
	if(isOK){
		document.getElementById("successMsg").classList.remove("hidden");
		event.target.reset();
	}
	return isOK;
}