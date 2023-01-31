import Image from 'next/image'
import styles from '../../styles/Catalogue.module.css'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

export default function Catalogue() {
  const Head = dynamic(() => import('../../components/headCatalogue'))
  return (
    <Fragment>
      <Head title='Venta de autos usados | Catalogo Carbula Autos' />
      <div className={styles.container + " bg-primary bg-gradient"}>
        <main className={styles.main}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img src="../images/carbula-catalogo.webp" className="img-fluid" alt="venta de autos usados"></img>
              <img src="../images/logo.svg" className="img-fluid" alt="Cárbula Autos logo"></img>
              <h1 className="claim">Venta de autos usados</h1>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.ar/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgAR.svg" className={styles.icoflg} alt="Bandera AR"></img>Argentina</a></li>
                <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.cl/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgCL.svg" className={styles.icoflg} alt="Bandera CL"></img>Chile</a></li>
                <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.mx/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgMX.svg" className={styles.icoflg} alt="Bandera MX"></img>México</a></li>
                <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.pe/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgPE.svg" className={styles.icoflg} alt="Bandera PE"></img>Perú</a></li>
                {/* <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.uy/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgUY.svg" className={styles.icoflg} alt="Bandera UY"></img>Uruguay</a></li> */}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  )
}
