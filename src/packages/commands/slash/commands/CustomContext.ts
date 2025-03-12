import { Interaction } from 'detritus-client';
import { InteractionEditOrRespond } from 'detritus-client/lib/structures';
import { NovaClient } from '../../../core/Client';

export class CustomSlashContext extends Interaction.InteractionContext {
    declare client: NovaClient;
    async say(content: string, options?: InteractionEditOrRespond) {
        return this.editOrRespond({
            content,
            ...options,
        });
    }

    get language() {
        return this.client.lang.get(
            this.locale || this.guildLocale || 'DEFAULT',
        );
    }

    static fromContext(ctx: Interaction.InteractionContext) {
        return new CustomSlashContext(
            ctx.interactionCommandClient,
            ctx.interaction,
            ctx.command,
            ctx.invoker,
        );
    }
}
