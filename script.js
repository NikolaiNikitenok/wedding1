document.addEventListener('DOMContentLoaded', function() {
    function animateOnEntry(entry) {
        entry.forEach(elem => {
            if (elem.isIntersecting) {
                elem.target.classList.remove('hide-animation');
                elem.target.classList.add('show-animation');
            } else {
                elem.target.classList.remove('show-animation');
                elem.target.classList.add('hide-animation');
            }
        });
    }

    let observer = new IntersectionObserver(animateOnEntry, { threshold: [0.5] });
    for (let elem of document.querySelectorAll('.animate-it')) {
        observer.observe(elem);
    }

    // Countdown timer
    function countdown() {
        const weddingDate = new Date("August 15, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

        if (timeLeft < 0) {
            document.getElementById("countdown").innerHTML = "Свадьба уже началась!";
        }
    }

    setInterval(countdown, 1000);
    countdown();
});