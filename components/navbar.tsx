import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar(){
  return(
    <nav className={styles.navbar}>
      <ul className={styles.navbar_options}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ofertas">Ofertas do Dia</Link>
        </li>
        <li>Populares</li>
        <li>
          <Link href="/categoria/celulares">Celulares</Link>
        </li>
        <li>
          <Link href="/categoria/hardware">Hardware</Link>
        </li>
        <li>
          <Link href="/categoria/jogos">Jogos</Link>
        </li>
      </ul>
    </nav>
  )
}