import { musics } from "./Musics"

let indexMusic = 0

function secondsForMinutes(seconds) {
    let campMinutes = Math.floor(seconds / 60)
    let campSeconds = seconds % 60
    if (campSeconds < 10) {
        campSeconds = '0' + campSeconds
    }
    return campMinutes + ':' + campSeconds
}

function renderMusic(music, nameMusic, image, fim, nameArtist, index) {
    music.setAttribute('src', musics[index].src)
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].titulo
        nameArtist.textContent = musics[index].artista
        image.src = musics[index].img
        fim.textContent = secondsForMinutes(Math.floor(music.duration))
    })
}

export function play(element, music, pause, bar, start, fim, anterior, proximo, nameMusic, image, nameArtist) {
    music.addEventListener('timeupdate', () => {
        bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'
        start.textContent = secondsForMinutes(Math.floor(music.currentTime))
    })

    fim.textContent = secondsForMinutes(Math.floor(music.duration))

    element.addEventListener('click', () => {
        music.play()
        pause.style.display = 'block'
        element.style.display = 'none'
    })

    pause.addEventListener('click', () => {
        music.pause()
        element.style.display = 'block'
        pause.style.display = 'none'
    })


    anterior.addEventListener('click', () => {
        indexMusic--
        console.log(indexMusic)
        if(indexMusic <= 0){
            indexMusic = 4
        }
        renderMusic(music, nameMusic, image, fim, nameArtist, indexMusic)
        music.pause()
        element.style.display = 'block'
        pause.style.display = 'none'
    })

    proximo.addEventListener('click', () => {
        indexMusic++
        if(indexMusic >= 4){
            indexMusic = 0
        }
        renderMusic(music, nameMusic, image, fim, nameArtist, indexMusic)
        music.pause()
        element.style.display = 'block'
        pause.style.display = 'none'
    })
}