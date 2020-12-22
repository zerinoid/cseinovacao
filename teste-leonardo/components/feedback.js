import styles from "./feedback.module.scss"

export default function Feedback() {
    return (
        <div className="max-width">
            <div className={styles.container}>
                <h3>Quer um feedback?</h3>
                <p>Preencha seu email abaixo</p>
            </div>
        </div>
    )
}
