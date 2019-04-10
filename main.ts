import {passwordGenerator} from './generator';
import * as fs from "fs";

let hundredPasswords = '';

for(let i = 0; i < 100; i++){
    hundredPasswords += '\n' + passwordGenerator(24);
}

fs.writeFile('./passwordList.txt', hundredPasswords, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log('Hundred passwords have been generated.');
}); 