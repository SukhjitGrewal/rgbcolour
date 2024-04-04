// Event Listener
document.getElementById("preview").addEventListener("click", preview);
function preview() {
  //Input
  let red = +document.getElementById("red").value;
  let green = +document.getElementById("green").value;
  let blue = +document.getElementById("blue").value;
  //Process
  var rgb = `rgb(${red}, ${green}, ${blue})`;
  //Output
  document.getElementById("rgb").innerHTML = rgb;
  document.getElementById("yellowbox").style.background = rgb;
}

//Black Button
//Event listener
document.getElementById("black").addEventListener("click", black);

function black() {
  //process
  var black = `rgb(0, 0, 0)`;
  //output
  document.getElementById("rgb").innerHTML = black;
  document.getElementById("yellowbox").style.background = "black";
}

//white button
//event listener
document.getElementById("white").addEventListener("click", white);

function white() {
  //process
  var white = `rgb(255, 255, 255)`;

  //Output
  document.getElementById("rgb").innerHTML = white;
  document.getElementById("yellowbox").style.background = "white";
}
