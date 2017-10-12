
function fff() {
	document.getElementById("spiral").className = 'party';
	document.getElementById("surprise").className = 'partyBlock';
	setTimeout(function(){
			document.getElementById("spiral").className = 'hide';
			document.getElementById("surprise").className = 'hide';
			}, 3000);
}

var form = document.getElementsByTagName('button')[0];
form.addEventListener("click", fff, false);