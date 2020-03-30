/**
 * pseudocode:
 * SET function schedule()
 * SET variable day = 0
 * FOR inis i=7 to i<= 31
 * 
 * SET variable result = []
 * IF day MOD 2 EQUAL 0 THEN
 * resul push ('Tono)
 * IF day MOD 4 EQUAL 0 THEN
 * resul push ('Anton')
 * IF day MOD 5 EQUAL 0 THEN
 * resul push ('Budi)
 * 
 * day EQUAL PLUS 1
 * IF inis i MOD 5 EQUAL 0 THEN
 * DISPLAY 'Tanggal ${i} : Tempat Fitness Tutup'
 * ELSE 
 * DISPLAY 'Tanggal ${i} : S{resut.join(', ')}
 * END
 */

function schedule(){

    let day = 0
    
    for(let i=7; i<=31; i++){
        let result = []

        if(day % 2 === 0){
            result.push('Tono')
        }
        if(day % 4 === 0){
            result.push('Anton')
        }
        if(day % 5 === 0){
            result.push('Budi')
        }

        day++
        if(i % 5 === 0){
            console.log(`Tanggal ${i} : Tempat Fitness Tutup`)
        } else {
            console.log(`Tanggal ${i} : ${result.join(', ')}`)
        }
    }
}

schedule()