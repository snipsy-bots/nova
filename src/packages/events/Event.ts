import { EventListenerOptions } from '../typings';
import { NovaClient } from '../core/Client';

export abstract class EventListener implements EventListenerOptions {
    id: string;
    type: 'on' | 'once';
    event: string;
    emitter: string;
    client!: NovaClient;

    constructor(options: EventListenerOptions) {
        this.id = options.id;
        this.type = options.type;
        this.event = options.event;
        this.emitter = options.emitter;
    }

    abstract exec(...args: unknown[]): unknown;
}
