//PSEUDOCODE
/*
 * SET totalDays to 31
 * SET openingDay to 7
 * SET offDay to 5
 * SET offDayMsg to some messages
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
 *   CONCAT msg with offDayMsg
 *  END IF
 * 
 *  DISPLAY msg
 * 
 * ENDFOR
 */