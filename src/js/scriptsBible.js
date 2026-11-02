function trocarModulo(idDoModulo) {
    const modulos = document.querySelectorAll('.modulo');

    modulos.forEach(function (modulo) {
        modulo.hidden = modulo.id !== idDoModulo;
    });
}

const butoesModulos = document.querySelectorAll("[data-modulo]");

butoesModulos.forEach(function (botao) {
    botao.addEventListener("click", function () {
        trocarModulo(botao.dataset.modulo);

        butoesModulos.forEach(function (outroBotao) {
            outroBotao.classList.remove("ativo");
        });
        botao.classList.add("ativo");
    });
});