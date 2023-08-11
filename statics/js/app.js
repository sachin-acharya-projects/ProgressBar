import "../css/style.scss"
import "../css/progressbar.scss"

let spikeWrapper = document.querySelector(".spikes")
let spikes = []

for(let i = 0; i < 360 ; i += 3) {
    let spike = document.createElement('span')
    spike.className = 'spike'
    spike.style.transform = `rotate(${i}deg) translateY(-135px)`
    spikeWrapper.appendChild(spike)

    spikes.push(spike)
}

if (spikes.length > 0) {
    let n = spikes.length
    let i = 0

    const interval = setInterval(() => {
        spikes[i].className = "spike active"
        let percent = Math.ceil(((i + 1) / n) * 100)
        document.querySelector('.value').innerHTML = percent + "%"
        i++
        if(i === n) {
            document.querySelector('.value').innerHTML = "0%"
            i = 0
            spikes.forEach(spike => spike.className = "spike")
        }
    }, 200)
}