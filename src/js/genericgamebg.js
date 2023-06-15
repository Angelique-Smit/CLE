import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class GenericBg extends Actor {
    constructor() {
        super();
        
        let bg = Resources.gamegenericbg.toSprite();
        this.graphics.use(bg);
        this.pos = new Vector(570, 165);
        this.vel = new Vector(0, 0);

        //DO NOT, UNDER ANY CIRCUMSTANCES FUCKING CHANGE THIS VALUE OR I WILL BE REALLY SAD
        this.scale = new Vector(0.305 , 0.305);
    }


}