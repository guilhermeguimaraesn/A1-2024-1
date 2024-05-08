
function calcularMedia() {
    let nomeAluno = document.getElementById('nome-aluno').value;
    let notaAval = document.getElementById('nota-avaliacao').value;
    let notaTrab = document.getElementById('nota-trabalho').value;
    let notaAtiv = document.getElementById('nota-atividade').value;
    let notaComp = document.getElementById('nota-comportamento').value;
    let mostrarResul = document.getElementById('resultado');

    let media = 0;

    if (nomeAluno == '' || notaAtiv == '' || notaAval == '' || notaTrab == '' || notaComp == '') {
        alert('Preencha todos os campos!')
    } else {
        media = (Number(notaAval) + Number(notaTrab) + Number(notaAtiv) + Number(notaComp)) / 4;

        mostrarResul.innerHTML = `
    <h1>Resultado</h1>
    <p>O aluno <span>${nomeAluno}</span> com as notas: <br> <br>
    
    Nota avaliação: <span>${notaAval}</span> <br>
    Nota trabalho: <span>${notaTrab}</span> <br>
    Nota atividade: <span>${notaAtiv}</span> <br>
    Nota comportamento: <span>${notaComp}</span> <br> <br>

    Ficou com a média de <span>${media.toFixed(2)}</span>!
    `
    }

}

