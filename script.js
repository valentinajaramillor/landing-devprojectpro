// Selecciona todas las preguntas frecuentes
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Encuentra la respuesta asociada
        const answer = question.nextElementSibling;

        // Alterna la visibilidad de la respuesta
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Alterna la clase activa en la pregunta para un cambio de estilo opcional
        question.classList.toggle('active');
    });
});
