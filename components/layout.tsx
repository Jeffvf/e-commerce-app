import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import styles from "../styles/layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }){
  return(
    <>
      <Head>
        <title>Compre+</title>
        <meta name="description" content="Realize compras online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}> {children} </main>
      <Footer/>
    </>
  )
}