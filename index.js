var people = [
    ['Tono', 2],
    ['Anton', 4],
    ['Budi', 5]
]


/**
 * Pseudocode
 * SET result WITH empty string
 * SET count WITH 0
 * FUNCTION problemSolving WITH people as PARAMETER
 *  ADD result WITH 'Tanggal value of (i) :'
 *  FOR i = 7 to 31
 *      IF i MOD 5 WITH 0 THEN
 *          ADD result WITH 'Tempat Fitness Tutup'
 *      ELSE
 *          SET temp WITH empty array
 *          FOR j = 0 to people length
 *              IF count MOD people[j][1] = 0
 *                  PUSH temp WITH people[j][0]
 *              ENDIF
 *          ENDFOR
 *          ADD result WITH temp.join(', ')
 *      ENDIF
 *      count INCREMENT
 *      ADD  result WITH `\n`
 *  ENDFOR
 *  RETURN result
 * 
 */


function problemSolving(people) {
    result = ''
    count = 0
    for (var i = 7; i <= 31; i++) {
        result += `Tanggal ${i}: `
        if (i % 5 == 0) {
            result += 'Tempat Fitness Tutup'
        } else {
            var temp = []
            for (var j = 0; j < people.length; j++) {
                if (count % people[j][1] == 0) {
                    temp.push(people[j][0])
                }
            }
            result += temp.join(', ')
        }
        count++
        result += `\n`
    }
    return result
}

console.log(problemSolving(people))