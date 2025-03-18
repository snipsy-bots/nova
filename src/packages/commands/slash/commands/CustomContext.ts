import {
    Interaction,
    InteractionCommandClient,
    Structures,
} from 'detritus-client';
import { InteractionEditOrRespond } from 'detritus-client/lib/structures';
import { NovaClient } from '../../../core/Client';
import { locales } from '../../../util/Constants';
import { defaultLanguage } from '../../../util/Constants';
import { SlashCommand } from './SlashCommand';
import { Util } from '../../../util/util';

export class CustomSlashContext<
    Argument extends Interaction.ParsedArgs,
> extends Interaction.InteractionContext {
    declare client: NovaClient;

    util = new Util();

    private $args: Argument;

    constructor(
        interactionCommandClient: InteractionCommandClient,
        interaction: Structures.Interaction,
        command: SlashCommand,
        invoker:
            | Interaction.InteractionCommand
            | Interaction.InteractionCommandOption,
        args: Argument,
    ) {
        super(interactionCommandClient, interaction, command, invoker);
        this.$args = args;
    }
    get args() {
        return this.$args;
    }

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

    static fromContext(
        ctx: Interaction.InteractionContext,
        args: Interaction.ParsedArgs,
    ) {
        return new CustomSlashContext(
            ctx.interactionCommandClient,
            ctx.interaction,
            ctx.command as SlashCommand,
            ctx.invoker,
            args,
        );
    }
}

type ValueOf<T> = T[keyof T];
