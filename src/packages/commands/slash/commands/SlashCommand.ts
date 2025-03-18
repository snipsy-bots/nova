import { Interaction } from 'detritus-client';
import { CustomInteractionCommand } from './CustomCommand';
import { CustomSlashContext } from './CustomContext';
import { ParsedArgs } from 'detritus-client/lib/interaction';

export abstract class SlashCommand extends CustomInteractionCommand {
    abstract exec(ctx: CustomSlashContext<Record<string, unknown>>): unknown;

    async run(ctx: Interaction.InteractionContext, args: ParsedArgs) {
        try {
            const context = CustomSlashContext.fromContext(ctx, args);
            await this.exec(context);
        } catch (error) {
            console.error(error);
        }
    }
}
