console.log("Micro Mouse!")
var display = document.getElementById("ProjectDisplay")
const canvasElement = document.createElement("canvas");
canvasElement.setAttribute("class", "maze");
display.appendChild(canvasElement);
let maze = document.querySelector(".maze");
const ctx = maze.getContext("2d");

let current;

class Maze {
    constructor(size, cols, rows) {
        this.size = size;
        this.cols = cols;
        this.rows = rows;
        this.grid = [];
        this.stack = [];
    }
    Setup() {
        console.log("entering setup...")
        console.log(`Number of rows is ${this.rows}.`)
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
    constructor(rowNum, colNum, parentGrid, parentSize) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.parentGrid = parentGrid;
        this.parentSize = parentSize;
        this.visited = false;
        this.walls = {
            topWall: true,
            rightWall: true,
            botWall: true,
            leftWall: true
        }
    }
    checkNeighbours() {
        let grid = this.parentGrid;
        let row = this.rowNum;
        let col = this.colNum;
        let neighbours = [];

        let top = row !== 0 ? grid[row - 1][col] : undefined;
        let right = col !== grid.lenght - 1 ? grid[row][col + 1] : undefined;
        let bot = row !== grid.height - 1 ? grid[row + 1][col] : undefined;
        let left = col !== 0 ? grid[row][col - 1] : undefined;

        if (top && top.visited) neighbours.push(top);
        if (right && right.visited) neighbours.push(right);
        if (bot && bot.visited) neighbours.push(bot);
        if (left && left.visited) neighbours.push(left);

        if (neighbours.length != 0) {
            let random = math.floor(math.random() * neighbours.length);
        }
        else {
            return undefinded;
        }
    }


    drawTopWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size / cols, y);
        ctx.stroke();
    };
    drawRightWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x + size / cols, y);
        ctx.lineTo(x + size / cols, y + size / rows);
        ctx.stroke();
    }
    drawBotWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size / cols, y);
        ctx.stroke();
    }
    drawLeftWall(x, y, size, cols, rows) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + size / rows);
        ctx.stroke();
    }

    show(size, rows, cols) {
        console.log("Entering show function...")
        let x = (this.colNum * size) / cols;
        let y = (this.rowNum * size) / rows;

        ctx.strokeStyle = "white";
        ctx.fillStyle = "green";
        ctx.lineWidth = "2";

        if (this.walls.topWall) this.drawTopWall(x, y, size, cols, rows);
        if (this.walls.rightWall) this.drawRightWall(x, y, size, cols, rows);
        if (this.walls.botWall) this.drawBotWall(x, y, size, cols, rows);
        if (this.walls.leftWall) this.drawLeftWall(x, y, size, cols, rows);
        if (this.visited) {
            ctx.fillRect(x + 1, y + 1, size / cols - 2, size / rows - 2)
        }
    }
}
const myMaze = new Maze(500, 10, 10);
myMaze.Setup();
myMaze.Draw();



