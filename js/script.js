document.addEventListener('DOMContentLoaded', function() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavoritesPage = window.location.pathname.includes('favorites.html');

    function init() {
        if (!isFavoritesPage) {
            initMainPage();
        } else {
            initFavoritesPage();
        }
    }
    function initMainPage() {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', toggleFavorite);
            
            const trackId = btn.getAttribute('data-track');
            if (favorites.includes(trackId)) {
                btn.classList.add('active');
            }
        });

        initAudio();
        initSearch();
    }
    function initFavoritesPage() {
        const backToMainBtn = document.getElementById('backToMain');
        if (backToMainBtn) {
            backToMainBtn.addEventListener('click', function() {
                window.location.href = 'index.html';
            });
        }

        renderFavorites();
    }
    function toggleFavorite() {
        this.classList.toggle('active');
        const trackId = this.getAttribute('data-track');
        
        if (this.classList.contains('active')) {
            if (!favorites.includes(trackId)) {
                favorites.push(trackId);
            }
        } else {
            favorites = favorites.filter(id => id !== trackId);
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        if (isFavoritesPage) {
            renderFavorites();
        }
    }
    function renderFavorites() {
        const favoritesList = document.getElementById('favorites-list');
        if (!favoritesList) return;
        
        favoritesList.innerHTML = '';
        
        if (favorites.length === 0) {
            favoritesList.innerHTML = '<p>У вас пока нет избранных треков</p>';
            return;
        }
        const allTracksData = getAllTracksData();
        
        favorites.forEach(trackId => {
            const track = allTracksData.find(t => t.id === trackId);
            if (track) {
                const trackElement = createTrackElement(track);
                favoritesList.appendChild(trackElement);
            }
        });
        
        initAudio();
    }

    function getAllTracksData() {
        return [
            {
                id: "4",
                title: "асфальт 8",
                artist: "макан",
                cover: "https://avatars.mds.yandex.net/i?id=9bb36eb7923701206bffefe3c91ab9b6_l-10354912-images-thumbs&n=13",
                audioSrc: "audio4.mp3",
                duration: "02:15"
            },
            {
                id: "5",
                title: "Homay",
                artist: "AY YOLA",
                cover: "https://avatars.mds.yandex.net/i?id=f7e0a0a9f00f88badc45e584ab5554fd0ffd5fc3-4034409-images-thumbs&n=13",
                audioSrc: "audio5.mp3",
                duration: "04:04"
            },
            {
                id: "6",
                title: "Тяни",
                artist: "Король и Шут",
                cover: "https://avatars.mds.yandex.net/i?id=a8c5775c32132dbcdd0fbd6f17b296e2_l-11744588-images-thumbs&n=13",
                audioSrc: "audio6.mp3",
                duration: "02:56"
            },
            {
        id: "1",
        title: "Священная война",
        artist: "Краснознаменный ансамбль",
        cover: "https://avatars.yandex.net/get-music-content/5457712/c5627d05.a.10229765-3/m1000x1000?webp=false",
        audioSrc: "audio1.mp3",
        duration: "05:02"
    },
    {
        id: "2",
        title: "Тёмная ночь",
        artist: "Марк Бернес",
        cover: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mark_Bernes_sings_Tyomnaya_noch_in_Dva_boytsa.jpg",
        audioSrc: "audio2.mp3",
        duration: "03:19"
    },
    {
        id: "3",
        title: "Синий платочек",
        artist: "Клавдия Шульженко",
        cover: "https://avatars.mds.yandex.net/i?id=4c2159607c31d8bfbd05cbbe4c6aeb4d_l-5265152-images-thumbs&n=13",
        audioSrc: "audio3.mp3",
        duration: "03:34"
    },
    {
        id: "7",
        title: "Где нас нет",
        artist: "Oxxxymiron",
        cover: "https://avatars.mds.yandex.net/i?id=bff811e83e0a90d4da57f367c483c0ce_l-4080605-images-thumbs&n=13",
        audioSrc: "audio7.mp3",
        duration: "04:17"
    },
    {
        id: "8",
        title: "Улети",
        artist: "Скриптонит",
        cover: "https://a2.fm/system/event/poster_image/10/1-10.jpg",
        audioSrc: "audio8.mp3",
        duration: "03:45"
    },
    {
        id: "9",
        title: "Автостопом",
        artist: "Гуф",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/64/18/86/641886c1-c104-dd64-bcd4-7dbda3fc6485/825646498635.jpg/1104x1104bb.webp",
        audioSrc: "audio9.mp3",
        duration: "04:32"
    },
    {
        id: "10",
        title: "Bohemian Rhapsody",
        artist: "Queen",
        cover: "http://avatars.mds.yandex.net/get-vthumb/3548692/69859458f81cdeb27228f05810696a5f/800x450",
        audioSrc: "audio10.mp3",
        duration: "05:55"
    },
    {
        id: "11",
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        cover: "https://i.pinimg.com/736x/71/32/4c/71324c0276e6d3899027b2b78d192647.jpg",
        audioSrc: "audio11.mp3",
        duration: "08:02"
    },
    {
        id: "12",
        title: "Paint It Black",
        artist: "The Rolling Stones",
        cover: "https://ts13.tarafdari.com/contents/user763441/content-sound/photo_2022-09-02_19-13-26.jpg",
        audioSrc: "audio12.mp3",
        duration: "03:45"
    },
    {
        id: "13",
        title: "Cruel Summer",
        artist: "Taylor Swift",
        cover: "https://cdn.forbes.ru/forbes-static/c/1824x1026/new/2024/12/GettyImages-1474266803-kopia-6751aedfb358c.jpg",
        audioSrc: "audio13.mp3",
        duration: "02:58"
    },
    {
        id: "14",
        title: "Don't Start Now",
        artist: "Dua Lipa",
        cover: "https://avatars.mds.yandex.net/i?id=96e2599168116d2fbe8e3a583c0f090b_l-5288046-images-thumbs&n=13",
        audioSrc: "audio14.mp3",
        duration: "03:03"
    },
    {
        id: "15",
        title: "Blinding Lights",
        artist: "The Weeknd",
        cover: "https://lastfm.freetls.fastly.net/i/u/ar0/54f6328d1b36d25ff3465bf4f3defaa5.jpg",
        audioSrc: "audio15.mp3",
        duration: "03:20"
    }
        ];
    }
    function createTrackElement(track) {
        const div = document.createElement('div');
        div.className = 'track-card';
        div.innerHTML = `
            <div class="track-info">
                <img class="track-cover" src="${track.cover}" alt="Обложка">
                <div>
                    <h3 class="track-title">${track.title}</h3>
                    <a class="track-artist" href="#">${track.artist}</a>
                </div>
            </div>
            <div class="track-actions">
                <button class="favorite-btn active" data-track="${track.id}">♥</button>
              <a download="" href="${track.audioSrc}">  <button class="download-btn">↓</button></a>
                <button class="play-btn" data-audio="audio-${track.id}">►</button>
            </div>
            <audio id="audio-${track.id}" src="${track.audioSrc}"></audio>
            
            <div class="audio-controls">
                <div class="progress-container" data-audio="audio-${track.id}">
                    <div class="progress-bar"></div>
                </div>
                <div class="time-info">
                    <span class="current-time">0:00</span>
                    <span class="track-duration">${track.duration}</span>
                </div>
            </div>
        `;

        const favoriteBtn = div.querySelector('.favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', toggleFavorite);
        }
        
        return div;
    }
    function initAudio() {
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const audioId = this.getAttribute('data-audio');
                const audio = document.getElementById(audioId);

                document.querySelectorAll('audio').forEach(a => {
                    if (a.id !== audioId) {
                        a.pause();
                        const otherBtn = document.querySelector(`.play-btn[data-audio="${a.id}"]`);
                        if (otherBtn) otherBtn.textContent = '►';
                    }
                });
                
                if (audio.paused) {
                    audio.play();
                    this.textContent = '❚❚';
                } else {
                    audio.pause();
                    this.textContent = '►';
                }
            });
        });

        document.querySelectorAll('audio').forEach(audio => {
            const progressContainer = document.querySelector(`.progress-container[data-audio="${audio.id}"]`);
            if (!progressContainer) return;
            
            const progressBar = progressContainer.querySelector('.progress-bar');
            const currentTimeEl = progressContainer.nextElementSibling.querySelector('.current-time');
            const durationEl = progressContainer.nextElementSibling.querySelector('.track-duration');
            const playBtn = document.querySelector(`.play-btn[data-audio="${audio.id}"]`);

            audio.addEventListener('timeupdate', function() {
                if (!isNaN(audio.duration)) {
                    const percent = (audio.currentTime / audio.duration) * 100;
                    progressBar.style.width = percent + '%';
                    if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
                }
            });

            audio.addEventListener('ended', function() {
                if (playBtn) playBtn.textContent = '►';
                progressBar.style.width = '0%';
                if (currentTimeEl) currentTimeEl.textContent = '0:00';
            });

            progressContainer.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                audio.currentTime = pos * audio.duration;
            });
        });
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function initSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        const categoriesDropdown = document.getElementById('categoriesDropdown');
        
        if (searchInput) {
            searchInput.addEventListener('click', function() {
                if (categoriesDropdown) categoriesDropdown.classList.toggle('active');
            });
        }
        
        if (searchBtn) {
            searchBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (categoriesDropdown) categoriesDropdown.classList.toggle('active');
            });
        }
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container') && categoriesDropdown) {
                categoriesDropdown.classList.remove('active');
            }
        });
    }

    init();
});