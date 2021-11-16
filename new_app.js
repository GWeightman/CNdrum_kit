const clap = document.getElementById("clap_sound")
const hihat = document.getElementById("hihat_sound")
const kick = document.getElementById("kick_sound")
const openhat = document.getElementById("openhat_sound")
const boom = document.getElementById("boom_sound")
const ride = document.getElementById("ride_sound")
const snare = document.getElementById("snare_sound")
const tom = document.getElementById("tom_sound")
const tink = document.getElementById("tink_sound")


const drum_kit = (event) =>{
    if (event.keyCode == 65){
        clap.play()       
    }
    else if (event.keyCode == 83){
        hihat.play()
    }
    else if (event.keyCode == 68){
        kick.play()
    }
    else if (event.keyCode == 70) {
        openhat.play()
    }
    else if (event.keyCode == 71) {
        boom.play()
    }
    else if (event.keyCode == 72) {
        ride.play()
    }
    else if (event.keyCode == 74) {
        snare.play()
    }
    else if (event.keyCode == 75) {
        tom.play()
    }
    else if (event.keyCode == 76) {
        tink.play()
    }
}

document.onkeydown = drum_kit