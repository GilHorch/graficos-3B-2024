/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    //contante que armazena uma repossta  await=espera ////fetch=faz a requisição
    const res = await fetch(url);
    //espera as reposta serem convertidas em JSON
    const dados = await res.json();

    console.log(dados);
}
quantidadeUsuarios();//chama a função