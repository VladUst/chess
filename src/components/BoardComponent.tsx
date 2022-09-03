import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
interface BoardProps{
    board: Board;
    setBoard: (board: Board) => void;
}
const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectCell] = useState<Cell | null>(null);

    function selectCell(cell : Cell){
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell);
            setSelectCell(null);
            updateBoard();
        } else {
            setSelectCell(cell);
        }
    }

    useEffect(()=>{
        highlightCells();
    }, [selectedCell]);

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard(){
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent key={cell.id} cell={cell} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} selectCell={selectCell}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;