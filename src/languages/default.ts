import { LanguageKeyActivityParam } from '@nova-bot/i18n';
import { Language } from '../packages/i18n/Language';

const activities = [
    'to you',
    'to {{guilds}} guilds',
    'to {{users}} users',
    'to {{users}} users on {{guilds}} guilds',
];

export default class Default extends Language {
    constructor() {
        super('DEFAULT');
    }

    CLIENT_READY = (name: string) => `${name} is now ready. `;
    CLIENT_READY_ACTIVITY = (data: LanguageKeyActivityParam) =>
        activities[Math.floor(Math.random() * activities.length)].replace(
            /{{(.*?)}}/g,
            (_, key) => {
                return (
                    data[key as 'users'] || '<not-provided-info>'
                ).toString();
            },
        );
}
