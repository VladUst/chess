import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackRook from '../../assets/black-rook.png';
import whiteRook from '../../assets/white-rook.png';
import {Cell} from "../Cell";

export class Rook extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteRook : blackRook;
        this.name = FigureNames.ROOK;
    }
}