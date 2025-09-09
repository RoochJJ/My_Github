
// QUIZ MASTER - LÓGICA PRINCIPAL
// ============================================

// Variáveis globais
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let totalQuestions = 0;
let questions = [];


// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    console.log('🎉 Quiz Master carregado com sucesso!');
});

function initializeQuiz() {
    // Configurações iniciais
    showCategorySelection();
    
    // Event listeners globais
    setupGlobalEventListeners();
    
    // Verificar se há categoria salva
    const savedCategory = localStorage.getItem('quizCategory');
    if (savedCategory && quizData[savedCategory]) {
        console.log(`Categoria salva encontrada: ${savedCategory}`);
    }
}

function setupGlobalEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Escape') {
            if (confirm('Deseja voltar à seleção de categorias?')) {
                goToCategories();
            }
        }
    });
}


// SELEÇÃO DE CATEGORIA
// ============================================
function selectCategory(category) {
    if (!quizData[category]) {
        showError('Categoria não encontrada!');
        return;
    }

    currentCategory = category;
    questions = shuffleArray([...quizData[category].questions]);
    totalQuestions = questions.length;
    
    // Salvar categoria selecionada (sem localStorage devido a restrições)
    sessionStorage.setItem('quizCategory', category);
    
    // Configurar interface do quiz
    setupQuizInterface();
    showQuizContainer();
    
    console.log(`Categoria selecionada: ${category} com ${totalQuestions} perguntas`);
}

function setupQuizInterface() {
    const categoryData = quizData[currentCategory];
    
    // Atualizar cabeçalho
    document.getElementById('categoryTitle').textContent = categoryData.title;
    document.getElementById('categorySubtitle').textContent = categoryData.subtitle;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    // Reset variáveis
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    
    // Gerar HTML das perguntas
    generateQuestionsHTML();
    
    // Exibir primeira pergunta
    showQuestion(0);
}


// GERAÇÃO DE PERGUNTAS
// ============================================
function generateQuestionsHTML() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    questions.forEach((questionData, index) => {
        const questionDiv = createQuestionElement(questionData, index);
        container.appendChild(questionDiv);
    });
}

function createQuestionElement(questionData, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-container';
    questionDiv.id = `question-${index}`;
    
    questionDiv.innerHTML = `
        <div class="question-text">
            <strong>Pergunta ${index + 1} de ${totalQuestions}</strong><br>
            ${questionData.question}
        </div>
        <div class="options-container">
            ${questionData.options.map((option, optionIndex) => `
                <div class="option" onclick="selectOption(${index}, ${optionIndex})">
                    ${option}
                </div>
            `).join('')}
        </div>
        <div class="explanation" id="explanation-${index}">
            <strong>Explicação:</strong> ${questionData.explanation}
        </div>
    `;
    
    return questionDiv;
}


// NAVEGAÇÃO DE PERGUNTAS
// ============================================
function showQuestion(index) {
    // Esconder todas as perguntas
    document.querySelectorAll('.question-container').forEach(q => {
        q.classList.remove('active');
    });
    
    // Mostrar pergunta atual
    const currentQuestion = document.getElementById(`question-${index}`);
    if (currentQuestion) {
        currentQuestion.classList.add('active');
    }
    
    // Atualizar interface
    updateQuizStats();
    updateProgressBar();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        answered = false;
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        answered = true;
    }
}


