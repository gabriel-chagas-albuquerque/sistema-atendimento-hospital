const paciente = localStorage.getItem("paciente");
const motivo = localStorage.getItem("motivo");

const infoUsuarios = document.querySelector("#info-usuarios");
if (paciente && motivo) {
  infoUsuarios.innerHTML = `<h2 id="nome-paciente">${paciente}</h2>
                              <p id="motivo-atendimento">${motivo}</p>`;
}

const filaDeAtendimento =
  JSON.parse(localStorage.getItem("filaDeAtendimento")) || [];

const botaoEnviar = document.querySelector("#btn-enviar");
botaoEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  const prioridade = document.querySelector('input[name="prioridade"]:checked');

  if (prioridade) {
    let prioridadeCode = 0;
    if (prioridade.value == "urgente") {
      prioridadeCode = 2;
    } else if (prioridade.value == "moderado") {
      prioridadeCode = 1;
    }
    filaDeAtendimento.push({
      id: filaDeAtendimento.length + 1,
      nome: localStorage.getItem("paciente"),
      descricao: localStorage.getItem("motivo"),
      prioridade: prioridade.value,
      prioridadeCode: prioridadeCode,
      dataHora: new Date().toLocaleString(),
    });
    localStorage.setItem(
      "filaDeAtendimento",
      JSON.stringify(filaDeAtendimento)
    );
    localStorage.removeItem("paciente");
    localStorage.removeItem("motivo");
    alert("Paciente adicionado à fila!");
    window.location.href = "./fila-de-espera.html";
  } else {
    alert("Selecione uma prioridade!");
  }
});
