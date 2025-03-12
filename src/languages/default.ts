import { LanguageKeyActivityParam } from '@nova-bot/i18n';
import { Language } from '../packages/i18n/Language';

const activities = [
    'you',
    '{{guilds}} guilds',
    '{{users}} users',
    '{{users}} users on {{guilds}} guilds',
];

export default class DefaultLanguage extends Language {
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

    COMMAND_PING_RESPONSE = (ping: number) => `Pong! ${ping}ms`;
}
