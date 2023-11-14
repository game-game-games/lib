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
        if (this.grid[i][j] != null) {
          return true;
        }
      }
    }
  }
  //Checks if the targeted spot in the grid is empty, and removes previous block if it exists, then places the block in the grid.
  public place(block: Block): boolean {
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
          }
        }
      }

      //now we can add the new block

      for (let i = 0; i < block.shape.boxes[block.orientation].length; i++) {
        //loop each block in each collumn of each row of the block
        for (let j = 0; j < block.shape.boxes[block.orientation][i].length; j++) {
          //Change the grid boxes to match the bock's boxes
          this.grid[i][j] = block;
          //if the blocks box is false then assign it to null inside the grid
          if (this.grid[i][j].shape.boxes[block.orientation][i][j] == false) {
            this.grid[i][j] = null;
          }
        }
      }

      this.grid[block.position.row][block.position.column] = block;
      console.log("foo");
      return true;
    } else {
      console.log(`${new Date()} - failed placing block ${JSON.stringify(block)}`);
      return false;
    }
  }
  public draw(): void {}
}
