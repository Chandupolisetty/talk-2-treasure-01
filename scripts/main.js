window.addEventListener('load', main);

function main() {
    console.log('Page is fully loaded');
}

async function onClickColor1() {
    let utterance = new SpeechSynthesisUtterance("Color 1 is Orange");
speechSynthesis.speak(utterance);

}

async function onClickColor2() {
    let utterance = new SpeechSynthesisUtterance("Color 2 is Blue");
speechSynthesis.speak(utterance); 

}