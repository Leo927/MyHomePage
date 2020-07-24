

function SignUpForm(event){//use event object
	event.preventDefault();
    // This example treats all 4 input fields (Email, Username, Password, Confirm Password)
    // as elements of the event currentTarget.
    // Pay attention to SignUp-r.js since the form id is "SignUp".
    // You can also implement individual function to validate each input field
    // by modify the online lab6 website example "DOM2 Event Registration", 
    // therefore each input field is a function. For example, checkEmail(), CheckUsername(), CheckPswd(), CheckMatchPswd()

    //declare variable a for the email value

    // add code here to 
    // declare Username,Password and confirm 
    // Password as elements in event.curretTarget
    // for example: var y = elements[1].value
     
	var warn="";
	var rt=true;
	var str_user_inputs = "";



	//-- validate email --

	var emailStr = document.getElementById("SignUp").email.value;
	if (emailStr==null || emailStr==""){
	    
	    warn +="Email is empty. \n";
	    rt=false;
	  
	}
	else if(emailStr.length > 60){
	   warn += "Max length for email is 60 characters.\n"
	   rt =false;
	}

	else{ // if everything is okay, then collect email 
	   
	    str_user_inputs +="Email: "+emailStr+"\n";

	}




	//-- validate Username --
	// var y=elements[1].value;
	//-- add code here:

	var usernameStr = document.getElementById("SignUp")
							.uname.value;
	if (usernameStr==null || usernameStr==""){
	    
	    warn +="Username is empty. \n";
	    rt=false;
	  
	}
	else if(usernameStr.length > 40){
	   warn += "Max length for email is 40 characters.\n"
	   rt =false;
	}

	else{ // if everything is okay, then collect email 
	   
	    str_user_inputs +="Username: "+usernameStr+"\n";

	}

	//-- validate password --
	//-- add code

	var passwordStr = document.getElementById("SignUp")
							.password.value;
	if(passwordStr==null || passwordStr.length != 8){
	   warn += "Password must be 8 characters long.\n"
	   rt =false;
	}

	else{ // if everything is okay, then collect email 
	   
	    str_user_inputs +="Password: "+passwordStr+"\n";

	}




	//if (z.length != 8)



	//-- Confirm password --
	//-- add code

	var confirmPwdStr = document.getElementById("SignUp")
							.pwdr.value;
	if(confirmPwdStr != passwordStr)
	{
		warn += "Password must be match.\n"
	   rt =false;
	}
	   else
	   	str_user_inputs +="Confirm Password: "+confirmPwdStr+"\n";



	//if (z != c)
	   
	    //prevent form to be submitted if one of above field is invalid		
	    if(rt == false )
		{    
		  alert(warn);
		}
	    else{
		alert("Signup successful!\n"+str_user_inputs);
		}
}

function ResetForm() //use event object
{
   //code to remove the contents of the textboxes
}
