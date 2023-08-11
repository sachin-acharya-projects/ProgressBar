import "../css/style.scss"
import "../css/progressbar.scss"

let spikeWrapper = document.querySelector(".spikes")
let spikes = []

const spike_max_angle = 360;
const spike_step = 3
const total_spike_count = spike_max_angle / spike_step

for (let i = 0; i < total_spike_count; i++) {
    const angle_factor = (i / total_spike_count) * spike_max_angle
    let spike = document.createElement('span')
        spike.className = 'spike'
        spike.style.transform = `rotate(${angle_factor}deg) translateY(-135px)`
        spikeWrapper.appendChild(spike)
    
        spikes.push(spike)
}

function callme(){    
    if (spikes.length > 0) {
        let n = spikes.length
        let i = 0

        let interval = setInterval(async () => {
            spikes[i].className = "spike active"
            let percent = Math.ceil(((i + 1) / n) * 100)
            document.querySelector('.value').innerHTML = percent + "%"
            ++i
            if(i == n) {
                clearInterval(interval)
                await sleep(1000)
                document.querySelector('.value').innerHTML = "0%"
                i = 0
                spikes.forEach(spike => spike.className = "spike")
                callme()
            }
        }, 200)
    }
}
callme()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}