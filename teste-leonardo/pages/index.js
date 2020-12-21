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
            <div>banner</div>
            <div>carousel</div>
            <div>feedback</div>
            <div>a equipe</div>
            <div>recomende</div>
        </Layout>
    )
}
