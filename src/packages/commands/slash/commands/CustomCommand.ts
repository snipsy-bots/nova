import { Interaction } from 'detritus-client';

export class CustomInteractionCommand extends Interaction.InteractionCommand {
    static applyOptions(options: Interaction.InteractionCommandOptions) {
        return (
            cls: new (
                opts: Interaction.InteractionCommandOptions,
            ) => Interaction.InteractionCommand,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ): any => {
            abstract class NewClass extends cls {
                constructor(opts: Interaction.InteractionCommandOptions) {
                    super({ ...opts, ...options });
                }
            }

            return NewClass;
        };
    }
}
