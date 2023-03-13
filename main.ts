radio.onReceivedNumber(function (receivedNumber) {
    last = input.runningTime()
    rssi = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let rssi = 0
let last = 0
radio.setGroup(1)
basic.forever(function () {
    if (last > input.runningTime() - 3000) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(Math.map(rssi, -150, -50, 1000, 10))
    }
})
