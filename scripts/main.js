window.addEventListener('load', main);
let synth = window.speechSynthesis;


function main() {
    console.log('Page is fully loaded');
}

async function onClickColor1() {
    const diceValues = ["1", "2", "3", "4", "5", "6"];
    const random = Math.floor(Math.random() * diceValues.length);
    let diceValue = diceValues[random];
    document.getElementById("colorSelector1").style.backgroundColor = "rgb(0, 23, 128)";
    document.getElementById("randomValue1").innerHTML = diceValue;
    let speech = new SpeechSynthesisUtterance(response.colorComponent1 + diceValue);
    synth.speak(speech);

}

async function onClickColor2() {
    const diceValues = ["1", "2", "3", "4", "5", "6" ];
    const random = Math.floor(Math.random() * diceValues.length);
    let diceValue = diceValues[random];
    document.getElementById("colorSelector2").style.backgroundColor = "rgb(174, 174, 180)"; 
    document.getElementById("randomValue2").innerHTML = diceValue;
    let speech = new SpeechSynthesisUtterance(response.colorComponent2 + diceValue);
    synth.speak(speech);
    
}