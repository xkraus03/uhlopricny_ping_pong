input.onGesture(Gesture.SixG, function () {
    povolit = 0
    basic.showNumber(rychlost)
    basic.pause(1000)
    povolit = 1
})
input.onButtonPressed(Button.A, function () {
    if (rychlost < 400) {
        rychlost = rychlost + 20
    }
})
input.onButtonPressed(Button.B, function () {
    if (rychlost > 20) {
        rychlost = rychlost - 20
    }
})
let povolit = 0
let rychlost = 0
let i = 0
rychlost = 200
povolit = 1
basic.forever(function () {
    if (povolit) {
        for (let index = 0; index < 5; index++) {
            led.plot(0 + i, 0 + i)
            basic.pause(rychlost)
            led.unplot(0 + i, 0 + i)
            i += 1
        }
        i += -2
        for (let index = 0; index < 3; index++) {
            led.plot(0 + i, 0 + i)
            basic.pause(rychlost)
            led.unplot(0 + i, 0 + i)
            i += -1
        }
    }
})
