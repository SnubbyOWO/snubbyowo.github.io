
const projects = [
    {
        img: 'img/slime.png',
        desc: 'Slime Rancher but for the browser! Come <br><a href="https://slimeranchers.com/" target="_blank">Try it!</a> and check out the archive <a href="https://slimeranchers.com/archive/" target="_blank">here!</a>'
    },
    {
        img: 'img/DDLC.png',
        desc: 'Doki Doki Literature Club Web Version! Source Code <a href="https://github.com/SecondThundeR/DokiDoki-RenPy" target="_blank">here!</a>'
    },
    {
        img: 'img/Switch.png',
        desc: 'Recreated a Nintendo Switch layout in HTML and has playable games. This was used in school to play games lmao'
    },
    {
        img: 'img/ai.jpeg',
        desc: 'A AI using JavaScript! Come <a href="https://snubbyowo.github.io/ai-using-javascript/" target="_blank">Try it</a> or <a href="https://github.com/SnubbyOWO/ai-using-javascript" target="_blank">Download The Template!</a> (outdated)'
    },
    {
        img: 'img/discordbot.png',
        desc: 'Ai-Chan is a Discord bot that uses Voicevox API to create a TTS audio clip! <a href="https://github.com/SnubbyOWO/Ai-Chan-bot" target="_blank">Download The Bot!</a>'
    },
    {
        img: 'img/unity.png',
        desc: 'A lightweight bloom shader for Unity WebGL. Great performance for web games. <strong>[Works on other platforms too]</strong><br><a href="https://github.com/SnubbyOWO/SimpleBloom" target="_blank">Download The Shader!</a>'
    }
];

let currentIndex = 0;

function updateProject(index) {
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');

    projectImage.style.opacity = 0;
    projectDescription.style.opacity = 0;
    setTimeout(() => {
        projectImage.src = projects[index].img;
        projectDescription.innerHTML = `<p>${projects[index].desc}</p>`;
        projectImage.style.opacity = 1;
        projectDescription.style.opacity = 1;
    }, 500);
}

window.onload = function() {
    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateProject(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateProject(currentIndex);
    });
}
