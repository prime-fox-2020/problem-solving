/*
PSEUDOCODE
    FOR tanggal 7 to 31
        SET "temp" to empty array
        FOR each input data member in "arr"
            CALCULATE "tanggal" - 7 MOD by "data member when coming to gym"
            IF calculation result EQUALS zero
                ADD "data member name" to temp
            ENDINF
        ENDFOR
        SET "tempResult" to "temp" with built-in join (', ')
        IF tanggal MOD "data hariLibur" EQUALS 0
            SET "tempResult" to 'Tempat Fitness Tutup'
        ENDIF

        DISPLAY template 'Tanggal "tanggal" : "tempResult" '
    ENDFOR
*/


function jadwalFitness(arr, hariLibur){
    for(let i = 7; i <= 31; i++){
        let temp = []
        for(let j = 0; j < arr.length; j++){
            if( (i-7) % arr[j][1] == 0){
                temp.push(arr[j][0])
            }
        }
        let tempResult = temp.join(', ')
        if(i % hariLibur == 0){
            tempResult = 'Tempat Fitness Tutup'
        }
        console.log(`Tanggal ${i} : ${tempResult}`)
    }
}


let jadwalOrang = [
    ['Tono', 2],
    ['Anton', 4],
    ['Budi', 5]
]

jadwalFitness(jadwalOrang,5)
