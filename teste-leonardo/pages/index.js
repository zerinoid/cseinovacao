import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Layout from "../components/layout"
import Banner from "../components/banner"
import CarouselSection from "../components/carousel"

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
            <CarouselSection />
            <div>feedback</div>
            <div>a equipe</div>
            <div>recomende</div>
        </Layout>
    )
}
