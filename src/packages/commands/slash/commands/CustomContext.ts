import { Interaction } from 'detritus-client';
import { InteractionEditOrRespond } from 'detritus-client/lib/structures';
import { NovaClient } from '../../../core/Client';
import { locales } from '../../../util/Constants';
import { defaultLanguage } from '../../../util/Constants';

export class CustomSlashContext extends Interaction.InteractionContext {
    declare client: NovaClient;

    get locale(): ValueOf<typeof locales> {
        const l = super.locale || this.guildLocale || defaultLanguage;
        return l as ValueOf<typeof locales>;
    }
    async say(content: string, options?: InteractionEditOrRespond) {
        return this.editOrRespond({ content, ...options });
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

type ValueOf<T> = T[keyof T];
