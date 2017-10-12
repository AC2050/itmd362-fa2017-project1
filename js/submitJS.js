
//party time
function fff() {
	document.getElementById("spiral").className = 'party';
	document.getElementById("surprise").className = 'partyBlock';
	setTimeout(function(){
			document.getElementById("spiral").className = 'hide';
			document.getElementById("surprise").className = 'hide';
			}, 3000);
}
//make sure form is filled out
function checkForm() {
	var check = 0;
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var email = document.getElementById("mail").value;
	var phone = document.getElementById("phone").value;
	if( fName == null || lName == null ) {
			alert("H");
		}
	console.log(fName);
}

var form = document.getElementsByTagName('button')[0];
form.addEventListener("click", checkForm, false);



