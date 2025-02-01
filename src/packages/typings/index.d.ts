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
}
