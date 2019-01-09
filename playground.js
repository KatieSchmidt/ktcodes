const playgroundDivs = document.getElementsByClassName("playground__column");

function changeClipPathClassName(e) {
  const shapes = [
    "triangle",
    "trapezoid",
    "parallelogram",
    "rhombus",
    "pentagon",
    "hexagon",
    "heptagon",
    "rabbet",
    "left",
    "right",
    "star",
    "close",
    "circle"
  ];

  let randomShapeIndex = Math.floor(Math.random() * shapes.length);

  let playgroundDivClasses = e.target.classList;

  if (playgroundDivClasses.length > 1) {
    playgroundDivClasses.remove(
      playgroundDivClasses[playgroundDivClasses.length - 1]
    );
    playgroundDivClasses.add(shapes[randomShapeIndex]);
  } else {
    playgroundDivClasses.add(shapes[randomShapeIndex]);
  }
}

function bgChange(e) {
  var rndCol =
    "rgba(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.random() +
    ")";
  e.target.style.backgroundColor = rndCol;
}

for (var i = 0; i < playgroundDivs.length; i++) {
  playgroundDivs[i].onclick = function(e) {
    bgChange(e);
    changeClipPathClassName(e);
  };
}
