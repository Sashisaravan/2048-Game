import {
    FiRotateCcw,
    FiVolume2,
    FiBarChart2,
    FiHelpCircle,
    FiSettings
} from "react-icons/fi";



let audioContext;

const getAudioContext = () => {
    if (!audioContext) {
        audioContext = new (
            window.AudioContext ||
            window.webkitAudioContext
        )();
    }

    return audioContext;
};

export const playMoveSound = () => {
    const ctx = getAudioContext();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = "sine";

    // Very soft, short movement sound
    oscillator.frequency.setValueAtTime(180, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
        120,
        ctx.currentTime + 0.06
    );

    gainNode.gain.setValueAtTime(
        0.035,
        ctx.currentTime
    );

    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + 0.07
    );

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();

    oscillator.stop(
        ctx.currentTime + 0.07
    );
};

export const createEmptyBoard = () => {
    return Array.from({ length: 4 }, () => Array(4).fill(0));
};


export const getRandomEmptyCell = (board) => {
    const emptyCells = [];

    board.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if (value === 0) {
                emptyCells.push({
                    row: rowIndex,
                    col: colIndex,
                });
            }
        });
    });

    if (emptyCells.length === 0) {
        return null;
    }

    return emptyCells[
        Math.floor(Math.random() * emptyCells.length)
    ];
};


export const addRandomTile = (board) => {
    const position = getRandomEmptyCell(board);

    if (!position) {
        return board;
    }

    const newBoard = board.map(row => [...row]);
    newBoard[position.row][position.col] =
        Math.random() < 0.9 ? 2 : 4;

    return newBoard;
};


export const createInitialBoard = () => {
    let board = createEmptyBoard();

    board = addRandomTile(board);
    board = addRandomTile(board);

    return board;
};


export const removeZeros = (row) => {
    return row.filter(value => value !== 0);
};


export const mergeRow = (row) => {
    const filteredRow = removeZeros(row);

    const result = [];
    let score = 0;

    for (let i = 0; i < filteredRow.length; i++) {

        if (
            i < filteredRow.length - 1 &&
            filteredRow[i] === filteredRow[i + 1]
        ) {
            const mergedValue = filteredRow[i] * 2;

            result.push(mergedValue);

            score += mergedValue;

            i++;
        } else {
            result.push(filteredRow[i]);
        }
    }

    while (result.length < 4) {
        result.push(0);
    }

    return {
        row: result,
        score,
    };
};

export const moveLeft = (board) => {
    let score = 0;

    const newBoard = board.map(row => {
        const result = mergeRow(row);

        score += result.score;

        return result.row;
    });

    return {
        board: newBoard,
        score,
    };
};


export const moveRight = (board) => {
    let score = 0;

    const newBoard = board.map(row => {

        const reversed = [...row].reverse();

        const result = mergeRow(reversed);

        score += result.score;

        return result.row.reverse();
    });

    return {
        board: newBoard,
        score,
    };
};


export const transpose = (board) => {
    return board[0].map((_, colIndex) =>
        board.map(row => row[colIndex])
    );
};


export const moveUp = (board) => {

    const transposedBoard = transpose(board);

    const result = moveLeft(transposedBoard);

    return {
        board: transpose(result.board),
        score: result.score,
    };
};


export const moveDown = (board) => {

    const transposedBoard = transpose(board);

    const result = moveRight(transposedBoard);

    return {
        board: transpose(result.board),
        score: result.score,
    };
};


export const boardsEqual = (board1, board2) => {
    return JSON.stringify(board1) === JSON.stringify(board2);
};


export const canMove = (board) => {

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {

            if (board[row][col] === 0) {
                return true;
            }
        }
    }

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {

            if (
                board[row][col] ===
                board[row][col + 1]
            ) {
                return true;
            }
        }
    }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {

            if (
                board[row][col] ===
                board[row + 1][col]
            ) {
                return true;
            }
        }
    }

    return false;
};


export const hasWon = (board) => {

    return board.some(row =>
        row.some(value => value >= 2048)
    );
};

