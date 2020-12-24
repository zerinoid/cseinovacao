import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className="max-width">
                <Row>
                    <Col md={9}>
                        <p>
                            <strong>FIM DO TESTE!</strong>
                        </p>
                        <p className="mb-5">
                            <strong>TesteInovação</strong> é uma marca fictícia
                            com a única finalidade
                            <br />
                            de servir como material de estudo da equipe de
                            inovação <br />
                            do Grupo Comunique-se.
                        </p>
                        <p>IMPORTANTE: Não Compartilhe esse teste.</p>
                    </Col>
                    <Col md={3}>
                        <div className={styles.redes}>
                            <a
                                href="https://br.pinterest.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Pinterest"
                                    src="/images/pinterest.svg"
                                />
                            </a>
                            <a
                                href="https://www.skype.com/en/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img alt="Skype" src="/images/skype.svg" />
                            </a>
                            <a
                                href="https://www.tumblr.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img alt="Tumblr" src="/images/tumblr.svg" />
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img alt="YouTube" src="/images/youtube.svg" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
