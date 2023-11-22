function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

    if (type === 'SUM') {
        return roundedA + roundedB;
    }
    if (type === 'SUBTRACT') {
        return roundedA - roundedB;
    }
    if (type === 'DIVIDE') {
        if (b === 0) {
            return "Error";
        }
       console.log(roundedA / roundedB);
        return  roundedA / roundedB;
    }

    return 0;
}
module.exports = calculateNumber;
