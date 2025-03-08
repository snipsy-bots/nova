import { LanguageKeyActivityParam, LanguageKeys } from '@nova-bot/i18n';

export abstract class Language implements LanguageKeys {
    id: string;
    abstract CLIENT_READY: (username: string) => string;
    abstract CLIENT_READY_ACTIVITY: (data: LanguageKeyActivityParam) => string;
    private $keys!: LanguageKeys;

    constructor(id: string) {
        this.id = id;
    }

    get<Key extends keyof LanguageKeys>(
        key: Key,
        ...args: Parameters<LanguageKeys[Key]>
    ): ReturnType<LanguageKeys[Key]> {
        const value = this[key] || this.$keys[key];
        if (typeof value === 'function') {
            return value(...(args as [any])) as ReturnType<LanguageKeys[Key]>;
        }
        return value;
    }
}
