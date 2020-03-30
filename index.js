//Tono 2 hari sekali
//Anton 4 hari sekali
//Budi 5 hari sekali
//tgl kelipatan 5 = 'Tanggal n: Tempat Fitness Tutup'
//output: 'Tanggal n: nama1, nama2, nama3 / Tempat Fitness Tutup'
//awal buka tgl 7

//tampungan absen Tono, Anton, dan Budi
let absen1 = [0]
let absen2 = [0]
let absen3 = [0]

function hitungAbsen(tgl, Tono, Anton, Budi){

    //Absensi Tono
    for(let a = Tono; a <= 31 - tgl; a += 2){
        absen1.push(a)
    }

    //Absensi Anton
    for(let a = Anton; a <= 31 - tgl; a += 4){
        absen2.push(a)
    }

    //Absensi Budi
    for(let a = Budi; a <= 31 - tgl; a += 5){
        absen3.push(a)
    }

}

function assignJadwal(tgl, Tono, Anton, Budi){
    hitungAbsen(tgl, Tono, Anton, Budi); //update tampungan absensi
    let tanggal = tgl
    
    for(let a = 0; a <= 31 - tgl; a++){ //dengan a sebagai hari ke n berdasarkan tanggal
        let format =   `Tanggal ${tanggal}: `
        for(let b = 0; b < absen1.length; b++){ // dengan b,c,d untuk mengambil value pada array tampungan absensi
            if(absen1[b] === a){                // lalu dicocokan dengan a
                format += 'Tono, '              // bila sama, tambahkan nama yang absen nya cocok
            }
        }

        for(let c = 0; c <= 31 - tgl; c++){
            if(absen2[c] === a){
                format += 'Anton, '
            }
        }

        for(let d = 0; d <= 31 - tgl; d++){
            if(absen3[d] === a){
                format += 'Budi, '
            }
        }

        if(tanggal % 5 === 0){ // bila tanggal adalah kelipatan 5
            console.log(`Tanggal ${tanggal}: Tempat Fitness Tutup`)
            tanggal++
            continue;
        }
        
        if(format.length > 12) { // untuk memangkas koma dan spasi di akhir string
            let str = ''
            for(let e = 0; e < format.length - 2; e++){
                str += format[e]
            }
            console.log(str)
        } else { // bila tidak ada yang absen pada tanggal tersebut
            console.log(format)
        }
        tanggal++
    }
}

//isi parameter dengan tanggal mulai dan kelipatan absen tono, anton, budi
assignJadwal(7, 2, 4, 5);

