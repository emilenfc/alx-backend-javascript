const assert = require('assert');
const calculateNumber = require("../0-calcul.js");

describe("calculateNumber", function () {
    it("should return 2 when a = 1 and b = 1", () => {
        assert.strictEqual(calculateNumber(1, 1), 2);
    });
    it("should return 4 when a = 2 and b = 2.2", () => { 
        assert.strictEqual(calculateNumber(2, 2.2), 4);
    })
    it("should return 5 when a = 1.2 and b = 3.7", () => { 
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    })
})