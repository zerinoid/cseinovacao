import Head from "next/head"
import styles from "./layout.module.scss"
import Footer from "./footer"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Head>
                {/* <link rel="icon" href="/icon.png" /> */}
                <meta name="description" content="Teste petz" />
            </Head>
            <Navbar>
                <Navbar.Brand href="#">
                    <img alt="Teste Inovação Logo" src="/images/LOGO.svg" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#">O desafio</Nav.Link>
                    <Nav.Link href="#">Recomendações</Nav.Link>
                    <Nav.Link href="#">Feedback</Nav.Link>
                    <Nav.Link href="#">A equipe</Nav.Link>
                    <Nav.Link href="#">Comentários</Nav.Link>
                </Nav>
            </Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </Container>
    )
}
