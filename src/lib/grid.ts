import { Block } from "./blocks/block";

export class Grid {
  public grid: Block[][];

  public constructor(rows: number, columns: number) {
    this.grid = [];
    for (let i = 0; i < columns; i++) {
      this.grid[i] = [];
      for (let j = 0; j < rows; j++) {
        this.grid[i][j] = null;
      }
    }
  }

  public collides(block: Block): boolean {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j]) {
          return true;
        }
      }
    }
  }
  //Checks if the targeted spot in the grid is empty, and removes previous block if it exists, then places the block in the grid.
  public placeable(block: Block): void {
    // if the current position of the block in its own grid is avaible in the actual grid
    if (!this.collides(block)) {
      console.log(`${new Date()} - Placing block ${JSON.stringify(block)}`);

      // Loop through each row:
      for (let i = 0; i < this.grid.length; i++) {
        // Loop through columns:
        for (let j = 0; j < this.grid[i].length; j++) {
          // If there is a block in the grid:
          if (this.grid[i][j]) {
            // If the block id matches:
            if (this.grid[i][j].id === block.id) {
              //
              // Loop through grid and null reference to matching block by it's id.
              //
              // Determine if we need to unassign the matching block:
              this.grid[i][j] = null;
            }

            const startingRow = i + block.position.row;
            // const lastRow = startingRow + block.shape.boxes.length;

            // if (startingRow >= i || lastRow <= i) {
            //   this.grid[i][j] = block;
            // }
          }
        }
      }
    } else {
      console.log(
        `${new Date()} - failed placing block ${JSON.stringify(block)}`
      );
    }
  }
  public draw(): void {}
}
