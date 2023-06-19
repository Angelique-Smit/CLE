import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input } from "excalibur";
import { Bg } from '../startbg'

export class Final extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const startscreenbg = new Bg();
        this.add(startscreenbg);

        let labelwelcome = new Label({
            text: '',
            pos: new Vector(150, 250),
            font: new Font({
                family: 'impact',
                size: 48,
                color: Color.White,
                unit: FontUnit.Px
            })
        });

        this.add(labelwelcome);
        labelwelcome.text = 'Congratz, you did it nerd!';

        let labelinstructions = new Label({
            text: '',
            pos: new Vector(275, 320),
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.White,
                unit: FontUnit.Px
            })
        });

        this.add(labelinstructions);
        labelinstructions.text = 'Hope you enjoyed it tho';
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.addScene('gamescene', new GameScene());
            engine.goToScene('gamescene');
        }
    }

}
