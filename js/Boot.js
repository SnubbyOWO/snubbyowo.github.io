// Original code idea https://codepen.io/sammmmmmm/pen/MWPePOo
document.title = "SnubOS - Booting...";
let bootHasStarted = false;
// Edited by Snubby.jpg
document.addEventListener('DOMContentLoaded', function () {
    // for the boot screen text to have a nice shine effect
    const bootscreen = document.getElementById('boot-screen');
    const boot_text = document.getElementById('boot-screen-text');
    const currentUrl = window.location.href;

    if (currentUrl.includes('#skipintro')) {
        if (bootscreen) {
            bootscreen.style.display = "none";
        }
        document.body.style.overflowY = "scroll";
        document.title = "SnubOS - Welcome.";
        return;
    }

    let index = 0;
    let SystemID = navigator.userAgent;
    let RAM = navigator.deviceMemory;
    const delay = Math.floor(Math.random() * 1000) + 200;
    let date = new Date();

    const Snubsart = `
    
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&xxX$&&&&&&&&&&&&&&&&&&&$$XX$&&&&&&&
$&&&&&&&&&x++xx$&&&&&&&&&&&&&&&$$Xx+x$&&&&&&&
XX$X&&&&&&X+xX$&&&&&&$$&&$$&&&&&$XxxxX&&&&&&&
&&&$&&&&&&&xx$X;+&x;+Xx$X$x++&x;X$xxX&&&&&&&&
&&&&&&&&&&&X&&&&&X;;+++x++x+;x$&&&&x&&&&&&&&&
&&&&&&$&&&x;+x$&$$&++++xx+++&X&&&$x;+&&&&&&&&
&&&&&&&&XxXXXXxxx$X$x+++++X$$$++xxX$$$&&&&&&&
&&&&&&&$XX$&$xXXx;;x&&&$&&$x;++xxx&$$&$&&&&&&
&&&&&&&&++++xx++;;;::;$&x;::;;+xxxxxxX$&&&&&&
&&&&&$$$Xx+;;;x$Xx+xxxXXXxx+xXx+;;;;;x$$$&&&&
&&$$$$X+;x++;++xxxxXXXX$xX+++;;;+;++x&$$$$&&&
&&&&&$XX++xx++;;;;;;;+;;+;;;;;;;;+x$&$$&&&&&&
&$Xx++xX$X++++X$Xx+xX;;;x++++xXX&&&$xx&&&&&&&
+$Xxx$&&&&&&&&&&$$$XXxXx$xXXxXXxx+xX$&&$&&&&&
xX$&&&&&&&&&&&&&&&&&&$Xx$&&&&&&&&&&&$&&&&&&&&
&&&&&&&&&&&&&&&&&&&X$xxxxX$$$$&&$$$&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    
    `

    const randomboot =[
        'Yo Im Snubby',
        'Whats this message for again?',
        'Idk but like this is a message',
        'blah blah blah..',
        'I like trains',
        'This MIGHT be a message',
        'You should check out Slime Rancher Web.!',
        '3.141592653589793238462643383279502884197169399375105820974944592307',
        'Im tired of making these messages',
        'I should make a random message generator',
        'I should do that..',
        'Hey, you. You\'re finally awake. You were trying to cross the border, right? Walked right into that Imperial ambush, same as us, and that thief over there.',
        'Insert cash or select payment type',
        'What if instead of snubby.jpg it was snubby-freaky.jpg',
        'Rain is so sigma...',
        '_vertexg707 is so cool',
        'https://startmyeducation.net/',
        'aden anderson',
        'slimeranchers.com',
        'i LOVE slime rancher dead ass'
    ];
    const randomIndex = Math.floor(Math.random() * randomboot.length);
    const randomNumber = Math.random() * 100;
    let ResultOSart;

    // i put the ASCII because i wanted it to be sepretated from the other stuff
    const SnubOSart = `
    
    /$$$$$$                      /$$        /$$$$$$   /$$$$$$ 
   /$$__  $$                    | $$       /$$__  $$ /$$__  $$
  | $$  \\__/ /$$$$$$$  /$$   /$$| $$$$$$$ | $$  \\ $$| $$  \\__/
  |  $$$$$$ | $$__  $$| $$  | $$| $$__  $$| $$  | $$|  $$$$$$ 
   \\____  $$| $$  \\ $$| $$  | $$| $$  \\ $$| $$  | $$ \\____  $$
    /$$  \ $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$ /$$  \\ $$
  |  $$$$$$/| $$  | $$|  $$$$$$/| $$$$$$$/|  $$$$$$/|  $$$$$$/
   \\______/ |__/  |__/ \\______/ |_______/  \\______/  \\______/ 
                                                             
                                                             
                                                             
 
    
    `

    const SecretOSart = `
     /$$$$$$$$                      /$$                            /$$$$$$   /$$$$$$ 
    | $$_____/                     | $$                           /$$__  $$ /$$__  $$
    | $$     /$$$$$$  /$$$$$$/$$$$ | $$$$$$$   /$$$$$$  /$$   /$$| $$  \\ $$| $$  \\__/
    | $$$$$ /$$__  $$| $$_  $$_  $$| $$__  $$ /$$__  $$| $$  | $$| $$  | $$|  $$$$$$ 
    | $$__/| $$$$$$$$| $$ \\ $$ \\ $$| $$  \\ $$| $$  \\ $$| $$  | $$| $$  | $$ \\____  $$
    | $$   | $$_____/| $$ | $$ | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$ /$$  \\ $$
    | $$   |  $$$$$$$| $$ | $$ | $$| $$$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$/|  $$$$$$/
    |__/    \\_______/|__/ |__/ |__/|_______/  \\______/  \\____  $$ \\______/  \\______/ 
                                                        /$$  | $$                    
                                                       |  $$$$$$/                    
                                                        \\______/                     

    `

    // 10% chance of getting the secret OS art 
    if (randomNumber <= 10) {
        ResultOSart = SecretOSart;
    } else {
        ResultOSart = SnubOSart;
    }


    console.log(Snubsart);

    const messages = [
        `Last Login: ${date} from XXX.XXX.XXX.XXX\n\n` + ResultOSart + `\n${Math.round(randomNumber)} updates can be applied. But SnubOS hates updates ;)\n`,
        'SnubsBIOS 1.0 Release 1.0.1',
        'Copyright (c) 2024 Snubby.jpg',
        'All Rights Reserved\n', // adding a other /n to make it have a double space
        'CPU: SnubsCore 1.0',
        `Memory: ${RAM}GB`,
        `System User: ${SystemID}\n`,
        'Booting from Floppy Disk...',
        'Loading SnubOS...',
        'SnubOS Loaded',
        'Initializing SnubOS...',
        `SnubOS: ${randomboot[randomIndex]}`,
        'Booting SnubOS...',
        'SnubOS Ready To Boot\n'
    ];

    console.log('SnubOS: random message: ' + randomboot[randomIndex]);

    function displayMessage() {
        boot_text.innerText += messages[index] + '\n';
        index++;
        if (index === messages.length) {
            boot_text.innerHTML += `<a onclick="boot();">[0] <u>Click Here To Boot.</u></a>`
            document.title = "SnubOS - Ready To Boot."
            /*bootscreen.classList.add('fade-out');
            setTimeout(function() {
                bootscreen.style.display = "none"
                document.body.style.overflowY = "scroll"
            }, 4500); */
        } else {
            const delay = Math.floor(Math.random() * 1000) + 200;
            setTimeout(displayMessage, delay);
        }
    }

    setTimeout(displayMessage, delay);
});

function boot() {
    if (bootHasStarted) {
        return;
    }
    bootHasStarted = true;

    const bootscreen = document.getElementById('boot-screen');
    if (!bootscreen) {
        return;
    }

    document.title = "SnubOS - Booted."

    bootscreen.classList.add('fade-out');
    setTimeout(function() {
        bootscreen.style.display = "none"
        document.body.style.overflowY = "scroll"
        document.title = "SnubOS - Welcome."
    }, 1120);
}
