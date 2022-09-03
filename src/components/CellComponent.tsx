import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps{
    cell: Cell;
    selected: boolean;
    selectCell: (cell: Cell) => void;
}
const CellComponent: FC<CellProps> = ({cell, selected, selectCell}) => {
    return (
        <div onClick={() => selectCell(cell)}
             className={['cell', 'cell_' + cell.color, selected ? "selected" : ''].join(' ')}
             style={{background: cell.available && cell.figure ? 'green' : ''}}>
            {cell.available && !cell.figure && <div className='available'/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="figure"/>}
        </div>
    );
};

export default CellComponent;