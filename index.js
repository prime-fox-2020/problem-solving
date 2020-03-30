/*
STORE var tono with value 2
STORE var anton with value 2
STORE var budi with value 2

FOR var tanggal = 0; (tanggal + 7) <= 31; tanggal++
    LET gym with value ""
    IF (tanggal + 7) % 5 == 0
        gym += " Tempat Fitness Tutup"
    Else
        IF tanggal % 2 == 0
            gym += " Tono"
        END IF    

        IF tanggal % 4 == 0
            gym += " Anton"
        END IF

        IF tanggal % 5 == 0
            gym += " Budi"
        END IF

    CONSOLE.LOG(`Tanggal ${tanggal+7}:${gym}`)
END FOR
*/  


var tono = 2;
var anton = 4;
var budi = 5;

for (var tanggal = 0; tanggal + 7 <= 31; tanggal++) {
    let gym = "";
    if ((tanggal + 7) % 5 == 0) {
        gym += " Tempat Fitness Tutup";
    } else {
        if (tanggal % 2 == 0) {
            gym += " Tono";
        }

        if (tanggal % 4 == 0 ) {
            gym += " Anton";
        }

        if (tanggal % 5 == 0) {
            gym += " Budi";
        }
    }

    console.log(`Tanggal ${tanggal+7}:${gym}`);
}
