window.addEventListener('load', main);
let synth = window.speechSynthesis;

function main() {
    console.log('Page is fully loaded');
}

async function onClickColor1() {
    let speech = new SpeechSynthesisUtterance(response.colorComponent1);
    synth.speak(speech);

}

async function onClickColor2() {
    let speech = new SpeechSynthesisUtterance(response.colorComponent2);
    synth.speak(speech);
    
}