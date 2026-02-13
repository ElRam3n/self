const messages = [
  "Desde que llegaste… 💫",
  "Estoy haciendo esta página para saber algo muy importante, pero también",
  "Es para demostrar una vez más mis sentimientos por ti, aunque sé que sobrepienso mucho",
  "Pero créeme que eres lo mejor que tengo, depronto esto es una estupidez, pero me demore un poquito en que quedara bonito, asi que...",
  "¿Quieres ser mi San Valentín? 💖"
];

let index = 0;
let yesScale = 1;

const textArea = document.getElementById("textArea");
const nextBtn = document.getElementById("nextBtn");
const choiceButtons = document.getElementById("choiceButtons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const funImage = document.getElementById("funImage");
const sound = document.getElementById("successSound");
const card = document.querySelector(".card");

nextBtn.addEventListener("click", () => {
  index++;
  if (index < messages.length) {
    textArea.textContent = messages[index];
  } else {
    nextBtn.style.display = "none";
    choiceButtons.classList.remove("hidden");
    moveNoButton();
  }
});

yesBtn.addEventListener("click", () => {
  textArea.textContent = "Ya sabia que ibas a decir que si (no le podias dar al no ).";
  choiceButtons.style.display = "none";
  funImage.style.display = "block";
  sound.play();

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});

noBtn.addEventListener("mouseover", handleNoMove);
noBtn.addEventListener("touchstart", handleNoMove);

function handleNoMove() {
  moveNoButton();

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
}

function moveNoButton() {
  const cardRect = card.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = cardRect.width - btnWidth - 20;
  const maxY = cardRect.height - btnHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = ["💜","💕","💖","💗","💘"][Math.floor(Math.random()*5)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

