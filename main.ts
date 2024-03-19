basic.showIcon(IconNames.House)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("AndroidAP4628", "esp8266wifi")
basic.showIcon(IconNames.Yes)
music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(false)) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        ESP8266_IoT.connectWifi("MovilCRIE", "CRIECRIE")
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    basic.showString("" + (input.temperature()))
    basic.pause(2000)
})
