const memeBtn = document.querySelector('.meme-btn')
const memeHead = document.querySelector('.meme-head')
const memeImg = document.querySelector('.meme-img')
const author = document.querySelector('.author')




memeBtn.addEventListener('click', ()=>{
    const memeUrl= fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
    memeHead.textContent = data.title
    memeImg.childNodes[0].src = data.url
    author.textContent = `Meme by: ${data.author}`
    })
})



