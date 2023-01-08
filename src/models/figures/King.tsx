import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackKing from '../../assets/black-king.png';
import whiteKing from '../../assets/white-king.png';
import {Cell} from "../Cell";

export class King extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteKing : blackKing;
        this.name = FigureNames.KING;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx <= 1 && dy <= 1);
    }
}