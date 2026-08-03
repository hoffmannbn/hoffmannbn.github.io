// Exemplo simples: Alerta de boas-vindas no console e ajuste dinâmico do ano no rodapé
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página de TI carregada com sucesso e pronta para conversão!");
    
    // Atualiza o ano no rodapé automaticamente
    const anoAtual = new Date().getFullYear();
    const copyElement = document.querySelector(".copy");
    if (copyElement) {
        copyElement.innerHTML = `&copy; ${anoAtual} TechSuporte. Todos os direitos reservados.`;
    }
});