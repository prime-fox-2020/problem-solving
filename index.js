
var hari = 0
for(var i = 7; i <= 31; i++) {
    var temp = []
    var res = 'tanggal ' + i + ' :'
    

    if(hari % 2 == 0) {
        temp.push(' Tono')
    }
    if(hari % 4 == 0) {
        temp.push(' Anton')
    }
    if(hari % 5 == 0) {
        temp.push(' Budi')
    }
    if(i % 5 == 0) {
        temp = []
        temp.push(' Tempat Fitness tutup')
    }
    hari++
    console.log(res + temp)
}
