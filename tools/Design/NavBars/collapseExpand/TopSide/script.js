document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.navbar .toggle');
    var navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('responsive');

        toggleButton.textContent == '=' ? toggleButton.querySelector('a').innerHTML = 'x' : toggleButton.querySelector('a').innerHTML = '='
    });
});
