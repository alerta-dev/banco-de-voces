const audios = [
    { name: "Persona 1", src: "audios/audio1.mp3" },
    { name: "Persona 2", src: "audios/audio2.mp3" },
    { name: "Persona 3", src: "audios/audio3.mp3" },
    // Añade más audios aquí
];

const audioList = document.getElementById('audioList');

audios.forEach(audio => {
    const listItem = document.createElement('li');
    
    const title = document.createElement('span');
    title.textContent = audio.name;
    
    const button = document.createElement('button');
    button.textContent = 'Reproducir';
    
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = audio.src;
    audioElement.style.display = 'none';
    
    button.addEventListener('click', () => {
        if (audioElement.style.display === 'none') {
            audioElement.style.display = 'block';
        } else {
            audioElement.style.display = 'none';
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    });
    
    listItem.appendChild(title);
    listItem.appendChild(button);
    listItem.appendChild(audioElement);
    
    audioList.appendChild(listItem);
});
