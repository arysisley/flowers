document.addEventListener('DOMContentLoaded', function () {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        const petals = flower.querySelectorAll('.petal');

        petals.forEach((petal, index) => {
            const delay = index * 200; // Adjust the delay for each petal
            animatePetal(petal, delay);
        });
    });
});

function animatePetal(petal, delay) {
    setTimeout(() => {
        petal.style.animation = 'blow 1s infinite alternate';
    }, delay);
}
