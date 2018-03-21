function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return "Wrong input data";
    } else {
        return a * h / 2;
    }
}
const firstTriangle = getTriangleArea(5, 2);
console.log(firstTriangle);
const secondTriangle = getTriangleArea(-1, 3);
console.log(secondTriangle);
const thirdTriangle = getTriangleArea(2, 2);
console.log(thirdTriangle);