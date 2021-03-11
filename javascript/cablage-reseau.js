const N = parseInt(readline());
const Coordinates = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    Coordinates.push({ X, Y });
}

const calcMediane = (array) => {
    const idxMidRound = Math.round(array.length / 2) - 1;
    const idxMidFloor = Math.floor(array.length / 2) - 1;

    if (array.length % 2 === 1) { return array[idxMidRound] }
    else {
        return array[idxMidRound] === array[idxMidFloor] ?
            array[idxMidFloor]
            :
            (array[idxMidRound] - array[idxMidFloor]) / 2
    }
}

const calcDistance = (P1, P2) => Math.sqrt(Math.pow((P2.X - P1.X), 2) + Math.pow((P2.Y - P1.Y), 2));

const calcEstWest = (array) => {
    const minX = array[0];
    const maxX = array[array.length - 1];
    return maxX - minX;
}

const Xs = Coordinates.map(c => c.X).sort((a, b) => a - b);
const Xlength = calcEstWest(Xs);

const Ys = Coordinates.map(c => c.Y).sort((a, b) => a - b);
const medianeY = calcMediane(Ys);

let totalDistance = Coordinates.reduce((acc, curr) => {
    return acc += calcDistance(curr, { X: curr.X, Y: medianeY })
}, Xlength);

console.log(totalDistance);
