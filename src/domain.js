//Primera version
/*let domain = () =>{
    var pronoun = ['the','our', 'my'];
    var adj = ['great', 'big', 'little' ];
    var noun = ['proyect','story','world'];
    var ext = ['.com', '.es','.org'];
    for (let i = 0; i < pronoun.length; i++) {
        const part1 = pronoun[i];
        for (let i = 0; i < adj.length; i++) {
            const part2 = adj[i];
            for (let i = 0; i < noun.length; i++) {
                const part3 = noun[i];
                for (let i = 0; i < ext.length; i++) {
                    const part4 = ext[i];
                    console.log(part1+part2+part3+part4);
                }
            }       
        }  
    }
}
domain();*/

//Segunda version. 
let domain = () =>{
    const pronoun = ['the','our', 'my'];
    const adj = ['great', 'big', 'little'];
    const noun = ['proyect','story','world'];
    const ext = ['.com', '.es','.org'];
    
    pronoun.forEach(part1 => {
        adj.forEach(part2 => {
            noun.forEach(part3 => {
                ext.forEach(part4 => {
                    console.log(part1+part2+part3+part4);
                });
            });
        });
    });
    }
    domain();
    