function graphicBox(box) {
	//be unobstructive
	if (!document.getElementById) return;

	//find the object and its parent
	obj = $("#" + box);
	parentobj = obj.parentNode;

	//hide reguler checkbox
	obj.style.visibility = "hidden";

	//create the new checkboxes
	img = document.createElement("img");
	img.onclick = Toggle;
	img.src = "../checkBox/unchecked-icon.JPG";
	img.width = "30";
	img.height = "30";

	//save the checkbox id inside the image id
	img.id = "img" + box;

	// show graphic checkbox
	parentobj.insertBefore(img,obj);
}
function Toggle(e) {
	if (!e) var e = window.event;

	//find image id
	img = (e.target) ? e.target : e.srcElement;

	//find the checkbox by removing "img" form the image id
	checkid = img.id.substring(3);
	checkbox = document.getElementById(checkid);

	//"click" the checkbox
	checkbox.click();

	//show the right image
	if (checkbox.checked) {
		file = "../checkBox/checked-icon.JPG";
	} else {
		file = "../checkBox/unchecked-icon.JPG";
	}
	img.src = file;
}

//replace the second checkbox with the new one
graphicBox("newChecks");