/**
Pseudocode

SET buka to 7
FUNCTION solve with tanggal as parameter
  SET member to array(
    ['Tono', 2],['Anton', 4],['Budi', 5]
  )
  SET libur to tanggal modulus 5 is equal to 0
  SET hasil to empty array
  FOR each index in the member
    IF (tanggal - buka) % member[index][1] == 0 THEN
      PUSH member[index][0] to hasil
    ENDIF
  ENDFOR

  IF libur THEN
    RETURN 'Tempat Fitness Tutup'
  ENDIF

  RETURN all elements in hasil separated with comma and space
ENDFUNCTION

FOR i = buka to 31
  DISPLAY `Tanggal ${i}: ${solve(i)}`
ENDFOR
*/

var buka = 7;
function solve(tanggal) {
  var member = [
    ['Tono', 2],
    ['Anton', 4],
    ['Budi', 5]
  ];
  var libur = tanggal % 5 === 0;
  var hasil = [];

  for (var i = 0; i < member.length; i++) {
    if ((tanggal - buka) % member[i][1] == 0) {
      hasil.push(member[i][0]);
    }
  }

  if (libur) {
    return 'Tempat Fitness Tutup';
  }
  return hasil.join(', ');
}

for (var i = buka; i <= 31; i++) {
  console.log(`Tanggal ${i}: ${solve(i)}`);
}