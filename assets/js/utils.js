
// FUNÇÕES UTILITÁRIAS
// ============================================

// MANIPULAÇÃO DE ARRAYS
// ============================================

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 * @param {Array} array - Array a ser embaralhado
 * @returns {Array} - Array embaralhado
 */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Seleciona elementos aleatórios de um array
 * @param {Array} array - Array fonte
 * @param {number} count - Quantidade de elementos a selecionar
 * @returns {Array} - Array com elementos selecionados
 */
function getRandomElements(array, count) {
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, count);
}
// FORMATAÇÃO DE DADOS
// ============================================

/**
 * Formata porcentagem
 * @param {number} value - Valor entre 0 e 1
 * @param {number} decimals - Número de casas decimais
 * @returns {string} - Porcentagem formatada
 */
function formatPercentage(value, decimals = 1) {
    return (value * 100).toFixed(decimals) + '%';
}

/**
 * Formata tempo em segundos para formato legível
 * @param {number} seconds - Tempo em segundos
 * @returns {string} - Tempo formatado
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes > 0) {
        return `${minutes}min ${remainingSeconds}s`;
    }
    return `${remainingSeconds}s`;
}

/**
 * Formata data para formato brasileiro
 * @param {Date|string} date - Data a ser formatada
 * @returns {string} - Data formatada
 */
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// VALIDAÇÃO DE DADOS
// ============================================

/**
 * Verifica se um valor é um número válido
 * @param {any} value - Valor a ser verificado
 * @returns {boolean} - True se for um número válido
 */
function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Verifica se um objeto tem todas as propriedades necessárias
 * @param {Object} obj - Objeto a ser verificado
 * @param {Array<string>} requiredProps - Array com propriedades obrigatórias
 * @returns {boolean} - True se todas as propriedades existirem
 */
function hasRequiredProperties(obj, requiredProps) {
    return requiredProps.every(prop => obj.hasOwnProperty(prop));
}

/**
 * Valida estrutura de uma pergunta do quiz
 * @param {Object} question - Pergunta a ser validada
 * @returns {boolean} - True se a pergunta for válida
 */
function validateQuestion(question) {
    const requiredProps = ['question', 'options', 'correct', 'explanation'];
    
    if (!hasRequiredProperties(question, requiredProps)) {
        return false;
    }
    
    if (!Array.isArray(question.options) || question.options.length < 2) {
        return false;
    }
    
    if (!isValidNumber(question.correct) || 
        question.correct < 0 || 
        question.correct >= question.options.length) {
        return false;
    }
    
    return true;
}

// MANIPULAÇÃO DO DOM
// ============================================

/**
 * Cria elemento HTML com classes e conteúdo
 * @param {string} tag - Tag do elemento
 * @param {string|Array} classes - Classes CSS
 * @param {string} content - Conteúdo HTML
 * @returns {HTMLElement} - Elemento criado
 */
function createElement(tag, classes = [], content = '') {
    const element = document.createElement(tag);
    
    if (typeof classes === 'string') {
        element.className = classes;
    } else if (Array.isArray(classes)) {
        element.classList.add(...classes);
    }
    
    if (content) {
        element.innerHTML = content;
    }
    
    return element;
}

/**
 * Remove todos os filhos de um elemento
 * @param {HTMLElement} element - Elemento pai
 */
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/**
 * Adiciona evento de clique com debounce
 * @param {HTMLElement} element - Elemento
 * @param {Function} callback - Função callback
 * @param {number} delay - Delay em ms
 */
function addDebouncedClickEvent(element, callback, delay = 300) {
    let timeoutId;
    
    element.addEventListener('click', function(event) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback.call(this, event);
        }, delay);
    });
}

// ANIMAÇÕES E EFEITOS
// ============================================

/**
 * Anima contador numérico
 * @param {HTMLElement} element - Elemento a ser animado
 * @param {number} start - Valor inicial
 * @param {number} end - Valor final
 * @param {number} duration - Duração em ms
 */
