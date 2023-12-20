let launchDate = new Date("Dec 30, 2023 09:00:00").getTime();
let lastScrollTop = 0;

let timer = setInterval(() => {
  let now = new Date().getTime();
  let t = launchDate - now;

  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let time = `${days} : ${hours} : ${minutes} : ${seconds}`;
    document.getElementById('countdownDisplay').innerText = time;

    // Set the values for days, hours, minutes, and seconds below the countdown
    document.getElementById('daysLabel').innerText = `Días`;
    document.getElementById('hoursLabel').innerText = `Horas`;
    document.getElementById('minutesLabel').innerText = `Minutos`;
    document.getElementById('secondsLabel').innerText = `Segundos`;
  }
}, 1000);

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.querySelector(".navbar").style.transform = "translateY(-100%)"; // Mueve la barra fuera de la vista
  } else {
    // Scrolling up
    document.querySelector(".navbar").style.transform = "translateY(0)"; // Vuelve a mostrar la barra
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Suponiendo que tienes un botón con el ID 'backToTopButton'
let backButton = document.getElementById('backToTopButton');

backButton.addEventListener('click', () => {
  // Obtener la posición superior de la sección de inicio
  let inicioSection = document.getElementById('inicio');
  let offsetTop = inicioSection.offsetTop;

  // Realizar el desplazamiento suave a la posición superior de la sección de inicio
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth' // Desplazamiento suave
  });
});



window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll + window.innerHeight >= document.body.scrollHeight) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
});