// SELEÇÃO DE OPÇÕES
// ============================================
function selectOption(questionIndex, optionIndex) {
    if (answered && questionIndex === currentQuestionIndex) return;
    
    const question = questions[questionIndex];
    const isCorrect = optionIndex === question.correct;
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');
    const explanation = document.getElementById(`explanation-${questionIndex}`);
    
    // Marcar resposta selecionada
    options.forEach((option, index) => {
        option.classList.remove('selected', 'correct', 'incorrect');
        
        if (index === optionIndex) {
            option.classList.add('selected');
            option.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (index === question.correct) {
            option.classList.add('correct');
        }
        
        // Desabilitar cliques
        option.style.pointerEvents = 'none';
    });
    
    // Atualizar pontuação
    if (isCorrect) {
        score++;
        playSuccessAnimation();
    } else {
        playErrorAnimation();
    }
    
    // Mostrar explicação
    explanation.classList.add('show');
    
    // Marcar como respondida
    answered = true;
    
    // Atualizar interface
    updateQuizStats();
    updateNavigationButtons();
    
    console.log(`Pergunta ${questionIndex + 1}: ${isCorrect ? 'Correta' : 'Incorreta'}`);
}

// CONTROLE DE INTERFACE
// ============================================
function showCategorySelection() {
    document.getElementById('categorySelection').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('results').classList.remove('show');
}

function showQuizContainer() {
    document.getElementById('categorySelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('results').classList.remove('show');
}

function showResults() {
    document.getElementById('categorySelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('results').classList.add('show');
}


// ATUALIZAÇÃO DA INTERFACE
// ============================================
function updateQuizStats() {
    document.getElementById('currentQuestionNum').textContent = currentQuestionIndex + 1;
    document.getElementById('currentScore').textContent = score;
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateNavigationButtons() {
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    
    if (answered) {
        if (currentQuestionIndex === totalQuestions - 1) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'inline-block';
        } else {
            nextBtn.disabled = false;
            nextBtn.style.display = 'inline-block';
            finishBtn.style.display = 'none';
        }
    } else {
        nextBtn.disabled = true;
        finishBtn.style.display = 'none';
    }
}


// FINALIZAÇÃO DO QUIZ
// ============================================
function finishQuiz() {
    calculateResults();
    showResults();
    saveQuizResults();
    console.log(`Quiz finalizado! Pontuação: ${score}/${totalQuestions}`);
}

function calculateResults() {
    const percentage = Math.round((score / totalQuestions) * 100);
    const finalScore = document.getElementById('finalScore');
    const performanceMessage = document.getElementById('performanceMessage');
    
    finalScore.textContent = `${score}/${totalQuestions} (${percentage}%)`;
    
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        message = 'Excelente! Você domina muito bem este assunto!';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message = 'Muito bom! Você tem conhecimento sólido na área.';
        emoji = '🥇';
    } else if (percentage >= 70) {
        message = 'Bom trabalho! Continue estudando para aprimorar.';
        emoji = '👍';
    } else if (percentage >= 60) {
        message = 'Razoável. Há espaço para melhorar seus conhecimentos.';
        emoji = '📖';
    } else {
        message = 'Continue praticando! O conhecimento vem com o estudo.';
        emoji = '💪';
    }
    
    performanceMessage.innerHTML = `${emoji} ${message}`;
}

function saveQuizResults() {
    const results = {
        category: currentCategory,
        score: score,
        total: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        date: new Date().toISOString()
    };
    
    // Salvar no sessionStorage (devido a restrições)
    const savedResults = JSON.parse(sessionStorage.getItem('quizResults') || '[]');
    savedResults.push(results);
    sessionStorage.setItem('quizResults', JSON.stringify(savedResults));
}


// REINICIALIZAÇÃO E NAVEGAÇÃO
// ============================================
function restartQuiz() {
    if (currentCategory) {
        selectCategory(currentCategory);
    } else {
        goToCategories();
    }
}

function goToCategories() {
    showCategorySelection();
    resetQuizState();
}

function goBack() {
    if (confirm('Deseja voltar à seleção de categorias? O progresso atual será perdido.')) {
        goToCategories();
    }
}

function resetQuizState() {
    currentCategory = null;
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    totalQuestions = 0;
    questions = [];
}


// ANIMAÇÕES E FEEDBACK
// ============================================
function playSuccessAnimation() {
    // Criar elemento de feedback visual
    const feedback = document.createElement('div');
    feedback.textContent = '✅ Correto!';
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #28a745;
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: bold;
        z-index: 9999;
        animation: fadeInOut 1s ease-in-out;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        document.body.removeChild(feedback);
    }, 1000);
}

function playErrorAnimation() {
    // Criar elemento de feedback visual
    const feedback = document.createElement('div');
    feedback.textContent = '❌ Incorreto!';
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #f25f6eff;
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: bold;
        z-index: 9999;
        animation: fadeInOut 1s ease-in-out;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        document.body.removeChild(feedback);
    }, 1000);
}


// TRATAMENTO DE ERROS
// ============================================
function showError(message) {
    alert('Erro: ' + message);
    console.error('Quiz Error:', message);
}


// EXPORTAÇÃO DE FUNÇÕES GLOBAIS
// ============================================
window.selectCategory = selectCategory;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.finishQuiz = finishQuiz;
window.restartQuiz = restartQuiz;
window.goToCategories = goToCategories;
window.goBack = goBack;