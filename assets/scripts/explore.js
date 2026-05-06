// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const inputTxt = document.getElementById('text-to-speak');
  const talkBtn = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  // populate voice list
  let voices = [];
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

    voices = speechSynthesis.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      document.getElementById("voice-select").appendChild(option);
    }
  }

  populateVoiceList();

  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // press to talk button functionality
  talkBtn.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    utterThis.onstart = () => faceImage.src = 'assets/images/smiling-open.png';
    utterThis.onend = () => faceImage.src = 'assets/images/smiling.png';

    synth.speak(utterThis);
  })
}