/**
 * 
 */
 
 let submit = document.getElementById("submit");
 
 function test(event) {
	 event.preventDefault();
	 
	 let newNameRaw = document.getElementById("nameIn");
	 let newEmailRaw = document.getElementById("emailIn");
	 let newPassRaw = document.getElementById("password");
	 let newName = newNameRaw.value;
	 let newEmail = newEmailRaw.value;
	 let newPass = newPassRaw.value;
	 
	 const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
	 const isValidEmail = emailRegex.test(newEmail);
	 
	 if (newName == ""){
		 alert("Please Provide Name");
	 }
	 
	 if (newEmail == ""){
		 alert("Please Provide Email");
	 }
	 if (newEmail != ""){
		 if (isValidEmail == false){
			 alert("Please Provide Valid Email")
		 }
	 }
	 
	 let newPerson = {
		 
		 name: newName,
		 email: newEmail,
		 password: newPass
	 };
	 let personArray = [newName, newEmail, newPass];
	 let test = document.getElementById("test");
	 for (let i = 0; i<personArray.length;i++){
		 let p = document.createElement("p")
		 p.textContent=personArray[i];
		 test.appendChild(p);
	 }
	 
	 console.log(newPerson);
	 let nameP = document.createElement("p");
	 let emailP = document.createElement("p");
	 let passwordP = document.createElement("p");
	 nameP.setAttribute("class","testing")
	 nameP.textContent=newName;
	 emailP.textContent=newEmail;
	 passwordP.textContent=newPass;
	 test.appendChild(nameP);
	 test.appendChild(emailP);
	 test.appendChild(passwordP);
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

submit.addEventListener("click",test)