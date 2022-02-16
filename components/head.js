import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import { useRouter } from 'next/router'
import { getCountryCode, getFacebookDomainVerification } from '../utils/helpers'

const defaultTitle = 'Cárbula - Compra y Venta de Autos Usados'
const defaultDescription = 'Vende tu vehículo por hasta un 25% más de dinero. De forma segura y sin salir de casa.'
const defaultOGURL = '/images/carbula-preview.jpg'
const defaultOGImage = '/images/carbula-preview.jpg'
const defaultKeywords = 'autos usados Argentina, autos usados Chile, autos usados Uruguay, autos usados México, compra y venta autos usados Argentina, compra y venta autos usados Chile, compra y venta autos usados Uruguay, compra y venta coches usados México, compra y venta carros usados México, venta autos usados, compra por internet, compra online de vehículos, venta online de vehículos'

const Head = props => {
  const router = useRouter()
  const COUNTRY_CODE = getCountryCode(router.locale)
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title || defaultTitle}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="keywords" content={props.keywords || defaultKeywords} lang="es" />
      <meta name="facebook-domain-verification" content={getFacebookDomainVerification(COUNTRY_CODE)} />
      <link rel="icon" sizes="192x192" href="/icons/favicon_196.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" hrefLang="x-default" href="https://carbula.com"/>
      <link rel="alternate" hrefLang="es-AR" href="https://carbula.ar" />
      <link rel="alternate" hrefLang="es-CL" href="https://carbula.cl" />
      <link rel="alternate" hrefLang="es-MX" href="https://carbula.mx" />
      <link rel="alternate" hrefLang="es-UY" href="https://carbula.uy" />
      <link rel="alternate" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || defaultTitle} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="stylesheet" href="/reset.css" />
    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  keywords: string
}

export default Head