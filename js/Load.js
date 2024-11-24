var audio = new Audio("audio/Japanese_Greetings.wav");
var currentUrl = window.location.href;

const videos_sora = [
    "vids/sora/Sora_1.mp4", 
    "vids/sora/Sora_2.mp4", 
    "vids/sora/Sora_3.mp4", 
    "vids/sora/Sora_4.mp4", 
    "vids/sora/Sora_5.mp4"
];

const videos_bon = [
    "vids/bon/Bon_1.mp4", 
    "vids/bon/Bon_2.mp4"
];

const videos_iron = [
    "vids/ironmouse/Ironmouse_1.mp4", 
    "vids/ironmouse/Ironmouse_2.mp4"
];

const videos_annie = [
    "vids/annie/Anniepants_1.mp4", 
    "vids/annie/Anniepants_2.mp4",
    "vids/annie/Anniepants_3.mp4",
    "vids/annie/Anniepants_4.mp4"
];

function clickedlol() {
    audio.play();
    document.getElementById("headerchange").textContent = "スナブテンドー・eShop"
    document.getElementById("maybechange").textContent = "おい！ 私はスナブです、またはあなたは私をスナブと呼ぶことができますが、私は開発者であり、私はコーディングするのが大好きです！ とにかく私は跳ね返らなければなりません！ ええ〜？ どうしたの？ なんてこった？ ええ、私はアニメの女の子として自分自身を置きました。なぜあなたは知らないのですか？ ちょっとかわいい〜";
}

if (currentUrl.includes('#playlist')) {
    window.location.href = 'https://www.youtube.com/playlist?list=PLG7OcFB1253IU3SIWCMt8oADeIQhBDgr-';
}

document.addEventListener('DOMContentLoaded', function () {
    var num = Math.floor(Math.random() * 5);
    var num_iron = Math.floor(Math.random() * 2);
    var num_bon = Math.floor(Math.random() * 2);
    var num_annie = Math.floor(Math.random() * 4);
    var sorasvideos = document.getElementById('sora');
    var ironvideos = document.getElementById('ironmouse');
    var bonvideos = document.getElementById('bon');
    var annievideos = document.getElementById('annie');
    sorasvideos.dataset.src = videos_sora[num];
    ironvideos.dataset.src = videos_iron[num_iron];
    bonvideos.dataset.src = videos_bon[num_bon];
    annievideos.dataset.src = videos_annie[num_annie];
    console.log("SnubOS: Video Loaded: " + videos_sora[num] + " " + videos_iron[num_iron] + " " + videos_bon[num_bon] + " " + videos_annie[num_annie]);
});