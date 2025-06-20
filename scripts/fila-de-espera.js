const fila = JSON.parse(localStorage.getItem("filaDeAtendimento")) || [];
const filaDeEspera = document.querySelector("#filaDeEspera");

function mostrarFila() {
  filaDeEspera.innerHTML = "<h3>Fila de Espera:</h3>";
  
  if (fila.length == 0) {
    filaDeEspera.innerHTML = `<h2>Não há pacientes na fila!</h2>`;
  } else {
    const filaOrdenada = fila.sort((a, b) => b.prioridadeCode - a.prioridadeCode);
    
    const filaFiltrada = filaOrdenada.filter((paciente) => paciente.id<=4 )
    filaFiltrada.forEach((paciente) => {
      const div = document.createElement("div");
      div.classList.add("paciente");
      div.classList.add(`${paciente.prioridade}`)
      div.innerHTML = `
        
        <div>
            <div class='nome'>Nome: ${paciente.nome}</div>
            <div class='prioridade'>Prioridade: ${paciente.prioridade}</div>
            <div class='motivo'>Motivo: ${paciente.descricao}</div>
        </div>
        `;
      filaDeEspera.appendChild(div);
    });
  }
}

mostrarFila()