import Head from "next/head"
import styles from "./layout.module.scss"
import Footer from "./footer"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Head>
                {/* <link rel="icon" href="/icon.png" /> */}
                <meta name="description" content="Teste petz" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>
            <Row className={styles.columnDir}>
                <Navbar className={styles.navbar} sticky="top">
                    <div className="max-width nav-flex">
                        <Navbar.Brand href="#">
                            <img
                                alt="Teste Inovação Logo"
                                src="/images/LOGO.svg"
                            />
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="#">O desafio</Nav.Link>
                            <Nav.Link href="#">Recomendações</Nav.Link>
                            <Nav.Link href="#">Feedback</Nav.Link>
                            <Nav.Link href="#">A equipe</Nav.Link>
                            <Nav.Link href="#">Comentários</Nav.Link>
                        </Nav>
                    </div>
                </Navbar>
                <main>{children}</main>
                <Footer></Footer>
            </Row>
        </Container>
    )
}
