import { InteractionCommandClient } from 'detritus-client';
import { NovaClient } from '../../core/Client';

export class SlashCommandClient extends InteractionCommandClient {
    declare client: NovaClient;

    constructor(client: NovaClient) {
        super(client);
    }
}
