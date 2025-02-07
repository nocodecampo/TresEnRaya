const celdas = document.querySelectorAll("div.celda");
const tabla = document.querySelector("div.tablero");
const ganador = document.querySelector("h2.ganador");
let turno = "X";


function comprobarGanador(){
    if(celdas[0].innerHTML === celdas[1].innerHTML && celdas[0].innerHTML === celdas[2].innerHTML && celdas[1].innerHTML === celdas[0].innerHTML && celdas[1].innerHTML === celdas[2].innerHTML && celdas[2].innerHTML === celdas[0].innerHTML && celdas[2].innerHTML === celdas[1].innerHTML && celdas[0].innerHTML !== "")
        {
        celdas[0].style.backgroundColor = "green";
        celdas[1].style.backgroundColor = "green";
        celdas[2].style.backgroundColor = "green";
        tabla.style.pointerEvents = "none";
        ganador.innerText = "Ganador "+celdas[0].innerHTML;
        }
        if(celdas[3].innerHTML === celdas[4].innerHTML && celdas[3].innerHTML === celdas[5].innerHTML && celdas[4].innerHTML === celdas[3].innerHTML && celdas[4].innerHTML === celdas[5].innerHTML && celdas[5].innerHTML === celdas[3].innerHTML && celdas[5].innerHTML === celdas[4].innerHTML && celdas[3].innerHTML !== ""){
        celdas[3].style.backgroundColor = "green";
        celdas[4].style.backgroundColor = "green";
        celdas[5].style.backgroundColor = "green";
        tabla.style.pointerEvents = "none";
        ganador.innerText = "Ganador "+celdas[3].innerHTML;
        };
        if(celdas[6].innerHTML === celdas[7].innerHTML && celdas[6].innerHTML === celdas[8].innerHTML && celdas[7].innerHTML === celdas[6].innerHTML && celdas[7].innerHTML === celdas[8].innerHTML && celdas[8].innerHTML === celdas[6].innerHTML && celdas[8].innerHTML === celdas[7].innerHTML && celdas[6].innerHTML !== ""){
            celdas[6].style.backgroundColor = "green";
            celdas[7].style.backgroundColor = "green";
            celdas[8].style.backgroundColor = "green";
            tabla.style.pointerEvents = "none";
            ganador.innerText = "Ganador "+celdas[6].innerHTML;
            };
            if(celdas[0].innerHTML === celdas[3].innerHTML && celdas[0].innerHTML === celdas[6].innerHTML && celdas[3].innerHTML === celdas[0].innerHTML && celdas[3].innerHTML === celdas[6].innerHTML && celdas[6].innerHTML === celdas[0].innerHTML && celdas[6].innerHTML === celdas[3].innerHTML && celdas[0].innerHTML !== ""){
                celdas[0].style.backgroundColor = "green";
                celdas[3].style.backgroundColor = "green";
                celdas[6].style.backgroundColor = "green";
                tabla.style.pointerEvents = "none";
                ganador.innerText = "Ganador "+celdas[0].innerHTML;
                };
                if(celdas[1].innerHTML === celdas[4].innerHTML && celdas[1].innerHTML === celdas[7].innerHTML && celdas[4].innerHTML === celdas[1].innerHTML && celdas[4].innerHTML === celdas[7].innerHTML && celdas[7].innerHTML === celdas[1].innerHTML && celdas[7].innerHTML === celdas[4].innerHTML && celdas[1].innerHTML !== ""){
                    celdas[1].style.backgroundColor = "green";
                    celdas[4].style.backgroundColor = "green";
                    celdas[7].style.backgroundColor = "green";
                    tabla.style.pointerEvents = "none";
                    ganador.innerText = "Ganador "+celdas[1].innerHTML;
                    };
                    if(celdas[2].innerHTML === celdas[5].innerHTML && celdas[2].innerHTML === celdas[8].innerHTML && celdas[5].innerHTML === celdas[2].innerHTML && celdas[5].innerHTML === celdas[8].innerHTML && celdas[8].innerHTML === celdas[2].innerHTML && celdas[8].innerHTML === celdas[5].innerHTML && celdas[2].innerHTML !== ""){
                        celdas[2].style.backgroundColor = "green";
                        celdas[5].style.backgroundColor = "green";
                        celdas[8].style.backgroundColor = "green";
                        tabla.style.pointerEvents = "none";
                        ganador.innerText = "Ganador "+celdas[2].innerHTML;
                        };
                        if(celdas[0].innerHTML === celdas[4].innerHTML && celdas[0].innerHTML === celdas[8].innerHTML && celdas[4].innerHTML === celdas[0].innerHTML && celdas[4].innerHTML === celdas[8].innerHTML && celdas[8].innerHTML === celdas[0].innerHTML && celdas[8].innerHTML === celdas[4].innerHTML && celdas[0].innerHTML !== ""){
                            celdas[0].style.backgroundColor = "green";
                            celdas[4].style.backgroundColor = "green";
                            celdas[8].style.backgroundColor = "green";
                            tabla.style.pointerEvents = "none";
                            ganador.innerText = "Ganador "+celdas[0].innerHTML;
                            };
                            if(celdas[2].innerHTML === celdas[4].innerHTML && celdas[2].innerHTML === celdas[6].innerHTML && celdas[4].innerHTML === celdas[2].innerHTML && celdas[4].innerHTML === celdas[6].innerHTML && celdas[6].innerHTML === celdas[2].innerHTML && celdas[6].innerHTML === celdas[4].innerHTML && celdas[2].innerHTML !== ""){
                                celdas[2].style.backgroundColor = "green";
                                celdas[4].style.backgroundColor = "green";
                                celdas[6].style.backgroundColor = "green";
                                tabla.style.pointerEvents = "none";
                                ganador.innerText = "Ganador "+celdas[2].innerHTML;
                                };
}

celdas.forEach(function(celda) {
    celda.onclick = function(){
        if(this.innerHTML === ""){
        this.innerHTML = turno;
        this.style.backgroundColor = "#2a2a2a";
        this.style.color = "#ffffff";
        turno = (turno === "X") ? "O" : "X";
        
    }
    comprobarGanador();
    }
});

