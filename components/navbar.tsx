import styles from "./navbar.module.css";

export default function Navbar(){
  return(
    <nav className={styles.navbar}>
      <ul className={styles.navbar_options}>
        <li>Home</li>
        <li>Ofertas do Dia</li>
        <li>Populares</li>
        <li>Celulares</li>
        <li>Hardware</li>
        <li>Jogos</li>
      </ul>
    </nav>
  )
}