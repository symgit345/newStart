describe("createGeneration", function() {

  it("retourne un tableau", function() {
    var result = createGeneration();
    expect(Array.isArray(result)).toBe(true);
  });

  it("creates a 2D array", function() {
    var result = createGeneration(3, 5);
    expect(result.length).toBe(5);
    expect(result[0].length).toBe(3);
  });

  it("fills each room with 1 or 0", function() {
    var generation = createGeneration(2, 3);
    for(var y = 0; y < 3; y++) {
      for(var x = 0; x < 2; x++) {
        var cell = generation[y][x];
        var result = cell === 0 || cell === 1;
        expect(result).toBe(true);
      }
    }
  });

});
