import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className="max-width">
                <Row>
                    <Col md={9}>texto</Col>
                    <Col md={3}>redes</Col>
                </Row>
            </Container>
        </footer>
    )
}
