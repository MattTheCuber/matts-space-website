/*var qn = 0;
function nextQuestion() {
	questions = ajaxreq.responseXML.getElementsByTagName("q");
	obj=document.getElementById("question");
	if (qn < questions.length) {
		q = questions[qn].firstChild.nodeValue;
		obj.firstChild.nodeValue=q;
	} else {
		obj.firstChild.nodeValue="(No more questions)";
	}
}
obj = document.getElementById("start_quiz");
obj.onclick = getQuestions;
ansBTN = document.getElementById("submit");
ansBTN.onclick = checkAnswer;
*/