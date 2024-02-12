function numberWithCommas(x) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}
function cal() {
	var sl1 = document.getElementById("sl1").value;
	var sl2 = document.getElementById("sl2").value;
	var number = document.getElementById("number").value;
	var result = 0;
	if ((sl1 == "au") && (sl2 == "mi")) {
		result = number * 92955807.267;
	} else if ((sl1 == "au") && (sl2 == "km")) {
		result = number * 149597870.69;
	} else if ((sl1 == "au") && (sl2 == "au")) {
		result = number;
	} else if ((sl1 == "km") && (sl2 == "au")) {
		result = number * 0.0000000066845871227;
	} else if ((sl1 == "mi") && (sl2 == "au")) {
		result = number * 0.000000010757800178;
	} else if ((sl1 == "mi") && (sl2 == "km")) {
		result = number *  1.609344;
	} else if ((sl1 == "mi") && (sl2 == "mi")) {
		result = number;
	} else if ((sl1 == "km") && (sl2 == "km")) {
		result = number;
	} else if ((sl1 == "km") && (sl2 == "mi")) {
		result = number *  0.62137119224;
	} else if ((sl1 == "au") && (sl2 == "ft")) {
		result = number * 490806662370;
	} else if ((sl1 == "ft") && (sl2 == "au")) {
		result = number * 0.000000000002037462155;
	} else if ((sl1 == "ft") && (sl2 == "mi")) {
		result = number * 0.00016457883369;
	} else if ((sl1 == "mi") && (sl2 == "ft")) {
		result = number * 6076.1154856;
	} else if ((sl1 == "ft") && (sl2 == "km")) {
		result = number * 0.0003048;
	} else if ((sl1 == "km") && (sl2 == "ft")) {
		result = number * 3280.839895;
	} else if ((sl1 == "ft") && (sl2 == "ft")) {
		result = number;
	} else if ((sl1 == "au") && (sl2 == "ly")) {
		result = number * 0.000015823337893;
	} else if ((sl1 == "ly") && (sl2 == "au")) {
		result = number * 63197.79093;
	} else if ((sl1 == "ly") && (sl2 == "ly")) {
		result = number;
	} else if ((sl1 == "ly") && (sl2 == "ft")) {
		result = number * 31017896836000000;
	} else if ((sl1 == "ft") && (sl2 == "ly")) {
		result = number * 0.000000000000000032239452123;
	} else if ((sl1 == "ly") && (sl2 == "mi")) {
		result = number * 5104889284800;
	} else if ((sl1 == "mi") && (sl2 == "ly")) {
		result = number * 0.00000000000019589063429;
	} else if ((sl1 == "ly") && (sl2 == "km")) {
		result = number * 9454254955500;
	} else if ((sl1 == "km") && (sl2 == "ly")) {
		result = number * 0.00000000000010577248072;
	} else if ((sl1 == "lm") && (sl2 == "mi")) {
		result = number * 9712498.6393;
	} else if ((sl1 == "mi") && (sl2 == "lm")) {
		result = number * 0.00000010296011738;
	} else if ((sl1 == "lm") && (sl2 == "lm")) {
		result = number;
	} else if ((sl1 == "lm") && (sl2 == "km")) {
		result = number * 17987547.48;
	} else if ((sl1 == "km") && (sl2 == "lm")) {
		result = number * 0.000000055594015866;
	} else if ((sl1 == "lm") && (sl2 == "ly")) {
		result = number * 0.000001902587519;
	} else if ((sl1 == "ly") && (sl2 == "lm")) {
		result = number * 525600;
	} else if ((sl1 == "lm") && (sl2 == "ft")) {
		result = number * 59014263386;
	} else if ((sl1 == "ft") && (sl2 == "lm")) {
		result = number * 0.000000000016945056036;
	} else if ((sl1 == "lm") && (sl2 == "au")) {
		result = number * 0.12023932825;
	} else if ((sl1 == "au") && (sl2 == "lm")) {
		result = number * 8.3167463967;
	}
	document.getElementById("answer").innerHTML = numberWithCommas(result);
}