import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import { useRouter } from 'next/router'
import { getCountryCode, getFacebookDomainVerification } from '../utils/helpers'

const defaultTitle = 'Marketplace autos usados | Carbula Autos'
const defaultDescription = 'Vende tu auto usado desde tu hogar y gana hasta 25% más de dinero ✓ Garantizamos el cobro seguro de la venta ✓ Nos encargamos de todos los trámites'
const defaultKeywords = 'marketplace de compra y venta de autos usados, cartech, autos usados Argentina, autos usados Mendoza, compra y venta autos usados Argentina, compra y venta autos usados Mendoza, carros usados Chile, carros usados Santiago de Chile, coches usados México, coches usados Ciudad de México, compra y venta coches usados México, compra y venta coches usados Ciudad de México, venta autos usados, compra por internet, compra online de vehículos, venta online de vehículos, carros usados hasta 150000 kilómetros, coches usados hasta 150000 kilómetros, vehículos usados hasta 150000 kilómetros, autos usados hasta 150000 kilómetros, autos seminuevos Ciudad de México, vehículos seminuevos Ciudad de México, coches seminuevos Ciudad de México, carros seminuevos Ciudad de México, autos seminuevos Santiago de Chile, autos seminuevos Argentina'
const defaultOGURL = '/images/carbula-preview.jpg'
const defaultOGImage = '/images/carbula-preview.jpg'

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
      <meta name="robots" content="index,follow"/> 
      <meta name="googlebot" content="index,follow"/>
      <meta name="facebook-domain-verification" content={getFacebookDomainVerification(COUNTRY_CODE)} />
      <link rel="icon" sizes="192x192" href="/icons/favicon_196.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" hrefLang="x-default" href="https://www.carbula.com"/>
      <link rel="alternate" hrefLang="es-AR" href="https://www.carbula.ar" />
      <link rel="alternate" hrefLang="es-CL" href="https://www.carbula.cl" />
      <link rel="alternate" hrefLang="es-MX" href="https://www.carbula.mx" />
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