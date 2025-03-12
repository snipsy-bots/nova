declare module '@nova-bot/typings' {
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
}

declare module '@nova-bot/i18n' {
    export interface LanguageKeys {
        CLIENT_READY: (username: string) => string;
        CLIENT_READY_ACTIVITY: (data: LanguageKeyActivityParam) => string;
        COMMAND_PING_RESPONSE: (ping: number) => string;
    }

    interface LanguageKeyActivityParam {
        guilds: number;
        users: number;
    }
}

declare module '@nova-bot/dnd-typings' {
    export interface _DiceResult {
        total: number;
        rolls: { roll: number; dice: number }[];
    }

    export interface ReturnDiceResult {
        combined: number;
        results: _DiceResult[];
    }
}
