console.log("Micro Mouse!")
const projectDisplay = document.getElementById("ProjectDisplay");
var title = document.createElement("h1");
var textNode = document.createTextNode("Micro mouse is displayed!");
console.log("Starting Micro Mouse program...")
title.appendChild(textNode);
projectDisplay.appendChild(title);

let current;

class Maze{
    constructor(size, cols, rows){
        this.size = size;
        this.cols = cols;
        this.rows = rows;
        this.grid = [];
        this.stack = [];
    }
        Setup(){
            console.log("entering setup...")
            for (let r = 0; r < this.rows; r++) {
                let row = [];
                for (let c = 0; c < this.cols; c++) {
                    let cell = new Cell(r, c, this.grid, this.size)
                    row.push(cell);
                }
                this.grid.push(row)
            }
            current = this.grid[0][0]; //starts the maze at cell 0,0 (topleft)
        }

}

class Cell{
    constructor(rowNr, colNr, parentGrid, parentSize){
        this.rowNr = rowNr;
        this.colNr = colNr;
        this.parentGrid = parentGrid;
        this.parentSize = parentSize;
        this.walls = {
            topWall: true,
            rightWall: true,
            botWall: true,
            leftWall: true
        }
    }
}

const myMaze = new Maze(500, 10, 10);
myMaze.Setup();

// const maze = {
//     size: 4,
//     cols: 4,
//     rows: 4,
//     grid: [],
//     stack: [],
//     setup: function(){
//         console.log("entering setup...")
//             for (let r = 0; r < this.rows; r++) {
//                 let row = [];
//                 for (let c = 0; c < this.cols; c++) {
//                     let cell = new cell(r, c, this.grid, this.size)
//                     console.log(cell.rowNr);
//                     console.log(cell.colNr);
//                     row.push(cell);
//                 }
//                 this.grid.push(row)
//             }
//             current = this.grid[0][0]; //starts the maze at cell 0,0 (topleft)
//         }
// }

// const cell = {
//     rowNr: 0,
//     colNr: 0,
//     parentGrid: maze.grid,
//     parentSize: maze.size,
//     visited: false,
//     walls: {
//         topWall: true,
//         rightWall: true,
//         botWall: true,
//         leftWall: true
//     }

// }


