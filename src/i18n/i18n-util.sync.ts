// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import en from './en'
import zh_CN from './zh-CN'

import en_user from './en/user'
import zh_CN_user from './zh-CN/user'

const localeTranslations = {
	en: {
		...en,
		user: en_user
	},
	'zh-CN': {
		...zh_CN,
		user: zh_CN_user
	},
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
