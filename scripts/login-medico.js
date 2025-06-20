const contasMedicos = [
    {
        id:1,
        login: "jcarlosmedico@mail.com",
        senha:"senha"
    },
    {
        id:2,
        login: "mariaalice12@mail.com",
        senha: "Dorinha"
    }
]

const btnLogin = document.querySelector('#btn-login')

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const login = document.querySelector("#login").value
    const password = document.querySelector("#password").value
    
    
    const resLogin = contasMedicos.find((contaMedico) => contaMedico.login === login && contaMedico.senha === password)
    
    if(!resLogin) {
        alert("Email ou senha incorretos!")
    }else{
        window.location.href = './painel-do-medico.html'
        const form = document.querySelector("#form")
        form.reset()
    }
    
})