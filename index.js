/*
SET tono EQUAL to 'Tono'
SET anton EQUAL to 'Anton'
SET budi EQUAL to 'Budi'
SET koma EQUAL to ', '
SET tanggal EQUAL to 7
FOR index i 0 to 31 increment by 1
    SET format EQUAL TO empty string 
    IF i MOD 2 EQUAL TO 0 AND i MOD 4 EQUAL TO 0 AND i MOD 5 EQUAL TO 0
        THEN format increment by tono
        format increment by koma
        format increment by anton
        format increment by koma
        format increment by budi 
    ELSEIF i MOD 2 EQUAL TO 0 AND i MOD 4 EQUAL TO 0
        THEN format increment by tono
        format increment by koma
        format increment by anton
    ELSEIF i MOD 2 EQUAL TO 0 AND i MOD 5 EQUAL TO 0
       THEN format increment by tono
        format increment by koma
        format increment by budi
    ELSEIF i MOD 4 EQUAL TO 0 AND i MOD 5 EQUAL TO 0
        THEN format increment by anton
        format increment by koma
        format increment by budi
    ELSEIF i MOD 4 EQUAL TO 0
        THEN format increment by anton
    ELSEIF i MOD 2 EQUAL TO 0
        THEN format increment by tono
    ELSEIF i MOD 5 EQUAL TO 0 
        THEN format increment by budi
    ENDIF
    
    IF tanggal from 7 to 31
        IF tanggal MOD 5 EQUAL TO 0
        THEN
            PRINT 'Tanggal '+ tanggal + ': ' + "Tempat Fitness Tutup"
        ELSE
            PRINT 'Tanggal '+tanggal+': '+format
    ENDIF

    tanggal++
ENDFOR
*/


var tono='Tono'
var anton='Anton'
var budi='Budi'
var koma=', '
var tanggal=7
for (var i =0; i <=31; i++) {
    var format=''
    if( i % 2 == 0 && i % 4 == 0 && i % 5 == 0){
        format+=tono
        format+=koma
        format+=anton
        format+=koma
        format+=budi
    }else if(i%2==0&&i%4==0){
        format+=tono
        format+=koma
        format+=anton
    }else if(i%2==0&&i%5==0){
        format+=tono
        format+=koma
        format+=budi
    }else if(i%4==0&&i%5==0){
        format+=anton
        format+=koma
        format+=budi
    }else if (i%4==0){
        format+=anton
    }else if (i%2==0){
        format+=tono
    }else if (i%5==0){
        format+=budi
    }
    if(tanggal>=7&&tanggal<=31){
        if(tanggal%5==0)
        {
            console.log('Tanggal '+tanggal+': '+"Tempat Fitness Tutup")
        }else{
            console.log('Tanggal '+tanggal+': '+format)
        }
    }
    tanggal++
}