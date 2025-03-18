import { StringOptions } from './StringOption';

export class CommandArgument extends StringOptions {
    constructor() {
        super({
            name: 'command',
            description: 'The command to search for',
            value: (value: string, ctx) =>
                ctx.interactionCommandClient.commands.find((cmd) => {
                    const name = cmd.name === value.toLowerCase();
                    if (name) return true;
                    if (!cmd.nameLocalizations) return false;
                    const keys = Object.keys(cmd.nameLocalizations);
                    for (const key of keys) {
                        if (cmd.nameLocalizations[key] === value) return true;
                    }
                    return false;
                }),
        });
    }
}
