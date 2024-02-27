
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
                row.push(cell);
            }
            this.grid.push(row)
        }
        current = this.grid[0][0]; //starts the maze at cell 0,0 (topleft)
    }
}

class Cell {
    constructor(rowNum, colNum, parentGrid, parentSize){
        this.goal = 0;
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
}



class Mouse {
    constructor(currentCell){
        this.currentCell = Cell;
        this.notVisitedGrid = [];
        this.visitedCells = [];
    }
}

function CreateMaze(){

}

function checkWall(t, r, b, l)
{
    if(currentCell.topWall == t){
        const myCell = currentCell;
        myCell.rowNum--;
        currentCell = myCell;
    }
    else if(currentCell.rightWall == r){
        const myCell = currentCell;
        myCell.rowNum--;
        currentCell = myCell;
    }
    else if(currentCell.bottomWall == b){
        const myCell = currentCell;
        myCell.rowNum--;
        currentCell = myCell;
    }
    else if(currentCell.topWall == l){
        const myCell = currentCell;
        myCell.rowNum--;
        currentCell = myCell;
    }
}

function PathFinder(){
let myMouse = new Mouse();
// checkWall();

    
}




