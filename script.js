// Flip card on click
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', function () {
        card.classList.toggle('flipped');
    });
});
