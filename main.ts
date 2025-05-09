/**
 * Beacon code
 */
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendNumber(0)
    led.toggle(2, 2)
    basic.pause(500)
})
