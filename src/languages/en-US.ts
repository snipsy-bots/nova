import { LanguageKeyActivityParam } from '../packages/typings';
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
    client = {
        ready: (name: string) => `${name} is now ready. `,
        activity: (data: LanguageKeyActivityParam) =>
            activities[Math.floor(Math.random() * activities.length)].replace(
                /{{(.*?)}}/g,
                (_, key) => {
                    return (
                        data[key as 'users'] || '<not-provided-info>'
                    ).toString();
                },
            ),
    };

    commands = {
        ping: {
            initialPingMessage: ['asking the cosmos for a response...'],
            response: (ping: number) =>
                ` The Cosmos returned my call in \`${ping}\`ms`,
        },
        help: {
            invalidCommand: (str: string) =>
                ` \`${str}\` is not a valid command `,
            cmdDescription: () => '',
        },
    };
}
