let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    { songName: "Haan Main Galat - Love Aaj Kal", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Barbaadiyan - Shiddat ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Maan Le - Chitrakut ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "sBadmash Bateu - Masoom Sharma ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Ho Ja Mast Malang - Tu Malang", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Pehli Pehli Baar - Sanjeev Chaturvedi ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tere Vaaste Zara Hatke - Zara Bachke ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Zihaal E Miskin - Vishal Mishra ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Barsaat Aa Gayi - Stebin Ben ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Tum Kya Mile - Rocky Aur Rani", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },

];

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

// audioElement.play();
// Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Event 

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

let makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 1;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})