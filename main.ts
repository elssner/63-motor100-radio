radio.onReceivedNumber(function (receivedNumber) {
    if (ready) {
        funkzeit_ms = input.runningTime()
        motors.dualMotorPower(Motor.M0, Tempo(receivedNumber / 100, 70, 100, true))
        if (receivedNumber < -4) {
            basic.setLedColors(0xffffff, 0x0000ff, 0x000000)
        } else if (receivedNumber > 4) {
            basic.setLedColors(0x000000, 0x0000ff, 0xff0000)
        } else {
            basic.setLedColors(0x000000, 0x0000ff, 0x000000)
        }
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(Tempo(0.5, 70, 100, true))
})
function Tempo (Value: number, Min: number, Max: number, NullToNull: boolean) {
    if (Value < 0.03 && NullToNull) {
        return 0
    } else {
        return Min + Value * (Max - Min)
    }
}
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
