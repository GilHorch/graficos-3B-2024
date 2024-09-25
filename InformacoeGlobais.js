const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera ////fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta erem convertidas em JSON
console.log(dados);//visualizar as informações no cosole
const paragrafo=document.createElement('p');//criar um elemento de parágrafo

paragrafo.classList.add('graficos-container__texto');//adiciona uma clase do CSS ao parégrafo

/*insere o texto "Você sabia que o mundo tem "+total_pessoas_mundo ...*/
paragrafo.innerHTML=`Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pesoas
e que aproximadamente ${dados.total_pessoas_conectadas}estão conectadas em alguma
rede social e passam em média${dados.tempo_medio} horas conectadas.`



}
visualizarInformacoesGlobais();//chama a função 