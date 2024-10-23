import { getCSS } from"common.js" //"./common"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type:'bar',//grafico de barras
            marker:{
                color:getCSS('--primary-color')
                //getComputedStyle(document.body).getPropertyValue('--primary-color')
            }
        }
    ]

    const layout={
        //cor de fundo do gráfico
        plot_bgcolor:getCSS('--bg-color'),
        paper_bgcolor:getCSS('--bg-color'),
        title:{
            text:'Redes sociais com mais usuários no mundo',
            x:0,
            font:{
                color:getCSS('--primary-color'),
                family:getCSS('--font')
            }
        }
    }
    const grafico = document.createElement('div')//cria uma div
    grafico.className = 'grafico'//cria aclasse para a div
    //insere a div  e a classe na tag onte tem o id = "graficos-container"
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data,layout)
}
quantidadeUsuarios()