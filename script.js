document.addEventListener('DOMContentLoaded', function() {

    // Select all the flip-card elements
    const cards = document.querySelectorAll('.flip-card');

    // Loop through each card and add a click event listener
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Find the .flip-card-inner element within the clicked card
            const cardInner = card.querySelector('.flip-card-inner');
            
            // Toggle the 'is-flipped' class on it
            cardInner.classList.toggle('is-flipped');
        });
    });

});
