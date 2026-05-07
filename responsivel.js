function medir_tela() {
	return {
		largura: window.innerWidth,
		altura: window.innerHeight
	};
}

function aplicar_breakpoint() {
	const { largura, altura } = medir_tela();
	const articles = document.querySelectorAll("article");

	articles.forEach((article) => {
		article.classList.remove("tela-pequena", "tela-media", "tela-grande");
	});

	// Breakpoints simples para CSS ou JS.
	if (largura <= 600) {
		articles.forEach((article) => {
			article.classList.add("tela-pequena");
		});
	} else if (largura <= 1024) {
		articles.forEach((article) => {
			article.classList.add("tela-media");
		});
	} else {
		articles.forEach((article) => {
			article.classList.add("tela-grande");
		});
	}

	// Exponha os valores no DOM se quiser inspecionar.
	articles.forEach((article) => {
		article.dataset.largura = String(largura);
		article.dataset.altura = String(altura);
	});
}

function iniciar_responsivo() {
	aplicar_breakpoint();
	window.addEventListener("resize", aplicar_breakpoint);
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", iniciar_responsivo);
} else {
	iniciar_responsivo();
}
