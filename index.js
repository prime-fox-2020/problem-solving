/* 

SET nums to 0
FOR dates = 7 to 31

    SET temp to ''
    IF dates >= 7 THEN

        IF nums MOD 2 EQUAL 0 THEN
            EXEC temp PLUS EQUAL tono
        ENDIF
        IF nums MOD 4 EQUAL 0 THEN
            EXEC temp PLUS EQUAL anton
        ENDIF
        IF nums MOD 5 EQUAL 0 THEN
            EXEC temp PLUS EQUAl budi
        ENDIF

        IF dates MOD 5 EQUAL 0 THEN
            temp to ''
            EXEC temp PLUS EQUAL 'Tempat Fitness Tutup'
        ENDIF

    ENDIF
    DISPLAY 'Tanggal "dates": "temp"'
    nums EQUAL PLUS 1
ENDFOR


*/
function solve(){
    let nums = 0;
    for(let dates = 7; dates <= 31; dates++){
        let temp = [];
        if(dates >= 7){
            if(nums % 2 === 0){
                temp.push('Tono');
            }
            if(nums % 4 === 0){
                temp.push('Anton');
            } 
            if(nums % 5 === 0){
                temp.push('Budi');
            }
    
            if(dates % 5 ===0){
                temp = [];
                temp.push('Tempat Fitness Tutup');
            }
        }
        nums++;
        console.log('Tanggal ' + dates + ': ' + temp.join(', '));
    }    
}

solve();   