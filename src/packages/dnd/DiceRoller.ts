import { _DiceResult, ReturnDiceResult } from '@nova-bot/dnd-typings';
import { DnDgame } from './DnDGame';
import { DnDError } from '../errors/CustomError';

export class DiceRoller {
    readonly $game: DnDgame;

    constructor(game: DnDgame) {
        this.$game = game;
    }

    roll(input: string): ReturnDiceResult {
        const dicePattern = /(\d*)d(\d+)([+-]\d+)?/g;
        const results: _DiceResult[] = [];
        let match;

        while ((match = dicePattern.exec(input)) !== null) {
            const count = match[1] ? parseInt(match[1], 10) : 1;
            if (count > 200) throw new DnDError('TO_MANY_DICE', '200');
            const diceType = parseInt(match[2], 10);
            const modifier = match[3] ? parseInt(match[3], 10) : 0;
            let total = 0;
            const rolls = [];

            for (let i = 0; i < count; i++) {
                const roll = Math.floor(Math.random() * diceType) + 1;
                total += roll;
                rolls.push({ input: match.input, roll: roll, dice: diceType });
            }

            results.push({ total: total + modifier, rolls: rolls });
        }
        const combined = results.reduce((acc, result) => acc + result.total, 0);
        return { combined, results };
    }

    get client() {
        return this.game.client;
    }

    get game() {
        return this.$game;
    }
}
