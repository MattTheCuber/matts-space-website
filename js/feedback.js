function submitFunc() {
alert("starting submitFunc");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
alert("starting xhttp.readyState");
            myFunction(xhttp);
alert("exiting xhttp.readyState");
        }
    };
    xhttp.open("GET", "howsIt.xml", true);
    xhttp.send();

    function myFunction(xml) {
alert("starting myFunction");
        var xmlDoc = xml.responseXML;
alert("myFunction 1");
        var name = document.getElementById("myName").value;
alert("myFunction 2 " + name);
        var newEle = xmlDoc.createElement("name");
alert("myFunction 3");
        var nameText = xmlDoc.createTextNode(name);
alert("myFunction 4- nameText nodeName " + nameText.nodeName);
alert("myFunction 4.b - nameText nodeValue " + nameText.nodeValue);
        newEle.appendChild(nameText);
alert("myFunction 5 - newEle nodeName " + newEle.nodeName);
        var personalEle = xmlDoc.getElementsByTagName("personal")[0];
alert("myFunction 6 - personalEle " );
        personalEle.appendChild(newEle);
        //xn.setAttribute("name", name);
        //document.getElementById("demo").innerHTML = "Name: " + xn.getAttribute("name");
alert("exiting myFunction");
    }
}