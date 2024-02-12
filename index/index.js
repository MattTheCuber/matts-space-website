function myonload() {
  $(function() {
    $('#header').load('header.html');
  });
}
$(document).ready(myonload());











/*function setArticle() {
    $(".map").load("../html/starchart.html");
  }*/
//$(document).ready(function() {
	//$("ul").hide();
    //setArticle();
//});
/*
//time
Date.prototype.getDOY = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((this - onejan) / 86400000);
}
var doy = today.getDOY();
function checkPopupBlocker() {
  var testPopup = window.open("", "", "width=5,height=5");
  if (testPopup === null || typeof(testPopup) === "undefined") {
    alert("Please disable your popup blocker.");
  }
  testPopup.close();
}
function openWindow(url, name, specifacations) {
  window.open(url, name, specifacations)
}
function getTime() {
  /* this is getting the date and time 
  now = new Date();
  localtime = now.toString();
  document.write("<p style='font-size:20px; font-family:Consolas, Calibri, Comic Sans MS, arial;'>" + localtime + "</p>");
  hours = now.getHours();
  mins = now.getMinuets();
  secs = now.getSeconds();
  mils = now.getMilliseconds();
  //this is the actual time writing
  document.write("<h2>");
  document.write(hours + ":" + mins + ":" + secs + ":" + mils);
  document.write("</h2>");
  //this is the end of the time
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var mi = today.getMilliseconds();
  m = checkTime(m);
  s = checkTime(s);
  mi = checkTime(mi);
  document.getElementById('CHANGE_THIS').innerHTML = h + ":" + m + ":" + s + ":" + mi;
  var t = setTimeout(function() {
    startTime()
  },500);
}
function checkTime(i) {
  if (i<10) {
    i = "0" + i
  };
  return i;
}
function clac() {
  window.open("./clac.html", "_blank", "toolbar=yes, scrollbars=yes, resizable=no, top=500, left=500, width=400, height=400");
}
function makeClock() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var radius = canvas.height /2;
  ctx.translate(radius, radius);
  radius = radius * 0.9
  setInterval(drawClock, 1);
  function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }
  function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = '#580404';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#23c5f6');
    grad.addColorStop(0.5, '#23c5f6');
    grad.addColorStop(1, '#077da2');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#23c5f6';
    ctx.fill();
  }
  function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px times new roman";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    ctx.fillStyle = 'yellow';
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
  }
  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
}*/