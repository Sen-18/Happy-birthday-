const screens=["welcome","card","surprise"];

function show(id){
  screens.forEach(s=>document.getElementById(s).classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function openCard(){ show("card"); }
function showSurprise(){ show("surprise"); confetti(); }
function restart(){ show("welcome"); }

function confetti(){
  const box=document.getElementById("confetti");
  box.innerHTML="";
  const pieces=["🎉","✨","💗","🎈","⭐","🌸","🎊"];
  for(let i=0;i<55;i++){
    const el=document.createElement("span");
    el.className="confetti";
    el.textContent=pieces[Math.floor(Math.random()*pieces.length)];
    el.style.left=Math.random()*100+"vw";
    el.style.animationDuration=(2.2+Math.random()*2.5)+"s";
    el.style.animationDelay=(Math.random()*.7)+"s";
    el.style.fontSize=(.8+Math.random()*1.2)+"rem";
    box.appendChild(el);
  }
  setTimeout(()=>box.innerHTML="",5500);
}
