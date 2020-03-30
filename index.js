/** 
PSEUDOCODE

STORE variable 'startOpenDate' with any value
STORE variable 'closeEveryNumDay' with any value
STORE variable 'endOpenDate' with any value
STORE variable 'usersList' with any value
STORE variable 'usersAttend' with any value

SET 'startOpenDate' with value EQUAL to seven (number)
SET 'closeEveryNumDay' with value EQUAL to five (number)
SET 'endOpenDate' with value EQUAL to thirty one (number)
SET 'usersList' with value EQUAL to [{name: Tono, everyNumDays: 2}, {name: Tono, everyNumDays: 4}, {name: Tono, everyNumDays: 5}] (array of objects)

FOR date from 'startOpenDate' to 'endOpenDate'
    SET 'usersAttend' with value EQUAL to empty array (array)
    FOR each user in usersList
        IF (date MINUS 'startOpenDate') MODULUS user 'everyNumDays' EQUAL to zero THEN
            PUSH user 'name' to 'usersAttend'
        ENDIF
    END FOR

    IF date MODULUS 'closeEveryNumDay' EQUAL to zero THEN
        DISPLAY date PLUS 'Tempat Fitness Tutup'
    ELSE
        DISPLAY date PLUS 'usersAttend' value
    ENDIF
ENDFOR
*/

let startOpenDate = 7,
    closeEveryNumDay = 5,
    endOpenDate = 31,
    usersList = [{ name: 'Tono', everyNumDays: 2 }, { name: 'Anton', everyNumDays: 4 }, { name: 'Budi', everyNumDays: 5 }, ],
    usersAttend;

for (let i = startOpenDate; i <= endOpenDate; i++) {
    usersAttend = [];

    for (let j = 0; j < usersList.length; j++) {
        if ((i - startOpenDate) % usersList[j].everyNumDays === 0) {
            usersAttend.push(usersList[j].name);
        }
    }

    if (i % closeEveryNumDay === 0) {
        console.log(`Tanggal ${i}: Tempat Fitness Tutup`);
    } else {
        console.log(`Tanggal ${i}: ${usersAttend}`);
    }   
}