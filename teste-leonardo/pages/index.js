import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Carousel from "../components/carousel"
import Feedback from "../components/feedback"
import Equipe from "../components/equipe"
import Contato from "../components/contato"

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
            <Carousel />
            <Feedback />
            <Equipe />
            <Contato />
        </Layout>
    )
}
