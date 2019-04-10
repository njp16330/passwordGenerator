const specialChars = '@#_%^&+-';
const numericChars = '0123456789';
const lowerAlphabetChars = 'abcdefghijklmnopqrstuvwxyz';
const upperAlphabetChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function passwordGenerator(): string{    
    const charset = specialChars + numericChars + 
        lowerAlphabetChars + upperAlphabetChars;

    let password = randomStringGenerator(charset, 16);

    //write code to make sure there are special characters, numbers, uppercase and lowercase letters

    return password;
}

function randomNumberArrayGenerator(length: number, max: number): number[]{
    let randomArray:number[] = [];

    for(let i = 0; i < length; i++){
        randomArray.push(Math.floor(Math.random() * max));
    }

    return randomArray;
}

function randomStringGenerator(charset: string, length: number): string{
    let randomString = '';

    for(let i = 0; i < length; i++){
        randomString += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return randomString;
}