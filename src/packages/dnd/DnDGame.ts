import { NovaClient } from '../core/Client';
import { DiceRoller } from './DiceRoller';

export class DnDgame {
    dice: DiceRoller;
    client: NovaClient;

    constructor(client: NovaClient) {
        this.dice = new DiceRoller(this);
        this.client = client;
    }
}
