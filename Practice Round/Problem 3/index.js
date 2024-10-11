function maxPointsOnALine(points) {
    if (points.length < 2) {
        return points.length;
    }

    let maxPoints = 0;

    for (let i = 0; i < points.length; i++) {
        let slopeMap = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let slope = getSlope(points[i], points[j]);
                slopeMap.set(slope, (slopeMap.get(slope) || 0) + 1);
            }
        }
        maxPoints = Math.max(maxPoints, Math.max(...slopeMap.values()) + 1);
    }

    return Math.abs(maxPoints - points.length);
}

function getSlope(p1, p2) {
    let dx = p2[0] - p1[0];
    let dy = p2[1] - p1[1];
    if (dx === 0) {
        return 'inf'; // Vertical line
    }
    let gcdVal = gcd(dy, dx);
    return `${dy / gcdVal}/${dx / gcdVal}`;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

const points = [
    [1,1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [0, 1],
    [3, 4],
    [4, 7]
];

console.log(`The maximum number of collinear points is: ${maxPointsOnALine(points)}`);
