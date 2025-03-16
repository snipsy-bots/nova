import { LanguageKeyActivityParam, LanguageKeys } from '@nova-bot/i18n';

export abstract class Language implements LanguageKeys {
    id: string;
    constructor(id: string) {
        this.id = id;
    }
    abstract client: {
        ready: (username: string) => string;
        activity: (data: LanguageKeyActivityParam) => string;
    };
    abstract commands: {
        ping: {
            initialPingMessage: string[];
            response: (ping: number) => string;
        };
    };
}
