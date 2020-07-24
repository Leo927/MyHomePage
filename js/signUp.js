//obselete
function validateSignUp(){
	var email = document.getElementById("userEmail").value;
	var userName = document.getElementById("userName").value;
	var pwd = document.getElementById("userPassword").value;
	var confirmPwd = document.getElementById("confirmPassword").value;

	var warning ="";
	var result ="";
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.length > 0 && email.length <=60 && emailRegex.test(email))
		result += "Email: " + email +"\n";
	else
		warning += "Email: " +"\n";

	if(userName.length >0 && userName.length<=40)
		result+="UserName: "+userName+"\n";
	else
		warning+= "UserName:"+"\n";

	if(pwd.length==8)
		result +="Password: "+pwd+"\n";
	else
	{
		warning+="Password: "+"\n";
		console.log(pwd.length);
	}

	if(pwd==confirmPwd)
		result+="ConfirmPassword: "+ confirmPwd+"\n";
	else
		warning+="ConfirmPassword:"+"\n";

	alert(result + "The following fields are incorrect:\n" + warning);
}

document.addEventListener("DOMContentLoaded", function(event){
	document.getElementById("userEmail").addEventListener("blur", checkEmail);
	document.getElementById("userName").addEventListener("blur", checkUname);
	document.getElementById("userPassword").addEventListener("blur", checkPassword);
	document.getElementById("confirmPassword").addEventListener("blur", checkPswdr);
	document.getElementById("signUpForm").addEventListener("submit", checkSignUp);
});


function checkEmail(event)
{
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return checkField(document.getElementById("userEmail"), emailRegex, event);
}

function checkUname(event)
{
	const screenNameRegex = /^.{3,15}$/;
	var field = document.getElementById("userName");
	return checkField(field, screenNameRegex, event, 
		field.value[0]!=" "
		&& field.value[field.value.length-1]!=" ");
}

function checkPassword(event)
{
	const passwordRegex = /[A-Za-z]{1}/;
	return checkField(document.getElementById("userPassword"), passwordRegex, event, 
		document.getElementById("userPassword").value.length==8);
}

function checkPswdr(event)
{
	const passwordRegex = /^.{8,}$/;
	return checkField(document.getElementById("confirmPassword"), passwordRegex, event, 
		document.getElementById("confirmPassword").value == document.getElementById("userPassword").value);
}

function checkSignUp(event)
{
	event.preventDefault();
	var isOK = true;
	isOK = isOK& checkEmail(event);
	isOK = isOK& checkPassword(event);
	isOK = isOK& checkUname(event);
	isOK = isOK& checkPswdr(event);
	if(isOK){
		document.getElementById("successMsg").classList.remove("hidden");
		event.target.reset();
	}
	return isOK;
}