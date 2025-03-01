import {
    ActivityTypes,
    ClientEvents,
    PresenceStatuses,
} from 'detritus-client/lib/constants';
import { EventListener } from '../../../packages/events/Event';

export default class ReadyEvent extends EventListener {
    constructor() {
        super({
            emitter: 'client',
            event: ClientEvents.GATEWAY_READY,
            id: 'client.emitters.internal.ready',
            type: 'on',
        });
    }

    async exec() {
        console.log(`${this.client.user?.username} is now ready.`);
        await this.client.setPresence({
            status: PresenceStatuses.ONLINE,
            afk: true,
            activities: [
                {
                    name: 'to the universes headbeat and your commands.',
                    type: ActivityTypes.LISTENING,
                },
            ],
        });
    }
}
