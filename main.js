let contactHidden;
let projectsHidden;

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("contact_title").addEventListener("click", function(){
		if (!contactHidden) {
			document.getElementById("contact").style.display = "none";
			contactHidden = true;			
		} else {
			document.getElementById("contact").style.display = "block";
			contactHidden = false;
		}
	})	
	document.getElementById("projects_title").addEventListener("click", function(){
		if (!projectsHidden) {
			document.getElementById("projects").style.display = "none";
			projectsHidden = true;			
		} else {
			document.getElementById("projects").style.display = "block";
			projectsHidden = false;
		}
	})
})