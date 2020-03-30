// Pseudocode:
// SET jadwal as function
// SET variable open to 7
// SET variable days to 31
// SET variable daysOpen to days MINUS open
// LOOP daysOpen
//  SET variable arr to EMPTY ARRAY
//  SET variable i to 0
//  INCREMENT i
//  IF i MODULUS 2 EQUALS 0
//      INSERT tono
//  IF i MODULUS 4 EQUALS 0
//      INSERT anton
//  IF i MODULUS 5 EQUALS 0
//      INSERT budi
//  IF (i PLUS 7) % 5 EQUALS TO 0
//      DISPLAY tanggal + (i PLUS 7) + : + tempat fitness tutup
//  ELSE
//      DISPLAY Tanggal + (i PLUS 7) + : + TRANSFORM arr INTO STRING
// CALL jadwal function

function jadwal () {
    let open = 7;
    let days = 31;
    let daysOpen = days - open;
    
    for (let i = 0; i <= daysOpen; i++) {
        let arr = [];
        if (i % 2 == 0 ) {
            arr.push(' Tono')
        }
        if (i % 4 == 0) {
            arr.push(' Anton')
        }
        if (i % 5 == 0) {
            arr.push(' Budi')
        }
        if ((i+7) % 5 == 0) {
            console.log('Tanggal ' + (i+7) + ': Tempat fitness Tutup')
        }
        else {
            console.log('Tanggal ' + (i+7) + ':' + String(arr))
        }
    }
}

jadwal();