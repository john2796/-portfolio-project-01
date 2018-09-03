var keyData = {
  a: {
    color: "purple",
    sounds: new Howl({
      src: ['sounds/sound2.wav']
    })
  },
  s: {
    color: "pink",
    sounds: new Howl({
      src: ['sounds/sound3.wav']
    })
  },
  d: {
    color: "red",
    sounds: new Howl({
      src: ['sounds/sound1.mp3']
    })
  }

}

//hit a key then show a circle
var circles = [];

function onKeyDown(event) {
  if (keyData[event.key]) {
    // play sound 2
    // get the screen size where the circle will be created
    var maxPoint = new Point(view.size.width, view.size.height);
    // get a random points
    var randomPoint = Point.random();
    // concatinate to create random poisn and get the screen size
    var point = maxPoint * randomPoint;
    console.log(maxPoint)

    var newCircle = new Path.Circle(point, 500)
    //if key is a
    newCircle.fillColor = keyData[event.key].color
    circles.push(newCircle);
    keyData[event.key].sounds.play();
  }


}

// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = "red";
function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].scale(0.9);
    circles[i].fillColor.hue += 1;
    if (circles[i].area < 1) {
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
      i--; // decrement i so that the loop doesn't skip a circle because of .splice()
      console.log(circles);
    }
  }
}