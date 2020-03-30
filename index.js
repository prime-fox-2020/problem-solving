// PSEUDOCODE
/**
 * START jadwal
 *  STORE hari with 0
 *  STORE tono with 2
 *  STORE anton with 4
 *  STORE budi with 5
 * 
 *    FOR i from 7 to 31
 *      STORE temp with empty array
 *      STORE res with 'tanggal' + i + ' :'
 * 
 *      IF hari modulus by tono EQUAL TO 0 THEN
 *          STORE temp with ' Tono'
 *      END IF
 *      IF hari modulus by anton EQUAL TO 0 THEN
 *          STORE temp with ' Anton'
 *      END IF
 *      IF hari modulus by budi EQUAL TO 0 THEN
 *          STORE temp with ' Budi'
 *      END IF
 *      IF i modulus by 5 EQUAL TO 0 THEN
 *          STORE temp with empty array
 *          STORE temp wih ' Tempat fitness tutup'
 *      END IF
 *      INCREMENT hari
 *      DISPLAY res + temp
 *    END FOR
 * END
 */

function jadwal() {
    let hari = 0
    let tono = 2
    let anton = 4
    let budi = 5

    for(let i = 7; i <= 31; i++) {
        let temp = []
        let res = 'tanggal ' + i + ' :'
        
        if(hari % tono == 0) {
            temp.push(' Tono')
        }
        if(hari % anton == 0) {
            temp.push(' Anton')
        }
        if(hari % budi == 0) {
            temp.push(' Budi')
        }
        if(i % 5 == 0) {
            temp = []
            temp.push(' Tempat Fitness tutup')
        }
        hari++
        console.log(res + temp)
    }
}
jadwal()