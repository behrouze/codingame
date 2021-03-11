String.prototype.getAsciiPositionStr = function () { return this.charCodeAt(0).toString() };
String.prototype.getBinary = function () { return (this >>> 0).toString(2).padStart(7, '0') };
String.prototype.translateBinToChuck = function () {
    return this
        .match(/(\d)\1*/g)
        .reduce((acc, g) => {
            return `${acc} ${processBinaryGroup(g)}`;
        }, "")
};

const processBinaryGroup = (block => {
    blockArray = block.split('');
    const prefix = blockArray[0] === '0' ? '00' : '0';
    const suffix = new Array(blockArray.length).fill('0').join('');
    return `${prefix} ${suffix}`;
})

const MESSAGE = readline();
const result = MESSAGE
    .split('')
    .map(char => char.getAsciiPositionStr().getBinary())
    .join('')
    .translateBinToChuck();

console.log(result.trim());