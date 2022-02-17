import { lowerCase, isUndefined } from 'lodash'

export const getCountryCode = (locale) => {
  return isUndefined(locale) ? 'ar' : lowerCase(locale.slice(3))
}

export const getFacebookDomainVerification = (country_code) => {
  const ids = {
    ar: 'o1cpz3juti6u4og457vtz73phm8v4m',
    cl: 'xttlstugadcn3syxvsdpcr2kpm0ajs',
    mx: 'xbbkq67yvogzf0656jxyzlwamjm4tp',
    uy: 'u9xibrmbxi98j13w4lv7b1baytrgvy',
  }
  return ids[country_code]
}