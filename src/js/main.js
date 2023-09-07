import '../Styles/style.css'
import { play } from './play'
import PlayerMusic from './PlayerMusic'

document.querySelector('#app').innerHTML = `
  <div>
    <div>${PlayerMusic()}</div>
  </div>
`

window.addEventListener('load', function() {
   play(
    this.document.querySelector('.btn-play'), 
    this.document.querySelector('audio'),
    this.document.querySelector('.btn-pause'),
    this.document.querySelector('progress'),
    this.document.querySelector('.start'),
    this.document.querySelector('.fim'),
    this.document.querySelector('.anterior'),
    this.document.querySelector('.proximo'),
    this.document.querySelector('.description h2'),
    this.document.querySelector('.container img'),
    this.document.querySelector('.description i')
  )
})