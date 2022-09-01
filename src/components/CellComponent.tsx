import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps{
    cell: Cell;
}
const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={`cell cell_${cell.color}`}>
        </div>
    );
};

export default CellComponent;