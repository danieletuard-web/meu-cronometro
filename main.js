// Seleciona todos os elementos com a classe 'botao'
const contadores = document.querySelectorAll(".contador");

// Define as datas objetivo para cada cronômetro
const tempoObjetivo1 = new Date("2026-12-31T23:59:59");
const tempoObjetivo2 = new Date("2026-11-15T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2];

// Função que calcula a diferença de tempo
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal > 0) {
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

// Função que atualiza a tela usando o laço FOR
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

// Executa a função a cada 1 segundo para o cronômetro rodar em tempo real
setInterval(atualizaCronometro, 1000);
