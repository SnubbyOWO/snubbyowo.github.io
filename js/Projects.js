
const projects = [
    {
        img: 'img/slime.png',
        desc: 'Slime Rancher but for the browser! Come <br><a href="https://slimeranchers.com/" target="_blank">Try it!</a> and check out the archive <a href="https://slimeranchers.com/archive/" target="_blank">here!</a>',
        details: 'Has a ton of features: Multiplayer, Exporing and importing saves, Beta Scrapped Features, Backported Features, and much more!'
    },
    {
        img: 'img/DDLC.png',
        desc: 'Doki Doki Literature Club Web Version! Source Code <a href="https://github.com/SecondThundeR/DokiDoki-RenPy" target="_blank">here!</a>',
        details: ''
    },
    {
        img: 'img/Switch.png',
        desc: 'Recreated a Nintendo Switch layout in HTML and has playable games. This was used in school to play games lmao',
        details: ''
    },
    {
        img: 'img/ai.jpeg',
        desc: 'A AI using JavaScript! Come <a href="https://snubbyowo.github.io/ai-using-javascript/" target="_blank">Try it</a> or <a href="https://github.com/SnubbyOWO/ai-using-javascript" target="_blank">Download The Template!</a> (outdated)',
        details: ''
    },
    {
        img: 'img/discordbot.png',
        desc: 'Ai-Chan is a Discord bot that uses Voicevox API to create a TTS audio clip! <a href="https://github.com/SnubbyOWO/Ai-Chan-bot" target="_blank">Download The Bot!</a>',
        details: ''
    },
    {
        img: 'img/unity.png',
        desc: 'A lightweight bloom shader for Unity WebGL. Great performance for web games. <strong>[Works on other platforms too]</strong><br><a href="https://github.com/SnubbyOWO/SimpleBloom" target="_blank">Download The Shader!</a>',
        details: ''
    }
];

let currentIndex = 0;

function updateProject(index, animate = true) {
    const pImage = document.getElementById('project-image');
    const pDesc = document.getElementById('project-description');
    const pDetail = document.getElementById('project-details');
    const detailText = projects[index].details?.trim();

    const loadProject = () => {
        pImage.src = projects[index].img;
        pDesc.innerHTML = `<p>${projects[index].desc}</p>`;
        if (detailText) {
            pDetail.innerHTML = `<p>${detailText}</p>`;
            pDetail.hidden = false;
        } else {
            pDetail.innerHTML = '';
            pDetail.hidden = true;
        }
        pImage.style.opacity = 1;
        pDesc.style.opacity = 1;
        pDetail.style.opacity = pDetail.hidden ? 0 : 1;
    };

    if (!animate) {
        loadProject();
        return;
    }

    pImage.style.opacity = 0;
    pDesc.style.opacity = 0;
    pDetail.style.opacity = 0;
    setTimeout(loadProject, 500);
}

window.onload = function() {
    updateProject(currentIndex, false);

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateProject(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateProject(currentIndex);
    });
}
