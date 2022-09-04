import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackQueen from '../../assets/black-queen.png';
import whiteQueen from '../../assets/white-queen.png';
import {Cell} from "../Cell";

export class Queen extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteQueen : blackQueen;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        if(this.cell.isEmptyVertical(target)){
            return true;
        }
        if(this.cell.isEmptyHorizontal(target)){
            return true;
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true;
        }
        return false;
    }
}