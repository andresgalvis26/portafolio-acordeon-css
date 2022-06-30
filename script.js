// Seleccionamos todas las cards
const cards = document.querySelectorAll('.card')

// Añadimos un evento en cada click
cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (card.classList.contains("active")) {
            card.classList.toggle("active");
        } else {
            cards.forEach((card) => card.classList.remove("active"));
            card.classList.add("active");
        }

    })
})