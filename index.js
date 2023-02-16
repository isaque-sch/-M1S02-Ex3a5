var number = 14

var string = 'Isaque'

var informacaoDeLogin = [
    'Isaque Scheidt', 'isaque_scheidt@sesisenai.com.br', 'senha123', 'senha123'
]

console.log(`${string} tem ${number} anos`)

if (informacaoDeLogin[2] === informacaoDeLogin[3]) {
    console.log('Login concluído com sucesso')
}
else{
    console.log('As senhas não são iguais')
}

