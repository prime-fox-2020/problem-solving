// PseudoCode
// SET limit EQUAL TO 24
// FOR every i in index
// SET res AS array
// IF (i+7) modulus 5 EQUAL TO 0 THEN
// PUSH TO res "Tempat Fitness tutup"
// ELSE
// IF imodulus 2 EQUAL TO 0 THEN
// PUSH TO res "Tono"
// END IF
// IF i modulus 4 EQUAL TO 0 THEN
// PUSH TO res "Anton"
// END IF
// IF i modulus 5 EQUAL TO 0 THEN
// PUSH TO res "Budi"
// END IF
// END FOR
// PRINT "Tanggal " + (i + 7) + ": " + res


let limit = 24;

for(let i = 0; i <= limit; i++) {
  let res = [];
  if ((i+7)%5=== 0) {
    res.push("Tempat Fitness tutup");
  }
  else {
    if (i%2 === 0) {
      res.push("Tono");
    }
    if (i%4 === 0) {
      res.push("Anton");
    }
    if (i%5 === 0) {
      res.push("Budi");
    }
  }


console.log("Tanggal " + (i+7)+ ": "+ res);

}
