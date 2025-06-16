const botaoCadastro = document.querySelector("#btn-cadastro")

botaoCadastro.addEventListener('click', (e) => {
    e.preventDefault() // Previne o comportamento padrão do link
    
    const paciente = document.querySelector('#paciente').value
    const motivoAtendimento = document.querySelector('#motivo').value
    
    // Salva os dados no localStorage para usar na próxima página
    localStorage.setItem('paciente', paciente)
    localStorage.setItem('motivo', motivoAtendimento)

    //Resetar o formulário
    const form = document.querySelector('#form-cadastro')
    form.reset()
    
    // Redireciona para a página de triagem
    window.location.href = './triagem.html'
})