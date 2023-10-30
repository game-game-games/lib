import { Block } from "./block";
import { getRandomBlockShape } from "../util";
import { Orientation } from "./orientation";
describe("block", () => {
  it("create block", () => {
    const myBlock = new Block(getRandomBlockShape());
    myBlock.shape.boxes;
    expect(myBlock.shape.boxes[Orientation.ZERO]).toBeDefined();
  });

  it("rotate block", () => {
    const myBlock = new Block(getRandomBlockShape());
    const originalOrientation = myBlock.orientation;

    expect(myBlock.orientation).toEqual(Orientation.ZERO);
    console.log(myBlock.shape.boxes[myBlock.orientation]);

    myBlock.rotate();

    expect(myBlock.orientation).toEqual(Orientation.NINETY);
    console.log(myBlock.shape.boxes[myBlock.orientation]);
  });
  it("place block", () => {});
});
