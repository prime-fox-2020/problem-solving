/**
 * PSEUDOCODE
 * 
 * BEGIN function problemSolving WITH PARAMETERS OF buka AND tutup
 *   STORE t AS AN ARRAY
 *   STORE a AS AN ARRAY
 *   STORE b AS AN ARRAY
 *   STORE count EQUAL TO 0
 *   FOR INDEXES OF m EQUAL TO buka, AND INDEXES OF m <= tutup, INCREMENT m
 *     INCREMENT count
 *   END FOR
 *   FOR INDEXES OF i EQUAL TO 0, AND INDEXES OF i < count, INCREMENT i
 *     STORE name AS AN EMPTY ARRAY
 *     IF i MODULUS OF INDEX 1 OF t EQUAL TO 0 THEN
 *       PUSH INDEX 0 OF t TO name
 *     END IF
 *     IF i MODULUS OF INDEX 1 OF a EQUAL TO 0 THEN
 *       PUSH INDEX 0 OF a TO name
 *     END IF
 *     IF i MODULUS OF INDEX 1 OF b EQUAL TO 0 THEN
 *       PUSH INDEX 0 OF b TO name
 *     END IF
 *     IF (i + 7) MODULUS OF 5 EQUAL TO 0 THEN
 *       DISPLAY `Tanggal ${i+7}: Tempat Fitness Tutup`
 *     ELSE 
 *       DISPLAY `Tanggal ${i+7}:${name}`
 *   END FOR
 * END FUNCTION
 */

problemSolving(7, 31);
function problemSolving(buka, tutup) {
    var t = [' Tono', 2]; var a = [' Anton', 4]; var b = [' Budi', 5]
    var count = 0
    for (let m = buka; m <= tutup; m++) count++;
    for (let i = 0; i < count; i++) {
        var name = []
        if (i % t[1] === 0) name.push(t[0]);
        if (i % a[1] === 0 ) name.push(a[0]);
        if (i % b[1] === 0 ) name.push(b[0]);
        if ((i+7) % 5 === 0) console.log(`Tanggal ${i+7}: Tempat Fitness Tutup`);
        else{console.log( `Tanggal ${i+7}:${name}`)}
    }
}