const assert = require('assert');
const calculateNumber = require("../1-calcul.js");


describe("calculateNumber", function () {
    it("when calculateNumber('SUM', 1.4, 4.5) should return 6", () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it("when calculateNumber('SUBTRACT', 1.4, 4.5) should return -4", () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it("when calculateNumber('DIVIDE', 1.4, 4.5) should return 0.2", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it("when calculateNumber('DIVIDE', 1.4, 0) should return Error", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), "Error");
    })
    })