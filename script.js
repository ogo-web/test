document.getElementById("berechneButton").addEventListener("click", function() {
  var zahl1 = Number(document.getElementById("zahl1").value);
  var zahl2 = Number(document.getElementById("zahl2").value);
  var rechenart = document.getElementById("rechenart").value;

  if (rechenart === "+") {
    document.getElementById("ergebnis").value = zahl1 + zahl2;
  } else if (rechenart === "-") {
    document.getElementById("ergebnis").value = zahl1 - zahl2;
  } else if (rechenart === "*") {
    document.getElementById("ergebnis").value = zahl1 * zahl2;
  } else if (rechenart === "/") {
    document.getElementById("ergebnis").value = zahl1 / zahl2;
  }
});

Number("3") + 3
