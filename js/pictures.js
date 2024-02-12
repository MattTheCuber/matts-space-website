/*function swapImage(id, newImage) {
	$(id).src = newImage;
}*/
alert("before var");
var ast = {
	path:["../images/pictures/ast/1.jpg", "../images/pictures/ast/2.jpg", "../images/pictures/ast/3.jpg", "../images/pictures/ast/4.jpg",
		 "../images/pictures/ast/5.jpg", "../images/pictures/ast/6.jpg", "../images/pictures/ast/8.jpg"],
	backgroundimg:"../images/pictures/ast/7.jpg",
	titleAlt:"Athena Space Telecope"
}
alert("after var");
$(document).ready(function() {
alert("inside ready");
	$("#newPictures").hide();
});
alert("after ready");
function newPage(pageName) {
alert("inside newPage");
	$("#newPictures").show();
alert("newPage 1");
	var path[];
	var number;
alert("newPage 2");
	for (var i = 0; i < 100; i++) {
		path = pageName.path[i];
	}
alert("newPage 3 " + path[5]);
	backgroundImg = pageName.backgroundImg;
alert("newPage 4 " + backgroundImg);
	titleAlts = pageName.titleAlt;
alert("newPage 5 " + titleAlt);
	oldTitle = $("#motto");
alert("newPage 6 " + oldTitle);
	oldTitle.html(titleAlts);
alert("newPage 7");
	oldImgs = $(".newImgs");
alert("newPage 8");
	oldImgs.setAttribute("alt", titleAlts);
alert("newPage 9 - last");
	for (var i = 0; i < 100; i++) {
		oldImgs.setAttribute(path[i]);
	}
alert("exiting newPage");
}