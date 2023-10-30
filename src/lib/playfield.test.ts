import { Block } from "./blocks/block";
import { BlockShapes } from "./blocks/shapes";
import { Playfield } from "./playfield";

describe("playfield", () => {
  let playfield: Playfield;

  it("generate playfield", () => {
    playfield = new Playfield();
    expect(playfield.queue.length).toEqual(5);
    expect(playfield).toBeDefined();
  });

  it("add initial blocks", () => {
    const block1 = new Block(BlockShapes.T);
    expect(block1.shape.name).toEqual(BlockShapes.T.name);
    playfield.addBlock(block1);

    expect(playfield.blocks.length).toEqual(0);
  });

  afterAll(() => {
    playfield.stop();
  });
});
