import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Head from '../../components/headCatalogue'
import { Fragment } from 'react'

export default function Catalogue() {
  return (
    <Fragment>
      <Head title='Venta de Autos Usados | Catalogo Carbula Autos' />
      <div className={styles.container + " bg-primary bg-gradient"}>
        <main className={styles.main}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img src="../images/logo.svg" className="img-fluid" alt="Cárbula logo"></img>
              <h1 className="claim">Venta de Autos Usados</h1>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.ar/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgAR.svg" className={styles.icoflg} alt="Bandera AR"></img>Argentina</a></li>
                <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.cl/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgCL.svg" className={styles.icoflg} alt="Bandera CL"></img>Chile</a></li>
                <li className="list-group-item bg-transparent"><a href="https://catalogo.carbula.mx/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgMX.svg" className={styles.icoflg} alt="Bandera MX"></img>México</a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  )
}
