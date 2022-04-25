function logar() {
    let nome = document.getElementById('nome')
    let senha = document.getElementById('senha')
    let res = document.getElementById('res')
    let arroba = document.getElementById('arroba')

    res.innerHTML=""
    if (nome.value == null || senha.value == null || nome.value == "" || senha.value == "") {
        nome.style.borderColor="#FF5757";
        res.innerHTML="Por favor, insira um email válido!"
        nome.style.placeholder="example@gmail.com"
        arroba.style.color="red"

    } else {
        nome.style.borderColor="green";
        senha.style.borderColor="green";

    }

}