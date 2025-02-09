import { EventHandlerOptions } from '@nova-bot/typings';
import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as path from 'path';
import { NovaClient } from '../core/Client';
import { EventListener } from './Event';
import { Collections } from 'detritus-client';
export class EventHandler extends EventEmitter {
    options: EventHandlerOptions;

    modules: Collections.BaseCollection<string, EventListener>;

    emitters: Record<string, EventEmitter>;
    private $client: NovaClient;

    constructor(client: NovaClient, options: EventHandlerOptions) {
        super({ captureRejections: true });
        this.$client = client;
        this.options = options;

        this.emitters = {
            client: client,
        };

        this.modules = new Collections.BaseCollection();
    }

    setEmitters(emitters: Record<string, EventEmitter>) {
        for (const [name, emitter] of Object.entries(emitters)) {
            this.setEmitter(name, emitter);
        }
    }

    setEmitter(name: string, emitter: EventEmitter) {
        if (this.emitters[name]) {
            throw new Error(`Emitter with name ${name} already exists.`);
        }

        this.emitters[name] = emitter;
    }

    async loadAll(dir: string = this.options.directory) {
        const files = EventHandler.readdirRecursive(dir);

        for (const file of files) {
            try {
                const con = await import(file).then((data) => data.default);

                const listener = new con.default() as EventListener;

                if (!listener.id) {
                    throw new Error(`Invalid Listener inside file ${file}`);
                }

                if (!(listener.emitter in this.emitters)) {
                    throw new Error(`Emitter ${listener.emitter} not found.`);
                }

                if (this.modules.has(listener.id)) {
                    continue;
                }

            } catch (error) {
                console.error(`could not load file ${file}`, error);
            }
        }
    }

    // License: MIT found in ./legal/licenses/akairo.md
    static readdirRecursive(directory: string) {
        const result: string[] = [];

        (function read(dir) {
            const files = fs.readdirSync(dir);

            for (const file of files) {
                const filepath = path.join(dir, file);

                if (fs.statSync(filepath).isDirectory()) {
                    read(filepath);
                } else {
                    result.push(filepath);
                }
            }
        })(directory);

        return result;
    }
    //end of licensed part

    get client() {
        return this.$client;
    }
}
