const fila = JSON.parse(localStorage.getItem("filaDeAtendimento")) || [];

const filaDeEspera = document.getElementById("filaDeEspera");
const atendimento = document.getElementById("atendimentoAtual");
const nomeAtendimento = document.getElementById("nomeAtendimento");
const descricaoAtendimento = document.getElementById("descricaoAtendimento");
const botaoFinalizar = document.getElementById("finalizarAtendimento");

let pacienteEmAtendimento = JSON.parse(localStorage.getItem("pacienteEmAtendimento")) || null;

function mostrarFila() {
  filaDeEspera.innerHTML = "<h3>Fila de Espera:</h3>";
  const filaOrdenada = fila.sort((a, b) => b.prioridadeCode - a.prioridadeCode);
  const filaFiltrada = filaOrdenada.filter((paciente) => paciente.id <= 3)


  if (filaFiltrada.length === 0) {
    filaDeEspera.innerHTML = "<h3>Fila de Espera:</h3><p>Nenhum paciente na fila de espera</p>"
    return;
  }

  filaFiltrada.forEach((paciente, index) => {
    const div = document.createElement("div");
    div.classList.add(`paciente`);
    div.classList.add(`${paciente.prioridade}`)
    if (index === 0) {
      div.innerHTML = `  
      
        <div>
            <div class='nome'>Nome: ${paciente.nome}</div>
            <div class='prioridade'>Prioridade: ${paciente.prioridade}</div>
            <div class='motivo'>Motivo: ${paciente.descricao}</div>
        </div>
        <button ${pacienteEmAtendimento ? "disabled" : ""
        } onclick="iniciarAtendimento(${index})">Iniciar Atendimento</button>`;
      filaDeEspera.appendChild(div);
    } else {
      div.innerHTML = `
        
        <div>
            <div class='nome'>Nome: ${paciente.nome}</div>
            <div class='prioridade'>Prioridade: ${paciente.prioridade}</div>
            <div class='motivo'>Motivo: ${paciente.descricao}</div>
        </div>
        `;
      filaDeEspera.appendChild(div);
    }
  });
}

const TODAS_AS_PRIORIDADES = ["urgente", "moderado", "leve"];

function atualizarAtendimento() {
  if (pacienteEmAtendimento) {
    atendimento.style.display = "block";
    nomeAtendimento.textContent = `Nome: ${pacienteEmAtendimento.nome}`;
    descricaoAtendimento.textContent = `Motivo: ${pacienteEmAtendimento.descricao}`;


    atendimento.classList.remove(...TODAS_AS_PRIORIDADES);

    atendimento.classList.add("paciente", pacienteEmAtendimento.prioridade);

  } else {

    nomeAtendimento.textContent = "Nenhum paciente em atendimento.";
    descricaoAtendimento.textContent = "";
    atendimento.classList.remove("paciente", ...TODAS_AS_PRIORIDADES);
  }
}

function iniciarAtendimento(index) {
  pacienteEmAtendimento = fila[index];

  fila.splice(index, 1);
  localStorage.setItem("filaDeAtendimento", JSON.stringify(fila));
  localStorage.setItem("pacienteEmAtendimento", JSON.stringify(pacienteEmAtendimento));

  atualizarAtendimento();
  mostrarFila();
}

botaoFinalizar.addEventListener("click", () => {
  pacienteEmAtendimento = null;
  localStorage.removeItem("pacienteEmAtendimento");

  atualizarAtendimento();
  mostrarFila();
});

atualizarAtendimento();
mostrarFila();
