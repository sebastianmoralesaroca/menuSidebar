console.log("hello") ;

const btnBurger = document.getElementById("btnBurger");
const containerMenu = document.getElementById("containerMenu");
const menu = document.getElementById("menu");


btnBurger.addEventListener("click", function container (onclick) {
    let valor = 0 ;
    valor = valor + 1 ;
    console.log (valor) ;
    if (valor == 1) {
        containerMenu.style.display = "block";
    } else {
        valor = 0 ;
        containerMenu.style.display = "block" ;
    }
});