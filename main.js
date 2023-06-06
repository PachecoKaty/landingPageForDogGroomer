
let button = document.getElementById("icon");
let links = document.getElementById("links");
let wave = document.getElementById("wave");
let imagen = document.getElementById("dog-imagen");
let cont = 0;

button.addEventListener("click", function(e){
    e.preventDefault();
    if(cont==0){
        links.className = ("links two");
        wave.style.display = "none"; // Oculta la sección de la ola al abrir el menú
        imagen.style.display = "none";
        cont=1;
    }else{
        links.classList.remove("two");
        links.className =("links one");
        imagen.style.display = "block";
        setTimeout(function() {
            wave.style.display = "block"; // Muestra la sección de la ola después de cerrar el menú
        }, 250); // Puedes ajustar el tiempo de espera según tus necesidades
        cont=0;
    }
});                                                     
 