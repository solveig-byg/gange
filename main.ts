let tal1 = 0
let tal2 = 0
let resultat = 0
input.onGesture(Gesture.Shake, function () {
    tal1 = 0
    tal2 = 0
})
input.onButtonPressed(Button.A, function () {
    tal1 += 1
    basic.showNumber(tal1)
})
input.onButtonPressed(Button.AB, function () {
    resultat = tal2 * tal1
    basic.showNumber(resultat)
})
input.onButtonPressed(Button.B, function () {
    tal2 += 1
    basic.showNumber(tal2)
})
