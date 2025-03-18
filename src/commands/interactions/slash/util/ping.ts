import { CustomSlashContext } from '../../../../packages/commands/slash/commands/CustomContext';
import { SlashCommand } from '../../../../packages/commands/slash/commands/SlashCommand';

@SlashCommand.applyOptions({
    name: 'ping',
    description: 'check if the bot is alive and responding to commands',
})
export default class PingCommand extends SlashCommand {
    async exec(ctx: CustomSlashContext<Record<never, never>>) {
        const lang = ctx.language;

        const funnyPingMessages = lang.commands.ping.initialPingMessage;
        const start = Date.now();
        await ctx.say(
            funnyPingMessages[
                Math.floor(Math.random() * funnyPingMessages.length)
            ],
            { flags: 64 },
        );
        const end = Date.now();
        await ctx.util.wait(500);
        const responseOfTheCosmos = lang.commands.ping.response(end - start);
        await ctx.say(responseOfTheCosmos, { flags: 64 });
    }
}
