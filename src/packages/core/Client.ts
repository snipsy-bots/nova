import { ShardClient } from 'detritus-client';
import { SlashCommandClient } from '../commands/slash/SlashCommandClient';
import * as socket from 'detritus-client-socket';
import { env } from '../util/Constants';
export class NovaClient extends ShardClient {
    commands = {
        slash: new SlashCommandClient(this),
    };

    constructor() {
        super(env.DISCORD_TOKEN);
    }

    async setPresence(presence: socket.Gateway.PresenceOptions): Promise<this> {
        return new Promise((res, rej) => {
            this.gateway.setPresence(presence, (err?: Error) => {
                if (err) return rej(err);
                return res(this);
            });
        });
    }
}
