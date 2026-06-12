let classificacaoAtual = "";

function MostrarCalculo() {

    document.getElementById("inicio").classList.add("d-none");

    document.getElementById("calculo").classList.remove("d-none");
}

function calcularIMC() {

    let peso =
        parseFloat(document.getElementById("peso").value);

    let altura =
        parseFloat(document.getElementById("altura").value);

    if (!peso || !altura) {

        alert("Preencha todos os campos.");

        return;
    }

    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML =
        "IMC: " + imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {

        classificacao = "Abaixo do Peso";

    } else if (imc < 25) {

        classificacao = "Peso Normal";

    } else if (imc < 30) {

        classificacao = "Sobrepeso";

    } else if (imc < 35) {

        classificacao = "Obesidade Grau I";

    } else if (imc < 40) {

        classificacao = "Obesidade Grau II";

    } else {

        classificacao = "Obesidade Grau III";
    }

    classificacaoAtual = classificacao;

    document.getElementById("classificacao").innerHTML =
        classificacao;

    document.getElementById("btnRecomendacao")
        .classList.remove("d-none");
}

function mostrarRecomendacoes() {

    document.getElementById("recomendacoes")
        .classList.remove("d-none");

    let nutricao =
        document.getElementById("nutricao");

    let atividades =
        document.getElementById("atividades");

    nutricao.innerHTML = "";
    atividades.innerHTML = "";

    let dicasNutri = [];
    let dicasAtiv = [];

    switch(classificacaoAtual){

        case "Abaixo do Peso":

            dicasNutri = [
                "Aumentar consumo de proteínas",
                "Refeições regulares",
                "Frutas e carboidratos saudáveis",
                "Orientação profissional"
            ];

            dicasAtiv = [
                "Musculação leve",
                "Funcional moderado",
                "Alongamentos",
                "Caminhadas leves"
            ];

        break;

        case "Peso Normal":

            dicasNutri = [
                "Manter alimentação equilibrada",
                "Consumir água regularmente",
                "Priorizar alimentos naturais"
            ];

            dicasAtiv = [
                "Caminhada",
                "Corrida leve",
                "Musculação",
                "Natação",
                "Bicicleta"
            ];

        break;

        case "Sobrepeso":

            dicasNutri = [
                "Reduzir ultraprocessados",
                "Diminuir açúcar",
                "Mais verduras e legumes",
                "Praticar exercícios"
            ];

            dicasAtiv = [
                "Caminhadas",
                "Bicicleta",
                "Aeróbicos leves",
                "Funcional",
                "Natação"
            ];

        break;

        case "Obesidade Grau I":

            dicasNutri = [
                "Buscar orientação nutricional",
                "Controlar porções",
                "Criar rotina saudável",
                "Monitorar peso"
            ];

            dicasAtiv = [
                "Caminhada supervisionada",
                "Alongamentos",
                "Hidroginástica",
                "Resistência leve"
            ];

        break;

        case "Obesidade Grau II":

            dicasNutri = [
                "Acompanhamento médico",
                "Plano alimentar supervisionado",
                "Metas progressivas",
                "Evitar industrializados"
            ];

            dicasAtiv = [
                "Caminhadas leves",
                "Exercícios acompanhados",
                "Hidroginástica",
                "Bicicleta ergométrica"
            ];

        break;

        default:

            dicasNutri = [
                "Acompanhamento especializado",
                "Plano alimentar personalizado",
                "Avaliações periódicas",
                "Hábitos saudáveis"
            ];

            dicasAtiv = [
                "Exercícios supervisionados",
                "Alongamentos leves",
                "Caminhadas curtas",
                "Atividades de baixo impacto",
                "Hidroterapia"
            ];
    }

    dicasNutri.forEach(item => {
        nutricao.innerHTML += `<li>${item}</li>`;
    });

    dicasAtiv.forEach(item => {
        atividades.innerHTML += `<li>${item}</li>`;
    });

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}