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