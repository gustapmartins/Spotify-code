import javascriptLogo from '/public/javascript.svg'
import '../Styles/Card.css'

const PlayerMusic = () => {
    const Box = document.createElement('div')
    return Box.innerHTML = `
        <div class="container">
            <img src=${javascriptLogo} alt="Olá" />
            <div class="description">
                <h2>Nome da música</h2>
                <i>João Tinti</i>
            </div>
            <div class="duration">
                <div class="bar">
                    <progress value="0" max="i"></progress>
                    <div class="point"></div>
                </div>
                <div class="time">
                    <p class="start">0:00</p>
                    <p class="fim">3:40</p>
                </div>
            </div>
            <div class="player">
                <button type="button" class="setas anterior"> < </button>
                <button type="button" class="btn-play"> Start </button>
                <button type="button" class="btn-pause"> = </button>
                <button type="button" class="setas proximo"> > </button>
            </div>
            <audio src="Music/A Brand New Start - TrackTribe (1).mp3"></audio>
        </div>
    `
}

export default PlayerMusic