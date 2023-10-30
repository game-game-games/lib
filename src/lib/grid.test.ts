import { Block } from "./blocks/block";
import { BlockShapes } from "./blocks/shapes";
import { Grid } from "./grid";
describe("gird", () => {
  const grid = new Grid(10, 12);
  it("generate grid", () => {
    expect(grid.grid.length).toEqual(12);
    for (let row = 0; row < grid.grid.length; row++) {
      expect(grid.grid[row].length).toEqual(10);
    }
  });

  test("make sure collides", () => {
    const block1 = new Block(BlockShapes.T, { row: 0, column: 0 });
    const block2 = new Block(BlockShapes.T, { row: 0, column: 0 });
    expect(grid.place(block1)).toEqual(true);
    expect(grid.place(block2)).toEqual(false);
  });
});
