
const imagens = [
    'ha',
    'ha-l',
    'joker',
    'batman'
]

const carousel = document.querySelector("#carousel")

// adicionando imagens automaticamente
for (let index in imagens) {

    const imagemHTML = new Image(1200, 720)

    imagemHTML.src = `imagens/${imagens[index]}.jpg`
    imagemHTML.dataset.id = index

    imagemHTML.classList.add(imagens[index])
    imagemHTML.classList.add(`hidden`)

    carousel.appendChild(imagemHTML)
}


imagens.map((imagem, index) => {
    setInterval(() => {
        // document.querySelector(`.show`).classList.add('hidden')


        document.querySelector(`.${imagem}`).classList.add('show')
        document.querySelector(`.${imagem}`).classList.remove('hidden')

    }, 3000 * index)
})



