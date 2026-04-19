const dictionaries = {
    en: () => import('dictionaries/en.json').then((module) => module.default),
    tr: () => import('dictionaries/tr.json').then((module) => module.default),
}

const DEFAULT_LOCALE = 'en'

export const getDictionary = async (locale) => {
    const normalizedLocale = typeof locale === 'string' ? locale.toLowerCase().split('-')[0] : DEFAULT_LOCALE
    const loader = dictionaries[normalizedLocale] ?? dictionaries[DEFAULT_LOCALE]

    return loader()
}
