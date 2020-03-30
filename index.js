/* 
BEGIN
SET member equal to 0
SET tgl equal to 31

FOR SET i = 0 to tgl
    SET tamp to ''
    IF i THEN
        IF member MOD 2 EQUAL to 0 THEN
            EXEC tamp PLUS EQUAL Tono
        EndIf
        IF member MOD 4 EQUAL 0 THEN
            EXEC tamp PLUS EQUAL Anton
        EndIf
        IF member MOD 5 EQUAL 0 THEN
            EXEC tamp PLUS EQUAl Budi
        ENDIF
        IF i MOD 5 EQUAL 0 THEN
            tamp to ''
            EXEC temp PLUS EQUAL 'Tempat Fitness Tutup'
        ENDIF
    ENDIF
    DISPLAY 'Tanggal "i": "tamp.join"'
    member EQUAL PLUS 1
ENDFOR
END
*/

function jdwMember() {
    var member = 0
    var tgl = 31

    for (var i = 7; i <= tgl; i++) {
        var tamp = []
        if (i) {
            if (member % 2 === 0) {
                tamp.push('Tono')
            }
            if (member % 4 === 0) {
                tamp.push('Anton')
            }
            if (member % 5 === 0) {
                tamp.push('Budi')
            }
            if (i % 5 === 0) {
                tamp = []
                tamp.push('Tempat Fitnes Tutup!')
            }
        }
        member++
        console.log('Tanggal ' + i + ':' + tamp.join(','));
    }
}

jdwMember();