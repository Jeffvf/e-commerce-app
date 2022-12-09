import { FaRegUserCircle } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from '../styles/searchBar.module.css';

export default function SearchBar(){
  return(
    <div className={styles.nav_search}>
      <h1 className={styles.title}>Compre+</h1>
      <form className={styles.search_form}role={'search'} action={'/'} method={'get'}>
        <input className={styles.input} type={'text'} aria-label='Buscar'></input>
        <button className={styles.submit_btn} type='submit' aria-label='Confirmar busca'>
            <BsSearch className={styles.search_icon}/>
        </button>
      </form>
      <div className={styles.icons_div}>
        <AiOutlineShoppingCart className={styles.nav_search_icon} aria-label='Carrinho'/>
        <FaRegUserCircle className={styles.nav_search_icon} aria-label='Perfil'/>
      </div>
    </div>
  )
}