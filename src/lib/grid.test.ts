import { Grid } from "./grid";

it("generate grid", () => {
  const grid = new Grid(10, 12);
  expect(grid.grid.length).toEqual(12);
  for (let row = 0; row < grid.grid.length; row++) {
    expect(grid.grid[row].length).toEqual(10);
  }
});
