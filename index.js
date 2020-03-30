//PSEUDOCODE
/*
 * SET totalDays to 31
 * SET openingDay to 7
 * SET offDay to 5
 * SET closedMsg to some messages
 * SET members to array of member objects with properties name and schedule of each member
 * 
 * FOR each day starts from openingDay
 * 
 *  SET msg to some messages
 *  SET names to empty array
 * 
 *  FOR each member
 *    IF day is not offDay AND day is the schedule THEN
 *      names PUSH member[name]
 *    END IF
 *  END FOR
 * 
 *  CONCAT msg with JOIN of names separated by comma
 * 
 *  IF day is an offDay THEN
 *   CONCAT msg with closedMsg
 *  END IF
 * 
 *  DISPLAY msg
 * 
 * ENDFOR
 */

let totalDays = 31;
let daysInWeek = 7;
let openingDay = 7;
let offDay = 5;
let closedMsg = `Tempat Fitness Tutup`;

let members = [
  { name: 'Tono', schedule: 2 },
  { name: 'Anton', schedule: 4 },
  { name: 'Budi', schedule: 5 }
];

for (let day = openingDay; day <= totalDays; day++) {
  let msg = `Tanggal ${day}: `;
  let names = new Array();

  members.forEach(member => {
    if ((day % offDay !== 0) && ((day - daysInWeek) % member.schedule === 0))
      names.push(member.name);
  });

  msg += names.join(', ');

  if (day % offDay === 0) msg += closedMsg;
  console.log(msg);
};