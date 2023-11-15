import { Block } from "./blocks/block";
import { Orientation } from "./blocks/orientation";
import { BlockShapes } from "./blocks/shapes";
import { Direction } from "./direction";
import { Grid } from "./grid";
import { Playfield } from "./playfield";

describe("playfield", () => {
  let playfield: Playfield;
  let block1: Block;
  it("generate playfield", () => {
    playfield = new Playfield();
    expect(playfield.queue.length).toEqual(5);
    expect(playfield).toBeDefined();
  });

  it("add initial blocks", () => {
    const block1 = new Block(BlockShapes.T, {
      row: 0,
      column: playfield.getCenter(),
    });
    expect(block1.shape.name).toEqual(BlockShapes.T.name);
    playfield.addBlock(block1);

    expect(playfield.blocks.length).toEqual(0);
    
  });
  test("Rotate block",()=>{
    expect(playfield.activeBlock.orientation).toEqual(Orientation.ZERO);
    playfield.rotate(Direction.LEFT);
    expect(playfield.activeBlock.orientation).toEqual(Orientation.TWO_SEVENTY);


  })

  afterAll(() => {
    playfield.stop();
  });
});
