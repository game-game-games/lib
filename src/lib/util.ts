import { BlockShape } from "./blocks/shape";
import { BlockShapes } from "./blocks/shapes";

export const randomId = () => {
  return (Math.random() + 1).toString(36).substring(2);
};
// export const getRandomBlockType = (): BlockType => {
//   const types = Object.keys(BlockType);

//   return types[Math.floor(Math.random() * types.length)] as BlockType;
// };
export const getRandomBlockShape = (): BlockShape => {
  const shapes = Object.values(BlockShapes);

  const shape = shapes[Math.floor(Math.random() * shapes.length)] as BlockShape;

  return {
    name: shape.name,
    color: shape.color,
    boxes: shape.boxes,
  };
};
