//Pseudocode
// SET FITNESS Function
//  SET var start to 7
//  SET var end to 31
//  SET date is end minus start
//  FOR loop index i equal to 0 until i less than variable date
//      SET newArr is empty array
//      IF i mod 2 equal to 0 Then
//          PUSH " Tono" to Array newArr
//      ENDIF
//      IF i mod 4 equal to 0 Then
//          PUSH " Anton" to Array newArr
//      ENDIF
//      IF i mod 5 equal to 0 Then
//          PUSH " Budi" to Array newArr
//      ENDIF
//      IF (i plus 7) mod 5 equal to 0 Then
//          DISPLAY "Tanggal " plus (i plus 7) plus ": Tempat Fitness Tutup"
//      ELSE
//          DISPLAY "Tanggal " plus (i plus 7) plus ":" + newArr after turn to string
//      ENDIF
//  ENDFOR
// 
//  CALL FITNESS Function
//

function fitness() {
    let start = 7
    let end = 31
    let date = end - start
    for (let i = 0; i <= date; i++) {
        let newArr = []
        if (i % 2 == 0) {
            newArr.push(" Tono")
        }
        if (i % 4 == 0) {
            newArr.push(" Anton")
        }
        if (i % 5 == 0) {
            newArr.push(" Budi")
        }
        if ((i + 7) % 5 == 0) {
            console.log("Tanggal " + (i + 7) + ": Tempat Fitness Tutup")
        } else {
            console.log("tanggal " + (i + 7) + ":" + String(newArr))
        }
    }
}

console.log(fitness())