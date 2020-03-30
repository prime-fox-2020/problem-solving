
function jadwalFitnes(tanggal){
    var member={}
    //Di check di Setiap Tanggal
    for (let i = 0; i < tanggal.length; i++) {
        // Mencari Member Datang di Setiap tanggal (array)
        var tampung=[]
        if((tanggal[i]-7)%2==0){
            tampung.push('Tono')
        }
        if((tanggal[i]-7)%4==0){
            tampung.push('Anton')
        }
        if((tanggal[i]-7)%5==0){
            tampung.push('Budi')
        }

        // Membuat tampilan Member Datang Seperti Output yang di Harapkan
        if(tampung.length===0){
            member[i]=''
        }else if(tampung.length==1){
            member[i]=tampung
        }else if(tampung.length>=2){
            var temp=''
            for (let j = 1; j < tampung.length; j++) {
                temp = temp + ', ' +tampung[j]
            }
            member[i]=tampung[0]+temp
        }
        
        // Seleksi jika ada tanggal libur
        if(tanggal[i]%5==0){
            console.log('Tanggal ' +tanggal[i] + ': Tempat Fitness Tutup')
        }else{
        console.log('Tanggal '+tanggal[i]+': ' + member[i])
        }
    }
}

jadwalFitnes([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])


/*
PSUDOCODE
CALL jadwalFitnes with tanggal
    SET member TO any object
    FOR i TO any value on tanggal
        SET tampung TO any array
        IF (tanggal[i] minus by 7) MOD 2 EQUAL TO 0
            PUSH 'Tono' to tampung
        END IF
        IF (tanggal[i] minus by 7) MOD 4 EQUAL TO 0
            PUSH 'Anton' to tampung
        END IF
        IF (tanggal[i] minus by 7) MOD 5 EQUAL TO 0
            PUSH 'Budi' to tampung
        END IF

        IF length OF tampung EQUAL TO 0
            member[i] IS ''
        ELSE IF length OF tampung EQUAL TO 1
            member[i] IS tampung
        ELSE IF length OF tampung MORE THAN EQUAL TO 2
            SET temp to any string
            FOR j from 1 TO any value on tampung
                temp = temp + '. ' +tampung[j]
            END FOR
            member[i] IS tampung[0] added TO temp
        END IF

        IF tanggal[i] MOD 5 EQUAL TO 0
            PRINT ('Tanggal ' +tanggal[i] + ': Tempat Fitness Tutup')
        ELSE
            PRINT ('Tanggal '+tanggal[i]+': ' + member[i])
        END IF
    END FOR
END CALL


REVOKE jadwalFitnes([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])
*/

