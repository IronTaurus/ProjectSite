console.log("Micro Mouse!")
var display = document.getElementById("ProjectDisplay")
const canvasElement = document.createElement("canvas");
canvasElement.setAttribute("class", "maze");
display.appendChild(canvasElement);
let maze = document.querySelector(".maze");
const ctx = maze.getContext("2d");

let current;

const tlCorner={
    topWall: true,
    rightWall: false,
    botWall: false,
    leftWall: true
}
const trCorner = {
    topWall: true,
    rightWall: true,
    botWall: false,
    leftWall: false
}
const blCorner = {
    topWall: false,
    rightWall: false,
    botWall: true,
    leftWall: true
}
const brCorner = {
    topWall: false,
    rightWall: true,
    botWall: true,
    leftWall: false
}
const xHall = {
    topWall: true,
    rightWall: false,
    botWall: true,
    leftWall: false
}
const yHall = {
    topWall: false,
    rightWall: true,
    botWall: false,
    leftWall: true
}
const blOuterCorner = {
    topWall: true,
    rightWall: false,
    botWall: true,
    leftWall: true
}
const end = {
    topWall: true,
    rightWall: true,
    botWall: true,
    leftWall: false
}
const row0 = [tlCorner, xHall, xHall, xHall, trCorner]
const row1 = [yHall, tlCorner, xHall, trCorner, yHall]
const row2 = [yHall, blCorner,end, yHall, yHall]
const row3 = [blCorner, xHall, xHall, brCorner, yHall]
const row4 = [blOuterCorner, xHall, xHall, xHall, brCorner]
const preconRows = [row0,row1,row2,row3,row4];

class Maze {
    constructor(size, cols, rows){
        this.size = size;
        this.cols = cols;
        this.rows = rows;
        this.grid = [];
        this.stack = [];
    }
    Setup(){
        console.log("entering setup...")
        console.log(`Number of rows is ${this.rows}.`)
        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.cols; c++) {
                let cell = new Cell(r, c, this.grid, this.size)
                cell.walls = preconRows[r][c];
                row.push(cell);
            }   
            this.grid.push(row)
        }
        current = this.grid[4][2]; //starts the maze at coords
        let goal = this.grid[2][2]; //goal coord
        goal.goal = true;
    }
    Draw() {
        console.log("Entering draw function...")
        maze.width = this.size;
        maze.height = this.size;
        maze.style.background = "black";

        current.visited = true;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                let grid = this.grid;
                grid[r][c].show(this.size, this.rows, this.cols);
            }
        }
    }
}

class Cell {
    constructor(rowNum, colNum, parentGrid, parentSize){
        this.goal = false;
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.parentGrid = parentGrid;
        this.parentSize = parentSize;
        this.walls = {
            topWall: true,
            rightWall: true,
            botWall: true,
            leftWall: true
        }
    }
    drawTopWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size / cols, y);
        ctx.strokeStyle = "green";
        ctx.stroke();
    };
    drawRightWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x + size / cols, y);
        ctx.lineTo(x + size / cols, y + size / rows);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    drawBotWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y + size / rows);
        ctx.lineTo(x + size / cols, y + size / rows);
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }
    drawLeftWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + size / rows);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }

    show(size, rows, cols) {
        console.log("Entering show function...")
        let x = (this.colNum * size) / cols;
        let y = (this.rowNum * size) / rows;

        ctx.strokeStyle = "white";
        ctx.fillStyle = "blue";
        ctx.lineWidth = "2";

        console.log(`${this.rowNum}: T:${this.walls.topWall}, R:${this.walls.rightWall}, B:${this.walls.botWall}, L:${this.walls.leftWall}`)
        if (this.walls.topWall) this.drawTopWall(x, y, size, cols, rows);
        if (this.walls.rightWall) this.drawRightWall(x, y, size, cols, rows);
        if (this.walls.botWall) this.drawBotWall(x, y, size, cols, rows);
        if (this.walls.leftWall) this.drawLeftWall(x, y, size, cols, rows);
        if (this.visited) {
            ctx.fillRect(x + 1, y + 1, size / cols - 2, size / rows - 2)
        }
        if (this.goal){
            ctx.fillStyle = "yellow";
            ctx.fillRect(x + 1, y + 1, size / cols - 2, size / rows - 2)
        }
    }
}

class Mouse {
    constructor(currentCell){
        this.currentCell = Cell;
        this.notVisitedGrid = [];
        this.visitedCells = [];
    }
}


const myMaze = new Maze(500, 5, 5);
myMaze.Setup();
myMaze.Draw();


