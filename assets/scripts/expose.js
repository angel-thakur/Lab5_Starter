// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
    }
  })

  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');

  volumeControl.addEventListener('input', () => {
    const volumeValue = volumeControl.value;
    audio.volume = volumeValue/100;
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue >= 1 && volumeValue <= 32) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue >= 33 && volumeValue <= 66) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else if (volumeValue >= 67 && volumeValue <= 100) {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  })

  const playSound = document.querySelector('button');

  playSound.addEventListener('click', () => {
    const selectedHorn = hornSelect.value;
    const jsConfetti = new JSConfetti();
    const airhornSound = new Audio('assets/audio/air-horn.mp3');
    const carhornSound = new Audio('assets/audio/car-horn.mp3');
    const partyhornSound = new Audio('assets/audio/party-horn.mp3');
    const volume = volumeControl.value / 100;

    if (selectedHorn === 'air-horn') {
      airhornSound.volume = volume;
      airhornSound.play();
    }
    else if (selectedHorn === 'car-horn') {
      carhornSound.volume = volume;
      carhornSound.play();
    }
    else if (selectedHorn === 'party-horn') {
      jsConfetti.addConfetti();
      partyhornSound.volume = volume;
      partyhornSound.play();
    }
  })
}