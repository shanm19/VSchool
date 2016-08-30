describe("Letter takes a string and returns new values", function() {
    letterObj = { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 };
    
    it("should return the frequency of each letter in a string", function() {
        expect(letterFrequency("slimy smelly solution")).toEqual(letterObj);
    });
    
    it("should return each letter once in a single string", function(){
        expect(stringifyObj(letterObj)).toBe("slimy eoutn");
    });
    
    it("should return the characters in order of frequency, high to low", function(){
        expect(highToLow(letterObj)).toBe('"l": 4\n"s": 3\n"i": 2\n"m": 2\n"y": 2\n" ": 2\n"o": 2\n"e": 1\n"u": 1\n"t": 1\n"n": 1\n');
    });
    
});