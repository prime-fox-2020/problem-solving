/*PSEUDOCODE

SET counter to 0

FOR i from 7 to 31
  SET temp with empty array
  IF counter modulus 2 is 0
    STORE ' Tono' to temp
  END IF
  IF counter modulus 4 is 0
    STORE ' Anton' to temp
  END IF
  IF counter modulus 5 is 0
    STORE ' Budi' to temp
  END IF
  IF i modulus 5 is 0
    SET temp to empty array
    STORE ' Tempat Fitness Tutup'
  END IF

  counter + 1
  DISPLAY 'Tanggal ' + i + ':' + temp
END FOR

*/



var counter = 0

for (var i = 7; i <= 31; i++) {
  var temp = []
  if (counter % 2 == 0){
    temp.push(' Tono')
  }
  if (counter % 4 == 0){
    temp.push(' Anton')
  }
  if (counter % 5 == 0){
    temp.push(' Budi')
  }
  if (i % 5 == 0){
    temp = []
    temp.push(' Tempat Fitness Tutup')
  }
  // console.log(temp)
  counter ++
  // console.log(i)
  console.log('Tanggal ' + i + ':' + temp)
  // console.log(counter)
}