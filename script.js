// Efek ketikan Feldreem lucu 💕
const textList = [
  "Hai kamu 🥰",
  "Tau ga? kamu lucu banget hari ini 😳",
  "Kalo senyum tuh bikin dunia adem 😚",
  "Jangan sering-sering ya, nanti aku baper 😭💖",
  "Hehehe bercanda... tapi bener juga sih 😝"
];

let index = 0;
let charIndex = 0;
const speed = 70; // kecepatan ketik
const typingElement = document.getElementById("typing");

function typeText() {
  if (charIndex < textList[index].length) {
    typingElement.textContent += textList[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(eraseText, 1800);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent = textList[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 30);
  } else {
    index = (index + 1) % textList.length;
    setTimeout(typeText, 400);
  }
}

document.addEventListener("DOMContentLoaded", typeText);
