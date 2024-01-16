
 
const dictionaries = {
  en: () => import('../dictonaries/en.json').then((module) => module.default),
  ar: () => import('../dictonaries/ar.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()