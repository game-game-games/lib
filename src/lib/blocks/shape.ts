/**
 *     0   1
 * 0 | x |   |
 * 1 | x |   |
 * 2 | x | x |
 *
 */
export interface BlockShape {
  name: string;
  color: string;
  boxes: { [type: string]: boolean[][] };
}
