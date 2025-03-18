export default defineNuxtConfig({
    modules: [
        'dayjs-nuxt'
    ],

    css: [
        '~/assets/css/app.sass'
    ],

    devtools: {
        enabled: true,
    },

    dayjs: {
        locales: ['de'],
        defaultLocale: 'de',
        plugins: ['relativeTime', 'utc', 'timezone'],
        defaultTimezone: 'Europe/Berlin',
    },

    compatibilityDate: '2025-03-18',
})