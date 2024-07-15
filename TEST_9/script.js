
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const songList = document.getElementById('songList');
const currentSong = document.querySelector('.current-song');
const progress = document.querySelector('.progress');
const timeline = document.querySelector('.timeline');

let songs = [
    {
        name: "1 swara oza",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://static.vecteezy.com/system/resources/previews/021/693/323/non_2x/a-logo-for-a-music-company-that-is-made-by-song-brand-vector.jpg"
    },
    {
        name: "2 lata mangeshkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://t4.ftcdn.net/jpg/04/17/30/01/360_F_417300125_IuLbNIyPcf1WX36Lp2GXQyJ7rwEDvC14.jpg"
    },
    {
        name: "3 lata mangeshkar",
        src: "https://youtu.be/mXpDd4-7YH0?si=GCPJD2cKiouJpniz",
        img: "https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg"
    },
    {
        name: "4 swara",
        src: "https://youtube.com/shorts/XoE8pxWEYLs?si=c7thOsmMms_IgUhz",
        img: "https://t4.ftcdn.net/jpg/04/17/30/01/360_F_417300125_IuLbNIyPcf1WX36Lp2GXQyJ7rwEDvC14.jpg"
    },

    {
        name: "5 darshan raval",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://as2.ftcdn.net/jpg/02/79/86/47/220_F_279864752_EcPSM4PRq6k15ybiJmAUMpKCqLeQPbPT.jpg"
    },

    {
        name: "6 saniya mirzza",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://t4.ftcdn.net/jpg/04/17/30/01/360_F_417300125_IuLbNIyPcf1WX36Lp2GXQyJ7rwEDvC14.jpg"
    },

    {
        name: "7 arigit singh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://t3.ftcdn.net/jpg/05/51/97/18/360_F_551971815_nXv1fCga04nd9fkjYr0rV0lbu5mG4lHk.jpg"
    },

    {
        name: "8 swara",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg"
    },

    {
        name: "9 lata mangeshkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://as2.ftcdn.net/jpg/02/79/86/47/220_F_279864752_EcPSM4PRq6k15ybiJmAUMpKCqLeQPbPT.jpg"
    },
    // Add more songs here
];

let currentSongIndex = 0;

const loadSong = (song) => {
    audio.src = song.src;
    currentSong.textContent = song.name;
    document.body.style.backgroundImage = `url(${song.img})`;
}

const playPauseSong = () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

const updateProgress = () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percentage}%`;
}

const setProgress = (e) => {
    const newTime = (e.offsetX / timeline.offsetWidth) * audio.duration;
    audio.currentTime = newTime;
}

const nextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPauseSong();
}

const prevSong = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPauseSong();
}

audio.addEventListener('timeupdate', updateProgress);
timeline.addEventListener('click', setProgress);
playPauseBtn.addEventListener('click', playPauseSong);
document.getElementById('nextBtn').addEventListener('click', nextSong);
document.getElementById('prevBtn').addEventListener('click', prevSong);

window.onload = () => {
    loadSong(songs[currentSongIndex]);
    songs.forEach(song => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${song.img}" alt="${song.name}"><span>${song.name}</span>`;
        li.addEventListener('click', () => {
            currentSongIndex = songs.indexOf(song);
            loadSong(songs[currentSongIndex]);
            playPauseSong();
        });
        songList.appendChild(li);
    });
};
