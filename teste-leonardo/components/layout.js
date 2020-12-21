import Head from "next/head"
import Link from "next/link"
import styles from "./layout.module.scss"
import Footer from "./footer"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export default function Layout({ children, home }) {
    return (
        <Container>
            <Head>
                {/* <link rel="icon" href="/icon.png" /> */}
                <meta name="description" content="Teste petz" />
            </Head>
            <Navbar>
                <Navbar.Brand href="#">
                    <img alt="Teste Inovação Logo" src="/images/LOGO.svg" />
                </Navbar.Brand>
            </Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </Container>
    )
}
