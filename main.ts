radio.onReceivedNumber(function (receivedNumber) {
    funkzeit_ms = input.runningTime()
    motors.dualMotorPower(Motor.M0, receivedNumber)
})
let funkzeit_ms = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(1)
radio.setGroup(220)
basic.showString("J")
loops.everyInterval(2000, function () {
    if (input.runningTime() - funkzeit_ms > 2500) {
        motors.dualMotorPower(Motor.M0, 0)
        basic.setLedColors(0x000000, 0xff0000, 0x000000, 20)
    } else {
        basic.setLedColors(0x000000, 0x0000ff, 0x000000, 20)
    }
})
