console.log('bop')

document.querySelector('#speechbutton').addEventListener('click', runspech);
const synth = window.speechSynthesis;

function runspech(){

    let content = document.querySelector('#textentry').value

    let yellThis = new SpeechSynthesisUtterance(`Tugce is a little ${content}`)
    synth.speak(yellThis)
}