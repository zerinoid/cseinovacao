import Head from "next/head"
import Link from "next/link"
import styles from "./layout.module.scss"
import Footer from "./footer"

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {/* <link rel="icon" href="/icon.png" /> */}
                <meta name="description" content="Teste petz" />
            </Head>
            <nav>
                <img alt="" src="/images/LOGO.svg" />
            </nav>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}
