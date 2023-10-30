import { BlockShape } from "./shape";

export const BlockShapes: { [type: string]: BlockShape } = {
  T: {
    name: "T",
    color: "purple",
    boxes: {
      ZERO: [
        [true, true, true],
        [false, true, false],
      ],
      NINETY: [
        [true, false],
        [true, true],
        [true, false],
      ],
      ONE_EIGHTY: [
        [true, true, true],
        [false, true, false],
      ],
      TWO_SEVENTY: [
        [false, true],
        [true, true],
        [false, true],
      ],
    },
  },
  SQUARE: {
    name: "SQUARE",
    color: "yellow",
    boxes: {
      ZERO: [
        [true, true],
        [true, true],
      ],
      NINETY: [
        [true, true],
        [true, true],
      ],
      ONE_EIGHTY: [
        [true, true],
        [true, true],
      ],
      TWO_SEVENTY: [
        [true, true],
        [true, true],
      ],
    },
  },
  L_RIGHT: {
    name: "L_LEFT",
    color: "blue",
    boxes: {
      ZERO: [
        [true, true, true],
        [true, false, false],
      ],
      NINETY: [
        [true, false],
        [true, false],
        [true, true],
      ],
      ONE_EIGHTY: [
        [true, true],
        [false, true],
        [false, true],
      ],
      TWO_SEVENTY: [
        [false, false, true],
        [true, true, true],
      ],
    },
  },
  L_LEFT: {
    name: "L_RIGHT",
    color: "orange",
    boxes: {
      ZERO: [
        [true, true, true],
        [false, false, true],
      ],
      NINETY: [
        [false, true],
        [false, true],
        [true, true],
      ],
      ONE_EIGHTY: [
        [true, true],
        [true, false],
        [true, false],
      ],
      TWO_SEVENTY: [
        [true, false, false],
        [true, true, true],
      ],
    },
  },
  Z_LEFT: {
    name: "Z_LEFT",
    color: "green",
    boxes: {
      ZERO: [
        [true, true, false],
        [false, true, true],
      ],
      NINETY: [
        [false, true],
        [true, true],
        [true, false],
      ],
      ONE_EIGHTY: [
        [true, true, false],
        [false, true, true],
      ],
      TWO_SEVENTY: [
        [false, true],
        [true, true],
        [true, false],
      ],
    },
  },
  Z_RIGHT: {
    name: "Z_RIGHT",
    color: "cyan",
    boxes: {
      ZERO: [
        [false, true, true],
        [true, true, false],
      ],
      NINETY: [
        [true, false],
        [true, true],
        [false, true],
      ],
      ONE_EIGHTY: [
        [false, true, true],
        [true, true, false],
      ],
      TWO_SEVENTY: [
        [true, false],
        [true, true],
        [false, true],
      ],
    },
  },
  LINE: {
    name: "LINE",
    color: "red",
    boxes: {
      ZERO: [[true], [true], [true], [true]],
      NINETY: [[true, true, true, true]],
      ONE_EIGHTY: [[true], [true], [true], [true]],
      TWO_SEVENTY: [[true, true, true, true]],
    },
  },
};
