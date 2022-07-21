import dynamic from 'next/dynamic'
import { getSubdomain } from '../utils/helpers'

const Home = dynamic(() => import('./home/homeIndex'))
const Catalogue = dynamic(() => import('./catalogue/catalogueIndex'))

export default function Main() {
  const subdomain = getSubdomain()
  return subdomain === 'catalogo' ? (<Catalogue/>) : (<Home/>)
}