import { ClientEvents } from 'detritus-client/lib/constants';
import { EventListener } from '../../../packages/events/Event';
import { GatewayClientEvents } from 'detritus-client';
import { Message } from 'detritus-client/lib/structures';

export default class MessageCreateEvent extends EventListener {
    constructor() {
        super({
            emitter: 'client',
            event: ClientEvents.MESSAGE_CREATE,
            id: 'client.emitters.message.create',
            type: 'on',
        });
    }

    async exec(data: GatewayClientEvents.MessageCreate) {
        const msg = data.message as Message;

        if (msg.author.bot) return;
    }
}
