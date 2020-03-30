/* 
    PSEUDOCODE

    SET date with value 31 - 7
    FOR index a 0 TO date increment by 1
        SET arr TO EMPTY ARRAY
        IF a%2 EQUAL TO 0
            PUSH Tono TO arr
        ENDIF
        IF a%4 EQUAL TO 0
            PUSH Anton TO arr
        ENDIF
        IF a%5 EQUAL TO 0
            Push Budi TO arr
        ENDIF
        IF (a+7)%5 EQUAL TO 0
            DISPLAY 'Tanggal ${a+7} : Tempat Fitness Tutup'
        ELSE
            DISPLAY 'Tanggal ${a+7} : ${arr}'
        ENDIF
    ENDFOR

*/

var date = 31 - 7
for (var a = 0; a <= date; a++){
    var arr = []
    if (a%2 === 0){
        arr.push('Tono')
    }
    if (a%4 === 0){
        arr.push(' Anton')
    }
    if (a%5 === 0){
        arr.push(' Budi')
    }
    if ((a+7)%5 === 0){
        console.log(`Tanggal ${a+7} : Tempat Fitness Tutup`)
    } else {
        console.log(`Tanggal ${a+7} : ${arr}`)
    }
}