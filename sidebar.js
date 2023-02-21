console.log("hello") ;

const btnBurger = document.getElementById("btnBurger");
const containerMenu = document.getElementById("containerMenu");
const menu = document.getElementById("menu");
const btncancelar = document.getElementById("btncancelar") ;


let valor = 0 ;
btnBurger.addEventListener("click", function container (onclick) {
    valor = valor + 1 ;
    console.log("menu a la vista.") ;
    if (valor == 1) {
        containerMenu.style.display = "block";
    } else {
        valor = 0 ;
        containerMenu.style.display = "none" ;
        console.log("menu oculto") ;
    }
});

btncancelar.addEventListener("click", () => {
    containerMenu.style.display = "none" ;
});