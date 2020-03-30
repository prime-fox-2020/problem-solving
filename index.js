var tamu = ['Tono', 'Anton', 'Budi']
var tono = 7
var anton = 7
var budi = 7
for(let i=7; i<=31; i++){
    var tamuDatang = []
    if(i===7){
        tamuDatang.push(tamu[0])
        tamuDatang.push(tamu[1])
        tamuDatang.push(tamu[2])
        tono+=2
        anton+=4
        budi+=5
        // console.log(tono)
        // console.log(anton)
        // console.log(budi)
    } if(i%5 === 0){
        console.log('Tanggal ' + i + ' : Tempat Fitnes Tutup')
        if(i === tono){
            tono+=2
        } if(i === anton){
            anton+=4
        } if(i === budi){
            budi+=5
        }
    } else{
        if(i === tono){
            tamuDatang.push(tamu[0])
            tono+=2
        } if(i === anton){
            tamuDatang.push(tamu[1])
            anton+=4
        } if(i === budi){
            tamuDatang.push(tamu[2])
            budi+=5
        }
        console.log(`Tanggal ${i} : ${tamuDatang.join(', ')}`)
        
    }
        
}
