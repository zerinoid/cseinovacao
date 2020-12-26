import styles from "./banner.module.scss"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className="max-width">
                <p>
                    Criamos produtos <span>incríveis</span>
                </p>
                <p>
                    que vão <strong>impactar</strong> o mercado.
                </p>
                <p>
                    <strong>Você está pronto</strong> para
                </p>
                <p>
                    <strong>fazer parte desse time?</strong>
                </p>
            </div>
        </div>
    )
}
