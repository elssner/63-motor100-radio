radio.onReceivedNumber(function (receivedNumber) {
    if (ready) {
        funkzeit_ms = input.runningTime()
        motors.dualMotorPower(Motor.M0, receivedNumber)
        if (receivedNumber < -4) {
            basic.setLedColors(0xffffff, 0x0000ff, 0x000000)
        } else if (receivedNumber > 4) {
            basic.setLedColors(0x000000, 0x0000ff, 0xff0000)
        } else {
            basic.setLedColors(0x000000, 0x0000ff, 0x000000)
        }
    }
})
let funkzeit_ms = 0
let ready = false
radio.setTransmitPower(7)
radio.setFrequencyBand(1)
radio.setGroup(220)
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    # # # # #
    . # . # .
    `)
ready = true
loops.everyInterval(2000, function () {
    if (input.runningTime() - funkzeit_ms > 2500) {
        motors.dualMotorPower(Motor.M0, 0)
        basic.setLedColors(0x00ffff, 0x000000, 0x00ffff, 5)
    }
})
