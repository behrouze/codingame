const L = parseInt(readline());
const H = parseInt(readline());
const InputText = readline().toUpperCase().split('');
const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
const AsciiLetters = new Array();

for (let i = 0; i < H; i++) {
    const ROW = readline();
    AsciiLetters.push(ROW);
}

const spitLetter = (acc,singleLetter, asciiLine) => {
    const isLetter = /[A-Z]/.test(singleLetter);
    const LetterPosition = isLetter ?
        (Alphabet.indexOf(singleLetter)) * L
        :
        (Alphabet.length - 1) * L;

    return acc += asciiLine
        .split('')
        .slice(LetterPosition, LetterPosition + L)
        .join('');
}

for (let i = 0; i < H; i++) {
    const resultLine = InputText.reduce((acc, letter) => spitLetter(acc, letter, AsciiLetters[i]),"");
    console.log(resultLine);
}