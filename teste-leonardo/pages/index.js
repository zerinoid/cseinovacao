import Head from "next/head"
import styles from "../styles/Home.module.scss"
import layout from "../components/layout"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>conteudo principal</main>

            <footer className={styles.footer}>footer</footer>
        </div>
    )
}
