import { Interaction } from 'detritus-client';
import { CustomInteractionCommand } from './CustomCommand';
import { CustomSlashContext } from './CustomContext';

export abstract class SlashCommand extends CustomInteractionCommand {
    abstract exec(ctx: CustomSlashContext): any;

    async run(ctx: Interaction.InteractionContext) {
        try {
            const context = CustomSlashContext.fromContext(ctx);
            await this.exec(context);
        } catch (error) {}
    }

    static applyOptions(options: Interaction.InteractionCommandOptions) {
        return (
            cls: new (
                opts: Interaction.InteractionCommandOptions,
            ) => SlashCommand,
        ): any => {
            //@ts-expect-error
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
