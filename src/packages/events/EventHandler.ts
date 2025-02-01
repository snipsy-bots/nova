import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as path from 'path';
export class EventHandler extends EventEmitter {
    constructor() {
        super({ captureRejections: true });
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
}