function animateNumber(element, start, end, duration = 1000) {
    const startTime = performance.now();
    const difference = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        const current = Math.round(start + (difference * easedProgress));
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

/**
 * Aplica efeito de shake em um elemento
 * @param {HTMLElement} element - Elemento a ser animado
 * @param {number} duration - Duração em ms
 */
function shakeElement(element, duration = 500) {
    element.style.animation = `shake ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// UTILITÁRIOS DE PERFORMANCE
// ============================================

/**
 * Debounce - limita a frequência de execução de uma função
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function} - Função com debounce aplicado
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle - limita a frequência máxima de execução
 * @param {Function} func - Função a ser executada
 * @param {number} limit - Limite em ms
 * @returns {Function} - Função com throttle aplicado
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// UTILITÁRIOS DE STORAGE
// ============================================

/**
 * Salva dados no sessionStorage com tratamento de erro
 * @param {string} key - Chave
 * @param {any} data - Dados a serem salvos
 * @returns {boolean} - True se salvou com sucesso
 */
function saveToSession(key, data) {
    try {
        sessionStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.warn('Erro ao salvar no sessionStorage:', error);
        return false;
    }
}

/**
 * Recupera dados do sessionStorage
 * @param {string} key - Chave
 * @param {any} defaultValue - Valor padrão se não encontrar
 * @returns {any} - Dados recuperados
 */
function loadFromSession(key, defaultValue = null) {
    try {
        const data = sessionStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.warn('Erro ao recuperar do sessionStorage:', error);
        return defaultValue;
    }
}


// UTILITÁRIOS DE LOGGING
// ============================================

/**
 * Logger personalizado com diferentes níveis
 */
const Logger = {
    info: (message, data = null) => {
        console.log(`📢 INFO: ${message}`, data || '');
    },
    
    warn: (message, data = null) => {
        console.warn(`⚠️ WARN: ${message}`, data || '');
    },
    
    error: (message, error = null) => {
        console.error(`❌ ERROR: ${message}`, error || '');
    },
    
    success: (message, data = null) => {
        console.log(`✅ SUCCESS: ${message}`, data || '');
    }
};

// UTILITÁRIOS MATEMÁTICOS
// ============================================

/**
 * Calcula média de um array de números
 * @param {Array<number>} numbers - Array de números
 * @returns {number} - Média calculada
 */
function average(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

/**
 * Gera número aleatório entre min e max
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @returns {number} - Número aleatório
 */
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Arredonda número para quantidade específica de casas decimais
 * @param {number} num - Número a ser arredondado
 * @param {number} decimals - Quantidade de casas decimais
 * @returns {number} - Número arredondado
 */
function roundTo(num, decimals) {
    return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);
}


// UTILITÁRIOS DE URL E NAVEGAÇÃO
// ============================================

/**
 * Obtém parâmetro da URL
 * @param {string} name - Nome do parâmetro
 * @returns {string|null} - Valor do parâmetro
 */
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Atualiza parâmetro na URL sem recarregar a página
 * @param {string} key - Chave do parâmetro
 * @param {string} value - Valor do parâmetro
 */
function updateURLParameter(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}

// UTILITÁRIOS DE DETECÇÃO DE DISPOSITIVO
// ============================================

/**
 * Detecta se é um dispositivo móvel
 * @returns {boolean} - True se for mobile
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Detecta se é um tablet
 * @returns {boolean} - True se for tablet
 */
function isTablet() {
    return /iPad|Android|Tablet/i.test(navigator.userAgent) && window.innerWidth >= 768;
}

/**
 * Detecta se é desktop
 * @returns {boolean} - True se for desktop
 */
function isDesktop() {
    return !isMobile() && !isTablet();
}

// UTILITÁRIOS DE ACESSIBILIDADE
// ============================================

/**
 * Adiciona suporte a navegação por teclado
 * @param {HTMLElement} element - Elemento
 * @param {Function} callback - Função callback
 */
function addKeyboardSupport(element, callback) {
    element.setAttribute('tabindex', '0');
    element.addEventListener('keydown', function(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            event.preventDefault();
            callback.call(this, event);
        }
    });
}

/**
 * Anuncia mensagem para leitores de tela
 * @param {string} message - Mensagem a ser anunciada
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}


// UTILITÁRIOS DE CORES
// ============================================

/**
 * Converte HEX para RGB
 * @param {string} hex - Cor em formato HEX
 * @returns {Object} - Objeto com valores RGB
 */
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Calcula luminosidade de uma cor
 * @param {number} r - Vermelho (0-255)
 * @param {number} g - Verde (0-255)
 * @param {number} b - Azul (0-255)
 * @returns {number} - Luminosidade (0-1)
 */
function getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}


// UTILITÁRIOS DE EXPORTAÇÃO DE DADOS
// ============================================

/**
 * Converte dados para CSV
 * @param {Array<Object>} data - Array de objetos
 * @param {Array<string>} headers - Cabeçalhos das colunas
 * @returns {string} - String CSV
 */
function arrayToCSV(data, headers = null) {
    if (!data.length) return '';
    
    const csvHeaders = headers || Object.keys(data[0]);
    const csvRows = [csvHeaders.join(',')];
    
    data.forEach(row => {
        const values = csvHeaders.map(header => {
            const value = row[header] || '';
            return `"${String(value).replace(/"/g, '""')}"`;
        });
        csvRows.push(values.join(','));
    });
    
    return csvRows.join('\n');
}

