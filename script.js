                    
function alterar_tema(){
    const body = document.body;
    const paragrafo = document.querySelector("p");
    const titulo = document.querySelector("h1");
    const titulo2 = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll("h2, h3, h4, h5, h6"));
    const temaEscuro = ["#2b2424", "#f9dfdf", "#f5d9d9", "#f1dada"];
    const temaClaro = ["#f0f0f0", "#333", "#444", "#555"];

    // Lemos a cor computada, porque a cor inicial vem do CSS e nao do style inline.
    const corAtual = getComputedStyle(body).backgroundColor;
    body.style.transition = "background-color 0.5s ease";
    if (corAtual === "rgb(240, 240, 240)"){
        body.style.backgroundColor = temaEscuro[0];
        paragrafo.style.color = temaEscuro[1];
        titulo.style.color = temaEscuro[2];
        for (let i = 0; i < titulo2.length; i++) {
            titulo2[i].style.color = temaEscuro[3];
        }
    } else {
        body.style.backgroundColor = temaClaro[0];
        paragrafo.style.color = temaClaro[1];
        titulo.style.color = temaClaro[2];
        for (let i = 0; i < titulo2.length; i++) {
            titulo2[i].style.color = temaClaro[3];
        }
    }
};


