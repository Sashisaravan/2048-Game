import { useState, useEffect } from 'react'
import {
    FiRotateCcw,
    FiVolume2,
    FiBarChart2,
    FiHelpCircle,
    FiSettings, FiFrown, FiAward
} from "react-icons/fi";
import { GamemuiStyles } from "../styles/Muistyles";
import {
    createInitialBoard,
    addRandomTile, playMoveSound,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    boardsEqual,
    canMove,
    hasWon,
} from "../components/GameLogic";
import {
    Dialog,
    DialogContent,
} from "@mui/material";

export function MainGrid() {

    const classes = GamemuiStyles();

    const [board, setBoard] = useState(
        createInitialBoard()
    );

    const [score, setScore] = useState(0);

    const [gameOver, setGameOver] = useState(false);

    const [won, setWon] = useState(false);

    const handleNewGame = () => {

        setBoard(createInitialBoard());

        setScore(0);

        setGameOver(false);

        setWon(false);
    };


    const handleMove = (direction) => {
        if (gameOver || won) {
            return;
        }

        let result;


        switch (direction) {

            case "LEFT":
                result = moveLeft(board);
                break;

            case "RIGHT":
                result = moveRight(board);
                break;

            case "UP":
                result = moveUp(board);
                break;

            case "DOWN":
                result = moveDown(board);
                break;

            default:
                return;
        }

        if (boardsEqual(board, result.board)) {
            return;
        }

        playMoveSound();
        const updatedBoard = addRandomTile(result.board);
        setBoard(updatedBoard);

        setScore(prevScore =>
            prevScore + result.score
        );

        if (hasWon(updatedBoard)) {
            setWon(true);
            return;
        }

        if (!canMove(updatedBoard)) {
            setGameOver(true);
        }
    };


    useEffect(() => {

        const handleKeyDown = (event) => {

            switch (event.key) {

                case "ArrowLeft":
                    event.preventDefault();
                    handleMove("LEFT");
                    break;

                case "ArrowRight":
                    event.preventDefault();
                    handleMove("RIGHT");
                    break;

                case "ArrowUp":
                    event.preventDefault();
                    handleMove("UP");
                    break;

                case "ArrowDown":
                    event.preventDefault();
                    handleMove("DOWN");
                    break;

                default:
                    break;
            }
        };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };

    }, [board, gameOver, won]);


    return (

        <div className={classes.gamePage}>
            <div className={classes.header}>
                <div className={classes.titleSection}>
                    <div className={classes.logoRow}>
                        <h1 className={classes.logo}>
                            2048
                        </h1>

                    </div>
                    <p className={classes.subtitle}>
                        Join tiles & reach{" "}
                        <strong>2048!</strong>
                    </p>
                </div>
                <button
                    className={classes.newGameButton}
                    onClick={handleNewGame}
                >
                    <FiRotateCcw size={17} />

                    New Game
                </button>
            </div>
            <div className={classes.gameBoard}>
                {board.map((row, rowIndex) =>
                    row.map((value, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={classes.emptyTile}
                        >
                            {value !== 0 && (
                                <span className={classes.tileValue}>
                                    {value}
                                </span>
                            )}
                        </div>
                    ))
                )}
            </div>
            <Dialog
                open={gameOver}
                maxWidth="sm"
                fullWidth
                classes={{
                    paper: classes.gameover_dialog,
                }}
            >
                <DialogContent className={classes.dialogContent}>

                    <div className={classes.gameOverIcon}>
                        <FiFrown size={42} />
                    </div>

                    <h2 className={classes.dialogTitle}>
                        Game Over!
                    </h2>

                    <p className={classes.dialogSubtitle}>
                        No more moves available.
                    </p>

                    <div className={classes.finalScore}>
                        <span>FINAL SCORE</span>
                        <strong>{score}</strong>
                    </div>

                    <button
                        className={classes.dialogButton}
                        onClick={handleNewGame}
                    >
                        <FiRotateCcw size={18} />
                        Play Again
                    </button>

                </DialogContent>
            </Dialog>

            <Dialog
                open={won}
                maxWidth="sm"
                fullWidth
                classes={{
                    paper: classes.gameover_dialog,
                }}
            >
                <DialogContent className={classes.dialogContent}>

                    <div className={classes.winIcon}>
                        <FiAward size={44} />
                    </div>

                    <h2 className={classes.dialogTitle}>
                        You Did It!
                    </h2>

                    <p className={classes.dialogSubtitle}>
                        Amazing! You reached the
                        <strong> 2048 tile!</strong>
                    </p>

                    <div className={classes.finalScore}>
                        <span>SCORE</span>
                        <strong>{score}</strong>
                    </div>

                    <div className={classes.dialogActions}>

                        <button
                            className={classes.continueButton}
                            onClick={() => setWon(false)}
                        >
                            Continue
                        </button>

                        <button
                            className={classes.dialogButton}
                            onClick={handleNewGame}
                        >
                            <FiRotateCcw size={18} />
                            New Game
                        </button>

                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
}