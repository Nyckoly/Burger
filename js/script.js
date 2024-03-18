let cards = document.querySelector('.cardapio')

//faz a leitura de alguma informação(requisita)
fetch('hamburgueres.json')
    .then(resposta => resposta.json())
    .then(dados => dados.forEach((hamburgueres) =>{

        let card = document.createElement('div')
        card.classList.add('hamburguer')

        cards.appendChild(card)

        console.log(hamburgueres)

        card.innerHTML = `
            <div class="hamburguer-img">
                <img src="img/${hamburgueres.imagem}-burger.png" alt="">
                <p class="${hamburgueres.css}">${hamburgueres.promocao}</p>
            </div>
            <div class="hamburguer-txt">
                <p>${hamburgueres.tipo}</p>
                <h4>${hamburgueres.nome}</h4>
                <h5><span class="valor">${hamburgueres.valor}</span></h5>
            </div>
        `
    }))