import * as config from '../config.js';
import updateLogger from 'telegraf-update-logger';
import { Context, Middleware } from 'telegraf';

export const debugLoggerMiddleware: () => Middleware<Context> = (options?: updateLogger.Options) => (ctx, next) => {
  ctx.logger.trace({
    msg: 'update received',
    update: ctx.update,
  });

  return updateLogger({
    log: msg =>
      ctx.logger.debug({
        msg,
      }),
    colors: config.isDevelopment,
    ...options,
  })(ctx, next);
};
