const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector("#btnTry")

const phrases = [
    'Apreciando cada passo, mas já sonhando com as próximas conquistas',
    'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
    'Acorde todas as manhãs com um sorriso. Esta é mais uma oportunidade que você tem para ser feliz. Seja seu próprio motor de ignição. O dia de hoje jamais voltará .... Não o desperdice',
    'Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!',
    'Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!',
    'É importante agradecer pelo hoje sem nunca desistir do amanhã!',
    'Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!',
    'A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!',
    'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!',
    'Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!',
];

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase(){
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random()*(phrases.length));

    randomPhrase.innerText = phrases[generateRandomPhrase]

}

function buttonTry(event){
    event.preventDefault()
    toggleScreen()
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
    }
}