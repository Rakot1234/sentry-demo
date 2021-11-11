const isDevelop = process.env.NODE_ENV === 'development';

export enum PagesEnum {
    MAIN = 'main',
    RENDER_ERROR = 'render-error',
    WITHOUT_SENTRY = 'without-sentry',
};

const { MAIN, RENDER_ERROR, WITHOUT_SENTRY } = PagesEnum;

export const routesMap: Record<PagesEnum, string> = {
    [MAIN]: isDevelop ? '/' : '/sentry-demo',
    [RENDER_ERROR]: isDevelop ? '/render-error' : '/sentry-demo/render-error',
    [WITHOUT_SENTRY]: isDevelop ? '/without-sentry' : '/sentry-demo/without-sentry',
};
