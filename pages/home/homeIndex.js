import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Head from '../../components/head'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head title='Marketplace autos usados | Carbula Autos' />
      <div className={styles.container + " bg-primary bg-gradient"}>
        <main className={styles.main}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img src="../images/carbula-catalogo.webp" className="img-fluid" alt="marketplace autos usados"></img>
              <img src="../images/logo.svg" className="img-fluid" alt="Cárbula Autos logo"></img>
              <h1 className="claim">Marketplace autos usados</h1>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                {/* <li className="list-group-item bg-transparent"><a href="https://www.carbula.ar/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgAR.svg" className={styles.icoflg} alt="Bandera AR"></img>Argentina</a></li> */}
                <li className="list-group-item bg-transparent"><a href="https://www.carbula.cl/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgCL.svg" className={styles.icoflg} alt="Bandera CL"></img>Chile</a></li>
                {/* <li className="list-group-item bg-transparent"><a href="https://www.carbula.mx/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgMX.svg" className={styles.icoflg} alt="Bandera MX"></img>México</a></li> */}
                <li className="list-group-item bg-transparent"><a href="https://www.carbula.pe/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgPE.svg" className={styles.icoflg} alt="Bandera PE"></img>Perú</a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  )
}
