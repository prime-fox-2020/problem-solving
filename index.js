
/* 
SET nums to 0
SET 1 Week equal 7
SET 1 Month equal 31
SET dates equal 7 (opening day)
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
IF days not EQUAL 31 invok nyafunction
Dates 
*/


let nums = 0;
let dates = 7;


function nyafunction(){
    let week = 7
    const tono = 2
    const anton = 4
    const budi = 5
    

        let temp = [];
        if(dates >= week){
            if(nums % tono === 0){
                temp.push('Tono');
            }
            if(nums % anton === 0){
                temp.push('Anton');
            } 
            if(nums % budi === 0){
                temp.push('Budi');
            }

            if(dates % 5 ===0){
                temp = [];
                temp.push('Tempat Fitness Tutup');
            }
        }

        console.log('Tanggal ' + dates + ': ' + temp.join(', '));
        dates+=1;
        nums+=1;

        if(dates !== 31){
            nyafunction()
        }
}

nyafunction()