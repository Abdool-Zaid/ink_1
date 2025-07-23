const ctx = canvas.getContext("2d");
const presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let move_cnt = 0;
let style = { color: "rgb(0 255 0 / 100%)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", async (evt) => {
  if (evt.shiftKey== true) {// trigger goes here
  const pointSize = 10;
    ctx.fillStyle = style.color;
    ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);




    move_cnt += 1; // keep on last line
  }
  // if (move_cnt === 20) {
  //   const r = getRandomInt(0, 255);
  //   const g = getRandomInt(0, 255);
  //   const b = getRandomInt(0, 255);

  //   style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
  //   move_cnt = 0;
  //   document.getElementById("div").style.backgroundColor =
  //     `rgb(${r} ${g} ${b} / 60%)`;
  // }
  // (await presenter).updateInkTrailStartPoint(evt, style); // circle that follows cursor
});

window.addEventListener("pointerdown", () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

// canvas.width = window.innerWidth;  // for fullscreen
// canvas.height = window.innerHeight;
canvas.width =500;  
canvas.height = 500;