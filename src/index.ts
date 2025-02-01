import { NovaClient } from './packages/core/Client';

const client = new NovaClient();

client.run({ wait: true }).catch(console.error);
