import { ShardClient } from 'detritus-client';
import { SlashCommandClient } from '../commands/slash/SlashCommandClient';
import * as socket from 'detritus-client-socket';
import { clientOptions, env } from '../util/Constants';
import { I18n } from '../i18n/i198n';
import { APi } from '../util/API';
export class NovaClient extends ShardClient {
    commands = {
        slash: new SlashCommandClient(this),
    };

    api = new APi();
    lang = new I18n();

    constructor() {
        super(env.DISCORD_TOKEN, clientOptions);
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
