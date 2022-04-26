function logar() {
    let nome = document.getElementById('nome')
    let senha = document.getElementById('senha')
    let res = document.getElementById('res')
    let arroba = document.getElementById('arroba')
    let lock = document.getElementById('lock')

    res.innerHTML=""
    if (nome.value == null || senha.value == null || nome.value == "" || senha.value == "") {
        nome.style.borderColor="#FF5757";
        res.innerHTML="Por favor, preencha os campos corretamente!"
        nome.style.placeholder="example@gmail.com"
        arroba.style.color="red";
        senha.style.borderColor="#FF5757";
        arroba.style.color="#FF5757";
        lock.style.color="#FF5757";
    } else {
        nome.style.borderColor="green";
        senha.style.borderColor="green";
        arroba.style.color="green";
        lock.style.color="green";
    }

}