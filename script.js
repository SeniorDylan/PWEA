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