/**
 * Faz download de arquivo
 * @param {string} content - Conteúdo do arquivo
 * @param {string} filename - Nome do arquivo
 * @param {string} contentType - Tipo MIME
 */
function downloadFile(content, filename, contentType = 'text/plain') {
    const blob = new Blob([content], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
}


// UTILITÁRIOS DE CONFIGURAÇÃO
// ============================================

/**
 * Configurações padrão do quiz
 */
const QuizConfig = {
    // Timing
    DEFAULT_QUESTION_TIME: 30000, // 30 segundos
    ANIMATION_DURATION: 300,
    FEEDBACK_DURATION: 2000,
    
    // Pontuação
    CORRECT_POINTS: 10,
    BONUS_SPEED_MULTIPLIER: 1.5,
    
    // Interface
    MIN_QUESTIONS: 5,
    MAX_QUESTIONS: 50,
    RESULTS_ANIMATION_DELAY: 500,
    
    // Performance
    EXCELLENT_THRESHOLD: 90,
    GOOD_THRESHOLD: 70,
    FAIR_THRESHOLD: 50,
    
    // Cores do tema
    COLORS: {
        PRIMARY: '#667eea',
        SECONDARY: '#764ba2',
        SUCCESS: '#28a745',
        ERROR: '#dc3545',
        WARNING: '#ffc107',
        INFO: '#17a2b8'
    }
};


// INICIALIZAÇÃO DAS ANIMAÇÕES CSS
// ============================================

/**
 * Adiciona estilos CSS para animações dinâmicas
 */
function initializeDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0; transform: scale(0.8); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
            20%, 40%, 60%, 80% { transform: translateX(3px); }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
        
        .quiz-transition {
            transition: all 0.3s ease;
        }
        
        .quiz-fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        
        .quiz-shake {
            animation: shake 0.5s ease-in-out;
        }
        
        .quiz-bounce {
            animation: bounce 0.6s ease;
        }
    `;
    
    document.head.appendChild(style);
}


// EXPORTAÇÃO GLOBAL
// ============================================

// Tornar funções disponíveis globalmente
window.QuizUtils = {
    // Array utilities
    shuffleArray,
    getRandomElements,
    
    // Formatting
    formatPercentage,
    formatTime,
    formatDate,
    
    // Validation
    isValidNumber,
    hasRequiredProperties,
    validateQuestion,
    
    // DOM manipulation
    createElement,
    clearElement,
    addDebouncedClickEvent,
    
    // Animations
    animateNumber,
    shakeElement,
    
    // Performance
    debounce,
    throttle,
    
    // Storage
    saveToSession,
    loadFromSession,
    
    // Logging
    Logger,
    
    // Math
    average,
    randomBetween,
    roundTo,
    
    // URL
    getURLParameter,
    updateURLParameter,
    
    // Device detection
    isMobile,
    isTablet,
    isDesktop,
    
    // Accessibility
    addKeyboardSupport,
    announceToScreenReader,
    
    // Colors
    hexToRgb,
    getLuminance,
    
    // Export
    arrayToCSV,
    downloadFile,
    
    // Config
    QuizConfig
};

// Inicializar estilos dinâmicos quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDynamicStyles);
} else {
    initializeDynamicStyles();
}