/**
 * ===============
 * PROBLEM SOLVING
 * ===============
 * 
 * PSEUDOCODE
 * ------------------------------
 * STORE a AS NUMBER WITH VALUE 2
 * STORE b AS NUMBER WITH VALUE 4
 * STORE c AS NUMBER WITH VALUE 5
 * FOR i = 7 TO 31
 *      STORE result AS STRING WITHOUT ANY VALUE
 *      IF a EQUAL TO 0 THEN
 *          ADD result WITH STRING 'Tono'
 *          SET VALUE OF a TO 2
 *      ENDIF
 *      IF b EQUAL TO 0 THEN
 *          IF result EQUAL TO '' THEN ADD result WITH STRING 'Anton'
 *          ELSE THEN ADD result WITH STRING ', Anton'
 *          ENDIF
 *          SET VALUE OF b TO 4
 *      ENDIF
 *      IF c EQUAL TO 0 THEN
 *          IF result EQUAL TO '' THEN ADD result WITH STRING 'Budi'
 *          ELSE THEN ADD result WITH STRING ', Budi'
 *          ENDIF
 *          SET VALUE OF c TO 5
 *      ENDIF
 *      IF i MOD 5 EQUAL TO 0 THEN DISPLAY 'Tanggal ' + VALUE OF i + ': Tempat Fitnes Tutup'
 *      ELSE IF i EQUAL TO 7 THEN DISPLAY 'Tanggal ' + VALUE OF i + ': Tono, Anton, Budi'
 *      ELSE DISPLAY 'Tanggal ' + VALUE OF i + ': ' VALUE OF result
 *      DECREMENT a
 *      DECREMENT b
 *      DECREMENT c
 * ENDFOR
 */

var a = 2, b = 4, c = 5;
for (let i = 7; i <= 31; i++) {
    let result = '';
    if (a == 0) {
        result += 'Tono';
        a = 2;
    }
    if (b == 0) {
        result == '' ? result += 'Anton' : result += ', Anton';
        b = 4;
    }
    if (c == 0) {
        result == '' ? result += 'Budi' : result += ', Budi';
        c = 5;
    }
    if (i % 5 == 0) console.log('Tanggal ' + i + ': Tempat Fitnes Tutup');
    else if (i == 7) console.log('Tanggal ' + i + ': Tono, Anton, Budi');
    else console.log('Tanggal ' + i + ': ' + result);
    a--; b--; c--;
}