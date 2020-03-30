/*PSEUDOCODE
SET arrayPengunjung to empty array
IF (date in loop - 7 )%2 equals to 0 THEN
PUSH 'Tono' to arrayPengunjung
IF (date in loop - 7) %4 equals to 0 THEN 
PUSH 'Anton' to arrayPengunjung
IF (date in loop - 7 )%5 equals to 0 THEN 
PUSH 'Budi' to arrayPengunjung
IF date in loop %5 equals to 0 THEN 
READ tutup as TRUE
END IF 

DISPLAY Tanggal 7 : Tono,Anton,Budi
IF arrayPengunjung = 0 THEN 
DISPLAY 'tanggal date in loop : ' 
IF arrayPengunjung = 1 THEN 
DISPLAY 'tanggal date in loop : array indexed 0 ' 
IF arrayPengunjung = 2 THEN
DISPLAY 'tanggal date in loop : array indexed 0, array indexed 1'
IF arrayPengunjung =3 THEN 
DISPLAY 'tanggal date in loop : array indexed 0. array indexed 1, array indexed 2'
END IF 
*/

//variables
//looping tanggal mulai dari tgl 7
console.log('Tanggal 7 : ')
for (var date = 8; date < 32; date++) {
    var arrayPengunjung = [];
    if (date % 5 === 0) {
        var cek = true;
    } else {
        var cek = false;
    }
    if ((date - 7) % 2 === 0) {
        arrayPengunjung.push('Tono')
    }
    if ((date - 7) % 4 === 0) {
        arrayPengunjung.push('Anton')
    }
    if ((date - 7) % 5 === 0) {
        arrayPengunjung.push('Budi')
    }
    if (cek == true) {
        console.log(`Tanggal ${date}: Tempat Fitness Tutup`)
    } else if (arrayPengunjung.length == 0) {
        console.log(`Tanggal ${date} :`)
    } else if (arrayPengunjung.length == 1) {
        console.log(`Tanggal ${date}: ${arrayPengunjung[0]}`)
    } else if (arrayPengunjung.length == 2) {
        console.log(`Tanggal ${date}: ${arrayPengunjung[0]}, ${arrayPengunjung[1]}`)
    } else if (arrayPengunjung.length == 3) {
        console.log(`Tanggal ${date}: ${arrayPengunjung[0]}, ${arrayPengunjung[1]}, ${arrayPengunjung[2]}`)
    }

}
