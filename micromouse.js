console.log("Micro Mouse!")
const projectDisplay = document.getElementById("ProjectDisplay");
let maze = document.querySelectorAll(".maze");
let ctx = maze.getContext('2d');

projectDisplay.appendChild(ctx);


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
        drawTopWall(x, y, size, columns, rows){
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo();
        };
}
const myMaze = new Maze(500, 10, 10);
myMaze.Setup();



