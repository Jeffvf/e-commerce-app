import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import styles from '../styles/searchBar.module.css';

export default function SearchBar(){
  return(
    <div className={styles.nav_search}>
      <GiHamburgerMenu className={styles.nav_search_icon} aria-label='Menu lateral'/>
      <form className={styles.search_form}role={'search'} action={'/'} method={'get'}>
        <input className={styles.input} type={'text'} aria-label='Buscar'></input>
        <button className={styles.submit_btn} type='submit' aria-label='Confirmar busca'>
            <BsSearch className={styles.search_icon}/>
        </button>
      </form>
      <FaUserCircle className={styles.nav_search_icon} aria-label='Perfil'/>
    </div>
  )
}