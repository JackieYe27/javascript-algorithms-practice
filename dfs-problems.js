// LeetCode 733 Flood Fill
/*
  An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting 
pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), 
and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

Example:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]

Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels 
connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]
*/

const floodFill = (image, sr, sc, newColor) => {

  const fill = (image, sr, sc, color, newColor) => {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== color) {
      return;
    }
    image[sr][sc] = newColor;

    fill(image, sr+1, sc, color, newColor);
    fill(image, sr-1, sc, color, newColor);    
    fill(image, sr, sc+1, color, newColor); 
    fill(image, sr, sc-1, color, newColor);    
  }

  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); //Output: [[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill([[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2)); //Output: [[2,2,2],[2,2,2]]


// Max Area of Island
/*

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) 
connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

eXample: 
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6

*/

const dfs = (grid, r, c) => {
  let count = 0;
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0) {
    return 0;
  }
  grid[r][c] = 0;
  count = 1 + dfs(grid, r + 1, c) + dfs(grid, r - 1, c) + dfs(grid, r, c + 1) + dfs(grid, r, c - 1);
  return count;
}

const maxAreaOfIsland = (grid) => {
  let max = 0;

  for (let i = 0 ; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j))
      }
    }
  }
  return max;
}

console.log(maxAreaOfIsland([
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]])) // output: 6