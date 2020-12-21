import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>conteudo principal</p>
        </Layout>
    )
}
