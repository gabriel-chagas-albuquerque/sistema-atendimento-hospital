const fila = JSON.parse(localStorage.getItem('filaDeAtendimento'))
const filaDeEspera = document.querySelector('#filaDeEspera')
const filaOrdenada = fila.sort((a,b) => b.prioridadeCode - a.prioridadeCode)
let pacientes = ""
filaDeEspera.innerHTML = filaOrdenada.map((paciente) => {
        pacientes += `
                        <li>
                            <h4>${paciente.nome}</h4>
                            <p>${paciente.prioridade}</p>
                        </li>
                        
                    `
    })


filaDeEspera.innerHTML = pacientes





                            
                        