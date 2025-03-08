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
            type: 'once',
        });
    }

    async exec() {
        const defaultLanguage = this.client.lang.get('DEFAULT');
        const { CLIENT_READY, CLIENT_READY_ACTIVITY } = defaultLanguage!;
        console.log(CLIENT_READY(this.client.user!.username));
        await this.client.setPresence({
            status: PresenceStatuses.ONLINE,
            activities: [
                {
                    name: CLIENT_READY_ACTIVITY({
                        guilds: this.client.guilds.size,
                        users: this.client.users.size,
                    }),
                    type: ActivityTypes.LISTENING,
                },
            ],
        });
    }
}
