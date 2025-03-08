import { resolve } from 'path';
import { NovaClient } from './packages/core/Client';
import { EventHandler } from './packages/events/EventHandler';

const client = new NovaClient();
const events = new EventHandler(client, {
    directory: resolve(__dirname, './events/client'),
});

async function start() {
    client.lang.loadLanguages();
    await events.loadAll();
    await client.run({ wait: true });
}

start().catch(console.error);
