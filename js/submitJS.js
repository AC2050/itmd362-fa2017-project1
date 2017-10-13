//party time
function fff() {
	document.getElementById("spiral").className = 'party';
	document.getElementById("surprise").className = 'partyBlock';
	setTimeout(function(){
			document.getElementById("spiral").className = 'hide';
			document.getElementById("surprise").className = 'hide';
			}, 1000);
}

//email validation
function mailVal(mail){
	var eVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return eVal.test(mail);
}

//phone validation (unneccessary I know but whatever)
function telVal(tel){
	var tVal = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	console.log(tVal.test(tel));
	return tVal.test(tel);
}

//make sure form is filled out
function checkForm() {
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var email = document.getElementById("mail").value;
	var phone = document.getElementById("tel").value;
	if (fName != "" && lName !="" && email != "" && phone != ""){
		if(mailVal(email) && telVal(phone)) {
			fff();
			setTimeout(function(){location.reload(true)}, 1000);
		}else if(!mailVal(email)){
			document.getElementById("mail").style.borderColor = "red";
		}
	}
	console.log(fName);
}

var form = document.getElementsByTagName('button')[0];
form.addEventListener("click", function(form){form.preventDefault()});
form.addEventListener("click", checkForm, false);



