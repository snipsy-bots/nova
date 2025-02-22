import { getEnv } from './util';

export const env = getEnv();

export enum customEvents {}

export const ignoredRawEvents = ['READY', 'GUILD_CREATE'] as const;
