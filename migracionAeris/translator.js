$(document).ready(function() {
    $('#translate-form').submit(function(e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const textToTranslate = $('#source-text').val();
        const targetLanguage = $('#target-language').val();

        if (textToTranslate.trim() !== '') {
            translateText(textToTranslate, targetLanguage);
        } else {
            alert('Por favor ingresa un texto para traducir.');
        }
    });
});

function translateText(text, targetLanguage) {
    // Aquí es donde iría la llamada a la API de traducción (Google, por ejemplo).
    // Por razones de seguridad, usaremos un ejemplo simulado.

    // Simulando una respuesta de una API
    const translatedText = simulateTranslation(text, targetLanguage);
    
    // Mostrar el texto traducido en la página
    $('#translated-text').text(translatedText);
}

function simulateTranslation(text, targetLanguage) {
    // Esto es solo para simular una traducción.
    const translations = {
        'es': {
            'en': 'Hello, how are you?',
            'fr': 'Bonjour, comment ça va?',
            'de': 'Hallo, wie geht es dir?',
            'it': 'Ciao, come stai?',
            'pt': 'Olá, como você está?'
        }
    };

    // Devolver la traducción simulada
    return translations['es'][targetLanguage] || text;
}
function translateText(text, targetLanguage) {
    $.ajax({
        url: `https://translation.googleapis.com/language/translate/v2`,
        type: 'POST',
        data: {
            q: text,
            target: targetLanguage,
            key: 'YOUR_GOOGLE_API_KEY'  // Inserta tu clave de API de Google Cloud
        },
        success: function(response) {
            $('#translated-text').text(response.data.translations[0].translatedText);
        },
        error: function(err) {
            console.log(err);
            alert('Error al traducir el texto.');
        }
    });
}
