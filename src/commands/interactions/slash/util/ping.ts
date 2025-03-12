import { CustomSlashContext } from '../../../../packages/commands/slash/commands/CustomContext';
import { SlashCommand } from '../../../../packages/commands/slash/commands/SlashCommand';

@SlashCommand.applyOptions({
    name: 'ping',
    description: 'check if the bot is alive and responding to commands',
})
export default class PingCommand extends SlashCommand {
    async exec(ctx: CustomSlashContext) {
        await ctx.say('Pong!', { flags: 64 });
    }
}
