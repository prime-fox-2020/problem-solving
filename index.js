/* 
********PSEUDOCODE**********
START FUNCTION
  FOR date EQUAL 0 to 24, INCREMENT date BY 1
    SET tempArray TO EMPTY ARRAY
    IF (date+7) MOD 5 EQUAL TO 0 THEN
      PUSH " Tempat Fitness Tutup" TO tempArray
    ELSE
      IF date MOD 2 EQUAL TO 0 THEN
        PUSH " Tono" TO tempArray
      END IF
      IF date MOD 4 EQUAL TO 0 THEN
        PUSH " Anton" TO tempArray
      END IF
      IF date MOD 5 EQUAL TO 0 THEN
        PUSH " Budi" TO tempArray
      END IF
    END IF
    DISPLAY "Tanggal {date+7}:{CONVERT tempArray TO STRING}"
  END FOR
END FUNCTION
*/


function problemSolving(){
  for(let date = 0; date < 25; date++){
    const tempArray = [];
    if((date+7)%5 === 0) tempArray.push(" Tempat Fitness Tutup");
    else{
      if(date%2 === 0) tempArray.push(" Tono");
      if(date%4 === 0) tempArray.push(" Anton");
      if(date%5 === 0) tempArray.push(" Budi");
    }
    console.log(`Tanggal ${date+7}:${String(tempArray)}`);
  }
}

problemSolving();