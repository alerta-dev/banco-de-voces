const mediaItems = [
    { name: "Persona 1", src: "audios/audio1.mp3", type: "audio", contact: "mailto:persona1@example.com" },
    { name: "Persona 2", src: "audios/audio2.mp3", type: "audio", contact: "https://twitter.com/persona2" },
    { name: "Persona 3", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 4", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 5", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 6", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 7", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 8", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 9", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 10", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 11", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 12", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 13", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 14", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 15", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },
    { name: "Persona 16", src: "videos/video1.mp4", type: "video", contact: "mailto:persona3@example.com" },

    
    // Añade más audios y videos aquí
];
const mediaList = document.getElementById('audioList'); // Lista donde se insertarán los audios/videos

mediaItems.forEach(item => {
    const listItem = document.createElement('li');
    
    const title = document.createElement('span');
    title.textContent = item.name;
    
    const button = document.createElement('button');
    button.textContent = 'Reproducir';
    
    const contactButton = document.createElement('a');
    contactButton.href = item.contact;
    contactButton.textContent = 'Contacto';
    contactButton.classList.add('contact-button'); // Clase para el estilo
    contactButton.target = '_blank';  // Abre el contacto en una nueva pestaña

    // Crear un elemento de audio o video según el tipo
    let mediaElement;
    if (item.type === 'audio') {
        mediaElement = document.createElement('audio');
    } else if (item.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.width = 400;  // Ajustar el tamaño del video
    }

    mediaElement.controls = true;  // Mostrar los controles (play, pause, volumen, etc.)
    mediaElement.src = item.src;
    mediaElement.style.display = 'none';  // Ocultar hasta que se haga clic en reproducir

    // Mostrar y reproducir al hacer clic en el botón
    button.addEventListener('click', () => {
        if (mediaElement.style.display === 'none') {
            mediaElement.style.display = 'block';
        } else {
            mediaElement.style.display = 'none';
            mediaElement.pause();  // Pausar si se oculta
            mediaElement.currentTime = 0;  // Reiniciar desde el principio
        }
    });
    
    listItem.appendChild(title);
    listItem.appendChild(button);
    listItem.appendChild(contactButton);
    listItem.appendChild(mediaElement);
    
    mediaList.appendChild(listItem);  // Añadir el elemento a la lista
});
