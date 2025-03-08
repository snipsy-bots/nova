import { Interaction } from 'detritus-client';
import { CustomInteractionCommand } from './CustomCommand';

export class SlashCommand extends CustomInteractionCommand {
    static applyOptions(options: Interaction.InteractionCommandOptions) {
        return (
            cls: new (
                opts: Interaction.InteractionCommandOptions,
            ) => SlashCommand,
        ) => {
            class NewClass extends cls {
                constructor(opts: Interaction.InteractionCommandOptions) {
                    super({
                        ...opts,
                        ...options,
                    });
                }
            }

            return NewClass;
        };
    }
}
