/**
 * Loop through the date
 *      Check if today is closed day
 *      If not loop through all memmber
 *          Check if today is member active day
 */

var members = [{name: "Tono", dayActive: 2}, {name: "Anton", dayActive: 4}, {name: "Budi", dayActive: 5}];
const dateOpen = 7;
const dateMonth = 31;
const dayClosed = 5;

function schedule(members, dateOpen, dateMonth, dayClosed) {
    for (let i = dateOpen; i <= dateMonth; i++) {
        let schedule = "Tanggal " + i + ": ";
        if (i % 5 == 0) {
            schedule += "Tempat Fitness Tutup";
            console.log(schedule);
        } else {
            let memberActive = [];
            for (let member of members) {
                if ((i - 7) % member.dayActive == 0) {
                    memberActive.push(member.name);
                }
            }
            // debugger;
            for (let j = 0; j < memberActive.length; j++) {
                schedule += memberActive[j];
                if (memberActive[j + 1] != undefined) {
                    schedule += ", "
                }
            }
            console.log(schedule);
        }
    }
}

schedule(members, dateOpen, dateMonth, dayClosed);