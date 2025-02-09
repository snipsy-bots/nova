import { ClientEvents } from 'detritus-client/lib/constants';
import { EventListener } from '../../../packages/events/Event';

export default class ReadyEvent extends EventListener {
    constructor()  {
        super({
            emitter: 'client',
            event: ClientEvents.GATEWAY_READY,
            id: 'client.emitters.internal.ready',
            type: 'on'
        })
    }
}
