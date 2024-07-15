
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const timeline = document.querySelector('.timeline');
    const progressBar = document.querySelector('.progress');
    const currentSongDisplay = document.querySelector('.current-song');
    const songListEl = document.getElementById('songList');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    let isPlaying = false;
    let currentSongIndex = 0;

    const songs = [
        { title: "Song 1", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Song 2", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Song 3", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        { title: "Song 4", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { title: "Song 5", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
        { title: "Song 6", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
        { title: "Song 7", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
        { title: "Song 8", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
        { title: "Song 9", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
        { title: "Song 10", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
        { title: "Song 11", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
        { title: "Song 12", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" }
    ];

    const loadSong = (index) => {
        audio.src = songs[index].src;
        currentSongDisplay.textContent = songs[index].title;
        isPlaying = false;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    };

    const playSong = () => {
        audio.play();
        isPlaying = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    };

    const pauseSong = () => {
        audio.pause();
        isPlaying = false;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    };

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });

    timeline.addEventListener('click', (e) => {
        const timelineWidth = timeline.offsetWidth;
        const timeToSeek = (e.offsetX / timelineWidth) * audio.duration;
        audio.currentTime = timeToSeek;
    });

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        songListEl.appendChild(li);
    });

    loadSong(currentSongIndex);
});
