// Счётчик растёт сам, потому что контракты не заканчиваются
let count = 1337;
const counterEl = document.getElementById('counter');

setInterval(() => {
    count += Math.floor(Math.random() * 3);
    if (counterEl) counterEl.textContent = count.toLocaleString('ru-RU');
}, 2000);

// Кнопки "Записаться" — максимально честные
document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const title = card.querySelector('h3').textContent;
        alert(`Вы записались на вакансию "${title}"!\n\nМайонез выслан на ваш email.`);
        btn.textContent = 'ЗАПИСАН ✓';
        btn.style.background = 'green';
    });
});

// Ебнутый консольный привет
console.log('%c SMO ', 'background:red;color:yellow;font-size:40px;font-weight:bold;');
console.log('Ты зашёл в консоль. Майонез уже ждёт.');