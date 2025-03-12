import { resolve } from 'path';
import { NovaClient } from './packages/core/Client';
import { EventHandler } from './packages/events/EventHandler';
import { SlashCommandClient } from './packages/commands/slash/SlashCommandClient';

const client = new NovaClient();
const events = new EventHandler(client, {
    directory: resolve(__dirname, './events/client'),
});
const commands = new SlashCommandClient(client);

async function start() {
    client.lang.loadLanguages();
    await commands.addMultipleIn(
        resolve(__dirname, './commands/interactions/slash'),
        {
            isAbsolute: true,
            subdirectories: true,
        },
    );
    console.log(commands.commands.length);
    await commands.checkAndUploadCommands();
    await events.loadAll();
    await commands.run({ wait: true });
}

start().catch(console.error);
//
