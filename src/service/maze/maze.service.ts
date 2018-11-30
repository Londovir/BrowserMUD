import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MazeService {

    constructor() {

    }

    CreateMaze(rows: number, columns: number) {
        // Creates a maze in a grid that's rows x columns in size. Cells are either walkway (1) or wall (0).
        // Uses a wandering drunk algorithm to determine setup.

        // Create a two-dimensional array of row x columns in shape, defaulted initially to all walls (0)
        let maze = <number[][]>[];
        for (let i = 0; i < rows; ++i) {
            maze[i] = <number[]>[];
            for (let j = 0; j < columns; ++j) {
                maze[i][j] = 0;
            }
        }

        // Random pick the maze entrance, and set it to walkway (1)
        let col = this.GetRandom(0, columns - 1);
        let row = this.GetRandom(0, rows - 1);
        let open = 1;
        maze[row][col] = 1;

        // Now, while there are less than 15 open rooms, punch out more open spaces
        const limit = Math.floor(rows * columns * 0.25);
        while (open < limit) {
            console.log('loop. Row is = ' + row + ', col is = ' + col);
            // Pick a random movement direction (0 = Up, 1 = Right, 2 = Down, 3 = Left)
            const dir = this.GetRandom(0, 3);

            // Is the space in that direction a valid maze space (ie, the index is >= 0 and < rows/columns as appropriate?)
            let newcol: number;
            let newrow: number;

            switch (dir) {
                case 0: newcol = col; newrow = row - 1; break;
                case 1: newcol = col + 1; newrow = row; break;
                case 2: newcol = col; newrow = row + 1; break;
                case 3: newcol = col - 1; newrow = row; break;
            }

            if (newrow >= 0 && newrow < rows && newcol >= 0 && newcol < columns) {
                // This is a valid maze space. Is it a wall presently (0)? If so, flip it to open, update our
                // current row/col position, up the count of open spaces, and let the loop continue.
                if (maze[newrow][newcol] === 0) {
                    maze[newrow][newcol] = 1;
                    open++;
                }
                
                row = newrow;
                col = newcol;
            }

        }

        console.log(JSON.stringify(maze));
        return maze;
    }

    GetRandom(low: number, high: number) {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }
}