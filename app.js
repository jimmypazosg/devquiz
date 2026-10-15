// ============================================
// DevQuiz - Lógica principal de la aplicación
// ============================================

// Variables de estado del juego
let currentQuestionIndex = 0; // Índice de la pregunta actual
let score = 0;                // Puntuación del jugador
let isAnswered = false;       // Evita respuestas múltiples
let userAnswers = [];         // Guarda la opción seleccionada por el usuario para cada pregunta

// Referencias a elementos del DOM para no buscarlos en cada uso
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationSection = document.getElementById('explanation-section');
const feedbackMessage = document.getElementById('feedback-message');
const explanationText = document.getElementById('explanation-text');
const nextBtn = document.getElementById('next-btn');
const questionSection = document.getElementById('question-section');
const resultsSection = document.getElementById('results-section');
const scoreText = document.getElementById('score-text');
const scoreMessage = document.getElementById('score-message');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const reviewContainer = document.getElementById('review-container');
const reviewList = document.getElementById('review-list');

// ============================================
// Inicialización del quiz
// ============================================

/**
 * Inicializa el quiz al cargar la página.
 * Configura los event listeners y muestra la primera pregunta.
 */
function initQuiz() {
    // Listeners para los botones de navegación
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    reviewBtn.addEventListener('click', toggleReview);
    
    // Mostrar la primera pregunta
    showQuestion();
    updateProgress();
}

// ============================================
// Gestión de preguntas
// ============================================

/**
 * Muestra la pregunta actual en pantalla.
 * Genera los botones de opciones dinámicamente.
 */
function showQuestion() {
    // Obtener la pregunta actual del array
    const currentQuestion = questions[currentQuestionIndex];
    
    // Limpiar el estado anterior
    isAnswered = false;
    explanationSection.classList.add('hidden');
    
    // Mostrar el texto de la pregunta
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    
    // Limpiar y generar las opciones de respuesta
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        // Crear botón real para cada opción (mejor accesibilidad)
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.setAttribute('aria-label', `Opción ${index + 1}: ${option}`);
        
        // Evento de clic para verificar la respuesta
        button.addEventListener('click', () => checkAnswer(index, button));
        
        optionsContainer.appendChild(button);
    });
}

/**
 * Actualiza la barra de progreso y el texto informativo.
 */
function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
}

// ============================================
// Verificación de respuestas
// ============================================

/**
 * Verifica si la respuesta seleccionada es correcta.
 * @param {number} selectedIndex - Índice de la opción seleccionada
 * @param {HTMLElement} selectedButton - Botón que el usuario pulsó
 */
function checkAnswer(selectedIndex, selectedButton) {
    // Evitar respuestas múltiples
    if (isAnswered) return;
    isAnswered = true;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;
    
    // Guardar la respuesta del usuario para la revisión final
    userAnswers.push(selectedIndex);
    
    // Actualizar puntuación si acertó
    if (isCorrect) {
        score++;
    }
    
    // Mostrar colores en las opciones
    showFeedback(selectedIndex, currentQuestion);
    
    // Mostrar la sección de explicación
    showExplanation(isCorrect, currentQuestion);
    
    // Deshabilitar todos los botones de opción
    disableOptionButtons();
}

/**
 * Aplica los estilos visuales a las opciones tras responder.
 * Marca la correcta en verde y la incorrecta en rojo si falló.
 */
function showFeedback(selectedIndex, currentQuestion) {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    
    allButtons.forEach((btn, index) => {
        if (index === currentQuestion.correct) {
            // Siempre marcar la correcta en verde
            btn.classList.add('reveal-correct');
        }
        
        if (index === selectedIndex && index !== currentQuestion.correct) {
            // Marcar en rojo solo la opción incorrecta seleccionada
            btn.classList.add('wrong');
        }
        
        if (index === selectedIndex && index === currentQuestion.correct) {
            // Si acertó, marcar como correcta
            btn.classList.add('correct');
        }
    });
}

/**
 * Deshabilita todos los botones de opción para evitar clics adicionales.
 */
function disableOptionButtons() {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
    });
}

// ============================================
// Explicación y navegación
// ============================================

/**
 * Muestra la explicación y el mensaje de feedback.
 * @param {boolean} isCorrect - Si la respuesta fue correcta
 * @param {object} currentQuestion - Objeto de la pregunta actual
 */
function showExplanation(isCorrect, currentQuestion) {
    // Configurar el mensaje de feedback
    feedbackMessage.textContent = isCorrect ? '¡Correcto! 🎉' : '¡Incorrecto! ❌';
    feedbackMessage.className = ''; // Limpiar clases previas
    feedbackMessage.classList.add(isCorrect ? 'correct' : 'wrong');
    
    // Mostrar la explicación de la pregunta
    explanationText.textContent = currentQuestion.explanation;
    
    // Mostrar la sección de explicación
    explanationSection.classList.remove('hidden');
    
    // Cambiar el texto del botón si es la última pregunta
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = 'Ver resultados';
    } else {
        nextBtn.textContent = 'Siguiente pregunta';
    }
}

