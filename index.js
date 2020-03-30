/**
 * Sebuah tempat fitness ingin memiliki perhitungan kalender jadwal member yang datang dalam bulan tersebut. Setiap member memiliki jadwal yang berbeda-beda
 * Tono, 2 hari sekali
 * Anton, 54 hari sekali
 * Budi, 5 hari sekali
 * 
 * Tempat fitness pertama kali dibuka pada tanggal 7, dan member di atas datang pada hari pembukaan. Tempat fitness akan tutup//libur setiap kelipatan tanggal 5. Asumsi bahwa kalender tiap bulan berjumlah 31 hari.
 * 
 */
// PSEUDOCODE 
/** 
 * BEGIN problemSolving
 *  SET 'tono' by 0
 *  SET 'anton' by 0
 *  SET 'budi' by 0
 *  
 *  FOR SET i = 7 UNTIL i <= 31
 *      IF i % 5 = 0 THEN
 *          PRINT "Tanggal i : Tempat Fitness Tutup"
 *      ELSE 
 *          IF 'tono' % 2 = 0 AND 'anton' % 4 =0 AND 'budi' % 5 = 0 THEN
 *              PRINT "Tanggal i : Tono, Anton, Budi"
 *          ELSE IF 'tono' % 2 = 0 AND 'anton' % 4 =0 THEN
 *              PRINT "Tanggal i : Tono, Anton"
 *          ELSE IF 'tono' % 2 = 0 AND  'budi' % 5 = 0 THEN
 *              PRINT "Tanggal i : Tono, Budi"
 *          ELSE IF 'anton' % 4 =0 AND 'budi' % 5 = 0 THEN
 *              PRINT "Tanggal i : Anton, Budi"
 *          ELSE IF 'tono' % 2 = 0  THEN
 *              PRINT "Tanggal i : Tono"
 *          ELSE IF  'anton' % 4 =0 THEN
 *              PRINT "Tanggal i : Anton"
 *          ELSE IF 'budi' % 5 = 0 THEN
 *              PRINT "Tanggal i : Budi"
 *          ELSE
 *              PRINT "Tanggal i : "
 *      'tono' ADD by 1
 *      'anton' ADD by 1
 *      'budi' ADD by 1
 *
 *  ENDFOR
 * END problemSolving
*/

function problemSolving() {
    var tono=0,anton=0,budi=0
    for (var i = 7; i <= 31; i++) {
        if (i % 5 == 0) {
            console.log(`Tanggal ${i} : Tempat Fitness Tutup`)
        }
        else {
            
            if(tono%2==0 && anton%4==0 && budi%5==0){
                console.log(`Tanggal ${i} : Tono, Anton, Budi`)
            }
            else if(tono%2==0 && anton%4==0){
                console.log(`Tanggal ${i} : Tono, Anton`)
            }
            else if(tono%2==0 && budi%5==0){
                console.log(`Tanggal ${i} : Tono, Budi`)
            }
            else if(anton%4==0 && budi%5==0){
                console.log(`Tanggal ${i} : Anton, Budi`)
            }    
            else if(tono%2==0){
                console.log(`Tanggal ${i} : Tono`)
            }
            else if(anton%4==0){
                console.log(`Tanggal ${i} : Anton`)
            }
            else if(budi%5==0){
                console.log(`Tanggal ${i} : Budi`)
            }
            else{
                console.log(`Tanggal ${i} : `)
                
            }
        }
        tono++;
        anton++;
        budi++;
    }
}

problemSolving()