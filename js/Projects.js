
const projects = [
    // Moved all projects to here so it would be easier to manage
    {
        img: 'img/slime.PNG',
        desc: 'Slime Rancher v0.2.1 WebGL Works on web! Come <br><a style="color: rgb(141, 148, 253);" href="https://dev.snubby.top/" target="_blank">Try it!</a> and check out the archive <a style="color: rgb(141, 148, 253);" href="https://dev.snubby.top/archive/" target="_blank">here!</a>'
    },
    {
        img: 'img/Switch.jpeg',
        desc: 'Recreated a Nintendo Switch layout in HTML and has playable games. This was used in school to play games lmao'
    },
    {
        img: 'img/funni.PNG',
        desc: 'Remade a discord "virus" GIF that is a anime loli girl asking for your credit card.'
    },
    {
        img: 'img/fnaf.png',
        desc: 'A working game of FNAF on the browser! Come <br><a style="color: rgb(141, 148, 253);" href="https://dev.snubby.top/fnaf" target="_blank">Try it!</a>'
    },
    {
        img: 'img/ai.jpeg',
        desc: 'A AI using JavaScript! Come <a style="color: rgb(141, 148, 253);" href="https://snubbyowo.github.io/ai-using-javascript/" target="_blank">Try it </a>or <a style="color: rgb(141, 148, 253);" href="https://github.com/SnubbyOWO/ai-using-javascript" target="_blank">Download The Template!</a> (outdated)'
    },
    {
        img: 'img/discordbot.png',
        desc: 'Ai-Chan is a Discord bot that offers gets the active users input and uses Voicevox API to create a TTS audio clip! <a style="color: rgb(141, 148, 253);" href="https://github.com/SnubbyOWO/Ai-Chan-bot" target="_blank">Download The Bot!</a>'
    },
    {
        img: 'img/unity.png',
        desc: 'It is a light weight bloom so it doesn\'t look amazing but it gets the job done. Mainly used on Unity WebGL if you want great preformance for web games.<br><strong>[Still works on other platforms though]</strong><br><a style="color: rgb(141, 148, 253);" href="https://github.com/SnubbyOWO/SimpleBloom" target="_blank">Download The Shader!</a>'
    },
    {
        img: 'img/familyguy.jpg',
        desc: '<a style="color: rgb(141, 148, 253);" href="https://familyguy.in/" target="_blank">Family Guy.</a>'
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
        projectDescription.innerHTML = `<nav><p>${projects[index].desc}</p></nav>`;
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
