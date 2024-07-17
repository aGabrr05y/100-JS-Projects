document.addEventListener('DOMContentLoaded', function(){
    const card1 = document.querySelector(".card1");

    function contend(img, text, autor) {
        return `${img}${text}${autor}`;
    }

    // Definimos los datos a mostrar
    const dataImg = [
        "<img src='perro.jpg' alt=''>",
        "<img src='gato.jpg' alt=''>",
        "<img src='pinguino.jpg' alt=''>"
    ];
    const datatext = [
        "<h3>La vida es lo que sucede mientras estás ocupado haciendo otros planes.</h3>",
        "<h3>La vida es 10% lo que me ocurre y 90% cómo reacciono a ello</h3>",
        "<h3>El único límite a nuestros logros de mañana está en nuestras dudas de hoy.</h3>"
    ];
    const dataautor = [
        "<h4>-- John Lennon</h4>",
        "<h4> - Charles R. Swindoll</h4>",
        "<h4>- Franklin D. Roosevelt</h4>"
    ];

    let dato = 0;

    // Función para mostrar la información
    function showInformation() {
        card1.innerHTML = contend(dataImg[dato], datatext[dato], dataautor[dato]);
        dato++;
        if (dato >= dataImg.length) {
            dato = 0; // Reinicia al llegar al final del array
        }
    }

    // Mostrar la primera vez al cargar la página
    showInformation();

    // Configurar setInterval para ejecutar showInformation cada 5 segundos (5000 milisegundos)
    setInterval(showInformation, 5000);
});