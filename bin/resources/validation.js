/**
 * 
 */
 function validate() {
	if (document.myForm.Name.value == "") {
		alert("Please provide your name!");
		document.rewForm.Name.focus();
		return false;
	} else { let name = document.getElementById("nameIn").value; }
​
	if (document.rewForm.email.value == "") {
		alert("Please provide your Email!");
		document.rewForm.email.focus();
		return false;
	}
	if (document.rewForm.email.value != "") {
		if (validateEmail() == true) {
			var emailValue = document.getElementById("emailIn").value;
		}else{
			alert("Please enter valid email")
	     	document.rewForm.email.focus();
	     	return false;
		}
	}
}
function validateEmail() {
	var emailIn = document.rewForm.email.value;
	atpos = emailIn.indexOf("@");
	//alert(atpos)
	dotpos = emailIn.lastIndexOf(".");
	if (atpos < 1 || (dotpos - atpos < 2)) {
		return false;
	} else {
		return true;
	}
}