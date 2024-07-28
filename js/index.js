// Função para carregar uma página
function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<p>Erro ao carregar a página.</p>';
        });
}

// Carregar a página inicial por padrão
document.addEventListener('DOMContentLoaded', function() {
    loadPage('home');
});
