import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackPawn from '../../assets/black-pawn.png';
import whitePawn from '../../assets/white-pawn.png';
import {Cell} from "../Cell";

export class Pawn extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whitePawn : blackPawn;
        this.name = FigureNames.PAWN;
    }
}