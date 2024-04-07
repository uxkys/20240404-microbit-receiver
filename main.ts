radio.onReceivedString(function (receivedString) {
    受信文字列 = receivedString
    データ出力()
})
function データ出力 () {
    serial.writeLine("" + 受信文字列)
}
let 受信文字列 = ""
radio.setGroup(1)
let 設定時間ミリ秒 = 1000
