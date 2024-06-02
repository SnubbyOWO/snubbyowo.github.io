var audio = new Audio("audio/Japanese_Greetings.wav");
var currentUrl = window.location.href;
var num = Math.floor(Math.random() * 5);
var sorasvideos = document.getElementById('sora');
const videos = [
    "vids/sora/Sora_1.mp4", 
    "vids/sora/Sora_2.mp4", 
    "vids/sora/Sora_3.mp4", 
    "vids/sora/Sora_4.mp4", 
    "vids/sora/Sora_5.mp4"
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
    var sorasvideos = document.getElementById('sora');
    const videos = [
        "vids/sora/Sora_1.mp4", 
        "vids/sora/Sora_2.mp4", 
        "vids/sora/Sora_3.mp4", 
        "vids/sora/Sora_4.mp4", 
        "vids/sora/Sora_5.mp4"
    ];
    sorasvideos.src = videos[num];
    console.log("SnubOS: Video Loaded: " + videos[num]);
});