import { EventListenerOptions } from '@nova-bot/typings';

export class EventListener implements EventListenerOptions {
    id: string;
    type: 'on' | 'once';
    event: string;
    emitter: string;

    constructor(options: EventListenerOptions) {
        this.id = options.id;
        this.type = options.type;
        this.event = options.event;
        this.emitter = options.emitter;
    }
}
