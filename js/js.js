const mario = document.querySelectorAll(".mario")[0];
const pipe = document.querySelectorAll(".pipe")[0];
const pipe2 = document.querySelectorAll(".pipe2")[0];
const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};
const loop = setInterval(() => {
  console.log("loop");
  const pipePosition = pipe.offsetLeft;
  const pipePosition2 = pipe2.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.left = `${marioPosition}px`;

    mario.src = "./assets/img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "35px";
    clear.Interval("loop");
  }

  if (pipePosition2 <= 120 && pipePosition2 > 0 && marioPosition < 80) {
    pipe2.style.animation = "none";
    pipe2.style.left = `${pipePosition2}px`;

    mario.style.animation = "none";
    mario.style.left = `${marioPosition}px`;

    mario.src = "./assets/img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "35px";
    clear.Interval("loop");
  }
}, 10);
document.addEventListener("keydown", jump);
