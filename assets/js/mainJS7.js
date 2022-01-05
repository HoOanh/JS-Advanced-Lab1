const canvasEl = document.querySelector("#canvas");

const w = (canvasEl.width = window.innerWidth);
const h = (canvasEl.height = window.innerHeight * 3);

function loop() {
  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, w, h);

  confs.forEach((conf) => {
    conf.update();
    conf.draw();
  });
}

function Confetti() {
  //construct confetti
  const colours = ["#fde132", "#009bde", "#ff6b00"];

  this.x = Math.round(Math.random() * w);
  this.y = Math.round(Math.random() * h) - h / 2;
  this.rotation = Math.random() * 360;

  const size = Math.random() * (w / 60);
  this.size = size < 15 ? 15 : size;

  this.color = colours[Math.floor(colours.length * Math.random())];

  this.speed = this.size / 7;

  this.opacity = Math.random();

  this.shiftDirection = Math.random() > 0.5 ? 1 : -1;
}

Confetti.prototype.border = function () {
  if (this.y >= h) {
    this.y = h;
  }
};

Confetti.prototype.update = function () {
  this.y += this.speed;

  if (this.y <= h) {
    this.x += this.shiftDirection / 3;
    this.rotation += (this.shiftDirection * this.speed) / 100;
  }

  if (this.y > h) this.border();
};

Confetti.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(
    this.x,
    this.y,
    this.size,
    this.rotation,
    this.rotation + Math.PI / 2
  );
  ctx.lineTo(this.x, this.y);
  ctx.closePath();
  ctx.globalAlpha = this.opacity;
  ctx.fillStyle = this.color;
  ctx.fill();
};

const ctx = canvasEl.getContext("2d");
const confNum = Math.floor(w / 4);
const confs = new Array(confNum).fill().map((_) => new Confetti());

loop();

let time = document.querySelector("#time");

let count = 10,
  check = true;

const setTime = setInterval(() => {
  if (count >= 0 && check) {
    time.innerText = count;
    count--;
  } else if (check) {
    clearInterval(setTime);
    time.previousElementSibling.outerHTML = `<a class="title" href="../../">Click vào đây để tiếp tục</a>`;
    time.outerHTML = "";
  }
}, 1000);

document.addEventListener(
  "visibilitychange",
  function () {
    if (document.hidden) {
      check = false;
    } else {
      check = true;
    }
  },
  false
);
