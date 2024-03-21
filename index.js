function generateKey(length, characters){
    let key = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        key += characters.charAt(randomIndex);
    }
    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generatedKey = generateKey(10, characters);
console.log(generatedKey); 