/* PSEUDO CODE 
SET tono TO 2
SET anton TO 4
SET budi TO 5
FOR i FROM 7 TO 31
  IF i MOD 5 equals to 0
    DISPLAY string "Tanggal " + i + ": Tempat Fitness Tutup"
  ELSE
    SET dTono is false
    SET dAnton is false
    SET output TO string Tanggal + i
    IF i min 7 mod tono equals to 0
      ADD to output string "Tono"
      dTono is true
    END IF
    IF i min 7 mod anton equals to 0
      ADD to output string ", Anton"
      dAnton is true
      END IF
    IF i min 7 mod budi equals to 0
      IF dTono equals to true OR dAnton equals to true
        ADD to output string ", Budi"
      END IF
      ELSE
        ADD to output string " Budi"
      END IF
    DISPLAY OUTPUT
  END IF
END FOR
*/



var tono = 2;
var anton = 4;
var budi = 5;

for (var i = 7; i <= 31; i++) {
  if (i % 5 == 0) {
    console.log("Tanggal " + i + ": Tempat Fitness Tutup");
  } else {
    dTono = false;
    dAnton = false;
    output = "Tanggal " + i + ":";

    if ((i - 7) % tono === 0) {
      output += " Tono";
      dTono = true;
    }

    if ((i - 7) % anton === 0) {
      output += ", Anton";
      dAnton = true;
    }

    if ((i - 7) % budi === 0) {
      if (dTono === true || dAnton === true) {
        output += ", Budi";
      } else {
        output += " Budi";
      }
    }
    console.log(output);
  }
}
