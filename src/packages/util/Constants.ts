import { ShardClientOptions } from 'detritus-client';
import { getEnv } from './util';
import {
    ActivityTypes,
    GatewayIntents,
    PresenceStatuses,
} from 'detritus-client/lib/constants';

export const env = getEnv();

export enum customEvents {}

export const ignoredRawEvents = [
    'READY',
    'GUILD_CREATE',
    'MESSAGE_UPDATE',
    'MESSAGE_CREATE',
    'TYPING_START',
    'PRESENCE_UPDATE',
    'INTERACTION_CREATE',
] as const;

export const clientOptions: ShardClientOptions = {
    gateway: {
        identifyProperties: {
            $browser: 'Discord Android',
        },
        presence: {
            activities: [
                {
                    name: 'booting up...',
                    type: ActivityTypes.CUSTOM_STATUS,
                },
            ],
            status: PresenceStatuses.DND,
        },

        loadAllMembers: true,
        intents: [
            GatewayIntents.GUILD_MEMBERS,
            GatewayIntents.GUILD_BANS,
            GatewayIntents.GUILD_EMOJIS,
            GatewayIntents.GUILD_INTEGRATIONS,
            GatewayIntents.GUILD_WEBHOOKS,
            GatewayIntents.GUILD_INVITES,
            GatewayIntents.GUILD_VOICE_STATES,
            GatewayIntents.GUILD_PRESENCES,
            GatewayIntents.GUILD_MESSAGES,
            GatewayIntents.GUILD_MESSAGE_REACTIONS,
            GatewayIntents.GUILD_MESSAGE_TYPING,
            GatewayIntents.DIRECT_MESSAGES,
            GatewayIntents.DIRECT_MESSAGE_REACTIONS,
            GatewayIntents.DIRECT_MESSAGE_TYPING,
            GatewayIntents.MESSAGE_CONTENT,
            GatewayIntents.GUILD_SCHEDULED_EVENTS,
            GatewayIntents.AUTO_MODERATION_CONFIGURATION,
            GatewayIntents.AUTO_MODERATION_EXECUTION,
            GatewayIntents.GUILD_MESSAGE_POLLS,
            GatewayIntents.DIRECT_MESSAGE_POLLS,
            GatewayIntents.GUILDS,
        ],
    },
};
