function right(lock){
    let newstring;
    for (let string = 0; string < lock.length; string ++){ 
        let newstring = lock[string].split("");
       for (let i = (lock[string].length - 1); i >= 0 ; i--){
           let j = i;
           while (j < newstring.length && newstring[j+1] == '.'){
               newstring[j+1] = newstring[j];
               newstring[j]='.';
               j++;
               
           }
           
       } 
        lock[string] = newstring.join("");
       // console.log(lock[string]);
    }
}

function left(lock) {
    for (let string = 0; string < lock.length; string ++){
         let newstring = lock[string].split("");
       for (let i = 0; i < lock[string].length ; i++){
           let j = i;
           
           while (j >= 0  && newstring[j-1] == '.'){
               newstring[j-1] = newstring[j];
               newstring[j]='.';
               j--;
               
           }
           
       } 
        lock[string] = newstring.join("");
        //console.log(lock[string]);
    }
}

function down (lock) {
    let matrix = [];
    for (let string = 0; string < lock.length; string ++){
         matrix[string]= (lock[string].split(""));    
    }
          //  console.log(matrix[0][0]);
    for ( let column = 0 ; column < matrix[0].length; column ++){
        for (let row = (matrix.length - 1); row >= 0 ; row--){
           let j = row;           
           while (j < matrix.length && (j+1)<matrix.length && matrix[j+1][column] == '.' ){
               matrix[j+1][column] = matrix[j][column];
               matrix[j][column]='.';
               j++;
               
           
           }
           
       } 
    }
    for (let string = 0; string < lock.length; string ++){
         lock[string]= matrix[string].join("");    
    }
    //console.log(matrix);
}

function up (lock) {
    let matrix = [];
    for (let string = 0; string < lock.length; string ++){
         matrix[string]= (lock[string].split(""));    
    }
            console.log(matrix[0][0]);
    for ( let column = 0 ; column < matrix[0].length; column ++){
        for (let row = 0 ; row < matrix.length  ; row++){
           let j = row;           
           while (j > 0 && (j-1) >=0 && matrix[j-1][column] == '.' ){
               matrix[j-1][column] = matrix[j][column];
               matrix[j][column]='.';
               j--;
               
           
           }
           
       } 
    }
    for (let string = 0; string < lock.length; string ++){
         lock[string]= matrix[string].join("");    
    }
    //console.log(matrix);
}

function secretArchivesLock(lock, actions) {
    for (let letter of actions) {
        switch (letter){
            case 'R': right(lock);
                    break;
            case 'L': left(lock);
                    break;
            case 'D': down(lock);
                    break;
            case 'U': up(lock);
                    break;
        }
    };
    return lock;
}


let newlock =secretArchivesLock(["....",
        "AB..",
        ".C..",
        "...."],"RDL");
console.log(newlock);