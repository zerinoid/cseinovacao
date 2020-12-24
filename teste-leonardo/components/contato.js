import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import styles from "./contato.module.scss"

export default function Contato() {
    return (
        <Container className={`max-width ${styles.container}`}>
            <Row>
                <Col>
                    <h3 className="mb-4">Gostou do teste?</h3>
                    <p>
                        Conte para nós oque você gostou no teste e o que você
                        mudaria para melhor avaliar um cadidato à essa vaga. Sua
                        opinião é importante para nós, queremos os melhores no
                        nosso time.
                    </p>
                </Col>
                <Col>
                    <Form>
                        <Form.Row className="mb-3">
                            <Col>
                                <Form.Control placeholder="Nome" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Sobrenome" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mb-3">
                            <Col>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Comentários"
                                />
                            </Col>
                        </Form.Row>
                        <Button className="ml-auto d-block px-5">ENVIAR</Button>
                    </Form>
                </Col>
            </Row>
            <div></div>
        </Container>
    )
}
