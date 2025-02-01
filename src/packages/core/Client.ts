import { ShardClient } from 'detritus-client';
import { getEnv } from '../util/util';
import { SlashCommandClient } from '../commands/slash/SlashCommandClient';

export class NovaClient extends ShardClient {
    commands = {
        slash: new SlashCommandClient(this),
    };

    constructor() {
        super(getEnv().DISCORD_TOKEN);
    }
}
