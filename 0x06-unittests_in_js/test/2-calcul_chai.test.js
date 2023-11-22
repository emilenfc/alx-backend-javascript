const expect = require('chai').expect
const calculateNumber = require("../1-calcul.js");


describe("calculateNumber", function () {
    it("when calculateNumber('SUM', 1.4, 4.5) should return 6", () => {
        expect (calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it("when calculateNumber('SUBTRACT', 1.4, 4.5) should return -4", () => {
        expect (calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it("when calculateNumber('DIVIDE', 1.4, 4.5) should return 0.2", () => {
        expect (calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    })
    it("when calculateNumber('DIVIDE', 1.4, 0) should return Error", () => {
        expect (calculateNumber('DIVIDE', 1.4, 0)).to.equal("Error");
    })
    })