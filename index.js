// Probem Solving
//PSEUDOCODE
// SET obj 
//     tono fitnes 2 hari sekali
//     anton fitnes 4 hari sekali
//     budi fitnes 5 hari sekali

// FUNCTION Jadwal Fitrens Tono
//     IF Hari fitnes modulus dari 2 = 1
//         RETURS 'Tono'
//     END IF
// END FUNCTION

// FUNCTION Jadwal Fitrens Anton
//     IF Hari fitnes modulus -3 mouduls dari 4 = 0
//         RETURS 'Anton'
//     END IF
// END FUNCTION

// FUNCTION Jadwal Fitrens Budi
//     IF Hari fitner -2 modulus dari 5 = 0
//         RETURS 'Tono'
//     END IF
// END FUNCTION

// FOR Hari awal fitnes TO Hari akhir fitnes
//     SET arr peserta fitnes IN Hari fitenes
//     IF jadwalTono ADA
//         PUSH tono TO arr
//     END IF
//     IF jadwalAnton ADA
//         PUSH anton TO arr
//     END IF
//     IF jadwalBudi ADA
//         PUSH budi TO arr
//     END IF

//     IF Hari fitner % 5 
//         arr 'Tempat Fitnes Tutup'
//     END IF

//     PRINT Tanggal Hari fitnes : Arr
// END FOR


//CHODE
var users = {}
users.Tono = 2
users.Anton = 4
users.Budi = 5

function jadwalTono(num) {
    if (num % users.Tono == 1) {
        return 'Tono'
    }
}

function jadwalAnton(num) {    
    if ((num - 3) % users.Anton == 0) {
        return 'Anton'
    }
}

function jadwalBudi(num) {
    if ((num - 2) % users.Budi == 0) {
        return 'Budi'
    }
}

for (let i = 7; i <= 31; i++) {
    let userFitneses = []
    let tono = jadwalTono(i)
    let anton = jadwalAnton(i)
    let budi = jadwalBudi(i)
    if (tono) {
        userFitneses.push(tono)
    }
    if (anton) {
        userFitneses.push(' '+anton)
    }
    if (budi) {
        userFitneses.push(' '+budi)
    }

    if (i % 5 == 0) {
        userFitneses = 'Tempat Fitness Tutup'
    }
    console.log(`Tanggal ${i}: ${userFitneses}`);

}