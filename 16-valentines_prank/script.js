let attempts = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

/* 💘 Get Valentine name from URL */
const params = new URLSearchParams(window.location.search);
const valentineName = params.get("name");

if (valentineName) {
  question.textContent = `Will you be my Valentine, ${valentineName}? 💘`;
}

/* Text reactions */
const texts = [
  "Why are you like this? 😭",
  "Stop playing 💔",
  "You know you want to say yes 😏",
  "I'm begging you now 🥺",
  "I'm not going to stop until you say YES 😌",
  "Last chance!",
  "Come ooooon 😩",
  "Just one little yes 🥺👉👈",
  "NO is not an option anymore 😌",
];

/* Function to move NO button */
function moveNoButton() {
  attempts++;

  question.textContent =
    texts[Math.min(attempts - 1, texts.length - 1)];

  const x =
    Math.random() > 0.5
      ? Math.random() * 80 + 50
      : -(Math.random() * 80 + 50);
  const y =
    Math.random() > 0.5
      ? Math.random() * 80 + 50
      : -(Math.random() * 80 + 50);

  const noScale = Math.max(0.3, 1 - attempts * 0.15);
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;

  const yesScale = Math.min(2.5, 1 + attempts * 0.15);
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.zIndex = "10";

  if (attempts >= texts.length) {
    noBtn.style.display = "none";
    noBtn.style.pointerEvents = "none";
    question.textContent = "Okay okay 😌 Just press YES ❤️";
  }
}

/* Desktop */
noBtn.addEventListener("mouseover", moveNoButton);

/* Mobile */
noBtn.addEventListener("touchstart", moveNoButton);

/* YES click */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>Yayyyy 🥰💖</h1>
    <p>You are officially my Valentine 😍</p>
  `;
});

/* ❤️ Heart Particles */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";
  heart.style.animationDuration = Math.random() * 2 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);
