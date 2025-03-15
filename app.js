document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const playBtn = document.getElementById("play-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    const audio = document.getElementById("audio");
    const loopBtn = document.getElementById("loopBtn");
    const shuffleBtn = document.getElementById("shuffleBtn");


    const songTitle = document.getElementById("song-title");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeDisplay = document.getElementById("current-time");
    const durationDisplay = document.getElementById("duration");
    const playlist = document.getElementById("playlist");
    const categorySelector = document.getElementById("category-selector");

    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        if (logo.style.animationPlayState === 'paused') {
            logo.style.animationPlayState = 'running';
        } else {
            logo.style.animationPlayState = 'paused';
        }
    });

    const songs = {
        trending: [
            { title: "4 Days", src: "songs/4 Days (DjPunjab.Farm).mp3" },
            { title: "Mahila Mittar", src: "songs/Mahila Mittar 1.mp3" },
            { title: "Rao Sahab Drill", src: "songs/Rao Sahab Drill_320(PagalWorld).mp3" },
            { title: "Russian Bandana", src: "songs/Russian Bandana Dhanda Nyoliwala 320 Kbps.mp3" }
        ],
        hindi: [
            { title: "Kesariya", src: "https://pagalfree.com/download/128-Kesariya%20-%20Brahmastra%20128%20Kbps.mp3" },
            { title: "Apna Bana Le", src: "https://pagalfree.com/download/128-Apna%20Bana%20Le%20-%20Bhediya%20128%20Kbps.mp3" },
            { title: "Tera Ban Jaunga", src: "https://pagalfree.com/download/128-Tera%20Ban%20Jaunga%20-%20Kabir%20Singh%20128%20Kbps.mp3" },
            { title: "Raataan Lambiyan", src: "https://pagalfree.com/download/128-Raataan%20Lambiyan%20-%20Shershaah%20128%20Kbps.mp3" },
            { title: "Dil Dhadakne Do", src: "https://pagalfree.com/download/128-Dil%20Dhadakne%20Do%20-%20Zindagi%20Na%20Milegi%20Dobara%20128%20Kbps.mp3" },
            { title: "Galliyan", src: "https://pagalfree.com/download/128-Galliyan%20-%20Ek%20Villain%20128%20Kbps.mp3" },
            { title: "Tum Hi Ho", src: "https://pagalfree.com/download/128-Tum%20Hi%20Ho%20-%20Aashiqui%202%20128%20Kbps.mp3" },

            { title: "Agar Tum Saath Ho", src: "https://pagalfree.com/download/128-Agar%20Tum%20Saath%20Ho%20-%20Tamasha%20128%20Kbps.mp3" },
            { title: "Ranjha", src: "https://pagalfree.com/download/128-Ranjha%20-%20Shershaah%20128%20Kbps.mp3" },
            { title: "Tera Hone Laga Hoon", src: "https://pagalfree.com/download/128-Tera%20Hone%20Laga%20Hoon%20-%20Ajab%20Prem%20Ki%20Ghazab%20Kahani%20128%20Kbps.mp3" },
            { title: "Janam Janam", src: "https://pagalfree.com/download/128-Janam%20Janam%20-%20Dilwale%20128%20Kbps.mp3" },

            { title: "Tum Hi Ho", src: "songs/Tum Hi Aana Marjaavaan 128 Kbps.mp3" },
            { title: "Muqabla", src: "songs/Muqabla - Street Dancer 3D 128 Kbps.mp3" },
            { title: "What Jhumka", src: "songs/What Jhumka_320(PagalWorld.com.se).mp3" },
            { title: "Tip Tip", src: "songs/Tip Tip Barsa Pani Mp3 Song Sooryavanshi_128-(PagalWorld.uk).mp3" },
            { title: "Saat Samundar", src: "songs/Saat Samundar Paar Happy Vishwatma 128 Kbps.mp3" },
            { title: "Baarish Bulao", src: "songs/Baarish Bulao_320(PaglaSongs).mp3" }
        ],
        punjabi: [
            { title: "Antidote", src: "songs/ANTIDOTE - Karan Aujla.mp3" },
            { title: "Bandana", src: "songs/Bandana - Shubh.mp3" },
            { title: "Case", src: "songs/Case.mp3" },
            { title: "King Shit", src: "songs/King Shit.mp3" },
            { title: "Wavy", src: "songs/Wavy.mp3" },
            { title: "Safety Off", src: "songs/Safety Off - Shubh.mp3" },
           
        ],
        haryanvi: [
            { title: "30 Ka Saman", src: "songs/30 Ka Saman.mp3" },
            { title: "Lamba Lamba Ghunghat", src: "songs/Lamba Lamba Ghunghat_320(PagalWorld.com.sb).mp3" },
            { title: "Lofar", src: "songs/Lofar(PagalNew.Com.Se).mp3" },
            { title: "Blender", src: "songs/Blender(KoshalWorld.Com).mp3" },
            { title: "Pistol Bole Gi", src: "songs/Pistol Bole Gi - DjPunjab.Com.Se.mp3" },
            { title: "Pistol Sumit Parta", src: "songs/Pistol Sumit Parta 320 Kbps.mp3" },
            { title: "Khatole 2", src: "songs/Khatole 2 - Masoom Sharma (youtube).mp3" },
            { title: "Knife Brows", src: "songs/Knife Brows(KoshalWorld.Com).mp3" }
        ],
        english: [
            { title: "Acoustic Breeze", src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3" },
            { title: "Sunny", src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3" },
            { title: "Creative Minds", src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3" },
            { title: "Hey!", src: "https://www.bensound.com/bensound-music/bensound-hey.mp3" },
            { title: "Energy", src: "https://www.bensound.com/bensound-music/bensound-energy.mp3" },
            { title: "Buddy", src: "https://www.bensound.com/bensound-music/bensound-buddy.mp3" }
            
        ]
    };

    if (!songs["all"]) {
        songs["all"] = Object.values(songs).flat();
    }


    let currentCategory = "all";
    let currentSongIndex = 0;

    function loadSong(index) {
        const categorySongs = songs[currentCategory];
        if (!categorySongs || categorySongs.length === 0) return;

        currentSongIndex = index;
        songTitle.textContent = categorySongs[index].title;
        audioPlayer.src = categorySongs[index].src;
        updatePlaylistHighlight();
    }

    function togglePlay() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.textContent = "⏸️";
        } else {
            audioPlayer.pause();
            playBtn.textContent = "▶️";
        }
    }

    function nextSong() {
        const categorySongs = songs[currentCategory];
        currentSongIndex = (currentSongIndex + 1) % categorySongs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
        playBtn.textContent = "⏸️";
    }

    function prevSong() {
        const categorySongs = songs[currentCategory];
        currentSongIndex = (currentSongIndex - 1 + categorySongs.length) % categorySongs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
        playBtn.textContent = "⏸️";
    }


    let isLooping = false;
    let isShuffling = false;

    loopBtn.addEventListener("click", () => {
        loopBtn.classList.toggle("active");
    });

    shuffleBtn.addEventListener("click", () => {
        shuffleBtn.classList.toggle("active");
    });

    loopBtn.addEventListener("click", () => {
        isLooping = !isLooping;
        audioPlayer.loop = isLooping;
        loopBtn.style.background = isLooping ? "#ff4f4f" : "#222";
    });

    shuffleBtn.addEventListener("click", () => {
        isShuffling = !isShuffling;
        shuffleBtn.style.background = isShuffling ? "#ff4f4f" : "#222";
    });


    audioPlayer.addEventListener("ended", () => {
        if (isLooping) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else if (isShuffling) {
            shuffleSongs();
        } else {
            nextSong();
        }
    });

    function shuffleSongs() {
        const categorySongs = songs[currentCategory];
        if (!categorySongs || categorySongs.length === 0) return;

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * categorySongs.length);
        } while (randomIndex === currentSongIndex);

        loadSong(randomIndex);
        audioPlayer.play();
        playBtn.textContent = "⏸️";
    }



    function displayPlaylist() {
        playlist.innerHTML = "";
        songs[currentCategory].forEach((song, index) => {
            const li = document.createElement("li");
            li.textContent = song.title;
            li.addEventListener("click", () => {
                loadSong(index);
                audioPlayer.play();
                playBtn.textContent = "⏸️";
            });
            playlist.appendChild(li);
        });
        updatePlaylistHighlight();
    }

    function updatePlaylistHighlight() {
        const allSongs = document.querySelectorAll("#playlist li");
        allSongs.forEach((li, index) => {
            li.classList.toggle("active", index === currentSongIndex);
        });
    }

    function changeCategory(category) {
        let isPlaying = !audioPlayer.paused;
        let currentSongSrc = audioPlayer.src;
        let currentTime = audioPlayer.currentTime;

        if (category === "all") {
            const allSongs = Object.values(songs).flat();
            songs["all"] = allSongs;
        }

        if (songs[category]) {
            currentCategory = category;
            displayPlaylist();

            if (!audioPlayer.src.includes(currentSongSrc)) {
                loadSong(0);
            }

            if (isPlaying) {
                audioPlayer.play();
                playBtn.textContent = "⏸️";
                setTimeout(() => {
                    audioPlayer.currentTime = currentTime;
                }, 10);
            }
        }
    }
    function displayPlaylist() {
        playlist.innerHTML = "";
        const categorySongs = songs[currentCategory] || [];

        categorySongs.forEach((song, index) => {
            const li = document.createElement("li");
            li.textContent = song.title;
            li.addEventListener("click", () => {
                loadSong(index);
                audioPlayer.play();
                playBtn.textContent = "⏸️";
            });
            playlist.appendChild(li);
        });

        updatePlaylistHighlight();
    }

    function updatePlaylistHighlight() {
        const allSongs = document.querySelectorAll("#playlist li");
        allSongs.forEach((li, index) => {
            li.classList.toggle("active", index === currentSongIndex);
        });
    }

    categorySelector.addEventListener("change", (event) => {
        changeCategory(event.target.value);
    });

    function updateProgress() {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === " ") togglePlay();
        if (event.key === "ArrowRight") nextSong();
        if (event.key === "ArrowLeft") prevSong();
    });

    progressBar.addEventListener("input", () => {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    });

    audioPlayer.addEventListener("ended", nextSong);
    audioPlayer.addEventListener("timeupdate", updateProgress);

    categorySelector.addEventListener("change", (event) => {
        changeCategory(event.target.value);
    });

    playBtn.addEventListener("click", togglePlay);
    nextBtn.addEventListener("click", nextSong);
    prevBtn.addEventListener("click", prevSong);

    loadSong(currentSongIndex);
    displayPlaylist();

});