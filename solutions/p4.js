// Problem 4
var board = [ [ 'X', 'O', 'X' ],
              [ 'O', 'X', 'O' ],
              [ 'O', 'X', 'O' ]
            ];
function printBoard()
{
    for(let i=0;i<board.length;i++)
    {
        console.log(board[i][0]+' '+board[i][1]+' '
        +board[i][2]);
    }
}

printBoard();