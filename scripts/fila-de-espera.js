const fila = JSON.parse(localStorage.getItem('filaDeAtendimento'))
const filaDeEspera = document.querySelector('#filaDeEspera')
const filaOrdenada = fila.sort((a,b) => b.prioridadeCode - a.prioridadeCode)





                            
                        