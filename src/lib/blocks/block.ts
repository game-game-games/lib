import { BlockShape } from "./shape";
import { GridPosition } from "../gird-position";
import { Orientation } from "./orientation";
import { randomId } from "../util";

export class Block {
  public id: string;
  //public type: BlockType;
  public orientation?: Orientation;
  public position: GridPosition;
  public shape: BlockShape;
  public active: boolean;

  public constructor(shape: BlockShape, positon: GridPosition, orientation: Orientation = Orientation.ZERO) {
    this.id = randomId();
    this.orientation = orientation;
    this.shape = shape;
    this.position = positon;
  }

  public rotate(): void {
    if (this.orientation === Orientation.ZERO) {
      this.orientation = Orientation.NINETY;
    } else if (this.orientation === Orientation.NINETY) {
      this.orientation = Orientation.ONE_EIGHTY;
    } else if (this.orientation === Orientation.ONE_EIGHTY) {
      this.orientation = Orientation.TWO_SEVENTY;
    } else if (this.orientation === Orientation.TWO_SEVENTY) {
      this.orientation = Orientation.ZERO;
    }
  }
}
