import Image from 'next/image'
import styles from "../styles/Home.module.css"

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <a href='https://github.com/Jeffvf' target="_blank" rel="noopener noreferrer">
        Copyright © 2022 Jeffvf
        <span className={styles.logo}>
          <Image src="/github-logo.png" alt="" width={32} height={32}/>
        </span>
      </a>
    </footer>
  )
}