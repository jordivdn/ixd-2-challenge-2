function startTime() {
  var vandaag = new Date();
  var uur = vandaag.getUTCHours();
  var min = vandaag.getUTCMinutes();
  var sec = vandaag.getUTCSeconds();
  uur = uur + tijdzone();
  if (uur > 24) {
    uur = uur - 24;
  }
  if (uur < 0) {
    uur = uur + 24;
  }
  if (uur => 07, uur <= 18) {
      document.body.style.background = "#6BC5ED";
      document.getElementById("sleep").style.visibility = "hidden";
      document.getElementById("zzz").style.visibility = "hidden";
      document.getElementById("astronaut").style.visibility = "visible";
      document.getElementById("greetingText").innerHTML = "Lovely weather outside, eh?";
      document.getElementById("greetingP").innerHTML = "Too bad you have to work inside.";
  } 
  else {
      document.body.style.background = "rgba(2,64,118,1)";
      document.getElementById("astronaut").style.visibility = "hidden";
      document.getElementById("zzz").style.visibility = "hidden";
      document.getElementById("sleep").style.visibility = "visible";
      document.getElementById("greetingText").innerHTML = "Work is done";
      document.getElementById("greetingP").innerHTML = "time to relax!";
  }
  if (uur > 00, uur < 07) {
      document.body.style.background = "rgb(38,18,63,1)";
      document.getElementById("astronaut").style.visibility = "hidden";
      document.getElementById("zzz").style.visibility = "visible";
      document.getElementById("sleep").style.visibility = "visible";
      document.getElementById("greetingText").innerHTML = "Goodnight";
      document.getElementById("greetingP").innerHTML = "tomorrow is another day..";
  }  
  uur = controleerTijd(uur);
  min = controleerTijd(min);
  s = controleerTijd(sec);
  document.getElementById('uren').innerHTML = uur;
  document.getElementById('minuten').innerHTML = min;
  document.getElementById('seconden').innerHTML = sec;  
  var t = setTimeout(function() {
    startTime()
  }, 500);
}
function tijdzone() {
    var elem = document.getElementById("tijdzones"),
    selectedNode = elem.options[elem.selectedIndex];

    if (selectedNode.value == "keuze") {
        var tijdzone = 0;
        document.getElementById("tijd").innerHTML = "Coordinated Universal Time (+0)";
    }
    else if (selectedNode.value == "ams") {
        var tijdzone = 1;  
        document.getElementById("tijd").innerHTML = "Central European Time (+1)";
    }
    else if (selectedNode.value == "bej") {
        var tijdzone = 8;   
        document.getElementById("tijd").innerHTML = "China Standard Time (+8)";
    }
    else if (selectedNode.value == "chicago") {
        var tijdzone = -5;
        document.getElementById("tijd").innerHTML = "Central Daylight Time (-5)";
    }
    else{
        var tijdzone = 0;
    }
    return tijdzone;
}
function controleerTijd(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}
function datum() {
    var today = new Date();
    var maanden = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();
}