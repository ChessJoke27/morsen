namespace Morsen {
    //% block
    export function MorseLang() {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function MorseKurz() {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    }
}