/**
 * Pasa a la siguiente pregunta o muestra los resultados finales.
 */
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        // Hay más preguntas, mostrar la siguiente
        showQuestion();
        updateProgress();
    } else {
        // No hay más preguntas, mostrar resultados
        showResults();
    }
}

// ============================================
// Pantalla de resultados
// ============================================

/**
 * Muestra la pantalla final con la puntuación obtenida.
 */
function showResults() {
    // Ocultar las secciones de preguntas y explicación
    questionSection.classList.add('hidden');
    explanationSection.classList.add('hidden');
    
    // Mostrar la sección de resultados
    resultsSection.classList.remove('hidden');
    
    // Mostrar puntuación
    scoreText.textContent = `${score} / ${questions.length}`;
    
    // Mensaje personalizado según la puntuación
    let message = '';
    const percentage = (score / questions.length) * 100;
    
    if (percentage === 100) {
        message = '¡Perfecto! Eres un maestro de JavaScript. 🏆';
    } else if (percentage >= 80) {
        message = '¡Muy bien! Tienes buenos conocimientos de JavaScript. 👏';
    } else if (percentage >= 60) {
        message = 'No está mal, pero aún puedes mejorar. Sigue practicando! 💪';
    } else if (percentage >= 40) {
        message = 'Necesitas repasar más conceptos básicos de JavaScript. 📚';
    } else {
        message = '¡No te rindas! Vuelve a intentarlo y aprenderás más. 🚀';
    }
    
    scoreMessage.textContent = message;
    
    // Ocultar la revisión si estaba visible de una sesión anterior
    reviewContainer.classList.add('hidden');
    reviewBtn.textContent = 'Revisar respuestas';
    
    // Actualizar la barra de progreso al 100%
    progressBar.style.width = '100%';
    progressText.textContent = 'Quiz completado';
}

// ============================================
// Reinicio del quiz
// ============================================

/**
 * Reinicia el quiz a su estado inicial.
 * Oculta resultados, muestra preguntas y resetea puntuación.
 */
function restartQuiz() {
    // Resetear variables de estado
    currentQuestionIndex = 0;
    score = 0;
    isAnswered = false;
    userAnswers = [];
    reviewContainer.classList.add('hidden');
    reviewBtn.textContent = 'Revisar respuestas';
    
    // Ocultar resultados y mostrar preguntas
    resultsSection.classList.add('hidden');
    questionSection.classList.remove('hidden');
    
    // Mostrar primera pregunta y actualizar progreso
    showQuestion();
    updateProgress();
}

/**
 * Alterna la visibilidad de la sección de revisión de respuestas.
 * Si es la primera vez que se abre, genera el contenido de la lista.
 */
function toggleReview() {
    if (reviewContainer.classList.contains('hidden')) {
        renderReview();
        reviewContainer.classList.remove('hidden');
        reviewBtn.textContent = 'Ocultar revisión';
    } else {
        reviewContainer.classList.add('hidden');
        reviewBtn.textContent = 'Revisar respuestas';
    }
}

/**
 * Genera la lista de revisión comparando las respuestas del usuario
 * con las respuestas correctas.
 */
function renderReview() {
    reviewList.innerHTML = '';
    
    questions.forEach((q, index) => {
        const userChoice = userAnswers[index];
        const isCorrect = userChoice === q.correct;
        
        const item = document.createElement('div');
        item.classList.add('review-item');
        
        // Texto de la pregunta
        const qText = document.createElement('span');
        qText.classList.add('review-question');
        qText.textContent = `${index + 1}. ${q.question}`;
        item.appendChild(qText);
        
        // Opción elegida por el usuario
        const userOption = document.createElement('div');
        userOption.innerHTML = `Tu respuesta: <span class="review-option ${isCorrect ? 'review-correct' : 'review-wrong'}">${q.options[userChoice]}</span>`;
        item.appendChild(userOption);
        
        // Si falló, mostrar la correcta
        if (!isCorrect) {
            const correctOption = document.createElement('div');
            correctOption.innerHTML = `Correcta: <span class="review-option review-correct">${q.options[q.correct]}</span>`;
            item.appendChild(correctOption);
        }
        
        // Explicación
        const expl = document.createElement('div');
        expl.classList.add('review-explanation');
        expl.textContent = q.explanation;
        item.appendChild(expl);
        
        reviewList.appendChild(item);
    });
}

// ============================================
// Iniciar la aplicación cuando el DOM esté listo
// ============================================
document.addEventListener('DOMContentLoaded', initQuiz);
