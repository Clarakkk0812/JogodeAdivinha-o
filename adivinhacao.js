alert("Qual seu nome?");
let nome = prompt("Digite seu nome:");
alert("Olá, " + nome + "! Seja bem-vindo(a) ao jogo de adivinhação.");

let continuarJogando = true;

while (continuarJogando) {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; // 1 a 100
    const tentativasMaximas = 5;
    let tentativas = 0;
    let acertou = false;

    alert("Pensei em um número entre 1 e 100. Você tem " + tentativasMaximas + " tentativas para adivinhar!");

    while (tentativas < tentativasMaximas) {
        let entrada = prompt("Tentativa " + (tentativas + 1) + ": Digite seu palpite:");

        if (entrada === null) {
            alert("Jogo cancelado.");
            continuarJogando = false;
            break;
        }

        if (entrada.toLowerCase().trim() === "sair") {
            alert("Jogo encerrado. Até a próxima, " + nome + "!");
            continuarJogando = false;
            break;
        }

        let palpite = parseInt(entrada);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            alert("Por favor, digite um número válido entre 1 e 100.");
            continue;
        }

        tentativas++;

        if (palpite === numeroSecreto) {
            alert("🎉 Parabéns, " + nome + "! Você acertou o número secreto: " + numeroSecreto + "!");
            acertou = true;
            break;
        } else if (palpite < numeroSecreto) {
            alert("Errou! O número secreto é MAIOR que " + palpite + ".");
        } else {
            alert("Errou! O número secreto é MENOR que " + palpite + ".");
        }
    }

    if (!acertou && continuarJogando) {
        alert("😢 Que pena, " + nome + "! Você usou todas as tentativas. O número secreto era " + numeroSecreto + ".");
    }

    if (continuarJogando) {
        let jogarDeNovo = prompt("Deseja jogar novamente? (sim / não)").toLowerCase().trim();
        if (jogarDeNovo !== "sim") {
            alert("Obrigado por jogar, " + nome + "! Até a próxima.");
            continuarJogando = false;
        }
    }
}
