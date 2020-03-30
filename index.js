/*
PSEUDOCODE:
LOOP i = 7; i <= 31; i++
    SET result WITH string of `Tanggal ${i}: `
    SET today WITH an array
    IF i mod 5 EQUALS 0 THEN
        PUSH "Tempat Fitness Tutup" TO today
    ELSE
        SET now WITH numbers of i minus 7
        IF now mod 2 EQUALS 0 THEN
            PUSH "Tono" TO today
        END IF
        IF now mod 4 EQUALS 0 THEN
            PUSH "Anton" TO today
        END IF
        IF now mod 5 EQUALS 0 THEN
            PUSH "Budi" TO today
        END IF
    END IF
    PRINT result + today JOINED WITH ","
END LOOP
*/

for (let i = 7; i <= 31; i++){
    let result = `Tanggal ${i}: `
    let today = []
    if (i % 5 == 0){
        today.push("Tempat Fitness Tutup")
    } else {
        let now = i - 7
        if (now % 2 == 0){
            today.push("Tono")
        }
        if (now % 4 == 0){
            today.push("Anton")
        }
        if (now % 5 == 0){
            today.push("Budi")
        }
    }
    console.log(result + today.join(", "))
}