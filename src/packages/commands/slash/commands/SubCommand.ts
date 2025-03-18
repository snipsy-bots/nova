import { Interaction } from 'detritus-client';
import { CustomSlashContext } from './CustomContext';

export abstract class SubCommand extends Interaction.InteractionCommandOption {
    abstract exec(ctx: CustomSlashContext<Record<string, unknown>>): unknown;

    async run(
        ctx: Interaction.InteractionContext,
        args: Interaction.ParsedArgs,
    ) {
        try {
            await this.exec(
                CustomSlashContext.fromContext(ctx, args) as CustomSlashContext<
                    Record<string, unknown>
                >,
            );
        } catch (error) {
            console.error(error);
            ctx.editOrRespond({
                content: 'something broke',
                flags: 64,
            });
        }
    }

    static applyOptions(options: Interaction.InteractionCommandOptionOptions) {
        return (
            cls: new (
                opts: Interaction.InteractionCommandOptionOptions,
            ) => SubCommand,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ): any => {
            abstract class NewClass extends cls {
                constructor(opts: Interaction.InteractionCommandOptionOptions) {
                    super({ ...opts, ...options });
                }
            }

            return NewClass;
        };
    }
}
