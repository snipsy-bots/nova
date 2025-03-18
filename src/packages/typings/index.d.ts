import { SlashCommand } from '../commands/slash/commands/SlashCommand';

export interface CustomEnv {
    /**
     * the token to let the bot connect to Discord
     * @required
     */
    DISCORD_TOKEN: string;

    CLIENT_ID: string;
    /**
     * the current developer environment.
     * @default 'dev'
     */
    ENV: 'dev' | 'prod' | 'beta';

    /**
     * the support server for the bot.
     *
     */
    SUPPORT_SERVER?: string;

    WEATHER_API_KEY?: string;
}

export interface EventHandlerOptions {
    /**
     * the directory to load events from.
     */
    directory: string;
}

export interface EventListenerOptions {
    id: string;
    type: 'on' | 'once';
    event: string;
    emitter: string;
}

export interface LanguageKeys {
    client: {
        ready: (username: string) => string;
        activity: (data: LanguageKeyActivityParam) => string;
    };
    commands: {
        ping: {
            initialPingMessage: string[];
            response: (ping: number) => string;
        };
        help: {
            invalidCommand: (cmd: string) => string;
            cmdDescription: (cmd: SlashCommand) => string;
        };
    };
}

interface LanguageKeyActivityParam {
    guilds: number;
    users: number;
}

export interface _DiceResult {
    total: number;
    rolls: { roll: number; dice: number }[];
}

export interface ReturnDiceResult {
    combined: number;
    results: _DiceResult[];
}
