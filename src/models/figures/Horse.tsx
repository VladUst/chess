import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackHorse from '../../assets/black-knight.png';
import whiteHorse from '../../assets/white-knight.png';
import {Cell} from "../Cell";

export class Horse extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteHorse : blackHorse;
        this.name = FigureNames.HORSE;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}