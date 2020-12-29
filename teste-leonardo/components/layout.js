import Head from "next/head"
import styles from "./layout.module.scss"
import Footer from "./footer"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                {/* <link rel="icon" href="/icon.png" /> */}
                <meta name="description" content="Teste petz" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>
            <Navbar
                className={styles.navbar}
                collapseOnSelect
                expand="lg"
                sticky="top"
            >
                <Navbar.Brand href="#">
                    <img alt="Teste Inovação Logo" src="/images/LOGO.svg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="#">O desafio</Nav.Link>
                        <Nav.Link href="#">Recomendações</Nav.Link>
                        <Nav.Link href="#">Feedback</Nav.Link>
                        <Nav.Link href="#">A equipe</Nav.Link>
                        <Nav.Link href="#">Comentários</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <main>
                <Container fluid>
                    <Row>
                        {children}
                        <Footer></Footer>
                    </Row>
                </Container>
            </main>
        </>
    )
}
