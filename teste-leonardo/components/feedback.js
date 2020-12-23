import styles from "./feedback.module.scss"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

export default function Feedback() {
    return (
        <div className="max-width">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3>Quer um feedback?</h3>
                    <p>Preencha seu email abaixo para receber</p>
                    <p>o feedback da sua avaliação.</p>
                    <p>Estamos tocendo por você!</p>
                    <InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite seu email aqui..."
                                aria-label="Digite seu email aqui..."
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button>ENVIAR</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}
