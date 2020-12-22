import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "./carouselItem.module.scss"

export default function Item() {
    return (
        <Container className={styles.carContainer}>
            <Row>
                <Col className={styles.colNumber}>1</Col>
                <Col className={styles.colTitle}>Organize seu tempo</Col>
            </Row>
            <Row className={styles.rowBody}>
                Verifique quanto tempo você tem disponível para realizar o teste
                com eficiência então crie pequenas metas para manter o ritmo.
            </Row>
        </Container>
    )
}
