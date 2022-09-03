import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackBishop from '../../assets/black-bishop.png';
import whiteBishop from '../../assets/white-bishop.png';
import {Cell} from "../Cell";

export class Bishop extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteBishop : blackBishop;
        this.name = FigureNames.BISHOP;
    }
}