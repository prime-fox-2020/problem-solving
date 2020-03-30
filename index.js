/*
SET calender FUNCTION with a parameter of date
SET counter to 0
SET kotak to an empty array
SET tono to 'Tono'
SET anton to 'ANTON'
SET budi to 'BUDI'
SET tutup to 'Tempat Fitness Tutup'

FOR LOOP i EQUALS to 7 to date 
REASSIGN kotak to an empty array
IF i mode 5 NOT EQUALS TO 0 THEN
IF counter % 2 EQUALS TO 0 THEN
PUSH tono to kotak
ENDIF
IF counter % 4 EQUALS TO 0 THEN
PUSH ' ' PLUS anton to kotak
ENDIF
IF counter % 5 === 0 THEN
PUSH ' ' PLUS budi to kotak
ENDIF

ELSE 
Push tutup to kotak
ENDIF
INCREMENT counter

DISPLAY 'Tanggal ' + i + ': ' + String(kotak)
ENDFOR
STOP FUNCTION

INVOKE calender FUNCTION and change the parameter to 31
*/

function calender(date) {
	let counter = 0;
	let kotak = [];
	let tono = 'Tono';
	let anton = 'Anton';
	let budi = 'Budi';
	let tutup = 'Tempat Fitness Tutup';
	for (let i = 7; i <= date; i++) {
		kotak = [];
		if (i % 5 !== 0) {
			if (counter % 2 === 0) {
				kotak.push(tono);
			}
			if (counter % 4 === 0) {
				kotak.push(' ' + anton);
			}
			if (counter % 5 === 0) {
				kotak.push(' ' + budi);
			}
		} else {
			kotak.push(tutup);
		}
		counter++;
		console.log('Tanggal ' + i + ': ' + String(kotak));
	}
}

calender(31);
