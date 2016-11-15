describe("Calculator", function () {
    it("should add 2 numbers and return the result", function () {
        expect(add(1, 2)).toBe(3);
    });
    it("should subtract 2 numbers and return the result", function () {
        expect(subtract(3, 1)).toBe(2);
    });
    it("should multiply 2 numbers and return the result", function () {
        expect(multiply(3, 3)).toBe(9);
    });
    it("should divide 2 numbers and return the result; dividing by 0 returns 0", function () {
        expect(divide(3, 3)).toBe(1);
        expect(divide(3, 0)).toBe(0);
    });
});