import { Collections } from 'detritus-client';
import { Language } from './Language';
import * as fs from 'fs';
import * as path from 'path';
export class I18n {
    public languages = new Collections.BaseCollection<string, Language>();

    public add(language: Language) {
        this.languages.set(language.id, language);
    }

    public get(id: string) {
        return this.languages.get(id);
    }

    public loadLanguages() {
        const p = path.join(process.cwd(), 'dist/languages');

        const files = fs.readdirSync(p);
        for (const file of files) {
            if (file.endsWith('.js')) {
                const language = require(path.join(p, file)).default;
                this.add(new language());
            }
        }
    }
}
