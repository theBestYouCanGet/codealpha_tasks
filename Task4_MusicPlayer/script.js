let currentIndex = 0;

const theme_icon = document.getElementById("themeIcon");
const track_title = document.getElementById("trackTitle");
const track_artist = document.getElementById("trackArtist");
const audio = document.getElementById("audio");
const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");


const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progressBar")
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");


const volumeBar = document.getElementById("volume-bar");
const volumeLevel = document.getElementById("volumeLevel");
const volumeValue = document.getElementById("volumeValue");

const trackList = document.getElementById("trackList");


let tracks = [
    {
        artist: "Artist1",
        title: "Track1",
        cover: "track-list/cover1.jpeg",
        file: "track-list/track1.mpeg"
    },
    {
        artist: "Artist2",
        title: "Track2",
        cover: "track-list/cover4.jpeg",
        file: "track-list/track2.mpeg"
    },
    {
        artist: "Artist3",
        title: "Track3",
        cover: "track-list/cover3.jpeg",
        file: "track-list/track3.mpeg"
    }
];

function loadTrack(index) {
    const track = tracks[index];
    track_artist.textContent = track.artist;
    track_title.textContent = track.title;
    theme_icon.setAttribute("src", track.cover);
    audio.src = track.file;
    updatePlaylistUI();
}

function trackPlay() {
    if(audio.paused) {
        audio.play();
        playBtn.textContent = "\u23f9";
    } else {
        audio.pause();
        playBtn.textContent = "\u25b6";
    }
}

function prevTrack() {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.textContent = "\u23f9";
}

function nextTrack() {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.textContent = "\u23f9";
}

audio.addEventListener("ended", () => {
    nextTrack();
});

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percent = duration ? (currentTime / duration) * 100 : 0;
    progressBar.style.width = `${percent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
    totalTimeEl.textContent = formatTime(duration);
});

progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
});

function formatTime(time) {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

volumeBar.addEventListener("click", (e) => {
    const barWidth = volumeBar.clientWidth;
    const clickX = e.offsetX;
    const volume = Math.min(Math.max(clickX / barWidth, 0), 1);
    audio.volume = volume;
    volumeLevel.style.width = `${volume * 100}%`;
    volumeValue.textContent = `${Math.round(volume * 100)}%`;
});

function renderPlaylist() {
    trackList.innerHTML = "";
    tracks.forEach((track, idx) => {
        const li = document.createElement("li");
        li.className = "playlist-item" + (idx === currentIndex ? " active" : "");
        li.innerHTML = `
            <img src="${track.cover}" alt="cover" class="playlist-cover">
            <span class="playlist-title">${track.title}</span>
            <span class="playlist-artist">${track.artist}</span>
        `;
        li.addEventListener("click", () => {
            currentIndex = idx;
            loadTrack(currentIndex);
            audio.play();
            playBtn.textContent = "\u23f9";
        });
        trackList.appendChild(li);
    });
}

function updatePlaylistUI() {
    const items = document.querySelectorAll(".playlist-item");
    items.forEach((item, idx) => {
        item.classList.toggle("active", idx === currentIndex);
    });
}

prevBtn.addEventListener("click", prevTrack);
playBtn.addEventListener("click", trackPlay);
nextBtn.addEventListener("click", nextTrack);

renderPlaylist();
loadTrack(currentIndex);