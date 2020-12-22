import styles from "./carousel.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Item from "./carouselItem"

export default function CarouselSection() {
    var slickOptions = {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
    }
    return (
        <div className={styles.carousel}>
            <div className="max-width">
                <h2>Recomendações:</h2>
                <Slider {...slickOptions}>
                    <Item n={1} title={"Organize seu tempo"}>
                        Verifique quanto tempo você tem disponível para realizar
                        o teste com eficiência então crie pequenas metas para
                        manter o ritmo.
                    </Item>
                    <Item n={2} title={"Tire suas dúvidas"}>
                        Se houver alguma dúvida, procure o aplicador do teste,
                        assim você terá melhores chances de entregar o que foi
                        proposto.
                    </Item>
                    <Item n={3} title={"Seja Criativo"}>
                        Existem várias formas de resolver uma questão de html e
                        css ou javascript, mostre que você domina a melhor.
                    </Item>
                </Slider>
            </div>
        </div>
    )
}
