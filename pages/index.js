import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('./home/homeIndex'))
const Catalogue = dynamic(() => import('./catalogue/catalogueIndex'))

export default function Main() {
  const { asPath } = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const host = `${origin}${asPath}`;
  const subdomain = host.split('.')[0].split('//')[1]
  return subdomain === 'catalogo' ? (<Catalogue/>) : (<Home/>)
}