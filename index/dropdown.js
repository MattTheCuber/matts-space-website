function dropdown1() {
	document.getElementById("dropdown1-content").classList.toggle("show");
}
function dropdown2() {
	document.getElementById("dropdown2-content").classList.toggle("show");
}
function dropdown3() {
	document.getElementById("dropdown3-content").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdown1 = document.getElementsByClassName("dropdown-menu1");
		var dropdown2 = document.getElementsByClassName("dropdown-menu2");
		var dropdown3 = document.getElementsByClassName("dropdown-menu3");
		var i;
		for (i = 0; i < dropdown1.length; i++) {
			var openDropdown = dropdown1[i];
		    if (openDropdown.classList.contains('show')) {
		    	openDropdown.classList.remove('show');
		    }
		}
		for (i = 0; i < dropdown2.length; i++) {
			var openDropdown = dropdown2[i];
		    if (openDropdown.classList.contains('show')) {
		    	openDropdown.classList.remove('show');
		    }
		}
		for (i = 0; i < dropdown3.length; i++) {
			var openDropdown = dropdown3[i];
		    if (openDropdown.classList.contains('show')) {
		    	openDropdown.classList.remove('show');
		    }
		}
	}
}