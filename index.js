/* START PSEUDOCODE
    SET date AS AN INTEGER OF 7
    FOR date IS EQUAL TO 7 UNTIL i IS EQUAL TO 31 DO
        SET memberToday AS AN EMPTY ARRAY
        IF (date MODULO 5 IS EQUAL TO 0) THEN DO
            PRINT('Tanggal ' date': Tempat Fitness Tutup')
        ELSE
            SET hariKe AS date MINUS 7
            IF (hariKe MODULO 2 IS EQUAL TO 0) THEN DO
                INSERT Tono to memberToday
            END IF
            IF (hariKe MODULO 4 IS EQUAL TO 0) THEN DO
                INSERT Anton to memberToday
            END IF
            IF (hariKe MODULO 5 IS EQUAL TO 0) THEN DO
                INSERT Budi to memberToday
            END IF
        END IF
        PRINT('Tanggal' date': 'memberToday)
        ADD date TO 1
    END FOR
END PSEUDOCODE*/

for(let date = 7; date <= 31; date++){
    let membersToday = []
    if(date % 5 === 0){
        console.log('Tanggal '+date+': Tempat Fitness Tutup')
    }else{
        let hariKe = date - 7
        if(hariKe % 2 === 0){
            membersToday.push('Tono')
        }
        if(hariKe % 4 === 0){
            membersToday.push('Anton')
        }
        if(hariKe % 5 === 0){
            membersToday.push('Budi')
        }
        let members = '' //tambahan supaya di console log rapih saja dan sesuai format soal
        for(let i = 0; i < membersToday.length; i++){
            if(i === 0){
                members += ' '+membersToday[i]
            }else{
                members += ', '+membersToday[i]
            }
        }
        console.log('Tanggal '+date+':'+members)
    }
}