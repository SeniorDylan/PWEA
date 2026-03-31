/*
function join() {
  alert("Bienvenue dans la PWEA !");
}

function sendForm(e) {
  e.preventDefault();
  alert("Message envoyé !");
}

let count = 0;
let interval = setInterval(() => {
  if (count >= 100) clearInterval(interval);
  document.getElementById('members').innerText = count;
  document.getElementById('events').innerText = Math.floor(count/2);
  count++;
}, 30);

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Inscription envoyée !");
});
// Animation scroll style Apple
const faders = document.querySelectorAll('.fade');

const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

faders.forEach(el => appear.observe(el));
*/


// Animation du compteur de membres et d'événements
let count = 0;
let interval = setInterval(() => {
  if (count >= 100) clearInterval(interval);
  
  const membersEl = document.getElementById('members');
  const eventsEl = document.getElementById('events');
  
  if (membersEl) membersEl.innerText = count;
  if (eventsEl) eventsEl.innerText = Math.floor(count / 2);
  
  count++;
}, 30);

// Animation au défilement (Scroll)
const faders = document.querySelectorAll('.fade');

const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

faders.forEach(el => appear.observe(el));

// SCRIPT POUR AFFICHER / MASQUER L'ÉQUIPE
const btnTeam = document.getElementById('toggle-team');
const teamContainer = document.getElementById('team-container');

if (btnTeam && teamContainer) {
  btnTeam.addEventListener('click', () => {
    teamContainer.classList.toggle('show-team');
    
    // Change le texte du bouton selon l'état
    if (teamContainer.classList.contains('show-team')) {
      btnTeam.textContent = "Masquer les membres";
    } else {
      btnTeam.textContent = "Découvrir les membres du bureau";
    }
  });
}