import { Interaction, Constants } from 'detritus-client';

export class StringOptions extends Interaction.InteractionCommandOption {
    constructor(options?: Interaction.InteractionCommandOptionOptions) {
        super({
            ...options,
            type: Constants.ApplicationCommandOptionTypes.STRING,
        });
    }
}
