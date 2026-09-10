const screens = [...document.querySelectorAll(".screen")];

function goTo(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });

  if (id === "screen5") makeConfetti();
}

function makeConfetti() {
  const box = document.getElementById("confetti");
  box.innerHTML = "";
  for (let i = 0; i < 45; i++) {
    const bit = document.createElement("i");
    bit.style.left = Math.random() * 100 + "%";
    bit.style.top = (-10 - Math.random() * 30) + "px";
    bit.style.animationDelay = (Math.random() * 1.2) + "s";
    bit.style.transform = `rotate(${Math.random() * 360}deg)`;
    bit.style.background = ["#ff8fbd","#fff7f0","#ff4f99","#ffd2e5"][Math.floor(Math.random()*4)];
    box.appendChild(bit);
  }
}
