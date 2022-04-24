radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
basic.forever(function () {
	
})
