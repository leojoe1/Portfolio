// Flip card effect
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', function (e) {
        e.preventDefault();
        card.classList.toggle('flipped');
    });
});

// Arbre interactif
document.querySelectorAll('.tree > .has-children').forEach(function(node){
    node.addEventListener('click', function(e){
        if(e.target !== node) return;
        node.classList.toggle('open');
    });
    node.classList.add('open'); // open first by default
});

// Reveal sections on scroll
function revealSections() {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);
