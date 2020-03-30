
/*
Pseudocode:
FUNCTION gymSchedule with 3 parameter(num, array1(names), array2(times))
    SET date TO NUM;
    SET namesObj TO EMPTY OBJECT;

    FOR 
        i START FROM 0
        i LESS THAN THE LENGTH OF ARRAY1
        ADD i BY 1
            namesObj INDEX array1 INDEX i EQUAL TO ARRAY OF num, array2 INDEX i;
    END FOR

    WHILE date LESS OR EQUAL THAN 31;
        SET schedule TO EMPTY ARRAY;
        FOR 
            j IN namesObj
            IF date EQUAL TO namesObj INDEX J INDEX 0
                PUSH j TO schedule
                namesObj INDEX J INDEX 0 += namesObj INDEX J INDEX 1
            END IF
        END FOR
        SET dateSchedule TO EMPTY STRING
        FOR 
            i START FROM 0
            i LESS THAN THE LENGTH OF shedule
            ADD i BY 1
                IF i GREATER THAN 0
                    dateSchedule += ', ' + schedule INDEX i
                ELSE IF i EQUAL TO 0
                    dateSchedule += schedule INDEX i
                END IF
            END FOR

        SET gymdate to 'date' + date + ": "
        IF date MOD 5 EQUAL TO 0
            DISPLAY gymDate + 'Tempat Fitness Tutup'
        ELSE IF THE LENGTH OF schedule EQUAL TO 0
            DISPLAY gymdate
        ELSE IF date MOD 5 NOT EQUAL TO 5
            DISPLAY gymDate + dateSchedule
        END IF

        ADD date BY ONE;
    END WHILE
    DISPLAY EMPTY STRING
END FUNCTION

*/              


function gymSchedule(firstOpen, names, times) {
    var date = firstOpen
    var namesObj = {}

    for (var i = 0; i < names.length; i++) {
        namesObj[names[i]] = [firstOpen, times[i]]
    }
    //console.log(namesObj)
    while (date <= 31) {
        var schedule = []
        for (var j in namesObj) {
            if (date === namesObj[j][0]) {
                schedule.push(j)
                namesObj[j][0] += namesObj[j][1]
            }
        }
        //console.log(schedule)
        var dateSchedule = ''
        for (var i = 0; i < schedule.length; i++) {
            if (i > 0) {
                dateSchedule += ', ' + schedule[i]
            }
            else if (i === 0) {
                dateSchedule += schedule[i]
            }
        }

        var gymDate = 'date ' + date + ': '
        if (date % 5 === 0) {
            console.log(gymDate + 'Tempat Fitness Tutup')
        }
        else if (schedule.length === 0) {
            console.log(gymDate)
        }
        else if (date % 5 !== 0) {
            console.log(gymDate + dateSchedule)
        }

        date++;
    }

    return '';
}


console.log(gymSchedule(7, ['Tono', 'Budi', 'Anton'], [2, 4, 5]))

//tono 2 hari sekali,
//anton 4 hari sekali
//budi 5 hari sekali
//kelipatan 5 gymDate tutup