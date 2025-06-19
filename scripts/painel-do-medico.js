let fila = JSON.parse(localStorage.getItem('filaDeAtendimento')) || [];

const filaDeEspera = document.getElementById('filaDeEspera');
const atendimento = document.getElementById('atendimentoAtual');
const nomeAtendimento = document.getElementById('nomeAtendimento');
const descricaoAtendimento = document.getElementById('descricaoAtendimento');


let pacienteEmAtendimento = null;


function mostrarFila() {
    filaDeEspera.innerHTML = '';
    fila.sort((a, b) => b.prioridadeCode - a.prioridadeCode);
    fila.forEach((paciente, index) => {
        const div = document.createElement('div');
        div.classList.add('paciente');
        div.innerHTML = `
        <div>
            <div class='nome'>Nome: ${paciente.nome}</div>
            <div class='prioridade'>Prioridade: ${paciente.prioridade}</div>
            <div class='motivo'>Motivo: ${paciente.descricao}</div>
        </div>
        <button ${pacienteEmAtendimento ? 'disabled' : ''} onclick="iniciarAtendimento(${index})">Iniciar Atendimento</button>`;
        filaDeEspera.appendChild(div);
    })
}

function iniciarAtendimento(index) {
    pacienteEmAtendimento = fila[index];
    fila.splice(index, 1);
    localStorage.setItem('filaDeAtendimento', JSON.stringify(fila));
    atendimento.style.display = 'block';
    nomeAtendimento.textContent = `Nome: ${pacienteEmAtendimento.nome}`;
    descricaoAtendimento.textContent = `Motivo: ${pacienteEmAtendimento.descricao}`;
    mostrarFila();
  }

mostrarFila();