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
}