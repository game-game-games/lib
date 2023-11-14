import { Block } from "./blocks/block";
import { GridPosition } from "./gird-position";
import { Grid } from "./grid";
import { getRandomBlockShape } from "./util";

export class Playfield {
  public eventLoop: any;
  public blockInterval: any;
  public queue: Block[] = [];
  public activeBlock: Block;
  public blocks: Block[] = [];
  public grid: Grid;
  public busy: boolean;

  public constructor() {
    this.grid = new Grid(16, 10);
    for (let i = 1; i <= 5; i++) {
      this.addBlock(new Block(getRandomBlockShape(), { row: 0, column: this.getCenter() }));
    }
    this.start();
  }
  public addBlock(block: Block): void {
    console.log(`${new Date()} - Queuing new block ${JSON.stringify(this.activeBlock)}`);

    this.queue.push(block);
  }

  public getCenter(): number {
    return Math.floor(this.grid.grid[0].length / 2);
  }

  public position(pos: GridPosition): void {}

  public render(): void {
    //
    // Check if there is a block in the queue and we
    // aren't busy with dropping an existing block,
    // if so, position it.
    //
    if (this.queue.length > 0 && !this.busy) {
      this.transition(this.queue.shift());
      this.queue.push(new Block(getRandomBlockShape(), { row: 0, column: this.getCenter() }));
    } else {
      if (this.busy) {
        // console.log(`${new Date()} - We're busy..`);
      } else {
        console.log(`${new Date()} - No blocks in queue..`);
      }
    }
  }

  public transition(block: Block): void {
    this.busy = true;
    this.activeBlock = block;
    console.log(`${new Date()} - Transitioning block ${JSON.stringify(block)}`);

    //
    // Start the movement of the block.
    //
    this.blockInterval = setInterval(() => {
      this.tick();
    }, 500);
  }

  public tick(): void {
    //console.log(`${new Date()} - Ticking block ${JSON.stringify(block)}`);
    // block.position.row++;

    // if (this.grid.grid.length === block.position.row) {
    //   this.busy = false;
    //   clearInterval(this.blockInterval);
    //   console.log(`${new Date()} - Block #${block.id} placed`);
    // }

    // Re-draw the grid.
    // for (let i = 0; i < this.blocks.length; i++) {
    //   this.grid.place(this.blocks[i]);
    // }
    if (this.activeBlock.position.row + 1 === this.grid.grid.length) {
      this.busy = false;
      clearInterval(this.blockInterval);
      console.log(`${new Date()} - Block #${this.activeBlock.id} reached bottom`);
    } else {
      this.activeBlock.position.row++;
      if (this.grid.place(this.activeBlock)) {
        clearInterval(this.blockInterval);
        this.addBlock(new Block(getRandomBlockShape(), { row: 0, column: this.getCenter() }));
        this.blocks.push(this.activeBlock);
        this.busy = false;
      }
    }
  }

  public softDrop(): void {}

  public start(): void {
    this.eventLoop = setInterval(() => {
      this.render();
    }, 500);
  }

  public stop(): void {
    clearInterval(this.eventLoop);
  }
}
