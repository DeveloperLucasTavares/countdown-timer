function countdownTimer(display) {
    const finalTime = new Date("May 14 2023 00:00:00"); // Converter para segundos

    let days, hours, minutes, seconds;

    setInterval(function () {
        const currentTime = new Date();
        const duration = finalTime - currentTime;

        days = Math.floor(duration / 1000 / 86400);
        hours = Math.floor(duration / 1000 / 60 / 60) % 24;
        minutes = Math.floor(duration / 1000 / 60) % 60;
        seconds = Math.floor(duration / 1000) % 60;

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display[0].children[0].children[1].textContent = days;
        display[0].children[2].children[1].textContent = hours;
        display[0].children[4].children[1].textContent = minutes;
        display[0].children[6].children[1].textContent = seconds;

    }, 1000);
}

window.onload = function () {
    const display = document.querySelectorAll('.countdown-stages'); // selecionando o timer
    countdownTimer(display); // iniciando o timer
};