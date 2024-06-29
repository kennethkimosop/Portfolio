document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        animateBox(box);
    });
});

function animateBox(box) {
    const duration = Math.random() * 3000 + 2000; // Duration between 2 and 5 seconds
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    const newColor = getRandomColor();

    box.style.transition = `all ${duration}ms linear`;
    box.style.transform = `translate(${newX}px, ${newY}px)`;
    box.style.backgroundColor = newColor;

    setTimeout(() => {
        animateBox(box);
    }, duration);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
