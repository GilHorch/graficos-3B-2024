async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
    const nomeDasRedes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar'//grafico de barras
        }
    ]
const grafico= document.createElement('div')//cria uma div
grafico.className='grafico'//cria aclasse para a div
//insere a div  e a classe na tag onte tem o id = "graficos-container"
document.getElementById('graficos-container').appendChild('grafico')  
Plotly.newPlot(grafico)
}
quantidadeUsuarios()