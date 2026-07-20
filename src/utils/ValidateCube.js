export function validateCube(cubeState) {

    const counts = {
        white: 0,
        yellow: 0,
        red: 0,
        orange: 0,
        blue: 0,
        green: 0
    };

    Object.values(cubeState).forEach(face => {
        face.forEach(color => {
            counts[color]++;
        });
    });

    return Object.values(counts).every(count => count === 9);
}