import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Contato() {
    return (
        <Container className="max-width">
            <Row>
                <Col>
                    <h3>Gostou do teste?</h3>
                    <p>
                        Conte para nós oque você gostou no teste e o que você
                        mudaria para melhor avaliar um cadidato à essa vaga. Sua
                        opinião é importante para nós, queremos os melhores no
                        nosso time.
                    </p>
                </Col>
                <Col>Form</Col>
            </Row>
            <div></div>
        </Container>
    )
}
