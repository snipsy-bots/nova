import { LanguageKeys } from '../typings';

export abstract class Language implements LanguageKeys {
    id: string;
    constructor(id: string) {
        this.id = id;
    }
    abstract client: LanguageKeys['client'];
    abstract commands: LanguageKeys['commands'];
}
