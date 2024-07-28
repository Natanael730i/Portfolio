function loadCSS(filename) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = filename;
    document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', function() {
    loadCSS('styles.css');
});