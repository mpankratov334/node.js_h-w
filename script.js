// Это ваш первый скрипт на JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Найдем кнопку по ID
    const button = document.getElementById('myButton');

    // Добавим обработчик события click
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});
