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
}