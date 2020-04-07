main = () => {
    let closed = [10,15,20,25,30], members = {'Tono':7, 'Anton':7, 'Budi':7}, presence;

    for (let d = 7; d < 32; d++) {
        presence = '';
        if (d == 7) {
            members.Tono += 2;
            members.Anton += 4;
            members.Budi += 5;

            console.log(`Tanggal ${d}: Tono,Anton,Budi`)
        }
        if (closed.indexOf(d) !== -1) {
            console.log(`Tanggal ${d}: Tempat Fitness Tutup`)
            presence = ''
        }

        if (d > 7) {
            for (let m in members) {
                if (members[m] == d) {
                    presence = `${presence}, ${m}`;
                    members[m] += (m == 'Tono') ? 2 : m == 'Anton' ? 4 : 5;
                }
            }
            console.log(`Tanggal ${d}: ${presence.substr(1,presence.length).trim()}`)
        }
        
    }
    
}

main();