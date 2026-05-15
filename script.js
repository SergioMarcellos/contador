// Define a data alvo para o contador (pode ser alterada)
const targetDate = new Date('2026-12-31T23:59:59').getTime();

function updateCountdown() {
    // Obtém a hora atual
    const now = new Date().getTime();

    // Calcula a diferença
    const distance = targetDate - now;

    // Calcula dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza o HTML
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

    // Se a contagem chegou a zero
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
    }
}

// Atualiza a cada 1 segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Executa uma vez ao carregar a página
updateCountdown();