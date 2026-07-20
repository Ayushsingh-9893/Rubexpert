export function cubeToString(cubeState) {
    const order = ["U", "R", "F", "D", "L", "B"];

    const colorMap = {
        white: "U",
        red: "R",
        green: "F",
        yellow: "D",
        orange: "L",
        blue: "B",
    };

    let cubeString = "";

    for (const face of order) {
        for (const sticker of cubeState[face]) {
            cubeString += colorMap[sticker];
        }
    }

    return cubeString;
}