const mediaItems = [
    { name: "Persona 1", src: "audios/audio1.mp3", type: "audio", contact: "mailto:persona1@example.com" },
    { name: "Persona 2", src: "audios/audio2.mp3", type: "audio", contact: "https://twitter.com/persona2" },
    { name: "Persona 3", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    // Añade más audios y videos aquí
];

const mediaList = document.getElementById('audioList');

mediaItems.forEach(item => {
    const listItem = document.createElement('li');
    
    const title = document.createElement('span');
    title.textContent = item.name;
    
    const button = document.createElement('button');
    button.textContent = 'Reproducir';
    
    const contactButton = document.createElement('a');
    contactButton.href = item.contact;
    contactButton.textContent = 'Contacto';
    contactButton.classList.add('contact-button'); // Clase para estilo
    contactButton.target = '_blank';  // Abre el contacto en una nueva pestaña

    // Crear los elementos de audio o video según el tipo
    let mediaElement;
    if (item.type === 'audio') {
        mediaElement = document.createElement('audio');
    } else if (item.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.width = 400;  // Puedes ajustar el tamaño del video
    }
    mediaElement.controls = true;
    mediaElement.src = item.src;
    mediaElement.style.display = 'none';
    
    button.addEventListener('click', () => {
        if (mediaElement.style.display === 'none') {
            mediaElement.style.display = 'block';
        } else {
            mediaElement.style.display = 'none';
            mediaElement.pause();
            mediaElement.currentTime = 0;
        }
    });
    
    listItem.appendChild(title);
    listItem.appendChild(button);
    listItem.appendChild(contactButton);
    listItem.appendChild(mediaElement);
    
    mediaList.appendChild(listItem);
});
