import { messages } from './messages';

class _CustomError extends Error {}

export class CustomError extends _CustomError {
    constructor(message: string, cause?: string) {
        super(message, {
            cause: cause || 'CustomError',
        });
    }
}

export class DnDError extends CustomError {
    constructor(
        key: keyof typeof messages.dnd,
        ...args: Parameters<(typeof messages.dnd)[typeof key]>
    ) {
        super(messages.dnd[key](...args), 'DnDError');
    }
}
