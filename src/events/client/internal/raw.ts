import { ClientEvents } from 'detritus-client/lib/constants';
import { EventListener } from '../../../packages/events/Event';
import { GatewayClientEvents } from 'detritus-client';
import { env, ignoredRawEvents } from '../../../packages/util/Constants';

export default class RawEvent extends EventListener {
    constructor() {
        super({
            emitter: 'client',
            event: ClientEvents.RAW,
            id: 'client.emitters.internal.raw',
            type: 'on',
        });
    }

    async exec(data: GatewayClientEvents.Raw) {
        if (!['BETA', 'DEV'].includes(env.ENV.toUpperCase())) return;
        if (ignoredRawEvents.includes(data.t.toUpperCase() as 'READY')) return;
        console.log(`Event firing: ${data.t}`);
    }
}
