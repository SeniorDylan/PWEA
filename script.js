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

// SCRIPT POUR AFFICHER / MASQUER LES MISSIONS
const btnMissions = document.getElementById('toggle-missions');
const missionsContainer = document.getElementById('missions-container');

if (btnMissions && missionsContainer) {
  btnMissions.addEventListener('click', () => {
    missionsContainer.classList.toggle('show-missions');
    
    // Change le texte du bouton selon l'état
    if (missionsContainer.classList.contains('show-missions')) {
      btnMissions.textContent = "Masquer les missions";
    } else {
      btnMissions.textContent = "Découvrir nos missions";
    }
  });
}

// SCRIPT POUR LE SLIDER DE LA GALERIE (BIBLIOTHÈQUE)
const sliderContent = document.getElementById('slider-content');
const btnPrev = document.getElementById('slide-prev');
const btnNext = document.getElementById('slide-next');

if (sliderContent && btnPrev && btnNext) {
  btnNext.addEventListener('click', () => {
    // Fait défiler d'une largeur complète de fenêtre de slider
    sliderContent.scrollLeft += sliderContent.offsetWidth;
  });

  btnPrev.addEventListener('click', () => {
    sliderContent.scrollLeft -= sliderContent.offsetWidth;
  });
}