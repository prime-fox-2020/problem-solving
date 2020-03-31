/* START PSEUDOCODE
    SET date AS AN INTEGER OF 7
    FOR date IS EQUAL TO 7 UNTIL i IS EQUAL TO 31 DO
        SET membersToday AS AN EMPTY ARRAY
        IF (date MODULO 5 IS EQUAL TO 0) THEN DO
            PRINT('Tanggal ' date': Tempat Fitness Tutup')
        ELSE
            SET hariKe AS date MINUS 7
            IF (hariKe MODULO 2 IS EQUAL TO 0) THEN DO
                INSERT Tono to membersToday
            END IF
            IF (hariKe MODULO 4 IS EQUAL TO 0) THEN DO
                INSERT Anton to membersToday
            END IF
            IF (hariKe MODULO 5 IS EQUAL TO 0) THEN DO
                INSERT Budi to membersToday
            END IF
            SET members AS AN EMPTY STRING
            FOR EACH ELEMENT OF membersToday DO
                IF membersToday's index IS EQUAL TO 0 DO
                    ADD ' ' TO members
                    ADD selected element of membersToday TO members
                ELSE
                    ADD ', ' TO members
                    ADD selected element of membersToday TO members
                END IF
            END FOR
            PRINT('Tanggal' date': 'members)
        END IF
        ADD date TO 1
    END FOR
END PSEUDOCODE */

for(let date = 7; date <= 31; date++){
    let membersToday = []
    if(date % 5 === 0){
        console.log('Tanggal ' + date + ': Tempat Fitness Tutup')
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
        let members = ''
        for(let i = 0; i < membersToday.length; i++){
            if(i === 0){
                members += ' '+membersToday[i]
            }else{
                members += ', '+membersToday[i]
            }
        }
        console.log('Tanggal ' + date + ':'+members)
    }
}