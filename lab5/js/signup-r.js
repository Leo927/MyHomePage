
//add code here to call addEventListener for SignUpForm() and ResetForm() function
// refer to the example given in DOM2 event registration

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("SignUp")
	.addEventListener("submit", SignUpForm);
});

