// Pseudocode
/*
SET variable array names berisi 'Tono', 'Anton', 'Budi'
SET variable pesanTutup berisi string 'Tempat Fitness Tutup'
SET variable jadwal bernilai 0
SET variable jadwalTono bernilai 2
SET variable jadwalAnton bernilai 4
SET variable jadwalBudi bernilai 5

FOR sepanjang index i dengan nilai awal 7 sampai dengan 31
    SET varible temp berisi array kosong []
    IF jadwal modulus jadwalTono sama dengan 0 THEN
        PUSH names index 0 ke variable temp
    ENDIF

    IF jadwal modulus jadwalAnton sama dengan 0 THEN
        PUSH names index 1 ke variable temp
    ENDIF

    IF jadwal modulus jadwalBudi sama dengan 0 THEN
        PUSH names index 2 ke variable temp
    ENDIF

    IF index i modulus 5 sama dengan 0 THEN
        LOG 'Tanggal index i sama dengan Tempat Fitness Tutup'
    ELSE 
        SET variable bernama string dengan nilai variable temp dengan built in function join
        LOG 'Tanggal index i ditambah variable string'
    ENDIF

    jadwal++
ENDFOR
*/

// Code
let names = ['Tono', 'Anton', 'Budi']
let pesanTutup = 'Tempat Fitness Tutup'
let jadwal = 0
let jadwalTono = 2
let jadwalAnton = 4
let jadwalBudi = 5
for (i = 7; i <= 31; i++) {
    let temp = []
    if (jadwal % jadwalTono == 0) {
        temp.push(names[0])
    } 
    
    if (jadwal % jadwalAnton == 0) {
        temp.push(names[1])
    }
    
    if (jadwal % jadwalBudi == 0) {
        temp.push(names[2])
    }

    if (i % 5 == 0) {
        console.log('Tanggal ' + i + ": " + pesanTutup);
    } else {
        let string = temp.join(', ')
        console.log('Tanggal ' + i + ": " + string);
    }
    jadwal++
}

 