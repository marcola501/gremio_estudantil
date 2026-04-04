                    
function alterar_tema(){
    const body = document.body;
    const paragrafo = /** @type {NodeListOf<HTMLElement>} */ document.querySelectorAll("p");
    const titulo =/** @type {NodeListOf<HTMLElement>} */  document.querySelectorAll("h1");
    const titulo2 = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll("h2, h3, h4, h5, h6"));
    const temaEscuro = ["#2b2424", "#f9dfdf", "#f5d9d9", "#f1dada"];
    const temaClaro = ["#f0f0f0", "#333", "#444", "#555"];
    const insta = /** @type {HTMLImageElement | null} */ (document.getElementById("instaLogo"));
    const sombra =  /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll(".post"));

    if (!insta) {
        console.warn("Logo do Instagram nao encontrada.");
        return;
    }

    // Lemos a cor computada, porque a cor inicial vem do CSS e nao do style inline.
    const corAtual = getComputedStyle(body).backgroundColor;
    body.style.transition = "background-color 0.5s ease-in-out";
    insta.style.transition = "width 0.5s ease-in-out, height 0.5s ease-in-out";
    
    if (corAtual === "rgb(240, 240, 240)"){
        body.style.backgroundColor = temaEscuro[0];
        for (let i = 0;i<paragrafo.length;i++){
             paragrafo[i].style.color = temaEscuro[1];
        }
        for (let i = 0; i < titulo.length; i++) {
            titulo[i].style.color = temaEscuro[2];
        }
        for (let i = 0; i < titulo2.length; i++) {
            titulo2[i].style.color = temaEscuro[3];
        }
        insta.style.width = "3rem";
        insta.style.height = "3rem";
        insta.src = "imagens/instalogo.png";
        for (let i = 0; i < sombra.length; i++) {
            sombra[i].style.boxShadow = "0 4px 8px rgb(244, 238, 238)";
        }
    } else {
        body.style.backgroundColor = temaClaro[0];
        for (let i = 0; i < paragrafo.length; i++) {
            paragrafo[i].style.color = temaClaro[1];
        }
        for (let i = 0; i < titulo.length; i++) {
            titulo[i].style.color = temaClaro[2];
        }
        for (let i = 0; i < titulo2.length; i++) {
            titulo2[i].style.color = temaClaro[3];
        }
        insta.src = "imagens/instaLogoBranca.png";
        insta.style.width = "2rem";
        insta.style.height = "2rem";
        for (let i = 0; i < sombra.length; i++) {
            sombra[i].style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        }
    }
};
function doSomething() {
  console.info("DOM carregado");
}

if (document.readyState === "loading") {  // Ainda carregando
  document.addEventListener("DOMContentLoaded", doSomething);
} else {  // `DOMContentLoaded` foi disparado
  doSomething();
}

