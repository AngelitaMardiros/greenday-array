input.onButtonPressed(Button.A, function () {
    if (counter > 0) {
        counter += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    name = text_list[counter]
    basic.showString("" + (name))
})
input.onButtonPressed(Button.B, function () {
    if (counter < 4) {
        counter += 1
    }
})
let name = ""
let counter = 0
let text_list: string[] = []
text_list = ["Billie Joe Armstrong", "Tre Cool", "Mike Dirnt", "John Kiffmeyer"]
basic.forever(function () {
    basic.showNumber(counter)
})
