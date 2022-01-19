import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from '../components/head'

export default function Home() {
  return (
    <div className={styles.container + " bg-primary bg-gradient"}>
      <main className={styles.main}>
      <Head title="Cárbula" />
      <div className="row  justify-content-center align-items-center">
        <div className="col-md-6">
          <img src="../images/logo.svg" className="img-fluid" alt="Logo"></img>
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent"><a href="https://www.carbula.ar/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgAR.svg" className={styles.icoflg} alt="Bandera AR"></img>Argentina</a></li>
            <li className="list-group-item bg-transparent"><a href="https://www.carbula.cl/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgCL.svg" className={styles.icoflg} alt="Bandera CL"></img>Chile</a></li>
            <li className="list-group-item bg-transparent"><a href="https://www.carbula.mx/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgMX.svg" className={styles.icoflg} alt="Bandera MX"></img>Mexico</a></li>
            <li className="list-group-item bg-transparent"><a href="https://www.carbula.uy/" className="btn btn-outline-light border-0" role="button"><img src="../images/banderas/flgUY.svg" className={styles.icoflg} alt="Bandera UY"></img>Uruguay</a></li>
          </ul>
        </div>
      </div>
      </main>
    </div>
  )
}
