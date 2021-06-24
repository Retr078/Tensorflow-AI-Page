var video = document.getElementById("video");
var canvas = document.getElementById("canvas");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    });
}

var Context = canvas.getContext("2d");

document.getElementById("snap").addEventListener("click", function () {
  let images = [];

  var ar = ["right", "up", "down", "straight", ""];
  document.getElementById("one").innerHTML = "left"

  var inter = setInterval(function makeImage() {
    Context.drawImage(video, 0, 0, 640, 480);
    var image = new Image();
    var img = canvas.toDataURL();
    //document.getElementById('image_for_crop').appendChild(image);

    document.getElementById("one").innerHTML = ar[images.length]

    images.push(img);
    console.log(images.length);
    if (images.length > 4) {
      console.log("finished");
      clearInterval(inter);
      console.log(images);
      //axios call here
    }
  }, 5000);
});



// dot code starts here
// Background Animation
const colors = ["#4285F4", "#DB4437", "	#C0C0C0", "#F4B400", "#0F9D58"];

const numBalls = 500;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      {
        transform: "translate(0, 0)",
      },
      {
        transform: `translate(${to.x}rem, ${to.y}rem)`,
      },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});
// Background Animation code ends here

// function to Toggle the password

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
// function to Toggle the password ends here

//setting visible and invisible features
